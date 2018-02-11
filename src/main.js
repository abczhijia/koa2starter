const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static');
const router = require('./router');
const logger = require('./middleware/logger');
const model = require('./model/index');
const service = require('./service/index');

const app = new Koa();
const port = 3000;

app.use(logger());

//挂载model和service到ctx上
app.use(async (ctx, next) => {
    ctx.model = model;
    ctx.service = service;
    await next();
});

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
