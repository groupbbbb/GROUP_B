const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);
router.post('/idCheck', controller.idCheck);

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

module.exports = router;