webpackJsonp([0],{"5i5W":function(t,e,n){t.exports=n.p+"static/img/cravingprobe_banner.456e2e3.png"},A3wp:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menuContainer"}},[n("router-link",{staticClass:"logoContainer",attrs:{to:"/"}},[n("div",{staticClass:"logo"},[t._v("UbiComp Lab")]),n("div",{staticClass:"subLogo"},[t._v("@NTHU")])]),t._l(t.menuList,function(e,i){return n("router-link",{key:i,staticClass:"menuItem",class:t.$route.path==e.link?"activate":"",attrs:{to:e.link}},[t._v(t._s(e.name)),n("div",{attrs:{id:"underline"}})])}),n("div",{staticClass:"menuIcon",class:t.menuclassList,on:{click:function(e){return t.opentheDrawer()}}},[n("div",{staticClass:"menuIconBar1"}),n("div",{staticClass:"menuIconBar2"}),n("div",{staticClass:"menuIconBar3"})]),t.drawerStatus?n("div",{attrs:{id:"drawer"}},t._l(t.menuList,function(e,i){return n("router-link",{key:i,staticClass:"drawerItem",attrs:{to:e.link}},[t._v(t._s(e.name))])}),1):t._e()],2)},staticRenderFns:[]};var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footerContainer"}},[n("div",{staticClass:"logoContainer"},[n("div",{staticClass:"logoImg"},[t._v("(LEGO)")]),n("div",{staticClass:"logo"},[t._v("UbiComp Lab")]),n("div",{staticClass:"subLogo"},[t._v("@NTHU")])]),n("div",{staticClass:"contactContainer"},[n("h3",[t._v("Contact Info")]),n("div",{staticClass:"contact"},[t._v("Interdisciplinary Program of Technology and Art"),n("br"),t._v("National Tsing Hua University"),n("br"),t._v("Nanda Campus"),n("br"),t._v("No. 521, Nanda Road, East District, Hsinchu 300145095, Taiwan"),n("br")]),n("a",{staticClass:"email",attrs:{href:"mailto: nthu.ubicomp.lab@gmail.com"}},[t._v("nthu.ubicomp.lab@gmail.com")])]),n("div",{staticClass:"copyright"},[t._v("© 2021 UbiComp Laboratory")])])}]};var o={name:"App",components:{menuTop:n("VU/8")({data:function(){return{menuList:[{name:"Home",link:"/"},{name:"Members",link:"/members"},{name:"Projects",link:"/projects"},{name:"Publications",link:"/publications"},{name:"News",link:"/news"},{name:"Videos",link:"/videos"},{name:"FAQs",link:"/FQAs"}],drawerStatus:!1,menuclassList:{menuIconContainer:!0,change:!1}}},watch:{$route:function(){this.drawerStatus=!1,this.menuclassList.change=!1}},mounted:function(){},methods:{opentheDrawer:function(){this.drawerStatus=!this.drawerStatus,this.menuclassList.change=!this.menuclassList.change}}},a,!1,function(t){n("UWkB")},"data-v-9e31ee8e",null).exports,footerBom:n("VU/8")({data:function(){return{menuList:[{name:"Home",link:"/"},{name:"Members",link:"/members"},{name:"Projects",link:"/projects"},{name:"Publications",link:"/publications"},{name:"News",link:"/news"},{name:"Videos",link:"/videos"},{name:"FAQs",link:"/FQAs"}],drawerStatus:!1,menuclassList:{menuIconContainer:!0,change:!1}}},watch:{$route:function(){this.drawerStatus=!1,this.menuclassList.change=!1}},mounted:function(){},methods:{opentheDrawer:function(){this.drawerStatus=!this.drawerStatus,this.menuclassList.change=!this.menuclassList.change}}},s,!1,function(t){n("A3wp")},"data-v-2dfe6eae",null).exports},data:function(){return{newsList:[{updated_at:"2021/11/30",title:"The website of UbiComp Lab at National Tsing Hua University is up and running!!!",content:""},{updated_at:"2021/11/30",title:"The website of UbiComp Lab at National Tsing Hua University is up and running!!!",content:""}]}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("menuTop",{staticClass:"menuTop"}),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view",{staticClass:"content",attrs:{newsList:this.newsList}})],1),this._v(" "),e("footerBom")],1)},staticRenderFns:[]};var l,c=n("VU/8")(o,r,!1,function(t){n("c+i7")},null,null).exports,u=n("/ocq"),d={data:function(){return{idx:0,isLoad:!1,pages:[{image:n("OeUU"),title:"TechLifeProbe1",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""},{image:n("5i5W"),title:"TechLifeProbe2",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""},{image:n("5i5W"),title:"TechLifeProbe3",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""}],pagesNum:3}},methods:{init:function(){var t=this;this.pagesNum=this.pages.length,l=setInterval(function(){t.idx<t.pagesNum-1?t.idx+=1:t.idx=0},4e3)},changePath:function(t){this.$router.push({path:"/works/post/"+t})}},created:function(){this.init(),this.isLoad=!0},beforeDestroy:function(){clearInterval(l)}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SlideShow"}},[n("div",{style:{"background-image":"url("+t.pages[t.idx].image+")"},attrs:{id:"sliceshowContainer"}},[t.pages[t.idx]?n("div",{staticClass:"sectionContainer"},[n("div",{staticClass:"sectionTitle"},[t._v(t._s(t.pages[t.idx].title))]),n("div",{staticClass:"sectionText"},[t._v(t._s(t.pages[t.idx].content))])]):t._e()]),n("div",{staticClass:"slideDotContainer"},t._l(t.pagesNum,function(e){return n("div",{staticClass:"slideDot",class:e==t.idx+1?"activite":""})}),0)])},staticRenderFns:[]};var h={props:["newsList"],components:{SlideShow:n("VU/8")(d,m,!1,function(t){n("sAqY")},"data-v-0741d218",null).exports},data:function(){return{intro_img:""}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"PageContainer"}},[n("div",{staticClass:"slideContainer"},[n("SlideShow")],1),t._m(0),n("div",{staticClass:"newsContainer"},[n("div",{staticClass:"blockTitle"},[t._v("Recent news")]),t._l(t.newsList,function(e,i){return n("div",{key:i,staticClass:"newsTitleBlock"},[n("div",{staticClass:"newsDate"},[t._v(t._s(e.updated_at))]),n("div",{staticClass:"newsTitle"},[t._v(t._s(e.title))]),n("div",{staticClass:"newLine"})])})],2),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introContainer"},[e("div",{staticClass:"blockTitle"},[this._v("Our Mission")]),e("div",{staticClass:"introText"},[this._v("The UbiComp Lab at National Tsing Hua University incorporates interdisciplinary forces to synergetistically develop computational support to promote people’s health and safety in their daily lives.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutContainer"},[e("div",{staticClass:"blockTitle"},[this._v("About Us")]),e("div",{staticClass:"aboutText"},[this._v("The UbiComp Lab (@NTHU) focuses on designing, building and evaluating high-impact HCI & UbiComp technologies that really apply computing technologies naturally into people’s everyday activities. Specifically, we investigated on building mobile sensing platforms that sense and understand daily behavior, promote healthy behavior (e.g., assisting people with alcohol-addicted, drug-addicted, technology-abuse or gambling-addicted problems in recovery from their addicted or abused behaviors) and facilitate people’s everyday activities (e.g., shopping, driving, parking, and social activities), and improve their real-life safety (e.g., avoiding recommitting drunk driving). ")])])}]};var v=n("VU/8")(h,p,!1,function(t){n("yq0S")},"data-v-41911f0e",null).exports,f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"App"}},[n("h1",{staticClass:"TitleU"},[t._v(t._s(t.name))]),t._l(t.data,function(e){return n("div",{staticClass:"staffContainer"},[n("h1",{staticClass:"chairTitle"},[t._v(t._s(e.title))]),n("div",{staticClass:"staffListContainer"},t._l(e.staff,function(e){return n("div",{staticClass:"staffListContentBlock"},[""!=e.href?n("a",{staticClass:"staffListName",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))]):t._e(),""==e.href?n("div",{staticClass:"staffListName"},[t._v(t._s(e.name))]):t._e(),n("div",{staticClass:"staffListTitle"},[t._v(t._s(e.title))])])}),0)])})],2)},staticRenderFns:[]};var g=n("VU/8")({components:{},data:function(){return{name:"Members",data:[{title:"Faculty",staff:[{name:"Chuang-Wen You",title:"Assistant Professor",href:"https://sites.google.com/site/cwyou2004/"}]},{title:"Post-doctoral Researcher / Research Assistant",staff:[{name:"Min-Wei Hung",title:"Research Assistant",href:""}]},{title:"Current Graduate Students",staff:[{name:"Hsueh-Sung Lu",title:"MS Program at ISA",href:""},{name:"Chieh-Jui Ho",title:"Undergraduates at IPTA",href:""},{name:"Chi-Ting Hou",title:"Undergraduates at IPTA",href:""},{name:"Pin-Chieh Chen",title:"Undergraduates at IPTA",href:""}]}]}},methods:{}},f,!1,function(t){n("OAPg")},"data-v-3f55a9ea",null).exports,_=n("VU/8")(null,null,!1,null,null,null).exports,C=n("VU/8")(null,null,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"App"}},[n("div",{staticClass:"newsContainer"},[n("h1",{staticClass:"sectionTitle"},[t._v("Recent news")]),t._l(t.newsList,function(e,i){return n("router-link",{key:i,staticClass:"newsTitleBlock",attrs:{to:"post/"+i}},[n("div",{staticClass:"newsTitle"},[t._v(t._s(e.updated_at)),n("span",[t._v(t._s(e.title))])])])})],2)])},staticRenderFns:[]};var w=n("VU/8")({props:["newsList"],data:function(){return{}}},b,!1,function(t){n("SK99")},"data-v-7d3b1afa",null).exports,T=n("VU/8")(null,null,!1,null,null,null).exports,L=n("VU/8")(null,null,!1,null,null,null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"App"}},[n("h1",{staticClass:"articlePageTitle"},[t._v(t._s(t.post_data.title))]),n("div",{staticClass:"dateNote"},[t._v(t._s(t.post_data.updated_at))]),n("div",[t._v(t._s(t.post_data.content))])])},staticRenderFns:[]};var U=n("VU/8")({props:["newsList"],data:function(){return{post_data:{}}},created:function(){var t=this.$route.params.id;this.post_data=this.newsList[t]},methods:{}},k,!1,function(t){n("lo3Q")},"data-v-95b7ca3e",null).exports;i.a.use(u.a);var y=new u.a({routes:[{path:"/",name:"home",component:v},{path:"/members",name:"members",component:g},{path:"/projects",name:"projects",component:_},{path:"/publications",name:"publications",component:C},{path:"/news",name:"news",component:w},{path:"/post/:id",name:"post",component:U},{path:"/videos",name:"videos",component:T},{path:"/FQAs",name:"FQAs",component:L}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:y,components:{App:c},template:"<App/>"})},OAPg:function(t,e){},OeUU:function(t,e,n){t.exports=n.p+"static/img/cravingprobe_banner.456e2e3.png"},SK99:function(t,e){},UWkB:function(t,e){},"c+i7":function(t,e){},lo3Q:function(t,e){},sAqY:function(t,e){},yq0S:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2a597561f8fab3110add.js.map