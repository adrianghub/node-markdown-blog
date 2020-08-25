const express = require('express');
const mongoose = require('mongoose');
const postRouter= require('./routes/posts');
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.set('view engine', 'ejs');

app.use('/posts', postRouter);

app.get('/', (req, res) => {
  const posts = [
    {
    title: 'Test Post 🤘🤘🤘',
    createdAt: new Date(),
    description: 'Test description'
    },
    {
      title: 'Test Post 😀😀😀',
      createdAt: new Date(),
      description: 'Test description'
      },
  ]
  res.render('posts/index', { posts: posts })
})


app.listen(3000)