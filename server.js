const express = require('express');
const mongoose = require('mongoose');
const postRouter= require('./routes/posts');
const Post = require('./models/post')
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use('/posts', postRouter);

app.get('/', async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: 'desc' })
  res.render('posts/index', { posts: posts })
})


app.listen(3000)