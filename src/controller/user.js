async function index (ctx, next) {
    await ctx.render('user.html');
}

module.exports = { 
    index,
};