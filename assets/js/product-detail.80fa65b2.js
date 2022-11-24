(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-detail"],{3479:function(e,t,c){},"501e":function(e,t,c){"use strict";c("3479")},"5f47":function(e,t,c){"use strict";c.r(t);c("b0c0"),c("a4d3"),c("e01a"),c("99af"),c("b680"),c("a9e3");var a=c("f2bf"),r={key:0},n={class:"mb-3"},o={class:"font-semibold"},i=Object(a["createElementVNode"])("span",null," > ",-1),l={class:"grid grid-cols-3 gap-2 lg:gap-3"},s={class:"col-span-3 md:col-span-2"},d={class:"flex items-start overflow-hidden mb-3 md:mb-4"},u=["src"],m={class:"flex-1"},b=["src"],p={class:"col-span-3 md:col-span-1"},j={class:"shadow bg-gray-100 dark:bg-gray-700 rounded p-4"},O={class:"font-bold text-lg mb-3"},g={class:"text-sm text-gray-400"},f={class:"font-bold"},h={class:"text-sm mt-8 flex items-center justify-between mb-3"},v=["max"],N={class:"flex items-center"},y={class:"text-center mr-3"},V={class:"font-bold text-2xl"},x={class:"mt-2"},E={class:"flex-1"},w={class:"flex justify-between items-center mb-1"},k={class:"flex items-center"},S=Object(a["createTextVNode"])(" 5 "),C={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},D={class:"flex justify-between items-center mb-1"},R={class:"flex items-center"},I=Object(a["createTextVNode"])(" 4 "),B={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},T={class:"flex justify-between items-center mb-1"},P={class:"flex items-center"},q=Object(a["createTextVNode"])(" 3 "),_={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},U={class:"flex justify-between items-center mb-1"},A={class:"flex items-center"},K=Object(a["createTextVNode"])(" 2 "),M={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"},z={class:"flex justify-between items-center mb-1"},F={class:"flex items-center"},W=Object(a["createTextVNode"])(" 1 "),L={class:"bg-gray-300 dark:bg-gray-600 w-full h-8 mx-3"};function J(e,t,c,J,Q,H){var Y=Object(a["resolveComponent"])("router-link"),G=Object(a["resolveComponent"])("tab"),X=Object(a["resolveComponent"])("review-rating"),Z=Object(a["resolveComponent"])("tab-set"),$=Object(a["resolveComponent"])("j-button"),ee=Object(a["resolveComponent"])("star-rating"),te=Object(a["resolveComponent"])("icon"),ce=Object(a["resolveComponent"])("centered-layout");return Object(a["openBlock"])(),Object(a["createBlock"])(ce,null,{default:Object(a["withCtx"])((function(){return[J.product&&J.selectedShop?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("h5",o,[Object(a["createVNode"])(Y,{to:{name:"shop-detail",params:{id:J.shopId}},tag:"a",class:"text-blue-500 hover:underline"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(J.selectedShop.ShopTitle),1)]})),_:1},8,["to"]),i,Object(a["createVNode"])(Y,{to:{name:"shop-detail-category",params:{id:J.shopId,categoryId:J.category.id}},tag:"a",class:"text-blue-500 hover:underline"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(J.category.name),1)]})),_:1},8,["to"]),Object(a["createTextVNode"])(" > "+Object(a["toDisplayString"])(J.product.itemName),1)])]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("img",{class:"hidden md:block w-36 mr-3 cursor-pointer",src:J.product.imageUri,alt:"",onClick:t[0]||(t[0]=function(e){return J.fancyBox(J.product.imageUri)})},null,8,u),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("img",{src:J.product.imageUri,alt:"",class:"cursor-pointer",onClick:t[1]||(t[1]=function(e){return J.fancyBox(J.product.imageUri)})},null,8,b)])]),Object(a["createVNode"])(Z,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(G,{name:"Description"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(J.product.description),1)]})),_:1}),Object(a["createVNode"])(G,{name:"Reviews"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(X,{shopId:J.shopId,product:J.product,onFetchRatings:J.fetchRatings},null,8,["shopId","product","onFetchRatings"])]})),_:1})]})),_:1})]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("h3",O,Object(a["toDisplayString"])(J.product.itemName),1),Object(a["createElementVNode"])("p",g,"SKU: "+Object(a["toDisplayString"])(J.product.sku),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(J.product.description),1),Object(a["createElementVNode"])("p",f,Object(a["toDisplayString"])(J.formatPrice(J.product.price)),1),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("span",null,"Qty: "+Object(a["toDisplayString"])("".concat(J.availableStock," ").concat(J.translate("pos.cart.available"))),1),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{max:J.maxQty,"aria-label":"quantity",class:"form-input w-36",min:"1",type:"number","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.qty=t})},null,8,v),[[a["vModelText"],e.qty]])]),Object(a["createVNode"])($,{onClick:t[3]||(t[3]=function(e){return J.addToCart()}),class:"w-full mb-3"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(J.translate(J.isExistsInCart?"pos.cart.update_cart":"pos.cart.add_to_cart")),1)]})),_:1}),Object(a["createVNode"])(Y,{to:{name:"shop-detail",params:{id:J.shopId}},class:"btn btn-primary w-full mb-3",tag:"a"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(J.translate("pos.cart.continue_shopping")),1)]})),_:1},8,["to"]),J.isExistsInCart?(Object(a["openBlock"])(),Object(a["createBlock"])(Y,{key:0,class:"btn btn-primary w-full mb-3",tag:"a",to:{name:"cart"}},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(J.translate("pos.cart.checkout")),1)]})),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("p",V,Object(a["toDisplayString"])(e.totalRatings.toFixed(1)),1),Object(a["createVNode"])(ee,{increment:.1,"max-rating":5,rating:Number(e.totalRatings),"read-only":!0,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["increment","rating"]),Object(a["createElementVNode"])("p",x,[Object(a["createVNode"])(te,{name:"user"}),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.counter)+" total ",1)])]),Object(a["createElementVNode"])("div",E,[Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("div",k,[Object(a["createVNode"])(te,{name:"star",classes:"w-5 h-5 mr-2"}),S]),Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])("width:"+J.getPercentageWidth(5)),class:"h-8 bg-green-700 z-10"},null,4)]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(J.getRatingCount(5)),1)]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",R,[Object(a["createVNode"])(te,{name:"star",classes:"w-5 h-5 mr-2"}),I]),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])("width:"+J.getPercentageWidth(4)),class:"h-8 bg-green-500"},null,4)]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(J.getRatingCount(4)),1)]),Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("div",P,[Object(a["createVNode"])(te,{name:"star",classes:"w-5 h-5 mr-2"}),q]),Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])("width:"+J.getPercentageWidth(3)),class:"h-8 bg-yellow-500"},null,4)]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(J.getRatingCount(3)),1)]),Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",A,[Object(a["createVNode"])(te,{name:"star",classes:"w-5 h-5 mr-2"}),K]),Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])("width:"+J.getPercentageWidth(2)),class:"h-8 bg-orange-500"},null,4)]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(J.getRatingCount(2)),1)]),Object(a["createElementVNode"])("div",z,[Object(a["createElementVNode"])("div",F,[Object(a["createVNode"])(te,{name:"star",classes:"w-5 h-5 mr-2"}),W]),Object(a["createElementVNode"])("div",L,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])("width:"+J.getPercentageWidth(1)),class:"h-8 bg-red-500"},null,4)]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(J.getRatingCount(1)),1)])])])])])])])):Object(a["createCommentVNode"])("",!0)]})),_:1})}var Q=c("5530"),H=(c("d81d"),c("4de4"),c("d3b7"),c("25f0"),c("b64b"),c("9e55")),Y=c("cdae"),G=c("4032"),X=c("bad0"),Z=c("f51a"),$=function(e){return Object(a["pushScopeId"])("data-v-40a5f186"),e=e(),Object(a["popScopeId"])(),e},ee={key:0},te={style:{"max-height":"500px"},class:"scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-600"},ce={class:"flex items-start review"},ae={class:"avatar"},re={class:"mb-3"},ne={class:"font-semibold mb-1"},oe={class:"flex items-start md:items-center flex-col md:flex-row mb-2"},ie={class:"ml-0 md:ml-3 text-sm font-medium"},le={class:"font-semibold"},se={class:"text-gray-500"},de=$((function(){return Object(a["createElementVNode"])("hr",{class:"border-gray-300 dark:border-gray-600 mb-3"},null,-1)})),ue={class:"grid grid-cols-3 gap-2 lg:gap-4"},me={class:"col-span-3 md:col-span-1 mb-2"},be={class:"block mb-1"},pe=$((function(){return Object(a["createElementVNode"])("span",{class:"ml-1 text-red-500"},"*",-1)})),je={class:"text-red-500 text-sm"},Oe={class:"col-span-3 md:col-span-1 mb-2"},ge={class:"block mb-1"},fe=$((function(){return Object(a["createElementVNode"])("span",{class:"ml-1 text-red-500"},"*",-1)})),he={class:"text-red-500 text-sm"},ve={class:"col-span-3 md:col-span-1 mb-2"},Ne={class:"block mb-1"},ye=$((function(){return Object(a["createElementVNode"])("span",{class:"ml-1 text-red-500"},"*",-1)})),Ve={class:"text-red-500 text-sm"},xe={class:"mb-2"},Ee={class:"block mb-1"},we=$((function(){return Object(a["createElementVNode"])("span",{class:"ml-1 text-red-500"},"*",-1)})),ke={class:"text-red-500 text-sm"},Se={class:"mb-2"},Ce={class:"text-red-500 text-sm"},De={class:"text-red-500 text-sm"},Re={class:"mt-4 text-right"},Ie={key:0,class:"mr-3"};function Be(e,t,c,r,n,o){var i=Object(a["resolveComponent"])("star-rating"),l=Object(a["resolveComponent"])("vue-recaptcha"),s=Object(a["resolveComponent"])("icon"),d=Object(a["resolveComponent"])("j-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.productRatings.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ee,[Object(a["createElementVNode"])("div",te,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.productRatings,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:t},[Object(a["createElementVNode"])("div",ce,[Object(a["createElementVNode"])("div",ae,Object(a["toDisplayString"])(r.generateAvatar(e.ReviewerName)),1),Object(a["createElementVNode"])("div",re,[Object(a["createElementVNode"])("p",ne,Object(a["toDisplayString"])(e.ReviewerName),1),Object(a["createElementVNode"])("div",oe,[Object(a["createVNode"])(i,{increment:1,"max-rating":5,rating:Number(e.ReviewStars),"read-only":!0,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["rating"]),Object(a["createElementVNode"])("p",ie,Object(a["toDisplayString"])("".concat(r.formatDT(e.ReviewCreatedOn)," - ").concat(e.ReviewerEmail)),1)]),Object(a["createElementVNode"])("p",le,Object(a["toDisplayString"])(e.ReviewTitle),1),Object(a["createElementVNode"])("p",se,Object(a["toDisplayString"])(e.ReviewDescription),1)])])])})),128))]),de])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return r.submit()}),["prevent"]))},[Object(a["createElementVNode"])("div",ue,[Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("label",be,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.translate("ratings.author"))+" ",1),pe]),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-input w-full",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.author=t})},null,512),[[a["vModelText"],e.form.author]]),Object(a["createElementVNode"])("div",je,Object(a["toDisplayString"])(r.showError(e.errorBag,"author")),1)]),Object(a["createElementVNode"])("div",Oe,[Object(a["createElementVNode"])("label",ge,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.translate("ratings.email"))+" ",1),fe]),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-input w-full",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.email=t})},null,512),[[a["vModelText"],e.form.email]]),Object(a["createElementVNode"])("div",he,Object(a["toDisplayString"])(r.showError(e.errorBag,"email")),1)]),Object(a["createElementVNode"])("div",ve,[Object(a["createElementVNode"])("label",Ne,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.translate("ratings.title"))+" ",1),ye]),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-input w-full",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.title=t})},null,512),[[a["vModelText"],e.form.title]]),Object(a["createElementVNode"])("div",Ve,Object(a["toDisplayString"])(r.showError(e.errorBag,"title")),1)])]),Object(a["createElementVNode"])("div",xe,[Object(a["createElementVNode"])("label",Ee,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.translate("ratings.comment"))+" ",1),we]),Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{class:"form-input w-full",rows:"3","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.comment=t})},null,512),[[a["vModelText"],e.form.comment]]),Object(a["createElementVNode"])("div",ke,Object(a["toDisplayString"])(r.showError(e.errorBag,"comment")),1)]),Object(a["createElementVNode"])("div",Se,[Object(a["createVNode"])(l,{ref:"vueRecaptcha",siteKey:e.reCaptchaAPIKey,size:"normal",onExpire:r.recaptchaExpired,theme:r.theme,onFail:r.recaptchaFailed,onVerify:r.recaptchaVerified},null,8,["siteKey","onExpire","theme","onFail","onVerify"]),Object(a["createElementVNode"])("div",Ce,Object(a["toDisplayString"])(r.showError(e.errorBag,"reCaptcha")),1)]),Object(a["createVNode"])(i,{increment:1,"max-rating":5,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0",rating:e.form.rating,"onUpdate:rating":t[4]||(t[4]=function(t){return e.form.rating=t})},null,8,["rating"]),Object(a["createElementVNode"])("div",De,Object(a["toDisplayString"])(r.showError(e.errorBag,"rating")),1),Object(a["createElementVNode"])("div",Re,[Object(a["createVNode"])(d,{disabled:e.isProcessing},{default:Object(a["withCtx"])((function(){return[e.isProcessing?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ie,[Object(a["createVNode"])(s,{name:"spinner",classes:"w-4 h-4 text-white"})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(r.translate("ratings.btn_rate")),1)]})),_:1},8,["disabled"])])],32)],64)}var Te=c("5b3d"),Pe=c.n(Te),qe=c("2e4e"),_e=c("5502"),Ue=c("ea45"),Ae=c("2e13"),Ke=c("8923"),Me=c("2ef0"),ze={name:"ReviewRating",props:["shopId","product"],components:{StarRating:Pe.a,vueRecaptcha:qe["a"],JButton:G["a"],Icon:Y["a"]},setup:function(e,t){var c=t.emit,r=Object(a["inject"])("translate"),n=Object(a["inject"])("http"),o=Object(a["inject"])("toast"),i=Object(a["ref"])(null),l=Object(_e["b"])(),s=Object(Ue["a"])(),d=s.validate,u=s.showError,m=Object(Ae["a"])(),b=m.formatDT,p=m.saveNotification,j=Object(a["reactive"])({reCaptchaAPIKey:"6LdOLTEUAAAAAGDKKH5DMUQbW8PtXjimV6ZDrBKr",form:{rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},errorBag:{},rules:{author:["required"],email:["required","email"],title:["required"],comment:["required"],rating:["required","minValue:1"],reCaptcha:["required"]},messages:{author:{required:"Please enter your full name"},email:{required:"Please enter your email address",email:"Email address is not valid"},title:{required:"Review title is required"},comment:{required:"Review text is required"},rating:{required:"Please rate the product",minValue:"Please rate the product"},reCaptcha:{required:"Verify you are not a robot"}},productRatings:[],isProcessing:!1}),O=Object(a["computed"])((function(){return l.state.mode}));Object(a["watch"])((function(){return Object(Q["a"])({},j.form)}),(function(e,t){Object.keys(j.errorBag).length>0&&(j.errorBag=d(e,j.rules,j.messages))}));var g="https://app.cointopay.com",f=function(e){return e?e[0]:""},h=function(e){j.form.reCaptcha=e},v=function(){i.value.reset(),j.form.reCaptcha=""},N=function(){},y=function(){l.dispatch(Ke["j"],e.shopId).then((function(t){j.ratings=t,j.productRatings=[],j.counter=0,e.product&&j.ratings.map((function(t){t.SKU===e.product.sku&&(j.counter+=1,j.productRatings.push(t))})),j.productRatings=Me["orderBy"](j.productRatings,"ReviewCreatedOn","desc")}))},V=function(){if(j.errorBag=d(j.form,j.rules,j.messages),0===Object.keys(j.errorBag).length){j.isProcessing=!0;var t=Object(Q["a"])(Object(Q["a"])({},j.form),{},{merchantid:e.shopId,sku:e.product.sku,output:"json"});n.get("".concat(g,"/MarketAPI"),{params:t}).then((function(e){j.isProcessing=!1,o.success("Thank you for your review"),p("Thank you for your review"),y(),i.value.reset(),j.form={rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},c("fetchRatings")})).catch((function(e){console.log(e),j.isProcessing=!1,i.value.reset()}))}};return Object(a["onBeforeMount"])((function(){y()})),Object(Q["a"])(Object(Q["a"])({translate:r},Object(a["toRefs"])(j)),{},{vueRecaptcha:i,showError:u,theme:O,generateAvatar:f,recaptchaVerified:h,recaptchaExpired:v,recaptchaFailed:N,formatDT:b,submit:V})}},Fe=(c("501e"),c("6b0d")),We=c.n(Fe);const Le=We()(ze,[["render",Be],["__scopeId","data-v-40a5f186"]]);var Je=Le,Qe=c("6c02"),He={name:"ProductDetail",components:{CenteredLayout:H["a"],StarRating:Pe.a,Icon:Y["a"],JButton:G["a"],TabSet:X["a"],Tab:Z["a"],ReviewRating:Je},setup:function(){var e=Object(a["inject"])("translate"),t=Object(a["inject"])("http"),c=Object(a["inject"])("toast"),r=Object(a["inject"])("swal"),n=Object(_e["b"])(),o=Object(Qe["d"])(),i=Object(Qe["e"])(),l=Object(Ae["a"])(),s=l.saveNotification,d=l.formatPrice,u=l.fancyBox,m=Object(a["reactive"])({productId:null,qty:1,form:{rating:0,sku:"",merchantid:"",author:"",email:"",title:"",comment:"",reCaptcha:""},ratings:[],productRatings:[],totalRatings:0,counter:0,isProcessing:!1}),b=Object(a["computed"])((function(){return n.state.shopId})),p=Object(a["computed"])((function(){return n.state.shopData})),j=Object(a["computed"])((function(){return n.state.shopsList})),O=Object(a["computed"])((function(){return n.state.cart})),g=Object(a["computed"])((function(){return n.state.altCoins})),f=Object(a["computed"])((function(){return b.value?Me["find"](j.value,{ID:b.value}):null})),h=Object(a["computed"])((function(){return m.productId?Me["find"](p.value.products,{id:m.productId}):null})),v=Object(a["computed"])((function(){return Me["find"](O.value.items,{id:h.value.id})})),N=Object(a["computed"])((function(){return Me["find"](p.value.categories,{id:h.value.categoryID})})),y=Object(a["computed"])((function(){var e="EUR";if(f.value){e=f.value.PayoutCurrencyShortName;var t=Me["find"](g.value,{ShortName:e});t&&(e=t.LongName)}return e})),V=Object(a["computed"])((function(){var e=Number(h.value.stock);return v.value&&(e-=Number(v.value.qty)),e})),x=Object(a["computed"])((function(){var e=Number(h.value.stock)-m.qty;return v.value&&(e-=Number(v.value.qty)),e})),E=Object(a["computed"])((function(){return-1!==Me["findIndex"](O.value.items,{id:h.value.id})})),w="https://app.cointopay.com",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n.dispatch(Ke["j"],e||b.value).then((function(e){m.ratings=e,m.productRatings=[],m.counter=0;var t=0;h.value&&m.ratings.map((function(e){e.SKU===h.value.sku&&(m.counter+=1,m.productRatings.push(e),t=Number(t)+Number(e.ReviewStars))})),m.totalRatings=m.counter>0?t/m.counter:0,m.productRatings=Me["orderBy"](m.productRatings,"ReviewCreatedOn","desc")}))},S=function(e){return m.productRatings.filter((function(t){return Number(t.ReviewStars)===e})).length},C=function(e){var t=S(e);if(m.counter>0&&t>0){var c=t/m.counter*100;return"".concat(c,"%")}return 0},D=function(){if(m.qty>0&&m.qty<=Number(h.value.stock)){var e=Me["cloneDeep"](O.value);0===e.items.length&&(e.merchantId=null),null!==e.merchantId&&e.merchantId.toString()!==b.value.toString()?r.fire({title:"You can only add items from same merchant",text:"Do you want to order your current shopping cart items?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"swal2-tailwind"}}).then((function(c){"cancel"===c.dismiss?i.push("/shop/cart"):c.value&&t.get("".concat(w,"/MarketAPI"),{params:{POSDATA:"",Call:"SHOWPOS",KeyData:"".concat(e.merchantId,"_products"),MerchantID:e.merchantId,showpos:1}}).then((function(t){var c=t.data;e.items&&(e.items.map((function(e){if(6===Object.keys(e).length){var t=Me["findIndex"](c,{sku:e.sku});-1!==t&&(c[t].stock=Number(c[t].stock)+Number(e.qty))}else{var a=Me["findIndex"](c,{id:e.id});-1!==a&&(c[a].stock=Number(c[a].stock)+Number(e.qty))}})),n.dispatch(Ke["w"],{Call:"UPDATE",data:c,user:{ID:e.merchantId,APIKey:"_"}}).then((function(){e={items:[],merchantId:b.value},n.commit(Ke["ib"],O),setTimeout((function(){R(O)}),300)})))}))})):R(e)}else c.error("Please provide correct quantity")},R=function(e){if(null===e.merchantId||e.merchantId.toString()===b.value.toString()){var t=Me["findIndex"](e.items,{id:h.value.id});-1!==t?e.items[t].qty=Number(e.items[t].qty)+Number(m.qty):(e.items.push({id:h.value.id,sku:h.value.sku,name:h.value.itemName,url:h.value.imageUri,price:h.value.price,qty:m.qty}),e.merchantId=b.value),n.commit(Ke["ib"],e),c.success("Item added to the cart successfully")}};return Object(a["onBeforeMount"])((function(){if(Object.keys(o.params).length>0){var e=o.params.shopId;k(e),n.commit(Ke["bb"],e),m.productId=o.params.id,0===p.value.categories.length&&(m.isProcessing=!0,n.dispatch(Ke["l"]).then((function(){n.dispatch(Ke["m"],{shopId:e}).then((function(e){m.isProcessing=!1,"nothing found"===e.categories&&(c.warning("Store for this merchant is not enabled"),s("Store for this merchant is not enabled"),i.push({name:"shop"}))})).catch((function(e){m.isProcessing=!1,console.log(e)}))})).catch((function(){m.isProcessing=!1})))}h.value&&0===Number(h.value.stock)&&i.push({path:"/shop",params:{id:b.value}})})),Object(Q["a"])(Object(Q["a"])({translate:e},Object(a["toRefs"])(m)),{},{selectedShop:f,currency:y,category:N,product:h,shopId:b,formatPrice:d,availableStock:x,maxQty:V,fancyBox:u,isExistsInCart:E,getRatingCount:S,getPercentageWidth:C,addToCart:D,fetchRatings:k})}};const Ye=We()(He,[["render",J]]);t["default"]=Ye}}]);
//# sourceMappingURL=product-detail.80fa65b2.js.map