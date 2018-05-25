/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-supports-svgclippaths-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?b.className.baseVal=n:b.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",p=i("div"),d=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function h(e,n,o,s){function a(){c&&(delete q.style,delete q.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,h,g=["modernizr","tspan","samp"];!q.style&&g.length;)c=!0,q.modElem=i(g.shift()),q.style=q.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],h=q.style[m],u(m,"-")&&(m=f(m)),q.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{q.style[m]=o}catch(y){}if(q.style[m]!=h)return a(),"pfx"==n?m:!0}return a(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+A.join(i+" ")+i).split(" "),p(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var S=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",_||x);var b=n.documentElement,T="svg"===b.nodeName.toLowerCase(),P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P;var z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(z.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var E=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(r,function(e){t=9===e.offsetTop})}return t});var N="Moz O ms Webkit",j=w._config.usePrefixes?N.split(" "):[];w._cssomPrefixes=j;var A=w._config.usePrefixes?N.toLowerCase().split(" "):[];w._domPrefixes=A;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var q={style:k.elem.style};Modernizr._q.unshift(function(){delete q.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),o(),s(S),delete w.addTest,delete w.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
/*! formstone v1.4.3 [core.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";function t(e,t,n,s){var i,r={raw:{}};s=s||{};for(i in s)s.hasOwnProperty(i)&&("classes"===e?(r.raw[s[i]]=t+"-"+s[i],r[s[i]]="."+t+"-"+s[i]):(r.raw[i]=s[i],r[i]=s[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(r.raw[i]=n[i].replace(/{ns}/g,t),r[i]=n[i].replace(/{ns}/g,"."+t)):(r.raw[i]=n[i].replace(/.{ns}/g,""),r[i]=n[i].replace(/{ns}/g,t)));return r}function n(){p.windowWidth=p.$window.width(),p.windowHeight=p.$window.height(),g=f.startTimer(g,y,s)}function s(){for(var e in p.ResizeHandlers)p.ResizeHandlers.hasOwnProperty(e)&&p.ResizeHandlers[e].callback.call(window,p.windowWidth,p.windowHeight)}function i(){if(p.support.raf){p.window.requestAnimationFrame(i);for(var e in p.RAFHandlers)p.RAFHandlers.hasOwnProperty(e)&&p.RAFHandlers[e].callback.call(window)}}function r(e,t){return parseInt(e.priority)-parseInt(t.priority)}var o,a,c,l="undefined"!=typeof window?window:this,u=l.document,d=function(){this.Version="@version",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=l,this.$window=e(l),this.document=u,this.$document=e(u),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},f={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(t){v[t]=!0,e.isEmptyObject(v)||b||(o.length?o.attr("content",c):o=e("head").append('<meta name="viewport" content="'+c+'">'),p.$body.on(m.gestureChange,f.killGesture).on(m.gestureStart,f.killGesture).on(m.gestureEnd,f.killGesture),b=!0)},unlockViewport:function(t){"undefined"!==e.type(v[t])&&delete v[t],e.isEmptyObject(v)&&b&&(o.length&&(a?o.attr("content",a):o.remove()),p.$body.off(m.gestureChange).off(m.gestureStart).off(m.gestureEnd),b=!1)},startTimer:function(e,t,n,s){return f.clearTimer(e),s?setInterval(n,t):setTimeout(n,t)},clearTimer:function(e,t){e&&(t?clearInterval(e):clearTimeout(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=p.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),s=0;s<n.length;s++){var i=n[s].split("=");t[i[0]]=i[1]}return t}},p=new d,h=e.Deferred(),w={base:"{ns}",element:"{ns}-element"},m={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},g=null,y=20,v=[],b=!1;return d.prototype.NoConflict=function(){p.DontConflict=!0;for(var t in p.Plugins)p.Plugins.hasOwnProperty(t)&&(e[t]=p.Conflicts[t],e.fn[t]=p.Conflicts.fn[t])},d.prototype.Ready=function(e){"complete"===p.document.readyState||"loading"!==p.document.readyState&&!p.document.documentElement.doScroll?e():p.document.addEventListener("DOMContentLoaded",e)},d.prototype.Plugin=function(n,s){return p.Plugins[n]=function(n,s){function i(t){var i,r,a,l="object"===e.type(t),u=Array.prototype.slice.call(arguments,l?1:0),d=this,f=e();for(t=e.extend(!0,{},s.defaults||{},l?t:{}),r=0,a=d.length;r<a;r++)if(i=d.eq(r),!o(i)){s.guid++;var p="__"+s.guid,h=s.classes.raw.base+p,w=i.data(n+"-options"),m=e.extend(!0,{$el:i,guid:p,numGuid:s.guid,rawGuid:h,dotGuid:"."+h},t,"object"===e.type(w)?w:{});i.addClass(s.classes.raw.element).data(c,m),s.methods._construct.apply(i,[m].concat(u)),f=f.add(i)}for(r=0,a=f.length;r<a;r++)i=f.eq(r),s.methods._postConstruct.apply(i,[o(i)]);return d}function o(e){return e.data(c)}var a="fs-"+n,c="fs"+n.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()});return s.initialized=!1,s.priority=s.priority||10,s.classes=t("classes",a,w,s.classes),s.events=t("events",n,m,s.events),s.functions=e.extend({getData:o,iterate:function(t){for(var n=this,s=Array.prototype.slice.call(arguments,1),i=0,r=n.length;i<r;i++){var a=n.eq(i),c=o(a)||{};"undefined"!==e.type(c.$el)&&t.apply(a,[c].concat(s))}return n}},f,s.functions),s.methods=e.extend(!0,{_construct:e.noop,_postConstruct:e.noop,_destruct:e.noop,_resize:!1,destroy:function(e){s.functions.iterate.apply(this,[s.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(s.classes.raw.element).removeData(c)}},s.methods),s.utilities=e.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(t){s.defaults=e.extend(!0,s.defaults,t||{})}},s.utilities),s.widget&&(p.Conflicts.fn[n]=e.fn[n],e.fn[c]=function(t){if(this instanceof e){var n=s.methods[t];if("object"===e.type(t)||!t)return i.apply(this,arguments);if(n&&0!==t.indexOf("_")){var r=[n].concat(Array.prototype.slice.call(arguments,1));return s.functions.iterate.apply(this,r)}return this}},p.DontConflict||(e.fn[n]=e.fn[c])),p.Conflicts[n]=e[n],e[c]=s.utilities._delegate||function(t){var n=s.utilities[t]||s.utilities._initialize||!1;if(n){var i=Array.prototype.slice.call(arguments,"object"===e.type(t)?0:1);return n.apply(window,i)}},p.DontConflict||(e[n]=e[c]),s.namespace=n,s.namespaceClean=c,s.guid=0,s.methods._resize&&(p.ResizeHandlers.push({namespace:n,priority:s.priority,callback:s.methods._resize}),p.ResizeHandlers.sort(r)),s.methods._raf&&(p.RAFHandlers.push({namespace:n,priority:s.priority,callback:s.methods._raf}),p.RAFHandlers.sort(r)),s}(n,s),p.Plugins[n]},p.$window.on("resize.fs",n),n(),i(),p.Ready(function(){p.$body=e("body"),e("html").addClass(p.support.touch?"touchevents":"no-touchevents"),o=e('meta[name="viewport"]'),a=!!o.length&&o.attr("content"),c="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",h.resolve()}),m.clickTouchStart=m.click+" "+m.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],s={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",r="",o="",a=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in a.style){i=t[e],p.support.transition=!0;break}m.transitionEnd=i+".{ns}";for(e in n)if(n.hasOwnProperty(e)&&n[e]in a.style){r=n[e];break}p.transition=r;for(e in s)if(s.hasOwnProperty(e)&&s[e]in a.style){p.support.transform=!0,o=s[e];break}p.transform=o}(),window.Formstone=p,p});
/*! formstone v1.4.3 [mediaquery.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){v={unit:s.unit};for(var e in u)if(u.hasOwnProperty(e))for(var t in l[e])if(l[e].hasOwnProperty(t)){var n="Infinity"===t?1/0:parseInt(t,10),i=e.indexOf("max")>-1;l[e][t].matches&&(i?(!v[e]||n<v[e])&&(v[e]=n):(!v[e]||n>v[e])&&(v[e]=n))}}function i(){n(),m.trigger(h.mqChange,[v])}function r(e){var t=a(e.media),n=d[t],i=e.matches,r=i?h.enter:h.leave;if(n&&(n.active||!n.active&&i)){for(var o in n[r])n[r].hasOwnProperty(o)&&n[r][o].apply(n.mq);n.active=!0}}function a(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var o=t.Plugin("mediaquery",{utilities:{_initialize:function(t){t=t||{};for(var n in u)u.hasOwnProperty(n)&&(s[n]=t[n]?e.merge(t[n],s[n]):s[n]);(s=e.extend(s,t)).minWidth.sort(f.sortDesc),s.maxWidth.sort(f.sortAsc),s.minHeight.sort(f.sortDesc),s.maxHeight.sort(f.sortAsc);for(var r in u)if(u.hasOwnProperty(r)){l[r]={};for(var a in s[r])if(s[r].hasOwnProperty(a)){var o=window.matchMedia("("+u[r]+": "+(s[r][a]===1/0?1e5:s[r][a])+s.unit+")");o.addListener(i),l[r][s[r][a]]=o}}i()},state:function(){return v},bind:function(e,t,n){var i=c.matchMedia(t),o=a(i.media);d[o]||(d[o]={mq:i,active:!0,enter:{},leave:{}},d[o].mq.addListener(r));for(var s in n)n.hasOwnProperty(s)&&d[o].hasOwnProperty(s)&&(d[o][s][e]=n[s]);var m=d[o],f=i.matches;f&&m[h.enter].hasOwnProperty(e)?(m[h.enter][e].apply(i),m.active=!0):!f&&m[h.leave].hasOwnProperty(e)&&(m[h.leave][e].apply(i),m.active=!1)},unbind:function(e,t){if(e)if(t){var n=a(t);d[n]&&(d[n].enter[e]&&delete d[n].enter[e],d[n].leave[e]&&delete d[n].leave[e])}else for(var i in d)d.hasOwnProperty(i)&&(d[i].enter[e]&&delete d[i].enter[e],d[i].leave[e]&&delete d[i].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},h=e.extend(o.events,{enter:"enter",leave:"leave"}),m=t.$window,c=m[0],f=o.functions,v=null,d=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});
/*! formstone v1.4.3 [analytics.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){v.scrollDepth&&c()}function i(t){!k&&g&&g.length&&(k=!0,(v=e.extend(v,t||{})).autoEvents&&g.find("a").not("["+b+"]").each(o),v.scrollDepth&&(c(),y.on(x.scroll,l).one(x.load,n)),g.on(x.click,"*["+b+"]",s))}function a(){k&&g&&g.length&&(y.off(x.namespace),g.off(x.namespace),k=!1)}function o(){var t,n=e(this),i="undefined"!==e.type(n[0].href)?n[0].href:"",a=document.domain.split(".").reverse(),o=null!==i.match(a[1]+"."+a[0]);i.match(/^mailto\:/i)?t="Email, Click, "+i.replace(/^mailto\:/i,""):i.match(/^tel\:/i)?t="Telephone, Click, "+i.replace(/^tel\:/i,""):i.match(v.fileTypes)?t="File, Download:"+(/[.]/.exec(i)?/[^.]+$/.exec(i):void 0)[0]+", "+i.replace(/ /g,"-"):o||(t="ExternalLink, Click, "+i),t&&n.attr(b,t)}function l(e){w.startTimer(S,250,r)}function r(){for(var n,i=y.scrollTop()+t.windowHeight,a=1/v.scrollStops,o=a,l=1;l<=v.scrollStops;l++)n=Math.round(100*o).toString(),!C[D][n].passed&&i>C[D][n].edge&&(C[D][n].passed=!0,p(e.extend(v.scrollFields,{eventCategory:"ScrollDepth",eventAction:D,eventLabel:n,nonInteraction:!0}))),o+=a}function c(){var t,n=e.mediaquery("state"),i=g.outerHeight(),a={},o=1/v.scrollStops,l=o,r=0;n.minWidth&&(D="MinWidth:"+n.minWidth+"px");for(var c=1;c<=v.scrollStops;c++)r=parseInt(i*l),a[t=Math.round(100*l).toString()]={edge:"100"===t?r-10:r,passsed:!(!C[D]||!C[D][t])&&C[D][t].passed},l+=o;C[D]=a}function s(t){var n=e(this),i=n.attr("href"),a=n.data(T).split(",");v.eventCallback&&t.preventDefault();for(var o in a)a.hasOwnProperty(o)&&(a[o]=e.trim(a[o]));p({eventCategory:a[0],eventAction:a[1],eventLabel:a[2]||i,eventValue:a[3],nonInteraction:a[4]},n)}function p(t,n){m.location;var i=e.extend({hitType:"event"},t);if("undefined"!==e.type(n)&&!n.attr("data-analytics-stop")){var a="undefined"!==e.type(n[0].href)?n[0].href:"",o=!a.match(/^mailto\:/i)&&!a.match(/^tel\:/i)&&a.indexOf(":")<0?m.location.protocol+"//"+m.location.hostname+"/"+a:a;if(""!==o){var l=n.attr("target");if(l)m.open(o,l);else if(v.eventCallback){i.hitCallback=function(){A&&(w.clearTimer(A),u(o))},A=w.startTimer(A,v.eventTimeout,i.hitCallback)}}}d(i)}function f(t){d(e.extend({hitType:"pageview"},t))}function d(t){if("function"===e.type(m.ga)&&"function"===e.type(m.ga.getAll))for(var n=m.ga.getAll(),i=0,a=n.length;i<a;i++)m.ga(n[i].get("name")+".send",t)}function u(e){document.location=e}var h=t.Plugin("analytics",{methods:{_resize:n},utilities:{_delegate:function(){if(arguments.length&&"object"!==e.type(arguments[0]))if("destroy"===arguments[0])a.apply(this);else{var t=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":f.apply(this,t);break;case"event":p.apply(this,t)}}else i.apply(this,arguments);return null}}}),v={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},m=t.window,y=t.$window,g=null,w=h.functions,x=h.events,k=!1,T="analytics-event",b="data-"+T,C={},S=null,D="Site",A=null;t.Ready(function(){g=t.$body})});
/*! formstone v1.4.3 [background.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(e,i){"use strict";function o(){(C=Y.scrollTop()+i.windowHeight)<0&&(C=0),P.iterate.call(I,v)}function t(){j=e(b.base),I=e(b.lazy),P.iterate.call(I,h)}function a(e){if(e.visible){var i=e.source;e.source=null,n(e,i,!0)}}function n(i,o,t){if(o!==i.source&&i.visible){if(i.source=o,i.responsive=!1,i.isYouTube=!1,"object"===e.type(o)&&"string"===e.type(o.video)){var a=o.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);a&&a.length>=1&&(i.isYouTube=!0,i.videoId=a[1])}var n=!i.isYouTube&&"object"===e.type(o)&&(o.hasOwnProperty("mp4")||o.hasOwnProperty("ogg")||o.hasOwnProperty("webm"));if(i.video=i.isYouTube||n,i.playing=!1,i.isYouTube)i.playerReady=!1,i.posterLoaded=!1,u(i,o,t);else if("object"===e.type(o)&&o.hasOwnProperty("poster"))d(i,o,t);else{var l=o;if("object"===e.type(o)){var c,p=[],y=[];for(c in o)o.hasOwnProperty(c)&&y.push(c);y.sort(P.sortAsc);for(c in y)y.hasOwnProperty(c)&&p.push({width:parseInt(y[c]),url:o[y[c]],mq:$.matchMedia("(min-width: "+parseInt(y[c])+"px)")});i.responsive=!0,i.sources=p,l=r(i)}s(i,l,!1,t)}}else i.$el.trigger(T.loaded)}function r(e){var o=e.source;if(e.responsive){o=e.sources[0].url;for(var t in e.sources)e.sources.hasOwnProperty(t)&&(i.support.matchMedia?e.sources[t].mq.matches&&(o=e.sources[t].url):e.sources[t].width<i.fallbackWidth&&(o=e.sources[t].url))}return o}function s(i,o,t,a){var n=[w.media,w.image,!0!==a?w.animated:""].join(" "),r=e('<div class="'+n+'" aria-hidden="true"><img alt="'+i.alt+'"></div>'),s=r.find("img"),d=o;s.one(T.load,function(){R&&r.addClass(w.native).css({backgroundImage:"url('"+d+"')"}),r.fsTransition({property:"opacity"},function(){t||l(i)}).css({opacity:1}),f(i),t&&!a||i.$el.trigger(T.loaded)}).one(T.error,i,c).attr("src",d),i.responsive&&r.addClass(w.responsive),i.$container.append(r),(s[0].complete||4===s[0].readyState)&&s.trigger(T.load),i.currentSource=d}function d(o,t,a){if(o.source&&o.source.poster&&(s(o,o.source.poster,!0,!0),a=!1),!i.isMobile){var n='<div class="'+[w.media,w.video,!0!==a?w.animated:""].join(" ")+'" aria-hidden="true">';n+="<video",o.loop&&(n+=" loop"),o.mute&&(n+=" muted"),n+=">",o.source.webm&&(n+='<source src="'+o.source.webm+'" type="video/webm" />'),o.source.mp4&&(n+='<source src="'+o.source.mp4+'" type="video/mp4" />'),o.source.ogg&&(n+='<source src="'+o.source.ogg+'" type="video/ogg" />'),n+="</video>";var r=e(n+="</div>");r.find("video").one(T.loadedMetaData,function(e){r.fsTransition({property:"opacity"},function(){l(o)}).css({opacity:1}),f(o),o.$el.trigger(T.loaded),o.autoPlay&&p(o)}),o.$container.append(r)}}function u(o,t,a){if(!o.videoId){var n=t.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);o.videoId=n[1]}if(o.posterLoaded||(o.source.poster||(o.source.poster="//img.youtube.com/vi/"+o.videoId+"/0.jpg"),o.posterLoaded=!0,s(o,o.source.poster,!0,a),a=!1),!i.isMobile)if(e("script[src*='youtube.com/iframe_api']").length||e("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),z){var r=o.guid+"_"+o.youTubeGuid++,d='<div class="'+[w.media,w.embed,!0!==a?w.animated:""].join(" ")+'" aria-hidden="true">';d+='<div id="'+r+'"></div>';var u=e(d+="</div>"),p=e.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:r,loop:o.loop?1:0,autoplay:1,origin:$.location.protocol+"//"+$.location.host},o.youtubeOptions);p.autoplay=1,o.$container.append(u),o.player&&(o.oldPlayer=o.player,o.player=null),o.player=new $.YT.Player(r,{videoId:o.videoId,playerVars:p,events:{onReady:function(e){o.playerReady=!0,o.mute&&o.player.mute(),o.autoPlay||o.player.pauseVideo()},onStateChange:function(e){o.playing||e.data!==$.YT.PlayerState.PLAYING?o.loop&&o.playing&&e.data===$.YT.PlayerState.ENDED&&o.player.playVideo():(o.playing=!0,u.fsTransition({property:"opacity"},function(){l(o)}).css({opacity:1}),f(o),o.$el.trigger(T.loaded)),o.$el.find(b.embed).addClass(w.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){c({data:o})},onApiChange:function(e){}}}),f(o)}else O.push({data:o,source:t})}function l(e){var i=e.$container.find(b.media);i.length>=1&&(i.not(":last").remove(),e.oldPlayer=null)}function c(e){e.data.$el.trigger(T.error)}function p(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function y(e){if(e.visible)if(e.responsive){var i=r(e);i!==e.currentSource?s(e,i,!1,!0):f(e)}else f(e)}function f(e){for(var i=e.$container.find(b.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!==n||!R)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=g(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function h(e){e.scrollTop=e.$el.offset().top}function v(e){!e.visible&&e.scrollTop<C+e.lazyEdge&&(e.visible=!0,a(e))}function g(i,o){if(i.isYouTube)return{height:500,width:500/i.embedRatio};if(o.is("img")){var t=o[0];if("undefined"!==e.type(t.naturalHeight))return{height:t.naturalHeight,width:t.naturalWidth};var a=new Image;return a.src=t.src,{height:a.height,width:a.width}}return{height:o[0].videoHeight,width:o[0].videoWidth}}var m=i.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(i){i.youTubeGuid=0,i.$container=e('<div class="'+w.container+'"></div>').appendTo(this),i.thisClasses=[w.base,i.customClass],i.visible=!0,i.lazy&&(i.visible=!1,i.thisClasses.push(w.lazy)),this.addClass(i.thisClasses.join(" ")),t(),i.lazy?(h(i),v(i)):a(i)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(T.namespace),t()},_resize:function(){P.iterate.call(j,y),P.iterate.call(I,h),P.iterate.call(I,v)},play:p,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:f,load:n,unload:function(e){var i=e.$container.find(b.media);i.length>=1&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),b=m.classes,w=b.raw,T=m.events,P=m.functions,$=i.window,Y=i.$window,C=0,j=[],I=[],R="backgroundSize"in i.document.documentElement.style,z=!1,O=[];i.Ready(function(){o(),Y.on("scroll",o)}),$.onYouTubeIframeAPIReady=function(){z=!0;for(var e in O)O.hasOwnProperty(e)&&u(O[e].data,O[e].source);O=[]}});
/*! formstone v1.4.3 [carousel.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function i(){z=e(L.base)}function n(e){e.enabled&&(N.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(H.update),this.removeClass([X.enabled,X.animated].join(" ")).off(H.namespace),e.$canister.fsTouch("destroy").off(H.namespace).attr("style","").css(G,"none"),e.$items.css({width:"",height:""}).removeClass([X.visible,L.item_previous,L.item_next].join(" ")),e.$images.off(H.namespace),e.$controlItems.off(H.namespace),e.$pagination.html("").off(H.namespace),h(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(E,""),e.index=0)}function a(e){e.enabled||(e.enabled=!0,this.addClass(X.enabled),e.$controlItems.on(H.click,e,g),e.$pagination.on(H.click,L.page,e,p),e.$items.on(H.click,e,I),e.$subordinate.on(H.update,e,W),W({data:e},0),e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(H.panStart,e,C).on(H.pan,e,x).on(H.panEnd,e,w).on(H.swipe,e,P).on(H.focusIn,e,M).css(G,""),o(e),e.$images.on(H.load,e,u),e.autoAdvance&&(e.autoTimer=N.startTimer(e.autoTimer,e.autoTime,function(){m(e)},!0)),s.call(this,e))}function s(e){if(e.enabled){var t,i,n,a,s,o,r;if(e.count=e.$items.length,e.count<1)return h(e),void e.$canister.css({height:""});for(this.removeClass(X.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=b(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.pageCount=Math.ceil(e.count/e.perPage),e.canisterWidth=e.single?e.containerWidth:(e.pageWidth+e.itemMargin)*e.pageCount,e.$canister.css({width:e.matchWidth?e.canisterWidth:1e6,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([X.visible,X.item_previous,X.item_next].join(" ")),e.pages=[],i=0,0;i<e.count;i+=e.perPage){for(s=0,o=0,(a=e.$items.slice(i,i+e.perPage)).length<e.perPage&&(a=0===i?e.$items:e.$items.slice(e.$items.length-e.perPage)),r=(e.rtl?a.eq(a.length-1):a.eq(0)).position().left,n=0;n<a.length;n++)s+=a.eq(n).outerWidth(!0),(t=a.eq(n).outerHeight())>o&&(o=t);e.pages.push({left:e.rtl?r-(e.canisterWidth-s):r,height:o,width:s,$items:a}),o>e.itemHeight&&(e.itemHeight=o),0}e.paged&&(e.pageCount=e.count-e.visible+1),e.pageCount<=0&&(e.pageCount=1),e.maxMove=-e.pages[e.pageCount-1].left,e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var l="";for(i=0;i<e.pageCount;i++)l+='<button type="button" class="'+X.page+'">'+(i+1)+"</button>";e.$pagination.html(l),e.pageCount<=1?h(e):v(e),e.$paginationItems=e.$pagination.find(L.page),f(e,e.index,!1),setTimeout(function(){e.$el.addClass(X.animated)},5)}}function o(e){e.$items=e.$canister.children().not(":hidden").addClass(X.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function r(e,t){e.$images.off(H.namespace),!1!==t&&e.$canister.html(t),e.index=0,o(e),s.call(this,e)}function l(e,t,i,n,a){e.enabled&&(N.clearTimer(e.autoTimer),void 0===a&&(a=!0),f(e,t-1,a,i,n))}function c(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),f(e,t)}function d(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),f(e,t)}function u(e){var t=e.data;t.resizeTimer=N.startTimer(t.resizeTimer,1,function(){s.call(t.$el,t)})}function m(e){var t=e.index+1;t>=e.pageCount&&(t=0),f(e,t)}function g(t){N.killEvent(t);var i=t.data,n=i.index+(e(t.currentTarget).hasClass(X.control_next)?1:-1);N.clearTimer(i.autoTimer),f(i,n)}function p(t){N.killEvent(t);var i=t.data,n=i.$paginationItems.index(e(t.currentTarget));N.clearTimer(i.autoTimer),f(i,n)}function f(t,i,n,a,s){if(i<0&&(i=t.infinite?t.pageCount-1:0),i>=t.pageCount&&(i=t.infinite?0:t.pageCount-1),!(t.count<1)){t.pages[i]&&(t.leftPosition=-t.pages[i].left),t.leftPosition=_(t,t.leftPosition),t.useMargin?t.$canister.css({marginLeft:t.leftPosition}):!1===n?(t.$canister.css(G,"none").css(E,"translateX("+t.leftPosition+"px)"),setTimeout(function(){t.$canister.css(G,"")},5)):t.$canister.css(E,"translateX("+t.leftPosition+"px)"),t.$items.removeClass([X.visible,X.item_previous,X.item_next].join(" "));for(var o=0,r=t.pages.length;o<r;o++)o===i?t.pages[o].$items.addClass(X.visible).attr("aria-hidden","false"):t.pages[o].$items.not(t.pages[i].$items).addClass(o<i?X.item_previous:X.item_next).attr("aria-hidden","true");t.autoHeight&&t.$canister.css({height:t.pages[i].height}),!1!==n&&!0!==a&&i!==t.index&&(t.infinite||i>-1&&i<t.pageCount)&&t.$el.trigger(H.update,[i]),t.index=i,t.linked&&!0!==s&&e(t.linked).not(t.$el)[y]("jumpPage",t.index+1,!0,!0),$(t)}}function h(e){e.$controls.removeClass(X.visible),e.$controlItems.removeClass(X.visible),e.$pagination.removeClass(X.visible)}function v(e){e.$controls.addClass(X.visible),e.$controlItems.addClass(X.visible),e.$pagination.addClass(X.visible)}function $(e){e.$paginationItems.removeClass(X.active).eq(e.index).addClass(X.active),e.infinite?e.$controlItems.addClass(X.visible):e.pageCount<1?e.$controlItems.removeClass(X.visible):(e.$controlItems.addClass(X.visible),e.index<=0?e.$controlPrevious.removeClass(X.visible):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&e.$controlNext.removeClass(X.visible))}function b(i){var n=1;if(i.single)return n;if("array"===e.type(i.show))for(var a in i.show)i.show.hasOwnProperty(a)&&(t.support.matchMedia?i.show[a].mq.matches&&(n=i.show[a].count):i.show[a].width<t.fallbackWidth&&(n=i.show[a].count));else n=i.show;return i.fill&&i.count<n?i.count:n}function C(t,i){var n=t.data;if(N.clearTimer(n.autoTimer),!n.single){if(n.useMargin)n.leftPosition=parseInt(n.$canister.css("marginLeft"));else{var a=n.$canister.css(E).split(",");n.leftPosition=parseInt(a[4])}if(n.$canister.css(G,"none").css("will-change","transform"),x(t),n.linked&&!0!==i){var s=t.deltaX/n.pageWidth;n.rtl&&(s*=-1),e(n.linked).not(n.$el)[y]("panStart",s)}}n.isTouching=!0}function x(t,i){var n=t.data;if(!n.single&&(n.touchLeft=_(n,n.leftPosition+t.deltaX),n.useMargin?n.$canister.css({marginLeft:n.touchLeft}):n.$canister.css(E,"translateX("+n.touchLeft+"px)"),n.linked&&!0!==i)){var a=t.deltaX/n.pageWidth;n.rtl&&(a*=-1),e(n.linked).not(n.$el)[y]("pan",a)}}function w(t,i){var n=t.data,a=Math.abs(t.deltaX),s=k(n,t),o=!1;if(n.didPan=!1,!n.single){var r,l,c=Math.abs(n.touchLeft),d=!1,u=n.rtl?"right":"left";if(t.directionX===u)for(r=0,l=n.pages.length;r<l;r++)d=n.pages[r],c>Math.abs(d.left)+20&&(o=r+1);else for(r=n.pages.length-1,l=0;r>=l;r--)d=n.pages[r],c<Math.abs(d.left)&&(o=r-1)}!1===o&&(o=a<50?n.index:n.index+s),o!==n.index&&(n.didPan=!0),n.linked&&!0!==i&&e(n.linked).not(n.$el)[y]("panEnd",o),T(n,o)}function P(t,i){var n=t.data,a=k(n,t),s=n.index+a;n.linked&&!0!==i&&e(n.linked).not(n.$el)[y]("swipe",t.directionX),T(n,s)}function T(e,t){e.$canister.css(G,"").css("will-change",""),f(e,t),e.isTouching=!1}function I(t){var i=t.data,n=e(t.currentTarget);if(!i.didPan&&(n.trigger(H.itemClick),i.controller)){var a=i.$items.index(n);W(t,a),i.$subordinate[y]("jumpPage",a+1,!0)}}function M(t){var i=t.data;if(i.enabled&&!i.isTouching){N.clearTimer(i.autoTimer),i.$container.scrollLeft(0);var n,a=e(t.target);a.hasClass(X.item)?n=a:a.parents(L.item).length&&(n=a.parents(L.item).eq(0));for(var s=0;s<i.pageCount;s++)if(i.pages[s].$items.is(n)){f(i,s);break}}}function W(e,t){var i=e.data;if(i.controller){var n=i.$items.eq(t);i.$items.removeClass(X.active),n.addClass(X.active);for(var a=0;a<i.pageCount;a++)if(i.pages[a].$items.is(n)){f(i,a,!0,!0);break}}}function _(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),t>0&&(t=0)),t}function k(e,t){return e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var q=t.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous",controls:"Carousel {guid} Controls",pagination:"Carousel {guid} Pagination"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(s){var r;s.didPan=!1,s.carouselClasses=[X.base,s.theme,s.customClass,s.rtl?X.rtl:X.ltr],s.maxWidth=s.maxWidth===1/0?"100000px":s.maxWidth,s.mq="(min-width:"+s.minWidth+") and (max-width:"+s.maxWidth+")",s.customControls="object"===e.type(s.controls)&&s.controls.previous&&s.controls.next,s.customPagination="string"===e.type(s.pagination),s.id=this.attr("id"),s.id?s.ariaId=s.id:(s.ariaId=s.rawGuid,this.attr("id",s.ariaId)),t.support.transform||(s.useMargin=!0);var l="",c="",d=[X.control,X.control_previous].join(" "),u=[X.control,X.control_next].join(" ");s.controls&&!s.customControls&&(s.labels.controls=s.labels.controls.replace("{guid}",s.numGuid),l+='<div class="'+X.controls+'" aria-label="'+s.labels.controls+'" aria-controls="'+s.ariaId+'">',l+='<button type="button" class="'+d+'" aria-label="'+s.labels.previous+'">'+s.labels.previous+"</button>",l+='<button type="button" class="'+u+'" aria-label="'+s.labels.next+'">'+s.labels.next+"</button>",l+="</div>"),s.pagination&&!s.customPagination&&(s.labels.pagination=s.labels.pagination.replace("{guid}",s.numGuid),c+='<div class="'+X.pagination+'" aria-label="'+s.labels.pagination+'" aria-controls="'+s.ariaId+'" role="navigation">',c+="</div>"),s.autoHeight&&s.carouselClasses.push(X.auto_height),s.contained&&s.carouselClasses.push(X.contained),s.single&&s.carouselClasses.push(X.single),this.addClass(s.carouselClasses.join(" ")).wrapInner('<div class="'+X.wrapper+'" aria-live="polite"><div class="'+X.container+'"><div class="'+X.canister+'"></div></div></div>').append(l).wrapInner('<div class="'+X.viewport+'"></div>').append(c),s.$viewport=this.find(L.viewport).eq(0),s.$container=this.find(L.container).eq(0),s.$canister=this.find(L.canister).eq(0),s.$pagination=this.find(L.pagination).eq(0),s.$controlPrevious=s.$controlNext=e(""),s.customControls?(s.$controls=e(s.controls.container).addClass([X.controls,X.controls_custom].join(" ")),s.$controlPrevious=e(s.controls.previous).addClass(d),s.$controlNext=e(s.controls.next).addClass(u)):(s.$controls=this.find(L.controls).eq(0),s.$controlPrevious=s.$controls.find(L.control_previous),s.$controlNext=s.$controls.find(L.control_next)),s.$controlItems=s.$controlPrevious.add(s.$controlNext),s.customPagination&&(s.$pagination=e(s.pagination).addClass([X.pagination])),s.$paginationItems=s.$pagination.find(L.page),s.index=0,s.enabled=!1,s.leftPosition=0,s.autoTimer=null,s.resizeTimer=null;var m=this.data(j+"-linked");s.linked=!!m&&"[data-"+j+'-linked="'+m+'"]',s.linked&&(s.paged=!0);var g=this.data(j+"-controller-for")||"";if(s.$subordinate=e(g),s.$subordinate.length&&(s.controller=!0),"object"===e.type(s.show)){var p=s.show,f=[],h=[];for(r in p)p.hasOwnProperty(r)&&h.push(r);h.sort(N.sortAsc);for(r in h)h.hasOwnProperty(r)&&f.push({width:parseInt(h[r]),count:p[h[r]],mq:window.matchMedia("(min-width: "+parseInt(h[r])+"px)")});s.show=f}o(s),e.fsMediaquery("bind",s.rawGuid,s.mq,{enter:function(){a.call(s.$el,s)},leave:function(){n.call(s.$el,s)}}),i(),s.carouselClasses.push(X.enabled),s.carouselClasses.push(X.animated)},_destruct:function(t){N.clearTimer(t.autoTimer),N.clearTimer(t.resizeTimer),n.call(this,t),e.fsMediaquery("unbind",t.rawGuid),t.id!==t.ariaId&&this.removeAttr("id"),t.$controlItems.removeClass([L.control,X.control_previous,L.control_next,L.visible].join(" ")).off(H.namespace),t.$images.off(H.namespace),t.$canister.fsTouch("destroy"),t.$items.removeClass([X.item,X.visible,L.item_previous,L.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&t.$controls.removeClass([X.controls,X.controls_custom,X.visible].join(" ")),t.pagination&&!t.customPagination&&t.$pagination.remove(),t.customPagination&&t.$pagination.html("").removeClass([X.pagination,X.visible].join(" ")),this.removeClass(t.carouselClasses.join(" ")),i()},_resize:function(e){N.iterate.call(z,s)},disable:n,enable:a,jump:l,previous:c,next:d,jumpPage:l,previousPage:c,nextPage:d,jumpItem:function(e,t,i,n,a){if(e.enabled){N.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===a&&(a=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){f(e,o,a,i,n);break}}},reset:function(e){e.enabled&&r.call(this,e,!1)},resize:s,update:r,panStart:function(e,t){if(N.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(E).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(G,"none"),x({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=_(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(E,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){T(e,t)},swipe:function(e,t){P({data:e,directionX:t},!0)}}}),j=q.namespace,y=q.namespaceClean,L=q.classes,X=L.raw,H=q.events,N=q.functions,z=[],E=t.transform,G=t.transition});
/*! formstone v1.4.3 [checkbox.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,a){"use strict";function s(a){a.stopPropagation();var s=a.data;e(a.target).is(s.$el)||(a.preventDefault(),s.$el.trigger("click"))}function l(e){var a=e.data,s=a.$el.is(":disabled"),l=a.$el.is(":checked");s||(a.radio?l&&t(e):l?t(e):o(e))}function t(a){a.data.radio&&e('input[name="'+a.data.group+'"]').not(a.data.$el).trigger("deselect"),a.data.$el.trigger(b.focus),a.data.$classable.addClass(r.checked)}function o(e){e.data.$el.trigger(b.focus),e.data.$classable.removeClass(r.checked)}function d(e){e.data.$classable.addClass(r.focus)}function c(e){e.data.$classable.removeClass(r.focus)}var i=a.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_placeholder","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:function(a){var t=this.closest("label"),i=t.length?t.eq(0):e("label[for="+this.attr("id")+"]"),f=[r.base,a.theme,a.customClass].join(" "),h=[r.label,a.theme,a.customClass].join(" "),u="";a.radio="radio"===this.attr("type"),a.group=this.attr("name"),u+='<div class="'+r.marker+'" aria-hidden="true">',u+='<div class="'+r.flag+'"></div>',a.toggle&&(f+=" "+r.toggle,h+=" "+r.toggle,u+='<span class="'+[r.state,r.state_on].join(" ")+'">'+a.labels.on+"</span>",u+='<span class="'+[r.state,r.state_off].join(" ")+'">'+a.labels.off+"</span>"),a.radio&&(f+=" "+r.radio,h+=" "+r.radio),u+="</div>",a.$placeholder=e('<span class="'+r.element_placeholder+'"></span>'),this.before(a.$placeholder),a.labelParent=i.find(this).length,a.labelClass=h,i.addClass(h),a.labelParent?i.wrap('<div class="'+f+'"></div>').before(u):this.before('<div class=" '+f+'">'+u+"</div>"),a.$checkbox=a.labelParent?i.parents(n.base):this.prev(n.base),a.$marker=a.$checkbox.find(n.marker),a.$states=a.$checkbox.find(n.state),a.$label=i,a.$classable=e().add(a.$checkbox).add(a.$label),this.is(":checked")&&a.$classable.addClass(r.checked),this.is(":disabled")&&a.$classable.addClass(r.disabled),this.appendTo(a.$marker),this.on(b.focus,a,d).on(b.blur,a,c).on(b.change,a,l).on(b.click,a,s).on(b.deselect,a,o),a.$checkbox.on(b.click,a,s)},_destruct:function(e){e.$checkbox.off(b.namespace),e.$marker.remove(),e.$states.remove(),e.$label.removeClass(e.labelClass),e.labelParent?e.$label.unwrap():this.unwrap(),e.$placeholder.before(this),e.$placeholder.remove(),this.off(b.namespace)},enable:function(e){this.prop("disabled",!1),e.$classable.removeClass(r.disabled)},disable:function(e){this.prop("disabled",!0),e.$classable.addClass(r.disabled)},update:function(e){var a=e.$el.is(":disabled"),s=e.$el.is(":checked");a||(s?t({data:e}):o({data:e}))}},events:{deselect:"deselect"}}),n=i.classes,r=n.raw,b=i.events;i.functions});
/*! formstone v1.4.3 [checkpoint.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function i(){v=u.height(),d.iterate.call(g,n)}function c(){g=e(r.base),i()}function a(){d.iterate.call(g,s)}function n(e){if(e.initialized){switch(e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=v/2-e.offset;break;case"bottom":e.windowCheck=v-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}s(e)}}function s(e){e.initialized&&(h+e.windowCheck>=e.elCheck?(e.active||e.$el.trigger(l.activate),e.active=!0,e.$el.addClass(f.active)):e.reverse&&(e.active&&e.$el.trigger(l.deactivate),e.active=!1,e.$el.removeClass(f.active)))}var o=t.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(t){t.initialized=!1;var i=e(t.$el.data("checkpoint-container")),c=t.$el.data("checkpoint-intersect"),a=t.$el.data("checkpoint-offset");c&&(t.intersect=c),a&&(t.offset=a);var s=t.intersect.split("-");t.windowIntersect=s[0],t.elIntersect=s[1],t.visible=!1,t.$target=i.length?i:t.$el;var o=t.$target.find("img");o.length&&o.on(l.load,t,n),t.$el.addClass(f.base),t.initialized=!0},_postConstruct:function(e){c(),i()},_destruct:function(e){c()},_resize:i,_raf:function(){(h=u.scrollTop())<0&&(h=0),h!==w&&(a(),w=h)},resize:n}}),r=(o.namespace,o.classes),f=r.raw,l=o.events,d=o.functions,u=(t.window,t.$window),v=0,h=0,w=0,g=[]});
/*! formstone v1.4.3 [cookie.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,n){"use strict";function t(n,t,i){var r=!1,u=new Date;i.expires&&"number"===e.type(i.expires)&&(u.setTime(u.getTime()+i.expires),r=u.toGMTString());var l=i.domain?"; domain="+i.domain:"",s=r?"; expires="+r:"",f=r?"; max-age="+i.expires/1e3:"",a=i.path?"; path="+i.path:"",c=i.secure?"; secure":"";o.cookie=n+"="+t+s+f+l+a+c}function i(e){for(var n=e+"=",t=o.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}function r(n,i){t(n,"",e.extend({},i,{expires:-6048e5}))}n.Plugin("cookie",{utilities:{_delegate:function(n,o,l){if("object"===e.type(n))u=e.extend(u,n);else if(l=e.extend({},u,l||{}),"undefined"!==e.type(n)){if("undefined"===e.type(o))return i(n);null===o?r(n,l):t(n,o,l)}return null}}});var u={domain:null,expires:6048e5,path:null,secure:null},o=n.document});
/*! formstone v1.4.3 [dropdown.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function l(t){for(var l="",i=0,s=t.$allOptions.length;i<s;i++){var o=t.$allOptions.eq(i),a=[];if("OPTGROUP"===o[0].tagName)a.push(g.group),o.prop("disabled")&&a.push(g.disabled),l+='<span class="'+a.join(" ")+'">'+o.attr("label")+"</span>";else{var d=o.val(),n=o.data("label"),r=t.links?"a":'button type="button"';o.attr("value")||o.attr("value",d),a.push(g.item),o.hasClass(g.item_placeholder)&&(a.push(g.item_placeholder),r="span"),o.prop("selected")&&a.push(g.item_selected),o.prop("disabled")&&a.push(g.item_disabled),l+="<"+r+' class="'+a.join(" ")+'"',t.links?"span"===r?l+=' aria-hidden="true"':(l+=' href="'+d+'"',t.external&&(l+=' target="_blank"')):l+=' data-value="'+d+'"',l+=' role="option"',o.prop("selected")&&(l+=' "aria-selected"="true"'),l+=">",l+=n||I.decodeEntities(h(o.text(),t.trim)),l+="</"+r+">",0}}t.$items=t.$wrapper.html(e.parseHTML(l)).find(w.item)}function i(e){I.killEvent(e);var t=e.data;t.disabled||t.useNative||(t.closed?o(t):a(t)),s(t)}function s(t){e(w.base).not(t.$dropdown).trigger(C.close,[t])}function o(e){if(e.closed){var t=_.height(),l=e.$wrapper.outerHeight(!0);e.$dropdown[0].getBoundingClientRect().bottom+l>t-e.bottomEdge&&e.$dropdown.addClass(g.bottom),y.on(C.click+e.dotGuid,":not("+w.options+")",e,d),e.$dropdown.trigger(C.focusIn),e.$dropdown.addClass(g.open),b(e),e.closed=!1}}function a(e){e&&!e.closed&&(y.off(C.click+e.dotGuid),e.$dropdown.removeClass([g.open,g.bottom].join(" ")),e.closed=!0)}function d(t){I.killEvent(t);var l=t.data;l&&0===e(t.currentTarget).parents(w.base).length&&(a(l),l.$dropdown.trigger(C.focusOut))}function n(e){var t=e.data;t&&(a(t),t.$dropdown.trigger(C.focusOut))}function r(t){var l=e(this),i=t.data;if(I.killEvent(t),!i.disabled){var s=i.$items.index(l);i.focusIndex=s,i.$wrapper.is(":visible")&&(m(s,i,t.shiftKey,t.metaKey||t.ctrlKey),$(i)),i.multiple||a(i),i.$dropdown.trigger(C.focus)}}function p(t,l){e(this);var i=t.data;if(!l&&!i.multiple){var s=i.$options.index(i.$options.filter(":selected"));i.focusIndex=s,m(s,i),$(i,!0)}}function c(t){I.killEvent(t);e(t.currentTarget);var l=t.data;l.disabled||l.multiple||l.focused||(s(l),l.focused=!0,l.focusIndex=l.index,l.input="",l.$dropdown.addClass(g.focus).on(C.keyDown+l.dotGuid,l,f))}function u(t){I.killEvent(t);e(t.currentTarget);var l=t.data;l.focused&&l.closed&&(l.focused=!1,l.$dropdown.removeClass(g.focus).off(C.keyDown+l.dotGuid),l.multiple||(a(l),l.index!==l.focusIndex&&($(l),l.focusIndex=l.index)))}function f(l){var i=l.data;if(i.keyTimer=I.startTimer(i.keyTimer,1e3,function(){i.input=""}),13===l.keyCode)i.closed||(a(i),m(i.index,i)),$(i);else if(!(9===l.keyCode||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)){I.killEvent(l);var s=i.$items.length-1,o=i.index<0?0:i.index;if(e.inArray(l.keyCode,t.isFirefox?[38,40,37,39]:[38,40])>-1)(o+=38===l.keyCode||t.isFirefox&&37===l.keyCode?-1:1)<0&&(o=0),o>s&&(o=s);else{var d,n=String.fromCharCode(l.keyCode).toUpperCase();for(i.input+=n,d=i.index+1;d<=s;d++)if(i.$options.eq(d).text().substr(0,i.input.length).toUpperCase()===i.input){o=d;break}if(o<0||o===i.index)for(d=0;d<=s;d++)if(i.$options.eq(d).text().substr(0,i.input.length).toUpperCase()===i.input){o=d;break}}o>=0&&(m(o,i),b(i))}}function m(e,t,l,i){var s=t.$items.eq(e),o=t.$options.eq(e),a=s.hasClass(g.item_selected);if(!s.hasClass(g.item_disabled))if(t.multiple)if(t.useNative)a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(g.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected));else if(l&&!1!==t.lastIndex){var d=t.lastIndex>e?e:t.lastIndex,n=(t.lastIndex>e?t.lastIndex:e)+1;t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(w.item_selected).removeClass(g.item_selected),t.$options.slice(d,n).not("[disabled]").prop("selected",!0),t.$items.slice(d,n).not(w.item_disabled).addClass(g.item_selected)}else i?(a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(g.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected)),t.lastIndex=e):(t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(w.item_selected).removeClass(g.item_selected),o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected),t.lastIndex=e);else if(e>-1&&e<t.$items.length){if(e!==t.index){var r=o.data("label")||s.html();t.$selected.html(r).removeClass(w.item_placeholder),t.$items.filter(w.item_selected).removeClass(g.item_selected),t.$el[0].selectedIndex=e,s.addClass(g.item_selected),t.index=e}}else""!==t.label&&t.$selected.html(t.label)}function b(t){var l=t.$items.eq(t.index),i=t.index>=0&&!l.hasClass(g.item_placeholder)?l.position():{left:0,top:0},s=(t.$wrapper.outerHeight()-l.outerHeight())/2;void 0!==e.fn.fsScrollbar?t.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",t.$wrapper.find(".fs-scrollbar-content").scrollTop()+i.top):t.$wrapper.scrollTop(t.$wrapper.scrollTop()+i.top-s)}function $(e,t){e.links?v(e):t||e.$el.trigger(C.raw.change,[!0])}function v(e){var t=e.$el.val();e.external?k.open(t):k.location.href=t}function h(e,t){return 0===t?e:e.length>t?e.substring(0,t)+"...":e}var x=t.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,native:!1,theme:"fs-light",trim:0},methods:{_construct:function(s){s.multiple=this.prop("multiple"),s.disabled=this.prop("disabled")||this.is("[readonly]"),s.lastIndex=!1,s.native=s.mobile||s.native,s.useNative=s.native||t.isMobile,s.multiple?s.links=!1:s.external&&(s.links=!0);var o=this.find("[selected]").not(":disabled"),a=this.find(":selected").not(":disabled"),d=a.text(),f=this.find("option").index(a);s.multiple||""===s.label||o.length?s.label="":(a=this.prepend('<option value="" class="'+g.item_placeholder+'" selected>'+s.label+"</option>"),d=s.label,f=0);var b=this.find("option, optgroup"),$=b.filter("option"),v=e('[for="'+this.attr("id")+'"]');s.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,v.length&&(v[0].tabIndex=-1);var x=[g.base,s.theme,s.customClass];s.useNative?x.push(g.native):s.cover&&x.push(g.cover),s.multiple&&x.push(g.multiple),s.disabled&&x.push(g.disabled),s.id=this.attr("id"),s.id?s.ariaId=s.id:s.ariaId=s.rawGuid,s.ariaId+="-dropdown",s.selectedAriaId=s.ariaId+"-selected";var I="",k="";I+='<div class="'+x.join(" ")+'"id="'+s.ariaId+'" tabindex="'+s.tabIndex+'" role="listbox"',s.multiple?I+=' aria-label="multi select"':I+=' aria-haspopup="true" aria-live="polite" aria-labelledby="'+s.selectedAriaId+'"',I+="></div>",s.multiple||(k+='<button type="button" class="'+g.selected+'" id="'+s.selectedAriaId+'" tabindex="-1">',k+=e("<span></span>").text(h(d,s.trim)).html(),k+="</button>"),k+='<div class="'+g.options+'">',k+="</div>",this.wrap(I).after(k),s.$dropdown=this.parent(w.base),s.$label=v,s.$allOptions=b,s.$options=$,s.$selected=s.$dropdown.find(w.selected),s.$wrapper=s.$dropdown.find(w.options),s.$placeholder=s.$dropdown.find(w.placeholder),s.index=-1,s.closed=!0,s.focused=!1,l(s),s.multiple||m(f,s),void 0!==e.fn.fsScrollbar&&s.$wrapper.fsScrollbar({theme:s.theme}).find(".fs-scrollbar-content").attr("tabindex",null),s.$dropdown.on(C.click,s,i),s.$selected.on(C.click,s,i),s.$dropdown.on(C.click,w.item,s,r).on(C.close,s,n),this.on(C.change,s,p),s.useNative||(this.on(C.focusIn,s,function(e){e.data.$dropdown.trigger(C.raw.focus)}),s.$dropdown.on(C.focusIn,s,c).on(C.focusOut,s,u))},_destruct:function(t){t.$dropdown.hasClass(g.open)&&t.$selected.trigger(C.click),void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar("destroy"),t.$el[0].tabIndex=t.tabIndex,t.$label.length&&(t.$label[0].tabIndex=t.tabIndex),t.$dropdown.off(C.namespace),t.$options.off(C.namespace),t.$placeholder.remove(),t.$selected.remove(),t.$wrapper.remove(),t.$el.off(C.namespace).show().unwrap()},disable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).addClass(g.item_disabled),e.$options.eq(l).prop("disabled",!0)}else e.$dropdown.hasClass(g.open)&&e.$selected.trigger(C.click),e.$dropdown.addClass(g.disabled),e.$el.prop("disabled",!0),e.disabled=!0},enable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).removeClass(g.item_disabled),e.$options.eq(l).prop("disabled",!1)}else e.$dropdown.removeClass(g.disabled),e.$el.prop("disabled",!1),e.disabled=!1},update:function(t){void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar("destroy");var i=t.index;t.$allOptions=t.$el.find("option, optgroup"),t.$options=t.$allOptions.filter("option"),t.index=-1,i=t.$options.index(t.$options.filter(":selected")),l(t),t.multiple||m(i,t),void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar({theme:t.theme}).find(".fs-scrollbar-content").attr("tabindex",null)},open:o,close:a},classes:["cover","bottom","multiple","mobile","native","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),w=x.classes,g=w.raw,C=x.events,I=x.functions,k=t.window,_=t.$window,y=(t.document,null);t.Ready(function(){y=t.$body})});
/*! formstone v1.4.3 [equalize.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){c=e(f.element)}function i(e){if(e.data&&(e=e.data),e.enabled)for(var t,n,i,r=0;r<e.target.length;r++){t=0,n=0,(i=e.$el.find(e.target[r])).css(e.property,"");for(var a=0;a<i.length;a++)(n=i.eq(a)[e.type]())>t&&(t=n);i.css(e.property,t)}}function r(e){e.enabled&&(e.enabled=!1,d(e))}function a(e){if(!e.enabled){e.enabled=!0;var t=e.$el.find("img");t.length&&t.on(u.load,e,i),i(e)}}function d(e){for(var t=0;t<e.target.length;t++)e.$el.find(e.target[t]).css(e.property,"");e.$el.find("img").off(u.namespace)}var o=t.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:function(t){t.maxWidth=t.maxWidth===1/0?"100000px":t.maxWidth,t.mq="(min-width:"+t.minWidth+") and (max-width:"+t.maxWidth+")",t.type="height"===t.property?"outerHeight":"outerWidth",t.target?e.isArray(t.target)||(t.target=[t.target]):t.target=["> *"],n(),e.fsMediaquery("bind",t.rawGuid,t.mq,{enter:function(){a.call(t.$el,t)},leave:function(){r.call(t.$el,t)}})},_destruct:function(t){d(t),e.fsMediaquery("unbind",t.rawGuid),n()},_resize:function(e){l.iterate.call(c,i)},resize:i}}),f=o.classes,u=(f.raw,o.events),l=o.functions,c=[]});
/*! formstone v1.4.3 [lightbox.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],t):t(jQuery,Formstone)}(function(t,i){"use strict";function e(e){if(!S){var o=e.data;!0===o.overlay&&(o.mobile=!0),(S=t.extend({},{visible:!1,gallery:{active:!1},isMobile:i.isMobile||o.mobile,isTouch:i.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},o)).isViewer=S.isMobile&&o.viewer&&void 0!==t.fn.fsViewer;var a=o.$el,l=o.$object,g=a&&a[0].href?a[0].href||"":"",d=a&&a[0].hash?a[0].hash||"":"",c=(g.toLowerCase().split(".").pop().split(/\#|\?/),a?a.data(P+"-type"):""),p="image"===c||g.match(o.fileTypes)||"data:image"===g.substr(0,10),u=z(g),v="url"===c||!p&&!u&&"http"===g.substr(0,4)&&!d,H="element"===c||!p&&!u&&!v&&"#"===d.substr(0,1),w=void 0!==l;if(H&&(g=d),!(p||u||v||H||w))return void(S=null);if(B.killEvent(e),S.margin*=2,S.type=p?"image":u?"video":"element",p||u){var W=a.data(P+"-gallery");W&&(S.gallery.active=!0,S.gallery.id=W,S.gallery.$items=t("a[data-lightbox-gallery= "+S.gallery.id+"], a[rel= "+S.gallery.id+"]"),S.gallery.index=S.gallery.$items.index(S.$el),S.gallery.total=S.gallery.$items.length-1)}S.thumbnails&&(p||u)&&S.gallery.active||(S.thumbnails=!1);var y="";S.isMobile||(y+='<div class="'+[R.overlay,S.theme,S.customClass].join(" ")+'"></div>');var I=[R.base,R.loading,R.animating,S.theme,S.customClass];if(S.fixed&&I.push(R.fixed),S.isMobile&&I.push(R.mobile),S.isTouch&&I.push(R.touch),v&&I.push(R.iframed),(H||w)&&I.push(R.inline),S.thumbnails&&I.push(R.thumbnailed),S.labels.lightbox=S.labels.lightbox.replace("{guid}",o.numGuid),y+='<div class="'+I.join(" ")+'" role="dialog" aria-label="'+S.labels.lightbox+'" tabindex="-1">',y+='<button type="button" class="'+R.close+'">'+S.labels.close+"</button>",y+='<span class="'+R.loading_icon+'"></span>',y+='<div class="'+R.container+'">',S.gallery.active&&S.thumbnails){y+='<div class="'+[R.thumbnails]+'">',y+='<div class="'+[R.thumbnail_container]+'">';for(var M,k,j=0,O=S.gallery.$items.length;j<O;j++)(k=(M=S.gallery.$items.eq(j)).data("lightbox-thumbnail"))||(k=M.find("img").attr("src")),y+='<button class="'+[R.thumbnail_item]+'">',y+='<img src="'+k+'" alt="">',y+="</button>";y+="</div></div>"}y+='<div class="'+R.content+'"></div>',(p||u)&&(y+='<div class="'+R.tools+'">',y+='<div class="'+R.controls+'">',S.gallery.active&&(y+='<button type="button" class="'+[R.control,R.control_previous].join(" ")+'">'+S.labels.previous+"</button>",y+='<button type="button" class="'+[R.control,R.control_next].join(" ")+'">'+S.labels.next+"</button>"),S.isMobile&&S.isTouch&&(y+='<button type="button" class="'+[R.toggle,R.caption_toggle].join(" ")+'">'+S.labels.captionClosed+"</button>",S.gallery.active&&S.thumbnails&&(y+='<button type="button" class="'+[R.toggle,R.thumbnail_toggle].join(" ")+'">'+S.labels.thumbnailsClosed+"</button>")),y+="</div>",y+='<div class="'+R.meta+'">',y+='<div class="'+R.meta_content+'">',S.gallery.active&&(y+='<p class="'+R.position+'"',S.gallery.total<1&&(y+=' style="display: none;"'),y+=">",y+='<span class="'+R.position_current+'">'+(S.gallery.index+1)+"</span> ",y+=S.labels.count,y+=' <span class="'+R.position_total+'">'+(S.gallery.total+1)+"</span>",y+="</p>"),y+='<div class="'+R.caption+'">',y+=S.formatter.call(a,o),y+="</div></div></div>",y+="</div>"),y+="</div></div>",D.append(y),S.$overlay=t(E.overlay),S.$lightbox=t(E.base),S.$close=t(E.close),S.$container=t(E.container),S.$content=t(E.content),S.$tools=t(E.tools),S.$meta=t(E.meta),S.$metaContent=t(E.meta_content),S.$position=t(E.position),S.$caption=t(E.caption),S.$controlBox=t(E.controls),S.$controls=t(E.control),S.$thumbnails=t(E.thumbnails),S.$thumbnailContainer=t(E.thumbnail_container),S.$thumbnailItems=t(E.thumbnail_item),S.isMobile?(S.paddingVertical=S.$close.outerHeight(),S.paddingHorizontal=0,S.mobilePaddingVertical=parseInt(S.$content.css("paddingTop"),10)+parseInt(S.$content.css("paddingBottom"),10),S.mobilePaddingHorizontal=parseInt(S.$content.css("paddingLeft"),10)+parseInt(S.$content.css("paddingRight"),10)):(S.paddingVertical=parseInt(S.$lightbox.css("paddingTop"),10)+parseInt(S.$lightbox.css("paddingBottom"),10),S.paddingHorizontal=parseInt(S.$lightbox.css("paddingLeft"),10)+parseInt(S.$lightbox.css("paddingRight"),10),S.mobilePaddingVertical=0,S.mobilePaddingHorizontal=0),S.contentHeight=S.$lightbox.outerHeight()-S.paddingVertical,S.contentWidth=S.$lightbox.outerWidth()-S.paddingHorizontal,S.controlHeight=S.$controls.outerHeight(),r(),S.gallery.active&&(S.$lightbox.addClass(R.has_controls),x()),K.on(A.keyDown,C),D.on(A.click,[E.overlay,E.close].join(", "),n).on([A.focus,A.focusIn].join(" "),L),S.gallery.active&&S.$lightbox.on(A.click,E.control,$),S.thumbnails&&S.$lightbox.on(A.click,E.thumbnail_item,f),S.isMobile&&S.isTouch&&S.$lightbox.on(A.click,E.caption_toggle,s).on(A.click,E.thumbnail_toggle,h),S.$lightbox.fsTransition({property:"opacity"},function(){p?m(g):u?b(g):v?V(g):H?_(g):w&&T(S.$object)}).addClass(R.open),S.$overlay.addClass(R.open)}}function o(t){"object"!=typeof t&&(S.targetHeight=arguments[0],S.targetWidth=arguments[1]),"element"===S.type?M(S.$content.find("> :first-child")):"image"===S.type?p():"video"===S.type&&v(),l()}function n(t){B.killEvent(t),S&&(S.$lightbox.fsTransition("destroy"),S.$content.fsTransition("destroy"),S.$lightbox.addClass(R.animating).fsTransition({property:"opacity"},function(t){void 0!==S.$inlineTarget&&S.$inlineTarget.length&&I(),S.isViewer&&S.$imageContainer&&S.$imageContainer.length&&S.$imageContainer.fsViewer("destroy"),S.$lightbox.off(A.namespace),S.$container.off(A.namespace),K.off(A.keyDown),D.off(A.namespace),D.off(A.namespace),S.$overlay.remove(),S.$lightbox.remove(),void 0!==S.$el&&S.$el&&S.$el.length&&S.$el.focus(),S=null,K.trigger(A.close)}),S.$lightbox.removeClass(R.open),S.$overlay.removeClass(R.open),S.isMobile&&(N.removeClass(R.lock),B.unlockViewport(P)))}function a(){var t=g();S.isMobile||S.duration;S.isMobile?B.lockViewport(P):S.$controls.css({marginTop:(S.contentHeight-S.controlHeight-S.metaHeight+S.thumbnailHeight)/2}),""===S.$caption.html()?(S.$caption.hide(),S.$lightbox.removeClass(R.has_caption),S.gallery.active||S.$tools.hide()):(S.$caption.show(),S.$lightbox.addClass(R.has_caption)),S.$lightbox.fsTransition({property:S.contentHeight!==S.oldContentHeight?"height":"width"},function(){S.$content.fsTransition({property:"opacity"},function(){S.$lightbox.removeClass(R.animating),S.isAnimating=!1}),S.$lightbox.removeClass(R.loading).addClass(R.ready),S.visible=!0,K.trigger(A.open),S.gallery.active&&(H(),w(),W()),S.$lightbox.focus()}),S.isMobile||S.$lightbox.css({height:S.contentHeight+S.paddingVertical,width:S.contentWidth+S.paddingHorizontal,top:S.fixed?0:t.top});var i=S.oldContentHeight!==S.contentHeight||S.oldContentWidth!==S.contentWidth;!S.isMobile&&i||S.$lightbox.fsTransition("resolve"),S.oldContentHeight=S.contentHeight,S.oldContentWidth=S.contentWidth,S.isMobile&&N.addClass(R.lock)}function l(){if(S.visible&&!S.isMobile){var t=g();S.$controls.css({marginTop:(S.contentHeight-S.controlHeight-S.metaHeight+S.thumbnailHeight)/2}),S.$lightbox.css({height:S.contentHeight+S.paddingVertical,width:S.contentWidth+S.paddingHorizontal,top:S.fixed?0:t.top}),S.oldContentHeight=S.contentHeight,S.oldContentWidth=S.contentWidth}}function r(){var t=g();S.$lightbox.css({top:S.fixed?0:t.top})}function g(){if(S.isMobile)return{left:0,top:0};var t={left:(i.windowWidth-S.contentWidth-S.paddingHorizontal)/2,top:S.top<=0?(i.windowHeight-S.contentHeight-S.paddingVertical)/2:S.top};return!0!==S.fixed&&(t.top+=K.scrollTop()),t}function s(t){if(B.killEvent(t),S.captionOpen)d();else{c();var i=parseInt(S.$metaContent.outerHeight(!0));i+=parseInt(S.$meta.css("padding-top")),i+=parseInt(S.$meta.css("padding-bottom")),S.$meta.css({height:i}),S.$lightbox.addClass(R.caption_open).find(E.caption_toggle).text(S.labels.captionOpen),S.captionOpen=!0}}function d(){S.$lightbox.removeClass(R.caption_open).find(E.caption_toggle).text(S.labels.captionClosed),S.captionOpen=!1}function h(t){B.killEvent(t),S.thumbnailsOpen?c():(d(),S.$lightbox.addClass(R.thumbnails_open).find(E.thumbnail_toggle).text(S.labels.thumbnailsOpen),S.thumbnailsOpen=!0)}function c(){S.$lightbox.removeClass(R.thumbnails_open).find(E.thumbnail_toggle).text(S.labels.thumbnailsClosed),S.thumbnailsOpen=!1}function m(i){S.isViewer?(S.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),S.$image=S.$imageContainer.find("img"),S.$image.attr("src",i).addClass(R.image),S.$content.prepend(S.$imageContainer),p(),S.$imageContainer.one("loaded.viewer",function(){a()}).fsViewer({theme:S.theme})):(S.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),S.$image=S.$imageContainer.find("img"),S.$image.one(A.load,function(){var t=j(S.$image);S.naturalHeight=t.naturalHeight,S.naturalWidth=t.naturalWidth,S.retina&&(S.naturalHeight/=2,S.naturalWidth/=2),S.$content.prepend(S.$imageContainer),p(),a()}).on(A.error,k).attr("src",i).addClass(R.image),(S.$image[0].complete||4===S.$image[0].readyState)&&S.$image.trigger(A.load))}function p(){if(S.$image){var t=0;for(S.windowHeight=S.viewportHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=S.viewportWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.contentHeight=1/0,S.contentWidth=1/0,S.imageMarginTop=0,S.imageMarginLeft=0;S.contentHeight>S.viewportHeight&&t<2;)S.imageHeight=0===t?S.naturalHeight:S.$image.outerHeight(),S.imageWidth=0===t?S.naturalWidth:S.$image.outerWidth(),S.metaHeight=0===t?0:S.metaHeight,S.spacerHeight=0===t?0:S.spacerHeight,S.thumbnailHeight=0===t?0:S.thumbnailHeight,0===t&&(S.ratioHorizontal=S.imageHeight/S.imageWidth,S.ratioVertical=S.imageWidth/S.imageHeight,S.isWide=S.imageWidth>S.imageHeight),S.imageHeight<S.minHeight&&(S.minHeight=S.imageHeight),S.imageWidth<S.minWidth&&(S.minWidth=S.imageWidth),S.isMobile?(S.isTouch?(S.$controlBox.css({width:i.windowWidth}),S.spacerHeight=S.$controls.outerHeight(!0)):(S.$tools.css({width:i.windowWidth}),S.spacerHeight=S.$tools.outerHeight(!0)),S.contentHeight=S.viewportHeight,S.contentWidth=S.viewportWidth,S.isTouch||S.$content.css({height:S.contentHeight-S.spacerHeight}),S.$thumbnails.length&&(S.spacerHeight+=S.$thumbnails.outerHeight(!0)),S.spacerHeight+=10,u(),S.imageMarginTop=(S.contentHeight-S.targetImageHeight-S.spacerHeight)/2,S.imageMarginLeft=(S.contentWidth-S.targetImageWidth)/2):(0===t&&(S.viewportHeight-=S.margin+S.paddingVertical,S.viewportWidth-=S.margin+S.paddingHorizontal),S.viewportHeight-=S.metaHeight,S.thumbnails&&(S.viewportHeight-=S.thumbnailHeight),u(),S.contentHeight=S.targetImageHeight,S.contentWidth=S.targetImageWidth),S.isMobile||S.isTouch||S.$meta.css({width:S.contentWidth}),S.$image.css({height:S.targetImageHeight,width:S.targetImageWidth,marginTop:S.imageMarginTop,marginLeft:S.imageMarginLeft}),S.isMobile||(S.metaHeight=S.$meta.outerHeight(!0),S.contentHeight+=S.metaHeight),S.thumbnails&&(S.thumbnailHeight=S.$thumbnails.outerHeight(!0),S.contentHeight+=S.thumbnailHeight),t++}}function u(){var t=S.isMobile?S.contentHeight-S.spacerHeight:S.viewportHeight,i=S.isMobile?S.contentWidth:S.viewportWidth;S.isWide?(S.targetImageWidth=i,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal,S.targetImageHeight>t&&(S.targetImageHeight=t,S.targetImageWidth=S.targetImageHeight*S.ratioVertical)):(S.targetImageHeight=t,S.targetImageWidth=S.targetImageHeight*S.ratioVertical,S.targetImageWidth>i&&(S.targetImageWidth=i,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal)),(S.targetImageWidth>S.imageWidth||S.targetImageHeight>S.imageHeight)&&(S.targetImageHeight=S.imageHeight,S.targetImageWidth=S.imageWidth),(S.targetImageWidth<S.minWidth||S.targetImageHeight<S.minHeight)&&(S.targetImageWidth<S.minWidth?(S.targetImageWidth=S.minWidth,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal):(S.targetImageHeight=S.minHeight,S.targetImageWidth=S.targetImageHeight*S.ratioVertical))}function b(i){var e=z(i),o=i.split("?");e?(o.length>=2&&(e+="?"+o.slice(1)[0].trim()),S.$videoWrapper=t('<div class="'+R.video_wrapper+'"></div>'),S.$video=t('<iframe class="'+R.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),S.$video.attr("src",e).addClass(R.video).prependTo(S.$videoWrapper),S.$content.prepend(S.$videoWrapper),v(),a()):k()}function v(){S.windowHeight=S.viewportHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=S.viewportWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.videoMarginTop=0,S.videoMarginLeft=0,S.isMobile?(S.isTouch?(S.$controlBox.css({width:i.windowWidth}),S.spacerHeight=S.$controls.outerHeight(!0)+10):(S.$tools.css({width:i.windowWidth}),S.spacerHeight=S.$tools.outerHeight(!0),S.spacerHeight+=S.$thumbnails.outerHeight(!0)+10),S.viewportHeight-=S.spacerHeight,S.targetVideoWidth=S.viewportWidth,S.targetVideoHeight=S.targetVideoWidth*S.videoRatio,S.targetVideoHeight>S.viewportHeight&&(S.targetVideoHeight=S.viewportHeight,S.targetVideoWidth=S.targetVideoHeight/S.videoRatio),S.videoMarginTop=(S.viewportHeight-S.targetVideoHeight)/2,S.videoMarginLeft=(S.viewportWidth-S.targetVideoWidth)/2):(S.viewportHeight=S.windowHeight-S.margin,S.viewportWidth=S.windowWidth-S.margin,S.targetVideoWidth=S.videoWidth>S.viewportWidth?S.viewportWidth:S.videoWidth,S.targetVideoWidth<S.minWidth&&(S.targetVideoWidth=S.minWidth),S.targetVideoHeight=S.targetVideoWidth*S.videoRatio,S.contentHeight=S.targetVideoHeight,S.contentWidth=S.targetVideoWidth),S.isMobile||S.isTouch||S.$meta.css({width:S.contentWidth}),S.$videoWrapper.css({height:S.targetVideoHeight,width:S.targetVideoWidth,marginTop:S.videoMarginTop,marginLeft:S.videoMarginLeft}),S.isMobile||(S.metaHeight=S.$meta.outerHeight(!0),S.contentHeight+=S.metaHeight),S.thumbnails&&(S.thumbnailHeight=S.$thumbnails.outerHeight(!0),S.contentHeight+=S.thumbnailHeight)}function H(i){var e="";S.gallery.index>0&&(z(e=S.gallery.$items.eq(S.gallery.index-1).attr("href"))||t('<img src="'+e+'">')),S.gallery.index<S.gallery.total&&(z(e=S.gallery.$items.eq(S.gallery.index+1).attr("href"))||t('<img src="'+e+'">'))}function $(i){B.killEvent(i);var e=t(i.currentTarget);S.isAnimating||e.hasClass(R.control_disabled)||(S.isAnimating=!0,d(),S.gallery.index+=e.hasClass(R.control_next)?1:-1,S.gallery.index>S.gallery.total&&(S.gallery.index=S.infinite?0:S.gallery.total),S.gallery.index<0&&(S.gallery.index=S.infinite?S.gallery.total:0),w(),S.$lightbox.addClass(R.animating),S.$content.fsTransition({property:"opacity"},y),S.$lightbox.addClass(R.loading))}function f(i){B.killEvent(i);var e=t(i.currentTarget);S.isAnimating||e.hasClass(R.active)||(S.isAnimating=!0,d(),S.gallery.index=S.$thumbnailItems.index(e),w(),S.$lightbox.addClass(R.animating),S.$content.fsTransition({property:"opacity"},y),S.$lightbox.addClass(R.loading))}function w(){if(S.thumbnails){var t=S.$thumbnailItems.eq(S.gallery.index);S.$thumbnailItems.removeClass(R.active),t.addClass(R.active)}}function W(){if(S.thumbnails){var t=S.$thumbnailItems.eq(S.gallery.index),i=t.position().left+t.outerWidth(!1)/2-S.$thumbnailContainer.outerWidth(!0)/2;S.$thumbnailContainer.stop().animate({scrollLeft:i},200,"linear")}}function y(){void 0!==S.$imageContainer&&(S.isViewer&&S.$imageContainer.fsViewer("destroy"),S.$imageContainer.remove()),void 0!==S.$videoWrapper&&S.$videoWrapper.remove(),S.$el=S.gallery.$items.eq(S.gallery.index),S.$caption.html(S.formatter.call(S.$el,S)),S.$position.find(E.position_current).html(S.gallery.index+1);var t=S.$el.attr("href");z(t)?(S.type="video",b(t)):(S.type="image",m(t)),x()}function x(){S.$controls.removeClass(R.control_disabled),S.infinite||(0===S.gallery.index&&S.$controls.filter(E.control_previous).addClass(R.control_disabled),S.gallery.index===S.gallery.total&&S.$controls.filter(E.control_next).addClass(R.control_disabled))}function C(t){!S.gallery.active||37!==t.keyCode&&39!==t.keyCode?27===t.keyCode&&S.$close.trigger(A.click):(B.killEvent(t),S.$controls.filter(37===t.keyCode?E.control_previous:E.control_next).trigger(A.click))}function _(i){S.$inlineTarget=t(i),S.$inlineContents=S.$inlineTarget.children().detach(),T(S.$inlineContents)}function I(){S.$inlineTarget.append(S.$inlineContents.detach())}function V(i){i+=i.indexOf("?")>-1?"&"+S.requestKey+"=true":"?"+S.requestKey+"=true",T(t('<iframe class="'+R.iframe+'" src="'+i+'"></iframe>'))}function T(t){S.$content.append(t),M(t),a()}function M(t){S.windowHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.objectHeight=t.outerHeight(!0),S.objectWidth=t.outerWidth(!0),S.targetHeight=S.targetHeight||(S.$el?S.$el.data(P+"-height"):null),S.targetWidth=S.targetWidth||(S.$el?S.$el.data(P+"-width"):null),S.maxHeight=S.windowHeight<0?S.minHeight:S.windowHeight,S.isIframe=t.is("iframe"),S.objectMarginTop=0,S.objectMarginLeft=0,S.isMobile||(S.windowHeight-=S.margin,S.windowWidth-=S.margin),S.contentHeight=S.targetHeight?S.targetHeight:S.isIframe||S.isMobile?S.windowHeight:S.objectHeight,S.contentWidth=S.targetWidth?S.targetWidth:S.isIframe||S.isMobile?S.windowWidth:S.objectWidth,(S.isIframe||S.isObject)&&S.isMobile?(S.contentHeight=S.windowHeight,S.contentWidth=S.windowWidth):S.isObject&&(S.contentHeight=S.contentHeight>S.windowHeight?S.windowHeight:S.contentHeight,S.contentWidth=S.contentWidth>S.windowWidth?S.windowWidth:S.contentWidth),S.isMobile||(S.contentHeight>S.maxHeight&&(S.contentHeight=S.maxHeight),S.contentWidth>S.maxWidth&&(S.contentWidth=S.maxWidth))}function k(){var i=t('<div class="'+R.error+'"><p>Error Loading Resource</p></div>');S.type="element",S.$tools.remove(),S.$image.off(A.namespace),T(i),K.trigger(A.error)}function j(t){var i=t[0],e=new Image;return void 0!==i.naturalHeight?{naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth}:"img"===i.tagName.toLowerCase()&&(e.src=i.src,{naturalHeight:e.height,naturalWidth:e.width})}function z(t){var i,e=S.videoFormatter;for(var o in e)if(e.hasOwnProperty(o)&&null!==(i=t.match(e[o].pattern)))return e[o].format.call(S,i);return!1}function L(i){var e=i.target;t.contains(S.$lightbox[0],e)||e===S.$lightbox[0]||e===S.$overlay[0]||(B.killEvent(i),S.$lightbox.focus())}var O=i.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)/i,fixed:!1,formatter:function(){var t=this.attr("title"),i=!(void 0===t||!t)&&t.replace(/^\s+|\s+$/g,"");return i?'<p class="caption">'+i+"</p>":""},infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails",lightbox:"Lightbox {guid}"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,overlay:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:function(t){return"//www.youtube.com/embed/"+t[1]}},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:function(t){return"//player.vimeo.com/video/"+t[3]}}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_construct:function(t){this.on(A.click,t,e);var i=this.data(P+"-gallery");!Q&&G&&i===G&&(Q=!0,this.trigger(A.click))},_destruct:function(t){n(),this.off(A.namespace)},_resize:function(){S&&o()},resize:o},utilities:{_initialize:function(i,o){i instanceof t&&e.apply(F,[{data:t.extend(!0,{},{$object:i},q,o||{})}])},close:n}}),P=O.namespace,q=O.defaults,E=O.classes,R=E.raw,A=O.events,B=O.functions,F=i.window,K=i.$window,D=null,N=null,G=!1,Q=!1,S=null;i.Ready(function(){D=i.$body,N=t("html, body"),G=i.window.location.hash.replace("#","")})});
/*! formstone v1.4.3 [navigation.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,e){"use strict";function t(a){a.$handle.fsSwap("deactivate")}function n(a){a.data.$handle.addClass(g.focus)}function l(a){a.data.$handle.removeClass(g.focus)}function d(a){var e=a.data;13!==a.keyCode&&32!==a.keyCode||(b.killEvent(a),e.$handle.trigger($.raw.click))}function o(a){if(!a.originalEvent){var e=a.data;e.open||(e.$el.trigger($.open).attr("aria-hidden",!1),e.$content.addClass(e.contentClassesOpen).one($.click,function(){t(e)}),e.$handle.attr("aria-expanded",!0),e.label&&e.$handle.html(e.labels.open),c(e),e.open=!0,e.$nav.focus())}}function i(a){if(!a.originalEvent){var e=a.data;e.open&&(e.$el.trigger($.close).attr("aria-hidden",!0),e.$content.removeClass(e.contentClassesOpen).off($.namespace),e.$handle.attr("aria-expanded",!1),e.label&&e.$handle.html(e.labels.closed),h(e),e.open=!1,e.$el.focus())}}function s(a){var e=a.data;e.$el.attr("aria-hidden",!0),e.$handle.attr("aria-controls",e.ariaId).attr("aria-expanded",!1),e.$content.addClass(g.enabled),setTimeout(function(){e.$animate.addClass(g.animated)},0),e.label&&e.$handle.html(e.labels.closed)}function r(a){var e=a.data;e.$el.removeAttr("aria-hidden"),e.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),e.$content.removeClass(g.enabled,g.animated),e.$animate.removeClass(g.animated),p(e),h(e)}function c(a){a.isToggle||C.addClass(g.lock)}function h(a){a.isToggle||C.removeClass(g.lock)}function u(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var e=0,t=a.$handle.length;e<t;e++)a.originalLabel[e]=a.$handle.eq(e).html()}else a.originalLabel=a.$handle.html()}function p(a){if(a.label)if(a.$handle.length>1)for(var e=0,t=a.$handle.length;e<t;e++)a.$handle.eq(e).html(a.originalLabel[e]);else a.$handle.html(a.originalLabel)}var f=e.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_construct:function(e){e.handleGuid=g.handle+e.guid,e.isToggle="toggle"===e.type,e.open=!1,e.isToggle&&(e.gravity="");var t=g.base,c=[t,e.type].join("-"),h=e.gravity?[c,e.gravity].join("-"):"",p=[e.rawGuid,e.theme,e.customClass].join(" ");e.handle=this.data(v+"-handle"),e.content=this.data(v+"-content"),e.handleClasses=[g.handle,g.handle.replace(t,c),h?g.handle.replace(t,h):"",e.handleGuid,p].join(" "),e.thisClasses=[g.nav.replace(t,c),h?g.nav.replace(t,h):"",p],e.contentClasses=[g.content.replace(t,c),p].join(" "),e.contentClassesOpen=[h?g.content.replace(t,h):"",g.open].join(" "),e.$nav=this.addClass(e.thisClasses.join(" ")).attr("role","navigation"),e.$handle=a(e.handle).addClass(e.handleClasses),e.$content=a(e.content).addClass(e.contentClasses),e.$animate=a().add(e.$nav).add(e.$content),u(e),e.navTabIndex=e.$nav.attr("tabindex"),e.$nav.attr("tabindex",-1),e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),e.$handle.attr("data-swap-target",e.dotGuid).attr("data-swap-linked",e.handleGuid).attr("data-swap-group",g.base).attr("tabindex",0).on("activate.swap"+e.dotGuid,e,o).on("deactivate.swap"+e.dotGuid,e,i).on("enable.swap"+e.dotGuid,e,s).on("disable.swap"+e.dotGuid,e,r).on($.focus+e.dotGuid,e,n).on($.blur+e.dotGuid,e,l).fsSwap({maxWidth:e.maxWidth,classes:{target:e.dotGuid,enabled:m.enabled,active:m.open,raw:{target:e.rawGuid,enabled:g.enabled,active:g.open}}}),e.$handle.is("a, button")||e.$handle.on($.keyPress+e.dotGuid,e,d)},_destruct:function(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off($.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),p(a),h(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off($.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")},open:function(a){a.$handle.fsSwap("activate")},close:t,enable:function(a){a.$handle.fsSwap("enable")},disable:function(a){a.$handle.fsSwap("disable")}}}),v=f.namespace,m=f.classes,g=m.raw,$=f.events,b=f.functions,C=null;e.Ready(function(){C=a("html, body")})});
/*! formstone v1.4.3 [pagination.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,s){"use strict";function i(s){p.killEvent(s);var i=s.data,t=i.index+(e(s.currentTarget).hasClass(d.control_previous)?-1:1);t>=0&&i.$items.eq(t).trigger(c.raw.click)}function t(s){p.killEvent(s);var i=s.data,t=e(s.currentTarget),a=parseInt(t.val(),10);i.$items.eq(a).trigger(c.raw.click)}function a(s){var i=s.data,t=e(s.currentTarget),a=i.$items.index(t);i.ajax?p.killEvent(s):t[0].click(),l(i,a)}function l(e,s){if(s<0&&(s=0),s>e.total&&(s=e.total),s!==e.index){e.index=s;var i=e.index-e.visible,t=e.index+(e.visible+1);i<0&&(i=0),t>e.total&&(t=e.total),e.$items.removeClass(d.visible).removeClass(d.hidden).filter(r.active).removeClass(d.active).end().eq(e.index).addClass(d.active).end().slice(i,t).addClass(d.visible),e.$items.not(r.visible).addClass(d.hidden),e.$position.find(r.current).text(e.index+1).end().find(r.total).text(e.total+1),e.$select.val(e.index),e.$controls.removeClass(d.visible),s>0&&e.$controls.filter(r.control_previous).addClass(d.visible),s<e.total&&e.$controls.filter(r.control_next).addClass(d.visible),e.$ellipsis.removeClass(d.visible),s>e.visible+1&&e.$ellipsis.eq(0).addClass(d.visible),s<e.total-e.visible-1&&e.$ellipsis.eq(1).addClass(d.visible),e.$el.trigger(c.update,[e.index])}}function n(e){for(var s="",i=0;i<=e.total;i++)s+='<option value="'+i+'"',i===e.index&&(s+='selected="selected"'),s+=">Page "+(i+1)+"</option>";e.$select.html(s)}var o=s.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",select:"Select Page",pagination:"Pagination {guid}"},maxWidth:"740px",theme:"fs-light",visible:2},classes:["pages","page","active","first","last","ellipsis","visible","hidden","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:function(s){s.mq="(max-width:"+(s.maxWidth===1/0?"100000px":s.maxWidth)+")";var p="";p+='<button type="button" class="'+[d.control,d.control_previous].join(" ")+'">'+s.labels.previous+"</button>",p+='<button type="button" class="'+[d.control,d.control_next].join(" ")+'">'+s.labels.next+"</button>",p+='<div class="'+d.position+'" aria-hidden="true">',p+='<span class="'+d.current+'">0</span>',p+=" "+s.labels.count+" ",p+='<span class="'+d.total+'">0</span>',p+='<select class="'+d.select+'" title="'+s.labels.select+'" tabindex="-1" aria-hidden="true"></select>',p+="</div>",s.thisClasses=[d.base,s.theme,s.customClass],s.labels.pagination=s.labels.pagination.replace("{guid}",s.numGuid),this.addClass(s.thisClasses.join(" ")).wrapInner('<div class="'+d.pages+'" aria-label="'+s.labels.pagination+'"></div>').prepend(p),s.$controls=this.find(r.control),s.$pages=this.find(r.pages),s.$items=s.$pages.children().addClass(d.page),s.$position=this.find(r.position),s.$select=this.find(r.select),s.index=-1,s.total=s.$items.length-1;var v=s.$items.index(s.$items.filter("[data-"+o.namespace+"-active]"));v<0&&(v=s.$items.index(s.$items.filter(r.active))),s.$items.eq(0).addClass(d.first).after('<span class="'+d.ellipsis+'">&hellip;</span>').end().eq(s.total).addClass(d.last).before('<span class="'+d.ellipsis+'">&hellip;</span>'),s.$ellipsis=s.$pages.find(r.ellipsis),n(s),this.on(c.click,r.page,s,a).on(c.click,r.control,s,i).on(c.change,r.select,s,t),e.fsMediaquery("bind",s.rawGuid,s.mq,{enter:function(){s.$el.addClass(d.mobile)},leave:function(){s.$el.removeClass(d.mobile)}}),l(s,v)},_destruct:function(s){e.fsMediaquery("unbind",s.rawGuid),s.$controls.remove(),s.$ellipsis.remove(),s.$select.remove(),s.$position.remove(),s.$items.removeClass([d.page,d.active,d.visible,d.first,d.last].join(" ")).unwrap(),this.removeClass(s.thisClasses.join(" ")).off(c.namespace)}}}),r=o.classes,d=r.raw,c=o.events,p=o.functions});
/*! formstone v1.4.3 [sticky.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){$.iterate.call(k,c)}function s(){k=e(m.base),n()}function a(e){e.enabled=!0,e.$el.addClass(u.enabled),c(e)}function i(e){e.enabled=!1,e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(u.enabled),e.$stickys.removeClass([u.passed,u.stuck].join(" "))}function o(){$.iterate.call(k,r)}function c(e){if(e.enabled){if(d(e),e.$container.length){var t=e.$container.offset();e.min=t.top-e.margin,e.max=e.min+e.$container.outerHeight(!1)-e.height}else{var n,s=(n=e.stuck?e.$clone:e.$el).offset();e.min=s.top-e.margin,e.max=!1}r(e)}}function d(e){var t;t=e.stuck?e.$clone:e.$el,e.margin=parseInt(t.css("margin-top"),10),e.$container.length?e.containerMargin=parseInt(e.$container.css("margin-top"),10):e.containerMargin=0,e.height=t.outerHeight(),e.width=t.outerWidth()}function r(e){if(e.enabled){var t=g+e.offset;if(t>=e.min){e.stuck=!0,e.$stickys.addClass(u.stuck),e.stuck||(e.$el.trigger(f.stuck),d(e));var n=e.offset,s="";e.max&&t>e.max?(e.passed||e.$el.trigger(f.passed),e.passed=!0,e.$stickys.addClass(u.passed),n="",s=0):(e.passed=!1,e.$stickys.removeClass(u.passed)),e.$el.css({height:e.height,width:e.width,top:n,bottom:s,marginBottom:0})}else e.stuck=!1,e.$stickys.removeClass(u.stuck).removeClass(u.passed),e.stuck&&e.$el.trigger(f.unstuck),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""})}}var l=t.Plugin("sticky",{widget:!0,defaults:{maxWidth:1/0,minWidth:"0px",offset:0},classes:["enabled","sticky","stuck","clone","container","passed"],events:{passed:"passed",stuck:"stuck",unstuck:"unstuck"},methods:{_construct:function(t){t.enabled=!1,t.stuck=!1,t.passed=!0,t.$clone=t.$el.clone(),t.container=t.$el.data("sticky-container"),t.$container=e(t.container),t.$el.addClass(u.base),t.$clone.removeClass(u.element).addClass(u.clone),t.$container.addClass(u.container),t.$stickys=e().add(t.$el).add(t.$clone),t.$el.after(t.$clone);var n=e().add(t.$el.find("img")).add(t.$container.find("img"));n.length&&n.on(f.load,t,c),t.maxWidth=t.maxWidth===1/0?"100000px":t.maxWidth,t.mq="(min-width:"+t.minWidth+") and (max-width:"+t.maxWidth+")",e.fsMediaquery("bind",t.rawGuid,t.mq,{enter:function(){a.call(t.$el,t)},leave:function(){i.call(t.$el,t)}})},_postConstruct:function(e){s(),n()},_destruct:function(e){e.$clone.remove(),e.$container.removeClass(u.container),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(u.base),s()},_resize:n,_raf:function(){(g=h.scrollTop())<0&&(g=0),g!==p&&(o(),p=g)},disable:i,enable:a,reset:c,resize:c}}),m=(l.namespace,l.classes),u=m.raw,f=l.events,$=l.functions,h=(t.window,t.$window),g=0,p=0,k=[]});
/*! formstone v1.4.3 [swap.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,a){"use strict";function t(a,t){if(a.enabled&&!a.active){a.group&&!t&&e(a.group).not(a.$el).not(a.linked)[c.namespaceClean]("deactivate",!0);var s=a.group?e(a.group).index(a.$el):null;a.$swaps.addClass(a.classes.raw.active),t||a.linked&&e(a.linked).not(a.$el)[c.namespaceClean]("activate",!0),this.trigger(o.activate,[s]),a.active=!0}}function s(a,t){a.enabled&&a.active&&(a.$swaps.removeClass(a.classes.raw.active),t||a.linked&&e(a.linked).not(a.$el)[c.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),a.active=!1)}function i(a,i){a.enabled||(a.enabled=!0,a.$swaps.addClass(a.classes.raw.enabled),i||e(a.linked).not(a.$el)[c.namespaceClean]("enable"),this.trigger(o.enable),a.onEnable?(a.active=!1,t.call(this,a)):(a.active=!0,s.call(this,a)))}function n(a,t){a.enabled&&(a.enabled=!1,a.$swaps.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")),t||e(a.linked).not(a.$el)[c.namespaceClean]("disable"),this.trigger(o.disable))}function l(e){u.killEvent(e);var a=e.data;a.active&&a.collapse?s.call(a.$el,a):t.call(a.$el,a)}var c=a.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(a){a.enabled=!1,a.active=!1,a.classes=e.extend(!0,{},r,a.classes),a.target=this.data(d+"-target"),a.$target=e(a.target).addClass(a.classes.raw.target),a.mq="(max-width:"+(a.maxWidth===1/0?"100000px":a.maxWidth)+")";var t=this.data(d+"-linked");a.linked=!!t&&"[data-"+d+'-linked="'+t+'"]';var s=this.data(d+"-group");a.group=!!s&&"[data-"+d+'-group="'+s+'"]',a.$swaps=e().add(this).add(a.$target),this.on(o.click+a.dotGuid,a,l)},_postConstruct:function(a){a.collapse||!a.group||e(a.group).filter("[data-"+d+"-active]").length||e(a.group).eq(0).attr("data-"+d+"-active","true"),a.onEnable=this.data(d+"-active")||!1,e.fsMediaquery("bind",a.rawGuid,a.mq,{enter:function(){i.call(a.$el,a,!0)},leave:function(){n.call(a.$el,a,!0)}})},_destruct:function(a){e.fsMediaquery("unbind",a.rawGuid),a.$swaps.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")).off(o.namespace)},activate:t,deactivate:s,enable:i,disable:n}}),d=c.namespace,r=c.classes,o=c.events,u=c.functions});
/*! formstone v1.4.3 [touch.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function a(e){e.preventManipulation&&e.preventManipulation();var t=e.data,a=e.originalEvent;if(a.type.match(/(up|end|cancel)$/i))s(e);else{if(a.pointerId){var o=!1;for(var p in t.touches)t.touches[p].id===a.pointerId&&(o=!0,t.touches[p].pageX=a.pageX,t.touches[p].pageY=a.pageY);o||t.touches.push({id:a.pointerId,pageX:a.pageX,pageY:a.pageY})}else t.touches=a.touches;a.type.match(/(down|start)$/i)?n(e):a.type.match(/move$/i)&&i(e)}}function n(n){var o=n.data,p="undefined"!==e.type(o.touches)&&o.touches.length?o.touches[0]:null;p&&o.$el.off(d.mouseDown),o.touching||(o.startE=n.originalEvent,o.startX=p?p.pageX:n.pageX,o.startY=p?p.pageY:n.pageY,o.startT=(new Date).getTime(),o.scaleD=1,o.passed=!1),o.$links&&o.$links.off(d.click);var l=c(o.scale?d.scaleStart:d.panStart,n,o.startX,o.startY,o.scaleD,0,0,"","");if(o.scale&&o.touches&&o.touches.length>=2){var h=o.touches;o.pinch={startX:r(h[0].pageX,h[1].pageX),startY:r(h[0].pageY,h[1].pageY),startD:u(h[1].pageX-h[0].pageX,h[1].pageY-h[0].pageY)},l.pageX=o.startX=o.pinch.startX,l.pageY=o.startY=o.pinch.startY}o.touching||(o.touching=!0,o.pan&&!p&&X.on(d.mouseMove,o,i).on(d.mouseUp,o,s),t.support.pointer?X.on([d.pointerMove,d.pointerUp,d.pointerCancel].join(" "),o,a):X.on([d.touchMove,d.touchEnd,d.touchCancel].join(" "),o,a),o.$el.trigger(l))}function i(t){var a=t.data,n="undefined"!==e.type(a.touches)&&a.touches.length?a.touches[0]:null,i=n?n.pageX:t.pageX,o=n?n.pageY:t.pageY,p=i-a.startX,l=o-a.startY,h=p>0?"right":"left",g=l>0?"down":"up",X=Math.abs(p)>Y,v=Math.abs(l)>Y;if(!a.passed&&a.axis&&(a.axisX&&v||a.axisY&&X))s(t);else{!a.passed&&(!a.axis||a.axis&&a.axisX&&X||a.axisY&&v)&&(a.passed=!0),a.passed&&(f.killEvent(t),f.killEvent(a.startE));var w=!0,x=c(a.scale?d.scale:d.pan,t,i,o,a.scaleD,p,l,h,g);if(a.scale)if(a.touches&&a.touches.length>=2){var m=a.touches;a.pinch.endX=r(m[0].pageX,m[1].pageX),a.pinch.endY=r(m[0].pageY,m[1].pageY),a.pinch.endD=u(m[1].pageX-m[0].pageX,m[1].pageY-m[0].pageY),a.scaleD=a.pinch.endD/a.pinch.startD,x.pageX=a.pinch.endX,x.pageY=a.pinch.endY,x.scale=a.scaleD,x.deltaX=a.pinch.endX-a.pinch.startX,x.deltaY=a.pinch.endY-a.pinch.startY}else a.pan||(w=!1);w&&a.$el.trigger(x)}}function s(t){var a=t.data,i="undefined"!==e.type(a.touches)&&a.touches.length?a.touches[0]:null,s=i?i.pageX:t.pageX,p=i?i.pageY:t.pageY,r=s-a.startX,u=p-a.startY,l=(new Date).getTime(),h=a.scale?d.scaleEnd:d.panEnd,g=r>0?"right":"left",w=u>0?"down":"up",x=Math.abs(r)>1,m=Math.abs(u)>1;if(a.swipe&&Math.abs(r)>Y&&l-a.startT<v&&(h=d.swipe),a.axis&&(a.axisX&&m||a.axisY&&x)||x||m){a.$links=a.$el.find("a");for(var M=0,D=a.$links.length;M<D;M++)o(a.$links.eq(M),a)}var E=c(h,t,s,p,a.scaleD,r,u,g,w);X.off([d.touchMove,d.touchEnd,d.touchCancel,d.mouseMove,d.mouseUp,d.pointerMove,d.pointerUp,d.pointerCancel].join(" ")),a.$el.trigger(E),a.touches=[],a.scale,i&&(a.touchTimer=f.startTimer(a.touchTimer,5,function(){a.$el.on(d.mouseDown,a,n)})),a.touching=!1}function o(t,a){t.on(d.click,a,p);var n=e._data(t[0],"events").click;n.unshift(n.pop())}function p(e){f.killEvent(e,!0),e.data.$links.off(d.click)}function c(t,a,n,i,s,o,p,c,r){return e.Event(t,{originalEvent:a,bubbles:!0,pageX:n,pageY:i,scale:s,deltaX:o,deltaY:p,directionX:c,directionY:r})}function r(e,t){return(e+t)/2}function u(e,t){return Math.sqrt(e*e+t*t)}function l(e,t){e.css({"-ms-touch-action":t,"touch-action":t})}var h=!t.window.PointerEvent,g=t.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1},methods:{_construct:function(e){if(e.touches=[],e.touching=!1,this.on(d.dragStart,f.killEvent),e.swipe&&(e.pan=!0),e.scale&&(e.axis=!1),e.axisX="x"===e.axis,e.axisY="y"===e.axis,t.support.pointer){var i="";!e.axis||e.axisX&&e.axisY?i="none":(e.axisX&&(i+=" pan-y"),e.axisY&&(i+=" pan-x")),l(this,i),this.on(d.pointerDown,e,a)}else this.on(d.touchStart,e,a).on(d.mouseDown,e,n)},_destruct:function(e){this.off(d.namespace),l(this,"")}},events:{pointerDown:h?"MSPointerDown":"pointerdown",pointerUp:h?"MSPointerUp":"pointerup",pointerMove:h?"MSPointerMove":"pointermove",pointerCancel:h?"MSPointerCancel":"pointercancel"}}),d=g.events,f=g.functions,X=t.$window,Y=10,v=50;d.pan="pan",d.panStart="panstart",d.panEnd="panend",d.scale="scale",d.scaleStart="scalestart",d.scaleEnd="scaleend",d.swipe="swipe"});
/*! formstone v1.4.3 [transition.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function r(e){e.stopPropagation(),e.preventDefault();var r=e.data,a=e.originalEvent,i=r.target?r.$target:r.$el;r.property&&a.propertyName!==r.property||!t(a.target).is(i)||n(r)}function n(t){t.always||t.$el[s.namespaceClean]("destroy"),t.callback.apply(t.$el)}function a(t){var e=i(t.$check);o(t.styles,e)||n(t),t.styles=e}function i(e){var r,n,a,i={};if(e instanceof t&&(e=e[0]),u.getComputedStyle)for(var o=0,s=(r=u.getComputedStyle(e,null)).length;o<s;o++)n=r[o],a=r.getPropertyValue(n),i[n]=a;else if(e.currentStyle){r=e.currentStyle;for(n in r)i[n]=r[n]}return i}function o(e,r){if(t.type(e)!==t.type(r))return!1;for(var n in e){if(!e.hasOwnProperty(n))return!1;if(!e.hasOwnProperty(n)||!r.hasOwnProperty(n)||e[n]!==r[n])return!1}return!0}var s=e.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(t,n){if(n){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=n,t.styles=i(t.$check),t.timer=null;var o=t.$check.css(e.transition+"-duration"),s=parseFloat(o);e.support.transition&&o&&s?this.on(c.transitionEnd,t,r):t.timer=l.startTimer(t.timer,50,function(){a(t)},!0)}},_destruct:function(t){l.clearTimer(t.timer,!0),this.off(c.namespace)},resolve:n}}),c=s.events,l=s.functions,u=e.window});
/*! formstone v1.4.3 [viewer.js] 2018-01-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function i(){(O=V.scrollTop()+e.windowHeight)<0&&(O=0)}function o(){(q=t(R.base)).length?S.lockViewport(A):S.unlockViewport(A)}function n(e,i,o){e.isAnimating||(e.isAnimating=!0,e.$container=t('<div class="'+N.container+'"><img></div>'),e.$image=e.$container.find("img"),e.$viewport.append(e.$container),e.$image.one(P.load,function(){r(e),e.isAnimating=!1,e.$container.fsTransition({property:"opacity"},function(){}),e.$el.removeClass(N.loading),e.$container.fsTouch({pan:!0,scale:!0}).on(P.scaleStart,e,T).on(P.scaleEnd,e,M).on(P.scale,e,$),e.$el.trigger(P.loaded)}).one(P.error,e,a).attr("src",i).addClass(N.image),(e.$image[0].complete||4===e.$image[0].readyState)&&e.$image.trigger(P.load),e.source=i)}function a(t){t.data.$el.trigger(P.error)}function r(t){g(t),s(t),t.containerTop=t.viewportHeight/2,t.containerLeft=t.viewportWidth/2,c(t),t.imageHeight=t.naturalHeight,t.imageWidth=t.naturalWidth,u(t),l(t),m(t),d(t),h(t),W(t,{containerTop:t.containerTop,containerLeft:t.containerLeft,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTop:t.imageTop,imageLeft:t.imageLeft}),t.isRendering=!0}function g(t){var e=E(t.$image);t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.ratioHorizontal=t.naturalHeight/t.naturalWidth,t.ratioVertical=t.naturalWidth/t.naturalHeight,t.isWide=t.naturalWidth>t.naturalHeight}function s(t){t.viewportHeight=t.$viewport.outerHeight(),t.viewportWidth=t.$viewport.outerWidth()}function l(t){t.imageHeight<=t.viewportHeight?(t.containerMinTop=t.viewportHeight/2,t.containerMaxTop=t.viewportHeight/2):(t.containerMinTop=t.viewportHeight-t.imageHeight/2,t.containerMaxTop=t.imageHeight/2),t.imageWidth<=t.viewportWidth?(t.containerMinLeft=t.viewportWidth/2,t.containerMaxLeft=t.viewportWidth/2):(t.containerMinLeft=t.viewportWidth-t.imageWidth/2,t.containerMaxLeft=t.imageWidth/2)}function c(t){t.isWide?(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal,t.imageMinHeight>t.viewportHeight&&(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical)):(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical,t.imageMinWidth>t.viewportWidth&&(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal)),(t.imageMinWidth>t.naturalWidth||t.imageMinHeight>t.naturalHeight)&&(t.imageMinHeight=t.naturalHeight,t.imageMinWidth=t.naturalWidth),t.imageMaxHeight=t.naturalHeight,t.imageMaxWidth=t.naturalWidth}function m(t){t.imageTop=-t.imageHeight/2,t.imageLeft=-t.imageWidth/2}function d(t){t.lastContainerTop=t.containerTop,t.lastContainerLeft=t.containerLeft,t.lastImageHeight=t.imageHeight,t.lastImageWidth=t.imageWidth,t.lastImageTop=t.imageTop,t.lastImageLeft=t.imageLeft}function h(t){t.renderContainerTop=t.lastContainerTop,t.renderContainerLeft=t.lastContainerLeft,t.renderImageTop=t.lastImageTop,t.renderImageLeft=t.lastImageLeft,t.renderImageHeight=t.lastImageHeight,t.renderImageWidth=t.lastImageWidth}function u(t){t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth}function f(t){t.imageHeight<t.imageMinHeight&&(t.imageHeight=t.imageMinHeight),t.imageHeight>t.imageMaxHeight&&(t.imageHeight=t.imageMaxHeight),t.imageWidth<t.imageMinWidth&&(t.imageWidth=t.imageMinWidth),t.imageWidth>t.imageMaxWidth&&(t.imageWidth=t.imageMaxWidth)}function p(t){t.containerTop<t.containerMinTop&&(t.containerTop=t.containerMinTop),t.containerTop>t.containerMaxTop&&(t.containerTop=t.containerMaxTop),t.containerLeft<t.containerMinLeft&&(t.containerLeft=t.containerMinLeft),t.containerLeft>t.containerMaxLeft&&(t.containerLeft=t.containerMaxLeft)}function H(t){null===t.tapTimer?t.tapTimer=S.startTimer(t.tapTimer,500,function(){v(t)}):(v(t),w(t))}function v(t){S.clearTimer(t.tapTimer),t.tapTimer=null}function W(t,i){if(e.transform){var o=i.imageWidth/t.naturalWidth,n=i.imageHeight/t.naturalHeight;t.$container.css(e.transform,"translate3d("+i.containerLeft+"px, "+i.containerTop+"px, 0)"),t.$image.css(e.transform,"translate3d(-50%, -50%, 0) scale("+o+","+n+")")}else t.$container.css({top:i.containerTop,left:i.containerLeft}),t.$image.css({height:i.imageHeight,width:i.imageWidth,top:i.imageTop,left:i.imageLeft})}function T(t){var e=t.data;H(e),d(e)}function $(t){var e=t.data;v(e),e.isRendering=!1,e.isZooming=!1;e.imageHeight,e.imageMinHeight;e.containerTop=e.lastContainerTop+t.deltaY,e.containerLeft=e.lastContainerLeft+t.deltaX,e.imageHeight=e.lastImageHeight*t.scale,e.imageWidth=e.lastImageWidth*t.scale,l(e),p(e),f(e),m(e),W(e,{containerTop:e.containerTop,containerLeft:e.containerLeft,imageHeight:e.imageHeight,imageWidth:e.imageWidth,imageTop:e.imageTop,imageLeft:e.imageLeft})}function M(t){var e=t.data;e.isZooming||(d(e),h(e),e.isRendering=!0)}function w(t){var e=t.imageHeight>t.imageMinHeight+1;t.isZooming=!0,d(t),h(t),e?(t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth):(t.imageHeight=t.imageMaxHeight,t.imageWidth=t.imageMaxWidth),l(t),p(t),m(t),t.isRendering=!0}function _(e){S.killEvent(e);var i=t(e.currentTarget),o=e.data;"out"===(i.hasClass(N.control_zoom_out)?"out":"in")?L(o):C(o)}function C(t){t.keyDownTime=1,t.action="zoom_in"}function L(t){t.keyDownTime=1,t.action="zoom_out"}function x(t){t.data.action=!1}function z(t){if(t.isRendering){if(t.action){t.keyDownTime+=t.zoomIncrement;var e=("zoom_out"===t.action?-1:1)*Math.round(t.imageWidth*t.keyDownTime-t.imageWidth);e>t.zoomDelta&&(e=t.zoomDelta),t.isWide?(t.imageWidth+=e,t.imageHeight=Math.round(t.imageWidth/t.ratioVertical)):(t.imageHeight+=e,t.imageWidth=Math.round(t.imageHeight/t.ratioHorizontal)),f(t),m(t),l(t),p(t)}t.renderContainerTop+=Math.round((t.containerTop-t.renderContainerTop)*t.zoomEnertia),t.renderContainerLeft+=Math.round((t.containerLeft-t.renderContainerLeft)*t.zoomEnertia),t.renderImageTop+=Math.round((t.imageTop-t.renderImageTop)*t.zoomEnertia),t.renderImageLeft+=Math.round((t.imageLeft-t.renderImageLeft)*t.zoomEnertia),t.renderImageHeight+=Math.round((t.imageHeight-t.renderImageHeight)*t.zoomEnertia),t.renderImageWidth+=Math.round((t.imageWidth-t.renderImageWidth)*t.zoomEnertia),W(t,{containerTop:t.renderContainerTop,containerLeft:t.renderContainerLeft,imageHeight:t.renderImageHeight,imageWidth:t.renderImageWidth,imageTop:t.renderImageTop,imageLeft:t.renderImageLeft})}}function I(t,e){t.isAnimating||(v(t),t.isAnimating=!0,t.isRendering=!1,t.isZooming=!1,Z(t),t.$container.fsTransition({property:"opacity"},function(){t.isAnimating=!1,t.$container.remove(),"function"==typeof e&&e.call(window,t)}),t.$el.addClass(N.loading))}function y(e){S.killEvent(e);var i=t(e.currentTarget),o=e.data,a=o.index+(i.hasClass(N.control_next)?1:-1);o.isAnimating||(a<0&&(a=0),a>o.total&&(a=o.total),a!==o.index&&(o.index=a,I(o,function(){n(o,o.images[o.index])})),b(o))}function b(t){t.$controlItems.removeClass(N.control_disabled),0===t.index&&t.$controlPrevious.addClass(N.control_disabled),t.index===t.images.length-1&&t.$controlNext.addClass(N.control_disabled)}function j(t){s(t),l(t),c(t),m(t),l(t),p(t),f(t)}function Z(t){t.$container&&t.$container.length&&t.$container.fsTouch("destroy").off(P.scaleStart,T).off(P.scaleEnd,M).off(P.scale,$)}function E(t){var e=t[0],i=new Image;return void 0!==e.naturalHeight?{naturalHeight:e.naturalHeight,naturalWidth:e.naturalWidth}:"img"===e.tagName.toLowerCase()&&(i.src=e.src,{naturalHeight:i.height,naturalWidth:i.width})}var k,D=e.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_construct:function(e){var i,a="",r=[N.control,N.control_previous].join(" "),g=[N.control,N.control_next].join(" "),s=[N.control,N.control_zoom_in].join(" "),l=[N.control,N.control_zoom_out].join(" ");e.thisClasses=[N.base,N.loading,e.customClass,e.theme],e.images=[],e.source=!1,e.gallery=!1,e.tapTimer=null,e.action=!1,e.isRendering=!1,e.isZooming=!1,e.isAnimating=!1,e.keyDownTime=1,e.$images=this.find("img").addClass(N.source),e.index=0,e.total=e.$images.length-1,e.customControls="object"===t.type(e.controls)&&e.controls.zoom_in&&e.controls.zoom_out,e.$images.length>1&&(e.gallery=!0,e.thisClasses.push(N.gallery),!e.customControls||e.controls.previous&&e.controls.next||(e.customControls=!1));for(var c=0;c<e.$images.length;c++)i=e.$images.eq(c),e.images.push(i.attr("src"));a+='<div class="'+N.wrapper+'">',a+='<div class="'+N.loading_icon+'"></div>',a+='<div class="'+N.viewport+'"></div>',a+="</div>",e.controls&&!e.customControls&&(a+='<div class="'+N.controls+'">',a+='<button type="button" class="'+r+'">'+e.labels.previous+"</button>",a+='<button type="button" class="'+l+'">'+e.labels.zoom_out+"</button>",a+='<button type="button" class="'+s+'">'+e.labels.zoom_in+"</button>",a+='<button type="button" class="'+g+'">'+e.labels.next+"</button>",a+="</div>"),this.addClass(e.thisClasses.join(" ")).prepend(a),e.$wrapper=this.find(R.wrapper),e.$viewport=this.find(R.viewport),e.customControls?(e.$controls=t(e.controls.container).addClass([N.controls,N.controls_custom].join(" ")),e.$controlPrevious=t(e.controls.previous).addClass(r),e.$controlNext=t(e.controls.next).addClass(g),e.$controlZoomIn=t(e.controls.zoom_in).addClass(s),e.$controlZoomOut=t(e.controls.zoom_out).addClass(l)):(e.$controls=this.find(R.controls),e.$controlPrevious=this.find(R.control_previous),e.$controlNext=this.find(R.control_next),e.$controlZoomIn=this.find(R.control_zoom_in),e.$controlZoomOut=this.find(R.control_zoom_out)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.$controlZooms=e.$controlZoomIn.add(e.$controlZoomOut),o(),e.$controlItems.on(P.click,e,y),e.$controlZooms.on([P.touchStart,P.mouseDown].join(" "),e,_).on([P.touchEnd,P.mouseUp].join(" "),e,x),n(e,e.images[e.index],!0),b(e)},_destruct:function(t){t.$wrapper.remove(),t.$image.removeClass(N.source),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&(t.$controls.removeClass([N.controls,N.controls_custom].join(" ")),t.$controlItems.off(P.click).removeClass([N.control,N.control_previous,N.control_next].join(" ")),t.$controlZooms.off([P.touchStart,P.mouseDown].join(" ")).off([P.touchStart,P.mouseDown].join(" ")).off([P.touchEnd,P.mouseUp].join(" ")).removeClass([N.control,N.control_zoom_in,N.control_zoom_out].join(" "))),this.removeClass(t.thisClasses.join(" ")).off(P.namespace),o()},_resize:function(){S.iterate.call(q,j)},_raf:function(){S.iterate.call(q,z)},resize:j,load:function(t,e){t.index=0,"string"==typeof e?(t.total=0,t.images=[e],t.gallery=!1,t.$el.removeClass(N.gallery)):(t.total=e.length-1,t.images=e,e.length>1&&(t.gallery=!0,t.$el.addClass(N.gallery)),e=t.images[t.index]),I(t,function(){n(t,e)})},unload:function(t){I(t)}}}),A=D.namespace,R=D.classes,N=R.raw,P=D.events,S=D.functions,V=(e.window,e.$window),O=0,q=[];e.Ready(function(){i(),V.on("scroll",i),k=e.$body})});
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.0.5
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // event buffer timer
	  var eventTimer = null;

	  // form input types
	  var formInputs = ['input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch'

	    // boolean: true if touch buffer is active
	  };var isBuffering = false;

	  // boolean: true if the page is being scrolled
	  var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput);
	      window.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput);
	      window.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput);
	      window.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', eventBuffer, options);
	        window.addEventListener('touchend', setInput);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', eventBuffer);
	    window.addEventListener('keyup', eventBuffer);

	    // focus events
	    window.addEventListener('focusin', setElement);
	    window.addEventListener('focusout', clearElement);
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    // only execute if the event buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];

	      if (value === 'pointer') {
	        value = pointerType(event);
	      }

	      var shouldUpdate = value === 'keyboard' && eventKey && ignoreMap.indexOf(eventKey) === -1 || value === 'mouse' || value === 'touch';

	      if (currentInput !== value && shouldUpdate) {
	        currentInput = value;
	        doUpdate('input');
	      }

	      if (currentIntent !== value && shouldUpdate) {
	        // preserve intent for keyboard typing in form fields
	        var activeElem = document.activeElement;
	        var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

	        if (notFormInput) {
	          currentIntent = value;
	          doUpdate('intent');
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if the event buffer timer isn't running
	    // or scrolling isn't happening
	    if (!isBuffering && !isScrolling) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') {
	        value = pointerType(event);
	      }

	      if (currentIntent !== value) {
	        currentIntent = value;
	        doUpdate('intent');
	      }
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  // buffers events that frequently also fire mouse events
	  var eventBuffer = function eventBuffer(event) {
	    // set the current input
	    setInput(event);

	    // clear the timer if it happens to be running
	    window.clearTimeout(eventTimer);

	    // set the isBuffering to `true`
	    isBuffering = true;

	    // run the timer
	    eventTimer = window.setTimeout(function () {
	      // if the timer runs out, set isBuffering back to `false`
	      isBuffering = false;
	    }, 100);
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function detectWheel() {
	    var wheelType = void 0;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position) {
	        functionList.splice(position, 1);
	      }
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
/*-------------------------------------------
	Site
-------------------------------------------*/

	// !Site
	var Site = (function($, window) {

		// !BaseController
		var BaseController = function() {
			this.namespace = "";

			this.minWidth = 320;

			this.window = null;
			this.doc = null;

			this.$window = null;
			this.$doc = null;
			this.$body = null;

			this.touch = false;

			// Public modules
			this.modules = [];

			this.onInit = [];
			this.onRespond = [];
			this.onResize = [];
			this.onScroll = [];

			this.minXS = "320";
			this.minSM = "500";
			this.minMD = "740";
			this.minLG = "980";
			this.minXL = "1220";
			this.minXXL = "1270";
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window = window;
				this.doc = document;
				this.$window = $(window);
				this.$doc = $(document);
				this.$body = $("body");
				this.touch = $("html").hasClass("touchevents");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [
							this.minXS,
							this.minSM,
							this.minMD,
							this.minLG,
							this.minXL,
							this.minXXL
						]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window
					.on("mqchange.mediaquery", onRespond)
					.on(Controller.ns("resize"), onResize)
					.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			},
			// Returns icon markup
			icon: function(icon) {
				var markup = '<svg class="icon icon_' + icon + '">';
				var ua = window.navigator.userAgent;
    		var msie = ua.indexOf("MSIE ");
	
				if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					markup += '<use xlink:href="#' + icon + '">';
				} else {
					markup += '<use xlink:href="' + STATIC_ROOT + 'images/icons.svg#' + icon + '">';
				}

				return markup + '</use></svg>';
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	jQuery(document).ready(function() {
		Site.init("@namespace");
	});

/*-------------------------------------------
	Accordion
-------------------------------------------*/

Site.modules.Accordion = (function($, Site) {

	var $accordion,
	$accordion_trigger,
	$accordion_content;

	function init() {
		$accordion = $(".js-accordion");
		if ($accordion.length) {
			bindUI();
		}
	}

	function bindUI() {
		$accordion_trigger = $accordion.find(".js-accordion-trigger");
		$accordion_content = $accordion.find(".js-accordion-content");

		addAccessibility();
		$accordion_trigger.on("activate.swap", onTriggerActivate)
			.on("deactivate.swap", onTriggerDeactivate);
	}

	function onTriggerActivate() {
		var $accordion_target = $(this).data("swap-target");

		$(this).attr("aria-expanded", "true");
		$accordion.find($accordion_target)
			.find(".js-accordion-content")
			.attr("aria-hidden", "false")
			.removeAttr("hidden");
	}

	function onTriggerDeactivate() {
		var $accordion_target = $(this).data("swap-target");

		$(this).attr("aria-expanded", "false");
		$accordion.find($accordion_target)
			.find(".js-accordion-content")
			.attr("aria-hidden", "true")
			.attr("hidden", "");
	}

	function addAccessibility() {
		$accordion_trigger.attr("aria-expanded", "false");
		Site.modules.Page.ariaHide($accordion_content);
		$accordion.each(function() {
			if ($(this).find(".fs-swap-active").length) {
				Site.modules.Page.ariaShow($(this).find(".js-accordion-content:eq(0)"));
				$(this)
					.find(".js-accordion-item:eq(0)")
					.find(".js-accordion-trigger")
					.attr("aria-expanded", "true");
			}
		});
	}

	function removeAccessibility() {
		$accordion_trigger.removeAttr("aria-expanded");
		$accordion_content.removeAttr("aria-hidden");
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);

/*-------------------------------------------
	Dialog
-------------------------------------------*/

Site.modules.Dialog = (function($, Site) {

	var $dialog_wrap,
	$dialog_document,
	$dialog_trigger,
	$dialog_triggered,
	dialog_target,
	$dialog_close;

	function init() {
		$dialog_wrap = $(".js-dialog-wrapper");
		if ($dialog_wrap.length) {
			bindUI();
		}
	}

	function bindUI() {
		dialog_class = $dialog_wrap.data("dialog-class");
		$dialog_document = $dialog_wrap.find(".js-dialog-document");
		$dialog_trigger = $(".js-dialog-trigger");
		$dialog_close = $(".js-dialog-close");
		$dialog_trigger.on("click", onTriggerClick);
		$dialog_close.on("click", onCloseClick)
			.on("keydown", onCloseKeydown);
		$dialog_document.on("keydown", onDocumentKeydown)
			.on("keyup", onDocumentKeyup);
		$(document).on("click touchstart", onDocumentClick);
		addAccessibility();
	}

	function addAccessibility() {
		$dialog_wrap.wrapInner("<dialog class='js-dialog' tabindex='0' role='dialog'></dialog>");
		$dialog_document.attr("tabindex", "0")
			.attr("role", "document");
		$(".js-dialog").each(function() {
			var label = $(this).closest(".js-dialog-wrapper").data("label");
			$(this).attr("aria-label", label);
		});
	}

	function removeAccessibility() {
		$(".js-dialog").contents().unwrap();
		$dialog_document.removeAttr("tabindex")
			.removeAttr("role");
	}

	function onTriggerClick(e) {
		$dialog_triggered = $(this);
		dialog_target = $dialog_triggered.data("target");
		event.preventDefault();
		$("html, body").addClass("dialog_open");
		$("#" + dialog_target)
			.find(".js-dialog")
			.attr("open", "true")
			.addClass("dialog_open")
			.find(".js-dialog-document")
			.focus();
	}

	function onCloseClick(e) {
		$("html, body").removeClass("dialog_open");
		$("#" + dialog_target)
			.find(".js-dialog")
			.removeAttr("open")
			.removeClass("dialog_open");
		$dialog_triggered.focus();
	}

	function onCloseKeydown(e) {
		if(e.keyCode === 9) { // tab
			if(!(e.shiftKey)) {
				e.preventDefault();
				$("#" + dialog_target)
					.find(".js-dialog-document")
					.focus();
			}
		}
	}

	function onDocumentKeydown(e) {
		if ($dialog_document.is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
					e.preventDefault();
					$("#" + dialog_target)
						.find(".js-dialog-close")
						.focus();
				}
			}
		}
	}

	function onDocumentKeyup(e) {
		if (e.keyCode === 27) { // escape
			onCloseClick();
		}
	}

	function onDocumentClick(e) {
		if (!($(event.target).closest(".js-dialog").length || $(event.target).closest(".js-dialog-trigger").length) && $("body").hasClass("dialog_open")) {
			onCloseClick();
		}
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);

/*-------------------------------------------
	Tabs
-------------------------------------------*/

Site.modules.Tabs = (function($, Site) {

	var $tabs,
	$tab_list,
	$tab,
	tab_length,
	$tab_trigger,
	$tab_panel;

	function init() {
		$tabs = $(".js-tabs");

		if ($tabs.length) {
			bindUI();
		}
	}

	function bindUI() {
		$tab_list = $tabs.find(".js-tab-list");
		$tab_item = $tabs.find(".js-tab");
		tab_length = $tab_item.length;
		$tab_trigger = $tabs.find(".js-tab-trigger");
		$tab_panel = $tabs.find(".js-tab-panel");

		addAccessibility();
		$tab_trigger.on("activate.swap", onTriggerActivate)
			.on("deactivate.swap", onTriggerDeactivate);
		$(document).on("keydown", onKeyDown);
	}

	function addAccessibility() {
		$tab_list.attr("role", "tablist");
		$tab_item.attr("role", "none presentation");
		$tab_trigger.attr("role", "tab")
			.attr("aria-selected", "false")
			.attr("tabindex", "-1");
		$tab_panel.attr("role", "tabpanel")
			.attr("tabindex", "-1")
			.attr("aria-hidden", "true")
			.attr("hidden", "");

		$tab_item.each(function() {
			var tab_index = $(this).index() + 1;
			$(this).find(".js-tab-trigger")
				.attr("aria-controls", "js-tab-panel-" + tab_index);
		});

		$tab_panel.each(function() {
			var tab_index = $(this).index() + 1;

			$(this).attr("aria-labelledby", "js-tab-trigger-" + tab_index);
		});

		$tabs.each(function() {
			$(this).find(".js-tab:eq(0)")
				.find(".js-tab-trigger")
				.attr("aria-selected", "true")
				.removeAttr("tabindex");
			$(this).find(".js-tab-panel:eq(0)")
				.attr("aria-hidden", "false")
				.removeAttr("hidden");
		});
	}

	function removeAccessibility() {
		$tab_list.removeAttr("role");
		$tab_item.removeAttr("role");
		$tab_trigger.removeAttr("role")
			.removeAttr("aria-selected")
			.removeAttr("tabindex")
			.removeAttr("aria-controls");
		$tab_panel.removeAttr("role")
			.removeAttr("tabindex")
			.removeAttr("aria-hidden")
			.removeAttr("hidden")
			.removeAttr("aria-labelledby");
	}

	function onTriggerActivate() {
		var tab_target = $(this).data("swap-target");

		$(this).attr("aria-selected", "true")
			.removeAttr("tabindex");
		Site.modules.Page.ariaShow($tabs.find(tab_target));
	}

	function onTriggerDeactivate() {
		var tab_target = $(this).data("swap-target");

		$(this).attr("aria-selected", "false")
			.attr("tabindex", "-1");
		Site.modules.Page.ariaHide($tabs.find(tab_target));
	}

	function onKeyDown(e) {
		var tab_index = $(".js-tab-trigger:focus").closest(".js-tab").index();
		var $tabs_active = $(".js-tab-trigger:focus").closest(".js-tabs");

		if (tab_index >= 0) {
			if(e.keyCode === 37) { // left
				if (tab_index > 0) {
					$tabs_active.find(".js-tab:eq(" + (tab_index - 1) + ")")
						.find(".js-tab-trigger")
						.focus()
						.swap("activate");
				}
			} else if(e.keyCode === 39) { // right
				if (tab_index < (tab_length - 1)) {
					$tabs_active.find(".js-tab:eq(" + (tab_index + 1) + ")")
						.find(".js-tab-trigger")
						.focus()
						.swap("activate");
				}
			}
		}

		if(e.keyCode === 40) { // down
			$tabs_active = $(".js-tab-trigger:focus").closest(".js-tabs");
			var active_tab = $tabs_active.find(".js-tab-trigger.fs-swap-active").data("swap-target");
			$tabs_active.find(active_tab).focus();
		}
	}

	Site.onInit.push(init);

	return {
		addAccessibility: addAccessibility,
		removeAccessibility: removeAccessibility
	};

})(jQuery, Site);

/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function($, Site) {

	var prev_icon = "caret_left";
	var next_icon = "caret_right";
	var lightboxOptions = {
		theme: "fs-light",
		videoWidth: 1000,
		labels: {
			close: "<span class='fs-lightbox-icon-close'>" + Site.icon("close") + "</span>",
			previous: "<span class='fs-lightbox-icon-previous'>" + Site.icon(prev_icon) + "</span>",
			count: "<span class='fs-lightbox-meta-divider'></span>",
			next: "<span class='fs-lightbox-icon-next'>" + Site.icon(next_icon) + "</span>"
		}
	};
	var $fixed_header; // set to fixed header element
	var fixed_header_height = null;

	function init() {
		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");
		}).background();
		$(".js-carousel").carousel();
		$(".js-checkbox, .js-radio").checkbox();
		$(".js-dropdown").dropdown();
		$(".js-equalize").equalize();
		$(".js-lightbox").lightbox(lightboxOptions);
		$(".js-swap").swap();

		$(".js-mobile-sidebar-handle")
			.on("activate.swap", onSidebarSwapActivate)
			.on("deactivate.swap", onSidebarSwapDeactivate);
		$(".js-main-nav-toggle")
			.on("activate.swap", onMainSwapActivate)
			.on("deactivate.swap", onMainSwapDeactivate);
		$(".js-sub-nav-handle")
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);

		fixIEsvg();
		bindGenericUI();
		responsiveVideo();
		tableOverflow();
		ariaHide($(".js-mobile-sidebar, .js-main-nav-children"));
		$(".main_nav_link").attr("aria-expanded", "false");
		$(".js-sub-nav-handle")
			.attr("aria-expanded", "false")
			.attr("aria-haspopup", "true");

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				ariaShow($(".js-sub-nav-list"));
				$(".js-sub-nav-handle")
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				ariaHide($(".js-sub-nav-list"));
				$(".js-sub-nav-handle")
					.attr("aria-expanded", "false")
					.attr("aria-haspopup", "true");
			}
		});

		$(window).on("load", onPageLoad);
		$(document).on("click touchstart", onDocumentClick);

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);
	}

	function fixIEsvg() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$.get(STATIC_ROOT + "images/icons.svg", function(data) {
				var div = document.createElement("div");
				$(div).hide();
				div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
				document.body.insertBefore(div, document.body.childNodes[0]);

				$("svg use").each(function() {
					var parts = $(this).attr("xlink:href").split("#");
					$(this).attr("xlink:href", "#" + parts[1]);
				});
			});
		}
	}

	function scroll() {}

	function resize() {
		tableOverflow();
		fixedHeader($fixed_header);
	}

	function respond() {}

	function onPageLoad() {
		$("body").removeClass("preload");
		$(window).trigger("resize");
		
		if (window.location.hash) {
			var id = window.location.hash;
			scrollToElement(id);
		}
	}

	function onDocumentClick() {
		if ($("body").hasClass("fs-mobile-lock")) {
			if (!$(event.target).closest(".js-mobile-sidebar").length) {
				$(".js-mobile-sidebar-handle").swap("deactivate");
			}
		}
	}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
		id = $target.attr("href");

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$("html, body").animate({
			scrollTop: top - fixed_header_height
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
			activeClass = "js-toggle-active";

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function bindGenericUI() {
		$(".js-main-nav-lg")
			.find("a")
			.hover(function() {
				$(this).attr("aria-expanded", "true");
				ariaShow(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
			}, function() {
				$(this).attr("aria-expanded", "false");
				ariaHide(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
		});

		carouselPagination($(".js-carousel"));

		createSiteButtons($(".js-mobile-sidebar-handle"));

		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");

		$(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
	}

	function responsiveVideo() {
		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			if ($(this).find("table").outerWidth() > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}

	function onSidebarSwapActivate() {
		$("body").addClass("fs-navigation-lock fs-mobile-lock");
		ariaShow($(".js-mobile-sidebar"));
		$(".js-mobile-sidebar").focus();
	}

	function onSidebarSwapDeactivate() {
		$("body").removeClass("fs-navigation-lock fs-mobile-lock");
		ariaHide($(".js-mobile-sidebar"));
		$(".js-mobile-sidebar-handle").focus();
	}

	function onMainSwapActivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "true");
		ariaShow(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
			);
	}

	function onMainSwapDeactivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "false");
		ariaHide(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
		);
	}

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
			.find(".sub_nav_handle_label")
			.text("Close");
		ariaShow($(".js-sub-nav-list"));
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));
		ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapEnable() {
		ariaHide($(".js-sub-nav-list"));
	}

	function onSubSwapDisable() {
		ariaShow($(".js-sub-nav-list"));
	}

	function ariaHide($element) {
		$element.attr("aria-hidden", "true")
			.attr("hidden", "");
	}

	function ariaShow($element) {
		$element.attr("aria-hidden", "false")
			.removeAttr("hidden");
	}

	function carouselPagination($element) {
		$element.each(function() {
			var $previous_button = $(this).find(".fs-carousel-control_previous");
			var previous_text = $previous_button.text();
			var $next_button = $(this).find(".fs-carousel-control_next");
			var next_text = $next_button.text();

			$previous_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(prev_icon) + "</span><span class='fs-carousel-control-label'>" + previous_text + "</span>");
			$next_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(next_icon) + "</span><span class='fs-carousel-control-label'>" + next_text + "</span>");
		});
	}

	function fixedHeader($header) {
		if (typeof $fixed_header !== "undefined") {
			fixed_header_height = $header.outerHeight();
			bt_bar_height = $("#bigtree_bar").outerHeight();
			wp_bar_height = $("#wpadminbar").outerHeight();

			if (bt_bar_height > 0) {
				$header.css("top", bt_bar_height);
				fixed_header_height = fixed_header_height + bt_bar_height;
			} else if (wp_bar_height > 0) {
				$header.css("top", wp_bar_height);
				fixed_header_height = fixed_header_height + wp_bar_height;
			}
		}
	}

	function createSiteButtons($element) {
		$this = $element;
		$this.each(function() {
			var attributes = $this.prop("attributes");
			$this.swap("destroy")
				.wrapInner("<button />");
			$.each(attributes, function() {
				$this.find("button")
					.attr(this.name, this.value);
			});
			$this.find("button")
				.unwrap()
				.removeAttr("href")
				.swap()
				.on("activate.swap", onSidebarSwapActivate)
				.on("deactivate.swap", onSidebarSwapDeactivate);
		});
	}

	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar";

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";

		// add innerdiv
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	}

	Site.onInit.push(init);

	return {
		ariaHide: ariaHide,
		ariaShow: ariaShow,
		getScrollbarWidth: getScrollbarWidth
	};

})(jQuery, Site);

/*-------------------------------------------
	Alert
-------------------------------------------*/

Site.modules.Alert = (function($, Site) {

	var $alert,
	$alert_close,
	alert_time,
	cookie_name;

	function init() {
		$alert = $(".js-alert");
		if ($alert.length) {
			bindUI();
		}
	}

	function bindUI() {
		$alert_close = $(".alert_close");
		alert_time = $alert.data("time");
		cookie_name = "fs-alert-cookie";

		if ($.cookie(cookie_name) === alert_time) {
			$alert_close.swap("activate");
			hideAlert();
		}

		$alert_close.on("activate.swap", function() {
			setCookie();
			hideAlert();
		});
	}

	function setCookie() {
		$.cookie(cookie_name, alert_time);
	}

	function hideAlert() {
		Site.modules.Page.ariaHide($alert);
		$alert_close.blur();
		$(window).trigger("resize");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
