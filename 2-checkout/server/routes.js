const router = require('express').Router();
const controllers = require('./controllers');


router.get('/', controllers.get);
router.post('/', controllers.post);

module.exports = router;