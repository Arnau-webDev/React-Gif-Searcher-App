(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(14),a(1)),m=a(8),u=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(m.a)(e))})),u(""))}},r.a.createElement("input",{type:"text",placeholder:"Type about something...",value:i,onChange:function(e){u(e.target.value)}}))},o=a(4),s=a.n(o),d=a(7),f=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=LVNNSPAPr5wM2zIKLkGNlU3jWvZ9BdMA"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.fixed_height.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.img;return r.a.createElement("div",{className:"card animate__animated animate__backInLeft"},r.a.createElement("img",{src:t.url,alt:t.title}),r.a.createElement("p",null,t.title))},g=function(e){var t=e.category;return r.a.createElement("div",{className:"notFoundCard animate__animated animate__fadeIn"},r.a.createElement("p",null,"No GIFS where found from the ",r.a.createElement("span",null,t)," search"))},h=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0,dataLength:0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){setTimeout((function(){c({data:e,loading:!1,dataLength:e.length})}),550)}))}),[e]),r}(t),c=a.data,i=a.loading,m=a.dataLength;return r.a.createElement("div",null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading..."),m<1&&!1===i&&r.a.createElement(g,{category:t}),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,{key:e.id,img:e})}))))},E=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"small animate__animated animate__backInDown"},r.a.createElement("a",{href:"https://developers.giphy.com/",alt:"",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,"Powered by GIPHY"),r.a.createElement("div",{className:"extraSmall"},r.a.createElement("img",{src:"https://media0.giphy.com/media/3xz2BDFvxop2BfAQoM/100w.gif?cid=6f54fedeoerrqrxeblu5mj93k2ryzyd366dbj9sca30ajebk&rid=100w.gif",alt:""})))),r.a.createElement("h2",null,"Gif Expert App"))},v=function(){var e=Object(n.useState)(["Marvel"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(u,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(h,{key:e,category:e})}))))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d943b96c.chunk.js.map