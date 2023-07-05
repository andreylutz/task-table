const express = require('express');

const app = express();
const mainConfig = require('./config/mainConfig');

mainConfig(app);

// ===>server
const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  console.log(`Server started PORT: ==>${PORT}<==`);
});