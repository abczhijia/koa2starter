module.exports = function () {
    return async function (ctx, next) {
        const startTime = new Date().getTime();
        await next();
        console.log('logger: ', ctx.method, ctx.header.host, ctx.url, new Date().getTime() - startTime, 'ms');
    }
}