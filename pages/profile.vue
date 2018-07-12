<template>
  <section class="container">
	<div>
	  <p class="profile">
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

</script>


<style lang="scss">

.container {
  min-height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .profile {
	width: 100% !important;
	margin-bottom: 400px;
  }
}

</style>
