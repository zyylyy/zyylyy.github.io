const Hemo = resolve => require(['views/hemo/hemo.vue'], resolve)

export default [
	{
		path: '/hemo',
		name: 'hemo',
		component: Hemo,
		meta: {
			title: 'Hemo'
		}
	}
]