(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newsletter"],{"9e55":function(e,t,r){"use strict";var a=r("f2bf");const c={class:"p-4"},o={class:"max-w-7xl 3xl:max-w-8xl mx-auto"},l={class:"flex flex-col md:flex-row space-x-0 md:space-x-4"},s={class:"w-full mb-4 md:mb-0 bg-white dark:bg-gray-800 rounded shadow p-4",style:{"min-height":"calc(100vh - 351px)"}};function n(e,t,r,n,i,d){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[Object(a["renderSlot"])(e.$slots,"default")])])])])}var i={name:"CenteredLayout"},d=r("6b0d"),b=r.n(d);const m=b()(i,[["render",n]]);t["a"]=m},e134:function(e,t,r){"use strict";r.r(t);var a=r("f2bf");const c={class:"card"},o={class:"title"},l=Object(a["createElementVNode"])("hr",{class:"border-gray-300 dark:border-gray-600"},null,-1),s={class:"body"},n={class:"grid grid-cols-2"},i={class:"col-span-2 lg:col-span-1"},d={class:"mb-2"},b={class:"text-red-500 text-sm"},m={class:"text-red-500 text-sm"},u={class:"mt-4 text-right"},p={key:0,class:"mr-3"},j={key:0,class:"mr-3"};function h(e,t,r,h,O,f){const v=Object(a["resolveComponent"])("vue-recaptcha"),g=Object(a["resolveComponent"])("icon"),w=Object(a["resolveComponent"])("j-button"),y=Object(a["resolveComponent"])("centered-layout");return Object(a["openBlock"])(),Object(a["createBlock"])(y,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("h5",null,Object(a["toDisplayString"])(h.translate("newsletter.title")),1)]),l,Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("form",null,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("label",null,Object(a["toDisplayString"])(h.translate("newsletter.email")),1),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.email=t),autocomplete:"off",class:"form-input w-full",type:"email"},null,512),[[a["vModelText"],e.form.email]]),Object(a["createElementVNode"])("div",b,Object(a["toDisplayString"])(h.showError(e.errorBag,"email")),1)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(v,{ref:"vueRecaptcha",siteKey:e.reCaptchaAPIKey,theme:h.mode,size:"normal",onExpire:h.recaptchaExpired,onFail:h.recaptchaFailed,onVerify:h.recaptchaVerified},null,8,["siteKey","theme","onExpire","onFail","onVerify"]),Object(a["createElementVNode"])("div",m,Object(a["toDisplayString"])(h.showError(e.errorBag,"reCaptcha")),1)]),Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(w,{disabled:""!==e.loader,class:"mb-2 md:mb-0 mr-3",type:"button",buttonStyle:"danger",onClick:t[1]||(t[1]=e=>h.unSubscribe())},{default:Object(a["withCtx"])(()=>["unsub"===e.loader?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,[Object(a["createVNode"])(g,{name:"spinner",classes:"w-4 h-4 text-white"})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(h.translate("newsletter.un_subscribe")),1)]),_:1},8,["disabled"]),Object(a["createVNode"])(w,{disabled:""!==e.loader,type:"button",onClick:t[2]||(t[2]=e=>h.subscribe())},{default:Object(a["withCtx"])(()=>["sub"===e.loader?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,[Object(a["createVNode"])(g,{name:"spinner",classes:"w-4 h-4 text-white"})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(h.translate("newsletter.subscribe")),1)]),_:1},8,["disabled"])])])])])])])]),_:1})}var O=r("9e55"),f=r("4032"),v=r("cdae"),g=r("d4df"),w=r.n(g),y=r("ea45"),C=r("2e13"),E=r("5502"),V={name:"Newsletter",components:{CenteredLayout:O["a"],JButton:f["a"],Icon:v["a"],vueRecaptcha:w.a},setup(){const e=Object(a["ref"])(null),t=Object(a["inject"])("translate"),r=Object(a["inject"])("http"),c=Object(a["inject"])("toast"),o=Object(E["b"])(),{validate:l,showError:s}=Object(y["a"])(),{saveNotification:n}=Object(C["a"])(),i=Object(a["reactive"])({reCaptchaAPIKey:"6LdOLTEUAAAAAGDKKH5DMUQbW8PtXjimV6ZDrBKr",form:{email:"",reCaptcha:"",output:"json"},errorBag:{},rules:{email:["required","email"],reCaptcha:["required"]},messages:{email:{required:"Email address is required",email:"Please provide a valid email address"},reCaptcha:{required:"Verify you are not a robot"}},loader:""}),d=Object(a["computed"])(()=>o.state.mode);Object(a["watch"])(()=>({...i.form}),(e,t)=>{Object.keys(i.errorBag).length>0&&(i.errorBag=l(i.form,i.rules,i.messages))});const b="https://app.cointopay.com",m=e=>{i.form.reCaptcha=e},u=()=>{e.value.reset(),i.form.reCaptcha=""},p=()=>{},j=()=>{if(i.errorBag=l(i.form,i.rules,i.messages),0===Object.keys(i.errorBag).length){i.loader="sub";const t={Subscriber:i.form.email,"g-recaptcha-response":i.form.reCaptcha};r.get(b+"/Subscribe",{params:t}).then(t=>{i.loader="",200===t.status&&(c.success("Congratulations! You have subscribed to the Cointopay newsletter."),n("Congratulations! You have subscribed to the Cointopay newsletter."),e.value&&e.value.reset(),i.form={email:"",reCaptcha:""})}).catch(t=>{console.log(t),c.error("Internal Server Error"),i.loader="",e.value&&e.value.reset(),i.form.reCaptcha=""})}},h=()=>{if(i.errorBag=l(i.form,i.rules,i.messages),0===Object.keys(i.errorBag).length){i.loader="unsub";const t={Unsubscriber:i.form.email,"g-recaptcha-response":i.form.reCaptcha};r.get(b+"/Subscribe",{params:t}).then(t=>{i.loader="",200===t.status&&(c.success("Congratulations! You have unsubscribed from Cointopay newsletter."),n("Congratulations! You have unsubscribed from Cointopay newsletter."),e.value.reset(),i.form={email:"",reCaptcha:""})}).catch(t=>{console.log(t),c.error("Internal Server Error"),i.loader="",e.value.reset(),i.form.reCaptcha=""})}};return{translate:t,...Object(a["toRefs"])(i),vueRecaptcha:e,mode:d,showError:s,recaptchaVerified:m,recaptchaExpired:u,recaptchaFailed:p,subscribe:j,unSubscribe:h}}},N=r("6b0d"),x=r.n(N);const k=x()(V,[["render",h]]);t["default"]=k}}]);
//# sourceMappingURL=newsletter.ec4098e0.js.map