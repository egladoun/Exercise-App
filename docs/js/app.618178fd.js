(function(e){function t(t){for(var r,a,i=t[0],o=t[1],l=t[2],d=0,b=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("5ed1"),n("6597");function s(e,t,n,s,c,a){var i=Object(r["v"])("Nav"),o=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(i),Object(r["h"])(o)],64)}var c={class:"menu",style:{float:"left","border-color":"black","border-style":"none solid none none"}},a={class:"menu-list"},i=Object(r["g"])(" Home "),o=Object(r["g"])(" App Info "),l=Object(r["g"])(" Profile Management "),u=Object(r["g"])(" Exercise Log "),d=Object(r["g"])(" Weekly Schedule "),b=Object(r["g"])(" Sharing With Friends "),p=Object(r["g"])(" Login ");function f(e,t,n,s,f,h){var O=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("aside",c,[Object(r["e"])("ul",a,[Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/","active-class":"is-active",exact:""},{default:Object(r["B"])((function(){return[i]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/AppInfo","active-class":"is-active"},{default:Object(r["B"])((function(){return[o]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/Profile","active-class":"is-active"},{default:Object(r["B"])((function(){return[l]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/ExerciseLog","active-class":"is-active"},{default:Object(r["B"])((function(){return[u]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/Schedule","active-class":"is-active"},{default:Object(r["B"])((function(){return[d]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/Sharing","active-class":"is-active"},{default:Object(r["B"])((function(){return[b]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(O,{to:"/Login","active-class":"is-active"},{default:Object(r["B"])((function(){return[p]})),_:1})])])])}var h={data:function(){return{isActive:!1}}},O=n("6b0d"),j=n.n(O);const v=j()(h,[["render",f]]);var m=v,g={components:{Nav:m}};const y=j()(g,[["render",s]]);var w,x=y,k=n("6c02"),S=n("1da1"),P=(n("96cf"),n("d3b7"),null!==(w="/")&&void 0!==w?w:"http://localhost:3100/");function q(e){return L.apply(this,arguments)}function L(){return L=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:null,r=c.length>2&&void 0!==c[2]?c[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(P+t,{method:null!==r&&void 0!==r?r:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:s=e.sent,e.next=12;break;case 9:return e.next=11,fetch(P+t);case 11:s=e.sent;case 12:if(s.ok){e.next=16;break}return e.next=15,s.json();case 15:throw e.sent;case 16:return e.next=18,s.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),console.log("There was an error");case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),L.apply(this,arguments)}function T(e,t){return q("users/login",{handle:e,password:t})}var _={user:null,messages:[],toRoute:"/Sharing",Login:function(e,t){var n=this;return Object(S["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,T(e,t);case 3:s=r.sent,n.user=s.user,ot.push(n.toRoute),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("There was a problem in logging in");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},B=_,E={class:"home"},A=Object(r["e"])("pre",null,"            Welcome to Purposeful Fitness\r\n\r\n            Purposeful Fitness is an application that is meant to help you in your exercise routine\r\n        ",-1),M={class:"container"},N={class:"field",style:{"margin-left":"15%"}},R=Object(r["g"])("Click here for more information");function I(e,t,n,s,c,a){var i=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("div",E,[A,Object(r["e"])("div",M,[Object(r["e"])("div",N,[Object(r["h"])(i,{class:"button is-link is-light is-rounded is-normal",to:"/AppInfo"},{default:Object(r["B"])((function(){return[R]})),_:1})])])])}var W={name:"Home",components:{}};const C=j()(W,[["render",I]]);var F=C,H={class:"AppInfo"},J=Object(r["e"])("pre",null,"\t\t\t\tHome: This is the home page of the application.\r\n\r\n\t\t\t\tApp info: This is the page that describes the pages in the\r\n\t\t\t\tmenu.\r\n\r\n\t\t\t\tProfile Management: This is the page that displays the users name, username, and\r\n\t\t\t\temail. This is also where the user can change the name, username, email, and\r\n\t\t\t\tpassword.\r\n\r\n\t\t\t\tExercise Log: This is the page where the user can input the exercise done.\r\n\r\n\t\t\t\tWeekly Schedule: This is the page where a user can create a weekly schedule. The\r\n\t\t\t\tuser can also modify the weekly schedule.\r\n\r\n\t\t\t\tSharing With Friends: This is the page where a user can send messages about\r\n\t\t\t\texercise to other users of this application.\r\n\t\t\t",-1),z={class:"container",style:{"margin-left":"20%"}},D=Object(r["g"])("Back to home");function U(e,t){var n=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("div",H,[J,Object(r["e"])("div",z,[Object(r["h"])(n,{class:"button is-link is-light is-rounded is-normal",to:"/"},{default:Object(r["B"])((function(){return[D]})),_:1})])])}const V={},$=j()(V,[["render",U]]);var G=$,K=(n("b0c0"),{class:"Profile"}),Q={class:"block",style:{}},X={style:{"margin-left":"15%"}},Y={class:"block",style:{}},Z={style:{"margin-left":"15%"}},ee={class:"card",style:{"margin-left":"15%"}},te=Object(r["e"])("p",null,"Profile picture:",-1),ne=Object(r["e"])("br",null,null,-1),re=["src","alt"];function se(e,t,n,s,c,a){return Object(r["q"])(),Object(r["d"])("div",K,[Object(r["e"])("div",Q,[Object(r["e"])("p",X,"Name: "+Object(r["x"])(a.name),1)]),Object(r["e"])("div",Y,[Object(r["e"])("p",Z,"Handle: "+Object(r["x"])(a.handle),1)]),Object(r["e"])("div",ee,[te,ne,Object(r["e"])("figure",null,[Object(r["e"])("img",{src:a.picture,alt:e.user_handle},null,8,re)])])])}var ce={data:function(){return{Session:B}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName},handle:function(){return this.Session.user.handle},picture:function(){return this.Session.user.pic}}};const ae=j()(ce,[["render",se]]);var ie=ae,oe={class:"Sharing"},le={class:"container"},ue={class:"column"};function de(e,t,n,s,c,a){var i=Object(r["v"])("post");return Object(r["q"])(),Object(r["d"])("div",oe,[Object(r["e"])("div",le,[Object(r["e"])("div",ue,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.posts,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:"post",key:e.src},[Object(r["h"])(i,{post:e},null,8,["post"])])})),128))])])])}var be={class:"card",style:{"margin-left":"20%","margin-right":"20%"}},pe={class:"card-image"},fe={class:"image is-4by3"},he=["src","alt"],Oe={class:"card-content"},je={class:"media"},ve={class:"media-left"},me={class:"image is-48x48"},ge=["src"],ye={class:"media-content"},we={class:"title is-4"},xe={class:"subtitle is-6"},ke=Object(r["e"])("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016",-1),Se={class:"content"},Pe=Object(r["e"])("footer",{class:"card-footer"},[Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Save"),Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Edit"),Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Delete")],-1);function qe(e,t,n,s,c,a){return Object(r["q"])(),Object(r["d"])("div",be,[Object(r["e"])("div",pe,[Object(r["e"])("figure",fe,[Object(r["e"])("img",{src:n.post.src,alt:n.post.alt},null,8,he)])]),Object(r["e"])("div",Oe,[Object(r["e"])("div",je,[Object(r["e"])("div",ve,[Object(r["e"])("figure",me,[Object(r["e"])("img",{src:n.post.user.pic,alt:"Placeholder image"},null,8,ge)])]),Object(r["e"])("div",ye,[Object(r["e"])("p",we,Object(r["x"])(n.post.user.firstName)+" "+Object(r["x"])(n.post.user.lastName),1),Object(r["e"])("p",xe,Object(r["x"])(n.post.user.handle),1),ke])]),Object(r["e"])("div",Se,Object(r["x"])(n.post.caption),1)]),Pe])}var Le={props:{post:Object}};const Te=j()(Le,[["render",qe]]);var _e=Te;function Be(e){return q("posts/wall/"+e)}function Ee(e){return q("posts/feed/"+e)}var Ae={components:{Post:_e},data:function(){return{posts:Be(B.user.handle)}}};const Me=j()(Ae,[["render",de]]);var Ne=Me,Re={class:"Schedule"},Ie=Object(r["f"])('<div class="block" style=""><p style="margin-left:15%;">Monday: Lorem</p></div><div class="block" style=""><p style="margin-left:15%;">Tuesday: ipsum</p></div><div class="block" style=""><p style="margin-left:15%;">Wednesday: dolor</p></div><div class="block" style=""><p style="margin-left:15%;">Thursday: sit</p></div><div class="block" style=""><p style="margin-left:15%;">Friday: amet</p></div><div class="block" style=""><p style="margin-left:15%;">Saturday: Consectetur</p></div><div class="block" style=""><p style="margin-left:15%;">Sunday: adipscing</p></div>',7),We=[Ie];function Ce(e,t){return Object(r["q"])(),Object(r["d"])("div",Re,We)}const Fe={},He=j()(Fe,[["render",Ce]]);var Je=He,ze={class:"Sharing"},De={class:"container"},Ue={class:"column"};function Ve(e,t,n,s,c,a){var i=Object(r["v"])("post");return Object(r["q"])(),Object(r["d"])("div",ze,[Object(r["e"])("div",De,[Object(r["e"])("div",Ue,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.posts,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:"post",key:e.src},[Object(r["h"])(i,{post:e},null,8,["post"])])})),128))])])])}var $e={components:{Post:_e},data:function(){return{posts:[]}},mounted:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ee(B.user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};const Ge=j()($e,[["render",Ve]]);var Ke=Ge,Qe={class:"field"},Xe={class:"field"},Ye=Object(r["e"])("label",{class:"label"},"Email",-1),Ze={class:"field"},et=Object(r["e"])("label",{class:"label"},"Password",-1),tt=Object(r["e"])("div",{class:"field"},[Object(r["e"])("button",{class:"button is-link is-rounded is-large"}," Login ")],-1);function nt(e,t,n,s,c,a){return Object(r["q"])(),Object(r["d"])("form",{class:"box",style:{"margin-left":"30%","margin-right":"30%"},onSubmit:t[2]||(t[2]=Object(r["D"])((function(e){return a.login()}),["prevent"]))},[Object(r["e"])("div",Qe,[Object(r["e"])("div",Xe,[Ye,Object(r["C"])(Object(r["e"])("input",{class:"input is-rounded",type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[r["z"],e.email]])]),Object(r["e"])("div",Ze,[et,Object(r["C"])(Object(r["e"])("input",{class:"input is-rounded",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[r["z"],e.password]])])]),tt],32)}var rt={data:function(){return{email:null,password:null,Session:B}},methods:{login:function(){this.Session.Login(this.email,this.password)}}};const st=j()(rt,[["render",nt]]);var ct=st,at=[{path:"/",name:"Home",component:F},{path:"/AppInfo",name:"AppInfo",component:G},{path:"/Profile",name:"Profile",component:ie,meta:{requiresLogin:!0}},{path:"/ExerciseLog",name:"ExerciseLog",component:Ne,meta:{requiresLogin:!0}},{path:"/Schedule",name:"Schedule",component:Je,meta:{requiresLogin:!0}},{path:"/Sharing",name:"Sharing",component:Ke,meta:{requiresLogin:!0}},{path:"/Login",name:"Login",component:ct}],it=Object(k["a"])({history:Object(k["b"])(""),routes:at});it.beforeEach((function(e,t,n){e.meta.requiresLogin&&!B.user?n("/login"):n()}));var ot=it;Object(r["c"])(x).use(ot).mount("#app")}});
//# sourceMappingURL=app.618178fd.js.map