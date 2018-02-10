const Router = require('koa-router');
const router = new Router();
const home = require('./controller/home');
const user = require('./controller/user');

router.get('/', home.index);
router.get('/about', home.about);
router.get('/user', user.index);

module.exports = router;