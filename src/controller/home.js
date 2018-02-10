async function index (ctx, next) {
    await ctx.render('index.html');
}

async function about (ctx, next) {
    await ctx.render('about.html');
}

module.exports = {
    index,
    about,
}