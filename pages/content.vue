<template>
  <div class="container">

	<!--<header>-->
	  <!--<img :src="require('../assets/header.png')" />-->
	  <!--</header>-->
	<!--htmlメモ。-->
	<!--まずdivで全体を囲む。-->
	<!--次にmain、head、navタグでそれぞれを囲む。-->
	<!--mainの中では、mainを構成する要素、例えばサイドバーや本文、をそれぞれdivで囲む。-->
	<!--要素の中で、それが記事だったらarticleタグで囲む。-->
	<!--その中でh1系のタグはdivで囲わず、本文はまたdivで囲む。-->
	<!--一つ一つの要素はdivで囲む。-->
  <!--<body>-->
	<!--<div>-->
	  <!--<head></head>-->
	  <!--<nav></nav>-->
	  <!--<main>-->
		<!--<div>-->
		  <!--<h1></h1>-->
		  <!--<div></div>-->
		  <!--</div>-->
		<!--<div></div>-->
		<!--</main>-->
	  <!--</div>-->
	<!--</body>-->

  <main class="main-container">
	<article>
	  <div class="make-carriculum">
		<h1 class="make-carriculum-h1">
		  一人一人のレベル、目標にあった<br>
		  学習カリキュラムを作成。
		</h1>
		<!--<div class="both-ok">-->
		  <!--<img :src="require('../assets/both-OK.png')" />-->
		  <!--</div>-->
		<p class="make-carriculum-paragraph">
		  TOEIC, 日常会話のマスターなどお客様の要望に合わせた学習計画を立て、継続して実行していけるようにサポートしていきます。<br>
		  初回のカウンセリングで現状の英語力と目標、英語を学びたい理由などを伺い、<br>
		  最適な学習方法とその科学的根拠、市販の教材を用いた具体的な学習方法を提案いたします。<br>
		  まず初めに学ぶ理由、なぜその学習方法が効率的であるかについての科学的根拠をはっきりさせるので、納得して学習を続けていただけます。<br>
		</p>
	  </div>

	  <div class="life-advice">
		<h1>
		  学習を続けていくために<br>
		</h1>

		<div class="life-advice-row">
		  <div class="life-advice1">
			<img style="height: 150px;" :src="require('../assets/icon.svg')" />
			<h4>
			  Life
			</h4>
			<p class="life-advice-paragraph1">
			  働きながら学習時間をどうしたら捻出できるか、自分を律して学習を毎日続けて行くにはどうしたらいいかについてもアドバイス。
			  心理学や科学の研究を基にした的確な
			</p>
		  </div>
		  <div class="life-advice1">
			<img style="height: 150px;" :src="require('../assets/calendar.svg')" />
			<h4>
			  Schedule
			</h4>
			<p class="life-advice-paragraph2">
			  英語学習についてのアドバイスだけではなく、働きながら学習時間をどうしたら捻出できるか、自分を律して学習を毎日続けて行くにはどうしたらいいかなどの
			  自己管理面や生活習慣についても個人の経験や心理学の知識を応用しながら的確にアドバイスいたします。
			  毎日2~3時間の学習時間を設けることは働きながらではすごく大変です。しかし、スキマ時間でできる学習や時間の捻出方法についても一緒に考え、
			  アドバイスいたしますので、継続して学習をしていただけます。
			</p>
		  </div>
		  <div class="life-advice1">
			<img style="height: 150px;" :src="require('../assets/homework.svg')" />
			<h4>
			  Homework
			</h4>
			<p class="life-advice-paragraph3">
			  英語学習についてのアドバイスだけではなく、働きながら学習時間をどうしたら捻出できるか、自分を律して学習を毎日続けて行くにはどうしたらいいかなどの
			  自己管理面や生活習慣についても個人の経験や心理学の知識を応用しながら的確にアドバイスいたします。
			  毎日2~3時間の学習時間を設けることは働きながらではすごく大変です。しかし、スキマ時間でできる学習や時間の捻出方法についても一緒に考え、
			  アドバイスいたしますので、継続して学習をしていただけます。
			</p>
		  </div>
		</div>
	  </div>


	  <div class="online-support">
		<h1 class="online-support-h1">
		  毎日の学習を支える、<br>
		  オンラインサポート。
		</h1>
		<div class="life-advice-row">
		  <div class="online-support1">
			<img style="height: 150px;" :src="require('../assets/smartphone.svg')" />
			<h4>
			  チャットで気軽に質問
			</h4>
			<p class="online-support-paragraph1">>
			  ボイスメッセージを使ったシャドーウィング、オーバーラッピング、音読の添削や学習に関する悩み相談など、週5日チャットツールでサポートいたします。<br>
			  お送りいただいたメッセージには基本的に24時間以内に返信をします。毎日の学習のリズムを整えるのにお役立てください。<br>

			  満足いただけなかった場合は、日計算で残りの代金を全額返済
			  英語だけでなく全てに共通する独学の技術

			  自己管理能力、やりきる力、独学のコツ、心理学に沿ったモチベーションの維持の仕方
			  単語が覚えられない、文法がわからない、英語が聴き取れない、英語が口から出てこない、英語を読んでも頭に入ってこない、これらのお悩みを解消するための
			  勉強方法をお教えします。
			</p>
		  </div>
		  <div class="online-support1">
			<img style="height: 150px;" :src="require('../assets/delivery.svg')" />
			<h4>
			  24時間以内の素早い対応
			</h4>
			<p class="online-support-paragraph1">>
			  ボイスメッセージを使ったシャドーウィング、オーバーラッピング、音読の添削や学習に関する悩み相談など、週5日チャットツールでサポートいたします。<br>
			  お送りいただいたメッセージには基本的に24時間以内に返信をします。毎日の学習のリズムを整えるのにお役立てください。<br>

			  満足いただけなかった場合は、日計算で残りの代金を全額返済
			  英語だけでなく全てに共通する独学の技術

			  自己管理能力、やりきる力、独学のコツ、心理学に沿ったモチベーションの維持の仕方
			  単語が覚えられない、文法がわからない、英語が聴き取れない、英語が口から出1¦こない、英語を読んでも頭に入ってこない、これらのお悩みを解消するための
			  勉強方法をお教えします。
			</p>
		  </div>
		</div>
	  </div>


	  <div class="unnecessary-eikaiwa">
		<h1>
		  もう英会話教室は<br>
		  必要ありません！
		</h1>
		<p class="unnecessary-eikaiwa-paragraph">
		  良質な教材はネット、書店に溢れています。<br>
		  必要なのはそれらの正しい活用方法と継続力です。<br>
		  まずはお気軽に、無料カウンセリングをお試しください!<br>
		  <router-link to="/apply">
			お申し込みはこちら
		  </router-link>
	  </p>
	</div>
  </article>
</main>

<nuxt/>
</div>
</template>

<style lang="scss">
@import '../src/assets/scss/app.scss';
h1 {
  height: 80px;
  color: #5A5AD2;
  font-weight: 700;
}


.both-ok {
  height: 100%;
  width: 100%
}

.make-carriculum-h1 {
}

.make-carriculum-paragraph {
}

.life-advice {
  margin-bottom: 40px;
  background: #F5FCFF;
  padding-bottom: 60px;
}

.life-advice-paragraph {
  margin-right: auto;
  margin-left: auto;
}

.online-support {
  margin-bottom: 60px;
}

.online-support-paragraph {

}
.unnecessary-eikaiwa {
  padding-bottom: 60px;
  background: #F5FCFF;
  padding-top: 40px;
}
.unnecessary-eikaiwa-paragraph {

}

.container {
  width: inherit !important;
  max-width: 100%;
  padding-right: 0px;
  padding-left: 0px;
}


.make-carriculum .make-carriculum-paragraph p {

}

.life-advice-row {
  height: 800px !important;
  width: 80% !important;
  margin-right: auto;
  margin-left: auto;
}

.life-advice-paragraph1 {
  width: 80% !important;
}

.life-advice-paragraph2 {
  width: 80% !important;
}
.life-advice-paragraph3 {
  width: 80% !important;
}
.main-container {
  background: white;
  width: 100%;
}
.life-advice1 {
  width: 33%;
  float: left;
}
h4 {
  font-size: 2em;
  color: #5A5AD2;
  font-weight: 700;
  text-align: center;
  padding-top: 10px;
}
.online-support-paragraph1 {
  width: 80% !important;
}

.online-support1 {
  float: left;
  width: 50%;
}
.online-support-h1 {
  margin-bottom: 30px;
}

</style>
