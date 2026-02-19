(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const z=window,le=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),pe=new WeakMap;let Ee=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(le&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=pe.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pe.set(i,e))}return e}toString(){return this.cssText}};const Re=t=>new Ee(typeof t=="string"?t:t+"",void 0,ce),u=(t,...e)=>{const i=t.length===1?t[0]:e.reduce(((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new Ee(i,t,ce)},qe=(t,e)=>{le?t.adoptedStyleSheets=e.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet)):e.forEach((i=>{const s=document.createElement("style"),o=z.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))},me=le?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Re(i)})(t):t;var Y;const j=window,ge=j.trustedTypes,Fe=ge?ge.emptyScript:"",fe=j.reactiveElementPolyfillSupport,ie={toAttribute(t,e){switch(e){case Boolean:t=t?Fe:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},xe=(t,e)=>e!==t&&(e==e||t==t),X={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:xe},oe="finalized";let k=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((i,s)=>{const o=this._$Ep(s,i);o!==void 0&&(this._$Ev.set(o,s),e.push(o))})),e}static createProperty(e,i=X){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,i);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){return{get(){return this[i]},set(o){const n=this[e];this[i]=o,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||X}static finalize(){if(this.hasOwnProperty(oe))return!1;this[oe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,s=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of s)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(me(o))}else e!==void 0&&i.push(me(e));return i}static _$Ep(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((i=>i(this)))}addController(e){var i,s;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const i=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return qe(i,this.constructor.elementStyles),i}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostConnected)===null||s===void 0?void 0:s.call(i)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostDisconnected)===null||s===void 0?void 0:s.call(i)}))}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$EO(e,i,s=X){var o;const n=this.constructor._$Ep(e,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?s.converter:ie).toAttribute(i,s.type);this._$El=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,i){var s;const o=this.constructor,n=o._$Ev.get(e);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:ie;this._$El=n,this[n]=l.fromAttribute(i,r.type),this._$El=null}}requestUpdate(e,i,s){let o=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||xe)(this[e],i)?(this._$AL.has(e)||this._$AL.set(e,i),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,n)=>this[n]=o)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)})),this.update(s)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(s)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)===null||i===void 0||i.forEach((s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((i,s)=>this._$EO(s,this[s],i))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};k[oe]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},fe?.({ReactiveElement:k}),((Y=j.reactiveElementVersions)!==null&&Y!==void 0?Y:j.reactiveElementVersions=[]).push("1.6.3");var J;const W=window,E=W.trustedTypes,ve=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,se="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,Se="?"+y,ze=`<${Se}>`,M=document,N=()=>M.createComment(""),H=t=>t===null||typeof t!="object"&&typeof t!="function",Pe=Array.isArray,je=t=>Pe(t)||typeof t?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,$e=/>/g,C=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,we=/"/g,Te=/^(?:script|style|textarea|title)$/i,We=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),c=We(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ce=new WeakMap,A=M.createTreeWalker(M,129,null,!1);function Be(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(e):e}const Ve=(t,e)=>{const i=t.length-1,s=[];let o,n=e===2?"<svg>":"",r=B;for(let l=0;l<i;l++){const a=t[l];let d,h,p=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===B?h[1]==="!--"?r=be:h[1]!==void 0?r=$e:h[2]!==void 0?(Te.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=C):h[3]!==void 0&&(r=C):r===C?h[0]===">"?(r=o??B,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?C:h[3]==='"'?we:ye):r===we||r===ye?r=C:r===be||r===$e?r=B:(r=C,o=void 0);const v=r===C&&t[l+1].startsWith("/>")?" ":"";n+=r===B?a+ze:p>=0?(s.push(d),a.slice(0,p)+se+a.slice(p)+y+v):a+y+(p===-2?(s.push(void 0),l):v)}return[Be(t,n+(t[i]||"<?>")+(e===2?"</svg>":"")),s]};class I{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[d,h]=Ve(e,i);if(this.el=I.createElement(d,s),A.currentNode=this.el.content,i===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(o=A.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const p=[];for(const m of o.getAttributeNames())if(m.endsWith(se)||m.startsWith(y)){const v=h[r++];if(p.push(m),v!==void 0){const T=o.getAttribute(v.toLowerCase()+se).split(y),b=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:b[2],strings:T,ctor:b[1]==="."?Ke:b[1]==="?"?Xe:b[1]==="@"?Je:V})}else a.push({type:6,index:n})}for(const m of p)o.removeAttribute(m)}if(Te.test(o.tagName)){const p=o.textContent.split(y),m=p.length-1;if(m>0){o.textContent=E?E.emptyScript:"";for(let v=0;v<m;v++)o.append(p[v],N()),A.nextNode(),a.push({type:2,index:++n});o.append(p[m],N())}}}else if(o.nodeType===8)if(o.data===Se)a.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(y,p+1))!==-1;)a.push({type:7,index:n}),p+=y.length-1}n++}}static createElement(e,i){const s=M.createElement("template");return s.innerHTML=e,s}}function S(t,e,i=t,s){var o,n,r,l;if(e===x)return e;let a=s!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[s]:i._$Cl;const d=H(e)?void 0:e._$litDirective$;return a?.constructor!==d&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),d===void 0?a=void 0:(a=new d(t),a._$AT(t,i,s)),s!==void 0?((r=(l=i)._$Co)!==null&&r!==void 0?r:l._$Co=[])[s]=a:i._$Cl=a),a!==void 0&&(e=S(t,a._$AS(t,e.values),a,s)),e}class Ze{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;const{el:{content:s},parts:o}=this._$AD,n=((i=e?.creationScope)!==null&&i!==void 0?i:M).importNode(s,!0);A.currentNode=n;let r=A.nextNode(),l=0,a=0,d=o[0];for(;d!==void 0;){if(l===d.index){let h;d.type===2?h=new D(r,r.nextSibling,this,e):d.type===1?h=new d.ctor(r,d.name,d.strings,this,e):d.type===6&&(h=new Ge(r,this,e)),this._$AV.push(h),d=o[++a]}l!==d?.index&&(r=A.nextNode(),l++)}return A.currentNode=M,n}v(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class D{constructor(e,i,s,o){var n;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cp=(n=o?.isConnected)===null||n===void 0||n}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=S(this,e,i),H(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):je(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){var i;const{values:s,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=I.createElement(Be(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===n)this._$AH.v(s);else{const r=new Ze(n,this),l=r.u(this.options);r.v(s),this.$(l),this._$AH=r}}_$AC(e){let i=Ce.get(e.strings);return i===void 0&&Ce.set(e.strings,i=new I(e)),i}T(e){Pe(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const n of e)o===i.length?i.push(s=new D(this.k(N()),this.k(N()),this,this.options)):s=i[o],s._$AI(n),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cp=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}}class V{constructor(e,i,s,o,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,i=this,s,o){const n=this.strings;let r=!1;if(n===void 0)e=S(this,e,i,0),r=!H(e)||e!==this._$AH&&e!==x,r&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=S(this,l[s+a],i,a),d===x&&(d=this._$AH[a]),r||(r=!H(d)||d!==this._$AH[a]),d===g?e=g:e!==g&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const Ye=E?E.emptyScript:"";class Xe extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,Ye):this.element.removeAttribute(this.name)}}class Je extends V{constructor(e,i,s,o,n){super(e,i,s,o,n),this.type=5}_$AI(e,i=this){var s;if((e=(s=S(this,e,i,0))!==null&&s!==void 0?s:g)===x)return;const o=this._$AH,n=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==g&&(o===g||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const Ae=W.litHtmlPolyfillSupport;Ae?.(I,D),((J=W.litHtmlVersions)!==null&&J!==void 0?J:W.litHtmlVersions=[]).push("2.8.0");const Qe=(t,e,i)=>{var s,o;const n=(s=i?.renderBefore)!==null&&s!==void 0?s:e;let r=n._$litPart$;if(r===void 0){const l=(o=i?.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new D(e.insertBefore(N(),l),l,void 0,i??{})}return r._$AI(t),r};var Q,ee;class $ extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const s=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=s.firstChild),s}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}}$.finalized=!0,$._$litElement$=!0,(Q=globalThis.litElementHydrateSupport)===null||Q===void 0||Q.call(globalThis,{LitElement:$});const _e=globalThis.litElementPolyfillSupport;_e?.({LitElement:$});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.3.3");const Z=t=>e=>typeof e=="function"?((i,s)=>(customElements.define(i,s),s))(t,e):((i,s)=>{const{kind:o,elements:n}=s;return{kind:o,elements:n,finisher(r){customElements.define(i,r)}}})(t,e);const et=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},tt=(t,e,i)=>{e.constructor.createProperty(i,t)};function U(t){return(e,i)=>i!==void 0?tt(t,e,i):et(t,e)}const it=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(s===void 0){const n=(o=i.originalKey)!==null&&o!==void 0?o:i.key,r=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return t!=null&&(r.finisher=function(l){t(l,n)}),r}{const n=i.constructor;e!==void 0&&Object.defineProperty(i,s,e(s)),t?.(n,s)}};function Oe(t,e){return it({descriptor:i=>({get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0})})}var te;((te=window.HTMLSlotElement)===null||te===void 0?void 0:te.prototype.assignedElements)!=null;class f{constructor(e){this.title=e?.title,this.subtitle=e?.subtitle,this.headline=e?.headline,this.message=e?.message,this.headerColor=e?.headerColor??"#55A183",this.bodyColor=e?.bodyColor??"#fbfbfd",this.showProcessingIndicator=e?.showProcessingIndicator??!1,this.processingImageMode=e?.processingImageMode??"complete",this.showCloseButton=e?.showCloseButton??!0,this.showLeftNavButton=e?.showLeftNavButton??!1,this.leftNavButtonText=e?.leftNavButtonText??"",this.showHeaderLogo=e?.showHeaderLogo??!0,this.closeOnBackdropClick=e?.closeOnBackdropClick??!0}}function*de(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*de(t.shadowRoot.activeElement)))}function Ne(){return[...de()].pop()}const Me=new WeakMap;function He(t){let e=Me.get(t);return e||(e=window.getComputedStyle(t,null),Me.set(t,e)),e}function ot(t){if("checkVisibility"in t&&typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=He(t);return e.visibility!=="hidden"&&e.display!=="none"}function st(t){const e=He(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function nt(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!ot(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:st(t)}function rt(t,e){return t.getRootNode({composed:!0})?.host!==e}function Le(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&nt(o)&&i.push(o),o instanceof HTMLSlotElement&&rt(o,t)&&o.assignedElements({flatten:!0}).forEach(n=>{s(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const n of Array.from(o.children))s(n)}return s(t),i.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let O=[];class at{constructor(e){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Ne();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Le(this.element);let n=o.findIndex(l=>l===s);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const l=o[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;i.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const a=[...de()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){O.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){O=O.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return O[O.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Le(this.element);if(!this.element.matches(":focus-within")){const i=e[0],s=e[e.length-1],o=this.tabDirection==="forward"?i:s;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}function Ie(t,e,i,s){var o=arguments.length,n=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}var ke;(function(t){t.processing="processing",t.complete="complete"})(ke||(ke={}));let ne=class extends ${constructor(){super(...arguments),this.mode="processing"}render(){return c`
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
    `}static get styles(){const e=u`var(--activityIndicatorCheckmarkColor, #31A481)`,i=u`var(--activityIndicatorCompletedRingColor, #31A481)`,s=u`var(--activityIndicatorLoadingRingColor, #333333)`,o=u`var(--activityIndicatorLoadingDotColor, #333333)`;return u`
      #completed-ring {
        fill: ${i};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${s};
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
    `}};Ie([U({type:String})],ne.prototype,"mode",void 0);ne=Ie([Z("ia-activity-indicator")],ne);const lt=c`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`;class ct extends ${static get styles(){return u`
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
    `}render(){return lt}}customElements.define("ia-icon-close",ct);const dt=c`
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
`,ut=c`
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    title="Left arrow icon"
    alt="Left arrow icon"
  >
    <path
      d="m20.1116715 50.0035012-.1116715-.1085359 43.1159942-46.61088155c2.401537-2.18938917 4.6902018-3.28408375 6.8659943-3.28408375s4.1642651.63837733 5.9654178 1.91513199c1.8011528 1.27675467 3.1520173 2.97248092 4.0525937 5.08717877l-39.4020173 42.99768924 39.4020173 42.9976892c-.9005764 2.1146979-2.2514409 3.8104241-4.0525937 5.0871788-1.8011527 1.2767547-3.7896253 1.915132-5.9654178 1.915132-2.1013449 0-4.3900096-1.0573489-6.8659943-3.1720468l-43.1159942-46.7194174z"
    />
  </svg>
`;var ht=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,De=(t,e,i,s)=>{for(var o=s>1?void 0:s?pt(e,i):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(s?r(e,i,o):r(o))||o);return s&&o&&ht(e,i,o),o};let re=class extends ${constructor(){super(...arguments),this.config=new f}render(){return c`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showLeftNavButton?this.leftNavButtonTemplate:g}
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?c`<div class="logo-icon">${dt}</div>`:g}
            ${this.config.title?c`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?c`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?c` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?c` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(t){if(t.preventDefault(),t.type==="keydown"&&t.key!==" "&&t.key!=="Enter")return;const e=new Event("closeButtonPressed");this.dispatchEvent(e)}handleLeftNavButtonPressed(t){if(t.preventDefault(),t.type==="keydown"&&t.key!==" "&&t.key!=="Enter")return;const e=new Event("leftNavButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return c`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}get leftNavButtonTemplate(){return c`<button
      type="button"
      class="back-button"
      @click=${this.handleLeftNavButtonPressed}
      @keydown=${this.handleLeftNavButtonPressed}
    >
      ${ut} ${this.config.leftNavButtonText??""}
    </button> `}static get styles(){const t=u`var(--modalLogoSize, 6.5rem)`,e=u`var(--processingImageSize, 7.5rem)`,i=u`var(--modalCornerRadius, 1rem)`,s=u`var(--modalBorder, 2px solid black)`,o=u`var(--modalBottomMargin, 2.5rem)`,n=u`var(--modalTopMargin, 5rem)`,r=u`var(--modalHeaderBottomPadding, 0.5em)`,l=u`var(--modalBottomPadding, 2rem)`,a=u`var(--modalScrollOffset, 5px)`,d=u`var(--modalTitleFontSize, 1.8rem)`,h=u`var(--modalSubtitleFontSize, 1.4rem)`,p=u`var(--modalHeadlineFontSize, 1.6rem)`,m=u`var(--modalMessageFontSize, 1.4rem)`,v=u`var(--modalTitleLineHeight, normal)`,T=u`var(--modalSubtitleLineHeight, normal)`,b=u`var(--modalHeadlineLineHeight, normal)`,L=u`var(--modalMessageLineHeight, normal)`;return u`
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
        margin-top: ${n};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${s};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${r};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${d};
        font-weight: bold;
        line-height: ${v};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${h};
        line-height: ${T};
      }

      .modal-body {
        background-color: #fbfbfd;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${s};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${a}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${o}));
        min-height: 5rem;
        padding: 0 0 calc(${a}) 0;
      }

      .headline {
        font-size: ${p};
        font-weight: bold;
        text-align: center;
        line-height: ${b};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${m};
        line-height: ${L};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.18),
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
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .back-button {
        position: absolute;
        left: 1.2rem;
        top: 1.2rem;
        height: 2rem;
        background-color: transparent;
        outline: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: white;
        font-family: inherit;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
      }

      .back-button svg {
        height: 1.5rem;
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
    `}};De([U({type:Object})],re.prototype,"config",2);re=De([Z("modal-template")],re);function mt(t,e,i){var s=i||{},o=s.noTrailing,n=o===void 0?!1:o,r=s.noLeading,l=r===void 0?!1:r,a=s.debounceMode,d=a===void 0?void 0:a,h,p=!1,m=0;function v(){h&&clearTimeout(h)}function T(L){var q=L||{},w=q.upcomingOnly,K=w===void 0?!1:w;v(),p=!K}function b(){for(var L=arguments.length,q=new Array(L),w=0;w<L;w++)q[w]=arguments[w];var K=this,ue=Date.now()-m;if(p)return;function F(){m=Date.now(),e.apply(K,q)}function he(){h=void 0}!l&&d&&!h&&F(),v(),d===void 0&&ue>t?l?(m=Date.now(),n||(h=setTimeout(d?he:F,t))):F():n!==!0&&(h=setTimeout(d?he:F,d===void 0?t-ue:t))}return b.cancel=T,b}var _=(t=>(t.Open="open",t.Closed="closed",t))(_||{});class gt{constructor(e){this.windowResizeThrottler=mt(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case _.Open:this.startResizeListener(),this.stopDocumentScroll();break;case _.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}var ft=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,R=(t,e,i,s)=>{for(var o=s>1?void 0:s?vt(e,i):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(s?r(e,i,o):r(o))||o);return s&&o&&ft(e,i,o),o};let P=class extends ${constructor(){super(...arguments),this.mode=_.Closed,this.hostBridge=new gt(this),this.modal=new at(this),this.closeOnBackdropClick=!0}async firstUpdated(){await new Promise(t=>setTimeout(t,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",t=>{t.key==="Escape"&&this.backdropClicked()})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return c`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          @leftNavButtonPressed=${this.callUserPressedLeftNavButtonCallback}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=_.Closed,this.customModalContent=void 0,this.modalTemplate&&(this.modalTemplate.config=new f),this.modal.deactivate(),this.triggeringElement?.focus?.(),this.triggeringElement=void 0}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}callUserPressedLeftNavButtonCallback(){const t=this.userPressedLeftNavButtonCallback;this.userPressedLeftNavButtonCallback=void 0,t&&t()}async showModal(t){this.mode===_.Closed&&this.captureFocusedElement(),this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.userPressedLeftNavButtonCallback=t.userPressedLeftNavButtonCallback,this.customModalContent=t.customModalContent,this.mode=_.Open,this.modalTemplate&&(this.modalTemplate.config=t.config,await this.modalTemplate.updateComplete,this.modalTemplate.focus()),this.modal.activate()}captureFocusedElement(){this.triggeringElement=Ne()}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=u`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=u`var(--modalBackdropZindex, 1000)`,i=u`var(--modalWidth, 32rem)`,s=u`var(--modalMaxWidth, 95%)`,o=u`var(--modalZindex, 2000)`;return u`
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
        z-index: ${o};
        width: ${i};
        max-width: ${s};
      }
    `}};R([U({type:String,reflect:!0})],P.prototype,"mode",2);R([U({type:Object})],P.prototype,"customModalContent",2);R([U({type:Object})],P.prototype,"hostBridge",2);R([Oe("modal-template")],P.prototype,"modalTemplate",2);P=R([Z("modal-manager")],P);var bt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Ue=(t,e,i,s)=>{for(var o=s>1?void 0:s?$t(e,i):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(s?r(e,i,o):r(o))||o);return s&&o&&bt(e,i,o),o};let ae=class extends ${render(){return c`
      <modal-manager>
        <div slot="slot-content-demo">
          <p>Slotted Content</p>
        </div>
      </modal-manager>

      <div class="actions">
        <button @click=${this.showModal}>Modal</button>
        <button @click=${this.showAllFeaturesModal}>All Features</button>
        <button @click=${this.showErrorModal}>Error Modal</button>
        <button @click=${this.showCustomContentModal}>
          Custom Content Modal
        </button>
        <button @click=${this.showSlottedContentModal}>
          Slotted Content Modal
        </button>
        <button @click=${this.showProcessingModal}>Processing Modal</button>
        <button @click=${this.showCompleteModal}>
          Processing Complete Modal
        </button>
        <button @click=${this.showUserClosedModalCallbackModal}>
          Modal Closed Callback
        </button>
        <button @click=${this.showModalUserCannotClose}>
          Unclosable Modal
        </button>
        <button @click=${this.showModalUserCannotClickBackdrop}>
          Unclickable Backdrop
        </button>
        <button @click=${this.showOverflowModal}>Text-heavy Modal</button>
        <button @click=${this.showModalWithoutLogo}>Modal Without Logo</button>
        <button @click=${this.showModalWithLeftNavButton}>
          Modal With Left Nav Button
        </button>
      </div>

      <h3>Some Content</h3>

      <img src="./assets/images/200x200.jpg" style="float:right" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
        sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac
        tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor
        scelerisque quam, sit amet porta tortor consectetur non. Cras
        sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis
        laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula
        aliquam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet
        volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.
      </p>

      <p>
        In laoreet scelerisque tortor, at convallis nisl efficitur vehicula.
        Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt
        erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat
        condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo
        feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in
        lacus fermentum tristique. In porttitor malesuada sapien non posuere.
        Phasellus mollis mauris ultrices est consectetur, id pulvinar magna
        suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula
        cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id
        maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam
        cursus posuere ultricies.
      </p>

      <p>
        Maecenas porta ac nulla sed vestibulum. Suspendisse aliquam fermentum
        mi, id luctus tortor aliquet gravida. Maecenas sed tincidunt quam.
        Mauris cursus ante sit amet enim egestas, vitae pellentesque metus
        hendrerit. Sed quis tortor id dui mollis blandit quis ac nunc.
        Suspendisse tincidunt nisl quis nunc tincidunt, et finibus ipsum
        elementum. Maecenas congue, neque eget volutpat pulvinar, augue nisl
        interdum elit, et porta mi augue ut sapien.
      </p>

      <p>
        Fusce vel imperdiet justo. Aenean sollicitudin blandit nunc. Cras vitae
        orci id lorem condimentum tempor. Aliquam ac lectus sed mi suscipit
        sollicitudin at convallis nisl. Sed semper elementum sagittis. Nam
        fermentum nulla velit, non tempor massa fermentum non. Duis id ante eget
        elit gravida semper ac quis ligula. Duis vel libero ligula. Curabitur
        tempor sed velit nec egestas. Vivamus sit amet volutpat purus. Integer
        imperdiet mattis erat, vitae dignissim odio accumsan quis. Fusce
        bibendum lectus quis est molestie, eget scelerisque elit interdum. Etiam
        imperdiet a leo vitae ultricies. Etiam pretium quam eget sem mollis,
        quis elementum libero vulputate. Praesent aliquet dictum augue a luctus.
      </p>

      <p>
        Maecenas vulputate iaculis mauris nec lobortis. Sed nibh ante, vehicula
        nec varius et, condimentum in massa. Curabitur a turpis porta, auctor
        magna in, iaculis ante. Suspendisse potenti. Donec massa orci,
        sollicitudin in nulla ut, fringilla dignissim elit. Suspendisse
        porttitor lorem nec sem volutpat ullamcorper. Curabitur blandit est
        tristique velit pharetra rhoncus. Aliquam vitae mauris ex.
      </p>
    `}showModal(){const t=new f;t.headline=c`Success`,t.message=c`Thank you for your support!`,this.modalManager.showModal({config:t})}showErrorModal(){const t=new f;t.headline=c`Error`,t.message=c`An error occurred while processing your donation.`,t.headerColor="#691916",t.bodyColor="#fff",this.modalManager.showModal({config:t})}showBillAlert(){alert("Bill <3 You")}buttonPress(){alert("You pressed a button.")}showAllFeaturesModal(){const t=new f;t.title=c`Donation Received`,t.subtitle=c`Thanks a bunch!`,t.headline=c`A Headline that catches attention and might spill
    over to multiple lines!`,t.message=c`A long informative message for your users that let
    them know about something`,t.headerColor="purple",t.showProcessingIndicator=!0,t.processingImageMode="complete";const e=c`
      <div style="text-align: center; margin-top: 10px;">
        <button @click=${this.buttonPress}>I'm A Button To Press</button>
      </div>
    `;this.modalManager.showModal({config:t,customModalContent:e})}showCustomContentModal(){const t=new f;t.title=c`Custom Content`,t.headline=c`<span class="sr-only"
      >Also support screen-reader only</span
    >`;const e=c`
      <style>
        a:focus {
          outline: 2px solid blue;
        }
      </style>
      Can contain any markup, including web components. Event listeners also
      work. Try clicking on the picture.
      <span class="sr-only">Also support screen-reader only</span>
      <div style="text-align: center">
        <a href="https://www.billmurraystory.com/" style="display: block;"
          >Bill Murray Stories</a
        >
        <img src="./assets/images/100x100.jpg" @click=${this.showBillAlert} />
      </div>
    `;this.modalManager.showModal({config:t,customModalContent:e})}showSlottedContentModal(){const t=new f;t.title=c`Slotted Content`;const e=c`
      Can slot content from the top-level:
      <slot name="slot-content-demo"></slot>
    `;this.modalManager.showModal({config:t,customModalContent:e})}showOverflowModal(){const t=new f;t.title=c`Lorem Ipsum`,t.subtitle=c`Subtitle`,t.headline=c`Everything Important`,t.message=c`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
        sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac
        tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor
        scelerisque quam, sit amet porta tortor consectetur non. Cras
        sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis
        laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula
        aliquam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet
        volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.
      </p>

      <p>
        In laoreet scelerisque tortor, at convallis nisl efficitur vehicula.
        Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt
        erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat
        condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo
        feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in
        lacus fermentum tristique. In porttitor malesuada sapien non posuere.
        Phasellus mollis mauris ultrices est consectetur, id pulvinar magna
        suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula
        cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id
        maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam
        cursus posuere ultricies.
      </p>
    `,t.headerColor="#36A483",this.modalManager.showModal({config:t})}showModalWithoutLogo(){const t=new f;t.headline=c`Success`,t.title=c`Donation Received`,t.message=c`Thank you for your support!`,t.headerColor="#194880",t.showHeaderLogo=!1,this.modalManager.showModal({config:t})}showCompleteModal(){const t=new f;t.showProcessingIndicator=!0,t.processingImageMode="complete",this.modalManager.showModal({config:t})}showProcessingModal(){const t=new f;t.headerColor="#497fbf",t.showProcessingIndicator=!0,t.processingImageMode="processing",t.showCloseButton=!1,t.closeOnBackdropClick=!1,this.modalManager.showModal({config:t}),setTimeout(this.showCompleteModal.bind(this),1500)}showUserClosedModalCallbackModal(){const t=new f;t.message=c`When you close this modal another will open.`,this.modalManager.showModal({config:t,userClosedModalCallback:()=>{const e=new f;e.message=c`I'm another modal`,e.headerColor="#497fbf",this.modalManager.showModal({config:e})}})}showModalUserCannotClose(){const t=new f;t.message=c`User cannot close this. Will close automatically in 2
    seconds.`,t.showCloseButton=!1,t.closeOnBackdropClick=!1,this.modalManager.showModal({config:t}),setTimeout(this.modalManager.closeModal.bind(this.modalManager),2e3)}showModalWithLeftNavButton(){const t=new f;t.message=c`This modal has a left nav button.`,t.showLeftNavButton=!0,t.leftNavButtonText="Back",this.modalManager.showModal({config:t,userPressedLeftNavButtonCallback:()=>{const e=new f;e.message=c`I'm the previous modal (or anything else you want
        to do here)`,e.headerColor="#497fbf",this.modalManager.showModal({config:e})}})}showModalUserCannotClickBackdrop(){const t=new f;t.message=c`Clicking on the backdrop will not close this.`,t.showCloseButton=!0,t.closeOnBackdropClick=!1,this.modalManager.showModal({config:t})}static get styles(){return u`
      modal-manager {
        display: none;
        --modalTitleLineHeight: 4.5rem;
      }

      modal-manager[mode='open'] {
        display: block;
      }

      .actions {
        position: fixed;
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid black;
        padding: 10px;
        top: 10px;
        left: 10px;
      }
    `}};Ue([Oe("modal-manager")],ae.prototype,"modalManager",2);ae=Ue([Z("app-root")],ae);
