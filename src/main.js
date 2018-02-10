const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const router = require('./router');

const app = new Koa();
const port = 3000;

app.use(views(path.join(__dirname, 'views'), {
    map: {html: 'nunjucks'}
}));
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, function() {
    console.log(`server is listen on ${port}`);
});
