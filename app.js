const express = require('express');
const app = express();
const port = 8080;

const message = 'Hello, is it me you\'re looking for? I can see it in your eyes, I can see it in your smile. You\'re all that I ever wanted and my arms are open wide.'

app.get('/', (req, res) => res.send(message));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
