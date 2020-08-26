const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/new', (req, res) => {
  res.render('posts/new', { post: new Post() })
})

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  if ( post == null) res.redirect('/')
  res.render('posts/show', { post: post })
})

router.post('/', async (req, res) => {
  let post = new Post({
    title: req.body.title,
    description: req.body.description, 
    markdown: req.body.markdown 
  })
  try {
    // called asynchronously
    post = await post.save()
    res.redirect(`/posts/${post.id}`)
  } catch (e) {
    res.render('posts/new', { post: post })
  }
})

module.exports = router