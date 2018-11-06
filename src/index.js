// routes

export default [
	{
		path: '/(index|home|list)?',
		controller: () => import('./page/home/Controller'),
	},
	{
		path: '/topic/:topicId',
		controller: () => import('./page/detail/Controller'),
	},
	{
		path: '/login',
		controller: () => import('./page/login/Controller'),
	},
	{
		path: '/user/:loginname',
		controller: () => import('./page/user/Controller'),
	},
	{
		path: '/add',
		controller: () => import('./page/add/Controller'),
	},
	{
		path: '/message',
		controller: () => import('./page/message/Controller'),
	},
	{
		path: '/about',
		controller: () => import('./page/about/Controller'),
	},
	{
		path: '*',
		controller: () => import('./page/home/Controller'),
	}
]