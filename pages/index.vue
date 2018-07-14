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
	  </div>
	  当サービスなら↓
	  <section class="second-section">
		<div class="row">
		  <div class="second-list">
			<ul>
			  <li class="item">
				<div class="sentence">
				  科学に裏打ちされた学習カリキュラムだから<em>効率的</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  参考書選びから使い方までサポートするから<em>迷わない</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  個人によるマンツーマンレッスンだから<em>お手頃価格</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  継続するためのサポートが充実しているから<em>継続できる</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  短期間で圧倒的な勉強量を確保してやりきる<em>短期集中型</em>
				</div>
			  </li>
			  <li class="item">
				<div class="sentence">
				  自習サポート型だから受け身にならず<em>能動的</em>
				</div>
			  </li>
			</ul>
		  </div>
		</div>
	  </section>

	  <section class="course-section">
		<div class="row">
		  <div class="course">
			3コースがお選びいただけます
			基礎コース
			TOEIC対策コース
			英会話コース
		  </div>
		</div>
	  </section>
	</div>

  </main>
</template>

<style lang="scss">
  @media only screen and (max-width: 979px) {

	html{
	  Width:100%;
	  font-size: 100%;
	}

  } /*デバイスの横幅が979px以下の場合*/

  @media only screen and (min-width: 321px) and (max-width: 768px) {

	html{
	  Width:100%;
	  font-size: 62.5%;

	}

  } /*デバイスの横幅が321以上768以下の場合*/

  @media only screen and (max-width: 320px) {

	html{
	  font-size: 62.5%;
	}

  } /* デバイスの横幅が320px以下の場合 */
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
	.course-section {
	  margin-right: auto;
	  margin-left: auto;
	  width: 80%;
	  background: white;
	  margin-top: 50px;
	  .course {
	  margin-right: auto;
	  margin-left: auto;
	  }
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
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		ul {
		  padding-top: 30px;
		  li {
			text-align: left;
			height: 80px;
			width: 90%;
			padding: 0.1em 1rem 0em 10%;
			font-size: 1.8rem;
			list-style: none;
			background-image: url(../assets/checkmark.svg);
			background-repeat: no-repeat;
			margin-top: 20px;
			margin-right: auto;
			margin-left: auto;
			.sentence {
			  border-bottom: whitesmoke solid thick;
			  padding-bottom: 10px;
			  width: 100%;
			}
			.item {
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


</style>
