function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(n,e,t){"use strict";t.r(e),t.d(e,"AuthModule",(function(){return f}));var i,r,o,u=t("ofXK"),c=t("tyNb"),a=t("fXoL"),l=[{path:"",component:(i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=a.Gb({type:i,selectors:[["app-auth"]],decls:1,vars:0,template:function(n,e){1&n&&a.Nb(0,"router-outlet")},directives:[c.e],encapsulation:2}),i),children:[{path:"signin",loadChildren:function(){return t.e(7).then(t.bind(null,"sIZH")).then((function(n){return n.SigninModule}))}},{path:"signup",loadChildren:function(){return t.e(8).then(t.bind(null,"0X9z")).then((function(n){return n.SignupModule}))}},{path:"",redirectTo:"/auth/signin",pathMatch:"full"}]}],s=((o=function n(){_classCallCheck(this,n)}).\u0275mod=a.Kb({type:o}),o.\u0275inj=a.Jb({factory:function(n){return new(n||o)},imports:[[c.d.forChild(l)],c.d]}),o),f=((r=function n(){_classCallCheck(this,n)}).\u0275mod=a.Kb({type:r}),r.\u0275inj=a.Jb({factory:function(n){return new(n||r)},imports:[[u.b,s]]}),r)}}]);