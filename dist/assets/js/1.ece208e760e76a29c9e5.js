/*! This file is created by fangbao */
webpackJsonp([1],{155:function(t,e,s){s(173);var i=s(0)(s(164),s(183),"data-v-84984c22",null);i.options.__file="E:\\项目\\wanglibao\\BBS\\src\\views\\personTopics.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),i.options.functional,t.exports=i.exports},164:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(10);e.default={data:function(){return{postItems:[{title:"中共中央发文",content:"党的工作机关不设正职领导助理",hits:"1800",comment:"500",time:"2017-03-31 14:56"},{title:"中共中央发文",content:"做产品投资不影响相信封口 而应该找这个风",hits:"15",comment:"500",time:"2017-03-31 14:56"},{title:"中共中央发文",content:"做产品投资不影响相信封口 而应该找这个风",hits:"15",comment:"500",time:"2017-03-31 14:56"}]}},created:function(){this.$store.dispatch("fetchBbsUserThread",1)},components:{WlbHeader:i.WlbHeader,MyTopicItem:i.MyTopicItem}}},173:function(t,e){},183:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view"},[s("wlb-header",[s("span",{slot:"title"},[t._v("我的帖子")])]),t._v(" "),t._l(t.postItems,function(t,e){return s("my-topic-item",{key:t.title,attrs:{"post-item":t,index:e}})}),t._v(" "),t.postItems.length?t._e():s("div",{staticClass:"empty"},[s("div",{staticClass:"text"},[t._v("还没有发帖纪录哦")]),t._v(" "),s("router-link",{staticClass:"go-topic",attrs:{to:{name:"topicAdd"}}},[t._v("去发帖")])],1)],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}});