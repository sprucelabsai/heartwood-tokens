(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(e,t,a){"use strict";a.r(t);var M=a(0),n=a.n(M),o=(a(30),a(41),a(14),a(15),a(8),a(22),a(219)),c=a.n(o),i=a(228),u=a(212),r=a.n(u),N=a(213),s=a.n(N),l=a(214),g=a.n(l),j=a(210),m=a(291),D=a.n(m),y=(a(292),function(){var e=D.a.components,t=Object.keys(e);return n.a.createElement("div",{className:"sidebar-nav-layout"},n.a.createElement(c.a,{titleTemplate:"%s | Heartwood Tokens"},n.a.createElement("title",null,"Components")),n.a.createElement(j.a,null,n.a.createElement("ul",{className:"sidebar-nav__list"},t.map(function(e){return n.a.createElement("li",{key:e,className:"tokens-nav__item"},n.a.createElement(i.Link,{to:e,className:"sidebar-nav__link",activeClass:"sidebar-nav__link--active",smooth:!0,spy:!0,hashSpy:!0,duration:200},e.split("-").join(" ")))}))),n.a.createElement("main",{className:"components-container"},n.a.createElement("h1",{className:"components-title title-lg"},"Components"),t.map(function(t){var a=e[t],M=Object.keys(a);return n.a.createElement("section",{className:"components-section",key:t,id:t},n.a.createElement("h2",{className:"components-subtitle title-sm"},t),M.map(function(a){var M=e[t][a],o=Object.keys(M);return M.value?n.a.createElement("div",{className:"components-subsection",key:a},n.a.createElement("h3",{className:"heading-lg components-subsection__title"},"Base values"),n.a.createElement("div",{className:"components__token"},n.a.createElement(s.a,{className:"token__clipboard","data-clipboard-text":"$"+M.name,"data-tip":"Copied to clipboard!","data-event":"click","data-effect":"solid","data-place":"right",onSuccess:function(){return setTimeout(function(){return r.a.hide()},1500)}},n.a.createElement("img",{className:"token__clipboard-icon",src:g.a,width:16,height:16,role:"presentation"}),n.a.createElement("p",{className:"components__token-name"},"$"+M.name)),n.a.createElement("p",{className:"components__token-value"},M.value))):n.a.createElement("div",{className:"components-subsection",key:a},n.a.createElement("h3",{className:"heading-lg components-subsection__title"},a),o.map(function(M){var o=e[t][a][M],c=Object.keys(o);return o.value?n.a.createElement("div",{key:M},n.a.createElement("label",{className:"components-label"},"Base Values"),n.a.createElement("div",{className:"components__token"},n.a.createElement(s.a,{className:"token__clipboard","data-clipboard-text":"$"+o.name,"data-tip":"Copied to clipboard!","data-event":"click","data-effect":"solid","data-place":"right",onSuccess:function(){return setTimeout(function(){return r.a.hide()},1500)}},n.a.createElement("img",{className:"token__clipboard-icon",src:g.a,width:16,height:16,role:"presentation"}),n.a.createElement("p",{className:"components__token-name"},"$"+o.name)),n.a.createElement("p",{className:"components__token-value"},o.value))):n.a.createElement("div",{key:M,className:"components-subsection"},n.a.createElement("h4",{className:"components-subsection__subtitle"},M.split("-").join(" ")),n.a.createElement("label",{className:"components-label"},"States"),c.map(function(o){var c=e[t][a][M][o];return n.a.createElement("div",{key:o,className:"components__token"},n.a.createElement(s.a,{className:"token__clipboard","data-clipboard-text":"$"+c.name,"data-tip":"Copied to clipboard!","data-event":"click","data-effect":"solid","data-place":"right",onSuccess:function(){return setTimeout(function(){return r.a.hide()},1500)}},n.a.createElement("img",{className:"token__clipboard-icon",src:g.a,width:16,height:16,role:"presentation"}),n.a.createElement("p",{className:"components__token-name"},"$"+c.name)),n.a.createElement("p",{className:"components__token-value"},c.value))}))}))}))})),n.a.createElement(r.a,{className:"tokens-layout__tooltip"}))});t.default=function(){return n.a.createElement(y,null)}},204:function(e,t,a){var M;e.exports=(M=a(206))&&M.default||M},205:function(e,t,a){"use strict";var M=a(0),n=a.n(M),o=a(68),c=a.n(o);a.d(t,"a",function(){return c.a}),a.d(t,"b",function(){return o.navigate});a(204),a(10).default.enqueue,n.a.createContext({})},206:function(e,t,a){"use strict";a.r(t);a(52),a(16),a(14),a(15),a(8),a(22);var M=a(0),n=a.n(M),o=a(98);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);t&&(M=M.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,M)}return a}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){i(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var M=a(0),n=a.n(M);a(221);t.a=function(){return n.a.createElement("footer",{className:"footer-primary"},n.a.createElement("div",{className:"footer-primary__inner"},n.a.createElement("p",{className:"footer-primary__text"},"©2019 Spruce Labs, LLC."),n.a.createElement("p",{className:"footer-primary__text"},"Made with ❤ in Denver, CO")))}},208:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQzIiBoZWlnaHQ9IjM4MyIgdmlld0JveD0iMCAwIDQ0MyAzODMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMjEuMjU5IDAuOTk2Mjg4QzM1OS44OTkgMTY4LjYxNCA0NDEuMjU5IDM4MC45OTMgNDQxLjI1OSAzODAuOTkzQzM2Mi41MzIgMzY4LjU4OCAyODMuMTA4IDM1Ny42NjQgMjQ0LjgxNCAzNTIuNTIxTDIzNi43ODUgMjg3LjUwMkMyNTcuMjg5IDI5MC4yNjggMjk0Ljg3MyAyOTUuMzk0IDMyOS42MTQgMzAwLjQyOEMzMjkuNjE0IDMwMC40MjggMjkzLjU5MSAyMDIuNjA5IDIyMS4yNTkgMTA4LjU3N0MxNDguOTI4IDIwMi42MDkgMTEyLjkwNSAzMDAuNDI4IDExMi45MDUgMzAwLjQyOEMxNDcuNjQ2IDI5NS4zOTQgMTg1LjIyOSAyOTAuMjY4IDIwNS43MzQgMjg3LjUwMkwxOTcuNzA1IDM1Mi41MjFDMTU5LjQxMSAzNTcuNjY0IDc5Ljk4NjMgMzY4LjU4OCAxLjI1OTI4IDM4MC45OTNDMS4yNTkyOCAzODAuOTkzIDgyLjYxOTYgMTY4LjYxNCAyMjEuMjU5IDAuOTk2Mjg4WiIgZmlsbD0iIzIwQkM5MyIvPgo8L3N2Zz4K"},210:function(e,t,a){"use strict";var M=a(0),n=a.n(M),o=a(205),c=a(207),i=a(208),u=a.n(i);a(229);t.a=function(e){var t=e.children;return n.a.createElement("aside",{className:"sidebar-nav"},n.a.createElement("div",{className:"sidebar-nav__header"},n.a.createElement(o.a,{className:"sidebar-nav__title-link",to:"/"},n.a.createElement("img",{className:"sidebar-nav__logo",src:u.a,width:28}),n.a.createElement("h1",{className:"sidebar-nav__title"},"Heartwood Tokens"))),n.a.createElement("div",{className:"sidebar-nav__inner"},t),n.a.createElement(c.a,null))}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODE2NjUgMy4yMDcxMUM3LjgxMTA0IDMuMjc3NzMgNy44NjEwNCAzLjM0MTMyIDcuOTMzMzIgMy4zNTU1MUM4LjIyNzExIDMuNDI1OTIgOC40MjgyOSAzLjY4NTYyIDguNDEzOTkgMy45NzU5OVY0Ljc1OTk5QzguNDEzOTkgNS4xNDQ3MyA4LjczODg4IDUuNDU2NjMgOS4xMzk2NSA1LjQ1NjYzVjUuNDU2NjNDOS4zMzIyMSA1LjQ1Njc4IDkuNTE2OTQgNS4zODM0NSA5LjY1MzE1IDUuMjUyNzhDOS43ODkzNyA1LjEyMjEyIDkuODY1OSA0Ljk0NDg0IDkuODY1OSA0Ljc1OTk5VjIuNzg1OTlDOS44NjU5IDIuNTYzNTEgOS43NzM2MSAyLjM1MDIgOS42MDk0MSAyLjE5MzJDOS40NDUyMSAyLjAzNjIxIDkuMjIyNjQgMS45NDg0NSA4Ljk5MDkgMS45NDkzNUg3Ljk4NTI0QzcuOTQ2NCAxLjk0OTE4IDcuOTA5MTQgMS45NjQxMyA3Ljg4MTk5IDEuOTkwNzlDNy44NTQ2IDIuMDE3MDYgNy44MzkyNyAyLjA1Mjc0IDcuODM5NCAyLjA4OTkxQzcuODQwNTcgMi4zNTQ3OSA3LjgzOTk5IDIuOTI1NDMgNy44MTY2NSAzLjIwNzExWiIgZmlsbD0iIzJDMzIzRCIvPgo8cGF0aCBkPSJNNS4yMjMxNyAxMi40NjY3QzUuMjIzMTcgMTIuMDgyIDQuODk4MjggMTEuNzcwMSA0LjQ5NzUgMTEuNzcwMUgyLjAzMjMzQzEuNjg4NjkgMTEuNzQ4MiAxLjQyODAyIDExLjQ2MzkgMS40NDkgMTEuMTMzOVYzLjk3NkMxLjQzMzAxIDMuNjgwOTYgMS42NDAyIDMuNDE3NTggMS45NDAxNyAzLjM1MTZDMi4wMTA5NiAzLjMzNzgyIDIuMDYwNTggMy4yNzYzNyAyLjA1NjgzIDMuMjA3MTJDMi4wMzQwOCAyLjc3ODE2IDIuMDI3MDggMi4zMTExMiAyLjAyNDc1IDIuMDg3MTJDMi4wMjM3OSAyLjAxMDQ2IDEuOTU4NzggMS45NDg3OSAxLjg3ODkyIDEuOTQ4OEgwLjg3NUMwLjY0MzE1NyAxLjk0NzkgMC40MjA0OTkgMi4wMzU3MyAwLjI1NjI4NiAyLjE5Mjg1QzAuMDkyMDczNSAyLjM0OTk3IC0wLjAwMDE1Njg1NCAyLjU2MzQzIDIuMDAyNTFlLTA3IDIuNzg2VjEyLjMyNjdDMS40ODQxNmUtMDcgMTIuNTQ4NiAwLjA5MTgzNzIgMTIuNzYxMyAwLjI1NTI5MiAxMi45MTgxQzAuNDE4NzQ3IDEzLjA3NDkgMC42NDA0MTggMTMuMTYyOSAwLjg3MTUgMTMuMTYyOEg0LjQ5NzVDNC44OTgwNSAxMy4xNjI4IDUuMjIyODUgMTIuODUxMiA1LjIyMzE3IDEyLjQ2NjdWMTIuNDY2N1oiIGZpbGw9IiMyQzMyM0QiLz4KPHBhdGggZD0iTTYuOTYzMjcgMy4wNjQzMlYxLjk1MTA0QzYuOTYzMjcgMS43OTY0IDYuODMyNjkgMS42NzEwNCA2LjY3MTYxIDEuNjcxMDRINi4yMjk0NEM2LjE1NTE5IDEuNjcwOTUgNi4wOTI3NyAxLjYxNzUyIDYuMDg0MTkgMS41NDY3MkM2LjAxODA5IDAuOTgzMzY4IDUuNTIxNzcgMC41NTc1NTYgNC45MzEyMyAwLjU1NzU1NkM0LjM0MDcgMC41NTc1NTYgMy44NDQzOCAwLjk4MzM2OCAzLjc3ODI3IDEuNTQ2NzJDMy43NzAyIDEuNjE3NzcgMy43MDc0NyAxLjY3MTQ2IDMuNjMzMDIgMS42NzEwNEgzLjE5MjYxQzMuMDMxNTIgMS42NzEwNCAyLjkwMDk0IDEuNzk2NCAyLjkwMDk0IDEuOTUxMDRWMy4wNjQzMkMyLjkwMDk0IDMuMjE4OTYgMy4wMzE1MiAzLjM0NDMyIDMuMTkyNjEgMy4zNDQzMkg2LjY3MzM2QzYuODMzNzYgMy4zNDMzOSA2Ljk2MzI4IDMuMjE4MyA2Ljk2MzI3IDMuMDY0MzJaIiBmaWxsPSIjMkMzMjNEIi8+CjxwYXRoIGQ9Ik0xMS4wOTUgMTAuMjMwNkg4Ljc3MzkzQzguNTMyMyAxMC4yMzA2IDguMzM2NDMgMTAuNDE4NyA4LjMzNjQzIDEwLjY1MDZDOC4zMzY0MyAxMC44ODI2IDguNTMyMyAxMS4wNzA2IDguNzczOTMgMTEuMDcwNkgxMS4wOTVDMTEuMzM2NiAxMS4wNzA2IDExLjUzMjUgMTAuODgyNiAxMS41MzI1IDEwLjY1MDZDMTEuNTMyNSAxMC40MTg3IDExLjMzNjYgMTAuMjMwNiAxMS4wOTUgMTAuMjMwNloiIGZpbGw9IiMyQzMyM0QiLz4KPHBhdGggZD0iTTguMzM2NDMgOC43MDIzOUM4LjMzNjc1IDguOTM0MTMgOC41MzI1MyA5LjEyMTgzIDguNzczOTMgOS4xMjE4M0gxMC4yMjQxQzEwLjQ2NTcgOS4xMjE4MyAxMC42NjE2IDguOTMzNzkgMTAuNjYxNiA4LjcwMTgzQzEwLjY2MTYgOC40Njk4NyAxMC40NjU3IDguMjgxODMgMTAuMjI0MSA4LjI4MTgzSDguNzczOTNDOC42NTc3OSA4LjI4MTgzIDguNTQ2NDIgOC4zMjYxNiA4LjQ2NDM2IDguNDA1MDRDOC4zODIzIDguNDgzOTMgOC4zMzYyNyA4LjU5MDkgOC4zMzY0MyA4LjcwMjM5VjguNzAyMzlaIiBmaWxsPSIjMkMzMjNEIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMzY3NyA3LjMwODU3QzEzLjU4NTggNy41MTc3NCAxMy43MDg0IDcuODAxNjEgMTMuNzA4MyA4LjA5NzYxVjEyLjg4QzEzLjcwODMgMTMuNDk4NiAxMy4xODYgMTQgMTIuNTQxNyAxNEg3LjI5MTY3QzYuNjQ3MzMgMTQgNi4xMjUgMTMuNDk4NiA2LjEyNSAxMi44OFY3LjMxMDgxQzYuMTI2NjEgNi42OTUyOSA2LjY0NyA2LjE5NzIxIDcuMjg4MTcgNi4xOTc1M0gxMS43MjVDMTIuMDMzNSA2LjE5NzUyIDEyLjMyOTQgNi4zMTUxNiAxMi41NDc1IDYuNTI0NTdMMTMuMzY3NyA3LjMwODU3Wk03Ljg3NSA3LjMxMzZDNy41NTI4NCA3LjMxMzYgNy4yOTE2NyA3LjU2NDMyIDcuMjkxNjcgNy44NzM2TDcuMjk0NTggMTIuMzJDNy4yOTQ1OCAxMi42MjkzIDcuNTU1NzUgMTIuODggNy44Nzc5MiAxMi44OEgxMS45NjEzQzEyLjI4MzQgMTIuODggMTIuNTQ0NiAxMi42MjkzIDEyLjU0NDYgMTIuMzJWOC4zMzA1NkMxMi41NDQ3IDguMTgxODYgMTIuNDgzMiA4LjAzOTIyIDEyLjM3MzcgNy45MzQwOEwxMS44OTY1IDcuNDc3MTJDMTEuNzg3IDcuMzcyMyAxMS42Mzg3IDcuMzEzNDkgMTEuNDg0MSA3LjMxMzZINy44NzVaIiBmaWxsPSIjMkMzMjNEIi8+Cjwvc3ZnPgo="},291:function(e,t){e.exports={components:{button:{"border-radius":{value:"0.25rem",original:{value:4},name:"components__button-border-radius",attributes:{category:"components",type:"button",item:"border-radius"},path:["components","button","border-radius"]},primary:{"text-color":{value:"#fff",original:{value:"#fff"},name:"components__button-primary_text-color",attributes:{category:"components",type:"button",item:"primary",subitem:"text-color"},path:["components","button","primary","text-color"]},"text-opacity":{default:{value:"1",original:{value:"1"},name:"components__button-primary_text-opacity--default",attributes:{category:"components",type:"button",item:"primary",subitem:"text-opacity",state:"default"},path:["components","button","primary","text-opacity","default"]},disabled:{value:"0.8",original:{value:"0.8"},name:"components__button-primary_text-opacity--disabled",attributes:{category:"components",type:"button",item:"primary",subitem:"text-opacity",state:"disabled"},path:["components","button","primary","text-opacity","disabled"]}},"background-color":{default:{value:"#1948cb",original:{value:"{color.primary.base.value}"},name:"components__button-primary_background-color--default",attributes:{category:"components",type:"button",item:"primary",subitem:"background-color",state:"default"},path:["components","button","primary","background-color","default"]},hover:{value:"#4a70d9",original:{value:"{color.primary.light.value}"},name:"components__button-primary_background-color--hover",attributes:{category:"components",type:"button",item:"primary",subitem:"background-color",state:"hover"},path:["components","button","primary","background-color","hover"]}}},destructive:{"text-color":{value:"#fff",original:{value:"#fff"},name:"components__button-destructive_text-color",attributes:{category:"components",type:"button",item:"destructive",subitem:"text-color"},path:["components","button","destructive","text-color"]},"text-opacity":{default:{value:"1",original:{value:"1"},name:"components__button-destructive_text-opacity--default",attributes:{category:"components",type:"button",item:"destructive",subitem:"text-opacity",state:"default"},path:["components","button","destructive","text-opacity","default"]},disabled:{value:"0.8",original:{value:"0.8"},name:"components__button-destructive_text-opacity--disabled",attributes:{category:"components",type:"button",item:"destructive",subitem:"text-opacity",state:"disabled"},path:["components","button","destructive","text-opacity","disabled"]}},"background-color":{default:{value:"#cb2f24",original:{value:"{color.critical.base.value}"},name:"components__button-destructive_background-color--default",attributes:{category:"components",type:"button",item:"destructive",subitem:"background-color",state:"default"},path:["components","button","destructive","background-color","default"]},hover:{value:"#ee5c52",original:{value:"{color.critical.light.value}"},name:"components__button-destructive_background-color--hover",attributes:{category:"components",type:"button",item:"destructive",subitem:"background-color",state:"hover"},path:["components","button","destructive","background-color","hover"]}}}},sidebar:{width:{value:"20rem",original:{value:320},name:"components__sidebar-width",attributes:{category:"components",type:"sidebar",item:"width"},path:["components","sidebar","width"]}}}}}}]);
//# sourceMappingURL=component---src-pages-components-tsx-2c401e4fd6e17dc64480.js.map