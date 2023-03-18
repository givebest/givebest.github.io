"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[891],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||v[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(1163),a=(r(9496),r(9613));const o={slug:"javascript/2019/04/20/vue.js-nuxt.js-use-vee-validate.html",title:"Vee-validate \u7236\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u8868\u5355\u6821\u9a8c\u7ed3\u679c",tags:["Vee-validate","vue"],date:"2019-05-18 10:34:35 +0800",authors:"givebest"},i=void 0,l={permalink:"/javascript/2019/04/20/vue.js-nuxt.js-use-vee-validate.html",source:"@site/blog/javascript/2019-05-18-vee-validate-get-subcomponent-verification-results.mdx",title:"Vee-validate \u7236\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u8868\u5355\u6821\u9a8c\u7ed3\u679c",description:"vee-validate \u662f\u4e3a Vue.js \u91cf\u8eab\u6253\u9020\u7684\u8868\u5355\u6821\u9a8c\u6846\u67b6\uff0c\u5141\u8bb8\u60a8\u6821\u9a8c\u8f93\u5165\u7684\u5185\u5bb9\u5e76\u663e\u793a\u5bf9\u5e94\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u3002\u5b83\u5185\u7f6e\u4e86\u5f88\u591a\u5e38\u89c1\u7684\u6821\u9a8c\u89c4\u5219\uff0c\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u591a\u79cd\u6821\u9a8c\u89c4\u5219\uff0c\u5927\u90e8\u5206\u573a\u666f\u53ea\u9700\u8981\u914d\u7f6e\u5c31\u80fd\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff0c\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u800c\u4e14\u652f\u6301 40 \u591a\u79cd\u8bed\u8a00\uff0c\u5bf9\u672c\u5730\u5316\u3001\u591a\u8bed\u8a00\u652f\u6301\u975e\u5e38\u53cb\u597d\u3002",date:"2019-05-18T10:34:35.000Z",formattedDate:"2019\u5e745\u670818\u65e5",tags:[{label:"Vee-validate",permalink:"/tags/vee-validate"},{label:"vue",permalink:"/tags/vue"}],readingTime:3.27,hasTruncateMarker:!0,authors:[{name:"givebest",title:"Front End Engineer",url:"https://github.com/givebest",imageURL:"https://github.com/givebest.png",key:"givebest"}],frontMatter:{slug:"javascript/2019/04/20/vue.js-nuxt.js-use-vee-validate.html",title:"Vee-validate \u7236\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u8868\u5355\u6821\u9a8c\u7ed3\u679c",tags:["Vee-validate","vue"],date:"2019-05-18 10:34:35 +0800",authors:"givebest"},prevItem:{title:"IIS10 \u524d\u7aef\u670d\u52a1\u5668\uff0c\u8bbe\u7f6e\u4ee3\u7406\u5b9e\u73b0\u8de8\u57df\u8bf7\u6c42\u540e\u7aef\u63a5\u53e3",permalink:"/other/2019/06/07/iis10-proxy-cross-domain.html"},nextItem:{title:"macOS(\u82f9\u679c\u7535\u8111)\u5b9e\u73b0\u5f55\u5236\u7cfb\u7edf\u5185\u58f0\u97f3(\u4e5f\u53ef\u4ee5\u6df7\u5408\u5f55\u5236\u9ea6\u514b\u98ce\u548c\u7cfb\u7edf\u58f0\u97f3)",permalink:"/other/2019/04/20/macos-record-system-sound.html"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vee-validate")," \u662f\u4e3a Vue.js \u91cf\u8eab\u6253\u9020\u7684\u8868\u5355\u6821\u9a8c\u6846\u67b6\uff0c\u5141\u8bb8\u60a8\u6821\u9a8c\u8f93\u5165\u7684\u5185\u5bb9\u5e76\u663e\u793a\u5bf9\u5e94\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u3002\u5b83\u5185\u7f6e\u4e86\u5f88\u591a\u5e38\u89c1\u7684\u6821\u9a8c\u89c4\u5219\uff0c\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u591a\u79cd\u6821\u9a8c\u89c4\u5219\uff0c\u5927\u90e8\u5206\u573a\u666f\u53ea\u9700\u8981\u914d\u7f6e\u5c31\u80fd\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff0c\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u800c\u4e14\u652f\u6301 40 \u591a\u79cd\u8bed\u8a00\uff0c\u5bf9\u672c\u5730\u5316\u3001\u591a\u8bed\u8a00\u652f\u6301\u975e\u5e38\u53cb\u597d\u3002"),(0,a.kt)("p",null,"\u56fd\u5185\u997f\u4e86\u4e48\u56e2\u961f\u5f00\u6e90\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Element UI")," \u5c31\u7528\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"vee-validate"),"\u3002"))}v.isMDXComponent=!0}}]);