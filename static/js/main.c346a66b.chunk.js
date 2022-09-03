(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.onSelect,s=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":s===e}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:"has-text-success",children:e.title})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:"has-text-danger",children:e.title})})]}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:s===e?Object(o.jsx)("i",{className:"far fa-eye-slash"}):Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.onSelect,c=e.onInput,s=e.onInputApplied,a=e.onCancel,n=e.query;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){c(e.target.value),s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),a("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.todo,c=e.onX,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then((function(e){return d(e)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(o.jsx)(u,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(""),N=Object(n.a)(v,2),y=N[0],g=N[1],k=Object(l.useState)(""),S=Object(n.a)(k,2),C=S[0],w=S[1];Object(l.useEffect)((function(){b("/todos").then((function(e){return s(e)}))}),[]);var T=function(e,t){return""===t?e:e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}(function(e,t){return"all"===t?e:e.filter((function(e){return"active"===t?!e.completed:e.completed}))}(c,f),C),I=Object(l.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];c=setTimeout.apply(void 0,[e,t].concat(a))}}(w,1e3),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{onSelect:p,onInput:g,onInputApplied:I,onCancel:w,query:y})}),Object(o.jsx)("div",{className:"block",children:T.length?Object(o.jsx)(r,{todos:T,onSelect:m,selectedTodo:d}):Object(o.jsx)(u,{})})]})})}),d&&Object(o.jsx)(h,{todo:d,onX:m})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c346a66b.chunk.js.map