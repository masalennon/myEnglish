<template>
  <section class="container">
	<div class="price-row">
	  <h1 class="header">
		個人だから実現できる、<br>
		圧倒的にお得な価格設定
	  </h1>
	  <p class="text">
		同様のサービスを提供している会社の半分以下の価格でこちらのサービスを提供いたします。
		他社でも第二言語学習論という研究結果に基づいた学習カリキュラムを提供しており、
		自身での英語学習の経験と言語習得論への理解があれば、個人でも十分に科学的に効率的な学習カリキュラムを提供可能です。
		また、しっかりと学習時間をお取りいただけるように宿題の用意や添削、自分をコントロールしモチベーションを維持していくためのメンタル面でのサポートもいたします。
	  </p>

	</div>
	<div class="price-table">
	  <table class="brwsr2">
		<tbody>
		  <tr>
			<th class="header-left">会社名</th>
			<th class="data fst">
			  料金
			</th>
			<th class="data">
			  入会金
			</th>
			<th class="data">
			  レッスン数
			</th>
			<th class="data">
			  受講期間
			</th>
		  </tr>
		  <tr>
			<td class="data fst">
			  English Company
			</td>
			<td class="data">
			  450,000円
			</td>
			<td class="data">
			  50,000円
			</td>
			<td class="data">
			  週2回1コマ90分
			</td>
			<td class="data">
			  3ヶ月
			</td>
		  </tr>
		  <tr>
			<td class="bar" colspan="6"></td>
		  </tr>
		  <tr>
			<td class="data fst">
			  RIZAP(TOEICコース)
			</td>
			<td class="data fst">
			  450,000円
			</td>
			<td class="data">
			  50,000円
			</td>
			<td class="data">
			  全24回
			</td>
			<td class="data">
			  3ヶ月
			</td>
		  </tr>
		  <tr>
			<td class="bar" colspan="6"></td>
		  </tr>
		  <tr>
			<td class="data fst">
			  PROGRIT
			</td>
			<td class="data fst">
			  468,000円
			</td>
			<td class="data">
			  50,000円
			</td>
			<td class="data">
			  週1回の面談
			</td>
			<td class="data">
			  3ヶ月
			</td>
		  </tr>
		  <tr>
			<td class="bar" colspan="6"></td>
		  </tr>
		  <tr class="colored-row">
			<td class="data fst bold">
			  当サービス
			</td>
			<td class="data bold">
			  150,000円
			</td>
			<td class="data bold">
			  0円
			</td>
			<td class="data bold">
			  週1回1コマ60分
			</td>
			<td class="data bold">
			  3ヶ月
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
	<div class="caution">
	  ※TOEICコースの場合です。単純化のため、各社とも3ヶ月受講した場合としました。<br>
	</div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss">
html {
  background: white;
}

.text {
  text-align: center;
}

.header-left {
  border-left: 1px solid whitesmoke;
}

.caution {
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}


.colored-row {
  background-color: #f5cc44;
}

table.brwsr2 {
  margin: 0 auto;
  width: 950px;
  height: 400px;
  border: solid 1px whitesmoke;
  border-collapse: separate;
  border-spacing: 0px;
  background: white;
  border-radius: 5px;
}

table.brwsr2 th {
  vertical-align: middle;
  height: 53px;
  width: 124px;
  border: solid 1px whitesmoke;
  margin: 0;
  text-align: center;
  color: #3a3b38;
  font-size: 19px;
  font-weight: bold;
}

table.brwsr2 td.data {
  padding: 0;
  margin: 0;
  height: 53px;
  width: 100px;
  border: none;
  color: #666;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
}

table.brwsr2 td:fst-child {
  padding: 0 0 0 10px;
  vertical-align: middle;
}

table.brwsr2 td.bar {
  height: 1px;
  width: 100%;
  border-top: solid 0.5px whitesmoke;
}

.bold {
  font-weight: bold;
  font-size: 22px !important;
  color: black !important;
}

.price-table {
  overflow-x:auto;
}

</style>
