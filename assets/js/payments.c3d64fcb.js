(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["payments"],{"82a2":function(e,t,n){},"9e55":function(e,t,n){"use strict";var c=n("f2bf");const a={class:"p-4"},o={class:"max-w-7xl 3xl:max-w-8xl mx-auto"},s={class:"flex flex-col md:flex-row space-x-0 md:space-x-4"},r={class:"w-full mb-4 md:mb-0 bg-white dark:bg-gray-800 rounded shadow p-4",style:{"min-height":"calc(100vh - 351px)"}};function l(e,t,n,l,d,u){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",r,[Object(c["renderSlot"])(e.$slots,"default")])])])])}var d={name:"CenteredLayout"},u=n("6b0d"),b=n.n(u);const i=b()(d,[["render",l]]);t["a"]=i},a459:function(e,t,n){"use strict";n("82a2")},b755:function(e,t,n){"use strict";n.r(t);var c=n("f2bf");const a=["innerHTML"];function o(e,t,n,o,s,r){const l=Object(c["resolveComponent"])("centered-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(l,null,{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",{innerHTML:o.text},null,8,a)]),_:1})}var s=n("9e55"),r={name:"Payments",components:{CenteredLayout:s["a"]},setup(){const e=Object(c["inject"])("translate"),t=Object(c["inject"])("http"),n=Object(c["ref"])("");return Object(c["onBeforeMount"])(()=>{const e="https://app.cointopay.com";t.get(e+"/V2Processor?Payments=&locale=EN").then(e=>{200===e.data.status_code&&e.data.data.forEach(e=>{n.value+=e})}).catch(e=>{console.log(e)})}),{translate:e,text:n}}},l=(n("a459"),n("6b0d")),d=n.n(l);const u=d()(r,[["render",o],["__scopeId","data-v-4b711ea4"]]);t["default"]=u}}]);
//# sourceMappingURL=payments.c3d64fcb.js.map