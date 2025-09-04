const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello from Cloud Run + Cloud Build! Google Cloud é Massa! vários aprendizados');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
