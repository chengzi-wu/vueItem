/*! This file is created by fangbao */
webpackJsonp([9],{567:function(t,e,n){n(593);var i=n(5)(n(582),n(604),"data-v-104766b0",null);t.exports=i.exports},582:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(133),o=n(29),a=n(90);e.default={components:{WlbHeader:i.WlbHeader},data:function(){return{active:!0,title:"",content:"",num:500,publicEnd:!0,open:!1}},computed:{boardName:function(){return this.$route.params.name}},created:function(){this.$route.params.id||this.$router.replace({name:"index"})},mounted:function(){},methods:{checkType:function(t){this.active=t},toPublic:function(){var t=this;this.content=this.content.toString(),!1!==this.publicEnd&&""!==this.content&&(this.publicEnd=!1,this.$http({url:this.$api.api_list,method:"BbsPublishThread",params:[{type_id:this.$route.params.id,title:"网利社区",content:this.content}]}).then(function(e){if(t.publicEnd=!0,e.data.result&&0===e.data.result.code)(0,a.Toast)({message:"帖子发布成功，已提交后台审核",duration:1500}),setTimeout(function(){t.$router.push({name:"index"})},1e3);else if(e.data.error&&4004===e.data.error.code)(0,a.Toast)({message:"用户未登录，请登陆后进行发帖",duration:1500}),setTimeout(function(){o.wlb.ready({app:function(t){t.loginApp({refresh:1,url:""})},other:function(){window.location.href=o.api.host+"/wechat/verify"}})},1e3);else{var n=e.data.error.message;(0,a.Toast)({message:n,duration:1500}),setTimeout(function(){t.$router.push({name:"index"})},1e3)}}))}},watch:{content:function(){var t=this.content.length;this.num=500-t>0?500-t:0,this.content=this.content.substring(0,500)}}}},593:function(t,e){},604:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("wlb-header",{attrs:{options:{title:t.boardName}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"textarea",staticClass:"topic-text-content",attrs:{placeholder:"请输入发帖内容"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("div",{staticClass:"topic-footer"},[n("span",{staticClass:"residue"},[t._v("你还可以输入"+t._s(t.num)+"字")]),t._v(" "),n("div",{class:["btn",{disable:!t.publicEnd||!t.content}],on:{click:t.toPublic}},[n("span",[t._v(t._s(t.publicEnd?"发表":"发表中..."))])])])],1)},staticRenderFns:[]}}});