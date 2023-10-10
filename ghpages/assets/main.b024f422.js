const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};_e();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),oe=new Map;class ge{constructor(e,t){if(this._$cssResult$=!0,t!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=oe.get(this.cssText);return Q&&e===void 0&&(oe.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Ae=i=>new ge(typeof i=="string"?i:i+"",ee),u=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new ge(t,ee)},Me=(i,e)=>{Q?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),s=window.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)})},se=Q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ae(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const ne=window.trustedTypes,Le=ne?ne.emptyScript:"",re=window.reactiveElementPolyfillSupport,X={toAttribute(i,e){switch(e){case Boolean:i=i?Le:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ve=(i,e)=>e!==i&&(e==e||i==i),V={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:ve};class x extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const s=this._$Eh(o,t);s!==void 0&&(this._$Eu.set(s,o),e.push(s))}),e}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of o)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(se(s))}else e!==void 0&&t.push(se(e));return t}static _$Eh(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Me(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=V){var s,n;const r=this.constructor._$Eh(e,o);if(r!==void 0&&o.reflect===!0){const c=((n=(s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:X.toAttribute)(t,o.type);this._$Ei=e,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Ei=null}}_$AK(e,t){var o,s,n;const r=this.constructor,c=r._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){const l=r.getPropertyOptions(c),a=l.converter,h=(n=(s=(o=a)===null||o===void 0?void 0:o.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&n!==void 0?n:X.fromAttribute;this._$Ei=c,this[c]=h(t,l.type),this._$Ei=null}}requestUpdate(e,t,o){let s=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||ve)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,n)=>this[n]=s),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(o)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$ES(o,this[o],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},re==null||re({ReactiveElement:x}),((Z=globalThis.reactiveElementVersions)!==null&&Z!==void 0?Z:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const T=globalThis.trustedTypes,le=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+w,ke=`<${fe}>`,P=document,q=(i="")=>P.createComment(i),U=i=>i===null||typeof i!="object"&&typeof i!="function",$e=Array.isArray,Se=i=>{var e;return $e(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,ce=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,de=/'/g,ue=/"/g,be=/^(?:script|style|textarea|title)$/i,xe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=xe(1),I=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),he=new WeakMap,ye=(i,e,t)=>{var o,s;const n=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let r=n._$litPart$;if(r===void 0){const c=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new D(e.insertBefore(q(),c),c,void 0,t!=null?t:{})}return r._$AI(i),r},E=P.createTreeWalker(P,129,null,!1),Ee=(i,e)=>{const t=i.length-1,o=[];let s,n=e===2?"<svg>":"",r=O;for(let l=0;l<t;l++){const a=i[l];let h,d,m=-1,v=0;for(;v<a.length&&(r.lastIndex=v,d=r.exec(a),d!==null);)v=r.lastIndex,r===O?d[1]==="!--"?r=ae:d[1]!==void 0?r=ce:d[2]!==void 0?(be.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=_):d[3]!==void 0&&(r=_):r===_?d[0]===">"?(r=s!=null?s:O,m=-1):d[1]===void 0?m=-2:(m=r.lastIndex-d[2].length,h=d[1],r=d[3]===void 0?_:d[3]==='"'?ue:de):r===ue||r===de?r=_:r===ae||r===ce?r=O:(r=_,s=void 0);const y=r===_&&i[l+1].startsWith("/>")?" ":"";n+=r===O?a+ke:m>=0?(o.push(h),a.slice(0,m)+"$lit$"+a.slice(m)+w+y):a+w+(m===-2?(o.push(void 0),l):y)}const c=n+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[le!==void 0?le.createHTML(c):c,o]};class R{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let n=0,r=0;const c=e.length-1,l=this.parts,[a,h]=Ee(e,t);if(this.el=R.createElement(a,o),E.currentNode=this.el.content,t===2){const d=this.el.content,m=d.firstChild;m.remove(),d.append(...m.childNodes)}for(;(s=E.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const m of s.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(w)){const v=h[r++];if(d.push(m),v!==void 0){const y=s.getAttribute(v.toLowerCase()+"$lit$").split(w),b=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:b[2],strings:y,ctor:b[1]==="."?Pe:b[1]==="?"?Be:b[1]==="@"?He:N})}else l.push({type:6,index:n})}for(const m of d)s.removeAttribute(m)}if(be.test(s.tagName)){const d=s.textContent.split(w),m=d.length-1;if(m>0){s.textContent=T?T.emptyScript:"";for(let v=0;v<m;v++)s.append(d[v],q()),E.nextNode(),l.push({type:2,index:++n});s.append(d[m],q())}}}else if(s.nodeType===8)if(s.data===fe)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(w,d+1))!==-1;)l.push({type:7,index:n}),d+=w.length-1}n++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function B(i,e,t=i,o){var s,n,r,c;if(e===I)return e;let l=o!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[o]:t._$Cu;const a=U(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,t,o)),o!==void 0?((r=(c=t)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[o]=l:t._$Cu=l),l!==void 0&&(e=B(i,l._$AS(i,e.values),l,o)),e}class Te{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:s}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:P).importNode(o,!0);E.currentNode=n;let r=E.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let h;a.type===2?h=new D(r,r.nextSibling,this,e):a.type===1?h=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(h=new Oe(r,this,e)),this.v.push(h),a=s[++l]}c!==(a==null?void 0:a.index)&&(r=E.nextNode(),c++)}return n}m(e){let t=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class D{constructor(e,t,o,s){var n;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cg=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),U(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==I&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Se(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==g&&U(this._$AH)?this._$AA.nextSibling.data=e:this.k(P.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=R.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(o);else{const r=new Te(n,this),c=r.p(this.options);r.m(o),this.k(c),this._$AH=r}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new R(e)),t}S(e){$e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const n of e)s===t.length?t.push(o=new D(this.M(q()),this.M(q()),this,this.options)):o=t[s],o._$AI(n),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class N{constructor(e,t,o,s,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,s){const n=this.strings;let r=!1;if(n===void 0)e=B(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const c=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=B(this,c[o+l],t,l),a===I&&(a=this._$AH[l]),r||(r=!U(a)||a!==this._$AH[l]),a===g?e=g:e!==g&&(e+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}r&&!s&&this.C(e)}C(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Pe extends N{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===g?void 0:e}}const Ie=T?T.emptyScript:"";class Be extends N{constructor(){super(...arguments),this.type=4}C(e){e&&e!==g?this.element.setAttribute(this.name,Ie):this.element.removeAttribute(this.name)}}class He extends N{constructor(e,t,o,s,n){super(e,t,o,s,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=B(this,e,t,0))!==null&&o!==void 0?o:g)===I)return;const s=this._$AH,n=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==g&&(s===g||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const me=window.litHtmlPolyfillSupport;me==null||me(R,D),((W=globalThis.litHtmlVersions)!==null&&W!==void 0?W:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,J;class A extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return I}}A.finalized=!0,A._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:A});const pe=globalThis.litElementPolyfillSupport;pe==null||pe({LitElement:A});((J=globalThis.litElementVersions)!==null&&J!==void 0?J:globalThis.litElementVersions=[]).push("3.2.0");class ${constructor(e){var t,o,s,n,r,c,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(o=e==null?void 0:e.bodyColor)!==null&&o!==void 0?o:"#f5f5f7",this.showProcessingIndicator=(s=e==null?void 0:e.showProcessingIndicator)!==null&&s!==void 0?s:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(r=e==null?void 0:e.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(c=e==null?void 0:e.showHeaderLogo)!==null&&c!==void 0?c:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function L(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(r=i[c])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n}function qe(i,e,t,o){function s(n){return n instanceof t?n:new t(function(r){r(n)})}return new(t||(t=Promise))(function(n,r){function c(h){try{a(o.next(h))}catch(d){r(d)}}function l(h){try{a(o.throw(h))}catch(d){r(d)}}function a(h){h.done?n(h.value):s(h.value).then(c,l)}a((o=o.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=i=>e=>typeof e=="function"?((t,o)=>(window.customElements.define(t,o),o))(i,e):((t,o)=>{const{kind:s,elements:n}=o;return{kind:s,elements:n,finisher(r){window.customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function j(i){return(e,t)=>t!==void 0?((o,s,n)=>{s.constructor.createProperty(n,o)})(i,e,t):Ue(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=({finisher:i,descriptor:e})=>(t,o)=>{var s;if(o===void 0){const n=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return i!=null&&(r.finisher=function(c){i(c,n)}),r}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),i==null||i(n,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(i,e){return Re({descriptor:t=>{const o={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var n,r;return this[s]===void 0&&(this[s]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null),this[s]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;((Y=window.HTMLSlotElement)===null||Y===void 0?void 0:Y.prototype.assignedElements)!=null;const ze=Object.freeze({processing:"processing",complete:"complete"});class Ne extends A{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=ze.processing}render(){return p`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=u`var(--activityIndicatorCheckmarkColor, #31A481)`,t=u`var(--activityIndicatorCompletedRingColor, #31A481)`,o=u`var(--activityIndicatorLoadingRingColor, #333333)`,s=u`var(--activityIndicatorLoadingDotColor, #333333)`;return u`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${o};
      }

      #activity-dots {
        fill: ${s};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}}window.customElements.define("ia-activity-indicator",Ne);var je=p`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`,Fe=p`
<svg
  class="ia-logo"
  viewBox="0 0 27 30"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="logoTitleID logoDescID"
>
  <title id="logoTitleID">Internet Archive logo</title>
  <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" class="fill-color">
      <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
    </mask>
    <use class="fill-color" xlink:href="#path-1"></use>
    <g mask="url(#mask-2)" class="fill-color">
      <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
    </g>
  </g>
</svg>
`;let G=class extends A{constructor(){super(...arguments),this.config=new $}render(){return p`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?p`<div class="logo-icon">${Fe}</div>`:g}
            ${this.config.title?p`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?p`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?"":"hidden"}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?p` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?p` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return p`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${je}
      </button>
    `}static get styles(){const e=u`var(--modalLogoSize, 6.5rem)`,t=u`var(--processingImageSize, 7.5rem)`,o=u`var(--modalCornerRadius, 1rem)`,s=u`var(--modalBorder, 2px solid black)`,n=u`var(--modalBottomMargin, 2.5rem)`,r=u`var(--modalTopMargin, 5rem)`,c=u`var(--modalHeaderBottomPadding, 0.5em)`,l=u`var(--modalBottomPadding, 2rem)`,a=u`var(--modalScrollOffset, 5px)`,h=u`var(--modalTitleFontSize, 1.8rem)`,d=u`var(--modalSubtitleFontSize, 1.4rem)`,m=u`var(--modalHeadlineFontSize, 1.6rem)`,v=u`var(--modalMessageFontSize, 1.4rem)`,y=u`var(--modalTitleLineHeight, normal)`,b=u`var(--modalSubtitleLineHeight, normal)`,k=u`var(--modalHeadlineLineHeight, normal)`,S=u`var(--modalMessageLineHeight, normal)`;return u`
      .processing-logo {
        margin: auto;
        width: ${t};
        height: ${t};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${o};
        width: 100%;
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${o}) calc(${o}) 0 0;
        border: ${s};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${c};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${h};
        font-weight: bold;
        line-height: ${y};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${d};
        line-height: ${b};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${o}) calc(${o});
        border: ${s};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${a}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${n}));
        min-height: 5rem;
        padding: 0 0 calc(${a}) 0;
      }

      .headline {
        font-size: ${m};
        font-weight: bold;
        text-align: center;
        line-height: ${k};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${v};
        line-height: ${S};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${e};
        height: ${e};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${e} * 0.65);
        height: calc(${e} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `}};L([j({type:Object})],G.prototype,"config",void 0);G=L([we("modal-template")],G);function Ze(i,e,t){var o=t||{},s=o.noTrailing,n=s===void 0?!1:s,r=o.noLeading,c=r===void 0?!1:r,l=o.debounceMode,a=l===void 0?void 0:l,h,d=!1,m=0;function v(){h&&clearTimeout(h)}function y(k){var S=k||{},C=S.upcomingOnly,F=C===void 0?!1:C;v(),d=!F}function b(){for(var k=arguments.length,S=new Array(k),C=0;C<k;C++)S[C]=arguments[C];var F=this,te=Date.now()-m;if(d)return;function z(){m=Date.now(),e.apply(F,S)}function ie(){h=void 0}!c&&a&&!h&&z(),v(),a===void 0&&te>i?c?(m=Date.now(),n||(h=setTimeout(a?ie:z,i))):z():n!==!0&&(h=setTimeout(a?ie:z,a===void 0?i-te:i))}return b.cancel=y,b}var M;(function(i){i.Open="open",i.Closed="closed"})(M||(M={}));class Ve{constructor(e){this.windowResizeThrottler=Ze(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case M.Open:this.startResizeListener(),this.stopDocumentScroll();break;case M.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let H=class extends A{constructor(){super(...arguments),this.mode=M.Closed,this.hostBridge=new Ve(this),this.closeOnBackdropClick=!0}render(){return p`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=M.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return qe(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=M.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=u`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=u`var(--modalBackdropZindex, 1000)`,o=u`var(--modalWidth, 32rem)`,s=u`var(--modalMaxWidth, 95%)`,n=u`var(--modalZindex, 2000)`;return u`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${e};
        width: 100%;
        height: 100%;
        z-index: ${t};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${n};
        width: ${o};
        max-width: ${s};
      }
    `}};L([j({type:String,reflect:!0})],H.prototype,"mode",void 0);L([j({type:Object})],H.prototype,"customModalContent",void 0);L([j({type:Object})],H.prototype,"hostBridge",void 0);L([De("modal-template")],H.prototype,"modalTemplate",void 0);H=L([we("modal-manager")],H);ye(p`
        <modal-manager>
          <div slot="slot-content-demo">
            <p>Slotted Content</p>
          </div>
        </modal-manager>

        <div class="actions">
          <button @click=${We}>Modal</button>
          <button @click=${Xe}>All Features</button>
          <button @click=${Ke}>Error Modal</button>
          <button @click=${Ge}>Custom Content Modal</button>
          <button @click=${Qe}>Slotted Content Modal</button>
          <button @click=${it}>Processing Modal</button>
          <button @click=${Ce}>Processing Complete Modal</button>
          <button @click=${ot}>Modal Closed Callback</button>
          <button @click=${st}>Unclosable Modal</button>
          <button @click=${nt}>Unclickable Backdrop</button>
          <button @click=${et}>Text-heavy Modal</button>
          <button @click=${tt}>Modal Without Logo</button>
        </div>

        <h3>Some Content</h3>

        <img src="200x200.jpg" style="float:right" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

        <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>

        <p>Maecenas porta ac nulla sed vestibulum. Suspendisse aliquam fermentum mi, id luctus tortor aliquet gravida. Maecenas sed tincidunt quam. Mauris cursus ante sit amet enim egestas, vitae pellentesque metus hendrerit. Sed quis tortor id dui mollis blandit quis ac nunc. Suspendisse tincidunt nisl quis nunc tincidunt, et finibus ipsum elementum. Maecenas congue, neque eget volutpat pulvinar, augue nisl interdum elit, et porta mi augue ut sapien.</p>

        <p>Fusce vel imperdiet justo. Aenean sollicitudin blandit nunc. Cras vitae orci id lorem condimentum tempor. Aliquam ac lectus sed mi suscipit sollicitudin at convallis nisl. Sed semper elementum sagittis. Nam fermentum nulla velit, non tempor massa fermentum non. Duis id ante eget elit gravida semper ac quis ligula. Duis vel libero ligula. Curabitur tempor sed velit nec egestas. Vivamus sit amet volutpat purus. Integer imperdiet mattis erat, vitae dignissim odio accumsan quis. Fusce bibendum lectus quis est molestie, eget scelerisque elit interdum. Etiam imperdiet a leo vitae ultricies. Etiam pretium quam eget sem mollis, quis elementum libero vulputate. Praesent aliquet dictum augue a luctus.</p>

        <p>Maecenas vulputate iaculis mauris nec lobortis. Sed nibh ante, vehicula nec varius et, condimentum in massa. Curabitur a turpis porta, auctor magna in, iaculis ante. Suspendisse potenti. Donec massa orci, sollicitudin in nulla ut, fringilla dignissim elit. Suspendisse porttitor lorem nec sem volutpat ullamcorper. Curabitur blandit est tristique velit pharetra rhoncus. Aliquam vitae mauris ex.</p>
      `,document.querySelector("#demo"));const f=document.querySelector("modal-manager");function We(){const i=new $;i.headline="Success",i.message="Thank you for your support!",f.showModal({config:i})}function Ke(){const i=new $;i.headline="Error",i.message="An error occurred while processing your donation.",i.headerColor="#691916",i.bodyColor="#fff",f.showModal({config:i})}function Je(){alert("Bill <3 You")}function Ye(){alert("You pressed a button.")}function Xe(){const i=new $;i.title=p`Donation Received`,i.subtitle=p`Thanks a bunch!`,i.headline=p`A Headline that catches attention and might spill over to multiple lines!`,i.message=p`A long informative message for your users that let them know about something`,i.headerColor="purple",i.showProcessingIndicator=!0,i.processingImageMode="done";const e=p`
        <div style="text-align: center; margin-top: 10px;">
          <button @click=${Ye}>I'm A Button To Press</button>
        </div>
      `;f.showModal({config:i,customModalContent:e})}function Ge(){const i=new $;i.title="Custom Content",i.headline=p`<span class="sr-only">Also support screen-reader only</span>`;const e=p`
        Can contain any markup, including web components. Event listeners also work. Try clicking on the picture.
        <span class="sr-only">Also support screen-reader only</span>
        <div style="text-align: center">
          <a href="https://fillmurray.com" style="display: block">Fill Murray</a>
          <img src="100x100.jpg" @click=${Je} />
        </div>
      `;f.showModal({config:i,customModalContent:e})}function Qe(){const i=new $;i.title="Slotted Content";const e=p`
        Can slot content from the top-level:
        <slot name="slot-content-demo"></slot>
      `;f.showModal({config:i,customModalContent:e})}function et(){const i=new $;i.title=p`Lorem Ipsum`,i.subtitle=p`Subtitle`,i.headline=p`Everything Important`,i.message=p`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

      <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>
      `,i.headerColor="#36A483",f.showModal({config:i})}function tt(){const i=new $;i.headline="Success",i.title=p`Donation Received`,i.message="Thank you for your support!",i.headerColor="#194880",i.showHeaderLogo=!1,f.showModal({config:i})}function Ce(){const i=new $;i.showProcessingIndicator=!0,i.processingImageMode="complete",f.showModal({config:i})}function it(){const i=new $;i.headerColor="#497fbf",i.showProcessingIndicator=!0,i.processingImageMode="processing",i.showCloseButton=!1,i.closeOnBackdropClick=!1,f.showModal({config:i}),setTimeout(Ce,1500)}function ot(){const i=new $;i.message="When you close this modal another will open.",f.showModal({config:i,userClosedModalCallback:()=>{const e=new $;e.message="I'm another modal",e.headerColor="#497fbf",f.showModal({config:e})}})}function st(){const i=new $;i.message="User cannot close this. Will close automatically in 2 seconds.",i.showCloseButton=!1,i.closeOnBackdropClick=!1,f.showModal({config:i}),setTimeout(f.closeModal.bind(f),2e3)}function nt(){const i=new $;i.message="Clicking on the backdrop will not close this.",i.showCloseButton=!0,i.closeOnBackdropClick=!1,f.showModal({config:i})}
