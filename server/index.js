const express = require('express');


const app = express();

let port = process.env.PORT;
if (port === undefined || port === '') {
  port = 3000;
}

app.use(express.static('dist'));

app.listen(port, () => console.log(`Jeopardy! is listening on port ${port}`));
