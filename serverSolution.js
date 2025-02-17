const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  const timeoutId = setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Wait 5 seconds
  req.on('close', () => {
    // Clear the timeout if the client disconnects
    clearTimeout(timeoutId);
    console.log('Client disconnected, request aborted');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});