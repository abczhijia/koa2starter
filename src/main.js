const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000;

router.get('/', function(ctx, next) {
    ctx.body = 'index page';
});

router.get('/about', function(ctx, next) {
    ctx.body = 'about page';
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(port, function() {
    console.log(`server is listen on ${port}`);
});
