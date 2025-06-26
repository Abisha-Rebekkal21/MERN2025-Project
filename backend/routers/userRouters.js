const express = require('express');
const router = express.Router();
const{getRoute, signupRoute, putRoute, deleteRoute, getRouterById, loginRoute} = require('../controllers/userControllers')

router.get('/get',getRoute);

router.get('/get/:id',getRouterById);

router.post('/signup',signupRoute);

router.post('/login',loginRoute);

router.put('/put/:id',putRoute);

router.delete('/delete/:id',deleteRoute);

module.exports = router;