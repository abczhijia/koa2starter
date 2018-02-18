async function index (ctx, next) {
	console.log('ctx.query: ', ctx.request.query);
	await ctx.render('user.html');
}

async function createUser (ctx, next) {
	console.log('ctx.request.body: ', ctx.request.body);
	ctx.body = {};
}

module.exports = {
	index,
	createUser,
};