(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["terms"],{"9e55":function(e,t,n){"use strict";var c=n("f2bf");const o={class:"p-4"},a={class:"max-w-7xl 3xl:max-w-8xl mx-auto"},l={class:"flex flex-col md:flex-row space-x-0 md:space-x-4"},r={class:"w-full mb-4 md:mb-0 bg-white dark:bg-gray-800 rounded shadow p-4",style:{"min-height":"calc(100vh - 351px)"}};function s(e,t,n,s,d,b){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",r,[Object(c["renderSlot"])(e.$slots,"default")])])])])}var d={name:"CenteredLayout"},b=n("6b0d"),u=n.n(b);const i=u()(d,[["render",s]]);t["a"]=i},bd91:function(e,t,n){"use strict";n.r(t);var c=n("f2bf");const o=["innerHTML"];function a(e,t,n,a,l,r){const s=Object(c["resolveComponent"])("centered-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",{innerHTML:a.text},null,8,o)]),_:1})}var l=n("9e55"),r={name:"Terms",components:{CenteredLayout:l["a"]},setup(){const e=Object(c["inject"])("translate"),t=Object(c["inject"])("http"),n=Object(c["ref"])(null);return Object(c["onBeforeMount"])(()=>{const e="https://app.cointopay.com";t.get(e+"/V2Processor?Terms=&locale=EN").then(e=>{const t=e.data.data;n.value=t.join("")}).catch(e=>{console.log(e)})}),{translate:e,text:n}}},s=n("6b0d"),d=n.n(s);const b=d()(r,[["render",a]]);t["default"]=b}}]);
//# sourceMappingURL=terms.da43fe43.js.map