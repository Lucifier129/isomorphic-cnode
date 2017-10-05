// routes

export default [
	{
		path: '/(index|home|list)?',
		controller: require('./page/home/Controller'),
	},
	{
		path: '/topic/:topicId',
		controller: require('./page/detail/Controller'),
	},
	{
		path: '/login',
		controller: require('./page/login/Controller'),
	},
	{
		path: '/user/:loginname',
		controller: require('./page/user/Controller'),
	},
	// {
	// 	path: '/add',
	// 	controller: require('./page/add/controller'),
	// },
	// {
	// 	path: '/message',
	// 	controller: require('./page/message/controller'),
	// },
	{
		path: '/about',
		controller: require('./page/about/controller'),
	},
	{
		path: '*',
		controller: require('./page/home/controller'),
	}
]