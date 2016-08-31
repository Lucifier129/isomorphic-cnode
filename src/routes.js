// routes

export default [
	{
		path: '/(index|home|list)?',
		controller: './page/home/controller',
	},
	{
		path: '/topic/:topicId',
		controller: './page/detail/controller',
	},
	{
		path: '/login',
		controller: './page/login/controller',
	},
	{
		path: '/user/:loginname',
		controller: './page/user/controller',
	},
	{
		path: '/add',
		controller: './page/add/controller',
	},
	{
		path: '/message',
		controller: './page/message/controller',
	},
	{
		path: '/about',
		controller: './page/about/controller',
	},
	{
		path: '*',
		controller: './page/home/controller',
	}
]