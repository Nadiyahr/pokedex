(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(11),n(2)),o=n.n(i),l=n(4),u=n(3),j=(n(13),"https://pokeapi.co/api/v2"),d="pokemon",b=function(t){return fetch("".concat(j,"/").concat(d,"/?limit=").concat(t)).then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))},p=function(t){return fetch("".concat(j,"/").concat(d,"/").concat(t)).then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))},m=n(0),f=function(){return Object(m.jsx)(m.Fragment,{})},h=function(t){var e=t.details,n=t.setClose;return Object(m.jsx)(m.Fragment,{children:e&&Object(m.jsxs)("button",{className:"Details",onClick:function(){return n(null)},type:"button",children:[Object(m.jsx)("div",{className:"Details_container",children:Object(m.jsx)("img",{src:e.sprites.other["official-artwork"].front_default,alt:null===e||void 0===e?void 0:e.name})}),Object(m.jsxs)("div",{className:"Details_bottom",children:[Object(m.jsx)("h2",{className:"Details_title",children:null===e||void 0===e?void 0:e.name}),Object(m.jsx)("ul",{className:"Details_list",children:null===e||void 0===e?void 0:e.stats.map((function(t){return Object(m.jsxs)("li",{className:"Details_item",children:[t.stat.name,Object(m.jsx)("span",{className:"details_value",children:t.base_stat})]},t.stat.name)}))})]})]},null===e||void 0===e?void 0:e.id)})},O=(n(15),function(t){var e=t.pokemon,n=Object(c.useState)(null),a=Object(u.a)(n,2),s=a[0],r=a[1],i=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e.name);case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(m.jsx)(m.Fragment,{children:s&&Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"Card",children:[Object(m.jsx)("div",{className:"Card_div",children:Object(m.jsx)("img",{src:s.sprites.other["official-artwork"].front_default,alt:s.name,className:"Card_img"})}),Object(m.jsxs)("div",{className:"Card_bottom",children:[Object(m.jsx)("h2",{className:"Card_title",children:s.name}),Object(m.jsx)("div",{className:"Card_buttons",children:s.types.map((function(t){return Object(m.jsx)("div",{className:"Card_types",children:t.type.name},t.type.name)}))})]})]})},s.id)})}),x=(n(16),function(t){var e=t.onSelectName,n=t.pokemons;return Object(m.jsx)("ul",{className:"App_list",children:n.map((function(t){return Object(m.jsx)("button",{className:"btn",type:"button",onClick:function(){return e(t.name)},children:Object(m.jsx)(O,{pokemon:t},t.name)},t.name)}))})}),v=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(12),r=Object(u.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(null),O=Object(u.a)(d,2),v=O[0],N=O[1],k=function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(i);case 2:e=t.sent,a(e.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(l.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:n=t.sent,N(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){k()}),[i]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"App_header",children:[Object(m.jsx)("h1",{className:"App_title",children:"Pokedex"}),Object(m.jsx)(f,{})]}),Object(m.jsxs)("div",{className:"App_main",children:[Object(m.jsx)(x,{onSelectName:function(t){_(t)},pokemons:n}),Object(m.jsx)("button",{type:"button",className:"App_more",onClick:function(){return j((function(t){return t+12}))},children:"Load More"})]}),Object(m.jsxs)("div",{className:"App_sidebar",children:[Object(m.jsx)("h2",{children:"Sidebar"}),v&&Object(m.jsx)(h,{setClose:N,details:v})]})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.53e04009.chunk.js.map