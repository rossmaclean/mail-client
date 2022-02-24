const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('/app/code/web'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening on port::${port}`);
});
