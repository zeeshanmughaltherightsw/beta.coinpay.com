"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[748],{5748:function(e,t,o){o.r(t),o.d(t,{default:function(){return K}});var c=o(821);const r=e=>((0,c.pushScopeId)("data-v-9b623556"),e=e(),(0,c.popScopeId)(),e),a={class:"card"},n={class:"body"},l={class:"flex items-center justify-end mb-3"},s={class:"w-full scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-600"},i={key:0,class:"table-sm mb-2"},d=r((()=>(0,c.createElementVNode)("thead",null,[(0,c.createElementVNode)("tr",null,[(0,c.createElementVNode)("th",{style:{"min-width":"150px"}},"Product"),(0,c.createElementVNode)("th",{style:{"min-width":"100px"}},"SKU"),(0,c.createElementVNode)("th",null,"Price"),(0,c.createElementVNode)("th",null,"Quantity"),(0,c.createElementVNode)("th",null,"Total Price"),(0,c.createElementVNode)("th",{style:{"min-width":"100px"}},"Actions")])],-1))),u=["onClick"],m=["onClick"],p=["onClick"],k=["onClick"],y=["onClick"],f={key:0},N=["onClick"],v=["onClick"],h={key:0},b=r((()=>(0,c.createElementVNode)("td",{colspan:"6"},"No products available!",-1))),C=[b];function V(e,t,o,r,b,V){const g=(0,c.resolveComponent)("router-link"),x=(0,c.resolveComponent)("icon"),E=(0,c.resolveComponent)("pos-layout"),I=(0,c.resolveComponent)("update-cart-item-modal");return(0,c.openBlock)(),(0,c.createElementBlock)(c.Fragment,null,[(0,c.createVNode)(E,null,{content:(0,c.withCtx)((()=>[(0,c.createElementVNode)("div",a,[(0,c.createElementVNode)("div",n,[(0,c.createElementVNode)("div",l,[(0,c.createVNode)(g,{tag:"a",to:{name:"account-pos-tickets"},class:"btn btn-primary mr-2"},{default:(0,c.withCtx)((()=>[(0,c.createTextVNode)((0,c.toDisplayString)(r.translate("pos.tickets.back")),1)])),_:1}),"paid"!==e.ticket.status&&e.ticket.cashier===e.employee.USERNAME?((0,c.openBlock)(),(0,c.createBlock)(g,{key:0,tag:"a",to:{name:"account-pos-products"},class:"btn btn-primary"},{default:(0,c.withCtx)((()=>[(0,c.createTextVNode)((0,c.toDisplayString)(r.translate("pos.tickets.add_product")),1)])),_:1})):(0,c.createCommentVNode)("",!0)]),(0,c.createElementVNode)("div",s,[e.ticket?((0,c.openBlock)(),(0,c.createElementBlock)("table",i,[d,(0,c.createElementVNode)("tbody",null,[((0,c.openBlock)(!0),(0,c.createElementBlock)(c.Fragment,null,(0,c.renderList)(e.ticket.ticketProducts,((t,o)=>((0,c.openBlock)(),(0,c.createElementBlock)("tr",{key:o},[(0,c.createElementVNode)("td",{onClick:e=>r.launchUpdateCartItem(t,o)},(0,c.toDisplayString)(t.productName),9,u),(0,c.createElementVNode)("td",{onClick:e=>r.launchUpdateCartItem(t,o)},(0,c.toDisplayString)(t.productSku),9,m),(0,c.createElementVNode)("td",{onClick:e=>r.launchUpdateCartItem(t,o)},(0,c.toDisplayString)(`${t.productPrice} ${r.currency}`),9,p),(0,c.createElementVNode)("td",{onClick:e=>r.launchUpdateCartItem(t,o)},(0,c.toDisplayString)(t.productQuantity),9,k),(0,c.createElementVNode)("td",{onClick:e=>r.launchUpdateCartItem(t,o)},(0,c.toDisplayString)(`${r.toFixed(t.productPrice*t.productQuantity)} ${r.currency}`),9,y),(0,c.createElementVNode)("td",null,[e.employee&&e.employee.USERNAME===e.ticket.cashier?((0,c.openBlock)(),(0,c.createElementBlock)("div",f,["paid"!==e.ticket.status?((0,c.openBlock)(),(0,c.createElementBlock)("button",{key:0,onClick:e=>r.launchUpdateCartItem(t,o),class:"hover:text-blue-500 mr-2"},[(0,c.createVNode)(x,{name:"edit"})],8,N)):(0,c.createCommentVNode)("",!0),"paid"!==e.ticket.status?((0,c.openBlock)(),(0,c.createElementBlock)("button",{key:1,onClick:e=>r.removeItemFromCart(t,o),class:"hover:text-red-500"},[(0,c.createVNode)(x,{name:"trash"})],8,v)):(0,c.createCommentVNode)("",!0)])):(0,c.createCommentVNode)("",!0)])])))),128)),0===e.ticket.ticketProducts.length?((0,c.openBlock)(),(0,c.createElementBlock)("tr",h,C)):(0,c.createCommentVNode)("",!0)])])):(0,c.createCommentVNode)("",!0)])])])])),_:1}),(0,c.createVNode)(I)],64)}var g=o(2630);const x={class:"flex items-center justify-between"},E={key:0},I={class:"mb-2"},w={class:"block mb-1"},B={class:"flex items-center"},S={class:"text-red-700 dark:text-red-400 text-sm"},q={class:"mt-4 text-right"},D={key:0,class:"mr-3"};function P(e,t,o,r,a,n){const l=(0,c.resolveComponent)("icon"),s=(0,c.resolveComponent)("j-button"),i=(0,c.resolveComponent)("modal");return(0,c.openBlock)(),(0,c.createBlock)(i,{maxWidth:e.maxWidth,show:e.show,onClose:t[6]||(t[6]=e=>r.closeModal())},{title:(0,c.withCtx)((()=>[(0,c.createElementVNode)("div",x,[(0,c.createElementVNode)("span",null,(0,c.toDisplayString)(r.translate("pos.title")),1),(0,c.createElementVNode)("span",{class:"text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer",onClick:t[0]||(t[0]=e=>r.closeModal())},[(0,c.createVNode)(l,{name:"close"})])])])),content:(0,c.withCtx)((()=>[e.item?((0,c.openBlock)(),(0,c.createElementBlock)("div",E,[(0,c.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,c.withModifiers)((e=>r.submit()),["prevent"]))},[(0,c.createElementVNode)("p",null,(0,c.toDisplayString)(e.item.itemName),1),(0,c.createElementVNode)("div",I,[(0,c.createElementVNode)("label",w,(0,c.toDisplayString)(r.translate("pos.tickets.lbl_quantity")),1),(0,c.createElementVNode)("div",B,[(0,c.createVNode)(s,{onClick:t[1]||(t[1]=e=>r.sub()),type:"button",class:"rounded-r-none"},{default:(0,c.withCtx)((()=>[(0,c.createVNode)(l,{name:"minus"})])),_:1}),(0,c.withDirectives)((0,c.createElementVNode)("input",{onKeyup:t[2]||(t[2]=e=>r.validateQty()),class:"form-input w-24 text-center rounded-none",type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.form.qty=t)},null,544),[[c.vModelText,e.form.qty]]),(0,c.createVNode)(s,{onClick:t[4]||(t[4]=e=>r.add()),type:"button",class:"rounded-l-none"},{default:(0,c.withCtx)((()=>[(0,c.createVNode)(l,{name:"plus"})])),_:1})]),(0,c.createElementVNode)("div",S,(0,c.toDisplayString)(r.showError(e.errorBag,"qty")),1)]),(0,c.createElementVNode)("p",null,(0,c.toDisplayString)(r.translate("pos.tickets.stock_left"))+" "+(0,c.toDisplayString)(r.stockLeft),1),(0,c.createElementVNode)("p",null,(0,c.toDisplayString)(r.translate("pos.tickets.product_price"))+" "+(0,c.toDisplayString)(`${e.item.productPrice} ${e.currency}`),1),(0,c.createElementVNode)("p",null,(0,c.toDisplayString)(r.translate("pos.tickets.total_price"))+" "+(0,c.toDisplayString)(`${r.totalPrice} ${e.currency}`),1),(0,c.createElementVNode)("div",q,[(0,c.createVNode)(s,{disabled:e.isProcessing},{default:(0,c.withCtx)((()=>[e.isProcessing?((0,c.openBlock)(),(0,c.createElementBlock)("div",D,[(0,c.createVNode)(l,{name:"spinner",classes:"w-4 h-4 text-white"})])):(0,c.createCommentVNode)("",!0),(0,c.createElementVNode)("span",null,(0,c.toDisplayString)(r.translate("pos.tickets.btn_save")),1)])),_:1},8,["disabled"])])],32)])):(0,c.createCommentVNode)("",!0)])),_:1},8,["maxWidth","show"])}var U=o(9099),_=o(7983),j=o(3164),M=o(6232),Q=o(6486),R=o(8637),F=o(9783),Z={name:"UpdateCartItemModal",components:{Modal:U.Z,Icon:_.Z,JButton:j.Z},setup(){const e=(0,c.inject)("translate"),t=(0,c.inject)("emitter"),o=(0,c.inject)("toast"),r=(0,R.oR)(),{showError:a,validate:n}=(0,M.Z)(),l=(0,c.reactive)({show:!1,maxWidth:"2xl",closeable:!0,item:null,ticket:null,itemIndex:-1,currency:"EUR",form:{qty:0},errorBag:{},rules:{qty:["required","minValue:1"]},messages:{qty:{required:"Please enter valid quantity",minValue:"Quantity should be greater than 0"}},isProcessing:!1,confirmHook:()=>{}}),s=(0,c.computed)((()=>r.state.pos)),i=(0,c.computed)((()=>r.state.posCalls)),d=(0,c.computed)((()=>{if(!l.item)return 0;const e=Q.find(s.value.products,{id:l.item.productId});return e?Number(e.stock)+Number(l.item.productQuantity)-Number(l.form.qty):0})),u=(0,c.computed)((()=>l.item?(l.item.productPrice*l.form.qty).toFixed(8):0));(0,c.watch)((()=>({...l.form})),((e,t)=>{Object.keys(l.errorBag).length>0&&(l.errorBag=n(l.form,l.rules,l.messages))}));const m=()=>{l.show=!1},p=()=>{Number(l.form.qty)<Number(d.value)&&(l.form.qty=Number(l.form.qty)+1)},k=()=>{Number(l.form.qty)>1&&(l.form.qty=Number(l.form.qty)-1)},y=()=>{Number(l.form.qty)<1?l.form.qty=1:Number(l.form.qty)>Number(d.value)&&(l.form.qty=Number(d.value))},f=()=>{if(l.errorBag=n(l.form,l.rules,l.messages),0===Object.keys(l.errorBag).length){l.isProcessing=!0;const e=Q.cloneDeep(s.value),t=Q.findIndex(e.tickets,{ticketId:l.ticket.ticketId.toString()});if(-1!==t){e.tickets[t].ticketProducts[l.itemIndex].productQuantity=l.form.qty,e.tickets[t].paymentRequest=null,r.dispatch(F.yF,{call:i.value.tickets,data:e.tickets});const c=Q.findIndex(e.products,{id:l.item.productId});-1!==c&&(e.products[c].stock=d.value.toString(),r.dispatch(F.Rb,{call:i.value.products,data:e.products}));const a=Q.findIndex(e.favourites,{id:l.item.productId});-1!==a&&(e.favourites[a].stock=d.value.toString()),r.commit(F.qx,e),o.success("Quantity updated successfully"),l.confirmHook(),m()}}};return(0,c.onBeforeMount)((()=>{t.on("updateCartItemModal",(e=>{l.currency=e.currency,l.item=e.product,l.ticket=e.ticket,l.itemIndex=e.itemIndex,l.confirmHook=e.confirm,l.form={qty:Number(l.item.productQuantity)},l.show=!0}))})),{translate:e,...(0,c.toRefs)(l),stockLeft:d,totalPrice:u,closeModal:m,showError:a,add:p,sub:k,validateQty:y,submit:f}}},T=o(3744);const $=(0,T.Z)(Z,[["render",P]]);var L=$,W=o(4729),A=o(2119),H={name:"Ticket",components:{"pos-layout":g.Z,Icon:_.Z,UpdateCartItemModal:L},setup(){const e=(0,c.inject)("translate"),t=(0,c.inject)("swal"),o=(0,c.inject)("emitter"),r=(0,c.inject)("toast"),a=(0,R.oR)(),n=(0,A.yj)(),{toFixed:l,saveNotification:s}=(0,W.Z)(),i=(0,c.reactive)({ticket:null,employee:null,socket:null,isSocketClosed:!1}),d=(0,c.computed)((()=>a.state.accountInfo)),u=(0,c.computed)((()=>a.state.user)),m=(0,c.computed)((()=>a.state.pos)),p=(0,c.computed)((()=>a.state.posCalls)),k=(0,c.computed)((()=>d.value?d.value.PayoutCurrencyShortName:"EUR")),y=(e,t)=>{o.emit("updateCartItemModal",{product:e,itemIndex:t,currency:k.value,ticket:i.ticket,confirm:()=>{i.ticket=Q.find(m.value.tickets,{ticketId:i.ticket.ticketId})}})},f=(e,o)=>{t.fire({title:"Ticket",text:"Are you sure, want to remove this product?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No",focusCancel:!0,customClass:{container:"swal2-tailwind"}}).then((({value:t})=>{if(t&&!0===t){const t=Q.cloneDeep(m.value),c=Q.findIndex(t.products,{id:e.productId});-1!==c&&(t.products[c].stock=Number(t.products[c].stock)+Number(e.productQuantity),a.dispatch(F.Rb,{call:p.value.products,data:t.products}));const n=Q.findIndex(t.favourites,{id:e.productId});-1!==n&&(t.favourites[n].stock=Number(m.value.favourites[n].stock)+Number(e.productQuantity));const l=Q.cloneDeep(i.ticket),d=Q.findIndex(t.tickets,{ticketId:l.ticketId});-1!==d&&(l.ticketProducts.splice(o,1),t.tickets.splice(d,1,l),a.dispatch(F.yF,{call:p.value.tickets,data:t.tickets}),a.commit(F.qx,t),r.success("Product removed successfully!"),s("Product removed successfully!"))}}))},N=()=>{i.socket=new WebSocket("wss://wss.cointopay.com/transactions"),i.socket.onmessage=e=>{if(e&&e.data){const t=e.data.split(":");if("pos"===t[0].toLowerCase()){const e=t[1];u.value&&e.toString()===u.value.ID.toString()&&a.dispatch(F.Z6,{})}}},i.socket.onclose=e=>{i.isSocketClosed||N()}};return(0,c.onBeforeMount)((()=>{i.employee=Q.find(m.value.users,{isLoggedIn:"true"}),Object.keys(n.params).length>0&&n.params.ticketId&&(i.ticket=Q.find(m.value.tickets,{ticketId:n.params.ticketId}),N())})),(0,c.onBeforeUnmount)((()=>{i.isSocketClosed=!0,i.socket&&i.socket.close()})),{translate:e,...(0,c.toRefs)(i),toFixed:l,currency:k,launchUpdateCartItem:y,removeItemFromCart:f}}};const O=(0,T.Z)(H,[["render",V],["__scopeId","data-v-9b623556"]]);var K=O}}]);
//# sourceMappingURL=account-pos-ticket.ed8bc1fb.js.map