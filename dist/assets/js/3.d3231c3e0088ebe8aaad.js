/*! This file is created by fangbao */
webpackJsonp([3],{256:function(t,o,e){e(277);var a=e(0)(e(267),e(287),"data-v-84984c22",null);a.options.__file="E:\\项目\\wanglibao\\BBS\\src\\views\\personTopics.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),a.options.functional,t.exports=a.exports},267:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(50);o.default={data:function(){return{postItems:[],page:1,nomore:!1}},computed:{allLoaded:function(){return this.nomore}},created:function(){var t=this;this.$plugin.loading.show(!0,"full"),this.loadData(function(){t.$plugin.loading.show(!1)})},methods:{loadData:function(t){var o=this;this.$http({url:this.$api.api_list,method:"getBbsUserThread",params:[{pageNum:this.$const.BBS_USER_THREAD_PAGE_NUM,page:this.page}]}).then(function(e){o.page+=1,e.data.result.data.last_page+1>=o.page&&(2===o.page?o.postItems=e.data.result.data.list:o.postItems=o.postItems.concat(e.data.result.data.list)),e.data.result.data.last_page<o.page?o.nomore=!0:o.nomore=!1,t&&t()})},loadTop:function(){var t=this;this.page=1,this.$plugin.loading.show(!0),this.loadData(function(){t.$plugin.loading.show(!1),t.$refs.loadmore.$children[0].onTopLoaded()})},loadBottom:function(){var t=this;this.$plugin.loading.show(!0),this.loadData(function(){t.$plugin.loading.show(!1),t.$refs.loadmore.$children[0].onBottomLoaded()})}},components:{WlbHeader:a.WlbHeader,MyTopicItem:a.MyTopicItem,Loadmore:a.Loadmore,NoMore:a.NoMore}}},277:function(t,o){},287:function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"view"},[e("wlb-header",[e("span",{slot:"title"},[t._v("我的帖子")])]),t._v(" "),t.postItems.length?e("loadmore",{ref:"loadmore",attrs:{"cb-load-top":t.loadTop,"cb-load-bottom":t.loadBottom,"all-loaded":t.allLoaded}},[t._l(t.postItems,function(t,o){return e("my-topic-item",{key:t.title,attrs:{"post-item":t,index:o}})}),t._v(" "),e("no-more",{attrs:{visible:t.nomore}})],2):t._e(),t._v(" "),t.postItems.length?t._e():e("div",{staticClass:"empty"},[e("div",{staticClass:"text"},[t._v("还没有发帖纪录哦")])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});