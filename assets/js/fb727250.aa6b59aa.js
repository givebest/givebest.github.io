"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2027],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(1163),o=(r(9496),r(9613));const a={slug:"other/2018/10/27/upyun-upload-delete-node.js.html",title:"\u53c8\u62cd\u4e91 Node.js \u5b9e\u73b0\u6587\u4ef6\u4e0a\u4f20\u3001\u5220\u9664",tags:["node.js"],date:"2018-10-27 11:14:35 +0800",authors:"givebest"},s="\u53c8\u62cd\u4e91 Node.js \u5b9e\u73b0\u6587\u4ef6\u4e0a\u4f20\u3001\u5220\u9664",l={permalink:"/other/2018/10/27/upyun-upload-delete-node.js.html",source:"@site/blog/2018-10-27-upyun-upload-delete-node.js.mdx",title:"\u53c8\u62cd\u4e91 Node.js \u5b9e\u73b0\u6587\u4ef6\u4e0a\u4f20\u3001\u5220\u9664",description:"Node.js \u670d\u52a1\u7aef",date:"2018-10-27T11:14:35.000Z",formattedDate:"2018\u5e7410\u670827\u65e5",tags:[{label:"node.js",permalink:"/tags/node-js"}],readingTime:3.505,hasTruncateMarker:!0,authors:[{name:"givebest",title:"Front End Engineer",url:"https://github.com/givebest",imageURL:"https://github.com/givebest.png",key:"givebest"}],frontMatter:{slug:"other/2018/10/27/upyun-upload-delete-node.js.html",title:"\u53c8\u62cd\u4e91 Node.js \u5b9e\u73b0\u6587\u4ef6\u4e0a\u4f20\u3001\u5220\u9664",tags:["node.js"],date:"2018-10-27 11:14:35 +0800",authors:"givebest"},prevItem:{title:"2019\u5e74\u8f6c\u8f6c\u4f18\u54c1\u81ea\u8425\u4e8c\u624b iPhone \u8d2d\u4e70\u7ecf\u5386",permalink:"/other/2019/03/09/2019-zhuanzhuan-youpin-goumai.html"},nextItem:{title:"Docz \u7528 MDX \u5199 React UI \u7ec4\u4ef6\u6587\u6863",permalink:"/other/2018/09/15/react-ui-component-docz-mdx.html"}},i={authorsImageUrls:[void 0]},u=[{value:"Node.js \u670d\u52a1\u7aef",id:"nodejs-\u670d\u52a1\u7aef",level:2},{value:"\u4f7f\u7528 Node.js + Express.js \u5b9e\u73b0 \u670d\u52a1\u7aef",id:"\u4f7f\u7528-nodejs--expressjs-\u5b9e\u73b0-\u670d\u52a1\u7aef",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"nodejs-\u670d\u52a1\u7aef"},"Node.js \u670d\u52a1\u7aef"),(0,o.kt)("h3",{id:"\u4f7f\u7528-nodejs--expressjs-\u5b9e\u73b0-\u670d\u52a1\u7aef"},"\u4f7f\u7528 Node.js + Express.js \u5b9e\u73b0 \u670d\u52a1\u7aef"))}d.isMDXComponent=!0}}]);