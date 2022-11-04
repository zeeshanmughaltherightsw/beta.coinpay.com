"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[511],{784:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(821);const r={class:"p-4"},o={class:"max-w-7xl 3xl:max-w-8xl mx-auto"},n={class:"flex flex-col md:flex-row space-x-0 md:space-x-4"},c={class:"w-full mb-4 md:mb-0 bg-white dark:bg-gray-800 rounded shadow p-4",style:{"min-height":"calc(100vh - 351px)"}};function s(e,t,a,s,d,m){return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",c,[(0,l.renderSlot)(e.$slots,"default")])])])])}var d={name:"CenteredLayout"},m=a(3744);const i=(0,m.Z)(d,[["render",s]]);var u=i},9371:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var l=a(821);const r=e=>((0,l.pushScopeId)("data-v-72b4c6d4"),e=e(),(0,l.popScopeId)(),e),o={key:0,class:"h-full"},n={class:"flex items-center justify-center h-full"},c={class:"text-center"},s={class:"mb-4 font-semibold text-lg"},d={key:1,class:"card"},m={class:"body"},i={class:"w-full scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-600"},u={class:"table-sm mb-2"},p=r((()=>(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,"Item"),(0,l.createElementVNode)("th",null,"Price"),(0,l.createElementVNode)("th",null,"Quantity"),(0,l.createElementVNode)("th",null,"Subtotal"),(0,l.createElementVNode)("th")])],-1))),h={class:"flex items-center"},N=["src","onClick"],y={class:"mb-0 ml-1"},b={class:"items-center"},V=r((()=>(0,l.createElementVNode)("span",{class:"mr-3"},"x",-1))),v=["max","onChange","onUpdate:modelValue"],E={class:"text-right"},f={class:"pr-3"},g=["onClick"],x={class:"text-right",colspan:"5"},k={class:"font-bold pr-3"},C={class:"text-right",colspan:"4"};function w(e,t,a,r,w,B){const S=(0,l.resolveComponent)("router-link"),D=(0,l.resolveComponent)("icon"),I=(0,l.resolveComponent)("centered-layout");return(0,l.openBlock)(),(0,l.createBlock)(I,null,{default:(0,l.withCtx)((()=>[0===r.cart.items.length?((0,l.openBlock)(),(0,l.createElementBlock)("div",o,[(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("p",s,(0,l.toDisplayString)(r.translate("pos.cart.empty_cart")),1),(0,l.createVNode)(S,{to:{name:"shop-detail",params:{id:r.shopId}},class:"btn btn-primary",tag:"a"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(r.translate("pos.cart.continue_shopping")),1)])),_:1},8,["to"])])])])):(0,l.createCommentVNode)("",!0),r.cart.items.length>0&&r.shop&&r.shop.products.length>0?((0,l.openBlock)(),(0,l.createElementBlock)("div",d,[(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("table",u,[p,(0,l.createElementVNode)("tbody",null,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(r.cart.items,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:t},[(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("img",{class:"w-12 h-12 rounded-full mr-3",src:e.url,alt:"",onClick:t=>r.fancyBox(e.url)},null,8,N),(0,l.createElementVNode)("p",y,(0,l.toDisplayString)(e.name),1)])]),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(r.formatPrice(e.price,r.currency)),1),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("div",b,[V,(0,l.withDirectives)((0,l.createElementVNode)("input",{max:r.maxQty(e),onChange:a=>r.updateCart(e,t),"aria-label":"qty",class:"form-input w-36",min:"1",type:"number","onUpdate:modelValue":t=>e.qty=t},null,40,v),[[l.vModelText,e.qty]])])]),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(r.formatPrice(e.price*e.qty,r.currency)),1),(0,l.createElementVNode)("td",E,[(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("button",{onClick:e=>r.removeItem(t),class:"hover:text-red-500"},[(0,l.createVNode)(D,{name:"trash"})],8,g)])])])))),128)),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",x,[(0,l.createElementVNode)("span",k,"Total: "+(0,l.toDisplayString)(r.cartTotal),1)])]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("button",{onClick:t[0]||(t[0]=e=>r.clearCart()),class:"btn btn-danger"},(0,l.toDisplayString)(r.translate("pos.cart.clear_cart")),1)]),(0,l.createElementVNode)("td",C,[(0,l.createVNode)(S,{to:{name:"shop-detail",params:{id:r.shopId}},class:"btn btn-default",tag:"a"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(r.translate("pos.cart.continue_shopping")),1)])),_:1},8,["to"]),(0,l.createVNode)(S,{disabled:0===r.totalAmount,tag:"a",to:{name:"checkout"},class:"btn btn-primary ml-2 mr-3"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(r.translate("pos.cart.checkout")),1)])),_:1},8,["disabled"])])])])])])])])):(0,l.createCommentVNode)("",!0)])),_:1})}var B=a(784),S=a(7983),D=a(8637),I=a(4729),q=a(6486),_=a(9783),T={name:"Cart",components:{CenteredLayout:B.Z,Icon:S.Z},setup(){const e=(0,l.inject)("translate"),t=(0,l.inject)("toast"),a=(0,D.oR)(),{formatPrice:r,fancyBox:o}=(0,I.Z)(),n=(0,l.computed)((()=>a.state.altCoins)),c=(0,l.computed)((()=>a.state.shopsList)),s=(0,l.computed)((()=>a.state.shopId)),d=(0,l.computed)((()=>a.state.shopData)),m=(0,l.computed)((()=>a.state.cart)),i=(0,l.computed)((()=>{let e=null;return s.value&&(e=q.find(c.value,{ID:s.value})),e})),u=(0,l.computed)((()=>{let e="EUR";if(i.value){e=i.value.PayoutCurrencyShortName;const t=q.find(n.value,{ShortName:e});t&&(e=t.LongName)}return e})),p=(0,l.computed)((()=>{let e=0;return m.value.items.length>0&&m.value.items.map((t=>{e+=Number(t.qty)*Number(t.price)})),r(e,u.value)})),h=(0,l.computed)((()=>{let e=0;return m.value.items.length>0&&m.value.items.map((t=>{e+=Number(t.qty)*Number(t.price)})),e})),N=e=>{const t=q.find(d.value.products,{id:e.id});return t?Number(t.stock)-Number(e.qty):0},y=(e,l)=>{const r=q.cloneDeep(m.value),o=q.find(r.items,{id:e.id});(0===Number(e.qty)||Number(e.qty)>N(e))&&(r.items[l].qty=o.qty,t.error("Invalid quantity entered. The previous value will be restored.")),a.commit(_.gQ,r)},b=e=>{const t=q.cloneDeep(m.value);t.items.splice(e,1),a.commit(_.gQ,t)},V=()=>{a.commit(_.gQ,{items:[],merchantId:null})};return{translate:e,shopId:s,cart:m,currency:u,formatPrice:r,cartTotal:p,totalAmount:h,shop:d,maxQty:N,updateCart:y,removeItem:b,clearCart:V,fancyBox:o}}},P=a(3744);const Q=(0,P.Z)(T,[["render",w],["__scopeId","data-v-72b4c6d4"]]);var Z=Q}}]);
//# sourceMappingURL=cart.db2a8c6b.js.map