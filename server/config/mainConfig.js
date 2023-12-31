const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mainConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
};

module.exports = mainConfig;
