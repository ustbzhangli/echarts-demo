export default {
	'/demo': {
		meta: { title: 'demo' },
		component: (resolve) => {
			require(['pages/demo'], resolve)
		}
	},
	'/hello': {
		meta: { title: 'Hello World' },
		component: (resolve) => {
			require(['pages/hello'], resolve)
		}
	}
}
