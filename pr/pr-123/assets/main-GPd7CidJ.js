(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const z=globalThis,tt=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ct=new WeakMap;let _t=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(tt&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ct.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ct.set(i,t))}return t}toString(){return this.cssText}};const Bt=e=>new _t(typeof e=="string"?e:e+"",void 0,et),d=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,s,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new _t(i,e,et)},Nt=(e,t)=>{if(tt)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),s=z.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}},dt=tt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return Bt(i)})(e):e;const{is:Ht,defineProperty:It,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Rt,getPrototypeOf:qt}=Object,V=globalThis,ut=V.trustedTypes,Ft=ut?ut.emptyScript:"",zt=V.reactiveElementPolyfillSupport,O=(e,t)=>e,j={toAttribute(e,t){switch(t){case Boolean:e=e?Ft:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},it=(e,t)=>!Ht(e,t),ht={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=ht){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,i);s!==void 0&&It(this.prototype,t,s)}}static getPropertyDescriptor(t,i,o){const{get:s,set:n}=Dt(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get:s,set(r){const l=s?.call(this);n?.call(this,r),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const i=this.properties,o=[...Ut(i),...Rt(i)];for(const s of o)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)i.unshift(dt(s))}else t!==void 0&&i.push(dt(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:j).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,i){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:j;this._$Em=s;const l=r.fromAttribute(i,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,i,o,s=!1,n){if(t!==void 0){const r=this.constructor;if(s===!1&&(n=this[t]),o??=r.getPropertyOptions(t),!((o.hasChanged??it)(n,i)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:s,wrapped:n},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??i??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:r}=n,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[O("elementProperties")]=new Map,k[O("finalized")]=new Map,zt?.({ReactiveElement:k}),(V.reactiveElementVersions??=[]).push("2.1.2");const st=globalThis,pt=e=>e,W=st.trustedTypes,mt=W?W.createPolicy("lit-html",{createHTML:e=>e}):void 0,At="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+y,jt=`<${Mt}>`,M=document,B=()=>M.createComment(""),N=e=>e===null||typeof e!="object"&&typeof e!="function",ot=Array.isArray,Wt=e=>ot(e)||typeof e?.[Symbol.iterator]=="function",X=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,C=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,bt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Vt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),c=Vt(1),x=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),$t=new WeakMap,_=M.createTreeWalker(M,129);function kt(e,t){if(!ot(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}const Zt=(e,t)=>{const i=e.length-1,o=[];let s,n=t===2?"<svg>":t===3?"<math>":"",r=P;for(let l=0;l<i;l++){const a=e[l];let h,p,u=-1,g=0;for(;g<a.length&&(r.lastIndex=g,p=r.exec(a),p!==null);)g=r.lastIndex,r===P?p[1]==="!--"?r=ft:p[1]!==void 0?r=gt:p[2]!==void 0?(Lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=C):p[3]!==void 0&&(r=C):r===C?p[0]===">"?(r=s??P,u=-1):p[1]===void 0?u=-2:(u=r.lastIndex-p[2].length,h=p[1],r=p[3]===void 0?C:p[3]==='"'?bt:vt):r===bt||r===vt?r=C:r===ft||r===gt?r=P:(r=C,s=void 0);const v=r===C&&e[l+1].startsWith("/>")?" ":"";n+=r===P?a+jt:u>=0?(o.push(h),a.slice(0,u)+At+a.slice(u)+y+v):a+y+(u===-2?l:v)}return[kt(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class H{constructor({strings:t,_$litType$:i},o){let s;this.parts=[];let n=0,r=0;const l=t.length-1,a=this.parts,[h,p]=Zt(t,i);if(this.el=H.createElement(h,o),_.currentNode=this.el.content,i===2||i===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=_.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(At)){const g=p[r++],v=s.getAttribute(u).split(y),$=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:$[2],strings:v,ctor:$[1]==="."?Yt:$[1]==="?"?Xt:$[1]==="@"?Jt:Z}),s.removeAttribute(u)}else u.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(u));if(Lt.test(s.tagName)){const u=s.textContent.split(y),g=u.length-1;if(g>0){s.textContent=W?W.emptyScript:"";for(let v=0;v<g;v++)s.append(u[v],B()),_.nextNode(),a.push({type:2,index:++n});s.append(u[g],B())}}}else if(s.nodeType===8)if(s.data===Mt)a.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(y,u+1))!==-1;)a.push({type:7,index:n}),u+=y.length-1}n++}}static createElement(t,i){const o=M.createElement("template");return o.innerHTML=t,o}}function E(e,t,i=e,o){if(t===x)return t;let s=o!==void 0?i._$Co?.[o]:i._$Cl;const n=N(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=s:i._$Cl=s),s!==void 0&&(t=E(e,s._$AS(e,t.values),s,o)),t}class Kt{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,s=(t?.creationScope??M).importNode(i,!0);_.currentNode=s;let n=_.nextNode(),r=0,l=0,a=o[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new I(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new Gt(n,this,t)),this._$AV.push(h),a=o[++l]}r!==a?.index&&(n=_.nextNode(),r++)}return _.currentNode=M,s}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=E(this,t,i),N(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=H.createElement(kt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(i);else{const n=new Kt(s,this),r=n.u(this.options);n.p(i),this.T(r),this._$AH=n}}_$AC(t){let i=$t.get(t.strings);return i===void 0&&$t.set(t.strings,i=new H(t)),i}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const n of t)s===i.length?i.push(o=new I(this.O(B()),this.O(B()),this,this.options)):o=i[s],o._$AI(n),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const o=pt(t).nextSibling;pt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,s,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(t,i=this,o,s){const n=this.strings;let r=!1;if(n===void 0)t=E(this,t,i,0),r=!N(t)||t!==this._$AH&&t!==x,r&&(this._$AH=t);else{const l=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=E(this,l[o+a],i,a),h===x&&(h=this._$AH[a]),r||=!N(h)||h!==this._$AH[a],h===m?t=m:t!==m&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class Xt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class Jt extends Z{constructor(t,i,o,s,n){super(t,i,o,s,n),this.type=5}_$AI(t,i=this){if((t=E(this,t,i,0)??m)===x)return;const o=this._$AH,s=t===m&&o!==m||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==m&&(o===m||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Gt{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Qt=st.litHtmlPolyfillSupport;Qt?.(H,I),(st.litHtmlVersions??=[]).push("3.3.2");const te=(e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const n=i?.renderBefore??null;o._$litPart$=s=new I(t.insertBefore(B(),n),n,void 0,i??{})}return s._$AI(e),s};const nt=globalThis;class b extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=te(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}b._$litElement$=!0,b.finalized=!0,nt.litElementHydrateSupport?.({LitElement:b});const ee=nt.litElementPolyfillSupport;ee?.({LitElement:b});(nt.litElementVersions??=[]).push("4.2.2");const K=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const ie={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it},se=(e=ie,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),o==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,e,l),l}}}if(o==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e,!0,l)}}throw Error("Unsupported decorator location: "+o)};function D(e){return(t,i)=>typeof i=="object"?se(e,t,i):((o,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,o),r?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,i)}const oe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function xt(e,t){return(i,o,s)=>{const n=r=>r.renderRoot?.querySelector(e)??null;return oe(i,o,{get(){return n(this)}})}}class f{constructor(t){this.title=t?.title,this.subtitle=t?.subtitle,this.headline=t?.headline,this.message=t?.message,this.headerColor=t?.headerColor??"#55A183",this.bodyColor=t?.bodyColor??"#fbfbfd",this.showProcessingIndicator=t?.showProcessingIndicator??!1,this.processingImageMode=t?.processingImageMode??"complete",this.showCloseButton=t?.showCloseButton??!0,this.showLeftNavButton=t?.showLeftNavButton??!1,this.leftNavButtonText=t?.leftNavButtonText??"",this.showHeaderLogo=t?.showHeaderLogo??!0,this.closeOnBackdropClick=t?.closeOnBackdropClick??!0}}function*rt(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*rt(e.shadowRoot.activeElement)))}function Et(){return[...rt()].pop()}const yt=new WeakMap;function St(e){let t=yt.get(e);return t||(t=window.getComputedStyle(e,null),yt.set(e,t)),t}function ne(e){if("checkVisibility"in e&&typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=St(e);return t.visibility!=="hidden"&&t.display!=="none"}function re(e){const t=St(e),{overflowY:i,overflowX:o}=t;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function ae(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!ne(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:re(e)}function le(e,t){return e.getRootNode({composed:!0})?.host!==t}function wt(e){const t=new WeakMap,i=[];function o(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!i.includes(s)&&ae(s)&&i.push(s),s instanceof HTMLSlotElement&&le(s,e)&&s.assignedElements({flatten:!0}).forEach(n=>{o(n)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&o(s.shadowRoot)}for(const n of Array.from(s.children))o(n)}return o(e),i.sort((s,n)=>{const r=Number(s.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let T=[];class ce{constructor(t){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=Et();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=wt(this.element);let n=s.findIndex(l=>l===o);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=s.length?n=0:n+r<0?n=s.length-1:n+=r,this.previousFocus=this.currentFocus;const l=s[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;i.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const a=[...rt()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){T.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){T=T.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return T[T.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=wt(this.element);if(!this.element.matches(":focus-within")){const i=t[0],o=t[t.length-1],s=this.tabDirection==="forward"?i:o;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}function Pt(e,t,i,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}var Ct;(function(e){e.processing="processing",e.complete="complete"})(Ct||(Ct={}));let J=class extends b{constructor(){super(...arguments),this.mode="processing"}render(){return c`
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
    `}static get styles(){const t=d`var(--activityIndicatorCheckmarkColor, #31A481)`,i=d`var(--activityIndicatorCompletedRingColor, #31A481)`,o=d`var(--activityIndicatorLoadingRingColor, #333333)`,s=d`var(--activityIndicatorLoadingDotColor, #333333)`;return d`
      #completed-ring {
        fill: ${i};
      }

      #check {
        fill: ${t};
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
    `}};Pt([D({type:String})],J.prototype,"mode",void 0);J=Pt([K("ia-activity-indicator")],J);const de=c`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`;class ue extends b{static get styles(){return d`
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
    `}render(){return de}}customElements.define("ia-icon-close",ue);const he=c`
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
`,pe=c`
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
`;var me=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,Tt=(e,t,i,o)=>{for(var s=o>1?void 0:o?fe(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&me(t,i,s),s};let G=class extends b{constructor(){super(...arguments),this.config=new f}render(){return c`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showLeftNavButton?this.leftNavButtonTemplate:m}
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?c`<div class="logo-icon">${he}</div>`:m}
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
    `}handleCloseButton(e){if(e.preventDefault(),e.type==="keydown"&&e.key!==" "&&e.key!=="Enter")return;const t=new Event("closeButtonPressed");this.dispatchEvent(t)}handleLeftNavButtonPressed(e){if(e.preventDefault(),e.type==="keydown"&&e.key!==" "&&e.key!=="Enter")return;const t=new Event("leftNavButtonPressed");this.dispatchEvent(t)}get closeButtonTemplate(){return c`
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
      ${pe} ${this.config.leftNavButtonText??""}
    </button> `}static get styles(){const e=d`var(--modalLogoSize, 6.5rem)`,t=d`var(--processingImageSize, 7.5rem)`,i=d`var(--modalCornerRadius, 1rem)`,o=d`var(--modalBorder, 2px solid black)`,s=d`var(--modalBottomMargin, 2.5rem)`,n=d`var(--modalTopMargin, 5rem)`,r=d`var(--modalHeaderBottomPadding, 0.5em)`,l=d`var(--modalBottomPadding, 2rem)`,a=d`var(--modalScrollOffset, 5px)`,h=d`var(--modalTitleFontSize, 1.8rem)`,p=d`var(--modalSubtitleFontSize, 1.4rem)`,u=d`var(--modalHeadlineFontSize, 1.6rem)`,g=d`var(--modalMessageFontSize, 1.4rem)`,v=d`var(--modalTitleLineHeight, normal)`,$=d`var(--modalSubtitleLineHeight, normal)`,R=d`var(--modalHeadlineLineHeight, normal)`,L=d`var(--modalMessageLineHeight, normal)`;return d`
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
        margin-top: ${n};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${o};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${r};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${h};
        font-weight: bold;
        line-height: ${v};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${p};
        line-height: ${$};
      }

      .modal-body {
        background-color: #fbfbfd;
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
        max-height: calc(100vh - (16.5rem + ${s}));
        min-height: 5rem;
        padding: 0 0 calc(${a}) 0;
      }

      .headline {
        font-size: ${u};
        font-weight: bold;
        text-align: center;
        line-height: ${R};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${g};
        line-height: ${L};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.18),
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
    `}};Tt([D({type:Object})],G.prototype,"config",2);G=Tt([K("modal-template")],G);function ge(e,t,i){var o=i||{},s=o.noTrailing,n=s===void 0?!1:s,r=o.noLeading,l=r===void 0?!1:r,a=o.debounceMode,h=a===void 0?void 0:a,p,u=!1,g=0;function v(){p&&clearTimeout(p)}function $(L){var q=L||{},w=q.upcomingOnly,Y=w===void 0?!1:w;v(),u=!Y}function R(){for(var L=arguments.length,q=new Array(L),w=0;w<L;w++)q[w]=arguments[w];var Y=this,at=Date.now()-g;if(u)return;function F(){g=Date.now(),t.apply(Y,q)}function lt(){p=void 0}!l&&h&&!p&&F(),v(),h===void 0&&at>e?l?(g=Date.now(),n||(p=setTimeout(h?lt:F,e))):F():n!==!0&&(p=setTimeout(h?lt:F,h===void 0?e-at:e))}return R.cancel=$,R}var A=(e=>(e.Open="open",e.Closed="closed",e))(A||{});class ve{constructor(t){this.windowResizeThrottler=ge(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case A.Open:this.startResizeListener(),this.stopDocumentScroll();break;case A.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}var be=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,U=(e,t,i,o)=>{for(var s=o>1?void 0:o?$e(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&be(t,i,s),s};let S=class extends b{constructor(){super(...arguments),this.mode=A.Closed,this.hostBridge=new ve(this),this.modal=new ce(this),this.closeOnBackdropClick=!0}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdropClicked()})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return c`
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
    `}getMode(){return this.mode}closeModal(){this.mode=A.Closed,this.customModalContent=void 0,this.modalTemplate&&(this.modalTemplate.config=new f),this.modal.deactivate(),this.triggeringElement?.focus?.(),this.triggeringElement=void 0}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}callUserPressedLeftNavButtonCallback(){const e=this.userPressedLeftNavButtonCallback;this.userPressedLeftNavButtonCallback=void 0,e&&e()}async showModal(e){this.mode===A.Closed&&this.captureFocusedElement(),this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.userPressedLeftNavButtonCallback=e.userPressedLeftNavButtonCallback,this.customModalContent=e.customModalContent,this.mode=A.Open,this.modalTemplate&&(this.modalTemplate.config=e.config,await this.modalTemplate.updateComplete,this.modalTemplate.focus()),this.modal.activate()}captureFocusedElement(){this.triggeringElement=Et()}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=d`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=d`var(--modalBackdropZindex, 1000)`,i=d`var(--modalWidth, 32rem)`,o=d`var(--modalMaxWidth, 95%)`,s=d`var(--modalZindex, 2000)`;return d`
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
        z-index: ${s};
        width: ${i};
        max-width: ${o};
      }
    `}};U([D({type:String,reflect:!0})],S.prototype,"mode",2);U([D({type:Object})],S.prototype,"customModalContent",2);U([D({type:Object})],S.prototype,"hostBridge",2);U([xt("modal-template")],S.prototype,"modalTemplate",2);S=U([K("modal-manager")],S);var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Ot=(e,t,i,o)=>{for(var s=o>1?void 0:o?we(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ye(t,i,s),s};let Q=class extends b{render(){return c`
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
    `}showModal(){const e=new f;e.headline=c`Success`,e.message=c`Thank you for your support!`,this.modalManager.showModal({config:e})}showErrorModal(){const e=new f;e.headline=c`Error`,e.message=c`An error occurred while processing your donation.`,e.headerColor="#691916",e.bodyColor="#fff",this.modalManager.showModal({config:e})}showBillAlert(){alert("Bill <3 You")}buttonPress(){alert("You pressed a button.")}showAllFeaturesModal(){const e=new f;e.title=c`Donation Received`,e.subtitle=c`Thanks a bunch!`,e.headline=c`A Headline that catches attention and might spill
    over to multiple lines!`,e.message=c`A long informative message for your users that let
    them know about something`,e.headerColor="purple",e.showProcessingIndicator=!0,e.processingImageMode="complete";const t=c`
      <div style="text-align: center; margin-top: 10px;">
        <button @click=${this.buttonPress}>I'm A Button To Press</button>
      </div>
    `;this.modalManager.showModal({config:e,customModalContent:t})}showCustomContentModal(){const e=new f;e.title=c`Custom Content`,e.headline=c`<span class="sr-only"
      >Also support screen-reader only</span
    >`;const t=c`
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
    `;this.modalManager.showModal({config:e,customModalContent:t})}showSlottedContentModal(){const e=new f;e.title=c`Slotted Content`;const t=c`
      Can slot content from the top-level:
      <slot name="slot-content-demo"></slot>
    `;this.modalManager.showModal({config:e,customModalContent:t})}showOverflowModal(){const e=new f;e.title=c`Lorem Ipsum`,e.subtitle=c`Subtitle`,e.headline=c`Everything Important`,e.message=c`
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
    `,e.headerColor="#36A483",this.modalManager.showModal({config:e})}showModalWithoutLogo(){const e=new f;e.headline=c`Success`,e.title=c`Donation Received`,e.message=c`Thank you for your support!`,e.headerColor="#194880",e.showHeaderLogo=!1,this.modalManager.showModal({config:e})}showCompleteModal(){const e=new f;e.showProcessingIndicator=!0,e.processingImageMode="complete",this.modalManager.showModal({config:e})}showProcessingModal(){const e=new f;e.headerColor="#497fbf",e.showProcessingIndicator=!0,e.processingImageMode="processing",e.showCloseButton=!1,e.closeOnBackdropClick=!1,this.modalManager.showModal({config:e}),setTimeout(this.showCompleteModal.bind(this),1500)}showUserClosedModalCallbackModal(){const e=new f;e.message=c`When you close this modal another will open.`,this.modalManager.showModal({config:e,userClosedModalCallback:()=>{const t=new f;t.message=c`I'm another modal`,t.headerColor="#497fbf",this.modalManager.showModal({config:t})}})}showModalUserCannotClose(){const e=new f;e.message=c`User cannot close this. Will close automatically in 2
    seconds.`,e.showCloseButton=!1,e.closeOnBackdropClick=!1,this.modalManager.showModal({config:e}),setTimeout(this.modalManager.closeModal.bind(this.modalManager),2e3)}showModalWithLeftNavButton(){const e=new f;e.message=c`This modal has a left nav button.`,e.showLeftNavButton=!0,e.leftNavButtonText="Back",this.modalManager.showModal({config:e,userPressedLeftNavButtonCallback:()=>{const t=new f;t.message=c`I'm the previous modal (or anything else you want
        to do here)`,t.headerColor="#497fbf",this.modalManager.showModal({config:t})}})}showModalUserCannotClickBackdrop(){const e=new f;e.message=c`Clicking on the backdrop will not close this.`,e.showCloseButton=!0,e.closeOnBackdropClick=!1,this.modalManager.showModal({config:e})}static get styles(){return d`
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
    `}};Ot([xt("modal-manager")],Q.prototype,"modalManager",2);Q=Ot([K("app-root")],Q);
