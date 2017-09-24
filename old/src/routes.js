// routes

export default [
	{
		path: '/(index|home|list)?',
		controller: require('./page/home/controller'),
	},
	{
		path: '/topic/:topicId',
		controller: require('./page/detail/controller'),
	},
	{
		path: '/login',
		controller: require('./page/login/controller'),
	},
	{
		path: '/user/:loginname',
		controller: require('./page/user/controller'),
	},
	{
		path: '/add',
		controller: require('./page/add/controller'),
	},
	{
		path: '/message',
		controller: require('./page/message/controller'),
	},
	{
		path: '/about',
		controller: require('./page/about/controller'),
	},
	{
		path: '*',
		controller: require('./page/home/controller'),
	}
]