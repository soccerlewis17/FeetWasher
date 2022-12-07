var express = require('express');
var router = express.Router();
const requestsCtrl = require('../controllers/requests');
const isLoggedIn = require('../config/auth')


router.get('/new', isLoggedIn, requestsCtrl.new);
router.get('/', requestsCtrl.index);
router.get('/:id', isLoggedIn, requestsCtrl.show);
router.post('/', isLoggedIn, requestsCtrl.create);

module.exports = router;