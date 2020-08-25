const express = require('express');
const postRouter= require('./routes/posts');
const app = express();

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
  res.render('index', { posts: posts })
})


app.listen(3000)