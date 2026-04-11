const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ResoHeroMockup-3ls4DEGT.js","assets/ResoMockupBase-Bdqi6wIJ.js","assets/CapsuleMockup-GU7PYio5.js","assets/ResoSettingsWindow-BNJ3YOM9.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},To={},Xs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),Wd=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),qd=Symbol.for("react.memo"),Kd=Symbol.for("react.lazy"),Pl=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var Zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function bn(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||Zs}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=bn.prototype;function Ca(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||Zs}var Pa=Ca.prototype=new nu;Pa.constructor=Ca;eu(Pa,bn.prototype);Pa.isPureReactComponent=!0;var Tl=Array.isArray,ru=Object.prototype.hasOwnProperty,Ta={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ru.call(t,r)&&!ou.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:gr,type:e,key:i,ref:a,props:o,_owner:Ta.current}}function Jd(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function za(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function Xd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zl=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):t.toString(36)}function Hr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gr:case Wd:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Zo(a,0):r,Tl(o)?(n="",e!=null&&(n=e.replace(zl,"$&/")+"/"),Hr(o,t,n,"",function(c){return c})):o!=null&&(za(o)&&(o=Jd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(zl,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Tl(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Zo(i,s);a+=Hr(i,t,n,u,o)}else if(u=Qd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Zo(i,s++),a+=Hr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ir(e,t,n){if(e==null)return e;var r=[],o=0;return Hr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Vr={transition:null},eh={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Ta};function au(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ir,forEach:function(e,t,n){Ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(e,function(t){return t})||[]},only:function(e){if(!za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=bn;L.Fragment=Bd;L.Profiler=$d;L.PureComponent=Ca;L.StrictMode=Ud;L.Suspense=Yd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eh;L.act=au;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ta.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ru.call(t,u)&&!ou.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:gr,type:e.type,key:o,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:Vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hd,_context:e},e.Consumer=e};L.createElement=iu;L.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Gd,render:e}};L.isValidElement=za;L.lazy=function(e){return{$$typeof:Kd,_payload:{_status:-1,_result:e},_init:Zd}};L.memo=function(e,t){return{$$typeof:qd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};L.unstable_act=au;L.useCallback=function(e,t){return de.current.useCallback(e,t)};L.useContext=function(e){return de.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return de.current.useDeferredValue(e)};L.useEffect=function(e,t){return de.current.useEffect(e,t)};L.useId=function(){return de.current.useId()};L.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return de.current.useMemo(e,t)};L.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};L.useRef=function(e){return de.current.useRef(e)};L.useState=function(e){return de.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return de.current.useTransition()};L.version="18.3.1";Xs.exports=L;var y=Xs.exports;const lu=Fd(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=y,nh=Symbol.for("react.element"),rh=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,ih=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ah={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)oh.call(t,r)&&!ah.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nh,type:e,key:i,ref:a,props:o,_owner:ih.current}}To.Fragment=rh;To.jsx=su;To.jsxs=su;Js.exports=To;var l=Js.exports,Ti={},uu={exports:{}},je={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var z=C.length;C.push(T);e:for(;0<z;){var G=z-1>>>1,J=C[G];if(0<o(J,T))C[G]=T,C[z]=J,z=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],z=C.pop();if(z!==T){C[0]=z;e:for(var G=0,J=C.length,jr=J>>>1;G<jr;){var Pt=2*(G+1)-1,Xo=C[Pt],Tt=Pt+1,Nr=C[Tt];if(0>o(Xo,z))Tt<J&&0>o(Nr,Xo)?(C[G]=Nr,C[Tt]=z,G=Tt):(C[G]=Xo,C[Pt]=z,G=Pt);else if(Tt<J&&0>o(Nr,z))C[G]=Nr,C[Tt]=z,G=Tt;else break e}}return T}function o(C,T){var z=C.sortIndex-T.sortIndex;return z!==0?z:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],g=1,d=null,m=3,x=!1,b=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function k(C){if(v=!1,p(C),!b)if(n(u)!==null)b=!0,En(j);else{var T=n(c);T!==null&&Jo(k,T.startTime-C)}}function j(C,T){b=!1,v&&(v=!1,f(E),E=-1),x=!0;var z=m;try{for(p(T),d=n(u);d!==null&&(!(d.expirationTime>T)||C&&!fe());){var G=d.callback;if(typeof G=="function"){d.callback=null,m=d.priorityLevel;var J=G(d.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?d.callback=J:d===n(u)&&r(u),p(T)}else r(u);d=n(u)}if(d!==null)var jr=!0;else{var Pt=n(c);Pt!==null&&Jo(k,Pt.startTime-T),jr=!1}return jr}finally{d=null,m=z,x=!1}}var S=!1,I=null,E=-1,A=5,P=-1;function fe(){return!(e.unstable_now()-P<A)}function st(){if(I!==null){var C=e.unstable_now();P=C;var T=!0;try{T=I(!0,C)}finally{T?ut():(S=!1,I=null)}}else S=!1}var ut;if(typeof h=="function")ut=function(){h(st)};else if(typeof MessageChannel<"u"){var Rn=new MessageChannel,Qo=Rn.port2;Rn.port1.onmessage=st,ut=function(){Qo.postMessage(null)}}else ut=function(){w(st,0)};function En(C){I=C,S||(S=!0,ut())}function Jo(C,T){E=w(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,En(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var z=m;m=T;try{return C()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=m;m=C;try{return T()}finally{m=z}},e.unstable_scheduleCallback=function(C,T,z){var G=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=z+J,C={id:g++,callback:T,priorityLevel:C,startTime:z,expirationTime:J,sortIndex:-1},z>G?(C.sortIndex=z,t(c,C),n(u)===null&&C===n(c)&&(v?(f(E),E=-1):v=!0,Jo(k,z-G))):(C.sortIndex=J,t(u,C),b||x||(b=!0,En(j))),C},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(C){var T=m;return function(){var z=m;m=T;try{return C.apply(this,arguments)}finally{m=z}}}})(du);cu.exports=du;var lh=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=y,Se=lh;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hu=new Set,Xn={};function Ht(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=Object.prototype.hasOwnProperty,uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ll={},Al={};function ch(e){return zi.call(Al,e)?!0:zi.call(Ll,e)?!1:uh.test(e)?Al[e]=!0:(Ll[e]=!0,!1)}function dh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hh(e,t,n,r){if(t===null||typeof t>"u"||dh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(La,Aa);re[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(La,Aa);re[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(La,Aa);re[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hh(t,n,o,r)&&(n=null),r||o===null?ch(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),Oa=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),_a=Symbol.for("react.forward_ref"),Ai=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),Ml=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ei;function Dn(e){if(ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ei=t&&t[1]||""}return`
`+ei+e}var ti=!1;function ni(e,t){if(!e||ti)return"";ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function fh(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=ni(e.type,!1),e;case 11:return e=ni(e.type.render,!1),e;case 1:return e=ni(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Kt:return"Portal";case Li:return"Profiler";case Oa:return"StrictMode";case Ai:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case _a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:Oi(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Oi(e(t))}catch{}}return null}function ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(t);case 8:return t===Oa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=mh(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&Ma(e,"checked",t,!1)}function Di(e,t){vu(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fi(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _l(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fi(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Fn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function xu(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gh=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){gh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var yh=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function $i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,cn=null,dn=null;function Wl(e){if(e=xr(e)){if(typeof Vi!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Oo(t),Vi(e.stateNode,e.type,t))}}function ju(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Nu(){if(cn){var e=cn,t=dn;if(dn=cn=null,Wl(e),t)for(e=0;e<t.length;e++)Wl(t[e])}}function Iu(e,t){return e(t)}function Ru(){}var ri=!1;function Eu(e,t,n){if(ri)return e(t,n);ri=!0;try{return Iu(e,t,n)}finally{ri=!1,(cn!==null||dn!==null)&&(Ru(),Nu())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=Oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Gi=!1;if(nt)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Gi=!1}function vh(e,t,n,r,o,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Hn=!1,io=null,ao=!1,Yi=null,xh={onError:function(e){Hn=!0,io=e}};function wh(e,t,n,r,o,i,a,s,u){Hn=!1,io=null,vh.apply(xh,arguments)}function kh(e,t,n,r,o,i,a,s,u){if(wh.apply(this,arguments),Hn){if(Hn){var c=io;Hn=!1,io=null}else throw Error(N(198));ao||(ao=!0,Yi=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bl(e){if(Vt(e)!==e)throw Error(N(188))}function bh(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Bl(o),e;if(i===r)return Bl(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Pu(e){return e=bh(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var zu=Se.unstable_scheduleCallback,Ul=Se.unstable_cancelCallback,Sh=Se.unstable_shouldYield,jh=Se.unstable_requestPaint,Y=Se.unstable_now,Nh=Se.unstable_getCurrentPriorityLevel,Wa=Se.unstable_ImmediatePriority,Lu=Se.unstable_UserBlockingPriority,lo=Se.unstable_NormalPriority,Ih=Se.unstable_LowPriority,Au=Se.unstable_IdlePriority,zo=null,Ge=null;function Rh(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Ph,Eh=Math.log,Ch=Math.LN2;function Ph(e){return e>>>=0,e===0?32:31-(Eh(e)/Ch|0)|0}var Pr=64,Tr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Wn(s):(i&=a,i!==0&&(r=Wn(i)))}else a=n&~o,a!==0?r=Wn(a):i!==0&&(r=Wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),o=1<<n,r|=e[n],t&=~o;return r}function Th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Fe(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Th(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mu(){var e=Pr;return Pr<<=1,!(Pr&4194240)&&(Pr=64),e}function oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Fe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var O=0;function Ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _u,Ua,Du,Fu,Wu,Ki=!1,zr=[],yt=null,vt=null,xt=null,tr=new Map,nr=new Map,ft=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Tn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xr(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mh(e,t,n,r,o){switch(t){case"focusin":return yt=Tn(yt,e,t,n,r,o),!0;case"dragenter":return vt=Tn(vt,e,t,n,r,o),!0;case"mouseover":return xt=Tn(xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tr.set(i,Tn(tr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,nr.set(i,Tn(nr.get(i)||null,e,t,n,r,o)),!0}return!1}function Bu(e){var t=At(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cu(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=xr(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function Hl(e,t,n){Gr(e)&&n.delete(t)}function Oh(){Ki=!1,yt!==null&&Gr(yt)&&(yt=null),vt!==null&&Gr(vt)&&(vt=null),xt!==null&&Gr(xt)&&(xt=null),tr.forEach(Hl),nr.forEach(Hl)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ki||(Ki=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Oh)))}function rr(e){function t(o){return zn(o,e)}if(0<zr.length){zn(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&zn(yt,e),vt!==null&&zn(vt,e),xt!==null&&zn(xt,e),tr.forEach(t),nr.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)Bu(n),n.blockedOn===null&&ft.shift()}var hn=lt.ReactCurrentBatchConfig,uo=!0;function _h(e,t,n,r){var o=O,i=hn.transition;hn.transition=null;try{O=1,$a(e,t,n,r)}finally{O=o,hn.transition=i}}function Dh(e,t,n,r){var o=O,i=hn.transition;hn.transition=null;try{O=4,$a(e,t,n,r)}finally{O=o,hn.transition=i}}function $a(e,t,n,r){if(uo){var o=Qi(e,t,n,r);if(o===null)pi(e,t,r,co,n),$l(e,r);else if(Mh(o,e,t,n,r))r.stopPropagation();else if($l(e,r),t&4&&-1<Ah.indexOf(e)){for(;o!==null;){var i=xr(o);if(i!==null&&_u(i),i=Qi(e,t,n,r),i===null&&pi(e,t,r,co,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var co=null;function Qi(e,t,n,r){if(co=null,e=Fa(r),e=At(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nh()){case Wa:return 1;case Lu:return 4;case lo:case Ih:return 16;case Au:return 536870912;default:return 16}default:return 16}}var mt=null,Ha=null,Yr=null;function $u(){if(Yr)return Yr;var e,t=Ha,n=t.length,r,o="value"in mt?mt.value:mt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function Vl(){return!1}function Ne(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:Vl,this.isPropagationStopped=Vl,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Ne(Sn),vr=H({},Sn,{view:0,detail:0}),Fh=Ne(vr),ii,ai,Ln,Lo=H({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(ii=e.screenX-Ln.screenX,ai=e.screenY-Ln.screenY):ai=ii=0,Ln=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),Gl=Ne(Lo),Wh=H({},Lo,{dataTransfer:0}),Bh=Ne(Wh),Uh=H({},vr,{relatedTarget:0}),li=Ne(Uh),$h=H({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hh=Ne($h),Vh=H({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=Ne(Vh),Yh=H({},Sn,{data:0}),Yl=Ne(Yh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function Ga(){return Jh}var Xh=H({},vr,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=Ne(Xh),ef=H({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ql=Ne(ef),tf=H({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),nf=Ne(tf),rf=H({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=Ne(rf),af=H({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Ne(af),sf=[9,13,27,32],Ya=nt&&"CompositionEvent"in window,Vn=null;nt&&"documentMode"in document&&(Vn=document.documentMode);var uf=nt&&"TextEvent"in window&&!Vn,Hu=nt&&(!Ya||Vn&&8<Vn&&11>=Vn),Kl=" ",Ql=!1;function Vu(e,t){switch(e){case"keyup":return sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function cf(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Ql=!0,Kl);case"textInput":return e=t.data,e===Kl&&Ql?null:e;default:return null}}function df(e,t){if(Jt)return e==="compositionend"||!Ya&&Vu(e,t)?(e=$u(),Yr=Ha=mt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var hf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hf[e.type]:t==="textarea"}function Yu(e,t,n,r){ju(r),t=ho(t,"onChange"),0<t.length&&(n=new Va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,or=null;function ff(e){oc(e,0)}function Ao(e){var t=en(e);if(yu(t))return e}function pf(e,t){if(e==="change")return t}var qu=!1;if(nt){var si;if(nt){var ui="oninput"in document;if(!ui){var Xl=document.createElement("div");Xl.setAttribute("oninput","return;"),ui=typeof Xl.oninput=="function"}si=ui}else si=!1;qu=si&&(!document.documentMode||9<document.documentMode)}function Zl(){Gn&&(Gn.detachEvent("onpropertychange",Ku),or=Gn=null)}function Ku(e){if(e.propertyName==="value"&&Ao(or)){var t=[];Yu(t,or,e,Fa(e)),Eu(ff,t)}}function mf(e,t,n){e==="focusin"?(Zl(),Gn=t,or=n,Gn.attachEvent("onpropertychange",Ku)):e==="focusout"&&Zl()}function gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(or)}function yf(e,t){if(e==="click")return Ao(t)}function vf(e,t){if(e==="input"||e==="change")return Ao(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:xf;function ir(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zi.call(t,o)||!Be(e[o],t[o]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,t){var n=es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=es(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ts(n,i);var a=ts(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kf=nt&&"documentMode"in document&&11>=document.documentMode,Xt=null,Ji=null,Yn=null,Xi=!1;function ns(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||Xt==null||Xt!==oo(r)||(r=Xt,"selectionStart"in r&&qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yn&&ir(Yn,r)||(Yn=r,r=ho(Ji,"onSelect"),0<r.length&&(t=new Va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},ci={},Xu={};nt&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Mo(e){if(ci[e])return ci[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xu)return ci[e]=t[n];return e}var Zu=Mo("animationend"),ec=Mo("animationiteration"),tc=Mo("animationstart"),nc=Mo("transitionend"),rc=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){rc.set(e,t),Ht(t,[e])}for(var di=0;di<rs.length;di++){var hi=rs[di],bf=hi.toLowerCase(),Sf=hi[0].toUpperCase()+hi.slice(1);Rt(bf,"on"+Sf)}Rt(Zu,"onAnimationEnd");Rt(ec,"onAnimationIteration");Rt(tc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(nc,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function os(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kh(r,t,void 0,e),e.currentTarget=null}function oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;os(o,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;os(o,s,c),i=u}}}if(ao)throw e=Yi,ao=!1,Yi=null,e}function D(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function fi(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Mr]){e[Mr]=!0,hu.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,fi("selectionchange",!1,t))}}function ic(e,t,n,r){switch(Uu(t)){case 1:var o=_h;break;case 4:o=Dh;break;default:o=$a}n=o.bind(null,t,n,e),o=void 0,!Gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=At(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Eu(function(){var c=i,g=Fa(n),d=[];e:{var m=rc.get(e);if(m!==void 0){var x=Va,b=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":x=Zh;break;case"focusin":b="focus",x=li;break;case"focusout":b="blur",x=li;break;case"beforeblur":case"afterblur":x=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=nf;break;case Zu:case ec:case tc:x=Hh;break;case nc:x=of;break;case"scroll":x=Fh;break;case"wheel":x=lf;break;case"copy":case"cut":case"paste":x=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ql}var v=(t&4)!==0,w=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var h=c,p;h!==null;){p=h;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,f!==null&&(k=er(h,f),k!=null&&v.push(lr(h,k,p)))),w)break;h=h.return}0<v.length&&(m=new x(m,b,null,n,g),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Hi&&(b=n.relatedTarget||n.fromElement)&&(At(b)||b[rt]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=c,b=b?At(b):null,b!==null&&(w=Vt(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=c),x!==b)){if(v=Gl,k="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=ql,k="onPointerLeave",f="onPointerEnter",h="pointer"),w=x==null?m:en(x),p=b==null?m:en(b),m=new v(k,h+"leave",x,n,g),m.target=w,m.relatedTarget=p,k=null,At(g)===c&&(v=new v(f,h+"enter",b,n,g),v.target=p,v.relatedTarget=w,k=v),w=k,x&&b)t:{for(v=x,f=b,h=0,p=v;p;p=Gt(p))h++;for(p=0,k=f;k;k=Gt(k))p++;for(;0<h-p;)v=Gt(v),h--;for(;0<p-h;)f=Gt(f),p--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=Gt(v),f=Gt(f)}v=null}else v=null;x!==null&&is(d,m,x,v,!1),b!==null&&w!==null&&is(d,w,b,v,!0)}}e:{if(m=c?en(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=pf;else if(Jl(m))if(qu)j=vf;else{j=gf;var S=mf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=yf);if(j&&(j=j(e,c))){Yu(d,j,n,g);break e}S&&S(e,m,c),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Fi(m,"number",m.value)}switch(S=c?en(c):window,e){case"focusin":(Jl(S)||S.contentEditable==="true")&&(Xt=S,Ji=c,Yn=null);break;case"focusout":Yn=Ji=Xt=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,ns(d,n,g);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":ns(d,n,g)}var I;if(Ya)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jt?Vu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Hu&&n.locale!=="ko"&&(Jt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jt&&(I=$u()):(mt=g,Ha="value"in mt?mt.value:mt.textContent,Jt=!0)),S=ho(c,E),0<S.length&&(E=new Yl(E,e,null,n,g),d.push({event:E,listeners:S}),I?E.data=I:(I=Gu(n),I!==null&&(E.data=I)))),(I=uf?cf(e,n):df(e,n))&&(c=ho(c,"onBeforeInput"),0<c.length&&(g=new Yl("onBeforeInput","beforeinput",null,n,g),d.push({event:g,listeners:c}),g.data=I))}oc(d,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=er(e,n),i!=null&&r.unshift(lr(e,i,o)),i=er(e,t),i!=null&&r.push(lr(e,i,o))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function is(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=er(n,i),u!=null&&a.unshift(lr(n,u,s))):o||(u=er(n,i),u!=null&&a.push(lr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Nf=/\r\n?/g,If=/\u0000|\uFFFD/g;function as(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(If,"")}function Or(e,t,n){if(t=as(t),as(e)!==t&&n)throw Error(N(425))}function fo(){}var Zi=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,ls=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof ls<"u"?function(e){return ls.resolve(null).then(e).catch(Cf)}:na;function Cf(e){setTimeout(function(){throw e})}function mi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);rr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+jn,sr="__reactProps$"+jn,rt="__reactContainer$"+jn,ra="__reactEvents$"+jn,Pf="__reactListeners$"+jn,Tf="__reactHandles$"+jn;function At(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ss(e);e!==null;){if(n=e[Ve])return n;e=ss(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[Ve]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Oo(e){return e[sr]||null}var oa=[],tn=-1;function Et(e){return{current:e}}function F(e){0>tn||(e.current=oa[tn],oa[tn]=null,tn--)}function _(e,t){tn++,oa[tn]=e.current,e.current=t}var It={},le=Et(It),ge=Et(!1),Ft=It;function gn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function po(){F(ge),F(le)}function us(e,t,n){if(le.current!==It)throw Error(N(168));_(le,t),_(ge,n)}function ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,ph(e)||"Unknown",o));return H({},n,r)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Ft=le.current,_(le,e),_(ge,ge.current),!0}function cs(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=ac(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,F(ge),F(le),_(le,e)):F(ge),_(ge,n)}var Je=null,_o=!1,gi=!1;function lc(e){Je===null?Je=[e]:Je.push(e)}function zf(e){_o=!0,lc(e)}function Ct(){if(!gi&&Je!==null){gi=!0;var e=0,t=O;try{var n=Je;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,_o=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),zu(Wa,Ct),o}finally{O=t,gi=!1}}return null}var nn=[],rn=0,go=null,yo=0,Ie=[],Re=0,Wt=null,Xe=1,Ze="";function zt(e,t){nn[rn++]=yo,nn[rn++]=go,go=e,yo=t}function sc(e,t,n){Ie[Re++]=Xe,Ie[Re++]=Ze,Ie[Re++]=Wt,Wt=e;var r=Xe;e=Ze;var o=32-Fe(r)-1;r&=~(1<<o),n+=1;var i=32-Fe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Xe=1<<32-Fe(t)+o|n<<o|r,Ze=i+e}else Xe=1<<i|n<<o|r,Ze=e}function Ka(e){e.return!==null&&(zt(e,1),sc(e,1,0))}function Qa(e){for(;e===go;)go=nn[--rn],nn[rn]=null,yo=nn[--rn],nn[rn]=null;for(;e===Wt;)Wt=Ie[--Re],Ie[Re]=null,Ze=Ie[--Re],Ie[Re]=null,Xe=Ie[--Re],Ie[Re]=null}var be=null,ke=null,W=!1,De=null;function uc(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ke=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ke=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(W){var t=ke;if(t){var n=t;if(!ds(e,t)){if(ia(e))throw Error(N(418));t=wt(n.nextSibling);var r=be;t&&ds(e,t)?uc(r,n):(e.flags=e.flags&-4097|2,W=!1,be=e)}}else{if(ia(e))throw Error(N(418));e.flags=e.flags&-4097|2,W=!1,be=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function _r(e){if(e!==be)return!1;if(!W)return hs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=ke)){if(ia(e))throw cc(),Error(N(418));for(;t;)uc(e,t),t=wt(t.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=be?wt(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=ke;e;)e=wt(e.nextSibling)}function yn(){ke=be=null,W=!1}function Ja(e){De===null?De=[e]:De.push(e)}var Lf=lt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fs(e){var t=e._init;return t(e._payload)}function dc(e){function t(f,h){if(e){var p=f.deletions;p===null?(f.deletions=[h],f.flags|=16):p.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function o(f,h){return f=jt(f,h),f.index=0,f.sibling=null,f}function i(f,h,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<h?(f.flags|=2,h):p):(f.flags|=2,h)):(f.flags|=1048576,h)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,p,k){return h===null||h.tag!==6?(h=Si(p,f.mode,k),h.return=f,h):(h=o(h,p),h.return=f,h)}function u(f,h,p,k){var j=p.type;return j===Qt?g(f,h,p.props.children,k,p.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&fs(j)===h.type)?(k=o(h,p.props),k.ref=An(f,h,p),k.return=f,k):(k=to(p.type,p.key,p.props,null,f.mode,k),k.ref=An(f,h,p),k.return=f,k)}function c(f,h,p,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=ji(p,f.mode,k),h.return=f,h):(h=o(h,p.children||[]),h.return=f,h)}function g(f,h,p,k,j){return h===null||h.tag!==7?(h=Dt(p,f.mode,k,j),h.return=f,h):(h=o(h,p),h.return=f,h)}function d(f,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Si(""+h,f.mode,p),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Rr:return p=to(h.type,h.key,h.props,null,f.mode,p),p.ref=An(f,null,h),p.return=f,p;case Kt:return h=ji(h,f.mode,p),h.return=f,h;case dt:var k=h._init;return d(f,k(h._payload),p)}if(Fn(h)||Cn(h))return h=Dt(h,f.mode,p,null),h.return=f,h;Dr(f,h)}return null}function m(f,h,p,k){var j=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,h,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rr:return p.key===j?u(f,h,p,k):null;case Kt:return p.key===j?c(f,h,p,k):null;case dt:return j=p._init,m(f,h,j(p._payload),k)}if(Fn(p)||Cn(p))return j!==null?null:g(f,h,p,k,null);Dr(f,p)}return null}function x(f,h,p,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(p)||null,s(h,f,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Rr:return f=f.get(k.key===null?p:k.key)||null,u(h,f,k,j);case Kt:return f=f.get(k.key===null?p:k.key)||null,c(h,f,k,j);case dt:var S=k._init;return x(f,h,p,S(k._payload),j)}if(Fn(k)||Cn(k))return f=f.get(p)||null,g(h,f,k,j,null);Dr(h,k)}return null}function b(f,h,p,k){for(var j=null,S=null,I=h,E=h=0,A=null;I!==null&&E<p.length;E++){I.index>E?(A=I,I=null):A=I.sibling;var P=m(f,I,p[E],k);if(P===null){I===null&&(I=A);break}e&&I&&P.alternate===null&&t(f,I),h=i(P,h,E),S===null?j=P:S.sibling=P,S=P,I=A}if(E===p.length)return n(f,I),W&&zt(f,E),j;if(I===null){for(;E<p.length;E++)I=d(f,p[E],k),I!==null&&(h=i(I,h,E),S===null?j=I:S.sibling=I,S=I);return W&&zt(f,E),j}for(I=r(f,I);E<p.length;E++)A=x(I,f,E,p[E],k),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?E:A.key),h=i(A,h,E),S===null?j=A:S.sibling=A,S=A);return e&&I.forEach(function(fe){return t(f,fe)}),W&&zt(f,E),j}function v(f,h,p,k){var j=Cn(p);if(typeof j!="function")throw Error(N(150));if(p=j.call(p),p==null)throw Error(N(151));for(var S=j=null,I=h,E=h=0,A=null,P=p.next();I!==null&&!P.done;E++,P=p.next()){I.index>E?(A=I,I=null):A=I.sibling;var fe=m(f,I,P.value,k);if(fe===null){I===null&&(I=A);break}e&&I&&fe.alternate===null&&t(f,I),h=i(fe,h,E),S===null?j=fe:S.sibling=fe,S=fe,I=A}if(P.done)return n(f,I),W&&zt(f,E),j;if(I===null){for(;!P.done;E++,P=p.next())P=d(f,P.value,k),P!==null&&(h=i(P,h,E),S===null?j=P:S.sibling=P,S=P);return W&&zt(f,E),j}for(I=r(f,I);!P.done;E++,P=p.next())P=x(I,f,E,P.value,k),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?E:P.key),h=i(P,h,E),S===null?j=P:S.sibling=P,S=P);return e&&I.forEach(function(st){return t(f,st)}),W&&zt(f,E),j}function w(f,h,p,k){if(typeof p=="object"&&p!==null&&p.type===Qt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Rr:e:{for(var j=p.key,S=h;S!==null;){if(S.key===j){if(j=p.type,j===Qt){if(S.tag===7){n(f,S.sibling),h=o(S,p.props.children),h.return=f,f=h;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&fs(j)===S.type){n(f,S.sibling),h=o(S,p.props),h.ref=An(f,S,p),h.return=f,f=h;break e}n(f,S);break}else t(f,S);S=S.sibling}p.type===Qt?(h=Dt(p.props.children,f.mode,k,p.key),h.return=f,f=h):(k=to(p.type,p.key,p.props,null,f.mode,k),k.ref=An(f,h,p),k.return=f,f=k)}return a(f);case Kt:e:{for(S=p.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(f,h.sibling),h=o(h,p.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=ji(p,f.mode,k),h.return=f,f=h}return a(f);case dt:return S=p._init,w(f,h,S(p._payload),k)}if(Fn(p))return b(f,h,p,k);if(Cn(p))return v(f,h,p,k);Dr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(f,h.sibling),h=o(h,p),h.return=f,f=h):(n(f,h),h=Si(p,f.mode,k),h.return=f,f=h),a(f)):n(f,h)}return w}var vn=dc(!0),hc=dc(!1),vo=Et(null),xo=null,on=null,Xa=null;function Za(){Xa=on=xo=null}function el(e){var t=vo.current;F(vo),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){xo=e,Xa=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(xo===null)throw Error(N(308));on=e,xo.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Mt=null;function tl(e){Mt===null?Mt=[e]:Mt.push(e)}function fc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tl(t)):(n.next=o.next,o.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ot(e,n)}return o=r.interleaved,o===null?(t.next=t,tl(r)):(t.next=o.next,o.next=t),r.interleaved=t,ot(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function ps(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var o=e.updateQueue;ht=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;a=0,g=c=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(m=t,x=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(x,d,m);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,m=typeof b=="function"?b.call(x,d,m):b,m==null)break e;d=H({},d,m);break e;case 2:ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=x,u=d):g=g.next=x,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(u=d),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=d}}function ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var wr={},Ye=Et(wr),ur=Et(wr),cr=Et(wr);function Ot(e){if(e===wr)throw Error(N(174));return e}function rl(e,t){switch(_(cr,t),_(ur,e),_(Ye,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bi(t,e)}F(Ye),_(Ye,t)}function xn(){F(Ye),F(ur),F(cr)}function mc(e){Ot(cr.current);var t=Ot(Ye.current),n=Bi(t,e.type);t!==n&&(_(ur,e),_(Ye,n))}function ol(e){ur.current===e&&(F(Ye),F(ur))}var B=Et(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yi=[];function il(){for(var e=0;e<yi.length;e++)yi[e]._workInProgressVersionPrimary=null;yi.length=0}var Qr=lt.ReactCurrentDispatcher,vi=lt.ReactCurrentBatchConfig,Bt=0,U=null,K=null,X=null,bo=!1,qn=!1,dr=0,Af=0;function oe(){throw Error(N(321))}function al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ll(e,t,n,r,o,i){if(Bt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?Df:Ff,e=n(r,o),qn){i=0;do{if(qn=!1,dr=0,25<=i)throw Error(N(301));i+=1,X=K=null,t.updateQueue=null,Qr.current=Wf,e=n(r,o)}while(qn)}if(Qr.current=So,t=K!==null&&K.next!==null,Bt=0,X=K=U=null,bo=!1,t)throw Error(N(300));return e}function sl(){var e=dr!==0;return dr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function ze(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,K=e;else{if(e===null)throw Error(N(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function hr(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=ze(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,c=i;do{var g=c.lane;if((Bt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,a=r):u=u.next=d,U.lanes|=g,Ut|=g}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,U.lanes|=i,Ut|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wi(e){var t=ze(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Be(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gc(){}function yc(e,t){var n=U,r=ze(),o=t(),i=!Be(r.memoizedState,o);if(i&&(r.memoizedState=o,me=!0),r=r.queue,ul(wc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,fr(9,xc.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(N(349));Bt&30||vc(n,t,o)}return o}function vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xc(e,t,n,r){t.value=n,t.getSnapshot=r,kc(t)&&bc(e)}function wc(e,t,n){return n(function(){kc(t)&&bc(e)})}function kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function bc(e){var t=ot(e,1);t!==null&&We(t,e,1,-1)}function gs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=_f.bind(null,U,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sc(){return ze().memoizedState}function Jr(e,t,n,r){var o=He();U.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var o=ze();r=r===void 0?null:r;var i=void 0;if(K!==null){var a=K.memoizedState;if(i=a.destroy,r!==null&&al(r,a.deps)){o.memoizedState=fr(t,n,i,r);return}}U.flags|=e,o.memoizedState=fr(1|t,n,i,r)}function ys(e,t){return Jr(8390656,8,e,t)}function ul(e,t){return Do(2048,8,e,t)}function jc(e,t){return Do(4,2,e,t)}function Nc(e,t){return Do(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,Ic.bind(null,t,e),n)}function cl(){}function Ec(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return Bt&21?(Be(n,t)||(n=Mu(),U.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Mf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=vi.transition;vi.transition={};try{e(!1),t()}finally{O=n,vi.transition=r}}function Tc(){return ze().memoizedState}function Of(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zc(e))Lc(t,n);else if(n=fc(e,t,n,r),n!==null){var o=ce();We(n,e,r,o),Ac(n,t,r)}}function _f(e,t,n){var r=St(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zc(e))Lc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Be(s,a)){var u=t.interleaved;u===null?(o.next=o,tl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=fc(e,t,o,r),n!==null&&(o=ce(),We(n,e,r,o),Ac(n,t,r))}}function zc(e){var t=e.alternate;return e===U||t!==null&&t===U}function Lc(e,t){qn=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var So={readContext:Te,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Df={readContext:Te,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Of.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:gs,useDebugValue:cl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=gs(!1),t=e[0];return e=Mf.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=He();if(W){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Z===null)throw Error(N(349));Bt&30||vc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ys(wc.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,xc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=Z.identifierPrefix;if(W){var n=Ze,r=Xe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:Te,useCallback:Ec,useContext:Te,useEffect:ul,useImperativeHandle:Rc,useInsertionEffect:jc,useLayoutEffect:Nc,useMemo:Cc,useReducer:xi,useRef:Sc,useState:function(){return xi(hr)},useDebugValue:cl,useDeferredValue:function(e){var t=ze();return Pc(t,K.memoizedState,e)},useTransition:function(){var e=xi(hr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1},Wf={readContext:Te,useCallback:Ec,useContext:Te,useEffect:ul,useImperativeHandle:Rc,useInsertionEffect:jc,useLayoutEffect:Nc,useMemo:Cc,useReducer:wi,useRef:Sc,useState:function(){return wi(hr)},useDebugValue:cl,useDeferredValue:function(e){var t=ze();return K===null?t.memoizedState=e:Pc(t,K.memoizedState,e)},useTransition:function(){var e=wi(hr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),o=St(e),i=et(r,o);i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,o),t!==null&&(We(t,e,o,r),Kr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),o=St(e),i=et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,o),t!==null&&(We(t,e,o,r),Kr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=St(e),o=et(n,r);o.tag=2,t!=null&&(o.callback=t),t=kt(e,o,r),t!==null&&(We(t,e,r,n),Kr(t,e,r))}};function vs(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,i):!0}function Mc(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Te(i):(o=ye(t)?Ft:le.current,r=t.contextTypes,i=(r=r!=null)?gn(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},nl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Te(i):(i=ye(t)?Ft:le.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Fo.enqueueReplaceState(o,o.state,null),wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=fh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bf=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,wa=r),ca(e,t)},n}function _c(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ca(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ws(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=tp.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e)}var Uf=lt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?hc(t,null,n,r):vn(t,e.child,n,r)}function Ss(e,t,n,r,o){n=n.render;var i=t.ref;return fn(t,o),r=ll(e,t,n,r,i,o),n=sl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(W&&n&&Ka(t),t.flags|=1,ue(e,t,r,o),t.child)}function js(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Dc(e,t,i,r,o)):(e=to(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(a,r)&&e.ref===t.ref)return it(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ir(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,it(e,t,o)}return da(e,t,n,r,o)}function Fc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(ln,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(ln,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_(ln,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,_(ln,we),we|=r;return ue(e,t,o,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,n,r,o){var i=ye(n)?Ft:le.current;return i=gn(t,i),fn(t,o),n=ll(e,t,n,r,i,o),r=sl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(W&&r&&Ka(t),t.flags|=1,ue(e,t,n,o),t.child)}function Ns(e,t,n,r,o){if(ye(n)){var i=!0;mo(t)}else i=!1;if(fn(t,o),t.stateNode===null)Xr(e,t),Mc(t,n,r),ua(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ye(n)?Ft:le.current,c=gn(t,c));var g=n.getDerivedStateFromProps,d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&xs(t,a,r,c),ht=!1;var m=t.memoizedState;a.state=m,wo(t,r,a,o),u=t.memoizedState,s!==r||m!==u||ge.current||ht?(typeof g=="function"&&(sa(t,n,g,r),u=t.memoizedState),(s=ht||vs(t,n,s,r,m,u,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,pc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Oe(t.type,s),a.props=c,d=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ye(n)?Ft:le.current,u=gn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||m!==u)&&xs(t,a,r,u),ht=!1,m=t.memoizedState,a.state=m,wo(t,r,a,o);var b=t.memoizedState;s!==d||m!==b||ge.current||ht?(typeof x=="function"&&(sa(t,n,x,r),b=t.memoizedState),(c=ht||vs(t,n,c,r,m,b,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,i,o)}function ha(e,t,n,r,o,i){Wc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&cs(t,n,!1),it(e,t,i);r=t.stateNode,Uf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vn(t,e.child,null,i),t.child=vn(t,null,s,i)):ue(e,t,s,i),t.memoizedState=r.state,o&&cs(t,n,!0),t.child}function Bc(e){var t=e.stateNode;t.pendingContext?us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&us(e,t.context,!1),rl(e,t.containerInfo)}function Is(e,t,n,r,o){return yn(),Ja(o),t.flags|=256,ue(e,t,n,r),t.child}var fa={dehydrated:null,treeContext:null,retryLane:0};function pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uc(e,t,n){var r=t.pendingProps,o=B.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(B,o&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Uo(a,r,0,null),e=Dt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pa(n),t.memoizedState=fa,e):dl(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return $f(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=jt(s,i):(i=Dt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?pa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=fa,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dl(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&Ja(r),vn(t,e.child,null,n),e=dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ki(Error(N(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Uo({mode:"visible",children:r.children},o,0,null),i=Dt(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&vn(t,e.child,null,a),t.child.memoizedState=pa(a),t.memoizedState=fa,i);if(!(t.mode&1))return Fr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(N(419)),r=ki(i,r,void 0),Fr(e,t,a,r)}if(s=(a&e.childLanes)!==0,me||s){if(r=Z,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ot(e,o),We(r,e,o,-1))}return yl(),r=ki(Error(N(421))),Fr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=np.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ke=wt(o.nextSibling),be=t,W=!0,De=null,e!==null&&(Ie[Re++]=Xe,Ie[Re++]=Ze,Ie[Re++]=Wt,Xe=e.id,Ze=e.overflow,Wt=t),t=dl(t,r.children),t.flags|=4096,t)}function Rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function bi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $c(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(B,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bi(t,!0,n,null,i);break;case"together":bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hf(e,t,n){switch(t.tag){case 3:Bc(t),yn();break;case 5:mc(t);break;case 1:ye(t.type)&&mo(t);break;case 4:rl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Uc(e,t,n):(_(B,B.current&1),e=it(e,t,n),e!==null?e.sibling:null);_(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $c(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return it(e,t,n)}var Hc,ma,Vc,Gc;Hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ma=function(){};Vc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ot(Ye.current);var i=null;switch(n){case"input":o=_i(e,o),r=_i(e,r),i=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":o=Wi(e,o),r=Wi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}Ui(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&po(),ie(t),null;case 3:return r=t.stateNode,xn(),F(ge),F(le),il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Sa(De),De=null))),ma(e,t),ie(t),null;case 5:ol(t);var o=Ot(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ie(t),null}if(e=Ot(Ye.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ve]=t,r[sr]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)D(Bn[o],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ol(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Dl(r,i),D("invalid",r)}Ui(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,s,e),o=["children",""+s]):Xn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",r)}switch(n){case"input":Er(r),_l(r,i,!0);break;case"textarea":Er(r),Fl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ve]=t,e[sr]=r,Hc(e,t,!1,!1),t.stateNode=e;e:{switch(a=$i(n,r),n){case"dialog":D("cancel",e),D("close",e),o=r;break;case"iframe":case"object":case"embed":D("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)D(Bn[o],e);o=r;break;case"source":D("error",e),o=r;break;case"img":case"image":case"link":D("error",e),D("load",e),o=r;break;case"details":D("toggle",e),o=r;break;case"input":Ol(e,r),o=_i(e,r),D("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":Dl(e,r),o=Wi(e,r),D("invalid",e);break;default:o=r}Ui(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Su(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ku(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&D("scroll",e):u!=null&&Ma(e,i,u,a))}switch(n){case"input":Er(e),_l(e,r,!1);break;case"textarea":Er(e),Fl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ot(cr.current),Ot(Ye.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Or(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ie(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))cc(),yn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ve]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else De!==null&&(Sa(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Q===0&&(Q=3):yl())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return xn(),ma(e,t),e===null&&ar(t.stateNode.containerInfo),ie(t),null;case 10:return el(t.type._context),ie(t),null;case 17:return ye(t.type)&&po(),ie(t),null;case 19:if(F(B),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Mn(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ko(e),a!==null){for(t.flags|=128,Mn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>kn&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ko(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return ie(t),null}else 2*Y()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=B.current,_(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return gl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Gf(e,t){switch(Qa(t),t.tag){case 1:return ye(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),F(ge),F(le),il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ol(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return xn(),null;case 10:return el(t.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var Wr=!1,ae=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,R=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ga(e,t,n){try{n()}catch(r){V(e,t,r)}}var Es=!1;function qf(e,t){if(Zi=uo,e=Ju(),qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,g=0,d=e,m=null;t:for(;;){for(var x;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(u=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)m=d,d=x;for(;;){if(d===e)break t;if(m===n&&++c===o&&(s=a),m===i&&++g===r&&(u=a),(x=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},uo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,w=b.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Oe(t.type,v),w);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){V(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Es,Es=!1,b}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ga(t,n,i)}o=o.next}while(o!==r)}}function Wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yc(e){var t=e.alternate;t!==null&&(e.alternate=null,Yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[sr],delete t[ra],delete t[Pf],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}var ee=null,_e=!1;function ct(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:ae||an(n,t);case 6:var r=ee,o=_e;ee=null,ct(e,t,n),ee=r,_e=o,ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?mi(e.parentNode,n):e.nodeType===1&&mi(e,n),rr(e)):mi(ee,n.stateNode));break;case 4:r=ee,o=_e,ee=n.stateNode.containerInfo,_e=!0,ct(e,t,n),ee=r,_e=o;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ga(n,t,a),o=o.next}while(o!==r)}ct(e,t,n);break;case 1:if(!ae&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ct(e,t,n),ae=r):ct(e,t,n);break;default:ct(e,t,n)}}function Ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yf),t.forEach(function(r){var o=rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,_e=!1;break e;case 3:ee=s.stateNode.containerInfo,_e=!0;break e;case 4:ee=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(ee===null)throw Error(N(160));Kc(i,a,o),ee=null,_e=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){V(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),$e(e),r&4){try{Kn(3,e,e.return),Wo(3,e)}catch(v){V(e,e.return,v)}try{Kn(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:Ae(t,e),$e(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Ae(t,e),$e(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Zn(o,"")}catch(v){V(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vu(o,i),$i(s,a);var c=$i(s,i);for(a=0;a<u.length;a+=2){var g=u[a],d=u[a+1];g==="style"?Su(o,d):g==="dangerouslySetInnerHTML"?ku(o,d):g==="children"?Zn(o,d):Ma(o,g,d,c)}switch(s){case"input":Di(o,i);break;case"textarea":xu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?un(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[sr]=i}catch(v){V(e,e.return,v)}}break;case 6:if(Ae(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){V(e,e.return,v)}}break;case 3:if(Ae(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:Ae(t,e),$e(e);break;case 13:Ae(t,e),$e(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(pl=Y())),r&4&&Ps(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||g,Ae(t,e),ae=c):Ae(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(d=R=g;R!==null;){switch(m=R,x=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:an(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){V(r,n,v)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){zs(d);continue}}x!==null?(x.return=m,R=x):zs(d)}g=g.sibling}e:for(g=null,d=e;;){if(d.tag===5){if(g===null){g=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=bu("display",a))}catch(v){V(e,e.return,v)}}}else if(d.tag===6){if(g===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){V(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;g===d&&(g=null),d=d.return}g===d&&(g=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ae(t,e),$e(e),r&4&&Ps(e);break;case 21:break;default:Ae(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zn(o,""),r.flags&=-33);var i=Cs(e);xa(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Cs(e);va(e,s,a);break;default:throw Error(N(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){R=e,Jc(e)}function Jc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Wr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ae;s=Wr;var c=ae;if(Wr=a,(ae=u)&&!c)for(R=o;R!==null;)a=R,u=a.child,a.tag===22&&a.memoizedState!==null?Ls(o):u!==null?(u.return=a,R=u):Ls(o);for(;i!==null;)R=i,Jc(i),i=i.sibling;R=o,Wr=s,ae=c}Ts(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Ts(e)}}function Ts(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ms(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ms(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var d=g.dehydrated;d!==null&&rr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ae||t.flags&512&&ya(t)}catch(m){V(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function zs(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ls(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wo(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){V(t,o,u)}}var i=t.return;try{ya(t)}catch(u){V(t,i,u)}break;case 5:var a=t.return;try{ya(t)}catch(u){V(t,a,u)}}}catch(u){V(t,t.return,u)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Qf=Math.ceil,jo=lt.ReactCurrentDispatcher,hl=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,M=0,Z=null,q=null,te=0,we=0,ln=Et(0),Q=0,pr=null,Ut=0,Bo=0,fl=0,Qn=null,pe=null,pl=0,kn=1/0,Qe=null,No=!1,wa=null,bt=null,Br=!1,gt=null,Io=0,Jn=0,ka=null,Zr=-1,eo=0;function ce(){return M&6?Y():Zr!==-1?Zr:Zr=Y()}function St(e){return e.mode&1?M&2&&te!==0?te&-te:Lf.transition!==null?(eo===0&&(eo=Mu()),eo):(e=O,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e):1}function We(e,t,n,r){if(50<Jn)throw Jn=0,ka=null,Error(N(185));yr(e,n,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(Bo|=n),Q===4&&pt(e,te)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(kn=Y()+500,_o&&Ct()))}function ve(e,t){var n=e.callbackNode;zh(e,t);var r=so(e,e===Z?te:0);if(r===0)n!==null&&Ul(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ul(n),t===1)e.tag===0?zf(As.bind(null,e)):lc(As.bind(null,e)),Ef(function(){!(M&6)&&Ct()}),n=null;else{switch(Ou(r)){case 1:n=Wa;break;case 4:n=Lu;break;case 16:n=lo;break;case 536870912:n=Au;break;default:n=lo}n=id(n,Xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xc(e,t){if(Zr=-1,eo=0,M&6)throw Error(N(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=so(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=M;M|=2;var i=ed();(Z!==e||te!==t)&&(Qe=null,kn=Y()+500,_t(e,t));do try{Zf();break}catch(s){Zc(e,s)}while(!0);Za(),jo.current=i,M=o,q!==null?t=0:(Z=null,te=0,t=Q)}if(t!==0){if(t===2&&(o=qi(e),o!==0&&(r=o,t=ba(e,o))),t===1)throw n=pr,_t(e,0),pt(e,r),ve(e,Y()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Jf(o)&&(t=Ro(e,r),t===2&&(i=qi(e),i!==0&&(r=i,t=ba(e,i))),t===1))throw n=pr,_t(e,0),pt(e,r),ve(e,Y()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Lt(e,pe,Qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=pl+500-Y(),10<t)){if(so(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=na(Lt.bind(null,e,pe,Qe),t);break}Lt(e,pe,Qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Fe(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qf(r/1960))-r,10<r){e.timeoutHandle=na(Lt.bind(null,e,pe,Qe),r);break}Lt(e,pe,Qe);break;case 5:Lt(e,pe,Qe);break;default:throw Error(N(329))}}}return ve(e,Y()),e.callbackNode===n?Xc.bind(null,e):null}function ba(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=pe,pe=n,t!==null&&Sa(t)),e}function Sa(e){pe===null?pe=e:pe.push.apply(pe,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Be(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~fl,t&=~Bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function As(e){if(M&6)throw Error(N(327));pn();var t=so(e,0);if(!(t&1))return ve(e,Y()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=qi(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=pr,_t(e,0),pt(e,t),ve(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,pe,Qe),ve(e,Y()),null}function ml(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(kn=Y()+500,_o&&Ct())}}function $t(e){gt!==null&&gt.tag===0&&!(M&6)&&pn();var t=M;M|=1;var n=Pe.transition,r=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=r,Pe.transition=n,M=t,!(M&6)&&Ct()}}function gl(){we=ln.current,F(ln)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:xn(),F(ge),F(le),il();break;case 5:ol(r);break;case 4:xn();break;case 13:F(B);break;case 19:F(B);break;case 10:el(r.type._context);break;case 22:case 23:gl()}n=n.return}if(Z=e,q=e=jt(e.current,null),te=we=t,Q=0,pr=null,fl=Bo=Ut=0,pe=Qn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Mt=null}return e}function Zc(e,t){do{var n=q;try{if(Za(),Qr.current=So,bo){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bo=!1}if(Bt=0,X=K=U=null,qn=!1,dr=0,hl.current=null,n===null||n.return===null){Q=1,pr=t,q=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,d=g.tag;if(!(g.mode&1)&&(d===0||d===11||d===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=ks(a);if(x!==null){x.flags&=-257,bs(x,a,s,i,t),x.mode&1&&ws(i,c,t),t=x,u=c;var b=t.updateQueue;if(b===null){var v=new Set;v.add(u),t.updateQueue=v}else b.add(u);break e}else{if(!(t&1)){ws(i,c,t),yl();break e}u=Error(N(426))}}else if(W&&s.mode&1){var w=ks(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),bs(w,a,s,i,t),Ja(wn(u,s));break e}}i=u=wn(u,s),Q!==4&&(Q=2),Qn===null?Qn=[i]:Qn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Oc(i,u,t);ps(i,f);break e;case 1:s=u;var h=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bt===null||!bt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=_c(i,s,t);ps(i,k);break e}}i=i.return}while(i!==null)}nd(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ed(){var e=jo.current;return jo.current=So,e===null?So:e}function yl(){(Q===0||Q===3||Q===2)&&(Q=4),Z===null||!(Ut&268435455)&&!(Bo&268435455)||pt(Z,te)}function Ro(e,t){var n=M;M|=2;var r=ed();(Z!==e||te!==t)&&(Qe=null,_t(e,t));do try{Xf();break}catch(o){Zc(e,o)}while(!0);if(Za(),M=n,jo.current=r,q!==null)throw Error(N(261));return Z=null,te=0,Q}function Xf(){for(;q!==null;)td(q)}function Zf(){for(;q!==null&&!Sh();)td(q)}function td(e){var t=od(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?nd(e):q=t,hl.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,q=null;return}}else if(n=Vf(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Q===0&&(Q=5)}function Lt(e,t,n){var r=O,o=Pe.transition;try{Pe.transition=null,O=1,ep(e,t,n,r)}finally{Pe.transition=o,O=r}return null}function ep(e,t,n,r){do pn();while(gt!==null);if(M&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Lh(e,i),e===Z&&(q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,id(lo,function(){return pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var a=O;O=1;var s=M;M|=4,hl.current=null,qf(e,n),Qc(n,e),wf(ea),uo=!!Zi,ea=Zi=null,e.current=n,Kf(n),jh(),M=s,O=a,Pe.transition=i}else e.current=n;if(Br&&(Br=!1,gt=e,Io=o),i=e.pendingLanes,i===0&&(bt=null),Rh(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(No)throw No=!1,e=wa,wa=null,e;return Io&1&&e.tag!==0&&pn(),i=e.pendingLanes,i&1?e===ka?Jn++:(Jn=0,ka=e):Jn=0,Ct(),null}function pn(){if(gt!==null){var e=Ou(Io),t=Pe.transition,n=O;try{if(Pe.transition=null,O=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,Io=0,M&6)throw Error(N(331));var o=M;for(M|=4,R=e.current;R!==null;){var i=R,a=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(R=c;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:Kn(8,g,i)}var d=g.child;if(d!==null)d.return=g,R=d;else for(;R!==null;){g=R;var m=g.sibling,x=g.return;if(Yc(g),g===c){R=null;break}if(m!==null){m.return=x,R=m;break}R=x}}}var b=i.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var h=e.current;for(R=h;R!==null;){a=R;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,R=p;else e:for(a=h;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wo(9,s)}}catch(j){V(s,s.return,j)}if(s===a){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if(M=o,Ct(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(zo,e)}catch{}r=!0}return r}finally{O=n,Pe.transition=t}}return!1}function Ms(e,t,n){t=wn(n,t),t=Oc(e,t,1),e=kt(e,t,1),t=ce(),e!==null&&(yr(e,1,t),ve(e,t))}function V(e,t,n){if(e.tag===3)Ms(e,e,n);else for(;t!==null;){if(t.tag===3){Ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=wn(n,e),e=_c(t,e,1),t=kt(t,e,1),e=ce(),t!==null&&(yr(t,1,e),ve(t,e));break}}t=t.return}}function tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(Q===4||Q===3&&(te&130023424)===te&&500>Y()-pl?_t(e,0):fl|=n),ve(e,t)}function rd(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=ce();e=ot(e,t),e!==null&&(yr(e,t,n),ve(e,n))}function np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rd(e,n)}function rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),rd(e,n)}var od;od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Hf(e,t,n);me=!!(e.flags&131072)}else me=!1,W&&t.flags&1048576&&sc(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var o=gn(t,le.current);fn(t,n),o=ll(null,t,r,e,o,n);var i=sl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(i=!0,mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nl(t),o.updater=Fo,t.stateNode=o,o._reactInternals=t,ua(t,r,e,n),t=ha(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Ka(t),ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ip(r),e=Oe(r,e),o){case 0:t=da(null,t,r,e,n);break e;case 1:t=Ns(null,t,r,e,n);break e;case 11:t=Ss(null,t,r,e,n);break e;case 14:t=js(null,t,r,Oe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),da(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Ns(e,t,r,o,n);case 3:e:{if(Bc(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pc(e,t),wo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(N(423)),t),t=Is(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(N(424)),t),t=Is(e,t,r,n,o);break e}else for(ke=wt(t.stateNode.containerInfo.firstChild),be=t,W=!0,De=null,n=hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===o){t=it(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return mc(t),e===null&&aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ta(r,o)?a=null:i!==null&&ta(r,i)&&(t.flags|=32),Wc(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&aa(t),null;case 13:return Uc(e,t,n);case 4:return rl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Ss(e,t,r,o,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,_(vo,r._currentValue),r._currentValue=a,i!==null)if(Be(i.value,a)){if(i.children===o.children&&!ge.current){t=it(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=et(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),la(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),la(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fn(t,n),o=Te(o),r=r(o),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),js(e,t,r,o,n);case 15:return Dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Xr(e,t),t.tag=1,ye(r)?(e=!0,mo(t)):e=!1,fn(t,n),Mc(t,r,o),ua(t,r,o,n),ha(null,t,r,!0,e,n);case 19:return $c(e,t,n);case 22:return Fc(e,t,n)}throw Error(N(156,t.tag))};function id(e,t){return zu(e,t)}function op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new op(e,t,n,r)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_a)return 11;if(e===Da)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function to(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")vl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qt:return Dt(n.children,o,i,t);case Oa:a=8,o|=8;break;case Li:return e=Ce(12,n,t,o|2),e.elementType=Li,e.lanes=i,e;case Ai:return e=Ce(13,n,t,o),e.elementType=Ai,e.lanes=i,e;case Mi:return e=Ce(19,n,t,o),e.elementType=Mi,e.lanes=i,e;case mu:return Uo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:a=10;break e;case pu:a=9;break e;case _a:a=11;break e;case Da:a=14;break e;case dt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Uo(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=mu,e.lanes=n,e.stateNode={isHidden:!1},e}function Si(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function ji(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ap(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xl(e,t,n,r,o,i,a,s,u){return e=new ap(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nl(i),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return It;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ye(n))return ac(e,n,t)}return t}function ld(e,t,n,r,o,i,a,s,u){return e=xl(n,r,!0,e,o,i,a,s,u),e.context=ad(null),n=e.current,r=ce(),o=St(n),i=et(r,o),i.callback=t??null,kt(n,i,o),e.current.lanes=o,yr(e,o,r),ve(e,r),e}function $o(e,t,n,r){var o=t.current,i=ce(),a=St(o);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(o,t,a),e!==null&&(We(e,o,a,i),Kr(e,o,a)),a}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wl(e,t){Os(e,t),(e=e.alternate)&&Os(e,t)}function sp(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function kl(e){this._internalRoot=e}Ho.prototype.render=kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));$o(e,t,null,null)};Ho.prototype.unmount=kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){$o(null,e,null,null)}),t[rt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&Bu(e)}};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _s(){}function up(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Eo(a);i.call(c)}}var a=ld(t,r,e,0,null,!1,!1,"",_s);return e._reactRootContainer=a,e[rt]=a.current,ar(e.nodeType===8?e.parentNode:e),$t(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Eo(u);s.call(c)}}var u=xl(e,0,!1,null,null,!1,!1,"",_s);return e._reactRootContainer=u,e[rt]=u.current,ar(e.nodeType===8?e.parentNode:e),$t(function(){$o(t,u,n,r)}),u}function Go(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=Eo(a);s.call(u)}}$o(t,a,e,o)}else a=up(n,t,e,o,r);return Eo(a)}_u=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ba(t,n|1),ve(t,Y()),!(M&6)&&(kn=Y()+500,Ct()))}break;case 13:$t(function(){var r=ot(e,1);if(r!==null){var o=ce();We(r,e,1,o)}}),wl(e,1)}};Ua=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=ce();We(t,e,134217728,n)}wl(e,134217728)}};Du=function(e){if(e.tag===13){var t=St(e),n=ot(e,t);if(n!==null){var r=ce();We(n,e,t,r)}wl(e,t)}};Fu=function(){return O};Wu=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Vi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oo(r);if(!o)throw Error(N(90));yu(r),Di(r,o)}}}break;case"textarea":xu(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Iu=ml;Ru=$t;var cp={usingClientEntryPoint:!1,Events:[xr,en,Oo,ju,Nu,ml]},On={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{zo=Ur.inject(dp),Ge=Ur}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(t))throw Error(N(200));return lp(e,t,null,n)};je.createRoot=function(e,t){if(!bl(e))throw Error(N(299));var n=!1,r="",o=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xl(e,1,!1,null,null,n,!1,r,o),e[rt]=t.current,ar(e.nodeType===8?e.parentNode:e),new kl(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return $t(e)};je.hydrate=function(e,t,n){if(!Vo(t))throw Error(N(200));return Go(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!bl(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=sd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ld(t,null,e,1,n??null,o,!1,i,a),e[rt]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)};je.render=function(e,t,n){if(!Vo(t))throw Error(N(200));return Go(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(N(40));return e._reactRootContainer?($t(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};je.unstable_batchedUpdates=ml;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Go(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),uu.exports=je;var hp=uu.exports,Ds=hp;Ti.createRoot=Ds.createRoot,Ti.hydrateRoot=Ds.hydrateRoot;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fs="popstate";function fp(e={}){function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return ja("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:mr(o)}return mp(t,n,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pp(){return Math.random().toString(36).substring(2,10)}function Ws(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Nn(t):t,state:n,key:t&&t.key||r||pp()}}function mr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function mp(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s="POP",u=null,c=g();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function g(){return(a.state||{idx:null}).idx}function d(){s="POP";let w=g(),f=w==null?null:w-c;c=w,u&&u({action:s,location:v.location,delta:f})}function m(w,f){s="PUSH";let h=ja(v.location,w,f);c=g()+1;let p=Ws(h,c),k=v.createHref(h);try{a.pushState(p,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(k)}i&&u&&u({action:s,location:v.location,delta:1})}function x(w,f){s="REPLACE";let h=ja(v.location,w,f);c=g();let p=Ws(h,c),k=v.createHref(h);a.replaceState(p,"",k),i&&u&&u({action:s,location:v.location,delta:0})}function b(w){return gp(w)}let v={get action(){return s},get location(){return e(o,a)},listen(w){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Fs,d),u=w,()=>{o.removeEventListener(Fs,d),u=null}},createHref(w){return t(o,w)},createURL:b,encodeLocation(w){let f=b(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:x,go(w){return a.go(w)}};return v}function gp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:mr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function cd(e,t,n="/"){return yp(e,t,n,!1)}function yp(e,t,n,r){let o=typeof t=="string"?Nn(t):t,i=at(o.pathname||"/",n);if(i==null)return null;let a=dd(e);vp(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let c=Cp(i);s=Rp(a[u],c,r)}return s}function dd(e,t=[],n=[],r="",o=!1){let i=(a,s,u=o,c)=>{let g={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&u)return;$(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let d=tt([r,g.relativePath]),m=n.concat(g);a.children&&a.children.length>0&&($(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),dd(a.children,t,m,d,u)),!(a.path==null&&!a.index)&&t.push({path:d,score:Np(d,a.index),routesMeta:m})};return e.forEach((a,s)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,s);else for(let c of hd(a.path))i(a,s,!0,c)}),t}function hd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=hd(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function vp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ip(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var xp=/^:[\w-]+$/,wp=3,kp=2,bp=1,Sp=10,jp=-2,Bs=e=>e==="*";function Np(e,t){let n=e.split("/"),r=n.length;return n.some(Bs)&&(r+=jp),t&&(r+=kp),n.filter(o=>!Bs(o)).reduce((o,i)=>o+(xp.test(i)?wp:i===""?bp:Sp),r)}function Ip(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Rp(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",d=Co({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),m=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Co({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},g)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:tt([i,d.pathname]),pathnameBase:Lp(tt([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=tt([i,d.pathnameBase]))}return a}function Co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ep(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,{paramName:g,isOptional:d},m)=>{if(g==="*"){let b=s[m]||"";a=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const x=s[m];return d&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Ep(e,t=!1,n=!0){qe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Cp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function at(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var Pp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Tp(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Nn(e):e,i;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?i=Us(n.substring(1),"/"):i=Us(n,t)):i=t,{pathname:i,search:Ap(r),hash:Mp(o)}}function Us(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ni(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fd(e){let t=zp(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function pd(e,t,n,r=!1){let o;typeof e=="string"?o=Nn(e):(o={...e},$(!o.pathname||!o.pathname.includes("?"),Ni("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),Ni("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),Ni("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}s=d>=0?t[d]:"/"}let u=Tp(o,s),c=a&&a!=="/"&&a.endsWith("/"),g=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}var tt=e=>e.join("/").replace(/\/\/+/g,"/"),Lp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ap=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Op=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function _p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Dp(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var md=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gd(e,t){let n=e;if(typeof n!="string"||!Pp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(md)try{let i=new URL(window.location.href),a=n.startsWith("//")?new URL(i.protocol+n):new URL(n),s=at(a.pathname,t);a.origin===i.origin&&s!=null?n=s+a.search+a.hash:o=!0}catch{qe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yd=["POST","PUT","PATCH","DELETE"];new Set(yd);var Fp=["GET",...yd];new Set(Fp);var In=y.createContext(null);In.displayName="DataRouter";var Yo=y.createContext(null);Yo.displayName="DataRouterState";var Wp=y.createContext(!1),vd=y.createContext({isTransitioning:!1});vd.displayName="ViewTransition";var Bp=y.createContext(new Map);Bp.displayName="Fetchers";var Up=y.createContext(null);Up.displayName="Await";var Le=y.createContext(null);Le.displayName="Navigation";var kr=y.createContext(null);kr.displayName="Location";var Ke=y.createContext({outlet:null,matches:[],isDataRoute:!1});Ke.displayName="Route";var Sl=y.createContext(null);Sl.displayName="RouteError";var xd="REACT_ROUTER_ERROR",$p="REDIRECT",Hp="ROUTE_ERROR_RESPONSE";function Vp(e){if(e.startsWith(`${xd}:${$p}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Gp(e){if(e.startsWith(`${xd}:${Hp}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Op(t.status,t.statusText,t.data)}catch{}}function Yp(e,{relative:t}={}){$(br(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(Le),{hash:o,pathname:i,search:a}=Sr(e,{relative:t}),s=i;return n!=="/"&&(s=i==="/"?n:tt([n,i])),r.createHref({pathname:s,search:a,hash:o})}function br(){return y.useContext(kr)!=null}function Ue(){return $(br(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(kr).location}var wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kd(e){y.useContext(Le).static||y.useLayoutEffect(e)}function qp(){let{isDataRoute:e}=y.useContext(Ke);return e?um():Kp()}function Kp(){$(br(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(In),{basename:t,navigator:n}=y.useContext(Le),{matches:r}=y.useContext(Ke),{pathname:o}=Ue(),i=JSON.stringify(fd(r)),a=y.useRef(!1);return kd(()=>{a.current=!0}),y.useCallback((u,c={})=>{if(qe(a.current,wd),!a.current)return;if(typeof u=="number"){n.go(u);return}let g=pd(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:tt([t,g.pathname])),(c.replace?n.replace:n.push)(g,c.state,c)},[t,n,i,o,e])}var Qp=y.createContext(null);function Jp(e){let t=y.useContext(Ke).outlet;return y.useMemo(()=>t&&y.createElement(Qp.Provider,{value:e},t),[t,e])}function Sr(e,{relative:t}={}){let{matches:n}=y.useContext(Ke),{pathname:r}=Ue(),o=JSON.stringify(fd(n));return y.useMemo(()=>pd(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Xp(e,t){return bd(e,t)}function bd(e,t,n,r,o){var h;$(br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=y.useContext(Le),{matches:a}=y.useContext(Ke),s=a[a.length-1],u=s?s.params:{},c=s?s.pathname:"/",g=s?s.pathnameBase:"/",d=s&&s.route;{let p=d&&d.path||"";jd(c,!d||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let m=Ue(),x;if(t){let p=typeof t=="string"?Nn(t):t;$(g==="/"||((h=p.pathname)==null?void 0:h.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${p.pathname}" was given in the \`location\` prop.`),x=p}else x=m;let b=x.pathname||"/",v=b;if(g!=="/"){let p=g.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(p.length).join("/")}let w=cd(e,{pathname:v});qe(d||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),qe(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let f=rm(w&&w.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:tt([g,i.encodeLocation?i.encodeLocation(p.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?g:tt([g,i.encodeLocation?i.encodeLocation(p.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathnameBase])})),a,n,r,o);return t&&f?y.createElement(kr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},f):f}function Zp(){let e=sm(),t=_p(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:i},"ErrorBoundary")," or"," ",y.createElement("code",{style:i},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,a)}var em=y.createElement(Zp,null),Sd=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Gp(e.digest);n&&(e=n)}let t=e!==void 0?y.createElement(Ke.Provider,{value:this.props.routeContext},y.createElement(Sl.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(tm,{error:e},t):t}};Sd.contextType=Wp;var Ii=new WeakMap;function tm({children:e,error:t}){let{basename:n}=y.useContext(Le);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Vp(t.digest);if(r){let o=Ii.get(t);if(o)throw o;let i=gd(r.location,n);if(md&&!Ii.get(t))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Ii.set(t,a),a}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function nm({routeContext:e,match:t,children:n}){let r=y.useContext(In);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Ke.Provider,{value:e},n)}function rm(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=n==null?void 0:n.errors;if(a!=null){let g=i.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);$(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n)for(let g=0;g<i.length;g++){let d=i[g];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=g),d.route.id){let{loaderData:m,errors:x}=n,b=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!x||x[d.route.id]===void 0);if(d.route.lazy||b){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}let c=n&&r?(g,d)=>{var m,x;r(g,{location:n.location,params:((x=(m=n.matches)==null?void 0:m[0])==null?void 0:x.params)??{},unstable_pattern:Dp(n.matches),errorInfo:d})}:void 0;return i.reduceRight((g,d,m)=>{let x,b=!1,v=null,w=null;n&&(x=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||em,s&&(u<0&&m===0?(jd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,w=null):u===m&&(b=!0,w=d.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,m+1)),h=()=>{let p;return x?p=v:b?p=w:d.route.Component?p=y.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=g,y.createElement(nm,{match:d,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?y.createElement(Sd,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):h()},null)}function jl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function om(e){let t=y.useContext(In);return $(t,jl(e)),t}function im(e){let t=y.useContext(Yo);return $(t,jl(e)),t}function am(e){let t=y.useContext(Ke);return $(t,jl(e)),t}function Nl(e){let t=am(e),n=t.matches[t.matches.length-1];return $(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function lm(){return Nl("useRouteId")}function sm(){var r;let e=y.useContext(Sl),t=im("useRouteError"),n=Nl("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function um(){let{router:e}=om("useNavigate"),t=Nl("useNavigate"),n=y.useRef(!1);return kd(()=>{n.current=!0}),y.useCallback(async(o,i={})=>{qe(n.current,wd),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var $s={};function jd(e,t,n){!t&&!$s[e]&&($s[e]=!0,qe(!1,n))}y.memo(cm);function cm({routes:e,future:t,state:n,onError:r}){return bd(e,void 0,n,r,t)}function dm(e){return Jp(e.context)}function Me(e){$(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hm({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1,unstable_useTransitions:a}){$(!br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:o,static:i,unstable_useTransitions:a,future:{}}),[s,o,i,a]);typeof n=="string"&&(n=Nn(n));let{pathname:c="/",search:g="",hash:d="",state:m=null,key:x="default"}=n,b=y.useMemo(()=>{let v=at(c,s);return v==null?null:{location:{pathname:v,search:g,hash:d,state:m,key:x},navigationType:r}},[s,c,g,d,m,x,r]);return qe(b!=null,`<Router basename="${s}"> is not able to match the URL "${c}${g}${d}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:y.createElement(Le.Provider,{value:u},y.createElement(kr.Provider,{children:t,value:b}))}function fm({children:e,location:t}){return Xp(Na(e),t)}function Na(e,t=[]){let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...t,o];if(r.type===y.Fragment){n.push.apply(n,Na(r.props.children,i));return}$(r.type===Me,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Na(r.props.children,i)),n.push(a)}),n}var no="get",ro="application/x-www-form-urlencoded";function qo(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function pm(e){return qo(e)&&e.tagName.toLowerCase()==="button"}function mm(e){return qo(e)&&e.tagName.toLowerCase()==="form"}function gm(e){return qo(e)&&e.tagName.toLowerCase()==="input"}function ym(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vm(e,t){return e.button===0&&(!t||t==="_self")&&!ym(e)}var $r=null;function xm(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var wm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ri(e){return e!=null&&!wm.has(e)?(qe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):e}function km(e,t){let n,r,o,i,a;if(mm(e)){let s=e.getAttribute("action");r=s?at(s,t):null,n=e.getAttribute("method")||no,o=Ri(e.getAttribute("enctype"))||ro,i=new FormData(e)}else if(pm(e)||gm(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?at(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||no,o=Ri(e.getAttribute("formenctype"))||Ri(s.getAttribute("enctype"))||ro,i=new FormData(s,e),!xm()){let{name:c,type:g,value:d}=e;if(g==="image"){let m=c?`${c}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else c&&i.append(c,d)}}else{if(qo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=no,r=null,o=ro,a=e}return i&&o==="text/plain"&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Il(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bm(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&at(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function Sm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jm(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Nm(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let a=await Sm(i,n);return a.links?a.links():[]}return[]}));return Cm(r.flat(1).filter(jm).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Hs(e,t,n,r,o,i){let a=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,s=(u,c)=>{var g;return n[c].pathname!==u.pathname||((g=n[c].route.path)==null?void 0:g.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return i==="assets"?t.filter((u,c)=>a(u,c)||s(u,c)):i==="data"?t.filter((u,c)=>{var d;let g=r.routes[u.route.id];if(!g||!g.hasLoader)return!1;if(a(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Im(e,t,{includeHydrateFallback:n}={}){return Rm(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function Rm(e){return[...new Set(e)]}function Em(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Cm(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let i=JSON.stringify(Em(o));return n.has(i)||(n.add(i),r.push({key:i,link:o})),r},[])}function Nd(){let e=y.useContext(In);return Il(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Pm(){let e=y.useContext(Yo);return Il(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rl=y.createContext(void 0);Rl.displayName="FrameworkContext";function Id(){let e=y.useContext(Rl);return Il(e,"You must render this element inside a <HydratedRouter> element"),e}function Tm(e,t){let n=y.useContext(Rl),[r,o]=y.useState(!1),[i,a]=y.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:g,onTouchStart:d}=t,m=y.useRef(null);y.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=f=>{f.forEach(h=>{a(h.isIntersecting)})},w=new IntersectionObserver(v,{threshold:.5});return m.current&&w.observe(m.current),()=>{w.disconnect()}}},[e]),y.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let x=()=>{o(!0)},b=()=>{o(!1),a(!1)};return n?e!=="intent"?[i,m,{}]:[i,m,{onFocus:_n(s,x),onBlur:_n(u,b),onMouseEnter:_n(c,x),onMouseLeave:_n(g,b),onTouchStart:_n(d,x)}]:[!1,m,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function zm({page:e,...t}){let{router:n}=Nd(),r=y.useMemo(()=>cd(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?y.createElement(Am,{page:e,matches:r,...t}):null}function Lm(e){let{manifest:t,routeModules:n}=Id(),[r,o]=y.useState([]);return y.useEffect(()=>{let i=!1;return Nm(e,t,n).then(a=>{i||o(a)}),()=>{i=!0}},[e,t,n]),r}function Am({page:e,matches:t,...n}){let r=Ue(),{future:o,manifest:i,routeModules:a}=Id(),{basename:s}=Nd(),{loaderData:u,matches:c}=Pm(),g=y.useMemo(()=>Hs(e,t,c,i,r,"data"),[e,t,c,i,r]),d=y.useMemo(()=>Hs(e,t,c,i,r,"assets"),[e,t,c,i,r]),m=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(h=>{var k;let p=i.routes[h.route.id];!p||!p.hasLoader||(!g.some(j=>j.route.id===h.route.id)&&h.route.id in u&&((k=a[h.route.id])!=null&&k.shouldRevalidate)||p.hasClientLoader?w=!0:v.add(h.route.id))}),v.size===0)return[];let f=bm(e,s,o.unstable_trailingSlashAwareDataRequests,"data");return w&&v.size>0&&f.searchParams.set("_routes",t.filter(h=>v.has(h.route.id)).map(h=>h.route.id).join(",")),[f.pathname+f.search]},[s,o.unstable_trailingSlashAwareDataRequests,u,r,i,g,t,e,a]),x=y.useMemo(()=>Im(d,i),[d,i]),b=Lm(d);return y.createElement(y.Fragment,null,m.map(v=>y.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),x.map(v=>y.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),b.map(({key:v,link:w})=>y.createElement("link",{key:v,nonce:n.nonce,...w,crossOrigin:w.crossOrigin??n.crossOrigin})))}function Mm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Om&&(window.__reactRouterVersion="7.13.0")}catch{}function _m({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=y.useRef();o.current==null&&(o.current=fp({window:r,v5Compat:!0}));let i=o.current,[a,s]=y.useState({action:i.action,location:i.location}),u=y.useCallback(c=>{n===!1?s(c):y.startTransition(()=>s(c))},[n]);return y.useLayoutEffect(()=>i.listen(u),[i,u]),y.createElement(hm,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i,unstable_useTransitions:n})}var Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=y.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:a,state:s,target:u,to:c,preventScrollReset:g,viewTransition:d,unstable_defaultShouldRevalidate:m,...x},b){let{basename:v,unstable_useTransitions:w}=y.useContext(Le),f=typeof c=="string"&&Rd.test(c),h=gd(c,v);c=h.to;let p=Yp(c,{relative:o}),[k,j,S]=Tm(r,x),I=Bm(c,{replace:a,state:s,target:u,preventScrollReset:g,relative:o,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:w});function E(P){t&&t(P),P.defaultPrevented||I(P)}let A=y.createElement("a",{...x,...S,href:h.absoluteURL||p,onClick:h.isExternal||i?t:E,ref:Mm(b,j),target:u,"data-discover":!f&&n==="render"?"true":void 0});return k&&!f?y.createElement(y.Fragment,null,A,y.createElement(zm,{page:p})):A});Ee.displayName="Link";var Dm=y.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:a,viewTransition:s,children:u,...c},g){let d=Sr(a,{relative:c.relative}),m=Ue(),x=y.useContext(Yo),{navigator:b,basename:v}=y.useContext(Le),w=x!=null&&Gm(d)&&s===!0,f=b.encodeLocation?b.encodeLocation(d).pathname:d.pathname,h=m.pathname,p=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(h=h.toLowerCase(),p=p?p.toLowerCase():null,f=f.toLowerCase()),p&&v&&(p=at(p,v)||p);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let j=h===f||!o&&h.startsWith(f)&&h.charAt(k)==="/",S=p!=null&&(p===f||!o&&p.startsWith(f)&&p.charAt(f.length)==="/"),I={isActive:j,isPending:S,isTransitioning:w},E=j?t:void 0,A;typeof r=="function"?A=r(I):A=[r,j?"active":null,S?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof i=="function"?i(I):i;return y.createElement(Ee,{...c,"aria-current":E,className:A,ref:g,style:P,to:a,viewTransition:s},typeof u=="function"?u(I):u)});Dm.displayName="NavLink";var Fm=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:a=no,action:s,onSubmit:u,relative:c,preventScrollReset:g,viewTransition:d,unstable_defaultShouldRevalidate:m,...x},b)=>{let{unstable_useTransitions:v}=y.useContext(Le),w=Hm(),f=Vm(s,{relative:c}),h=a.toLowerCase()==="get"?"get":"post",p=typeof s=="string"&&Rd.test(s),k=j=>{if(u&&u(j),j.defaultPrevented)return;j.preventDefault();let S=j.nativeEvent.submitter,I=(S==null?void 0:S.getAttribute("formmethod"))||a,E=()=>w(S||j.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:o,state:i,relative:c,preventScrollReset:g,viewTransition:d,unstable_defaultShouldRevalidate:m});v&&n!==!1?y.startTransition(()=>E()):E()};return y.createElement("form",{ref:b,method:h,action:f,onSubmit:r?u:k,...x,"data-discover":!p&&e==="render"?"true":void 0})});Fm.displayName="Form";function Wm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ed(e){let t=y.useContext(In);return $(t,Wm(e)),t}function Bm(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let c=qp(),g=Ue(),d=Sr(e,{relative:i});return y.useCallback(m=>{if(vm(m,t)){m.preventDefault();let x=n!==void 0?n:mr(g)===mr(d),b=()=>c(e,{replace:x,state:r,preventScrollReset:o,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:s});u?y.startTransition(()=>b()):b()}},[g,c,d,n,r,t,e,o,i,a,s,u])}var Um=0,$m=()=>`__${String(++Um)}__`;function Hm(){let{router:e}=Ed("useSubmit"),{basename:t}=y.useContext(Le),n=lm(),r=e.fetch,o=e.navigate;return y.useCallback(async(i,a={})=>{let{action:s,method:u,encType:c,formData:g,body:d}=km(i,t);if(a.navigate===!1){let m=a.fetcherKey||$m();await r(m,n,a.action||s,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:g,body:d,formMethod:a.method||u,formEncType:a.encType||c,flushSync:a.flushSync})}else await o(a.action||s,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:g,body:d,formMethod:a.method||u,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,o,t,n])}function Vm(e,{relative:t}={}){let{basename:n}=y.useContext(Le),r=y.useContext(Ke);$(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...Sr(e||".",{relative:t})},a=Ue();if(e==null){i.search=a.search;let s=new URLSearchParams(i.search),u=s.getAll("index");if(u.some(g=>g==="")){s.delete("index"),u.filter(d=>d).forEach(d=>s.append("index",d));let g=s.toString();i.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:tt([n,i.pathname])),mr(i)}function Gm(e,{relative:t}={}){let n=y.useContext(vd);$(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ed("useViewTransitionState"),o=Sr(e,{relative:t});if(!n.isTransitioning)return!1;let i=at(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=at(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Co(o.pathname,a)!=null||Co(o.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ym={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),se=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...c},g)=>y.createElement("svg",{ref:g,...Ym,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:["lucide",`lucide-${qm(e)}`,s].join(" "),...c},[...t.map(([d,m])=>y.createElement(d,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=se("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=se("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=se("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=se("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=se("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=se("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ld="/assets/ResoIcon_512-DdcJvTKP.png",rg=["zh","zh-TW","en","ja"],Ia="en",Ad="light",Md=y.createContext(null),Vs=e=>{if(!e)return Ia;const t=String(e).trim().toLowerCase();return t==="zh-tw"||t==="zh_hant"||t==="zh-hant"?"zh-TW":t==="zh-cn"||t==="zh_hans"||t==="zh-hans"?"zh":t==="en"||t==="zh"||t==="ja"?t:rg.includes(e)?e:Ia},Gs=e=>e==="dark"?"dark":Ad,og=({children:e})=>{const[t,n]=y.useState(()=>typeof window>"u"?Ia:Vs(window.localStorage.getItem("language"))),[r,o]=y.useState(()=>typeof window>"u"?Ad:Gs(window.localStorage.getItem("theme")));y.useEffect(()=>{typeof window>"u"||(window.localStorage.setItem("language",t),document.documentElement.lang=t==="zh"?"zh-CN":t==="zh-TW"?"zh-TW":t==="ja"?"ja":"en")},[t]),y.useEffect(()=>{typeof window>"u"||(window.localStorage.setItem("theme",r),document.documentElement.classList.toggle("dark",r==="dark"))},[r]);const i=y.useMemo(()=>({language:t,setLanguage:a=>n(Vs(a)),theme:r,setTheme:a=>o(Gs(a)),toggleTheme:()=>o(a=>a==="dark"?"light":"dark")}),[t,r]);return l.jsx(Md.Provider,{value:i,children:e})},xe=()=>{const e=y.useContext(Md);if(!e)throw new Error("useAppPreferences must be used within AppPreferencesProvider");return e},ig={万:"萬",与:"與",专:"專",业:"業",个:"個",为:"為",义:"義",么:"麼",习:"習",书:"書",买:"買",乱:"亂",争:"爭",亏:"虧",云:"雲",亚:"亞",产:"產",仅:"僅",从:"從",众:"眾",优:"優",会:"會",传:"傳",价:"價",体:"體",余:"餘",你:"你",侣:"侶",侧:"側",储:"儲",关:"關",兴:"興",内:"內",写:"寫",决:"決",况:"況",冲:"衝",击:"擊",则:"則",刚:"剛",创:"創",删:"刪",别:"別",到:"到",办:"辦",动:"動",务:"務",势:"勢",区:"區",协:"協",单:"單",卖:"賣",历:"歷",压:"壓",发:"發",变:"變",叙:"敘",参:"參",双:"雙",发:"發",台:"臺",叶:"葉",号:"號",后:"後",听:"聽",启:"啟",员:"員",问:"問",图:"圖",围:"圍",国:"國",圆:"圓",场:"場",块:"塊",坚:"堅",处:"處",备:"備",够:"夠",头:"頭",奖:"獎",妈:"媽",实:"實",审:"審",写:"寫",对:"對",导:"導",将:"將",层:"層",归:"歸",录:"錄",当:"當",形:"形",彻:"徹",忆:"憶",总:"總",态:"態",忆:"憶",怀:"懷",态:"態",户:"戶",扩:"擴",护:"護",报:"報",拟:"擬",换:"換",据:"據",揽:"攬",摄:"攝",摆:"擺",数:"數",断:"斷",无:"無",时:"時",显:"顯",暂:"暫",术:"術",杂:"雜",权:"權",条:"條",来:"來",构:"構",样:"樣",标:"標",档:"檔",检:"檢",权:"權",欢:"歡",气:"氣",汇:"匯",汉:"漢",汤:"湯",没:"沒",沟:"溝",测:"測",湾:"灣",满:"滿",滤:"濾",灵:"靈",点:"點",热:"熱",状:"狀",现:"現",环:"環",画:"畫",畅:"暢",界:"界",疗:"療",监:"監",盖:"蓋",盘:"盤",着:"著",码:"碼",础:"礎",确:"確",离:"離",种:"種",积:"積",称:"稱",稳:"穩",笔:"筆",简:"簡",类:"類",粘:"黏",级:"級",线:"線",练:"練",组:"組",结:"結",给:"給",统:"統",网:"網",继:"繼",续:"續",维:"維",绘:"繪",绿:"綠",编:"編",缩:"縮",罚:"罰",置:"置",联:"聯",肤:"膚",脱:"脫",艺:"藝",节:"節",范:"範",类:"類",签:"簽",简:"簡",粮:"糧",纪:"紀",纯:"純",级:"級",纳:"納",纽:"紐",线:"線",组:"組",结:"結",绕:"繞",统:"統",继:"繼",续:"續",罗:"羅",网:"網",翻:"翻",职:"職",联:"聯",聪:"聰",肃:"肅",胁:"脅",脸:"臉",脱:"脫",与:"與",艺:"藝",苏:"蘇",获:"獲",营:"營",装:"裝",观:"觀",览:"覽",触:"觸",订:"訂",认:"認",讲:"講",设:"設",访:"訪",证:"證",试:"試",询:"詢",该:"該",语:"語",说:"說",请:"請",诸:"諸",读:"讀",调:"調",谢:"謝",识:"識",议:"議",译:"譯",详:"詳",谱:"譜",护:"護",贝:"貝",负:"負",贡:"貢",财:"財",责:"責",购:"購",资:"資",赋:"賦",质:"質",赞:"贊",赶:"趕",跃:"躍",轮:"輪",轻:"輕",载:"載",较:"較",边:"邊",达:"達",迁:"遷",还:"還",这:"這",进:"進",远:"遠",连:"連",适:"適",选:"選",递:"遞",遗:"遺",邮:"郵",里:"裡",释:"釋",钟:"鐘",钢:"鋼",钥:"鑰",链:"鏈",销:"銷",错:"錯",键:"鍵",长:"長",门:"門",闭:"閉",阅:"閱",间:"間",队:"隊",阳:"陽",阴:"陰",际:"際",隐:"隱",难:"難",页:"頁",顶:"頂",项:"項",顺:"順",须:"須",顾:"顧",馈:"饋",马:"馬",验:"驗",驱:"驅",高:"高",麦:"麥",黄:"黃",点:"點",齐:"齊",龙:"龍",录:"錄",录:"錄"},Ei=new WeakMap,ag=e=>e.split("").map(t=>ig[t]||t).join(""),Ra=e=>{if(typeof e=="string")return ag(e);if(Array.isArray(e))return e.map(t=>Ra(t));if(e&&typeof e=="object"){if(Ei.has(e))return Ei.get(e);const t=Object.fromEntries(Object.entries(e).map(([n,r])=>[n,Ra(r)]));return Ei.set(e,t),t}return e},ne=(e,t)=>e[t]?e[t]:t==="zh-TW"&&e.zh?Ra(e.zh):e.en||e.zh||e.ja,lg={en:{product:"Product",pricing:"Pricing",docs:"Docs",buildJourney:"Build Journey",resources:"Resources",licenseManager:"License Manager",buildBlocks:"Build Blocks",download:"Download"},zh:{product:"产品",pricing:"定价",docs:"文档",buildJourney:"Build Journey",resources:"资源",licenseManager:"许可证管理器",buildBlocks:"Build Blocks",download:"下载"},ja:{product:"プロダクト",pricing:"料金",docs:"ドキュメント",buildJourney:"Build Journey",resources:"リソース",licenseManager:"ライセンスマネージャー",buildBlocks:"Build Blocks",download:"ダウンロード"}},Ys=e=>{typeof window.gtag=="function"&&window.gtag("event","download",{event_category:"Direct Download",event_label:`Reso DMG from ${e}`,value:1})},sg=({isScrolled:e=!1})=>{const t=Ue(),{language:n}=xe(),[r,o]=y.useState(!1),[i,a]=y.useState(!1),[s,u]=y.useState(!1),c=y.useRef(null),g=y.useRef(null),d=y.useRef(null),m=ne(lg,n),x=[{key:"product",href:"/#features"},{key:"pricing",to:"/pricing"},{key:"buildJourney",to:"/build-journey"}],b=[{key:"docs",to:"/docs"},{key:"licenseManager",to:"/retrieve"},{key:"buildBlocks",to:"/build-blocks"}],v=()=>{u(!1)};return y.useEffect(()=>{const w=c.current,f=g.current;if(!w||!f)return;let h=0,p=!1,k=!1,j=0,S=0,I=performance.now();const E=185,A=ut=>{const Rn=Math.min((ut-I)/1e3,.05);I=ut;const Qo=k?E:0,En=k?5.2:4;S+=(Qo-S)*Math.min(En*Rn,1),j=(j+S*Rn)%360,f.style.transform=`rotate(${j.toFixed(3)}deg)`,k||S>.25?h=requestAnimationFrame(A):(p=!1,h=0,S=0,j=0,f.style.transform="rotate(0deg)")},P=()=>{p||(p=!0,I=performance.now(),h=requestAnimationFrame(A))},fe=()=>{k=!0,P()},st=()=>{k=!1,P()};return w.addEventListener("pointerenter",fe),w.addEventListener("pointerleave",st),()=>{w.removeEventListener("pointerenter",fe),w.removeEventListener("pointerleave",st),h&&cancelAnimationFrame(h),f.style.transform="rotate(0deg)"}},[]),y.useEffect(()=>{o(!1),a(!1),u(!1)},[t.pathname]),y.useEffect(()=>{if(!s)return;const w=h=>{var p;(p=d.current)!=null&&p.contains(h.target)||v()},f=h=>{h.key==="Escape"&&v()};return document.addEventListener("mousedown",w),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("keydown",f)}},[s]),l.jsxs("nav",{className:`!fixed top-0 left-0 right-0 !z-[120] transition-all duration-300 ${e?"bg-white dark:bg-black border-b border-black/[0.08] dark:border-white/[0.08]":"bg-transparent"}`,children:[l.jsxs("div",{className:"max-w-6xl mx-auto px-6 h-20 flex items-center justify-between",children:[l.jsxs(Ee,{to:"/",ref:c,className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-8 h-8",children:l.jsx("img",{ref:g,src:Ld,alt:"Reso",className:"brand-logo-icon w-full h-full rounded-lg"})}),l.jsx("span",{className:"text-gray-900 dark:text-gray-100 font-medium text-lg tracking-tight",children:"Reso"})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-10 text-[15px] text-gray-600 dark:text-gray-300",children:[x.map(w=>w.external?l.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-white",children:[l.jsx("span",{children:m[w.key]}),l.jsx(sn,{size:14,className:"text-gray-400"})]},w.key):w.to?l.jsx(Ee,{to:w.to,className:`transition-colors hover:text-gray-900 dark:hover:text-white ${t.pathname===w.to?"text-gray-900 dark:text-white":""}`,children:m[w.key]},w.key):l.jsx("a",{href:w.href,className:"transition-colors hover:text-gray-900 dark:hover:text-white",children:m[w.key]},w.key)),l.jsxs("div",{ref:d,className:"relative z-[80]",children:[l.jsx("button",{onClick:()=>{u(w=>!w)},className:`inline-flex items-center transition-colors hover:text-gray-900 dark:hover:text-white ${["/docs","/retrieve","/build-blocks"].includes(t.pathname)?"text-gray-900 dark:text-white":""}`,"aria-haspopup":"menu","aria-expanded":s,children:l.jsx("span",{children:m.resources})}),s&&l.jsx("div",{className:"absolute top-full -left-4 z-[90] pt-2 pointer-events-auto",children:l.jsx("div",{className:"w-52 overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-black shadow-lg p-1.5",children:b.map(w=>w.external?l.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",onClick:v,className:"flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",children:[l.jsx("span",{children:m[w.key]}),l.jsx(sn,{size:14,className:"text-gray-400"})]},w.key):l.jsx(Ee,{to:w.to,onClick:v,className:"block rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",children:m[w.key]},w.key))})})]}),l.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,onClick:()=>Ys("Navbar Desktop"),className:"px-[18px] py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black font-medium text-[14px] leading-none hover:bg-black dark:hover:bg-gray-100 transition-all",children:m.download})]}),l.jsx("button",{className:"md:hidden p-2 text-gray-900 dark:text-gray-100",onClick:()=>{o(w=>{const f=!w;return f||a(!1),f})},"aria-label":"Toggle mobile menu",children:r?l.jsx(zd,{size:24}):l.jsx(tg,{size:24})})]}),r&&l.jsxs("div",{className:"md:hidden bg-white dark:bg-black border-b border-black/[0.08] dark:border-white/[0.08] px-6 py-4 space-y-2",children:[x.map(w=>w.external?l.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-2 text-base text-gray-700 dark:text-gray-200",onClick:()=>o(!1),children:[l.jsx("span",{children:m[w.key]}),l.jsx(sn,{size:16,className:"text-gray-400"})]},w.key):w.to?l.jsx(Ee,{to:w.to,className:"block text-base py-2 text-gray-700 dark:text-gray-200",onClick:()=>o(!1),children:m[w.key]},w.key):l.jsx("a",{href:w.href,className:"block text-base py-2 text-gray-700 dark:text-gray-200",onClick:()=>o(!1),children:m[w.key]},w.key)),l.jsx("button",{onClick:()=>a(w=>!w),className:"w-full py-2 text-left text-base text-gray-700 dark:text-gray-200","aria-expanded":i,children:m.resources}),i&&l.jsx("div",{className:"ml-3 border-l border-gray-200 dark:border-gray-700 pl-3 space-y-1",children:b.map(w=>w.external?l.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-2 text-[15px] text-gray-700 dark:text-gray-200",onClick:()=>{a(!1),o(!1)},children:[l.jsx("span",{children:m[w.key]}),l.jsx(sn,{size:15,className:"text-gray-400"})]},w.key):l.jsx(Ee,{to:w.to,className:"block py-2 text-[15px] text-gray-700 dark:text-gray-200",onClick:()=>{a(!1),o(!1)},children:m[w.key]},w.key))}),l.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,onClick:()=>Ys("Navbar Mobile"),className:"block w-full text-center mt-2 px-5 py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black text-sm font-medium",children:m.download})]})]})},ug="modulepreload",cg=function(e){return"/"+e},qs={},Ko=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=cg(u),u in qs)return;qs[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ug,c||(d.as="script"),d.crossOrigin="",d.href=u,s&&d.setAttribute("nonce",s),document.head.appendChild(d),c)return new Promise((m,x)=>{d.addEventListener("load",m),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},dg=()=>l.jsxs("div",{className:"flex gap-6 sm:gap-10 items-center justify-center",children:[l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/cursor.svg",alt:"Cursor",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/linear.svg",alt:"Linear",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/slack.svg",alt:"Slack",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/discord.svg",alt:"Discord",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/notion.svg",alt:"Notion",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/github.svg",alt:"GitHub",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/obsidian.svg",alt:"Obsidian",width:"36",height:"36"})}),l.jsx("div",{className:"tool-icon",children:l.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/visualstudiocode.svg",alt:"VS Code",width:"36",height:"36"})}),l.jsx("style",{children:`
      .tool-icon {
        opacity: 0.4;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
      }
      .tool-icon:hover {
        opacity: 1;
        transform: translateY(-2px);
      }
      .tool-icon img {
        display: block;
        transition: filter 0.3s ease;
      }
      /* Dark mode: invert icons to white with brightness */
      .dark .tool-icon {
        opacity: 0.6;
      }
      .dark .tool-icon img {
        filter: invert(1) brightness(1.2);
      }
      .dark .tool-icon:hover {
        opacity: 1;
      }
      /* Cursor品牌色 */
      .tool-icon:nth-child(1):hover img {
        filter: brightness(0) saturate(100%) invert(50%) sepia(98%) saturate(2476%) hue-rotate(180deg) brightness(100%) contrast(101%);
      }
      /* Linear品牌色 */
      .tool-icon:nth-child(2):hover img {
        filter: brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(1945%) hue-rotate(228deg) brightness(98%) contrast(101%);
      }
      /* Slack品牌色 */
      .tool-icon:nth-child(3):hover img {
        filter: brightness(0) saturate(100%) invert(22%) sepia(92%) saturate(5584%) hue-rotate(272deg) brightness(83%) contrast(109%);
      }
      /* Discord品牌色 */
      .tool-icon:nth-child(4):hover img {
        filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(205deg) brightness(97%) contrast(104%);
      }
      /* Notion品牌色 */
      .tool-icon:nth-child(5):hover img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(100%);
      }
      /* GitHub品牌色 */
      .tool-icon:nth-child(6):hover img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(100%);
      }
      /* Obsidian品牌色 (紫色) */
      .tool-icon:nth-child(7):hover img {
        filter: brightness(0) saturate(100%) invert(30%) sepia(94%) saturate(1352%) hue-rotate(243deg) brightness(87%) contrast(96%);
      }
      /* VS Code品牌色 (蓝色) */
      .tool-icon:nth-child(8):hover img {
        filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(2000%) hue-rotate(190deg) brightness(95%) contrast(101%);
      }
    `})]}),hg=y.lazy(()=>Ko(()=>import("./ResoHeroMockup-3ls4DEGT.js"),__vite__mapDeps([0,1,2]))),fg={en:{title:"The voice-first AI workspace for Mac.",subtitle:"Hold Option anywhere to speak. Files stay local. Workflows stay uninterrupted.",download:"Download for macOS",worksWith:"Integrates with"},zh:{title:"Mac 原生的语音 AI 工作空间。",subtitle:"随时随地按住 Option 即可开口。文件全在本地，思路绝不打断。",download:"下载 macOS 版",worksWith:"轻松接入"},ja:{title:"Mac ネイティブの音声 AI ワークスペース。",subtitle:"どこでも Option を押して話すだけ。ファイルはローカルに留まり、思考を妨げません。",download:"macOS 版をダウンロード",worksWith:"対応アプリ"}},Ci=[{id:"capture",label:{en:"Capture",zh:"捕捉",ja:"キャプチャ"},caption:{en:"Hold Option anywhere. Speak, and Reso refines and inserts the text.",zh:"随时按住 Option 说话，Reso 会自动提炼并输入文本。",ja:"どこでも Option を押して話すだけ。Reso がテキストを整えて入力します。"}},{id:"workflow",label:{en:"Orchestrate",zh:"编排",ja:"オーケストレート"},caption:{en:"Build voice pipelines. Route your words through your own rules and scripts.",zh:"编排语音工作流。让你的话语穿过自定义的规则与脚本。",ja:"音声ワークフローを構築。話した言葉を独自のルールやスクリプトで処理します。"}},{id:"indexing",label:{en:"Memory",zh:"记忆",ja:"メモリ"},caption:{en:"Connect your notes. Reso reads local files to give AI your personal context.",zh:"连入你的笔记。Reso 通过读取本地文件，让 AI 懂你的上下文。",ja:"ノートを連携。ローカルファイルを読み込み、AI にあなたの文脈を理解させます。"}},{id:"discover",label:{en:"Discover",zh:"发现",ja:"ディスカバリー"},caption:{en:"Explore your mind. Watch recorded thoughts cluster naturally in a 3D space.",zh:"漫游你的思维。看所有录音在 3D 空间中自然聚类成星云。",ja:"思考を探索。録音されたアイデアが 3D 空間で自然に結びつくのを眺めます。"}}],pg=4200,Un=1080,Pi=640,Ea=1,mg=Math.round(Un*Ea),gg=()=>{const{language:e}=xe(),t=ne(fg,e),[n,r]=y.useState(0),[o,i]=y.useState(!1),a=y.useRef(null),[s,u]=y.useState(Ea),c=Ci[n],g=ne(c.caption,e);return y.useEffect(()=>{if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||o)return;const m=window.setInterval(()=>{r(x=>(x+1)%Ci.length)},pg);return()=>window.clearInterval(m)},[o]),y.useEffect(()=>{const d=a.current;if(!d||typeof ResizeObserver>"u")return;const m=new ResizeObserver(x=>{for(const b of x){const v=b.contentRect.width;v>0&&u(Math.min(Ea,v/Un))}});return m.observe(d),()=>m.disconnect()},[]),l.jsx("section",{className:"relative z-10 pt-24 pb-16",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[l.jsxs("div",{className:"mb-12 max-w-4xl",children:[l.jsx("h1",{className:"text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-black dark:text-white",children:t.title}),l.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl",children:t.subtitle}),l.jsxs("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,onClick:()=>{typeof window.gtag=="function"&&window.gtag("event","download",{event_category:"Direct Download",event_label:"Reso DMG from Hero",value:1})},className:"inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all px-7 py-3.5",children:[l.jsx("span",{children:t.download}),l.jsx(Cl,{size:18})]})]}),l.jsxs("div",{className:"mb-4 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between xl:gap-8",children:[l.jsx("div",{className:"max-w-2xl",children:l.jsx("h2",{className:"text-base md:text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100",children:g})}),l.jsx("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-2 xl:justify-end",children:Ci.map((d,m)=>{const x=ne(d.label,e),b=m===n;return l.jsx("button",{type:"button",onClick:()=>{r(m),i(!0)},className:`pb-1 text-sm font-medium transition-all border-b-2 ${b?"text-gray-900 dark:text-white border-gray-900 dark:border-white":"text-gray-400 dark:text-gray-500 border-transparent hover:text-gray-600 dark:hover:text-gray-300"}`,children:x},d.id)})})]}),l.jsxs("div",{ref:a,className:"relative mb-16 mx-auto",style:{width:"100%",maxWidth:mg,aspectRatio:`${Un} / ${Pi}`},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l.jsx("div",{"aria-hidden":!0,className:"absolute -inset-16 -z-10",style:{background:"radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.22) 0%, rgba(120, 80, 255, 0) 65%)",filter:"blur(60px)"}}),l.jsx("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:18},children:l.jsx("div",{style:{width:Un,height:Pi,transform:`scale(${s})`,transformOrigin:"top left"},children:l.jsx(y.Suspense,{fallback:l.jsx("div",{style:{width:Un,height:Pi,borderRadius:16,background:"#0a0a0d"}}),children:l.jsx(hg,{activeScene:c.id})})})})]}),l.jsxs("div",{className:"text-center",children:[l.jsx("span",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500",children:t.worksWith}),l.jsx("div",{className:"mt-5 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300",children:l.jsx(dg,{})})]})]})})},yg=y.lazy(()=>Ko(()=>import("./CapsuleMockup-GU7PYio5.js"),[]).then(e=>({default:e.CapsuleShowcase}))),Od=y.lazy(()=>Ko(()=>import("./ResoSettingsWindow-BNJ3YOM9.js"),__vite__mapDeps([3,1])).then(e=>({default:e.ResoSettingsWindow}))),vg=y.lazy(()=>Ko(()=>import("./NebulaMockup-B985IqoN.js"),[]).then(e=>({default:e.NebulaShowcase}))),xg=e=>l.jsx(Od,{defaultTab:"workflow",...e}),wg=e=>l.jsx(Od,{defaultTab:"indexing",...e}),kg={en:{sectionTitle:"Think out loud. We handle the rest.",sectionSubtitle:"A workspace that adapts to your mind, from first thought to final output.",features:[{id:"capture",title:"Speak your mind, anywhere.",description:"Press Option in any app to start talking. Reso captures your voice, reads your screen context, and drops polished text right at your cursor.",learnMoreText:"See how capture works",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"orchestrate",title:"Build pipelines, not just prompts.",description:"Route your voice through custom workflows. Translate, format, or pipe the output straight into shell scripts and macOS Shortcuts.",learnMoreText:"See how Voice Workflow works",learnMoreLink:"/docs#workflow",imageSlot:"feature-orchestrate.png",imageHint:"Voice Workflow pipeline"},{id:"mindscape",title:"Your knowledge, strictly local.",description:"Connect Obsidian or Apple Notes to give Reso your personal context. Everything stays on your Mac — your private data never trains a public model.",learnMoreText:"Learn about Memory",learnMoreLink:"/docs#memory",imageSlot:"feature-memory.png",imageHint:"Personalized AI memory"},{id:"discovery",title:"Watch your ideas connect.",description:"Every recording lands in Nebula, a 3D space where thoughts cluster by meaning. Drift through your ideas and find connections without folders or tags.",learnMoreText:"Explore Nebula",learnMoreLink:"/docs#nebula",imageSlot:"feature-discovery.png",imageHint:"Nebula clustering view"}]},zh:{sectionTitle:"大声思考，剩下的交给我们。",sectionSubtitle:"从闪念到输出，一个顺应你思维直觉的工作空间。",features:[{id:"capture",title:"随时随地，开口即写。",description:"在任何软件里按住 Option 即可说话。Reso 会捕捉语音、读取屏幕上下文，把精炼后的文字直接落到光标处。",learnMoreText:"看看捕捉怎么用",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"orchestrate",title:"编排工作流，不只是写提示词。",description:"让语音穿过你定义的处理管线。翻译、格式化，或者把结果直接交给 Shell 脚本与快捷指令——一气呵成。",learnMoreText:"了解 Voice Workflow",learnMoreLink:"/docs#workflow",imageSlot:"feature-orchestrate.png",imageHint:"Voice Workflow pipeline"},{id:"mindscape",title:"你的知识库，绝对本地。",description:"接入 Obsidian 或 Apple Notes，让 Reso 拥有你的专属语境。所有文件都留在 Mac 上，你的私人数据永远不会被用于训练公开模型。",learnMoreText:"了解 Memory",learnMoreLink:"/docs#memory",imageSlot:"feature-memory.png",imageHint:"Personalized AI memory"},{id:"discovery",title:"看见想法自然生长。",description:"每段录音都会落进 Nebula——一个按语义自动聚类的 3D 空间。没有文件夹，没有标签，在漫游中发现思维的隐秘关联。",learnMoreText:"走进 Nebula",learnMoreLink:"/docs#nebula",imageSlot:"feature-discovery.png",imageHint:"Nebula clustering view"}]},ja:{sectionTitle:"声に出して考える。あとはお任せ。",sectionSubtitle:"ひらめきから出力まで、あなたの思考に寄り添うワークスペース。",features:[{id:"capture",title:"どこでも、話すだけで書き留める。",description:"どのアプリでも Option を押して話すだけ。Reso が音声を捉え、画面の文脈を読み取り、洗練されたテキストをカーソル位置に直接入力します。",learnMoreText:"Capture の仕組みを見る",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"orchestrate",title:"プロンプトではなく、パイプラインを組む。",description:"音声を独自のワークフローで処理。翻訳やフォーマット調整はもちろん、結果を Shell スクリプトやショートカットへそのまま渡せます。",learnMoreText:"Voice Workflow を見る",learnMoreLink:"/docs#workflow",imageSlot:"feature-orchestrate.png",imageHint:"Voice Workflow pipeline"},{id:"mindscape",title:"あなたの知識は、完全にローカル。",description:"Obsidian や Apple Notes を連携し、Reso にあなただけの文脈を与えます。すべてのファイルは Mac 内に留まり、プライバシーは守られます。",learnMoreText:"Memory を見る",learnMoreLink:"/docs#memory",imageSlot:"feature-memory.png",imageHint:"Personalized AI memory"},{id:"discovery",title:"アイデアが繋がる瞬間を眺める。",description:"すべての録音は Nebula に配置され、意味ごとに 3D 空間で自然にまとまります。フォルダやタグなしで、思考の繋がりを探索できます。",learnMoreText:"Nebula を探索する",learnMoreLink:"/docs#nebula",imageSlot:"feature-discovery.png",imageHint:"Nebula clustering view"}]}},bg={capture:yg,orchestrate:xg,mindscape:wg,discovery:vg},Sg={orchestrate:"16 / 11",mindscape:"16 / 11"},Ks=()=>l.jsx("div",{style:{width:"100%",aspectRatio:"760 / 420",borderRadius:16,background:"linear-gradient(180deg, #0c0c0e 0%, #08080a 100%)",border:"1px solid rgba(255,255,255,0.07)"}}),jg=({feature:e})=>{const t=bg[e.id];if(!t)return null;const n=Sg[e.id];return n?l.jsxs("div",{className:"relative w-full",children:[l.jsx("div",{"aria-hidden":!0,className:"absolute -inset-8 -z-10",style:{background:"radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.16) 0%, rgba(120, 80, 255, 0) 70%)",filter:"blur(50px)"}}),l.jsx("div",{style:{width:"100%",aspectRatio:n},children:l.jsx(y.Suspense,{fallback:l.jsx(Ks,{}),children:l.jsx(t,{})})})]}):l.jsxs("div",{className:"relative w-full",children:[l.jsx("div",{"aria-hidden":!0,className:"absolute -inset-8 -z-10",style:{background:"radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.16) 0%, rgba(120, 80, 255, 0) 70%)",filter:"blur(50px)"}}),l.jsx(y.Suspense,{fallback:l.jsx(Ks,{}),children:l.jsx(t,{})})]})},Ng=()=>{const{language:e}=xe(),t=ne(kg,e),n=t.features;return l.jsx("section",{id:"features",className:"py-24",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("div",{className:"max-w-2xl mb-20",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4",children:t.sectionTitle}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.sectionSubtitle})]}),l.jsx("div",{className:"space-y-32",children:n.map((r,o)=>{const i=o%2===1;return l.jsxs("article",{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i?"lg:[&>*:first-child]:order-2":""}`,children:[l.jsxs("div",{className:"max-w-lg",children:[l.jsx("h3",{className:"text-2xl md:text-[2.25rem] leading-tight font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4",children:r.title}),l.jsx("p",{className:"text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6",children:r.description}),l.jsxs(Ee,{to:r.learnMoreLink,className:"inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-700 dark:hover:text-amber-400 transition-colors group",children:[l.jsx("span",{children:r.learnMoreText}),l.jsx(Po,{size:16,className:"transition-transform group-hover:translate-x-1"})]})]}),l.jsx("div",{children:l.jsx(jg,{feature:r})})]},r.id)})})]})})},Ig=()=>{const{language:e}=xe(),t=ne({en:{tag:"Changelog",title:"Built in public.",subtitle:"See exactly what we are shipping, why we are building it, and where Reso is heading next.",cards:[{title:"Build Journey",body:"Field notes on what we changed and why.",href:"https://resoapp.xyz/build-journey",cta:"View Updates"}],browse:"Browse all resources"},zh:{tag:"更新日志",title:"公开构建。",subtitle:"我们在做什么、为什么这么做、下一步走向何方——你都能看到。",cards:[{title:"开发历程",body:"关于每一次改动以及背后原因的笔记。",href:"https://resoapp.xyz/build-journey",cta:"查看更新"}],browse:"浏览全部资源"},ja:{tag:"更新履歴",title:"パブリックに構築。",subtitle:"私たちが何をリリースし、なぜそれを作るのか。Reso の次なる展開もここで分かります。",cards:[{title:"Build Journey",body:"何をどう変えたか、その理由のフィールドノート。",href:"https://resoapp.xyz/build-journey",cta:"アップデートを見る"}],browse:"すべてのリソースを見る"}},e);return l.jsx("section",{className:"py-24",id:"build-together",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("div",{className:"mb-10 max-w-2xl",children:[l.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-4",children:t.tag}),l.jsx("h2",{className:"text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4",children:t.title}),l.jsx("p",{className:"text-base text-gray-600 dark:text-gray-400 leading-relaxed",children:t.subtitle})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md",children:t.cards.map(n=>l.jsxs("article",{className:"rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6",children:[l.jsx("h3",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:n.title}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6",children:n.body}),l.jsxs("a",{href:n.href,className:"inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white",children:[l.jsx("span",{children:n.cta}),l.jsx(sn,{size:15})]})]},n.title))}),l.jsxs("a",{href:"/build-blocks",className:"mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[l.jsx("span",{children:t.browse}),l.jsx(Po,{size:15})]})]})})},Rg=({size:e=14})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Eg=()=>{const{language:e,setLanguage:t,setTheme:n,theme:r}=xe(),o=ne({en:{privacy:"Privacy",terms:"Terms",light:"Switch to light mode",dark:"Switch to dark mode",languagePicker:"Language"},zh:{privacy:"隐私",terms:"条款",light:"切换到浅色模式",dark:"切换到深色模式",languagePicker:"语言"},ja:{privacy:"プライバシー",terms:"利用規約",light:"ライトモードに切り替え",dark:"ダークモードに切り替え",languagePicker:"言語"}},e),i=[{value:"en",label:"English"},{value:"zh",label:"简体中文"},{value:"ja",label:"日本語"},{value:"zh-TW",label:"繁體中文"}];return l.jsx(l.Fragment,{children:l.jsx("footer",{className:"py-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4",children:[l.jsx("span",{children:"© 2025 DZG STUDIO LLC."}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("a",{href:"/privacy.html",className:"hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:o.privacy}),l.jsx("a",{href:"/terms.html",className:"hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:o.terms}),l.jsx("div",{className:"w-px h-3 bg-gray-300 dark:bg-gray-700"}),l.jsx("a",{href:"https://x.com/DzgStudio",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:l.jsx(Rg,{size:14})}),l.jsx(Ee,{to:"/contact",className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:l.jsx(eg,{size:14})}),l.jsx("div",{className:"w-px h-3 bg-gray-300 dark:bg-gray-700"}),l.jsx("button",{onClick:()=>n("light"),className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors","aria-label":o.light,children:l.jsx(Td,{size:14,className:r==="light"?"text-amber-500":""})}),l.jsx("button",{onClick:()=>n("dark"),className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors","aria-label":o.dark,children:l.jsx(Pd,{size:14,className:r==="dark"?"text-blue-400":""})}),l.jsxs("div",{className:"relative",children:[l.jsx(Cd,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"}),l.jsx("select",{value:e,onChange:a=>t(a.target.value),"aria-label":o.languagePicker,className:"appearance-none bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 text-xs rounded-full pl-8 pr-7 py-1.5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20",children:i.map(a=>l.jsx("option",{value:a.value,children:a.label},a.value))}),l.jsx(El,{size:12,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"})]})]})]})})})},Yt={free:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",plus:"https://reso.lemonsqueezy.com/checkout/buy/ba6f74ba-5444-4488-98c1-9402f4c59e00"},Cg={en:{titleLine1:"Choose your engine.",titleLine2:"Keep your flow.",subtitle:"Start free with your own API keys, or upgrade to Reso Engine for zero-config, fully managed intelligence.",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"Free",priceSup:"",cadence:"",description:"For developers or users who already have API keys",features:["Bring your own API for LLM access.","Core dictation, text processing, and command drafting.","Local-first. Voice never leaves your device."],cta:"Download Free",checkoutUrl:Yt.free,footnote:"Free forever"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/month",description:"Your complete voice-to-action workspace, powered by Reso Engine.",features:["Zero-config Reso Engine access — no API keys needed.","Unlimited Skill Pipelines and action routing.","Full local Memory indexing for Obsidian, Apple Notes, and folders.","Unrestricted Nebula 3D exploration of your thoughts.","Advanced ASR correction that learns your voice."],cta:"Start Subscription",checkoutUrl:Yt.plus,footnote:"Cancel anytime · 30-day refund · Supporting indie development",featured:!0}],mostPopular:"Most Popular",checkoutPending:"Checkout link pending update.",privacyPromise:"Your thoughts stay yours. We don't train on your data.",howItWorks:"How it works",steps:["Get your key","Paste in Reso","You're all set"],stepDescription:"Reso Free starts with your own API key. Reso Pro connects your subscription instantly for an all-in-one workflow.",faqTitle:"Questions & Answers",faqs:[{q:"How should I choose between Reso Free and Reso Pro?",a:"Choose Reso Free if you're a developer or already have API keys for core voice dictation and writing. Choose Reso Pro for instant setup with premium models and unlocked productivity tools."},{q:"Do I need to configure API keys?",a:"For Reso Free, yes. You can use Anthropic, OpenAI, Groq, or Google keys. For Reso Pro, no. API access is integrated and ready out of the box."},{q:"What can I do with Reso as a voice tool?",a:"Reso turns voice into polished text at your cursor in any app. Dictate cleanly, draft content from spoken commands (Intent Drafting), save to a diary, or pipe the output through your own workflows — all grounded in your local notes and Memory."},{q:"Which model providers are supported?",a:"Reso currently supports Anthropic, OpenAI, Groq, and Google."},{q:"How does activation work after payment?",a:"Reso Free is free and can be used right away with your own API key. Reso Pro issues a LemonSqueezy license key that unlocks the all-in-one subscription."},{q:"Are model API costs included?",a:"Reso Free does not include model costs because usage is billed directly by your provider account. Reso Pro includes API costs during subscription, subject to fair use."},{q:"Can I switch tiers later?",a:"Yes. You can purchase the other tier at any time, then activate it with the new license key."}],ctaTitle:"Start with Reso today.",ctaButton:"Download for macOS"},zh:{titleLine1:"选择你的引擎。",titleLine2:"保持你的心流。",subtitle:"免费接入你自己的 API Key，或升级至 Reso Engine，享受开箱即用的全托管智能服务。",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"免费",priceSup:"",cadence:"",description:"适合开发者或已有 API Key 的极客用户",features:["使用你自己的 API 访问大语言模型。","核心听写、文本处理与命令草拟能力。","本地优先，语音永不离开设备。"],cta:"免费下载",checkoutUrl:Yt.free,footnote:"永久免费"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/月",description:"由 Reso Engine 驱动，完整的语音到动作工作空间。",features:["开箱即用的 Reso Engine 接入——无需自配 API Key。","无限量 Skill Pipeline 与动作路由。","完整的本地 Memory 索引：Obsidian、备忘录与本地文件夹。","无限制的 Nebula 3D 思维空间漫游。","高级语音识别纠错——会逐渐学会你的发音。"],cta:"开始订阅",checkoutUrl:Yt.plus,footnote:"随时取消 · 30 天退款 · 支持独立开发",featured:!0}],mostPopular:"最受欢迎",checkoutPending:"Checkout 链接待更新。",privacyPromise:"你的想法只属于你。我们不会用你的数据做训练。",howItWorks:"如何开始",steps:["获取密钥","粘贴到 Reso","即可开始使用"],stepDescription:"Reso Free 用你自己的 API Key。Reso Pro 订阅开通后立刻就能用,不用再配任何东西。",faqTitle:"常见问题",faqs:[{q:"Reso Free 和 Reso Pro 该如何选择？",a:"如果你是开发者或已有 API Key，需要核心听写与写作能力，选 Reso Free。若你想要开箱即用的高级模型与完整生产力工具，选 Reso Pro。"},{q:"需要自己配置 API key 吗？",a:"Reso Free 需要。支持 Anthropic、OpenAI、Groq、Google。Reso Pro 不需要，开通后即可直接使用。"},{q:"Reso 作为语音工具可以做什么？",a:"Reso 把你说的话直接变成光标处的文本——无论在哪个 app。你可以干净地听写、用语音下达指令让 AI 起草内容（Intent Drafting）、写进日记，或者把输出交给自定义的 workflow，全部以本地笔记作为 grounding。"},{q:"支持哪些模型服务商？",a:"目前支持 Anthropic、OpenAI、Groq、Google。"},{q:"支付后如何激活？",a:"Reso Free 可直接使用并绑定你的 API key。Reso Pro 会通过 LemonSqueezy 发放 license key，用于激活订阅。"},{q:"模型 API 成本是否包含在内？",a:"Reso Free 不包含模型成本，按你在服务商账号中的实际用量计费。Reso Pro 在订阅期间包含 API 使用，遵循合理使用原则。"},{q:"之后可以切换套餐吗？",a:"可以。你随时可购买另一套餐，并用新的 license key 激活。"}],ctaTitle:"现在开始使用 Reso。",ctaButton:"下载 macOS 版本"},ja:{titleLine1:"エンジンを選ぶ。",titleLine2:"フローを保つ。",subtitle:"自分の API キーで無料から始めるか、Reso Engine にアップグレードして設定不要のインテリジェンスを活用。",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"無料",priceSup:"",cadence:"",description:"開発者や既に API キーをお持ちのユーザー向け",features:["自分の API で LLM にアクセス。","コアなディクテーション、テキスト処理、コマンド下書き機能。","ローカル優先。音声はデバイスから出ません。"],cta:"無料でダウンロード",checkoutUrl:Yt.free,footnote:"ずっと無料"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/月",description:"Reso Engine が駆動する、音声からアクションへの完全なワークスペース。",features:["設定不要の Reso Engine アクセス——API キー不要。","無制限の Skill Pipeline とアクションルーティング。","Obsidian・Apple Notes・ローカルフォルダの完全 Memory インデックス。","制限なしの Nebula 3D 思考空間探索。","あなたの発音を学習する高度な音声認識補正。"],cta:"サブスクを開始",checkoutUrl:Yt.plus,footnote:"いつでも解約可 · 30日返金 · インディー開発支援",featured:!0}],mostPopular:"人気プラン",checkoutPending:"Checkout リンクは更新待ちです。",privacyPromise:"あなたの思考はあなたのもの。データを学習に利用しません。",howItWorks:"利用開始まで",steps:["キーを取得","Reso に貼り付け","準備完了"],stepDescription:"Reso Free は自分の API key で開始。Reso Pro は購読後すぐに一体型 workflow を利用できます。",faqTitle:"よくある質問",faqs:[{q:"Reso Free と Reso Pro はどう選べばよいですか？",a:"開発者または既に API キーをお持ちで、コアな dictation と執筆機能が必要なら Reso Free。すぐに使えるプレミアムモデルと完全な生産性ツールをお求めなら Reso Pro が適しています。"},{q:"API key の設定は必要ですか？",a:"Reso Free は必要です。Anthropic / OpenAI / Groq / Google に対応。Reso Pro は不要で、すぐに使えます。"},{q:"Reso を音声ツールとして何に使えますか？",a:"Reso は音声をそのまま、どの app でもカーソル位置に洗練されたテキストとして落とします。きれいに書き取るだけでなく、音声コマンドから AI に文章を起草させたり（Intent Drafting）、日記に保存したり、自作の workflow に流したりできます。すべてローカルのノートを grounding として活用します。"},{q:"対応しているモデルプロバイダは？",a:"Anthropic、OpenAI、Groq、Google をサポートしています。"},{q:"支払い後のアクティベーションは？",a:"Reso Free はすぐ利用でき、API key を設定します。Reso Pro は LemonSqueezy の license key でサブスク機能を有効化します。"},{q:"モデル API コストは含まれますか？",a:"Reso Free は含まれず、各プロバイダのアカウントで課金されます。Reso Pro はサブスク期間中の API 利用を含みます（公正利用範囲内）。"},{q:"後からプラン変更できますか？",a:"はい。別プランを購入後、新しい license key で切り替え可能です。"}],ctaTitle:"Reso を今すぐ始める。",ctaButton:"macOS 版をダウンロード"}},Pg=()=>{const[e,t]=y.useState(null),{language:n}=xe(),r=ne(Cg,n);return l.jsxs("main",{className:"pt-28 min-h-screen pb-20",children:[l.jsx("section",{children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("div",{className:"mb-16 max-w-3xl",children:[l.jsxs("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:[r.titleLine1,l.jsx("br",{}),r.titleLine2]}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:r.subtitle})]}),l.jsxs("div",{className:"relative mb-24",children:[l.jsx("div",{className:"pointer-events-none absolute -inset-4 md:-inset-x-20 top-20 h-72 bg-gradient-to-r from-orange-500/15 via-sky-400/15 to-emerald-400/15 blur-3xl opacity-50 dark:opacity-40"}),l.jsx("div",{className:"relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch",children:r.tiers.map(o=>{const i=!o.checkoutUrl;return l.jsxs("article",{className:`group relative rounded-3xl p-8 md:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col ${o.featured?"text-white hover:-translate-y-1":"bg-white/80 dark:bg-[#0A0A0A]/90 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"}`,style:o.featured?{background:"linear-gradient(to bottom, #111111, #050505)"}:void 0,children:[o.featured&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/25 via-white/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity"}),l.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-b from-[#111111] to-[#050505]"}),l.jsx("div",{className:"absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"})]}),l.jsxs("div",{className:"relative",children:[l.jsxs("div",{className:"flex items-start justify-between mb-8",children:[l.jsxs("div",{children:[l.jsx("p",{className:`text-xs tracking-[0.2em] uppercase mb-3 font-mono ${o.featured?"text-gray-400":"text-gray-500 dark:text-gray-500"}`,children:o.mode}),l.jsx("h3",{className:"text-2xl font-medium mb-2",children:o.name}),l.jsx("p",{className:`text-sm leading-relaxed max-w-xs ${o.featured?"text-gray-400":"text-gray-600 dark:text-gray-400"}`,children:o.description})]}),o.featured&&l.jsx("span",{className:"inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border border-white/20 bg-white/5 text-gray-300 backdrop-blur-sm",children:r.mostPopular})]}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mb-7 pb-7 relative",children:[l.jsx("span",{className:"text-5xl font-medium tracking-tight font-mono tabular-nums",children:o.priceMain}),o.priceSup&&l.jsx("span",{className:"text-lg font-mono tabular-nums -translate-y-3 opacity-70",children:o.priceSup}),o.cadence&&l.jsx("span",{className:`text-sm ml-1 ${o.featured?"text-gray-400":"text-gray-500 dark:text-gray-400"}`,children:o.cadence}),l.jsx("div",{className:`absolute bottom-0 left-0 right-0 h-px ${o.featured?"bg-gradient-to-r from-transparent via-white/20 to-transparent":"bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"}`})]}),l.jsx("ul",{className:"space-y-4 mb-8 flex-1",children:o.features.map((a,s)=>l.jsxs("li",{className:"flex gap-3 items-start group/item",children:[l.jsx("div",{className:`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${o.featured?"bg-white/10 ring-1 ring-white/20 group-hover/item:bg-white/15":"bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 group-hover/item:ring-gray-300 dark:group-hover/item:ring-gray-600"}`,children:l.jsx(Xm,{size:11,strokeWidth:2.5,className:o.featured?"text-white":"text-gray-600 dark:text-gray-400"})}),l.jsx("span",{className:`text-sm leading-relaxed transition-colors ${o.featured?"text-gray-300 group-hover/item:text-gray-200":"text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200"}`,children:a})]},s))}),l.jsxs("div",{className:"flex flex-col gap-3 mt-auto",children:[i?l.jsxs("span",{className:"w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium bg-gray-300 text-gray-500 cursor-not-allowed",children:[l.jsx("span",{children:o.cta}),l.jsx(Po,{size:16})]}):l.jsxs("a",{href:o.checkoutUrl,target:"_blank",rel:"noopener noreferrer",className:`relative w-full flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium transition-all overflow-hidden ${o.featured?"bg-white text-black hover:bg-gray-50":"bg-[#0A0A0A] text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-gray-100"}`,style:{boxShadow:o.featured?"inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)":"inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2)"},children:[l.jsx("span",{children:o.cta}),l.jsx(Po,{size:16,className:"transition-transform group-hover:translate-x-1"})]}),l.jsx("p",{className:`text-[11px] text-center ${o.featured?"text-gray-500":"text-gray-400 dark:text-gray-500"}`,children:i?r.checkoutPending:o.footnote})]})]})]},o.id)})})]}),l.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mb-16",children:r.privacyPromise}),l.jsxs("div",{className:"mb-24 py-8",children:[l.jsx("p",{className:"text-xs tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-10 font-mono text-center",children:r.howItWorks}),l.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-10",children:r.steps.map((o,i)=>l.jsxs(lu.Fragment,{children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-mono text-gray-900 dark:text-gray-100",children:i+1}),l.jsx("span",{className:"text-gray-900 dark:text-gray-100 font-medium",children:o})]}),i<r.steps.length-1&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"hidden md:block w-16 border-b border-dashed border-gray-300 dark:border-gray-700 mx-4"}),l.jsx("div",{className:"md:hidden h-4 border-l border-dashed border-gray-300 dark:border-gray-700"})]})]},o))}),l.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto leading-relaxed",children:r.stepDescription})]}),l.jsx("div",{className:"max-w-2xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12",children:[l.jsx("h2",{className:"text-2xl font-medium text-gray-900 dark:text-gray-100",children:r.faqTitle}),l.jsx("div",{className:"space-y-0",children:r.faqs.map((o,i)=>l.jsxs("div",{children:[l.jsxs("button",{onClick:()=>t(e===i?null:i),className:"w-full py-4 flex items-center justify-between text-left group",children:[l.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors pr-4",children:o.q}),l.jsx(El,{size:18,className:`text-gray-400 shrink-0 transition-transform duration-200 ${e===i?"rotate-180":""}`})]}),e===i&&l.jsx("div",{className:"pb-4 pr-8",children:l.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 leading-relaxed",children:o.a})})]},i))})]})})]})}),l.jsx("section",{className:"py-24",children:l.jsx("div",{className:"max-w-6xl mx-auto px-6",children:l.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[l.jsx("h2",{className:"text-4xl font-medium text-gray-900 dark:text-gray-100 mb-8",children:r.ctaTitle}),l.jsxs("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,className:"inline-flex items-center gap-2 bg-[#0A0A0A] dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-black dark:hover:bg-gray-100 transition-all px-6 py-3",style:{boxShadow:"inset 0 1px 0 0 rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.2)"},children:[l.jsx(Cl,{size:16}),l.jsx("span",{children:r.ctaButton})]})]})})})]})},_d=["gettingStarted","requirements","installation","capture","skills","routing","privacy","discovery","troubleshooting"],Tg={en:{headerTitle:"Docs",headerSubtitle:"Practical reference for the current Reso release: capture, workflows, engines, permissions, and discovery.",onThisPage:"On this page",nav:{gettingStarted:"Getting Started",requirements:"Requirements",installation:"Installation",capture:"Capture",skills:"Skills & Workflows",routing:"Engines & Routing",privacy:"Privacy & Data",discovery:"Nebula & Discovery",troubleshooting:"Troubleshooting"},sections:{gettingStarted:{entries:[{id:"what-is-reso",title:"What Is Reso?",size:"lg",paragraphs:["Reso is a macOS voice workspace. It captures speech, routes it through workflows, and delivers the result as inserted text, saved notes, or downstream actions.","The current product is best understood as three layers: fast capture, workflow-based processing, and a knowledge layer that surfaces connections through Nebula and discovery features."]},{id:"mental-model",title:"The Right Mental Model",size:"md",checklist:["Capture: start with the main recording shortcut or a focused quick action","Workflow: every run has an input mode, available skills, and an output path","Engine: use Reso Engine for the managed path or bring your own providers","Discovery: imported notes and captured history can later become links, tags, threads, and insight cards"]}]},requirements:{entries:[{id:"system-requirements",title:"System Requirements",size:"lg",paragraphs:["Reso targets macOS 14 or later and is designed around native Mac integrations such as global shortcuts, Accessibility, Screen Recording, and local workflow state."],checklist:["macOS 14 or later","Best experience on Apple Silicon","Microphone permission for all voice capture","Internet connection for Reso Engine or any remote API provider","Accessibility and Screen Recording only for the skills that need them"]}]},installation:{entries:[{id:"install-and-launch",title:"Install And First Launch",size:"lg",paragraphs:["Install Reso in your Applications folder and launch it once to finish onboarding.","The first-run flow is about permissions, shortcut setup, and engine choice. You do not need to configure every optional feature before your first dictation."],downloadLabel:"Download Reso"},{id:"first-five-minutes",title:"Recommended In Your First Five Minutes",size:"md",checklist:["Grant Microphone permission","Confirm or change the main recording shortcut (default: Option + Space)","Choose Reso Engine or Personal API in Engine settings","Enable Accessibility if you want Insert at Cursor","Enable Screen Recording if you want full OCR-based screen context"]}]},capture:{entries:[{id:"recording-shortcuts",title:"Recording Entry Points",size:"lg",paragraphs:["Main capture starts from a global recording shortcut. In the current app build, the default is Option + Space, and you can rebind it in settings.","Reso also supports long-hold activation, plus a separate Nebula shortcut to jump straight into the 3D thought space."]},{id:"output-delivery",title:"How Results Are Delivered",size:"md",paragraphs:["When Insert at Cursor is available, Reso tries to place the final result directly into the focused editable field.","If the target app cannot accept insertion, Reso falls back to clipboard or result-card style delivery instead of silently failing."],checklist:["Insert at Cursor: requires Accessibility and a real editable field","Diary-style flows can save output into your chosen storage pattern","Selection-based quick actions operate on currently selected text when required"]}]},skills:{entries:[{id:"workflow-builder",title:"Workflow Builder",size:"lg",paragraphs:["Workflows are the real unit of behavior in Reso. Each workflow combines an input mode, enabled skills, and terminal actions.","The visual Workflow Builder lets you reorder skill nodes, dry-run a workflow, and attach local actions such as Shortcuts or shell-based steps.","The current release ships three built-in presets — Dictation, Diary, and External Save — each a pre-tuned pipeline built from the same core skills (Context Awareness, Clean, Revise, Writing Style, Translate), differing mainly in how the final text is delivered."]},{id:"core-skills",title:"Core Skills In The Current Release",size:"md",checklist:["Insert at Cursor: place output into the focused app","Screen Context: read the active app, selected text, and optional OCR context","Intent Drafting: treat your voice as instructions instead of literal dictation","Generated Skills: create app automations backed by AppleScript or deep links"]},{id:"dictation-vs-intent",title:"Dictation vs Intent Drafting",size:"md",paragraphs:["Dictation preserves what you said. Intent Drafting rewrites your spoken instruction into the target output.","In the current release, explicit workflow choice is the reliable mental model. Legacy Smart mode still exists, but the product is moving toward clearer workflow activation."]}]},routing:{entries:[{id:"engines-overview",title:"Engines Overview",size:"lg",paragraphs:["Reso separates capture from model routing. Speech is transcribed by your configured transcription provider, then generation flows use either Reso Engine or your own APIs.","In the current build, Reso Engine STT is the default managed transcription path when it is enabled. BYOK cloud providers can be selected in Engine settings."],checklist:["Reso Engine: managed setup, no personal key, required for managed discovery features","Personal API: OpenAI, Anthropic, Google, or Groq with your own billing and model choice"]},{id:"byok-vs-reso-engine",title:"When To Use BYOK vs Reso Engine",size:"md",paragraphs:["Choose Personal API if you want direct provider control or already have existing keys.","Choose Reso Engine if you want the product-managed path, hosted inference, and fewer moving parts. Pricing, trial, and quota details can change, so the Pricing page is the current commercial source of truth."]},{id:"routing-behavior",title:"Routing Behavior",size:"md",paragraphs:["Reso can use different providers for different steps, and some product-managed routing still exists outside full Pro discovery.","If a workflow needs a provider or entitlement you have not configured, the app surfaces that blocker instead of sending the job into a black box."]}]},privacy:{entries:[{id:"data-handling",title:"How Data Flows Today",size:"lg",paragraphs:["Reso only captures audio when you explicitly trigger it through a shortcut, long hold, or manual action. There is no passive background listening mode.","The current app keeps a local shadow recording in Application Support so sessions can recover cleanly after interruptions or be reprocessed later. Those local recordings are cleaned up on a rolling basis."],checklist:["Voice capture is user-triggered, not always-on","Shadow recordings are stored locally for recovery and rolling cleanup","Reso Engine promises zero data retention for managed inference payloads","Personal API traffic follows the privacy policy of your chosen provider"]},{id:"permissions-guide",title:"Permissions Guide",size:"md",checklist:["Microphone: required for all voice capture","Accessibility: required for Insert at Cursor and app-context reads","Screen Recording: required only when you enable OCR-based screen context in a workflow"],paragraphs:["Accessibility does not bypass macOS secure-field protections, and Screen Recording is used for snapshots when context features are triggered, not continuous video capture."]},{id:"knowledge-import",title:"Knowledge Import",size:"md",paragraphs:["Imported notes are selected folder by folder. Reso does not bulk-scan your disk and does not bulk-upload your library.","The local index stays on your Mac. When a workflow needs knowledge grounding, Reso sends only the smallest relevant slices instead of entire documents."]}]},discovery:{entries:[{id:"nebula",title:"Nebula: Visualizing Thoughts",size:"lg",paragraphs:["Nebula is an immersive 3D space where every recording and imported note is embedded and placed by meaning. Related ideas drift toward each other and form clusters you can explore without folders or tags.","Open Nebula from the sidebar or its dedicated shortcut. Grab a cluster to navigate into it, or let it float and notice which themes have been gathering weight lately."]},{id:"memory-grounding",title:"Memory As Grounding",size:"md",paragraphs:["Every Voice Workflow can pull from the same local Memory that Nebula visualizes. Instead of repeating context to the model, Reso retrieves only the smallest relevant slices of your notes and history for each run.","Memory grows the more you capture and import. Both Nebula and the grounding retrieval benefit from real history — they become noticeably sharper after a few dozen real records or an Obsidian vault import."]}]},troubleshooting:{entries:[{id:"recording-not-starting",title:"Recording Does Not Start",size:"lg",checklist:["Verify the recording shortcut is set and not colliding with another app","Grant Microphone permission in System Settings","Make sure an STT path is available: Reso Engine enabled or a valid BYOK provider configured"]},{id:"insertion-or-context",title:"Insert At Cursor Or Context Is Not Working",size:"md",checklist:["Grant Accessibility if output should land in the focused app","Place the cursor in a standard editable field before recording","Grant Screen Recording if OCR-based screen context is enabled","Restart Reso after new permissions if macOS has not refreshed access yet"]},{id:"engine-or-discovery",title:"Engine Or Discovery Problems",size:"md",checklist:["Re-check your API key or provider selection in Engine settings","If you rely on Reso Engine, confirm your current plan or trial status","If discovery outputs are thin, import more real notes and history first"]}]}}},zh:{headerTitle:"Docs",headerSubtitle:"围绕当前 Reso release 的实用参考：捕捉、workflow、引擎、权限与 discovery。",onThisPage:"本页内容",nav:{gettingStarted:"快速开始",requirements:"系统要求",installation:"安装",capture:"捕捉",skills:"技能与工作流",routing:"引擎与路由",privacy:"隐私与数据",discovery:"Nebula 与 Discovery",troubleshooting:"排障"},sections:{gettingStarted:{entries:[{id:"what-is-reso",title:"什么是 Reso？",size:"lg",paragraphs:["Reso 是一个 macOS 语音工作空间。它负责捕捉语音，把输入送进 workflow，再把结果落到光标位置、笔记存储或下游动作里。","理解当前产品，最有效的方式是把它看成三层：快速捕捉、基于 workflow 的处理，以及通过 Nebula 与 discovery 功能浮现关联的知识层。"]},{id:"mental-model",title:"更准确的使用心智模型",size:"md",checklist:["Capture：从主录音快捷键或某个 quick action 开始","Workflow：每次运行都会带着输入模式、可用 skills 和输出路径","Engine：可以走 Reso Engine，也可以接你自己的 provider","Discovery：导入的笔记和历史记录会进一步变成 links、tags、threads 和 insight cards"]}]},requirements:{entries:[{id:"system-requirements",title:"运行条件",size:"lg",paragraphs:["Reso 目标平台是 macOS 14+，产品设计依赖原生 Mac 能力，比如全局快捷键、辅助功能、屏幕录制和本地 workflow 状态。"],checklist:["macOS 14 或更高版本","Apple Silicon 上体验最佳","所有语音捕捉都需要麦克风权限","使用 Reso Engine 或远程 API provider 时需要网络","辅助功能和屏幕录制只在对应 skills 需要时才开启"]}]},installation:{entries:[{id:"install-and-launch",title:"安装与首次启动",size:"lg",paragraphs:["把 Reso 放进 Applications 后启动一次，完成 onboarding 即可。","首次启动主要是配置权限、快捷键和默认引擎。你不需要在第一次听写前把所有可选能力都配完。"],downloadLabel:"下载 Reso"},{id:"first-five-minutes",title:"前五分钟建议完成的设置",size:"md",checklist:["授予麦克风权限","确认或修改主录音快捷键（默认是 Option + Space）","在 Engine 设置里选择 Reso Engine 或 Personal API","如果你想直接写到光标位置，开启辅助功能","如果你想用完整 OCR 屏幕上下文，开启屏幕录制"]}]},capture:{entries:[{id:"recording-shortcuts",title:"录音入口与快捷键",size:"lg",paragraphs:["主捕捉入口是全局录音快捷键。当前 app build 里默认值是 Option + Space，而且可以在设置里重新绑定。","Reso 还支持 long-hold 触发，以及一个独立的 Nebula 快捷键——直接跳进 3D 思维空间。"]},{id:"output-delivery",title:"结果如何落地",size:"md",paragraphs:["当 Insert at Cursor 可用时，Reso 会优先把最终结果直接写进当前聚焦的可编辑输入框。","如果目标 app 不能接受插入，Reso 会回退到剪贴板或结果卡片，而不是静默失败。"],checklist:["Insert at Cursor：需要辅助功能权限和真实可编辑输入框","Diary 类 workflow 可以按你设定的命名和存储策略保存","依赖选中文本的 quick action 会直接作用于当前 selection"]}]},skills:{entries:[{id:"workflow-builder",title:"Workflow Builder",size:"lg",paragraphs:["在 Reso 里，真正决定行为的单位是 workflow。每个 workflow 组合了输入模式、启用的 skills 和终端动作。","可视化 Workflow Builder 允许你重排 skill nodes、先做 dry run，再接入本地动作，比如 macOS Shortcuts 或 shell steps。","当前 release 自带三个预设：Dictation、Diary、External Save。它们共享同一组核心 skills（Context Awareness、Clean、Revise、Writing Style、Translate），区别只在最终输出落到哪里。"]},{id:"core-skills",title:"当前 release 的核心 skills",size:"md",checklist:["Insert at Cursor：把结果送进当前 app","Screen Context：读取当前 app、选中文本和可选的 OCR 上下文","Intent Drafting：把你的语音当成指令，而不是逐字听写","Generated Skills：生成基于 AppleScript 或 deep link 的 app 自动化"]},{id:"dictation-vs-intent",title:"Dictation 与 Intent Drafting 的区别",size:"md",paragraphs:["Dictation 更接近忠实转写你说的话。Intent Drafting 则会把你的口头指令改写成目标输出。","对当前 release 来说，最可靠的使用方式是明确选择 workflow。Legacy Smart mode 仍然存在，但产品正在往更清晰的 workflow activation 演进。"]}]},routing:{entries:[{id:"engines-overview",title:"引擎模式总览",size:"lg",paragraphs:["Reso 把 capture 和 model routing 分开。语音先走你配置的转写 provider，再由 Reso Engine 或你自己的 API 完成生成链路。","当前 build 里，只要 Reso Engine 可用，它就是默认的托管 STT 路径。你也可以在 Engine 设置里改成 BYOK 的云端 provider。"],checklist:["Reso Engine：托管配置、无需个人 key、也是托管 discovery 能力的前提","Personal API：支持 OpenAI、Anthropic、Google、Groq，由你控制账单和模型选择"]},{id:"byok-vs-reso-engine",title:"什么时候选 BYOK，什么时候选 Reso Engine",size:"md",paragraphs:["如果你已经有稳定的 provider 和 API key，或者你更在意直接控制权，选 Personal API。","如果你想减少配置项、直接走产品托管路径，并使用完整的托管 inference 与 discovery，选 Reso Engine。价格、trial 和 quota 可能会变，所以商业信息以 Pricing 页面为准。"]},{id:"routing-behavior",title:"当前的路由行为",size:"md",paragraphs:["Reso 可以在不同步骤上使用不同 provider，而且有些产品托管的 routing 即使不在完整 Pro discovery 下也会继续存在。","如果某个 workflow 依赖你尚未配置的 provider 或 entitlement，app 会明确暴露这个 blocker，而不是把请求丢进黑箱。"]}]},privacy:{entries:[{id:"data-handling",title:"当前版本的数据流",size:"lg",paragraphs:["Reso 只会在你显式触发时捕捉音频，比如快捷键、long hold 或手动动作。它不是一个被动常开监听器。","当前 app 会在本地 Application Support 中保存 shadow recording，用于中断恢复和后续重处理。这些本地录音会按滚动策略清理。"],checklist:["语音捕捉是用户触发，不是永远常开","Shadow recordings 只存本地，用于恢复与滚动清理","Reso Engine 对托管推理 payload 承诺零数据保留","Personal API 的隐私边界以你选择的 provider 政策为准"]},{id:"permissions-guide",title:"权限说明",size:"md",checklist:["Microphone：所有语音捕捉都需要","Accessibility：Insert at Cursor 和 app context 读取需要","Screen Recording：仅当你在 workflow 中启用 OCR 型屏幕上下文时需要"],paragraphs:["辅助功能不会绕过 macOS 对安全输入框的保护；屏幕录制也只在你触发上下文能力时用于截图，不是持续录像。"]},{id:"knowledge-import",title:"知识导入",size:"md",paragraphs:["导入笔记是按文件夹显式选择的。Reso 不会批量扫描你的磁盘，也不会整库上传你的知识库。","本地索引保留在你的 Mac 上。当 workflow 需要知识 grounding 时，Reso 只发送最小相关片段，而不是整篇文档。"]}]},discovery:{entries:[{id:"nebula",title:"Nebula：思维可视化",size:"lg",paragraphs:["Nebula 是一个沉浸式的 3D 空间：每段录音与导入的笔记都会按语义嵌入、落到各自的位置，关联的想法会自然聚拢成簇——无需文件夹，也无需标签。","从侧边栏或专用快捷键进入 Nebula。抓住某个簇就能钻进去看，或者让它自己漂浮，看看最近哪几条主题在悄悄变重。"]},{id:"memory-grounding",title:"把 Memory 作为 grounding 源",size:"md",paragraphs:["每次 Voice Workflow 运行都可以从同一个本地 Memory 中取上下文——也就是 Nebula 在可视化的那份。Reso 不会把整篇笔记扔给模型，而是只检索与当次任务最相关的片段。","Memory 会随着你的捕捉与导入不断生长。Nebula 的聚类和 grounding 的检索都会随真实历史变得更准——积累几十条真实记录或导入一次 Obsidian 库之后，差别会非常明显。"]}]},troubleshooting:{entries:[{id:"recording-not-starting",title:"录音没有开始",size:"lg",checklist:["确认录音快捷键已经设置好，而且没有和别的 app 冲突","在系统设置里授予麦克风权限","确保至少有一条 STT 路径可用：Reso Engine 已启用，或者 BYOK provider 配置有效"]},{id:"insertion-or-context",title:"Insert at Cursor 或上下文不工作",size:"md",checklist:["如果你希望结果直接写回 app，先授予辅助功能","开始录音前把光标放进标准可编辑输入框","如果开启 OCR 型屏幕上下文，授予屏幕录制","新增权限后如果 macOS 还没刷新，重启一次 Reso"]},{id:"engine-or-discovery",title:"引擎或 Discovery 出问题",size:"md",checklist:["重新检查 Engine 设置里的 provider 选择和 API key","如果你依赖 Reso Engine，确认当前 plan 或 trial 状态","如果 discovery 结果很薄，先导入更多真实笔记和历史记录"]}]}}},ja:{headerTitle:"Docs",headerSubtitle:"現在の Reso release を前提にした実用リファレンスです。capture、workflow、engine、permissions、discovery をまとめています。",onThisPage:"このページ",nav:{gettingStarted:"はじめに",requirements:"要件",installation:"インストール",capture:"Capture",skills:"Skills と Workflow",routing:"Engine と Routing",privacy:"Privacy と Data",discovery:"Nebula と Discovery",troubleshooting:"トラブルシュート"},sections:{gettingStarted:{entries:[{id:"what-is-reso",title:"Reso とは",size:"lg",paragraphs:["Reso は macOS 向けの voice workspace です。音声を capture し、workflow に流し、結果をカーソル位置、保存先メモ、または次の action に届けます。","現在の製品は、fast capture、workflow-based processing、そして Nebula と discovery 機能によって繋がりを浮かび上がらせる knowledge layer の三層で理解するのが正確です。"]},{id:"mental-model",title:"使い方のメンタルモデル",size:"md",checklist:["Capture: メイン録音ショートカットか quick action から始める","Workflow: すべての実行には input mode、skills、output path がある","Engine: Reso Engine か自分の provider を使う","Discovery: 取り込んだノートや履歴が links、tags、threads、insight cards へ育つ"]}]},requirements:{entries:[{id:"system-requirements",title:"システム要件",size:"lg",paragraphs:["Reso は macOS 14 以降を対象にしており、グローバルショートカット、Accessibility、Screen Recording、ローカル workflow state など Mac の統合機能を前提にしています。"],checklist:["macOS 14 以降","Apple Silicon で最良の体験","音声 capture には Microphone permission が必要","Reso Engine やリモート API provider を使う場合はネット接続が必要","Accessibility と Screen Recording は必要な skill のときだけ有効化すればよい"]}]},installation:{entries:[{id:"install-and-launch",title:"インストールと初回起動",size:"lg",paragraphs:["Reso を Applications に入れ、一度起動して onboarding を完了してください。","初回起動では permissions、shortcut、default engine を決めます。最初の dictation 前にすべての optional feature を設定する必要はありません。"],downloadLabel:"Reso をダウンロード"},{id:"first-five-minutes",title:"最初の 5 分でやっておくとよいこと",size:"md",checklist:["Microphone permission を許可する","メイン録音ショートカットを確認または変更する（デフォルトは Option + Space）","Engine settings で Reso Engine か Personal API を選ぶ","Insert at Cursor を使うなら Accessibility を有効にする","OCR ベースの screen context を使うなら Screen Recording を有効にする"]}]},capture:{entries:[{id:"recording-shortcuts",title:"録音の入口",size:"lg",paragraphs:["メインの capture はグローバル録音ショートカットから始まります。現在の app build ではデフォルトが Option + Space で、settings から再割り当てできます。","Reso には long-hold activation に加え、3D 思考空間へ直接飛び込める専用の Nebula ショートカットも用意されています。"]},{id:"output-delivery",title:"結果の届け方",size:"md",paragraphs:["Insert at Cursor が使える場合、Reso は最終結果をフォーカス中の editable field へ直接入れようとします。","対象 app が挿入を受け付けない場合でも、静かに失敗せず、clipboard や result card にフォールバックします。"],checklist:["Insert at Cursor: Accessibility と editable field が必要","Diary 系 workflow は保存先や命名ルールに従って保存できる","selection ベースの quick action は必要に応じて現在の選択テキストを使う"]}]},skills:{entries:[{id:"workflow-builder",title:"Workflow Builder",size:"lg",paragraphs:["Reso で実際の振る舞いを決める単位は workflow です。各 workflow は input mode、enabled skills、terminal actions の組み合わせです。","視覚的な Workflow Builder では skill node の並び替え、dry run、Shortcuts や shell-based steps の接続ができます。","現在の release には Dictation、Diary、External Save の 3 つのプリセットが同梱されています。いずれも Context Awareness、Clean、Revise、Writing Style、Translate という共通の core skills で構成され、違いは出力をどこへ届けるかにあります。"]},{id:"core-skills",title:"現在の release で中心になる skills",size:"md",checklist:["Insert at Cursor: 出力をフォーカス中の app に入れる","Screen Context: active app、selected text、必要なら OCR context を読む","Intent Drafting: 音声を逐語入力ではなく指示として扱う","Generated Skills: AppleScript や deep link を使う app automation を作る"]},{id:"dictation-vs-intent",title:"Dictation と Intent Drafting",size:"md",paragraphs:["Dictation は話した内容を保ちます。Intent Drafting は話した指示を目的の出力へ書き換えます。","現在の release では、明示的に workflow を選ぶのが最も信頼できる使い方です。Legacy Smart mode は残っていますが、製品はより明確な workflow activation に向かっています。"]}]},routing:{entries:[{id:"engines-overview",title:"Engine の全体像",size:"lg",paragraphs:["Reso は capture と model routing を分けています。音声はまず設定済みの transcription provider に送られ、その後の生成は Reso Engine か自分の API が担当します。","現在の build では、Reso Engine が有効ならそれがデフォルトの managed STT path です。Engine settings で BYOK の cloud provider に切り替えることもできます。"],checklist:["Reso Engine: managed setup、個人 key 不要、managed discovery に必要","Personal API: OpenAI、Anthropic、Google、Groq を自分の課金で使う"]},{id:"byok-vs-reso-engine",title:"BYOK と Reso Engine の選び分け",size:"md",paragraphs:["既に安定した provider や API key を持っているなら Personal API が向いています。","設定項目を減らし、製品側が管理する inference と discovery を使いたいなら Reso Engine が向いています。価格、trial、quota は変わり得るので、商用条件は Pricing ページを参照してください。"]},{id:"routing-behavior",title:"現在の routing の振る舞い",size:"md",paragraphs:["Reso はステップごとに別の provider を使えます。また、完全な Pro discovery 以外でも一部の product-managed routing は存在します。","workflow が未設定の provider や entitlement を必要とする場合、app はその blocker を明示し、ブラックボックス的に処理を進めません。"]}]},privacy:{entries:[{id:"data-handling",title:"現在のデータフロー",size:"lg",paragraphs:["Reso が音声を capture するのは、ショートカット、long hold、手動 action など、あなたが明示的に開始したときだけです。常時リッスンする設計ではありません。","現在の app は interruption recovery や再処理のために、Application Support にローカルの shadow recording を保持します。これらはローカルでローテーション清掃されます。"],checklist:["音声 capture は user-triggered であり、always-on ではない","Shadow recording は recovery と cleanup のためにローカル保存される","Reso Engine は managed inference payload に zero data retention を掲げる","Personal API の privacy 境界は選んだ provider の方針に従う"]},{id:"permissions-guide",title:"Permissions ガイド",size:"md",checklist:["Microphone: すべての voice capture に必要","Accessibility: Insert at Cursor と app context read に必要","Screen Recording: workflow で OCR ベースの screen context を有効にしたときのみ必要"],paragraphs:["Accessibility でも macOS の secure field 保護は突破できません。Screen Recording も context feature を起動したときの snapshot 用であり、連続録画ではありません。"]},{id:"knowledge-import",title:"Knowledge Import",size:"md",paragraphs:["ノートの取り込みは folder 単位で明示的に選びます。Reso がディスク全体を走査したり、ライブラリ全体をアップロードしたりすることはありません。","ローカル index は Mac 上に残ります。workflow が knowledge grounding を必要とするときも、送られるのは最小限の relevant slice だけです。"]}]},discovery:{entries:[{id:"nebula",title:"Nebula：思考の視覚化",size:"lg",paragraphs:["Nebula は没入型の 3D 空間です。すべての録音と取り込んだノートは意味ごとに埋め込まれ、関連するアイデアは自然と寄り合い、クラスタを形成していきます——フォルダもタグも不要。","サイドバーまたは専用ショートカットから Nebula に入れます。クラスタを掴んで中に飛び込むもよし、漂わせながら最近どのテーマが重くなってきたかを眺めるもよし。"]},{id:"memory-grounding",title:"Memory を grounding 源として使う",size:"md",paragraphs:["すべての Voice Workflow は、Nebula が可視化しているのと同じローカル Memory から文脈を取得できます。Reso はノート全体をモデルに渡すのではなく、その実行に最も関連する断片だけを取り出します。","Memory はあなたの capture と import に応じて育ちます。Nebula のクラスタリングも grounding の検索も、実際の履歴が増えるほど精度が上がります——数十件の実データや Obsidian vault の取り込みを経ると、違いがはっきりと現れます。"]}]},troubleshooting:{entries:[{id:"recording-not-starting",title:"録音が始まらない",size:"lg",checklist:["録音ショートカットが設定済みで、他 app と衝突していないか確認する","System Settings で Microphone permission を許可する","使える STT path があるか確認する。Reso Engine が有効か、BYOK provider が正しく設定されている必要がある"]},{id:"insertion-or-context",title:"Insert at Cursor や context が動かない",size:"md",checklist:["出力を app に戻したいなら Accessibility を許可する","録音前にカーソルを標準的な editable field に置く","OCR ベースの screen context を使うなら Screen Recording を許可する","新しい permission を付与した直後は Reso を再起動する"]},{id:"engine-or-discovery",title:"Engine や Discovery の問題",size:"md",checklist:["Engine settings で provider と API key を再確認する","Reso Engine 依存なら current plan や trial status を確認する","Discovery の出力が薄い場合は、まず本物のノートや履歴を増やす"]}]}}}},zg=e=>{const t=new Map;return _d.forEach(n=>{var r,o;t.set(n,n),(o=(r=e.sections[n])==null?void 0:r.entries)==null||o.forEach(i=>{t.set(i.id,n)})}),t},Lg=()=>{var c,g;const e=Ue(),{language:t}=xe(),n=ne(Tg,t),[r,o]=y.useState("gettingStarted"),i=y.useMemo(()=>zg(n),[n]);y.useEffect(()=>{if(!e.hash)return;const d=e.hash.slice(1),m=i.get(d);if(!m)return;o(m);const x=window.setTimeout(()=>{const b=document.getElementById(d);b&&b.scrollIntoView({block:"start"})},80);return()=>window.clearTimeout(x)},[i,e.hash]);const a=y.useMemo(()=>_d.map(d=>({id:d,label:n.nav[d]})),[n]),s=((g=(c=n.sections[r])==null?void 0:c.entries)==null?void 0:g.map(d=>({id:d.id,label:d.title})))||[],u=d=>{o(d),typeof window<"u"&&window.history.replaceState(null,"",`${e.pathname}#${d}`)};return l.jsx("main",{className:"pt-28 min-h-screen pb-20",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("section",{className:"mb-16 max-w-3xl",children:[l.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:n.headerTitle}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:n.headerSubtitle})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] gap-8 xl:gap-10",children:[l.jsx("aside",{className:"hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto",children:l.jsx("nav",{className:"space-y-1",children:a.map(d=>l.jsx("button",{onClick:()=>u(d.id),className:`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${r===d.id?"bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:d.label},d.id))})}),l.jsx("article",{className:"space-y-8",children:l.jsx(Ag,{section:n.sections[r]})}),l.jsx("aside",{className:"hidden xl:block xl:sticky xl:top-28 xl:self-start",children:s.length>0&&l.jsxs("div",{children:[l.jsx("p",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3",children:n.onThisPage}),l.jsx("nav",{className:"space-y-1",children:s.map(d=>l.jsx("a",{href:`#${d.id}`,className:"block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:d.label},d.id))})]})})]})]})})},Ag=({section:e})=>e!=null&&e.entries?l.jsx("div",{className:"space-y-8",children:e.entries.map(t=>{var n,r;return l.jsxs("section",{id:t.id,className:"scroll-mt-28",children:[l.jsx("h2",{className:`${t.size==="md"?"text-xl":"text-2xl"} font-medium text-gray-900 dark:text-gray-100 mb-4`,children:t.title}),l.jsxs("div",{className:"prose-content space-y-4",children:[(n=t.paragraphs)==null?void 0:n.map((o,i)=>l.jsx("p",{children:o},i)),t.checklist&&l.jsx("ul",{className:"space-y-2",children:t.checklist.map(o=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(Qm,{size:14,className:"text-green-600 dark:text-green-400 mt-1 flex-shrink-0"}),l.jsx("span",{children:o})]},o))}),(r=t.paragraphs2)==null?void 0:r.map((o,i)=>l.jsx("p",{children:o},`p2-${i}`)),t.downloadLabel&&l.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors",children:t.downloadLabel})]})]},t.id)})}):null,Mg="https://reso-contact.gaoyukun1205.workers.dev",Og={en:{submitSuccessTitle:"Thanks for reaching out!",submitSuccessBody:"We've received your feedback and will get back to you as soon as possible.",submitAnother:"Share more",sectionTag:"Contact Us",title:"Build with Us",intro:"We're excited to shape Reso together with you. Your feedback drives our evolution. Whether it's a feature idea, frustration, or bug report — we'd love to hear from you.",nameLabel:"What should we call you?",namePlaceholder:"Your name / nickname",emailLabel:"Your Email",emailPlaceholder:"For our reply",messageLabel:"What's on your mind?",messageHint:"Share your thoughts, ideas, or any issues you encountered.",messagePlaceholder:"Tell us what features you'd like to see in Reso, or what doesn't feel right. If you'd like, share your use case too...",uploadLabel:"File Upload",uploadHint:"Screenshots or Screen Recording (Optional) — A picture is worth a thousand words.",uploadAction:"Click to choose a file or drag here",uploadLimit:"Size limit: 10 MB",fileTooLarge:"File size must be less than 10MB",submitFailed:"Failed to submit. Please try again.",submitting:"Sending...",submit:"Send to Team"},zh:{submitSuccessTitle:"感谢你的反馈！",submitSuccessBody:"我们已收到你的信息，会尽快回复。",submitAnother:"继续分享",sectionTag:"联系我们",title:"共建 Reso",intro:"很高兴能和你一起打磨 Reso。你的反馈是我们进化的动力。无论是新功能灵感、使用上的吐槽，还是 Bug 报告，都欢迎直接告诉我们。",nameLabel:"怎么称呼你？",namePlaceholder:"你的名字 / 昵称",emailLabel:"你的邮箱",emailPlaceholder:"用于接收回复",messageLabel:"你有什么想法或发现？",messageHint:"分享你的想法、建议，或遇到的问题。",messagePlaceholder:"告诉我们你希望 Reso 增加什么功能，或者哪里让你觉得不好用。如果不介意，也可以聊聊你的使用场景...",uploadLabel:"上传文件",uploadHint:"截图或录屏（可选）— 一图胜千言，帮我们更快定位问题。",uploadAction:"点击选择文件或拖拽到这里",uploadLimit:"大小上限：10 MB",fileTooLarge:"文件大小不能超过 10MB",submitFailed:"提交失败，请稍后重试。",submitting:"发送中...",submit:"发送给团队"},ja:{submitSuccessTitle:"お問い合わせありがとうございます！",submitSuccessBody:"フィードバックを受け取りました。できるだけ早くご返信します。",submitAnother:"さらに共有",sectionTag:"Contact",title:"一緒に作る Reso",intro:"あなたと一緒に Reso を磨き上げることを楽しみにしています。あなたのフィードバックが私たちの進化の原動力です。新機能のアイデア、使いにくい点、バグ報告など、何でもお聞かせください。",nameLabel:"何とお呼びすればよろしいですか？",namePlaceholder:"お名前 / ニックネーム",emailLabel:"メールアドレス",emailPlaceholder:"返信用",messageLabel:"どのようなご意見がありますか？",messageHint:"ご意見、アイデア、または遭遇した問題を共有してください。",messagePlaceholder:"Reso に追加してほしい機能や、使いにくいと感じた点を教えてください。よろしければ、使用ケースも共有していただけると幸いです...",uploadLabel:"ファイル添付",uploadHint:"スクリーンショットまたは画面収録（任意）— 百聞は一見に如かず。問題の特定に役立ちます。",uploadAction:"クリックして選択、またはここへドラッグ",uploadLimit:"上限サイズ: 10 MB",fileTooLarge:"ファイルサイズは 10MB 未満にしてください",submitFailed:"送信に失敗しました。しばらくして再度お試しください。",submitting:"送信中...",submit:"チームに送信"}},_g=()=>{const{language:e}=xe(),t=ne(Og,e),[n,r]=y.useState({name:"",email:"",message:""}),[o,i]=y.useState(null),[a,s]=y.useState(!1),[u,c]=y.useState(!1),[g,d]=y.useState(null),[m,x]=y.useState(""),b=y.useRef(null),v=S=>{const{name:I,value:E}=S.target;r(A=>({...A,[I]:E}))},w=S=>{S.preventDefault(),S.stopPropagation(),S.type==="dragenter"||S.type==="dragover"?s(!0):S.type==="dragleave"&&s(!1)},f=S=>{S.preventDefault(),S.stopPropagation(),s(!1),S.dataTransfer.files&&S.dataTransfer.files[0]&&h(S.dataTransfer.files[0])},h=S=>{if(S.size>10*1024*1024){x(t.fileTooLarge);return}i(S),x("")},p=S=>{S.target.files&&S.target.files[0]&&h(S.target.files[0])},k=()=>{i(null),b.current&&(b.current.value="")},j=async S=>{S.preventDefault(),c(!0),d(null),x("");try{const I=new FormData;if(I.append("name",n.name),I.append("email",n.email),I.append("message",n.message),o&&I.append("file",o),!(await fetch(Mg,{method:"POST",body:I})).ok)throw new Error("Failed to submit feedback");d("success"),r({name:"",email:"",message:""}),i(null)}catch{d("error"),x(t.submitFailed)}finally{c(!1)}};return g==="success"?l.jsx("main",{className:"pt-28 min-h-screen pb-20",children:l.jsx("div",{className:"max-w-2xl mx-auto px-6",children:l.jsxs("div",{className:"text-center py-16",children:[l.jsx("div",{className:"w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center",children:l.jsx(Jm,{className:"w-8 h-8 text-green-600 dark:text-green-400"})}),l.jsx("h1",{className:"text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4",children:t.submitSuccessTitle}),l.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:t.submitSuccessBody}),l.jsx("button",{onClick:()=>d(null),className:"px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:t.submitAnother})]})})}):l.jsx("main",{className:"pt-28 min-h-screen pb-20",children:l.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[l.jsxs("section",{className:"mb-10",children:[l.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5",children:t.sectionTag}),l.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:t.title}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.intro})]}),l.jsxs("form",{onSubmit:j,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.nameLabel," ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:n.name,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all",placeholder:t.namePlaceholder})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.emailLabel," ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:n.email,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all",placeholder:t.emailPlaceholder})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.messageLabel," ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:t.messageHint}),l.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:n.message,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all resize-y min-h-[120px]",placeholder:t.messagePlaceholder})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:t.uploadLabel}),l.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-3",children:t.uploadHint}),o?l.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:o.name}),l.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[(o.size/1024/1024).toFixed(2)," MB"]})]}),l.jsx("button",{type:"button",onClick:k,className:"p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors",children:l.jsx(zd,{size:18,className:"text-gray-500 dark:text-gray-400"})})]}):l.jsxs("div",{onDragEnter:w,onDragLeave:w,onDragOver:w,onDrop:f,onClick:()=>{var S;return(S=b.current)==null?void 0:S.click()},className:`flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all ${a?"border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5":"border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20"}`,children:[l.jsx(ng,{size:24,className:"text-gray-400 dark:text-gray-500 mb-3"}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:t.uploadAction}),l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:t.uploadLimit})]}),l.jsx("input",{ref:b,type:"file",onChange:p,accept:"image/*,video/*,.pdf",className:"hidden"})]}),m&&l.jsx("p",{className:"text-sm text-red-500 dark:text-red-400",children:m}),l.jsx("button",{type:"submit",disabled:u,className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:u?l.jsxs(l.Fragment,{children:[l.jsx(Zm,{size:16,className:"animate-spin"}),l.jsx("span",{children:t.submitting})]}):l.jsx("span",{children:t.submit})})]})]})})};function Qs({skill:e,onInstall:t,isTone:n=!1}){const{language:r}=xe(),o=ne({en:{pro:"Pro",more:"more",install:"Install",tone:"Tone",skill:"Skill"},zh:{pro:"Pro",more:"更多",install:"安装",tone:"Tone",skill:"Skill"},ja:{pro:"Pro",more:"件",install:"インストール",tone:"Tone",skill:"Skill"}},r);return l.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700",children:[l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl",children:Dg(e.icon)}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:e.name}),e.category&&l.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 capitalize",children:e.category})]})]}),e.requiresPro&&l.jsx("span",{className:"px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded",children:o.pro})]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2",children:e.description}),e.keywords&&e.keywords.length>0&&l.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.keywords.slice(0,3).map((i,a)=>l.jsx("span",{className:"px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded",children:i},a)),e.keywords.length>3&&l.jsxs("span",{className:"px-2 py-1 text-xs text-gray-500 dark:text-gray-400",children:["+",e.keywords.length-3," ",o.more]})]}),l.jsxs("button",{onClick:t,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2",children:[l.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),l.jsxs("span",{children:[o.install," ",n?o.tone:o.skill]})]})]})}function Dg(e){return{"calendar.badge.plus":"📅",magnifyingglass:"🔍","envelope.fill":"✉️","star.fill":"⭐","wand.and.stars":"✨","paintbrush.fill":"🎨","doc.text.fill":"📄","speaker.wave.3.fill":"🔊"}[e]||"✨"}const Fg={en:{failedCatalog:"Failed to load catalog",appNotOpened:"Reso app didn't open? Make sure you have Reso installed. Would you like to download it?",loading:"Loading marketplace...",errorPrefix:"Error:",title:"Reso Marketplace",subtitle:"Discover and install powerful skills and tone presets to enhance your Reso experience",skills:"Skills",tones:"Tone Presets",empty:"No items available at the moment. Check back soon!"},zh:{failedCatalog:"加载 catalog 失败",appNotOpened:"Reso 没有打开？请先确认是否已安装 Reso。现在前往下载吗？",loading:"正在加载 Marketplace...",errorPrefix:"错误：",title:"Reso Marketplace",subtitle:"发现并安装实用 Skills 与 Tone 预设，扩展你的 Reso 体验。",skills:"Skills",tones:"Tone Presets",empty:"当前暂无可用项目，请稍后再来查看。"},ja:{failedCatalog:"catalog の読み込みに失敗しました",appNotOpened:"Reso アプリが開きませんでしたか？インストール済みか確認し、ダウンロードしますか？",loading:"Marketplace を読み込み中...",errorPrefix:"エラー:",title:"Reso Marketplace",subtitle:"便利な Skills と Tone Presets を見つけてインストールし、Reso を拡張しましょう。",skills:"Skills",tones:"Tone Presets",empty:"現在利用できる項目はありません。しばらくしてから再度ご確認ください。"}};function Wg(){const[e,t]=y.useState(null),[n,r]=y.useState(!0),[o,i]=y.useState(null),{language:a}=xe(),s=ne(Fg,a);y.useEffect(()=>{fetch("/api/catalog.json").then(c=>{if(!c.ok)throw new Error(s.failedCatalog);return c.json()}).then(c=>{t(c),r(!1)}).catch(c=>{console.error("Failed to load catalog:",c),i(c.message),r(!1)})},[s.failedCatalog]);const u=(c,g)=>{const d=`reso://install/${g}?id=${c}`;window.location.href=d,setTimeout(()=>{window.confirm(s.appNotOpened)&&(window.location.href="/pricing")},2e3)};return n?l.jsx("div",{className:"min-h-screen flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.loading})]})}):o?l.jsx("div",{className:"min-h-screen flex items-center justify-center",children:l.jsx("div",{className:"text-center",children:l.jsxs("p",{className:"text-red-600 dark:text-red-400",children:[s.errorPrefix," ",o]})})}):l.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:s.title}),l.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:s.subtitle})]}),(e==null?void 0:e.skills)&&e.skills.length>0&&l.jsxs("section",{className:"mb-16",children:[l.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:s.skills}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.skills.map(c=>l.jsx(Qs,{skill:c,onInstall:()=>u(c.id,"skill")},c.id))})]}),(e==null?void 0:e.tones)&&e.tones.length>0&&l.jsxs("section",{children:[l.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:s.tones}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.tones.map(c=>l.jsx(Qs,{skill:c,onInstall:()=>u(c.id,"tone"),isTone:!0},c.id))})]}),(!(e!=null&&e.skills)||e.skills.length===0)&&(!(e!=null&&e.tones)||e.tones.length===0)&&l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.empty})})]})})}const Bg={en:{categories:[{id:"all",label:"All Skills"},{id:"productivity",label:"Productivity"},{id:"writing",label:"Writing"},{id:"code",label:"Code"},{id:"communication",label:"Communication"}],appNotOpened:"Reso didn't open? Make sure you have Reso installed.",loading:"Loading skills...",title:"Extend Reso with skills.",subtitle:"Powerful skills crafted by our community to enhance your voice workflows.",featured:"Featured",installSkill:"Install Skill",install:"Install",shareTitle:"Share Your Expertise",shareBody:"Built something useful? Submit your skill and help the Reso community grow.",submitSkill:"Submit Your Skill",modalTitle:"Submit Your Skill",skillName:"Skill Name",skillNamePlaceholder:"My Awesome Skill",description:"Description",descriptionPlaceholder:"What does your skill do?",email:"Your Email",cancel:"Cancel",submit:"Submit",modalClose:"Close"},zh:{categories:[{id:"all",label:"全部 Skills"},{id:"productivity",label:"效率"},{id:"writing",label:"写作"},{id:"code",label:"编程"},{id:"communication",label:"沟通"}],appNotOpened:"Reso 没有打开？请先确认你已安装 Reso。",loading:"正在加载 Skills...",title:"用 Skills 扩展 Reso。",subtitle:"社区贡献的实用能力,给你的语音 workflow 加件趁手的工具。",featured:"精选",installSkill:"安装 Skill",install:"安装",shareTitle:"分享你的专长",shareBody:"做了一个好用的 Skill？提交给我们，让更多 Reso 用户受益。",submitSkill:"提交 Skill",modalTitle:"提交你的 Skill",skillName:"Skill 名称",skillNamePlaceholder:"My Awesome Skill",description:"描述",descriptionPlaceholder:"你的 Skill 能做什么？",email:"你的邮箱",cancel:"取消",submit:"提交",modalClose:"关闭"},ja:{categories:[{id:"all",label:"すべての Skills"},{id:"productivity",label:"生産性"},{id:"writing",label:"ライティング"},{id:"code",label:"コード"},{id:"communication",label:"コミュニケーション"}],appNotOpened:"Reso が開きませんでしたか？Reso がインストールされているか確認してください。",loading:"Skills を読み込み中...",title:"Skills で Reso を拡張。",subtitle:"コミュニティが作成したスキルで、音声 workflow を強化できます。",featured:"注目",installSkill:"Skill をインストール",install:"インストール",shareTitle:"あなたの知見を共有",shareBody:"便利な Skill を作ったら、投稿して Reso コミュニティを一緒に育てましょう。",submitSkill:"Skill を投稿",modalTitle:"Skill を投稿",skillName:"Skill 名",skillNamePlaceholder:"My Awesome Skill",description:"説明",descriptionPlaceholder:"この Skill は何をしますか？",email:"メールアドレス",cancel:"キャンセル",submit:"送信",modalClose:"閉じる"}};function Ug(){var x,b;const[e,t]=y.useState(null),[n,r]=y.useState(!0),[o,i]=y.useState("all"),[a,s]=y.useState(!1),{language:u}=xe(),c=ne(Bg,u);y.useEffect(()=>{fetch("/api/catalog.json").then(v=>v.json()).then(v=>{t(v),r(!1)}).catch(v=>{console.error("Failed to load catalog:",v),r(!1)})},[]);const g=(v,w="skill")=>{const f=`reso://install/${w}?id=${v}`;window.location.href=f,setTimeout(()=>{window.confirm(c.appNotOpened)&&(window.location.href="/pricing")},2e3)},d=((x=e==null?void 0:e.skills)==null?void 0:x.filter(v=>o==="all"||v.category===o))||[],m=(b=e==null?void 0:e.skills)==null?void 0:b[0];return n?l.jsx("div",{className:"pt-28 min-h-screen flex items-center justify-center",children:l.jsx("div",{className:"max-w-6xl mx-auto px-6",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-12 h-12 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin mx-auto mb-4"}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:c.loading})]})})}):l.jsxs("main",{className:"pt-28 min-h-screen pb-20",children:[l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("section",{className:"mb-16 max-w-3xl",children:[l.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:c.title}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:c.subtitle})]}),m&&l.jsx($g,{skill:m,onInstall:()=>g(m.id),copy:c}),l.jsx("section",{className:"mb-8",children:l.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2",children:c.categories.map(v=>l.jsx("button",{onClick:()=>i(v.id),className:`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${o===v.id?"bg-black dark:bg-white text-white dark:text-black":"border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-black/50"}`,children:v.label},v.id))})}),l.jsx("section",{className:"mb-16",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:d.slice(1).map(v=>l.jsx(Hg,{skill:v,onInstall:()=>g(v.id),copy:c},v.id))})}),l.jsx("section",{children:l.jsxs("div",{className:"rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-10 text-center",children:[l.jsx("h3",{className:"text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4",children:c.shareTitle}),l.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed",children:c.shareBody}),l.jsxs("button",{onClick:()=>s(!0),className:"inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[l.jsx("span",{children:c.submitSkill}),l.jsx(sn,{size:16})]})]})})]}),a&&l.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6",onClick:()=>s(!1),children:l.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-black/10 dark:border-white/10",onClick:v=>v.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsx("h2",{className:"text-2xl font-medium text-gray-900 dark:text-gray-100",children:c.modalTitle}),l.jsx("button",{onClick:()=>s(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl","aria-label":c.modalClose,children:"×"})]}),l.jsxs("form",{onSubmit:v=>{v.preventDefault(),window.open("https://tally.so/r/obDo51","_blank"),s(!1)},className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.skillName}),l.jsx("input",{type:"text",required:!0,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all",placeholder:c.skillNamePlaceholder})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.description}),l.jsx("textarea",{required:!0,rows:4,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none",placeholder:c.descriptionPlaceholder})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.email}),l.jsx("input",{type:"email",required:!0,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all",placeholder:"you@example.com"})]}),l.jsxs("div",{className:"flex gap-4 pt-2",children:[l.jsx("button",{type:"button",onClick:()=>s(!1),className:"flex-1 px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors",children:c.cancel}),l.jsx("button",{type:"submit",className:"flex-1 px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:c.submit})]})]})]})})]})}function $g({skill:e,onInstall:t,copy:n}){return l.jsxs("div",{className:"mb-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-8 md:p-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10",children:[l.jsx("span",{className:"w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full"}),l.jsx("span",{className:"text-xs uppercase tracking-[0.16em] text-gray-700 dark:text-gray-300 font-medium",children:n.featured})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4 tracking-tight",children:e.name}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl",children:e.description}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:e.keywords.slice(0,4).map((r,o)=>l.jsx("span",{className:"px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-xs text-gray-700 dark:text-gray-300 font-medium",children:r},o))}),l.jsxs("button",{onClick:t,className:"inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[l.jsx(Cl,{size:16}),l.jsx("span",{children:n.installSkill})]})]})}function Hg({skill:e,onInstall:t,copy:n}){return l.jsxs("article",{className:"rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 hover:border-black/20 dark:hover:border-white/20 transition-all",children:[l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl",children:Vg(e.icon)}),e.requiresPro&&l.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-gray-700 dark:text-gray-300",children:"PRO"})]}),l.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.name}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2",children:e.description}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:e.keywords.slice(0,3).map((r,o)=>l.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs text-gray-600 dark:text-gray-400",children:r},o))}),l.jsx("button",{onClick:t,className:"w-full py-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors",children:n.install})]})}function Vg(e){return{"calendar.badge.plus":"📅",magnifyingglass:"🔍","envelope.fill":"✉️","star.fill":"⭐","wand.and.stars":"✨","paintbrush.fill":"🎨","doc.text.fill":"📄","speaker.wave.3.fill":"🔊"}[e]||"✨"}const Gg=[{id:13,category:"Product",title:{en:"The Art of Restraint",zh:"克制",ja:"削ぎ落とすこと"},summary:{en:"I cut 20% of the features this week. Not because they were bad ideas, but because the foundation matters more than the skyline.",zh:"这周我砍掉了 20% 的功能。不是因为那些想法不好，而是地基比天际线更重要。",ja:"今週、機能の20%を削った。アイデアが悪かったからではない。土台のほうが空の輪郭より大事だからだ。"},content:{en:`I've been away from this project for about a week, working on other code. When I came back and opened it again, something shifted.

When you build every day, everything feels sticky. You poured hours into each feature, so naturally every piece feels essential. But step away for a week, lose that attachment, and things get clearer.

### What Distance Showed Me

Without the daily attachment, practical concerns surfaced:

I had designed ambitious workflows—multi-step, branching, deeply configurable. The vision was exciting. But looking at it with fresh eyes, I saw cognitive overload. How many people would actually navigate all of that? That's not a certain number.

The honest move was to revisit the old question: can the core features run smoothly, and can they be the best version of themselves?

### Foundations Before Skyscrapers

I'm fine with having a grand blueprint. But trying to build a skyscraper in week one is a different thing entirely. Lay the foundation first. The penthouse can wait.

This isn't about commitment or ambition. It's about sequencing. Having a clear sense of what's urgent versus what's aspirational.

At this stage, the real question is: do I spend time polishing existing features into a complete product loop, or do I expand horizontally and open more threads? There are plenty of impressive things I could build. But each one eats into the time I need for getting the basics right, and stretches the development cycle.

### Month One vs. Month Six

When I looked at everything with fresh eyes, some features felt like where this product should be six months from now. Others clearly belonged in month one.

So I pulled out nearly everything that belongs in month six or year one. Not deleted—stored. This frees up space to think about how to express the fundamentals clearly.

### The Tendency to Over-Explain

Here's something I noticed while building: even though I use this product daily, I kept worrying that I hadn't explained it well enough. I'd over-explain, add extra guidance, hedge against confusion.

That comes from not knowing whether others will get it. And the truth is, I won't know until it's in the market. The best feedback is customer feedback. Without it, there's a tendency to keep polishing in a vacuum—moved by your own effort rather than by real signals.

### Why I Wouldn't Have Done This a Month Ago

A month ago, if you told me to cut features and ship less, I'd have resisted. It would have felt like limiting imagination, thinking too small.

But I've come to see that good ideas don't all need to ship at once. You can't get there in one bite. Some ideas need to sit, and the real question is whether they're needed *now*.

### Watermelons and Sesame Seeds

When tasks pile up, the core question keeps coming back: what am I actually trying to do? A product that tries to do everything ends up doing nothing well. Energy scatters.

When you're exhausted, the answer isn't grinding harder. It's stepping back and asking: about all of this, what am I doing?

It's not about having ten or a hundred agent skills. It's about understanding how much value those ten actually deliver. Where should this be in three months? In six?

This isn't about squeezing more productivity from each day. It's about seeing how the product evolves across time—finding its place in the ecosystem.

### Software as Communication

How does this product interact with people? What matters most in that interaction?

It's like talking to someone. Speaking faster doesn't mean you have more to say. When you have a lot to communicate, that's exactly when you need to figure out what matters most—and say that.

Not everything at once. Just the things both sides can actually engage with.

Building software forces you to confront this: what exactly are you trying to say? What's the most important thing?

In the end, writing code is practice in expressing yourself clearly.`,zh:`这一个礼拜我在准备其他的代码，没怎么碰这个项目。等我回来重新打开它的时候，看到的东西不太一样了。

每天都在做的时候，你会觉得每个功能都很有粘性——毕竟是你投了大量时间开发出来的，每一块都觉得不可或缺。但放下一个礼拜，没有了那种粘着感，事情反而清晰了。

### 距离让我看见了什么

少了每天的惯性投入，一些现实的考量浮了上来。

我之前设计了特别多工作流，想法很 ambitious——多步骤、多分支、深度可配置。想象很兴奋，但换了双眼睛再看，我看到的是认知负担。到底有多少人会真的走完那些流程？这不是一个确定的数字。

更诚实的做法是回到那句老话：基础功能能不能跑通，能不能做到最好用？

### 先打地基，再盖楼

有一个宏大的蓝图我是同意的。但第一周就要建摩天大楼，那是另一回事。先把地基打好，顶层的事可以之后再来。

这不是在说投入够不够，也不是在质疑想象力。而是关于"有的放矢"——分清楚什么是紧迫的，什么是愿景。

这个阶段真正要权衡的是：我是花时间打磨已有的功能、形成产品闭环？还是开更多线程、做横向扩张？确实有很多可以做得很惊艳的东西，但每做一个，都在挤压打磨基础场景的时间，也在拉长开发周期。

### 第一个月和第六个月

重新审视的时候，我发现有些功能像是这个产品六个月以后的样子，有些则是第一个月就该想清楚的。

所以我把几乎所有属于第六个月甚至第一年的东西，从当前版本里拿掉了。不是删掉，是存起来。这样做是为了留出空间，去思考怎么把最基础的东西表达清楚。

### 过度解释的倾向

有一件事是我在构建过程中发现的：虽然我每天都在用这个产品，但我一直在担心自己有没有交代清楚它到底是做什么的。会不自觉地加更多引导、做更多解释、试图挡住所有可能的困惑。

根源在于我不知道别人会不会用它。而真相是，没有进入市场就不会知道。最好的反馈永远是用户反馈。没有它，就容易陷入一种在真空里打磨的状态——被自己的投入感动，而不是被真实信号驱动。

所以这周我砍掉了 20% 的功能。我觉得还是要把这个做得更具体一些。

### 一个月前的我不会这么做

一个月前如果有人跟我说砍功能、少做一点，我大概会觉得：凭什么要限制自己？那样感觉想象力受到了束缚，想得不够远。

但后来我在想，很多想法虽然好，并不意味着一次就要把功能仓库塞满。一口吃不成胖子。有些想法需要放一放，关键是它们现在是不是被需要的。

### 西瓜和芝麻

当面对越来越多的问题和 task 时，核心问题会反复浮现：你到底想做什么？一个什么都想做的产品，最后什么都做不好，精力会很分散。

觉得疲劳的时候，答案不是花更多时间把所有事情都做完。有时候你需要跳出来，站在更高的地方看一看：关于这一切，我到底在做什么？

关键不是你有十个还是一百个 agent skill，而是弄清楚这十个到底发挥了多大作用。三个月以后它应该是什么样？六个月以后呢？

这不是要从每天挤出更多 productivity，而是在时间维度上去看这个产品怎么演化——从自己的 ecosystem 出发，找到它的生态位。

### 写软件也是在练习表达

这个产品以什么方式和人交互？在这个交互里，什么是最重要的？

就像和人说话一样。语速快不代表你要说的更多。恰恰是在你有大量信息要传达的时候，更要想清楚什么是最重要的，然后说那个。

不是把所有东西一股脑列出来，而是抓双方都能有效沟通的东西说。

写软件会倒逼你想清楚这件事：你到底想说什么？什么是最重要的？

说到底，写代码也是在练习如何清晰地表达自己。`,ja:`この一週間、別のコードに取り組んでいて、このプロジェクトにはほぼ触れなかった。戻ってきて改めて開いたとき、見え方が変わっていた。

毎日作っていると、どの機能にも粘着力を感じる。大量の時間を注いだのだから、どれも欠かせないと思える。でも一週間離れると、その粘りが消えて、物事がはっきり見えるようになる。

### 距離が見せてくれたもの

日々の慣性がなくなると、現実的な問いが浮かんできた。

以前、非常に ambitious なワークフローを設計していた。多段階、多分岐、細かく設定可能。構想は面白かったが、新鮮な目で見直すと、認知負荷の重さが見えた。あのフローを最後まで使い切る人がどれだけいるのか。確かな数字ではない。

正直に戻ると、あの基本の問いに行きつく。コア機能はちゃんと動くか。最も使いやすい形になっているか。

### 超高層ビルより先に土台

大きな青写真があること自体は賛成だ。でも一週目で超高層を建てようとするのは別の話。まず土台を固める。最上階のことは後でいい。

これは情熱や想像力の問題ではない。順序の問題だ。今すぐ必要なことと、将来のビジョンを見分けること。

今の段階で本当に問うべきは：既存の機能を磨いてプロダクトの輪を閉じるのか、それとも横に広げて新しいスレッドを増やすのか。驚くようなものを作る余地はたくさんある。でもそのひとつひとつが基本シナリオを磨く時間を削り、開発サイクルを伸ばす。

### 一ヶ月目と六ヶ月目

改めて見直したとき、ある機能は六ヶ月後のプロダクトに見えた。別の機能は一ヶ月目に解決すべきものだった。

だから六ヶ月目や一年目に属するものは、ほぼすべて現行バージョンから外した。削除ではなく保管。こうすることで、基礎をどう明確に伝えるかを考える余白が生まれる。

### 説明しすぎる傾向

作りながら気づいたことがある。毎日使っているのに、これが何をするものなのか、ちゃんと伝わっているかずっと不安だった。無意識にガイドを増やし、説明を重ね、あらゆる混乱を先回りして防ごうとしていた。

根にあるのは、他の人が使ってくれるか分からないということ。そして真実は、市場に出すまで分からない。最良のフィードバックは使い手のフィードバックだ。それがなければ、真空の中で磨き続ける傾向に陥る——実際の信号ではなく、自分の投入量に感動してしまう。

だから今週、機能の20%を削った。もっと具体的にしたかった。

### 一ヶ月前なら、こうはしなかった

一ヶ月前に「機能を減らせ」と言われたら、たぶん抵抗していた。想像力を制限される感覚、視野が狭くなる感覚。

でも今は分かる。良いアイデアだからといって、一度に全部を詰め込む必要はない。一口では太れない。いくつかのアイデアは寝かせておくべきで、問われるのは「今それが必要か」だ。

### スイカとゴマ

タスクと問題が増えるほど、核心の問いが繰り返し戻ってくる。自分は一体何を作ろうとしているのか。何でもやろうとするプロダクトは、結局どれも中途半端になる。エネルギーが散る。

疲れたとき、答えは「もっと頑張る」ではない。一歩引いて、上から眺めること。この全体について、自分は何をしているのか。

大事なのは agent skill が十個あるか百個あるかではない。その十個がどれだけの価値を出しているか。三ヶ月後、これはどうあるべきか。六ヶ月後は。

一日からもっと多くの生産性を絞り出すことではない。時間の軸でプロダクトがどう進化するか——自分のエコシステムの中で、その立ち位置を見つけること。

### ソフトウェアは表現の練習

このプロダクトはどうやって人と関わるのか。その関わりの中で、何が一番大事なのか。

人との会話と同じだ。早口は、伝えたいことが多い証拠にはならない。むしろ伝えたいことが山ほどあるときこそ、何が最も重要かを見極めて、それを言う。

全部を並べるのではなく、双方が実際に噛み合えるものを選んで伝える。

ソフトウェアを書くと、この問いに向き合わされる。自分は一体何を言いたいのか。何が一番大事なのか。

結局、コードを書くことは、自分を明確に表現する練習でもある。`}},{id:12,category:"Product",title:{en:"Building Code, Seeing Self",zh:"开发的过程也是在照见自己",ja:"コードを書くことは自分を見ること"},summary:{en:"I used to think the strongest model would deliver the best output. Turns out collaboration with AI agents mirrors working with people: fit matters more than firepower, and inefficiency often reveals gaps in my own thinking.",zh:"我曾以为最强的模型就能产出最好的结果。后来发现和 AI agent 合作就像和人合作：契合度比火力重要，低效往往暴露的是我自己思考的漏洞。",ja:"最強のモデルが最高の成果を出すと思っていた。AI agent との協働は人との協働と似ている：相性が火力より大事で、非効率は自分の思考の穴を映す。"},content:{en:`Last month I hit a wall refactoring the backend. I kept switching models, expecting one to magically solve it.

Then I realized: I wasn't treating them as collaborators with different strengths. I was looking for a silver bullet.

### The Strongest Model Doesn't Always Win

I've worked with Sonnet 4.5, Opus 4.5, and Codex GPT-5.3 Extreme High. On paper, you'd think the most advanced one wins.

In practice, that's not how it works.

Sonnet crushes backend debugging and refactoring. Its context handling is so strong it doesn't fall into patch-upon-patch memory traps.

Opus sometimes has brilliant moments. It draws on knowledge Sonnet doesn't have and breaks through bottlenecks I couldn't solve alone.

But most of the time, I'm not facing twisty puzzles that need that extra spark. I'm fixing routing logic, cleaning up state management, or ironing out edge cases.

### Good Habits Beat Extra Firepower

If I map out the technical landscape before I start—common architectures, model tradeoffs, adjustable parameters—I don't need Opus's unique edge as often.

It's like working with people. More credentials doesn't always mean better output. Sometimes I need someone with strong context retention and domain insight who can grind through real problems—that's Sonnet.

Opus feels more fragile. It shines when the problem is just right, but I can't rely on it for day-to-day sprints.

### Codex Surprised Me

Codex GPT-5.3 is solid in ways I didn't expect.

First: it doesn't over-promise. If something's uncertain, it says so.

Second: higher completion rate. When my instructions have room for interpretation, it handles ambiguity well or asks for clarification instead of guessing wrong.

Fun fact: when prototyping web interfaces, some models produce output that immediately signals "this was AI-generated"—the stylistic fingerprint is too obvious. Codex writes code that feels more neutral.

Third: better collaboration logic. Codex clearly trained on more interaction feedback. It understands that agents shouldn't fight each other. I've noticed Anthropic's models, when they overlap in task scope, keep editing each other's work endlessly. Codex knows when to stop.

### How I Use Each Model Now

Sonnet 4.5 is my go-to for debugging. Geeky, relentless, fires through problems like a committed engineer.

Codex feels like an earnest engineer who really wants to contribute. Grounded answers, never rolls back arbitrarily, sometimes gives genuinely insightful suggestions.

Opus is particular. It makes decisions on its own, and when things break, it rolls back instead of pushing through. Tasks don't finish efficiently even when it ends with "all good."

### Working with AI Mirrors Working with Myself

Here's what surprised me most: collaborating with coding agents became a mirror for my own thinking process.

When things feel inefficient, it's usually not the model's fault. It's amplifying gaps in my own planning:

1. Did I map out the workflow in advance?
2. Am I overcomplicating the problem?
3. Have I clarified the ultimate goal?

The process reminds me of stochastic gradient descent. Good optimization doesn't converge instantly from the first step. It uses randomness and proper step sizes to reach near-optimal solutions from different starting points, avoiding local minima.

That's what working with AI feels like when I do it right. It surfaces where my thinking was unclear, breaks illusions I held onto—like blindly trusting the biggest model the same way people trust credentials or titles.

Nothing is "always best." It's about fit. Like playing cards: you don't need all kings, you need to position the right cards in the right places.

When you're clear, execution gets easier. The interesting part is realizing mid-work that you weren't clear to begin with.

At first it's just an idea. But building sharpens it. The process keeps asking: "Is this really it?"

The further you go, the work itself tells you if it makes sense. After doing this enough, I've stopped caring much about external validation.

Eventually, you know.

Do you believe in it?`,zh:`上个月重构后端时,我一直在换模型,以为总有一个能神奇地解决问题。

后来我意识到:我不是在把它们当成各有所长的协作者,而是在找万能钥匙。

### 最强的模型不一定赢

我用过 Sonnet 4.5、Opus 4.5,还有 Codex 的 GPT-5.3 Extreme High。账面上看,你会觉得最先进的那个应该最好。

实际情况不是这样的。

Sonnet 在后端 debug 和重构时表现极强。它的 context 处理能力让它不会陷入"打补丁"式的记忆陷阱。

Opus 有时会有特别机灵的时刻。它能调用 Sonnet 没有的知识,突破我一个人解决不了的瓶颈。

但大部分时间,我面对的不是那种扭曲的难题。我在修路由逻辑、清理状态管理,或者处理边界情况。

### 好习惯抵消额外火力

如果我提前做好技术地图——常见架构、模型取舍、可调参数——我就不那么需要 Opus 的独特优势。

这就像和人合作。资历深不一定产出更好。有时候我需要的是 context 强、对专业领域有洞察、能扎实解决实战问题的人——那就是 Sonnet。

Opus 给我的感觉更娇气。问题刚好对路时它很亮眼,但日常 sprint 我没法指望它。

### Codex 让我意外

Codex GPT-5.3 的扎实超出我预期。

第一:它不会过度承诺。不确定的事它会说清楚。

第二:完成度更高。当我的指令不够准确、还存在一些发挥空间时,它会处理得很好,或者会进一步追问,而不是瞎猜。

有个有意思的事:做 web prototype 时,有些模型做出来的东西一看就是 AI 做的,风格特征太明显。Codex 写出来的代码感觉更中性。

第三:协作逻辑更好。Codex 明显经过更多交互反馈训练,知道 agent 协作时不该互相打架。Anthropic 的其他模型如果任务范围有 overlap,会互相改来改去停不下来。Codex 知道什么时候该收手。

### 我现在怎么用这些模型

Sonnet 4.5 是我的 go-to model,尤其是 debug。很 geeky,很坚韧,像个有工兵精神的中坚力量,能 fire through problems。

Codex 像个很诚恳、很想贡献代码的工程师。回答扎实,不会擅自退回,有时还能给出很有洞察力的建议。

Opus 比较特殊。它会擅自做决定,遇到错误直接 roll back,任务没有高效完成,最后还说"没问题"。

### 和 AI 合作,像是在和自己合作

最让我意外的是:和 coding agent 磨合,变成了照见自己思考过程的镜子。

觉得低效时,通常不是模型的问题,而是放大了我自己计划中的漏洞:

1. 工作流程有没有提前规划?
2. 是不是把问题过度复杂化了?
3. 最终目标想清楚了吗?

这个过程让我想起随机梯度下降。好的优化过程不会第一步就直接收敛,而是通过随机性和适当的步长,能从不同起点稳健地找到接近最优的解,避免困在局部最优里。

和 AI 合作如果做对了,就是这种感觉。它会浮现出我思考不清晰的地方,破除我过去抱着的幌子——比如盲目迷信大模型,就像人总会迷信权威或头衔一样。

没有什么是"一定最好",更多的是"适合"。就像打牌:你不需要全都摸到大王,关键是把合适的牌放到合适的位置。

想清楚了,做起来反而没那么难。有意思的是,很多时候在做的过程中,你才意识到自己没想清楚。

一开始只是个想法。但做的过程会反复打磨它,一直追问:"是这样吗?真的是这样吗?"

你越往下走,这个事情本身就会告诉你它说不说得通。做多了以后,我不太在意别人同不同意,或者友善的支持。

那些当然好。但做到后面,自己心里是知道的。

Do you believe in it?`,ja:`先月、バックエンドのリファクタリングで壁にぶつかり、モデルを切り替え続けた。どれかが魔法のように解決してくれると思っていた。

その後気づいた。私はそれぞれの強みを持つ協力者として扱っていなかった。万能の答えを探していただけだった。

### 最強のモデルが必ず勝つわけではない

Sonnet 4.5、Opus 4.5、Codex GPT-5.3 Extreme High を使ってきた。書類上では、最も進んだものが勝つと思うだろう。

実際はそうならない。

Sonnet はバックエンドの debug とリファクタリングで圧倒的に強い。context 処理能力が高く、継ぎはぎ式の記憶の罠に陥らない。

Opus は時々鮮やかな瞬間がある。Sonnet にはない知識を引き出し、一人では突破できなかった壁を越える。

でも大半の時間、そんなにひねくれた難題には直面していない。ルーティングロジックを直したり、状態管理を整理したり、エッジケースを処理している。

### 良い習慣が余分な火力に勝る

事前に技術マップを作っておけば——一般的なアーキテクチャ、モデルのトレードオフ、調整可能なパラメータ——Opus の独自の強みはそれほど必要ない。

人と働くのと同じ。資格が多いほど成果が良いとは限らない。時には context 保持力が強く、専門分野への洞察があり、実戦的な問題を着実に解決できる人が必要——それが Sonnet だ。

Opus はもっと繊細に感じる。問題がぴったり合えば輝くが、日々の sprint では頼れない。

### Codex は意外だった

Codex GPT-5.3 は予想外にしっかりしている。

第一:過度な約束をしない。不確実なことがあれば言ってくれる。

第二:完成度が高い。私の指示が曖昧で解釈の余地があるとき、適切に処理するか、推測せずに確認を求める。

面白い事実:web prototype を作るとき、一部のモデルは「これは AI が作った」とすぐ分かる出力を生成する——文体的な特徴が明らかすぎる。Codex が書くコードはより中立的に感じる。

第三:協働ロジックが優れている。Codex は明らかにより多くのインタラクションフィードバックで訓練されていて、agent が協働するとき互いに争うべきでないことを理解している。Anthropic の他のモデルは、タスク範囲が重なると互いに延々と編集し合う。Codex はいつ止めるべきかを知っている。

### 今、各モデルをどう使っているか

Sonnet 4.5 は私の go-to model、特に debug で。とても geeky で、relentless で、献身的なエンジニアのように問題を突破する。

Codex は真面目で貢献したいエンジニアのように感じる。しっかりした回答、勝手に rollback しない、時々本当に洞察に富んだ提案をくれる。

Opus は特殊。自分で決定を下し、問題が起きると rollback する。タスクは効率的に終わらず、最後に「問題なし」と言う。

### AI との協働は自分自身を映す鏡

最も驚いたのは: coding agent との協働が、自分の思考プロセスを映す鏡になったこと。

非効率に感じるとき、通常はモデルの問題ではない。自分の計画の穴を拡大している:

1. ワークフローを事前に計画したか?
2. 問題を過度に複雑化していないか?
3. 最終目標を明確にしたか?

このプロセスは確率的勾配降下法を思い出させる。良い最適化は最初のステップで即座に収束しない。ランダム性と適切なステップサイズを使って、異なる出発点から最適に近い解を見つけ、局所最適を避ける。

AI と適切に協働すると、そんな感じになる。思考が不明瞭だった場所が浮かび上がり、抱いていた幻想を壊す——大きなモデルを盲目的に信じることは、人が権威や肩書きを信じるのと同じように。

「常に最高」なものはない。「適合」が重要。カードゲームと同じ:すべてキングである必要はなく、適切なカードを適切な場所に配置することが大切。

明確なら、実行は簡単になる。面白いのは、作業の途中で自分が明確でなかったことに気づくこと。

最初はただのアイデア。でも作る過程がそれを磨く。このプロセスは繰り返し問いかける:「本当にこれか?」

進めば進むほど、作業自体が筋が通っているか教えてくれる。これを十分やった後は、外部の承認や友好的な支持をあまり気にしなくなった。

最終的には、自分で分かる。

Do you believe in it?`}},{id:11,category:"Product",title:{en:"Between Building and Using",zh:"在构建与使用之间",ja:"作ることと使うことのあいだ"},summary:{en:"Lately I keep being reminded: I'm not studying people from outside. I wear both hats, and that changes how I build.",zh:"这阵子我反复被一件事提醒：我不是在研究使用者，我本来就是其中一员。",ja:"最近何度も思い知らされる。私は使い手を外から観察しているのではなく、作り手と使い手の両方だということ。"},content:{en:`This week I got humbled again.

During the day I tuned the flow and felt the chain was finally complete. At night I used it for real writing and still got blocked by a few startup steps.

That moment was clear: I'm not standing outside the people I build for. I wear both hats. I'm a builder and a user at the same time.

### I Don't Observe from Distance

With the builder hat on, I think about activation flow, edge branches, extensibility. With the user hat on: Is it smooth? Is it fast? Does it interrupt me?

Because both feelings live in the same body, I now avoid saying "users might feel..." and write "I just got stuck here."

### The First Minutes Are Fragile

Journaling makes this obvious.

What I want is simple: feel something, write it immediately.

What often happens: find folders, patch the title, tweak formatting, locate where I left off. By then, the heat is gone.

So lately I keep pushing one principle: put expression first, then let organizing, archiving, and historical linking run quietly in the background.

### In Builder Mode, the Hard Part Is Sequence

Each step is easy in isolation. Sequencing is hard.

Once order is wrong, the experience fractures.

These are the three loops I keep tuning:

1. Where to place step one of activation flow so it's accurate without being intrusive
2. How to connect the thought process so it doesn't drop halfway
3. How to sequence skills and process stages to reduce misfires and rollback

### I Want "Being Understood," Not "Finding Entrances"

Older interaction feels like channel switching: find an entrance first, then search for content.

I want something closer to an Information Feed: understand first, deliver next.

That is not UI decoration. It's intent accuracy.

### The Hard Part Starts After Intent

Intent recognition is only the first gate. Then comes abstraction design.

Differences between people are concrete:

- Bilingual users need language refinement but don't want their tone flattened
- Creative users don't want to spend energy on wording; they care about high-fidelity content
- Some people want the system to remember old jokes and expressions so they don't repeat themselves

For me, democratizing convenience is not adding more buttons. It's building an abstraction layer people can assemble in their own way.

### After It Worked, I Had to Relearn How to Explain It

I tuned this system for many rounds and finally got it working.

But I also know most people don't need internal complexity.

My job is to explain the value clearly while keeping room for participation.

The metaphor I trust now is still Lego:

not forcing people into a fixed menu, but handing them blocks they can shape.

1. People can bring their own ideas into the process
2. The tool can stay understandable, convenient, and safe for long-term use

I'm still on this path. Design is never a one-shot answer for me. It grows with real use.`,zh:`这礼拜我又被自己提醒了一次。

白天我在调流程，觉得这条链路终于完整了。晚上真正拿来写东西时，我还是被几步启动动作卡住了。

那一刻我很清楚：我不是站在使用者外面做设计。我同时戴着两顶帽子，既是构造者，也是使用者。

### 我不是在“观察使用者”，我是“来自使用者”

我戴着构造者这顶帽子时，会想 activation flow、异常分支、可扩展性。戴着使用者这顶帽子时：顺不顺、快不快、会不会打断我。

这两套感受都在我身上，所以我现在尽量少说"使用者可能会怎样"，而是直接写"我刚刚就是这样卡住的"。

### 创作最脆弱的，是开头那几分钟

拿写日记来说最直接。

我最想要的是：有感觉，马上写。

现实却常常是：先找文件、补标题、调格式、找上一次写到哪。等这些做完，热度已经下去了。

所以这段时间我一直在做同一件事：把“进入表达”放到最前，把整理、归档、连接历史内容这些重复动作放到后面自动完成。

### 站在构造者这一侧，难点不是功能，而是顺序

每个步骤单看都不难，难的是 sequencing。

顺序一旦错，体验就会碎。

我现在反复打磨的就是这三步：

1. activation flow 第一步放在哪里，既准确又不打扰
2. thought process 怎么接，才不会半路掉线
3. 不同 skill 和 process stage 怎么衔接，减少误判和回退

### 我想做的交互，不是“找入口”，而是“被理解”

过去的操作更像换频道：先找入口，再找内容。

我更想要的是像 Information Feed：先理解，再送达。

这不是 UI 花样，而是 intent 判断是否够准。

### 真正的难题，在 intent 之后

意图判断只是开始。后面是抽象层设计。

同样是写作需求，不同人的差异非常具体：

- 双语使用者要 language refinement，但不想语气被抹平
- 创意使用者不想把精力花在措辞上，更在意内容 high fidelity
- 也有人希望系统记住过去的表达和 joke，不用每次重讲

所以对我来说，把便利 democratize 出去，不是加更多按钮，而是给出可以自由拼装的抽象层。

### 做完之后，我还在学怎么说人话

这套东西我调了很多轮，最后终于做出来了。

但我也知道，内部再复杂，别人并不需要看全部细节。

我要做的是把价值说清楚，同时把参与感留给使用的人。

我现在最喜欢的比喻还是乐高：

不是把人塞进固定菜单里，而是把积木递到他手上。

1. 你可以把自己的想法拼进来
2. 工具既懂你，也足够稳定、方便、安全，能长期一起工作

这段路我还在走。对我来说，设计从来不是一次性答案，而是和真实使用一起长出来的东西。`,ja:`今週、また自分に言い聞かされる場面がありました。

昼はフローを調整して「これでつながった」と思ったのに、夜に実際の書き作業で使うと、開始の数ステップでまだ詰まる。

その瞬間にはっきりしました。私は使い手の外側に立って設計しているのではない。作り手であり、使い手でもある、同じ一人です。

### 私は「使い手を理解する人」ではなく「使い手の側の人」

作り手の帽子をかぶると、activation flow、異常分岐、拡張性を考えます。使い手の帽子をかぶると：滑らかか、速いか、途中で邪魔されないか。

この二つの感覚が同時に自分の中にあるので、最近は「使い手はこう感じるはず」とは書かず、「今ここで自分が詰まった」と書くようにしています。

### 創作で一番弱いのは最初の数分

日記は分かりやすいです。

理想は「感じる -> すぐ書く」。

でも現実は、ファイルを探し、タイトルを補い、体裁を整え、前回の続き場所を探す。そこまでで熱が落ちます。

だから最近ずっと同じことをしています。表現に入る動作を最前に置き、整理・アーカイブ・過去文脈接続は後段で自動化する。

### 作り手の視点で難しいのは機能より順序

各ステップ単体は難しくありません。難しいのは sequencing です。

順序を間違えると、体験はすぐ割れます。

今、繰り返し磨いているのは次の3点です。

1. activation flow の第一歩をどこに置けば正確で邪魔しないか
2. thought process をどう接続すれば途中で途切れないか
3. skill と process stage をどうつなげれば誤判定と巻き戻しを減らせるか

### 私が作りたいのは「入口探し」ではなく「先に理解される体験」

従来操作はチャンネル切替に近い。入口を探してから内容を探す。

私が目指すのは Information Feed に近い。先に理解し、次に届ける。

これは UI の装飾ではなく、intent 判定の精度の話です。

### 本当の難題は intent の後

意図判定は入口にすぎません。その後は抽象レイヤー設計です。

同じ「書く」でも差は具体的です。

- バイリンガルな使い手は language refinement が必要でも語感は潰したくない
- クリエイティブな使い手は言い回しより content high fidelity を重視する
- 過去の表現や joke を覚えていて、毎回説明し直さなくて済むことを望む人もいる

だから私にとって、便利さを民主化することはボタンを増やすことではありません。自分のやり方を持ち込める抽象レイヤーを作ることです。

### 動いてから、伝え方を学び直す

この仕組みは何度も調整して、ようやく動くところまで来ました。

でも内部がどれだけ複雑でも、使い手がその全部を見たいわけではない。

必要なのは、価値を明確に伝えつつ、参加の余地を残すことです。

最近いちばんしっくりくる比喩は、やはりレゴです。

固定メニューに押し込むのではなく、手元にブロックを渡す。

1. 自分の発想をそのまま差し込める
2. ツールが理解しつつ、長期で使える安定性・手軽さ・安全性を持つ

この道はまだ続いています。私にとって設計は一度きりの答えではなく、実使用と一緒に育つものです。`}},{id:10,category:"Product",title:{en:"Onboarding That Feels Natural",zh:"更自然的 Onboarding",ja:"自然に始まるオンボーディング"},summary:{en:"I wanted first launch to feel like meeting a friend: calm, clear, and easy to continue.",zh:"我希望第一次打开应用像认识新朋友：节奏温和、信息清楚、可以自然继续。",ja:"初回起動は、友だちに会うように始まってほしい。落ち着いて、分かりやすく、続けやすく。"},content:{en:`Whenever I open a new app and get hit with three permission dialogs in a row, I almost always close them out of reflex.

I've done this more than once. Then later I try to use a feature, hit "Please enable microphone access in Settings," and feel that mix of regret and annoyance. I end up repairing a decision I made before I had context.

So while building Reso, I set one constraint for onboarding: the first meeting should feel calm, not pressuring.

**The issue is usually not willingness. It's this:**
1. They don't know *why* you need it
2. Three popups in rapid succession create pressure, not trust

### Building for Friends

When I first built the Reso prototype, I didn't think much about onboarding. I knew what everything did. But when I started sharing it with friends, something clicked.

When you're building something for people you care about, you want it to feel *mild*. Not intrusive. Not demanding.

It's like meeting a friend for the first time. You don't walk up and immediately ask: "What's your phone number? Where do you live? What do you do for work?" Nobody likes that.

### Our Design Principles

We landed on two guiding ideas:

1. **Minimize discomfort**: Slow down. Don't bombard. Let people breathe.
2. **Don't let them miss out**: While reducing friction, make sure critical information doesn't get lost.

This balance came partly from improv classes I've been taking—the idea of reading the room, matching energy, not forcing a scene.

### What We Actually Built

Reso needs microphone access and ~2GB of ML models to work properly. That's a lot to ask upfront.

So we don't ask upfront.

- **One permission, when it matters**: We only request microphone access when you actually try to record. By then, the context is obvious.
- **Background everything else**: Models download quietly while you explore. No progress bars blocking your way. Just a subtle indicator if you want to check.
- **Graceful degradation**: If models aren't ready, the app still works—just slower. You see exactly what's happening ("0.3x speed - optimizing...") and can keep going.

### The Polish That Matters

Getting here took iteration. Friends would download debug builds, get confused about which version to keep, run into edge cases. We spent more time on onboarding than I expected—testing what felt right, what felt pushy, what felt broken.

The goal was always: **open the box, and it just works**. Elegant. Minimal. Like a work partner who's there when you need them and invisible when you don't.

The best onboarding doesn't feel like onboarding at all. It feels like the app already knows you.`,zh:`每次我打开一个新 App，如果一上来就连弹三个权限窗，我几乎都会下意识先关掉。

我自己这样做过很多次。后来真要用功能时，才看到“请在设置中开启麦克风权限”，然后开始后悔和烦躁：前面在没上下文时做的决定，最后还是得自己补救。

所以做 Reso onboarding 时，我先给自己定了一条约束：第一次见面要温和，不能给人压迫感。

**问题通常不在于使用者不愿授权，而在于：**
1. 他们不知道你*为什么*要这个权限
2. 连续弹窗制造的是压力，不是信任

### 为朋友而设计

我最初做 Reso 原型时，其实没太在意 onboarding。毕竟每个功能我都知道是干嘛的。但当我开始把它分享给朋友时，我突然想明白了一件事。

当你在为在乎的人做产品时，你会希望它是*温和*的。不打扰，不强迫。

这就像第一次认识朋友。你不会一上来就问：“你手机号多少？住哪？做什么工作？”没人喜欢这种开场。

### 我们的设计原则

最后我们定了两个原则：

1. **尽量降低不适感**：慢一点，不轰炸，让使用者有呼吸空间。
2. **又不能让他们错过关键能力**：降低摩擦的同时，关键信息不能丢。

这种平衡也受到我上即兴课的影响：观察现场气氛、对齐能量，而不是硬推剧情。

### 我们实际做了什么

Reso 要正常工作，确实需要麦克风权限和大约 2GB 的 ML 模型。这个前置要求不小。

所以我们不在一开始就要。

- **权限在关键时刻再申请**：只有当你真的开始录音时才请求麦克风权限，那时上下文很明确。
- **其他事情都后台进行**：你探索应用时模型静默下载，不用进度条挡路；想看再看。
- **优雅降级**：模型还没准备好也能用，只是速度慢一些。界面会明确告诉你发生了什么（"0.3x speed - optimizing..."），你可以继续。

### 真正重要的打磨

这一路靠的是反复迭代。朋友们下载 debug 版、搞混该留哪个版本、踩到边界情况。我们花在 onboarding 上的时间比我预期长很多，一直在测试什么体验是自然的，什么会让人有压力，什么会让人觉得坏掉了。

我们的目标始终是：**打开盒子，它就能工作**。优雅、克制，像一个在你需要时就出现、不需要时就安静待命的工作伙伴。

最好的 onboarding，最终不该让人觉得“我正在 onboarding”。而是觉得这个应用已经懂你了。`,ja:`新しいアプリを開いて、起動直後に権限ダイアログが3連続で出ると、私は反射で閉じてしまいます。

私自身それを何度もやりました。あとで機能を使おうとして「設定でマイクを許可してください」と出ると、後悔と苛立ちが同時に来る。文脈がないまま決めたことを、後で自分で直すことになるからです。

だから Reso のオンボーディングでは、最初に一つ決めました。初回体験をプレッシャーにしないこと。

**問題は「使い手が許可したくない」ことではなく、だいたい次の2点です。**
1. なぜ必要なのかが分からない
2. 連続ポップアップは信頼ではなく圧力を生む

### 友だちのために作る

Reso の最初のプロトタイプを作ったとき、オンボーディングはあまり気にしていませんでした。自分は全部分かっていたからです。けれど友だちに配り始めたとき、感覚が変わりました。

大切な人のために作るなら、体験は*やわらかく*あるべきだと思ったんです。押しつけない。要求しすぎない。

初対面でいきなり「電話番号は？ どこに住んでる？ 仕事は？」と聞かないのと同じです。そんな始まり方は誰も好きじゃない。

### 設計原則

最終的に、指針は2つに絞りました。

1. **不快感を最小化する**: 急がせない。畳みかけない。呼吸できる余白を残す。
2. **大事な機能は取りこぼさない**: 摩擦は減らしつつ、重要情報は確実に伝える。

このバランスには、私が通っている即興クラスの影響もあります。場の空気を読む、エネルギーを合わせる、無理に場面を押し切らない。

### 実装したこと

Reso は正常に動くために、マイク権限と約2GBの ML モデルが必要です。最初に求めるには重い。

だから、最初には求めません。

- **必要な瞬間に1つだけ**: マイク権限は、実際に録音しようとしたタイミングでだけ要求。文脈が明確です。
- **それ以外はバックグラウンド**: 触っている間にモデルを静かにダウンロード。進捗バーで操作を止めない。確認したい人向けに控えめな表示だけ。
- **Graceful degradation**: モデル準備前でもアプリは動く。少し遅いだけ。今何が起きているか（"0.3x speed - optimizing..."）を表示し、作業は続けられます。

### 仕上げで効く部分

ここまで来るには反復が必要でした。友だちが debug ビルドを入れ、残すバージョンで迷い、エッジケースに当たる。オンボーディングに想像以上の時間を使い、「心地よい」「押しつけがましい」「壊れて見える」の境界を検証し続けました。

目標はずっと同じです。**箱を開けたら、もう動いている**。エレガントでミニマル。必要なときは居て、不要なときは見えない仕事相手のように。

最高のオンボーディングは、オンボーディングに見えません。アプリが最初からあなたを分かっているように感じられることです。`}},{id:9,category:"Design",title:{en:"The UI You Never Think About",zh:"你不会注意到的 UI",ja:"意識されない UI"},summary:{en:"Cutting most of my UI made me admit a hard truth: the control panel I enjoy building is often not what I enjoy using.",zh:"砍掉大部分 UI 之后，我才承认一件事：我爱做的控制面板，往往不是我爱用的体验。",ja:"UI を大きく削って、ようやく認めた。作る側として好きな操作盤は、使う側として心地よい体験と一致しないことが多い。"},content:{en:`Honestly, my early beta looked like a DJ console. Knobs everywhere. Toggles for every route, every model variation, every debug parameter. It made sense at that stage because I needed to test hundreds of permutations.

But when I started using it every day, even I felt interrupted by all those controls.

### The Real Goal

Everything I was doing—all those model routes, delay settings, polish options—had one purpose: to give you **the version you like best**. You shouldn't have to tune anything. You shouldn't even know those permutations exist.

When you see the output and think, "Yes, that's exactly what I meant"—that's the goal. That's the only goal.

Once I realized that, my design principle became simple: **If I can hide it, hide it. If I can encapsulate it, don't interrupt the person using it.**

### The Builder and User Gap

I kept running into a cognitive gap between builder mode and user mode:

**Builder instinct**: Hand over a full remote control. Every option, every setting. Maximum flexibility.

**User reality**: The better experience is when what matters simply *appears* in your feed. No channel switching, no hunting.

This made me rethink a lot. The version you see now? I've cut *so much*. Features I was proud of at one point—gone.

### The Test That Matters

I started asking myself two questions, but not right away. I'd wait a few days. Let the excitement fade. Then:

1. **Does it make sense?**
2. **Would I actually use it myself?**

When the answers changed—and they often did—I cut without hesitation.

Here's the thing: when you're deep in building, everything feels reasonable. But building and using are different perspectives, and switching hats is hard. You can't debug implementation one moment and immediately become a neutral user the next.

So I gave myself buffer time. That's partly why our development cycle was longer than expected. The prototype existed early. Friends were testing it. But we kept polishing, kept asking: *Is this actually useful? Would I use this myself?*

### Eating Your Own Cooking

During development, I used Reso as scaffolding for my own work. And if something felt awkward to me—even as the person who built it—that was a red flag.

Why would I give someone else something I don't want to use myself? It's like giving advice you don't believe in. If someone asks, "Do you actually believe this?" and you say no—everything after that is just noise.

When you finish building something, you have to ask: **Do I believe in it?**

If you do, you'll communicate it with conviction. If deep down something feels off—you know. You just know.

### UI as Expression

This struggle—between what's technically possible and what's actually human—showed up constantly when we built features like Skills and Tones. We kept asking: Are we just impressing ourselves, or does someone actually need this?

But here's the beautiful part: UI is a form of expression. I'm grateful for great art in the world, and I think UI is a window for developers to express what they believe beauty looks like.

There's no "correct" UI. Only what fits. What feels right. What gives people comfort.

And that standard will keep evolving. I'm looking forward to more inspiration, more feedback, more iteration. Because the UI you never think about? That's the one that took the most thought.`,zh:`说实话，我早期的 beta 看起来像 DJ 控台。到处都是旋钮。每条 route、每种模型变体、每个 debug 参数都有开关。那时候这很合理，因为我需要测试几百种组合才能找到可行方案。

但当我开始每天自己用它时，连我都会被这些开关打断。

### 真正的目标

我做的所有事——model route、延迟设置、打磨选项——只有一个目的：给使用者 **最顺手的那个版本**。不该让人手动调参，甚至不需要让人知道这些排列组合存在。

当你看到输出时心里想“对，就是我要的那个意思”，这才是目标，也是唯一目标。

意识到这点后，我的设计原则变得很简单：**能藏就藏，能封装就别打扰使用者。**

### 构造者和使用者的认知落差

我不断撞上的，是“构造者模式”和“使用者模式”之间的认知差。

**构造者本能**：给出完整遥控器。所有选项、所有设置，灵活性拉满。

**使用者现实**：更顺的体验是内容直接*出现在* feed 里，不需要先换频道再搜索。

这让我重想了很多东西。你现在看到的版本？我删了*非常多*。很多我曾经很骄傲的功能，后来都砍掉了。

### 真正有效的测试

我开始问自己两个问题，但不会立刻问。我会先等几天，让兴奋感过去，然后再看：

1. **它讲得通吗？**
2. **我自己真的会长期用吗？**

当答案变化时——而且经常变化——我会毫不犹豫地删除。

关键在于：你沉浸在构建状态时，几乎一切都看起来合理。但“做一个东西”和“用一个东西”是完全不同的视角，很难同时扮演两种人。你不可能上一秒还在 debug，下一秒就真诚地当一个不关心实现细节的使用者。

所以我给自己留了缓冲时间。这也是为什么我们的开发周期比预期长。原型很早就有了，朋友也在测试，但我们一直在打磨、一直在问：*它真的有用吗？我自己会长期用吗？*

### 吃自己做的菜

开发期间，我把 Reso 当作自己工作的脚手架来用。只要连我这个作者都觉得哪里别扭，那就是红旗。

我为什么要把我自己都不想用的东西给别人？这就像给出你自己都不相信的建议。别人问你“你真的信这个吗？”，你说不信，那后面说再多都只是噪音。

你做完一个产品后，必须问一句：**我真的相信它吗？**

如果你相信，你会带着笃定去表达它；如果心里其实别扭，你自己知道。

### UI 也是表达

这种在“技术上可行”和“人性上自然”之间的拉扯，在我们做 Skills、Tones 这类功能时反复出现。我们一直在问：我们是在取悦自己，还是使用者真的需要它？

但好的一面是，UI 本身就是一种表达。我非常感激这个世界上的好作品，我也觉得 UI 是开发者表达“自己认为什么是美”的窗口。

UI 没有唯一“正确答案”。只有适不适合、顺不顺手、能不能给使用者安全感。

而这个标准会持续变化。我期待更多灵感、反馈和迭代。因为那个你几乎注意不到的 UI，往往才是被反复思考最多的 UI。`,ja:`正直に言うと、初期ベータの UI は DJ コンソールみたいでした。ノブだらけ。route ごと、モデル差分ごと、debug パラメータごとにトグルがある。あの段階では合理的でした。何百通りも試して、動く組み合わせを見つける必要があったからです。

でも毎日自分で使い始めると、作った本人の私ですら操作に割り込まれる感覚がありました。

### 本当のゴール

私がやっていたこと全部、つまり model route、遅延調整、仕上げオプションは、目的が一つでした。**使い手にとって一番しっくりくる版を届けること**。使い手に調整を強いるべきではないし、その組み合わせの存在すら意識させない方がいい。

出力を見て「そう、それが言いたかった」と思える。それだけがゴールです。

そこに気づいてから設計原則はシンプルになりました。**隠せるなら隠す。包めるなら包む。使い手を煩わせない。**

### 作り手と使い手のギャップ

何度もぶつかったのは、作り手モードと使い手モードの認知ギャップでした。

**作り手の本能**: すべての設定を渡す。完全なリモコンを渡す。柔軟性を最大化する。

**使い手の現実**: 気持ちいい体験は、必要なものが feed に自然に*現れる*こと。入口を何段も辿って探す体験ではない。

この差に気づいて、たくさん削りました。今の版は、本当に多くを捨てています。かつて誇っていた機能も消えました。

### 効くテスト

自分に2つの問いを投げるようにしました。ただし直後ではなく、数日置いて熱が冷めてからです。

1. **筋が通っているか？**
2. **実際に使うか？**

答えが変わったら、迷わず削る。

作っている最中は何でも正しく見えます。でも「作る視点」と「使う視点」はまったく別物で、同時に両立するのは難しい。さっきまで debug していた人間が、次の瞬間に実装を気にしない素の使い手になるのは無理があります。

だから意図的にバッファ時間を取りました。開発サイクルが想定より長くなった理由の一つです。プロトタイプ自体は早くできていたし、友人テストも進んでいた。でも磨き続けて、問い続けた。*本当に役立つか？ 自分で使い続けたいか？*

### 自分で食べる

開発中、Reso は自分の仕事の足場として使っていました。作者の自分ですら使いにくいと感じる箇所は、全部赤信号でした。

自分が使いたくないものを、なぜ他人に渡すのか。信じていない助言をするのと同じです。「本当に信じてる？」に「いいえ」と答えるなら、その先はノイズになります。

何かを作り終えたとき、最後に聞くべきはこれです。**自分はそれを信じているか？**

信じていれば言葉に熱が宿る。違和感があれば、必ず分かる。

### UI は表現でもある

技術的に可能なことと、人間にとって自然なことの間のせめぎ合いは、Skills や Tones の機能開発でも常に出てきました。これは自己満足か、それとも本当に必要か。

でも美しい点もあります。UI は表現の一形態です。世界の優れたアートに学びつつ、UI は開発者が「自分にとっての美」を表明できる窓だと思っています。

「正しい UI」はありません。あるのは、合っているか、しっくりくるか、安心できるか。

その基準はこれからも変わり続ける。だからこそ、もっとインスピレーションとフィードバックと反復が楽しみです。あなたが意識しない UI ほど、実は最も考え抜かれているのです。`}},{id:8,category:"Building",title:{en:"Making Ideas Visible: The Knowledge Graph",zh:"让想法可见：Knowledge Graph",ja:"アイデアを可視化する: Knowledge Graph"},summary:{en:"I brought data-science pattern discovery into daily workflow to build a second pair of eyes for my own thinking.",zh:"我把数据分析里的模式发现带进日常 workflow，只想做一双能看见自己思路的“第二双眼睛”。",ja:"データ分析のパターン発見を日常 workflow に持ち込み、自分の思考を見るための「もう一組の目」を作りたかった。"},content:{en:`I come from a science background. In industry, I spent years processing massive datasets—machine learning, clustering algorithms, high-dimensional visualization.

What stayed with me was a frustration: these methods are powerful, but in daily life they rarely help ordinary people see their own patterns.

The techniques already exist. The compute is already here. What was missing for me was the bridge from technical capability to humane experience.

That's the bridge I wanted to build.

### Another Pair of Eyes

Here's something I believe deeply: **You can't lift yourself up by pulling your own hair.**

The reason you are who you are today is partly because you don't see your own patterns. Your habits, your blind spots, your recurring themes—they're invisible to you precisely because you're living inside them.

But when data shows you those patterns? When you can *see* that you've mentioned guitar every few weeks for the past year? Suddenly you realize: *Oh, I actually do care about music. Maybe I should do something about that.*

Once you see through your own patterns—even your limitations—you naturally stop repeating them. That's growth. That's why you need another pair of eyes.

### The Intelligent Steward

At its simplest, this is just a secretary. It organizes your meeting notes. But now the cost of that is nearly zero.

At its best, it's like having someone who remembers everything you've said—last week, last year. It connects the dots. It finds the threads running through your life that you didn't notice.

You don't need to manually sort things into "work notes" vs "personal reflections" vs "health journal." You just speak, and the system organizes. The best experience is when collection happens automatically.

### The Art of Surfacing Without Exposing

There's a balance here that matters: **How do you surface insights from data without trading off privacy?**

This is an art. What tech stack achieves the goal without overkill? How do you make the machine work for people without making them vulnerable?

In my previous work with large-scale data, we used intuitive visualizations—parallel plots, radvis plots, clustering in high-dimensional space. These techniques are genuinely interesting. And now, with modern embedding technology and powerful local chips, we can run these algorithms *natively on your Mac*, optimized specifically for discovery.

No cloud required. Your thoughts stay yours.

### What We're Really Building

Think about how humans interact. When you talk with a close friend, you reference things you mentioned days ago. They build on it. That *continuity*—that *reference*—is what makes conversation feel like flow.

With machines, that continuity is usually missing. And that friction is exactly why talking to software feels exhausting.

We're trying to translate human-to-human flow into human-to-software flow. The Discovery feature is one piece of that:

1. **Pattern Discovery**: Like a bystander watching your conversations, finding commonalities, surfacing insights you wouldn't have found alone.

2. **Auto-organize**: You don't categorize. The system collects and structures based on what you've defined matters to you.

3. **Clustering**: Finding the hidden links between ideas. Helping you discover:
   - The unspoken clues
   - The unspoken words

### The Goal

I still don't know how far this can go. But I know the moment I care about.

When I look at the graph and think, "I didn't realize I'd been circling this idea for so long," that's the point.

Not just organizing notes. Helping people see themselves.`,zh:`我本来是科学背景出身。进入行业后，我花了很多年处理大规模数据：machine learning、clustering algorithm、高维可视化。

但我一直有个遗憾：这些方法很强，却很少真正帮普通人在日常里看见自己的模式。

技术有了，算力也有了。真正缺的是桥梁：把冷冰冰的技术转成温暖、有人味、可用的界面。

这就是我想做的事。

### 另一双眼睛

有句话我很相信：**你不可能拽着自己的头发把自己提起来。**

你之所以成为今天的你，一部分原因是你看不见自己的模式。习惯、盲点、反复出现的主题，正因为你身处其中，所以最难察觉。

但当数据把这些模式摆在你面前呢？当你*看见*自己过去一年里每隔几周就会提到吉他，你会突然意识到：*原来我真的在意音乐，也许我该认真做点什么。*

当你看见自己的模式，甚至看见自己的限制，你就会自然减少重复。这就是成长，也就是为什么你需要“另一双眼睛”。

### 智能管家

最基础时，它像秘书：整理会议记录。而现在，这件事的成本几乎为零。

最好时，它像一个记得你说过一切的人——上周、去年、很久之前。它帮你连点成线，找到你没注意到的长期线索。

你不需要手动分“工作笔记”“个人反思”“健康日记”。你只要说，系统就会组织。最理想的体验是：采集自动发生。

### 在不暴露的前提下浮现洞察

这里有一个关键平衡：**如何从数据里提炼洞察，同时不牺牲隐私？**

这其实是一门艺术。什么技术栈够用但不过度？如何让机器为人服务，而不是让使用者暴露在风险里？

我之前做大规模数据时，会用很多直观可视化：parallel plots、radvis plots、高维聚类。这些方法非常有趣。现在借助现代 embedding 技术和本地强芯片，我们已经可以把这些算法*原生跑在你的 Mac 上*，并且专门针对 discovery 做优化。

不需要云端。你的想法属于你自己。

### 我们真正在做什么

想想人和人怎么交流。你和亲近的人聊天时，会接着几天前的话继续说。那种*连续性*、那种*相互引用*，才让对话有“流动感”。

而机器往往缺少这种连续性，所以和软件对话才会让人疲惫。

我们想把人和人的 flow，翻译成人和软件的 flow。Discovery 功能是其中一块：

1. **Pattern Discovery**：像一个在旁观察你对话的人，找共性、给洞察，帮你看到自己独自看不到的东西。

2. **Auto-organize**：你不需要手工分类。系统会按你定义的重要性去收集并结构化。

3. **Clustering**：找到想法之间的隐藏连接，帮助你发现：
   - 没说出口的线索
   - 没说出口的词

### 目标

我还不知道这件事最终能走多远，但我很确定自己在追一个瞬间。

当我看着图谱说出“原来我一直在绕着这个问题想”，那一刻就是目标。

不只是整理笔记，而是帮人看见自己。`,ja:`私はもともとサイエンスの出身です。業界では長年、大規模データを扱ってきました。machine learning、clustering algorithm、高次元可視化。

でもずっと残っていた違和感があります。強力な手法なのに、日常では自分の思考パターンを見る助けになりにくいことです。

技術も計算資源もある。足りないのは橋です。技術的で冷たいものを、人間的であたたかい体験に変える橋。

それを作りたかった。

### もう一組の目

私が強く信じていることがあります。**自分の髪を引っ張って自分を持ち上げることはできない。**

今の自分が今の自分である理由の一つは、自分のパターンを自分で見えないことです。習慣、盲点、繰り返すテーマは、その中で生きているからこそ見えにくい。

でもデータがそれを見せてくれたら？ 1年間、数週間ごとにギターに触れていると*見える*ようになったら？ 突然こう思える。「あ、自分は本当に音楽を大事にしている。何か始めるべきかもしれない。」

自分のパターン、さらには限界まで見えると、自然に反復をやめられる。それが成長で、だからこそもう一組の目が必要です。

### インテリジェントな steward

最小構成なら秘書のようなものです。会議メモを整理する。ただ今は、そのコストがほぼゼロになりました。

最良の形では、あなたが話したことを全部覚えている相手のように働きます。先週も去年も。点と点をつなぎ、気づかなかった糸を見つける。

「仕事メモ」「個人の内省」「健康日誌」を手で分ける必要はありません。話せばシステムが整理する。収集が自動で起きる状態が、最も良い体験です。

### 露出せずに浮かび上がらせる技術

ここで重要なのはバランスです。**プライバシーを損なわずに、どうやって洞察を浮かび上がらせるか。**

これはアートです。やりすぎず目的を達成できる tech stack は何か。マシンを味方にしつつ、使い手を脆弱にしないにはどうするか。

以前の大規模データの仕事では、parallel plots、radvis plots、高次元空間でのクラスタリングなど、直感的な可視化を使っていました。これらは本当に面白い。今は embedding 技術とローカルチップの進化で、これらを *Mac 上でネイティブ実行* し、discovery 向けに最適化できます。

クラウドは不要。思考はあなたのもののままです。

### 私たちが本当に作っているもの

人と人の会話を思い出してください。親しい相手とは、数日前の話を参照しながら会話が続く。あの*連続性*、あの*参照*が、会話に flow を生みます。

機械との対話には、その連続性が欠けがちです。だからソフトと話すのは疲れる。

私たちは人間同士の flow を、人間とソフトの flow に翻訳しようとしています。Discovery はその一部です。

1. **Pattern Discovery**: 会話を横で見ている観察者のように共通点を見つけ、一人では辿り着けない洞察を出す。

2. **Auto-organize**: あなたが分類しない。重要だと定義した軸に沿って、システムが収集・構造化する。

3. **Clustering**: アイデア間の隠れたつながりを見つけ、次を発見しやすくする。
   - まだ言語化されていない手がかり
   - まだ言葉になっていない語

### ゴール

これがどこまで育つかはまだ分かりません。でも私が狙っている瞬間は明確です。

グラフを見て「自分はこんなに長くこれを考えていたのか」と気づく、その瞬間です。

メモ整理だけではなく、自分を見えるようにすること。`}},{id:7,category:"Building",title:{en:"Teaching an App to Find Patterns",zh:"教应用学会发现模式",ja:"アプリにパターン発見を教える"},summary:{en:"I built semantic clustering for a problem I also had: the more voice notes you save, the harder they are to revisit.",zh:"我做 semantic clustering，是因为这个问题我自己也有：语音笔记越多，越难回看。",ja:"semantic clustering を作ったのは、私自身の課題でもあったからです。音声メモは増えるほど振り返りづらくなる。"},content:{en:`An early Reso user once told me: "I have 200 voice notes and I can't remember what half of them are about."

I related immediately, because my own archive felt the same. Capture-focused tools make recording *easy*, then leave you drowning in data.

I wanted Reso to help me and other users **discover patterns** over time—without manual tags or folder maintenance.

### The Core Idea

Every transcription gets converted into a semantic representation (an embedding). Notes with similar embeddings are related.

If enough related notes accumulate, they surface as a "theme" with an auto-generated name.

**Example**: You record five different thoughts about "API design" over two weeks. Reso groups them automatically and labels the theme "API Design Patterns."

### The Clustering Challenge

The algorithm itself is straightforward. But tuning it felt impossible:

- **Too aggressive**: Everything becomes one giant theme ("Work Stuff")
- **Too conservative**: Every note is its own theme (useless)

I spent days tweaking similarity thresholds before realizing: **There's no perfect threshold**.

What worked: **Adaptive clustering**.

Instead of a fixed threshold, we look at the distribution of similarity scores. If there's a natural gap (e.g., scores are either >0.75 or <0.3), we use that gap as the cutoff.

This means the "right" threshold emerges from the data, not from my arbitrary tuning.

### Naming Themes

This was surprisingly hard. How do you generate a theme name from note contents?

I tried:
1. **LLM summaries**: Accurate but slow and expensive
2. **Keyword extraction**: Fast but generic ("Project Update #47")
3. **First note title**: Simple but often misleading

What I settled on: **Hybrid approach**.

We extract frequent keywords, then use a lightweight LLM call to combine them into a coherent phrase. Cost: ~$0.001 per theme. Fast enough to run on-demand.

### What I Learned

The best AI features don't feel like AI. They feel like the app is just... paying attention.

When a theme surfaces, people don't think "wow, cool clustering algorithm." They think "huh, I *have* been thinking about that a lot."

That's the magic—making the invisible visible.`,zh:`Reso 的一位早期使用者跟我说过一句话：“我有 200 条语音笔记，但一半都想不起在讲什么。”

我听完只觉得太熟了，因为我自己的语音库也有同样的问题。capture 型工具让记录很*容易*，然后你很快会被数据淹没。

我希望 Reso 能帮我和其他使用者在时间线上**发现思维模式**，而不要求手动打标签或整理文件夹。

### 核心思路

每条转写文本都会转成语义表示（embedding）。embedding 相近的笔记，语义上就相关。

当相关笔记积累到一定数量，它们会自动浮现为一个“主题”，并附带自动生成的名字。

**例子**：两周内我录了五条关于“API design”的想法。Reso 会自动把它们归为一组，并标注成 “API Design Patterns”。

### 聚类难点

算法本身并不复杂，难的是调参：

- **太激进**：所有东西都被并成一个大主题（“工作杂项”）
- **太保守**：每条笔记都是单独主题（几乎没用）

我花了好几天调相似度阈值，后来才意识到：**不存在完美阈值**。

真正有效的是：**Adaptive clustering**。

不用固定阈值，而是看相似度分布本身。如果数据里存在自然断层（比如分数要么 >0.75，要么 <0.3），就拿这个断层当切分点。

这样“正确阈值”来自这批数据本身，而不是来自我的主观拍脑袋。

### 主题命名

这部分意外地难。如何从多条笔记内容里生成一个靠谱主题名？

我试过：
1. **LLM summaries**：准，但慢且贵
2. **关键词提取**：快，但很泛（“Project Update #47”）
3. **第一条笔记标题**：简单，但常常误导

最后我用了：**Hybrid approach**。

先提取高频关键词，再用轻量 LLM 调用把它们合成为可读短语。成本大约每个主题 ~$0.001，足够快，可以按需触发。

### 我学到的

最好的 AI 功能，不会让你觉得“这很 AI”。它更像应用在静静地留意你。

当主题浮现时，使用者不会想“哇，聚类算法真酷”。他们会想：“原来我最近真的一直在想这个。”

这就是魔法：把看不见的东西变得可见。`,ja:`Reso の初期使い手の一人がこう言いました。「音声メモが 200 件あるのに、半分は何の話か思い出せない。」

それを聞いて、私自身のアーカイブも同じだとすぐに分かりました。capture 重視ツールは記録を*簡単*にする一方で、その後にデータへ埋もれやすくなります。

私は Reso に、手動タグ付けやフォルダ整理なしで、時間を通じて**思考のパターン**を見つける役割を持たせたかった。

### コアアイデア

各転写は semantic representation（embedding）に変換されます。embedding が近いノート同士は関連が高い。

関連ノートが十分にたまると、自動生成名つきの「テーマ」として浮かび上がります。

**例**: 2週間で「API design」について5つ録音したとします。Reso は自動でまとめて「API Design Patterns」というテーマ名を付けます。

### クラスタリングの難しさ

アルゴリズム自体は単純です。ただチューニングが厄介でした。

- **攻めすぎ**: 何でも1つの巨大テーマになる（「仕事全般」）
- **守りすぎ**: 1メモ1テーマになる（実用性がない）

類似度しきい値を何日も調整して、やっと分かりました。**完璧なしきい値は存在しない**。

効いたのは **Adaptive clustering** です。

固定値ではなく、類似度スコアの分布を見る。自然なギャップ（例: >0.75 と <0.3 に分かれる）があれば、その境界をカットオフに使う。

つまり「正しい」しきい値は、私の主観ではなく、データ側から現れます。

### テーマ名の生成

ここは意外に難題でした。複数ノートからどうテーマ名を作るか。

試したのは以下です。
1. **LLM summaries**: 精度は高いが遅くて高い
2. **Keyword extraction**: 速いが汎用的すぎる（"Project Update #47"）
3. **First note title**: 単純だが誤誘導しやすい

最終的に選んだのは **Hybrid approach**。

頻出キーワードを抽出し、軽量な LLM 呼び出しで自然なフレーズにまとめる。コストはテーマあたり約 ~$0.001。オンデマンド実行に十分な速さです。

### 学んだこと

良い AI 機能は、AI っぽく見えません。アプリがただ…注意深く見ていてくれる感覚になります。

テーマが出たとき、使い手は「すごいクラスタリングだ」とは思わない。「あ、確かに最近こればかり考えてた」と思う。

見えなかったものを見えるようにする。それが魔法です。`}},{id:6,category:"Infrastructure",title:{en:"When One API Isn't Enough",zh:"当一个 API 不够用时",ja:"1つの API では足りないとき"},summary:{en:"I built multi-provider routing not only for fallback, but because I needed a playground to try new models anytime.",zh:"我做 multi-provider routing，不只是为了兜底，更因为我自己需要一个随时试新模型的 playground。",ja:"multi-provider routing は冗長化のためだけではない。私自身が、いつでも新モデルを試せる playground を必要としていた。"},content:{en:`I try every new model the moment it drops. New Claude version? I want to feel the difference. GPT update? Let me compare. It's not just benchmarks—I genuinely enjoy experiencing how different models *think*.

So when I built Reso's LLM integration, I knew one API slot wouldn't be enough. Not for me, anyway.

### The Practical Side

Sure, there's a reliability argument. Rate limits happen. Outages happen. Having multiple providers configured means if one hits a wall, another picks up seamlessly.

But honestly? That's not why I built it.

I built it because I wanted **flexibility**:

- Sometimes I want to use my company's API key for work stuff
- Sometimes I want to use my personal key for private thoughts
- Sometimes I just want to rotate between providers because one hit its limit
- Sometimes I want to compare how different models handle the same input

The point is: **switching should be effortless**. No reconfiguring. No digging through settings. Just... works.

### Making It Fun

I wanted routing to feel intuitive—almost like a playground.

You can set up multiple API keys from different providers. Reso handles the rest. If you want to manually pick one for a specific task, you can. If you want it to auto-rotate, it will. If one provider is rate-limited, it quietly moves to the next.

The experience should feel like you have options, not obligations.

### Why This Matters

Most apps lock you into one provider. One API key. One way of doing things.

But the AI landscape moves fast. What's best today might not be best tomorrow. And sometimes you just *want* to try something different—not because it's better, but because you're curious.

I think tools should support that curiosity. They should make experimentation easy, not punishing.

### The Boring Infrastructure

Behind the scenes, there's a lot of state management:
- Tracking which providers are healthy
- Handling rate limits vs. actual errors
- Avoiding retry storms
- Graceful degradation when everything's down

The core routing logic is maybe 50 lines. The error handling is 200+. That's just how infrastructure works—the boring stuff takes the most code.

But when it works, you don't notice it. You just feel like the app is responsive, flexible, and... fun.

That's the goal. Not just reliability. A playground.`,zh:`新模型一发布我就会立刻去试。Claude 出新版本？我想亲自感受差异。GPT 更新？我要对比一下。对我来说不只是 benchmark，我是真的喜欢体验不同模型*思考*方式的差别。

所以做 Reso 的 LLM 集成时，我很早就知道：一个 API 槽位肯定不够，至少对我不够。

### 现实层面的理由

当然，多提供商有稳定性价值。会有 rate limit，会有 outage。配置多个 provider，就能在某个挂掉时由另一个无缝接上。

但说实话，这不是我做它的主要动机。

我做它是为了 **flexibility**：

- 有时工作内容想用公司的 API key
- 有时私人想法想用个人 key
- 有时某家到 limit 了，我就想切去别家
- 有时我想比较不同模型对同一输入的处理方式

重点是：**切换应该零负担**。不该重新配置，不该翻设置。应该直接可用。

### 让它有趣

我希望 routing 的体验很直觉，像一个 playground。

你可以配置多个 provider 的 API key。剩下交给 Reso。想手动指定某次任务，用手动；想自动轮转，它就自动轮转；某个 provider 被限流，它会悄悄切到下一个。

体验应该是“你有选择”，而不是“你有义务”。

### 为什么这件事重要

大多数应用会把你锁在一个 provider、一个 API key、一种使用方式里。

但 AI 生态变化非常快。今天最优，不代表明天还最优。很多时候你只是*好奇*，想试试不同东西，不一定因为它更好。

我认为工具应该支持这种好奇心，让实验变得轻松，而不是惩罚性地复杂。

### 那些无聊但关键的基础设施

在后台，状态管理其实很多：
- 跟踪哪些 provider 当前健康
- 区分 rate limit 和真实错误
- 避免重试风暴
- 当所有 provider 都不可用时优雅降级

核心 routing 逻辑可能也就 50 行，错误处理却有 200+。基础设施就是这样，最无聊的部分往往代码最多。

但它一旦工作良好，你几乎感受不到。你只会觉得这个应用反应快、很灵活，而且……挺好玩。

这才是目标。不只是稳定性，而是一个 playground。`,ja:`新しいモデルが出た瞬間に試したくなります。Claude の新版本？差を体感したい。GPT の更新？比較したい。ベンチマークだけじゃなく、モデルごとの*思考の癖*を味わうのが好きなんです。

だから Reso の LLM 連携を作るとき、API スロット1つでは足りないと最初から分かっていました。少なくとも私には。

### 実務的な理由

もちろん信頼性の話はあります。rate limit も outage も起きる。複数 provider を設定しておけば、1つが詰まっても別が引き継げる。

でも正直、それが主目的ではありませんでした。

作った理由は **flexibility** です。

- 仕事用途では会社の API key を使いたいときがある
- 個人的な内容では個人 key を使いたいときがある
- ある provider が上限に達したら別に回したいときがある
- 同じ入力をモデルごとに比較したいときがある

要点は、**切り替えは effortless であるべき** ということ。再設定不要。設定画面を掘らない。普通に動く。

### 体験を楽しくする

routing は直感的で、ほぼ playground のようにしたかった。

複数 provider の API key を登録すれば、あとは Reso が処理します。特定タスクだけ手動指定もできる。auto-rotate もできる。どこかが rate-limited なら、静かに次へ移る。

「選択肢がある」体験であって、「義務が増える」体験にはしたくありませんでした。

### なぜ重要か

多くのアプリは、1 provider、1 API key、1つの流儀に固定します。

でも AI の地形は速く変わる。今日の最適が明日も最適とは限らない。時には、優劣以前にただ*試したい*だけのこともある。

私はツールがその好奇心を支えるべきだと思っています。実験を簡単にし、罰ゲーム化しないこと。

### 地味なインフラ

裏側では状態管理が大量にあります。
- provider の健全性を追跡する
- rate limit と実エラーを切り分ける
- retry storm を避ける
- 全滅時に graceful degradation する

routing 本体は 50 行程度でも、エラーハンドリングは 200 行超え。インフラはだいたいそうで、地味なところが一番コード量を食います。

でもうまく動けば気づかれません。使い手には「反応が速い」「柔軟」「ちょっと楽しい」とだけ伝わる。

目標はそこです。信頼性だけじゃない。playground です。`}},{id:5,category:"Security",title:{en:"Privacy by Design: The PII Shield",zh:"隐私内建：PII Shield",ja:"設計で守るプライバシー: PII Shield"},summary:{en:"This started from my own anxiety about voice privacy and became an architecture where voice fingerprints never leave your Mac.",zh:"这件事从我对语音隐私的焦虑开始，最后落成一套“声纹不离开 Mac”的架构。",ja:"この機能は、私自身の音声プライバシーへの不安から始まり、声紋を Mac 外へ出さない設計に着地した。"},content:{en:`This feature came from a deeply personal need.

When I first started exploring voice tools, I was genuinely worried. Where does my audio go? Who's listening? I didn't even know how to configure my computer to feel safe. That uncertainty kept me from using voice input for anything important.

So when I built Reso, I wanted to solve that problem—not just for myself, but properly.

### The Struggle: Local Everything?

My first instinct was to run *everything* locally. No cloud. No APIs. Total privacy.

I spent nearly two months trying to make this work. We experimented with different local LLMs, quantized versions, GPU optimizations, even leveraging the Apple Neural Engine for acceleration.

The hardware could technically handle it—30+ GB of VRAM is a lot. But here's the reality:
- You don't want to "burn" that much compute just by opening an app
- Local models still lag behind top-tier APIs in reasoning and abstraction
- The language processing quality wasn't where it needed to be

If the model can't deliver the experience people deserve, forcing it to run locally is just... cutting the foot to fit the shoe.

### Redefining the Question

So we stepped back and asked: **What is privacy, really?**

When you break it down, there are two things that matter most:
1. **PII (Personally Identifiable Information)** — names, numbers, sensitive terms
2. **Your voice fingerprint** — the unique acoustic signature of *you*

Once we framed it this way, the architecture became clear.

### What We Built

**1. Voice fingerprint stays local. Period.**

Your raw audio never leaves your Mac. Transcription happens entirely on-device using optimized Whisper models running on Apple Silicon. This is non-negotiable.

**2. Text gets sanitized before it goes anywhere.**

After transcription, we scan for sensitive patterns—names, phone numbers, emails, custom terms you define. These get encoded into random tokens:

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

Only the sanitized version touches the cloud.

**3. We work with reputable providers.**

The masked text goes to OpenAI or Anthropic—established vendors with clear data policies. We can't control everything they do, but we've built the system we *wish* existed: one where even if something leaks, it's meaningless without context.

**4. Everything else runs locally.**

Our discovery algorithms, clustering, chip-level optimizations—all of that stays on your machine. We leverage your Mac's silicon for everything we can.

### Rethinking Privacy

This was a fun trip, honestly. It forced us to think carefully: What does privacy actually mean? Who's responsible for protecting it?

I don't have all the answers. But I know this: I built the architecture I wanted to exist. One where I'd feel comfortable using it for my own sensitive thoughts.

If you're going to trust a tool with your voice, you deserve to know exactly what's protected and how.

That clarity is the real feature.`,zh:`这个功能来自一个很私人的需求。

我刚开始接触语音工具时，是真的担心：音频会被传到哪里？谁在听？我甚至不知道该怎么配置电脑才算安全。那种不确定感让我不敢把语音输入用于重要内容。

所以在做 Reso 时，我想把这个问题真正解决，不只是给自己凑合用，而是从架构上解决。

### 最初的挣扎：全部本地化？

我第一反应是把*所有*环节都放在本地。不要云，不要 API，彻底隐私。

我差不多花了两个月去试这条路：不同本地 LLM、量化版本、GPU 优化，甚至尝试利用 Apple Neural Engine 加速。

硬件层面并非做不到，30+ GB VRAM 看起来很充裕。但现实是：
- 你不会想仅仅打开一个应用就“烧掉”这么多算力
- 本地模型在推理和抽象能力上仍落后于头部 API
- 语言处理质量离我想要的标准还有差距

如果模型体验达不到使用者应得的水平，强行全本地就是削足适履。

### 重新定义问题

于是我们退一步问：**隐私到底是什么？**

拆开看，最关键其实是两件事：
1. **PII（Personally Identifiable Information）** —— 姓名、号码、敏感术语
2. **你的声纹** —— 代表“你是谁”的独特声学特征

用这个框架看，架构路径就清楚了。

### 我们最后的方案

**1. 声纹永远留在本地。**

原始音频绝不离开你的 Mac。转写完全在设备端完成，使用运行在 Apple Silicon 上的优化版 Whisper。这一点不可妥协。

**2. 文本外发前先脱敏。**

转写后我们会扫描敏感模式：姓名、电话、邮箱、你自定义的敏感词。然后替换成随机 token：

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

只有脱敏后的文本才会接触云端。

**3. 云端只接入信誉供应商。**

脱敏文本会发送到 OpenAI 或 Anthropic 这类数据政策更清晰的服务商。我们无法控制一切，但我们至少把系统构造成“就算发生泄漏，没有上下文也没有意义”。

**4. 其余能力尽可能本地运行。**

discovery 算法、clustering、芯片级优化都在你的机器上执行。我们尽可能榨干 Mac 本地算力。

### 对隐私的再理解

这段旅程其实挺有意思。它逼着我们认真想：隐私到底意味着什么？谁应该为它负责？

我没有全部答案。但我确定一点：我做出了自己愿意放心使用的架构，愿意拿它处理真正敏感的想法。

如果你要把自己的声音交给一个工具，你有权知道它到底保护了什么、怎么保护。

这种清晰度，本身就是功能。`,ja:`この機能は、とても個人的な不安から生まれました。

音声ツールを触り始めた頃、私は本気で心配していました。音声はどこへ行くのか。誰が聞くのか。安全だと思える設定にする方法すら分からなかった。その不確実さのせいで、重要な内容に音声入力を使えませんでした。

だから Reso を作るとき、この問題をちゃんと解決したかった。自分向けの妥協ではなく、設計として。

### 最初の葛藤: 全部ローカルにする？

最初の直感は、*すべて*をローカル実行することでした。クラウドなし。API なし。完全プライバシー。

この方向に約2か月使いました。ローカル LLM の比較、量子化版、GPU 最適化、Apple Neural Engine の活用まで試しました。

ハード的には可能です。30+ GB の VRAM は大きい。でも現実はこうでした。
- アプリを開くだけでその計算資源を「燃やす」運用は現実的でない
- 推論や抽象化ではローカルモデルがトップ API にまだ届かない
- 言語処理品質が必要ラインに達しない

使い手が得るべき体験を満たせないなら、ローカル強制は本末転倒です。

### 問いの再定義

そこで一歩引いて問い直しました。**そもそもプライバシーとは何か？**

分解すると重要なのは2点です。
1. **PII (Personally Identifiable Information)**: 名前、番号、機微語
2. **あなたの声紋**: あなた固有の音響的シグネチャ

この定義にした瞬間、アーキテクチャは明確になりました。

### 実装したこと

**1. 声紋はローカル固定。**

生音声は Mac の外に出しません。転写は Apple Silicon 上の最適化 Whisper で完全オンデバイス実行。ここは妥協しません。

**2. テキストは送信前にサニタイズ。**

転写後に、名前・電話番号・メール・ユーザー定義語などの敏感パターンを検出し、ランダム token に置換します。

\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [PERSON_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

クラウドへ行くのはサニタイズ済みテキストだけです。

**3. 送信先は信頼できる provider。**

マスク済みテキストは OpenAI や Anthropic に送ります。すべてを制御することはできませんが、漏えいしても文脈なしでは意味を成さない形にしています。

**4. それ以外はローカルで処理。**

discovery アルゴリズム、clustering、チップ最適化などは端末内で実行。Mac のシリコン能力を最大限使います。

### プライバシーを考え直す

正直、この旅は面白かったです。プライバシーの意味、そして守る責任の所在を真面目に考え直す機会になった。

私は全答えを持っていません。でも一つ確かなのは、自分が本当に安心して使える設計を作ったということです。敏感な思考にも使えると感じられる設計を。

音声をツールに預けるなら、何がどう守られているかを知る権利があります。

その透明性こそが、本当の機能です。`}},{id:4,category:"Product",title:{en:"From Vision to Code: Building Architect Mode",zh:"从视觉到代码：打造 Architect Mode",ja:"ビジョンをコードへ: Architect Mode を作る"},summary:{en:"I built Architect Mode to close the gap between what I can already see on screen and what I need to tell an AI coding assistant.",zh:"我做 Architect Mode，是为了把“我已经看见的问题”更快地变成 AI coding assistant 能执行的规格。",ja:"Architect Mode は、画面で見えている修正点を AI coding assistant が実行できる仕様へ最短で落とすために作った。"},historicalNote:{en:"Historical post. Architect Mode was an experimental feature we built and later removed from the shipping product. This post is kept as a record of the thinking behind it at the time — it does not describe a feature currently in Reso.",zh:"历史篇章。Architect Mode 是我们曾经做过、后来又从正式版里移除的实验性功能。这篇文章作为当时思路的记录保留下来——它描述的并不是 Reso 当前版本里的功能。",ja:"ヒストリカルポスト。Architect Mode は一度構築し、その後の製品リリースから外した実験的な機能です。当時の思考プロセスの記録として残していますが、現在の Reso には含まれていません。"},content:{en:`As developers, we often know *exactly* what we want to build. The bottleneck isn't understanding—it's communication.

When I'm polishing UI details in Cursor or Windsurf, I can see precisely what needs adjustment: this shadow needs 2px more blur, that spacing is 4px too tight, this hover state needs a subtle lift animation. I know the exact CSS properties. I know the design rationale.

But typing all of that out? Describing which element I'm referring to, its location, the surrounding context? That's where time gets wasted.

**Architect mode exists to eliminate that friction.**

### The Problem: Context Is Expensive to Type

Consider a typical refinement task: adjusting a button's visual weight.

Without Architect mode, I'd write something like:

> "In the hero section, there's a primary CTA button with the text 'Get Started'. It currently has a subtle shadow. I want to increase the shadow to make it more prominent—something like 0 4px 12px rgba(0,0,0,0.15). Also add a hover state that lifts it slightly, maybe translateY(-1px) with a transition..."

That's 60+ words just to describe what I could *point at* in 2 seconds.

### The Solution: Point, Speak, Execute

Architect mode combines screen capture with voice input:

1. **Double-tap Option** → Overlay appears
2. **Draw a box** around the exact element (no ambiguity about "which button")
3. **Speak your intent**: "Stronger shadow, subtle lift on hover, 200ms ease-out"
4. **Double-tap Option** → Structured spec generated

The output is precise and actionable:

> "Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained"

This drops directly into Cursor. No reformatting. No clarification needed.

### Implementation Challenges

Building this required solving several hard problems:

**1. Latency budget**: Multimodal LLMs (GPT-4V, Claude 3.5 Sonnet) are slow. I implemented aggressive image compression and streaming responses to keep the interaction feeling snappy.

**2. Prompt precision**: Early iterations produced generic suggestions. The final system prompt (~300 words) enforces specific output: exact CSS values, component identification, and accessibility considerations.

**3. Context preservation**: The LLM needs to understand not just what you're pointing at, but the surrounding design system context. I extract color palettes and spacing patterns from the visible UI.

### Why This Matters

This isn't about replacing technical knowledge—it's about **removing the translation layer** between vision and execution.

When you're deep in a polishing session, iterating on micro-interactions and visual details, the last thing you want is to context-switch into "prompt writing mode." Architect mode keeps you in flow.

The best tools don't change how you think. They just remove the friction between thinking and doing.`,zh:`作为开发者，我们通常都*非常清楚*自己想改什么。真正的瓶颈往往不是理解，而是沟通。

当我在 Cursor 或 Windsurf 里打磨 UI 时，我能精确看到问题：这个阴影要再糊 2px，那个间距紧了 4px，这个 hover 需要一个轻微上浮动画。CSS 属性我知道，设计理由我也知道。

问题是，把这些完整打出来很费时：要描述是哪个元素、在页面哪里、上下文是什么。时间就耗在这里。

**Architect mode 就是为了解决这层摩擦。**

### 问题：上下文靠打字太贵

拿一个常见任务来说：调整按钮视觉权重。

没有 Architect mode 时，我可能要这样写：

> “在 hero 区域有个主 CTA，文案是 ‘Get Started’。它现在有个比较轻的阴影。我想把阴影加强一点，比如 0 4px 12px rgba(0,0,0,0.15)。另外加个 hover 上浮效果，类似 translateY(-1px)，配个过渡……”

只是描述一个我 2 秒就能*指给你看*的对象，却要写 60+ 个词。

### 方案：指一下，说一句，直接执行

Architect mode 把屏幕选区和语音输入结合起来：

1. **双击 Option** -> 出现覆盖层
2. **框选元素**（不再有“到底哪个按钮”的歧义）
3. **说出意图**：“阴影更明显，hover 微上浮，200ms ease-out”
4. **再双击 Option** -> 自动生成结构化规格

输出会很具体、可执行：

> “Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained”

这段可以直接贴进 Cursor，不用重排，也不用补充解释。

### 工程实现难点

要做成这件事，得解决几个硬问题：

**1. Latency budget**：多模态 LLM（GPT-4V、Claude 3.5 Sonnet）本身偏慢。我做了激进图像压缩和流式返回，让交互保持“跟手”。

**2. Prompt precision**：早期版本容易给泛泛建议。最终系统 prompt（约 300 词）强约束输出格式：精确 CSS 数值、组件识别、可访问性要求。

**3. Context preservation**：LLM 不能只看你框了什么，还要看设计系统上下文。我会从可见 UI 中提取配色和间距模式，补齐语境。

### 为什么重要

这不是在替代技术能力，而是在**移除视觉到执行之间的翻译层**。

当你正在打磨微交互和视觉细节时，最不想做的就是切换到“写 prompt 模式”。Architect mode 让你保持 flow。

好的工具不会改变你思考方式，它只是把“想法 -> 行动”的摩擦降到最低。`,ja:`開発者はたいてい、何を作るかを*正確に*分かっています。詰まるのは理解ではなく、伝達です。

Cursor や Windsurf で UI を磨いているとき、直したい点は明確です。このシャドウは 2px ぼかしを足す、この余白は 4px 詰める、この hover は少し持ち上げる。必要な CSS も、設計意図も分かっている。

でもそれを全部タイプで説明するのが重い。どの要素か、どこにあるか、周辺文脈は何か。時間はそこに消えます。

**Architect mode はその摩擦を消すために作りました。**

### 問題: 文脈は打鍵コストが高い

典型例として、ボタンの見た目の重みを調整するケースを考えます。

Architect mode がないと、次のように書くことになります。

> "hero セクションに 'Get Started' と書かれた primary CTA ボタンがあります。今は薄いシャドウです。もう少し強くしたいので、0 4px 12px rgba(0,0,0,0.15) くらいに。hover では translateY(-1px) で軽く持ち上がる遷移も..."

2秒で*指せる*内容のために、60語以上使ってしまう。

### 解決: 指す、話す、実行する

Architect mode はスクリーンキャプチャと音声入力を組み合わせます。

1. **Option をダブルタップ** -> オーバーレイ表示
2. **対象を囲む**（「どのボタン？」の曖昧さが消える）
3. **意図を話す**: "シャドウ強め、hover で軽く浮上、200ms ease-out"
4. **Option を再度ダブルタップ** -> 構造化 spec を生成

出力はそのまま実装可能です。

> "Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained"

Cursor にそのまま貼れる。整形不要、補足説明不要です。

### 実装上の難所

実装にはいくつか難題がありました。

**1. Latency budget**: マルチモーダル LLM（GPT-4V、Claude 3.5 Sonnet）は遅い。強めの画像圧縮と streaming response を入れて、操作感を保ちました。

**2. Prompt precision**: 初期は抽象的な提案が出やすかった。最終 system prompt（約300語）で、正確な CSS 値、コンポーネント特定、アクセシビリティ配慮を強制しました。

**3. Context preservation**: LLM は指した対象だけでなく、周辺デザインシステムも理解する必要があります。可視 UI から色パレットと余白パターンを抽出して文脈を補っています。

### なぜ重要か

これは技術知識の代替ではありません。**ビジョンと実装の間にある翻訳レイヤーを取り除く**ためのものです。

マイクロインタラクションや見た目調整に没頭しているとき、最後にやりたいのは「prompt を書くモード」への切り替えです。Architect mode は flow を維持します。

優れたツールは思考法を変えません。思考と実行の摩擦を減らすだけです。`}},{id:3,category:"Building",title:{en:"The Recording That Never Dies",zh:"不会消失的录音",ja:"消えない録音"},summary:{en:"After losing recordings myself, I built Shadow Recording so crashes and kernel panics no longer erase ideas.",zh:"我自己丢过录音，所以做了 Shadow Recording：让崩溃和 kernel panic 也带不走想法。",ja:"自分で録音を失った経験があるから、Shadow Recording を作った。クラッシュや kernel panic でもアイデアを失わないために。"},content:{en:`I've lost voice recordings before. App crashes, battery dies, system freezes—poof, gone.

That sinking feeling of "I just spent 10 minutes articulating something important and now it's lost" is devastating.

When I started building Reso, I made a promise: **This will never happen.**

### The Traditional Approach (And Why It Fails)

Most recording apps work like this:
1. Start recording → audio buffered in memory
2. Stop recording → write audio file to disk
3. Return the file path

**Problem**: If the app crashes between steps 1 and 2, the audio is gone forever.

macOS apps crash. Power cables get yanked. Kernel panics happen (rarely, but they do).

### The Solution: Incremental Writes

What if we wrote audio *while recording*, not after?

Here's how Shadow Recording works:
1. Recording starts → create a timestamped M4A file immediately
2. As audio chunks arrive, append them to the file *on disk*
3. If the app crashes, the file is already there

**Result**: Even if Reso explodes mid-sentence, your recording survives.

### The Implementation Details

This sounds simple, but M4A is a complex format. You can't just naively append raw audio bytes—the file would be corrupted.

I had to:
1. Use a streaming audio encoder that supports incremental writes
2. Ensure the M4A container is "valid" even if writing stops abruptly
3. Handle file cleanup (old shadow recordings can't pile up forever)

We keep shadow recordings for 7 days. After that, they're auto-deleted. This prevents unbounded storage growth while giving you a safety net.

### What I Learned

**The best features are the ones people never notice.**

Shadow Recording has saved dozens of recordings from crashes. But people don't think "wow, shadow recording is great!" They just think "Reso is reliable."

That's exactly what I wanted.

Reliability isn't sexy. It doesn't make for good demos. But it's the foundation of trust.

When you know your ideas are safe, you use the tool differently—you're willing to capture half-formed thoughts, experiments, mistakes.

That's when a tool stops being a utility and becomes part of your thinking process.`,zh:`我以前丢过录音。应用崩溃、电池没电、系统卡死——啪，没了。

那种“我刚花 10 分钟讲清一件重要的事，结果全没了”的下坠感，非常难受。

所以在开始做 Reso 时，我给自己立了一个约束：**这件事绝不能再发生。**

### 传统做法（以及它为什么会失败）

大多数录音应用的流程是：
1. 开始录音 -> 音频先缓存在内存
2. 停止录音 -> 再写文件到磁盘
3. 返回文件路径

**问题**：如果在步骤 1 和 2 之间崩溃，录音会永久丢失。

macOS 应用会崩。电源线会被拔。Kernel panic 也会发生（虽然不常见）。

### 解决方案：增量写盘

如果我们在录音过程中就持续写盘，而不是结束后一次性写呢？

Shadow Recording 的做法是：
1. 录音开始 -> 立刻创建带时间戳的 M4A 文件
2. 每当音频 chunk 到达，就追加到*磁盘文件*
3. 即使应用崩溃，文件也已经存在

**结果**：哪怕 Reso 在你说到一半时炸掉，录音仍能保住。

### 实现细节

听起来简单，但 M4A 格式并不简单。不能把原始音频字节直接拼接，否则文件会损坏。

我需要：
1. 使用支持增量写入的流式编码器
2. 确保即使中断写入，M4A 容器也保持“可读有效”
3. 处理文件清理（旧 shadow 录音不能无限堆积）

我们把 shadow 录音保留 7 天，之后自动删除。既提供安全兜底，也避免存储无限增长。

### 我学到的

**最好的功能，往往是使用者注意不到的功能。**

Shadow Recording 已经从崩溃里救回了很多录音。但使用者不会说“这个 shadow recording 真棒”，他们只会说“Reso 很可靠”。

这正是我想要的结果。

可靠性不花哨，演示时也不抢眼，但它是信任的地基。

当你知道自己的想法是安全的，你会更敢去记录半成品想法、实验和错误。

那时工具就不再只是工具，而会成为你思考过程的一部分。`,ja:`私は過去に録音を失ったことがあります。アプリクラッシュ、バッテリー切れ、システムフリーズ。全部一瞬で消える。

「大事なことを10分かけて話したのに失った」というあの落下感は本当にきつい。

Reso を作り始めたとき、私は一つ約束しました。**これは二度と起こさない。**

### 従来方式（となぜ失敗するか）

多くの録音アプリはこう動きます。
1. 録音開始 -> 音声はメモリにバッファ
2. 録音停止 -> その後ディスクへ書き出し
3. ファイルパスを返す

**問題**: 1 と 2 の間で落ちたら、音声は永遠に失われます。

macOS アプリは落ちます。電源ケーブルは抜けます。kernel panic も稀に起きます。

### 解決策: 増分書き込み

録音後ではなく、録音中に*書けば*いいのでは？

Shadow Recording は次の流れです。
1. 録音開始と同時に、タイムスタンプ付き M4A を即作成
2. 音声 chunk が来るたび、*ディスク上のファイル*へ追記
3. 途中で落ちても、ファイル自体は残っている

**結果**: Reso が話の途中で落ちても録音は生き残る。

### 実装の詳細

単純そうですが、M4A は複雑です。生バイトを雑に追記すると壊れます。

必要だったのは以下です。
1. 増分書き込み対応の streaming encoder を使う
2. 途中停止でも M4A コンテナを有効状態に保つ
3. 古い shadow 録音の掃除を行う（無限に積まない）

shadow 録音は 7 日保持し、その後自動削除します。安全網を持ちつつ、ストレージ肥大化を防ぎます。

### 学んだこと

**最高の機能は、使い手が気づかない機能です。**

Shadow Recording はクラッシュから多数の録音を救いました。でも使い手は「shadow recording すごい」とは言わない。「Reso は信頼できる」と言う。

それが狙いでした。

信頼性は派手じゃない。デモ映えもしない。でも信頼の土台です。

アイデアが守られると分かっていると、使い方が変わります。未完成の考え、実験、失敗まで記録できるようになる。

そのときツールは単なる utility を超えて、思考プロセスの一部になります。`}},{id:2,category:"Performance",title:{en:"Obsessing Over 10x",zh:"为 10x 执着",ja:"10x への執念"},summary:{en:"To make transcription truly keep up with thought, I spent two weeks on compiler flags and CoreML to push speed to 10x.",zh:"为了让转写真正跟上思路，我花了两周追 compiler flags 和 CoreML，把速度推到 10x。",ja:"転写を思考速度に追いつかせるために、2週間かけて compiler flags と CoreML を詰め、10x まで押し上げた。"},content:{en:`I'll admit it: I'm obsessed with performance.

Not in a "premature optimization" way—I know the rule. But Reso's entire value proposition is **real-time transcription**. If it lags, it's useless.

When I first got Whisper.cpp running on Apple Silicon, I was excited. It worked! But then I checked the metrics:

**0.12x real-time speed.**

Translation: An 8-second audio clip took 66 seconds to transcribe.

That's... not real-time.

### The First Breakthrough: CoreML

Whisper has two parts: an encoder (heavy) and a decoder (lighter).

The encoder is what crushes CPUs. But Apple Silicon has a dedicated Neural Engine for exactly this kind of work.

I found a CoreML-compiled version of the Whisper encoder. Adding it was straightforward:
- CPU encoder: 0.12x speed
- **CoreML encoder: 3.2x speed**

Better! But still not enough. I wanted **10x**.

### The Second Breakthrough: Compiler Optimization

Here's where it got weird.

Whisper.cpp is written in C++. When you build a Swift app in Xcode, it optimizes *Swift code* aggressively—but treats C++ dependencies like third-party libraries and barely touches them.

I discovered you can pass custom compiler flags to the C++ build:
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO (Link-Time Optimization)** is the secret sauce. It analyzes the entire compiled program and inlines functions across file boundaries, eliminating overhead.

After adding these flags:
- Xcode build: 3.2x speed
- **Optimized build: 10.6x speed**

I nearly fell out of my chair.

### The Cost of Knowledge

This isn't documented anywhere obvious. I found it through GitHub issues, compiler flag experiments, and profiling dozens of builds. Two weeks of trial and error.

But the result: Reso transcribes audio **faster than you can speak it**. On an M2 Pro, an 8-second clip processes in 0.75 seconds.

### Why This Matters

Speed isn't just a feature—it changes *how* you use a tool.

When transcription is instant, you stop thinking about it. You just record, and the text appears.

That's the difference between a tool you *use* and a tool you *forget is even running*.

The best tools disappear.`,zh:`我得承认：我对性能有点执着。

不是那种“过早优化”式执着，我知道那条规则。但 Reso 的核心价值就是**实时转写**。一旦卡顿，它就失去意义。

我第一次把 Whisper.cpp 跑在 Apple Silicon 上时很兴奋。它能跑了！但我一看指标：

**0.12x 实时速度。**

翻译一下：8 秒音频要 66 秒才能转写完。

这显然不算实时。

### 第一个突破：CoreML

Whisper 由两部分组成：encoder（重）和 decoder（相对轻）。

真正压垮 CPU 的是 encoder。而 Apple Silicon 正好有 Neural Engine 来干这类事。

我找到了一个 CoreML 编译版的 Whisper encoder，接入并不复杂：
- CPU encoder：0.12x
- **CoreML encoder：3.2x**

好很多，但还不够。我想要 **10x**。

### 第二个突破：编译优化

真正离谱的地方在这里。

Whisper.cpp 是 C++ 写的。你在 Xcode 里构建 Swift 应用时，Swift 代码会被激进优化，但 C++ 依赖常常被当作第三方库，优化很有限。

后来我发现可以给 C++ 构建传自定义 compiler flags：
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO（Link-Time Optimization）** 是关键。它会跨文件分析整个编译结果并内联函数，减少很多额外开销。

加上这些参数后：
- Xcode 默认构建：3.2x
- **优化后构建：10.6x**

我当时差点从椅子上站起来。

### 知识成本

这些信息没有明显文档告诉你。我是靠翻 GitHub issues、试 compiler flags、做几十次 profile 挖出来的。前后折腾了两周。

但结果值得：Reso 的转写已经**比你开口说话还快**。在 M2 Pro 上，8 秒音频大约 0.75 秒处理完。

### 为什么重要

速度不只是一个 feature，它会改变你*如何使用*工具。

当转写几乎即时，你就不再思考“它快不快”。你只负责说，文本自动出现。

这就是“你在使用一个工具”和“你几乎忘记它存在”之间的差别。

最好的工具会消失在体验里。`,ja:`認めます。私は性能に取り憑かれています。

とはいえ「premature optimization」的な話ではありません。ルールは分かっている。でも Reso の価値は **real-time transcription** にあります。遅ければ意味がない。

Whisper.cpp を Apple Silicon で初めて動かしたときは興奮しました。動いた！ でも指標を見たらこうでした。

**実時間の 0.12x。**

つまり 8 秒の音声に 66 秒かかる。

それは…リアルタイムではない。

### 1つ目の突破: CoreML

Whisper は encoder（重い）と decoder（軽め）で構成されます。

CPU を潰すのは encoder。Apple Silicon にはこの種の処理向けに Neural Engine があります。

CoreML コンパイル済み encoder を見つけて組み込むと、結果はこうなりました。
- CPU encoder: 0.12x
- **CoreML encoder: 3.2x**

改善はした。でも足りない。欲しいのは **10x**。

### 2つ目の突破: compiler 最適化

ここからが妙でした。

Whisper.cpp は C++。Swift アプリを Xcode でビルドすると、Swift は強く最適化される一方、C++ 依存は第三者ライブラリ扱いで最適化が弱いことがある。

そこで C++ 側に custom compiler flags を渡せると分かりました。
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO (Link-Time Optimization)** が効きます。プログラム全体を解析し、ファイル境界を越えて関数をインライン化し、オーバーヘッドを削る。

この flags 追加後の結果：
- Xcode build: 3.2x
- **Optimized build: 10.6x**

椅子から落ちそうになりました。

### 知識のコスト

これは分かりやすく文書化されていません。GitHub issues、compiler flags の実験、何十ビルドのプロファイルで辿り着きました。試行錯誤に2週間。

でも結果は大きい。Reso は **話す速度より速く** 文字起こしできます。M2 Pro なら 8 秒クリップを 0.75 秒で処理。

### なぜ重要か

速度は単なる機能ではなく、ツールの使い方そのものを変えます。

転写が即時なら、速度を意識しなくなる。録音すれば文字が出るだけ。

それは「使っているツール」と「動いていることを忘れるツール」の違いです。

最高のツールは存在感を消します。`}},{id:1,category:"Vision",title:{en:"Why I Built This",zh:"我为什么做这个",ja:"これを作った理由"},summary:{en:"I built Reso to take wording and structuring off my plate, so more of my time stays with thinking and building.",zh:"我做 Reso，是想把措辞和结构化从自己手上拿开，把时间还给思考与构建。",ja:"Reso を作った理由は、言語化と構造化の負担を自分から外し、思考と build に時間を戻したかったから。"},content:{en:`There's an inherent tension in how we express ideas: speaking is fragmented, scattered, full of pauses and restarts. But writing—typing—is one of the most fluent forms of human expression.

The gap between the two is where ideas get lost.

### The Real Problem

I wanted to free up more time for building. Not transcription—*building*. The kind of deep work where you're creating, thinking, designing.

Typing takes time. Editing takes more. And when your thoughts come out messy (as spoken thoughts always do), you end up spending hours polishing what should have taken minutes.

**What if someone else handled the wording and structuring?** What if you could just *think*, and the clean output appeared?

That's what Reso does. We take care of the typing so you can focus on contemplating.

### More Than a Voice Recorder

There are plenty of recording tools out there. But Reso goes further—helping you discover ideas you didn't know you had, reflect on how you think, and track how your time flows.

When I look back at old voice notes, I'm seeing where my time went, what I got right, how my thinking evolved. It's a record of building and a tool for self-discovery.

### Why Voice Is Different

Voice carries emotion in ways typing never can. That's exactly why it should stay private.

You don't want your raw recordings floating around the internet. But sharing polished text? That's depersonalized. Desensitized. Safe.

So Reso is built around three principles:
1. **Lighten the output burden** — speak freely, get clean results
2. **Privacy-first architecture** — your voice stays on your device
3. **Smart enough to understand** — learns your workflows and adapts

### The Long Game

Sometimes you'll record a scattered thought while holding your cat, hands-free, not thinking much of it. A year later, you'll look back and realize: *that was the seed of something important*.

Fragmented voice notes become fascinating over time. Where did my time go? What did I build? What patterns emerge?

I've always needed something like this. Drawing from my background in scientific research, I know that the best insights often come from revisiting raw observations with fresh eyes.

### Not Just a Recorder—A Thought Partner

This is why we named it Reso—short for *Resonate*.

We're not building a voice memo app. We're building a workflow that understands you. One that helps you succeed by getting out of your way and letting you think.

The goal isn't to capture your voice. It's to **resonate with how you work**.`,zh:`在表达想法这件事上，有一个天然张力：说话是碎片化的、跳跃的，充满停顿和重启；但写作（尤其是打字）又是人类最流畅的表达形式之一。

想法最容易丢失，就发生在这两者之间的缝隙里。

### 真正的问题

我想释放更多时间去做 build。不是做转写本身，而是*构建*——那种需要深度思考、创造和设计的工作。

打字要时间，编辑更耗时。尤其当你的思路像口语一样天然凌乱时，你会花几个小时打磨本应几分钟完成的内容。

**如果措辞和结构化可以交给别的东西处理呢？** 如果你只需要*思考*，干净结果就能出现呢？

这正是 Reso 在做的事。我们接管输入劳动，让你把注意力放回思考本身。

### 不只是录音工具

市场上并不缺录音工具。但 Reso 更进一步——帮你发现原本没意识到的想法，反思你的思维方式，追踪时间的流向。

回看旧的语音笔记时，我看到的是时间去了哪里、哪些判断做对了、思路怎么演化了。它既是构建记录，也是自我发现工具。

### 为什么语音不一样

语音携带的情绪信息，是打字很难承载的。也正因为如此，它应该被更严格地保护。

你不会希望原始录音在互联网上漂流。但经过整理的文本可以被去个性化、去敏感化，变得更安全。

所以 Reso 以三个原则为核心：
1. **减轻输出负担** —— 自由说，得到干净结果
2. **隐私优先架构** —— 你的声音留在你的设备
3. **足够聪明地理解你** —— 学习你的 workflow 并持续适配

### 长期视角

有时你会在抱着猫、双手腾不开的状态下随口记录一个零散想法。当下你未必在意。一年后回看，才发现：*那是某件重要事情的种子*。

碎片化语音笔记会随着时间变得越来越有意思：我的时间去了哪里？我到底做成了什么？有什么模式在反复出现？

我一直需要这样的工具。受科学研究训练影响，我很清楚：最好的洞察，常常来自对原始观察数据的反复回看。

### 不只是 Recorder，而是 Thought Partner

这也是我们把它命名为 Reso（Resonate 的缩写）的原因。

我们不是在做语音备忘录 App，而是在做一个真正理解你的 workflow。它通过“少打扰你”来帮助你成功，让你把精力放回思考。

目标不是收集你的声音，而是**与你的工作方式共振**。`,ja:`アイデア表現には、もともと緊張関係があります。話すことは断片的で、飛びがあって、言い直しや間が多い。一方で書くこと、つまりタイピングは人間の最も流暢な表現の一つです。

この2つの間のギャップで、アイデアは失われます。

### 本当の問題

私が増やしたかったのは、転写の時間ではなく build の時間です。作る、考える、設計する深い作業の時間。

タイピングには時間がかかる。編集にはもっとかかる。話し言葉由来の散らかった思考を整えるために、本来数分で済むはずのことへ何時間も使ってしまう。

**もし言語化と構造化を別レイヤーが引き受けたら？** もしあなたはただ*考える*だけで、整った出力が現れたら？

それをやるのが Reso です。入力の負担を引き受け、あなたを思考に戻す。

### ただの録音ツールではない

録音ツールは世の中に十分あります。でも Reso はさらに進んで——気づかなかったアイデアを発見し、思考の仕方を内省し、時間の流れを追跡する助けをします。

古い音声メモを見返すとき、時間の使い方、正しかった判断、思考の変化が見える。build の記録であり、自己発見の道具でもあります。

### なぜ音声は特別か

音声はタイピングでは運べない感情を持っています。だからこそ、より強く守られるべきです。

生録音がネット上を漂うのは望ましくない。でも整えたテキストなら、個人性や感度を下げて共有しやすくできます。

そのため Reso は3つの原則で設計しています。
1. **出力負担を軽くする** — 自由に話し、整った結果を得る
2. **Privacy-first architecture** — 声は端末内に留める
3. **理解して適応する** — workflow を学習し、変化に合わせる

### 長期戦の視点

猫を抱いたまま、手を使わずに散らかった考えを録音することがある。その瞬間は大したことがない。でも1年後に見返して気づく。*あれが重要な種だった*。

断片的な音声メモは、時間が経つほど面白くなります。自分の時間はどこへ行ったのか。何を作ったのか。どんなパターンが現れるのか。

私はずっとこういう道具を必要としていました。科学研究の背景があるので、生データを後から見直すことが洞察を生むと知っているからです。

### Recorder ではなく Thought Partner

だから名前は Reso、*Resonate* の短縮です。

私たちが作っているのは音声メモアプリではありません。あなたを理解する workflow です。邪魔を減らし、考える余白を増やし、成功を支えるもの。

目標は声を集めることではない。**あなたの働き方に共鳴すること**です。`}}],Yg=["en","zh","ja"],qg=e=>Gg.map(({title:t,summary:n,content:r,historicalNote:o,...i})=>({...i,title:t[e],summary:n[e],content:r[e],historicalNote:o?o[e]:void 0})),Dd=Yg.reduce((e,t)=>(e[t]=qg(t),e),{});Dd.en;const qt=e=>{if(!e)return e;const t=[],n=/(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;let r=0,o,i=0;for(;(o=n.exec(e))!==null;)o.index>r&&t.push(e.slice(r,o.index)),o[1]?t.push(l.jsx("strong",{className:"font-semibold",children:o[2]},i++)):o[3]?t.push(l.jsx("em",{children:o[4]},i++)):o[5]&&t.push(l.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono",children:o[6]},i++)),r=o.index+o[0].length;return r<e.length&&t.push(e.slice(r)),t.length>0?t:e},Kg=e=>e.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),Qg=(e,t="journey")=>{if(!e)return[];const n=new Map;return e.split(`

`).filter(r=>r.startsWith("### ")).map((r,o)=>{const i=r.replace("### ","").trim(),a=Kg(i)||`section-${o+1}`,s=n.get(a)||0;return n.set(a,s+1),{id:s===0?`${t}-${a}`:`${t}-${a}-${s+1}`,label:i}})},Jg=({post:e,headingPrefix:t="journey"})=>{if(!e)return null;const n=Qg(e.content,t);let r=0;return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("div",{className:"flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3",children:l.jsx("span",{children:e.category})}),l.jsx("h2",{className:"text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100",children:e.title})]}),e.historicalNote&&l.jsx("div",{className:"mb-8 rounded-xl border border-amber-300/60 dark:border-amber-500/40 bg-amber-50/70 dark:bg-amber-500/10 px-5 py-4 text-sm text-amber-900 dark:text-amber-100",children:l.jsx("p",{className:"leading-relaxed",children:qt(e.historicalNote)})}),l.jsx("div",{className:"prose-content",children:e.content.split(`

`).map((o,i)=>{if(o.startsWith("### ")){const a=n[r];return r+=1,l.jsx("h3",{id:a==null?void 0:a.id,className:"text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4 scroll-mt-28",children:qt(o.replace("### ",""))},i)}if(o.startsWith("```")){const a=o.replace(/```.*\n?/g,"");return l.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto mb-4",children:l.jsx("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:a})},i)}if(o.match(/^\d+\.\s/)){const a=o.split(`
`).filter(s=>s.match(/^\d+\.\s/));return l.jsx("ol",{className:"list-decimal list-outside ml-6 mb-4 space-y-1",children:a.map((s,u)=>l.jsx("li",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed",children:qt(s.replace(/^\d+\.\s*/,""))},u))},i)}if(o.startsWith("- ")){const a=o.split(`
`).filter(s=>s.startsWith("- "));return l.jsx("ul",{className:"list-disc list-outside ml-6 mb-4 space-y-1",children:a.map((s,u)=>l.jsx("li",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed",children:qt(s.replace(/^-\s*/,""))},u))},i)}return o.startsWith(">")?l.jsx("blockquote",{className:"border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400",children:qt(o.replace(/^>\s*/,""))},i):l.jsx("p",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:qt(o)},i)})})]})},Xg={en:{title:"Build Journey",subtitle:"Field notes on design, tradeoffs, and the thinking behind Reso.",selectPost:"Select a post",posts:"Posts"},zh:{title:"Build Journey",subtitle:"记录 Reso 在设计、取舍与实现过程中的思考。",selectPost:"选择篇章",posts:"篇章"},ja:{title:"Build Journey",subtitle:"Reso の設計・トレードオフ・実装における思考の記録。",selectPost:"記事を選択",posts:"記事一覧"}},Zg=(e,t)=>{const n=e.startsWith("#")?e.slice(1):e;if(!n)return null;const r=t.find(i=>`journey-${i.id}`===n);if(r)return`journey-${r.id}`;const o=t.find(i=>n.startsWith(`journey-${i.id}-`));return o?`journey-${o.id}`:null},ey=()=>{var u;const e=Ue(),{language:t}=xe(),n=ne(Dd,t),r=ne(Xg,t),[o,i]=y.useState(`journey-${((u=n[0])==null?void 0:u.id)||""}`);y.useEffect(()=>{if(!n.length)return;if(!n.find(g=>`journey-${g.id}`===o)){i(`journey-${n[0].id}`);return}if(!e.hash)return;const c=Zg(e.hash,n);c&&c!==o&&i(c)},[o,n,e.hash]);const a=n.find(c=>`journey-${c.id}`===o)||n[0],s=c=>{i(c),window.history.replaceState(null,"",`${e.pathname}#${c}`),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("main",{className:"pt-28 min-h-screen pb-20",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[l.jsxs("section",{className:"mb-12 max-w-3xl",children:[l.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:r.title}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:r.subtitle})]}),l.jsxs("div",{className:"mb-6 lg:hidden",children:[l.jsx("label",{htmlFor:"journey-post-select",className:"block text-sm text-gray-500 dark:text-gray-400 mb-2",children:r.selectPost}),l.jsx("select",{id:"journey-post-select",value:o,onChange:c=>s(c.target.value),className:"w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-800 dark:text-gray-100",children:n.map(c=>l.jsx("option",{value:`journey-${c.id}`,children:c.title},c.id))})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-8",children:[l.jsxs("aside",{className:"hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto",children:[l.jsx("p",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3",children:r.posts}),l.jsx("nav",{className:"space-y-1",children:n.map(c=>{const g=`journey-${c.id}`,d=o===g;return l.jsx("button",{onClick:()=>s(g),className:`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${d?"bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:l.jsx("p",{children:c.title})},c.id)})})]}),l.jsx("article",{children:a&&l.jsx("section",{id:`journey-${a.id}`,className:"scroll-mt-28",children:l.jsx(Jg,{post:a,headingPrefix:o})})})]})]})})},ty=()=>{const{language:e}=xe(),t=ne({en:{title:"Build Blocks",subtitle:"Reusable workflow components that let users compose their own process without starting from scratch.",what:"What It Is",whatBody:"Build Blocks packages recurring steps like intent parsing, refinement, and export into composable units. You can mix these units by use case instead of rebuilding the same flow each time.",status:"Current Status",statusBody:"This page is the new public entry point for Build Blocks. More examples and block templates will be published here as the system evolves."},zh:{title:"Build Blocks",subtitle:"可复用的 workflow 组件，让用户不用从零开始就能组合自己的流程。",what:"它是什么",whatBody:"Build Blocks 把 intent parsing、refinement、export 等高频步骤打包成可组合单元。你可以按场景自由拼装，而不是每次重做整条链路。",status:"当前状态",statusBody:"这里是 Build Blocks 的独立入口。后续我们会在此持续发布示例与模板。"},ja:{title:"Build Blocks",subtitle:"再利用可能な workflow コンポーネントで、ゼロから作り直さずに自分の流れを組み立てられます。",what:"概要",whatBody:"Build Blocks は intent parsing、refinement、export などの反復ステップを組み合わせ可能な単位として提供します。用途ごとに柔軟に構成できます。",status:"現在の状況",statusBody:"このページは Build Blocks の新しい公開入口です。今後、サンプルとテンプレートを順次追加します。"}},e);return l.jsx("main",{className:"pt-28 min-h-screen pb-20",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[l.jsxs("section",{className:"mb-14 max-w-3xl",children:[l.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:t.title}),l.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.subtitle})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[l.jsxs("section",{className:"rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6",children:[l.jsx("h2",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:t.what}),l.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:t.whatBody})]}),l.jsxs("section",{className:"rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6",children:[l.jsx("h2",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:t.status}),l.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:t.statusBody})]})]})]})})},ny={en:{backToHome:"Back to Home",title:"Recover Your License",subtitle:"Enter the email you used during purchase to retrieve your license key.",emailLabel:"Email Address",emailPlaceholder:"name@example.com",emailError:"Please enter a valid email.",findLicense:"Find License",searching:"Searching...",licenseFound:"License Found",status:"Status",copy:"Copy",copied:"Copied!",openApp:"Open App to Activate",error:"Error",needHelp:"Need help?",contactSupport:"Contact Support"},zh:{backToHome:"返回首页",title:"找回你的许可证",subtitle:"输入你购买时使用的邮箱来找回许可证密钥。",emailLabel:"邮箱地址",emailPlaceholder:"name@example.com",emailError:"请输入有效的邮箱地址。",findLicense:"查找许可证",searching:"搜索中...",licenseFound:"已找到许可证",status:"状态",copy:"复制",copied:"已复制！",openApp:"打开 App 激活",error:"错误",needHelp:"需要帮助？",contactSupport:"联系支持"},ja:{backToHome:"ホームに戻る",title:"ライセンスを復元",subtitle:"購入時に使用したメールアドレスを入力して、ライセンスキーを取得してください。",emailLabel:"メールアドレス",emailPlaceholder:"name@example.com",emailError:"有効なメールアドレスを入力してください。",findLicense:"ライセンスを検索",searching:"検索中...",licenseFound:"ライセンスが見つかりました",status:"ステータス",copy:"コピー",copied:"コピーしました！",openApp:"アプリを開いて有効化",error:"エラー",needHelp:"ヘルプが必要ですか？",contactSupport:"サポートに連絡"}},ry="https://reso-verify.gaoyukun1205.workers.dev",oy=[{value:"en",label:"English"},{value:"zh",label:"简体中文"},{value:"ja",label:"日本語"},{value:"zh-TW",label:"繁體中文"}],iy=()=>{const{theme:e,setTheme:t,language:n,setLanguage:r}=xe(),o=ne(ny,n),[i,a]=y.useState(""),[s,u]=y.useState(!1),[c,g]=y.useState(null),[d,m]=y.useState(""),[x,b]=y.useState(!1),[v,w]=y.useState(!1),f=async()=>{const k=i.trim();if(g(null),m(""),b(!1),!k||!k.includes("@")){b(!0);return}u(!0);try{const S=await(await fetch(ry,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"retrieve",email:k})})).json();if(S.success&&S.license_key)g({licenseKey:S.license_key,status:S.status||"Active"});else throw new Error(S.error||"No license found for this email.")}catch(j){console.error(j),m(j.message||"Unable to connect to server.")}finally{u(!1)}},h=()=>{c!=null&&c.licenseKey&&(navigator.clipboard.writeText(c.licenseKey),w(!0),setTimeout(()=>w(!1),2e3))},p=k=>{k.key==="Enter"&&f()};return l.jsxs("div",{className:"min-h-screen grid-paper-bg text-gray-900 dark:text-gray-100 font-sans",children:[l.jsx("div",{className:"absolute top-6 left-6",children:l.jsxs(Ee,{to:"/",className:"inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-sm",children:[l.jsx(Km,{size:18}),l.jsx("span",{children:o.backToHome})]})}),l.jsx("div",{className:"flex items-center justify-center min-h-screen px-6",children:l.jsxs("div",{className:"max-w-md w-full text-center",children:[l.jsx(Ee,{to:"/",className:"inline-flex items-center justify-center mb-8",children:l.jsx("img",{src:Ld,alt:"Reso",className:"w-28 h-28 rounded-3xl"})}),l.jsx("h1",{className:"text-3xl font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100",children:o.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-12 text-base leading-relaxed",children:o.subtitle}),l.jsxs("div",{className:"mb-6 text-left",children:[l.jsx("label",{htmlFor:"email",className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1",children:o.emailLabel}),l.jsx("input",{type:"email",id:"email",placeholder:o.emailPlaceholder,value:i,onChange:k=>a(k.target.value),onKeyDown:p,className:"w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-lg rounded-xl block p-4 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#5423e7] focus:shadow-[0_0_0_3px_rgba(84,35,231,0.1)]",required:!0}),x&&l.jsx("p",{className:"mt-2 text-sm text-red-500 pl-1",children:o.emailError})]}),l.jsxs("button",{onClick:f,disabled:s,className:`w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold text-base py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(84,35,231,0.5)] ${s?"opacity-75 cursor-not-allowed":""}`,children:[l.jsx("span",{children:s?o.searching:o.findLicense}),s&&l.jsxs("svg",{className:"w-5 h-5 ml-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[l.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),l.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})]}),c&&l.jsxs("div",{className:"mt-8",children:[l.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-100 dark:border-green-800 text-left",children:[l.jsxs("p",{className:"text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center",children:[l.jsx("svg",{className:"w-4 h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),o.licenseFound]}),l.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-green-100 dark:border-green-800 rounded-lg p-3 flex items-center justify-between",children:[l.jsx("code",{className:"font-mono text-sm text-gray-800 dark:text-gray-200 break-all select-all",children:c.licenseKey}),l.jsx("button",{onClick:h,className:"ml-3 text-sm font-bold text-[#5423e7] hover:text-purple-600 uppercase tracking-wider",children:v?o.copied:o.copy})]}),l.jsxs("p",{className:"text-xs text-green-600 dark:text-green-400 mt-3",children:[o.status,": ",l.jsx("span",{className:"font-medium",children:c.status})]})]}),l.jsxs("a",{href:`reso://activate?key=${encodeURIComponent(c.licenseKey)}`,className:"block mt-6 font-medium hover:underline text-[#5423e7]",children:[o.openApp," →"]})]}),d&&l.jsxs("div",{className:"mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl text-sm text-left",children:[l.jsxs("span",{className:"font-bold",children:[o.error,":"]})," ",l.jsx("span",{children:d})]}),l.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-100 dark:border-gray-800",children:[l.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:[o.needHelp," ",l.jsx(Ee,{to:"/contact",className:"underline hover:opacity-70 transition-opacity text-[#5423e7]",children:o.contactSupport})]}),l.jsxs("div",{className:"mt-6 flex items-center justify-center gap-4",children:[l.jsx("button",{onClick:()=>t("light"),className:"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Switch to light mode",children:l.jsx(Td,{size:14,className:e==="light"?"text-amber-500":""})}),l.jsx("button",{onClick:()=>t("dark"),className:"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Switch to dark mode",children:l.jsx(Pd,{size:14,className:e==="dark"?"text-blue-400":""})}),l.jsxs("div",{className:"relative",children:[l.jsx(Cd,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"}),l.jsx("select",{value:n,onChange:k=>r(k.target.value),"aria-label":"Language",className:"appearance-none bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 text-xs rounded-full pl-8 pr-7 py-1.5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 cursor-pointer",children:oy.map(k=>l.jsx("option",{value:k.value,children:k.label},k.value))}),l.jsx(El,{size:12,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"})]})]})]})]})})]})};function ay(){return l.jsxs(l.Fragment,{children:[l.jsx(gg,{}),l.jsx(Ng,{}),l.jsx(Ig,{})]})}function ly(){const e=Ue();return y.useEffect(()=>{if(!e.hash)return;const t=e.hash.slice(1),n=()=>{const o=document.getElementById(t);return o?(o.scrollIntoView({block:"start"}),!0):!1};if(n())return;const r=window.setTimeout(n,80);return()=>window.clearTimeout(r)},[e.pathname,e.hash]),null}function sy({isScrolled:e}){return l.jsxs("div",{className:"min-h-screen grid-paper-bg text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-brand-primary/30 scroll-smooth overflow-x-hidden",children:[l.jsx(ly,{}),l.jsx(sg,{isScrolled:e}),l.jsx(dm,{}),l.jsx(Eg,{})]})}function uy(){const[e,t]=y.useState(!1);return y.useEffect(()=>{const n=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),l.jsx(_m,{children:l.jsxs(fm,{children:[l.jsx(Me,{path:"/retrieve",element:l.jsx(iy,{})}),l.jsxs(Me,{element:l.jsx(sy,{isScrolled:e}),children:[l.jsx(Me,{index:!0,element:l.jsx(ay,{})}),l.jsx(Me,{path:"pricing",element:l.jsx(Pg,{})}),l.jsx(Me,{path:"discover",element:l.jsx(Ug,{})}),l.jsx(Me,{path:"marketplace",element:l.jsx(Wg,{})}),l.jsx(Me,{path:"docs",element:l.jsx(Lg,{})}),l.jsx(Me,{path:"build-journey",element:l.jsx(ey,{})}),l.jsx(Me,{path:"build-blocks",element:l.jsx(ty,{})}),l.jsx(Me,{path:"contact",element:l.jsx(_g,{})})]})]})})}Ti.createRoot(document.getElementById("root")).render(l.jsx(lu.StrictMode,{children:l.jsx(og,{children:l.jsx(uy,{})})}));export{Ko as _,l as j,y as r};
