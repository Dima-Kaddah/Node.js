const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.port || 3000;

app.use(express.json());

//post-create data
app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??
  let title = req.body.title;
  let content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});

// Updating existing posts//only change the conent of the file which is the title name
app.put('/blogs/:title', (req, res) => {
  // How to get the title and content from the request??
  let title = req.params.title;
  let newTitle = req.body.title;
  let content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(newTitle, content);
    res.end('ok');
  } else {
    res.end('post does not exist');
  }
});

// Deleting posts
app.delete('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  let title = req.params.title;
  fs.unlinkSync(title);
  res.end('ok');
});

//get
app.get('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  let title = req.params.title;
  res.sendfile(title);
  res.end('ok');
});

app.listen(port, () => console.log(`Listening to Port ${port}`));
