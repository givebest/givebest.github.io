"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6268],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),v=n,m=u["".concat(l,".").concat(v)]||u[v]||g[v]||o;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=v;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3383:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(1163),n=(t(9496),t(9613));const o={slug:"javascript/2015/11/18/javascript-regular-expression.html",title:"JS \u6b63\u5219\u8868\u8fbe\u5f0f\uff08JavaScript regular expression\uff09",tags:["javascript","regular","expression\uff09"],date:"2015-11-18 20:44:35 +0800",authors:"givebest"},i=void 0,p={permalink:"/javascript/2015/11/18/javascript-regular-expression.html",source:"@site/blog/2015-11-18-javascript-regular-expression.md",title:"JS \u6b63\u5219\u8868\u8fbe\u5f0f\uff08JavaScript regular expression\uff09",description:"RegExp \u76f4\u63a5\u91cf\u548c\u5bf9\u8c61\u7684\u521b\u5efa",date:"2015-11-18T20:44:35.000Z",formattedDate:"2015\u5e7411\u670818\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"regular",permalink:"/tags/regular"},{label:"expression\uff09",permalink:"/tags/expression\uff09"}],readingTime:22.415,hasTruncateMarker:!0,authors:[{name:"givebest",title:"Front End Engineer",url:"https://github.com/givebest",imageURL:"https://github.com/givebest.png",key:"givebest"}],frontMatter:{slug:"javascript/2015/11/18/javascript-regular-expression.html",title:"JS \u6b63\u5219\u8868\u8fbe\u5f0f\uff08JavaScript regular expression\uff09",tags:["javascript","regular","expression\uff09"],date:"2015-11-18 20:44:35 +0800",authors:"givebest"},prevItem:{title:"\u79fb\u52a8\u7aef\u7684Canvas\u7ed8\u5236\u53ef\u914d\u7f6e\u7684\u8f6c\u76d8\u62bd\u5956",permalink:"/javascript/2016/10/23/canvas-turntable.html"}},l={authorsImageUrls:[void 0]},s=[{value:"RegExp \u76f4\u63a5\u91cf\u548c\u5bf9\u8c61\u7684\u521b\u5efa",id:"regexp-\u76f4\u63a5\u91cf\u548c\u5bf9\u8c61\u7684\u521b\u5efa",level:3}],c={toc:s},u="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"regexp-\u76f4\u63a5\u91cf\u548c\u5bf9\u8c61\u7684\u521b\u5efa"},"RegExp \u76f4\u63a5\u91cf\u548c\u5bf9\u8c61\u7684\u521b\u5efa"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c31\u50cf\u5b57\u7b26\u4e32\u548c\u6570\u5b57\u4e00\u6837\uff0c\u7a0b\u5e8f\u4e2d\u6bcf\u4e2a\u53d6\u503c\u76f8\u540c\u7684\u539f\u59cb\u7c7b\u578b\u76f4\u63a5\u91cf\u5747\u8868\u793a\u76f8\u540c\u7684\u503c\uff0c\u8fd9\u662f\u663e\u800c\u6613\u89c1\u7684\u3002\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6bcf\u6b21\u9047\u5230\u5bf9\u8c61\u76f4\u63a5\u91cf\uff08\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\uff09\u8bf8\u5982","{","}","\u548c[]\u7684\u65f6\u5019\u90fd\u4f1a\u521b\u5efa\u65b0\u5bf9\u8c61\u3002\u6bd4\u5982\uff0c\u5982\u679c\u5728\u5faa\u73af\u4f53\u4e2d\u5199 var a = []\uff0c\u5219\u6bcf\u6b21\u904d\u5386\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u6570\u7ec4\u3002\u6b63\u5219\u8868\u8fbe\u5f0f\u76f4\u63a5\u91cf\u5219\u4e0e\u6b64\u4e0d\u540c\uff0cECMAScript 3 \u89c4\u8303\u89c4\u5b9a\uff0c\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u76f4\u63a5\u91cf\u4f1a\u5728\u6267\u884c\u5230\u5b83\u65f6\u8f6c\u6362\u4e3a\u4e00\u4e2a RegExp \u5bf9\u8c61\uff0c\u540c\u4e00\u6bb5\u4ee3\u7801\u6240\u8868\u793a\u6b63\u5219\u8868\u8fbe\u5f0f\u76f4\u63a5\u91cf\u7684\u6bcf\u6b21\u8fd0\u7b97\u90fd\u8fd4\u56de\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002ECMAScript 5 \u89c4\u8303\u5219\u505a\u4e86\u76f8\u53cd\u7684\u89c4\u5b9a\uff0c\u540c\u4e00\u6bb5\u4ee3\u7801\u6240\u8868\u793a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u76f4\u63a5\u91cf\u7684\u6bcf\u6b21\u8fd0\u7b97\u90fd\u8fd4\u56de\u65b0\u5bf9\u8c61\u3002I E \u4e00\u76f4\u90fd\u662f\u6309\u7167 EC-MAScript 5 \u89c4\u8303\u5b9e\u73b0\u7684\uff0c\u591a\u6570\u6700\u65b0\u7248\u672c\u7684\u6d4f\u89c8\u5668\u4e5f\u5f00\u59cb\u9075\u5faa EC-MAScript 5\uff0c\u5c3d\u7ba1\u76ee\u524d\u8be5\u6807\u51c6\u5e76\u672a\u5168\u9762\u5e7f\u6cdb\u63a8\u884c\u3002")))}g.isMDXComponent=!0}}]);