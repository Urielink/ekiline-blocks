(window.webpackJsonp_ekiline_modal=window.webpackJsonp_ekiline_modal||[]).push([[1],{4:function(e,n,t){}}]),function(e){function n(n){for(var o,l,c=n[0],u=n[1],p=n[2],f=0,s=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(a&&a(n);s.length;)s.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(o=!1)}o&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={0:0},i=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var c=window.webpackJsonp_ekiline_modal=window.webpackJsonp_ekiline_modal||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var p=0;p<c.length;p++)n(c[p]);var a=u;i.push([5,1]),t()}([function(e,n){e.exports=window.wp.element},function(e,n){e.exports=window.wp.i18n},function(e,n){e.exports=window.wp.blockEditor},function(e,n){e.exports=window.wp.blocks},,function(e,n,t){"use strict";t.r(n);var o=t(3),r=(t(4),t(0)),i=t(1),l=t(2);Object(o.registerBlockType)("ekiline-blocks/ekiline-modal",{edit:function(){return Object(r.createElement)("p",Object(l.useBlockProps)(),Object(i.__)("Ekiline Modal – hello from the editor!","ekiline-modal"))},save:function(){return Object(r.createElement)("p",l.useBlockProps.save(),Object(i.__)("Ekiline Modal – hello from the saved content!","ekiline-modal"))}})}]);