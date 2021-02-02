const express = require('express');
const usersModel = require('../models/users.model');
const router = express.Router();
var bcrypt = require('bcryptjs');

router.post('/register', async function (req, res) {
  const user = req.body;
  user.User_Role = 1;
  user.User_Password = bcrypt.hashSync(user.User_Password, 10);
  user.User_ID = await usersModel.add(user);
  delete user.User_Password;

  res.status(201).json(user);
});

router.get('/', async function (req, res) {
  const { role = '' } = req.query;
  const list = await usersModel.getUsers(role.split(','));

  res.json(list);
});

router.post('/', async function (req, res) {
  const user = req.body;
  console.log('req.body', req.body);
  const id = await usersModel.add(user);
  res.status(201).json({ ...user, User_ID: id });
});

router.put('/', async function (req, res) {
  const {User_ID, ...user} = req.body;
  console.log('put', req.body);

  const id = await usersModel.update(User_ID, user);
  res.status(201).json(req.body);
});

router.delete('/:id', async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }

  await usersModel.delete(id);

  res.json({
    message: 'delete success',
  });
});

module.exports = router;
