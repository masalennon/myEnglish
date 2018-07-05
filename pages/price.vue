<template>
  <section class="container">
	個人だから実現できる、他社のサービスより圧倒的にお得な価格設定
	英語学習サポートサービスを提供している会社の半分以下の価格で同様のサービスを提供いたします。
	他社のサービスも、第二言語学習論という研究結果に基づいた学習カリキュラムを提供しており、自身での英語学習の経験と実績があれば
	個人でも十分に科学的に効率的な学習カリキュラムを提供できると自負しております。
	
	<table class="brwsr2">
	  <tbody>
		<tr>
		  <th class="header-left">会社名</th>
		  <th class="data fst">
			月額料金
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
			タブ型
		  </td>
		  <td class="data">
			タブ型
		  </td>
		  <td class="data">
			Geckoエンジン
		  </td>
		  <td class="data">
			Linux対応
		  </td>
		  <td class="data">
			89言語対応
		  </td>
		</tr>
		<tr>
		  <td class="bar" colspan="6"></td>
		</tr>
		<tr>
		  <td class="data fst">
			タブ型
		  </td>
		  <td class="data fst">
			タブ型
		  </td>
		  <td class="data">
			Blinkエンジン
		  </td>
		  <td class="data">
			Linux対応
		  </td>
		  <td class="data">
			53言語対応
		  </td>
		</tr>
		<tr>
		  <td class="bar" colspan="6"></td>
		</tr>
		<tr>
		  <td class="data fst">
			7以降タブ型
		  </td>
		  <td class="data fst">
			7以降タブ型
		  </td>
		  <td class="data">
			Tridentエンジン
		  </td>
		  <td class="data">
			Linux一部対応
		  </td>
		  <td class="data">
			95言語対応
		  </td>
		</tr>
	  </tbody>
	</table>
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
.header-left {
  border-left: 1px solid whitesmoke;
}

table.brwsr2 {
  margin: 0 auto;
  width: 650px;
  border: none;
  border-top: solid 1px whitesmoke;
  border-bottom: solid 1px #666;
  border-collapse: separate;
  border-spacing: 0px;
  background: white;
  border-radius: 5px;
}

table.brwsr2 th {
  vertical-align: middle;
  height: 53px;
  width: 124px;
  border-right: solid 1px whitesmoke;
  margin: 0;
  text-align: center;
  color: #3a3b38;
  font-size: 16px;
  font-weight: bold;
}

table.brwsr2 td.data {
  padding: 0;
  margin: 0;
  height: 53px;
  width: 100px;
  border: none;
  color: #666;
  font-size: 12px;
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
</style>
