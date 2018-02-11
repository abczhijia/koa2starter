async function index (ctx, next) {
    const user = await ctx.service.user.getUserById(2);
    console.log('user: ', user);
    await ctx.render('index.html');
}

async function about (ctx, next) {
    await ctx.render('about.html');
}

module.exports = {
    index,
    about,
}