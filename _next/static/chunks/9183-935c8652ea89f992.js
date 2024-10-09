!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="804540b9-6264-489b-81c2-eb39b80649ba",e._sentryDebugIdIdentifier="sentry-dbid-804540b9-6264-489b-81c2-eb39b80649ba")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9183],{26770:function(e,n,t){t.d(n,{Y:function(){return r},v:function(){return u}});var[r,u]=(0,t(21062).createStylesContext)("Card")},68168:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(26770),u=t(63824),l=t(27957),a=t(24924),i=t(71011),o=t(51092),s=t(40558),c=(0,l.forwardRef)(function(e,n){let{className:t,children:l,direction:c="column",justify:f,align:d,...v}=(0,a.Lr)(e),b=(0,i.useMultiStyleConfig)("Card",e);return(0,s.jsx)(o.chakra.div,{ref:n,className:(0,u.cx)("chakra-card",t),__css:{display:"flex",flexDirection:c,justifyContent:f,alignItems:d,position:"relative",minWidth:0,wordWrap:"break-word",...b.container},...v,children:(0,s.jsx)(r.Y,{value:b,children:l})})})},33158:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(73747),u=t(80207),l=t(53247);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onChange:n,precision:t,defaultValue:a,value:c,step:f=1,min:d=Number.MIN_SAFE_INTEGER,max:v=Number.MAX_SAFE_INTEGER,keepWithinRange:b=!0}=e,m=(0,r.W)(n),[p,g]=(0,l.useState)(()=>{var e;return null==a?"":null!=(e=s(a,f,t))?e:""}),h=void 0!==c,k=h?c:p,y=o(i(k),f),x=null!=t?t:y,N=(0,l.useCallback)(e=>{e!==k&&(h||g(e.toString()),null==m||m(e.toString(),i(e)))},[m,h,k]),C=(0,l.useCallback)(e=>{let n=e;return b&&(n=(0,u.HU)(n,d,v)),(0,u.Zd)(n,x)},[x,b,v,d]),w=(0,l.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;N(C(""===k?i(e):i(k)+e))},[C,f,N,k]),S=(0,l.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;N(C(""===k?i(-e):i(k)-e))},[C,f,N,k]),_=(0,l.useCallback)(()=>{var e;N(null==a?"":null!=(e=s(a,f,t))?e:d)},[a,t,f,N,d]),I=(0,l.useCallback)(e=>{var n;N(null!=(n=s(e,f,x))?n:d)},[x,f,N,d]),A=i(k);return{isOutOfRange:A>v||A<d,isAtMax:A===v,isAtMin:A===d,precision:x,value:k,valueAsNumber:A,update:N,reset:_,increment:w,decrement:S,clamp:C,cast:I,setValue:g}}function i(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function o(e,n){return Math.max((0,u.vk)(n),(0,u.vk)(e))}function s(e,n,t){let r=i(e);if(Number.isNaN(r))return;let l=o(r,n);return(0,u.Zd)(r,null!=t?t:l)}},86282:function(e,n,t){t.d(n,{k:function(){return a}});var r=t(27957),u=t(51092),l=t(40558),a=(0,r.forwardRef)(function(e,n){let{direction:t,align:r,justify:a,wrap:i,basis:o,grow:s,shrink:c,...f}=e;return(0,l.jsx)(u.chakra.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:r,justifyContent:a,flexWrap:i,flexBasis:o,flexGrow:s,flexShrink:c},...f})});a.displayName="Flex"},99225:function(e,n,t){t.d(n,{Y_:function(){return w},WQ:function(){return S},Y2:function(){return y},zu:function(){return N},Fi:function(){return x},gA:function(){return g}});var r=t(8115),u=t(40558),l=e=>(0,u.jsx)(r.J,{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),a=e=>(0,u.jsx)(r.J,{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})}),i=t(87571),o=t(84414),s=t(18267),c=t(27957),f=t(71011),d=t(24924),v=t(51092),b=t(63824),m=t(53247),[p,g]=(0,s.k)({name:"NumberInputStylesContext",errorMessage:"useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<NumberInput />\" "}),[h,k]=(0,s.k)({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),y=(0,c.forwardRef)(function(e,n){let t=(0,f.useMultiStyleConfig)("NumberInput",e),r=(0,d.Lr)(e),l=(0,o.K)(r),{htmlProps:a,...s}=(0,i.M)(l),c=(0,m.useMemo)(()=>s,[s]);return(0,u.jsx)(h,{value:c,children:(0,u.jsx)(p,{value:t,children:(0,u.jsx)(v.chakra.div,{...a,ref:n,className:(0,b.cx)("chakra-numberinput",e.className),__css:{position:"relative",zIndex:0,...t.root}})})})});y.displayName="NumberInput";var x=(0,c.forwardRef)(function(e,n){let t=g();return(0,u.jsx)(v.chakra.div,{"aria-hidden":!0,ref:n,...e,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...t.stepperGroup}})});x.displayName="NumberInputStepper";var N=(0,c.forwardRef)(function(e,n){let{getInputProps:t}=k(),r=t(e,n),l=g();return(0,u.jsx)(v.chakra.input,{...r,className:(0,b.cx)("chakra-numberinput__field",e.className),__css:{width:"100%",...l.field}})});N.displayName="NumberInputField";var C=(0,v.chakra)("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),w=(0,c.forwardRef)(function(e,n){var t;let r=g(),{getDecrementButtonProps:a}=k(),i=a(e,n);return(0,u.jsx)(C,{...i,__css:r.stepper,children:null!=(t=e.children)?t:(0,u.jsx)(l,{})})});w.displayName="NumberDecrementStepper";var S=(0,c.forwardRef)(function(e,n){var t;let{getIncrementButtonProps:r}=k(),l=r(e,n),i=g();return(0,u.jsx)(C,{...l,__css:i.stepper,children:null!=(t=e.children)?t:(0,u.jsx)(a,{})})});S.displayName="NumberIncrementStepper"},87571:function(e,n,t){t.d(n,{M:function(){return b}});var r=t(53247);function u(e,n,t,u){(0,r.useEffect)(()=>{var r;if(!e.current||!u)return;let l=null!=(r=e.current.ownerDocument.defaultView)?r:window,a=Array.isArray(n)?n:[n],i=new l.MutationObserver(e=>{for(let n of e)"attributes"===n.type&&n.attributeName&&a.includes(n.attributeName)&&t(n)});return i.observe(e.current,{attributes:!0,attributeFilter:a}),()=>i.disconnect()})}var l=t(73747),a=t(33158),i=t(73094),o=t(84245),s=t(41802),c=t(57229),f=t(63824),d=/^[Ee0-9+\-.]$/;function v(e){return d.test(e)}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{focusInputOnChange:n=!0,clampValueOnBlur:t=!0,keepWithinRange:d=!0,min:b=Number.MIN_SAFE_INTEGER,max:m=Number.MAX_SAFE_INTEGER,step:p=1,isReadOnly:g,isDisabled:h,isRequired:k,isInvalid:y,pattern:x="[0-9]*(.[0-9]+)?",inputMode:N="decimal",allowMouseWheel:C,id:w,onChange:S,precision:_,name:I,"aria-describedby":A,"aria-label":E,"aria-labelledby":M,onFocus:D,onBlur:j,onInvalid:R,getAriaValueText:F,isValidCharacter:O,format:P,parse:T,...W}=e,K=(0,l.W)(D),q=(0,l.W)(j),L=(0,l.W)(R),z=(0,l.W)(null!=O?O:v),G=(0,l.W)(F),U=(0,a.C)(e),{update:B,increment:H,decrement:V}=U,[Y,J]=(0,r.useState)(!1),Q=!(g||h),Z=(0,r.useRef)(null),X=(0,r.useRef)(null),$=(0,r.useRef)(null),ee=(0,r.useRef)(null),en=(0,r.useCallback)(e=>e.split("").filter(z).join(""),[z]),et=(0,r.useCallback)(e=>{var n;return null!=(n=null==T?void 0:T(e))?n:e},[T]),er=(0,r.useCallback)(e=>{var n;return(null!=(n=null==P?void 0:P(e))?n:e).toString()},[P]);(0,o.r)(()=>{U.valueAsNumber>m?null==L||L("rangeOverflow",er(U.value),U.valueAsNumber):U.valueAsNumber<b&&(null==L||L("rangeOverflow",er(U.value),U.valueAsNumber))},[U.valueAsNumber,U.value,er,L]),(0,s.G)(()=>{if(Z.current&&Z.current.value!=U.value){let e=et(Z.current.value);U.setValue(en(e))}},[et,en]);let eu=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;Q&&H(e)},[H,Q,p]),el=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;Q&&V(e)},[V,Q,p]),ea=function(e,n){let[t,u]=(0,r.useState)(!1),[a,i]=(0,r.useState)(null),[o,s]=(0,r.useState)(!0),c=(0,r.useRef)(null),f=()=>clearTimeout(c.current);!function(e,n){let t=(0,l.W)(e);(0,r.useEffect)(()=>{let e=null;return null!==n&&(e=window.setInterval(()=>t(),n)),()=>{e&&window.clearInterval(e)}},[n,t])}(()=>{"increment"===a&&e(),"decrement"===a&&n()},t?50:null);let d=(0,r.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),u(!0),i("increment")},300)},[e,o]),v=(0,r.useCallback)(()=>{o&&n(),c.current=setTimeout(()=>{s(!1),u(!0),i("decrement")},300)},[n,o]),b=(0,r.useCallback)(()=>{s(!0),u(!1),f()},[]);return(0,r.useEffect)(()=>()=>f(),[]),{up:d,down:v,stop:b,isSpinning:t}}(eu,el);u($,"disabled",ea.stop,ea.isSpinning),u(ee,"disabled",ea.stop,ea.isSpinning);let ei=(0,r.useCallback)(e=>{e.nativeEvent.isComposing||(B(en(et(e.currentTarget.value))),X.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd})},[B,en,et]),eo=(0,r.useCallback)(e=>{var n,t,r;null==K||K(e),X.current&&(e.target.selectionStart=null!=(t=X.current.start)?t:null==(n=e.currentTarget.value)?void 0:n.length,e.currentTarget.selectionEnd=null!=(r=X.current.end)?r:e.currentTarget.selectionStart)},[K]),es=(0,r.useCallback)(e=>{if(e.nativeEvent.isComposing)return;!function(e,n){if(null==e.key)return!0;let t=e.ctrlKey||e.altKey||e.metaKey;return 1!==e.key.length||!!t||n(e.key)}(e,z)&&e.preventDefault();let n=ec(e)*p,t={ArrowUp:()=>eu(n),ArrowDown:()=>el(n),Home:()=>B(b),End:()=>B(m)}[e.key];t&&(e.preventDefault(),t(e))},[z,p,eu,el,B,b,m]),ec=e=>{let n=1;return(e.metaKey||e.ctrlKey)&&(n=.1),e.shiftKey&&(n=10),n},ef=(0,r.useMemo)(()=>{let e=null==G?void 0:G(U.value);return null!=e?e:U.value.toString()||void 0},[U.value,G]),ed=(0,r.useCallback)(()=>{let e=U.value;""!==U.value&&(/^[eE]/.test(U.value.toString())?U.setValue(""):(U.valueAsNumber<b&&(e=b),U.valueAsNumber>m&&(e=m),U.cast(e)))},[U,m,b]),ev=(0,r.useCallback)(()=>{J(!1),t&&ed()},[t,J,ed]),eb=(0,r.useCallback)(()=>{n&&requestAnimationFrame(()=>{var e;null==(e=Z.current)||e.focus()})},[n]),em=(0,r.useCallback)(e=>{e.preventDefault(),ea.up(),eb()},[eb,ea]),ep=(0,r.useCallback)(e=>{e.preventDefault(),ea.down(),eb()},[eb,ea]);(0,i.O)(()=>Z.current,"wheel",e=>{var n,t;let r=(null!=(t=null==(n=Z.current)?void 0:n.ownerDocument)?t:document).activeElement===Z.current;if(!C||!r)return;e.preventDefault();let u=ec(e)*p,l=Math.sign(e.deltaY);-1===l?eu(u):1===l&&el(u)},{passive:!1});let eg=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=h||d&&U.isAtMax;return{...e,ref:(0,c.lq)(n,$),role:"button",tabIndex:-1,onPointerDown:(0,f.v0)(e.onPointerDown,e=>{0!==e.button||t||em(e)}),onPointerLeave:(0,f.v0)(e.onPointerLeave,ea.stop),onPointerUp:(0,f.v0)(e.onPointerUp,ea.stop),disabled:t,"aria-disabled":(0,f.Qm)(t)}},[U.isAtMax,d,em,ea.stop,h]),eh=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=h||d&&U.isAtMin;return{...e,ref:(0,c.lq)(n,ee),role:"button",tabIndex:-1,onPointerDown:(0,f.v0)(e.onPointerDown,e=>{0!==e.button||t||ep(e)}),onPointerLeave:(0,f.v0)(e.onPointerLeave,ea.stop),onPointerUp:(0,f.v0)(e.onPointerUp,ea.stop),disabled:t,"aria-disabled":(0,f.Qm)(t)}},[U.isAtMin,d,ep,ea.stop,h]),ek=(0,r.useCallback)(function(){var e,n,t,r;let u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{name:I,inputMode:N,type:"text",pattern:x,"aria-labelledby":M,"aria-label":E,"aria-describedby":A,id:w,disabled:h,...u,readOnly:null!=(e=u.readOnly)?e:g,"aria-readonly":null!=(n=u.readOnly)?n:g,"aria-required":null!=(t=u.required)?t:k,required:null!=(r=u.required)?r:k,ref:(0,c.lq)(Z,l),value:er(U.value),role:"spinbutton","aria-valuemin":b,"aria-valuemax":m,"aria-valuenow":Number.isNaN(U.valueAsNumber)?void 0:U.valueAsNumber,"aria-invalid":(0,f.Qm)(null!=y?y:U.isOutOfRange),"aria-valuetext":ef,autoComplete:"off",autoCorrect:"off",onChange:(0,f.v0)(u.onChange,ei),onKeyDown:(0,f.v0)(u.onKeyDown,es),onFocus:(0,f.v0)(u.onFocus,eo,()=>J(!0)),onBlur:(0,f.v0)(u.onBlur,q,ev)}},[I,N,x,M,E,er,A,w,h,k,g,y,U.value,U.valueAsNumber,U.isOutOfRange,b,m,ef,ei,es,eo,q,ev]);return{value:er(U.value),valueAsNumber:U.valueAsNumber,isFocused:Y,isDisabled:h,isReadOnly:g,getIncrementButtonProps:eg,getDecrementButtonProps:eh,getInputProps:ek,htmlProps:W}}},80207:function(e,n,t){function r(e,n){let t=function(e){let n=parseFloat(e);return"number"!=typeof n||Number.isNaN(n)?0:n}(e),r=10**(null!=n?n:10);return t=Math.round(t*r)/r,n?t.toFixed(n):t.toString()}function u(e){if(!Number.isFinite(e))return 0;let n=1,t=0;for(;Math.round(e*n)/n!==e;)n*=10,t+=1;return t}function l(e,n,t){return(e-n)*100/(t-n)}function a(e,n,t){return(t-n)*e+n}function i(e,n,t){return r(Math.round((e-n)/t)*t+n,u(t))}function o(e,n,t){return null==e?e:(t<n&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,n),t))}t.d(n,{HU:function(){return o},Rg:function(){return l},WP:function(){return i},WS:function(){return a},Zd:function(){return r},vk:function(){return u}})},84774:function(e,n,t){t.d(n,{O:function(){return g}});var r=t(53247),u=t(63824),l=t(51092),a=t(24924),i=t(43470),o=t(27957),s=t(71011),c=t(36870),f=t(40558),d=(0,l.chakra)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),v=(0,a.gJ)("skeleton-start-color"),b=(0,a.gJ)("skeleton-end-color"),m=(0,i.F4)({from:{opacity:0},to:{opacity:1}}),p=(0,i.F4)({from:{borderColor:v.reference,background:v.reference},to:{borderColor:b.reference,background:b.reference}}),g=(0,o.forwardRef)((e,n)=>{let t={...e,fadeDuration:"number"==typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"==typeof e.speed?e.speed:.8},i=(0,s.useStyleConfig)("Skeleton",t),o=function(){let e=(0,r.useRef)(!0);return(0,r.useEffect)(()=>{e.current=!1},[]),e.current}(),{startColor:g="",endColor:h="",isLoaded:k,fadeDuration:y,speed:x,className:N,fitContent:C,...w}=(0,a.Lr)(t),[S,_]=(0,c.useToken)("colors",[g,h]),I=function(e){let n=(0,r.useRef)();return(0,r.useEffect)(()=>{n.current=e},[e]),n.current}(k),A=(0,u.cx)("chakra-skeleton",N),E={...S&&{[v.variable]:S},..._&&{[b.variable]:_}};if(k){let e=o||I?"none":"".concat(m," ").concat(y,"s");return(0,f.jsx)(l.chakra.div,{ref:n,className:A,__css:{animation:e},...w})}return(0,f.jsx)(d,{ref:n,className:A,...w,__css:{width:C?"fit-content":void 0,...i,...E,_dark:{...i._dark,...E},animation:"".concat(x,"s linear infinite alternate ").concat(p)}})});g.displayName="Skeleton"},23992:function(e,n,t){t.d(n,{_:function(){return r}});function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}}}]);