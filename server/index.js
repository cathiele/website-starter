const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('website'));

app.listen(port);
console.log(`Server: http://localhost:${port}`);
