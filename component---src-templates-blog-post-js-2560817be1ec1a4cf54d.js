/*! For license information please see component---src-templates-blog-post-js-2560817be1ec1a4cf54d.js.LICENSE.txt */
(self.webpackChunkwebnn_website=self.webpackChunkwebnn_website||[]).push([[989],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)}},34575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},69100:function(e,t,n){var r=n(99489),o=n(57067);function a(t,n,i){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},93913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},29754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(99489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},78585:function(e,t,n){var r=n(50008),o=n(81506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},319:function(e,t,n){var r=n(23646),o=n(46860),a=n(60379),i=n(98206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},75900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},14266:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var o=r(n(67154)),a=r(n(59713)),i=r(n(319)),l=r(n(34575)),s=r(n(78585)),c=r(n(29754)),u=r(n(81506)),f=r(n(93913)),m=r(n(2205)),d=r(n(45697)),p=r(n(67294)),h=r(n(75900)),v=r(n(62470));var g=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,m.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n[r]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],r=[],o=e||this.state.targetItems,a=!1,l=0,s=o.length;l<s;l++){var c=o[l],u=!a&&this._isInView(c);u?(a=!0,t.push(c)):n.push(c);var f=l===s-1,m=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&m&&(n.pop(),n.push.apply(n,(0,i.default)(t)),t=[c],r=this._fillArray(r,!1),u=!0),r.push(u)}return{inView:t,outView:n,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,r=n.rootEl,o=n.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var a=e.getBoundingClientRect(),i=r?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+i,c=r?a.top+l-t.top+o:a.top+l+o,u=c+e.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,r=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,r=n.children,i=n.className,l=n.scrolledPastClassName,s=n.style,c=0,u=p.default.Children.map(r,(function(t,n){var r;if(!t)return null;var i=t.type,s=l&&e.state.isScrolledPast[n],u=(0,h.default)((r={},(0,a.default)(r,"".concat(t.props.className),t.props.className),(0,a.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,a.default)(r,"".concat(e.props.scrolledPastClassName),s),r));return p.default.createElement(i,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,h.default)((0,a.default)({},"".concat(i),i));return p.default.createElement(t,{className:f,style:s},u)}}]),t}(p.default.Component);t.Z=g},62470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+r?(clearTimeout(n),n=setTimeout((function(){t=o,e()}),r)):(t=o,e())}};t.default=n},21900:function(e,t,n){var r,o;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;0<=--t&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),a=window.setTimeout((function(){t(r+o)}),o);return e=r+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",i=n.charCodeAt(0);++o<r;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},i=function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},l=function(t,n,r,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,f,m,d,p={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||l("scrollCancel",u)},animateScroll:function(r,s,c){p.cancelScroll();var f=n(u||t,c||{}),h="[object Number]"===Object.prototype.toString.call(r),v=h||!r.tagName?null:r;if(h||v){var g=e.pageYOffset;f.header&&!m&&(m=document.querySelector(f.header));var y,w,E,b,S,x,N,O,k=a(m),C=h?r:function(t,n,r,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-r,0),a&&(i=Math.min(i,o()-e.innerHeight)),i}(v,k,parseInt("function"==typeof f.offset?f.offset(r,s):f.offset,10),f.clip),_=C-g,A=o(),P=0,j=(y=_,E=(w=f).speedAsDuration?w.speed:Math.abs(y/1e3*w.speed),w.durationMax&&E>w.durationMax?w.durationMax:w.durationMin&&E<w.durationMin?w.durationMin:parseInt(E,10)),T=function t(n){var o,a,c;b||(b=n),P+=n-b,x=g+_*(a=S=1<(S=0===j?0:P/j)?1:S,"easeInQuad"===(o=f).easing&&(c=a*a),"easeOutQuad"===o.easing&&(c=a*(2-a)),"easeInOutQuad"===o.easing&&(c=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===o.easing&&(c=a*a*a),"easeOutCubic"===o.easing&&(c=--a*a*a+1),"easeInOutCubic"===o.easing&&(c=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===o.easing&&(c=a*a*a*a),"easeOutQuart"===o.easing&&(c=1- --a*a*a*a),"easeInOutQuart"===o.easing&&(c=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===o.easing&&(c=a*a*a*a*a),"easeOutQuint"===o.easing&&(c=1+--a*a*a*a*a),"easeInOutQuint"===o.easing&&(c=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),o.customEasing&&(c=o.customEasing(a)),c||a),e.scrollTo(0,Math.floor(x)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(g<n&&e.innerHeight+o)>=A)return p.cancelScroll(!0),i(r,n,h),l("scrollStop",f,r,s),!(d=b=null)}(x,C)||(d=e.requestAnimationFrame(t),b=n)};0===e.pageYOffset&&e.scrollTo(0,0),N=r,O=f,h||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:N.id},document.title,N===document.documentElement?"#top":"#"+N.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(r,Math.floor(C),!1):(l("scrollStart",f,r,s),p.cancelScroll(!0),e.requestAnimationFrame(T))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(f=t.target.closest(s))&&"a"===f.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&f.hostname===e.location.hostname&&f.pathname===e.location.pathname&&/#/.test(f.href)){var n,o;try{n=r(decodeURIComponent(f.hash))}catch(t){n=r(f.hash)}if("#"===n){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),p.animateScroll(o,f))}},v=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){u&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",v,!1),p.cancelScroll(),d=m=f=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),u=n(t,c||{}),m=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",v,!1)}(),p}}(o)}.apply(t,[]))||(e.exports=r)},46725:function(e,t,n){var r=n(93395);e.exports={MDXRenderer:r}},93395:function(e,t,n){var r=n(69100),o=n(319),a=n(59713),i=n(37316);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(67294),u=n(64983).mdx,f=n(89480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,["scope","children"]),l=f(t),m=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:u},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return c.createElement(m,s({},a))}},59219:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294),o=n(37374);function a(){return r.createElement("div",{id:"header",className:"relative overflow-hidden"},r.createElement("div",{id:"banner",className:"max-w-7xl mx-auto"},r.createElement("div",{className:"relative z-10 pb-10"},r.createElement(o.Z,null))))}},37198:function(e,t,n){"use strict";var r=n(93552),o=n(67294),a=n(59219),i=n(65610),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.children;return"undefined"!=typeof window&&n(21900)('a[href*="#"]'),o.createElement("div",null,o.createElement(a.Z,null),e,o.createElement(i.Z,null))},t}(o.Component);t.Z=l},36179:function(e,t,n){"use strict";var r=n(67294),o=n(35414),a=n(25444);function i(e){var t=e.description,n=e.lang,i=e.meta,s=e.keywords,c=e.title;return r.createElement(a.StaticQuery,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return r.createElement(o.Z,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}})}i.defaultProps={lang:"en",meta:[],keywords:[]},t.Z=i;var l="3128451518"},22337:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(93552),o=n(67294),a=n(25444),i=n(46725),l=n(37198),s=n(36179),c=n(14266);function u(e,t){return o.createElement(c.Z,{items:t,currentClassName:"is-current",className:"toc-list"},e.map((function(e){return o.createElement("li",{key:e.url},o.createElement("a",{href:e.url},e.title),e.items&&u(e.items))})))}var f=function(e){var t=e.items.map((function(e){return e.url.substring(1)}));return o.createElement("div",{className:"toc"},o.createElement("h3",{className:"uppercase tracking-wider font-light text-xs"},"Table of Content"),o.createElement("nav",null,u(e.items,t)))},m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.dtl,t=this.props.pageContext,n=t.previous,r=t.next,c=this.props.data.web.edges,u=this.props.data.blog.edges,m=this.props.data.doc.edges,d=this.props.data.faq.edges;return o.createElement(l.Z,null,o.createElement(s.Z,{title:e.frontmatter.title,description:e.excerpt}),o.createElement("div",{className:"pb-6 blog text-nn-tgray1 grid grid-cols-1 md:grid-cols-5"},o.createElement("div",{className:"col-span-1 justify-self-end frame"},o.createElement("div",{className:"sbdocs"},o.createElement("h3",{className:"uppercase tracking-wider font-light text-xs"},"Get Started (Web)"),o.createElement("nav",null,o.createElement("ul",null,c.map((function(e,t){var n=e.node,r=n.frontmatter.title,i=n.fields.slug;return o.createElement("li",null,o.createElement(a.Link,{to:i,className:""},r))})))),o.createElement("h3",{className:"uppercase tracking-wider font-light text-xs"},"Blog"),o.createElement("nav",null,o.createElement("ul",null,u.map((function(e,t){var n=e.node,r=n.frontmatter.title,i=n.fields.slug;return o.createElement("li",null,o.createElement(a.Link,{to:i,className:""},r))})))),o.createElement("h3",{className:"uppercase tracking-wider font-light text-xs"},"Documentation"),o.createElement("nav",null,o.createElement("ul",null,m.map((function(e,t){var n=e.node,r=n.frontmatter.title,i=n.fields.slug;return o.createElement("li",null,o.createElement(a.Link,{to:i,className:""},r))})))),o.createElement("h3",{className:"uppercase tracking-wider font-light text-xs"},"FAQ"),o.createElement("nav",{className:"navlast"},o.createElement("ul",null,d.map((function(e,t){var n=e.node,r=n.frontmatter.title,i=n.fields.slug;return o.createElement("li",null,o.createElement(a.Link,{to:i,className:""},r))})))))),o.createElement("div",{className:"col-span-1 md:col-span-3 px-4 sm:px-6 lg:px-6"},o.createElement("div",{className:"overflow-hidden w-full"},o.createElement("div",{className:"bg-white w-full"},o.createElement("div",{className:"text-nn-t1 text-2xl font-medium mt-2 overflow-hidden overflow-ellipsis text-center"},e.frontmatter.title),o.createElement("div",{className:"text-nn-t2 text-center mb-4"},e.frontmatter.date),o.createElement("div",{className:"bp"},o.createElement(i.MDXRenderer,null,e.body)),o.createElement("div",{className:"flex items-center mt-4 mb-2"},o.createElement("span",{className:"block relative"},o.createElement("img",{alt:"profil",src:e.frontmatter.avatar,className:"mx-auto object-cover rounded-full h-10 w-10"})),o.createElement("div",{className:"flex flex-col justify-between ml-4 text-sm"},o.createElement("p",{className:"text-gray-800"},e.frontmatter.author),o.createElement("p",{className:"text-gray-400"},e.frontmatter.date)))),o.createElement("ul",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 text-sm"},o.createElement("li",{className:"md:col-start-1 md:col-end-1"},n&&o.createElement(a.Link,{to:n.fields.slug,className:"text-nn-t1 hover:text-nn-t2",rel:"prev"},o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-left",className:"h-5 w-5 mb-1 inline-block svg-inline--fa fa-angle-left fa-w-8",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{fill:"currentColor",d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"})),n.frontmatter.title)),o.createElement("li",{className:"md:col-start-2 md:col-end-2 justify-self-end"},r&&o.createElement(a.Link,{to:r.fields.slug,className:"text-nn-t1 hover:text-nn-t2",rel:"next"},r.frontmatter.title,o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",className:"h-5 w-5 mb-1 inline-block svg-inline--fa fa-angle-right fa-w-8",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}))))))),o.createElement("div",{className:"col-span-1 frame"},!!e.tableOfContents.items&&o.createElement(f,{items:e.tableOfContents.items}))))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2560817be1ec1a4cf54d.js.map