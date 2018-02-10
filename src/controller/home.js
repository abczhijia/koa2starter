function index (ctx, next) {
    ctx.body = 'index page';
}

function about (ctx, next) {
    ctx.body = 'about page';
}

module.exports = {
    index,
    about,
}