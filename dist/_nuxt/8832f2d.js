(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{246:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(25),o=(r(31),r(9),r(21),r(22),r(39),r(27),r(38),r(53),r(32),r(54),r(66));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={components:{DetailArticleContent:function(){return r.e(7).then(r.bind(null,251))},DetailArticleHeroImg:function(){return r.e(8).then(r.bind(null,252))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({storeArticle:function(e){return e.article}})),created:function(){this.fetchArticleDetail()},methods:{fetchArticleDetail:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$store.dispatch,t.next=3,r("article/fetchArticleDetail");case 3:case"end":return t.stop()}}),t)})))()}}},O=f,d=r(46),component=Object(d.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-detail-page md:container mx-auto"},[r("DetailArticleHeroImg",{attrs:{image:e.storeArticle.articleDetail.image}}),e._v(" "),r("DetailArticleContent",{attrs:{title:e.storeArticle.articleDetail.title,categories:e.storeArticle.articleDetail.categories,content:e.storeArticle.articleDetail.content}})],1)}),[],!1,null,"937e3d80",null);t.default=component.exports}}]);