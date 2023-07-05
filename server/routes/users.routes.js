const usersRouter = require('express').Router()
const { User } = require('../db/models')

usersRouter.get('/', async (req, res) => {
    const users = await User.findAll({
      raw: true,
    });
  
    res.json(users);
  });

module.exports = usersRouter;