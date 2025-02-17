const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Wait 5 seconds
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Problem: The server will hang indefinitely if the client disconnects before the 5-second timeout in the GET request is over.