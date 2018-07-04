<template>
  <section class="container">
	iii
	<table class="brwsr2">
	  <tbody>
		<tr>
		  <th>FireFox</th>
		  <td class="data fst">
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
		  <td class="data">
			Mozilla
		  </td>
		</tr>
		<tr>
		  <td class="bar" colspan="6"></td>
		</tr>
		<tr>
		  <th>Chrome</th>
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
		  <td class="data">
			Google
		  </td>
		</tr>
		<tr>
		  <td class="bar" colspan="6"></td>
		</tr>
		<tr>
		  <th>IE</th>
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
		  <td class="data">
			Microsoft
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
table.brwsr2 {
  margin: 0 auto;
  width: 650px;
  border: none;
  border-top: solid 1px #666;
  border-bottom: solid 1px #666;
  border-collapse: separate;
  border-spacing: 0 10px;
  background: #f5f5f5;
}

table.brwsr2 th {
  vertical-align: middle;
  height: 53px;
  width: 124px;
  border-right: solid 1px #666;
  margin: 0;
  text-align: center;
  color: #333;
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
  border-top: solid 1px #34495e;
}
</style>
