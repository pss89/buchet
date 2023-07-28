(function(){"use strict";var t={1140:function(t,e,n){var o=n(9963),r=n(6252),i=n(3577);const a={class:"app"};function s(t,e,n,o,s,c){const l=(0,r.up)("metainfo"),u=(0,r.up)("Header"),d=(0,r.up)("Intro"),f=(0,r.up)("Career"),p=(0,r.up)("Tech"),m=(0,r.up)("Project"),g=(0,r.up)("Hobby"),h=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(l,null,{title:(0,r.w5)((({content:t})=>[(0,r.Uk)((0,i.zw)(t?`${t}`:"Buchet About"),1)])),_:1}),(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(f),(0,r.Wm)(p),(0,r.Wm)(m),(0,r.Wm)(g),(0,r.Wm)(h)])}const c={class:"bg-cyan-600 flex items-center justify-between p-4 text-white"},l={class:"font-bold text-lg",href:"/buchet"},u=["src"],d={class:"hidden md:flex space-x-8"},f=["href"],p={class:"hidden md:flex space-x-4"},m=["onClick"],g={class:"md:hidden absolute top-16 right-0 bg-cyan-600 rounded shadow-md p-6 space-y-2"},h={class:"flex space-x-6 pt-4"},b=["onClick"];function w(t,e,n,a,s,w){const v=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("header",c,[(0,r._)("a",l,[(0,r._)("img",{src:s.logoImage,alt:"Logo",class:"w-14"},null,8,u)]),(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.MENU.list,(t=>((0,r.wg)(),(0,r.iD)("a",{href:"#"+t.key,class:"hover:text-gray-300",key:t.key},(0,i.zw)(t.title),9,f)))),128))]),(0,r._)("ul",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.SOCIAL.list,(t=>((0,r.wg)(),(0,r.iD)("li",{onClick:e=>w.pageMove(t.key),key:t.key,class:"cursor-pointer"},[(0,r.Wm)(v,{icon:t.fa},null,8,["icon"])],8,m)))),128))]),(0,r._)("button",{class:"md:hidden text-white",onClick:e[0]||(e[0]=(...t)=>w.toggleMenu&&w.toggleMenu(...t))},[(0,r.Wm)(v,{icon:"fa-solid fa-bars"})]),(0,r.wy)((0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.MENU.list,(t=>((0,r.wg)(),(0,r.iD)("a",{href:"#",class:"hover:text-gray-300 block",key:t.key},(0,i.zw)(t.title),1)))),128)),(0,r._)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.SOCIAL.list,(t=>((0,r.wg)(),(0,r.iD)("li",{onClick:e=>w.pageMove(t.key),key:t.key},[(0,r.Wm)(v,{icon:t.fa},null,8,["icon"])],8,b)))),128))])],512),[[o.F8,s.showMenu]])])}var v={data(){return{showMenu:!1,logoImage:n(6150)}},methods:{toggleMenu(){this.showMenu=!this.showMenu},pageMove:function(t){if(!t)return alert("페이지 이동에 대한 인자값이 없습니다"),!1;switch(t){case"github":window.open("https://github.com/pss89");break;case"blog":window.open("https://buchet.tistory.com/");break;case"insta":window.open("https://www.instagram.com/buchet89/");break;default:return alert("허용하지 않는 유형입니다."),!1}}},inject:["constants"]},y=n(3744);const x=(0,y.Z)(v,[["render",w]]);var _=x;const k={id:"intro",class:"container mx-auto p-4 flex flex-col md:flex-row items-center mt-5"},D={class:"w-full md:w-1/3"},j=["src"],C=(0,r._)("div",{class:"w-full md:w-2/3 md:ml-8 mt-4 md:mt-0"},[(0,r._)("h2",{class:"text-2xl font-bold mb-4"},"안녕하세요! 박성식입니다."),(0,r._)("p",{class:"text-stone-900"},[(0,r.Uk)(" 웹프로그래머로 경력을 쌓고있습니다."),(0,r._)("br"),(0,r.Uk)(" FrontEnd는 기본적으로 html,css,javascript/jquery 사용 경험이 있으며 추가적으로 bootstrap, angularjs 와 같은 FrontEnd FrameWork 사용 경험이 있습니다. "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" 주업무인 BackEnd는 PHP 언어를 사용하였으며 Codeigniter3.x , Laravel 5.x 사용 경험이 있습니다. 주로 Codeigniter 환경에서 개발을 진행하였습니다. "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" 이 외 linux(centos, ubuntu) cli , db(mysql, mariadb) , DevOps(slack, jira/confluence, redmine) , git/github/bitbucket 등을 업무에서 사용 한 경험이 있습니다. ")]),(0,r._)("p",{class:"mt-4 text-stone-900"},[(0,r.Uk)(" 연락 이메일 : seongsigbag2@gmail.com"),(0,r._)("br")])],-1);function S(t,e,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("div",D,[(0,r._)("img",{src:i.profileImage,alt:"Profile",class:"rounded-full w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48"},null,8,j)]),C])}var E={name:"Intro",props:{msg:String},data(){return{profileImage:n(3478)}}};const A=(0,y.Z)(E,[["render",S]]);var z=A;const O={class:"container mx-auto p-4 mt-10",id:"career"},I={class:"text-4xl font-bold mb-6"},M={class:"grid grid-cols-1 mb-10 md:grid-cols-2 gap-6"},H={class:"text-2xl font-bold"},F={class:"text-gray-600"},P={class:"text-gray-600"},W={class:"text-4xl font-bold mb-6"},R={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},T={class:"text-2xl font-bold"},N={class:"text-gray-600"},L={class:"text-gray-600"};function K(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("h1",I,(0,i.zw)(s.constants.S_CAREER.subject),1),(0,r._)("div",M,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.constants.S_CAREER.list,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.key,class:"p-4 border rounded shadow-md"},[(0,r._)("h2",H,(0,i.zw)(t.name),1),(0,r._)("p",F,(0,i.zw)(t.major),1),(0,r._)("p",P,(0,i.zw)(s.formatDate(t.period.startDate))+" ~ "+(0,i.zw)(s.formatDate(t.period.endDate)),1)])))),128))]),(0,r._)("h1",W,(0,i.zw)(s.constants.C_CAREER.subject),1),(0,r._)("div",R,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.constants.C_CAREER.list,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.key,class:"p-4 border rounded shadow-md"},[(0,r._)("h2",T,(0,i.zw)(t.name),1),(0,r._)("p",N,(0,i.zw)(t.belong)+" - "+(0,i.zw)(t.position),1),(0,r._)("p",L,(0,i.zw)(s.formatDate(t.period.startDate))+" ~ "+(0,i.zw)(s.formatDate(t.period.endDate)),1)])))),128))])])}var U={data(){return{}},methods:{formatDate:function(t){const e=Math.floor(t/100),n=t%100;return`${e}.${n.toString().padStart(2,"0")}`}},inject:["constants"]};const Y=(0,y.Z)(U,[["render",K]]);var B=Y;const Z={class:"container mx-auto p-4 mt-10",id:"tech"},q=(0,r._)("h2",{class:"text-3xl font-semibold mb-4"},"사용 가능한 언어 및 기술",-1),J={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},$={class:"text-lg font-semibold mb-2"},G={class:"text-gray-600"};function V(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",Z,[q,(0,r._)("div",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.items,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"border rounded p-4"},[(0,r._)("h3",$,(0,i.zw)(t.title),1),(0,r._)("p",G,(0,i.zw)(t.description),1)])))),128))])])}var Q={data(){return{items:[{title:"PHP",description:"프론트엔드 개발에 사용되는 JavaScript 프레임워크"},{title:"Tailwind CSS",description:"가볍고 유연한 CSS 프레임워크로 디자인하기 쉬움"},{title:"AngularJs",description:"서버 사이드 애플리케이션 개발에 사용되는 JavaScript 런타임"},{title:"VueJs",description:"Facebook에서 만든 JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됨"}]}}};const X=(0,y.Z)(Q,[["render",V]]);var tt=X;const et=(0,r._)("h1",null,"프로젝트",-1),nt={class:"d-flex fill-height justify-center align-center"},ot={class:"text-h2"};function rt(t,e,n,o,a,s){const c=(0,r.up)("v-sheet"),l=(0,r.up)("v-carousel-item"),u=(0,r.up)("v-carousel");return(0,r.wg)(),(0,r.iD)(r.HY,null,[et,(0,r.Wm)(u,{height:"400","hide-delimiters":"",progress:"primary"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.slides,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{height:"100%"},{default:(0,r.w5)((()=>[(0,r._)("div",nt,[(0,r._)("div",ot,(0,i.zw)(t)+" Slide ",1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],64)}var it={data(){return{slides:["First","Second","Third","Fourth","Fifth","Sixth"]}}};const at=(0,y.Z)(it,[["render",rt]]);var st=at;const ct={class:"flex flex-wrap justify-center"},lt=(0,r._)("h1",null,"취미",-1),ut={class:"bg-white rounded-lg shadow-md p-4"},dt={class:"text-xl font-semibold mt-2"},ft={class:"text-gray-600 mt-2"};function pt(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",ct,[lt,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.hobbies,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4"},[(0,r._)("div",ut,[(0,r._)("h3",dt,(0,i.zw)(t.title),1),(0,r._)("p",ft,(0,i.zw)(t.description),1)])])))),128))])}var mt={data(){return{hobbies:[{id:1,title:"Photography",description:"I love capturing beautiful moments with my camera.",image:"/src/assets/hobbies/photography.jpg"},{id:2,title:"Cooking",description:"Cooking is my passion. I enjoy experimenting with new recipes.",image:"/src/assets/hobbies/cooking.jpg"}]}}};const gt=(0,y.Z)(mt,[["render",pt]]);var ht=gt;const bt=t=>((0,r.dD)("data-v-aaf1bf2e"),t=t(),(0,r.Cn)(),t),wt={class:"bg-cyan-600 text-white py-8 w-full bottom-0 left-0 mt-20"},vt=bt((()=>(0,r._)("div",{class:"container mx-auto flex flex-col items-center"},[(0,r._)("div",{class:"text-center md:text-left mb-4 md:mb-0"},[(0,r._)("h3",{class:"text-2xl font-bold"},"Buchet Introduction WebSite"),(0,r._)("p",{class:"text-sm"},"© 2023 All rights reserved.")])],-1))),yt=[vt];function xt(t,e,n,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",wt,yt)}var _t={name:"Footer",props:{msg:String}};const kt=(0,y.Z)(_t,[["render",xt],["__scopeId","data-v-aaf1bf2e"]]);var Dt=kt,jt=n(9590),Ct={name:"App",components:{Header:_,Footer:Dt,Intro:z,Career:B,Tech:tt,Project:st,Hobby:ht},setup(){(0,jt.jq)({title:"Buchet Introduction",htmlAttrs:{lang:"ko",amp:!0},bodyAttrs:{class:["dark-mode","mobile"],tabIndex:0}})}};const St=(0,y.Z)(Ct,[["render",s]]);var Et=St,At=n(2201);const zt=[{path:"/buchet",name:"Main",component:()=>n.e(126).then(n.bind(n,4126))},{path:"/buchet/Info",name:"Info",component:()=>n.e(656).then(n.bind(n,9656)),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e(997).then(n.bind(n,9997))}],Ot=(0,At.p7)({history:(0,At.PO)(),routes:zt});var It=Ot,Mt=n(3636),Ht=n(9417),Ft=n(3024),Pt=n(7810),Wt=n(1493),Rt=n.n(Wt),Tt=n(6579),Nt=n(9638),Lt=n(6300),Kt=(n(9773),Object.freeze({S_CAREER:{subject:"학력 소개",list:[{name:"청운대학교",major:"컴퓨터학과",period:{startDate:"200803",endDate:"201502"}},{name:"안산국제비즈니스고등학교",major:"정보처리과",period:{startDate:"200503",endDate:"200802"}}]},C_CAREER:{subject:"경력 소개",list:[{name:"오아",belong:"개발본부/서버개발팀",position:"매니저/TL",period:{startDate:"201904",endDate:"202303"}},{name:"인터넷토마토",belong:"개발팀",position:"대리",period:{startDate:"201511",endDate:"201812"}}]},MENU:{list:[{key:"intro",title:"소개"},{key:"career",title:"경력"},{key:"tech",title:"기술"},{key:"project",title:"프로젝트"},{key:"hobby",title:"취미"}]},SOCIAL:{list:[{key:"github",fa:"fa-brands fa-github"},{key:"blog",fa:"fa-solid fa-blog"},{key:"insta",fa:"fa-brands fa-instagram"}]}}));const Ut=(0,Tt.Rd)({components:Nt,directives:Lt,ssr:!0,defaults:{global:{ripple:!1}}});Mt.vI.add(Ht.mRB,Ht.xiG,Ft.zhw,Ft.Zzi);const Yt=(0,o.ri)(Et);Yt.provide("constants",Kt),Yt.use(It).use((0,jt.Bg)()).component("font-awesome-icon",Pt.GN).use(Rt()).use(Ut).mount("#app")},6150:function(t,e,n){t.exports=n.p+"img/buchet_icon.ab385525.png"},3478:function(t,e,n){t.exports=n.p+"img/pss_caricature.b5411be9.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{126:"19f9e22d",656:"94824079",997:"646c362a"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".0bc66a55.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="buchet-vue-project:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/buchet/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(e(a,s))return r();t(o,s,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={126:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(e&&e(o);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkbuchet_vue_project"]=self["webpackChunkbuchet_vue_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1140)}));o=n.O(o)})();
//# sourceMappingURL=app.35d50d81.js.map