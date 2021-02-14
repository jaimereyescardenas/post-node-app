const path = require('path');

const express = require('express');
const router = express.Router();

const Post = require('../models/Post');
const rootDir = require('../helpers/path');

router.get('/posts', async (req, res, next) => {
    const posts = await Post.findAll();
    res.send(posts.map(post => post.toJSON()));
});

router.post('/post', async (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;

    const post = await Post.create( { name: name, description: description } );

    res.status(201).send(post.toJSON());
});

router.delete('/post', async (req, res, next) => {
    const id = req.body.id;
    
    const post = await Post.destroy({
        where: {
            id: id
        }
    });

    res.status(201).send({ deleted: true });
});

module.exports = router;
