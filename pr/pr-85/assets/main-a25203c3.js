(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,xt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),Bt=new WeakMap;let ae=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(xt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bt.set(e,t))}return t}toString(){return this.cssText}};const Se=o=>new ae(typeof o=="string"?o:o+"",void 0,kt),m=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new ae(e,o,kt)},Ee=(o,t)=>{if(xt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=ot.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},Nt=xt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Se(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Me,defineProperty:Le,getOwnPropertyDescriptor:xe,getOwnPropertyNames:ke,getOwnPropertySymbols:Pe,getPrototypeOf:Te}=Object,w=globalThis,Dt=w.trustedTypes,Ue=Dt?Dt.emptyScript:"",mt=w.reactiveElementPolyfillSupport,J=(o,t)=>o,rt={toAttribute(o,t){switch(t){case Boolean:o=o?Ue:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Pt=(o,t)=>!Me(o,t),qt={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class R extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Le(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=xe(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const a=s==null?void 0:s.call(this);n.call(this,r),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=Te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const e=this.properties,i=[...ke(e),...Pe(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Nt(s))}else t!==void 0&&e.push(Nt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:rt).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:rt;this._$Em=s,this[s]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Pt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[J("elementProperties")]=new Map,R[J("finalized")]=new Map,mt==null||mt({ReactiveElement:R}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,lt=Y.trustedTypes,zt=lt?lt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ce="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,de="?"+A,He=`<${de}>`,P=document,X=()=>P.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",he=Array.isArray,Oe=o=>he(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Vt=/>/g,E=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,Ft=/"/g,ue=/^(?:script|style|textarea|title)$/i,Re=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=Re(1),q=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Zt=new WeakMap,L=P.createTreeWalker(P,129);function pe(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}const Ie=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=Z;for(let a=0;a<e;a++){const l=o[a];let c,d,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,d=r.exec(l),d!==null);)u=r.lastIndex,r===Z?d[1]==="!--"?r=jt:d[1]!==void 0?r=Vt:d[2]!==void 0?(ue.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=E):d[3]!==void 0&&(r=E):r===E?d[0]===">"?(r=s??Z,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?E:d[3]==='"'?Ft:Wt):r===Ft||r===Wt?r=E:r===jt||r===Vt?r=Z:(r=E,s=void 0);const p=r===E&&o[a+1].startsWith("/>")?" ":"";n+=r===Z?l+He:h>=0?(i.push(c),l.slice(0,h)+ce+l.slice(h)+A+p):l+A+(h===-2?a:p)}return[pe(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let wt=class me{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[c,d]=Ie(t,e);if(this.el=me.createElement(c,i),L.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=L.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ce)){const u=d[r++],p=s.getAttribute(h).split(A),y=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:y[2],strings:p,ctor:y[1]==="."?Ne:y[1]==="?"?De:y[1]==="@"?qe:dt}),s.removeAttribute(h)}else h.startsWith(A)&&(l.push({type:6,index:n}),s.removeAttribute(h));if(ue.test(s.tagName)){const h=s.textContent.split(A),u=h.length-1;if(u>0){s.textContent=lt?lt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],X()),L.nextNode(),l.push({type:2,index:++n});s.append(h[u],X())}}}else if(s.nodeType===8)if(s.data===de)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:n}),h+=A.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}};function z(o,t,e=o,i){var r,a;if(t===q)return t;let s=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const n=G(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=z(o,s._$AS(o,t.values),s,i)),t}let Be=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??P).importNode(e,!0);L.currentNode=s;let n=L.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new Tt(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new ze(n,this,t)),this._$AV.push(c),l=i[++a]}r!==(l==null?void 0:l.index)&&(n=L.nextNode(),r++)}return L.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Tt=class ge{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),G(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Oe(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=wt.createElement(pe(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const r=new Be(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Zt.get(t.strings);return e===void 0&&Zt.set(t.strings,e=new wt(t)),e}k(t){he(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new ge(this.S(X()),this.S(X()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},dt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=z(this,t,e,0),r=!G(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=z(this,a[i+l],e,l),c===q&&(c=this._$AH[l]),r||(r=!G(c)||c!==this._$AH[l]),c===$?t=$:t!==$&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ne=class extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},De=class extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},qe=class extends dt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??$)===q)return;const i=this._$AH,s=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ze=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}};const $t=Y.litHtmlPolyfillSupport;$t==null||$t(wt,Tt),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.1.2");const $e=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new Tt(t.insertBefore(X(),n),n,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let N=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}};var le;N._$litElement$=!0,N.finalized=!0,(le=globalThis.litElementHydrateSupport)==null||le.call(globalThis,{LitElement:N});const ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:N});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");class _{constructor(t){var e,i,s,n,r,a,l;this.title=t==null?void 0:t.title,this.subtitle=t==null?void 0:t.subtitle,this.headline=t==null?void 0:t.headline,this.message=t==null?void 0:t.message,this.headerColor=(e=t==null?void 0:t.headerColor)!==null&&e!==void 0?e:"#55A183",this.bodyColor=(i=t==null?void 0:t.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(s=t==null?void 0:t.showProcessingIndicator)!==null&&s!==void 0?s:!1,this.processingImageMode=(n=t==null?void 0:t.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(r=t==null?void 0:t.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(a=t==null?void 0:t.showHeaderLogo)!==null&&a!==void 0?a:!0,this.closeOnBackdropClick=(l=t==null?void 0:t.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}/*! *****************************************************************************
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
***************************************************************************** */function U(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}function je(o,t,e,i){function s(n){return n instanceof e?n:new e(function(r){r(n)})}return new(e||(e=Promise))(function(n,r){function a(d){try{c(i.next(d))}catch(h){r(h)}}function l(d){try{c(i.throw(d))}catch(h){r(h)}}function c(d){d.done?n(d.value):s(d.value).then(a,l)}c((i=i.apply(o,t||[])).next())})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:Pt},We=(o=Ve,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(e.name,o),i==="accessor"){const{name:r}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,o)},init(a){return a!==void 0&&this.P(r,void 0,o),a}}}if(i==="setter"){const{name:r}=e;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,o)}}throw Error("Unsupported decorator location: "+i)};function ht(o){return(t,e)=>typeof e=="object"?We(o,t,e):((i,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,r?{...i,wrapped:!0}:i),r?Object.getOwnPropertyDescriptor(s,n):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(o,t){return(e,i,s)=>{const n=r=>{var a;return((a=r.renderRoot)==null?void 0:a.querySelector(o))??null};if(t){const{get:r,set:a}=typeof i=="object"?e:s??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return Kt(e,i,{get(){let l=r.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return Kt(e,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=window,Ut=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ht=Symbol(),Jt=new WeakMap;let ve=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ut&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Jt.set(e,t))}return t}toString(){return this.cssText}};const Ze=o=>new ve(typeof o=="string"?o:o+"",void 0,Ht),I=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new ve(e,o,Ht)},Ke=(o,t)=>{Ut?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=nt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},Yt=Ut?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ze(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const at=window,Xt=at.trustedTypes,Je=Xt?Xt.emptyScript:"",Gt=at.reactiveElementPolyfillSupport,St={toAttribute(o,t){switch(t){case Boolean:o=o?Je:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},_e=(o,t)=>t!==o&&(t==t||o==o),_t={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:_e},Et="finalized";let B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_t}static finalize(){if(this.hasOwnProperty(Et))return!1;this[Et]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Yt(s))}else t!==void 0&&e.push(Yt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ke(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_t){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:St).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:St;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_e)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};B[Et]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},Gt==null||Gt({ReactiveElement:B}),((vt=at.reactiveElementVersions)!==null&&vt!==void 0?vt:at.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;const ct=window,j=ct.trustedTypes,Qt=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,Mt="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+C,Ye=`<${ye}>`,T=document,Q=()=>T.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",be=Array.isArray,Xe=o=>be(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",bt=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,ee=/>/g,M=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,se=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ge=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Ot=Ge(1),V=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),oe=new WeakMap,x=T.createTreeWalker(T,129,null,!1);function Ce(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qt!==void 0?Qt.createHTML(t):t}const Qe=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=K;for(let a=0;a<e;a++){const l=o[a];let c,d,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,d=r.exec(l),d!==null);)u=r.lastIndex,r===K?d[1]==="!--"?r=te:d[1]!==void 0?r=ee:d[2]!==void 0?(Ae.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=M):d[3]!==void 0&&(r=M):r===M?d[0]===">"?(r=s??K,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?M:d[3]==='"'?se:ie):r===se||r===ie?r=M:r===te||r===ee?r=K:(r=M,s=void 0);const p=r===M&&o[a+1].startsWith("/>")?" ":"";n+=r===K?l+Ye:h>=0?(i.push(c),l.slice(0,h)+Mt+l.slice(h)+C+p):l+C+(h===-2?(i.push(void 0),a):p)}return[Ce(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[c,d]=Qe(t,e);if(this.el=et.createElement(c,i),x.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=x.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Mt)||u.startsWith(C)){const p=d[r++];if(h.push(u),p!==void 0){const y=s.getAttribute(p.toLowerCase()+Mt).split(C),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:b[2],strings:y,ctor:b[1]==="."?ei:b[1]==="?"?si:b[1]==="@"?oi:ut})}else l.push({type:6,index:n})}for(const u of h)s.removeAttribute(u)}if(Ae.test(s.tagName)){const h=s.textContent.split(C),u=h.length-1;if(u>0){s.textContent=j?j.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],Q()),x.nextNode(),l.push({type:2,index:++n});s.append(h[u],Q())}}}else if(s.nodeType===8)if(s.data===ye)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(C,h+1))!==-1;)l.push({type:7,index:n}),h+=C.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function W(o,t,e=o,i){var s,n,r,a;if(t===V)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const c=tt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=W(o,l._$AS(o,t.values),l,i)),t}class ti{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:T).importNode(i,!0);x.currentNode=n;let r=x.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new it(r,r.nextSibling,this,t):c.type===1?d=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(d=new ni(r,this,t)),this._$AV.push(d),c=s[++l]}a!==(c==null?void 0:c.index)&&(r=x.nextNode(),a++)}return x.currentNode=T,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{constructor(t,e,i,s){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),tt(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Xe(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==f&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=et.createElement(Ce(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new ti(n,this),a=r.u(this.options);r.v(i),this.$(a),this._$AH=r}}_$AC(t){let e=oe.get(t.strings);return e===void 0&&oe.set(t.strings,e=new et(t)),e}T(t){be(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new it(this.k(Q()),this.k(Q()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ut{constructor(t,e,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=W(this,t,e,0),r=!tt(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=W(this,a[i+l],e,l),c===V&&(c=this._$AH[l]),r||(r=!tt(c)||c!==this._$AH[l]),c===f?t=f:t!==f&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ei extends ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const ii=j?j.emptyScript:"";class si extends ut{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,ii):this.element.removeAttribute(this.name)}}class oi extends ut{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=W(this,t,e,0))!==null&&i!==void 0?i:f)===V)return;const s=this._$AH,n=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ni{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const ne=ct.litHtmlPolyfillSupport;ne==null||ne(et,it),((yt=ct.litHtmlVersions)!==null&&yt!==void 0?yt:ct.litHtmlVersions=[]).push("2.8.0");const ri=(o,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new it(t.insertBefore(Q(),a),a,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At,Ct;class D extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ri(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return V}}D.finalized=!0,D._$litElement$=!0,(At=globalThis.litElementHydrateSupport)===null||At===void 0||At.call(globalThis,{LitElement:D});const re=globalThis.litElementPolyfillSupport;re==null||re({LitElement:D});((Ct=globalThis.litElementVersions)!==null&&Ct!==void 0?Ct:globalThis.litElementVersions=[]).push("3.3.3");const li=Object.freeze({processing:"processing",complete:"complete"});class ai extends D{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=li.processing}render(){return Ot`
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
    `}static get styles(){const t=I`var(--activityIndicatorCheckmarkColor, #31A481)`,e=I`var(--activityIndicatorCompletedRingColor, #31A481)`,i=I`var(--activityIndicatorLoadingRingColor, #333333)`,s=I`var(--activityIndicatorLoadingDotColor, #333333)`;return I`
      #completed-ring {
        fill: ${e};
      }

      #check {
        fill: ${t};
      }

      #activity-ring {
        fill: ${i};
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
    `}}window.customElements.define("ia-activity-indicator",ai);const ci=Ot`
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
`;class di extends D{static get styles(){return I`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return ci}}customElements.define("ia-icon-close",di);const hi=Ot`
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
`;let Lt=class extends N{constructor(){super(...arguments),this.config=new _}render(){return g`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?g`<div class="logo-icon">${hi}</div>`:$}
            ${this.config.title?g`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?g`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?g` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?g` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const t=new Event("closeButtonPressed");this.dispatchEvent(t)}get closeButtonTemplate(){return g`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const t=m`var(--modalLogoSize, 6.5rem)`,e=m`var(--processingImageSize, 7.5rem)`,i=m`var(--modalCornerRadius, 1rem)`,s=m`var(--modalBorder, 2px solid black)`,n=m`var(--modalBottomMargin, 2.5rem)`,r=m`var(--modalTopMargin, 5rem)`,a=m`var(--modalHeaderBottomPadding, 0.5em)`,l=m`var(--modalBottomPadding, 2rem)`,c=m`var(--modalScrollOffset, 5px)`,d=m`var(--modalTitleFontSize, 1.8rem)`,h=m`var(--modalSubtitleFontSize, 1.4rem)`,u=m`var(--modalHeadlineFontSize, 1.6rem)`,p=m`var(--modalMessageFontSize, 1.4rem)`,y=m`var(--modalTitleLineHeight, normal)`,b=m`var(--modalSubtitleLineHeight, normal)`,H=m`var(--modalHeadlineLineHeight, normal)`,O=m`var(--modalMessageLineHeight, normal)`;return m`
      .processing-logo {
        margin: auto;
        width: ${e};
        height: ${e};
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
        border-radius: ${i};
        width: 100%;
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${s};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${a};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${d};
        font-weight: bold;
        line-height: ${y};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${h};
        line-height: ${b};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${s};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${n}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${u};
        font-weight: bold;
        text-align: center;
        line-height: ${H};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${O};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${t};
        height: ${t};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${t} * 0.65);
        height: calc(${t} * 0.65);
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
    `}};U([ht({type:Object})],Lt.prototype,"config",void 0);Lt=U([fe("modal-template")],Lt);function ui(o,t,e){var i=e||{},s=i.noTrailing,n=s===void 0?!1:s,r=i.noLeading,a=r===void 0?!1:r,l=i.debounceMode,c=l===void 0?void 0:l,d,h=!1,u=0;function p(){d&&clearTimeout(d)}function y(H){var O=H||{},S=O.upcomingOnly,pt=S===void 0?!1:S;p(),h=!pt}function b(){for(var H=arguments.length,O=new Array(H),S=0;S<H;S++)O[S]=arguments[S];var pt=this,Rt=Date.now()-u;if(h)return;function st(){u=Date.now(),t.apply(pt,O)}function It(){d=void 0}!a&&c&&!d&&st(),p(),c===void 0&&Rt>o?a?(u=Date.now(),n||(d=setTimeout(c?It:st,o))):st():n!==!0&&(d=setTimeout(c?It:st,c===void 0?o-Rt:o))}return b.cancel=y,b}var k;(function(o){o.Open="open",o.Closed="closed"})(k||(k={}));class pi{constructor(t){this.windowResizeThrottler=ui(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case k.Open:this.startResizeListener(),this.stopDocumentScroll();break;case k.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let F=class extends N{constructor(){super(...arguments),this.mode=k.Closed,this.hostBridge=new pi(this),this.closeOnBackdropClick=!0}render(){return g`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=k.Closed,this.customModalContent=void 0,this.modalTemplate.config=new _}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}showModal(t){return je(this,void 0,void 0,function*(){this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.modalTemplate.config=t.config,this.customModalContent=t.customModalContent,this.mode=k.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=m`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=m`var(--modalBackdropZindex, 1000)`,i=m`var(--modalWidth, 32rem)`,s=m`var(--modalMaxWidth, 95%)`,n=m`var(--modalZindex, 2000)`;return m`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${t};
        width: 100%;
        height: 100%;
        z-index: ${e};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${n};
        width: ${i};
        max-width: ${s};
      }
    `}};U([ht({type:String,reflect:!0})],F.prototype,"mode",void 0);U([ht({type:Object})],F.prototype,"customModalContent",void 0);U([ht({type:Object})],F.prototype,"hostBridge",void 0);U([Fe("modal-template")],F.prototype,"modalTemplate",void 0);F=U([fe("modal-manager")],F);$e(g`
        <modal-manager>
          <div slot="slot-content-demo">
            <p>Slotted Content</p>
          </div>
        </modal-manager>

        <div class="actions">
          <button @click=${mi}>Modal</button>
          <button @click=${vi}>All Features</button>
          <button @click=${gi}>Error Modal</button>
          <button @click=${_i}>Custom Content Modal</button>
          <button @click=${yi}>Slotted Content Modal</button>
          <button @click=${Ci}>Processing Modal</button>
          <button @click=${we}>Processing Complete Modal</button>
          <button @click=${wi}>Modal Closed Callback</button>
          <button @click=${Si}>Unclosable Modal</button>
          <button @click=${Ei}>Unclickable Backdrop</button>
          <button @click=${bi}>Text-heavy Modal</button>
          <button @click=${Ai}>Modal Without Logo</button>
        </div>

        <h3>Some Content</h3>

        <img src="/assets/images/200x200.jpg" style="float:right" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

        <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>

        <p>Maecenas porta ac nulla sed vestibulum. Suspendisse aliquam fermentum mi, id luctus tortor aliquet gravida. Maecenas sed tincidunt quam. Mauris cursus ante sit amet enim egestas, vitae pellentesque metus hendrerit. Sed quis tortor id dui mollis blandit quis ac nunc. Suspendisse tincidunt nisl quis nunc tincidunt, et finibus ipsum elementum. Maecenas congue, neque eget volutpat pulvinar, augue nisl interdum elit, et porta mi augue ut sapien.</p>

        <p>Fusce vel imperdiet justo. Aenean sollicitudin blandit nunc. Cras vitae orci id lorem condimentum tempor. Aliquam ac lectus sed mi suscipit sollicitudin at convallis nisl. Sed semper elementum sagittis. Nam fermentum nulla velit, non tempor massa fermentum non. Duis id ante eget elit gravida semper ac quis ligula. Duis vel libero ligula. Curabitur tempor sed velit nec egestas. Vivamus sit amet volutpat purus. Integer imperdiet mattis erat, vitae dignissim odio accumsan quis. Fusce bibendum lectus quis est molestie, eget scelerisque elit interdum. Etiam imperdiet a leo vitae ultricies. Etiam pretium quam eget sem mollis, quis elementum libero vulputate. Praesent aliquet dictum augue a luctus.</p>

        <p>Maecenas vulputate iaculis mauris nec lobortis. Sed nibh ante, vehicula nec varius et, condimentum in massa. Curabitur a turpis porta, auctor magna in, iaculis ante. Suspendisse potenti. Donec massa orci, sollicitudin in nulla ut, fringilla dignissim elit. Suspendisse porttitor lorem nec sem volutpat ullamcorper. Curabitur blandit est tristique velit pharetra rhoncus. Aliquam vitae mauris ex.</p>
      `,document.querySelector("#demo"));const v=document.querySelector("modal-manager");function mi(){const o=new _;o.headline="Success",o.message="Thank you for your support!",v.showModal({config:o})}function gi(){const o=new _;o.headline="Error",o.message="An error occurred while processing your donation.",o.headerColor="#691916",o.bodyColor="#fff",v.showModal({config:o})}function $i(){alert("Bill <3 You")}function fi(){alert("You pressed a button.")}function vi(){const o=new _;o.title=g`Donation Received`,o.subtitle=g`Thanks a bunch!`,o.headline=g`A Headline that catches attention and might spill over to multiple lines!`,o.message=g`A long informative message for your users that let them know about something`,o.headerColor="purple",o.showProcessingIndicator=!0,o.processingImageMode="done";const t=g`
        <div style="text-align: center; margin-top: 10px;">
          <button @click=${fi}>I'm A Button To Press</button>
        </div>
      `;v.showModal({config:o,customModalContent:t})}function _i(){const o=new _;o.title="Custom Content",o.headline=g`<span class="sr-only">Also support screen-reader only</span>`;const t=g`
        Can contain any markup, including web components. Event listeners also work. Try clicking on the picture.
        <span class="sr-only">Also support screen-reader only</span>
        <div style="text-align: center">
          <a href="https://fillmurray.com" style="display: block">Fill Murray</a>
          <img src="/assets/images/100x100.jpg" @click=${$i} />
        </div>
      `;v.showModal({config:o,customModalContent:t})}function yi(){const o=new _;o.title="Slotted Content";const t=g`
        Can slot content from the top-level:
        <slot name="slot-content-demo"></slot>
      `;v.showModal({config:o,customModalContent:t})}function bi(){const o=new _;o.title=g`Lorem Ipsum`,o.subtitle=g`Subtitle`,o.headline=g`Everything Important`,o.message=g`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

      <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>
      `,o.headerColor="#36A483",v.showModal({config:o})}function Ai(){const o=new _;o.headline="Success",o.title=g`Donation Received`,o.message="Thank you for your support!",o.headerColor="#194880",o.showHeaderLogo=!1,v.showModal({config:o})}function we(){const o=new _;o.showProcessingIndicator=!0,o.processingImageMode="complete",v.showModal({config:o})}function Ci(){const o=new _;o.headerColor="#497fbf",o.showProcessingIndicator=!0,o.processingImageMode="processing",o.showCloseButton=!1,o.closeOnBackdropClick=!1,v.showModal({config:o}),setTimeout(we,1500)}function wi(){const o=new _;o.message="When you close this modal another will open.",v.showModal({config:o,userClosedModalCallback:()=>{const t=new _;t.message="I'm another modal",t.headerColor="#497fbf",v.showModal({config:t})}})}function Si(){const o=new _;o.message="User cannot close this. Will close automatically in 2 seconds.",o.showCloseButton=!1,o.closeOnBackdropClick=!1,v.showModal({config:o}),setTimeout(v.closeModal.bind(v),2e3)}function Ei(){const o=new _;o.message="Clicking on the backdrop will not close this.",o.showCloseButton=!0,o.closeOnBackdropClick=!1,v.showModal({config:o})}
