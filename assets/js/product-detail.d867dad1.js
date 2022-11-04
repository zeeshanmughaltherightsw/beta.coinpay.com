"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[928],{7182:function(e,t,a){a.r(t),a.d(t,{default:function(){return Qe}});var r=a(821);const o={key:0},s={class:"mb-3"},n={class:"font-semibold"},l=(0,r.createElementVNode)("span",null," > ",-1),c={class:"grid grid-cols-3 gap-2 lg:gap-3"},i={class:"col-span-3 md:col-span-2"},d={class:"flex items-start overflow-hidden mb-3 md:mb-4"},m=["src"],u={class:"flex-1"},p=["src"],g={class:"col-span-3 md:col-span-1"},h={class:"shadow bg-gray-100 dark:bg-gray-700 rounded p-4"},v={class:"font-bold text-lg mb-3"},N={class:"text-sm text-gray-400"},y={class:"font-bold"},f={class:"text-sm mt-8 flex items-center justify-between mb-3"},V=["max"],b={class:"flex items-center"},x={class:"text-center mr-3"},E={class:"font-bold text-2xl"},w={class:"mt-2"},k={class:"flex-1"},S={class:"flex justify-between items-center mb-1"},C={class:"flex items-center"},D=(0,r.createTextVNode)(" 5 "),R={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},I={class:"flex justify-between items-center mb-1"},T={class:"flex items-center"},B=(0,r.createTextVNode)(" 4 "),P={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},q={class:"flex justify-between items-center mb-1"},j={class:"flex items-center"},_=(0,r.createTextVNode)(" 3 "),U={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},A={class:"flex justify-between items-center mb-1"},Z={class:"flex items-center"},K=(0,r.createTextVNode)(" 2 "),M={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},O={class:"flex justify-between items-center mb-1"},z={class:"flex items-center"},$=(0,r.createTextVNode)(" 1 "),F={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"};function W(e,t,a,W,L,Q){const H=(0,r.resolveComponent)("router-link"),J=(0,r.resolveComponent)("tab"),Y=(0,r.resolveComponent)("review-rating"),G=(0,r.resolveComponent)("tab-set"),X=(0,r.resolveComponent)("j-button"),ee=(0,r.resolveComponent)("star-rating"),te=(0,r.resolveComponent)("icon"),ae=(0,r.resolveComponent)("centered-layout");return(0,r.openBlock)(),(0,r.createBlock)(ae,null,{default:(0,r.withCtx)((()=>[W.product&&W.selectedShop?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("h5",n,[(0,r.createVNode)(H,{to:{name:"shop-detail",params:{id:W.shopId}},tag:"a",class:"text-blue-500 hover:underline"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(W.selectedShop.ShopTitle),1)])),_:1},8,["to"]),l,(0,r.createVNode)(H,{to:{name:"shop-detail-category",params:{id:W.shopId,categoryId:W.category.id}},tag:"a",class:"text-blue-500 hover:underline"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(W.category.name),1)])),_:1},8,["to"]),(0,r.createTextVNode)(" > "+(0,r.toDisplayString)(W.product.itemName),1)])]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("img",{class:"hidden md:block w-36 mr-3 cursor-pointer",src:W.product.imageUri,alt:"",onClick:t[0]||(t[0]=e=>W.fancyBox(W.product.imageUri))},null,8,m),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("img",{src:W.product.imageUri,alt:"",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>W.fancyBox(W.product.imageUri))},null,8,p)])]),(0,r.createVNode)(G,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(J,{name:"Description"},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(W.product.description),1)])),_:1}),(0,r.createVNode)(J,{name:"Reviews"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(Y,{shopId:W.shopId,product:W.product,onFetchRatings:W.fetchRatings},null,8,["shopId","product","onFetchRatings"])])),_:1})])),_:1})]),(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("h3",v,(0,r.toDisplayString)(W.product.itemName),1),(0,r.createElementVNode)("p",N,"SKU: "+(0,r.toDisplayString)(W.product.sku),1),(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(W.product.description),1),(0,r.createElementVNode)("p",y,(0,r.toDisplayString)(W.formatPrice(W.product.price)),1),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("span",null,"Qty: "+(0,r.toDisplayString)(`${W.availableStock} ${W.translate("pos.cart.available")}`),1),(0,r.withDirectives)((0,r.createElementVNode)("input",{max:W.maxQty,"aria-label":"quantity",class:"form-input w-36",min:"1",type:"number","onUpdate:modelValue":t[2]||(t[2]=t=>e.qty=t)},null,8,V),[[r.vModelText,e.qty]])]),(0,r.createVNode)(X,{onClick:t[3]||(t[3]=e=>W.addToCart()),class:"w-full mb-3"},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(W.translate(W.isExistsInCart?"pos.cart.update_cart":"pos.cart.add_to_cart")),1)])),_:1}),(0,r.createVNode)(H,{to:{name:"shop-detail",params:{id:W.shopId}},class:"btn btn-primary w-full mb-3",tag:"a"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(W.translate("pos.cart.continue_shopping")),1)])),_:1},8,["to"]),W.isExistsInCart?((0,r.openBlock)(),(0,r.createBlock)(H,{key:0,class:"btn btn-primary w-full mb-3",tag:"a",to:{name:"cart"}},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(W.translate("pos.cart.checkout")),1)])),_:1})):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("p",E,(0,r.toDisplayString)(e.totalRatings.toFixed(1)),1),(0,r.createVNode)(ee,{increment:.1,"max-rating":5,rating:Number(e.totalRatings),"read-only":!0,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["increment","rating"]),(0,r.createElementVNode)("p",w,[(0,r.createVNode)(te,{name:"user"}),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.counter)+" total ",1)])]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",C,[(0,r.createVNode)(te,{name:"star",classes:"w-5 h-5 mr-2"}),D]),(0,r.createElementVNode)("div",R,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("width:"+W.getPercentageWidth(5)),class:"h-8 bg-green-700 z-10"},null,4)]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(W.getRatingCount(5)),1)]),(0,r.createElementVNode)("div",I,[(0,r.createElementVNode)("div",T,[(0,r.createVNode)(te,{name:"star",classes:"w-5 h-5 mr-2"}),B]),(0,r.createElementVNode)("div",P,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("width:"+W.getPercentageWidth(4)),class:"h-8 bg-green-500"},null,4)]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(W.getRatingCount(4)),1)]),(0,r.createElementVNode)("div",q,[(0,r.createElementVNode)("div",j,[(0,r.createVNode)(te,{name:"star",classes:"w-5 h-5 mr-2"}),_]),(0,r.createElementVNode)("div",U,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("width:"+W.getPercentageWidth(3)),class:"h-8 bg-yellow-500"},null,4)]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(W.getRatingCount(3)),1)]),(0,r.createElementVNode)("div",A,[(0,r.createElementVNode)("div",Z,[(0,r.createVNode)(te,{name:"star",classes:"w-5 h-5 mr-2"}),K]),(0,r.createElementVNode)("div",M,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("width:"+W.getPercentageWidth(2)),class:"h-8 bg-orange-500"},null,4)]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(W.getRatingCount(2)),1)]),(0,r.createElementVNode)("div",O,[(0,r.createElementVNode)("div",z,[(0,r.createVNode)(te,{name:"star",classes:"w-5 h-5 mr-2"}),$]),(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)("width:"+W.getPercentageWidth(1)),class:"h-8 bg-red-500"},null,4)]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(W.getRatingCount(1)),1)])])])])])])])):(0,r.createCommentVNode)("",!0)])),_:1})}var L=a(784),Q=a(7983),H=a(3164),J=a(1322),Y=a(7304);const G=e=>((0,r.pushScopeId)("data-v-58d1cef2"),e=e(),(0,r.popScopeId)(),e),X={key:0},ee={style:{"max-height":"500px"},class:"scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-600"},te={class:"flex items-start review"},ae={class:"avatar"},re={class:"mb-3"},oe={class:"font-semibold mb-1"},se={class:"flex items-start md:items-center flex-col md:flex-row mb-2"},ne={class:"ml-0 md:ml-3 text-sm font-medium"},le={class:"font-semibold"},ce={class:"text-gray-500"},ie=G((()=>(0,r.createElementVNode)("hr",{class:"border-gray-300 dark:border-gray-600 mb-3"},null,-1))),de={class:"grid grid-cols-3 gap-2 lg:gap-4"},me={class:"col-span-3 md:col-span-1 mb-2"},ue={class:"block mb-1"},pe=G((()=>(0,r.createElementVNode)("span",{class:"ml-1 text-red-500"},"*",-1))),ge={class:"text-red-500 text-sm"},he={class:"col-span-3 md:col-span-1 mb-2"},ve={class:"block mb-1"},Ne=G((()=>(0,r.createElementVNode)("span",{class:"ml-1 text-red-500"},"*",-1))),ye={class:"text-red-500 text-sm"},fe={class:"col-span-3 md:col-span-1 mb-2"},Ve={class:"block mb-1"},be=G((()=>(0,r.createElementVNode)("span",{class:"ml-1 text-red-500"},"*",-1))),xe={class:"text-red-500 text-sm"},Ee={class:"mb-2"},we={class:"block mb-1"},ke=G((()=>(0,r.createElementVNode)("span",{class:"ml-1 text-red-500"},"*",-1))),Se={class:"text-red-500 text-sm"},Ce={class:"mb-2"},De={class:"text-red-500 text-sm"},Re={class:"text-red-500 text-sm"},Ie={class:"mt-4 text-right"},Te={key:0,class:"mr-3"};function Be(e,t,a,o,s,n){const l=(0,r.resolveComponent)("star-rating"),c=(0,r.resolveComponent)("vue-recaptcha"),i=(0,r.resolveComponent)("icon"),d=(0,r.resolveComponent)("j-button");return e.productRatings.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("div",X,[(0,r.createElementVNode)("div",ee,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.productRatings,((e,t)=>((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:t},[(0,r.createElementVNode)("div",te,[(0,r.createElementVNode)("div",ae,(0,r.toDisplayString)(o.generateAvatar(e.ReviewerName)),1),(0,r.createElementVNode)("div",re,[(0,r.createElementVNode)("p",oe,(0,r.toDisplayString)(e.ReviewerName),1),(0,r.createElementVNode)("div",se,[(0,r.createVNode)(l,{increment:1,"max-rating":5,rating:Number(e.ReviewStars),"read-only":!0,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["rating"]),(0,r.createElementVNode)("p",ne,(0,r.toDisplayString)(`${o.formatDT(e.ReviewCreatedOn)} - ${e.ReviewerEmail}`),1)]),(0,r.createElementVNode)("p",le,(0,r.toDisplayString)(e.ReviewTitle),1),(0,r.createElementVNode)("p",ce,(0,r.toDisplayString)(e.ReviewDescription),1)])])])))),128))]),ie,(0,r.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,r.withModifiers)((e=>o.submit()),["prevent"]))},[(0,r.createElementVNode)("div",de,[(0,r.createElementVNode)("div",me,[(0,r.createElementVNode)("label",ue,[(0,r.createTextVNode)((0,r.toDisplayString)(o.translate("ratings.author"))+" ",1),pe]),(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"form-input w-full",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.author=t)},null,512),[[r.vModelText,e.form.author]]),(0,r.createElementVNode)("div",ge,(0,r.toDisplayString)(o.showError(e.errorBag,"author")),1)]),(0,r.createElementVNode)("div",he,[(0,r.createElementVNode)("label",ve,[(0,r.createTextVNode)((0,r.toDisplayString)(o.translate("ratings.email"))+" ",1),Ne]),(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"form-input w-full",type:"email","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.email=t)},null,512),[[r.vModelText,e.form.email]]),(0,r.createElementVNode)("div",ye,(0,r.toDisplayString)(o.showError(e.errorBag,"email")),1)]),(0,r.createElementVNode)("div",fe,[(0,r.createElementVNode)("label",Ve,[(0,r.createTextVNode)((0,r.toDisplayString)(o.translate("ratings.title"))+" ",1),be]),(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"form-input w-full",type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.title=t)},null,512),[[r.vModelText,e.form.title]]),(0,r.createElementVNode)("div",xe,(0,r.toDisplayString)(o.showError(e.errorBag,"title")),1)])]),(0,r.createElementVNode)("div",Ee,[(0,r.createElementVNode)("label",we,[(0,r.createTextVNode)((0,r.toDisplayString)(o.translate("ratings.comment"))+" ",1),ke]),(0,r.withDirectives)((0,r.createElementVNode)("textarea",{class:"form-input w-full",rows:"3","onUpdate:modelValue":t[3]||(t[3]=t=>e.form.comment=t)},null,512),[[r.vModelText,e.form.comment]]),(0,r.createElementVNode)("div",Se,(0,r.toDisplayString)(o.showError(e.errorBag,"comment")),1)]),(0,r.createElementVNode)("div",Ce,[(0,r.createVNode)(c,{ref:"vueRecaptcha",siteKey:e.reCaptchaAPIKey,size:"normal",onExpire:o.recaptchaExpired,theme:o.theme,onFail:o.recaptchaFailed,onVerify:o.recaptchaVerified},null,8,["siteKey","onExpire","theme","onFail","onVerify"]),(0,r.createElementVNode)("div",De,(0,r.toDisplayString)(o.showError(e.errorBag,"reCaptcha")),1)]),(0,r.createVNode)(l,{increment:1,"max-rating":5,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0",rating:e.form.rating,"onUpdate:rating":t[4]||(t[4]=t=>e.form.rating=t)},null,8,["rating"]),(0,r.createElementVNode)("div",Re,(0,r.toDisplayString)(o.showError(e.errorBag,"rating")),1),(0,r.createElementVNode)("div",Ie,[(0,r.createVNode)(d,{disabled:e.isProcessing},{default:(0,r.withCtx)((()=>[e.isProcessing?((0,r.openBlock)(),(0,r.createElementBlock)("div",Te,[(0,r.createVNode)(i,{name:"spinner",classes:"w-4 h-4 text-white"})])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(o.translate("ratings.btn_rate")),1)])),_:1},8,["disabled"])])],32)])):(0,r.createCommentVNode)("",!0)}var Pe=a(7848),qe=a.n(Pe),je=a(38),_e=a(8637),Ue=a(6232),Ae=a(4729),Ze=a(9783),Ke=a(6486),Me={name:"ReviewRating",props:["shopId","product"],components:{StarRating:qe(),vueRecaptcha:je.Z,JButton:H.Z,Icon:Q.Z},setup(e,{emit:t}){const a=(0,r.inject)("translate"),o=(0,r.inject)("http"),s=(0,r.inject)("toast"),n=(0,r.ref)(null),l=(0,_e.oR)(),{validate:c,showError:i}=(0,Ue.Z)(),{formatDT:d,saveNotification:m}=(0,Ae.Z)(),u=(0,r.reactive)({reCaptchaAPIKey:"6LdOLTEUAAAAAGDKKH5DMUQbW8PtXjimV6ZDrBKr",form:{rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},errorBag:{},rules:{author:["required"],email:["required","email"],title:["required"],comment:["required"],rating:["required","minValue:1"],reCaptcha:["required"]},messages:{author:{required:"Please enter your full name"},email:{required:"Please enter your email address",email:"Email address is not valid"},title:{required:"Review title is required"},comment:{required:"Review text is required"},rating:{required:"Please rate the product",minValue:"Please rate the product"},reCaptcha:{required:"Verify you are not a robot"}},productRatings:[],isProcessing:!1}),p=(0,r.computed)((()=>l.state.mode));(0,r.watch)((()=>({...u.form})),((e,t)=>{Object.keys(u.errorBag).length>0&&(u.errorBag=c(e,u.rules,u.messages))}));const g="https://app.cointopay.com",h=e=>e?e[0]:"",v=e=>{u.form.reCaptcha=e},N=()=>{n.value.reset(),u.form.reCaptcha=""},y=()=>{},f=()=>{l.dispatch(Ze.aP,e.shopId).then((t=>{u.ratings=t,u.productRatings=[],u.counter=0,e.product&&u.ratings.map((t=>{t.SKU===e.product.sku&&(u.counter+=1,u.productRatings.push(t))})),u.productRatings=Ke.orderBy(u.productRatings,"ReviewCreatedOn","desc")}))},V=()=>{if(u.errorBag=c(u.form,u.rules,u.messages),0===Object.keys(u.errorBag).length){u.isProcessing=!0;const a={...u.form,merchantid:e.shopId,sku:e.product.sku,output:"json"};o.get(`${g}/MarketAPI`,{params:a}).then((e=>{u.isProcessing=!1,s.success("Thank you for your review"),m("Thank you for your review"),f(),n.value.reset(),u.form={rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},t("fetchRatings")})).catch((e=>{console.log(e),u.isProcessing=!1,n.value.reset()}))}};return(0,r.onBeforeMount)((()=>{f()})),{translate:a,...(0,r.toRefs)(u),vueRecaptcha:n,showError:i,theme:p,generateAvatar:h,recaptchaVerified:v,recaptchaExpired:N,recaptchaFailed:y,formatDT:d,submit:V}}},Oe=a(3744);const ze=(0,Oe.Z)(Me,[["render",Be],["__scopeId","data-v-58d1cef2"]]);var $e=ze,Fe=a(2119),We={name:"ProductDetail",components:{CenteredLayout:L.Z,StarRating:qe(),Icon:Q.Z,JButton:H.Z,TabSet:J.Z,Tab:Y.Z,ReviewRating:$e},setup(){const e=(0,r.inject)("translate"),t=(0,r.inject)("http"),a=(0,r.inject)("toast"),o=(0,r.inject)("swal"),s=(0,_e.oR)(),n=(0,Fe.yj)(),l=(0,Fe.tv)(),{saveNotification:c,formatPrice:i,fancyBox:d}=(0,Ae.Z)(),m=(0,r.reactive)({productId:null,qty:1,form:{rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},ratings:[],productRatings:[],totalRatings:0,counter:0,isProcessing:!1}),u=(0,r.computed)((()=>s.state.shopId)),p=(0,r.computed)((()=>s.state.shopData)),g=(0,r.computed)((()=>s.state.shopsList)),h=(0,r.computed)((()=>s.state.cart)),v=(0,r.computed)((()=>s.state.altCoins)),N=(0,r.computed)((()=>u.value?Ke.find(g.value,{ID:u.value}):null)),y=(0,r.computed)((()=>m.productId?Ke.find(p.value.products,{id:m.productId}):null)),f=(0,r.computed)((()=>Ke.find(h.value.items,{id:y.value.id}))),V=(0,r.computed)((()=>Ke.find(p.value.categories,{id:y.value.categoryID}))),b=(0,r.computed)((()=>{let e="EUR";if(N.value){e=N.value.PayoutCurrencyShortName;const t=Ke.find(v.value,{ShortName:e});t&&(e=t.LongName)}return e})),x=(0,r.computed)((()=>{let e=Number(y.value.stock);return f.value&&(e-=Number(f.value.qty)),e})),E=(0,r.computed)((()=>{let e=Number(y.value.stock)-m.qty;return f.value&&(e-=Number(f.value.qty)),e})),w=(0,r.computed)((()=>-1!==Ke.findIndex(h.value.items,{id:y.value.id}))),k="https://app.cointopay.com",S=(e=null)=>{s.dispatch(Ze.aP,e||u.value).then((e=>{m.ratings=e,m.productRatings=[],m.counter=0;let t=0;y.value&&m.ratings.map((e=>{e.SKU===y.value.sku&&(m.counter+=1,m.productRatings.push(e),t=Number(t)+Number(e.ReviewStars))})),m.totalRatings=m.counter>0?t/m.counter:0,m.productRatings=Ke.orderBy(m.productRatings,"ReviewCreatedOn","desc")}))},C=e=>m.productRatings.filter((t=>Number(t.ReviewStars)===e)).length,D=e=>{const t=C(e);if(m.counter>0&&t>0){const e=t/m.counter*100;return`${e}%`}return 0},R=()=>{if(m.qty>0&&m.qty<=Number(y.value.stock)){let e=Ke.cloneDeep(h.value);0===e.items.length&&(e.merchantId=null),null!==e.merchantId&&e.merchantId.toString()!==u.value.toString()?o.fire({title:"You can only add items from same merchant",text:"Do you want to order your current shopping cart items?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"swal2-tailwind"}}).then((a=>{"cancel"===a.dismiss?l.push("/shop/cart"):a.value&&t.get(`${k}/MarketAPI`,{params:{POSDATA:"",Call:"SHOWPOS",KeyData:`${e.merchantId}_products`,MerchantID:e.merchantId,showpos:1}}).then((t=>{const a=t.data;e.items&&(e.items.map((e=>{if(6===Object.keys(e).length){const t=Ke.findIndex(a,{sku:e.sku});-1!==t&&(a[t].stock=Number(a[t].stock)+Number(e.qty))}else{const t=Ke.findIndex(a,{id:e.id});-1!==t&&(a[t].stock=Number(a[t].stock)+Number(e.qty))}})),s.dispatch(Ze.Rb,{Call:"UPDATE",data:a,user:{ID:e.merchantId,APIKey:"_"}}).then((()=>{e={items:[],merchantId:u.value},s.commit(Ze.gQ,h),setTimeout((()=>{I(h)}),300)})))}))})):I(e)}else a.error("Please provide correct quantity")},I=e=>{if(null===e.merchantId||e.merchantId.toString()===u.value.toString()){const t=Ke.findIndex(e.items,{id:y.value.id});-1!==t?e.items[t].qty=Number(e.items[t].qty)+Number(m.qty):(e.items.push({id:y.value.id,sku:y.value.sku,name:y.value.itemName,url:y.value.imageUri,price:y.value.price,qty:m.qty}),e.merchantId=u.value),s.commit(Ze.gQ,e),a.success("Item added to the cart successfully")}};return(0,r.onBeforeMount)((()=>{if(Object.keys(n.params).length>0){const e=n.params.shopId;S(e),s.commit(Ze.c$,e),m.productId=n.params.id,0===p.value.categories.length&&(m.isProcessing=!0,s.dispatch(Ze._t).then((()=>{s.dispatch(Ze.d7,{shopId:e}).then((e=>{m.isProcessing=!1,"nothing found"===e.categories&&(a.warning("Store for this merchant is not enabled"),c("Store for this merchant is not enabled"),l.push({name:"shop"}))})).catch((e=>{m.isProcessing=!1,console.log(e)}))})).catch((()=>{m.isProcessing=!1})))}y.value&&0===Number(y.value.stock)&&l.push({path:"/shop",params:{id:u.value}})})),{translate:e,...(0,r.toRefs)(m),selectedShop:N,currency:b,category:V,product:y,shopId:u,formatPrice:i,availableStock:E,maxQty:x,fancyBox:d,isExistsInCart:w,getRatingCount:C,getPercentageWidth:D,addToCart:R,fetchRatings:S}}};const Le=(0,Oe.Z)(We,[["render",W]]);var Qe=Le}}]);
//# sourceMappingURL=product-detail.d867dad1.js.map