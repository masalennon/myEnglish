<template>
  <div>
	<b-navbar class="sticky-top additional" toggleable="md" type="dark" variant="dark">

	  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

	  <b-navbar-brand href="/">
		<img style="height: 40px;" :src="require('../assets/leaves.svg')" />
	  </b-navbar-brand>

	  <b-collapse is-nav id="nav_collapse">

		<b-navbar-nav>
		  <b-nav-item href="/">TOP</b-nav-item>
		  <div class="dropdown-divider"></div>
		  <b-nav-item href="/content">サービス内容</b-nav-item>
		  <div class="dropdown-divider"></div>
		  <b-nav-item href="/price">料金</b-nav-item>
		  <div class="dropdown-divider"></div>
		  <b-nav-item href="/profile">講師プロフィール</b-nav-item>
		  <div class="dropdown-divider"></div>
		  <b-nav-item href="/apply">お申し込みはこちら</b-nav-item>
		  <div class="dropdown-divider"></div>
		</b-navbar-nav>
	  </b-collapse>
	</b-navbar>

	<nuxt/>
	<div class="copyright">
	  Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
	  <a href="http://www.freepik.com">Designed by photoangel / Freepik</a>
	</div>
  </div>
</template>
<script>
</script>
<style lang="scss">
/*
@media only screen and (max-width: 979px) {

	html{
	  Width:100%;
	  font-size: 100%;
	}

  } 
  @media only screen and (min-width: 321px) and (max-width: 768px) {

	html{
	  Width:100%;
	  font-size: 62.5%;

	}

  } 
  @media only screen and (max-width: 320px) {

	html{
	  font-size: 62.5%;
	}

  }  
*/
  html {
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
  }

  p {
	text-align: center;
	font-size: 18px;
	width: 60% !important;
	margin-right: auto;
	margin-left: auto;
	padding-top: 40px; 
  }
  /* ↑margin-top:130pxを入れると重ならないで綺麗にモバイルで表示される。*/

  h1 {
	text-align: center;
	font-size: 2rem !important;
  }

  body {
  }



  article .life-advice {
	padding-top: 40px; 
  }

  .container {
	max-width: 100%;
	text-align: center;
	padding-left: 0px !important;
	padding-right: 0px !important;
	padding-top: 50px;
	overflow-x: hidden;
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
