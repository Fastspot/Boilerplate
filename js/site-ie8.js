/*! 
 * site-title v0.0.1 [2016-11-11] 
 * Site description. 
 * Fastspot 
 */

window.matchMedia=window.matchMedia||function(a,b){var c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f);var g,h=function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),bool=42===f.offsetWidth,c.removeChild(e),{matches:bool,media:a}},i=function(){var b,d=c.body,e=!1;return f.style.cssText="position:absolute;font-size:1em;width:1em",d||(d=e=a.createElement("body"),d.style.background="none"),d.appendChild(f),c.insertBefore(d,c.firstChild),e?c.removeChild(d):d.removeChild(f),b=g=parseFloat(f.offsetWidth)},j=h("(min-width: 0px)").matches;return function(b){if(j)return h(b);if(a.body){var c=b.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),d=b.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),e=null===c,f=null===d,k=a.body.offsetWidth,l="em";return c&&(c=parseFloat(c)*(c.indexOf(l)>-1?g||i():1)),d&&(d=parseFloat(d)*(d.indexOf(l)>-1?g||i():1)),bool=(!e||!f)&&(e||k>=c)&&(f||k<=d),{matches:bool,media:b}}return{matches:!1,media:{}}}}(document),function(){if("undefined"!=typeof window.matchMedia("")){var a=window.matchMedia;window.matchMedia=function(b){var c,d=a(b),e=[],f=!1,g=function(){var c=a(b),g=c.matches&&!f,h=!c.matches&&f;if(g||h)for(var i=0,j=e.length;i<j;i++)e[i].call(d,c);f=c.matches};return d.addListener=function(a){e.push(a),c||(c=setInterval(g,1e3))},d.removeListener=function(a){for(var b=0,d=e.length;b<d;b++)e[b]===a&&e.splice(b,1);!e.length&&c&&clearInterval(c)},d}}}();
//# sourceMappingURL=site-ie8.js.map