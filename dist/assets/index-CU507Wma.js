(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const u of t)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const u={};return t.integrity&&(u.integrity=t.integrity),t.referrerPolicy&&(u.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?u.credentials="include":t.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function g(t){if(t.ep)return;t.ep=!0;const u=n(t);fetch(t.href,u)}})();var Ra=!1,Va=!1,I=[],Oa=-1;function wg(a){vg(a)}function vg(a){I.includes(a)||I.push(a),Mg()}function Qe(a){let e=I.indexOf(a);e!==-1&&e>Oa&&I.splice(e,1)}function Mg(){!Va&&!Ra&&(Ra=!0,queueMicrotask(zg))}function zg(){Ra=!1,Va=!0;for(let a=0;a<I.length;a++)I[a](),Oa=a;I.length=0,Oa=-1,Va=!1}var J,Y,X,an,Ia=!0;function jg(a){Ia=!1,a(),Ia=!0}function Pg(a){J=a.reactive,X=a.release,Y=e=>a.effect(e,{scheduler:n=>{Ia?wg(n):n()}}),an=a.raw}function Ke(a){Y=a}function Lg(a){let e=()=>{};return[g=>{let t=Y(g);return a._x_effects||(a._x_effects=new Set,a._x_runEffects=()=>{a._x_effects.forEach(u=>u())}),a._x_effects.add(t),e=()=>{t!==void 0&&(a._x_effects.delete(t),X(t))},t},()=>{e()}]}function en(a,e){let n=!0,g,t=Y(()=>{let u=a();JSON.stringify(u),n?g=u:queueMicrotask(()=>{e(u,g),g=u}),n=!1});return()=>X(t)}function da(a,e,n={}){a.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function _(a,e){if(typeof ShadowRoot=="function"&&a instanceof ShadowRoot){Array.from(a.children).forEach(t=>_(t,e));return}let n=!1;if(e(a,()=>n=!0),n)return;let g=a.firstElementChild;for(;g;)_(g,e),g=g.nextElementSibling}function N(a,...e){console.warn(`Alpine Warning: ${a}`,...e)}var qe=!1;function Cg(){qe&&N("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),qe=!0,document.body||N("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),da(document,"alpine:init"),da(document,"alpine:initializing"),ce(),Ng(e=>B(e,_)),oe(e=>ie(e)),rn((e,n)=>{ye(e,n).forEach(g=>g())});let a=e=>!va(e.parentElement,!0);Array.from(document.querySelectorAll(tn().join(","))).filter(a).forEach(e=>{B(e)}),da(document,"alpine:initialized")}var de=[],nn=[];function gn(){return de.map(a=>a())}function tn(){return de.concat(nn).map(a=>a())}function un(a){de.push(a)}function dn(a){nn.push(a)}function va(a,e=!1){return Ma(a,n=>{if((e?tn():gn()).some(t=>n.matches(t)))return!0})}function Ma(a,e){if(a){if(e(a))return a;if(a._x_teleportBack&&(a=a._x_teleportBack),!!a.parentElement)return Ma(a.parentElement,e)}}function Kg(a){return gn().some(e=>a.matches(e))}var on=[];function qg(a){on.push(a)}function B(a,e=_,n=()=>{}){Ug(()=>{e(a,(g,t)=>{n(g,t),on.forEach(u=>u(g,t)),ye(g,g.attributes).forEach(u=>u()),g._x_ignore&&t()})})}function ie(a){_(a,e=>{bn(e),Bg(e)})}var sn=[],ln=[],cn=[];function Ng(a){cn.push(a)}function oe(a,e){typeof e=="function"?(a._x_cleanups||(a._x_cleanups=[]),a._x_cleanups.push(e)):(e=a,ln.push(e))}function rn(a){sn.push(a)}function pn(a,e,n){a._x_attributeCleanups||(a._x_attributeCleanups={}),a._x_attributeCleanups[e]||(a._x_attributeCleanups[e]=[]),a._x_attributeCleanups[e].push(n)}function bn(a,e){a._x_attributeCleanups&&Object.entries(a._x_attributeCleanups).forEach(([n,g])=>{(e===void 0||e.includes(n))&&(g.forEach(t=>t()),delete a._x_attributeCleanups[n])})}function Bg(a){if(a._x_cleanups)for(;a._x_cleanups.length;)a._x_cleanups.pop()()}var se=new MutationObserver(pe),le=!1;function ce(){se.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),le=!0}function yn(){Eg(),se.disconnect(),le=!1}var na=[];function Eg(){let a=se.takeRecords();na.push(()=>a.length>0&&pe(a));let e=na.length;queueMicrotask(()=>{if(na.length===e)for(;na.length>0;)na.shift()()})}function h(a){if(!le)return a();yn();let e=a();return ce(),e}var re=!1,xa=[];function _g(){re=!0}function Gg(){re=!1,pe(xa),xa=[]}function pe(a){if(re){xa=xa.concat(a);return}let e=new Set,n=new Set,g=new Map,t=new Map;for(let u=0;u<a.length;u++)if(!a[u].target._x_ignoreMutationObserver&&(a[u].type==="childList"&&(a[u].addedNodes.forEach(d=>d.nodeType===1&&e.add(d)),a[u].removedNodes.forEach(d=>d.nodeType===1&&n.add(d))),a[u].type==="attributes")){let d=a[u].target,i=a[u].attributeName,o=a[u].oldValue,s=()=>{g.has(d)||g.set(d,[]),g.get(d).push({name:i,value:d.getAttribute(i)})},l=()=>{t.has(d)||t.set(d,[]),t.get(d).push(i)};d.hasAttribute(i)&&o===null?s():d.hasAttribute(i)?(l(),s()):l()}t.forEach((u,d)=>{bn(d,u)}),g.forEach((u,d)=>{sn.forEach(i=>i(d,u))});for(let u of n)e.has(u)||(ln.forEach(d=>d(u)),ie(u));e.forEach(u=>{u._x_ignoreSelf=!0,u._x_ignore=!0});for(let u of e)n.has(u)||u.isConnected&&(delete u._x_ignoreSelf,delete u._x_ignore,cn.forEach(d=>d(u)),u._x_ignore=!0,u._x_ignoreSelf=!0);e.forEach(u=>{delete u._x_ignoreSelf,delete u._x_ignore}),e=null,n=null,g=null,t=null}function Sn(a){return ca(U(a))}function la(a,e,n){return a._x_dataStack=[e,...U(n||a)],()=>{a._x_dataStack=a._x_dataStack.filter(g=>g!==e)}}function U(a){return a._x_dataStack?a._x_dataStack:typeof ShadowRoot=="function"&&a instanceof ShadowRoot?U(a.host):a.parentNode?U(a.parentNode):[]}function ca(a){return new Proxy({objects:a},Rg)}var Rg={ownKeys({objects:a}){return Array.from(new Set(a.flatMap(e=>Object.keys(e))))},has({objects:a},e){return e==Symbol.unscopables?!1:a.some(n=>Object.prototype.hasOwnProperty.call(n,e))},get({objects:a},e,n){return e=="toJSON"?Vg:Reflect.get(a.find(g=>Object.prototype.hasOwnProperty.call(g,e))||{},e,n)},set({objects:a},e,n,g){const t=a.find(d=>Object.prototype.hasOwnProperty.call(d,e))||a[a.length-1],u=Object.getOwnPropertyDescriptor(t,e);return u?.set&&u?.get?Reflect.set(t,e,n,g):Reflect.set(t,e,n)}};function Vg(){return Reflect.ownKeys(this).reduce((e,n)=>(e[n]=Reflect.get(this,n),e),{})}function Tn(a){let e=g=>typeof g=="object"&&!Array.isArray(g)&&g!==null,n=(g,t="")=>{Object.entries(Object.getOwnPropertyDescriptors(g)).forEach(([u,{value:d,enumerable:i}])=>{if(i===!1||d===void 0)return;let o=t===""?u:`${t}.${u}`;typeof d=="object"&&d!==null&&d._x_interceptor?g[u]=d.initialize(a,o,u):e(d)&&d!==g&&!(d instanceof Element)&&n(d,o)})};return n(a)}function An(a,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(g,t,u){return a(this.initialValue,()=>Og(g,t),d=>$a(g,t,d),t,u)}};return e(n),g=>{if(typeof g=="object"&&g!==null&&g._x_interceptor){let t=n.initialize.bind(n);n.initialize=(u,d,i)=>{let o=g.initialize(u,d,i);return n.initialValue=o,t(u,d,i)}}else n.initialValue=g;return n}}function Og(a,e){return e.split(".").reduce((n,g)=>n[g],a)}function $a(a,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)a[e[0]]=n;else{if(e.length===0)throw error;return a[e[0]]||(a[e[0]]={}),$a(a[e[0]],e.slice(1),n)}}var Dn={};function C(a,e){Dn[a]=e}function Ha(a,e){return Object.entries(Dn).forEach(([n,g])=>{let t=null;function u(){if(t)return t;{let[d,i]=wn(e);return t={interceptor:An,...d},oe(e,i),t}}Object.defineProperty(a,`$${n}`,{get(){return g(e,u())},enumerable:!1})}),a}function Ig(a,e,n,...g){try{return n(...g)}catch(t){sa(t,a,e)}}function sa(a,e,n=void 0){a=Object.assign(a??{message:"No error message given."},{el:e,expression:n}),console.warn(`Alpine Expression Error: ${a.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw a},0)}var ma=!0;function mn(a){let e=ma;ma=!1;let n=a();return ma=e,n}function $(a,e,n={}){let g;return v(a,e)(t=>g=t,n),g}function v(...a){return hn(...a)}var hn=xn;function $g(a){hn=a}function xn(a,e){let n={};Ha(n,a);let g=[n,...U(a)],t=typeof e=="function"?Hg(g,e):Yg(g,e,a);return Ig.bind(null,a,e,t)}function Hg(a,e){return(n=()=>{},{scope:g={},params:t=[]}={})=>{let u=e.apply(ca([g,...a]),t);ka(n,u)}}var Na={};function Wg(a,e){if(Na[a])return Na[a];let n=Object.getPrototypeOf(async function(){}).constructor,g=/^[\n\s]*if.*\(.*\)/.test(a.trim())||/^(let|const)\s/.test(a.trim())?`(async()=>{ ${a} })()`:a,u=(()=>{try{let d=new n(["__self","scope"],`with (scope) { __self.result = ${g} }; __self.finished = true; return __self.result;`);return Object.defineProperty(d,"name",{value:`[Alpine] ${a}`}),d}catch(d){return sa(d,e,a),Promise.resolve()}})();return Na[a]=u,u}function Yg(a,e,n){let g=Wg(e,n);return(t=()=>{},{scope:u={},params:d=[]}={})=>{g.result=void 0,g.finished=!1;let i=ca([u,...a]);if(typeof g=="function"){let o=g(g,i).catch(s=>sa(s,n,e));g.finished?(ka(t,g.result,i,d,n),g.result=void 0):o.then(s=>{ka(t,s,i,d,n)}).catch(s=>sa(s,n,e)).finally(()=>g.result=void 0)}}}function ka(a,e,n,g,t){if(ma&&typeof e=="function"){let u=e.apply(n,g);u instanceof Promise?u.then(d=>ka(a,d,n,g)).catch(d=>sa(d,t,e)):a(u)}else typeof e=="object"&&e instanceof Promise?e.then(u=>a(u)):a(e)}var be="x-";function Q(a=""){return be+a}function Fg(a){be=a}var Wa={};function m(a,e){return Wa[a]=e,{before(n){if(!Wa[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${a}\` will use the default order of execution`);return}const g=O.indexOf(n);O.splice(g>=0?g:O.indexOf("DEFAULT"),0,a)}}}function ye(a,e,n){if(e=Array.from(e),a._x_virtualDirectives){let u=Object.entries(a._x_virtualDirectives).map(([i,o])=>({name:i,value:o})),d=kn(u);u=u.map(i=>d.find(o=>o.name===i.name)?{name:`x-bind:${i.name}`,value:`"${i.value}"`}:i),e=e.concat(u)}let g={};return e.map(zn((u,d)=>g[u]=d)).filter(Pn).map(Jg(g,n)).sort(Xg).map(u=>Zg(a,u))}function kn(a){return Array.from(a).map(zn()).filter(e=>!Pn(e))}var Ya=!1,ua=new Map,fn=Symbol();function Ug(a){Ya=!0;let e=Symbol();fn=e,ua.set(e,[]);let n=()=>{for(;ua.get(e).length;)ua.get(e).shift()();ua.delete(e)},g=()=>{Ya=!1,n()};a(n),g()}function wn(a){let e=[],n=i=>e.push(i),[g,t]=Lg(a);return e.push(t),[{Alpine:pa,effect:g,cleanup:n,evaluateLater:v.bind(v,a),evaluate:$.bind($,a)},()=>e.forEach(i=>i())]}function Zg(a,e){let n=()=>{},g=Wa[e.type]||n,[t,u]=wn(a);pn(a,e.original,u);let d=()=>{a._x_ignore||a._x_ignoreSelf||(g.inline&&g.inline(a,e,t),g=g.bind(g,a,e,t),Ya?ua.get(fn).push(g):g())};return d.runCleanups=u,d}var vn=(a,e)=>({name:n,value:g})=>(n.startsWith(a)&&(n=n.replace(a,e)),{name:n,value:g}),Mn=a=>a;function zn(a=()=>{}){return({name:e,value:n})=>{let{name:g,value:t}=jn.reduce((u,d)=>d(u),{name:e,value:n});return g!==e&&a(g,e),{name:g,value:t}}}var jn=[];function Se(a){jn.push(a)}function Pn({name:a}){return Ln().test(a)}var Ln=()=>new RegExp(`^${be}([^:^.]+)\\b`);function Jg(a,e){return({name:n,value:g})=>{let t=n.match(Ln()),u=n.match(/:([a-zA-Z0-9\-_:]+)/),d=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],i=e||a[n]||n;return{type:t?t[1]:null,value:u?u[1]:null,modifiers:d.map(o=>o.replace(".","")),expression:g,original:i}}}var Fa="DEFAULT",O=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Fa,"teleport"];function Xg(a,e){let n=O.indexOf(a.type)===-1?Fa:a.type,g=O.indexOf(e.type)===-1?Fa:e.type;return O.indexOf(n)-O.indexOf(g)}var Ua=[],Te=!1;function Ae(a=()=>{}){return queueMicrotask(()=>{Te||setTimeout(()=>{Za()})}),new Promise(e=>{Ua.push(()=>{a(),e()})})}function Za(){for(Te=!1;Ua.length;)Ua.shift()()}function Qg(){Te=!0}function De(a,e){return Array.isArray(e)?Ne(a,e.join(" ")):typeof e=="object"&&e!==null?at(a,e):typeof e=="function"?De(a,e()):Ne(a,e)}function Ne(a,e){let n=t=>t.split(" ").filter(u=>!a.classList.contains(u)).filter(Boolean),g=t=>(a.classList.add(...t),()=>{a.classList.remove(...t)});return e=e===!0?e="":e||"",g(n(e))}function at(a,e){let n=i=>i.split(" ").filter(Boolean),g=Object.entries(e).flatMap(([i,o])=>o?n(i):!1).filter(Boolean),t=Object.entries(e).flatMap(([i,o])=>o?!1:n(i)).filter(Boolean),u=[],d=[];return t.forEach(i=>{a.classList.contains(i)&&(a.classList.remove(i),d.push(i))}),g.forEach(i=>{a.classList.contains(i)||(a.classList.add(i),u.push(i))}),()=>{d.forEach(i=>a.classList.add(i)),u.forEach(i=>a.classList.remove(i))}}function za(a,e){return typeof e=="object"&&e!==null?et(a,e):nt(a,e)}function et(a,e){let n={};return Object.entries(e).forEach(([g,t])=>{n[g]=a.style[g],g.startsWith("--")||(g=gt(g)),a.style.setProperty(g,t)}),setTimeout(()=>{a.style.length===0&&a.removeAttribute("style")}),()=>{za(a,n)}}function nt(a,e){let n=a.getAttribute("style",e);return a.setAttribute("style",e),()=>{a.setAttribute("style",n||"")}}function gt(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ja(a,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,a.apply(this,arguments))}}m("transition",(a,{value:e,modifiers:n,expression:g},{evaluate:t})=>{typeof g=="function"&&(g=t(g)),g!==!1&&(!g||typeof g=="boolean"?ut(a,n,e):tt(a,g,e))});function tt(a,e,n){Cn(a,De,""),{enter:t=>{a._x_transition.enter.during=t},"enter-start":t=>{a._x_transition.enter.start=t},"enter-end":t=>{a._x_transition.enter.end=t},leave:t=>{a._x_transition.leave.during=t},"leave-start":t=>{a._x_transition.leave.start=t},"leave-end":t=>{a._x_transition.leave.end=t}}[n](e)}function ut(a,e,n){Cn(a,za);let g=!e.includes("in")&&!e.includes("out")&&!n,t=g||e.includes("in")||["enter"].includes(n),u=g||e.includes("out")||["leave"].includes(n);e.includes("in")&&!g&&(e=e.filter((y,T)=>T<e.indexOf("out"))),e.includes("out")&&!g&&(e=e.filter((y,T)=>T>e.indexOf("out")));let d=!e.includes("opacity")&&!e.includes("scale"),i=d||e.includes("opacity"),o=d||e.includes("scale"),s=i?0:1,l=o?ga(e,"scale",95)/100:1,r=ga(e,"delay",0)/1e3,c=ga(e,"origin","center"),S="opacity, transform",D=ga(e,"duration",150)/1e3,f=ga(e,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";t&&(a._x_transition.enter.during={transformOrigin:c,transitionDelay:`${r}s`,transitionProperty:S,transitionDuration:`${D}s`,transitionTimingFunction:p},a._x_transition.enter.start={opacity:s,transform:`scale(${l})`},a._x_transition.enter.end={opacity:1,transform:"scale(1)"}),u&&(a._x_transition.leave.during={transformOrigin:c,transitionDelay:`${r}s`,transitionProperty:S,transitionDuration:`${f}s`,transitionTimingFunction:p},a._x_transition.leave.start={opacity:1,transform:"scale(1)"},a._x_transition.leave.end={opacity:s,transform:`scale(${l})`})}function Cn(a,e,n={}){a._x_transition||(a._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(g=()=>{},t=()=>{}){Xa(a,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},g,t)},out(g=()=>{},t=()=>{}){Xa(a,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},g,t)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(a,e,n,g){const t=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let u=()=>t(n);if(e){a._x_transition&&(a._x_transition.enter||a._x_transition.leave)?a._x_transition.enter&&(Object.entries(a._x_transition.enter.during).length||Object.entries(a._x_transition.enter.start).length||Object.entries(a._x_transition.enter.end).length)?a._x_transition.in(n):u():a._x_transition?a._x_transition.in(n):u();return}a._x_hidePromise=a._x_transition?new Promise((d,i)=>{a._x_transition.out(()=>{},()=>d(g)),a._x_transitioning&&a._x_transitioning.beforeCancel(()=>i({isFromCancelledTransition:!0}))}):Promise.resolve(g),queueMicrotask(()=>{let d=Kn(a);d?(d._x_hideChildren||(d._x_hideChildren=[]),d._x_hideChildren.push(a)):t(()=>{let i=o=>{let s=Promise.all([o._x_hidePromise,...(o._x_hideChildren||[]).map(i)]).then(([l])=>l());return delete o._x_hidePromise,delete o._x_hideChildren,s};i(a).catch(o=>{if(!o.isFromCancelledTransition)throw o})})})};function Kn(a){let e=a.parentNode;if(e)return e._x_hidePromise?e:Kn(e)}function Xa(a,e,{during:n,start:g,end:t}={},u=()=>{},d=()=>{}){if(a._x_transitioning&&a._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(g).length===0&&Object.keys(t).length===0){u(),d();return}let i,o,s;dt(a,{start(){i=e(a,g)},during(){o=e(a,n)},before:u,end(){i(),s=e(a,t)},after:d,cleanup(){o(),s()}})}function dt(a,e){let n,g,t,u=Ja(()=>{h(()=>{n=!0,g||e.before(),t||(e.end(),Za()),e.after(),a.isConnected&&e.cleanup(),delete a._x_transitioning})});a._x_transitioning={beforeCancels:[],beforeCancel(d){this.beforeCancels.push(d)},cancel:Ja(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();u()}),finish:u},h(()=>{e.start(),e.during()}),Qg(),requestAnimationFrame(()=>{if(n)return;let d=Number(getComputedStyle(a).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,i=Number(getComputedStyle(a).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;d===0&&(d=Number(getComputedStyle(a).animationDuration.replace("s",""))*1e3),h(()=>{e.before()}),g=!0,requestAnimationFrame(()=>{n||(h(()=>{e.end()}),Za(),setTimeout(a._x_transitioning.finish,d+i),t=!0)})})}function ga(a,e,n){if(a.indexOf(e)===-1)return n;const g=a[a.indexOf(e)+1];if(!g||e==="scale"&&isNaN(g))return n;if(e==="duration"||e==="delay"){let t=g.match(/([0-9]+)ms/);if(t)return t[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(a[a.indexOf(e)+2])?[g,a[a.indexOf(e)+2]].join(" "):g}var G=!1;function ra(a,e=()=>{}){return(...n)=>G?e(...n):a(...n)}function it(a){return(...e)=>G&&a(...e)}var qn=[];function ja(a){qn.push(a)}function ot(a,e){qn.forEach(n=>n(a,e)),G=!0,Nn(()=>{B(e,(n,g)=>{g(n,()=>{})})}),G=!1}var Qa=!1;function st(a,e){e._x_dataStack||(e._x_dataStack=a._x_dataStack),G=!0,Qa=!0,Nn(()=>{lt(e)}),G=!1,Qa=!1}function lt(a){let e=!1;B(a,(g,t)=>{_(g,(u,d)=>{if(e&&Kg(u))return d();e=!0,t(u,d)})})}function Nn(a){let e=Y;Ke((n,g)=>{let t=e(n);return X(t),()=>{}}),a(),Ke(e)}function Bn(a,e,n,g=[]){switch(a._x_bindings||(a._x_bindings=J({})),a._x_bindings[e]=n,e=g.includes("camel")?At(e):e,e){case"value":ct(a,n);break;case"style":pt(a,n);break;case"class":rt(a,n);break;case"selected":case"checked":bt(a,e,n);break;default:En(a,e,n);break}}function ct(a,e){if(a.type==="radio")a.attributes.value===void 0&&(a.value=e),window.fromModel&&(typeof e=="boolean"?a.checked=ha(a.value)===e:a.checked=Be(a.value,e));else if(a.type==="checkbox")Number.isInteger(e)?a.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?a.value=String(e):Array.isArray(e)?a.checked=e.some(n=>Be(n,a.value)):a.checked=!!e;else if(a.tagName==="SELECT")Tt(a,e);else{if(a.value===e)return;a.value=e===void 0?"":e}}function rt(a,e){a._x_undoAddedClasses&&a._x_undoAddedClasses(),a._x_undoAddedClasses=De(a,e)}function pt(a,e){a._x_undoAddedStyles&&a._x_undoAddedStyles(),a._x_undoAddedStyles=za(a,e)}function bt(a,e,n){En(a,e,n),St(a,e,n)}function En(a,e,n){[null,void 0,!1].includes(n)&&Dt(e)?a.removeAttribute(e):(_n(e)&&(n=e),yt(a,e,n))}function yt(a,e,n){a.getAttribute(e)!=n&&a.setAttribute(e,n)}function St(a,e,n){a[e]!==n&&(a[e]=n)}function Tt(a,e){const n=[].concat(e).map(g=>g+"");Array.from(a.options).forEach(g=>{g.selected=n.includes(g.value)})}function At(a){return a.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Be(a,e){return a==e}function ha(a){return[1,"1","true","on","yes",!0].includes(a)?!0:[0,"0","false","off","no",!1].includes(a)?!1:a?!!a:null}function _n(a){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(a)}function Dt(a){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(a)}function mt(a,e,n){return a._x_bindings&&a._x_bindings[e]!==void 0?a._x_bindings[e]:Gn(a,e,n)}function ht(a,e,n,g=!0){if(a._x_bindings&&a._x_bindings[e]!==void 0)return a._x_bindings[e];if(a._x_inlineBindings&&a._x_inlineBindings[e]!==void 0){let t=a._x_inlineBindings[e];return t.extract=g,mn(()=>$(a,t.expression))}return Gn(a,e,n)}function Gn(a,e,n){let g=a.getAttribute(e);return g===null?typeof n=="function"?n():n:g===""?!0:_n(e)?!![e,"true"].includes(g):g}function Rn(a,e){var n;return function(){var g=this,t=arguments,u=function(){n=null,a.apply(g,t)};clearTimeout(n),n=setTimeout(u,e)}}function Vn(a,e){let n;return function(){let g=this,t=arguments;n||(a.apply(g,t),n=!0,setTimeout(()=>n=!1,e))}}function On({get:a,set:e},{get:n,set:g}){let t=!0,u,d=Y(()=>{let i=a(),o=n();if(t)g(Ba(i)),t=!1;else{let s=JSON.stringify(i),l=JSON.stringify(o);s!==u?g(Ba(i)):s!==l&&e(Ba(o))}u=JSON.stringify(a()),JSON.stringify(n())});return()=>{X(d)}}function Ba(a){return typeof a=="object"?JSON.parse(JSON.stringify(a)):a}function xt(a){(Array.isArray(a)?a:[a]).forEach(n=>n(pa))}var V={},Ee=!1;function kt(a,e){if(Ee||(V=J(V),Ee=!0),e===void 0)return V[a];V[a]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&V[a].init(),Tn(V[a])}function ft(){return V}var In={};function wt(a,e){let n=typeof e!="function"?()=>e:e;return a instanceof Element?$n(a,n()):(In[a]=n,()=>{})}function vt(a){return Object.entries(In).forEach(([e,n])=>{Object.defineProperty(a,e,{get(){return(...g)=>n(...g)}})}),a}function $n(a,e,n){let g=[];for(;g.length;)g.pop()();let t=Object.entries(e).map(([d,i])=>({name:d,value:i})),u=kn(t);return t=t.map(d=>u.find(i=>i.name===d.name)?{name:`x-bind:${d.name}`,value:`"${d.value}"`}:d),ye(a,t,n).map(d=>{g.push(d.runCleanups),d()}),()=>{for(;g.length;)g.pop()()}}var Hn={};function Mt(a,e){Hn[a]=e}function zt(a,e){return Object.entries(Hn).forEach(([n,g])=>{Object.defineProperty(a,n,{get(){return(...t)=>g.bind(e)(...t)},enumerable:!1})}),a}var jt={get reactive(){return J},get release(){return X},get effect(){return Y},get raw(){return an},version:"3.13.5",flushAndStopDeferringMutations:Gg,dontAutoEvaluateFunctions:mn,disableEffectScheduling:jg,startObservingMutations:ce,stopObservingMutations:yn,setReactivityEngine:Pg,onAttributeRemoved:pn,onAttributesAdded:rn,closestDataStack:U,skipDuringClone:ra,onlyDuringClone:it,addRootSelector:un,addInitSelector:dn,interceptClone:ja,addScopeToNode:la,deferMutations:_g,mapAttributes:Se,evaluateLater:v,interceptInit:qg,setEvaluator:$g,mergeProxies:ca,extractProp:ht,findClosest:Ma,onElRemoved:oe,closestRoot:va,destroyTree:ie,interceptor:An,transition:Xa,setStyles:za,mutateDom:h,directive:m,entangle:On,throttle:Vn,debounce:Rn,evaluate:$,initTree:B,nextTick:Ae,prefixed:Q,prefix:Fg,plugin:xt,magic:C,store:kt,start:Cg,clone:st,cloneNode:ot,bound:mt,$data:Sn,watch:en,walk:_,data:Mt,bind:wt},pa=jt;function Pt(a,e){const n=Object.create(null),g=a.split(",");for(let t=0;t<g.length;t++)n[g[t]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}var Lt=Object.freeze({}),Ct=Object.prototype.hasOwnProperty,Pa=(a,e)=>Ct.call(a,e),H=Array.isArray,ia=a=>Wn(a)==="[object Map]",Kt=a=>typeof a=="string",me=a=>typeof a=="symbol",La=a=>a!==null&&typeof a=="object",qt=Object.prototype.toString,Wn=a=>qt.call(a),Yn=a=>Wn(a).slice(8,-1),he=a=>Kt(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,Nt=a=>{const e=Object.create(null);return n=>e[n]||(e[n]=a(n))},Bt=Nt(a=>a.charAt(0).toUpperCase()+a.slice(1)),Fn=(a,e)=>a!==e&&(a===a||e===e),ae=new WeakMap,ta=[],K,W=Symbol("iterate"),ee=Symbol("Map key iterate");function Et(a){return a&&a._isEffect===!0}function _t(a,e=Lt){Et(a)&&(a=a.raw);const n=Vt(a,e);return e.lazy||n(),n}function Gt(a){a.active&&(Un(a),a.options.onStop&&a.options.onStop(),a.active=!1)}var Rt=0;function Vt(a,e){const n=function(){if(!n.active)return a();if(!ta.includes(n)){Un(n);try{return It(),ta.push(n),K=n,a()}finally{ta.pop(),Zn(),K=ta[ta.length-1]}}};return n.id=Rt++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=a,n.deps=[],n.options=e,n}function Un(a){const{deps:e}=a;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(a);e.length=0}}var Z=!0,xe=[];function Ot(){xe.push(Z),Z=!1}function It(){xe.push(Z),Z=!0}function Zn(){const a=xe.pop();Z=a===void 0?!0:a}function L(a,e,n){if(!Z||K===void 0)return;let g=ae.get(a);g||ae.set(a,g=new Map);let t=g.get(n);t||g.set(n,t=new Set),t.has(K)||(t.add(K),K.deps.push(t),K.options.onTrack&&K.options.onTrack({effect:K,target:a,type:e,key:n}))}function R(a,e,n,g,t,u){const d=ae.get(a);if(!d)return;const i=new Set,o=l=>{l&&l.forEach(r=>{(r!==K||r.allowRecurse)&&i.add(r)})};if(e==="clear")d.forEach(o);else if(n==="length"&&H(a))d.forEach((l,r)=>{(r==="length"||r>=g)&&o(l)});else switch(n!==void 0&&o(d.get(n)),e){case"add":H(a)?he(n)&&o(d.get("length")):(o(d.get(W)),ia(a)&&o(d.get(ee)));break;case"delete":H(a)||(o(d.get(W)),ia(a)&&o(d.get(ee)));break;case"set":ia(a)&&o(d.get(W));break}const s=l=>{l.options.onTrigger&&l.options.onTrigger({effect:l,target:a,key:n,type:e,newValue:g,oldValue:t,oldTarget:u}),l.options.scheduler?l.options.scheduler(l):l()};i.forEach(s)}var $t=Pt("__proto__,__v_isRef,__isVue"),Jn=new Set(Object.getOwnPropertyNames(Symbol).map(a=>Symbol[a]).filter(me)),Ht=Xn(),Wt=Xn(!0),_e=Yt();function Yt(){const a={};return["includes","indexOf","lastIndexOf"].forEach(e=>{a[e]=function(...n){const g=A(this);for(let u=0,d=this.length;u<d;u++)L(g,"get",u+"");const t=g[e](...n);return t===-1||t===!1?g[e](...n.map(A)):t}}),["push","pop","shift","unshift","splice"].forEach(e=>{a[e]=function(...n){Ot();const g=A(this)[e].apply(this,n);return Zn(),g}}),a}function Xn(a=!1,e=!1){return function(g,t,u){if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_raw"&&u===(a?e?su:ng:e?ou:eg).get(g))return g;const d=H(g);if(!a&&d&&Pa(_e,t))return Reflect.get(_e,t,u);const i=Reflect.get(g,t,u);return(me(t)?Jn.has(t):$t(t))||(a||L(g,"get",t),e)?i:ne(i)?!d||!he(t)?i.value:i:La(i)?a?gg(i):ve(i):i}}var Ft=Ut();function Ut(a=!1){return function(n,g,t,u){let d=n[g];if(!a&&(t=A(t),d=A(d),!H(n)&&ne(d)&&!ne(t)))return d.value=t,!0;const i=H(n)&&he(g)?Number(g)<n.length:Pa(n,g),o=Reflect.set(n,g,t,u);return n===A(u)&&(i?Fn(t,d)&&R(n,"set",g,t,d):R(n,"add",g,t)),o}}function Zt(a,e){const n=Pa(a,e),g=a[e],t=Reflect.deleteProperty(a,e);return t&&n&&R(a,"delete",e,void 0,g),t}function Jt(a,e){const n=Reflect.has(a,e);return(!me(e)||!Jn.has(e))&&L(a,"has",e),n}function Xt(a){return L(a,"iterate",H(a)?"length":W),Reflect.ownKeys(a)}var Qt={get:Ht,set:Ft,deleteProperty:Zt,has:Jt,ownKeys:Xt},au={get:Wt,set(a,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,a),!0},deleteProperty(a,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,a),!0}},ke=a=>La(a)?ve(a):a,fe=a=>La(a)?gg(a):a,we=a=>a,Ca=a=>Reflect.getPrototypeOf(a);function ba(a,e,n=!1,g=!1){a=a.__v_raw;const t=A(a),u=A(e);e!==u&&!n&&L(t,"get",e),!n&&L(t,"get",u);const{has:d}=Ca(t),i=g?we:n?fe:ke;if(d.call(t,e))return i(a.get(e));if(d.call(t,u))return i(a.get(u));a!==t&&a.get(e)}function ya(a,e=!1){const n=this.__v_raw,g=A(n),t=A(a);return a!==t&&!e&&L(g,"has",a),!e&&L(g,"has",t),a===t?n.has(a):n.has(a)||n.has(t)}function Sa(a,e=!1){return a=a.__v_raw,!e&&L(A(a),"iterate",W),Reflect.get(a,"size",a)}function Ge(a){a=A(a);const e=A(this);return Ca(e).has.call(e,a)||(e.add(a),R(e,"add",a,a)),this}function Re(a,e){e=A(e);const n=A(this),{has:g,get:t}=Ca(n);let u=g.call(n,a);u?ag(n,g,a):(a=A(a),u=g.call(n,a));const d=t.call(n,a);return n.set(a,e),u?Fn(e,d)&&R(n,"set",a,e,d):R(n,"add",a,e),this}function Ve(a){const e=A(this),{has:n,get:g}=Ca(e);let t=n.call(e,a);t?ag(e,n,a):(a=A(a),t=n.call(e,a));const u=g?g.call(e,a):void 0,d=e.delete(a);return t&&R(e,"delete",a,void 0,u),d}function Oe(){const a=A(this),e=a.size!==0,n=ia(a)?new Map(a):new Set(a),g=a.clear();return e&&R(a,"clear",void 0,void 0,n),g}function Ta(a,e){return function(g,t){const u=this,d=u.__v_raw,i=A(d),o=e?we:a?fe:ke;return!a&&L(i,"iterate",W),d.forEach((s,l)=>g.call(t,o(s),o(l),u))}}function Aa(a,e,n){return function(...g){const t=this.__v_raw,u=A(t),d=ia(u),i=a==="entries"||a===Symbol.iterator&&d,o=a==="keys"&&d,s=t[a](...g),l=n?we:e?fe:ke;return!e&&L(u,"iterate",o?ee:W),{next(){const{value:r,done:c}=s.next();return c?{value:r,done:c}:{value:i?[l(r[0]),l(r[1])]:l(r),done:c}},[Symbol.iterator](){return this}}}}function E(a){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Bt(a)} operation ${n}failed: target is readonly.`,A(this))}return a==="delete"?!1:this}}function eu(){const a={get(u){return ba(this,u)},get size(){return Sa(this)},has:ya,add:Ge,set:Re,delete:Ve,clear:Oe,forEach:Ta(!1,!1)},e={get(u){return ba(this,u,!1,!0)},get size(){return Sa(this)},has:ya,add:Ge,set:Re,delete:Ve,clear:Oe,forEach:Ta(!1,!0)},n={get(u){return ba(this,u,!0)},get size(){return Sa(this,!0)},has(u){return ya.call(this,u,!0)},add:E("add"),set:E("set"),delete:E("delete"),clear:E("clear"),forEach:Ta(!0,!1)},g={get(u){return ba(this,u,!0,!0)},get size(){return Sa(this,!0)},has(u){return ya.call(this,u,!0)},add:E("add"),set:E("set"),delete:E("delete"),clear:E("clear"),forEach:Ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(u=>{a[u]=Aa(u,!1,!1),n[u]=Aa(u,!0,!1),e[u]=Aa(u,!1,!0),g[u]=Aa(u,!0,!0)}),[a,n,e,g]}var[nu,gu,tu,uu]=eu();function Qn(a,e){const n=e?a?uu:tu:a?gu:nu;return(g,t,u)=>t==="__v_isReactive"?!a:t==="__v_isReadonly"?a:t==="__v_raw"?g:Reflect.get(Pa(n,t)&&t in g?n:g,t,u)}var du={get:Qn(!1,!1)},iu={get:Qn(!0,!1)};function ag(a,e,n){const g=A(n);if(g!==n&&e.call(a,g)){const t=Yn(a);console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${t==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var eg=new WeakMap,ou=new WeakMap,ng=new WeakMap,su=new WeakMap;function lu(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cu(a){return a.__v_skip||!Object.isExtensible(a)?0:lu(Yn(a))}function ve(a){return a&&a.__v_isReadonly?a:tg(a,!1,Qt,du,eg)}function gg(a){return tg(a,!0,au,iu,ng)}function tg(a,e,n,g,t){if(!La(a))return console.warn(`value cannot be made reactive: ${String(a)}`),a;if(a.__v_raw&&!(e&&a.__v_isReactive))return a;const u=t.get(a);if(u)return u;const d=cu(a);if(d===0)return a;const i=new Proxy(a,d===2?g:n);return t.set(a,i),i}function A(a){return a&&A(a.__v_raw)||a}function ne(a){return!!(a&&a.__v_isRef===!0)}C("nextTick",()=>Ae);C("dispatch",a=>da.bind(da,a));C("watch",(a,{evaluateLater:e,cleanup:n})=>(g,t)=>{let u=e(g),i=en(()=>{let o;return u(s=>o=s),o},t);n(i)});C("store",ft);C("data",a=>Sn(a));C("root",a=>va(a));C("refs",a=>(a._x_refs_proxy||(a._x_refs_proxy=ca(ru(a))),a._x_refs_proxy));function ru(a){let e=[],n=a;for(;n;)n._x_refs&&e.push(n._x_refs),n=n.parentNode;return e}var Ea={};function ug(a){return Ea[a]||(Ea[a]=0),++Ea[a]}function pu(a,e){return Ma(a,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function bu(a,e){a._x_ids||(a._x_ids={}),a._x_ids[e]||(a._x_ids[e]=ug(e))}C("id",(a,{cleanup:e})=>(n,g=null)=>{let t=`${n}${g?`-${g}`:""}`;return yu(a,t,e,()=>{let u=pu(a,n),d=u?u._x_ids[n]:ug(n);return g?`${n}-${d}-${g}`:`${n}-${d}`})});ja((a,e)=>{a._x_id&&(e._x_id=a._x_id)});function yu(a,e,n,g){if(a._x_id||(a._x_id={}),a._x_id[e])return a._x_id[e];let t=g();return a._x_id[e]=t,n(()=>{delete a._x_id[e]}),t}C("el",a=>a);dg("Focus","focus","focus");dg("Persist","persist","persist");function dg(a,e,n){C(e,g=>N(`You can't use [$${e}] without first installing the "${a}" plugin here: https://alpinejs.dev/plugins/${n}`,g))}m("modelable",(a,{expression:e},{effect:n,evaluateLater:g,cleanup:t})=>{let u=g(e),d=()=>{let l;return u(r=>l=r),l},i=g(`${e} = __placeholder`),o=l=>i(()=>{},{scope:{__placeholder:l}}),s=d();o(s),queueMicrotask(()=>{if(!a._x_model)return;a._x_removeModelListeners.default();let l=a._x_model.get,r=a._x_model.set,c=On({get(){return l()},set(S){r(S)}},{get(){return d()},set(S){o(S)}});t(c)})});m("teleport",(a,{modifiers:e,expression:n},{cleanup:g})=>{a.tagName.toLowerCase()!=="template"&&N("x-teleport can only be used on a <template> tag",a);let t=Ie(n),u=a.content.cloneNode(!0).firstElementChild;a._x_teleport=u,u._x_teleportBack=a,a.setAttribute("data-teleport-template",!0),u.setAttribute("data-teleport-target",!0),a._x_forwardEvents&&a._x_forwardEvents.forEach(i=>{u.addEventListener(i,o=>{o.stopPropagation(),a.dispatchEvent(new o.constructor(o.type,o))})}),la(u,{},a);let d=(i,o,s)=>{s.includes("prepend")?o.parentNode.insertBefore(i,o):s.includes("append")?o.parentNode.insertBefore(i,o.nextSibling):o.appendChild(i)};h(()=>{d(u,t,e),B(u),u._x_ignore=!0}),a._x_teleportPutBack=()=>{let i=Ie(n);h(()=>{d(a._x_teleport,i,e)})},g(()=>u.remove())});var Su=document.createElement("div");function Ie(a){let e=ra(()=>document.querySelector(a),()=>Su)();return e||N(`Cannot find x-teleport element for selector: "${a}"`),e}var ig=()=>{};ig.inline=(a,{modifiers:e},{cleanup:n})=>{e.includes("self")?a._x_ignoreSelf=!0:a._x_ignore=!0,n(()=>{e.includes("self")?delete a._x_ignoreSelf:delete a._x_ignore})};m("ignore",ig);m("effect",ra((a,{expression:e},{effect:n})=>{n(v(a,e))}));function ge(a,e,n,g){let t=a,u=o=>g(o),d={},i=(o,s)=>l=>s(o,l);if(n.includes("dot")&&(e=Tu(e)),n.includes("camel")&&(e=Au(e)),n.includes("passive")&&(d.passive=!0),n.includes("capture")&&(d.capture=!0),n.includes("window")&&(t=window),n.includes("document")&&(t=document),n.includes("debounce")){let o=n[n.indexOf("debounce")+1]||"invalid-wait",s=fa(o.split("ms")[0])?Number(o.split("ms")[0]):250;u=Rn(u,s)}if(n.includes("throttle")){let o=n[n.indexOf("throttle")+1]||"invalid-wait",s=fa(o.split("ms")[0])?Number(o.split("ms")[0]):250;u=Vn(u,s)}return n.includes("prevent")&&(u=i(u,(o,s)=>{s.preventDefault(),o(s)})),n.includes("stop")&&(u=i(u,(o,s)=>{s.stopPropagation(),o(s)})),n.includes("self")&&(u=i(u,(o,s)=>{s.target===a&&o(s)})),(n.includes("away")||n.includes("outside"))&&(t=document,u=i(u,(o,s)=>{a.contains(s.target)||s.target.isConnected!==!1&&(a.offsetWidth<1&&a.offsetHeight<1||a._x_isShown!==!1&&o(s))})),n.includes("once")&&(u=i(u,(o,s)=>{o(s),t.removeEventListener(e,u,d)})),u=i(u,(o,s)=>{mu(e)&&hu(s,n)||o(s)}),t.addEventListener(e,u,d),()=>{t.removeEventListener(e,u,d)}}function Tu(a){return a.replace(/-/g,".")}function Au(a){return a.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function fa(a){return!Array.isArray(a)&&!isNaN(a)}function Du(a){return[" ","_"].includes(a)?a:a.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function mu(a){return["keydown","keyup"].includes(a)}function hu(a,e){let n=e.filter(u=>!["window","document","prevent","stop","once","capture"].includes(u));if(n.includes("debounce")){let u=n.indexOf("debounce");n.splice(u,fa((n[u+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let u=n.indexOf("throttle");n.splice(u,fa((n[u+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&$e(a.key).includes(n[0]))return!1;const t=["ctrl","shift","alt","meta","cmd","super"].filter(u=>n.includes(u));return n=n.filter(u=>!t.includes(u)),!(t.length>0&&t.filter(d=>((d==="cmd"||d==="super")&&(d="meta"),a[`${d}Key`])).length===t.length&&$e(a.key).includes(n[0]))}function $e(a){if(!a)return[];a=Du(a);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return e[a]=a,Object.keys(e).map(n=>{if(e[n]===a)return n}).filter(n=>n)}m("model",(a,{modifiers:e,expression:n},{effect:g,cleanup:t})=>{let u=a;e.includes("parent")&&(u=a.parentNode);let d=v(u,n),i;typeof n=="string"?i=v(u,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?i=v(u,`${n()} = __placeholder`):i=()=>{};let o=()=>{let c;return d(S=>c=S),He(c)?c.get():c},s=c=>{let S;d(D=>S=D),He(S)?S.set(c):i(()=>{},{scope:{__placeholder:c}})};typeof n=="string"&&a.type==="radio"&&h(()=>{a.hasAttribute("name")||a.setAttribute("name",n)});var l=a.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(a.type)||e.includes("lazy")?"change":"input";let r=G?()=>{}:ge(a,l,e,c=>{s(xu(a,e,c,o()))});if(e.includes("fill")&&([void 0,null,""].includes(o())||a.type==="checkbox"&&Array.isArray(o()))&&a.dispatchEvent(new Event(l,{})),a._x_removeModelListeners||(a._x_removeModelListeners={}),a._x_removeModelListeners.default=r,t(()=>a._x_removeModelListeners.default()),a.form){let c=ge(a.form,"reset",[],S=>{Ae(()=>a._x_model&&a._x_model.set(a.value))});t(()=>c())}a._x_model={get(){return o()},set(c){s(c)}},a._x_forceModelUpdate=c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),window.fromModel=!0,h(()=>Bn(a,"value",c)),delete window.fromModel},g(()=>{let c=o();e.includes("unintrusive")&&document.activeElement.isSameNode(a)||a._x_forceModelUpdate(c)})});function xu(a,e,n,g){return h(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(a.type==="checkbox")if(Array.isArray(g)){let t=null;return e.includes("number")?t=_a(n.target.value):e.includes("boolean")?t=ha(n.target.value):t=n.target.value,n.target.checked?g.concat([t]):g.filter(u=>!ku(u,t))}else return n.target.checked;else return a.tagName.toLowerCase()==="select"&&a.multiple?e.includes("number")?Array.from(n.target.selectedOptions).map(t=>{let u=t.value||t.text;return _a(u)}):e.includes("boolean")?Array.from(n.target.selectedOptions).map(t=>{let u=t.value||t.text;return ha(u)}):Array.from(n.target.selectedOptions).map(t=>t.value||t.text):e.includes("number")?_a(n.target.value):e.includes("boolean")?ha(n.target.value):e.includes("trim")?n.target.value.trim():n.target.value})}function _a(a){let e=a?parseFloat(a):null;return fu(e)?e:a}function ku(a,e){return a==e}function fu(a){return!Array.isArray(a)&&!isNaN(a)}function He(a){return a!==null&&typeof a=="object"&&typeof a.get=="function"&&typeof a.set=="function"}m("cloak",a=>queueMicrotask(()=>h(()=>a.removeAttribute(Q("cloak")))));dn(()=>`[${Q("init")}]`);m("init",ra((a,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));m("text",(a,{expression:e},{effect:n,evaluateLater:g})=>{let t=g(e);n(()=>{t(u=>{h(()=>{a.textContent=u})})})});m("html",(a,{expression:e},{effect:n,evaluateLater:g})=>{let t=g(e);n(()=>{t(u=>{h(()=>{a.innerHTML=u,a._x_ignoreSelf=!0,B(a),delete a._x_ignoreSelf})})})});Se(vn(":",Mn(Q("bind:"))));var og=(a,{value:e,modifiers:n,expression:g,original:t},{effect:u})=>{if(!e){let i={};vt(i),v(a,g)(s=>{$n(a,s,t)},{scope:i});return}if(e==="key")return wu(a,g);if(a._x_inlineBindings&&a._x_inlineBindings[e]&&a._x_inlineBindings[e].extract)return;let d=v(a,g);u(()=>d(i=>{i===void 0&&typeof g=="string"&&g.match(/\./)&&(i=""),h(()=>Bn(a,e,i,n))}))};og.inline=(a,{value:e,modifiers:n,expression:g})=>{e&&(a._x_inlineBindings||(a._x_inlineBindings={}),a._x_inlineBindings[e]={expression:g,extract:!1})};m("bind",og);function wu(a,e){a._x_keyExpression=e}un(()=>`[${Q("data")}]`);m("data",(a,{expression:e},{cleanup:n})=>{if(vu(a))return;e=e===""?"{}":e;let g={};Ha(g,a);let t={};zt(t,g);let u=$(a,e,{scope:t});(u===void 0||u===!0)&&(u={}),Ha(u,a);let d=J(u);Tn(d);let i=la(a,d);d.init&&$(a,d.init),n(()=>{d.destroy&&$(a,d.destroy),i()})});ja((a,e)=>{a._x_dataStack&&(e._x_dataStack=a._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function vu(a){return G?Qa?!0:a.hasAttribute("data-has-alpine-state"):!1}m("show",(a,{modifiers:e,expression:n},{effect:g})=>{let t=v(a,n);a._x_doHide||(a._x_doHide=()=>{h(()=>{a.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),a._x_doShow||(a._x_doShow=()=>{h(()=>{a.style.length===1&&a.style.display==="none"?a.removeAttribute("style"):a.style.removeProperty("display")})});let u=()=>{a._x_doHide(),a._x_isShown=!1},d=()=>{a._x_doShow(),a._x_isShown=!0},i=()=>setTimeout(d),o=Ja(r=>r?d():u(),r=>{typeof a._x_toggleAndCascadeWithTransitions=="function"?a._x_toggleAndCascadeWithTransitions(a,r,d,u):r?i():u()}),s,l=!0;g(()=>t(r=>{!l&&r===s||(e.includes("immediate")&&(r?i():u()),o(r),s=r,l=!1)}))});m("for",(a,{expression:e},{effect:n,cleanup:g})=>{let t=zu(e),u=v(a,t.items),d=v(a,a._x_keyExpression||"index");a._x_prevKeys=[],a._x_lookup={},n(()=>Mu(a,t,u,d)),g(()=>{Object.values(a._x_lookup).forEach(i=>i.remove()),delete a._x_prevKeys,delete a._x_lookup})});function Mu(a,e,n,g){let t=d=>typeof d=="object"&&!Array.isArray(d),u=a;n(d=>{ju(d)&&d>=0&&(d=Array.from(Array(d).keys(),p=>p+1)),d===void 0&&(d=[]);let i=a._x_lookup,o=a._x_prevKeys,s=[],l=[];if(t(d))d=Object.entries(d).map(([p,y])=>{let T=We(e,y,p,d);g(x=>l.push(x),{scope:{index:p,...T}}),s.push(T)});else for(let p=0;p<d.length;p++){let y=We(e,d[p],p,d);g(T=>l.push(T),{scope:{index:p,...y}}),s.push(y)}let r=[],c=[],S=[],D=[];for(let p=0;p<o.length;p++){let y=o[p];l.indexOf(y)===-1&&S.push(y)}o=o.filter(p=>!S.includes(p));let f="template";for(let p=0;p<l.length;p++){let y=l[p],T=o.indexOf(y);if(T===-1)o.splice(p,0,y),r.push([f,p]);else if(T!==p){let x=o.splice(p,1)[0],w=o.splice(T-1,1)[0];o.splice(p,0,w),o.splice(T,0,x),c.push([x,w])}else D.push(y);f=y}for(let p=0;p<S.length;p++){let y=S[p];i[y]._x_effects&&i[y]._x_effects.forEach(Qe),i[y].remove(),i[y]=null,delete i[y]}for(let p=0;p<c.length;p++){let[y,T]=c[p],x=i[y],w=i[T],F=document.createElement("div");h(()=>{w||N('x-for ":key" is undefined or invalid',u),w.after(F),x.after(w),w._x_currentIfEl&&w.after(w._x_currentIfEl),F.before(x),x._x_currentIfEl&&x.after(x._x_currentIfEl),F.remove()}),w._x_refreshXForScope(s[l.indexOf(T)])}for(let p=0;p<r.length;p++){let[y,T]=r[p],x=y==="template"?u:i[y];x._x_currentIfEl&&(x=x._x_currentIfEl);let w=s[T],F=l[T],ea=document.importNode(u.content,!0).firstElementChild,Ce=J(w);la(ea,Ce,u),ea._x_refreshXForScope=xg=>{Object.entries(xg).forEach(([kg,fg])=>{Ce[kg]=fg})},h(()=>{x.after(ea),B(ea)}),typeof F=="object"&&N("x-for key cannot be an object, it must be a string or an integer",u),i[F]=ea}for(let p=0;p<D.length;p++)i[D[p]]._x_refreshXForScope(s[l.indexOf(D[p])]);u._x_prevKeys=l})}function zu(a){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,g=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,t=a.match(g);if(!t)return;let u={};u.items=t[2].trim();let d=t[1].replace(n,"").trim(),i=d.match(e);return i?(u.item=d.replace(e,"").trim(),u.index=i[1].trim(),i[2]&&(u.collection=i[2].trim())):u.item=d,u}function We(a,e,n,g){let t={};return/^\[.*\]$/.test(a.item)&&Array.isArray(e)?a.item.replace("[","").replace("]","").split(",").map(d=>d.trim()).forEach((d,i)=>{t[d]=e[i]}):/^\{.*\}$/.test(a.item)&&!Array.isArray(e)&&typeof e=="object"?a.item.replace("{","").replace("}","").split(",").map(d=>d.trim()).forEach(d=>{t[d]=e[d]}):t[a.item]=e,a.index&&(t[a.index]=n),a.collection&&(t[a.collection]=g),t}function ju(a){return!Array.isArray(a)&&!isNaN(a)}function sg(){}sg.inline=(a,{expression:e},{cleanup:n})=>{let g=va(a);g._x_refs||(g._x_refs={}),g._x_refs[e]=a,n(()=>delete g._x_refs[e])};m("ref",sg);m("if",(a,{expression:e},{effect:n,cleanup:g})=>{a.tagName.toLowerCase()!=="template"&&N("x-if can only be used on a <template> tag",a);let t=v(a,e),u=()=>{if(a._x_currentIfEl)return a._x_currentIfEl;let i=a.content.cloneNode(!0).firstElementChild;return la(i,{},a),h(()=>{a.after(i),B(i)}),a._x_currentIfEl=i,a._x_undoIf=()=>{_(i,o=>{o._x_effects&&o._x_effects.forEach(Qe)}),i.remove(),delete a._x_currentIfEl},i},d=()=>{a._x_undoIf&&(a._x_undoIf(),delete a._x_undoIf)};n(()=>t(i=>{i?u():d()})),g(()=>a._x_undoIf&&a._x_undoIf())});m("id",(a,{expression:e},{evaluate:n})=>{n(e).forEach(t=>bu(a,t))});ja((a,e)=>{a._x_ids&&(e._x_ids=a._x_ids)});Se(vn("@",Mn(Q("on:"))));m("on",ra((a,{value:e,modifiers:n,expression:g},{cleanup:t})=>{let u=g?v(a,g):()=>{};a.tagName.toLowerCase()==="template"&&(a._x_forwardEvents||(a._x_forwardEvents=[]),a._x_forwardEvents.includes(e)||a._x_forwardEvents.push(e));let d=ge(a,e,n,i=>{u(()=>{},{scope:{$event:i},params:[i]})});t(()=>d())}));Ka("Collapse","collapse","collapse");Ka("Intersect","intersect","intersect");Ka("Focus","trap","focus");Ka("Mask","mask","mask");function Ka(a,e,n){m(e,g=>N(`You can't use [x-${e}] without first installing the "${a}" plugin here: https://alpinejs.dev/plugins/${n}`,g))}pa.setEvaluator(xn);pa.setReactivityEngine({reactive:ve,effect:_t,release:Gt,raw:A});var Pu=pa,Me=Pu;const Lu="modulepreload",Cu=function(a){return"/"+a},Ye={},Ku=function(e,n,g){let t=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link");t=Promise.all(n.map(d=>{if(d=Cu(d),d in Ye)return;Ye[d]=!0;const i=d.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!g)for(let r=u.length-1;r>=0;r--){const c=u[r];if(c.href===d&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Lu,i||(l.as="script",l.crossOrigin=""),l.href=d,document.head.appendChild(l),i)return new Promise((r,c)=>{l.addEventListener("load",r),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${d}`)))})}))}return t.then(()=>e()).catch(u=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u})},lg=globalThis.DOMParser,cg=globalThis.XPathResult,qu=globalThis.XSLTProcessor,Nu={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},Bu=`<?xml version="1.0" encoding="UTF-8"?>

<!--
*****************************************************************************************************
XSLT Stylesheet that transforms OpenRosa style (X)Forms into valid HTMl5 forms
(exception: when non-IANA lang attributes are used the form will not validate (but that's not serious))
*****************************************************************************************************
-->
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xf="http://www.w3.org/2002/xforms"
    xmlns:orx="http://openrosa.org/xforms"
    xmlns:enk="http://enketo.org/xforms"
    xmlns:odk="http://www.opendatakit.org/xforms"
    xmlns:kb="http://kobotoolbox.org/xforms"
    xmlns:esri="http://esri.com/xforms"
    xmlns:oc="http://openclinica.org/xforms"
    xmlns:h="http://www.w3.org/1999/xhtml"
    xmlns:ev="http://www.w3.org/2001/xml-events"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:jr="http://openrosa.org/javarosa"
    xmlns:exsl="http://exslt.org/common"
    xmlns:str="http://exslt.org/strings"
    xmlns:dyn="http://exslt.org/dynamic"
    extension-element-prefixes="exsl str dyn"
    version="1.0"
    >
    <xsl:param name="openclinica"/>
    <xsl:output method="html" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"/><!-- for xml: version="1.0" -->

    <xsl:key
        name="bindings-by-id"
        match="/h:html/h:head/xf:model/xf:bind"
        use="@id" />
    <xsl:key
        name="nodeset-bindings"
        match="/h:html/h:head/xf:model/xf:bind"
        use="@nodeset" />
    <xsl:key
        name="preload-bindings"
        match="/h:html/h:head/xf:model/xf:bind"
        use="@jr:preload != ''" />
    <xsl:key
        name="calculate-bindings"
        match="/h:html/h:head/xf:model/xf:bind"
        use="@calculate != ''" />
    <xsl:key name="instances" match="/h:html/h:head/xf:model/xf:instance" use="true()" />
    <xsl:key
        name="primary-instance-root"
        match="/h:html/h:head/xf:model/xf:instance[1]/child::node()"
        use="true()" />
    <xsl:key
        name="model-actions"
        match="/h:html/h:head/xf:model/xf:setvalue[@event] | /h:html/h:head/xf:model/odk:setgeopoint[@event]"
        use="local-name()" />
    <xsl:key
        name="fields-by-ref"
        match="/h:html/h:body//xf:input | /h:html/h:body//xf:upload | /h:html/h:body//xf:select | /h:html/h:body//xf:select1"
        use="@ref" />
    <xsl:key
        name="default-translation"
        match="/h:html/h:head/xf:model/xf:itext/xf:translation[@default]"
        use="true()" />
    <xsl:key
        name="translations"
        match="/h:html/h:head/xf:model/xf:itext/xf:translation"
        use="true()" />
    <xsl:key
        name="itext-texts-by-id"
        match="/h:html/h:head/xf:model/xf:itext/xf:translation/xf:text"
        use="@id" />

    <xsl:variable name="upper-case" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
    <xsl:variable name="lower-case" select="'abcdefghijklmnopqrstuvwxyz'" />
    <xsl:variable name="undefined">undefined</xsl:variable>
    <xsl:variable name="warning">warning</xsl:variable>
    <xsl:variable name="error">error</xsl:variable>
    <xsl:variable name="translated"><!-- assumes that either a whole form is translated or nothing (= real life) -->
        <xsl:if test="count(key('translations', true())) &gt; 1" >
            <xsl:value-of select="string('true')" /><!-- no time to figure out how to use real boolean values -->
        </xsl:if>
    </xsl:variable>
    <xsl:variable name="default-lang">
        <xsl:choose>
            <xsl:when test="key('default-translation', true())/@lang">
                <xsl:value-of select="key('default-translation', true())/@lang" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="''" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    <xsl:variable name="first-lang">
        <!-- first language or empty if itext was not used -->
        <xsl:value-of select="key('translations', true())[1]/@lang" />
    </xsl:variable>
    <xsl:variable name="current-lang">
        <xsl:choose>
            <xsl:when test="string-length($default-lang) > 0">
                <xsl:value-of select="$default-lang" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$first-lang" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>

    <xsl:template match="/">
        <xsl:if test="not(function-available('exsl:node-set'))">
            <xsl:message terminate="yes">FATAL ERROR: exsl:node-set function is not available in this XSLT processor</xsl:message>
        </xsl:if>
        <xsl:for-each select="/h:html/h:head/xf:model/xf:bind">
            <xsl:if test="not(substring(./@nodeset, 1, 1) = '/')">
                <xsl:message terminate="no">WARNING: Found binding(s) with relative nodeset attribute <!--on element: <xsl:value-of select="./@nodeset" />--> (form may work correctly if relative nodesets were used consistently throughout xml form in bindings as well as body, otherwise it will certainly be messed up). </xsl:message>
            </xsl:if>
        </xsl:for-each>
       <!--> <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
        <html>
            <head>
                <title>
                    <xsl:text>Transformation of JR (X)Form to HTML5</xsl:text>
                </title>
                <script src="jquery.min.js" type="text/javascript" ><xsl:text> </xsl:text><\/script>
                <script type="text/javascript">
                    <xsl:text disable-output-escaping='yes'>
                      $(function() {
                            $('#form-languages a').click(function(){
                               $('form [lang]').show().not('[lang="'+$(this).attr('lang')+'"], [lang=""], #form-languages a').hide();
                            });
                      });</xsl:text>
                <\/script>
            </head>-->
            <root>
                <form autocomplete="off" novalidate="novalidate" class="clearfix" dir="ltr">
                    <xsl:attribute name="class">
                        <xsl:value-of select="'or clearfix'" />
                        <xsl:if test="/h:html/h:body/@class">
                            <xsl:value-of select="concat(' ', /h:html/h:body/@class)" />
                        </xsl:if>
                    </xsl:attribute>
                    <xsl:attribute name="data-form-id">
                        <xsl:choose>
                            <xsl:when test="key('primary-instance-root', true())/@id">
                                <xsl:value-of select="key('primary-instance-root', true())/@id" />
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:text>_</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:attribute>
                    <xsl:if test="/h:html/h:head/xf:model/xf:submission/@action">
                        <xsl:attribute name="action">
                            <xsl:value-of select="/h:html/h:head/xf:model/xf:submission/@action"/>
                        </xsl:attribute>
                    </xsl:if>
                    <xsl:if test="/h:html/h:head/xf:model/xf:submission/@method">
                        <xsl:attribute name="method">
                            <xsl:choose>
                                <xsl:when test="/h:html/h:head/xf:model/xf:submission/@method = 'form-data-post'">
                                     <xsl:value-of select="'post'"/>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:value-of select="/h:html/h:head/xf:model/xf:submission/@method"/>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:attribute>
                    </xsl:if>
                    <xsl:if test="/h:html/h:head/xf:model/xf:submission/@base64RsaPublicKey">
                        <xsl:attribute name="data-base64RsaPublicKey">
                            <xsl:value-of select="/h:html/h:head/xf:model/xf:submission/@base64RsaPublicKey"/>
                        </xsl:attribute>
                    </xsl:if>
                    <xsl:text>&#10;</xsl:text>
                    <xsl:comment>This form was created by transforming an ODK/OpenRosa-flavored (X)Form using an XSL stylesheet created by Enketo LLC.</xsl:comment>
                    <section class="form-logo">
                        <xsl:text></xsl:text>
                    </section>
                    <h3 dir="auto" id="form-title">
                        <xsl:choose>
                            <xsl:when test="/h:html/h:head/h:title">
                                <xsl:value-of select="/h:html/h:head/h:title"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:text>No Title</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </h3>
                <!--
                    <div id="stats" style="display: none;">
                        <span id="jrSelect"><xsl:value-of select="count(/h:html/h:body//xf:select)"/></span>
                        <span id="jrSelect1"><xsl:value-of select="count(/h:html/h:body//xf:select1)"/></span>
                        <span id="jrItemset"><xsl:value-of select="count(/h:html/h:body//xf:itemset)"/></span>
                        <span id="jrItem"><xsl:value-of select="count(/h:html/h:body//xf:item)"/></span>
                        <span id="jrInput"><xsl:value-of select="count(/h:html/h:body//xf:input)"/></span>
                        <span id="jrUpload"><xsl:value-of select="count(/h:html/h:body//xf:upload)"/></span>
                        <span id="jrTrigger"><xsl:value-of select="count(/h:html/h:body//xf:trigger)"/></span>
                        <span id="jrRepeat"><xsl:value-of select="count(/h:html/h:body//xf:repeat)"/></span>
                        <span id="jrRelevant"><xsl:value-of select="count(/h:html/h:head/xf:model/xf:bind[@relevant])"/></span>
                        <span id="jrConstraint"><xsl:value-of select="count(/h:html/h:head/xf:model/xf:bind[@constraint])"/></span>
                        <span id="jrCalculate"><xsl:value-of select="count(/h:html/h:head/xf:model/xf:bind[@calculate])"/></span>
                        <span id="jrPreload"><xsl:value-of select="count(/h:html/h:head/xf:model/xf:bind[@jr:preload])"/></span>
                    </div>
                -->
                    <xsl:if test="//*/@lang" >
                        <select id="form-languages">
                            <xsl:if test="$translated != 'true'">
                                <xsl:attribute name="style">display:none;</xsl:attribute>
                            </xsl:if>
                            <xsl:attribute name="data-default-lang">
                                <xsl:value-of select="$default-lang" />
                            </xsl:attribute>
                            <xsl:call-template name="languages" />
                        </select>
                    </xsl:if>

                    <xsl:apply-templates />

                    <!-- Create hidden input fields for preload items that do not have a form control. -->
                    <xsl:if test="key('preload-bindings', true())" >
                        <fieldset id="or-preload-items" style="display:none;">
                            <xsl:apply-templates select="key('preload-bindings', true())"/>
                        </fieldset>
                    </xsl:if>

                    <!-- Create hidden input fields for calculated items that do not have a form control. -->
                    <!-- the template will exclude those that have an input field -->
                    <xsl:if test="key('calculate-bindings', true())">
                        <fieldset id="or-calculated-items" style="display:none;">
                            <xsl:apply-templates select="key('calculate-bindings', true())" />
                        </fieldset>
                    </xsl:if>


                    <!-- Create hidden input fields for calculated items that do not have a form control. -->
                    <!-- the template will exclude those that have an input field -->
                    <xsl:if test="key('model-actions', 'setvalue')">
                        <fieldset id="or-setvalue-items" style="display:none;">
                            <xsl:apply-templates select="key('model-actions', 'setvalue')" />
                        </fieldset>
                    </xsl:if>
                    <xsl:if test="key('model-actions', 'setgeopoint')">
                        <fieldset id="or-setgeopoint-items" style="display:none;">
                            <xsl:apply-templates select="key('model-actions', 'setgeopoint')" />
                        </fieldset>
                    </xsl:if>
                    <!--
                    <xsl:if test="/h:html/h:body//xf:output">
                        <xsl:message>WARNING: Output element(s) added but note that only /absolute/path/to/node is properly supported as "value" attribute of outputs. Please test to make sure they do what you want.</xsl:message>
                    </xsl:if>
                    <xsl:if test="/h:html/h:body//xf:itemset">
                        <xsl:message>WARNING: Itemset support is experimental. Make sure to test whether they do what you want.</xsl:message>
                    </xsl:if>
                    -->
                    <xsl:if test="//xf:submission">
                        <xsl:message>ERROR: Submissions element(s) not supported.</xsl:message>
                    </xsl:if>
                </form>
            </root>
        </xsl:template>
    <xsl:template match="h:head"/> <!--[not(self::xf:model/xf:bind[@jr:preload])]" />-->

    <xsl:template match="xf:group">
        <!-- NOTE: TO IMPROVE PERFORMANCE, SUPPORT FOR RELATIVE NODESET BINDINGS HAS BEEN SWITCHED OFF
            To turn this back on:
            - uncomment the variable nodeset_used
            - revert back to commented-out code for variable nodeset
            - revert back to commented-out code for variable binding
            - all this takes place in the next 10 lines
        <xsl:variable name="nodeset_used">
            <xsl:call-template name="nodeset_used" />
        </xsl:variable>
    -->
        <xsl:variable name="nodeset">
            <!--<xsl:call-template name="nodeset_absolute">
                <xsl:with-param name="nodeset_u" select="$nodeset_used"/>
            </xsl:call-template>-->
            <xsl:call-template name="nodeset_used" />
        </xsl:variable>

        <!-- note that bindings are not required -->
        <!--<xsl:variable name="binding" select="/h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset_used] | /h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset]"/>-->
        <xsl:variable name="binding" select="key('nodeset-bindings', $nodeset)"/>

        <section>
            <xsl:attribute name="class">
                <!-- only add or-group if label is present or if it has a repeat as child-->
                <xsl:choose>
                    <xsl:when test="string(./xf:label/@ref) or string(./xf:label)">
                        <xsl:value-of select="'or-group '" />
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="'or-group-data '" />
                    </xsl:otherwise>
                </xsl:choose>
                <xsl:if test="$binding/@relevant">
                    <xsl:value-of select="'or-branch pre-init '"/>
                </xsl:if>
                <xsl:if test="@appearance or @rows">
                    <xsl:value-of select="'or-appearances-placeholder '"></xsl:value-of>
                </xsl:if>
                <!-- Workaround for XLSForm limitation: add "compact" to group if the immediate repeat child has this appearance -->
                <!-- This should actually be fixed in pyxform instead -->
                <xsl:if test="contains(./xf:repeat/@appearance, 'compact')">
                    <xsl:value-of select="'or-appearance-compact '"/>
                </xsl:if>
                <!-- same workaround for "no-collapse" -->
                <xsl:if test="contains(./xf:repeat/@appearance, 'no-collapse')">
                    <xsl:value-of select="'or-appearance-no-collapse '"/>
                </xsl:if>
            </xsl:attribute>
            <xsl:call-template name="appearance" />

            <xsl:if test="string($nodeset)">
                <!--<xsl:variable name="nodeset" select="@ref" />-->
                <xsl:attribute name="name">
                    <xsl:value-of select="$nodeset"/>
                </xsl:attribute>

                <xsl:if test="$binding/@relevant">
                    <xsl:attribute name="data-relevant">
                        <!--<xsl:value-of select="/h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset]/@relevant" />-->
                        <xsl:value-of select="$binding/@relevant"/>
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="string(./xf:label/@ref) or string (./xf:label)">
                <h4>
                    <xsl:apply-templates select="xf:label" />
                </h4>
            </xsl:if>
            <xsl:apply-templates select="*[not(self::xf:label or self::xf:hint)]"/>
            <xsl:call-template name="constraint-and-required-msg" >
                <xsl:with-param name="binding" select="$binding"/>
            </xsl:call-template>
            <xsl:text>
            </xsl:text>
        </section><xsl:comment>end of group <xsl:value-of select="@nodeset" /> </xsl:comment>
    </xsl:template>

    <xsl:template match="xf:repeat">
    <!-- NOTE: TO IMPROVE PERFORMANCE, SUPPORT FOR RELATIVE NODESET BINDINGS HAS BEEN SWITCHED OFF
            To turn this back on:
            - uncomment the variable nodeset_used
            - revert back to commented-out code for variable nodeset
            - revert back to commented-out code for variable binding
            - all this takes place in the next 10 lines
        <xsl:variable name="nodeset_used">
            <xsl:call-template name="nodeset_used" />
        </xsl:variable>
    -->

        <!-- the correct absolute nodeset as used in HTML -->
        <xsl:variable name="nodeset">
             <!--<xsl:call-template name="nodeset_absolute">
                 <xsl:with-param name="nodeset_u" select="$nodeset_used"/>
             </xsl:call-template>-->
             <xsl:call-template name="nodeset_used" />
        </xsl:variable>

        <!-- note that bindings are not required -->
        <!--<xsl:variable name="binding" select="/h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset_used] | /h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset]" />-->
        <!-- Note: not in use, commented out below with "watch out" warning -->
        <!-- <xsl:variable name="binding" select="key('nodeset-bindings', $nodeset)" /> -->

        <section>
            <xsl:attribute name="class">
                <xsl:value-of select="'or-repeat '" />
                <!-- watch out or-branch pre-init added to or-group parent! -->
                <!--<xsl:if test="$binding/@relevant">
                    <xsl:value-of select="'or-branch pre-init '"/>
                </xsl:if>-->
                <xsl:if test="@appearance or @rows">
                    <xsl:value-of select="'or-appearances-placeholder '"></xsl:value-of>
                </xsl:if>
            </xsl:attribute>
            <xsl:call-template name="appearance" />
            <xsl:attribute name="name">
                <xsl:value-of select="$nodeset"/>
            </xsl:attribute>
            <xsl:if test="string(./xf:label/@ref) or string (./xf:label)">
                <h4>
                    <xsl:apply-templates select="xf:label" />
                </h4>
            </xsl:if>

            <xsl:apply-templates select="*[not(self::xf:label or self::xf:hint)]"/>
            <xsl:text>
            </xsl:text>
        </section>
        <!-- Add a repeat-info node -->
        <div>
            <xsl:attribute name="class">
                <xsl:value-of select="'or-repeat-info'" />
            </xsl:attribute>
            <xsl:attribute name="data-name">
                <xsl:value-of select="$nodeset"/>
            </xsl:attribute>
            <xsl:if test="@jr:count">
                <xsl:attribute name="data-repeat-count">
                    <xsl:value-of select="@jr:count" />
                </xsl:attribute>
            </xsl:if>
             <xsl:if test="@jr:noAddRemove">
                <xsl:attribute name="data-repeat-fixed">
                     <xsl:value-of select="string('fixed')"/>
                </xsl:attribute>
            </xsl:if>
        </div>
    </xsl:template>

    <xsl:template name="appearance">
        <xsl:variable name="rows" select="./@rows" />
        <xsl:if test="local-name() = 'select' or local-name() = 'select1'">
            <xsl:attribute name="data-appearances-select-type" />
        </xsl:if>
        <xsl:if test="@appearance or @rows">
            <xsl:attribute name="data-appearances">
                <xsl:value-of select="@appearance" />
                <!-- turn rows attribute into an appearance (which is what it should have been in the first place imho) -->
                <xsl:if test="$rows">
                    <xsl:value-of select="concat(' rows-', $rows)" />
                </xsl:if>
            </xsl:attribute>
        </xsl:if>
    </xsl:template>


    <xsl:template match="xf:input | xf:upload | xf:range | xf:item | xf:bind[@jr:preload] | xf:bind[@calculate] | xf:setvalue[@event] | odk:setgeopoint[@event]">
    <!-- NOTE: TO IMPROVE PERFORMANCE, SUPPORT FOR RELATIVE NODESET BINDINGS HAS BEEN SWITCHED OFF
            To turn this back on:
            - uncomment the variable nodeset_used
            - revert back to commented-out code for variable nodeset
            - revert back to commented-out code for variable binding
            - all this takes place in the next 10 lines
        <xsl:variable name="nodeset_used">
            <xsl:call-template name="nodeset_used" />
        </xsl:variable>
    -->
        <!-- the correct absolute nodeset as used in HTML -->
        <xsl:variable name="nodeset">
             <!--<xsl:call-template name="nodeset_absolute">
                 <xsl:with-param name="nodeset_u" select="$nodeset_used"/>
             </xsl:call-template>-->
             <xsl:call-template name="nodeset_used" />
        </xsl:variable>

        <!-- note that bindings are not required -->
        <!--<xsl:variable name="binding" select="/h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset_used] | /h:html/h:head/xf:model/xf:bind[@nodeset=$nodeset]" />-->
        <xsl:variable name="binding" select="key('nodeset-bindings', $nodeset)" />

        <!-- If this is a bind element that also has an input, do nothing as it will be dealt with by the corresponding xf:input -->
        <!-- Note that this test is not fully spec-compliant. It will work with XLS-form produced forms that have no relative nodes
             and use the ref atribute only -->
        <xsl:if test="not( local-name() = 'bind' and count( key('fields-by-ref', $nodeset) ) > 0 )">
            <xsl:choose>
                <xsl:when test="(local-name() = 'range' and  contains(@appearance, 'picker'))">
                    <xsl:call-template name="select-select">
                        <xsl:with-param name="nodeset" select="$nodeset" />
                        <xsl:with-param name="binding" select="$binding" />
                    </xsl:call-template>
                </xsl:when>
                <xsl:otherwise>
                    <label>
                        <xsl:attribute name="class">
                            <xsl:if test="local-name() = 'input' or local-name() = 'upload' or local-name() = 'range'">
                                <xsl:value-of select="'question '"/>
                            </xsl:if>
                            <xsl:if test="(local-name() = 'input' or local-name() = 'upload' or local-name() = 'range' or local-name() = 'bind') and $binding/@relevant">
                                <xsl:value-of select="'or-branch pre-init '"/>
                            </xsl:if>
                            <xsl:if test="local-name() = 'bind'">
                                <xsl:value-of select="'calculation '"/>
                            </xsl:if>
                            <xsl:if test="local-name() = 'setvalue'">
                                <xsl:value-of select="'setvalue '"/>
                            </xsl:if>
                            <xsl:if test="local-name() = 'setgeopoint'">
                                <xsl:value-of select="'setgeopoint '"/>
                            </xsl:if>
                            <!--<xsl:if test="local-name() = 'item'">
                                <xsl:value-of select="'clearfix '"/>
                            </xsl:if>-->
                            <xsl:if test="local-name() != 'item'">
                                <xsl:value-of select="'non-select '"/>
                            </xsl:if>
                            <xsl:if test="@appearance or @rows">
                                <xsl:value-of select="'or-appearances-placeholder '"></xsl:value-of>
                            </xsl:if>
                        </xsl:attribute>
                        <xsl:call-template name="appearance" />

                        <xsl:apply-templates select="./@kb:image-customization"/>

                        <xsl:if test="not(local-name() = 'item' or local-name() = 'bind' or local-name() = 'setvalue' or local-name() = 'setgeopoint')">
                            <xsl:apply-templates select="xf:label" />
                            <xsl:if test="not($binding/@readonly = 'true()')">
                                <xsl:apply-templates select="$binding/@required"/>
                            </xsl:if>
                        </xsl:if>
                        <!--
                            note: Hints should actually be placed in title attribute (of input) as it is semantically nicer.
                            However, to support multiple languages and parse all of them (to be available offline)
                            they are placed in the label instead.
                        -->
                        <xsl:apply-templates select="xf:hint" />

                        <xsl:variable name="appearance">
                            <xsl:value-of select="translate(@appearance, $upper-case, $lower-case)"/>
                        </xsl:variable>
                        <xsl:variable name="element">
                            <xsl:choose>
                                <xsl:when test="$binding/@type = 'string' and contains($appearance, 'multi-line') or contains($appearance, 'multiline') or contains($appearance, 'text-area') or contains($appearance, 'textarea') or ./@rows">
                                    <xsl:value-of select="string('textarea')" />
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:value-of select="string('input')" />
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:variable>
                        <xsl:variable name="type">
                            <xsl:if test="$element = 'textarea'">
                                <xsl:value-of select="$element"/>
                            </xsl:if>
                        </xsl:variable>
                        <xsl:element name="{$element}">
                            <xsl:choose>
                                <xsl:when test="not(local-name() = 'setvalue' or local-name() = 'setgeopoint') and ancestor::odk:rank">
                                    <xsl:call-template name="rank-item-attributes"/>
                                </xsl:when>
                                <xsl:when test="local-name() = 'setvalue' or local-name() = 'setgeopoint'">
                                    <xsl:call-template name="action-attributes">
                                        <xsl:with-param name="binding" select="$binding"/>
                                        <xsl:with-param name="nodeset" select="$nodeset"/>
                                    </xsl:call-template>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:call-template name="binding-attributes">
                                        <xsl:with-param name="binding" select="$binding"/>
                                        <xsl:with-param name="nodeset" select="$nodeset"/>
                                        <xsl:with-param name="type" select="$type"/>
                                    </xsl:call-template>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:element>
                        <xsl:if test="local-name() = 'item'">
                            <xsl:apply-templates select="xf:label" />
                        </xsl:if>

                        <xsl:if test="not(local-name() = 'item' or local-name() = 'bind' or local-name() = 'setvalue' or local-name() = 'setgeopoint')">
                            <!-- the only use case at the moment is a <setvalue> and <odk:setgeopoint> child with xforms-value-changed event-->
                            <xsl:if test="./xf:setvalue[@event] or ./odk:setgeopoint[@event]">
                                <xsl:apply-templates select="./xf:setvalue[@event] | ./odk:setgeopoint[@event]" />
                            </xsl:if>
                            <xsl:call-template name="constraint-and-required-msg" >
                                 <xsl:with-param name="binding" select="$binding"/>
                            </xsl:call-template>
                        </xsl:if>
                    </label>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
    </xsl:template>

    <xsl:template match="*" mode="range-option-picker">
        <xsl:param name="start" />
        <xsl:param name="end" />
        <xsl:param name="step" />
        <xsl:param name="readonly" />
        <xsl:param name="limit" />
        <xsl:if test="not($start > $end)">
            <option>
                <xsl:if test="$readonly">
                    <xsl:attribute name="disabled">
                        <xsl:value-of select="'disabled'"/>
                    </xsl:attribute>
                </xsl:if>
                <xsl:attribute name="value">
                    <xsl:choose>
                        <xsl:when test="string($start)">
                            <xsl:value-of select="$start" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:message>ERROR: Could not determine value of select option.</xsl:message>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:attribute>
                <xsl:value-of select="$start" />
            </option>
            <span>
                <xsl:attribute name="data-option-value">
                    <xsl:value-of select="$start" />
                </xsl:attribute>
                <xsl:value-of select="."/>
            </span>
            <xsl:variable name="next" select="$start + $step"/>
            <xsl:choose>
                <xsl:when test="$limit > 1">
                    <xsl:apply-templates select="current()" mode="range-option-picker">
                        <xsl:with-param name="start" select="$next"/>
                        <xsl:with-param name="end" select="$end"/>
                        <xsl:with-param name="step" select="$step"/>
                        <xsl:with-param name="readonly" select="$readonly"/>
                        <xsl:with-param name="limit" select="$limit - 1"/>
                    </xsl:apply-templates>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:message>ERROR: Exceed maximum iterations allowed.</xsl:message>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
    </xsl:template>

    <xsl:template match="xf:item" mode="select-option">
        <xsl:param name="tolerate-spaces" />
        <xsl:param name="readonly" />
        <xsl:variable name="label_translations">
            <xsl:apply-templates select="xf:label" />
        </xsl:variable>
        <xsl:variable name="value">
            <xsl:value-of select="xf:value" />
            <xsl:if test="not($tolerate-spaces) and contains(xf:value, ' ')">
                <xsl:message terminate="yes">ERROR: (Multi-)select item found with a value that contains spaces!</xsl:message>
            </xsl:if>
            <xsl:if test="not(string(xf:value))">
                <xsl:message terminate="no">WARNING: Select item found without a value!</xsl:message>
            </xsl:if>
        </xsl:variable>
        <option>
            <xsl:if test="$readonly">
                <xsl:attribute name="disabled">
                    <xsl:value-of select="'disabled'"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:attribute name="value">
                <xsl:choose>
                    <xsl:when test="string($value)">
                        <xsl:value-of select="$value" />
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:message>ERROR: Could not determine value of select option.</xsl:message>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <!-- better to use default language if defined and otherwise span[1] -->
            <xsl:choose>
                <!-- TODO: IT WOULD BE MORE EFFICIENT TO EXTRACT THIS FROM exsl:node-set($label_translations) -->
                <xsl:when test="exsl:node-set($label_translations)/span[@lang=$current-lang]">
                    <xsl:value-of select="exsl:node-set($label_translations)/span[@lang=$current-lang] " />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="exsl:node-set($label_translations)/span[1] " />
                </xsl:otherwise>
            </xsl:choose>
        </option>
        <xsl:for-each select="exsl:node-set($label_translations)/span" >
            <span>
                <xsl:attribute name="data-option-value">
                    <xsl:value-of select="$value" />
                </xsl:attribute>
                <xsl:attribute name="lang">
                    <xsl:value-of select="@lang" />
                </xsl:attribute>
                <xsl:value-of select="."/>
            </span>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="xf:itemset" mode="templates">
        <xsl:param name="nodeset" />
        <xsl:param name="binding"/>
        <xsl:param name="type"/>
        <xsl:choose>
            <xsl:when test="not($type = 'option')">
                <label class="itemset-template">
                    <xsl:attribute name="data-items-path">
                        <xsl:value-of select="@nodeset"/>
                    </xsl:attribute>
                    <!--<xsl:value-of select="'__LABEL__'" />-->
                    <input>
                        <xsl:choose>
                            <xsl:when test="ancestor::odk:rank">
                                <xsl:call-template name="rank-item-attributes"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:call-template name="binding-attributes">
                                    <xsl:with-param name="binding" select="$binding"/>
                                    <xsl:with-param name="nodeset" select="$nodeset"/>
                                </xsl:call-template>
                            </xsl:otherwise>
                        </xsl:choose>
                        <xsl:attribute name="value"></xsl:attribute>
                    </input>
                </label>
            </xsl:when>
            <xsl:otherwise>
                <option class="itemset-template" value="">
                    <xsl:attribute name="data-items-path">
                        <xsl:value-of select="@nodeset"/>
                    </xsl:attribute>
                    <xsl:if test="$binding/@readonly = 'true()'">
                       <xsl:attribute name="disabled"/>
                    </xsl:if>
                    <xsl:value-of select="'...'"/>
                </option>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="xf:itemset" mode="labels">
        <xsl:variable name="valueRef" select="@valueRef" />
        <xsl:variable name="labelRef" select="@labelRef" />
        <xsl:variable name="itextPath" select="@itextPath" />

        <span class="itemset-labels">
            <xsl:attribute name="data-value-ref">
                <xsl:value-of select="$valueRef"/>
            </xsl:attribute>
            <xsl:choose>
                <xsl:when test="contains($labelRef, 'jr:itext(')">
                    <xsl:attribute name="data-label-type">
                        <xsl:value-of select="'itext'"/>
                    </xsl:attribute>
                    <xsl:variable name="label-node-name"
                        select="substring(substring-after($labelRef, 'itext('),1,string-length(substring-after($labelRef, 'itext('))-1)"/>
                    <xsl:attribute name="data-label-ref">
                        <xsl:value-of select="$label-node-name"/>
                    </xsl:attribute>

                    <xsl:for-each select="./*[local-name()=$label-node-name]">
                        <!-- so this is support for itext(node) (not itext(path/to/node)), but only 'ad-hoc' for itemset labels for now -->
                        <xsl:variable name="id" select="." />

                        <xsl:call-template name="translations">
                            <xsl:with-param name="id" select="$id"/>
                            <xsl:with-param name="class" select="'option-label'"/>
                        </xsl:call-template>
                    </xsl:for-each>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="data-label-ref">
                        <xsl:value-of select="$labelRef"/>
                    </xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text> <!-- This preserves whitespace which affects snapshot tests. --></xsl:text>
        </span>
    </xsl:template>

    <!--
       turns STRING: '/path/to/node' into: /*[name()='path'/*[name()='to']/*[name()='node'
    -->
    <!--
    <xsl:template name="string-to-path">
        <xsl:param name="path-string"/>
        <xsl:if test="starts-with($path-string, '/')">
            <xsl:value-of select="'/'"/>
        </xsl:if>
        <xsl:choose>
            <xsl:when test="contains($path-string, '/')">
                <xsl:value-of select="substring-before($path-string, '/')"/>
                <xsl:call-template name="string-to-path">
                    <xsl:with-param name="path-string" select="substring-after($path-string, '/')"/>
                </xsl:call-template>
            </xsl:when>
        </xsl:choose>
    </xsl:template>
    -->

    <xsl:template name="select-select">
        <xsl:param name="nodeset"/>
        <xsl:param name="binding"/>
        <xsl:variable name="appearance" select="./@appearance" />
        <xsl:variable name="datalist-id" select="translate($nodeset, ' _-.\\/', '')"/>
        <xsl:variable name="type">
           <xsl:choose>
               <xsl:when test="local-name() = 'select'">select_multiple</xsl:when>
               <xsl:otherwise>select_one</xsl:otherwise>
           </xsl:choose>
        </xsl:variable>
        <xsl:variable name="element">
            <xsl:choose>
                <xsl:when test="local-name() = 'select1' and (contains(@appearance, 'autocomplete') or contains(@appearance, 'search'))">datalist</xsl:when>
                <xsl:otherwise>select</xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:variable name="options">
            <xsl:choose>
                <xsl:when test="contains(@appearance, 'picker')">
                    <xsl:apply-templates select="current()" mode="range-option-picker">
                        <xsl:with-param name="start" select="@start" />
                        <xsl:with-param name="end" select="@end" />
                        <xsl:with-param name="step" select="@step" />
                        <xsl:with-param name="readonly" select="$binding/@readonly = 'true()'" />
                        <xsl:with-param name="limit" select="500" />
                    </xsl:apply-templates>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:apply-templates select="xf:item" mode="select-option">
                        <xsl:with-param name="tolerate-spaces" select="$type = 'select_one'" />
                        <xsl:with-param name="readonly" select="$binding/@readonly = 'true()'" />
                    </xsl:apply-templates>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <label>
            <xsl:attribute name="class">
                <xsl:value-of select="'question '"/>
                <xsl:if test="./@appearance or ./@rows">
                    <xsl:value-of select="'or-appearances-placeholder '" />
                </xsl:if>
                <xsl:if test="$binding/@relevant">
                    <xsl:value-of select="' or-branch pre-init '"/>
                </xsl:if>
            </xsl:attribute>
            <xsl:call-template name="appearance" />
            <xsl:apply-templates select="./@kb:image-customization"/>
            <xsl:apply-templates select="xf:label" />
            <xsl:apply-templates select="$binding/@required"/>
            <xsl:apply-templates select="xf:hint" />
            <xsl:if test="$element = 'datalist'">
                <input>
                    <xsl:call-template name="binding-attributes">
                        <xsl:with-param name="nodeset" select="$nodeset" />
                        <xsl:with-param name="binding" select="$binding" />
                        <xsl:with-param name="type" select="$type" />
                    </xsl:call-template>
                    <!-- override type attribute -->
                    <xsl:attribute name="type">
                        <xsl:value-of select="'text'"/>
                    </xsl:attribute>
                    <xsl:attribute name="list">
                        <xsl:value-of select="$datalist-id"/>
                    </xsl:attribute>
                </input>
            </xsl:if>
            <xsl:element name="{$element}">
                <xsl:choose>
                    <xsl:when test="$element != 'datalist'">
                        <xsl:call-template name="binding-attributes">
                            <xsl:with-param name="nodeset" select="$nodeset" />
                            <xsl:with-param name="binding" select="$binding" />
                            <xsl:with-param name="type" select="$type" />
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:attribute name="id">
                            <xsl:value-of select="$datalist-id"/>
                        </xsl:attribute>
                    </xsl:otherwise>
                </xsl:choose>
                <xsl:choose>
                    <xsl:when test="not(./xf:itemset)">
                        <option value="">...</option>
                        <xsl:for-each select="exsl:node-set($options)/option">
                            <xsl:copy-of select="."/>
                        </xsl:for-each>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:apply-templates select="xf:itemset" mode="templates">
                            <xsl:with-param name="binding" select="$binding"/>
                            <xsl:with-param name="type" select="'option'"/>
                        </xsl:apply-templates>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:element>
            <span class="or-option-translations" style="display:none;">
                <xsl:if test="not(./xf:itemset) and $translated = 'true'">
                    <xsl:for-each select="exsl:node-set($options)/span">
                        <xsl:copy-of select="." />
                    </xsl:for-each>
                </xsl:if>
                <xsl:text>
                </xsl:text>
            </span>
            <xsl:if test="./xf:itemset">
                <xsl:apply-templates select="xf:itemset" mode="labels"/>
            </xsl:if>
            <xsl:if test="./xf:setvalue[@event] or ./odk:setgeopoint[@event]">
                <xsl:apply-templates select="./xf:setvalue[@event] | ./odk:setgeopoint[@event]" />
            </xsl:if>
            <xsl:call-template name="constraint-and-required-msg" >
                <xsl:with-param name="binding" select="$binding"/>
            </xsl:call-template>
        </label>
    </xsl:template>

    <xsl:template name="select-input">
        <xsl:param name="nodeset"/>
        <xsl:param name="binding"/>
        <!--
            legends are a royal pain-in-the-ass, but semantically correct to use. To restore sanity, the least
            ugly solution that works regardless of the legend text + hint length (and showing a nice error background)
            is to use a double fieldset (though another outer element would be okay too). Is consequence of being stingy with
            # of DOM elements used.
        -->
        <fieldset>
            <xsl:attribute name="class">
                <xsl:value-of select="'question '"/>
                <xsl:if test="not(contains(@appearance, 'compact') or contains(@appearance, 'list-nolabel') or contains(@appearance, 'label') or contains(@appearance, 'likert') or contains(@appearance, 'horizontal-compact') or contains(@appearance, 'no-buttons'))" >
                    <xsl:value-of select="'simple-select '"/>
                </xsl:if>
                <xsl:if test="local-name() = 'trigger'">
                    <xsl:value-of select="'trigger '"/>
                </xsl:if>
                <xsl:if test="$binding/@relevant">
                    <xsl:value-of select="'or-branch pre-init '"/>
                </xsl:if>
                <xsl:if test="@appearance">
                    <xsl:value-of select="'or-appearances-placeholder '"></xsl:value-of>
                </xsl:if>
            </xsl:attribute>
            <xsl:if test="@appearance">
                <xsl:call-template name="appearance" />
            </xsl:if>
            <xsl:apply-templates select="./@kb:image-customization"/>
            <xsl:apply-templates select="./@kb:flash"/>
            <fieldset>
                <!--<xsl:if test="./xf:itemset">
                    <xsl:attribute name="data-itemset"/>
                </xsl:if>-->
                <legend>
                    <xsl:apply-templates select="xf:label" />
                    <xsl:apply-templates select="$binding/@required"/>
                    <xsl:apply-templates select="xf:hint" />
                    <xsl:text>
                    </xsl:text>
                </legend>
                <xsl:if test="local-name() = 'rank'">
                    <input class="rank">
                        <xsl:call-template name="binding-attributes">
                            <xsl:with-param name="binding" select="$binding"/>
                            <xsl:with-param name="nodeset" select="$nodeset"/>
                        </xsl:call-template>
                    </input>
                </xsl:if>
                <div class="option-wrapper">
                    <xsl:choose>
                        <xsl:when test="local-name() = 'trigger'">
                            <label>
                                <input value="OK">
                                    <xsl:call-template name="binding-attributes">
                                        <xsl:with-param name="binding" select="$binding"/>
                                        <xsl:with-param name="nodeset" select="$nodeset"/>
                                    </xsl:call-template>
                                </input>
                                <span class="option-label active" lang="">
                                    <xsl:value-of select="'OK'"/>
                                </span>
                            </label>
                        </xsl:when>
                        <xsl:when test="not(./xf:itemset)">
                            <xsl:apply-templates select="xf:item" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:apply-templates select="xf:itemset" mode="templates">
                                <xsl:with-param name="nodeset" select="$nodeset" />
                                <xsl:with-param name="binding" select="$binding" />
                            </xsl:apply-templates>
                            <xsl:apply-templates select="xf:itemset" mode="labels"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </div>
            </fieldset>
             <!-- the only use case at the moment is a <setvalue> or <odk:setgeopoint> child with xforms-value-changed event-->
            <xsl:if test="./xf:setvalue[@event] or ./odk:setgeopoint[@event]">
                <xsl:apply-templates select="./xf:setvalue[@event] | ./odk:setgeopoint[@event]" />
            </xsl:if>
            <xsl:call-template name="constraint-and-required-msg" >
                <xsl:with-param name="binding" select="$binding"/>
            </xsl:call-template>
        </fieldset>
    </xsl:template>


    <!--
        Don't add any logic or names to odk:rank items
    -->
    <xsl:template name="rank-item-attributes">
        <xsl:attribute name="value">
            <xsl:value-of select="./xf:value"/>
        </xsl:attribute>
        <xsl:attribute name="class">
            <xsl:value-of select="'ignore'"/>
        </xsl:attribute>
        <xsl:attribute name="type">
            <xsl:value-of select="'text'"/>
        </xsl:attribute>
    </xsl:template>

    <!--
        Don't add any logic or names to setvalue or setgeopoint items
    -->
    <xsl:template name="action-attributes">
        <xsl:param name="binding"/>
        <xsl:param name="nodeset"/>
        <xsl:attribute name="name">
            <xsl:value-of select="normalize-space($nodeset)" />
        </xsl:attribute>
        <xsl:attribute name="data-type-xml">
            <xsl:call-template name="xml_type">
                <xsl:with-param name="nodeset" select="$nodeset"/>
            </xsl:call-template>
        </xsl:attribute>
        <xsl:attribute name="data-event">
            <xsl:value-of select="./@event"/>
        </xsl:attribute>
        <xsl:choose>
            <xsl:when test="local-name() = 'setvalue'">
                <xsl:attribute name="data-setvalue">
                    <xsl:choose>
                        <xsl:when test="./@value">
                            <xsl:value-of select="./@value" />
                        </xsl:when>
                        <xsl:when test="string-length(.) > 0">
                            <xsl:value-of select="concat('&quot;', ./text(), '&quot;')" />
                        </xsl:when>
                    </xsl:choose>
                </xsl:attribute>
            </xsl:when>
            <xsl:when test="local-name() = 'setgeopoint'">
                <xsl:attribute name="data-setgeopoint">
                    <xsl:value-of select="true()" />
                </xsl:attribute>
            </xsl:when>
        </xsl:choose>
        <xsl:attribute name="type">
            <xsl:value-of select="'hidden'"/>
        </xsl:attribute>
        <xsl:if test="$openclinica = 1">
            <xsl:for-each select="$binding/@*[starts-with(name(), 'oc:') and not(substring-before(name(), 'Msg'))]" >
                <xsl:attribute name="{concat('data-oc-', local-name(.))}">
                    <xsl:value-of select="normalize-space(.)" />
                </xsl:attribute>
            </xsl:for-each>
        </xsl:if>
    </xsl:template>


    <!--
        adds binding attributes to the context node, meant for <input>, <select>, <textarea>
    -->
    <xsl:template name="binding-attributes">
        <xsl:param name="binding"/>
        <xsl:param name="nodeset"/>
        <xsl:param name="type"/>
        <xsl:variable name="xml-type">
            <xsl:call-template name="xml_type">
                <xsl:with-param name="nodeset" select="$nodeset"/>
                <!--<xsl:with-param name="binding" select="$binding"/>-->
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="html-input-type">
            <xsl:call-template name="html_type">
                <xsl:with-param name="xml_type" select="$xml-type" />
            </xsl:call-template>
        </xsl:variable>
        <xsl:choose>
            <xsl:when test="$type = 'select_multiple'">
                <xsl:attribute name="multiple">multiple</xsl:attribute>
            </xsl:when>
            <xsl:when test="$type = 'select_one'"></xsl:when>
            <xsl:when test="$type = 'textarea'"></xsl:when>
            <xsl:when test="$type = 'rank'">
                <xsl:attribute name="type">rank</xsl:attribute>
            </xsl:when>
            <xsl:otherwise>
                <xsl:attribute name="type">
                    <xsl:value-of select="$html-input-type"/>
                </xsl:attribute>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:attribute name="name">
            <xsl:value-of select="normalize-space($nodeset)" />
        </xsl:attribute>
        <xsl:if test="$html-input-type = 'radio'">
            <xsl:attribute name="data-name">
                <xsl:value-of select="normalize-space($nodeset)" />
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="local-name() = 'item'">
            <xsl:attribute name="value">
                <xsl:value-of select="./xf:value"/>
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="(string-length($binding/@required) &gt; 0) and not($binding/@required = 'false()') and not(local-name() = 'bind')">
            <xsl:attribute name="data-required">
                <xsl:value-of select="$binding/@required" />
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@constraint">
            <xsl:attribute name="data-constraint">
                <xsl:value-of select="$binding/@constraint" />
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@relevant">
            <xsl:attribute name="data-relevant">
                <xsl:value-of select="$binding/@relevant"/>
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@calculate">
            <xsl:attribute name="data-calculate">
                <xsl:value-of select="$binding/@calculate" />
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@jr:preload">
            <xsl:attribute name="data-preload">
                <xsl:value-of select="$binding/@jr:preload"/>
            </xsl:attribute>
            <xsl:attribute name="data-preload-params">
                <xsl:value-of select="$binding/@jr:preloadParams"/>
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@enk:for">
            <xsl:attribute name="data-for">
                <xsl:value-of select="normalize-space($binding/@enk:for)" />
            </xsl:attribute>
        </xsl:if>
        <xsl:if test="$openclinica = 1">
            <xsl:for-each select="$binding/@*[starts-with(name(), 'oc:') and not(substring-before(name(), 'Msg'))]" >
                <xsl:attribute name="{concat('data-oc-', local-name(.))}">
                    <xsl:value-of select="normalize-space(.)" />
                </xsl:attribute>
            </xsl:for-each>
        </xsl:if>
        <xsl:if test="$binding/@orx:max-pixels">
            <xsl:attribute name="data-max-pixels">
                <xsl:value-of select="normalize-space($binding/@orx:max-pixels)" />
            </xsl:attribute>
        </xsl:if>
        <xsl:attribute name="data-type-xml">
            <xsl:value-of select="$xml-type" />
        </xsl:attribute>
        <xsl:if test="$xml-type = 'decimal'">
            <xsl:attribute name="step">any</xsl:attribute>
        </xsl:if>
        <xsl:if test="$binding/@readonly = 'true()' and not($html-input-type = 'hidden')" >
            <!--
                This also adds a readonly attribute to <select> which is not valid HTML.
                We could add some logic to avoid that (the <option>s already get the disabled attribute),
                but it's an extra line of defence and doesn't really hurt. The input change handler in
                Enketo Core ignores changes on a <select readonly>.
            -->
            <xsl:attribute name="readonly">readonly</xsl:attribute>
        </xsl:if>
        <xsl:if test="local-name() = 'range'">
        <!-- note that due to the unhelpful default value behavior of input type=range in HTML, we use type=number -->
            <xsl:if test="@start">
                <xsl:attribute name="min">
                    <xsl:value-of select="@start" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@end">
                <xsl:attribute name="max">
                    <xsl:value-of select="@end" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@step">
                <xsl:attribute name="step">
                    <xsl:value-of select="@step" />
                </xsl:attribute>
            </xsl:if>
        </xsl:if>
        <xsl:if test="$html-input-type = 'file'">
            <xsl:attribute name="accept">
                <xsl:choose>
                    <xsl:when test="@accept">
                        <xsl:value-of select="@accept" />
                    </xsl:when>
                    <xsl:when test="@mediatype">
                        <xsl:value-of select="@mediatype" />
                    </xsl:when>
                </xsl:choose>
            </xsl:attribute>
            <!-- Note, this test captures new, new-front, new-rear -->
            <xsl:if test="contains(@appearance, 'new')">
                <xsl:attribute name="capture">
                    <xsl:choose>
                        <xsl:when test="contains(@appearance, 'new-front')">
                            <xsl:value-of select="'user'"/>
                        </xsl:when>
                        <xsl:when test="contains(@appearance, 'new-rear')">
                            <xsl:value-of select="'environment'"/>
                        </xsl:when>
                        <!-- else (if appearance="new"), the capture attribute remains empty, by design -->
                    </xsl:choose>
                </xsl:attribute>
            </xsl:if>
        </xsl:if>
    </xsl:template>

    <xsl:template match="xf:select | xf:select1 | odk:rank | xf:trigger">
        <xsl:variable name="nodeset_used">
            <xsl:call-template name="nodeset_used" />
        </xsl:variable>
        <xsl:variable name="nodeset">
            <xsl:call-template name="nodeset_absolute">
                <xsl:with-param name="nodeset_u" select="$nodeset_used"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="binding" select="key('nodeset-bindings',$nodeset_used) | key('nodeset-bindings', $nodeset)" />
        <xsl:choose>
            <xsl:when test="( local-name() = 'select' or local-name() = 'select1' ) and contains(@appearance, 'minimal') or contains(@appearance, 'autocomplete') or contains(@appearance, 'search')">
                <xsl:call-template name="select-select">
                    <xsl:with-param name="nodeset" select="$nodeset" />
                    <xsl:with-param name="binding" select="$binding" />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="select-input">
                    <xsl:with-param name="nodeset" select="$nodeset" />
                    <xsl:with-param name="binding" select="$binding" />
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="xf:label | xf:hint | xf:bind/@jr:constraintMsg | xf:bind/@jr:requiredMsg | xf:bind/@*[starts-with(name(), 'oc:')]">
        <xsl:variable name="class">
            <xsl:choose>
                <xsl:when test="name() = 'jr:constraintMsg'">
                    <xsl:value-of select="'or-constraint-msg'" />
                </xsl:when>
                <xsl:when test="local-name() = 'requiredMsg'">
                    <xsl:value-of select="'or-required-msg'" />
                </xsl:when>
                <xsl:when test="local-name() = 'relevantMsg'">
                    <xsl:value-of select="'or-relevant-msg'" />
                </xsl:when>
                <xsl:when test="local-name() = 'hint'">
                    <xsl:value-of select="'or-hint'" />
                </xsl:when>
                <xsl:when test="local-name() = 'label' and local-name(..) != 'item' ">
                    <xsl:value-of select="'question-label'"/>
                </xsl:when>
                <xsl:when test="local-name() = 'label' and local-name(..) = 'item' ">
                    <xsl:value-of select="'option-label'"/>
                </xsl:when>
                <xsl:when test="$openclinica = 1 and starts-with(name(), 'oc:constraint') and string-length(local-name()) > 13 and substring(name(), string-length(name()) - string-length('Msg') +1) = 'Msg' " >
                    <xsl:value-of select="concat('or-', substring-before(local-name(.), 'Msg'), '-msg')"/>
                </xsl:when>
            </xsl:choose>
        </xsl:variable>
        <xsl:choose>
            <xsl:when test="not(string(./@ref)) and ( string(.) or string(./xf:output/@value) ) and not(contains(.,'itext('))">
                <span lang="">
                    <xsl:attribute name="class">
                        <xsl:value-of select="concat($class, ' active')" />
                    </xsl:attribute>
                    <xsl:call-template name="text-content" />
                </span>
            </xsl:when>
            <xsl:otherwise>
                <xsl:variable name="ref">
                   <xsl:choose>
                        <xsl:when test="@ref">
                            <xsl:value-of select="@ref" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="." />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:variable>

                <xsl:variable name="refid"
                    select="substring(substring-after($ref, 'itext('),2,string-length(substring-after($ref, 'itext('))-3)"/>
            <!--
                ** HUGE PERFORMANCE HOG! **
                <xsl:if test="not(/h:html/h:head/xf:model/xf:itext/xf:translation/xf:text[@id=$refid])">
                    <xsl:message>ERROR: itext(id) found with non-existing id: "<xsl:value-of select="$refid"/>". Maybe itext(path/to/node) construct was used, which is not supported.</xsl:message>
                </xsl:if>
            -->
                <xsl:call-template name="translations">
                    <xsl:with-param name="id" select="$refid"/>
                    <xsl:with-param name="class" select="$class"/>
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template name="constraint-and-required-msg">
        <xsl:param name="binding"/>
        <xsl:if test="string-length($binding/@constraint) &gt; 0">
            <xsl:choose>
                <xsl:when test="$binding/@jr:constraintMsg">
                    <xsl:apply-templates select="$binding/@jr:constraintMsg" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:call-template name="default-constraint-msg"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="(string-length($binding/@required) &gt; 0) and not($binding/@required = 'false()')">
            <xsl:choose>
                <xsl:when test="$binding/@jr:requiredMsg">
                    <xsl:apply-templates select="$binding/@jr:requiredMsg" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:call-template name="default-required-msg"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="$openclinica = 1">
            <xsl:if test="(string-length($binding/@relevant) &gt; 0) and not($binding/@relevant = 'true()')">
                <xsl:choose>
                    <xsl:when test="$binding/@oc:relevantMsg">
                        <xsl:apply-templates select="$binding/@oc:relevantMsg" />
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:call-template name="default-relevant-msg"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:if>
            <xsl:for-each select="$binding/@*[starts-with(name(), 'oc:constraint') and substring(name(), string-length(name()) - string-length('Msg') +1) = 'Msg' ]" >
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </xsl:if>
    </xsl:template>

    <xsl:template name="default-constraint-msg">
        <span class="or-constraint-msg active" lang="" data-i18n="constraint.invalid">Value not allowed</span>
    </xsl:template>

    <xsl:template name="default-required-msg">
        <span class="or-required-msg active" lang="" data-i18n="constraint.required">This field is required</span>
    </xsl:template>

    <xsl:template name="default-relevant-msg">
        <span class="or-relevant-msg active" lang="" data-i18n="constraint.relevant">This value should be cleared</span>
    </xsl:template>

    <xsl:template match="xf:bind/@required">
        <xsl:if test="not(. = 'false()' or string-length(.) = 0)">
            <span class="required">*</span>
        </xsl:if>
    </xsl:template>

     <xsl:template match="xf:output">
        <span class="or-output">
            <xsl:variable name="itext"
                    select="substring(substring-after(@value, 'itext('),2,string-length(substring-after(@value, 'itext('))-3)"/>
            <xsl:attribute name="data-value">
                <!-- this is just a quick hack! Need a robust itext processor that can make a distinction
                between id and node and figure out which instance to take node from with multiple instances -->
                <xsl:choose>
                    <xsl:when test="string-length($itext) &gt; 0" >
                        <xsl:value-of select="$itext"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="@value"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:text><!-- avoids self-closing tags on empty elements --> </xsl:text>
        </span>
    </xsl:template>

    <xsl:template match="@kb:image-customization">
        <xsl:if test=".">
            <xsl:attribute name="data-image-customization">
                <xsl:value-of select="normalize-space(.)" />
            </xsl:attribute>
        </xsl:if>
    </xsl:template>

    <xsl:template match="@kb:flash">
        <xsl:if test=".">
            <xsl:attribute name="data-flash">
                <xsl:value-of select="normalize-space(.)" />
            </xsl:attribute>
        </xsl:if>
    </xsl:template>

    <xsl:template name="text-content">
        <xsl:choose>
            <xsl:when test="string-length(.) = 0">
                <xsl:text><!-- avoids self-closing tags on empty elements --> </xsl:text>
                <xsl:apply-templates />
            </xsl:when>
            <!-- Firefox does not apply templates to these attributes -->
            <xsl:when test="name() = 'jr:constraintMsg' or name() = 'jr:requiredMsg' or ($openclinica = 1 and starts-with(name(), 'oc:') and substring(name(), string-length(name()) - string-length('Msg') + 1) = 'Msg' )">
                <xsl:value-of select="." />
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template name="translations">
        <xsl:param name="id"/>
        <xsl:param name="class"/>
        <xsl:for-each select="key('itext-texts-by-id', $id)">
            <xsl:variable name="lang" select="ancestor::xf:translation/@lang"/>
            <xsl:variable name="active">
                <xsl:if test="string($lang) = string($current-lang)">active</xsl:if>
            </xsl:variable>
            <xsl:variable name="notext">
                <xsl:value-of select="string-length(./xf:value[@form='long' or @form='short' or not(@form)]) = 0" />
            </xsl:variable>
            <!-- text labels get priority -->
            <xsl:for-each select="./xf:value" >
                <xsl:if test="not(@form = 'image' or @form = 'video' or @form = 'audio' or @form='big-image' or @form='guidance')">
                    <span>
                        <xsl:attribute name="lang">
                            <xsl:value-of select="$lang"/>
                        </xsl:attribute>
                        <xsl:if test="string($class) or @form or string($active)">
                            <xsl:attribute name="class">
                                <xsl:value-of select="concat($class, ' ')" />
                                <xsl:if test="@form">
                                    <xsl:value-of select="concat(' or-form-', @form, ' ')" />
                                </xsl:if>
                                <xsl:if test="@form = 'long' or (@form = 'short' and not(../node()/@form = 'long')) or not(@form) or @form = 'guidance'">
                                    <xsl:value-of select="$active" />
                                </xsl:if>
                            </xsl:attribute>
                        </xsl:if>
                        <xsl:attribute name="data-itext-id">
                            <xsl:value-of select="$id"/>
                        </xsl:attribute>
                        <xsl:call-template name="text-content" />
                    </span>
                </xsl:if>
            </xsl:for-each>
            <!-- guidance is next -->
            <xsl:for-each select="./xf:value[@form = 'guidance']">
                <details>
                    <xsl:attribute name="lang">
                        <xsl:value-of select="$lang"/>
                    </xsl:attribute>
                    <xsl:if test="string($class) or @form or string($active)">
                        <xsl:attribute name="class">
                            <xsl:value-of select="concat($class, ' or-form-', @form, ' ', $active)" />
                        </xsl:attribute>
                    </xsl:if>
                    <summary data-i18n="hint.guidance.details">more details</summary>
                    <xsl:call-template name="text-content" />
                </details>
            </xsl:for-each>
            <!-- media labels in document order -->
            <xsl:for-each select="./xf:value[@form = 'image' or @form = 'video' or @form = 'audio' and not($class = 'or-hint')]" >
                <xsl:choose>
                    <xsl:when test="@form = 'image'" >
                        <!-- test if there is a sibling big-image -->
                        <xsl:choose>
                            <xsl:when test="../xf:value[@form = 'big-image']" >
                                <a>
                                    <xsl:attribute name="class">
                                        <xsl:value-of select="'or-big-image'" />
                                    </xsl:attribute>
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="../xf:value[@form = 'big-image']"/>
                                    </xsl:attribute>
                                    <xsl:call-template name="image">
                                        <xsl:with-param name="active" select="$active"/>
                                        <xsl:with-param name="notext" select="$notext"/>
                                        <xsl:with-param name="lang" select="$lang"/>
                                    </xsl:call-template>
                                </a>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:call-template name="image">
                                    <xsl:with-param name="active" select="$active"/>
                                    <xsl:with-param name="notext" select="$notext"/>
                                    <xsl:with-param name="lang" select="$lang"/>
                                    <xsl:with-param name="id" select="$id"/>
                                </xsl:call-template>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:when>
                    <xsl:when test="@form = 'audio'">
                        <audio controls="controls">
                            <xsl:attribute name="lang">
                                <xsl:value-of select="$lang"/>
                            </xsl:attribute>
                            <xsl:if test="string($active)">
                                <xsl:attribute name="class">
                                    <xsl:value-of select="$active" />
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:attribute name="src">
                                <xsl:value-of select="." />
                            </xsl:attribute>
                            <xsl:attribute name="data-itext-id">
                                <xsl:value-of select="$id"/>
                            </xsl:attribute>
                            <xsl:text>Your browser does not support HTML5 audio.</xsl:text>
                        </audio>
                    </xsl:when>
                    <xsl:when test="@form = 'video'">
                        <video controls="controls">
                            <xsl:attribute name="lang">
                                <xsl:value-of select="$lang"/>
                            </xsl:attribute>
                            <xsl:if test="string($active)">
                                <xsl:attribute name="class">
                                    <xsl:value-of select="$active" />
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:attribute name="src">
                                <xsl:value-of select="." />
                            </xsl:attribute>
                            <xsl:attribute name="data-itext-id">
                                <xsl:value-of select="$id"/>
                            </xsl:attribute>
                            <xsl:text>Your browser does not support HTML5 video.</xsl:text>
                        </video>
                    </xsl:when>
                </xsl:choose>
            </xsl:for-each>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="strip_namespace">
        <xsl:param name="string" />
        <xsl:choose>
            <xsl:when test="contains($string, ':')" >
                <!-- crude check, should be improved -->
                <xsl:value-of select="substring-after($string, ':')" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$string" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template name="languages">
        <xsl:for-each select="key('translations', true())" >
            <option>
                <xsl:attribute name="value">
                    <xsl:value-of select="@lang"/>
                </xsl:attribute>
                <xsl:value-of select="@lang" />
            </option>
            <xsl:text> </xsl:text>
        </xsl:for-each>
    </xsl:template>

    <!-- future support for itext node parameters -->
    <xsl:template name="itext-helper">

    </xsl:template>

    <xsl:template name="node-path-helper">
        <xsl:param name="input-node"/>
        <xsl:choose>
            <xsl:when test="$input-node/@bind">
                <xsl:variable name="id" select="$input-node/@bind" />
                <xsl:value-of select="key('bindings-by-id', $id)/@nodeset"/>
            </xsl:when>
            <xsl:when test="$input-node/@ref or $input-node/@nodeset">
                <xsl:variable name="path" select="normalize-space($input-node/@ref | $input-node/@nodeset)" />
                <xsl:if test="not(substring($path, 1, 1) = '/') and not(parent::h:body)" >
                    <!-- path is relative, so we need context -->
                    <!--<xsl:choose>-->
                        <!-- should ancestor:: be replaced with parent:: ??? TEST -->
                       <!-- <xsl:when test="parent::xf:repeat/@nodeset">
                            <xsl:value-of select="concat(ancestor::xf:repeat/@nodeset, '/')" />
                        </xsl:when>
                        <xsl:when test="parent::xf:repeat/@ref">
                            <xsl:value-of select="concat(ancestor::xf:repeat/@ref, '/')" />
                        </xsl:when>
                        <xsl:when test="parent::xf:group/@nodeset">
                            <xsl:value-of select="concat(ancestor::xf:group/@nodeset, '/')" />
                        </xsl:when>
                        <xsl:when test="parent::xf:group/@ref">
                            <xsl:value-of select="concat(ancestor::xf:group/@ref, '/')" />
                        </xsl:when>-->
                        <!-- and use top level instance node, if the ancestor is h:body -->
                        <!--<xsl:when test="parent::h:body">-->
                            <!-- start with the top level element of the instance, e.g. /data/ -->
                        <!--    <xsl:value-of select="concat('/', local-name(//xf:instance/child::*[1]), '/')" />-->
                            <!--<xsl:message>INFO: tried to add top level node of instance:<xsl:value-of select="local-name(//xf:instance/child::*[1])"/></xsl:message>-->
                        <!--</xsl:when>-->
                        <!--<xsl:otherwise>
                            <xsl:message>ERROR: Could not determine context node for relative path.</xsl:message>
                        </xsl:otherwise>
                    </xsl:choose>-->
                    <xsl:for-each select="ancestor::*">
                       <!-- <xsl:if test="not(substring($path, 1, 1) = '/') and not(local-name() = 'body') ">-->

                        <!--<xsl:message>ancestor: <xsl:value-of select="local-name()" /></xsl:message>-->
                        <xsl:if test="(local-name() = 'repeat' or local-name() = 'group')">

                                <!--substring(@nodeset, 1, 1) = '/' or substring(@ref, 1, 1) = '/'
                                        )">-->
                            <!--<xsl:for-each select="descendant::*">
                                <xsl:if test="local-name() = 'group' or local-name() = 'repeat'">-->
                                <xsl:if test="string-length(@ref) &gt; 0 or string-length(@nodeset) &gt; 0">
                                    <xsl:value-of select="concat(@ref,@nodeset, '/')" />
                                </xsl:if>
                            <!--    </xsl:if>
                            </xsl:for-each>-->
                            <!-- not totally foolproof (will fail if nested group use both local and absolute paths) but probably okay, test this with multiple nested groups -->
                        </xsl:if>
                        <!--</xsl:if>-->
                    </xsl:for-each>
                </xsl:if>
                <xsl:value-of select="$path"/>
            </xsl:when>
            <!-- if a group without @ref but with an immediate repeat child is used (ODK Build) -->
            <xsl:when test="local-name() = 'group' and $input-node/xf:repeat/@nodeset">
                <xsl:value-of select="$input-node/xf:repeat/@nodeset" />
            </xsl:when>
            <!--<xsl:otherwise>
                <xsl:message>ERROR: Could not determine node path for <xsl:value-of select="local-name($input-node)" /></xsl:message>
            </xsl:otherwise>-->
        </xsl:choose>
    </xsl:template>

    <!--<xsl:template name="one-step-back">
        <xsl:param name="path" />
        <xsl:param name="node" />
        <xsl:variable name="newpath">
            <xsl:choose>
                <xsl:when test="parent::xf:repeat/@nodeset">
                    <xsl:value-of select="concat(ancestor::xf:repeat/@nodeset, '/', $path)" />
                </xsl:when>
                <xsl:when test="parent::xf:repeat/@ref">
                    <xsl:value-of select="concat(ancestor::xf:repeat/@ref, '/', $path)" />
                </xsl:when>
                <xsl:when test="parent::xf:group/@nodeset">
                    <xsl:value-of select="concat(ancestor::xf:group/@nodeset, '/', $path)" />
                </xsl:when>
                <xsl:when test="parent::xf:group/@ref">
                    <xsl:value-of select="concat(ancestor::xf:group/@ref, '/', $path)" />
                </xsl:when>
                <xsl:otherwise>
                    strictly speaking, if the parent group or repeat doesn't have a ref/nodeset, we should go
                    one level higher. Not implemented here.
                    <xsl:message>ERROR: Could not determine context node for relative path.</xsl:message>
                </xsl:otherwise>
            <xsl:choose>
        </xsl:variable>
        <xsl:if test="not(substring($path, 1, 1) = '/') and not(parent::h:body)">
            <xsl:call-template name="one-step-back" >
                <xsl:with-param name="path" select="$newpath"/>
                <xsl:with-param name="node" select="parent::*"/>
            </xsl:call-template>
        </xsl:if>
        <xsl:value-of select="$newpath" />
    </xsl:template>-->

    <xsl:template name="image">
        <xsl:param name="active"/>
        <xsl:param name="notext" />
        <xsl:param name="lang"/>
        <xsl:param name="id"/>
         <!-- add empty span for option-labels that have no text, just an image, to support the new radio buttons and checkboxes -->
         <xsl:if test="$notext = 'true'" >
             <span>
                 <xsl:attribute name="lang">
                     <xsl:value-of select="$lang"/>
                 </xsl:attribute>
                 <xsl:attribute name="class">
                     <xsl:value-of select="'option-label '"/>
                     <xsl:if test="string($active)">
                         <xsl:value-of select="$active"/>
                     </xsl:if>
                 </xsl:attribute>
                 <xsl:text>
                 </xsl:text>
             </span>
         </xsl:if>
         <img>
             <xsl:attribute name="lang">
                 <xsl:value-of select="$lang"/>
             </xsl:attribute>
             <xsl:if test="string($active)">
                 <xsl:attribute name="class">
                     <xsl:value-of select="$active" />
                 </xsl:attribute>
             </xsl:if>
             <xsl:attribute name="src">
                 <xsl:value-of select="." />
             </xsl:attribute>
             <xsl:attribute name="data-itext-id">
                <xsl:value-of select="$id"/>
            </xsl:attribute>
             <xsl:attribute name="alt">image</xsl:attribute>
         </img>
    </xsl:template>

    <xsl:template name="nodeset_used">
        <xsl:choose>
            <!-- first the simplest case (for preload or calculated fields taken from bind elements) -->
            <xsl:when test="local-name() = 'bind'">
                <!--<xsl:choose>-->
                    <!-- if nodeset value is relative -->
                    <!--<xsl:when test="not(substring(./@nodeset, 1, 1) = '/')">-->
                        <!-- start with the top level element of the instance, e.g. /data/ -->
                    <!--    <xsl:value-of select="concat('/', local-name(//xf:instance/child::*[1]), '/')" />
                    </xsl:when>
                    <xsl:otherwise />
                </xsl:choose>-->
                <xsl:value-of select="./@nodeset"/>
            </xsl:when>
            <!-- then for input elements -->
            <xsl:otherwise>
                <xsl:variable name="intermediate">
                    <xsl:choose>
                        <xsl:when test="not(local-name() = 'setvalue' or local-name() = 'setgeopoint') and ( local-name(..) = 'select1' or local-name(..) = 'select' )">
                            <xsl:call-template name="node-path-helper">
                                <xsl:with-param name="input-node" select=".." />
                            </xsl:call-template>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:call-template name="node-path-helper">
                                <xsl:with-param name="input-node" select="." />
                            </xsl:call-template>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:variable>
                <!-- now strip anything preceding a // which occurs e.g. in widgets.xml-->
                <!-- note that this goes only 1 level deep so is not reliable enough -->
                <xsl:choose>
                    <xsl:when test="contains($intermediate, '//')">
                        <xsl:value-of select="concat('/', substring-after($intermediate, '//'))"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="$intermediate"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template name="nodeset_absolute">
        <xsl:param name="nodeset_u"/>
        <xsl:variable name="nodeset_a">
            <xsl:choose>
                <xsl:when test="not(substring($nodeset_u, 1, 1) = '/')">
                    <xsl:value-of select="concat('/', local-name(key('primary-instance-root', true())[1]), '/', $nodeset_u)"/>
            <!--<xsl:message terminate="yes">ERROR: Could not determine absolute path/to/instance/node (terminated transformation), found: <xsl:value-of select="$nodeset" />.</xsl:message>-->
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="$nodeset_u" />
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:if test="not($nodeset_u = $nodeset_a)">
            <!--<xsl:message>INFO: changed relative nodeset: <xsl:value-of select="$nodeset_u"/> to: <xsl:value-of select="$nodeset_a" /></xsl:message>-->
        </xsl:if>
        <xsl:value-of select="$nodeset_a"/>
    </xsl:template>

    <xsl:template name="xml_type">
        <xsl:param name="nodeset" />
        <!--<xsl:param name="binding" />-->
        <xsl:variable name="xml_type">
            <!--<xsl:value-of select="$binding"/>-->
            <xsl:value-of select="key('nodeset-bindings', $nodeset)/@type" />
        </xsl:variable>
        <xsl:choose>
            <xsl:when test="string-length($xml_type) &lt; 1" >string</xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="strip_namespace">
                    <xsl:with-param name="string">
                        <xsl:value-of select="$xml_type"/>
                    </xsl:with-param>
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <!-- ONLY TO BE USED FOR INPUT ELEMENT TYPES -->
    <xsl:template name="html_type">
        <xsl:param name="xml_type" />
        <xsl:choose>
            <xsl:when test="local-name(..) = 'select1' or $xml_type='select1' or local-name(.) = 'trigger'">radio</xsl:when>
            <xsl:when test="local-name(..) = 'select' or $xml_type='select'">checkbox</xsl:when>
            <xsl:when test="local-name() = 'bind'">hidden</xsl:when>
            <xsl:when test="local-name() = 'range'">number</xsl:when>
            <xsl:when test="$xml_type = 'dateTime'">datetime-local</xsl:when>
            <xsl:when test="$xml_type = 'date'">date</xsl:when>
            <!-- note, it may not actually be possible to support 'file' with offline storage -->
            <xsl:when test="$xml_type = 'binary'">file</xsl:when>
            <xsl:when test="$xml_type = 'time'">time</xsl:when>
            <xsl:when test="$xml_type = 'rank'">text</xsl:when>
            <xsl:when
                test="$xml_type = 'decimal' or $xml_type = 'float' or $xml_type = 'double' or $xml_type = 'int' or $xml_type = 'integer'"
                >number</xsl:when>
            <xsl:when test="$xml_type = 'string' and contains(./@appearance, 'numbers')">tel</xsl:when>
            <xsl:when test="$xml_type = 'string'">text</xsl:when>
            <xsl:when test="$xml_type = 'barcode' or $xml_type = 'geopoint' or $xml_type = 'geotrace' or $xml_type = 'geoshape'" >
                <xsl:value-of select="string('text')" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$error"/>
                <xsl:message terminate="no">ERROR: Unsupported data type '<xsl:value-of select="$xml_type"/>' found.</xsl:message>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
`,Eu=`<?xml version="1.0" encoding="UTF-8"?>

<!--
*****************************************************************************************************
XSLT Stylesheet that transforms OpenRosa style (X)Forms instance to an xml instance that can be used
inside Enketo Smart Paper.
*****************************************************************************************************
-->

<!-- 
These namespace-declarations have been carefully crafted to produce a fairly clean output. 
This includes the duplicate default namespace and xf: prefixed namespace. 
Edit with care!
-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xf="http://www.w3.org/2002/xforms" 
    xmlns:h="http://www.w3.org/1999/xhtml" 
    xmlns:ev="http://www.w3.org/2001/xml-events" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns="http://www.w3.org/2002/xforms" version="1.0">
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" version="1.0" encoding="UTF-8" />

    <xsl:template match="/">
        <root>
            <model>
                <xsl:apply-templates select="//xf:model/@*" mode="include-namespace-declarations"/>
                <xsl:apply-templates select="//xf:model/xf:instance" />
            </model>
        </root>
    </xsl:template>

    <xsl:template match="xf:instance">
        <instance>
            <xsl:apply-templates select="@*"/>
            <!-- 
            This forces namespace declarations on the child of instance, which makes it easier to
            serialize that child for a submission without duplications of namespace declarations.
            -->
            <xsl:copy-of select="node()" />
        </instance>
    </xsl:template>

    <xsl:template match="@*">
        <xsl:attribute name="{name()}">
            <xsl:value-of select="." />
        </xsl:attribute>
    </xsl:template>

    <xsl:template match="@*" mode="include-namespace-declarations">
        <xsl:copy-of select="."/>
    </xsl:template>

</xsl:stylesheet>
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT: http://mattcg.mit-license.org/
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 */var Hze=ze,Wze=je,pg=k;k.ERR_NONEXISTENT=1;k.ERR_TAG=2;function k(a,e){var n,g,t,u;a=a.toLowerCase(),e=e.toLowerCase(),u=function(d,i){var o;throw o=new Error(i),o.code=d,o.subtag=a,o},n=Hze[a],n||u(k.ERR_NONEXISTENT,"Non-existent subtag '"+a+"'."),g=n[e],!g&&g!==0&&u(k.ERR_NONEXISTENT,"Non-existent subtag '"+a+"' of type '"+e+"'."),t=Wze[g],t.Subtag||u(k.ERR_TAG,"'"+a+"' is a '"+e+"' tag."),this.data={},this.data.subtag=a,this.data.record=t,this.data.type=e}k.prototype.type=function(){return this.data.type};k.prototype.descriptions=function(){return this.data.record.Description};k.prototype.preferred=function(){var a,e=this.data.record["Preferred-Value"];return e?(a=this.data.type,a==="extlang"&&(a="language"),new k(e,a)):null};k.prototype.script=function(){var a=this.data.record["Suppress-Script"];return a?new k(a,"script"):null};k.prototype.scope=function(){return this.data.record.Scope||null};k.prototype.deprecated=function(){return this.data.record.Deprecated||null};k.prototype.added=function(){return this.data.record.Added};k.prototype.comments=function(){return this.data.record.Comments||[]};k.prototype.format=function(){var a=this.data.subtag;switch(this.data.type){case"region":return a.toUpperCase();case"script":return a[0].toUpperCase()+a.substr(1)}return a};k.prototype.toString=function(){return this.format()};/**
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT: http://mattcg.mit-license.org/
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 */var Pe=ze,Yze=je,q=pg,Fze=b;b.ERR_DEPRECATED=1;b.ERR_NO_LANGUAGE=2;b.ERR_UNKNOWN=3;b.ERR_TOO_LONG=4;b.ERR_EXTRA_REGION=5;b.ERR_EXTRA_EXTLANG=6;b.ERR_EXTRA_SCRIPT=7;b.ERR_DUPLICATE_VARIANT=8;b.ERR_WRONG_ORDER=9;b.ERR_SUPPRESS_SCRIPT=10;b.ERR_SUBTAG_DEPRECATED=11;b.ERR_EXTRA_LANGUAGE=12;function b(a){var e;a=a.trim().toLowerCase(),this.data={},this.data.tag=a,e=Pe[a],e&&(e.grandfathered||e.redundant)&&(this.data.record=Yze[e.grandfathered||e.redundant])}b.prototype.preferred=function(){var a=this.data.record["Preferred-Value"];return a?new b(a):null};b.prototype.subtags=function(){var a,e=this.data,n=[];return e.record&&this.type()==="grandfathered"||(a=e.tag.split("-"),!a.length)||a.some(function(g,t){var u;if(g.length<2)return!0;if(u=Pe[g],!!u){if(t===0&&u.language!==void 0){n.push(new q(g,"language"));return}switch(g.length){case 2:u.region?n.push(new q(g,"region")):u.language&&n.push(new q(g,"language"));break;case 3:u.region?n.push(new q(g,"region")):u.extlang?n.push(new q(g,"extlang")):u.language&&n.push(new q(g,"language"));break;case 4:u.variant?n.push(new q(g,"variant")):u.script&&n.push(new q(g,"script"));break;default:u.variant&&n.push(new q(g,"variant"));break}}}),n};b.prototype.language=function(){return this.find("language")};b.prototype.region=function(){return this.find("region")};b.prototype.script=function(){return this.find("script")};b.prototype.find=function(a){var e,n,g,t=this.subtags();for(e=0,n=t.length;e<n;e++)if(g=t[e],g.type()===a)return g};b.prototype.valid=function(){return this.errors().length<1};b.prototype.errors=function(){var a,e,n=this.data,g=[];return a=function(t,u){var d,i;switch(t){case b.ERR_DEPRECATED:i="The tag '"+n.tag+"' is deprecated.",n.record["Preferred-Value"]&&(i+=" Use '"+n.record["Preferred-Value"]+"' instead.");break;case b.ERR_SUBTAG_DEPRECATED:i="The subtag '"+u+"' is deprecated.";break;case b.ERR_NO_LANGUAGE:n.tag?i="Missing language tag in '"+n.tag+"'.":i="Empty tag.";break;case b.ERR_UNKNOWN:i="Unknown code '"+u+"'";break;case b.ERR_TOO_LONG:i="The private-use subtag '"+u+"' is too long.";break;case b.ERR_EXTRA_LANGUAGE:case b.ERR_EXTRA_EXTLANG:case b.ERR_EXTRA_REGION:case b.ERR_EXTRA_SCRIPT:i="Extra "+u.type()+" subtag '"+u+"' found.";break;case b.ERR_DUPLICATE_VARIANT:i="Duplicate variant subtag '"+u+"' found.";break;case b.ERR_WRONG_ORDER:i="The subtag '"+u[0]+"' should not appear before '"+u[1]+"'.";break;case b.ERR_SUPPRESS_SCRIPT:i="The script subtag '"+u+"' is the same as the language suppress-script.";break}d=new Error(i),d.code=t,d.tag=n.tag,d.subtag=u,g.push(d)},n.record?(n.record.Deprecated&&a(b.ERR_DEPRECATED),g):(n.tag.split("-").some(function(t,u,d){var i;return t.length<2?(d.slice(u).forEach(function(o){o.length>8&&a(b.ERR_TOO_LONG,o)}),!0):(i=Pe[t],i||a(b.ERR_UNKNOWN,t),!1)}),e=this.subtags(),!e.length||e[0].type()!=="language"?(a(b.ERR_NO_LANGUAGE),g):(e.forEach(function(t,u){var d=t.type(),i,o,s=this;switch(t.deprecated()&&a(b.ERR_SUBTAG_DEPRECATED,t),s[d]&&s[d].push(t),d){case"language":s.language.length>1&&a(b.ERR_EXTRA_LANGUAGE,t);break;case"region":s.region.length>1&&a(b.ERR_EXTRA_REGION,t);break;case"extlang":s.extlang.length>1&&a(b.ERR_EXTRA_EXTLANG,t);break;case"script":s.script.length>1?a(b.ERR_EXTRA_SCRIPT,t):(i=e[0],i.type()==="language"&&(o=i.script(),o&&o.format()===t.format()&&a(b.ERR_SUPPRESS_SCRIPT,t)));break;case"variant":s.variant.length>1&&s.variant.some(function(l){return l.format()===t.format()})&&a(b.ERR_DUPLICATE_VARIANT,t)}},{language:[],extlang:[],variant:[],script:[],region:[]}),e.forEach(function(t,u,d){var i=this,o=d[u+1];o&&i[t.type()]>i[o.type()]&&a(b.ERR_WRONG_ORDER,[t,o])},{language:4,extlang:5,script:6,region:7,variant:8}),g))};b.prototype.type=function(){var a=this.data.record;return a?a.Type:"tag"};b.prototype.added=function(){var a=this.data.record;return a&&a.Added};b.prototype.deprecated=function(){var a=this.data.record;return a&&a.Deprecated};b.prototype.descriptions=function(){var a=this.data.record;return a&&a.Description?a.Description:[]};b.prototype.format=function(){var a=this.data.tag;return a.split("-").reduce(function(e,n,g,t){if(g===0)return n;if(t[g-1].length===1)return e+"-"+n;switch(n.length){case 2:return e+"-"+n.toUpperCase();case 4:return e+"-"+n[0].toUpperCase()+n.substr(1)}return e+"-"+n})};const Uze=4,Zze=7,Jze=10,Xze=11,Qze=26,aje=40,eje=42,nje=43,gje=52,tje=69,uje=74,dje=81,ije=89,oje=91,sje=92,lje=103,cje=104,rje=109,pje=112,bje=118,yje=122,Sje=127,Tje=128,Aje=129,Dje=134,mje=136,hje=143,xje=147,kje=154,fje=160,wje=178,vje=185,Mje=187,zje=188,jje=721,Pje=919,Lje=1038,Cje=1209,Kje=1460,qje=1764,Nje=1766,Bje=1818,Eje=1897,_je=2248,Gje=2446,Rje=2468,Vje=2579,Oje=2658,Ije=3046,$je=3360,Hje=3433,Wje=3450,Yje=3734,Fje=4048,Uje=4084,Zje=4634,Jje=5821,Xje=5928,Qje=6481,aPe=6754,ePe=8067,nPe=8238,gPe={ak:Uze,ar:Zze,ay:Jze,az:Xze,cr:Qze,et:aje,fa:eje,ff:nje,gn:gje,ik:tje,iu:uje,kg:dje,kr:ije,ku:oje,kv:sje,lv:lje,mg:cje,mn:rje,ms:pje,ne:bje,no:yje,oj:Sje,om:Tje,or:Aje,ps:Dje,qu:mje,sc:hje,sh:xje,sq:kje,sw:fje,uz:wje,yi:vje,za:Mje,zh:zje,bal:jje,bik:Pje,bnc:Lje,bua:Cje,chm:Kje,del:qje,den:Nje,din:Bje,doi:Eje,gba:_je,gon:Gje,grb:Rje,hai:Vje,hmn:Oje,jrb:Ije,kln:$je,kok:Hje,kpe:Wje,lah:Yje,luy:Fje,man:Uje,mwr:Zje,raj:Jje,rom:Xje,syr:Qje,tmh:aPe,zap:ePe,zza:nPe},tPe={"File-Date":"2022-06-28"};/**
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT: http://mattcg.mit-license.org/
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 */var Le=Fze,qa=pg,bg=ze,te=je,M=function(a){return new Le(a)},uPe=M;M.check=function(a){return new Le(a).valid()};M.types=function(a){var e=bg[a];return e?Object.keys(e).filter(function(n){return n!=="grandfathered"&&n!=="redundant"}):[]};M.subtags=function(a){var e=[];return Array.isArray(a)||(a=[a]),a.forEach(function(n){M.types(n).forEach(function(g){e.push(new qa(n,g))})}),e};M.filter=function(a){return a.filter(function(e){return!M.types(e).length})};M.search=function(a,e){var n;return typeof a.test=="function"?n=function(g){return a.test(g)}:a.toLowerCase()===a?n=function(g){return g.toLowerCase().indexOf(a)!==-1}:n=function(g){return g.indexOf(a)!==-1},te.filter(function(g){return!g.Subtag&&!e?!1:g.Description.some(n)}).sort(function(g,t){return Math.min.apply(Math,g.Description.filter(n).map(function(u){return u.length}))-Math.min.apply(Math,t.Description.filter(n).map(function(u){return u.length}))}).map(function(g){return g.Subtag?new qa(g.Subtag,g.Type):new Le(g.Tag)})};M.languages=function(a){var e,n,g,t=[];if(a=a.toLowerCase(),!gPe[a])throw new Error("'"+a+"' is not a macrolanguage.");for(e=0,n=te.length;e<n;e++)g=te[e],g.Macrolanguage===a&&t.push(new qa(g.Subtag,g.Type));return t};M.language=function(a){return M.type(a,"language")};M.region=function(a){return M.type(a,"region")};M.type=function(a,e){var n=bg[a.toLowerCase()];return n&&n[e]?new qa(a,e):null};M.date=function(){return tPe["File-Date"]};const yg=rg(uPe);var Sg={};(function(a){(function(){var e="‎",n="‏",g="ltr",t="rtl",u="bidi",d="",i={Hebrew:["0590","05FF"],Arabic:["0600","06FF"],NKo:["07C0","07FF"],Syriac:["0700","074F"],Thaana:["0780","07BF"],Tifinagh:["2D30","2D7F"]};function o(c){if(typeof c>"u")throw new Error("TypeError missing argument");if(typeof c!="string")throw new Error("TypeError getDirection expects strings");if(c==="")return d;if(c.indexOf(e)>-1&&c.indexOf(n)>-1)return u;if(c.indexOf(e)>-1)return g;if(c.indexOf(n)>-1)return t;var S=s(c,t),D=s(c,g);return S&&D?u:D?g:S?t:d}function s(c,S){var D,f,p,y,T=!1,x=!1,w=!1;for(w=c.search(/[0-9]/)>-1,c=c.replace(/[\s\n\0\f\t\v\'\"\-0-9\+\?\!]+/gm,""),D=0;D<c.length;D++){f=c.charAt(D),y=!1;for(p in i)i.hasOwnProperty(p)&&l(f,i[p][0],i[p][1])&&(T=!0,y=!0);y===!1&&(x=!0)}if(S===t)return T;if(S===g)return x||!T&&w}function l(c,S,D){var f=c.charCodeAt(0),p=parseInt(S,16),y=parseInt(D,16);return f>p&&f<y}function r(){String.prototype.getDirection=function(){return o(this.valueOf())}}a.getDirection=o,a.patch=r}).call(_u)})(Sg);const dPe=rg(Sg);class Fe{constructor(e,n,g,t){this.sourceLanguage=e,this.description=n,this.tag=g,this.directionality=t}}const Ue=(a,e)=>{const n=sPe(e);let g=a.trim(),t=g;const u=a.match(/^([^(]+)\((.*)\)\s*$/);if(u&&u.length>=2)return new Fe(a,u[1].trim(),u[2].trim(),n);const d=oPe(a.split("-")[0]);if(d==null){const i=iPe(g);typeof i=="object"&&i.data.subtag!=null&&(t=i.data.subtag)}else g=d.descriptions()[0];return new Fe(a,g,t,n)},iPe=a=>a.trim()===""?"":yg.search(a).find(Tg)??"",oPe=a=>a.trim()===""?null:yg.subtags(a).find(Tg)??null,Tg=a=>a.data.type==="language",sPe=a=>{const e=dPe.getDirection(a);return e!=="ltr"?"rtl":e},lPe=a=>a.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/&lt;\s?span([^/\n]*)&gt;((?:(?!&lt;\/).)+)&lt;\/\s?span\s?&gt;/gm,yPe).replace(/&lt;\s?sup(?:[^/\n]*)&gt;((?:(?!&lt;\/).)+)&lt;\/\s?sup\s?&gt;/gm,SPe).replace(/&lt;\s?sub(?:[^/\n]*)&gt;((?:(?!&lt;\/).)+)&lt;\/\s?sub\s?&gt;/gm,TPe).replace(/&/gm,"&amp;").replace(/\\\\/gm,"&92;").replace(/\\\*/gm,"&42;").replace(/\\_/gm,"&95;").replace(/\\#/gm,"&35;").replace(/__(.*?)__/gm,"<strong>$1</strong>").replace(/\*\*(.*?)\*\*/gm,"<strong>$1</strong>").replace(/_([^\s][^_\n]*)_/gm,"<em>$1</em>").replace(/\*([^\s][^*\n]*)\*/gm,"<em>$1</em>").replace(/\[([^\]]*)\]\(([^)]+)\)/gm,'<a href="$2" rel="noopener" target="_blank">$1</a>').replace(/^\s*(#{1,6})\s?([^#][^\n]*)(\n|$)/gm,cPe).replace(/^((\*|\+|-) (.*)(\n|$))+/gm,rPe).replace(/(\n([0-9]+\.) (.*))+$/gm,pPe).replace(/\n(<ul>)/gm,"$1").replace(/&35;/gm,"#").replace(/&95;/gm,"_").replace(/&92;/gm,"\\").replace(/&42;/gm,"*").replace(/&amp;/gm,"&").replace(/([^\n]+)\n{2,}/gm,bPe).replace(/([^\n]+)\n/gm,"$1<br>"),aa=a=>(e,...n)=>a(...n),cPe=aa((a,e)=>{const n=a.length;return`<h${n}>${e.replace(/#+$/,"")}</h${n}>`}),rPe=a=>`<ul>${a.replace(/(?:\*|\+|-)(.*)\n?/gm,Ag)}</ul>`,pPe=a=>{const e=a.match(/^\n?(?<start>[0-9]+)\./),n=e&&e.groups&&e.groups.start!=="1"?` start="${e.groups.start}"`:"",g=a.replace(/\n?(?:[0-9]+\.)(.*)/gm,Ag);return`<ol${n}>${g}</ol>`},Ag=aa(a=>`<li>${a.trim()}</li>`),bPe=aa(a=>{const e=a.trim();return/^<\/?(ul|ol|li|h|p|bl)/i.test(e)?a:`<p>${e}</p>`}),yPe=aa((a,e)=>`<span${APe(a)}>${e}</span>`),SPe=aa(a=>`<sup>${a}</sup>`),TPe=aa(a=>`<sub>${a}</sub>`),APe=a=>{const e=a.match(/( style=(["'])[^"']*\2)/);return e&&e.length?e[0]:""},j={xmlns:"http://www.w3.org/2002/xforms",orx:"http://openrosa.org/xforms",h:"http://www.w3.org/1999/xhtml",xsl:"http://www.w3.org/1999/XSL/Transform"},DPe="http://example.com",oa=a=>{const[e]=a.match(/^[a-z]+:/)??[],n=e!=null,g=n?a.replace(/^jr:\/*/,"http://"):`${DPe}/${a.replace(/^\//,"")}`,t=new URL(g);if(n)return t.href.replace("http:",e);const{pathname:u,search:d}=t;return`${a.startsWith("/")?u:u.replace(/^\//,"")}${d}`},Dg=(a,e)=>{const n=e.match(/jr:\/\/[\w-]+\/(.+)/);if(n==null)return oa(e);const g=oa(n[1]);return a[g]||oa(e)},mPe=a=>{},hPe=async a=>{const{xform:e,markdown:n,media:g,openclinica:t,theme:u}=a,d=t?{openclinica:1}:{},i=Object.fromEntries(Object.entries(g||{}).map(T=>T.map(oa))),o=new lg,s=o.parseFromString(Bu,"text/xml");let l=o.parseFromString(e,"text/xml");const r=mPe(a);if(typeof r=="function"){const{libxmljs:T}=await Ku(()=>import("./__vite-optional-peer-dep_libxslt_enketo-transformer-BIHI7g3E.js"),__vite__mapDeps([]));l=r.call(T,l)}fPe(l,i),PPe(l);const c=Ze(s,l,d);hg(c),Je(c,"setgeopoint"),Je(c,"setvalue"),LPe(c),wPe(c,u),ue(c,i);const S=vPe(c),D=n!==!1?zPe(c,i):wa(c),f=o.parseFromString(Eu,"text/xml"),p=Ze(f,l);KPe(f,l,p),ue(p,i),MPe(p);const y=wa(p);return delete a.xform,delete a.media,delete a.preprocess,delete a.markdown,delete a.openclinica,Object.assign(a,{form:D,model:y,languageMap:S,transformerVersion:"4.0.0"})},Ze=(a,e,n={})=>{const g=new qu;return g.importStylesheet(a),Object.entries(n).forEach(([t,u])=>{g.setParameter(null,t,u)}),g.transformToDocument(e)},xPe=a=>({lookupNamespaceURI:e=>a[e]??null}),kPe=a=>a.nodeType===Nu.DOCUMENT_NODE,mg=(a,e,n,g)=>{const t=g==null?null:xPe(g),u=kPe(a)?a:a.ownerDocument;if(u==null)throw new Error("Could not find owner document");return u.evaluate(e,a,t,n)},P=(a,e,n)=>{var g;const t=[],u=mg(a,e,cg.ORDERED_NODE_SNAPSHOT_TYPE,n);for(let d=0;d<(u.snapshotLength??0);d+=1)t.push((g=u.snapshotItem)==null?void 0:g.call(u,d));return t},z=(a,e,n)=>{const{singleNodeValue:g}=mg(a,e,cg.FIRST_ORDERED_NODE_TYPE,n);return g},fPe=(a,e)=>{P(a,'/h:html/h:head/xmlns:model/xmlns:bind[@type="binary"]',j).forEach(n=>{const g=n.getAttribute("nodeset");if(g){const t=`/h:html/h:head/xmlns:model/xmlns:instance${g.replace(/\//g,"/xmlns:")}`,u=z(a,t,j);if(u){const d=u.textContent??"";if(/^[a-zA-Z]+:\/\//.test(d)){const i=Dg(e,d),o=oa(d);u.setAttribute("src",i),u.textContent=o}}}})},Je=(a,e="setvalue")=>{P(a,`//*[contains(@class, "question")]//label/input[@data-${e}]`).forEach(n=>{const{parentElement:g}=n;if(g!=null){const t=n.cloneNode(!0);g.replaceWith(t)}}),P(a,`//label[contains(@class, "${e}")]/input[@data-${e}]`).forEach(n=>{var g;const t=n.getAttribute("name"),u=z(a,`//*[@name="${t}" and ( contains(../@class, 'question') or contains(../../@class, 'option-wrapper')) and not(@type='hidden')]`);u&&([`data-${e}`,"data-event"].forEach(d=>{u.setAttribute(d,n.getAttribute(d)??d)}),(g=n.parentElement)==null||g.remove())})},wPe=(a,e)=>{const n=/(theme-)[^"'\s]+/;if(!e)return;const g=z(a.documentElement,"/root/form");if(g==null)throw new Error("Form is missing");const t=g.getAttribute("class");t!=null&&n.test(t)?g.setAttribute("class",t.replace(n,`$1${e}`)):g.setAttribute("class",`${t??""} theme-${e}`)},ue=(a,e)=>{if(!e)return;P(a,"//*[@src] | //a[@href]").forEach(t=>{const u=t.nodeName.toLowerCase()==="a"?"href":"src",d=t.getAttribute(u);if(d==null)return;const i=Dg(e,d);i&&t.setAttribute(u,i)});const n=e["form_logo.png"],g=z(a,'//*[@class="form-logo"]');if(n&&g){const t=a.createElement("img");t.setAttribute("src",n),t.setAttribute("alt","form logo"),g.append(t)}},vPe=a=>{const e={},n=P(a,'/root/form/select[@id="form-languages"]/option'),g=n.map(u=>{const d=u.textContent??"";return Ue(d,Xe(a,d))});g.length===0&&g.push(Ue("",Xe(a,""))),n.forEach((u,d)=>{const i=u.getAttribute("value");i&&i!==g[d].tag&&(e[i]=g[d].tag),u.setAttribute("data-dir",g[d].directionality),u.setAttribute("value",g[d].tag),u.textContent=g[d].description}),g.forEach(({sourceLanguage:u,tag:d})=>{u!==d&&P(a,`/root/form//*[@lang="${u}"]`).forEach(i=>{i.setAttribute("lang",d)})});const t=z(a,"/root/form/*[@data-default-lang]");if(t){const u=t.getAttribute("data-default-lang");g.some(({sourceLanguage:d,tag:i})=>d===u?(t.setAttribute("data-default-lang",i),!0):!1)}return e},Xe=(a,e)=>{var n;const g=z(a,`/root/form//span[contains(@class, "or-hint") and @lang="${e}" and normalize-space() and not(./text() = '-')]`)||z(a,`/root/form//span[@lang="${e}" and normalize-space() and not(./text() = '-')]`);return((n=g?.textContent)==null?void 0:n.trim())||"nothing"},MPe=a=>{if(!z(a,"/xmlns:root/xmlns:model/xmlns:instance/*/xmlns:meta/xmlns:instanceID | /xmlns:root/xmlns:model/xmlns:instance/*/orx:meta/orx:instanceID",j)){const t=z(a,"/xmlns:root/xmlns:model/xmlns:instance/*",j),u=z(a,"/xmlns:root/xmlns:model/xmlns:instance/*/xmlns:meta",j),d=a.createElementNS(j.xmlns,"instanceID");if(u)u.append(d);else if(t){const i=a.createElementNS(j.xmlns,"meta");t.append(i),i.append(d)}}},zPe=(a,e)=>{const n={};P(a,'/root/form//span[contains(@class, "or-output")]').forEach((u,d)=>{const i=`---output-${d}`,o=u.firstChild.cloneNode(!0);n[i]=u.outerHTML,o.textContent=i,u.replaceWith(o)});const g=new lg;P(a,'/root/form//span[contains(@class, "question-label") or contains(@class, "or-hint")]').forEach((u,d)=>{let i;const o=u.textContent.replace("<","&lt;").replace(">","&gt;");let s=lPe(o);if(o!==s){const l=g.parseFromString(`<root class="temporary-root">${s}</root>`,"text/html");hg(l),ue(l,e),s=wa(l),i=`$$$${d}`,n[i]=s,u.textContent=i}});let t=wa(a);return Object.keys(n).reverse().forEach(u=>{const d=n[u];d&&(t=t.replace(u,()=>d))}),t},wa=a=>{const{outerHTML:e}=a.documentElement;return e.replace(/^<[^>]+>/,"").replace(/<\/[^>]+>(?!.|\n)$/,"")},hg=a=>{const{documentElement:e}=a;if(e.nodeName.toLowerCase()==="html"){const n=z(a,"/html/body/root");if(n==null)throw new Error("Missing root node.");e.replaceWith(n)}},Ga=(a,e)=>a.split(e,1)[0],Da=(a,e)=>a.substring(a.indexOf(e)+e.length),jPe=a=>a.replace(/\[.*?\]/g,""),PPe=a=>{P(a,"//xmlns:itemset",j).forEach(n=>{const g=z(n,"./xmlns:value",j),t=g?.getAttribute("ref")??"",u=z(n,"./xmlns:label",j),d=u?.getAttribute("ref")??"",i=n.getAttribute("nodeset")??"",o=Ga(Da(i,"instance("),")");let s;const l=i.includes("randomize(");l&&i.includes(",")?s=Ga(Da(i,")"),","):l?s=Ga(Da(i,")"),")"):s=Da(i,")");const r=s.replace(/\//g,"/xf:"),c=jPe(r),D=`/h:html/h:head/xf:model/xf:instance[@id="${o.substring(1,o.length-1)}"]${c}`;n.setAttribute("valueRef",t),n.setAttribute("labelRef",d),n.setAttribute("itextPath",`${D}`);const[,f]=d.match(/itext\((.*)\)/)??[];if(f!=null){const p=`${D.replace(/\/xf:/g,"/xmlns:")}/*[name() = "${f}"]`,y=P(a,p,j);n.append(...y.map(T=>T.cloneNode(!0)))}})},LPe=a=>{P(a,"//*[@data-appearances]").forEach(n=>{var g,t,u;const d=n.hasAttribute("data-appearances-select-type");d&&n.removeAttribute("data-appearances-select-type");const o=(((g=n.getAttribute("data-appearances"))==null?void 0:g.trim().toLowerCase().split(/\s+/))??[]).flatMap(r=>{const c=[`or-appearance-${r}`];return d&&(r==="horizontal"&&c.push("or-appearance-columns"),r==="horizontal-compact"&&c.push("or-appearance-columns-pack"),r==="compact"&&c.push("or-appearance-columns-pack","or-appearance-no-buttons"),r.startsWith("compact-")&&c.push(r.replace("compact-",""),"or-appearance-no-buttons")),c}),l=(((u=(t=n.getAttribute("class"))==null?void 0:t.trim())==null?void 0:u.split(/\s+/))??[]).flatMap(r=>r==="or-appearances-placeholder"?o:r).join(" ");n.setAttribute("class",l),n.removeAttribute("data-appearances")})},CPe="http://www.w3.org/2000/xmlns/",KPe=(a,e,n)=>{var g;if(typeof document>"u")return;const{documentElement:t}=a,u=P(n,"/xmlns:root/xmlns:model/xmlns:instance/*",j),d=(g=u[0].parentElement)==null?void 0:g.parentElement,i=z(e,"/h:html/h:head/xmlns:model",j);if(d==null||i==null)throw new Error("XForm is missing a model element.");u.forEach(o=>{const s=[...i.attributes].filter(({name:r})=>r!=="xmlns"&&!r.startsWith("xmlns:")).map(({namespaceURI:r})=>r);[...e.documentElement.attributes].filter(({name:r,value:c})=>(r==="xmlns"||r.startsWith("xmlns:"))&&!t.hasAttribute(r)&&!s.includes(c)&&!o.hasAttribute(r)).forEach(({name:r,value:c})=>{o.setAttributeNS(CPe,r,c)})})};window.Alpine=Me;const qPe=await fetch("/contactLog.xml"),NPe=await qPe.text(),BPe=await hPe({xform:NPe});Me.data("app",()=>({payload:BPe}));Me.start();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}