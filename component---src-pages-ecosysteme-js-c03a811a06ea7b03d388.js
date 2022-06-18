"use strict";(self.webpackChunkverbier_report=self.webpackChunkverbier_report||[]).push([[70],{988:function(e,t,n){var a=n(1074),r="flex-start",o="flex-end",i="center",l=function(e){return e.top?r:e.bottom?o:i},c=function(e){return e.left?r:e.right?o:i},m=a.default.div.withConfig({displayName:"box__Box",componentId:"sc-1f991d2-0"})(["",";cursor:",";"],(function(e){var t,n=!0===e.gap?"1rem":e.gap;return{position:e.relative?"relative":!!e.absolute&&"absolute",display:e.inline?"inline-flex":"flex",padding:!0===e.padding?n:e.padding,margin:e.wrap&&n?"-calc("+n+"/2)":e.margin,width:e.width||e.size||!(e.fitChildren||e.inline)&&"100%",height:e.height||e.size,minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight,flexWrap:e.wrap&&"wrap",flexDirection:e.column?"column":e.columnReverse?"column-reverse":void 0,justifyContent:e.spaceBetween?"space-between":e.spaceAround?"space-around":e.spaceEvenly?"space-evenly":e.column?l(e):c(e),alignItems:e.stretch?"stretch":e.column?c(e):l(e),flex:e.flex,order:e.order&&String(e.order),"& > *:not(:last-child)":!e.wrap&&n&&(t={},t["margin-"+(e.column?"bottom":"right")]=n,t),"& > *":e.wrap&&n&&{margin:"calc("+n+"/2)"}}}),(function(e){return e.cursor&&"pointer"}));t.Z=m},965:function(e,t,n){var a=n(1074),r=n(988),o=(0,a.default)(r.Z).attrs({as:"button",inline:!0,cursor:!0}).withConfig({displayName:"button__Button",componentId:"sc-xlec1d-0"})(["box-shadow:2px 2px 4px rgb(0 0 0 / 16%);border-radius:3px;border:none;"]);t.Z=o},5666:function(e,t,n){n.d(t,{Y_:function(){return l},$w:function(){return u},CU:function(){return m},oD:function(){return d}});var a=n(7294),r=n(1074),o=n(988),i=["Body","Header"],l=(0,r.default)(o.Z).withConfig({displayName:"component__ContentBox",componentId:"sc-4tq5vf-0"})(["width:100%;max-width:65rem;margin:0 auto;padding:0 1rem;"]),c=(0,r.default)(o.Z).withConfig({displayName:"component__PageWrap",componentId:"sc-4tq5vf-1"})(["min-height:100vh;background-color:#f2f4f8;"]),m=function(e){var t=e.Body,n=e.Header,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);return a.createElement(c,{column:!0,left:!0,top:!0},n&&a.createElement(n,r),t&&a.createElement(t,r))},u=(0,r.default)(o.Z).withConfig({displayName:"component__HideIfMobile",componentId:"sc-4tq5vf-2"})(["@media only screen and (max-width:768px){display:none;}"]),d=(0,r.default)(o.Z).withConfig({displayName:"component__ShowIfMobile",componentId:"sc-4tq5vf-3"})(["display:none;@media only screen and (max-width:768px){display:flex;}"])},237:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(5785),r=n(7294),o=n(1074),i=n(5666),l=n(988),c=n.p+"static/headerBg-5740f2a15d20d26c27b07bd32f8ff4de.png",m="Tous",u=(0,o.default)(l.Z).attrs({as:"label"}).withConfig({displayName:"inputs__Label",componentId:"sc-c84ftq-0"})([""]),d=(0,o.default)(l.Z).attrs({as:"input"}).withConfig({displayName:"inputs__Input",componentId:"sc-c84ftq-1"})([""]),s=function(e){var t=e.setId,n=void 0===t?"radioInputSet":t,a=e.items,o=e.onChange,i=(0,r.useState)(m),c=i[0],s=i[1];return r.createElement(l.Z,{column:!0,left:!0,gap:!0,onChange:function(e){s(e.target.value),o(e.target.value)}},a.map((function(e,t){var a=e.value,o=e.label;return r.createElement(l.Z,{left:!0,inline:!0,gap:!0},r.createElement(d,{inline:!0,cursor:!0,type:"radio",name:n,id:a,value:a,checked:c===a}),r.createElement(u,{cursor:!0,inline:!0,for:a},r.createElement("h4",null,o)))})))},f=function(e){var t=e.cats,n=e.onCatChange,o=[m].concat((0,a.Z)(t)).map((function(e){return{value:e,id:e,label:e}}));return r.createElement(l.Z,{column:!0,left:!0,gap:!0},r.createElement("h2",{className:"title darkGrey "},"Axes et filtres"),r.createElement("h4",{className:"darkGrey"},"Axes"),r.createElement(s,{items:o,onChange:n}))},p=(0,o.default)(l.Z).withConfig({displayName:"list__CardWrap",componentId:"sc-1a4jq0g-0"})(["background-color:white;box-shadow:2px 2px 4px rgb(0 0 0 / 16%);border-radius:9px;"]),g=function(e){var t=e.html;return r.createElement(p,{column:!0,left:!0,padding:"1rem",gap:"0.5rem",dangerouslySetInnerHTML:{__html:t}})},h=(0,o.default)(l.Z).withConfig({displayName:"list__CatWrap",componentId:"sc-1a4jq0g-1"})([""]),b=function(e){var t=e.label;return r.createElement(h,{left:!0,padding:"0.5rem 0"},r.createElement("h2",{className:"title darkGrey"},t.toUpperCase()))},x=function(e){var t=e.items,n=e.cats;return r.createElement(l.Z,{column:!0,left:!0},n.map((function(e){var n=t.filter((function(t){return t.category===e}));return n.length?r.createElement(l.Z,{column:!0,padding:"1rem",gap:!0},r.createElement(b,{label:e}),n.map((function(e){return r.createElement(g,e)}))):null})))},v=n(965),w=function(e){var t=e.data.allMarkdownRemark.nodes.map((function(e){return Object.assign({},e.frontmatter,{html:e.html})})),n=(0,a.Z)(new Set(t.map((function(e){return e.category})))).sort(),o=(0,r.useState)(),c=o[0],u=o[1];return r.createElement(l.Z,{padding:"2rem 0"},r.createElement(i.Y_,{top:!0},r.createElement(i.$w,{flex:1},r.createElement(f,{cats:n,onCatChange:u})),r.createElement(l.Z,{flex:2},r.createElement(x,{selectedCat:c,items:c&&c!==m?t.filter((function(e){return e.category===c})):t,cats:n}))))},y=(0,o.default)(v.Z).withConfig({displayName:"ecosysteme__FiltersButton",componentId:"sc-1xahk9g-0"})(['padding:"0.5rem 1.5rem";transition:0.5s;background-color:#676e7a;:hover{background-color:#6e6e6e;}']),E=(0,o.default)(l.Z).withConfig({displayName:"ecosysteme__HeaderWrap",componentId:"sc-1xahk9g-1"})(["height:15rem;background-image:url(",");background-repeat:no-repeat;background-position:center center;background-size:cover;"],c),C=(0,o.default)(i.Y_).withConfig({displayName:"ecosysteme__ContentBoxWrap",componentId:"sc-1xahk9g-2"})(["color:white;"]),_=function(){return r.createElement(E,null,r.createElement(C,{column:!0,left:!0,gap:"1rem"},r.createElement(l.Z,{column:!0,left:!0,gap:"0.2rem"},r.createElement("h5",{className:" white"},"Commune de val de bagnes"),r.createElement("h1",{className:"title bold white"},"Projet de développement économique - Ecosystème Économique")),r.createElement(i.oD,{left:!0},r.createElement(y,null,r.createElement("h3",{className:"title white"},"Defis et filtres")))))},Z=function(e){return r.createElement(i.CU,Object.assign({Body:w,Header:_},e))}}}]);
//# sourceMappingURL=component---src-pages-ecosysteme-js-c03a811a06ea7b03d388.js.map