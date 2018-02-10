const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static');
const router = require('./router');
const logger = require('./middleware/logger');

const app = new Koa();
const port = 3000;

app.use(logger());

//静态资源
app.use(static(path.join(__dirname, 'static'), {
    gzip: true, maxage:999999}
));

//模板
app.use(views(path.join(__dirname, 'views'), {
    map: {html: 'nunjucks'}
}));

//路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, function() {
    console.log(`server is listen on ${port}`);
});
