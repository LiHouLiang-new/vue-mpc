(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)a=i[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={customDashboardAir:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e9ac6":"46c61473","chunk-2d2304a6":"9d0a0509"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e),u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=l;u.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("c354")},c354:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("e628"),u=n("8c4f");r["a"].use(u["a"]);var a=new u["a"]({mode:"history",base:"/custom/dashboard/air",routes:[{path:"/",name:"air",redirect:"/left",component:function(){return Promise.resolve().then(n.bind(null,"e628"))}},{path:"/left",name:"airLeft",component:function(){return n.e("chunk-2d2304a6").then(n.bind(null,"ec3e"))}},{path:"/right",name:"airLeft",component:function(){return n.e("chunk-2d0e9ac6").then(n.bind(null,"8f13"))}}]}),i=n("2f62");r["a"].use(i["a"]);var c=new i["a"].Store({state:{count:0},mutations:{increment:function(e){e.count++}}}),l=c;new r["a"]({el:"#app",router:a,store:l,render:function(e){return e(o["default"])}})},e628:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("p",[e._v("in dashboard air")]),n("button",{attrs:{type:"button"},on:{click:e.add}},[e._v("增加")]),n("nav",[n("router-link",{attrs:{to:"/left"}},[e._v("left")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/right"}},[e._v("right")])],1),n("router-view")],1)},o=[],u={data:function(){return{}},created:function(){},mounted:function(){},beforeRouteUpdate:function(e,t,n){console.log(e),console.log(t)},methods:{add:function(){this.$store.commit("increment")}}},a=u,i=n("2877"),c=Object(i["a"])(a,r,o,!1,null,null,null);t["default"]=c.exports}});
//# sourceMappingURL=customDashboardAir.5981aa42.js.map