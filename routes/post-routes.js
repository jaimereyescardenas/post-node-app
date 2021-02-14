const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/posts', async (req, res, next) => {
    const posts = await Post.findAll();
    res.send(posts.map(post => post.toJSON()));
});

router.post('/post', async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;

    const post = await Post.create( { title: title, description: description } );

    res.status(201).send(post.toJSON());
});

router.delete('/post', async (req, res, next) => {
    const id = req.body.id;

    const post = await Post.findAll({
        where: {
            id: id
        }
    });
    
    await Post.destroy({
        where: {
            id: id
        }
    })
    .catch();

    res.status(201).send(post.map(p => p.toJSON()));
});

module.exports = router;
