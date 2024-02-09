(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=window,Ae=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),Le=new WeakMap;let Ze=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ae&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Le.set(t,e))}return e}toString(){return this.cssText}};const at=s=>new Ze(typeof s=="string"?s:s+"",void 0,Ce),p=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Ze(t,s,Ce)},ct=(s,e)=>{Ae?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=G.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)})},Se=Ae?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return at(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;const Q=window,xe=Q.trustedTypes,dt=xe?xe.emptyScript:"",ke=Q.reactiveElementPolyfillSupport,ve={toAttribute(s,e){switch(e){case Boolean:s=s?dt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},We=(s,e)=>e!==s&&(e==e||s==s),ae={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:We},$e="finalized";let B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ae}static finalize(){if(this.hasOwnProperty($e))return!1;this[$e]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Se(o))}else e!==void 0&&t.push(Se(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ae){var o;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:ve).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,n=o._$Ev.get(e);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ve;this._$El=n,this[n]=d.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||We)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B[$e]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},ke==null||ke({ReactiveElement:B}),((le=Q.reactiveElementVersions)!==null&&le!==void 0?le:Q.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const ee=window,O=ee.trustedTypes,Ee=O?O.createPolicy("lit-html",{createHTML:s=>s}):void 0,fe="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,Fe="?"+b,ut=`<${Fe}>`,H=document,te=()=>H.createComment(""),Z=s=>s===null||typeof s!="object"&&typeof s!="function",Ke=Array.isArray,ht=s=>Ke(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",de=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Te=/>/g,M=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Ie=/"/g,Je=/^(?:script|style|textarea|title)$/i,W=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Ne=new WeakMap,S=H.createTreeWalker(H,129,null,!1);function Ye(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}const pt=(s,e)=>{const t=s.length-1,i=[];let o,n=e===2?"<svg>":"",r=j;for(let d=0;d<t;d++){const l=s[d];let a,c,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,c=r.exec(l),c!==null);)h=r.lastIndex,r===j?c[1]==="!--"?r=He:c[1]!==void 0?r=Te:c[2]!==void 0?(Je.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=M):c[3]!==void 0&&(r=M):r===M?c[0]===">"?(r=o??j,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?M:c[3]==='"'?Ie:Pe):r===Ie||r===Pe?r=M:r===He||r===Te?r=j:(r=M,o=void 0);const m=r===M&&s[d+1].startsWith("/>")?" ":"";n+=r===j?l+ut:u>=0?(i.push(a),l.slice(0,u)+fe+l.slice(u)+b+m):l+b+(u===-2?(i.push(void 0),d):m)}return[Ye(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};let ye=class Xe{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const d=e.length-1,l=this.parts,[a,c]=pt(e,t);if(this.el=Xe.createElement(a,i),S.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=S.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(fe)||h.startsWith(b)){const m=c[r++];if(u.push(h),m!==void 0){const C=o.getAttribute(m.toLowerCase()+fe).split(b),_=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:_[2],strings:C,ctor:_[1]==="."?gt:_[1]==="?"?$t:_[1]==="@"?ft:oe})}else l.push({type:6,index:n})}for(const h of u)o.removeAttribute(h)}if(Je.test(o.tagName)){const u=o.textContent.split(b),h=u.length-1;if(h>0){o.textContent=O?O.emptyScript:"";for(let m=0;m<h;m++)o.append(u[m],te()),S.nextNode(),l.push({type:2,index:++n});o.append(u[h],te())}}}else if(o.nodeType===8)if(o.data===Fe)l.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(b,u+1))!==-1;)l.push({type:7,index:n}),u+=b.length-1}n++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}};function R(s,e,t=s,i){var o,n,r,d;if(e===W)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const a=Z(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=R(s,l._$AS(s,e.values),l,i)),e}let mt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);S.currentNode=n;let r=S.nextNode(),d=0,l=0,a=o[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new Ge(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new yt(r,this,e)),this._$AV.push(c),a=o[++l]}d!==(a==null?void 0:a.index)&&(r=S.nextNode(),d++)}return S.currentNode=H,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ge=class Qe{constructor(e,t,i,o){var n;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),Z(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ht(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.$(H.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ye.createElement(Ye(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const r=new mt(n,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new ye(e)),t}T(e){Ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new Qe(this.k(te()),this.k(te()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},oe=class{constructor(e,t,i,o,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(n===void 0)e=R(this,e,t,0),r=!Z(e)||e!==this._$AH&&e!==W,r&&(this._$AH=e);else{const d=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=R(this,d[i+l],t,l),a===W&&(a=this._$AH[l]),r||(r=!Z(a)||a!==this._$AH[l]),a===$?e=$:e!==$&&(e+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gt=class extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}};const vt=O?O.emptyScript:"";let $t=class extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}},ft=class extends oe{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=R(this,e,t,0))!==null&&i!==void 0?i:$)===W)return;const o=this._$AH,n=e===$&&o!==$||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==$&&(o===$||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},yt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}};const Be=ee.litHtmlPolyfillSupport;Be==null||Be(ye,Ge),((ce=ee.litHtmlVersions)!==null&&ce!==void 0?ce:ee.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const ie=window,U=ie.trustedTypes,Oe=U?U.createPolicy("lit-html",{createHTML:s=>s}):void 0,_e="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,et="?"+A,_t=`<${et}>`,T=document,F=()=>T.createComment(""),K=s=>s===null||typeof s!="object"&&typeof s!="function",tt=Array.isArray,bt=s=>tt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",he=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Ue=/>/g,L=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,De=/"/g,it=/^(?:script|style|textarea|title)$/i,ot=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),g=ot(1),At=ot(2),q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ze=new WeakMap,x=T.createTreeWalker(T,129,null,!1);function st(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oe!==void 0?Oe.createHTML(e):e}const Ct=(s,e)=>{const t=s.length-1,i=[];let o,n=e===2?"<svg>":"",r=V;for(let d=0;d<t;d++){const l=s[d];let a,c,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,c=r.exec(l),c!==null);)h=r.lastIndex,r===V?c[1]==="!--"?r=Re:c[1]!==void 0?r=Ue:c[2]!==void 0?(it.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=L):c[3]!==void 0&&(r=L):r===L?c[0]===">"?(r=o??V,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?L:c[3]==='"'?De:qe):r===De||r===qe?r=L:r===Re||r===Ue?r=V:(r=L,o=void 0);const m=r===L&&s[d+1].startsWith("/>")?" ":"";n+=r===V?l+_t:u>=0?(i.push(a),l.slice(0,u)+_e+l.slice(u)+A+m):l+A+(u===-2?(i.push(void 0),d):m)}return[st(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const d=e.length-1,l=this.parts,[a,c]=Ct(e,t);if(this.el=J.createElement(a,i),x.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=x.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(_e)||h.startsWith(A)){const m=c[r++];if(u.push(h),m!==void 0){const C=o.getAttribute(m.toLowerCase()+_e).split(A),_=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:_[2],strings:C,ctor:_[1]==="."?Mt:_[1]==="?"?St:_[1]==="@"?xt:se})}else l.push({type:6,index:n})}for(const h of u)o.removeAttribute(h)}if(it.test(o.tagName)){const u=o.textContent.split(A),h=u.length-1;if(h>0){o.textContent=U?U.emptyScript:"";for(let m=0;m<h;m++)o.append(u[m],F()),x.nextNode(),l.push({type:2,index:++n});o.append(u[h],F())}}}else if(o.nodeType===8)if(o.data===et)l.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(A,u+1))!==-1;)l.push({type:7,index:n}),u+=A.length-1}n++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function D(s,e,t=s,i){var o,n,r,d;if(e===q)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const a=K(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=D(s,l._$AS(s,e.values),l,i)),e}class wt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:T).importNode(i,!0);x.currentNode=n;let r=x.nextNode(),d=0,l=0,a=o[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new Y(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new kt(r,this,e)),this._$AV.push(c),a=o[++l]}d!==(a==null?void 0:a.index)&&(r=x.nextNode(),d++)}return x.currentNode=T,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,o){var n;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),K(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):bt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v&&K(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=J.createElement(st(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const r=new wt(n,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new J(e)),t}T(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new Y(this.k(F()),this.k(F()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class se{constructor(e,t,i,o,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(n===void 0)e=D(this,e,t,0),r=!K(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const d=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=D(this,d[i+l],t,l),a===q&&(a=this._$AH[l]),r||(r=!K(a)||a!==this._$AH[l]),a===v?e=v:e!==v&&(e+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mt extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}const Lt=U?U.emptyScript:"";class St extends se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}}class xt extends se{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=D(this,e,t,0))!==null&&i!==void 0?i:v)===q)return;const o=this._$AH,n=e===v&&o!==v||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==v&&(o===v||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class kt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const je=ie.litHtmlPolyfillSupport;je==null||je(J,Y),((ue=ie.litHtmlVersions)!==null&&ue!==void 0?ue:ie.litHtmlVersions=[]).push("2.8.0");const nt=(s,e,t)=>{var i,o;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=n._$litPart$;if(r===void 0){const d=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new Y(e.insertBefore(F(),d),d,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pe,me;class k extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return q}}k.finalized=!0,k._$litElement$=!0,(pe=globalThis.litElementHydrateSupport)===null||pe===void 0||pe.call(globalThis,{LitElement:k});const Ve=globalThis.litElementPolyfillSupport;Ve==null||Ve({LitElement:k});((me=globalThis.litElementVersions)!==null&&me!==void 0?me:globalThis.litElementVersions=[]).push("3.3.3");class y{constructor(e){var t,i,o,n,r,d,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(o=e==null?void 0:e.showProcessingIndicator)!==null&&o!==void 0?o:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(r=e==null?void 0:e.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}function P(s,e,t,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(r=s[d])&&(n=(o<3?r(n):o>3?r(e,t,n):r(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n}function Et(s,e,t,i){function o(n){return n instanceof t?n:new t(function(r){r(n)})}return new(t||(t=Promise))(function(n,r){function d(c){try{a(i.next(c))}catch(u){r(u)}}function l(c){try{a(i.throw(c))}catch(u){r(u)}}function a(c){c.done?n(c.value):o(c.value).then(d,l)}a((i=i.apply(s,e||[])).next())})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(t,r)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},Tt=(s,e,t)=>{e.constructor.createProperty(t,s)};function ne(s){return(e,t)=>t!==void 0?Tt(s,e,t):Ht(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=({finisher:s,descriptor:e})=>(t,i)=>{var o;if(i===void 0){const n=(o=t.originalKey)!==null&&o!==void 0?o:t.key,r=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return s!=null&&(r.finisher=function(d){s(d,n)}),r}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(s,e){return Pt({descriptor:t=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;((ge=window.HTMLSlotElement)===null||ge===void 0?void 0:ge.prototype.assignedElements)!=null;const Nt=Object.freeze({processing:"processing",complete:"complete"});class Bt extends k{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=Nt.processing}render(){return g`
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
    `}static get styles(){const e=p`var(--activityIndicatorCheckmarkColor, #31A481)`,t=p`var(--activityIndicatorCompletedRingColor, #31A481)`,i=p`var(--activityIndicatorLoadingRingColor, #333333)`,o=p`var(--activityIndicatorLoadingDotColor, #333333)`;return p`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${i};
      }

      #activity-dots {
        fill: ${o};
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
    `}}window.customElements.define("ia-activity-indicator",Bt);const Ot=At`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
<title id="closeTitleID">Close icon</title>
<desc id="closeDescID">A line drawing of an X</desc>
<path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>`,Rt=g`
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
`;let be=class extends k{constructor(){super(...arguments),this.config=new y}render(){return g`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?g`<div class="logo-icon">${Rt}</div>`:v}
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
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return g`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${Ot}
      </button>
    `}static get styles(){const e=p`var(--modalLogoSize, 6.5rem)`,t=p`var(--processingImageSize, 7.5rem)`,i=p`var(--modalCornerRadius, 1rem)`,o=p`var(--modalBorder, 2px solid black)`,n=p`var(--modalBottomMargin, 2.5rem)`,r=p`var(--modalTopMargin, 5rem)`,d=p`var(--modalHeaderBottomPadding, 0.5em)`,l=p`var(--modalBottomPadding, 2rem)`,a=p`var(--modalScrollOffset, 5px)`,c=p`var(--modalTitleFontSize, 1.8rem)`,u=p`var(--modalSubtitleFontSize, 1.4rem)`,h=p`var(--modalHeadlineFontSize, 1.6rem)`,m=p`var(--modalMessageFontSize, 1.4rem)`,C=p`var(--modalTitleLineHeight, normal)`,_=p`var(--modalSubtitleLineHeight, normal)`,I=p`var(--modalHeadlineLineHeight, normal)`,N=p`var(--modalMessageLineHeight, normal)`;return p`
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
        border-radius: ${i};
        width: 100%;
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${o};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${c};
        font-weight: bold;
        line-height: ${C};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${u};
        line-height: ${_};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${o};
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
        font-size: ${h};
        font-weight: bold;
        text-align: center;
        line-height: ${I};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${m};
        line-height: ${N};
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
    `}};P([ne({type:Object})],be.prototype,"config",void 0);be=P([rt("modal-template")],be);function Ut(s,e,t){var i=t||{},o=i.noTrailing,n=o===void 0?!1:o,r=i.noLeading,d=r===void 0?!1:r,l=i.debounceMode,a=l===void 0?void 0:l,c,u=!1,h=0;function m(){c&&clearTimeout(c)}function C(I){var N=I||{},w=N.upcomingOnly,re=w===void 0?!1:w;m(),u=!re}function _(){for(var I=arguments.length,N=new Array(I),w=0;w<I;w++)N[w]=arguments[w];var re=this,we=Date.now()-h;if(u)return;function X(){h=Date.now(),e.apply(re,N)}function Me(){c=void 0}!d&&a&&!c&&X(),m(),a===void 0&&we>s?d?(h=Date.now(),n||(c=setTimeout(a?Me:X,s))):X():n!==!0&&(c=setTimeout(a?Me:X,a===void 0?s-we:s))}return _.cancel=C,_}var E;(function(s){s.Open="open",s.Closed="closed"})(E||(E={}));class qt{constructor(e){this.windowResizeThrottler=Ut(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case E.Open:this.startResizeListener(),this.stopDocumentScroll();break;case E.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let z=class extends k{constructor(){super(...arguments),this.mode=E.Closed,this.hostBridge=new qt(this),this.closeOnBackdropClick=!0}render(){return g`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=E.Closed,this.customModalContent=void 0,this.modalTemplate.config=new y}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Et(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=E.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=p`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=p`var(--modalBackdropZindex, 1000)`,i=p`var(--modalWidth, 32rem)`,o=p`var(--modalMaxWidth, 95%)`,n=p`var(--modalZindex, 2000)`;return p`
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
        width: ${i};
        max-width: ${o};
      }
    `}};P([ne({type:String,reflect:!0})],z.prototype,"mode",void 0);P([ne({type:Object})],z.prototype,"customModalContent",void 0);P([ne({type:Object})],z.prototype,"hostBridge",void 0);P([It("modal-template")],z.prototype,"modalTemplate",void 0);z=P([rt("modal-manager")],z);nt(g`
        <modal-manager>
          <div slot="slot-content-demo">
            <p>Slotted Content</p>
          </div>
        </modal-manager>

        <div class="actions">
          <button @click=${Dt}>Modal</button>
          <button @click=${Zt}>All Features</button>
          <button @click=${zt}>Error Modal</button>
          <button @click=${Wt}>Custom Content Modal</button>
          <button @click=${Ft}>Slotted Content Modal</button>
          <button @click=${Yt}>Processing Modal</button>
          <button @click=${lt}>Processing Complete Modal</button>
          <button @click=${Xt}>Modal Closed Callback</button>
          <button @click=${Gt}>Unclosable Modal</button>
          <button @click=${Qt}>Unclickable Backdrop</button>
          <button @click=${Kt}>Text-heavy Modal</button>
          <button @click=${Jt}>Modal Without Logo</button>
        </div>

        <h3>Some Content</h3>

        <img src="/assets/images/200x200.jpg" style="float:right" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

        <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>

        <p>Maecenas porta ac nulla sed vestibulum. Suspendisse aliquam fermentum mi, id luctus tortor aliquet gravida. Maecenas sed tincidunt quam. Mauris cursus ante sit amet enim egestas, vitae pellentesque metus hendrerit. Sed quis tortor id dui mollis blandit quis ac nunc. Suspendisse tincidunt nisl quis nunc tincidunt, et finibus ipsum elementum. Maecenas congue, neque eget volutpat pulvinar, augue nisl interdum elit, et porta mi augue ut sapien.</p>

        <p>Fusce vel imperdiet justo. Aenean sollicitudin blandit nunc. Cras vitae orci id lorem condimentum tempor. Aliquam ac lectus sed mi suscipit sollicitudin at convallis nisl. Sed semper elementum sagittis. Nam fermentum nulla velit, non tempor massa fermentum non. Duis id ante eget elit gravida semper ac quis ligula. Duis vel libero ligula. Curabitur tempor sed velit nec egestas. Vivamus sit amet volutpat purus. Integer imperdiet mattis erat, vitae dignissim odio accumsan quis. Fusce bibendum lectus quis est molestie, eget scelerisque elit interdum. Etiam imperdiet a leo vitae ultricies. Etiam pretium quam eget sem mollis, quis elementum libero vulputate. Praesent aliquet dictum augue a luctus.</p>

        <p>Maecenas vulputate iaculis mauris nec lobortis. Sed nibh ante, vehicula nec varius et, condimentum in massa. Curabitur a turpis porta, auctor magna in, iaculis ante. Suspendisse potenti. Donec massa orci, sollicitudin in nulla ut, fringilla dignissim elit. Suspendisse porttitor lorem nec sem volutpat ullamcorper. Curabitur blandit est tristique velit pharetra rhoncus. Aliquam vitae mauris ex.</p>
      `,document.querySelector("#demo"));const f=document.querySelector("modal-manager");function Dt(){const s=new y;s.headline="Success",s.message="Thank you for your support!",f.showModal({config:s})}function zt(){const s=new y;s.headline="Error",s.message="An error occurred while processing your donation.",s.headerColor="#691916",s.bodyColor="#fff",f.showModal({config:s})}function jt(){alert("Bill <3 You")}function Vt(){alert("You pressed a button.")}function Zt(){const s=new y;s.title=g`Donation Received`,s.subtitle=g`Thanks a bunch!`,s.headline=g`A Headline that catches attention and might spill over to multiple lines!`,s.message=g`A long informative message for your users that let them know about something`,s.headerColor="purple",s.showProcessingIndicator=!0,s.processingImageMode="done";const e=g`
        <div style="text-align: center; margin-top: 10px;">
          <button @click=${Vt}>I'm A Button To Press</button>
        </div>
      `;f.showModal({config:s,customModalContent:e})}function Wt(){const s=new y;s.title="Custom Content",s.headline=g`<span class="sr-only">Also support screen-reader only</span>`;const e=g`
        Can contain any markup, including web components. Event listeners also work. Try clicking on the picture.
        <span class="sr-only">Also support screen-reader only</span>
        <div style="text-align: center">
          <a href="https://fillmurray.com" style="display: block">Fill Murray</a>
          <img src="/assets/images/100x100.jpg" @click=${jt} />
        </div>
      `;f.showModal({config:s,customModalContent:e})}function Ft(){const s=new y;s.title="Slotted Content";const e=g`
        Can slot content from the top-level:
        <slot name="slot-content-demo"></slot>
      `;f.showModal({config:s,customModalContent:e})}function Kt(){const s=new y;s.title=g`Lorem Ipsum`,s.subtitle=g`Subtitle`,s.headline=g`Everything Important`,s.message=g`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

      <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>
      `,s.headerColor="#36A483",f.showModal({config:s})}function Jt(){const s=new y;s.headline="Success",s.title=g`Donation Received`,s.message="Thank you for your support!",s.headerColor="#194880",s.showHeaderLogo=!1,f.showModal({config:s})}function lt(){const s=new y;s.showProcessingIndicator=!0,s.processingImageMode="complete",f.showModal({config:s})}function Yt(){const s=new y;s.headerColor="#497fbf",s.showProcessingIndicator=!0,s.processingImageMode="processing",s.showCloseButton=!1,s.closeOnBackdropClick=!1,f.showModal({config:s}),setTimeout(lt,1500)}function Xt(){const s=new y;s.message="When you close this modal another will open.",f.showModal({config:s,userClosedModalCallback:()=>{const e=new y;e.message="I'm another modal",e.headerColor="#497fbf",f.showModal({config:e})}})}function Gt(){const s=new y;s.message="User cannot close this. Will close automatically in 2 seconds.",s.showCloseButton=!1,s.closeOnBackdropClick=!1,f.showModal({config:s}),setTimeout(f.closeModal.bind(f),2e3)}function Qt(){const s=new y;s.message="Clicking on the backdrop will not close this.",s.showCloseButton=!0,s.closeOnBackdropClick=!1,f.showModal({config:s})}
