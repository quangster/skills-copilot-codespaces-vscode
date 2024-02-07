// Create web server
// Create a server that listens on port 3000
// Create a route for GET /comments that sends back a JSON object with the following comments:
//   - "This is the first comment"
//   - "This is the second comment"
//   - "This is the third comment"
// Create a route for POST /comments that adds a new comment to the list of comments and sends back a JSON object with the new comments list. The comments list should be in the following format:
//   [
//     "This is the first comment",
//     "This is the second comment",
//     "This is the third comment",
//     "This is a new comment"
//   ]

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const comments = [
  "This is the first comment",
  "This is the second comment",
  "This is the third comment"
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body.comment;
  comments.push(newComment);
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});