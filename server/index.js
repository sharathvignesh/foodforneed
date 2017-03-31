// server/index.js
'use strict';

//const app = require('./app');
const app = require('./dev');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
