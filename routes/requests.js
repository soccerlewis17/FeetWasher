var express = require('express');
var router = express.Router();
const requestsCtrl = require('../controllers/requests');
const isLoggedIn = require('../config/auth')


router.get('/newService', isLoggedIn, requestsCtrl.newService);
router.get('/newPrayer', isLoggedIn, requestsCtrl.newPrayer);
router.get('/', requestsCtrl.index);
router.get('/:id', isLoggedIn, requestsCtrl.show);
router.post('/', isLoggedIn, requestsCtrl.create);
router.delete('/:id', isLoggedIn, requestsCtrl.delete);


module.exports = router;