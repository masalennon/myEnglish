<template>
  <div>
	<nav class="navbar navbar--extend navbar-expand-lg">
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
	<div class="copyright">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  </div>
</template>
<script>
</script>
<style lang="scss">

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p {
  text-align: center;
  font-size: 22px;
  width: 60% !important;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px; 
}
/* ↑margin-top:130pxを入れると重ならないで綺麗にモバイルで表示される。*/

h1 {
  text-align: center;
}




article .life-advice {
  padding-top: 40px; 
}

.container {
  max-width: 100%;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 50px;
}

.copyright {
  text-align: center;
  margin-top: 30px;
  bottom: 0px;
  padding-bottom: 20px;
}

article {
}

.navbar {
  background-color: rgba(0, 0, 0, .5) !important;
}

.nav-link--extend {
  color: white !important;
}

.nav-link--extend:hover {
  box-shadow: inset 0 -2px orange;
  color: hsla(0,0%,100%,.75) !important;
}
@import '../src/assets/scss/app.scss';

</style>
