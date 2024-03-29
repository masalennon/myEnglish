/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
	title: 'mypage',
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  { hid: 'description', name: 'description', content: 'Nuxt.js project' }
	],
	link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
	/*
	 ** Run ESLint on save
	 */
	extend (config, { isDev, isClient }) {
	  if (isDev && isClient) {
		config.module.rules.push({
		  enforce: 'pre',
		  test: /\.(js|vue)$/,
		  loader: 'eslint-loader',
		  exclude: /(node_modules)/
		})
	  }
	}
  },
  modules: [
	'bootstrap-vue/nuxt',
  ],
  css: [
    // SCSS file in the project
	'@/src/assets/scss/app.scss',
    // CSS file in the project
	// Load a Node.js module directly (here it's a Sass file)
  ],
  router: {
  }
}
