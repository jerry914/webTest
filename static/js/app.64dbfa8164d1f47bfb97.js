webpackJsonp([0],{"26CF":function(t,e){},"5i5W":function(t,e,i){t.exports=i.p+"static/img/cravingprobe_banner.456e2e3.png"},A3wp:function(t,e){},"KC+i":function(t,e){},Lzbx:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"menuContainer"}},[i("router-link",{staticClass:"logoContainer",attrs:{to:"/"}},[i("div",{staticClass:"logo"},[t._v("UbiComp Lab")]),i("div",{staticClass:"subLogo"},[t._v("@NTHU")])]),t._l(t.menuList,function(e,a){return i("router-link",{key:a,staticClass:"menuItem",class:t.$route.path==e.link?"activate":"",attrs:{to:e.link}},[t._v(t._s(e.name)),i("div",{attrs:{id:"underline"}})])}),i("div",{staticClass:"menuIcon",class:t.menuclassList,on:{click:function(e){return t.opentheDrawer()}}},[i("div",{staticClass:"menuIconBar1"}),i("div",{staticClass:"menuIconBar2"}),i("div",{staticClass:"menuIconBar3"})]),t.drawerStatus?i("div",{attrs:{id:"drawer"}},t._l(t.menuList,function(e,a){return i("router-link",{key:a,staticClass:"drawerItem",attrs:{to:e.link}},[t._v(t._s(e.name))])}),1):t._e()],2)},staticRenderFns:[]};var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footerContainer"}},[i("div",{staticClass:"logoContainer"},[i("div",{staticClass:"logoImg"},[t._v("(LEGO)")]),i("div",{staticClass:"logo"},[t._v("UbiComp Lab")]),i("div",{staticClass:"subLogo"},[t._v("@NTHU")])]),i("div",{staticClass:"contactContainer"},[i("h3",[t._v("Contact Info")]),i("div",{staticClass:"contact"},[t._v("Interdisciplinary Program of Technology and Art"),i("br"),t._v("National Tsing Hua University"),i("br"),t._v("Nanda Campus"),i("br"),t._v("No. 521, Nanda Road, East District, Hsinchu 300145095, Taiwan"),i("br")]),i("a",{staticClass:"email",attrs:{href:"mailto: nthu.ubicomp.lab@gmail.com"}},[t._v("nthu.ubicomp.lab@gmail.com")])]),i("div",{staticClass:"copyright"},[t._v("© 2021 UbiComp Laboratory")])])}]};var o={name:"App",components:{menuTop:i("VU/8")({data:function(){return{menuList:[{name:"Home",link:"/"},{name:"Members",link:"/members/all_members"},{name:"Projects",link:"/projects/all_projects"},{name:"Publications",link:"/publications/publications"},{name:"News",link:"/news"},{name:"Videos",link:"/videos"},{name:"FAQs",link:"/FQAs"}],drawerStatus:!1,menuclassList:{menuIconContainer:!0,change:!1}}},watch:{$route:function(){this.drawerStatus=!1,this.menuclassList.change=!1}},mounted:function(){},methods:{opentheDrawer:function(){this.drawerStatus=!this.drawerStatus,this.menuclassList.change=!this.menuclassList.change}}},n,!1,function(t){i("cG+B")},"data-v-6b99ce86",null).exports,footerBom:i("VU/8")({data:function(){return{menuList:[{name:"Home",link:"/"},{name:"Members",link:"/members"},{name:"Projects",link:"/projects"},{name:"Publications",link:"/publications"},{name:"News",link:"/news"},{name:"Videos",link:"/videos"},{name:"FAQs",link:"/FQAs"}],drawerStatus:!1,menuclassList:{menuIconContainer:!0,change:!1}}},watch:{$route:function(){this.drawerStatus=!1,this.menuclassList.change=!1}},mounted:function(){},methods:{opentheDrawer:function(){this.drawerStatus=!this.drawerStatus,this.menuclassList.change=!this.menuclassList.change}}},s,!1,function(t){i("A3wp")},"data-v-2dfe6eae",null).exports},data:function(){return{newsList:[{updated_at:"2021/11/30",title:"The website of UbiComp Lab at National Tsing Hua University is up and running!!!",content:""},{updated_at:"2021/11/30",title:"The website of UbiComp Lab at National Tsing Hua University is up and running!!!",content:""}]}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("menuTop",{staticClass:"menuTop"}),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view",{staticClass:"content",attrs:{newsList:this.newsList}})],1),this._v(" "),e("footerBom")],1)},staticRenderFns:[]};var c,l=i("VU/8")(o,r,!1,function(t){i("c+i7")},null,null).exports,d=i("/ocq"),u={data:function(){return{idx:0,isLoad:!1,pages:[{image:i("5i5W"),title:"TechLifeProbe1",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""},{image:i("5i5W"),title:"TechLifeProbe2",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""},{image:i("5i5W"),title:"TechLifeProbe3",content:"Using Mobile and Wearable Technologies to Improve Adolescents' Smartphone Addiction Through Sharing Personal Data with Their Parents",link:""}],pagesNum:3}},methods:{init:function(){var t=this;this.pagesNum=this.pages.length,c=setInterval(function(){t.idx<t.pagesNum-1?t.idx+=1:t.idx=0},4e3)},changePath:function(t){this.$router.push({path:"/works/post/"+t})}},created:function(){this.init(),this.isLoad=!0},beforeDestroy:function(){clearInterval(c)}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"SlideShow"}},[i("div",{style:{"background-image":"url("+t.pages[t.idx].image+")"},attrs:{id:"sliceshowContainer"}},[t.pages[t.idx]?i("div",{staticClass:"sectionContainer"},[i("div",{staticClass:"sectionTitle"},[t._v(t._s(t.pages[t.idx].title))]),i("div",{staticClass:"sectionText"},[t._v(t._s(t.pages[t.idx].content))])]):t._e()]),i("div",{staticClass:"slideDotContainer"},t._l(t.pagesNum,function(e){return i("div",{staticClass:"slideDot",class:e==t.idx+1?"activite":""})}),0)])},staticRenderFns:[]};var h={props:["newsList"],components:{SlideShow:i("VU/8")(u,p,!1,function(t){i("Lzbx")},"data-v-364456dd",null).exports},data:function(){return{intro_img:""}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"PageContainer"}},[i("div",{staticClass:"slideContainer"},[i("SlideShow")],1),t._m(0),i("div",{staticClass:"newsContainer"},[i("div",{staticClass:"blockTitle"},[t._v("Recent news")]),t._l(t.newsList,function(e,a){return i("div",{key:a,staticClass:"newsTitleBlock"},[i("div",{staticClass:"newsDate"},[t._v(t._s(e.updated_at))]),i("div",{staticClass:"newsTitle"},[t._v(t._s(e.title))]),i("div",{staticClass:"newLine"})])})],2),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introContainer"},[e("div",{staticClass:"blockTitle"},[this._v("Our Mission")]),e("div",{staticClass:"introText"},[this._v("The UbiComp Lab at National Tsing Hua University incorporates interdisciplinary forces to synergetistically develop computational support to promote people’s health and safety in their daily lives.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutContainer"},[e("div",{staticClass:"blockTitle"},[this._v("About Us")]),e("div",{staticClass:"aboutText"},[this._v("The UbiComp Lab (@NTHU) focuses on designing, building and evaluating high-impact HCI & UbiComp technologies that really apply computing technologies naturally into people’s everyday activities. Specifically, we investigated on building mobile sensing platforms that sense and understand daily behavior, promote healthy behavior (e.g., assisting people with alcohol-addicted, drug-addicted, technology-abuse or gambling-addicted problems in recovery from their addicted or abused behaviors) and facilitate people’s everyday activities (e.g., shopping, driving, parking, and social activities), and improve their real-life safety (e.g., avoiding recommitting drunk driving). ")])])}]};var m=i("VU/8")(h,v,!1,function(t){i("yq0S")},"data-v-41911f0e",null).exports,f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sraffPage"},[i("h1",{staticClass:"TitleU"},[t._v(t._s(t.name))]),t._l(t.data,function(e){return i("div",{staticClass:"staffContainer"},[i("h1",{staticClass:"chairTitle"},[t._v(t._s(e.title))]),i("div",{staticClass:"staffListContainer"},t._l(e.staff,function(e){return i("div",{staticClass:"staffListContentBlock"},[""!=e.href?i("router-link",{staticClass:"staffListName",attrs:{to:e.href}},[t._v(t._s(e.name))]):t._e(),""==e.href?i("div",{staticClass:"staffListName"},[t._v(t._s(e.name))]):t._e(),i("div",{staticClass:"staffListTitle"},[t._v(t._s(e.title))])],1)}),0)])})],2)},staticRenderFns:[]};var g=i("VU/8")({components:{},data:function(){return{name:"Members",data:[{title:"Faculty",staff:[{name:"Chuang-Wen You",title:"Assistant Professor",href:"cwyou"}]},{title:"Post-doctoral Researcher / Research Assistant",staff:[{name:"Min-Wei Hung",title:"Research Assistant",href:""}]},{title:"Current Graduate Students",staff:[{name:"Hsueh-Sung Lu",title:"MS Program at ISA",href:""},{name:"Chieh-Jui Ho",title:"Undergraduates at IPTA",href:""},{name:"Chi-Ting Hou",title:"Undergraduates at IPTA",href:""},{name:"Pin-Chieh Chen",title:"Undergraduates at IPTA",href:""}]}]}},methods:{}},f,!1,function(t){i("KC+i")},"data-v-3f9b95b3",null).exports,_={components:{},data:function(){return{projects:[{category:"Ongoing Research Project",projects:[{title:"Clinical-friendly Drug Psychotherapy with Virtual Reality and Biofeedback Technologies",image:i("nt0z"),id:"vr-drug",content:"Virtual Reality has demonstrated its potential in drug psychotherapy. However, there is little research on the design space of VR experience combined with biofeedback in clinical settings for drug addiction that is aligned with treatment goals. This project explores how to incorporate virtual reality and biofeedback technologies to assist psychotherapists in raising patients' awareness and identifying their cues in psychotherapy. We are currently collaborating with treatment experts from Taipei City Hospital to apply these technologies in real clinical practices.",body:"Chieh-Jui Ho, Chi-Ting Hou, Min-Wei Hung, Chien Wen (Tina) Yuan, Nanyi Bi, Ming-Chyi Huang, Chuang-Wen You. CravingProbe: A System Combining Virtual Reality and Biofeedback Technologies to Assist Drug Psychotherapy, accepted in The First Workshop on Multiple Input Modalities and Sensations for VR/AR Interactions (MIMSVAI 2021). ",pdf:"",video:"https://youtu.be/mtVRF1HeZgI"}]}]}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"PageContainer"}},[e("router-view",{attrs:{projects:this.projects}})],1)},staticRenderFns:[]};var b=i("VU/8")(_,C,!1,function(t){i("26CF")},"data-v-ccdba346",null).exports,y={components:{},data:function(){return{publications:[{category:"2021",projects:[{title:"TechLifeProbe: A Technology Prototype to Probe How Data Sharing With Adolescents' Parents Improves Their Technology Abuse Through Mobile Phones",author:"Pin-Chieh Chen, Min-Wei Hung, Hsueh-Sung Lu, Chien Wen (Tina) Yuan, Nanyi Bi, Wan-Chen  Lee, Ming-Chyi Huang, Chuang-Wen You.",image:i("nt0z"),conference:"",pdf:"https://dl.acm.org/doi/abs/10.1145/3411764.3445278%22",video:""}]}]}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"PageContainer"}},t._l(t.publications,function(e){return i("div",{staticClass:"projectContainer"},[i("div",{staticClass:"blockTitle"},[t._v(t._s(e.category))]),t._l(e.projects,function(e){return i("div",{staticClass:"projectBlock"},[i("div",{staticClass:"projectImg",style:{"background-image":"url("+e.image+")"}}),i("div",{staticClass:"projectTitle"},[t._v(t._s(e.title))]),i("div",{staticClass:"projectAuthor"},[t._v(t._s(e.author))]),i("div",{staticClass:"projectConerence"},[t._v(t._s(e.conference))]),""!=e.pdf?i("a",{staticClass:"projectPdf",attrs:{href:e.pdf,target:"blank"}},[t._v("[PDF]")]):t._e(),""!=e.video?i("a",{staticClass:"projectVideo",attrs:{href:e.video,target:"blank"}},[t._v("[video]")]):t._e()])})],2)}),0)},staticRenderFns:[]};var T=i("VU/8")(y,w,!1,function(t){i("PDn8")},"data-v-2cb653ae",null).exports,k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"PageContainer"}},[i("div",{staticClass:"newsContainer"},[i("h1",{staticClass:"sectionTitle"},[t._v("Recent news")]),t._l(t.newsList,function(e,a){return i("div",{key:a,staticClass:"newsTitleBlock"},[i("div",{staticClass:"newsTitle"},[t._v(t._s(e.updated_at)),i("span",[t._v(t._s(e.title))])])])})],2)])},staticRenderFns:[]};var P=i("VU/8")({props:["newsList"],data:function(){return{}}},k,!1,function(t){i("Pue6")},"data-v-46b00248",null).exports,j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"PageContainer"}},t._l(t.videos,function(e){return i("div",{staticClass:"videoBlock"},[i("youtube",{staticClass:"video",attrs:{"video-id":e.src,"player-width":"360","player-height":"240"}}),i("div",{staticClass:"videoTitle"},[t._v(t._s(e.title))])],1)}),0)},staticRenderFns:[]};var L=i("VU/8")({components:{},data:function(){return{videos:[{title:"",src:"mtVRF1HeZgI"},{title:"",src:"vGVaI6lkbeU"},{title:"",src:"7gU0Zqo1uDs"}]}}},j,!1,function(t){i("Z8jk")},"data-v-587a5894",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"PageContainer"}},[e("h1",[this._v("FQA")]),e("h2",[this._v("How to get involved in UbiComp Lab at NTHU?")]),e("p",[this._v("We are looking for prospective Ph.D., Master, and Undergraduate students to join us. For prospective students, Please follow the instructions listed below:")]),e("ul",[e("li",[this._v("Ph.D and graduate students"),e("p",[this._v("We can only take prospective students who have been admitted to the NTHU IMS, IPHD, ISA, or GIAT. For those who have admitted those Ph.D./master programs, please email your CV and transcript to Prof. Chuang-Wen You ! ")])]),e("li",[this._v("Undergraduate students"),e("p",[this._v("We welcome all undergraduate students to work with us.  Please email Prof. Chuang-Wen You to make an appointment!")])])])])}]};var A=i("VU/8")({components:{},data:function(){return{}}},U,!1,function(t){i("Vo+u")},"data-v-6e6bb7a6",null).exports,x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"postApp"}},[i("h1",{staticClass:"articlePageTitle"},[t._v(t._s(t.post_data.title))]),i("div",{staticClass:"articlePageJumpbar",style:{"background-image":"url("+t.post_data.image+")"}}),i("div",[t._v(t._s(t.post_data.content))]),i("div",{staticClass:"HTMLContainer",domProps:{innerHTML:t._s(t.post_data.body)}}),""!=t.post_data.pdf?i("a",{staticClass:"projectPdf",attrs:{href:t.post_data.pdf,target:"blank"}},[t._v("[PDF]")]):t._e(),""!=t.post_data.video?i("a",{staticClass:"projectVideo",attrs:{href:t.post_data.video,target:"blank"}},[t._v("[video]")]):t._e()])},staticRenderFns:[]};var H=i("VU/8")({props:["projects"],data:function(){return{post_data:{}}},created:function(){for(var t=this.$route.params.id,e=0;e<this.projects.length;e++)for(var i=0;i<this.projects[e].projects.length;i++)t==this.projects[e].projects[i].id&&(this.post_data=this.projects[e].projects[i])},methods:{}},x,!1,function(t){i("xTYd")},"data-v-78fc71ba",null).exports,I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ProjectList"}},t._l(t.projects,function(e){return i("div",{staticClass:"projectContainer"},[i("div",{staticClass:"blockTitle"},[t._v(t._s(e.category))]),t._l(e.projects,function(e){return i("div",{staticClass:"projectBlock"},[i("div",{staticClass:"projectImg",style:{"background-image":"url("+e.image+")"}}),i("router-link",{staticClass:"projectTitle",attrs:{to:"post/"+e.id}},[t._v(t._s(e.title))]),i("div",{staticClass:"projectContent"},[t._v(t._s(e.content))])],1)})],2)}),0)},staticRenderFns:[]};var S=i("VU/8")({props:["projects"],components:{},data:function(){return{}}},I,!1,function(t){i("RE4j")},"data-v-e0ac47be",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"PageContainer"}})},staticRenderFns:[]};var R=i("VU/8")({components:{},data:function(){return{}}},F,!1,function(t){i("upZ3")},"data-v-1ef97542",null).exports;a.a.use(d.a);var V=new d.a({routes:[{path:"/",name:"home",component:m},{path:"/members/all_members",name:"members",component:g},{path:"/members/cwyou",name:"cwyou",component:R},{path:"/projects",name:"projects",component:b,children:[{path:"post/:id",name:"project",component:H},{path:"all_projects",name:"all_projects",component:S}]},{path:"/publications/publications",name:"publications",component:T},{path:"/news",name:"news",component:P},{path:"/post/:id",name:"post",component:H},{path:"/videos",name:"videos",component:L},{path:"/FQAs",name:"FQAs",component:A}]}),W=i("5/be");a.a.use(W.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:V,components:{App:l},template:"<App/>"})},PDn8:function(t,e){},Pue6:function(t,e){},RE4j:function(t,e){},"Vo+u":function(t,e){},Z8jk:function(t,e){},"c+i7":function(t,e){},"cG+B":function(t,e){},nt0z:function(t,e,i){t.exports=i.p+"static/img/project1.ad500f2.jpg"},upZ3:function(t,e){},xTYd:function(t,e){},yq0S:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.64dbfa8164d1f47bfb97.js.map