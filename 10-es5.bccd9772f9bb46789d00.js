function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XpXM:function(n,t,e){"use strict";e.r(t),e.d(t,"MainModule",(function(){return b}));var i=e("ofXK"),o=e("tyNb"),a=e("fXoL"),r=e("bTqV");function c(n,t){if(1&n){var e=a.Sb();a.Rb(0,"button",10),a.Zb("click",(function(){return a.jc(e),a.bc().onLogout()})),a.qc(1,"logout"),a.Qb()}}var l,u,s,f=[{path:"",component:(l=function(){function n(t){_classCallCheck(this,n),this.router=t,this.isLogin=null}return _createClass(n,[{key:"ngOnInit",value:function(){this.isLogin=localStorage.getItem("user"),this.router.navigate(null!==this.isLogin?["/","main","post"]:["/","main","join"]),$(".example-container").ready((function(){$(".menu").click((function(){$("aside ").toggleClass("toggle")})),$("mat-list-item").click((function(){$("aside").removeClass("toggle")})),$(".main-content").click((function(){$("aside").removeClass("toggle")}))}))}},{key:"onLogout",value:function(){localStorage.removeItem("user"),this.isLogin=null,this.router.navigate(["/","main","join"])}}]),n}(),l.\u0275fac=function(n){return new(n||l)(a.Mb(o.b))},l.\u0275cmp=a.Gb({type:l,selectors:[["app-main"]],decls:14,vars:1,consts:[[1,"m-container"],[1,"header","pl-2"],["src","../../assets/img/facebook.png","height","40px"],[1,"brand_name"],[1,"spacer"],[1,"navigation","d-flex"],["routerLink","/main/profile"],["routerLink","/main/post"],["mat-flat-button","","color","accent",3,"click",4,"ngIf"],[1,"main-content"],["mat-flat-button","","color","accent",3,"click"]],template:function(n,t){1&n&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Nb(2,"img",2),a.Rb(3,"div",3),a.qc(4,"Social Media"),a.Qb(),a.Nb(5,"div",4),a.Rb(6,"div",5),a.Rb(7,"div",6),a.qc(8,"Profile"),a.Qb(),a.Rb(9,"div",7),a.qc(10,"Posts"),a.Qb(),a.pc(11,c,2,0,"button",8),a.Qb(),a.Qb(),a.Rb(12,"div",9),a.Nb(13,"router-outlet"),a.Qb(),a.Qb()),2&n&&(a.Bb(11),a.ec("ngIf",t.isLogin))},directives:[o.c,i.j,o.e,r.a],styles:[".m-container[_ngcontent-%COMP%]{overflow:hidden}.m-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;position:fixed;align-items:center;top:0;right:0;padding-right:20px;left:0;height:70px;width:100%;background:#363131}.m-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .brand_name[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:400;letter-spacing:1.5px;padding:8px 10px;text-align:center;color:#f35626;background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:hue 6s linear infinite}.m-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.m-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{color:#fff;justify-content:end}.m-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{outline:none;cursor:pointer;padding:10px 20px;color:#f35626;background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:hue 10s linear infinite}.m-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{background:#e2dbdb;top:70px;position:absolute;width:100%;left:0;bottom:0;right:0;overflow-y:auto;z-index:123}@-webkit-keyframes hue{0%{-webkit-filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(-1turn)}}"]}),l),children:[{path:"join",loadChildren:function(){return Promise.all([e.e(1),e.e(9)]).then(e.bind(null,"RNOs")).then((function(n){return n.JoinModule}))}},{path:"profile",loadChildren:function(){return Promise.all([e.e(1),e.e(12)]).then(e.bind(null,"KX/I")).then((function(n){return n.ProfileModule}))}},{path:"post",loadChildren:function(){return Promise.all([e.e(1),e.e(11)]).then(e.bind(null,"tQwF")).then((function(n){return n.PostModule}))}},{path:"",redirectTo:"/main/post",pathMatch:"full"}]}],d=((u=function n(){_classCallCheck(this,n)}).\u0275mod=a.Kb({type:u}),u.\u0275inj=a.Jb({factory:function(n){return new(n||u)},imports:[[o.d.forChild(f)],o.d]}),u),g=e("sKgh"),b=((s=function n(){_classCallCheck(this,n)}).\u0275mod=a.Kb({type:s}),s.\u0275inj=a.Jb({factory:function(n){return new(n||s)},imports:[[i.b,d,g.a]]}),s)}}]);