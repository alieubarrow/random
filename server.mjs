import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

let requestCount = 0;

function countRequests(req, res, next) {
  requestCount++;
  if (requestCount % 10 === 0) {
    console.log(`Total requests received for random-person: ${requestCount}`);
  }
  next();
}

app.use('/random-person', countRequests);

app.get('/random-person', (req, res) => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error occurred while fetching random person data');
    });
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});