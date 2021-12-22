(()=>{"use strict";var e,t={241:(e,t,l)=>{var a=l(628),o=l(975);const n=(0,o.uE)('<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3"><span class="navbar-brand mb-0">Vue.js Loading Overlay</span><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="https://github.com/ankurk91/vue-loading-overlay" target="_blank"> GitHub</a></li></ul></nav>',1),i={class:"container"},r={class:"row"},s={class:"col-md-8"},c=(0,o.uE)('<aside class="col-md-4 mb-3"><div class="card"><div class="card-header"> Links</div><div class="card-body"><ul><li><a href="https://github.com/ankurk91/vue-loading-overlay" target="_blank">GitHub</a></li><li><a href="https://www.npmjs.com/package/vue-loading-overlay" target="_blank">npm</a></li></ul></div></div></aside>',1),u=(0,o._)("footer",{class:"text-center text-muted small mb-3"},[(0,o.Uk)(" Created by "),(0,o._)("a",{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"},"@ankurk91")],-1);var d=l(104);const m={class:"card vld-parent mb-3"},h=(0,o._)("h3",null,"Loading ...",-1),p={class:"card-body"},g=(0,o._)("h5",{class:"card-title"},"Use as component",-1),b={class:"form-group m-0"},f=(0,o._)("label",null,"Loader shape",-1),v={class:"custom-control custom-checkbox"},w=(0,o._)("label",{class:"custom-control-label",for:"input-full-page-1"},"Full page?",-1),y={class:"custom-control custom-checkbox"},_=(0,o._)("label",{class:"custom-control-label",for:"input-cancel-1"},"User can cancel?",-1),k={class:"custom-control custom-checkbox"},C=(0,o._)("label",{class:"custom-control-label",for:"input-slot-1"},"Use slot? (replace shape)",-1),x={class:"form-group m-0"},S=(0,o._)("label",null,"Color",-1),U={class:"form-group m-0"},L=(0,o._)("label",null,"Background color",-1),N={class:"form-group"},P=(0,o._)("label",null,"Height",-1),M=(0,o.Uk)(),F={class:"text-muted"},T={class:"form-group"},V=(0,o._)("label",null,"Width",-1),j=(0,o.Uk)(),E={class:"text-muted"},O={class:"form-group mt-3"};function $(e,t,l){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=(0,o.h)(e,t,n),r=document.createElement("div");return r.classList.add("vld-container"),l.appendChild(r),(0,a.sY)(i,r),i.component}const B="undefined"!=typeof window?window.HTMLElement:Object,z=["aria-busy"],Z={class:"vld-icon"};const D={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive)return;if(e.target===this.$refs.root||this.$refs.root.contains(e.target))return;let t=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},I=["width","height","stroke"],W=[(0,o.uE)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];const A=(0,o.aZ)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var H=l(553);const X=(0,H.Z)(A,[["render",function(e,t,l,a,n,i){return(0,o.wg)(),(0,o.iD)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},W,8,I)}]]),Y=["fill","width","height"],G=[(0,o.uE)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];const K=(0,o.aZ)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),q=(0,H.Z)(K,[["render",function(e,t,l,a,n,i){return(0,o.wg)(),(0,o.iD)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},G,8,Y)}]]),J=["height","width","fill"],Q=[(0,o.uE)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];const R=(0,o.aZ)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),ee={Spinner:X,Dots:q,Bars:(0,H.Z)(R,[["render",function(e,t,l,a,n,i){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},Q,8,J)}]])},te=(0,o.aZ)({name:"vue-loading",mixins:[D],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,B],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:ee,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((()=>{const e=this.$refs.root.parentElement;var t,l;(0,a.sY)(null,e),void 0!==(t=e).remove?t.remove():null===(l=t.parentNode)||void 0===l||l.removeChild(t)}),150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(e){27===e.keyCode&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),le=(0,H.Z)(te,[["render",function(e,t,l,n,i,r){return(0,o.wg)(),(0,o.j4)(a.uT,{ref:"root",name:e.transition},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",{tabindex:"0",class:(0,d.C_)(["vld-overlay is-active",{"is-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,d.j5)({zIndex:e.zIndex})},[(0,o._)("div",{class:"vld-background",onClick:t[0]||(t[0]=(0,a.iM)((function(){return e.cancel&&e.cancel(...arguments)}),["prevent"])),style:(0,d.j5)(e.bgStyle)},null,4),(0,o._)("div",Z,[(0,o.WI)(e.$slots,"before"),(0,o.WI)(e.$slots,"default",{},(()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))])),(0,o.WI)(e.$slots,"after")])],14,z),[[a.F8,e.isActive]])])),_:3},8,["name"])}]]);function ae(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{show(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;const o=Object.assign({},e,l,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let n=o.container;o.container||(n=document.body,o.isFullPage=!0);const i=Object.assign({},t,a);return{hide:$(le,o,n,i).ctx.hide}}}}le.install=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=ae(t,l);e.config.globalProperties.$loading=a,e.provide("$loading",a)};const oe=le;let ne=null;const ie={data:()=>({isLoading:!1,fullPage:!0,canCancel:!0,useSlot:!1,loader:"spinner",color:"#007bff",bgColor:"#ffffff",height:128,width:128,timeout:3e3}),components:{Loading:oe},methods:{simulate(){this.isLoading=!0,ne=setTimeout((()=>{this.isLoading=!1}),this.timeout)},whenCancelled(){clearTimeout(ne)}}},re=(0,H.Z)(ie,[["render",function(e,t,l,n,i,r){const s=(0,o.up)("loading");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(s,{active:i.isLoading,"onUpdate:active":t[0]||(t[0]=e=>i.isLoading=e),"can-cancel":i.canCancel,"on-cancel":r.whenCancelled,"is-full-page":i.fullPage,height:i.height,width:i.width,color:i.color,loader:i.loader,"background-color":i.bgColor},(0,o.Nv)({_:2},[i.useSlot?{name:"default",fn:(0,o.w5)((()=>[h]))}:void 0]),1032,["active","can-cancel","on-cancel","is-full-page","height","width","color","loader","background-color"]),(0,o._)("div",p,[g,(0,o._)("div",b,[f,(0,o.wy)((0,o._)("select",{class:"form-control-sm text-capitalize","onUpdate:modelValue":t[1]||(t[1]=e=>i.loader=e)},[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(["spinner","dots","bars"],(e=>(0,o._)("option",null,(0,d.zw)(e),1))),64))],512),[[a.bM,i.loader]])]),(0,o._)("div",v,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-full-page-1","onUpdate:modelValue":t[2]||(t[2]=e=>i.fullPage=e)},null,512),[[a.e8,i.fullPage]]),w]),(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-cancel-1","onUpdate:modelValue":t[3]||(t[3]=e=>i.canCancel=e)},null,512),[[a.e8,i.canCancel]]),_]),(0,o._)("div",k,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-slot-1","onUpdate:modelValue":t[4]||(t[4]=e=>i.useSlot=e)},null,512),[[a.e8,i.useSlot]]),C]),(0,o._)("div",x,[S,(0,o.wy)((0,o._)("input",{type:"color","onUpdate:modelValue":t[5]||(t[5]=e=>i.color=e)},null,512),[[a.nr,i.color]])]),(0,o._)("div",U,[L,(0,o.wy)((0,o._)("input",{type:"color","onUpdate:modelValue":t[6]||(t[6]=e=>i.bgColor=e)},null,512),[[a.nr,i.bgColor]])]),(0,o._)("div",N,[P,(0,o.wy)((0,o._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[7]||(t[7]=e=>i.height=e)},null,512),[[a.nr,i.height,void 0,{number:!0}]]),M,(0,o._)("span",F,(0,d.zw)(i.height),1)]),(0,o._)("div",T,[V,(0,o.wy)((0,o._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[8]||(t[8]=e=>i.width=e)},null,512),[[a.nr,i.width,void 0,{number:!0}]]),j,(0,o._)("span",E,(0,d.zw)(i.width),1)]),(0,o._)("div",O,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t[9]||(t[9]=(0,a.iM)((function(){return r.simulate&&r.simulate(...arguments)}),["prevent"]))},"Show loader")])])])}]]),se={class:"card vld-parent mb-3",ref:"formContainer"},ce={class:"card-body"},ue=(0,o._)("h5",{class:"card-title"},"Use as plugin",-1),de={class:"form-group m-0"},me=(0,o._)("label",null,"Loader shape",-1),he={class:"custom-control custom-checkbox"},pe=(0,o._)("label",{class:"custom-control-label",for:"input-full-page-2"},"Full page?",-1),ge={class:"custom-control custom-checkbox"},be=(0,o._)("label",{class:"custom-control-label",for:"input-cancel-2"},"User can cancel?",-1),fe={class:"custom-control custom-checkbox"},ve=(0,o._)("label",{class:"custom-control-label",for:"input-slot-2"},"Use slot? (replace shape)",-1),we={class:"form-group m-0"},ye=(0,o._)("label",null,"Color",-1),_e={class:"form-group m-0"},ke=(0,o._)("label",null,"Background color",-1),Ce={class:"form-group"},xe=(0,o._)("label",null,"Height",-1),Se=(0,o.Uk)(),Ue={class:"text-muted"},Le={class:"form-group"},Ne=(0,o._)("label",null,"Width",-1),Pe=(0,o.Uk)(),Me={class:"text-muted"},Fe={class:"form-group mt-3"};let Te=null;const Ve={data:()=>({fullPage:!0,canCancel:!0,useSlot:!1,loader:"dots",timeout:3e3,color:"#00ab00",bgColor:"#4b4b4b",height:64,width:64}),mounted(){},methods:{simulate(){let e=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:this.canCancel,onCancel:this.whenCancelled,color:this.color,backgroundColor:this.bgColor,height:this.height,width:this.width,loader:this.loader,opacity:.3},this.exampleSlots);Te=setTimeout((()=>{e&&e.hide()}),this.timeout)},whenCancelled(){clearTimeout(Te)}},computed:{exampleSlots(){return this.useSlot?{default:(0,o.h)("h3",{class:"custom-slot"},"Please Wait ...")}:{}}}},je={name:"app",data:()=>({}),components:{ComponentExample:re,PluginExample:(0,H.Z)(Ve,[["render",function(e,t,l,n,i,r){return(0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("div",ce,[ue,(0,o._)("div",de,[me,(0,o.wy)((0,o._)("select",{class:"form-control-sm text-capitalize","onUpdate:modelValue":t[0]||(t[0]=e=>i.loader=e)},[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(["spinner","dots","bars"],(e=>(0,o._)("option",null,(0,d.zw)(e),1))),64))],512),[[a.bM,i.loader]])]),(0,o._)("div",he,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-full-page-2","onUpdate:modelValue":t[1]||(t[1]=e=>i.fullPage=e)},null,512),[[a.e8,i.fullPage]]),pe]),(0,o._)("div",ge,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-cancel-2","onUpdate:modelValue":t[2]||(t[2]=e=>i.canCancel=e)},null,512),[[a.e8,i.canCancel]]),be]),(0,o._)("div",fe,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"input-slot-2","onUpdate:modelValue":t[3]||(t[3]=e=>i.useSlot=e)},null,512),[[a.e8,i.useSlot]]),ve]),(0,o._)("div",we,[ye,(0,o.wy)((0,o._)("input",{type:"color","onUpdate:modelValue":t[4]||(t[4]=e=>i.color=e)},null,512),[[a.nr,i.color]])]),(0,o._)("div",_e,[ke,(0,o.wy)((0,o._)("input",{type:"color","onUpdate:modelValue":t[5]||(t[5]=e=>i.bgColor=e)},null,512),[[a.nr,i.bgColor]])]),(0,o._)("div",Ce,[xe,(0,o.wy)((0,o._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[6]||(t[6]=e=>i.height=e)},null,512),[[a.nr,i.height,void 0,{number:!0}]]),Se,(0,o._)("span",Ue,(0,d.zw)(i.height),1)]),(0,o._)("div",Le,[Ne,(0,o.wy)((0,o._)("input",{type:"range",min:"10",step:"5",max:"256","onUpdate:modelValue":t[7]||(t[7]=e=>i.width=e)},null,512),[[a.nr,i.width,void 0,{number:!0}]]),Pe,(0,o._)("span",Me,(0,d.zw)(i.width),1)]),(0,o._)("div",Fe,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t[8]||(t[8]=(0,a.iM)((function(){return r.simulate&&r.simulate(...arguments)}),["prevent"]))},"Show loader")])])],512)}]])},methods:{}},Ee=(0,H.Z)(je,[["render",function(e,t,l,a,d,m){const h=(0,o.up)("component-example"),p=(0,o.up)("plugin-example");return(0,o.wg)(),(0,o.iD)("div",null,[n,(0,o._)("main",i,[(0,o._)("div",r,[(0,o._)("div",s,[(0,o.Wm)(h),(0,o.Wm)(p)]),c])]),u])}]]),Oe=(0,a.ri)(Ee);Oe.mount("#app"),Oe.use(oe)}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,o,n)=>{if(!l){var i=1/0;for(u=0;u<e.length;u++){for(var[l,o,n]=e[u],r=!0,s=0;s<l.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,[i,r,s]=l,c=0;if(i.some((t=>0!==e[t]))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(s)var u=s(a)}for(t&&t(l);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0;return a.O(u)},l=self.webpackChunkvue_loading_overlay=self.webpackChunkvue_loading_overlay||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[679],(()=>a(241)));o=a.O(o)})();