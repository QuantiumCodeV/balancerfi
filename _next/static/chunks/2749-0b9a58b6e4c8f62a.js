!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2050d529-dbe7-42fe-88e3-286d34ea3f5c",e._sentryDebugIdIdentifier="sentry-dbid-2050d529-dbe7-42fe-88e3-286d34ea3f5c")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2749],{3181:function(e,t,r){r.d(t,{g:function(){return a}});var n=r(19431),o=r(27957),i=r(40558),a=(0,o.forwardRef)((e,t)=>(0,i.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},71697:function(e,t,r){r.d(t,{$B:function(){return l},Dq:function(){return o},Ke:function(){return i},mv:function(){return s}});var n=(e,t)=>({var:e,varRef:t?"var(".concat(e,", ").concat(t,")"):"var(".concat(e,")")}),o={arrowShadowColor:n("--popper-arrow-shadow-color"),arrowSize:n("--popper-arrow-size","8px"),arrowSizeHalf:n("--popper-arrow-size-half"),arrowBg:n("--popper-arrow-bg"),transformOrigin:n("--popper-transform-origin"),arrowOffset:n("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0}var a={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},s=e=>a[e],f={scroll:!0,resize:!0};function l(e){return"object"==typeof e?{enabled:!0,options:{...f,...e}}:{enabled:e,options:f}}},45075:function(e,t,r){r.d(t,{D:function(){return eD}});var n,o,i,a,s,f=r(71697),l={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{let{state:t}=e;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:e=>{let{state:t}=e;return()=>{let e=t.elements.reference;t.elements.popper.style.width="".concat(e.offsetWidth,"px")}}},c={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{let{state:t}=e;p(t)},effect:e=>{let{state:t}=e;return()=>{p(t)}}},p=e=>{e.elements.popper.style.setProperty(f.Dq.transformOrigin.var,(0,f.mv)(e.placement))},u={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;d(t)}},d=e=>{var t;if(!e.placement)return;let r=h(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:f.Dq.arrowSize.varRef,height:f.Dq.arrowSize.varRef,zIndex:-1});let t={[f.Dq.arrowSizeHalf.var]:"calc(".concat(f.Dq.arrowSize.varRef," / 2 - 1px)"),[f.Dq.arrowOffset.var]:"calc(".concat(f.Dq.arrowSizeHalf.varRef," * -1)")};for(let r in t)e.elements.arrow.style.setProperty(r,t[r])}},h=e=>e.startsWith("top")?{property:"bottom",value:f.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:f.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:f.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:f.Dq.arrowOffset.varRef}:void 0,m={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{let{state:t}=e;v(t)},effect:e=>{let{state:t}=e;return()=>{v(t)}}},v=e=>{if(!e.elements.arrow)return;let t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;let r=(0,f.Ke)(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:f.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},g={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},b={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"},y=r(57229);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=w(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=w(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function D(e){if("undefined"==typeof ShadowRoot)return!1;var t=w(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var E=Math.max,j=Math.min,k=Math.round;function W(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function R(){return!/^((?!chrome|android).)*safari/i.test(W())}function A(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&k(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&k(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!R()&&r,f=(n.left+(s&&a?a.offsetLeft:0))/o,l=(n.top+(s&&a?a.offsetTop:0))/i,c=n.width/o,p=n.height/i;return{width:c,height:p,top:l,right:f+c,bottom:l+p,left:f,x:f,y:l}}function q(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return A(L(e)).left+q(e).scrollLeft}function S(e){return w(e).getComputedStyle(e)}function B(e){var t=S(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function H(e){var t=A(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function M(e){return"html"===C(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||L(e)}function z(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(C(t))>=0?t.ownerDocument.body:O(t)&&B(t)?t:e(M(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=w(n),a=o?[i].concat(i.visualViewport||[],B(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(z(M(a)))}function T(e){return O(e)&&"fixed"!==S(e).position?e.offsetParent:null}function I(e){for(var t=w(e),r=T(e);r&&["table","td","th"].indexOf(C(r))>=0&&"static"===S(r).position;)r=T(r);return r&&("html"===C(r)||"body"===C(r)&&"static"===S(r).position)?t:r||function(e){var t=/firefox/i.test(W());if(/Trident/i.test(W())&&O(e)&&"fixed"===S(e).position)return null;var r=M(e);for(D(r)&&(r=r.host);O(r)&&0>["html","body"].indexOf(C(r));){var n=S(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var V="bottom",_="right",N="left",U="auto",F=["top",V,_,N],K="start",X="viewport",Y="popper",$=F.reduce(function(e,t){return e.concat([t+"-"+K,t+"-end"])},[]),G=[].concat(F,[U]).reduce(function(e,t){return e.concat([t,t+"-"+K,t+"-end"])},[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ee={passive:!0};function et(e){return e.split("-")[0]}function er(e){return e.split("-")[1]}function en(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eo(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?et(o):null,a=o?er(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case"top":t={x:s,y:r.y-n.height};break;case V:t={x:s,y:r.y+r.height};break;case _:t={x:r.x+r.width,y:f};break;case N:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var l=i?en(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case K:t[l]=t[l]-(r[c]/2-n[c]/2);break;case"end":t[l]=t[l]+(r[c]/2-n[c]/2)}}return t}var ei={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ea(e){var t,r,n,o,i,a,s,f=e.popper,l=e.popperRect,c=e.placement,p=e.variation,u=e.offsets,d=e.position,h=e.gpuAcceleration,m=e.adaptive,v=e.roundOffsets,g=e.isFixed,b=u.x,y=void 0===b?0:b,x=u.y,O=void 0===x?0:x,D="function"==typeof v?v({x:y,y:O}):{x:y,y:O};y=D.x,O=D.y;var E=u.hasOwnProperty("x"),j=u.hasOwnProperty("y"),W=N,R="top",A=window;if(m){var q=I(f),C="clientHeight",P="clientWidth";q===w(f)&&"static"!==S(q=L(f)).position&&"absolute"===d&&(C="scrollHeight",P="scrollWidth"),("top"===c||(c===N||c===_)&&"end"===p)&&(R=V,O-=(g&&q===A&&A.visualViewport?A.visualViewport.height:q[C])-l.height,O*=h?1:-1),(c===N||("top"===c||c===V)&&"end"===p)&&(W=_,y-=(g&&q===A&&A.visualViewport?A.visualViewport.width:q[P])-l.width,y*=h?1:-1)}var B=Object.assign({position:d},m&&ei),H=!0===v?(t={x:y,y:O},r=w(f),n=t.x,o=t.y,{x:k(n*(i=r.devicePixelRatio||1))/i||0,y:k(o*i)/i||0}):{x:y,y:O};return(y=H.x,O=H.y,h)?Object.assign({},B,((s={})[R]=j?"0":"",s[W]=E?"0":"",s.transform=1>=(A.devicePixelRatio||1)?"translate("+y+"px, "+O+"px)":"translate3d("+y+"px, "+O+"px, 0)",s)):Object.assign({},B,((a={})[R]=j?O+"px":"",a[W]=E?y+"px":"",a.transform="",a))}var es={left:"right",right:"left",bottom:"top",top:"bottom"};function ef(e){return e.replace(/left|right|bottom|top/g,function(e){return es[e]})}var el={start:"end",end:"start"};function ec(e){return e.replace(/start|end/g,function(e){return el[e]})}function ep(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&D(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function eu(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ed(e,t,r){var n,o,i,a,s,f,l,c,p,u;return t===X?eu(function(e,t){var r=w(e),n=L(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var l=R();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+P(e),y:f}}(e,r)):x(t)?((n=A(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):eu((o=L(e),a=L(o),s=q(o),f=null==(i=o.ownerDocument)?void 0:i.body,l=E(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),c=E(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),p=-s.scrollLeft+P(o),u=-s.scrollTop,"rtl"===S(f||a).direction&&(p+=E(a.clientWidth,f?f.clientWidth:0)-l),{width:l,height:c,x:p,y:u}))}function eh(){return{top:0,right:0,bottom:0,left:0}}function em(e){return Object.assign({},eh(),e)}function ev(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function eg(e,t){void 0===t&&(t={});var r,n,o,i,a,s,f,l,c=t,p=c.placement,u=void 0===p?e.placement:p,d=c.strategy,h=void 0===d?e.strategy:d,m=c.boundary,v=c.rootBoundary,g=c.elementContext,b=void 0===g?Y:g,y=c.altBoundary,w=c.padding,D=void 0===w?0:w,k=em("number"!=typeof D?D:ev(D,F)),W=e.rects.popper,R=e.elements[void 0!==y&&y?b===Y?"reference":Y:b],q=(r=x(R)?R:R.contextElement||L(e.elements.popper),n=void 0===m?"clippingParents":m,o=void 0===v?X:v,f=(s=[].concat("clippingParents"===n?(i=z(M(r)),x(a=["absolute","fixed"].indexOf(S(r).position)>=0&&O(r)?I(r):r)?i.filter(function(e){return x(e)&&ep(e,a)&&"body"!==C(e)}):[]):[].concat(n),[o]))[0],(l=s.reduce(function(e,t){var n=ed(r,t,h);return e.top=E(n.top,e.top),e.right=j(n.right,e.right),e.bottom=j(n.bottom,e.bottom),e.left=E(n.left,e.left),e},ed(r,f,h))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),P=A(e.elements.reference),B=eo({reference:P,element:W,strategy:"absolute",placement:u}),H=eu(Object.assign({},W,B)),T=b===Y?H:P,N={top:q.top-T.top+k.top,bottom:T.bottom-q.bottom+k.bottom,left:q.left-T.left+k.left,right:T.right-q.right+k.right},U=e.modifiersData.offset;if(b===Y&&U){var K=U[u];Object.keys(N).forEach(function(e){var t=[_,V].indexOf(e)>=0?1:-1,r=["top",V].indexOf(e)>=0?"y":"x";N[e]+=K[r]*t})}return N}function eb(e,t,r){return E(e,j(t,r))}function ey(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ew(e){return["top",_,V,N].some(function(t){return e[t]>=0})}var ex=(i=void 0===(o=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,f=w(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",r.update,ee)}),s&&f.addEventListener("resize",r.update,ee),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",r.update,ee)}),s&&f.removeEventListener("resize",r.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=eo({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,i=r.roundOffsets,a=void 0===i||i,s={placement:et(t.placement),variation:er(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ea(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ea(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];O(o)&&C(o)&&(Object.assign(o.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});O(n)&&C(n)&&(Object.assign(n.style,i),Object.keys(o).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=G.reduce(function(e,r){var n,o,a,s,f,l;return e[r]=(n=t.rects,a=[N,"top"].indexOf(o=et(r))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},n,{placement:r})):i)[0],l=s[1],f=f||0,l=(l||0)*a,[N,_].indexOf(o)>=0?{x:l,y:f}:{x:f,y:l}),e},{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,l=r.padding,c=r.boundary,p=r.rootBoundary,u=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,v=t.options.placement,g=et(v)===v,b=f||(g||!h?[ef(v)]:function(e){if(et(e)===U)return[];var t=ef(e);return[ec(e),t,ec(t)]}(v)),y=[v].concat(b).reduce(function(e,r){var n,o,i,a,s,f,u,d,v,g,b,y;return e.concat(et(r)===U?(o=(n={placement:r,boundary:c,rootBoundary:p,padding:l,flipVariations:h,allowedAutoPlacements:m}).placement,i=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,d=void 0===(u=n.allowedAutoPlacements)?G:u,0===(b=(g=(v=er(o))?f?$:$.filter(function(e){return er(e)===v}):F).filter(function(e){return d.indexOf(e)>=0})).length&&(b=g),Object.keys(y=b.reduce(function(e,r){return e[r]=eg(t,{placement:r,boundary:i,rootBoundary:a,padding:s})[et(r)],e},{})).sort(function(e,t){return y[e]-y[t]})):r)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,D=!0,E=y[0],j=0;j<y.length;j++){var k=y[j],W=et(k),R=er(k)===K,A=["top",V].indexOf(W)>=0,q=A?"width":"height",C=eg(t,{placement:k,boundary:c,rootBoundary:p,altBoundary:u,padding:l}),L=A?R?_:N:R?V:"top";w[q]>x[q]&&(L=ef(L));var P=ef(L),S=[];if(i&&S.push(C[W]<=0),s&&S.push(C[L]<=0,C[P]<=0),S.every(function(e){return e})){E=k,D=!1;break}O.set(k,S)}if(D)for(var B=h?3:1,H=function(e){var t=y.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},M=B;M>0&&"break"!==H(M);M--);t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=r.altAxis,a=r.boundary,s=r.rootBoundary,f=r.altBoundary,l=r.padding,c=r.tether,p=void 0===c||c,u=r.tetherOffset,d=void 0===u?0:u,h=eg(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:f}),m=et(t.placement),v=er(t.placement),g=!v,b=en(m),y="x"===b?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,D="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,k="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(w){if(void 0===o||o){var A,q="y"===b?"top":N,C="y"===b?V:_,L="y"===b?"height":"width",P=w[b],S=P+h[q],B=P-h[C],M=p?-O[L]/2:0,z=v===K?x[L]:O[L],T=v===K?-O[L]:-x[L],U=t.elements.arrow,F=p&&U?H(U):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eh(),Y=X[q],$=X[C],G=eb(0,x[L],F[L]),J=g?x[L]/2-M-G-Y-k.mainAxis:z-G-Y-k.mainAxis,Q=g?-x[L]/2+M+G+$+k.mainAxis:T+G+$+k.mainAxis,Z=t.elements.arrow&&I(t.elements.arrow),ee=Z?"y"===b?Z.clientTop||0:Z.clientLeft||0:0,eo=null!=(A=null==W?void 0:W[b])?A:0,ei=eb(p?j(S,P+J-eo-ee):S,P,p?E(B,P+Q-eo):B);w[b]=ei,R[b]=ei-P}if(void 0!==i&&i){var ea,es,ef="x"===b?"top":N,el="x"===b?V:_,ec=w[y],ep="y"===y?"height":"width",eu=ec+h[ef],ed=ec-h[el],em=-1!==["top",N].indexOf(m),ev=null!=(es=null==W?void 0:W[y])?es:0,ey=em?eu:ec-x[ep]-O[ep]-ev+k.altAxis,ew=em?ec+x[ep]+O[ep]-ev-k.altAxis:ed,ex=p&&em?(ea=eb(ey,ec,ew))>ew?ew:ea:eb(p?ey:eu,ec,p?ew:ed);w[y]=ex,R[y]=ex-ec}t.modifiersData[n]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,i=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,f=et(n.placement),l=en(f),c=[N,_].indexOf(f)>=0?"height":"width";if(a&&s){var p=em("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:ev(t,F)),u=H(a),d="y"===l?"top":N,h="y"===l?V:_,m=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],v=s[l]-n.rects.reference[l],g=I(a),b=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,y=p[d],w=b-u[c]-p[h],x=b/2-u[c]/2+(m/2-v/2),O=eb(y,x,w);n.modifiersData[o]=((r={})[l]=O,r.centerOffset=O-x,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&ep(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eg(t,{elementContext:"reference"}),s=eg(t,{altBoundary:!0}),f=ey(a,n),l=ey(s,o,i),c=ew(f),p=ew(l);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}).defaultModifiers)?[]:o,s=void 0===(a=n.defaultOptions)?Q:a,function(e,t,r){void 0===r&&(r=s);var n,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],l=!1,c={state:a,setOptions:function(r){var n,o,l,u,d,h="function"==typeof r?r(a.options):r;p(),a.options=Object.assign({},s,a.options,h),a.scrollParents={reference:x(e)?z(e):e.contextElement?z(e.contextElement):[],popper:z(t)};var m=(o=Object.keys(n=[].concat(i,a.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),l=new Map,u=new Set,d=[],o.forEach(function(e){l.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var r=l.get(t);r&&e(r)}}),d.push(t)}(e)}),J.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=m.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var o=n({state:a,name:t,instance:c,options:void 0===r?{}:r});f.push(o||function(){})}}),c.update()},forceUpdate:function(){if(!l){var e,t,r,n,o,i,s,f,p,u,d,h,m=a.elements,v=m.reference,g=m.popper;if(Z(v,g)){a.rects={reference:(t=I(g),r="fixed"===a.options.strategy,n=O(t),f=O(t)&&(i=k((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=k(o.height)/t.offsetHeight||1,1!==i||1!==s),p=L(t),u=A(v,f,r),d={scrollLeft:0,scrollTop:0},h={x:0,y:0},(n||!n&&!r)&&(("body"!==C(t)||B(p))&&(d=(e=t)!==w(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:q(e)),O(t)?(h=A(t,!0),h.x+=t.clientLeft,h.y+=t.clientTop):p&&(h.x=P(p))),{x:u.left+d.scrollLeft-h.x,y:u.top+d.scrollTop-h.y,width:u.width,height:u.height}),popper:H(g)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var b=0;b<a.orderedModifiers.length;b++){if(!0===a.reset){a.reset=!1,b=-1;continue}var y=a.orderedModifiers[b],x=y.fn,D=y.options,E=void 0===D?{}:D,j=y.name;"function"==typeof x&&(a=x({state:a,options:E,name:j,instance:c})||a)}}}},update:(n=function(){return new Promise(function(e){c.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(n())})})),o}),destroy:function(){p(),l=!0}};if(!Z(e,t))return c;function p(){f.forEach(function(e){return e()}),f=[]}return c.setOptions(r).then(function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)}),c}),eO=r(53247);function eD(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:i=8,eventListeners:a=!0,offset:s,gutter:p=8,flip:d=!0,boundary:h="clippingParents",preventOverflow:v=!0,matchWidth:w,direction:x="ltr"}=e,O=(0,eO.useRef)(null),D=(0,eO.useRef)(null),E=(0,eO.useRef)(null),j=function(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",o=(null==(t=g[e])?void 0:t[n])||e;return"ltr"===n?o:null!=(r=b[e])?r:o}(n,x),k=(0,eO.useRef)(()=>{}),W=(0,eO.useCallback)(()=>{var e;t&&O.current&&D.current&&(null==(e=k.current)||e.call(k),E.current=ex(O.current,D.current,{placement:j,modifiers:[m,u,c,{...l,enabled:!!w},{name:"eventListeners",...(0,f.$B)(a)},{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=s?s:[0,p]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!v,options:{boundary:h}},...null!=r?r:[]],strategy:o}),E.current.forceUpdate(),k.current=E.current.destroy)},[j,t,r,w,a,i,s,p,d,v,h,o]);(0,eO.useEffect)(()=>()=>{var e;O.current||D.current||(null==(e=E.current)||e.destroy(),E.current=null)},[]);let R=(0,eO.useCallback)(e=>{O.current=e,W()},[W]),A=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(R,t)}},[R]),q=(0,eO.useCallback)(e=>{D.current=e,W()},[W]),C=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(q,t),style:{...e.style,position:o,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}}},[o,q,w]),L=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{size:r,shadowColor:n,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:function(e){let{size:t,shadowColor:r,bg:n,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}(e)}},[]),P=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-popper-arrow-inner":""}},[]);return{update(){var e;null==(e=E.current)||e.update()},forceUpdate(){var e;null==(e=E.current)||e.forceUpdate()},transformOrigin:f.Dq.transformOrigin.varRef,referenceRef:R,popperRef:q,getPopperProps:C,getArrowProps:L,getArrowInnerProps:P,getReferenceProps:A}}},73747:function(e,t,r){r.d(t,{W:function(){return o}});var n=r(53247);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useCallback)(function(){for(var e,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return null==(e=r.current)?void 0:e.call(r,...n)},t)}},48196:function(e,t,r){r.d(t,{q:function(){return i}});var n=r(73747),o=r(53247);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onClose:t,onOpen:r,isOpen:i,id:a}=e,s=(0,n.W)(r),f=(0,n.W)(t),[l,c]=(0,o.useState)(e.defaultIsOpen||!1),p=void 0!==i?i:l,u=void 0!==i,d=(0,o.useId)(),h=null!=a?a:"disclosure-".concat(d),m=(0,o.useCallback)(()=>{u||c(!1),null==f||f()},[u,f]),v=(0,o.useCallback)(()=>{u||c(!0),null==s||s()},[u,s]),g=(0,o.useCallback)(()=>{p?m():v()},[p,v,m]);return{isOpen:p,onOpen:v,onClose:m,onToggle:g,isControlled:u,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":p,"aria-controls":h,onClick(t){var r;null==(r=e.onClick)||r.call(e,t),g()}}},getDisclosureProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!p,id:h}}}}},73094:function(e,t,r){r.d(t,{O:function(){return i}});var n=r(53247),o=r(73747);function i(e,t,r,i){let a=(0,o.W)(r);return(0,n.useEffect)(()=>{let n="function"==typeof e?e():null!=e?e:document;if(r&&n)return n.addEventListener(t,a,i),()=>{n.removeEventListener(t,a,i)}},[t,e,i,a,r]),()=>{let r="function"==typeof e?e():null!=e?e:document;null==r||r.removeEventListener(t,a,i)}}}}]);