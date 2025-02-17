# Node.js Server Hang on Client Disconnect

This repository demonstrates a common issue in Node.js servers where the server hangs if a client disconnects before a long-running asynchronous operation completes.  The example uses Express.js to handle a simple GET request with a 5-second delay. If the client disconnects before the delay is finished, the server will not properly handle the event and can become unresponsive.

The solution provided shows how to handle such situations using proper event handling and avoiding blocking the event loop.