<template>
  <section class="container">
	<div class="h1">
	  <h1>今度こそ本気で英語を身につけたいあなたへ</h1>
	</div>

	<div class="space">
	  <h1>個人によるマンツーマンレッスンだからお手軽に</h1>
	  <h1>週6日サポートだからストイックに</h1>
	</div>

	<p>
	  英語を学べます
	</p>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
	AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 1000px;
}

body {
}


html {
  background: whitesmoke;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
