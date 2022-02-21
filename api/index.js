const express = require('express');
const app = express(),
  bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("/app/code/"));

app.listen(port, () => {
  console.log(`Server listening on port::${port}`);
});
