(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ld(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hs={exports:{}},Ii={},Vs={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Na=Symbol.iterator;function $d(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ys=Object.assign,qs={};function kn(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Gs}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=kn.prototype;function jl(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Gs}var Nl=jl.prototype=new Ks;Nl.constructor=jl;Ys(Nl,kn.prototype);Nl.isPureReactComponent=!0;var Ca=Array.isArray,Qs=Object.prototype.hasOwnProperty,Cl={current:null},Js={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Qs.call(t,r)&&!Js.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:mr,type:e,key:o,ref:l,props:i,_owner:Cl.current}}function Hd(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function Vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ra=/\/+/g;function Qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):t.toString(36)}function $r(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mr:case zd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Qi(l,0):r,Ca(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),$r(i,t,n,"",function(c){return c})):i!=null&&(Rl(i)&&(i=Hd(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ca(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Qi(o,s);l+=$r(o,t,n,u,i)}else if(u=$d(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Qi(o,s++),l+=$r(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Nr(e,t,n){if(e==null)return e;var r=[],i=0;return $r(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Hr={transition:null},Yd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:Cl};function Zs(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!Rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=kn;z.Fragment=Md;z.Profiler=_d;z.PureComponent=jl;z.StrictMode=Ad;z.Suspense=Bd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;z.act=Zs;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ys({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Cl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Qs.call(t,u)&&!Js.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:mr,type:e.type,key:i,ref:o,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};z.createElement=Xs;z.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Fd,render:e}};z.isValidElement=Rl;z.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Gd}};z.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};z.unstable_act=Zs;z.useCallback=function(e,t){return de.current.useCallback(e,t)};z.useContext=function(e){return de.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return de.current.useDeferredValue(e)};z.useEffect=function(e,t){return de.current.useEffect(e,t)};z.useId=function(){return de.current.useId()};z.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return de.current.useMemo(e,t)};z.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};z.useRef=function(e){return de.current.useRef(e)};z.useState=function(e){return de.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return de.current.useTransition()};z.version="18.3.1";Vs.exports=z;var y=Vs.exports;const eu=Ld(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=y,Kd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Jd=Object.prototype.hasOwnProperty,Xd=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jd.call(t,r)&&!Zd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Kd,type:e,key:o,ref:l,props:i,_owner:Xd.current}}Ii.Fragment=Qd;Ii.jsx=tu;Ii.jsxs=tu;Hs.exports=Ii;var a=Hs.exports,Ro={},nu={exports:{}},je={},ru={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,T){var L=I.length;I.push(T);e:for(;0<L;){var G=L-1>>>1,J=I[G];if(0<i(J,T))I[G]=T,I[L]=J,L=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var T=I[0],L=I.pop();if(L!==T){I[0]=L;e:for(var G=0,J=I.length,Sr=J>>>1;G<Sr;){var Pt=2*(G+1)-1,Ki=I[Pt],Tt=Pt+1,jr=I[Tt];if(0>i(Ki,L))Tt<J&&0>i(jr,Ki)?(I[G]=jr,I[Tt]=L,G=Tt):(I[G]=Ki,I[Pt]=L,G=Pt);else if(Tt<J&&0>i(jr,L))I[G]=jr,I[Tt]=L,G=Tt;else break e}}return T}function i(I,T){var L=I.sortIndex-T.sortIndex;return L!==0?L:I.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,g=null,f=3,x=!1,b=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=I)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function k(I){if(v=!1,m(I),!b)if(n(u)!==null)b=!0,Rn(j);else{var T=n(c);T!==null&&qi(k,T.startTime-I)}}function j(I,T){b=!1,v&&(v=!1,p(E),E=-1),x=!0;var L=f;try{for(m(T),g=n(u);g!==null&&(!(g.expirationTime>T)||I&&!he());){var G=g.callback;if(typeof G=="function"){g.callback=null,f=g.priorityLevel;var J=G(g.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),m(T)}else r(u);g=n(u)}if(g!==null)var Sr=!0;else{var Pt=n(c);Pt!==null&&qi(k,Pt.startTime-T),Sr=!1}return Sr}finally{g=null,f=L,x=!1}}var S=!1,C=null,E=-1,M=5,P=-1;function he(){return!(e.unstable_now()-P<M)}function st(){if(C!==null){var I=e.unstable_now();P=I;var T=!0;try{T=C(!0,I)}finally{T?ut():(S=!1,C=null)}}else S=!1}var ut;if(typeof d=="function")ut=function(){d(st)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,Yi=Cn.port2;Cn.port1.onmessage=st,ut=function(){Yi.postMessage(null)}}else ut=function(){w(st,0)};function Rn(I){C=I,S||(S=!0,ut())}function qi(I,T){E=w(function(){I(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,Rn(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var L=f;f=T;try{return I()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,T){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=f;f=I;try{return T()}finally{f=L}},e.unstable_scheduleCallback=function(I,T,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,I={id:h++,callback:T,priorityLevel:I,startTime:L,expirationTime:J,sortIndex:-1},L>G?(I.sortIndex=L,t(c,I),n(u)===null&&I===n(c)&&(v?(p(E),E=-1):v=!0,qi(k,L-G))):(I.sortIndex=J,t(u,I),b||x||(b=!0,Rn(j))),I},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(I){var T=f;return function(){var L=f;f=T;try{return I.apply(this,arguments)}finally{f=L}}}})(iu);ru.exports=iu;var ef=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=y,Se=ef;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,Jn={};function Ht(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)ou.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eo=Object.prototype.hasOwnProperty,nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ea={},Ia={};function rf(e){return Eo.call(Ia,e)?!0:Eo.call(Ea,e)?!1:nf.test(e)?Ia[e]=!0:(Ea[e]=!0,!1)}function of(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lf(e,t,n,r){if(t===null||typeof t>"u"||of(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var El=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(El,Il);ne[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(El,Il);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(El,Il);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pl(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lf(t,n,i,r)&&(n=null),r||i===null?rf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Io=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),au=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),Po=Symbol.for("react.suspense"),To=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ji;function Dn(e){if(Ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||""}return`
`+Ji+e}var Xi=!1;function Zi(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function af(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function Lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case qt:return"Portal";case Io:return"Profiler";case Tl:return"StrictMode";case Po:return"Suspense";case To:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case au:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:Lo(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Lo(e(t))}catch{}}return null}function sf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lo(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=uf(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function du(e,t){t=t.checked,t!=null&&Pl(e,"checked",t,!1)}function Mo(e,t){du(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ao(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ao(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ao(e,t,n){(t!=="number"||ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _o(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Fn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function fu(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cf=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var df=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,t){if(t){if(df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,un=null,cn=null;function Aa(e){if(e=xr(e)){if(typeof Wo!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Mi(t),Wo(e.stateNode,e.type,t))}}function yu(e){un?cn?cn.push(e):cn=[e]:un=e}function xu(){if(un){var e=un,t=cn;if(cn=un=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function vu(e,t){return e(t)}function wu(){}var eo=!1;function ku(e,t,n){if(eo)return e(t,n);eo=!0;try{return vu(e,t,n)}finally{eo=!1,(un!==null||cn!==null)&&(wu(),xu())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Uo=!1;if(tt)try{var In={};Object.defineProperty(In,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Uo=!1}function ff(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var $n=!1,ii=null,oi=!1,$o=null,hf={onError:function(e){$n=!0,ii=e}};function pf(e,t,n,r,i,o,l,s,u){$n=!1,ii=null,ff.apply(hf,arguments)}function mf(e,t,n,r,i,o,l,s,u){if(pf.apply(this,arguments),$n){if($n){var c=ii;$n=!1,ii=null}else throw Error(N(198));oi||(oi=!0,$o=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _a(e){if(Vt(e)!==e)throw Error(N(188))}function gf(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _a(i),e;if(o===r)return _a(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Su(e){return e=gf(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Nu=Se.unstable_scheduleCallback,Oa=Se.unstable_cancelCallback,yf=Se.unstable_shouldYield,xf=Se.unstable_requestPaint,Y=Se.unstable_now,vf=Se.unstable_getCurrentPriorityLevel,Al=Se.unstable_ImmediatePriority,Cu=Se.unstable_UserBlockingPriority,li=Se.unstable_NormalPriority,wf=Se.unstable_LowPriority,Ru=Se.unstable_IdlePriority,Pi=null,Ge=null;function kf(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:jf,bf=Math.log,Sf=Math.LN2;function jf(e){return e>>>=0,e===0?32:31-(bf(e)/Sf|0)|0}var Ir=64,Pr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Bn(s):(o&=l,o!==0&&(r=Bn(o)))}else l=n&~i,l!==0?r=Bn(l):o!==0&&(r=Bn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function Nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Fe(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Nf(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function to(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Rf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _l(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Ol,Tu,Lu,zu,Vo=!1,Tr=[],yt=null,xt=null,vt=null,er=new Map,tr=new Map,ht=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Pn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xr(t),t!==null&&Ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function If(e,t,n,r,i){switch(t){case"focusin":return yt=Pn(yt,e,t,n,r,i),!0;case"dragenter":return xt=Pn(xt,e,t,n,r,i),!0;case"mouseover":return vt=Pn(vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return er.set(o,Pn(er.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,tr.set(o,Pn(tr.get(o)||null,e,t,n,r,i)),!0}return!1}function Mu(e){var t=Mt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,zu(e.priority,function(){Tu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=xr(n),t!==null&&Ol(t),e.blockedOn=n,!1;t.shift()}return!0}function Fa(e,t,n){Vr(e)&&n.delete(t)}function Pf(){Vo=!1,yt!==null&&Vr(yt)&&(yt=null),xt!==null&&Vr(xt)&&(xt=null),vt!==null&&Vr(vt)&&(vt=null),er.forEach(Fa),tr.forEach(Fa)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vo||(Vo=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Pf)))}function nr(e){function t(i){return Tn(i,e)}if(0<Tr.length){Tn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Tn(yt,e),xt!==null&&Tn(xt,e),vt!==null&&Tn(vt,e),er.forEach(t),tr.forEach(t),n=0;n<ht.length;n++)r=ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)Mu(n),n.blockedOn===null&&ht.shift()}var dn=lt.ReactCurrentBatchConfig,si=!0;function Tf(e,t,n,r){var i=_,o=dn.transition;dn.transition=null;try{_=1,Dl(e,t,n,r)}finally{_=i,dn.transition=o}}function Lf(e,t,n,r){var i=_,o=dn.transition;dn.transition=null;try{_=4,Dl(e,t,n,r)}finally{_=i,dn.transition=o}}function Dl(e,t,n,r){if(si){var i=Go(e,t,n,r);if(i===null)fo(e,t,r,ui,n),Da(e,r);else if(If(i,e,t,n,r))r.stopPropagation();else if(Da(e,r),t&4&&-1<Ef.indexOf(e)){for(;i!==null;){var o=xr(i);if(o!==null&&Pu(o),o=Go(e,t,n,r),o===null&&fo(e,t,r,ui,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fo(e,t,r,null,n)}}var ui=null;function Go(e,t,n,r){if(ui=null,e=Ml(r),e=Mt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vf()){case Al:return 1;case Cu:return 4;case li:case wf:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var mt=null,Fl=null,Gr=null;function _u(){if(Gr)return Gr;var e,t=Fl,n=t.length,r,i="value"in mt?mt.value:mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Gr=i.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function Ba(){return!1}function Ne(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Lr:Ba,this.isPropagationStopped=Ba,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Ne(bn),yr=H({},bn,{view:0,detail:0}),zf=Ne(yr),no,ro,Ln,Ti=H({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(no=e.screenX-Ln.screenX,ro=e.screenY-Ln.screenY):ro=no=0,Ln=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),Wa=Ne(Ti),Mf=H({},Ti,{dataTransfer:0}),Af=Ne(Mf),_f=H({},yr,{relatedTarget:0}),io=Ne(_f),Of=H({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=Ne(Of),Ff=H({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Ne(Ff),Wf=H({},bn,{data:0}),Ua=Ne(Wf),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hf[e])?!!t[e]:!1}function Wl(){return Vf}var Gf=H({},yr,{key:function(e){if(e.key){var t=Uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yf=Ne(Gf),qf=H({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$a=Ne(qf),Kf=H({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Qf=Ne(Kf),Jf=H({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xf=Ne(Jf),Zf=H({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eh=Ne(Zf),th=[9,13,27,32],Ul=tt&&"CompositionEvent"in window,Hn=null;tt&&"documentMode"in document&&(Hn=document.documentMode);var nh=tt&&"TextEvent"in window&&!Hn,Ou=tt&&(!Ul||Hn&&8<Hn&&11>=Hn),Ha=" ",Va=!1;function Du(e,t){switch(e){case"keyup":return th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function rh(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Va=!0,Ha);case"textInput":return e=t.data,e===Ha&&Va?null:e;default:return null}}function ih(e,t){if(Qt)return e==="compositionend"||!Ul&&Du(e,t)?(e=_u(),Gr=Fl=mt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oh[e.type]:t==="textarea"}function Bu(e,t,n,r){yu(r),t=ci(t,"onChange"),0<t.length&&(n=new Bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,rr=null;function lh(e){Ju(e,0)}function Li(e){var t=Zt(e);if(cu(t))return e}function ah(e,t){if(e==="change")return t}var Wu=!1;if(tt){var oo;if(tt){var lo="oninput"in document;if(!lo){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),lo=typeof Ya.oninput=="function"}oo=lo}else oo=!1;Wu=oo&&(!document.documentMode||9<document.documentMode)}function qa(){Vn&&(Vn.detachEvent("onpropertychange",Uu),rr=Vn=null)}function Uu(e){if(e.propertyName==="value"&&Li(rr)){var t=[];Bu(t,rr,e,Ml(e)),ku(lh,t)}}function sh(e,t,n){e==="focusin"?(qa(),Vn=t,rr=n,Vn.attachEvent("onpropertychange",Uu)):e==="focusout"&&qa()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(rr)}function ch(e,t){if(e==="click")return Li(t)}function dh(e,t){if(e==="input"||e==="change")return Li(t)}function fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:fh;function ir(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eo.call(t,i)||!We(e[i],t[i]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qa(e,t){var n=Ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ka(n)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hh(e){var t=Hu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$u(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qa(n,o);var l=Qa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ph=tt&&"documentMode"in document&&11>=document.documentMode,Jt=null,Yo=null,Gn=null,qo=!1;function Ja(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qo||Jt==null||Jt!==ri(r)||(r=Jt,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ir(Gn,r)||(Gn=r,r=ci(Yo,"onSelect"),0<r.length&&(t=new Bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jt)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},ao={},Vu={};tt&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function zi(e){if(ao[e])return ao[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vu)return ao[e]=t[n];return e}var Gu=zi("animationend"),Yu=zi("animationiteration"),qu=zi("animationstart"),Ku=zi("transitionend"),Qu=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Qu.set(e,t),Ht(t,[e])}for(var so=0;so<Xa.length;so++){var uo=Xa[so],mh=uo.toLowerCase(),gh=uo[0].toUpperCase()+uo.slice(1);Rt(mh,"on"+gh)}Rt(Gu,"onAnimationEnd");Rt(Yu,"onAnimationIteration");Rt(qu,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Ku,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mf(r,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Za(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Za(i,s,c),o=u}}}if(oi)throw e=$o,oi=!1,$o=null,e}function D(e,t){var n=t[Zo];n===void 0&&(n=t[Zo]=new Set);var r=e+"__bubble";n.has(r)||(Xu(t,e,2,!1),n.add(r))}function co(e,t,n){var r=0;t&&(r|=4),Xu(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Mr]){e[Mr]=!0,ou.forEach(function(n){n!=="selectionchange"&&(yh.has(n)||co(n,!1,e),co(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,co("selectionchange",!1,t))}}function Xu(e,t,n,r){switch(Au(t)){case 1:var i=Tf;break;case 4:i=Lf;break;default:i=Dl}n=i.bind(null,t,n,e),i=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Mt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}ku(function(){var c=o,h=Ml(n),g=[];e:{var f=Qu.get(e);if(f!==void 0){var x=Bl,b=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":x=Yf;break;case"focusin":b="focus",x=io;break;case"focusout":b="blur",x=io;break;case"beforeblur":case"afterblur":x=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Qf;break;case Gu:case Yu:case qu:x=Df;break;case Ku:x=Xf;break;case"scroll":x=zf;break;case"wheel":x=eh;break;case"copy":case"cut":case"paste":x=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$a}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=c,m;d!==null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=Zn(d,p),k!=null&&v.push(lr(d,k,m)))),w)break;d=d.return}0<v.length&&(f=new x(f,b,null,n,h),g.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==Bo&&(b=n.relatedTarget||n.fromElement)&&(Mt(b)||b[nt]))break e;if((x||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=c,b=b?Mt(b):null,b!==null&&(w=Vt(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=c),x!==b)){if(v=Wa,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=$a,k="onPointerLeave",p="onPointerEnter",d="pointer"),w=x==null?f:Zt(x),m=b==null?f:Zt(b),f=new v(k,d+"leave",x,n,h),f.target=w,f.relatedTarget=m,k=null,Mt(h)===c&&(v=new v(p,d+"enter",b,n,h),v.target=m,v.relatedTarget=w,k=v),w=k,x&&b)t:{for(v=x,p=b,d=0,m=v;m;m=Gt(m))d++;for(m=0,k=p;k;k=Gt(k))m++;for(;0<d-m;)v=Gt(v),d--;for(;0<m-d;)p=Gt(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Gt(v),p=Gt(p)}v=null}else v=null;x!==null&&es(g,f,x,v,!1),b!==null&&w!==null&&es(g,w,b,v,!0)}}e:{if(f=c?Zt(c):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var j=ah;else if(Ga(f))if(Wu)j=dh;else{j=uh;var S=sh}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=ch);if(j&&(j=j(e,c))){Bu(g,j,n,h);break e}S&&S(e,f,c),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Ao(f,"number",f.value)}switch(S=c?Zt(c):window,e){case"focusin":(Ga(S)||S.contentEditable==="true")&&(Jt=S,Yo=c,Gn=null);break;case"focusout":Gn=Yo=Jt=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Ja(g,n,h);break;case"selectionchange":if(ph)break;case"keydown":case"keyup":Ja(g,n,h)}var C;if(Ul)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qt?Du(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ou&&n.locale!=="ko"&&(Qt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qt&&(C=_u()):(mt=h,Fl="value"in mt?mt.value:mt.textContent,Qt=!0)),S=ci(c,E),0<S.length&&(E=new Ua(E,e,null,n,h),g.push({event:E,listeners:S}),C?E.data=C:(C=Fu(n),C!==null&&(E.data=C)))),(C=nh?rh(e,n):ih(e,n))&&(c=ci(c,"onBeforeInput"),0<c.length&&(h=new Ua("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=C))}Ju(g,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zn(e,n),o!=null&&r.unshift(lr(e,o,i)),o=Zn(e,t),o!=null&&r.push(lr(e,o,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function es(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Zn(n,o),u!=null&&l.unshift(lr(n,u,s))):i||(u=Zn(n,o),u!=null&&l.push(lr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function ts(e){return(typeof e=="string"?e:""+e).replace(xh,`
`).replace(vh,"")}function Ar(e,t,n){if(t=ts(t),ts(e)!==t&&n)throw Error(N(425))}function di(){}var Ko=null,Qo=null;function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,ns=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof ns<"u"?function(e){return ns.resolve(null).then(e).catch(bh)}:Xo;function bh(e){setTimeout(function(){throw e})}function ho(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Sn,ar="__reactProps$"+Sn,nt="__reactContainer$"+Sn,Zo="__reactEvents$"+Sn,Sh="__reactListeners$"+Sn,jh="__reactHandles$"+Sn;function Mt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rs(e);e!==null;){if(n=e[Ve])return n;e=rs(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[Ve]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Mi(e){return e[ar]||null}var el=[],en=-1;function Et(e){return{current:e}}function F(e){0>en||(e.current=el[en],el[en]=null,en--)}function O(e,t){en++,el[en]=e.current,e.current=t}var Ct={},le=Et(Ct),ge=Et(!1),Ft=Ct;function mn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function fi(){F(ge),F(le)}function is(e,t,n){if(le.current!==Ct)throw Error(N(168));O(le,t),O(ge,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,sf(e)||"Unknown",i));return H({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Ft=le.current,O(le,e),O(ge,ge.current),!0}function os(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Zu(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,F(ge),F(le),O(le,e)):F(ge),O(ge,n)}var Qe=null,Ai=!1,po=!1;function ec(e){Qe===null?Qe=[e]:Qe.push(e)}function Nh(e){Ai=!0,ec(e)}function It(){if(!po&&Qe!==null){po=!0;var e=0,t=_;try{var n=Qe;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Ai=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),Nu(Al,It),i}finally{_=t,po=!1}}return null}var tn=[],nn=0,pi=null,mi=0,Ce=[],Re=0,Bt=null,Je=1,Xe="";function Lt(e,t){tn[nn++]=mi,tn[nn++]=pi,pi=e,mi=t}function tc(e,t,n){Ce[Re++]=Je,Ce[Re++]=Xe,Ce[Re++]=Bt,Bt=e;var r=Je;e=Xe;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Fe(t)+i|n<<i|r,Xe=o+e}else Je=1<<o|n<<i|r,Xe=e}function Hl(e){e.return!==null&&(Lt(e,1),tc(e,1,0))}function Vl(e){for(;e===pi;)pi=tn[--nn],tn[nn]=null,mi=tn[--nn],tn[nn]=null;for(;e===Bt;)Bt=Ce[--Re],Ce[Re]=null,Xe=Ce[--Re],Ce[Re]=null,Je=Ce[--Re],Ce[Re]=null}var be=null,ke=null,B=!1,De=null;function nc(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ke=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Je,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ke=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(B){var t=ke;if(t){var n=t;if(!ls(e,t)){if(tl(e))throw Error(N(418));t=wt(n.nextSibling);var r=be;t&&ls(e,t)?nc(r,n):(e.flags=e.flags&-4097|2,B=!1,be=e)}}else{if(tl(e))throw Error(N(418));e.flags=e.flags&-4097|2,B=!1,be=e}}}function as(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function _r(e){if(e!==be)return!1;if(!B)return as(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jo(e.type,e.memoizedProps)),t&&(t=ke)){if(tl(e))throw rc(),Error(N(418));for(;t;)nc(e,t),t=wt(t.nextSibling)}if(as(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=be?wt(e.stateNode.nextSibling):null;return!0}function rc(){for(var e=ke;e;)e=wt(e.nextSibling)}function gn(){ke=be=null,B=!1}function Gl(e){De===null?De=[e]:De.push(e)}var Ch=lt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ss(e){var t=e._init;return t(e._payload)}function ic(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=jt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,k){return d===null||d.tag!==6?(d=ko(m,p.mode,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,k){var j=m.type;return j===Kt?h(p,d,m.props.children,k,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&ss(j)===d.type)?(k=i(d,m.props),k.ref=zn(p,d,m),k.return=p,k):(k=ei(m.type,m.key,m.props,null,p.mode,k),k.ref=zn(p,d,m),k.return=p,k)}function c(p,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=bo(m,p.mode,k),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,k,j){return d===null||d.tag!==7?(d=Dt(m,p.mode,k,j),d.return=p,d):(d=i(d,m),d.return=p,d)}function g(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ko(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Cr:return m=ei(d.type,d.key,d.props,null,p.mode,m),m.ref=zn(p,null,d),m.return=p,m;case qt:return d=bo(d,p.mode,m),d.return=p,d;case dt:var k=d._init;return g(p,k(d._payload),m)}if(Fn(d)||En(d))return d=Dt(d,p.mode,m,null),d.return=p,d;Or(p,d)}return null}function f(p,d,m,k){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(p,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cr:return m.key===j?u(p,d,m,k):null;case qt:return m.key===j?c(p,d,m,k):null;case dt:return j=m._init,f(p,d,j(m._payload),k)}if(Fn(m)||En(m))return j!==null?null:h(p,d,m,k,null);Or(p,m)}return null}function x(p,d,m,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,s(d,p,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Cr:return p=p.get(k.key===null?m:k.key)||null,u(d,p,k,j);case qt:return p=p.get(k.key===null?m:k.key)||null,c(d,p,k,j);case dt:var S=k._init;return x(p,d,m,S(k._payload),j)}if(Fn(k)||En(k))return p=p.get(m)||null,h(d,p,k,j,null);Or(d,k)}return null}function b(p,d,m,k){for(var j=null,S=null,C=d,E=d=0,M=null;C!==null&&E<m.length;E++){C.index>E?(M=C,C=null):M=C.sibling;var P=f(p,C,m[E],k);if(P===null){C===null&&(C=M);break}e&&C&&P.alternate===null&&t(p,C),d=o(P,d,E),S===null?j=P:S.sibling=P,S=P,C=M}if(E===m.length)return n(p,C),B&&Lt(p,E),j;if(C===null){for(;E<m.length;E++)C=g(p,m[E],k),C!==null&&(d=o(C,d,E),S===null?j=C:S.sibling=C,S=C);return B&&Lt(p,E),j}for(C=r(p,C);E<m.length;E++)M=x(C,p,E,m[E],k),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),d=o(M,d,E),S===null?j=M:S.sibling=M,S=M);return e&&C.forEach(function(he){return t(p,he)}),B&&Lt(p,E),j}function v(p,d,m,k){var j=En(m);if(typeof j!="function")throw Error(N(150));if(m=j.call(m),m==null)throw Error(N(151));for(var S=j=null,C=d,E=d=0,M=null,P=m.next();C!==null&&!P.done;E++,P=m.next()){C.index>E?(M=C,C=null):M=C.sibling;var he=f(p,C,P.value,k);if(he===null){C===null&&(C=M);break}e&&C&&he.alternate===null&&t(p,C),d=o(he,d,E),S===null?j=he:S.sibling=he,S=he,C=M}if(P.done)return n(p,C),B&&Lt(p,E),j;if(C===null){for(;!P.done;E++,P=m.next())P=g(p,P.value,k),P!==null&&(d=o(P,d,E),S===null?j=P:S.sibling=P,S=P);return B&&Lt(p,E),j}for(C=r(p,C);!P.done;E++,P=m.next())P=x(C,p,E,P.value,k),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),d=o(P,d,E),S===null?j=P:S.sibling=P,S=P);return e&&C.forEach(function(st){return t(p,st)}),B&&Lt(p,E),j}function w(p,d,m,k){if(typeof m=="object"&&m!==null&&m.type===Kt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cr:e:{for(var j=m.key,S=d;S!==null;){if(S.key===j){if(j=m.type,j===Kt){if(S.tag===7){n(p,S.sibling),d=i(S,m.props.children),d.return=p,p=d;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&ss(j)===S.type){n(p,S.sibling),d=i(S,m.props),d.ref=zn(p,S,m),d.return=p,p=d;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===Kt?(d=Dt(m.props.children,p.mode,k,m.key),d.return=p,p=d):(k=ei(m.type,m.key,m.props,null,p.mode,k),k.ref=zn(p,d,m),k.return=p,p=k)}return l(p);case qt:e:{for(S=m.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=bo(m,p.mode,k),d.return=p,p=d}return l(p);case dt:return S=m._init,w(p,d,S(m._payload),k)}if(Fn(m))return b(p,d,m,k);if(En(m))return v(p,d,m,k);Or(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=ko(m,p.mode,k),d.return=p,p=d),l(p)):n(p,d)}return w}var yn=ic(!0),oc=ic(!1),gi=Et(null),yi=null,rn=null,Yl=null;function ql(){Yl=rn=yi=null}function Kl(e){var t=gi.current;F(gi),e._currentValue=t}function rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){yi=e,Yl=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Yl!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(yi===null)throw Error(N(308));rn=e,yi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var At=null;function Ql(e){At===null?At=[e]:At.push(e)}function lc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ql(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ql(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,r){var i=e.updateQueue;ft=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;l=0,h=c=u=null,s=o;do{var f=s.lane,x=s.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(f=t,x=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){g=b.call(x,g,f);break e}g=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(x,g,f):b,f==null)break e;g=H({},g,f);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,u=g):h=h.next=x,l|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ut|=l,e.lanes=l,e.memoizedState=g}}function cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var vr={},Ye=Et(vr),sr=Et(vr),ur=Et(vr);function _t(e){if(e===vr)throw Error(N(174));return e}function Xl(e,t){switch(O(ur,t),O(sr,e),O(Ye,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oo(t,e)}F(Ye),O(Ye,t)}function xn(){F(Ye),F(sr),F(ur)}function sc(e){_t(ur.current);var t=_t(Ye.current),n=Oo(t,e.type);t!==n&&(O(sr,e),O(Ye,n))}function Zl(e){sr.current===e&&(F(Ye),F(sr))}var W=Et(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=[];function ea(){for(var e=0;e<mo.length;e++)mo[e]._workInProgressVersionPrimary=null;mo.length=0}var Kr=lt.ReactCurrentDispatcher,go=lt.ReactCurrentBatchConfig,Wt=0,U=null,K=null,X=null,wi=!1,Yn=!1,cr=0,Rh=0;function re(){throw Error(N(321))}function ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function na(e,t,n,r,i,o){if(Wt=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kr.current=e===null||e.memoizedState===null?Th:Lh,e=n(r,i),Yn){o=0;do{if(Yn=!1,cr=0,25<=o)throw Error(N(301));o+=1,X=K=null,t.updateQueue=null,Kr.current=zh,e=n(r,i)}while(Yn)}if(Kr.current=ki,t=K!==null&&K.next!==null,Wt=0,X=K=U=null,wi=!1,t)throw Error(N(300));return e}function ra(){var e=cr!==0;return cr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Le(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,K=e;else{if(e===null)throw Error(N(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function dr(e,t){return typeof t=="function"?t(e):t}function yo(e){var t=Le(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((Wt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,U.lanes|=h,Ut|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,We(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,U.lanes|=o,Ut|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=Le(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);We(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uc(){}function cc(e,t){var n=U,r=Le(),i=t(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,ia(hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,fr(9,fc.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(N(349));Wt&30||dc(n,t,i)}return i}function dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fc(e,t,n,r){t.value=n,t.getSnapshot=r,pc(t)&&mc(e)}function hc(e,t,n){return n(function(){pc(t)&&mc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function mc(e){var t=rt(e,1);t!==null&&Be(t,e,1,-1)}function ds(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ph.bind(null,U,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gc(){return Le().memoizedState}function Qr(e,t,n,r){var i=He();U.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function _i(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&ta(r,l.deps)){i.memoizedState=fr(t,n,o,r);return}}U.flags|=e,i.memoizedState=fr(1|t,n,o,r)}function fs(e,t){return Qr(8390656,8,e,t)}function ia(e,t){return _i(2048,8,e,t)}function yc(e,t){return _i(4,2,e,t)}function xc(e,t){return _i(4,4,e,t)}function vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,n){return n=n!=null?n.concat([e]):null,_i(4,4,vc.bind(null,t,e),n)}function oa(){}function kc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sc(e,t,n){return Wt&21?(We(n,t)||(n=Eu(),U.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Eh(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=go.transition;go.transition={};try{e(!1),t()}finally{_=n,go.transition=r}}function jc(){return Le().memoizedState}function Ih(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nc(e))Cc(t,n);else if(n=lc(e,t,n,r),n!==null){var i=ue();Be(n,e,r,i),Rc(n,t,r)}}function Ph(e,t,n){var r=St(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Cc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,We(s,l)){var u=t.interleaved;u===null?(i.next=i,Ql(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=lc(e,t,i,r),n!==null&&(i=ue(),Be(n,e,r,i),Rc(n,t,r))}}function Nc(e){var t=e.alternate;return e===U||t!==null&&t===U}function Cc(e,t){Yn=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}var ki={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Th={readContext:Te,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ih.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:ds,useDebugValue:oa,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=ds(!1),t=e[0];return e=Eh.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,i=He();if(B){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Z===null)throw Error(N(349));Wt&30||dc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fs(hc.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=Z.identifierPrefix;if(B){var n=Xe,r=Je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:Te,useCallback:kc,useContext:Te,useEffect:ia,useImperativeHandle:wc,useInsertionEffect:yc,useLayoutEffect:xc,useMemo:bc,useReducer:yo,useRef:gc,useState:function(){return yo(dr)},useDebugValue:oa,useDeferredValue:function(e){var t=Le();return Sc(t,K.memoizedState,e)},useTransition:function(){var e=yo(dr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:cc,useId:jc,unstable_isNewReconciler:!1},zh={readContext:Te,useCallback:kc,useContext:Te,useEffect:ia,useImperativeHandle:wc,useInsertionEffect:yc,useLayoutEffect:xc,useMemo:bc,useReducer:xo,useRef:gc,useState:function(){return xo(dr)},useDebugValue:oa,useDeferredValue:function(e){var t=Le();return K===null?t.memoizedState=e:Sc(t,K.memoizedState,e)},useTransition:function(){var e=xo(dr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:cc,useId:jc,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oi={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=St(e),o=Ze(r,i);o.payload=t,n!=null&&(o.callback=n),t=kt(e,o,i),t!==null&&(Be(t,e,i,r),qr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=St(e),o=Ze(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kt(e,o,i),t!==null&&(Be(t,e,i,r),qr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=St(e),i=Ze(n,r);i.tag=2,t!=null&&(i.callback=t),t=kt(e,i,r),t!==null&&(Be(t,e,r,n),qr(t,e,r))}};function hs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(i,o):!0}function Ec(e,t,n){var r=!1,i=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(i=ye(t)?Ft:le.current,r=t.contextTypes,o=(r=r!=null)?mn(e,i):Ct),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oi.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Te(o):(o=ye(t)?Ft:le.current,i.context=mn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oi.enqueueReplaceState(i,i.state,null),xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=af(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mh=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,gl=r),ll(e,t)},n}function Pc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ll(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ll(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qh.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ys(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e)}var Ah=lt.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?oc(t,null,n,r):yn(t,e.child,n,r)}function xs(e,t,n,r,i){n=n.render;var o=t.ref;return fn(t,i),r=na(e,t,n,r,o,i),n=ra(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(B&&n&&Hl(t),t.flags|=1,se(e,t,r,i),t.child)}function vs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ha(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tc(e,t,o,r,i)):(e=ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(l,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ir(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,it(e,t,i)}return al(e,t,n,r,i)}function Lc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(ln,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(ln,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(ln,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(ln,we),we|=r;return se(e,t,i,n),t.child}function zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,i){var o=ye(n)?Ft:le.current;return o=mn(t,o),fn(t,i),n=na(e,t,n,r,o,i),r=ra(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(B&&r&&Hl(t),t.flags|=1,se(e,t,n,i),t.child)}function ws(e,t,n,r,i){if(ye(n)){var o=!0;hi(t)}else o=!1;if(fn(t,i),t.stateNode===null)Jr(e,t),Ec(t,n,r),ol(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ye(n)?Ft:le.current,c=mn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ps(t,l,r,c),ft=!1;var f=t.memoizedState;l.state=f,xi(t,r,l,i),u=t.memoizedState,s!==r||f!==u||ge.current||ft?(typeof h=="function"&&(il(t,n,h,r),u=t.memoizedState),(s=ft||hs(t,n,s,r,f,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ac(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:_e(t.type,s),l.props=c,g=t.pendingProps,f=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ye(n)?Ft:le.current,u=mn(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||f!==u)&&ps(t,l,r,u),ft=!1,f=t.memoizedState,l.state=f,xi(t,r,l,i);var b=t.memoizedState;s!==g||f!==b||ge.current||ft?(typeof x=="function"&&(il(t,n,x,r),b=t.memoizedState),(c=ft||hs(t,n,c,r,f,b,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return sl(e,t,n,r,o,i)}function sl(e,t,n,r,i,o){zc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&os(t,n,!1),it(e,t,o);r=t.stateNode,Ah.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,i&&os(t,n,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&is(e,t.context,!1),Xl(e,t.containerInfo)}function ks(e,t,n,r,i){return gn(),Gl(i),t.flags|=256,se(e,t,n,r),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,n){var r=t.pendingProps,i=W.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(W,i&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Bi(l,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cl(n),t.memoizedState=ul,e):la(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _h(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=jt(s,o):(o=Dt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?cl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ul,r}return o=e.child,e=o.sibling,r=jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&Gl(r),yn(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=vo(Error(N(422))),Dr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bi({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,l),t.child.memoizedState=cl(l),t.memoizedState=ul,o);if(!(t.mode&1))return Dr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(N(419)),r=vo(o,r,void 0),Dr(e,t,l,r)}if(s=(l&e.childLanes)!==0,me||s){if(r=Z,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rt(e,i),Be(r,e,i,-1))}return fa(),r=vo(Error(N(421))),Dr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ke=wt(i.nextSibling),be=t,B=!0,De=null,e!==null&&(Ce[Re++]=Je,Ce[Re++]=Xe,Ce[Re++]=Bt,Je=e.id,Xe=e.overflow,Bt=t),t=la(t,r.children),t.flags|=4096,t)}function bs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rl(e.return,t,n)}function wo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function _c(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wo(t,!0,n,null,o);break;case"together":wo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oh(e,t,n){switch(t.tag){case 3:Mc(t),gn();break;case 5:sc(t);break;case 1:ye(t.type)&&hi(t);break;case 4:Xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(gi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Ac(e,t,n):(O(W,W.current&1),e=it(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return it(e,t,n)}var Oc,dl,Dc,Fc;Oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_t(Ye.current);var o=null;switch(n){case"input":i=zo(e,i),r=zo(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=_o(e,i),r=_o(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}Do(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dh(e,t,n){var r=t.pendingProps;switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&fi(),ie(t),null;case 3:return r=t.stateNode,xn(),F(ge),F(le),ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(vl(De),De=null))),dl(e,t),ie(t),null;case 5:Zl(t);var i=_t(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Dc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ie(t),null}if(e=_t(Ye.current),_r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[ar]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Wn.length;i++)D(Wn[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ta(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":za(r,o),D("invalid",r)}Do(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),i=["children",""+s]):Jn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":Rr(r),La(r,o,!0);break;case"textarea":Rr(r),Ma(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=di)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ve]=t,e[ar]=r,Oc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fo(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wn.length;i++)D(Wn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Ta(e,r),i=zo(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":za(e,r),i=_o(e,r),D("invalid",e);break;default:i=r}Do(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?gu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&D("scroll",e):u!=null&&Pl(e,o,u,l))}switch(n){case"input":Rr(e),La(e,r,!1);break;case"textarea":Rr(e),Ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=_t(ur.current),_t(Ye.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ie(t),null;case 13:if(F(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ke!==null&&t.mode&1&&!(t.flags&128))rc(),gn(),t.flags|=98560,o=!1;else if(o=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Ve]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else De!==null&&(vl(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Q===0&&(Q=3):fa())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return xn(),dl(e,t),e===null&&or(t.stateNode.containerInfo),ie(t),null;case 10:return Kl(t.type._context),ie(t),null;case 17:return ye(t.type)&&fi(),ie(t),null;case 19:if(F(W),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Mn(o,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=vi(e),l!==null){for(t.flags|=128,Mn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>wn&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=vi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return ie(t),null}else 2*Y()-o.renderingStartTime>wn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Fh(e,t){switch(Vl(t),t.tag){case 1:return ye(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),F(ge),F(le),ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(F(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(W),null;case 4:return xn(),null;case 10:return Kl(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var Fr=!1,oe=!1,Bh=typeof WeakSet=="function"?WeakSet:Set,R=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ss=!1;function Wh(e,t){if(Ko=si,e=Hu(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,g=e,f=null;t:for(;;){for(var x;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)f=g,g=x;for(;;){if(g===e)break t;if(f===n&&++c===i&&(s=l),f===o&&++h===r&&(u=l),(x=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},si=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,w=b.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:_e(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){V(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Ss,Ss=!1,b}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fl(t,n,o)}i=i.next}while(i!==r)}}function Di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[ar],delete t[Zo],delete t[Sh],delete t[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var ee=null,Oe=!1;function ct(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:oe||on(n,t);case 6:var r=ee,i=Oe;ee=null,ct(e,t,n),ee=r,Oe=i,ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?ho(e.parentNode,n):e.nodeType===1&&ho(e,n),nr(e)):ho(ee,n.stateNode));break;case 4:r=ee,i=Oe,ee=n.stateNode.containerInfo,Oe=!0,ct(e,t,n),ee=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&fl(n,t,l),i=i.next}while(i!==r)}ct(e,t,n);break;case 1:if(!oe&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ct(e,t,n),oe=r):ct(e,t,n);break;default:ct(e,t,n)}}function Ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bh),t.forEach(function(r){var i=Qh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Oe=!1;break e;case 3:ee=s.stateNode.containerInfo,Oe=!0;break e;case 4:ee=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ee===null)throw Error(N(160));Uc(o,l,i),ee=null,Oe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){V(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$c(t,e),t=t.sibling}function $c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),$e(e),r&4){try{qn(3,e,e.return),Di(3,e)}catch(v){V(e,e.return,v)}try{qn(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:Me(t,e),$e(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Me(t,e),$e(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var i=e.stateNode;try{Xn(i,"")}catch(v){V(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&du(i,o),Fo(s,l);var c=Fo(s,o);for(l=0;l<u.length;l+=2){var h=u[l],g=u[l+1];h==="style"?gu(i,g):h==="dangerouslySetInnerHTML"?pu(i,g):h==="children"?Xn(i,g):Pl(i,h,g,c)}switch(s){case"input":Mo(i,o);break;case"textarea":fu(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?sn(i,!!o.multiple,x,!1):f!==!!o.multiple&&(o.defaultValue!=null?sn(i,!!o.multiple,o.defaultValue,!0):sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ar]=o}catch(v){V(e,e.return,v)}}break;case 6:if(Me(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){V(e,e.return,v)}}break;case 3:if(Me(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:Me(t,e),$e(e);break;case 13:Me(t,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ua=Y())),r&4&&Ns(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Me(t,e),oe=c):Me(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(g=R=h;R!==null;){switch(f=R,x=f.child,f.tag){case 0:case 11:case 14:case 15:qn(4,f,f.return);break;case 1:on(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){V(r,n,v)}}break;case 5:on(f,f.return);break;case 22:if(f.memoizedState!==null){Rs(g);continue}}x!==null?(x.return=f,R=x):Rs(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=mu("display",l))}catch(v){V(e,e.return,v)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(v){V(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Me(t,e),$e(e),r&4&&Ns(e);break;case 21:break;default:Me(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xn(i,""),r.flags&=-33);var o=js(e);ml(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=js(e);pl(e,s,l);break;default:throw Error(N(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e,t,n){R=e,Hc(e)}function Hc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||oe;s=Fr;var c=oe;if(Fr=l,(oe=u)&&!c)for(R=i;R!==null;)l=R,u=l.child,l.tag===22&&l.memoizedState!==null?Es(i):u!==null?(u.return=l,R=u):Es(i);for(;o!==null;)R=o,Hc(o),o=o.sibling;R=i,Fr=s,oe=c}Cs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Cs(e)}}function Cs(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cs(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cs(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&nr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}oe||t.flags&512&&hl(t)}catch(f){V(t,t.return,f)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Rs(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Es(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Di(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){V(t,i,u)}}var o=t.return;try{hl(t)}catch(u){V(t,o,u)}break;case 5:var l=t.return;try{hl(t)}catch(u){V(t,l,u)}}}catch(u){V(t,t.return,u)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var $h=Math.ceil,bi=lt.ReactCurrentDispatcher,aa=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,A=0,Z=null,q=null,te=0,we=0,ln=Et(0),Q=0,hr=null,Ut=0,Fi=0,sa=0,Kn=null,pe=null,ua=0,wn=1/0,Ke=null,Si=!1,gl=null,bt=null,Br=!1,gt=null,ji=0,Qn=0,yl=null,Xr=-1,Zr=0;function ue(){return A&6?Y():Xr!==-1?Xr:Xr=Y()}function St(e){return e.mode&1?A&2&&te!==0?te&-te:Ch.transition!==null?(Zr===0&&(Zr=Eu()),Zr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function Be(e,t,n,r){if(50<Qn)throw Qn=0,yl=null,Error(N(185));gr(e,n,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(Fi|=n),Q===4&&pt(e,te)),xe(e,r),n===1&&A===0&&!(t.mode&1)&&(wn=Y()+500,Ai&&It()))}function xe(e,t){var n=e.callbackNode;Cf(e,t);var r=ai(e,e===Z?te:0);if(r===0)n!==null&&Oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oa(n),t===1)e.tag===0?Nh(Is.bind(null,e)):ec(Is.bind(null,e)),kh(function(){!(A&6)&&It()}),n=null;else{switch(Iu(r)){case 1:n=Al;break;case 4:n=Cu;break;case 16:n=li;break;case 536870912:n=Ru;break;default:n=li}n=Xc(n,Vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vc(e,t){if(Xr=-1,Zr=0,A&6)throw Error(N(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=ai(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ni(e,r);else{t=r;var i=A;A|=2;var o=Yc();(Z!==e||te!==t)&&(Ke=null,wn=Y()+500,Ot(e,t));do try{Gh();break}catch(s){Gc(e,s)}while(!0);ql(),bi.current=o,A=i,q!==null?t=0:(Z=null,te=0,t=Q)}if(t!==0){if(t===2&&(i=Ho(e),i!==0&&(r=i,t=xl(e,i))),t===1)throw n=hr,Ot(e,0),pt(e,r),xe(e,Y()),n;if(t===6)pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hh(i)&&(t=Ni(e,r),t===2&&(o=Ho(e),o!==0&&(r=o,t=xl(e,o))),t===1))throw n=hr,Ot(e,0),pt(e,r),xe(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:zt(e,pe,Ke);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=ua+500-Y(),10<t)){if(ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(zt.bind(null,e,pe,Ke),t);break}zt(e,pe,Ke);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Fe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$h(r/1960))-r,10<r){e.timeoutHandle=Xo(zt.bind(null,e,pe,Ke),r);break}zt(e,pe,Ke);break;case 5:zt(e,pe,Ke);break;default:throw Error(N(329))}}}return xe(e,Y()),e.callbackNode===n?Vc.bind(null,e):null}function xl(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=pe,pe=n,t!==null&&vl(t)),e}function vl(e){pe===null?pe=e:pe.push.apply(pe,e)}function Hh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~sa,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Is(e){if(A&6)throw Error(N(327));hn();var t=ai(e,0);if(!(t&1))return xe(e,Y()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=Ho(e);r!==0&&(t=r,n=xl(e,r))}if(n===1)throw n=hr,Ot(e,0),pt(e,t),xe(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,pe,Ke),xe(e,Y()),null}function ca(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(wn=Y()+500,Ai&&It())}}function $t(e){gt!==null&&gt.tag===0&&!(A&6)&&hn();var t=A;A|=1;var n=Pe.transition,r=_;try{if(Pe.transition=null,_=1,e)return e()}finally{_=r,Pe.transition=n,A=t,!(A&6)&&It()}}function da(){we=ln.current,F(ln)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:xn(),F(ge),F(le),ea();break;case 5:Zl(r);break;case 4:xn();break;case 13:F(W);break;case 19:F(W);break;case 10:Kl(r.type._context);break;case 22:case 23:da()}n=n.return}if(Z=e,q=e=jt(e.current,null),te=we=t,Q=0,hr=null,sa=Fi=Ut=0,pe=Kn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}At=null}return e}function Gc(e,t){do{var n=q;try{if(ql(),Kr.current=ki,wi){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(Wt=0,X=K=U=null,Yn=!1,cr=0,aa.current=null,n===null||n.return===null){Q=1,hr=t,q=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=gs(l);if(x!==null){x.flags&=-257,ys(x,l,s,o,t),x.mode&1&&ms(o,c,t),t=x,u=c;var b=t.updateQueue;if(b===null){var v=new Set;v.add(u),t.updateQueue=v}else b.add(u);break e}else{if(!(t&1)){ms(o,c,t),fa();break e}u=Error(N(426))}}else if(B&&s.mode&1){var w=gs(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ys(w,l,s,o,t),Gl(vn(u,s));break e}}o=u=vn(u,s),Q!==4&&(Q=2),Kn===null?Kn=[o]:Kn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ic(o,u,t);us(o,p);break e;case 1:s=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bt===null||!bt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Pc(o,s,t);us(o,k);break e}}o=o.return}while(o!==null)}Kc(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Yc(){var e=bi.current;return bi.current=ki,e===null?ki:e}function fa(){(Q===0||Q===3||Q===2)&&(Q=4),Z===null||!(Ut&268435455)&&!(Fi&268435455)||pt(Z,te)}function Ni(e,t){var n=A;A|=2;var r=Yc();(Z!==e||te!==t)&&(Ke=null,Ot(e,t));do try{Vh();break}catch(i){Gc(e,i)}while(!0);if(ql(),A=n,bi.current=r,q!==null)throw Error(N(261));return Z=null,te=0,Q}function Vh(){for(;q!==null;)qc(q)}function Gh(){for(;q!==null&&!yf();)qc(q)}function qc(e){var t=Jc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Kc(e):q=t,aa.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,q=null;return}}else if(n=Dh(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Q===0&&(Q=5)}function zt(e,t,n){var r=_,i=Pe.transition;try{Pe.transition=null,_=1,Yh(e,t,n,r)}finally{Pe.transition=i,_=r}return null}function Yh(e,t,n,r){do hn();while(gt!==null);if(A&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rf(e,o),e===Z&&(q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,Xc(li,function(){return hn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var l=_;_=1;var s=A;A|=4,aa.current=null,Wh(e,n),$c(n,e),hh(Qo),si=!!Ko,Qo=Ko=null,e.current=n,Uh(n),xf(),A=s,_=l,Pe.transition=o}else e.current=n;if(Br&&(Br=!1,gt=e,ji=i),o=e.pendingLanes,o===0&&(bt=null),kf(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Si)throw Si=!1,e=gl,gl=null,e;return ji&1&&e.tag!==0&&hn(),o=e.pendingLanes,o&1?e===yl?Qn++:(Qn=0,yl=e):Qn=0,It(),null}function hn(){if(gt!==null){var e=Iu(ji),t=Pe.transition,n=_;try{if(Pe.transition=null,_=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,ji=0,A&6)throw Error(N(331));var i=A;for(A|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(R=c;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:qn(8,h,o)}var g=h.child;if(g!==null)g.return=h,R=g;else for(;R!==null;){h=R;var f=h.sibling,x=h.return;if(Bc(h),h===c){R=null;break}if(f!==null){f.return=x,R=f;break}R=x}}}var b=o.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Di(9,s)}}catch(j){V(s,s.return,j)}if(s===l){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if(A=i,It(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{_=n,Pe.transition=t}}return!1}function Ps(e,t,n){t=vn(n,t),t=Ic(e,t,1),e=kt(e,t,1),t=ue(),e!==null&&(gr(e,1,t),xe(e,t))}function V(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=vn(n,e),e=Pc(t,e,1),t=kt(t,e,1),e=ue(),t!==null&&(gr(t,1,e),xe(t,e));break}}t=t.return}}function qh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(Q===4||Q===3&&(te&130023424)===te&&500>Y()-ua?Ot(e,0):sa|=n),xe(e,t)}function Qc(e,t){t===0&&(e.mode&1?(t=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):t=1);var n=ue();e=rt(e,t),e!==null&&(gr(e,t,n),xe(e,n))}function Kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qc(e,n)}function Qh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Qc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Oh(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&tc(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jr(e,t),e=t.pendingProps;var i=mn(t,le.current);fn(t,n),i=na(null,t,r,e,i,n);var o=ra();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(t),i.updater=Oi,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=sl(null,t,r,!0,o,n)):(t.tag=0,B&&o&&Hl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xh(r),e=_e(r,e),i){case 0:t=al(null,t,r,e,n);break e;case 1:t=ws(null,t,r,e,n);break e;case 11:t=xs(null,t,r,e,n);break e;case 14:t=vs(null,t,r,_e(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),ws(e,t,r,i,n);case 3:e:{if(Mc(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ac(e,t),xi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vn(Error(N(423)),t),t=ks(e,t,r,n,i);break e}else if(r!==i){i=vn(Error(N(424)),t),t=ks(e,t,r,n,i);break e}else for(ke=wt(t.stateNode.containerInfo.firstChild),be=t,B=!0,De=null,n=oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===i){t=it(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return sc(t),e===null&&nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Jo(r,i)?l=null:o!==null&&Jo(r,o)&&(t.flags|=32),zc(e,t),se(e,t,l,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Ac(e,t,n);case 4:return Xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),xs(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,O(gi,r._currentValue),r._currentValue=l,o!==null)if(We(o.value,l)){if(o.children===i.children&&!ge.current){t=it(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ze(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),rl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(N(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),rl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fn(t,n),i=Te(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),vs(e,t,r,i,n);case 15:return Tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Jr(e,t),t.tag=1,ye(r)?(e=!0,hi(t)):e=!1,fn(t,n),Ec(t,r,i),ol(t,r,i,n),sl(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return Lc(e,t,n)}throw Error(N(156,t.tag))};function Xc(e,t){return Nu(e,t)}function Jh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Jh(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===zl)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ha(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kt:return Dt(n.children,i,o,t);case Tl:l=8,i|=8;break;case Io:return e=Ie(12,n,t,i|2),e.elementType=Io,e.lanes=o,e;case Po:return e=Ie(13,n,t,i),e.elementType=Po,e.lanes=o,e;case To:return e=Ie(19,n,t,i),e.elementType=To,e.lanes=o,e;case su:return Bi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:l=10;break e;case au:l=9;break e;case Ll:l=11;break e;case zl:l=14;break e;case dt:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ie(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Bi(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=su,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function bo(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pa(e,t,n,r,i,o,l,s,u){return e=new Zh(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(o),e}function ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ye(n))return Zu(e,n,t)}return t}function ed(e,t,n,r,i,o,l,s,u){return e=pa(n,r,!0,e,i,o,l,s,u),e.context=Zc(null),n=e.current,r=ue(),i=St(n),o=Ze(r,i),o.callback=t??null,kt(n,o,i),e.current.lanes=i,gr(e,i,r),xe(e,r),e}function Wi(e,t,n,r){var i=t.current,o=ue(),l=St(i);return n=Zc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(i,t,l),e!==null&&(Be(e,i,l,o),qr(e,i,l)),l}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ma(e,t){Ts(e,t),(e=e.alternate)&&Ts(e,t)}function tp(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function ga(e){this._internalRoot=e}Ui.prototype.render=ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Wi(e,t,null,null)};Ui.prototype.unmount=ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Wi(null,e,null,null)}),t[nt]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ht.length&&t!==0&&t<ht[n].priority;n++);ht.splice(n,0,e),n===0&&Mu(e)}};function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ls(){}function np(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ci(l);o.call(c)}}var l=ed(t,r,e,0,null,!1,!1,"",Ls);return e._reactRootContainer=l,e[nt]=l.current,or(e.nodeType===8?e.parentNode:e),$t(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ci(u);s.call(c)}}var u=pa(e,0,!1,null,null,!1,!1,"",Ls);return e._reactRootContainer=u,e[nt]=u.current,or(e.nodeType===8?e.parentNode:e),$t(function(){Wi(t,u,n,r)}),u}function Hi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Ci(l);s.call(u)}}Wi(t,l,e,i)}else l=np(n,t,e,i,r);return Ci(l)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(_l(t,n|1),xe(t,Y()),!(A&6)&&(wn=Y()+500,It()))}break;case 13:$t(function(){var r=rt(e,1);if(r!==null){var i=ue();Be(r,e,1,i)}}),ma(e,1)}};Ol=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ue();Be(t,e,134217728,n)}ma(e,134217728)}};Tu=function(e){if(e.tag===13){var t=St(e),n=rt(e,t);if(n!==null){var r=ue();Be(n,e,t,r)}ma(e,t)}};Lu=function(){return _};zu=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Wo=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mi(r);if(!i)throw Error(N(90));cu(r),Mo(r,i)}}}break;case"textarea":fu(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};vu=ca;wu=$t;var rp={usingClientEntryPoint:!1,Events:[xr,Zt,Mi,yu,xu,ca]},An={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ip={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Pi=Wr.inject(ip),Ge=Wr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(t))throw Error(N(200));return ep(e,t,null,n)};je.createRoot=function(e,t){if(!ya(e))throw Error(N(299));var n=!1,r="",i=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pa(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,or(e.nodeType===8?e.parentNode:e),new ga(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Su(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return $t(e)};je.hydrate=function(e,t,n){if(!$i(t))throw Error(N(200));return Hi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!ya(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=td;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ed(t,null,e,1,n??null,i,!1,o,l),e[nt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ui(t)};je.render=function(e,t,n){if(!$i(t))throw Error(N(200));return Hi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!$i(e))throw Error(N(40));return e._reactRootContainer?($t(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};je.unstable_batchedUpdates=ca;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$i(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Hi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=je;var rd=nu.exports,zs=rd;Ro.createRoot=zs.createRoot,Ro.hydrateRoot=zs.hydrateRoot;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ms="popstate";function op(e={}){function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return wl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pr(i)}return ap(t,n,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lp(){return Math.random().toString(36).substring(2,10)}function As(e,t){return{usr:e.state,key:e.key,idx:t}}function wl(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?jn(t):t,state:n,key:t&&t.key||r||lp()}}function pr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ap(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s="POP",u=null,c=h();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function h(){return(l.state||{idx:null}).idx}function g(){s="POP";let w=h(),p=w==null?null:w-c;c=w,u&&u({action:s,location:v.location,delta:p})}function f(w,p){s="PUSH";let d=wl(v.location,w,p);c=h()+1;let m=As(d,c),k=v.createHref(d);try{l.pushState(m,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}o&&u&&u({action:s,location:v.location,delta:1})}function x(w,p){s="REPLACE";let d=wl(v.location,w,p);c=h();let m=As(d,c),k=v.createHref(d);l.replaceState(m,"",k),o&&u&&u({action:s,location:v.location,delta:0})}function b(w){return sp(w)}let v={get action(){return s},get location(){return e(i,l)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ms,g),u=w,()=>{i.removeEventListener(Ms,g),u=null}},createHref(w){return t(i,w)},createURL:b,encodeLocation(w){let p=b(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:x,go(w){return l.go(w)}};return v}function sp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:pr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function id(e,t,n="/"){return up(e,t,n,!1)}function up(e,t,n,r){let i=typeof t=="string"?jn(t):t,o=ot(i.pathname||"/",n);if(o==null)return null;let l=od(e);cp(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=kp(o);s=vp(l[u],c,r)}return s}function od(e,t=[],n=[],r="",i=!1){let o=(l,s,u=i,c)=>{let h={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&u)return;$(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let g=et([r,h.relativePath]),f=n.concat(h);l.children&&l.children.length>0&&($(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),od(l.children,t,f,g,u)),!(l.path==null&&!l.index)&&t.push({path:g,score:yp(g,l.index),routesMeta:f})};return e.forEach((l,s)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,s);else for(let c of ld(l.path))o(l,s,!0,c)}),t}function ld(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ld(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var dp=/^:[\w-]+$/,fp=3,hp=2,pp=1,mp=10,gp=-2,_s=e=>e==="*";function yp(e,t){let n=e.split("/"),r=n.length;return n.some(_s)&&(r+=gp),t&&(r+=hp),n.filter(i=>!_s(i)).reduce((i,o)=>i+(dp.test(o)?fp:o===""?pp:mp),r)}function xp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vp(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",g=Ri({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),f=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=Ri({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!g)return null;Object.assign(i,g.params),l.push({params:i,pathname:et([o,g.pathname]),pathnameBase:Np(et([o,g.pathnameBase])),route:f}),g.pathnameBase!=="/"&&(o=et([o,g.pathnameBase]))}return l}function Ri(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:g},f)=>{if(h==="*"){let b=s[f]||"";l=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const x=s[f];return g&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function wp(e,t=!1,n=!0){qe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ot(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Sp(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jn(e):e,o;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?o=Os(n.substring(1),"/"):o=Os(n,t)):o=t,{pathname:o,search:Cp(r),hash:Rp(i)}}function Os(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function So(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ad(e){let t=jp(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function sd(e,t,n,r=!1){let i;typeof e=="string"?i=jn(e):(i={...e},$(!i.pathname||!i.pathname.includes("?"),So("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),So("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),So("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let g=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),g-=1;i.pathname=f.join("/")}s=g>=0?t[g]:"/"}let u=Sp(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}var et=e=>e.join("/").replace(/\/\/+/g,"/"),Np=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ep=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ip(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Pp(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ud=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function cd(e,t){let n=e;if(typeof n!="string"||!bp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ud)try{let o=new URL(window.location.href),l=n.startsWith("//")?new URL(o.protocol+n):new URL(n),s=ot(l.pathname,t);l.origin===o.origin&&s!=null?n=s+l.search+l.hash:i=!0}catch{qe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dd=["POST","PUT","PATCH","DELETE"];new Set(dd);var Tp=["GET",...dd];new Set(Tp);var Nn=y.createContext(null);Nn.displayName="DataRouter";var Vi=y.createContext(null);Vi.displayName="DataRouterState";var Lp=y.createContext(!1),fd=y.createContext({isTransitioning:!1});fd.displayName="ViewTransition";var zp=y.createContext(new Map);zp.displayName="Fetchers";var Mp=y.createContext(null);Mp.displayName="Await";var ze=y.createContext(null);ze.displayName="Navigation";var wr=y.createContext(null);wr.displayName="Location";var at=y.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var xa=y.createContext(null);xa.displayName="RouteError";var hd="REACT_ROUTER_ERROR",Ap="REDIRECT",_p="ROUTE_ERROR_RESPONSE";function Op(e){if(e.startsWith(`${hd}:${Ap}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Dp(e){if(e.startsWith(`${hd}:${_p}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Ep(t.status,t.statusText,t.data)}catch{}}function Fp(e,{relative:t}={}){$(kr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(ze),{hash:i,pathname:o,search:l}=br(e,{relative:t}),s=o;return n!=="/"&&(s=o==="/"?n:et([n,o])),r.createHref({pathname:s,search:l,hash:i})}function kr(){return y.useContext(wr)!=null}function Ue(){return $(kr(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(wr).location}var pd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function md(e){y.useContext(ze).static||y.useLayoutEffect(e)}function Bp(){let{isDataRoute:e}=y.useContext(at);return e?Zp():Wp()}function Wp(){$(kr(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(Nn),{basename:t,navigator:n}=y.useContext(ze),{matches:r}=y.useContext(at),{pathname:i}=Ue(),o=JSON.stringify(ad(r)),l=y.useRef(!1);return md(()=>{l.current=!0}),y.useCallback((u,c={})=>{if(qe(l.current,pd),!l.current)return;if(typeof u=="number"){n.go(u);return}let h=sd(u,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:et([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,o,i,e])}y.createContext(null);function br(e,{relative:t}={}){let{matches:n}=y.useContext(at),{pathname:r}=Ue(),i=JSON.stringify(ad(n));return y.useMemo(()=>sd(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Up(e,t){return gd(e,t)}function gd(e,t,n,r,i){var d;$(kr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=y.useContext(ze),{matches:l}=y.useContext(at),s=l[l.length-1],u=s?s.params:{},c=s?s.pathname:"/",h=s?s.pathnameBase:"/",g=s&&s.route;{let m=g&&g.path||"";xd(c,!g||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Ue(),x;if(t){let m=typeof t=="string"?jn(t):t;$(h==="/"||((d=m.pathname)==null?void 0:d.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${m.pathname}" was given in the \`location\` prop.`),x=m}else x=f;let b=x.pathname||"/",v=b;if(h!=="/"){let m=h.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(m.length).join("/")}let w=id(e,{pathname:v});qe(g||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),qe(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=Yp(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},u,m.params),pathname:et([h,o.encodeLocation?o.encodeLocation(m.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?h:et([h,o.encodeLocation?o.encodeLocation(m.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),l,n,r,i);return t&&p?y.createElement(wr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},p):p}function $p(){let e=Xp(),t=Ip(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:o},"ErrorBoundary")," or"," ",y.createElement("code",{style:o},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,l)}var Hp=y.createElement($p,null),yd=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Dp(e.digest);n&&(e=n)}let t=e!==void 0?y.createElement(at.Provider,{value:this.props.routeContext},y.createElement(xa.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(Vp,{error:e},t):t}};yd.contextType=Lp;var jo=new WeakMap;function Vp({children:e,error:t}){let{basename:n}=y.useContext(ze);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Op(t.digest);if(r){let i=jo.get(t);if(i)throw i;let o=cd(r.location,n);if(ud&&!jo.get(t))if(o.isExternal||r.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:r.replace}));throw jo.set(t,l),l}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function Gp({routeContext:e,match:t,children:n}){let r=y.useContext(Nn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(at.Provider,{value:e},n)}function Yp(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let h=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);$(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,u=-1;if(n)for(let h=0;h<o.length;h++){let g=o[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(u=h),g.route.id){let{loaderData:f,errors:x}=n,b=g.route.loader&&!f.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||b){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}let c=n&&r?(h,g)=>{var f,x;r(h,{location:n.location,params:((x=(f=n.matches)==null?void 0:f[0])==null?void 0:x.params)??{},unstable_pattern:Pp(n.matches),errorInfo:g})}:void 0;return o.reduceRight((h,g,f)=>{let x,b=!1,v=null,w=null;n&&(x=l&&g.route.id?l[g.route.id]:void 0,v=g.route.errorElement||Hp,s&&(u<0&&f===0?(xd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,w=null):u===f&&(b=!0,w=g.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,f+1)),d=()=>{let m;return x?m=v:b?m=w:g.route.Component?m=y.createElement(g.route.Component,null):g.route.element?m=g.route.element:m=h,y.createElement(Gp,{match:g,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(g.route.ErrorBoundary||g.route.errorElement||f===0)?y.createElement(yd,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):d()},null)}function va(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qp(e){let t=y.useContext(Nn);return $(t,va(e)),t}function Kp(e){let t=y.useContext(Vi);return $(t,va(e)),t}function Qp(e){let t=y.useContext(at);return $(t,va(e)),t}function wa(e){let t=Qp(e),n=t.matches[t.matches.length-1];return $(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Jp(){return wa("useRouteId")}function Xp(){var r;let e=y.useContext(xa),t=Kp("useRouteError"),n=wa("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Zp(){let{router:e}=qp("useNavigate"),t=wa("useNavigate"),n=y.useRef(!1);return md(()=>{n.current=!0}),y.useCallback(async(i,o={})=>{qe(n.current,pd),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Ds={};function xd(e,t,n){!t&&!Ds[e]&&(Ds[e]=!0,qe(!1,n))}y.memo(em);function em({routes:e,future:t,state:n,onError:r}){return gd(e,void 0,n,r,t)}function Ae(e){$(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tm({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1,unstable_useTransitions:l}){$(!kr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:i,static:o,unstable_useTransitions:l,future:{}}),[s,i,o,l]);typeof n=="string"&&(n=jn(n));let{pathname:c="/",search:h="",hash:g="",state:f=null,key:x="default"}=n,b=y.useMemo(()=>{let v=ot(c,s);return v==null?null:{location:{pathname:v,search:h,hash:g,state:f,key:x},navigationType:r}},[s,c,h,g,f,x,r]);return qe(b!=null,`<Router basename="${s}"> is not able to match the URL "${c}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:y.createElement(ze.Provider,{value:u},y.createElement(wr.Provider,{children:t,value:b}))}function Fs({children:e,location:t}){return Up(kl(e),t)}function kl(e,t=[]){let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...t,i];if(r.type===y.Fragment){n.push.apply(n,kl(r.props.children,o));return}$(r.type===Ae,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=kl(r.props.children,o)),n.push(l)}),n}var ti="get",ni="application/x-www-form-urlencoded";function Gi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function nm(e){return Gi(e)&&e.tagName.toLowerCase()==="button"}function rm(e){return Gi(e)&&e.tagName.toLowerCase()==="form"}function im(e){return Gi(e)&&e.tagName.toLowerCase()==="input"}function om(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lm(e,t){return e.button===0&&(!t||t==="_self")&&!om(e)}var Ur=null;function am(){if(Ur===null)try{new FormData(document.createElement("form"),0),Ur=!1}catch{Ur=!0}return Ur}var sm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function No(e){return e!=null&&!sm.has(e)?(qe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ni}"`),null):e}function um(e,t){let n,r,i,o,l;if(rm(e)){let s=e.getAttribute("action");r=s?ot(s,t):null,n=e.getAttribute("method")||ti,i=No(e.getAttribute("enctype"))||ni,o=new FormData(e)}else if(nm(e)||im(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?ot(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ti,i=No(e.getAttribute("formenctype"))||No(s.getAttribute("enctype"))||ni,o=new FormData(s,e),!am()){let{name:c,type:h,value:g}=e;if(h==="image"){let f=c?`${c}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else c&&o.append(c,g)}}else{if(Gi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ti,r=null,i=ni,l=e}return o&&i==="text/plain"&&(l=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ka(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cm(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&ot(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function dm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fm(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function hm(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let l=await dm(o,n);return l.links?l.links():[]}return[]}));return ym(r.flat(1).filter(fm).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Bs(e,t,n,r,i,o){let l=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,s=(u,c)=>{var h;return n[c].pathname!==u.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return o==="assets"?t.filter((u,c)=>l(u,c)||s(u,c)):o==="data"?t.filter((u,c)=>{var g;let h=r.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(l(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let f=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function pm(e,t,{includeHydrateFallback:n}={}){return mm(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function mm(e){return[...new Set(e)]}function gm(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function ym(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let o=JSON.stringify(gm(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function vd(){let e=y.useContext(Nn);return ka(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xm(){let e=y.useContext(Vi);return ka(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ba=y.createContext(void 0);ba.displayName="FrameworkContext";function wd(){let e=y.useContext(ba);return ka(e,"You must render this element inside a <HydratedRouter> element"),e}function vm(e,t){let n=y.useContext(ba),[r,i]=y.useState(!1),[o,l]=y.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:h,onTouchStart:g}=t,f=y.useRef(null);y.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=p=>{p.forEach(d=>{l(d.isIntersecting)})},w=new IntersectionObserver(v,{threshold:.5});return f.current&&w.observe(f.current),()=>{w.disconnect()}}},[e]),y.useEffect(()=>{if(r){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[r]);let x=()=>{i(!0)},b=()=>{i(!1),l(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:_n(s,x),onBlur:_n(u,b),onMouseEnter:_n(c,x),onMouseLeave:_n(h,b),onTouchStart:_n(g,x)}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wm({page:e,...t}){let{router:n}=vd(),r=y.useMemo(()=>id(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?y.createElement(bm,{page:e,matches:r,...t}):null}function km(e){let{manifest:t,routeModules:n}=wd(),[r,i]=y.useState([]);return y.useEffect(()=>{let o=!1;return hm(e,t,n).then(l=>{o||i(l)}),()=>{o=!0}},[e,t,n]),r}function bm({page:e,matches:t,...n}){let r=Ue(),{future:i,manifest:o,routeModules:l}=wd(),{basename:s}=vd(),{loaderData:u,matches:c}=xm(),h=y.useMemo(()=>Bs(e,t,c,o,r,"data"),[e,t,c,o,r]),g=y.useMemo(()=>Bs(e,t,c,o,r,"assets"),[e,t,c,o,r]),f=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(d=>{var k;let m=o.routes[d.route.id];!m||!m.hasLoader||(!h.some(j=>j.route.id===d.route.id)&&d.route.id in u&&((k=l[d.route.id])!=null&&k.shouldRevalidate)||m.hasClientLoader?w=!0:v.add(d.route.id))}),v.size===0)return[];let p=cm(e,s,i.unstable_trailingSlashAwareDataRequests,"data");return w&&v.size>0&&p.searchParams.set("_routes",t.filter(d=>v.has(d.route.id)).map(d=>d.route.id).join(",")),[p.pathname+p.search]},[s,i.unstable_trailingSlashAwareDataRequests,u,r,o,h,t,e,l]),x=y.useMemo(()=>pm(g,o),[g,o]),b=km(g);return y.createElement(y.Fragment,null,f.map(v=>y.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),x.map(v=>y.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),b.map(({key:v,link:w})=>y.createElement("link",{key:v,nonce:n.nonce,...w,crossOrigin:w.crossOrigin??n.crossOrigin})))}function Sm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jm&&(window.__reactRouterVersion="7.13.0")}catch{}function Nm({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=y.useRef();i.current==null&&(i.current=op({window:r,v5Compat:!0}));let o=i.current,[l,s]=y.useState({action:o.action,location:o.location}),u=y.useCallback(c=>{n===!1?s(c):y.startTransition(()=>s(c))},[n]);return y.useLayoutEffect(()=>o.listen(u),[o,u]),y.createElement(tm,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,unstable_useTransitions:n})}var kd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=y.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:f,...x},b){let{basename:v,unstable_useTransitions:w}=y.useContext(ze),p=typeof c=="string"&&kd.test(c),d=cd(c,v);c=d.to;let m=Fp(c,{relative:i}),[k,j,S]=vm(r,x),C=Im(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,viewTransition:g,unstable_defaultShouldRevalidate:f,unstable_useTransitions:w});function E(P){t&&t(P),P.defaultPrevented||C(P)}let M=y.createElement("a",{...x,...S,href:d.absoluteURL||m,onClick:d.isExternal||o?t:E,ref:Sm(b,j),target:u,"data-discover":!p&&n==="render"?"true":void 0});return k&&!p?y.createElement(y.Fragment,null,M,y.createElement(wm,{page:m})):M});Ee.displayName="Link";var Cm=y.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:l,viewTransition:s,children:u,...c},h){let g=br(l,{relative:c.relative}),f=Ue(),x=y.useContext(Vi),{navigator:b,basename:v}=y.useContext(ze),w=x!=null&&Mm(g)&&s===!0,p=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,d=f.pathname,m=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase()),m&&v&&(m=ot(m,v)||m);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let j=d===p||!i&&d.startsWith(p)&&d.charAt(k)==="/",S=m!=null&&(m===p||!i&&m.startsWith(p)&&m.charAt(p.length)==="/"),C={isActive:j,isPending:S,isTransitioning:w},E=j?t:void 0,M;typeof r=="function"?M=r(C):M=[r,j?"active":null,S?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(C):o;return y.createElement(Ee,{...c,"aria-current":E,className:M,ref:h,style:P,to:l,viewTransition:s},typeof u=="function"?u(C):u)});Cm.displayName="NavLink";var Rm=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:l=ti,action:s,onSubmit:u,relative:c,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:f,...x},b)=>{let{unstable_useTransitions:v}=y.useContext(ze),w=Lm(),p=zm(s,{relative:c}),d=l.toLowerCase()==="get"?"get":"post",m=typeof s=="string"&&kd.test(s),k=j=>{if(u&&u(j),j.defaultPrevented)return;j.preventDefault();let S=j.nativeEvent.submitter,C=(S==null?void 0:S.getAttribute("formmethod"))||l,E=()=>w(S||j.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:i,state:o,relative:c,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:f});v&&n!==!1?y.startTransition(()=>E()):E()};return y.createElement("form",{ref:b,method:d,action:p,onSubmit:r?u:k,...x,"data-discover":!m&&e==="render"?"true":void 0})});Rm.displayName="Form";function Em(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bd(e){let t=y.useContext(Nn);return $(t,Em(e)),t}function Im(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let c=Bp(),h=Ue(),g=br(e,{relative:o});return y.useCallback(f=>{if(lm(f,t)){f.preventDefault();let x=n!==void 0?n:pr(h)===pr(g),b=()=>c(e,{replace:x,state:r,preventScrollReset:i,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:s});u?y.startTransition(()=>b()):b()}},[h,c,g,n,r,t,e,i,o,l,s,u])}var Pm=0,Tm=()=>`__${String(++Pm)}__`;function Lm(){let{router:e}=bd("useSubmit"),{basename:t}=y.useContext(ze),n=Jp(),r=e.fetch,i=e.navigate;return y.useCallback(async(o,l={})=>{let{action:s,method:u,encType:c,formData:h,body:g}=um(o,t);if(l.navigate===!1){let f=l.fetcherKey||Tm();await r(f,n,l.action||s,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:g,formMethod:l.method||u,formEncType:l.encType||c,flushSync:l.flushSync})}else await i(l.action||s,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:g,formMethod:l.method||u,formEncType:l.encType||c,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,i,t,n])}function zm(e,{relative:t}={}){let{basename:n}=y.useContext(ze),r=y.useContext(at);$(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...br(e||".",{relative:t})},l=Ue();if(e==null){o.search=l.search;let s=new URLSearchParams(o.search),u=s.getAll("index");if(u.some(h=>h==="")){s.delete("index"),u.filter(g=>g).forEach(g=>s.append("index",g));let h=s.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:et([n,o.pathname])),pr(o)}function Mm(e,{relative:t}={}){let n=y.useContext(fd);$(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bd("useViewTransitionState"),i=br(e,{relative:t});if(!n.isTransitioning)return!1;let o=ot(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=ot(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ri(i.pathname,l)!=null||Ri(i.pathname,o)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Am={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:s="",children:u,...c},h)=>y.createElement("svg",{ref:h,...Am,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${_m(e)}`,s].join(" "),...c},[...t.map(([g,f])=>y.createElement(g,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=ae("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ae("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ae("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=ae("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ae("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=ae("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ae("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=ae("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=ae("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Rd="/assets/ResoIcon_512-DdcJvTKP.png",Vm=["zh","zh-TW","en","ja"],bl="en",Ed="light",Id=y.createContext(null),Ws=e=>{if(!e)return bl;const t=String(e).trim().toLowerCase();return t==="zh-tw"||t==="zh_hant"||t==="zh-hant"?"zh-TW":t==="zh-cn"||t==="zh_hans"||t==="zh-hans"?"zh":t==="en"||t==="zh"||t==="ja"?t:Vm.includes(e)?e:bl},Us=e=>e==="dark"?"dark":Ed,Gm=({children:e})=>{const[t,n]=y.useState(()=>typeof window>"u"?bl:Ws(window.localStorage.getItem("language"))),[r,i]=y.useState(()=>typeof window>"u"?Ed:Us(window.localStorage.getItem("theme")));y.useEffect(()=>{typeof window>"u"||(window.localStorage.setItem("language",t),document.documentElement.lang=t==="zh"?"zh-CN":t==="zh-TW"?"zh-TW":t==="ja"?"ja":"en")},[t]),y.useEffect(()=>{typeof window>"u"||(window.localStorage.setItem("theme",r),document.documentElement.classList.toggle("dark",r==="dark"))},[r]);const o=y.useMemo(()=>({language:t,setLanguage:l=>n(Ws(l)),theme:r,setTheme:l=>i(Us(l)),toggleTheme:()=>i(l=>l==="dark"?"light":"dark")}),[t,r]);return a.jsx(Id.Provider,{value:o,children:e})},ve=()=>{const e=y.useContext(Id);if(!e)throw new Error("useAppPreferences must be used within AppPreferencesProvider");return e},Ym={万:"萬",与:"與",专:"專",业:"業",个:"個",为:"為",义:"義",么:"麼",习:"習",书:"書",买:"買",乱:"亂",争:"爭",亏:"虧",云:"雲",亚:"亞",产:"產",仅:"僅",从:"從",众:"眾",优:"優",会:"會",传:"傳",价:"價",体:"體",余:"餘",你:"你",侣:"侶",侧:"側",储:"儲",关:"關",兴:"興",内:"內",写:"寫",决:"決",况:"況",冲:"衝",击:"擊",则:"則",刚:"剛",创:"創",删:"刪",别:"別",到:"到",办:"辦",动:"動",务:"務",势:"勢",区:"區",协:"協",单:"單",卖:"賣",历:"歷",压:"壓",发:"發",变:"變",叙:"敘",参:"參",双:"雙",发:"發",台:"臺",叶:"葉",号:"號",后:"後",听:"聽",启:"啟",员:"員",问:"問",图:"圖",围:"圍",国:"國",圆:"圓",场:"場",块:"塊",坚:"堅",处:"處",备:"備",够:"夠",头:"頭",奖:"獎",妈:"媽",实:"實",审:"審",写:"寫",对:"對",导:"導",将:"將",层:"層",归:"歸",录:"錄",当:"當",形:"形",彻:"徹",忆:"憶",总:"總",态:"態",忆:"憶",怀:"懷",态:"態",户:"戶",扩:"擴",护:"護",报:"報",拟:"擬",换:"換",据:"據",揽:"攬",摄:"攝",摆:"擺",数:"數",断:"斷",无:"無",时:"時",显:"顯",暂:"暫",术:"術",杂:"雜",权:"權",条:"條",来:"來",构:"構",样:"樣",标:"標",档:"檔",检:"檢",权:"權",欢:"歡",气:"氣",汇:"匯",汉:"漢",汤:"湯",没:"沒",沟:"溝",测:"測",湾:"灣",满:"滿",滤:"濾",灵:"靈",点:"點",热:"熱",状:"狀",现:"現",环:"環",画:"畫",畅:"暢",界:"界",疗:"療",监:"監",盖:"蓋",盘:"盤",着:"著",码:"碼",础:"礎",确:"確",离:"離",种:"種",积:"積",称:"稱",稳:"穩",笔:"筆",简:"簡",类:"類",粘:"黏",级:"級",线:"線",练:"練",组:"組",结:"結",给:"給",统:"統",网:"網",继:"繼",续:"續",维:"維",绘:"繪",绿:"綠",编:"編",缩:"縮",罚:"罰",置:"置",联:"聯",肤:"膚",脱:"脫",艺:"藝",节:"節",范:"範",类:"類",签:"簽",简:"簡",粮:"糧",纪:"紀",纯:"純",级:"級",纳:"納",纽:"紐",线:"線",组:"組",结:"結",绕:"繞",统:"統",继:"繼",续:"續",罗:"羅",网:"網",翻:"翻",职:"職",联:"聯",聪:"聰",肃:"肅",胁:"脅",脸:"臉",脱:"脫",与:"與",艺:"藝",苏:"蘇",获:"獲",营:"營",装:"裝",观:"觀",览:"覽",触:"觸",订:"訂",认:"認",讲:"講",设:"設",访:"訪",证:"證",试:"試",询:"詢",该:"該",语:"語",说:"說",请:"請",诸:"諸",读:"讀",调:"調",谢:"謝",识:"識",议:"議",译:"譯",详:"詳",谱:"譜",护:"護",贝:"貝",负:"負",贡:"貢",财:"財",责:"責",购:"購",资:"資",赋:"賦",质:"質",赞:"贊",赶:"趕",跃:"躍",轮:"輪",轻:"輕",载:"載",较:"較",边:"邊",达:"達",迁:"遷",还:"還",这:"這",进:"進",远:"遠",连:"連",适:"適",选:"選",递:"遞",遗:"遺",邮:"郵",里:"裡",释:"釋",钟:"鐘",钢:"鋼",钥:"鑰",链:"鏈",销:"銷",错:"錯",键:"鍵",长:"長",门:"門",闭:"閉",阅:"閱",间:"間",队:"隊",阳:"陽",阴:"陰",际:"際",隐:"隱",难:"難",页:"頁",顶:"頂",项:"項",顺:"順",须:"須",顾:"顧",馈:"饋",马:"馬",验:"驗",驱:"驅",高:"高",麦:"麥",黄:"黃",点:"點",齐:"齊",龙:"龍",录:"錄",录:"錄"},Co=new WeakMap,qm=e=>e.split("").map(t=>Ym[t]||t).join(""),Sl=e=>{if(typeof e=="string")return qm(e);if(Array.isArray(e))return e.map(t=>Sl(t));if(e&&typeof e=="object"){if(Co.has(e))return Co.get(e);const t=Object.fromEntries(Object.entries(e).map(([n,r])=>[n,Sl(r)]));return Co.set(e,t),t}return e},ce=(e,t)=>e[t]?e[t]:t==="zh-TW"&&e.zh?Sl(e.zh):e.en||e.zh||e.ja,Km={en:{product:"Product",pricing:"Pricing",docs:"Docs",buildJourney:"Build Journey",resources:"Resources",licenseManager:"License Manager",buildBlocks:"Build Blocks",download:"Download"},zh:{product:"产品",pricing:"定价",docs:"文档",buildJourney:"Build Journey",resources:"资源",licenseManager:"许可证管理器",buildBlocks:"Build Blocks",download:"下载"},ja:{product:"プロダクト",pricing:"料金",docs:"ドキュメント",buildJourney:"Build Journey",resources:"リソース",licenseManager:"ライセンスマネージャー",buildBlocks:"Build Blocks",download:"ダウンロード"}},Qm=({isScrolled:e=!1})=>{const t=Ue(),{language:n}=ve(),[r,i]=y.useState(!1),[o,l]=y.useState(!1),[s,u]=y.useState(!1),c=y.useRef(null),h=y.useRef(null),g=y.useRef(null),f=ce(Km,n),x=[{key:"product",href:"/#features"},{key:"pricing",to:"/pricing"},{key:"docs",to:"/docs"},{key:"buildJourney",to:"/build-journey"}],b=[{key:"licenseManager",to:"/retrieve"},{key:"buildBlocks",to:"/build-blocks"}],v=()=>{u(!1)};return y.useEffect(()=>{const w=c.current,p=h.current;if(!w||!p)return;let d=0,m=!1,k=!1,j=0,S=0,C=performance.now();const E=185,M=ut=>{const Cn=Math.min((ut-C)/1e3,.05);C=ut;const Yi=k?E:0,Rn=k?5.2:4;S+=(Yi-S)*Math.min(Rn*Cn,1),j=(j+S*Cn)%360,p.style.transform=`rotate(${j.toFixed(3)}deg)`,k||S>.25?d=requestAnimationFrame(M):(m=!1,d=0,S=0,j=0,p.style.transform="rotate(0deg)")},P=()=>{m||(m=!0,C=performance.now(),d=requestAnimationFrame(M))},he=()=>{k=!0,P()},st=()=>{k=!1,P()};return w.addEventListener("pointerenter",he),w.addEventListener("pointerleave",st),()=>{w.removeEventListener("pointerenter",he),w.removeEventListener("pointerleave",st),d&&cancelAnimationFrame(d),p.style.transform="rotate(0deg)"}},[]),y.useEffect(()=>{i(!1),l(!1),u(!1)},[t.pathname]),y.useEffect(()=>{if(!s)return;const w=d=>{var m;(m=g.current)!=null&&m.contains(d.target)||v()},p=d=>{d.key==="Escape"&&v()};return document.addEventListener("mousedown",w),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("keydown",p)}},[s]),a.jsxs("nav",{className:`!fixed top-0 left-0 right-0 !z-[120] transition-all duration-300 ${e?"bg-white/92 dark:bg-black/86 backdrop-blur-xl border-b border-black/8 dark:border-white/10":"bg-transparent"}`,children:[a.jsxs("div",{className:"max-w-6xl mx-auto px-6 h-20 flex items-center justify-between",children:[a.jsxs(Ee,{to:"/",ref:c,className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"w-8 h-8",children:a.jsx("img",{ref:h,src:Rd,alt:"Reso",className:"brand-logo-icon w-full h-full rounded-lg"})}),a.jsx("span",{className:"text-gray-900 dark:text-gray-100 font-medium text-lg tracking-tight",children:"Reso"})]}),a.jsxs("div",{className:"hidden md:flex items-center gap-10 text-[15px] text-gray-600 dark:text-gray-300",children:[x.map(w=>w.external?a.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-white",children:[a.jsx("span",{children:f[w.key]}),a.jsx(an,{size:14,className:"text-gray-400"})]},w.key):w.to?a.jsx(Ee,{to:w.to,className:`transition-colors hover:text-gray-900 dark:hover:text-white ${t.pathname===w.to?"text-gray-900 dark:text-white":""}`,children:f[w.key]},w.key):a.jsx("a",{href:w.href,className:"transition-colors hover:text-gray-900 dark:hover:text-white",children:f[w.key]},w.key)),a.jsxs("div",{ref:g,className:"relative z-[80]",children:[a.jsx("button",{onClick:()=>{u(w=>!w)},className:`inline-flex items-center transition-colors hover:text-gray-900 dark:hover:text-white ${t.pathname==="/build-blocks"?"text-gray-900 dark:text-white":""}`,"aria-haspopup":"menu","aria-expanded":s,children:a.jsx("span",{children:f.resources})}),s&&a.jsx("div",{className:"absolute top-full -left-4 z-[90] pt-2 pointer-events-auto",children:a.jsx("div",{className:"w-52 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white/98 dark:bg-black/95 backdrop-blur-xl shadow-lg p-1.5",children:b.map(w=>w.external?a.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",onClick:v,className:"flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",children:[a.jsx("span",{children:f[w.key]}),a.jsx(an,{size:14,className:"text-gray-400"})]},w.key):a.jsx(Ee,{to:w.to,onClick:v,className:"block rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",children:f[w.key]},w.key))})})]}),a.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,className:"px-[18px] py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black font-medium text-[14px] leading-none hover:bg-black dark:hover:bg-gray-100 transition-all",children:f.download})]}),a.jsx("button",{className:"md:hidden p-2 text-gray-900 dark:text-gray-100",onClick:()=>{i(w=>{const p=!w;return p||l(!1),p})},"aria-label":"Toggle mobile menu",children:r?a.jsx(Cd,{size:24}):a.jsx($m,{size:24})})]}),r&&a.jsxs("div",{className:"md:hidden bg-white/98 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-6 py-4 space-y-2",children:[x.map(w=>w.external?a.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-2 text-base text-gray-700 dark:text-gray-200",onClick:()=>i(!1),children:[a.jsx("span",{children:f[w.key]}),a.jsx(an,{size:16,className:"text-gray-400"})]},w.key):w.to?a.jsx(Ee,{to:w.to,className:"block text-base py-2 text-gray-700 dark:text-gray-200",onClick:()=>i(!1),children:f[w.key]},w.key):a.jsx("a",{href:w.href,className:"block text-base py-2 text-gray-700 dark:text-gray-200",onClick:()=>i(!1),children:f[w.key]},w.key)),a.jsx("button",{onClick:()=>l(w=>!w),className:"w-full py-2 text-left text-base text-gray-700 dark:text-gray-200","aria-expanded":o,children:f.resources}),o&&a.jsx("div",{className:"ml-3 border-l border-gray-200 dark:border-gray-700 pl-3 space-y-1",children:b.map(w=>w.external?a.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-2 text-[15px] text-gray-700 dark:text-gray-200",onClick:()=>{l(!1),i(!1)},children:[a.jsx("span",{children:f[w.key]}),a.jsx(an,{size:15,className:"text-gray-400"})]},w.key):a.jsx(Ee,{to:w.to,className:"block py-2 text-[15px] text-gray-700 dark:text-gray-200",onClick:()=>{l(!1),i(!1)},children:f[w.key]},w.key))}),a.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,className:"block w-full text-center mt-2 px-5 py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black text-sm font-medium",children:f.download})]})]})},Jm=()=>a.jsxs("div",{className:"flex gap-6 sm:gap-10 items-center justify-center",children:[a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/cursor.svg",alt:"Cursor",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/linear.svg",alt:"Linear",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/slack.svg",alt:"Slack",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/discord.svg",alt:"Discord",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/notion.svg",alt:"Notion",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/github.svg",alt:"GitHub",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/obsidian.svg",alt:"Obsidian",width:"36",height:"36"})}),a.jsx("div",{className:"tool-icon",children:a.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/visualstudiocode.svg",alt:"VS Code",width:"36",height:"36"})}),a.jsx("style",{children:`
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
    `})]}),Xm={en:{title:"Capture thoughts. Anywhere.",local:"Locally.",download:"Download for macOS",worksWith:"Works seamlessly with"},zh:{title:"随时捕捉想法。",local:"本地完成。",download:"下载 macOS 版本",worksWith:"无缝兼容"},ja:{title:"思考を、どこでも記録。",local:"ローカルで。",download:"macOS 版をダウンロード",worksWith:"シームレスに連携"}},Zm=()=>{const{language:e}=ve(),[t,n]=y.useState(!1),r=y.useRef(null),i=ce(Xm,e);return y.useEffect(()=>{const o=l=>{l.key==="Escape"&&n(!1)};return t&&(document.addEventListener("keydown",o),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""}},[t]),y.useEffect(()=>{t&&r.current&&r.current.play(),!t&&r.current&&(r.current.pause(),r.current.currentTime=0)},[t]),a.jsxs("section",{className:"relative z-10 pt-32 pb-20 min-h-screen",children:[a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("div",{className:"mb-14 max-w-3xl",children:[a.jsxs("h1",{className:"text-3xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-6 text-black dark:text-white",children:[i.title," ",a.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:i.local})]}),a.jsxs("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,className:"inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all px-6 py-3",children:[a.jsx("span",{children:i.download}),a.jsx(ja,{size:16})]})]}),a.jsxs("div",{className:"relative w-full mb-16",children:[a.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10",style:{width:"120%",height:"120%",background:"radial-gradient(circle, rgba(120, 80, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",filter:"blur(60px)"}}),a.jsxs("div",{className:"relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] cursor-pointer group",onClick:()=>n(!0),children:[a.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover",children:a.jsx("source",{src:"/Reso_Demo_v3.mp4",type:"video/mp4"})}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(102,0,255,0.25)]",children:a.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 ml-0.5",viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M8.5 5.5C8.5 4.89 9.18 4.52 9.7 4.86L19.2 11.36C19.67 11.67 19.67 12.33 19.2 12.64L9.7 19.14C9.18 19.48 8.5 19.11 8.5 18.5V5.5Z",fill:"#5423e7"})})})})]})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("span",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500",children:i.worksWith}),a.jsx("div",{className:"mt-5 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300",children:a.jsx(Jm,{})})]})]}),t&&rd.createPortal(a.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm",onClick:()=>n(!1),children:[a.jsx("button",{onClick:()=>n(!1),className:"absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200",children:a.jsx("svg",{className:"w-5 h-5 text-white",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:a.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),a.jsx("div",{className:"relative w-[90vw] max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl",onClick:o=>o.stopPropagation(),children:a.jsx("video",{ref:r,controls:!0,playsInline:!0,className:"w-full h-full object-contain bg-black",children:a.jsx("source",{src:"/Reso_Demo_v3.mp4",type:"video/mp4"})})})]}),document.body)]})},eg={en:{sectionTitle:"Built for how you think",sectionSubtitle:"From capture to insight—a workspace that adapts to your workflow.",features:[{id:"capture",title:"Capture thoughts as they happen",description:"Ideas are fleeting. Reso runs in the background, ready to record whenever inspiration strikes. No app to open, no friction—just speak and move on.",learnMoreText:"Learn about frictionless capture",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"privacy",title:"Your thoughts stay yours",description:"Transcription runs locally on Apple Silicon. When cloud features are needed, sensitive data is masked before it ever leaves your Mac.",learnMoreText:"Learn about privacy",learnMoreLink:"/docs#privacy",imageSlot:"feature-privacy.png",imageHint:"PII Shield / local processing flow"},{id:"skills",title:"It understands what you want to do",description:"Reso doesn't just transcribe—it recognizes intent. Meeting notes, quick tasks, deep thinking sessions: each gets handled differently.",learnMoreText:"Learn about dynamic skills",learnMoreLink:"/docs#skills",imageSlot:"feature-skills.png",imageHint:"Intent classification / skill switching"},{id:"discovery",title:"Ideas connect themselves",description:"Every note gets embedded. Related thoughts cluster automatically over time. You don't organize—patterns emerge on their own.",learnMoreText:"Learn about discovery",learnMoreLink:"/docs#discovery",imageSlot:"feature-discovery.png",imageHint:"Knowledge graph / Mindscape view"},{id:"routing",title:"The right model for every task",description:"Simple requests go to fast models. Complex analysis routes to powerful ones. Reso handles the orchestration so you don't have to.",learnMoreText:"Learn about smart routing",learnMoreLink:"/docs#routing",imageSlot:"feature-routing.png",imageHint:"Multi-LLM routing diagram"}]},zh:{sectionTitle:"为你的思考方式而构建",sectionSubtitle:"从记录到洞察，一个会适应你 workflow 的工作空间。",features:[{id:"capture",title:"在灵感出现时立即捕捉",description:"想法稍纵即逝。Reso 在后台随时待命，灵感一来就能记录。无需先打开应用，没有多余步骤，开口就能继续前进。",learnMoreText:"了解无摩擦捕捉",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"privacy",title:"你的想法只属于你",description:"转录在 Apple Silicon 本地完成。只有在需要云端能力时，敏感信息才会先被遮蔽，再离开你的 Mac。",learnMoreText:"了解隐私设计",learnMoreLink:"/docs#privacy",imageSlot:"feature-privacy.png",imageHint:"PII Shield / local processing flow"},{id:"skills",title:"它理解你想做什么",description:"Reso 不只是转录，它会识别意图。会议笔记、快速任务、深度思考会进入不同处理路径。",learnMoreText:"了解动态 Skills",learnMoreLink:"/docs#skills",imageSlot:"feature-skills.png",imageHint:"Intent classification / skill switching"},{id:"discovery",title:"想法会自己连接起来",description:"每条记录都会做语义 embedding。相关想法会随着时间自动聚类。你不用手动整理，模式会自然浮现。",learnMoreText:"了解 Discovery",learnMoreLink:"/docs#discovery",imageSlot:"feature-discovery.png",imageHint:"Knowledge graph / Mindscape view"},{id:"routing",title:"每项任务都走最合适的模型",description:"简单请求走快速模型，复杂分析走强推理模型。Reso 在后台完成 orchestration，你只专注输出。",learnMoreText:"了解 Smart Routing",learnMoreLink:"/docs#routing",imageSlot:"feature-routing.png",imageHint:"Multi-LLM routing diagram"}]},ja:{sectionTitle:"思考の流れに合わせて設計",sectionSubtitle:"キャプチャから洞察まで。あなたの workflow に適応するワークスペース。",features:[{id:"capture",title:"思いついた瞬間にキャプチャ",description:"アイデアは一瞬で消えます。Reso はバックグラウンドで待機し、ひらめいた瞬間に録音できます。アプリを開く手間は不要です。",learnMoreText:"Frictionless Capture を見る",learnMoreLink:"/docs#capture",imageSlot:"feature-capture.png",imageHint:"Shadow recording / notch bar UI"},{id:"privacy",title:"あなたの思考はあなたのもの",description:"文字起こしは Apple Silicon 上でローカル実行。クラウド機能が必要な場合も、機微情報はマスクしてから送信されます。",learnMoreText:"Privacy を見る",learnMoreLink:"/docs#privacy",imageSlot:"feature-privacy.png",imageHint:"PII Shield / local processing flow"},{id:"skills",title:"やりたいことを理解する",description:"Reso は単なる文字起こしではなく intent を認識します。会議メモ、短いタスク、深い思考で処理を切り替えます。",learnMoreText:"Dynamic Skills を見る",learnMoreLink:"/docs#skills",imageSlot:"feature-skills.png",imageHint:"Intent classification / skill switching"},{id:"discovery",title:"アイデア同士が自動でつながる",description:"各ノートは semantic embedding され、関連する思考が時間とともに自動でクラスタ化されます。整理しなくてもパターンが浮かび上がります。",learnMoreText:"Discovery を見る",learnMoreLink:"/docs#discovery",imageSlot:"feature-discovery.png",imageHint:"Knowledge graph / Mindscape view"},{id:"routing",title:"タスクごとに最適なモデルへ",description:"軽い依頼は高速モデルへ、複雑な分析は高性能モデルへ。Reso が orchestration を担うため、あなたは作業に集中できます。",learnMoreText:"Smart Routing を見る",learnMoreLink:"/docs#routing",imageSlot:"feature-routing.png",imageHint:"Multi-LLM routing diagram"}]}},tg=({feature:e})=>a.jsx("div",{className:"relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black",children:a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"text-center px-8",children:[a.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 rounded-lg bg-black/10 dark:bg-white/15"})}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:e.imageHint}),a.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:e.imageSlot})]})})}),ng=()=>{const{language:e}=ve(),t=ce(eg,e),n=t.features;return a.jsx("section",{id:"features",className:"py-24",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("div",{className:"max-w-2xl mb-20",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4",children:t.sectionTitle}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.sectionSubtitle})]}),a.jsx("div",{className:"space-y-32",children:n.map((r,i)=>{const o=i%2===1;return a.jsxs("article",{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${o?"lg:[&>*:first-child]:order-2":""}`,children:[a.jsxs("div",{className:"max-w-lg",children:[a.jsx("h3",{className:"text-2xl md:text-[2.25rem] leading-tight font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4",children:r.title}),a.jsx("p",{className:"text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6",children:r.description}),a.jsxs(Ee,{to:r.learnMoreLink,className:"inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-700 dark:hover:text-amber-400 transition-colors group",children:[a.jsx("span",{children:r.learnMoreText}),a.jsx(Ei,{size:16,className:"transition-transform group-hover:translate-x-1"})]})]}),a.jsx("div",{children:a.jsx(tg,{feature:r})})]},r.id)})})]})})},rg=()=>{const{language:e}=ve(),t=ce({en:{tag:"Build Together",title:"Transparent progress, shipped in public.",subtitle:"Follow what changed, why we changed it, and what is next.",cards:[{title:"Docs",body:"Product architecture and workflow guides.",href:"/docs",cta:"Open Docs"},{title:"Build Journey",body:"Development updates and product evolution.",href:"/changelog",cta:"View Updates"}],browse:"Browse all resources"},zh:{tag:"共建中",title:"公开迭代，透明推进。",subtitle:"你可以看到我们改了什么、为什么改、下一步做什么。",cards:[{title:"文档",body:"产品架构与 workflow 指南。",href:"/docs",cta:"查看文档"},{title:"开发历程",body:"开发更新与产品演进记录。",href:"/changelog",cta:"查看更新"}],browse:"浏览全部资源"},ja:{tag:"Build Together",title:"進捗を公開しながら継続的に出荷。",subtitle:"何を変えたか、なぜ変えたか、次に何をするかを追えます。",cards:[{title:"Docs",body:"プロダクト設計と workflow ガイド。",href:"/docs",cta:"Docs を開く"},{title:"Build Journey",body:"開発アップデートと製品の進化。",href:"/changelog",cta:"アップデートを見る"}],browse:"すべてのリソースを見る"}},e);return a.jsx("section",{className:"py-24",id:"build-together",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("div",{className:"mb-10 max-w-2xl",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-4",children:t.tag}),a.jsx("h2",{className:"text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4",children:t.title}),a.jsx("p",{className:"text-base text-gray-600 dark:text-gray-400 leading-relaxed",children:t.subtitle})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md",children:t.cards.map(n=>a.jsxs("article",{className:"rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6",children:[a.jsx("h3",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:n.title}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6",children:n.body}),a.jsxs("a",{href:n.href,className:"inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white",children:[a.jsx("span",{children:n.cta}),a.jsx(an,{size:15})]})]},n.title))}),a.jsxs("a",{href:"/build-blocks",className:"mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[a.jsx("span",{children:t.browse}),a.jsx(Ei,{size:15})]})]})})},ig=({size:e=14})=>a.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),og=()=>{const{language:e,setLanguage:t,setTheme:n,theme:r}=ve(),i=ce({en:{privacy:"Privacy",terms:"Terms",light:"Switch to light mode",dark:"Switch to dark mode",languagePicker:"Language"},zh:{privacy:"隐私",terms:"条款",light:"切换到浅色模式",dark:"切换到深色模式",languagePicker:"语言"},ja:{privacy:"プライバシー",terms:"利用規約",light:"ライトモードに切り替え",dark:"ダークモードに切り替え",languagePicker:"言語"}},e),o=[{value:"en",label:"English"},{value:"zh",label:"简体中文"},{value:"ja",label:"日本語"},{value:"zh-TW",label:"繁體中文"}];return a.jsx(a.Fragment,{children:a.jsx("footer",{className:"py-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4",children:[a.jsx("span",{children:"© 2025 DZG STUDIO LLC."}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsx("a",{href:"/privacy.html",className:"hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:i.privacy}),a.jsx("a",{href:"/terms.html",className:"hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:i.terms}),a.jsx("div",{className:"w-px h-3 bg-gray-300 dark:bg-gray-700"}),a.jsx("a",{href:"https://x.com/DzgStudio",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:a.jsx(ig,{size:14})}),a.jsx(Ee,{to:"/contact",className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:a.jsx(Um,{size:14})}),a.jsx("div",{className:"w-px h-3 bg-gray-300 dark:bg-gray-700"}),a.jsx("button",{onClick:()=>n("light"),className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors","aria-label":i.light,children:a.jsx(Nd,{size:14,className:r==="light"?"text-amber-500":""})}),a.jsx("button",{onClick:()=>n("dark"),className:"flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors","aria-label":i.dark,children:a.jsx(jd,{size:14,className:r==="dark"?"text-blue-400":""})}),a.jsxs("div",{className:"relative",children:[a.jsx(Sd,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"}),a.jsx("select",{value:e,onChange:l=>t(l.target.value),"aria-label":i.languagePicker,className:"appearance-none bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 text-xs rounded-full pl-8 pr-7 py-1.5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20",children:o.map(l=>a.jsx("option",{value:l.value,children:l.label},l.value))}),a.jsx(Sa,{size:12,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"})]})]})]})})})},Yt={free:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",plus:"https://reso.lemonsqueezy.com/checkout/buy/ba6f74ba-5444-4488-98c1-9402f4c59e00"},lg={en:{titleLine1:"Pick the workflow.",titleLine2:"Keep the speed.",subtitle:"A voice-first dictation and writing workflow: capture diary notes, shape drafts, and write with commands.",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"Free",priceSup:"",cadence:"",description:"Bring your own API for essential voice capture",features:["Bring your own API for LLM access.","Basic dictation, text processing, and command drafting.","Local-first. Voice never leaves your device."],cta:"Download Free",checkoutUrl:Yt.free,footnote:"Free forever"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/month",description:"All-inclusive LLM, or bring your own. Maximum flexibility.",features:["LLM included, or use your own API. Your choice.","Unlock all skills: context linking, smart pipelines, and more.","Local-first. Zero data retention. Your thoughts stay yours."],cta:"Start Subscription",checkoutUrl:Yt.plus,footnote:"Cancel anytime · 30-day refund",featured:!0}],mostPopular:"Most Popular",checkoutPending:"Checkout link pending update.",privacyPromise:"Your thoughts stay yours. We don't train on your data.",howItWorks:"How it works",steps:["Get your key","Paste in Reso","You're all set"],stepDescription:"Reso Free starts with your own API key. Reso Pro connects your subscription instantly for an all-in-one workflow.",faqTitle:"Questions & Answers",faqs:[{q:"How should I choose between Reso Free and Reso Pro?",a:"Choose Reso Free if you want a free BYOK setup for essential voice dictation and writing flows. Choose Reso Pro if you want an all-in-one monthly plan with integrated execution."},{q:"Do I need to configure API keys?",a:"For Reso Free, yes. You can use Anthropic, OpenAI, Groq, or Google keys. For Reso Pro, no. API access is integrated and ready out of the box."},{q:"What can I do with Reso as a voice tool?",a:"Reso is built for diary and dictation capture, shadow writing, and write-with-command workflows."},{q:"Which model providers are supported?",a:"Reso currently supports Anthropic, OpenAI, Groq, and Google."},{q:"How does activation work after payment?",a:"Reso Free is free and can be used right away with your own API key. Reso Pro issues a LemonSqueezy license key that unlocks the all-in-one subscription."},{q:"Are model API costs included?",a:"Reso Free does not include model costs because usage is billed directly by your provider account. Reso Pro includes API costs during subscription, subject to fair use."},{q:"Can I switch tiers later?",a:"Yes. You can purchase the other tier at any time, then activate it with the new license key."}],ctaTitle:"Start with Reso today.",ctaButton:"Download for macOS"},zh:{titleLine1:"选择你的 workflow。",titleLine2:"保留你的速度。",subtitle:"语音优先的写作与记录流程：捕捉日记灵感、整理草稿、用命令完成写作。",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"免费",priceSup:"",cadence:"",description:"自带 API，满足基础语音捕捉需求",features:["使用你自己的 API 访问大语言模型。","基础听写、文本处理、命令草拟。","本地优先，语音永不离开设备。"],cta:"免费下载",checkoutUrl:Yt.free,footnote:"永久免费"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/月",description:"一口价包含大语言模型，也可自带 API，灵活自选。",features:["内置 LLM，也支持自带 API，随你选择。","解锁全部技能：上下文关联、智能流水线等。","本地优先，零数据留存，想法只属于你。"],cta:"开始订阅",checkoutUrl:Yt.plus,footnote:"随时取消 · 30 天退款",featured:!0}],mostPopular:"最受欢迎",checkoutPending:"Checkout 链接待更新。",privacyPromise:"你的想法只属于你。我们不会用你的数据做训练。",howItWorks:"如何开始",steps:["获取密钥","粘贴到 Reso","即可开始使用"],stepDescription:"Reso Free 使用你自己的 API key。Reso Pro 订阅开通后即可一站式使用。",faqTitle:"常见问题",faqs:[{q:"Reso Free 和 Reso Pro 该如何选择？",a:"如果你希望免费 BYOK，满足基础语音听写和写作流程，选 Reso Free。若你想要一体化月订阅和集成执行能力，选 Reso Pro。"},{q:"需要自己配置 API key 吗？",a:"Reso Free 需要。支持 Anthropic、OpenAI、Groq、Google。Reso Pro 不需要，开通后即可直接使用。"},{q:"Reso 作为语音工具可以做什么？",a:"Reso 适用于日记与听写记录、shadow writing 以及 write-with-command workflows。"},{q:"支持哪些模型服务商？",a:"目前支持 Anthropic、OpenAI、Groq、Google。"},{q:"支付后如何激活？",a:"Reso Free 可直接使用并绑定你的 API key。Reso Pro 会通过 LemonSqueezy 发放 license key，用于激活订阅。"},{q:"模型 API 成本是否包含在内？",a:"Reso Free 不包含模型成本，按你在服务商账号中的实际用量计费。Reso Pro 在订阅期间包含 API 使用，遵循合理使用原则。"},{q:"之后可以切换套餐吗？",a:"可以。你随时可购买另一套餐，并用新的 license key 激活。"}],ctaTitle:"现在开始使用 Reso。",ctaButton:"下载 macOS 版本"},ja:{titleLine1:"workflow を選ぶ。",titleLine2:"スピードはそのまま。",subtitle:"音声優先の記録・執筆フロー。日記メモを捉え、下書きを整え、コマンドで仕上げます。",tiers:[{id:"free",name:"Reso",mode:"Free",priceMain:"無料",priceSup:"",cadence:"",description:"自分の API で基本的な音声キャプチャを実現",features:["自分の API で LLM にアクセス。","基本的なディクテーション、テキスト処理、コマンド下書き。","ローカル優先。音声はデバイスから出ません。"],cta:"無料でダウンロード",checkoutUrl:Yt.free,footnote:"ずっと無料"},{id:"plus",name:"Reso Pro",mode:"All-in-One",priceMain:"$19",priceSup:".99",cadence:"/月",description:"LLM 込みの定額制、または自分の API も利用可能。柔軟に選択。",features:["LLM 内蔵、または自分の API を利用。お好みで。","全スキル解放：コンテキスト連携、スマートパイプラインなど。","ローカル優先。データ保持ゼロ。思考は自分だけのもの。"],cta:"サブスクを開始",checkoutUrl:Yt.plus,footnote:"いつでも解約可 · 30日返金",featured:!0}],mostPopular:"人気プラン",checkoutPending:"Checkout リンクは更新待ちです。",privacyPromise:"あなたの思考はあなたのもの。データを学習に利用しません。",howItWorks:"利用開始まで",steps:["キーを取得","Reso に貼り付け","準備完了"],stepDescription:"Reso Free は自分の API key で開始。Reso Pro は購読後すぐに一体型 workflow を利用できます。",faqTitle:"よくある質問",faqs:[{q:"Reso Free と Reso Pro はどう選べばよいですか？",a:"無料の BYOK で基本的な音声 dictation と執筆を使うなら Reso Free。統合実行まで含む月額プランなら Reso Pro が適しています。"},{q:"API key の設定は必要ですか？",a:"Reso Free は必要です。Anthropic / OpenAI / Groq / Google に対応。Reso Pro は不要で、すぐに使えます。"},{q:"Reso を音声ツールとして何に使えますか？",a:"日記・dictation の記録、shadow writing、write-with-command workflows に最適化されています。"},{q:"対応しているモデルプロバイダは？",a:"Anthropic、OpenAI、Groq、Google をサポートしています。"},{q:"支払い後のアクティベーションは？",a:"Reso Free はすぐ利用でき、API key を設定します。Reso Pro は LemonSqueezy の license key でサブスク機能を有効化します。"},{q:"モデル API コストは含まれますか？",a:"Reso Free は含まれず、各プロバイダのアカウントで課金されます。Reso Pro はサブスク期間中の API 利用を含みます（公正利用範囲内）。"},{q:"後からプラン変更できますか？",a:"はい。別プランを購入後、新しい license key で切り替え可能です。"}],ctaTitle:"Reso を今すぐ始める。",ctaButton:"macOS 版をダウンロード"}},ag=()=>{const[e,t]=y.useState(null),{language:n}=ve(),r=ce(lg,n);return a.jsxs("main",{className:"pt-28 min-h-screen pb-20",children:[a.jsx("section",{children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("div",{className:"mb-16 max-w-3xl",children:[a.jsxs("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:[r.titleLine1,a.jsx("br",{}),r.titleLine2]}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:r.subtitle})]}),a.jsxs("div",{className:"relative mb-24",children:[a.jsx("div",{className:"pointer-events-none absolute -inset-4 md:-inset-x-20 top-20 h-72 bg-gradient-to-r from-orange-500/15 via-sky-400/15 to-emerald-400/15 blur-3xl opacity-50 dark:opacity-40"}),a.jsx("div",{className:"relative grid grid-cols-1 lg:grid-cols-2 gap-6",children:r.tiers.map(i=>{const o=!i.checkoutUrl;return a.jsxs("article",{className:`group relative rounded-3xl p-8 md:p-10 backdrop-blur-xl transition-all duration-300 ${i.featured?"text-white hover:-translate-y-1":"bg-white/80 dark:bg-[#0A0A0A]/90 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"}`,style:i.featured?{background:"linear-gradient(to bottom, #111111, #050505)"}:void 0,children:[i.featured&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/25 via-white/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity"}),a.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-b from-[#111111] to-[#050505]"}),a.jsx("div",{className:"absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"})]}),a.jsxs("div",{className:"relative",children:[a.jsxs("div",{className:"flex items-start justify-between mb-8",children:[a.jsxs("div",{children:[a.jsx("p",{className:`text-xs tracking-[0.2em] uppercase mb-3 font-mono ${i.featured?"text-gray-400":"text-gray-500 dark:text-gray-500"}`,children:i.mode}),a.jsx("h3",{className:"text-2xl font-medium mb-2",children:i.name}),a.jsx("p",{className:`text-sm leading-relaxed max-w-xs ${i.featured?"text-gray-400":"text-gray-600 dark:text-gray-400"}`,children:i.description})]}),i.featured&&a.jsx("span",{className:"inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border border-white/20 bg-white/5 text-gray-300 backdrop-blur-sm",children:r.mostPopular})]}),a.jsxs("div",{className:"flex items-baseline gap-1.5 mb-7 pb-7 relative",children:[a.jsx("span",{className:"text-5xl font-medium tracking-tight font-mono tabular-nums",children:i.priceMain}),i.priceSup&&a.jsx("span",{className:"text-lg font-mono tabular-nums -translate-y-3 opacity-70",children:i.priceSup}),i.cadence&&a.jsx("span",{className:`text-sm ml-1 ${i.featured?"text-gray-400":"text-gray-500 dark:text-gray-400"}`,children:i.cadence}),a.jsx("div",{className:`absolute bottom-0 left-0 right-0 h-px ${i.featured?"bg-gradient-to-r from-transparent via-white/20 to-transparent":"bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"}`})]}),a.jsx("ul",{className:"space-y-4 mb-8",children:i.features.map((l,s)=>a.jsxs("li",{className:"flex gap-3 items-start group/item",children:[a.jsx("div",{className:`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${i.featured?"bg-white/10 ring-1 ring-white/20 group-hover/item:bg-white/15":"bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 group-hover/item:ring-gray-300 dark:group-hover/item:ring-gray-600"}`,children:a.jsx(Bm,{size:11,strokeWidth:2.5,className:i.featured?"text-white":"text-gray-600 dark:text-gray-400"})}),a.jsx("span",{className:`text-sm leading-relaxed transition-colors ${i.featured?"text-gray-300 group-hover/item:text-gray-200":"text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200"}`,children:l})]},s))}),a.jsxs("div",{className:"flex flex-col gap-3",children:[o?a.jsxs("span",{className:"w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium bg-gray-300 text-gray-500 cursor-not-allowed",children:[a.jsx("span",{children:i.cta}),a.jsx(Ei,{size:16})]}):a.jsxs("a",{href:i.checkoutUrl,target:"_blank",rel:"noopener noreferrer",className:`relative w-full flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium transition-all overflow-hidden ${i.featured?"bg-white text-black hover:bg-gray-50":"bg-[#0A0A0A] text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-gray-100"}`,style:{boxShadow:i.featured?"inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)":"inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2)"},children:[a.jsx("span",{children:i.cta}),a.jsx(Ei,{size:16,className:"transition-transform group-hover:translate-x-1"})]}),a.jsx("p",{className:`text-[11px] text-center ${i.featured?"text-gray-500":"text-gray-400 dark:text-gray-500"}`,children:o?r.checkoutPending:i.footnote})]})]})]},i.id)})})]}),a.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mb-16",children:r.privacyPromise}),a.jsxs("div",{className:"mb-24 py-8",children:[a.jsx("p",{className:"text-xs tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-10 font-mono text-center",children:r.howItWorks}),a.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-10",children:r.steps.map((i,o)=>a.jsxs(eu.Fragment,{children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-mono text-gray-900 dark:text-gray-100",children:o+1}),a.jsx("span",{className:"text-gray-900 dark:text-gray-100 font-medium",children:i})]}),o<r.steps.length-1&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden md:block w-16 border-b border-dashed border-gray-300 dark:border-gray-700 mx-4"}),a.jsx("div",{className:"md:hidden h-4 border-l border-dashed border-gray-300 dark:border-gray-700"})]})]},i))}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto leading-relaxed",children:r.stepDescription})]}),a.jsx("div",{className:"max-w-2xl mx-auto",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12",children:[a.jsx("h2",{className:"text-2xl font-medium text-gray-900 dark:text-gray-100",children:r.faqTitle}),a.jsx("div",{className:"space-y-0",children:r.faqs.map((i,o)=>a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>t(e===o?null:o),className:"w-full py-4 flex items-center justify-between text-left group",children:[a.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors pr-4",children:i.q}),a.jsx(Sa,{size:18,className:`text-gray-400 shrink-0 transition-transform duration-200 ${e===o?"rotate-180":""}`})]}),e===o&&a.jsx("div",{className:"pb-4 pr-8",children:a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 leading-relaxed",children:i.a})})]},o))})]})})]})}),a.jsx("section",{className:"py-24",children:a.jsx("div",{className:"max-w-6xl mx-auto px-6",children:a.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[a.jsx("h2",{className:"text-4xl font-medium text-gray-900 dark:text-gray-100 mb-8",children:r.ctaTitle}),a.jsxs("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",download:!0,className:"inline-flex items-center gap-2 bg-[#0A0A0A] dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-black dark:hover:bg-gray-100 transition-all px-6 py-3",style:{boxShadow:"inset 0 1px 0 0 rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.2)"},children:[a.jsx(ja,{size:16}),a.jsx("span",{children:r.ctaButton})]})]})})})]})},sg={en:{headerTitle:"Reso Documentation",headerSubtitle:"Everything you need to get started.",onThisPage:"On this page",nav:{introduction:"Introduction",quickStart:"Quick Start",features:"Features",capture:"Frictionless Capture",privacy:"Privacy",skills:"Dynamic Skills",discovery:"Discovery",routing:"Smart Routing",troubleshooting:"Troubleshooting"},sections:{introduction:{entries:[{id:"what-is",title:"What is Reso?",size:"lg",paragraphs:["Reso is a voice workspace for macOS. It runs transcription locally on Apple Silicon, so your audio never leaves your machine.","Beyond transcription, Reso connects to LLMs to refine text, generate specs from screenshots, and surface patterns across your notes over time."]}]},quickStart:{entries:[{id:"requirements",title:"Requirements",size:"lg",checklist:["macOS 14.0+ (Sonoma)","Apple Silicon (M1, M2, M3, M4)","8GB RAM minimum, 16GB recommended"]},{id:"installation",title:"Installation",size:"lg",paragraphs:["Download the DMG, drag to Applications, done.","On first launch, Reso downloads ML models (~2GB) and requests microphone access. This takes a minute or two, then you are set."],downloadLabel:"Download Reso.dmg",terminalPrefix:"Or via terminal:",terminalCommand:"curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"}]},capture:{entries:[{id:"shadow-recording",title:"Frictionless Capture",size:"lg",paragraphs:["The biggest friction with note-taking apps is the ritual: open app, create note, start typing. By the time you are ready, the thought is gone.","Reso runs quietly in the background, always ready. When you need to capture something, it is already listening. No windows to open, no buttons to click.","The Shadow Recording system keeps a rolling buffer of audio. When you activate Reso, it can include what you said in the previous seconds, so you never lose the beginning of a thought."]},{id:"activation",title:"Activation",size:"md",paragraphs:["Double-tap the Option key to start recording. Double-tap again to stop. The notch bar shows recording status without taking over your screen.","You can also configure custom hotkeys or use the menu bar icon. Capture should feel effortless, not like a separate task."]}]},privacy:{entries:[{id:"local-transcription",title:"Privacy",size:"lg",paragraphs:["Voice recordings often contain sensitive information—names, addresses, financial details, and personal thoughts. Sending this to cloud services requires trust many people are not comfortable with.","Reso runs Whisper locally on Apple Silicon Neural Engine. Your audio is transcribed on your Mac and never uploaded. Raw recordings stay in your control."]},{id:"pii-masking",title:"PII Masking",size:"md",paragraphs:["When you use cloud-required features like refinement or Architect mode, Reso PII Shield detects and masks sensitive data before it leaves your device.","Names, emails, phone numbers, and custom terms are replaced with tokens. The LLM processes masked text, and Reso restores originals locally."]}]},skills:{entries:[{id:"intent-recognition",title:"Dynamic Skills",size:"lg",paragraphs:["Traditional voice memos are passive. You record, forget, and rarely revisit. Reso treats voice input as the start of a workflow, not the end.","The Intent Classifier analyzes what you said and what you likely want to do with it. Brainstorms, action items, meetings, and journals each get different handling."]},{id:"skill-switching",title:"Skill Switching",size:"md",paragraphs:["Skills are specialized handlers for different content types. The Skill Switcher routes your input automatically, or you can invoke skills directly.","Architect mode turns voice + screenshots into structured specs. Code Companion clarifies technical discussions. Quick Action extracts todos and calendar events."]}]},discovery:{entries:[{id:"semantic-clustering",title:"Discovery",size:"lg",paragraphs:["Most note apps force you to organize upfront: choose folders, add tags, pick titles. This creates friction and usually ends in a cluttered archive.","Reso embeds every transcription semantically. Related notes cluster over time. Themes emerge from your content automatically.","After a few weeks, you may discover you have been circling the same problem from different angles. Connections become visible."]},{id:"knowledge-graph",title:"Knowledge Graph",size:"md",paragraphs:["Mindscape shows how your notes connect. Drag nodes, zoom, click to open. It is designed to surface useful relationships quickly.","The graph updates as you add content. New notes automatically find their place based on semantic similarity."]}]},routing:{entries:[{id:"supported-providers",title:"Smart Routing",size:"lg",paragraphs:["Different tasks need different models. Fast requests do not need the heaviest model, while deep analysis benefits from stronger reasoning.","Reso supports Anthropic, OpenAI, Groq, and Google. You can bring your own API keys (Reso Free) or use hosted access (Reso+)."]},{id:"how-routing-works",title:"How Routing Works",size:"md",paragraphs:["The Multi-API Routing Service evaluates each request and picks an appropriate model. Quick reformatting goes to fast models; long-form analysis goes to deeper models.","Context carries across turns, so conversations stay coherent even when models switch in the background."]}]},troubleshooting:{entries:[{id:"slow",title:"Slow Transcription",size:"lg",paragraphs:["Reso should transcribe faster than speech. If it becomes slow, Neural Engine acceleration may not be loading correctly."],pathPrefix:"Check that the CoreML model exists at",pathValue:"~/Library/Application Support/Reso/models/"},{id:"permissions",title:"Permissions",size:"md",paragraphs:["Microphone is required. Screen Recording is required for Architect mode. Grant access in System Settings → Privacy & Security."]}]}}},zh:{headerTitle:"Reso 文档",headerSubtitle:"从安装到进阶，你需要的都在这里。",onThisPage:"本页内容",nav:{introduction:"介绍",quickStart:"快速开始",features:"功能",capture:"无摩擦捕捉",privacy:"隐私",skills:"动态 Skills",discovery:"Discovery",routing:"智能路由",troubleshooting:"故障排查"},sections:{introduction:{entries:[{id:"what-is",title:"什么是 Reso？",size:"lg",paragraphs:["Reso 是一款面向 macOS 的语音工作空间。它在 Apple Silicon 本地完成转录，因此你的音频不会离开设备。","除了转录，Reso 还能连接 LLM 做文本精修、基于截图生成规格说明，并在长期笔记中发现模式。"]}]},quickStart:{entries:[{id:"requirements",title:"运行要求",size:"lg",checklist:["macOS 14.0+（Sonoma）","Apple Silicon（M1、M2、M3、M4）","至少 8GB 内存，推荐 16GB"]},{id:"installation",title:"安装",size:"lg",paragraphs:["下载 DMG，拖到 Applications 即可完成安装。","首次启动时，Reso 会下载 ML 模型（约 2GB）并请求麦克风权限。通常只需一两分钟。"],downloadLabel:"下载 Reso.dmg",terminalPrefix:"也可在终端执行：",terminalCommand:"curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"}]},capture:{entries:[{id:"shadow-recording",title:"无摩擦捕捉",size:"lg",paragraphs:["大多数笔记工具的最大阻力来自仪式感：打开应用、建新文件、再开始输入。等你准备好时，想法常常已经消散。","Reso 在后台静默运行，随时可用。你需要记录时，它已经在等待，不必额外开窗或点按钮。","Shadow Recording 会持续维护一个滚动音频缓冲区。激活 Reso 时，可自动包含前几秒内容，不丢开头。"]},{id:"activation",title:"激活方式",size:"md",paragraphs:["双击 Option 键开始录音，再双击一次结束。notch bar 会显示状态，但不会打断你当前的工作界面。","你也可以设置自定义热键或使用菜单栏图标。目标是让记录成为自然动作，而不是额外任务。"]}]},privacy:{entries:[{id:"local-transcription",title:"隐私",size:"lg",paragraphs:["语音里常含有姓名、地址、财务信息和私人想法。把这些直接传到云端，很多用户并不安心。","Reso 在 Apple Silicon Neural Engine 本地运行 Whisper。音频转录在你的 Mac 上完成，不会上传原始录音。"]},{id:"pii-masking",title:"PII 屏蔽",size:"md",paragraphs:["当你使用需要云端能力的功能（如 refinement、Architect mode）时，Reso 会先在本地识别并遮蔽敏感信息。","姓名、邮箱、手机号和自定义敏感词会被替换成 token。云端只看到脱敏文本，原文在本地恢复。"]}]},skills:{entries:[{id:"intent-recognition",title:"动态 Skills",size:"lg",paragraphs:["传统语音备忘录通常是被动存储：录完就放着。Reso 把语音输入当作 workflow 的起点，而不是终点。","Intent Classifier 会分析你说了什么、你可能想达成什么目标。头脑风暴、行动项、会议纪要和日记会被不同处理。"]},{id:"skill-switching",title:"Skill 切换",size:"md",paragraphs:["Skills 是针对不同内容类型的处理器。Skill Switcher 可以自动路由，也支持你手动指定。","Architect mode 可把语音+截图转为结构化 specs；Code Companion 用于技术表达整理；Quick Action 可提取待办与日程。"]}]},discovery:{entries:[{id:"semantic-clustering",title:"Discovery",size:"lg",paragraphs:["许多笔记工具要求你先分类再记录：选文件夹、打标签、写标题。这个前置步骤会带来明显阻力。","Reso 会对每条转录做语义 embedding，相关笔记随时间自动聚类。主题会自己浮现。","使用几周后，你会看到自己在不同时间反复思考同一问题，之前难以察觉的连接开始可见。"]},{id:"knowledge-graph",title:"知识图谱",size:"md",paragraphs:["Mindscape 视图展示笔记之间的关系。你可以拖拽节点、缩放、点击查看细节，快速发现有价值的联系。","随着内容新增，图谱会自动更新。新笔记会基于语义相似度进入合适位置。"]}]},routing:{entries:[{id:"supported-providers",title:"智能路由",size:"lg",paragraphs:["不同任务需要不同模型。简单请求不必动用最重模型，复杂分析则需要更强推理能力。","Reso 支持 Anthropic、OpenAI、Groq、Google。你可以使用自己的 API key（Reso Free）或托管访问（Reso+）。"]},{id:"how-routing-works",title:"路由机制",size:"md",paragraphs:["Multi-API Routing Service 会根据请求特征自动选择模型。快速改写走高性能模型，长文本分析走深度模型。","上下文会跨轮次连续保留，即使后台切换模型，对话也保持连贯。"]}]},troubleshooting:{entries:[{id:"slow",title:"转录变慢",size:"lg",paragraphs:["Reso 正常情况下应快于实时语速。如果明显变慢，通常是 Neural Engine 加速未正确加载。"],pathPrefix:"请检查 CoreML 模型路径：",pathValue:"~/Library/Application Support/Reso/models/"},{id:"permissions",title:"权限问题",size:"md",paragraphs:["麦克风权限为必需；Architect mode 还需要屏幕录制权限。请在系统设置 → 隐私与安全中授权。"]}]}}},ja:{headerTitle:"Reso ドキュメント",headerSubtitle:"導入から運用まで、必要な情報をまとめています。",onThisPage:"このページ",nav:{introduction:"イントロダクション",quickStart:"クイックスタート",features:"機能",capture:"Frictionless Capture",privacy:"プライバシー",skills:"Dynamic Skills",discovery:"Discovery",routing:"Smart Routing",troubleshooting:"トラブルシューティング"},sections:{introduction:{entries:[{id:"what-is",title:"Reso とは？",size:"lg",paragraphs:["Reso は macOS 向けの音声ワークスペースです。文字起こしは Apple Silicon 上でローカル実行され、音声データは端末外へ出ません。","文字起こしに加え、LLM による文章整形、スクリーンショットからの仕様化、ノート全体のパターン発見を行えます。"]}]},quickStart:{entries:[{id:"requirements",title:"動作要件",size:"lg",checklist:["macOS 14.0+（Sonoma）","Apple Silicon（M1 / M2 / M3 / M4）","メモリ 8GB 以上（16GB 推奨）"]},{id:"installation",title:"インストール",size:"lg",paragraphs:["DMG をダウンロードし、Applications にドラッグすれば完了です。","初回起動時に ML モデル（約 2GB）をダウンロードし、マイク権限を求めます。通常 1〜2 分で完了します。"],downloadLabel:"Reso.dmg をダウンロード",terminalPrefix:"ターミナルから実行する場合：",terminalCommand:"curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"}]},capture:{entries:[{id:"shadow-recording",title:"Frictionless Capture",size:"lg",paragraphs:["多くのメモアプリの摩擦は、開く・新規作成・入力開始という儀式にあります。準備している間にアイデアは消えます。","Reso はバックグラウンドで静かに待機し、必要な瞬間にすぐ記録できます。ウィンドウ操作は不要です。","Shadow Recording は直近音声のローリングバッファを保持し、起動直前の発話も取りこぼしにくくします。"]},{id:"activation",title:"起動方法",size:"md",paragraphs:["Option キーをダブルタップで録音開始、もう一度で停止。notch bar に状態を表示し、作業の邪魔をしません。","ホットキーのカスタマイズやメニューバー操作にも対応。記録は別作業ではなく自然な動作であるべきです。"]}]},privacy:{entries:[{id:"local-transcription",title:"プライバシー",size:"lg",paragraphs:["音声には氏名・住所・金銭情報・個人的な思考など、機微情報が含まれます。クラウド送信には高い信頼が必要です。","Reso は Apple Silicon Neural Engine で Whisper をローカル実行。生音声はアップロードされず、制御は手元に残ります。"]},{id:"pii-masking",title:"PII マスキング",size:"md",paragraphs:["refinement や Architect mode のようにクラウド機能が必要な場合でも、端末外に出る前に機微情報を自動でマスクします。","氏名・メール・電話番号・カスタム語彙は token 化され、LLM はマスク済みテキストのみを処理します。復元はローカルで行います。"]}]},skills:{entries:[{id:"intent-recognition",title:"Dynamic Skills",size:"lg",paragraphs:["従来のボイスメモは受動的で、録って終わりになりがちです。Reso は音声入力を workflow の開始点として扱います。","Intent Classifier が内容と意図を推定し、ブレインストーム、タスク、会議、ジャーナルをそれぞれ適した形に処理します。"]},{id:"skill-switching",title:"Skill Switching",size:"md",paragraphs:["Skills は用途別の処理ハンドラです。Skill Switcher が自動ルーティングし、必要に応じて手動指定も可能です。","Architect mode は音声＋スクリーンショットを構造化 specs に変換し、Code Companion は技術的説明を整理、Quick Action は todo と予定を抽出します。"]}]},discovery:{entries:[{id:"semantic-clustering",title:"Discovery",size:"lg",paragraphs:["多くのノートアプリは事前整理を要求します。フォルダ、タグ、タイトルの選択が入力前の摩擦になります。","Reso は各転写を semantic embedding し、関連ノートを自動クラスタリングします。テーマは自然に立ち上がります。","数週間使うと、同じ課題を別角度で繰り返し考えていたことに気づき、つながりが見えるようになります。"]},{id:"knowledge-graph",title:"Knowledge Graph",size:"md",paragraphs:["Mindscape はノート同士の関係を可視化します。ノードを移動・拡大・選択して、重要な関連性を素早く把握できます。","新しいノートを追加するとグラフは自動更新され、意味的近さに応じて適切な位置へ配置されます。"]}]},routing:{entries:[{id:"supported-providers",title:"Smart Routing",size:"lg",paragraphs:["タスクごとに必要なモデルは異なります。軽い処理は高速モデルで十分ですが、複雑な分析には強い推論が必要です。","Reso は Anthropic / OpenAI / Groq / Google をサポート。BYOK（Reso Free）またはホストアクセス（Reso+）を選べます。"]},{id:"how-routing-works",title:"ルーティングの仕組み",size:"md",paragraphs:["Multi-API Routing Service がリクエスト特性を評価し、適切なモデルを選択します。高速整形と深い分析を自動で使い分けます。","モデル切り替えがあっても文脈は保持されるため、会話の連続性が失われません。"]}]},troubleshooting:{entries:[{id:"slow",title:"文字起こしが遅い",size:"lg",paragraphs:["通常、Reso は発話速度より速く転写します。遅い場合は Neural Engine 加速が正しく読み込まれていない可能性があります。"],pathPrefix:"CoreML モデルの配置を確認：",pathValue:"~/Library/Application Support/Reso/models/"},{id:"permissions",title:"権限",size:"md",paragraphs:["マイク権限は必須です。Architect mode には画面収録権限も必要です。System Settings → Privacy & Security で許可してください。"]}]}}}},ug=["introduction","quickStart","features","capture","privacy","skills","discovery","routing","troubleshooting"],cg=()=>{var h,g;const e=Ue(),{language:t}=ve(),n=ce(sg,t),[r,i]=y.useState("introduction"),[o,l]=y.useState(new Set(["features"]));y.useEffect(()=>{if(!e.hash)return;const f=e.hash.slice(1);if(!ug.includes(f))return;i(f),["capture","privacy","skills","discovery","routing"].includes(f)&&l(b=>new Set([...b,"features"]))},[e.hash]);const s=f=>{const x=new Set(o);x.has(f)?x.delete(f):x.add(f),l(x)},u=y.useMemo(()=>[{id:"introduction",label:n.nav.introduction},{id:"quickStart",label:n.nav.quickStart},{id:"features",label:n.nav.features,children:[{id:"capture",label:n.nav.capture},{id:"privacy",label:n.nav.privacy},{id:"skills",label:n.nav.skills},{id:"discovery",label:n.nav.discovery},{id:"routing",label:n.nav.routing}]},{id:"troubleshooting",label:n.nav.troubleshooting}],[n]),c=((g=(h=n.sections[r])==null?void 0:h.entries)==null?void 0:g.map(f=>({id:f.id,label:f.title})))||[];return a.jsx("main",{className:"pt-28 min-h-screen pb-20",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("section",{className:"mb-16 max-w-3xl",children:[a.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:n.headerTitle}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:n.headerSubtitle})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] gap-8 xl:gap-10",children:[a.jsx("aside",{className:"hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto",children:a.jsx("nav",{className:"space-y-1",children:u.map(f=>a.jsxs("div",{children:[a.jsx("button",{onClick:()=>{f.children?s(f.id):i(f.id)},className:`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${r===f.id?"bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:f.label}),f.children&&o.has(f.id)&&a.jsx("div",{className:"ml-3 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3",children:f.children.map(x=>a.jsx("button",{onClick:()=>i(x.id),className:`w-full text-left rounded-lg px-3 py-1.5 text-sm transition-colors ${r===x.id?"text-gray-900 dark:text-white font-medium":"text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"}`,children:x.label},x.id))})]},f.id))})}),a.jsx("article",{className:"space-y-8",children:a.jsx(dg,{section:n.sections[r]})}),a.jsx("aside",{className:"hidden xl:block xl:sticky xl:top-28 xl:self-start",children:c.length>0&&a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3",children:n.onThisPage}),a.jsx("nav",{className:"space-y-1",children:c.map(f=>a.jsx("a",{href:`#${f.id}`,className:"block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:f.label},f.id))})]})})]})]})})},dg=({section:e})=>e!=null&&e.entries?a.jsx("div",{className:"space-y-8",children:e.entries.map(t=>{var n;return a.jsxs("section",{id:t.id,className:"scroll-mt-28",children:[a.jsx("h2",{className:`${t.size==="md"?"text-xl":"text-2xl"} font-medium text-gray-900 dark:text-gray-100 mb-4`,children:t.title}),a.jsxs("div",{className:"prose-content space-y-4",children:[t.checklist&&a.jsx("ul",{className:"space-y-2",children:t.checklist.map(r=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx(Dm,{size:14,className:"text-green-600 dark:text-green-400"}),a.jsx("span",{children:r})]},r))}),(n=t.paragraphs)==null?void 0:n.map(r=>a.jsx("p",{children:r},r)),t.downloadLabel&&a.jsx("a",{href:"https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors",children:t.downloadLabel}),t.terminalCommand&&a.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[t.terminalPrefix," ",a.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs",children:t.terminalCommand})]}),t.pathValue&&a.jsxs("p",{children:[t.pathPrefix," ",a.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs",children:t.pathValue})]})]})]},t.id)})}):null,fg="https://reso-contact.gaoyukun1205.workers.dev",hg={en:{submitSuccessTitle:"Thanks for reaching out!",submitSuccessBody:"We've received your feedback and will get back to you as soon as possible.",submitAnother:"Submit another",sectionTag:"Contact Us",title:"Reso Support",intro:"Thanks for reaching out! We're here to help with any bugs, feedback, or questions about Reso. We'll get back to you as soon as possible.",nameLabel:"What's your name?",namePlaceholder:"Your name",emailLabel:"Your Email",messageLabel:"How can we help?",messageHint:"Please describe the issue, or share your feedback.",messagePlaceholder:"Tell us what's on your mind...",uploadLabel:"File Upload",uploadHint:"Screenshots or Screen Recording (Optional)",uploadAction:"Click to choose a file or drag here",uploadLimit:"Size limit: 10 MB",fileTooLarge:"File size must be less than 10MB",submitFailed:"Failed to submit. Please try again.",submitting:"Submitting...",submit:"Submit"},zh:{submitSuccessTitle:"感谢你的反馈！",submitSuccessBody:"我们已收到你的信息，会尽快回复。",submitAnother:"继续提交",sectionTag:"联系我们",title:"Reso 支持",intro:"感谢你联系我们！无论是 bug、建议还是产品问题，我们都会尽快跟进。",nameLabel:"你的名字是？",namePlaceholder:"你的名字",emailLabel:"你的邮箱",messageLabel:"我们可以如何帮助你？",messageHint:"请描述你遇到的问题，或分享反馈。",messagePlaceholder:"告诉我们你的想法...",uploadLabel:"上传文件",uploadHint:"截图或屏幕录制（可选）",uploadAction:"点击选择文件或拖拽到这里",uploadLimit:"大小上限：10 MB",fileTooLarge:"文件大小不能超过 10MB",submitFailed:"提交失败，请稍后重试。",submitting:"提交中...",submit:"提交"},ja:{submitSuccessTitle:"お問い合わせありがとうございます！",submitSuccessBody:"フィードバックを受け取りました。できるだけ早くご返信します。",submitAnother:"もう一度送信",sectionTag:"Contact",title:"Reso サポート",intro:"バグ報告、要望、質問など何でもお送りください。できるだけ早く対応します。",nameLabel:"お名前",namePlaceholder:"お名前",emailLabel:"メールアドレス",messageLabel:"ご用件",messageHint:"発生した問題やフィードバックを具体的に記載してください。",messagePlaceholder:"内容をご記入ください...",uploadLabel:"ファイル添付",uploadHint:"スクリーンショットまたは画面収録（任意）",uploadAction:"クリックして選択、またはここへドラッグ",uploadLimit:"上限サイズ: 10 MB",fileTooLarge:"ファイルサイズは 10MB 未満にしてください",submitFailed:"送信に失敗しました。しばらくして再度お試しください。",submitting:"送信中...",submit:"送信"}},pg=()=>{const{language:e}=ve(),t=ce(hg,e),[n,r]=y.useState({name:"",email:"",message:""}),[i,o]=y.useState(null),[l,s]=y.useState(!1),[u,c]=y.useState(!1),[h,g]=y.useState(null),[f,x]=y.useState(""),b=y.useRef(null),v=S=>{const{name:C,value:E}=S.target;r(M=>({...M,[C]:E}))},w=S=>{S.preventDefault(),S.stopPropagation(),S.type==="dragenter"||S.type==="dragover"?s(!0):S.type==="dragleave"&&s(!1)},p=S=>{S.preventDefault(),S.stopPropagation(),s(!1),S.dataTransfer.files&&S.dataTransfer.files[0]&&d(S.dataTransfer.files[0])},d=S=>{if(S.size>10*1024*1024){x(t.fileTooLarge);return}o(S),x("")},m=S=>{S.target.files&&S.target.files[0]&&d(S.target.files[0])},k=()=>{o(null),b.current&&(b.current.value="")},j=async S=>{S.preventDefault(),c(!0),g(null),x("");try{const C=new FormData;if(C.append("name",n.name),C.append("email",n.email),C.append("message",n.message),i&&C.append("file",i),!(await fetch(fg,{method:"POST",body:C})).ok)throw new Error("Failed to submit feedback");g("success"),r({name:"",email:"",message:""}),o(null)}catch{g("error"),x(t.submitFailed)}finally{c(!1)}};return h==="success"?a.jsx("main",{className:"pt-28 min-h-screen pb-20",children:a.jsx("div",{className:"max-w-2xl mx-auto px-6",children:a.jsxs("div",{className:"text-center py-16",children:[a.jsx("div",{className:"w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center",children:a.jsx(Fm,{className:"w-8 h-8 text-green-600 dark:text-green-400"})}),a.jsx("h1",{className:"text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4",children:t.submitSuccessTitle}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:t.submitSuccessBody}),a.jsx("button",{onClick:()=>g(null),className:"px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:t.submitAnother})]})})}):a.jsx("main",{className:"pt-28 min-h-screen pb-20",children:a.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[a.jsxs("section",{className:"mb-10",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5",children:t.sectionTag}),a.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:t.title}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.intro})]}),a.jsxs("form",{onSubmit:j,className:"space-y-6",children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.nameLabel," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:n.name,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all",placeholder:t.namePlaceholder})]}),a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.emailLabel," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:n.email,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all",placeholder:"you@example.com"})]}),a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:[t.messageLabel," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:t.messageHint}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:n.message,onChange:v,className:"w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all resize-y min-h-[120px]",placeholder:t.messagePlaceholder})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2",children:t.uploadLabel}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-3",children:t.uploadHint}),i?a.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:i.name}),a.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[(i.size/1024/1024).toFixed(2)," MB"]})]}),a.jsx("button",{type:"button",onClick:k,className:"p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors",children:a.jsx(Cd,{size:18,className:"text-gray-500 dark:text-gray-400"})})]}):a.jsxs("div",{onDragEnter:w,onDragLeave:w,onDragOver:w,onDrop:p,onClick:()=>{var S;return(S=b.current)==null?void 0:S.click()},className:`flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all ${l?"border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5":"border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20"}`,children:[a.jsx(Hm,{size:24,className:"text-gray-400 dark:text-gray-500 mb-3"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-1",children:t.uploadAction}),a.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:t.uploadLimit})]}),a.jsx("input",{ref:b,type:"file",onChange:m,accept:"image/*,video/*,.pdf",className:"hidden"})]}),f&&a.jsx("p",{className:"text-sm text-red-500 dark:text-red-400",children:f}),a.jsx("button",{type:"submit",disabled:u,className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:u?a.jsxs(a.Fragment,{children:[a.jsx(Wm,{size:16,className:"animate-spin"}),a.jsx("span",{children:t.submitting})]}):a.jsx("span",{children:t.submit})})]})]})})};function $s({skill:e,onInstall:t,isTone:n=!1}){const{language:r}=ve(),i=ce({en:{pro:"Pro",more:"more",install:"Install",tone:"Tone",skill:"Skill"},zh:{pro:"Pro",more:"更多",install:"安装",tone:"Tone",skill:"Skill"},ja:{pro:"Pro",more:"件",install:"インストール",tone:"Tone",skill:"Skill"}},r);return a.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl",children:mg(e.icon)}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:e.name}),e.category&&a.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 capitalize",children:e.category})]})]}),e.requiresPro&&a.jsx("span",{className:"px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded",children:i.pro})]}),a.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2",children:e.description}),e.keywords&&e.keywords.length>0&&a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.keywords.slice(0,3).map((o,l)=>a.jsx("span",{className:"px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded",children:o},l)),e.keywords.length>3&&a.jsxs("span",{className:"px-2 py-1 text-xs text-gray-500 dark:text-gray-400",children:["+",e.keywords.length-3," ",i.more]})]}),a.jsxs("button",{onClick:t,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),a.jsxs("span",{children:[i.install," ",n?i.tone:i.skill]})]})]})}function mg(e){return{"calendar.badge.plus":"📅",magnifyingglass:"🔍","envelope.fill":"✉️","star.fill":"⭐","wand.and.stars":"✨","paintbrush.fill":"🎨","doc.text.fill":"📄","speaker.wave.3.fill":"🔊"}[e]||"✨"}const gg={en:{failedCatalog:"Failed to load catalog",appNotOpened:"Reso app didn't open? Make sure you have Reso installed. Would you like to download it?",loading:"Loading marketplace...",errorPrefix:"Error:",title:"Reso Marketplace",subtitle:"Discover and install powerful skills and tone presets to enhance your Reso experience",skills:"Skills",tones:"Tone Presets",empty:"No items available at the moment. Check back soon!"},zh:{failedCatalog:"加载 catalog 失败",appNotOpened:"Reso 没有打开？请先确认是否已安装 Reso。现在前往下载吗？",loading:"正在加载 Marketplace...",errorPrefix:"错误：",title:"Reso Marketplace",subtitle:"发现并安装实用 Skills 与 Tone 预设，扩展你的 Reso 体验。",skills:"Skills",tones:"Tone Presets",empty:"当前暂无可用项目，请稍后再来查看。"},ja:{failedCatalog:"catalog の読み込みに失敗しました",appNotOpened:"Reso アプリが開きませんでしたか？インストール済みか確認し、ダウンロードしますか？",loading:"Marketplace を読み込み中...",errorPrefix:"エラー:",title:"Reso Marketplace",subtitle:"便利な Skills と Tone Presets を見つけてインストールし、Reso を拡張しましょう。",skills:"Skills",tones:"Tone Presets",empty:"現在利用できる項目はありません。しばらくしてから再度ご確認ください。"}};function yg(){const[e,t]=y.useState(null),[n,r]=y.useState(!0),[i,o]=y.useState(null),{language:l}=ve(),s=ce(gg,l);y.useEffect(()=>{fetch("/api/catalog.json").then(c=>{if(!c.ok)throw new Error(s.failedCatalog);return c.json()}).then(c=>{t(c),r(!1)}).catch(c=>{console.error("Failed to load catalog:",c),o(c.message),r(!1)})},[s.failedCatalog]);const u=(c,h)=>{const g=`reso://install/${h}?id=${c}`;window.location.href=g,setTimeout(()=>{window.confirm(s.appNotOpened)&&(window.location.href="/pricing")},2e3)};return n?a.jsx("div",{className:"min-h-screen flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.loading})]})}):i?a.jsx("div",{className:"min-h-screen flex items-center justify-center",children:a.jsx("div",{className:"text-center",children:a.jsxs("p",{className:"text-red-600 dark:text-red-400",children:[s.errorPrefix," ",i]})})}):a.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:s.title}),a.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:s.subtitle})]}),(e==null?void 0:e.skills)&&e.skills.length>0&&a.jsxs("section",{className:"mb-16",children:[a.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:s.skills}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.skills.map(c=>a.jsx($s,{skill:c,onInstall:()=>u(c.id,"skill")},c.id))})]}),(e==null?void 0:e.tones)&&e.tones.length>0&&a.jsxs("section",{children:[a.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:s.tones}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.tones.map(c=>a.jsx($s,{skill:c,onInstall:()=>u(c.id,"tone"),isTone:!0},c.id))})]}),(!(e!=null&&e.skills)||e.skills.length===0)&&(!(e!=null&&e.tones)||e.tones.length===0)&&a.jsx("div",{className:"text-center py-12",children:a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.empty})})]})})}const xg={en:{categories:[{id:"all",label:"All Skills"},{id:"productivity",label:"Productivity"},{id:"writing",label:"Writing"},{id:"code",label:"Code"},{id:"communication",label:"Communication"}],appNotOpened:"Reso didn't open? Make sure you have Reso installed.",loading:"Loading skills...",title:"Extend Reso with skills.",subtitle:"Powerful skills crafted by our community to enhance your voice workflows.",featured:"Featured",installSkill:"Install Skill",install:"Install",shareTitle:"Share Your Expertise",shareBody:"Built something useful? Submit your skill and help the Reso community grow.",submitSkill:"Submit Your Skill",modalTitle:"Submit Your Skill",skillName:"Skill Name",skillNamePlaceholder:"My Awesome Skill",description:"Description",descriptionPlaceholder:"What does your skill do?",email:"Your Email",cancel:"Cancel",submit:"Submit",modalClose:"Close"},zh:{categories:[{id:"all",label:"全部 Skills"},{id:"productivity",label:"效率"},{id:"writing",label:"写作"},{id:"code",label:"编程"},{id:"communication",label:"沟通"}],appNotOpened:"Reso 没有打开？请先确认你已安装 Reso。",loading:"正在加载 Skills...",title:"用 Skills 扩展 Reso。",subtitle:"由社区打造的实用能力，帮助你升级语音 workflow。",featured:"精选",installSkill:"安装 Skill",install:"安装",shareTitle:"分享你的专长",shareBody:"做了一个好用的 Skill？提交给我们，让更多 Reso 用户受益。",submitSkill:"提交 Skill",modalTitle:"提交你的 Skill",skillName:"Skill 名称",skillNamePlaceholder:"My Awesome Skill",description:"描述",descriptionPlaceholder:"你的 Skill 能做什么？",email:"你的邮箱",cancel:"取消",submit:"提交",modalClose:"关闭"},ja:{categories:[{id:"all",label:"すべての Skills"},{id:"productivity",label:"生産性"},{id:"writing",label:"ライティング"},{id:"code",label:"コード"},{id:"communication",label:"コミュニケーション"}],appNotOpened:"Reso が開きませんでしたか？Reso がインストールされているか確認してください。",loading:"Skills を読み込み中...",title:"Skills で Reso を拡張。",subtitle:"コミュニティが作成したスキルで、音声 workflow を強化できます。",featured:"注目",installSkill:"Skill をインストール",install:"インストール",shareTitle:"あなたの知見を共有",shareBody:"便利な Skill を作ったら、投稿して Reso コミュニティを一緒に育てましょう。",submitSkill:"Skill を投稿",modalTitle:"Skill を投稿",skillName:"Skill 名",skillNamePlaceholder:"My Awesome Skill",description:"説明",descriptionPlaceholder:"この Skill は何をしますか？",email:"メールアドレス",cancel:"キャンセル",submit:"送信",modalClose:"閉じる"}};function vg(){var x,b;const[e,t]=y.useState(null),[n,r]=y.useState(!0),[i,o]=y.useState("all"),[l,s]=y.useState(!1),{language:u}=ve(),c=ce(xg,u);y.useEffect(()=>{fetch("/api/catalog.json").then(v=>v.json()).then(v=>{t(v),r(!1)}).catch(v=>{console.error("Failed to load catalog:",v),r(!1)})},[]);const h=(v,w="skill")=>{const p=`reso://install/${w}?id=${v}`;window.location.href=p,setTimeout(()=>{window.confirm(c.appNotOpened)&&(window.location.href="/pricing")},2e3)},g=((x=e==null?void 0:e.skills)==null?void 0:x.filter(v=>i==="all"||v.category===i))||[],f=(b=e==null?void 0:e.skills)==null?void 0:b[0];return n?a.jsx("div",{className:"pt-28 min-h-screen flex items-center justify-center",children:a.jsx("div",{className:"max-w-6xl mx-auto px-6",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"w-12 h-12 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin mx-auto mb-4"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:c.loading})]})})}):a.jsxs("main",{className:"pt-28 min-h-screen pb-20",children:[a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("section",{className:"mb-16 max-w-3xl",children:[a.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:c.title}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:c.subtitle})]}),f&&a.jsx(wg,{skill:f,onInstall:()=>h(f.id),copy:c}),a.jsx("section",{className:"mb-8",children:a.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2",children:c.categories.map(v=>a.jsx("button",{onClick:()=>o(v.id),className:`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i===v.id?"bg-black dark:bg-white text-white dark:text-black":"border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-black/50"}`,children:v.label},v.id))})}),a.jsx("section",{className:"mb-16",children:a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:g.slice(1).map(v=>a.jsx(kg,{skill:v,onInstall:()=>h(v.id),copy:c},v.id))})}),a.jsx("section",{children:a.jsxs("div",{className:"rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-10 text-center",children:[a.jsx("h3",{className:"text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4",children:c.shareTitle}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed",children:c.shareBody}),a.jsxs("button",{onClick:()=>s(!0),className:"inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[a.jsx("span",{children:c.submitSkill}),a.jsx(an,{size:16})]})]})})]}),l&&a.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6",onClick:()=>s(!1),children:a.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-black/10 dark:border-white/10",onClick:v=>v.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsx("h2",{className:"text-2xl font-medium text-gray-900 dark:text-gray-100",children:c.modalTitle}),a.jsx("button",{onClick:()=>s(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl","aria-label":c.modalClose,children:"×"})]}),a.jsxs("form",{onSubmit:v=>{v.preventDefault(),window.open("https://tally.so/r/obDo51","_blank"),s(!1)},className:"space-y-5",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.skillName}),a.jsx("input",{type:"text",required:!0,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all",placeholder:c.skillNamePlaceholder})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.description}),a.jsx("textarea",{required:!0,rows:4,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none",placeholder:c.descriptionPlaceholder})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:c.email}),a.jsx("input",{type:"email",required:!0,className:"w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all",placeholder:"you@example.com"})]}),a.jsxs("div",{className:"flex gap-4 pt-2",children:[a.jsx("button",{type:"button",onClick:()=>s(!1),className:"flex-1 px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors",children:c.cancel}),a.jsx("button",{type:"submit",className:"flex-1 px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:c.submit})]})]})]})})]})}function wg({skill:e,onInstall:t,copy:n}){return a.jsxs("div",{className:"mb-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-8 md:p-10",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10",children:[a.jsx("span",{className:"w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full"}),a.jsx("span",{className:"text-xs uppercase tracking-[0.16em] text-gray-700 dark:text-gray-300 font-medium",children:n.featured})]}),a.jsx("h2",{className:"text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4 tracking-tight",children:e.name}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl",children:e.description}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:e.keywords.slice(0,4).map((r,i)=>a.jsx("span",{className:"px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-xs text-gray-700 dark:text-gray-300 font-medium",children:r},i))}),a.jsxs("button",{onClick:t,className:"inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors",children:[a.jsx(ja,{size:16}),a.jsx("span",{children:n.installSkill})]})]})}function kg({skill:e,onInstall:t,copy:n}){return a.jsxs("article",{className:"rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 hover:border-black/20 dark:hover:border-white/20 transition-all",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl",children:bg(e.icon)}),e.requiresPro&&a.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-gray-700 dark:text-gray-300",children:"PRO"})]}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.name}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2",children:e.description}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:e.keywords.slice(0,3).map((r,i)=>a.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs text-gray-600 dark:text-gray-400",children:r},i))}),a.jsx("button",{onClick:t,className:"w-full py-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors",children:n.install})]})}function bg(e){return{"calendar.badge.plus":"📅",magnifyingglass:"🔍","envelope.fill":"✉️","star.fill":"⭐","wand.and.stars":"✨","paintbrush.fill":"🎨","doc.text.fill":"📄","speaker.wave.3.fill":"🔊"}[e]||"✨"}const Sg=[{id:11,date:"Feb 2026",category:"Product",title:{en:"Between Building and Using",zh:"在构建与使用之间",ja:"作ることと使うことのあいだ"},summary:{en:"Lately I keep being reminded: I'm not studying people from outside. I wear both hats, and that changes how I build.",zh:"这阵子我反复被一件事提醒：我不是在研究使用者，我本来就是其中一员。",ja:"最近何度も思い知らされる。私は使い手を外から観察しているのではなく、作り手と使い手の両方だということ。"},content:{en:`This week I got humbled again.

During the day I tuned the flow and felt the chain was finally complete. At night I used it for real writing and still got blocked by a few startup steps.

That moment was clear: I'm not standing outside the people I build for. I wear both hats. I'm a builder and a user at the same time.

### I Don't Observe from Distance

With the builder hat on, I think about activation flow, edge branches, and extensibility.

With the user hat on, I care about three things: Is it smooth? Is it fast? Does it interrupt me?

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

我戴着构造者这顶帽子时，会想 activation flow、异常分支、可扩展性。

我戴着使用者这顶帽子时，只在意三件事：顺不顺、快不快、会不会打断我。

这两套感受都在我身上，所以我现在尽量少说“使用者可能会怎样”，而是直接写“我刚刚就是这样卡住的”。

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

作り手の帽子をかぶると、activation flow、異常分岐、拡張性を考えます。

使い手の帽子をかぶると、気になるのは3つだけです。滑らかか、速いか、途中で邪魔されないか。

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

この道はまだ続いています。私にとって設計は一度きりの答えではなく、実使用と一緒に育つものです。`}},{id:10,date:"Feb 2026",category:"Product",title:{en:"Onboarding That Feels Natural",zh:"更自然的 Onboarding",ja:"自然に始まるオンボーディング"},summary:{en:"I wanted first launch to feel like meeting a friend: calm, clear, and easy to continue.",zh:"我希望第一次打开应用像认识新朋友：节奏温和、信息清楚、可以自然继续。",ja:"初回起動は、友だちに会うように始まってほしい。落ち着いて、分かりやすく、続けやすく。"},content:{en:`Whenever I open a new app and get hit with three permission dialogs in a row, I almost always close them out of reflex.

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

最高のオンボーディングは、オンボーディングに見えません。アプリが最初からあなたを分かっているように感じられることです。`}},{id:9,date:"Jan 2026",category:"Design",title:{en:"The UI You Never Think About",zh:"你不会注意到的 UI",ja:"意識されない UI"},summary:{en:"Cutting most of my UI made me admit a hard truth: the control panel I enjoy building is often not what I enjoy using.",zh:"砍掉大部分 UI 之后，我才承认一件事：我爱做的控制面板，往往不是我爱用的体验。",ja:"UI を大きく削って、ようやく認めた。作る側として好きな操作盤は、使う側として心地よい体験と一致しないことが多い。"},content:{en:`Honestly, my early beta looked like a DJ console. Knobs everywhere. Toggles for every route, every model variation, every debug parameter. It made sense at that stage because I needed to test hundreds of permutations.

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

その基準はこれからも変わり続ける。だからこそ、もっとインスピレーションとフィードバックと反復が楽しみです。あなたが意識しない UI ほど、実は最も考え抜かれているのです。`}},{id:8,date:"Dec 2025",category:"Building",title:{en:"Making Ideas Visible: The Knowledge Graph",zh:"让想法可见：Knowledge Graph",ja:"アイデアを可視化する: Knowledge Graph"},summary:{en:"I brought data-science pattern discovery into daily workflow to build a second pair of eyes for my own thinking.",zh:"我把数据分析里的模式发现带进日常 workflow，只想做一双能看见自己思路的“第二双眼睛”。",ja:"データ分析のパターン発見を日常 workflow に持ち込み、自分の思考を見るための「もう一組の目」を作りたかった。"},content:{en:`I come from a science background. In industry, I spent years processing massive datasets—machine learning, clustering algorithms, high-dimensional visualization.

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

メモ整理だけではなく、自分を見えるようにすること。`}},{id:7,date:"Nov 2025",category:"Building",title:{en:"Teaching an App to Find Patterns",zh:"教应用学会发现模式",ja:"アプリにパターン発見を教える"},summary:{en:"I built semantic clustering for a problem I also had: the more voice notes you save, the harder they are to revisit.",zh:"我做 semantic clustering，是因为这个问题我自己也有：语音笔记越多，越难回看。",ja:"semantic clustering を作ったのは、私自身の課題でもあったからです。音声メモは増えるほど振り返りづらくなる。"},content:{en:`An early Reso user once told me: "I have 200 voice notes and I can't remember what half of them are about."

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

見えなかったものを見えるようにする。それが魔法です。`}},{id:6,date:"Oct 2025",category:"Infrastructure",title:{en:"When One API Isn't Enough",zh:"当一个 API 不够用时",ja:"1つの API では足りないとき"},summary:{en:"I built multi-provider routing not only for fallback, but because I needed a playground to try new models anytime.",zh:"我做 multi-provider routing，不只是为了兜底，更因为我自己需要一个随时试新模型的 playground。",ja:"multi-provider routing は冗長化のためだけではない。私自身が、いつでも新モデルを試せる playground を必要としていた。"},content:{en:`I'm the kind of person who tries every new model the moment it drops.

New Claude version? I want to feel the difference. GPT update? Let me compare. A new player enters the scene? Sign me up. It's not just about benchmarks—I genuinely enjoy experiencing how different models *think*.

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

That's the goal. Not just reliability. A playground.`,zh:`我属于那种新模型一发布就会立刻去试的人。

Claude 出新版本？我想亲自感受差异。GPT 更新？我要对比一下。新玩家进场？立刻报名。对我来说不只是 benchmark，我是真的喜欢体验不同模型*思考*方式的差别。

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

这才是目标。不只是稳定性，而是一个 playground。`,ja:`私は新しいモデルが出た瞬間に試したくなるタイプです。

Claude の新版本？差を体感したい。GPT の更新？比較したい。新規プレイヤー参入？すぐ触りたい。ベンチマークだけじゃなく、モデルごとの*思考の癖*を味わうのが好きなんです。

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

目標はそこです。信頼性だけじゃない。playground です。`}},{id:5,date:"Sep 2025",category:"Security",title:{en:"Privacy by Design: The PII Shield",zh:"隐私内建：PII Shield",ja:"設計で守るプライバシー: PII Shield"},summary:{en:"This started from my own anxiety about voice privacy and became an architecture where voice fingerprints never leave your Mac.",zh:"这件事从我对语音隐私的焦虑开始，最后落成一套“声纹不离开 Mac”的架构。",ja:"この機能は、私自身の音声プライバシーへの不安から始まり、声紋を Mac 外へ出さない設計に着地した。"},content:{en:`This feature came from a deeply personal need.

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

その透明性こそが、本当の機能です。`}},{id:4,date:"Aug 2025",category:"Product",title:{en:"From Vision to Code: Building Architect Mode",zh:"从视觉到代码：打造 Architect Mode",ja:"ビジョンをコードへ: Architect Mode を作る"},summary:{en:"I built Architect Mode to close the gap between what I can already see on screen and what I need to tell an AI coding assistant.",zh:"我做 Architect Mode，是为了把“我已经看见的问题”更快地变成 AI coding assistant 能执行的规格。",ja:"Architect Mode は、画面で見えている修正点を AI coding assistant が実行できる仕様へ最短で落とすために作った。"},content:{en:`As developers, we often know *exactly* what we want to build. The bottleneck isn't understanding—it's communication.

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

優れたツールは思考法を変えません。思考と実行の摩擦を減らすだけです。`}},{id:3,date:"Jul 2025",category:"Building",title:{en:"The Recording That Never Dies",zh:"不会消失的录音",ja:"消えない録音"},summary:{en:"After losing recordings myself, I built Shadow Recording so crashes and kernel panics no longer erase ideas.",zh:"我自己丢过录音，所以做了 Shadow Recording：让崩溃和 kernel panic 也带不走想法。",ja:"自分で録音を失った経験があるから、Shadow Recording を作った。クラッシュや kernel panic でもアイデアを失わないために。"},content:{en:`I've lost voice recordings before. App crashes, battery dies, system freezes—poof, gone.

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

そのときツールは単なる utility を超えて、思考プロセスの一部になります。`}},{id:2,date:"Jun 2025",category:"Performance",title:{en:"Obsessing Over 10x",zh:"为 10x 执着",ja:"10x への執念"},summary:{en:"To make transcription truly keep up with thought, I spent two weeks on compiler flags and CoreML to push speed to 10x.",zh:"为了让转写真正跟上思路，我花了两周追 compiler flags 和 CoreML，把速度推到 10x。",ja:"転写を思考速度に追いつかせるために、2週間かけて compiler flags と CoreML を詰め、10x まで押し上げた。"},content:{en:`I'll admit it: I'm obsessed with performance.

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

Here's the frustrating part: This isn't documented anywhere obvious.

I found it by:
1. Reading Whisper.cpp GitHub issues
2. Experimenting with compiler flags
3. Profiling dozens of builds with Instruments

It took two weeks of trial and error.

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

最让人抓狂的是：这些信息没有明显文档告诉你。

我是靠下面这些方式挖出来的：
1. 翻 Whisper.cpp 的 GitHub issues
2. 一个个试 compiler flags
3. 用 Instruments 做几十次 profile

前后折腾了两周。

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

いちばん厄介なのは、これが分かりやすく文書化されていないことです。

私は次の手順で辿り着きました。
1. Whisper.cpp の GitHub issues を読む
2. compiler flags を実験する
3. Instruments で何十ビルドもプロファイルする

試行錯誤に2週間。

でも結果は大きい。Reso は **話す速度より速く** 文字起こしできます。M2 Pro なら 8 秒クリップを 0.75 秒で処理。

### なぜ重要か

速度は単なる機能ではなく、ツールの使い方そのものを変えます。

転写が即時なら、速度を意識しなくなる。録音すれば文字が出るだけ。

それは「使っているツール」と「動いていることを忘れるツール」の違いです。

最高のツールは存在感を消します。`}},{id:1,date:"May 2025",category:"Vision",title:{en:"Why I Built This",zh:"我为什么做这个",ja:"これを作った理由"},summary:{en:"I built Reso to take wording and structuring off my plate, so more of my time stays with thinking and building.",zh:"我做 Reso，是想把措辞和结构化从自己手上拿开，把时间还给思考与构建。",ja:"Reso を作った理由は、言語化と構造化の負担を自分から外し、思考と build に時間を戻したかったから。"},content:{en:`There's an inherent tension in how we express ideas: speaking is fragmented, scattered, full of pauses and restarts. But writing—typing—is one of the most fluent forms of human expression.

The gap between the two is where ideas get lost.

### The Real Problem

I wanted to free up more time for building. Not transcription—*building*. The kind of deep work where you're creating, thinking, designing.

Typing takes time. Editing takes more. And when your thoughts come out messy (as spoken thoughts always do), you end up spending hours polishing what should have taken minutes.

**What if someone else handled the wording and structuring?** What if you could just *think*, and the clean output appeared?

That's what Reso does. We take care of the typing so you can focus on contemplating.

### More Than a Voice Recorder

There are plenty of recording tools and transcription APIs out there. But going from a raw thought to a usable artifact—and eventually to a *thought partner*—that journey matters.

Reso helps you:
- **Discover ideas** you didn't know you had
- **Reflect** on how you think, not just what you think
- **Track** how your time flows and what you're building

When I look back at my voice notes from months ago, I'm not just reading words. I'm seeing where my time went. What I got right. How my thinking evolved. It's a record of building—and a tool for self-discovery.

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

市场上并不缺录音工具和转写 API。但从“原始想法”走到“可用产物”，再走到“思维伙伴”，这段路径本身才关键。

Reso 帮你：
- **发现想法**：看见你原本没意识到的线索
- **反思思维**：不仅看你在想什么，也看你是怎么想的
- **追踪时间**：理解你的时间流向和你真正在构建什么

当我回看几个月前的语音笔记，我不只是看文字。我看到的是时间去了哪里、哪些判断做对了、思路怎么演化了。它既是构建记录，也是自我发现工具。

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

録音ツールや転写 API は世の中に十分あります。けれど「生の思考」から「使える成果物」、そして最終的に「thought partner」へ進む道筋こそ重要です。

Reso が助けるのは次の3点です。
- **発見する**: 自分でも気づかなかったアイデアを見つける
- **内省する**: 何を考えたかだけでなく、どう考えたかを見る
- **追跡する**: 時間の流れと、自分が何を作ってきたかを把握する

数か月前の音声メモを見返すとき、私は単に文字を読むわけではありません。時間の使い方、正しかった判断、思考の変化が見える。build の記録であり、自己発見の道具でもあります。

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

目標は声を集めることではない。**あなたの働き方に共鳴すること**です。`}}],jg=["en","zh","ja"],Ng=e=>Sg.map(({title:t,summary:n,content:r,...i})=>({...i,title:t[e],summary:n[e],content:r[e]})),Pd=jg.reduce((e,t)=>(e[t]=Ng(t),e),{});Pd.en;const On=e=>{if(!e)return e;const t=[],n=/(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;let r=0,i,o=0;for(;(i=n.exec(e))!==null;)i.index>r&&t.push(e.slice(r,i.index)),i[1]?t.push(a.jsx("strong",{className:"font-semibold",children:i[2]},o++)):i[3]?t.push(a.jsx("em",{children:i[4]},o++)):i[5]&&t.push(a.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono",children:i[6]},o++)),r=i.index+i[0].length;return r<e.length&&t.push(e.slice(r)),t.length>0?t:e},Cg=e=>e.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),Td=(e,t="journey")=>{if(!e)return[];const n=new Map;return e.split(`

`).filter(r=>r.startsWith("### ")).map((r,i)=>{const o=r.replace("### ","").trim(),l=Cg(o)||`section-${i+1}`,s=n.get(l)||0;return n.set(l,s+1),{id:s===0?`${t}-${l}`:`${t}-${l}-${s+1}`,label:o}})},Rg=({post:e,headingPrefix:t="journey"})=>{if(!e)return null;const n=Td(e.content,t);let r=0;return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3",children:[a.jsx("span",{children:e.date}),a.jsx("span",{className:"w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"}),a.jsx("span",{children:e.category})]}),a.jsx("h2",{className:"text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100",children:e.title})]}),a.jsx("div",{className:"prose-content",children:e.content.split(`

`).map((i,o)=>{if(i.startsWith("### ")){const l=n[r];return r+=1,a.jsx("h3",{id:l==null?void 0:l.id,className:"text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4 scroll-mt-28",children:On(i.replace("### ",""))},o)}if(i.startsWith("```")){const l=i.replace(/```.*\n?/g,"");return a.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto mb-4",children:a.jsx("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:l})},o)}if(i.match(/^\d+\.\s/)){const l=i.split(`
`).filter(s=>s.match(/^\d+\.\s/));return a.jsx("ol",{className:"list-decimal list-outside ml-6 mb-4 space-y-1",children:l.map((s,u)=>a.jsx("li",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed",children:On(s.replace(/^\d+\.\s*/,""))},u))},o)}if(i.startsWith("- ")){const l=i.split(`
`).filter(s=>s.startsWith("- "));return a.jsx("ul",{className:"list-disc list-outside ml-6 mb-4 space-y-1",children:l.map((s,u)=>a.jsx("li",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed",children:On(s.replace(/^-\s*/,""))},u))},o)}return i.startsWith(">")?a.jsx("blockquote",{className:"border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400",children:On(i.replace(/^>\s*/,""))},o):a.jsx("p",{className:"text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:On(i)},o)})})]})},Eg={en:{title:"Build Journey",subtitle:"Field notes on design, tradeoffs, and the thinking behind Reso.",selectPost:"Select a post",posts:"Posts",onThisPost:"On this post"},zh:{title:"Build Journey",subtitle:"记录 Reso 在设计、取舍与实现过程中的思考。",selectPost:"选择篇章",posts:"篇章",onThisPost:"本篇目录"},ja:{title:"Build Journey",subtitle:"Reso の設計・トレードオフ・実装における思考の記録。",selectPost:"記事を選択",posts:"記事一覧",onThisPost:"この投稿"}},Ig=()=>{var c;const e=Ue(),{language:t}=ve(),n=ce(Pd,t),r=ce(Eg,t),[i,o]=y.useState(`journey-${((c=n[0])==null?void 0:c.id)||""}`);y.useEffect(()=>{if(!n.length)return;if(!n.find(f=>`journey-${f.id}`===i)){o(`journey-${n[0].id}`);return}if(!e.hash)return;const h=e.hash.slice(1);n.find(f=>`journey-${f.id}`===h)&&o(h)},[i,n,e.hash]);const l=n.find(h=>`journey-${h.id}`===i)||n[0],s=y.useMemo(()=>Td(l==null?void 0:l.content,i),[l,i]),u=h=>{o(h),window.history.replaceState(null,"",`${e.pathname}#${h}`),window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("main",{className:"pt-28 min-h-screen pb-20",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsxs("section",{className:"mb-12 max-w-3xl",children:[a.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:r.title}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:r.subtitle})]}),a.jsxs("div",{className:"mb-6 lg:hidden",children:[a.jsx("label",{htmlFor:"journey-post-select",className:"block text-sm text-gray-500 dark:text-gray-400 mb-2",children:r.selectPost}),a.jsx("select",{id:"journey-post-select",value:i,onChange:h=>u(h.target.value),className:"w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-800 dark:text-gray-100",children:n.map(h=>a.jsx("option",{value:`journey-${h.id}`,children:h.title},h.id))})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_180px] gap-8 xl:gap-10",children:[a.jsxs("aside",{className:"hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto",children:[a.jsx("p",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3",children:r.posts}),a.jsx("nav",{className:"space-y-1",children:n.map(h=>{const g=`journey-${h.id}`,f=i===g;return a.jsxs("button",{onClick:()=>u(g),className:`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${f?"bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:[a.jsx("p",{className:"text-[11px] uppercase tracking-wide opacity-70 mb-1",children:h.date}),a.jsx("p",{children:h.title})]},h.id)})})]}),a.jsx("article",{children:l&&a.jsx("section",{id:`journey-${l.id}`,className:"scroll-mt-28",children:a.jsx(Rg,{post:l,headingPrefix:i})})}),a.jsx("aside",{className:"hidden xl:block xl:sticky xl:top-28 xl:self-start",children:s.length>0&&a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3",children:r.onThisPost}),a.jsx("nav",{className:"space-y-1",children:s.map(h=>a.jsx("a",{href:`#${h.id}`,className:"block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:h.label},h.id))})]})})]})]})})},Pg=()=>{const{language:e}=ve(),t=ce({en:{title:"Build Blocks",subtitle:"Reusable workflow components that let users compose their own process without starting from scratch.",what:"What It Is",whatBody:"Build Blocks packages recurring steps like intent parsing, refinement, and export into composable units. You can mix these units by use case instead of rebuilding the same flow each time.",status:"Current Status",statusBody:"This page is the new public entry point for Build Blocks. More examples and block templates will be published here as the system evolves."},zh:{title:"Build Blocks",subtitle:"可复用的 workflow 组件，让用户不用从零开始就能组合自己的流程。",what:"它是什么",whatBody:"Build Blocks 把 intent parsing、refinement、export 等高频步骤打包成可组合单元。你可以按场景自由拼装，而不是每次重做整条链路。",status:"当前状态",statusBody:"这里是 Build Blocks 的独立入口。后续我们会在此持续发布示例与模板。"},ja:{title:"Build Blocks",subtitle:"再利用可能な workflow コンポーネントで、ゼロから作り直さずに自分の流れを組み立てられます。",what:"概要",whatBody:"Build Blocks は intent parsing、refinement、export などの反復ステップを組み合わせ可能な単位として提供します。用途ごとに柔軟に構成できます。",status:"現在の状況",statusBody:"このページは Build Blocks の新しい公開入口です。今後、サンプルとテンプレートを順次追加します。"}},e);return a.jsx("main",{className:"pt-28 min-h-screen pb-20",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[a.jsxs("section",{className:"mb-14 max-w-3xl",children:[a.jsx("h1",{className:"text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5",children:t.title}),a.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:t.subtitle})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[a.jsxs("section",{className:"rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6",children:[a.jsx("h2",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:t.what}),a.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:t.whatBody})]}),a.jsxs("section",{className:"rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6",children:[a.jsx("h2",{className:"text-xl font-medium text-gray-900 dark:text-gray-100 mb-3",children:t.status}),a.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:t.statusBody})]})]})]})})},Tg={en:{backToHome:"Back to Home",title:"Recover Your License",subtitle:"Enter the email you used during purchase to retrieve your license key.",emailLabel:"Email Address",emailPlaceholder:"name@example.com",emailError:"Please enter a valid email.",findLicense:"Find License",searching:"Searching...",licenseFound:"License Found",status:"Status",copy:"Copy",copied:"Copied!",openApp:"Open App to Activate",error:"Error",needHelp:"Need help?",contactSupport:"Contact Support"},zh:{backToHome:"返回首页",title:"找回你的许可证",subtitle:"输入你购买时使用的邮箱来找回许可证密钥。",emailLabel:"邮箱地址",emailPlaceholder:"name@example.com",emailError:"请输入有效的邮箱地址。",findLicense:"查找许可证",searching:"搜索中...",licenseFound:"已找到许可证",status:"状态",copy:"复制",copied:"已复制！",openApp:"打开 App 激活",error:"错误",needHelp:"需要帮助？",contactSupport:"联系支持"},ja:{backToHome:"ホームに戻る",title:"ライセンスを復元",subtitle:"購入時に使用したメールアドレスを入力して、ライセンスキーを取得してください。",emailLabel:"メールアドレス",emailPlaceholder:"name@example.com",emailError:"有効なメールアドレスを入力してください。",findLicense:"ライセンスを検索",searching:"検索中...",licenseFound:"ライセンスが見つかりました",status:"ステータス",copy:"コピー",copied:"コピーしました！",openApp:"アプリを開いて有効化",error:"エラー",needHelp:"ヘルプが必要ですか？",contactSupport:"サポートに連絡"}},Lg="https://reso-verify.gaoyukun1205.workers.dev",zg=[{value:"en",label:"English"},{value:"zh",label:"简体中文"},{value:"ja",label:"日本語"},{value:"zh-TW",label:"繁體中文"}],Mg=()=>{const{theme:e,setTheme:t,language:n,setLanguage:r}=ve(),i=ce(Tg,n),[o,l]=y.useState(""),[s,u]=y.useState(!1),[c,h]=y.useState(null),[g,f]=y.useState(""),[x,b]=y.useState(!1),[v,w]=y.useState(!1),p=async()=>{const k=o.trim();if(h(null),f(""),b(!1),!k||!k.includes("@")){b(!0);return}u(!0);try{const S=await(await fetch(Lg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"retrieve",email:k})})).json();if(S.success&&S.license_key)h({licenseKey:S.license_key,status:S.status||"Active"});else throw new Error(S.error||"No license found for this email.")}catch(j){console.error(j),f(j.message||"Unable to connect to server.")}finally{u(!1)}},d=()=>{c!=null&&c.licenseKey&&(navigator.clipboard.writeText(c.licenseKey),w(!0),setTimeout(()=>w(!1),2e3))},m=k=>{k.key==="Enter"&&p()};return a.jsxs("div",{className:"min-h-screen grid-paper-bg text-gray-900 dark:text-gray-100 font-sans",children:[a.jsx("div",{className:"absolute top-6 left-6",children:a.jsxs(Ee,{to:"/",className:"inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-sm",children:[a.jsx(Om,{size:18}),a.jsx("span",{children:i.backToHome})]})}),a.jsx("div",{className:"flex items-center justify-center min-h-screen px-6",children:a.jsxs("div",{className:"max-w-md w-full text-center",children:[a.jsx(Ee,{to:"/",className:"inline-flex items-center justify-center mb-8",children:a.jsx("img",{src:Rd,alt:"Reso",className:"w-28 h-28 rounded-3xl"})}),a.jsx("h1",{className:"text-3xl font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100",children:i.title}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-12 text-base leading-relaxed",children:i.subtitle}),a.jsxs("div",{className:"mb-6 text-left",children:[a.jsx("label",{htmlFor:"email",className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1",children:i.emailLabel}),a.jsx("input",{type:"email",id:"email",placeholder:i.emailPlaceholder,value:o,onChange:k=>l(k.target.value),onKeyDown:m,className:"w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-lg rounded-xl block p-4 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#5423e7] focus:shadow-[0_0_0_3px_rgba(84,35,231,0.1)]",required:!0}),x&&a.jsx("p",{className:"mt-2 text-sm text-red-500 pl-1",children:i.emailError})]}),a.jsxs("button",{onClick:p,disabled:s,className:`w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold text-base py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(84,35,231,0.5)] ${s?"opacity-75 cursor-not-allowed":""}`,children:[a.jsx("span",{children:s?i.searching:i.findLicense}),s&&a.jsxs("svg",{className:"w-5 h-5 ml-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})]}),c&&a.jsxs("div",{className:"mt-8",children:[a.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-100 dark:border-green-800 text-left",children:[a.jsxs("p",{className:"text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center",children:[a.jsx("svg",{className:"w-4 h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),i.licenseFound]}),a.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-green-100 dark:border-green-800 rounded-lg p-3 flex items-center justify-between",children:[a.jsx("code",{className:"font-mono text-sm text-gray-800 dark:text-gray-200 break-all select-all",children:c.licenseKey}),a.jsx("button",{onClick:d,className:"ml-3 text-sm font-bold text-[#5423e7] hover:text-purple-600 uppercase tracking-wider",children:v?i.copied:i.copy})]}),a.jsxs("p",{className:"text-xs text-green-600 dark:text-green-400 mt-3",children:[i.status,": ",a.jsx("span",{className:"font-medium",children:c.status})]})]}),a.jsxs("a",{href:`reso://activate?key=${encodeURIComponent(c.licenseKey)}`,className:"block mt-6 font-medium hover:underline text-[#5423e7]",children:[i.openApp," →"]})]}),g&&a.jsxs("div",{className:"mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl text-sm text-left",children:[a.jsxs("span",{className:"font-bold",children:[i.error,":"]})," ",a.jsx("span",{children:g})]}),a.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-100 dark:border-gray-800",children:[a.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:[i.needHelp," ",a.jsx(Ee,{to:"/contact",className:"underline hover:opacity-70 transition-opacity text-[#5423e7]",children:i.contactSupport})]}),a.jsxs("div",{className:"mt-6 flex items-center justify-center gap-4",children:[a.jsx("button",{onClick:()=>t("light"),className:"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Switch to light mode",children:a.jsx(Nd,{size:14,className:e==="light"?"text-amber-500":""})}),a.jsx("button",{onClick:()=>t("dark"),className:"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Switch to dark mode",children:a.jsx(jd,{size:14,className:e==="dark"?"text-blue-400":""})}),a.jsxs("div",{className:"relative",children:[a.jsx(Sd,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"}),a.jsx("select",{value:n,onChange:k=>r(k.target.value),"aria-label":"Language",className:"appearance-none bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 text-xs rounded-full pl-8 pr-7 py-1.5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 cursor-pointer",children:zg.map(k=>a.jsx("option",{value:k.value,children:k.label},k.value))}),a.jsx(Sa,{size:12,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"})]})]})]})]})})]})};function Ag(){return a.jsxs(a.Fragment,{children:[a.jsx(Zm,{}),a.jsx(ng,{}),a.jsx(rg,{})]})}function _g(){const e=Ue();return y.useEffect(()=>{if(!e.hash)return;const t=e.hash.slice(1),n=()=>{const i=document.getElementById(t);return i?(i.scrollIntoView({block:"start"}),!0):!1};if(n())return;const r=window.setTimeout(n,80);return()=>window.clearTimeout(r)},[e.pathname,e.hash]),null}function Og({children:e,isScrolled:t}){return a.jsxs("div",{className:"min-h-screen grid-paper-bg text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-brand-primary/30 scroll-smooth overflow-x-hidden",children:[a.jsx(_g,{}),a.jsx(Qm,{isScrolled:t}),e,a.jsx(og,{})]})}function Dg(){const[e,t]=y.useState(!1);return y.useEffect(()=>{const n=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),a.jsx(Nm,{children:a.jsxs(Fs,{children:[a.jsx(Ae,{path:"/retrieve",element:a.jsx(Mg,{})}),a.jsx(Ae,{path:"/*",element:a.jsx(Og,{isScrolled:e,children:a.jsxs(Fs,{children:[a.jsx(Ae,{path:"/",element:a.jsx(Ag,{})}),a.jsx(Ae,{path:"/pricing",element:a.jsx(ag,{})}),a.jsx(Ae,{path:"/discover",element:a.jsx(vg,{})}),a.jsx(Ae,{path:"/marketplace",element:a.jsx(yg,{})}),a.jsx(Ae,{path:"/docs",element:a.jsx(cg,{})}),a.jsx(Ae,{path:"/build-journey",element:a.jsx(Ig,{})}),a.jsx(Ae,{path:"/build-blocks",element:a.jsx(Pg,{})}),a.jsx(Ae,{path:"/contact",element:a.jsx(pg,{})})]})})})]})})}Ro.createRoot(document.getElementById("root")).render(a.jsx(eu.StrictMode,{children:a.jsx(Gm,{children:a.jsx(Dg,{})})}));
