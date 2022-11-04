"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[817],{7199:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(821);const o={key:0,"aria-label":"pagination",class:"mt-3"},l={class:"inline-flex -space-x-px text-sm md:text-base"},n=(0,r.createElementVNode)("span",{"aria-hidden":"true"},"«",-1),c=[n],s={key:0,class:"px-1 py-2 md:px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500",href:"javascript:void(0)"},i=["onClick"],d={key:0,class:"sr-only"},m=(0,r.createElementVNode)("span",{"aria-hidden":"true"},"»",-1),p=[m];function u(e,t,a,n,m,u){return a.meta.totalPages>1?((0,r.openBlock)(),(0,r.createElementBlock)("nav",o,[(0,r.createElementVNode)("ul",l,[(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{class:(0,r.normalizeClass)([{"cursor-not-allowed bg-gray-200 dark:bg-gray-900 dark:hover:text-gray-400":!e.isPrev},"px-2 py-2 md:px-3 ml-0 leading-tight text-gray-500 dark:text-gray-400 bg-white rounded-l border border-gray-300 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-blue-500"]),href:"javascript:void(0)",onClick:t[0]||(t[0]=e=>n.prev())},c,2)]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.pageRange,((t,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("li",{key:a},["..."===t?((0,r.openBlock)(),(0,r.createElementBlock)("a",s,(0,r.toDisplayString)(t),1)):((0,r.openBlock)(),(0,r.createElementBlock)("a",{key:1,class:(0,r.normalizeClass)(`px-2 py-2 md:px-3 leading-tight bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 ${t===e.currentPage?"text-blue-500 font-semibold":"text-gray-500 dark:text-gray-400"} hover:text-blue-500 dark:hover:text-blue-500`),href:"javascript:void(0)",onClick:e=>n.updatePage(t)},[(0,r.createTextVNode)((0,r.toDisplayString)(t)+" ",1),t===e.currentPage?((0,r.openBlock)(),(0,r.createElementBlock)("span",d,"(current)")):(0,r.createCommentVNode)("",!0)],10,i))])))),128)),(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{class:(0,r.normalizeClass)([{"cursor-not-allowed bg-gray-200 dark:bg-gray-900 dark:hover:bg-text-400":!e.isNext},"px-2 py-2 md:px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"]),href:"javascript:void(0)",onClick:t[1]||(t[1]=e=>n.next())},p,2)])])])):(0,r.createCommentVNode)("",!0)}var g={name:"Pagination",props:["meta"],emits:["page"],setup(e,{emit:t}){const a=(0,r.reactive)({isPrev:!1,isNext:!1,pagesLimit:5,currentPage:e.meta.currentPage,delta:3}),o=(0,r.computed)((()=>{const t=e.meta.currentPage,r=e.meta.totalPages,o=t-a.delta,l=t+a.delta+1,n=[],c=[];let s;for(let e=1;e<=r;e++)(1===e||e===r||e>=o&&e<l)&&n.push(e);return n.forEach((function(e){s&&(e-s===2?c.push(s+1):e-s!==1&&c.push("...")),c.push(e),s=e})),c})),l=e=>{e!==a.currentPage&&(a.currentPage=e,s(),t("page",a.currentPage))},n=()=>{a.currentPage>1?a.currentPage--:a.currentPage=1,s(),t("page",a.currentPage)},c=()=>{a.currentPage<e.meta.totalPages?a.currentPage++:a.currentPage=e.meta.totalPages,s(),t("page",a.currentPage)},s=()=>{a.isPrev=a.currentPage>1,a.isNext=a.currentPage<e.meta.totalPages},i=()=>{a.delta=3,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(a.delta=1)};return(0,r.onBeforeMount)((()=>{s(),window.addEventListener("resize",i)})),(0,r.onBeforeUnmount)((()=>{window.removeEventListener("resize",i)})),{...(0,r.toRefs)(a),pageRange:o,prev:n,next:c,updatePage:l}}},E=a(3744);const N=(0,E.Z)(g,[["render",u]]);var h=N},8467:function(e,t,a){a.r(t),a.d(t,{default:function(){return se}});var r=a(821);const o=e=>((0,r.pushScopeId)("data-v-30a8f6a9"),e=e(),(0,r.popScopeId)(),e),l={class:"card"},n={class:"body"},c={class:"flex items-center justify-end mb-3"},s={class:"relative w-full md:w-2/5"},i={class:"w-full scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-600"},d={class:"table-sm mb-2"},m=o((()=>(0,r.createElementVNode)("th",{class:"whitespace-nowrap"},"Receipt ID",-1))),p=o((()=>(0,r.createElementVNode)("th",{class:"whitespace-nowrap"},"Transaction ID",-1))),u=(0,r.createTextVNode)(" Ticket Number "),g=(0,r.createTextVNode)(" Cashier "),E=(0,r.createTextVNode)(" Date "),N=(0,r.createTextVNode)(" Total Amount "),h=o((()=>(0,r.createElementVNode)("th",null,"Actions",-1))),k=["onClick"],y=["onClick"],V={key:0},C=o((()=>(0,r.createElementVNode)("td",{colspan:"7"},"No receipt available",-1))),b=[C];function v(e,t,a,o,C,v){const f=(0,r.resolveComponent)("icon"),w=(0,r.resolveComponent)("pagination"),x=(0,r.resolveComponent)("pos-layout"),T=(0,r.resolveComponent)("receipt-detail-modal");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(x,null,{content:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",s,[(0,r.createVNode)(f,{classes:"absolute w-5 h-5 top-3 left-3 dark:text-gray-300",name:"search"}),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.keyword=t),"aria-label":"Search...",class:"form-input px-10 w-full",type:"text"},null,512),[[r.vModelText,e.keyword]]),""!==e.keyword?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:"absolute top-3 right-3 dark:text-gray-400 cursor-pointer",onClick:t[1]||(t[1]=t=>e.keyword="")},[(0,r.createVNode)(f,{classes:"w-5 h-5",name:"close"})])):(0,r.createCommentVNode)("",!0)])]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("table",d,[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[m,p,(0,r.createElementVNode)("th",{onClick:t[2]||(t[2]=e=>o.sort("TICKETNUMBER")),class:"cursor-pointer whitespace-nowrap"},[u,"TICKETNUMBER"===e.sortKey?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)("ml-4 transform transition-all "+("asc"===e.order?"rotate-180":""))},[(0,r.createVNode)(f,{name:"sort",class:"w-4 h-4"})],2)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("th",{onClick:t[3]||(t[3]=e=>o.sort("CASHIER")),class:"pointer whitespace-nowrap"},[g,"CASHIER"===e.sortKey?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)("ml-4 transform transition-all "+("asc"===e.order?"rotate-180":""))},[(0,r.createVNode)(f,{name:"sort",class:"w-4 h-4"})],2)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("th",{onClick:t[4]||(t[4]=e=>o.sort("DATE")),class:"cursor-pointer whitespace-nowrap"},[E,"DATE"===e.sortKey?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)("ml-4 transform transition-all "+("asc"===e.order?"rotate-180":""))},[(0,r.createVNode)(f,{name:"sort",class:"w-4 h-4"})],2)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("th",{onClick:t[5]||(t[5]=e=>o.sort("TOTAL")),class:"cursor-pointer whitespace-nowrap"},[N,"TOTAL"===e.sortKey?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)("ml-4 transform transition-all "+("asc"===e.order?"rotate-180":""))},[(0,r.createVNode)(f,{name:"sort",class:"w-4 h-4"})],2)):(0,r.createCommentVNode)("",!0)]),h])]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.paginatedReceipts,((e,t)=>((0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:t,onClick:t=>o.launchReceiptDetailModal(e),class:"cursor-pointer"},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.ID),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.TRANSACTION_ID),1),(0,r.createElementVNode)("td",null,"#"+(0,r.toDisplayString)(e.TICKETNUMBER),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.CASHIER),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(o.formatDT(e.DATE)),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(`${e.TOTAL.replace("Total Price: ","").replace(e.CURRENCY,"")} ${e.CURRENCY}`),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("button",{onClick:t=>o.launchReceiptDetailModal(e),class:"hover:text-blue-500"},[(0,r.createVNode)(f,{name:"eye"})],8,y)])],8,k)))),128)),0===o.paginatedReceipts.length?((0,r.openBlock)(),(0,r.createElementBlock)("tr",V,b)):(0,r.createCommentVNode)("",!0)])])]),o.filteredReceipts.length>0?((0,r.openBlock)(),(0,r.createBlock)(w,{key:0,meta:e.meta,onPage:o.updatePage},null,8,["meta","onPage"])):(0,r.createCommentVNode)("",!0)])])])),_:1}),(0,r.createVNode)(T)],64)}var f=a(2630),w=a(7983),x=a(7199);const T={class:"flex items-center justify-between"},P={key:0},R={class:"table-sm"},D=(0,r.createElementVNode)("th",null,"Date",-1),B={colspan:"4"},I=(0,r.createElementVNode)("th",null,"Receipt ID",-1),S={colspan:"4"},A=(0,r.createElementVNode)("th",null,"Transaction ID",-1),M={colspan:"4"},U=(0,r.createElementVNode)("th",null,"Ticket Number",-1),Y={colspan:"4"},j=(0,r.createElementVNode)("th",null,"Cashier",-1),K={colspan:"4"},O=(0,r.createElementVNode)("th",null,"Total Amount",-1),L={colspan:"4"},_=(0,r.createElementVNode)("tr",{class:"whitespace-nowrap"},[(0,r.createElementVNode)("th",null,"Product Name"),(0,r.createElementVNode)("th",null,"Sku"),(0,r.createElementVNode)("th",null,"Price"),(0,r.createElementVNode)("th",null,"Quantity"),(0,r.createElementVNode)("th",null,"Sub Total")],-1),Z={class:"whitespace-nowrap"},$={class:"mb-2 flex items-center justify-between"},z={class:"flex-1"},H=["placeholder"],F={class:"text-red-700 dark:text-red-400 text-sm"},W={key:0,class:"mr-3"};function q(e,t,a,o,l,n){const c=(0,r.resolveComponent)("icon"),s=(0,r.resolveComponent)("j-button"),i=(0,r.resolveComponent)("modal");return(0,r.openBlock)(),(0,r.createBlock)(i,{maxWidth:e.maxWidth,show:e.show,onClose:t[3]||(t[3]=e=>o.closeModal())},{title:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",T,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(o.translate("pos.receipts.title")),1),(0,r.createElementVNode)("span",{class:"text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer",onClick:t[0]||(t[0]=e=>o.closeModal())},[(0,r.createVNode)(c,{name:"close"})])])])),content:(0,r.withCtx)((()=>[e.receipt?((0,r.openBlock)(),(0,r.createElementBlock)("div",P,[(0,r.createElementVNode)("table",R,[(0,r.createElementVNode)("tbody",null,[(0,r.createElementVNode)("tr",null,[D,(0,r.createElementVNode)("td",B,(0,r.toDisplayString)(e.formatDT(e.receipt.DATE)),1)]),(0,r.createElementVNode)("tr",null,[I,(0,r.createElementVNode)("td",S,(0,r.toDisplayString)(e.receipt.ID),1)]),(0,r.createElementVNode)("tr",null,[A,(0,r.createElementVNode)("td",M,(0,r.toDisplayString)(e.receipt.TRANSACTION_ID),1)]),(0,r.createElementVNode)("tr",null,[U,(0,r.createElementVNode)("td",Y,(0,r.toDisplayString)(e.receipt.TICKETNUMBER),1)]),(0,r.createElementVNode)("tr",null,[j,(0,r.createElementVNode)("td",K,(0,r.toDisplayString)(e.receipt.CASHIER),1)]),(0,r.createElementVNode)("tr",null,[O,(0,r.createElementVNode)("td",L,(0,r.toDisplayString)(e.receipt.TOTAL.replace("Total Price: ","").replace(e.receipt.CURRENCY,"")+" "+e.receipt.CURRENCY),1)]),_,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.receipt.items,((t,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:a},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.ITEM_NAME),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.ITEM_SKU),1),(0,r.createElementVNode)("td",Z,(0,r.toDisplayString)(`${t.ITEM_PRICE} ${t.CURRENCY?t.CURRENCY:e.receipt.CURRENCY}`),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.QUANTITY),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(`${t.QUANTITY*t.ITEM_PRICE} ${t.CURRENCY?t.CURRENCY:e.receipt.CURRENCY}`),1)])))),128))])]),(0,r.createElementVNode)("form",{onSubmit:t[2]||(t[2]=(0,r.withModifiers)((e=>o.submit()),["prevent"]))},[(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("div",z,[(0,r.withDirectives)((0,r.createElementVNode)("input",{placeholder:o.translate("pos.receipts.email"),"aria-label":"Email",class:"form-input w-full",type:"email","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.email=t)},null,8,H),[[r.vModelText,e.form.email]]),(0,r.createElementVNode)("div",F,(0,r.toDisplayString)(o.showError(e.errorBag,"email")),1)]),(0,r.createVNode)(s,{disabled:e.isProcessing,class:"ml-3"},{default:(0,r.withCtx)((()=>[e.isProcessing?((0,r.openBlock)(),(0,r.createElementBlock)("div",W,[(0,r.createVNode)(c,{name:"spinner",classes:"w-4 h-4 text-white"})])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(o.translate("pos.receipts.btn_send_receipt")),1)])),_:1},8,["disabled"])])],32)])):(0,r.createCommentVNode)("",!0)])),_:1},8,["maxWidth","show"])}var Q=a(9099),J=a(3164),G=a(8637),X=a(6232),ee=a(381),te={name:"ReceiptDetailModal",components:{Modal:Q.Z,Icon:w.Z,JButton:J.Z},setup(){const e=(0,r.inject)("translate"),t=(0,r.inject)("emitter"),a=(0,r.inject)("toast"),o=(0,r.inject)("http"),l=(0,G.oR)(),{showError:n,validate:c}=(0,X.Z)(),s=(0,r.reactive)({show:!1,maxWidth:"2xl",closeable:!0,receipt:null,form:{email:""},errorBag:{},rules:{email:["required","email"]},messages:{email:{required:"Email address is required",email:"Please provide a valid email address"}},isProcessing:!1}),i=(0,r.computed)((()=>l.state.user));(0,r.watch)((()=>({...s.form})),((e,t)=>{Object.keys(s.errorBag).length>0&&(s.errorBag=c(s.form,s.rules,s.messages))}));const d="https://app.cointopay.com",m=()=>{s.show=!1},p=e=>ee(new Date(Number(e))).format("DD/MM/YYYY H:mm A"),u=()=>{if(s.errorBag=c(s.form,s.rules,s.messages),0===Object.keys(s.errorBag).length){s.isProcessing=!0;const e={"Receipt ID":s.receipt.ID,Time:p(s.receipt.DATE),"Total Amount":`${s.receipt.TOTAL} ${s.receipt.CURRENCY}`,Cashier:s.receipt.CASHIER,Items:s.receipt.items},t={Call:"POSRECEIPT",MerchantID:Number(i.value.ID),APIKey:i.value.APIKey,email:s.form.email,ticketData:JSON.stringify(e),output:"json"},r=e=>Object.keys(e).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");o.post(`${d}/v2REAPI`,r(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>{s.isProcessing=!1,e.data&&a.success("Receipt sent successfully")})).catch((e=>{s.isProcessing=!1,console.log(e)}))}};return(0,r.onBeforeMount)((()=>{t.on("receiptDetailModal",(e=>{s.receipt=e.receipt,s.form={email:""},s.show=!0}))})),{translate:e,...(0,r.toRefs)(s),closeModal:m,showError:n,submit:u}}},ae=a(3744);const re=(0,ae.Z)(te,[["render",q]]);var oe=re,le=a(6486),ne={name:"Recipients",components:{"pos-layout":f.Z,Icon:w.Z,Pagination:x.Z,ReceiptDetailModal:oe},setup(){const e=(0,r.inject)("emitter"),t=(0,G.oR)(),a=(0,r.reactive)({keyword:"",sortKey:null,order:"asc",meta:{currentPage:1,totalPages:0,limit:25,offset:0}}),o=(0,r.computed)((()=>t.state.pos)),l=(0,r.computed)((()=>a.keyword?o.value.receipts.filter((e=>{const t=a.keyword.trim().toLowerCase();return le.includes(e.ID,t)||le.includes(e.CASHIER.toLowerCase(),t)||le.includes(e.TICKETNUMBER,t)||le.includes(e.TRANSACTION_ID,t)})):le.orderBy(o.value.receipts,"DATE","desc"))),n=(0,r.computed)((()=>{if(l.value&&l.value.length>0){let e=le.cloneDeep(l.value);return e=e.map((e=>({...e,ITEM_PRICE:Number.parseFloat(e.TOTAL.replace("Total Price: ",""))}))),e=le.orderBy(e,a.sortKey,a.order),e.slice(a.meta.offset,a.meta.currentPage*a.meta.limit)}return l.value}));(0,r.watch)((()=>a.keyword),((e,t)=>{a.meta={...a.meta,currentPage:1,totalPages:Math.ceil(l.value.length/a.meta.limit),offset:0}}));const c=e=>{e===a.sortKey&&(a.order="asc"===a.order?"desc":"asc"),a.sortKey=e},s=e=>{a.meta={...a.meta,currentPage:e,offset:(e-1)*a.meta.limit}},i=e=>ee(new Date(Number(e))).format("DD/MM/YYYY H:mm A"),d=t=>{e.emit("receiptDetailModal",{receipt:t})};return(0,r.onBeforeMount)((()=>{a.employee=le.find(o.value.users,{isLoggedIn:"true"}),a.meta={...a.meta,currentPage:1,totalPages:Math.ceil(l.value.length/a.meta.limit),offset:0}})),{...(0,r.toRefs)(a),filteredReceipts:l,paginatedReceipts:n,sort:c,updatePage:s,formatDT:i,launchReceiptDetailModal:d}}};const ce=(0,ae.Z)(ne,[["render",v],["__scopeId","data-v-30a8f6a9"]]);var se=ce}}]);
//# sourceMappingURL=account-pos-recipients.24ce6c0f.js.map