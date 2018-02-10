const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(function(ctx, next) {
    ctx.body = 'hello word'
});

app.listen(port, function() {
    console.log(`server is listen on ${port}`);
});
