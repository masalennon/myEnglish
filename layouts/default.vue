<template>
  <div>
	<nav class="navbar navbar--extend navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand nav-link--extend" href="/">Self-Learning English</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link nav-link--extend" href="/profile">講師プロフィール<span class="sr-only">(current)</span></a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link nav-link--extend" href="/content">サービス内容</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link nav-link--extend" href="/price">料金</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link nav-link--extend" href="/apply">お申し込みはこちら</a>
		  </li>
		</ul>
	  </div>
	</nav>
	<!--<b-nav fill tabs>-->
	  <!--<b-nav-item to="/">Top</b-nav-item>-->
	  <!--<b-nav-item to="/profile">Profile</b-nav-item>-->
	  <!--<b-nav-item to="/price">Price </b-nav-item>-->
	  <!--<b-nav-item to="/content">Content</b-nav-item>-->
	  <!--</b-nav>-->
	<nuxt/>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import '../src/assets/scss/app.scss';

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.navbar--extend {
  position: fixed;
  width: 100%;
  height: 110px;
  background-color: rgba(0,0,0,.5) !important;
}



.container-main {
  padding-top: 130px;
}

article {
  padding-top: 130px;
}

.nav-link--extend {
  color: white !important;
}

.nav-link--extend:hover {
  box-shadow: inset 0 -2px orange;
  color: hsla(0,0%,100%,.75) !important;
}
</style>
