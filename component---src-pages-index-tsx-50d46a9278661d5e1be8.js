(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,n){"use strict";n.r(t);n(39);var a=n(196),o=n(0),s=n.n(o),i=n(197),r=n.n(i),c=(n(213),n(205),function(e){return s.a.createElement("div",{className:r()("layout",{"layout--has-left-sidebar":e.hasLeftSidebar})},e.children)}),l=n(214),u=n.n(l);n(215);n.d(t,"indexPageQuery",function(){return d}),n.d(t,"default",function(){return m});var d="1193714090",m=function(e){var t,n;function s(){return e.apply(this,arguments)||this}return n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,s.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.name,n=e.tagline;return o.createElement(c,null,o.createElement("div",{className:"debhug"},o.createElement("section",{className:"index-intro index-section"},o.createElement("div",{className:"index-section__inner"},o.createElement("img",{src:u.a,width:80,alt:"spruce logo"}),o.createElement("h1",{className:"index-title title-lg"},t),o.createElement("h2",{className:"index-subtitle"},n),o.createElement(a.a,{className:"index-link",to:"/tokens"},"Explore Tokens"))),o.createElement("section",{className:"index-section"},o.createElement("div",{className:"index-section__inner index-section__inner--flex"},o.createElement("h2",{className:"index-section-heading"},"WTF are design tokens?"),o.createElement("div",null,o.createElement("blockquote",{className:"index-section-quote"},"Design tokens are the smallest pieces of the Heartwood design system — basically anything that can be described using letters and numbers."),o.createElement("p",{className:"index-section-body"},"Tokens are platform-agnostic. JSON is the source of truth from which we automatically generate values that can be used for web, iOS, Android, Figma (coming soon), Sketch (also coming soon), and any other platforms that we may find useful in the future."),o.createElement("p",{className:"index-section-body"},"Heartwood tokens are organized into two main buckets: global tokens and component tokens. The former are the most commonly used and are shared by the latter, which correspond to specific components (e.g. Button, Input, etc…)."),o.createElement("p",{className:"index-section-body"},"Fun fact: this site is built with Heartwood tokens!")))),o.createElement("section",{className:"index-section"},o.createElement("div",{className:"index-section__inner index-section__inner--flex"},o.createElement("h2",{className:"index-section-heading"},"Usage (Coming Soon)"),o.createElement("div",null,o.createElement("p",{className:"index-section-body"},"To use Heartwood Tokens, install them with yarn or npm:"),o.createElement("code",{className:"index-section__code-block"},"yarn install @sprucelabs/heartwood-tokens"),o.createElement("code",{className:"index-section__code-block"},"npm install @sprucelabs/heartwood-tokens"),o.createElement("p",{className:"index-section-body"},"How you use the tokens depends on the platform. For example, in a web project, you might import token ",o.createElement("code",null,".scss")," ","files and write stylesheets on top of them."))))))},s}(o.Component)},194:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},196:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(66),i=n.n(s);n.d(t,"a",function(){return i.a}),n.d(t,"b",function(){return s.navigate});n(194),n(9).default.enqueue,o.a.createContext({})},197:function(e,t,n){var a;n(69),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===s)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},199:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),s=n(98);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQzIiBoZWlnaHQ9IjM4MyIgdmlld0JveD0iMCAwIDQ0MyAzODMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMjEuMjU5IDAuOTk2Mjg4QzM1OS44OTkgMTY4LjYxNCA0NDEuMjU5IDM4MC45OTMgNDQxLjI1OSAzODAuOTkzQzM2Mi41MzIgMzY4LjU4OCAyODMuMTA4IDM1Ny42NjQgMjQ0LjgxNCAzNTIuNTIxTDIzNi43ODUgMjg3LjUwMkMyNTcuMjg5IDI5MC4yNjggMjk0Ljg3MyAyOTUuMzk0IDMyOS42MTQgMzAwLjQyOEMzMjkuNjE0IDMwMC40MjggMjkzLjU5MSAyMDIuNjA5IDIyMS4yNTkgMTA4LjU3N0MxNDguOTI4IDIwMi42MDkgMTEyLjkwNSAzMDAuNDI4IDExMi45MDUgMzAwLjQyOEMxNDcuNjQ2IDI5NS4zOTQgMTg1LjIyOSAyOTAuMjY4IDIwNS43MzQgMjg3LjUwMkwxOTcuNzA1IDM1Mi41MjFDMTU5LjQxMSAzNTcuNjY0IDc5Ljk4NjMgMzY4LjU4OCAxLjI1OTI4IDM4MC45OTNDMS4yNTkyOCAzODAuOTkzIDgyLjYxOTYgMTY4LjYxNCAyMjEuMjU5IDAuOTk2Mjg4WiIgZmlsbD0iIzIwQkM5MyIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-50d46a9278661d5e1be8.js.map