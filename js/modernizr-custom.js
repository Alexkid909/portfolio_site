/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransforms3d-csstransitions-setclasses !*/
!function(e,n,t){function s(e,n){return typeof e===n}function r(){var e,n,t,r,i,o,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function i(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}function o(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=o(x?"svg":"body"),e.fake=!0),e}function f(e,t,s,r){var i,f,l,u,d="modernizr",p=o("div"),c=a();if(parseInt(s,10))for(;s--;)l=o("div"),l.id=r?r[s]:d+(s+1),p.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),f=t(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=u,S.offsetHeight):p.parentNode.removeChild(p),!!f}function l(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var i in e)if(e[i]in n)return t===!1?e[i]:(r=n[e[i]],s(r,"function")?d(r,t||n):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,s){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(c(n[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+c(n[r])+":"+s+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,i){function a(){d&&(delete k.style,delete k.modElem)}if(i=s(i,"undefined")?!1:i,!s(r,"undefined")){var f=m(e,r);if(!s(f,"undefined"))return f}for(var d,p,c,h,v,g=["modernizr","tspan","samp"];!k.style&&g.length;)d=!0,k.modElem=o(g.shift()),k.style=k.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=k.style[h],l(h,"-")&&(h=u(h)),k.style[h]!==t){if(i||s(r,"undefined"))return a(),"pfx"==n?h:!0;try{k.style[h]=r}catch(y){}if(k.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(o+" ")+o).split(" ");return s(n,"string")||s(n,"undefined")?h(a,n,r,i):(a=(e+" "+E.join(o+" ")+o).split(" "),p(a,n,t))}function g(e,n,s){return v(e,t,t,n,s)}var y=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),_="CSS"in e&&"supports"in e.CSS,b="supportsCSS"in e;Modernizr.addTest("supports",_||b);var P=w.testStyles=f,T="Moz O ms Webkit",z=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=E;var N={elem:o("modernizr")};Modernizr._q.push(function(){delete N.elem});var k={style:N.elem.style};Modernizr._q.unshift(function(){delete k.style}),w.testAllProps=v,w.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in S.style)){var t,s="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(s+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0)),r(),i(y),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);