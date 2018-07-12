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
	  <div class="row row--extend">
		<div class="col-md-12">
		  <div class="make-carriculum-header">
			一人一人に学習カリキュラムを作成。<br>
		  </div>
		  <!--<div class="both-ok">-->
			<!--<img :src="require('../assets/both-OK.png')" />-->
			<!--</div>-->
		  <p class="make-carriculum-paragraph">
			TOEIC, 日常会話のマスターなどお客様の要望に合わせた学習計画を立て、継続して実行していけるようにサポートしていきます。
			初回のカウンセリングで現状の英語力と目標、英語を学びたい理由などを伺い、
			最適な学習方法とその科学的根拠、市販の教材を用いた具体的な学習方法を提案いたします。
			まず初めに学ぶ理由、なぜその学習方法が効率的であるかについての科学的根拠をはっきりさせるので、納得して学習を続けていただけます。
		  </p>
		</div>
	  </div>

	  <div class="life-advice row--extend" >
		<h1>
		  学習を続けていくために<br>
		</h1>

		<div class="row">
		  <div class="col-md-4">
			<img style="height: 150px;" :src="require('../assets/icon.svg')" />
			<h4>
			  Life
			</h4>
			<p class="life-advice-paragraph">
			  働きながら学習時間をどうしたら捻出できるか、自分を律して学習を毎日続けて行くにはどうしたらいいかについてもアドバイス。
			  心理学の研究結果を基に、意思の力を高め目標を達成するためのマインドセットの作り方までお伝えします。
			</p>
		  </div>
		  <div class="col-md-4">
			<img style="height: 150px;" :src="require('../assets/calendar.svg')" />
			<h4>
			  Schedule
			</h4>
			<p class="life-advice-paragraph">
			  契約期間中迷いなく学習を進めていただけるように、あなた専用の学習スケジュールをお作りします。個人の好みを伺い、使用する
			  参考書を一緒に選ぶところから目標達成のためにそれをどう活用していくかまでサポートします。
			</p>
		  </div>
		  <div class="col-md-4">
			<img style="height: 150px;" :src="require('../assets/homework.svg')" />
			<h4>
			  Homework
			</h4>
			<p class="life-advice-paragraph">
			  継続して毎日の学習を行えるように、宿題の設定をいたします。宿題を全てこなしていけばあなたの目標を達成できるように作成しますので、
			  毎日の学習のペースメーカーとしてお役立てください。もちろん、自分で学ぶペースを決めたい、など希望がありましたら柔軟にお答えいたします。
			</p>
		  </div>
		</div>
	  </div>


	  <div class="online-support row--extend">
		<h1 class="">
		  毎日の学習を支えるオンラインサポート。
		</h1>
		<div class="row">
		  <div class="col-md-6">
			<img style="height: 150px;" :src="require('../assets/smartphone.svg')" />
			<h4>
			  チャットで気軽に質問
			</h4>
			<p class="online-support-paragraph1">
			  ボイスメッセージを使ったシャドーウィング、オーバーラッピング、音読の添削や学習に関する悩み相談など、平日週5日チャットツールでサポートいたします。<br>
			  毎日の学習のリズムを整えるのにお役立てください。<br>
			</p>
		  </div>
		  <div class="col-md-6">
			<img style="height: 150px;" :src="require('../assets/delivery.svg')" />
			<h4>
			  24時間以内の素早い対応
			</h4>
			<p class="online-support-paragraph1">
			  お送りいただいたメッセージには基本的に24時間以内に返信をします。
			  その他にも、単語が覚えられない、文法がわからない、英語が聴き取れない、英語が口から出てこない、英語を読んでも頭に入ってこないなど、
			  毎日の学習の中で出てくるあなたのお悩みに毎日お答えします。<br>
			</p>
		  </div>
		</div>
	  </div>


	  <div class="row">
		<div class="col-md-12 unnecessary-eikaiwa">
		  <h1>
			もう英会話教室は<br>
			必要ありません！
		  </h1>
		  <h4>
			英語を学べば、<br>世界が一気に広がる！
		  </h4>
		  <img style="height: 230px;" :src="require('../assets/earth-with-children-ring-around.svg')" />
		  <p class="unnecessary-eikaiwa-paragraph">
			良質な教材はネット、書店に溢れています。<br>
			必要なのはそれらの正しい活用方法と独学力です。<br>
			まずはお気軽に、無料カウンセリングをお試しください!<br>
			<router-link to="/apply">
			  お申し込みはこちら
			</router-link>
		  </p>
		</div>
	  </div>
	</article>
  </main>

  <nuxt/>
</div>
</template>

<style lang="scss">



.container {

  width: inherit !important;
  max-width: 100%;
  padding-right: 0px;
  padding-left: 0px;

  h1 {
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;
	font-weight: 700;
  }
  .row--extend {
	width: 100% !important;
	margin-right: 0px !important;
	margin-left: 0px !important;
  }


	padding-bottom: 50px;
	.make-carriculum-paragraph {
	  width: 80% !important;
	}
	.make-carriculum-header {
	  font-size: 22px;
	}
  .life-advice {
	padding-bottom: 60px;
	padding-top: 40px;
	background: linear-gradient(to bottom, #fff 0, #f6f6f6 150px);
	.life-advice-paragraph {
	  margin-right: auto;
	  margin-left: auto;
	}

	.life-advice-row {
	  height: 700px !important;
	  width: 80% !important;
	  margin-right: auto;
	  margin-left: auto;
	}

	.life-advice-paragraph {
	  width: 80% !important;
	}

	.life-advice1 {
	  width: 33%;
	  float: left;
	}

  }
  .online-support {
  padding-top: 40px;
  background: linear-gradient(to top, #fff 0, #f6f6f6 150px);
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
}

.unnecessary-eikaiwa {
  padding-bottom: 60px;
  margin-top: 50px;
}

}








h4 {
  font-size: 2em;
  color: #333;
  font-weight: 700;
  text-align: center;
  padding-top: 10px;
}


</style>
