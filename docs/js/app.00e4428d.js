(function(e){function t(t){for(var r,a,i=t[0],o=t[1],l=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("5ed1"),n("6597");function c(e,t,n,c,s,a){var i=Object(r["v"])("Nav"),o=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(i),Object(r["h"])(o)],64)}var s={class:"menu",style:{float:"left","border-color":"black","border-style":"none solid none none"}},a={class:"menu-list"},i=Object(r["g"])(" Home "),o=Object(r["g"])(" App Info "),l=Object(r["g"])(" Profile Management "),u=Object(r["g"])(" Exercise Log "),b=Object(r["g"])(" Weekly Schedule "),d=Object(r["g"])(" Sharing With Friends "),p=Object(r["g"])(" Login ");function O(e,t,n,c,O,j){var f=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("aside",s,[Object(r["e"])("ul",a,[Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/","active-class":"is-active",exact:""},{default:Object(r["C"])((function(){return[i]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/AppInfo","active-class":"is-active"},{default:Object(r["C"])((function(){return[o]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/Profile","active-class":"is-active"},{default:Object(r["C"])((function(){return[l]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/ExerciseLog","active-class":"is-active"},{default:Object(r["C"])((function(){return[u]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/Schedule","active-class":"is-active"},{default:Object(r["C"])((function(){return[b]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/Sharing","active-class":"is-active"},{default:Object(r["C"])((function(){return[d]})),_:1})]),Object(r["e"])("li",null,[Object(r["h"])(f,{to:"/Login","active-class":"is-active"},{default:Object(r["C"])((function(){return[p]})),_:1})])])])}var j={data:function(){return{isActive:!1}}},f=n("6b0d"),h=n.n(f);const v=h()(j,[["render",O]]);var m=v,g={components:{Nav:m}};const y=h()(g,[["render",c]]);var w,x=y,k=n("6c02"),P=n("1da1"),S=(n("96cf"),n("d3b7"),null!==(w="/")&&void 0!==w?w:"http://localhost:3100/");function q(e){return L.apply(this,arguments)}function L(){return L=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:null,r=s.length>2&&void 0!==s[2]?s[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(S+t,{method:null!==r&&void 0!==r?r:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,fetch(S+t);case 11:c=e.sent;case 12:if(c.ok){e.next=16;break}return e.next=15,c.json();case 15:throw e.sent;case 16:return e.next=18,c.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),console.log("There was an error");case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),L.apply(this,arguments)}function _(e,t){return q("users/login",{handle:e,password:t})}var T={user:null,messages:[],toRoute:"/Sharing",Login:function(e,t){var n=this;return Object(P["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_(e,t);case 3:c=r.sent,n.user=c.user,At.push(n.toRoute),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("There was a problem in logging in");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},A=T,C={class:"home"},E=Object(r["e"])("pre",null,"            Welcome to Purposeful Fitness\r\n\r\n            Purposeful Fitness is an application that is meant to help you in your exercise routine\r\n        ",-1),I={class:"container"},R={class:"field",style:{"margin-left":"15%"}},D=Object(r["g"])("Click here for more information");function M(e,t,n,c,s,a){var i=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("div",C,[E,Object(r["e"])("div",I,[Object(r["e"])("div",R,[Object(r["h"])(i,{class:"button is-link is-light is-rounded is-normal",to:"/AppInfo"},{default:Object(r["C"])((function(){return[D]})),_:1})])])])}var N={name:"Home",components:{}};const U=h()(N,[["render",M]]);var V=U,W={class:"AppInfo"},F=Object(r["e"])("pre",null,"\t\t\t\tHome: This is the home page of the application.\r\n\r\n\t\t\t\tApp info: This is the page that describes the pages in the\r\n\t\t\t\tmenu.\r\n\r\n\t\t\t\tProfile Management: This is the page that displays the users name, username, and\r\n\t\t\t\temail. This is also where the user can change the name, username, email, and\r\n\t\t\t\tpassword.\r\n\r\n\t\t\t\tExercise Log: This is the page where the user can input the exercise done.\r\n\r\n\t\t\t\tWeekly Schedule: This is the page where a user can create a weekly schedule. The\r\n\t\t\t\tuser can also modify the weekly schedule.\r\n\r\n\t\t\t\tSharing With Friends: This is the page where a user can send messages about\r\n\t\t\t\texercise to other users of this application.\r\n\t\t\t",-1),H={class:"container",style:{"margin-left":"20%"}},J=Object(r["g"])("Back to home");function z(e,t){var n=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("div",W,[F,Object(r["e"])("div",H,[Object(r["h"])(n,{class:"button is-link is-light is-rounded is-normal",to:"/"},{default:Object(r["C"])((function(){return[J]})),_:1})])])}const $={},B=h()($,[["render",z]]);var G=B,K=(n("b0c0"),{class:"Profile"}),Q={class:"block",style:{}},X={style:{"margin-left":"15%"}},Y={class:"block",style:{}},Z={style:{"margin-left":"15%"}},ee={class:"card",style:{"margin-left":"15%"}},te=Object(r["e"])("p",null,"Profile picture:",-1),ne=Object(r["e"])("br",null,null,-1),re=["src","alt"];function ce(e,t,n,c,s,a){return Object(r["q"])(),Object(r["d"])("div",K,[Object(r["e"])("div",Q,[Object(r["e"])("p",X,"Name: "+Object(r["x"])(a.name),1)]),Object(r["e"])("div",Y,[Object(r["e"])("p",Z,"Handle: "+Object(r["x"])(a.handle),1)]),Object(r["e"])("div",ee,[te,ne,Object(r["e"])("figure",null,[Object(r["e"])("img",{src:a.picture,alt:e.user_handle},null,8,re)])])])}var se={data:function(){return{Session:A}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName},handle:function(){return this.Session.user.handle},picture:function(){return this.Session.user.pic}}};const ae=h()(se,[["render",ce]]);var ie=ae,oe={class:"Sharing"},le={class:"container"},ue={class:"column"};function be(e,t,n,c,s,a){var i=Object(r["v"])("post");return Object(r["q"])(),Object(r["d"])("div",oe,[Object(r["e"])("div",le,[Object(r["e"])("div",ue,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.posts,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:"post",key:e.src},[Object(r["h"])(i,{post:e},null,8,["post"])])})),128))])])])}var de={class:"card",style:{"margin-left":"20%","margin-right":"20%"}},pe={class:"card-image"},Oe={class:"image is-4by3"},je=["src","alt"],fe={class:"card-content"},he={class:"media"},ve={class:"media-left"},me={class:"image is-48x48"},ge=["src"],ye={class:"media-content"},we={class:"title is-4"},xe={class:"subtitle is-6"},ke=Object(r["e"])("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016",-1),Pe={class:"content"},Se=Object(r["e"])("footer",{class:"card-footer"},[Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Save"),Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Edit"),Object(r["e"])("a",{href:"#",class:"card-footer-item"},"Delete")],-1);function qe(e,t,n,c,s,a){return Object(r["q"])(),Object(r["d"])("div",de,[Object(r["e"])("div",pe,[Object(r["e"])("figure",Oe,[Object(r["e"])("img",{src:n.post.src,alt:n.post.alt},null,8,je)])]),Object(r["e"])("div",fe,[Object(r["e"])("div",he,[Object(r["e"])("div",ve,[Object(r["e"])("figure",me,[Object(r["e"])("img",{src:n.post.user.pic,alt:"Placeholder image"},null,8,ge)])]),Object(r["e"])("div",ye,[Object(r["e"])("p",we,Object(r["x"])(n.post.user.firstName)+" "+Object(r["x"])(n.post.user.lastName),1),Object(r["e"])("p",xe,Object(r["x"])(n.post.user.handle),1),ke])]),Object(r["e"])("div",Pe,Object(r["x"])(n.post.caption),1)]),Se])}var Le={props:{post:Object}};const _e=h()(Le,[["render",qe]]);var Te=_e;function Ae(e){return q("posts/wall/"+e)}function Ce(e){return q("posts/feed/"+e)}var Ee={components:{Post:Te},data:function(){return{posts:Ae(A.user.handle)}}};const Ie=h()(Ee,[["render",be]]);var Re=Ie,De={class:"Schedule"},Me=Object(r["f"])('<div class="block" style=""><p style="margin-left:15%;">Monday: Lorem</p></div><div class="block" style=""><p style="margin-left:15%;">Tuesday: ipsum</p></div><div class="block" style=""><p style="margin-left:15%;">Wednesday: dolor</p></div><div class="block" style=""><p style="margin-left:15%;">Thursday: sit</p></div><div class="block" style=""><p style="margin-left:15%;">Friday: amet</p></div><div class="block" style=""><p style="margin-left:15%;">Saturday: Consectetur</p></div><div class="block" style=""><p style="margin-left:15%;">Sunday: adipscing</p></div>',7),Ne=[Me];function Ue(e,t){return Object(r["q"])(),Object(r["d"])("div",De,Ne)}const Ve={},We=h()(Ve,[["render",Ue]]);var Fe=We,He={class:"Sharing"},Je={class:"container"},ze={class:"column"};function $e(e,t,n,c,s,a){var i=Object(r["v"])("postInput"),o=Object(r["v"])("post");return Object(r["q"])(),Object(r["d"])("div",He,[Object(r["e"])("div",Je,[Object(r["e"])("div",ze,[Object(r["h"])(i,{"new-post":e.newPost},null,8,["new-post"]),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.posts,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:"post",key:e.src},[Object(r["h"])(o,{post:e},null,8,["post"])])})),128))])])])}var Be={class:"card-content"},Ge={class:"content"},Ke={class:"field"},Qe=Object(r["e"])("label",{class:"label"},"Picture",-1),Xe={class:"control"},Ye={class:"field"},Ze=Object(r["e"])("label",{class:"label"},"Alt",-1),et={class:"control"},tt={class:"field"},nt=Object(r["e"])("label",{class:"label"},"Caption",-1),rt={class:"control"},ct={class:"field"},st={class:"control"},at={class:"radio"},it=Object(r["g"])(" Public "),ot={class:"radio"},lt=Object(r["g"])(" Private "),ut=Object(r["e"])("footer",{class:"card-footer"},[Object(r["e"])("button",{class:"button is-link card-footer-item",type:"submit"},"Submit"),Object(r["e"])("button",{class:"button is-link is-light card-footer-item",type:"reset"},"Cancel")],-1);function bt(e,t,n,c,s,a){return Object(r["q"])(),Object(r["d"])("form",{class:"card",style:{"margin-left":"20%","margin-right":"20%"},onSubmit:t[5]||(t[5]=Object(r["E"])((function(t){return e.$emit("add")}),["prevent"]))},[Object(r["e"])("div",Be,[Object(r["e"])("div",Ge,[Object(r["e"])("div",Ke,[Qe,Object(r["e"])("div",Xe,[Object(r["D"])(Object(r["e"])("input",{class:"input",type:"url",placeholder:"Input a URL to a picture","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.post.src=e})},null,512),[[r["A"],s.post.src]])])]),Object(r["e"])("div",Ye,[Ze,Object(r["e"])("div",et,[Object(r["D"])(Object(r["e"])("input",{class:"input",type:"text",placeholder:"Some alternate text for this picture","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.post.alt=e})},null,512),[[r["A"],s.post.alt]])])]),Object(r["e"])("div",tt,[nt,Object(r["e"])("div",rt,[Object(r["D"])(Object(r["e"])("textarea",{class:"textarea",placeholder:"Some text to explain this picture","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.post.caption=e})},null,512),[[r["A"],s.post.caption]])])]),Object(r["e"])("div",ct,[Object(r["e"])("div",st,[Object(r["e"])("label",at,[Object(r["D"])(Object(r["e"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.post.isPublic=e}),value:!0},null,512),[[r["z"],s.post.isPublic]]),it]),Object(r["e"])("label",ot,[Object(r["D"])(Object(r["e"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.post.isPublic=e}),value:!1},null,512),[[r["z"],s.post.isPublic]]),lt])])])])]),ut],32)}var dt={props:{newPost:Object},data:function(){return{post:this.newPost}},watch:{newPost:function(){this.post=this.newPost}}};const pt=h()(dt,[["render",bt]]);var Ot=pt,jt=function(){return{user:A.user,user_handle:A.user.handle}},ft={components:{Post:Te,postInput:Ot},data:function(){return{posts:[],newPost:jt()}},mounted:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ce(A.user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};const ht=h()(ft,[["render",$e]]);var vt=ht,mt={class:"field"},gt={class:"field"},yt=Object(r["e"])("label",{class:"label"},"Email",-1),wt={class:"field"},xt=Object(r["e"])("label",{class:"label"},"Password",-1),kt=Object(r["e"])("div",{class:"field"},[Object(r["e"])("button",{class:"button is-link is-rounded is-large"}," Login ")],-1);function Pt(e,t,n,c,s,a){return Object(r["q"])(),Object(r["d"])("form",{class:"box",style:{"margin-left":"30%","margin-right":"30%"},onSubmit:t[2]||(t[2]=Object(r["E"])((function(e){return a.login()}),["prevent"]))},[Object(r["e"])("div",mt,[Object(r["e"])("div",gt,[yt,Object(r["D"])(Object(r["e"])("input",{class:"input is-rounded",type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[r["A"],e.email]])]),Object(r["e"])("div",wt,[xt,Object(r["D"])(Object(r["e"])("input",{class:"input is-rounded",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[r["A"],e.password]])])]),kt],32)}var St={data:function(){return{email:null,password:null,Session:A}},methods:{login:function(){this.Session.Login(this.email,this.password)}}};const qt=h()(St,[["render",Pt]]);var Lt=qt,_t=[{path:"/",name:"Home",component:V},{path:"/AppInfo",name:"AppInfo",component:G},{path:"/Profile",name:"Profile",component:ie,meta:{requiresLogin:!0}},{path:"/ExerciseLog",name:"ExerciseLog",component:Re,meta:{requiresLogin:!0}},{path:"/Schedule",name:"Schedule",component:Fe,meta:{requiresLogin:!0}},{path:"/Sharing",name:"Sharing",component:vt,meta:{requiresLogin:!0}},{path:"/Login",name:"Login",component:Lt}],Tt=Object(k["a"])({history:Object(k["b"])(""),routes:_t});Tt.beforeEach((function(e,t,n){e.meta.requiresLogin&&!A.user?n("/login"):n()}));var At=Tt;Object(r["c"])(x).use(At).mount("#app")}});
//# sourceMappingURL=app.00e4428d.js.map