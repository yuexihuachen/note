(()=>{"use strict";var e={68566:(e,t,a)=>{var l=a(24065),r=a(55019),c=a(98234),n=a(36438),s=a(44070),i=a(81512),m=(0,n.LC)({reducerPath:"category",baseQuery:(0,s.ni)({baseUrl:"/",prepareHeaders:function(e,t){var a=t.getState;e.set("requestId","".concat((0,i.x0)()));var l=a();return l&&e.set("authorization","Bearer ".concat(l)),e}}),endpoints:function(e){return{getCategoryByName:e.query({query:function(e){return{url:"".concat(e),method:"GET",headers:{"content-type":"text/plain"},params:{name:e}}}})}}}),o=m.useGetCategoryByNameQuery;function d(){var e=o("getCategory"),t=e.data,a=!e.isLoading&&t.data.length&&"/".concat(t.data[0].category_name,"?cid=").concat(t.data[0].category_id);return l.createElement(l.Fragment,null,l.createElement("div",{className:"columns"},l.createElement("div",{className:"column"},l.createElement("section",{className:"hero is-bold"},l.createElement("div",{className:"hero-body"},l.createElement("div",{className:"field"},l.createElement("div",{className:"control"},l.createElement("a",{href:"".concat(a),className:"button is-success "},"\u5f00\u59cb \u2192"))))))),l.createElement("div",{className:"columns"},l.createElement("div",{className:"column"},l.createElement("section",{className:"hero is-bold"},l.createElement("div",{className:"hero-body"},l.createElement("div",{className:"field"},l.createElement("div",{className:"control"},l.createElement("h1",null,"\u7b80\u5355\u81f3\u4e0a"),l.createElement("div",null,"Markdown\u7684\u7f16\u8f91\u5668\uff0c\u4e13\u6ce8\u4e8e\u5199\u4f5c")))))),l.createElement("div",{className:"column"},l.createElement("section",{className:"hero is-bold"},l.createElement("div",{className:"hero-body"},l.createElement("div",{className:"field"},l.createElement("div",{className:"control"},l.createElement("h1",null,"\u53ef\u7ef4\u62a4"),l.createElement("div",null,"\u53ef\u6269\u5c55\uff0c\u53ef\u914d\u7f6e\uff0c\u53ef\u8c03\u8bd5\uff0c\u53ef\u9002\u5e94")))))),l.createElement("div",{className:"column"},l.createElement("section",{className:"hero is-bold"},l.createElement("div",{className:"hero-body"},l.createElement("div",{className:"field"},l.createElement("div",{className:"control"},l.createElement("h1",null,"\u9ad8\u6027\u80fd"),l.createElement("div",null,"\u54cd\u5e94\u5feb\u901f\uff0c\u76f4\u89c2\u6027\uff0c\u677e\u6563\u8026\u5408\uff0c\u6b63\u786e\u5904\u7406"))))))),l.createElement("div",{className:"tile is-ancestor"},l.createElement("div",{className:"tile is-vertical is-8"},l.createElement("div",{className:"tile"},l.createElement("div",{className:"tile is-parent is-vertical"},l.createElement("article",{className:"tile is-child notification is-primary"},l.createElement("p",{className:"title"},"Javascript"),l.createElement("p",{className:"subtitle"},"To Frontend")),l.createElement("article",{className:"tile is-child notification is-warning"},l.createElement("p",{className:"title"},"Nodejs"),l.createElement("p",{className:"subtitle"},"To mid-Tier"))),l.createElement("div",{className:"tile is-parent"},l.createElement("article",{className:"tile is-child notification is-info"},l.createElement("p",{className:"title"},"\u8bbe\u8ba1\u6a21\u5f0f"),l.createElement("p",{className:"subtitle"},"To Full-Stack"),l.createElement("figure",{className:"image is-4by3"})))),l.createElement("div",{className:"tile is-parent"},l.createElement("article",{className:"tile is-child notification is-danger"},l.createElement("p",{className:"title"},"\u7b97\u6cd5"),l.createElement("p",{className:"subtitle"},"Aligned with the right tile"),l.createElement("div",{className:"content"},"\u4e8c\u5206\u67e5\u627e")))),l.createElement("div",{className:"tile is-parent"},l.createElement("article",{className:"tile is-child notification is-success"},l.createElement("div",{className:"content"},l.createElement("p",{className:"title"},"\u6570\u636e\u53ef\u89c6\u5316"),l.createElement("p",{className:"subtitle"},"data visualization"),l.createElement("div",{className:"content"},"D3"))))))}const u=function(){return l.createElement("div",{className:"container"},l.createElement(d,null))};var E=a(41864);const v=(0,a(29398).xC)({reducer:(0,E.Z)({},m.reducerPath,m.reducer),middleware:function(e){return e().concat(m.middleware)}});r.s(document.getElementById("root")).render(l.createElement(c.zt,{store:v},l.createElement(u,null)))}},t={};function a(l){var r=t[l];if(void 0!==r)return r.exports;var c=t[l]={exports:{}};return e[l].call(c.exports,c,c.exports,a),c.exports}a.m=e,(()=>{var e=[];a.O=(t,l,r,c)=>{if(!l){var n=1/0;for(o=0;o<e.length;o++){for(var[l,r,c]=e[o],s=!0,i=0;i<l.length;i++)(!1&c||n>=c)&&Object.keys(a.O).every((e=>a.O[e](l[i])))?l.splice(i--,1):(s=!1,c<n&&(n=c));if(s){e.splice(o--,1);var m=r();void 0!==m&&(t=m)}}return t}c=c||0;for(var o=e.length;o>0&&e[o-1][2]>c;o--)e[o]=e[o-1];e[o]=[l,r,c]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=177,(()=>{var e={177:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,c,[n,s,i]=l,m=0;if(n.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var o=i(a)}for(t&&t(l);m<n.length;m++)c=n[m],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return a.O(o)},l=self.webpackChunkbuild=self.webpackChunkbuild||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=a.O(void 0,[313],(()=>a(68566)));l=a.O(l)})();