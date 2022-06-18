"use strict";(self.webpackChunkverbier_report=self.webpackChunkverbier_report||[]).push([[678],{988:function(e,t,n){var r=n(1074),o="flex-start",a="flex-end",i="center",c=function(e){return e.top?o:e.bottom?a:i},l=function(e){return e.left?o:e.right?a:i},d=r.default.div.withConfig({displayName:"box__Box",componentId:"sc-1f991d2-0"})(["",";cursor:",";"],(function(e){var t,n=!0===e.gap?"1rem":e.gap;return{position:e.relative?"relative":!!e.absolute&&"absolute",display:e.inline?"inline-flex":"flex",padding:!0===e.padding?n:e.padding,margin:e.wrap&&n?"-calc("+n+"/2)":e.margin,width:e.width||e.size||!(e.fitChildren||e.inline)&&"100%",height:e.height||e.size,minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight,flexWrap:e.wrap&&"wrap",flexDirection:e.column?"column":e.columnReverse?"column-reverse":void 0,justifyContent:e.spaceBetween?"space-between":e.spaceAround?"space-around":e.spaceEvenly?"space-evenly":e.column?c(e):l(e),alignItems:e.stretch?"stretch":e.column?l(e):c(e),flex:e.flex,order:e.order&&String(e.order),"& > *:not(:last-child)":!e.wrap&&n&&(t={},t["margin-"+(e.column?"bottom":"right")]=n,t),"& > *":e.wrap&&n&&{margin:"calc("+n+"/2)"}}}),(function(e){return e.cursor&&"pointer"}));t.Z=d},965:function(e,t,n){var r=n(1074),o=n(988),a=(0,r.default)(o.Z).attrs({as:"button",inline:!0,cursor:!0}).withConfig({displayName:"button__Button",componentId:"sc-xlec1d-0"})(["box-shadow:2px 2px 4px rgb(0 0 0 / 16%);border-radius:3px;border:none;"]);t.Z=a},5666:function(e,t,n){n.d(t,{Y_:function(){return c},$w:function(){return u},CU:function(){return d},oD:function(){return m}});var r=n(7294),o=n(1074),a=n(988),i=["Body","Header"],c=(0,o.default)(a.Z).withConfig({displayName:"component__ContentBox",componentId:"sc-4tq5vf-0"})(["width:100%;max-width:65rem;margin:0 auto;padding:0 1rem;"]),l=(0,o.default)(a.Z).withConfig({displayName:"component__PageWrap",componentId:"sc-4tq5vf-1"})(["min-height:100vh;background-color:#f2f4f8;"]),d=function(e){var t=e.Body,n=e.Header,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);return r.createElement(l,{column:!0,left:!0,top:!0},n&&r.createElement(n,o),t&&r.createElement(t,o))},u=(0,o.default)(a.Z).withConfig({displayName:"component__HideIfMobile",componentId:"sc-4tq5vf-2"})(["@media only screen and (max-width:768px){display:none;}"]),m=(0,o.default)(a.Z).withConfig({displayName:"component__ShowIfMobile",componentId:"sc-4tq5vf-3"})(["display:none;@media only screen and (max-width:768px){display:flex;}"])},7613:function(e,t,n){n.r(t),n.d(t,{Buttons:function(){return m},default:function(){return f}});var r=n(7294),o=n(1597),a=n(5666),i=n(988),c=n.p+"static/circle-ade4bcdeb756d76f455f8b78a1b36d9e.png",l=n(1074),d=n(965),u=(0,l.default)(d.Z).withConfig({displayName:"pages__NavButton",componentId:"sc-1xiqf1f-0"})(["width:10rem;height:2rem;transition:0.5s;background-color:#676e7a;:hover{background-color:#6e6e6e;}"]),m=function(e){e.label;return r.createElement(i.Z,{gap:!0},r.createElement(u,{type:"button",onClick:function(){return(0,o.c4)("/ecosysteme")}},r.createElement("h3",{className:"title white"},"Ecosystème ")),r.createElement(u,{type:"button",onClick:function(){return(0,o.c4)("/brochure")}},r.createElement("h3",{className:"title white"},"Rapport du projet ")))},p=(0,l.default)(i.Z).withConfig({displayName:"pages__Image",componentId:"sc-1xiqf1f-1"})(["height:25rem;background-image:url(",");background-repeat:no-repeat;background-position:center center;background-size:contain;"],c),s=function(e){e.data;return r.createElement(i.Z,{padding:"2rem 0"},r.createElement(a.Y_,{top:!0,column:!0,gap:"3rem"},r.createElement(i.Z,{column:!0,gap:!0},r.createElement("h1",{className:"title bold darkGrey"},"Projet de développement économique"),r.createElement("h2",{className:"title darkGrey"},"Commune de Val de Bagnes")),r.createElement(p,null),r.createElement(m,null)))},f=function(e){return r.createElement(a.CU,Object.assign({Body:s},e))}}}]);
//# sourceMappingURL=component---src-pages-index-js-29716f0768430ccbb2ab.js.map