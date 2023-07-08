const usersRouter = require('express').Router()
const { User } = require('../db/models')

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      raw: true,
    });
  
      res.json(users);

    } catch (e) {
      console.log(e);
    }
  });

  usersRouter.post('/add', async (req, res) => {
    const { username, phone, email, register_date, code, city } = req.body.data;
    try {
      const newUser = await User.create({
        username,
        phone,
        email,
        register_date,
        code,
        city,
      });
  
      res.json(newUser);

    } catch (e) {
      console.log(e);
    }
  });

  usersRouter.delete('/remove/:id', async (req, res) => {
    const userId = Number(req.params.id);
    try {
      const findUser = await User.findOne({ where: { id: userId } });
  
        if (findUser) {
          await findUser.destroy();
          res.sendStatus(204);
        } else {
          res.sendStatus(404);
        }
      return res.status(401).end();
    } catch (e) {
      console.log(e)
    }
  });

  usersRouter.put('/upd/:id', async (req, res) => {
    const userId = Number(req.params.id);
    const { username, phone, email, register_date, code, city } = req.body.data;
    try {
      const result = await User.update({ 
        username, 
        phone, 
        email, 
        register_date, 
        code, 
        city
       }, {
        where: {
        id: userId
        }
       });
  
      res.json(result);

    } catch (e) {
      console.log(e);
    }
  });

module.exports = usersRouter;