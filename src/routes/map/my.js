const My = resolve => require(['views/my/my.vue'], resolve)

export default [
	{
		path: '/my',
		name: 'my',
		component: My,
		meta: {
			title: 'My'
		}
	}
]