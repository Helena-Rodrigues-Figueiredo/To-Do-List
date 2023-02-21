(function(){"use strict";var e={4586:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t,n,r,i,a){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var a={name:"App"},s=n(89);const u=(0,s.Z)(a,[["render",i]]);var c=u,l=n(2483);function d(e,t,n,r,i,a){const s=(0,o.up)("Login");return(0,o.wg)(),(0,o.j4)(s)}var f=n.p+"img/todolist_img.ae3cf288.svg";const p=e=>((0,o.dD)("data-v-0510ec62"),e=e(),(0,o.Cn)(),e),m={class:"container-fluid"},h={class:"row content"},v=p((()=>(0,o._)("div",{class:"col-md-6 mb-5"},[(0,o._)("img",{src:f,class:"img-fluid",alt:"cart"})],-1))),g={class:"col-md-5 form"},b=p((()=>(0,o._)("h3",{class:"signin-text fs-1"},"TO-DO LIST",-1))),y={class:"form-group mb-3"},_={class:"form-group mb-3"},w=p((()=>(0,o._)("div",{class:"d-grid mb-1"},[(0,o._)("button",{type:"submit",class:"btn btn-primary"}," Login ")],-1))),O={class:"d-grid"};function k(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",h,[v,(0,o._)("div",g,[b,(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)(((...e)=>s.handleLogin&&s.handleLogin(...e)),["prevent"]))},[(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),class:"form-control",placeholder:"Insira seu email"},null,512),[[r.nr,a.email]])]),(0,o._)("div",_,[(0,o.wy)((0,o._)("input",{type:"password",name:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),placeholder:"Insira sua senha"},null,512),[[r.nr,a.password]])]),w,(0,o._)("div",O,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>s.registerUser&&s.registerUser(...e))}," Cadastre-se ")])],32)])])])}n(7658);var C=n(3190),E={name:"Login",data(){return{email:"",password:""}},methods:{async handleLogin(){try{const e={password:this.password,email:this.email},t=await C.Z.post("/",e);200===t?.status&&(localStorage.setItem("userData",JSON.stringify(t.data)),this.$router.push("/tasks"))}catch(e){alert(e?.response?.data.message)}},registerUser(){this.$router.push("/user")}}};const L=(0,s.Z)(E,[["render",k],["__scopeId","data-v-0510ec62"]]);var S=L,j={components:{Login:S}};const A=(0,s.Z)(j,[["render",d]]);var P=A;const T=[{path:"/",name:"login",component:P},{path:"/user",name:"user",component:()=>n.e(759).then(n.bind(n,6622))},{path:"/tasks",name:"tasks",component:()=>n.e(916).then(n.bind(n,3916))}],N=(0,l.p7)({history:(0,l.PO)("/to-do-list-frontend/"),routes:T});var U=N,I=n(65),x=(0,I.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),D=n(3455),Z=n.n(D),B=n(3494),M=n(7749),V=n(8539);B.vI.add(V.mXR,V.Xcf,V.$aW),(0,r.ri)(c).component("font-awesome-icon",M.GN).use(x).use(Z()).use(U).mount("#app")},3190:function(e,t,n){var r=n(5939);const o="localhost:3001",i={NODE_ENV:"production",VUE_APP_API_HOST:"localhost:3001",BASE_URL:"/to-do-list-frontend/"}.VUE_APP_API_PROTOCOL||"http",a=r.Z.create({baseURL:`${i}://${o}`,headers:{"Content-type":"application/json"}});t["Z"]=a}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{759:"cb09964f",916:"a66cbd00"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{759:"c55baf5d",916:"3ecc5797"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/to-do-list-frontend/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={759:1,916:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4586)}));r=n.O(r)})();
//# sourceMappingURL=app.46fd7897.js.map