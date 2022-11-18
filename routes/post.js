// const express = require('express');
// const controller = require('../controller/Cpost');
// const router = express.Router();

// const user_controller = require('../controller/Cuser');

// router.get('/', controller.main);

// router.get('/user/signin', user_controller.signin);
// router.get('/user/signup', user_controller.signup);

// router.post('/user/signin', user_controller.postSignin);
// router.post('/user/signup', user_controller.postSignup);

// router.post('/user/profile',user_controller.postProfile);
// router.post('/user/profile/edit',user_controller.patchProfile);
// router.post('/user/profile/delete',user_controller.deleteProfile);


// module.exports = router;

// =========================================================================================

const express = require('express');
const controller = require('../controller/Cpost');
const router = express.Router();

router.get('/',controller.postView);
router.get('/upload',controller.Upload);


router.post('/postUpload',controller.postUpload);
router.post('/postViewOne',controller.postViewOne);

module.exports = router;