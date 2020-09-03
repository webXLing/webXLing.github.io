(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(s,n,e){"use strict";e.r(n);var a=e(0),l=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"vue-input-实现手机号输入-自动分割"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-input-实现手机号输入-自动分割"}},[s._v("#")]),s._v(" vue input 实现手机号输入 自动分割")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    inputMobile (e) {\n      let val = this.$refs.mobile.value // 不可直接用this.mobile，第一方便提取该方法降低代码耦合度，第二直接用this.mobile,在输入汉字时按下shift按键会导致无法再输入和删除内容\n      let selStart = this.$refs.mobile.selectionStart // 选中区域左边界位置\n      let mobileLen = val.length\n      let value = this.getValue(e, val).substr(0, 11) // 获取输入/粘贴内容,并截取前11位\n      let len = value.length\n      console.log(len);\n\n      if (len > 3 && len < 8) {\n        value = value.replace(/^(\\d{3})/g, '$1 ')\n      } else if (len >= 8) {\n        value = value.replace(/^(\\d{3})(\\d{4})/g, '$1 $2 ')\n      }\n      console.log(value);\n\n      this.$refs.mobile.value = value\n      if (selStart !== mobileLen) {\n        if (selStart === 3) {\n          selStart++\n        }\n        // 设置光标位置\n        this.$refs.mobile.selectionStart = this.$refs.mobile.selectionEnd = selStart\n      }\n    },\n    getValue (e, val) {\n      let value = ''\n      //  if (e.type === 'keyup') {\n      // } else \n      if (e.type === 'paste') {\n        // window.clipboardData：IE浏览器获取剪贴板数据对象\n        // event.clipboardData：Chrome, Firefox, Safari获取剪贴板数据对象\n        let clipboardData = event.clipboardData || window.clipboardData;\n        value = clipboardData.getData('Text'); // 获取剪贴板text格式的数据\n        value = value.replace(/\\D/g, '')\n      } else {\n        value = val.replace(/\\D/g, '')\n\n      }\n      return value\n    }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  <input type="text"\n            class="addinp"\n            v-model="moble"\n            @keyup="inputMobile"\n            ref="mobile"\n            maxlength="13"\n            placeholder="请输入企业会员手机号码">\n\n\n  computed: {\n    mobile () {\n      return this.moble.replace(/\\s/g, "").replace(/\\D/g, \'\');\n    }\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])}),[],!1,null,null,null);n.default=l.exports}}]);