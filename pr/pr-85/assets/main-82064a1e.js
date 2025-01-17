(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,Tt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),qt=new WeakMap;let ge=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Tt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=qt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qt.set(e,t))}return t}toString(){return this.cssText}};const He=s=>new ge(typeof s=="string"?s:s+"",void 0,Ot),m=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new ge(e,s,Ot)},Ue=(s,t)=>{if(Tt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),o=nt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},Ft=Tt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return He(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Re,defineProperty:Ne,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Be,getOwnPropertySymbols:De,getPrototypeOf:ze}=Object,E=globalThis,jt=E.trustedTypes,qe=jt?jt.emptyScript:"",ft=E.reactiveElementPolyfillSupport,J=(s,t)=>s,at={toAttribute(s,t){switch(t){case Boolean:s=s?qe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ht=(s,t)=>!Re(s,t),Vt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class R extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Ne(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=Ie(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);n.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=ze(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const e=this.properties,i=[...Be(e),...De(e)];for(const o of i)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(Ft(o))}else t!==void 0&&e.push(Ft(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:at).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:at;this._$Em=o,this[o]=l.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Ht)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[J("elementProperties")]=new Map,R[J("finalized")]=new Map,ft==null||ft({ReactiveElement:R}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,lt=X.trustedTypes,Wt=lt?lt.createPolicy("lit-html",{createHTML:s=>s}):void 0,ve="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+w,Fe=`<${$e}>`,T=document,G=()=>T.createComment(""),Q=s=>s===null||typeof s!="object"&&typeof s!="function",Ut=Array.isArray,je=s=>Ut(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zt=/-->/g,Kt=/>/g,M=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Jt=/"/g,be=/^(?:script|style|textarea|title)$/i,Ve=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),f=Ve(1),z=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Xt=new WeakMap,x=T.createTreeWalker(T,129);function ye(s,t){if(!Ut(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wt!==void 0?Wt.createHTML(t):t}const We=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":t===3?"<math>":"",r=Z;for(let l=0;l<e;l++){const a=s[l];let c,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Z?d[1]==="!--"?r=Zt:d[1]!==void 0?r=Kt:d[2]!==void 0?(be.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=M):d[3]!==void 0&&(r=M):r===M?d[0]===">"?(r=o??Z,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?M:d[3]==='"'?Jt:Yt):r===Jt||r===Yt?r=M:r===Zt||r===Kt?r=Z:(r=M,o=void 0);const p=r===M&&s[l+1].startsWith("/>")?" ":"";n+=r===Z?a+Fe:h>=0?(i.push(c),a.slice(0,h)+ve+a.slice(h)+w+p):a+w+(h===-2?l:p)}return[ye(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let St=class _e{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const l=t.length-1,a=this.parts,[c,d]=We(t,e);if(this.el=_e.createElement(c,i),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=x.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(ve)){const u=d[r++],p=o.getAttribute(h).split(w),y=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:y[2],strings:p,ctor:y[1]==="."?Ke:y[1]==="?"?Ye:y[1]==="@"?Je:ht}),o.removeAttribute(h)}else h.startsWith(w)&&(a.push({type:6,index:n}),o.removeAttribute(h));if(be.test(o.tagName)){const h=o.textContent.split(w),u=h.length-1;if(u>0){o.textContent=lt?lt.emptyScript:"";for(let p=0;p<u;p++)o.append(h[p],G()),x.nextNode(),a.push({type:2,index:++n});o.append(h[u],G())}}}else if(o.nodeType===8)if(o.data===$e)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:n}),h+=w.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}};function q(s,t,e=s,i){var r,l;if(t===z)return t;let o=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const n=Q(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(s),o._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=q(s,o._$AS(s,t.values),o,i)),t}let Ze=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??T).importNode(e,!0);x.currentNode=o;let n=x.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new Rt(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Xe(n,this,t)),this._$AV.push(c),a=i[++l]}r!==(a==null?void 0:a.index)&&(n=x.nextNode(),r++)}return x.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Rt=class Ae{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),Q(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):je(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=St.createElement(ye(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(e);else{const r=new Ze(o,this),l=r.u(this.options);r.p(e),this.T(l),this._$AH=r}}_$AC(t){let e=Xt.get(t.strings);return e===void 0&&Xt.set(t.strings,e=new St(t)),e}k(t){Ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Ae(this.O(G()),this.O(G()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=q(this,t,e,0),r=!Q(t)||t!==this._$AH&&t!==z,r&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=q(this,l[i+a],e,a),c===z&&(c=this._$AH[a]),r||(r=!Q(c)||c!==this._$AH[a]),c===g?t=g:t!==g&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!o&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ke=class extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},Ye=class extends ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},Je=class extends ht{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??g)===z)return;const i=this._$AH,o=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==g&&(i===g||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Xe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};const vt=X.litHtmlPolyfillSupport;vt==null||vt(St,Rt),(X.litHtmlVersions??(X.litHtmlVersions=[])).push("3.2.1");const we=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=o=new Rt(t.insertBefore(G(),n),n,void 0,e??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let B=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=we(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return z}};var fe;B._$litElement$=!0,B.finalized=!0,(fe=globalThis.litElementHydrateSupport)==null||fe.call(globalThis,{LitElement:B});const $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:B});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class b{constructor(t){var e,i,o,n,r,l,a;this.title=t==null?void 0:t.title,this.subtitle=t==null?void 0:t.subtitle,this.headline=t==null?void 0:t.headline,this.message=t==null?void 0:t.message,this.headerColor=(e=t==null?void 0:t.headerColor)!==null&&e!==void 0?e:"#55A183",this.bodyColor=(i=t==null?void 0:t.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(o=t==null?void 0:t.showProcessingIndicator)!==null&&o!==void 0?o:!1,this.processingImageMode=(n=t==null?void 0:t.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(r=t==null?void 0:t.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(l=t==null?void 0:t.showHeaderLogo)!==null&&l!==void 0?l:!0,this.closeOnBackdropClick=(a=t==null?void 0:t.closeOnBackdropClick)!==null&&a!==void 0?a:!0}}function A(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}function Gt(s,t,e,i){function o(n){return n instanceof e?n:new e(function(r){r(n)})}return new(e||(e=Promise))(function(n,r){function l(d){try{c(i.next(d))}catch(h){r(h)}}function a(d){try{c(i.throw(d))}catch(h){r(h)}}function c(d){d.done?n(d.value):o(d.value).then(l,a)}c((i=i.apply(s,t||[])).next())})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Ht},Qe=(s=Ge,t,e)=>{const{kind:i,metadata:o}=e;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(e.name,s),i==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,s)},init(l){return l!==void 0&&this.P(r,void 0,s),l}}}if(i==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,s)}}throw Error("Unsupported decorator location: "+i)};function ut(s){return(t,e)=>typeof e=="object"?Qe(s,t,e):((i,o,n)=>{const r=o.hasOwnProperty(n);return o.constructor.createProperty(n,r?{...i,wrapped:!0}:i),r?Object.getOwnPropertyDescriptor(o,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ti(s,t){return(e,i,o)=>{const n=r=>{var l;return((l=r.renderRoot)==null?void 0:l.querySelector(s))??null};if(t){const{get:r,set:l}=typeof i=="object"?e:o??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Qt(e,i,{get(){let a=r.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Qt(e,i,{get(){return n(this)}})}}function*Nt(s=document.activeElement){s!=null&&(yield s,"shadowRoot"in s&&s.shadowRoot&&s.shadowRoot.mode!=="closed"&&(yield*Nt(s.shadowRoot.activeElement)))}function ei(){return[...Nt()].pop()}const te=new WeakMap;function Ee(s){let t=te.get(s);return t||(t=window.getComputedStyle(s,null),te.set(s,t)),t}function ii(s){if("checkVisibility"in s&&typeof s.checkVisibility=="function")return s.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Ee(s);return t.visibility!=="hidden"&&t.display!=="none"}function si(s){const t=Ee(s),{overflowY:e,overflowX:i}=t;return e==="scroll"||i==="scroll"?!0:e!=="auto"||i!=="auto"?!1:s.scrollHeight>s.clientHeight&&e==="auto"||s.scrollWidth>s.clientWidth&&i==="auto"}function oi(s){const t=s.tagName.toLowerCase(),e=Number(s.getAttribute("tabindex"));return s.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||s.hasAttribute("disabled")||s.closest("[inert]")||t==="input"&&s.getAttribute("type")==="radio"&&!s.hasAttribute("checked")||!ii(s)?!1:(t==="audio"||t==="video")&&s.hasAttribute("controls")||s.hasAttribute("tabindex")||s.hasAttribute("contenteditable")&&s.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:si(s)}function ni(s,t){var e;return((e=s.getRootNode({composed:!0}))===null||e===void 0?void 0:e.host)!==t}function ee(s){const t=new WeakMap,e=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!e.includes(o)&&oi(o)&&e.push(o),o instanceof HTMLSlotElement&&ni(o,s)&&o.assignedElements({flatten:!0}).forEach(n=>{i(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const n of Array.from(o.children))i(n)}return i(s),e.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let K=[];class ri{constructor(t){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=ei();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=ee(this.element);let r=n.findIndex(a=>a===o);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){r+l>=n.length?r=0:r+l<0?r=n.length-1:r+=l,this.previousFocus=this.currentFocus;const a=n[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const c=[...Nt()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){K.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){K=K.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return K[K.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=ee(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],o=this.tabDirection==="forward"?e:i;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=window,It=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),ie=new WeakMap;let Se=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(It&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ie.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ie.set(e,t))}return t}toString(){return this.cssText}};const ai=s=>new Se(typeof s=="string"?s:s+"",void 0,Bt),N=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Se(e,s,Bt)},li=(s,t)=>{It?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=rt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},se=It?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ai(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt;const ct=window,oe=ct.trustedTypes,ci=oe?oe.emptyScript:"",ne=ct.reactiveElementPolyfillSupport,Mt={toAttribute(s,t){switch(t){case Boolean:s=s?ci:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Me=(s,t)=>t!==s&&(t==t||s==s),yt={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Me},kt="finalized";let I=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yt}static finalize(){if(this.hasOwnProperty(kt))return!1;this[kt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(se(o))}else t!==void 0&&e.push(se(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return li(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=yt){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Mt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Mt;this._$El=n,this[n]=l.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Me)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};I[kt]=!0,I.elementProperties=new Map,I.elementStyles=[],I.shadowRootOptions={mode:"open"},ne==null||ne({ReactiveElement:I}),((bt=ct.reactiveElementVersions)!==null&&bt!==void 0?bt:ct.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const dt=window,F=dt.trustedTypes,re=F?F.createPolicy("lit-html",{createHTML:s=>s}):void 0,xt="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,ke="?"+C,di=`<${ke}>`,O=document,tt=()=>O.createComment(""),et=s=>s===null||typeof s!="object"&&typeof s!="function",xe=Array.isArray,hi=s=>xe(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",At=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,le=/>/g,k=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,de=/"/g,Le=/^(?:script|style|textarea|title)$/i,ui=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Pe=ui(1),j=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),he=new WeakMap,L=O.createTreeWalker(O,129,null,!1);function Te(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(t):t}const pi=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=Y;for(let l=0;l<e;l++){const a=s[l];let c,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Y?d[1]==="!--"?r=ae:d[1]!==void 0?r=le:d[2]!==void 0?(Le.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=k):d[3]!==void 0&&(r=k):r===k?d[0]===">"?(r=o??Y,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?k:d[3]==='"'?de:ce):r===de||r===ce?r=k:r===ae||r===le?r=Y:(r=k,o=void 0);const p=r===k&&s[l+1].startsWith("/>")?" ":"";n+=r===Y?a+di:h>=0?(i.push(c),a.slice(0,h)+xt+a.slice(h)+C+p):a+C+(h===-2?(i.push(void 0),l):p)}return[Te(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class it{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const l=t.length-1,a=this.parts,[c,d]=pi(t,e);if(this.el=it.createElement(c,i),L.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(o=L.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const u of o.getAttributeNames())if(u.endsWith(xt)||u.startsWith(C)){const p=d[r++];if(h.push(u),p!==void 0){const y=o.getAttribute(p.toLowerCase()+xt).split(C),_=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:_[2],strings:y,ctor:_[1]==="."?fi:_[1]==="?"?vi:_[1]==="@"?$i:pt})}else a.push({type:6,index:n})}for(const u of h)o.removeAttribute(u)}if(Le.test(o.tagName)){const h=o.textContent.split(C),u=h.length-1;if(u>0){o.textContent=F?F.emptyScript:"";for(let p=0;p<u;p++)o.append(h[p],tt()),L.nextNode(),a.push({type:2,index:++n});o.append(h[u],tt())}}}else if(o.nodeType===8)if(o.data===ke)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(C,h+1))!==-1;)a.push({type:7,index:n}),h+=C.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function V(s,t,e=s,i){var o,n,r,l;if(t===j)return t;let a=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const c=et(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(s),a._$AT(s,e,i)),i!==void 0?((r=(l=e)._$Co)!==null&&r!==void 0?r:l._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=V(s,a._$AS(s,t.values),a,i)),t}class mi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:O).importNode(i,!0);L.currentNode=n;let r=L.nextNode(),l=0,a=0,c=o[0];for(;c!==void 0;){if(l===c.index){let d;c.type===2?d=new st(r,r.nextSibling,this,t):c.type===1?d=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(d=new bi(r,this,t)),this._$AV.push(d),c=o[++a]}l!==(c==null?void 0:c.index)&&(r=L.nextNode(),l++)}return L.currentNode=O,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{constructor(t,e,i,o){var n;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),et(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):hi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&et(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=it.createElement(Te(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new mi(n,this),l=r.u(this.options);r.v(i),this.$(l),this._$AH=r}}_$AC(t){let e=he.get(t.strings);return e===void 0&&he.set(t.strings,e=new it(t)),e}T(t){xe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new st(this.k(tt()),this.k(tt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class pt{constructor(t,e,i,o,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=V(this,t,e,0),r=!et(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=V(this,l[i+a],e,a),c===j&&(c=this._$AH[a]),r||(r=!et(c)||c!==this._$AH[a]),c===v?t=v:t!==v&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!o&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fi extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const gi=F?F.emptyScript:"";class vi extends pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,gi):this.element.removeAttribute(this.name)}}class $i extends pt{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=V(this,t,e,0))!==null&&i!==void 0?i:v)===j)return;const o=this._$AH,n=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==v&&(o===v||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class bi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const ue=dt.litHtmlPolyfillSupport;ue==null||ue(it,st),((_t=dt.litHtmlVersions)!==null&&_t!==void 0?_t:dt.litHtmlVersions=[]).push("2.8.0");const yi=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const l=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new st(t.insertBefore(tt(),l),l,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wt,Ct;class D extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return j}}D.finalized=!0,D._$litElement$=!0,(wt=globalThis.litElementHydrateSupport)===null||wt===void 0||wt.call(globalThis,{LitElement:D});const pe=globalThis.litElementPolyfillSupport;pe==null||pe({LitElement:D});((Ct=globalThis.litElementVersions)!==null&&Ct!==void 0?Ct:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},wi=(s,t,e)=>{t.constructor.createProperty(e,s)};function Ci(s){return(t,e)=>e!==void 0?wi(s,t,e):Ai(s,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;((Et=window.HTMLSlotElement)===null||Et===void 0?void 0:Et.prototype.assignedElements)!=null;var me;(function(s){s.processing="processing",s.complete="complete"})(me||(me={}));let Lt=class extends D{constructor(){super(...arguments),this.mode="processing"}render(){return Pe`
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
    `}static get styles(){const t=N`var(--activityIndicatorCheckmarkColor, #31A481)`,e=N`var(--activityIndicatorCompletedRingColor, #31A481)`,i=N`var(--activityIndicatorLoadingRingColor, #333333)`,o=N`var(--activityIndicatorLoadingDotColor, #333333)`;return N`
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
    `}};A([Ci({type:String})],Lt.prototype,"mode",void 0);Lt=A([_i("ia-activity-indicator")],Lt);const Ei=Pe`
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
`;class Si extends D{static get styles(){return N`
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
    `}render(){return Ei}}customElements.define("ia-icon-close",Si);const Mi=f`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">
      A line drawing of the Internet Archive headquarters building façade.
    </desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" class="fill-color">
        <path
          d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z"
          id="path-1"
        ></path>
      </mask>
      <use class="fill-color" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" class="fill-color">
        <path
          d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z"
          id="swatch"
        ></path>
      </g>
    </g>
  </svg>
`;let Pt=class extends B{constructor(){super(...arguments),this.config=new b}render(){return f`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?f`<div class="logo-icon">${Mi}</div>`:g}
            ${this.config.title?f`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?f`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?f` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?f` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(t){if(t.preventDefault(),t.type==="keydown"&&t.key!==" "&&t.key!=="Enter")return;const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return f`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const t=m`var(--modalLogoSize, 6.5rem)`,e=m`var(--processingImageSize, 7.5rem)`,i=m`var(--modalCornerRadius, 1rem)`,o=m`var(--modalBorder, 2px solid black)`,n=m`var(--modalBottomMargin, 2.5rem)`,r=m`var(--modalTopMargin, 5rem)`,l=m`var(--modalHeaderBottomPadding, 0.5em)`,a=m`var(--modalBottomPadding, 2rem)`,c=m`var(--modalScrollOffset, 5px)`,d=m`var(--modalTitleFontSize, 1.8rem)`,h=m`var(--modalSubtitleFontSize, 1.4rem)`,u=m`var(--modalHeadlineFontSize, 1.6rem)`,p=m`var(--modalMessageFontSize, 1.4rem)`,y=m`var(--modalTitleLineHeight, normal)`,_=m`var(--modalSubtitleLineHeight, normal)`,H=m`var(--modalHeadlineLineHeight, normal)`,U=m`var(--modalMessageLineHeight, normal)`;return m`
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
        border: ${o};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${l};
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
        line-height: ${_};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${o};
        border-top: 0;
        padding: 0 1rem calc(${a} - ${c}) 1rem;
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
        line-height: ${U};
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
    `}};A([ut({type:Object})],Pt.prototype,"config",void 0);Pt=A([Ce("modal-template")],Pt);function ki(s,t,e){var i=e||{},o=i.noTrailing,n=o===void 0?!1:o,r=i.noLeading,l=r===void 0?!1:r,a=i.debounceMode,c=a===void 0?void 0:a,d,h=!1,u=0;function p(){d&&clearTimeout(d)}function y(H){var U=H||{},S=U.upcomingOnly,mt=S===void 0?!1:S;p(),h=!mt}function _(){for(var H=arguments.length,U=new Array(H),S=0;S<H;S++)U[S]=arguments[S];var mt=this,Dt=Date.now()-u;if(h)return;function ot(){u=Date.now(),t.apply(mt,U)}function zt(){d=void 0}!l&&c&&!d&&ot(),p(),c===void 0&&Dt>s?l?(u=Date.now(),n||(d=setTimeout(c?zt:ot,s))):ot():n!==!0&&(d=setTimeout(c?zt:ot,c===void 0?s-Dt:s))}return _.cancel=y,_}var P;(function(s){s.Open="open",s.Closed="closed"})(P||(P={}));class xi{constructor(t){this.windowResizeThrottler=ki(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case P.Open:this.startResizeListener(),this.stopDocumentScroll();break;case P.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let W=class extends B{constructor(){super(...arguments),this.mode=P.Closed,this.hostBridge=new xi(this),this.modal=new ri(this),this.closeOnBackdropClick=!0}firstUpdated(){return Gt(this,void 0,void 0,function*(){yield new Promise(t=>setTimeout(t,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",t=>{t.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return f`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=P.Closed,this.customModalContent=void 0,this.modalTemplate.config=new b,this.modal.deactivate()}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}showModal(t){return Gt(this,void 0,void 0,function*(){this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.modalTemplate.config=t.config,this.customModalContent=t.customModalContent,this.mode=P.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=m`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=m`var(--modalBackdropZindex, 1000)`,i=m`var(--modalWidth, 32rem)`,o=m`var(--modalMaxWidth, 95%)`,n=m`var(--modalZindex, 2000)`;return m`
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
        max-width: ${o};
      }
    `}};A([ut({type:String,reflect:!0})],W.prototype,"mode",void 0);A([ut({type:Object})],W.prototype,"customModalContent",void 0);A([ut({type:Object})],W.prototype,"hostBridge",void 0);A([ti("modal-template")],W.prototype,"modalTemplate",void 0);W=A([Ce("modal-manager")],W);we(f`
        <modal-manager>
          <div slot="slot-content-demo">
            <p>Slotted Content</p>
          </div>
        </modal-manager>

        <div class="actions">
          <button @click=${Li}>Modal</button>
          <button @click=${Hi}>All Features</button>
          <button @click=${Pi}>Error Modal</button>
          <button @click=${Ui}>Custom Content Modal</button>
          <button @click=${Ri}>Slotted Content Modal</button>
          <button @click=${Bi}>Processing Modal</button>
          <button @click=${Oe}>Processing Complete Modal</button>
          <button @click=${Di}>Modal Closed Callback</button>
          <button @click=${zi}>Unclosable Modal</button>
          <button @click=${qi}>Unclickable Backdrop</button>
          <button @click=${Ni}>Text-heavy Modal</button>
          <button @click=${Ii}>Modal Without Logo</button>
        </div>

        <h3>Some Content</h3>

        <img src="./assets/images/200x200.jpg" style="float:right" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

        <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>

        <p>Maecenas porta ac nulla sed vestibulum. Suspendisse aliquam fermentum mi, id luctus tortor aliquet gravida. Maecenas sed tincidunt quam. Mauris cursus ante sit amet enim egestas, vitae pellentesque metus hendrerit. Sed quis tortor id dui mollis blandit quis ac nunc. Suspendisse tincidunt nisl quis nunc tincidunt, et finibus ipsum elementum. Maecenas congue, neque eget volutpat pulvinar, augue nisl interdum elit, et porta mi augue ut sapien.</p>

        <p>Fusce vel imperdiet justo. Aenean sollicitudin blandit nunc. Cras vitae orci id lorem condimentum tempor. Aliquam ac lectus sed mi suscipit sollicitudin at convallis nisl. Sed semper elementum sagittis. Nam fermentum nulla velit, non tempor massa fermentum non. Duis id ante eget elit gravida semper ac quis ligula. Duis vel libero ligula. Curabitur tempor sed velit nec egestas. Vivamus sit amet volutpat purus. Integer imperdiet mattis erat, vitae dignissim odio accumsan quis. Fusce bibendum lectus quis est molestie, eget scelerisque elit interdum. Etiam imperdiet a leo vitae ultricies. Etiam pretium quam eget sem mollis, quis elementum libero vulputate. Praesent aliquet dictum augue a luctus.</p>

        <p>Maecenas vulputate iaculis mauris nec lobortis. Sed nibh ante, vehicula nec varius et, condimentum in massa. Curabitur a turpis porta, auctor magna in, iaculis ante. Suspendisse potenti. Donec massa orci, sollicitudin in nulla ut, fringilla dignissim elit. Suspendisse porttitor lorem nec sem volutpat ullamcorper. Curabitur blandit est tristique velit pharetra rhoncus. Aliquam vitae mauris ex.</p>
      `,document.querySelector("#demo"));const $=document.querySelector("modal-manager");function Li(){const s=new b;s.headline="Success",s.message="Thank you for your support!",$.showModal({config:s})}function Pi(){const s=new b;s.headline="Error",s.message="An error occurred while processing your donation.",s.headerColor="#691916",s.bodyColor="#fff",$.showModal({config:s})}function Ti(){alert("Bill <3 You")}function Oi(){alert("You pressed a button.")}function Hi(){const s=new b;s.title=f`Donation Received`,s.subtitle=f`Thanks a bunch!`,s.headline=f`A Headline that catches attention and might spill over to multiple lines!`,s.message=f`A long informative message for your users that let them know about something`,s.headerColor="purple",s.showProcessingIndicator=!0,s.processingImageMode="done";const t=f`
        <div style="text-align: center; margin-top: 10px;">
          <button @click=${Oi}>I'm A Button To Press</button>
        </div>
      `;$.showModal({config:s,customModalContent:t})}function Ui(){const s=new b;s.title="Custom Content",s.headline=f`<span class="sr-only">Also support screen-reader only</span>`;const t=f`
        <style>a:focus {
         outline: 2px solid blue;
        }
        </style>
        Can contain any markup, including web components. Event listeners also work. Try clicking on the picture.
        <span class="sr-only">Also support screen-reader only</span>
        <div style="text-align: center">
          <a href="https://www.billmurraystory.com/" style="display: block;">Bill Murray Stories</a>
          <img src="./assets/images/100x100.jpg" @click=${Ti} />
        </div>
      `;$.showModal({config:s,customModalContent:t})}function Ri(){const s=new b;s.title="Slotted Content";const t=f`
        Can slot content from the top-level:
        <slot name="slot-content-demo"></slot>
      `;$.showModal({config:s,customModalContent:t})}function Ni(){const s=new b;s.title=f`Lorem Ipsum`,s.subtitle=f`Subtitle`,s.headline=f`Everything Important`,s.message=f`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor scelerisque quam, sit amet porta tortor consectetur non. Cras sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.</p>

      <p>In laoreet scelerisque tortor, at convallis nisl efficitur vehicula. Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in lacus fermentum tristique. In porttitor malesuada sapien non posuere. Phasellus mollis mauris ultrices est consectetur, id pulvinar magna suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam cursus posuere ultricies.</p>
      `,s.headerColor="#36A483",$.showModal({config:s})}function Ii(){const s=new b;s.headline="Success",s.title=f`Donation Received`,s.message="Thank you for your support!",s.headerColor="#194880",s.showHeaderLogo=!1,$.showModal({config:s})}function Oe(){const s=new b;s.showProcessingIndicator=!0,s.processingImageMode="complete",$.showModal({config:s})}function Bi(){const s=new b;s.headerColor="#497fbf",s.showProcessingIndicator=!0,s.processingImageMode="processing",s.showCloseButton=!1,s.closeOnBackdropClick=!1,$.showModal({config:s}),setTimeout(Oe,1500)}function Di(){const s=new b;s.message="When you close this modal another will open.",$.showModal({config:s,userClosedModalCallback:()=>{const t=new b;t.message="I'm another modal",t.headerColor="#497fbf",$.showModal({config:t})}})}function zi(){const s=new b;s.message="User cannot close this. Will close automatically in 2 seconds.",s.showCloseButton=!1,s.closeOnBackdropClick=!1,$.showModal({config:s}),setTimeout($.closeModal.bind($),2e3)}function qi(){const s=new b;s.message="Clicking on the backdrop will not close this.",s.showCloseButton=!0,s.closeOnBackdropClick=!1,$.showModal({config:s})}
