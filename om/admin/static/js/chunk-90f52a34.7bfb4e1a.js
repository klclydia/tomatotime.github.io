(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90f52a34"],{"77b8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-main"},[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{md:24,lg:8}},[e("Row",[e("Col",{attrs:{md:12,lg:24}},[e("Card",[e("p",{staticClass:"card-title",staticStyle:{overflow:"visible"},attrs:{slot:"title"},slot:"title"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("Icon",{attrs:{type:"md-bookmark"}}),t._v("欢迎\n              ")],1)]),t._v(" "),e("div",{staticStyle:{height:"60px",overflow:"auto"}},[e("div",{staticClass:"qr"}),t._v(" "),e("div",{staticClass:"flex"},[t._v("欢迎 "+t._s(t.username)+" 登录")])])])],1)],1)],1),t._v(" "),e("Col",{attrs:{md:24,lg:16}},[e("Row",[e("Col",{staticStyle:{padding:"0 5px 10px 0"},attrs:{md:24,lg:12}},[e("Card",[e("p",{staticClass:"card-title",staticStyle:{overflow:"visible"},attrs:{slot:"title"},slot:"title"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("Icon",{attrs:{type:"md-bookmark"}}),t._v("5GC运营管理平台概述\n              ")],1)]),t._v(" "),e("div",{staticStyle:{height:"60px",overflow:"auto"}},[e("div",{staticClass:"qr"}),t._v(" "),e("div",{staticClass:"flex"},[t._v("5GC运营管理平台概述")])])])],1),t._v(" "),e("Col",{staticStyle:{padding:"0 0 10px 5px"},attrs:{md:24,lg:12}},[e("Card",[e("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"md-bookmark"}}),t._v("更新日志\n            ")],1),t._v(" "),e("div",{staticStyle:{height:"60px",overflow:"auto"}},[e("div",{staticClass:"qr"}),t._v(" "),e("Alert",{staticStyle:{padding:"8px 16px 8px 16px"}},[t._v("初始版本")])],1)])],1)],1)],1)],1)],1)},r=[],l=e("a78e"),i=e.n(l),o={name:"home",data:function(){return{username:""}},computed:{avatarPath:function(){return localStorage.avatorImgPath}},methods:{init:function(){try{var t=JSON.parse(i.a.get("userInfo"));this.username=t.username}catch(a){username="unknown",console.log("userInfo parse error"+i.a.get("userInfo"))}}},mounted:function(){this.init()}},n=o,c=(e("e897"),e("2877")),d=Object(c["a"])(n,s,r,!1,null,null,null);a["default"]=d.exports},e897:function(t,a,e){"use strict";var s=e("fb9a"),r=e.n(s);r.a},fb9a:function(t,a,e){}}]);