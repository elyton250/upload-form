const express = require('express');
const router = express.Router();
const { createPost, getPosts, test } = require('../controller/createPost');

router.post('/posts', createPost);

router.get('/posts', getPosts);

router.get('/test', test);

module.exports = router;
