<template>
  <main class="container" id="index">
	<div>
	  <div class="row">
		<section class="first-section">
		  <h1>
			今度こそ本気で英語を身につけたいあなたへ
		  </h1>
		  <div class="first-list" style="">
			あなたには、こんな経験はないでしょうか？
			<ul>
			  <li>
				英語の勉強をしてはいるものの、なかなか成果が出ない
			  </li>
			  <li>
				英会話教室に通ったがなかなか身につかないまま費用が高くてやめてしまった
			  </li>
			  <li>
				英語の勉強を始めても毎回挫折してしまう
			  </li>
			  <li>
				TOEICでは高得点を獲得できたものの、うまく話せず悩んでいる
			  </li>
			</ul>
		  </div>
		</section>
		<div class="row">
		  <section>
			3コースがお選びいただけます
			基礎コース
			TOEIC対策コース
			英会話コース
		  </section>
		</div>
	  </div>

	  <div class="row">
		<section class="second-section">
		  <div class="second-list">
			<ul>
			  <li class="item">
				科学に裏打ちされた学習カリキュラムだから<em>効率的</em>
			  </li>
			  <li class="item">
				<div class="sentence">
				  参考書選びから使い方までサポートするから<em>迷わない</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  個人によるマンツーマンレッスンだから<em>お手頃</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  継続するためのサポートが充実しているから<em>継続できる</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  あなたの限界を目標に設定するから<em>短期集中的</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  自習サポート型だから受け身にならず<em>能動的</em>
				</div>
			  </li>
			</ul>
		  </div>
		</section>
	  </div>

	</div>

  </main>
</template>

<style lang="scss">
  html {
	background: whitesmoke !important;
	.copyright{
	  background: whitesmoke;
	  margin-top: 0px;
	}
	.container {
	  background: whitesmoke;
	  min-height: 100vh;
	  justify-content: center;
	  align-items: center;
	  text-align: center;
	  max-width: 100%;
	  p {
		margin-bottom: 0px !important;
	  }
	  h3 {
		margin-bottom: 0px;
	  }
	  .first-section {
		background: white;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		.first-list {
		  width: 70%;
		  margin-left: auto;
		  margin-right: auto;
		  li {
			text-align: left;
			list-style: none;
		  }
		}
	  }
	  .second-section {
		margin-left: auto;
		margin-right: auto;
		background: white;
		width: 80%;
		.second-list{
		  width: 80%;
		  margin-left: auto;
		  margin-right: auto;
		  ul {
			padding-top: 30px;
			li {
			  text-align: left;
			  height: 80px;
			  padding: 0.1em 1rem 0em 10%;
			  font-size: 1.8rem;
			  list-style: none;
			  background-image: url(../assets/checkmark.svg);
			  background-repeat: no-repeat;
			  border-bottom: whitesmoke solid thick;
			  margin-top: 20px;
			  .item {
				vertical-align: bottom;
			  }
			  em {
				color: #ea8b00;
				font-weight: 700;
			  }
			}
		  }
		}
	  }
	  .links {
		padding-top: 15px;
	  }

	}
  }

	  	.second-section::after {
		  content: '';
		  display: block;
		  width: 0px;
		  height: 0px;
		  border-top: solid 4rem RGBA(245, 245, 245, 1.00);
		  border-left: solid 5rem #FFF;
		  border-right: solid 5rem #FFF;
		  position: absolute;
		  bottom: 4.3rem;
		  left: 50%;
		  margin-left: -5rem;
		  z-index: 10;

		}

</style>
