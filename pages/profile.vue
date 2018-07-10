<template>
  <section class="container">
    <div>
	  <p class="row">
		1993年生まれ。慶應義塾大学経済学部卒。<br>
		独学で慶應義塾大学、東京外国語大学に合格。<br>
		大学四年時に独学で英会話の勉強を始め、<br>
		TOEIC用の対策をせずにTOEIC915点を取得。<br>
		英語学習と並行して独学でプログラミングを学び、<br>
		大学卒業後はITエンジニアとして都内IT企業で勤務。
	  </p>

	  <!--<img :src="require('../assets/TOEIC-SCORE.png')" />-->
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data () {
        return {
        }
  }
}
</script>

<style>
.profile {
  width: 100% !important;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
