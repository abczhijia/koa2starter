const Router = require('koa-router');
const router = new Router();

router.get('/', function(ctx, next) {
    ctx.body = 'index page';
});

router.get('/about', function(ctx, next) {
    ctx.body = 'about page';
});

module.exports = router;