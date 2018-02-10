const Koa = require('koa');
const router = require('./router');

const app = new Koa();
const port = 3000;

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, function() {
    console.log(`server is listen on ${port}`);
});
