var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth')

router.post('/requests/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);
module.exports = router;