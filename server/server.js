import express from 'express';
import io from 'socketio';

// Application (express).
const app = express();
// Port of the server.
const port = process.env.PORT || 3000;


/*

    ROUTES GO HERE.

*/


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});