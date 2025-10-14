const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const redis = require('redis');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Redis client
const redisClient = redis.createClient({ url: 'redis://redis:6379' });
redisClient.connect().catch(console.error);

// MongoDB client
const mongoClient = new MongoClient('mongodb://db:27017');
let postsCollection;

async function init() {
  await mongoClient.connect();
  const db = mongoClient.db('blogdb');
  postsCollection = db.collection('posts');
}

// Helper
function sendWithSource(res, source, data) {
  return res.json({ source, data });
}

// GET /api/posts - all posts (with cache)
app.get('/api/posts', async (req, res) => {
  try {
    const cacheKey = 'posts:all';
    const cached = await redisClient.get(cacheKey);
    if (cached) return sendWithSource(res, 'cache', JSON.parse(cached));

    console.log('Cache MISS: posts:all');
    const posts = await postsCollection.find().sort({ _id: -1 }).toArray();
    await redisClient.set(cacheKey, JSON.stringify(posts), { EX: 60 });
    return sendWithSource(res, 'database', posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/posts/:id - get post (with cache)
app.get('/api/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cacheKey = `posts:${id}`;
    const cached = await redisClient.get(cacheKey);
    if (cached) return sendWithSource(res, 'cache', JSON.parse(cached));

    const post = await postsCollection.findOne({ _id: new ObjectId(id) });
    if (!post) return res.status(404).json({ error: 'Not found' });

    await redisClient.set(cacheKey, JSON.stringify(post), { EX: 60 });
    return sendWithSource(res, 'database', post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/posts - create post (invalidate cache)
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'title and content required' });

    const result = await postsCollection.insertOne({ title, content, createdAt: new Date() });
    await redisClient.del('posts:all');

    const newPost = await postsCollection.findOne({ _id: result.insertedId });
    res.status(201).json({ message: 'created', data: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/posts/:id - delete post (invalidate caches)
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await postsCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Not found' });

    await redisClient.del('posts:all');
    await redisClient.del(`posts:${id}`);

    res.json({ message: 'deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
init()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to initialize services', err);
    process.exit(1);
  });
