"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[109],{853:function(e,t,a){a.d(t,{Z:function(){return m}});var o=a(821);const r={class:"grid grid-cols-4 gap-2 xl:gap-3"},c=(0,o.createStaticVNode)('<div class="bg-gray-200 dark:bg-gray-500 rounded w-32 h-32 mx-auto"></div><div class="mt-3 h-2 bg-gray-200 dark:bg-gray-500 rounded"></div><div class="mt-3 h-2 bg-gray-200 dark:bg-gray-500 rounded w-2/5 mx-auto"></div><div class="flex items-center justify-center mt-3"><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div></div>',4),l=[c];function n(e,t,a,c,n,s){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.counter,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e,class:"animate-pulse h-72 shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 rounded col-span-4 md:col-span-2 lg:col-span-1 p-4"},l)))),128))])}var s={name:"Product",props:["counter"]},d=a(3744);const i=(0,d.Z)(s,[["render",n]]);var m=i},5227:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var o=a(821);const r={class:"mb-3 flex items-center justify-between flex-col lg:flex-row"},c={key:0,class:"flex items-center"},l=["src"],n={key:0},s={key:1},d={class:"flex items-center justify-between flex-col lg:flex-row"},i=(0,o.createElementVNode)("option",{value:""},"Filter Products",-1),m=["value"],g={class:"relative w-full lg:w-auto"},u={class:"grid grid-cols-4 gap-2 xl:gap-3"},p=["src"],y={class:"text-center py-1 font-semibold"},h={class:"text-center font-semibold mb-3"},k={class:"flex items-center justify-center mb-3"},f={key:0},v=(0,o.createElementVNode)("hr",{class:"border-gray-300 dark:border-gray-600"},null,-1),b=(0,o.createElementVNode)("div",{class:"w-full rounded shadow px-4 py-3 bg-yellow-500 mb-4 text-yellow-900 font-semibold mt-3"}," No products found ",-1),w=[v,b],P={key:1,class:"flex items-center justify-center mt-3"},N=["disabled"],C={class:"mr-2"},B=["disabled"];function x(e,t,a,v,b,x){const E=(0,o.resolveComponent)("product-skeleton"),V=(0,o.resolveComponent)("router-link"),S=(0,o.resolveComponent)("icon"),I=(0,o.resolveComponent)("star-rating"),D=(0,o.resolveComponent)("centered-layout");return(0,o.openBlock)(),(0,o.createBlock)(D,null,{default:(0,o.withCtx)((()=>[e.isProcessing?((0,o.openBlock)(),(0,o.createBlock)(E,{key:0,counter:8})):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createElementVNode)("div",r,[e.selectedShop?((0,o.openBlock)(),(0,o.createElementBlock)("p",c,[(0,o.createVNode)(V,{to:{name:"shop-detail",params:{id:v.shopId}},tag:"a",class:"flex items-center mr-2"},{default:(0,o.withCtx)((()=>[v.isAvatar(e.selectedShop.Avatar)?((0,o.openBlock)(),(0,o.createElementBlock)("img",{key:0,src:e.selectedShop.Avatar,alt:"",class:"w-8 h-8 rounded-full mr-2"},null,8,l)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("span",{onClick:t[0]||(t[0]=t=>e.category="")},(0,o.toDisplayString)(e.selectedShop.ShopTitle),1)])),_:1},8,["to"]),v.selectedCategory?((0,o.openBlock)(),(0,o.createElementBlock)("span",n," > Category > "+(0,o.toDisplayString)(v.selectedCategory.name),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",s," > Category > all"))])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",d,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.category=t),"aria-label":"Filter",class:"form-select w-full lg:w-auto mr-0 lg:mr-3 mb-3 lg:mb-0"},[i,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(v.productCategories,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{key:t,value:e.id},(0,o.toDisplayString)(e.name),9,m)))),128))],512),[[o.vModelSelect,e.category]]),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(S,{classes:"absolute w-5 h-5 top-3 left-3 dark:text-gray-300",name:"search"}),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.keyword=t),"aria-label":"Search...",placeholder:"Search...",class:"form-input px-10 w-full lg:w-auto",type:"text"},null,512),[[o.vModelText,e.keyword]]),""!==e.keyword?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,class:"absolute top-3 right-3 dark:text-gray-400 cursor-pointer",onClick:t[3]||(t[3]=t=>e.keyword="")},[(0,o.createVNode)(S,{classes:"w-5 h-5",name:"close"})])):(0,o.createCommentVNode)("",!0)])])]),(0,o.createElementVNode)("div",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(v.paginatedProducts,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t,class:"h-72 shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 rounded col-span-4 md:col-span-2 lg:col-span-1 p-4"},[(0,o.createVNode)(V,{to:{name:"product-detail",params:{shopId:v.shopId,id:e.id}},tag:"a"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("img",{src:e.imageUri,alt:"",class:"w-32 h-32 mx-auto object-contain"},null,8,p)])),_:2},1032,["to"]),(0,o.createElementVNode)("h5",y,(0,o.toDisplayString)(e.itemName),1),(0,o.createElementVNode)("p",h,(0,o.toDisplayString)(v.formatPrice(e.price,v.currency)),1),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(I,{increment:.1,"max-rating":5,rating:v.getProductRatings(e.sku),"read-only":!0,"show-rating":!0,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["increment","rating"])])])))),128))]),v.shopId&&e.shop&&0===v.paginatedProducts.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,w)):(0,o.createCommentVNode)("",!0),e.meta.totalPages>1?((0,o.openBlock)(),(0,o.createElementBlock)("div",P,[(0,o.createElementVNode)("button",{disabled:1===e.meta.currentPage,onClick:t[4]||(t[4]=e=>v.paginate("prev")),class:"btn btn-default mr-2"},[(0,o.createVNode)(S,{name:"chevron-left"})],8,N),(0,o.createElementVNode)("span",C,(0,o.toDisplayString)(`${e.meta.currentPage} of ${e.meta.totalPages}`),1),(0,o.createElementVNode)("button",{disabled:e.meta.currentPage===e.meta.totalPages,onClick:t[5]||(t[5]=e=>v.paginate("next")),class:"btn btn-default"},[(0,o.createVNode)(S,{name:"chevron-right"})],8,B)])):(0,o.createCommentVNode)("",!0)],64))])),_:1})}var E=a(784),V=a(853),S=a(7983),I=a(8637),D=a(9783),L=a(2119),j=a(6486),Z=a(4729),F=a(7848),M=a.n(F),R={name:"Shop",components:{CenteredLayout:E.Z,ProductSkeleton:V.Z,StarRating:M(),Icon:S.Z},setup(){const e=(0,o.inject)("toast"),t=(0,I.oR)(),a=(0,L.yj)(),r=(0,L.tv)(),{saveNotification:c,formatPrice:l,copyToClipboard:n}=(0,Z.Z)(),s=(0,o.reactive)({shop:null,category:"",keyword:"",selectedShop:null,meta:{currentPage:1,totalPages:0,limit:12,offset:0},ratings:[],isProcessing:!1}),d=(0,o.computed)((()=>t.state.shopId)),i=(0,o.computed)((()=>t.state.shopsList)),m=(0,o.computed)((()=>t.state.productsFilters)),g=(0,o.computed)((()=>t.state.altCoins)),u=(0,o.computed)((()=>{let e="EUR";if(s.shop){e=s.shop.PayoutCurrencyShortName;const t=j.find(g.value,{ShortName:e});t&&(e=t.LongName)}return e})),p=(0,o.computed)((()=>{let e=j.cloneDeep(s.shop.categories);return e=e.filter(((e,t,a)=>t===a.findIndex((t=>t.id===e.id)))),s.shop.products.length>0?e.filter((e=>-1!==j.findIndex(s.shop.products,{categoryID:e.id}))):[]})),y=(0,o.computed)((()=>s.shop?s.shop.products.filter((e=>{const t=s.keyword.trim().toLowerCase();return s.category&&t?e.categoryID===s.category&&(j.includes(e.itemName.toLowerCase(),t)||j.includes(e.sku.toLowerCase(),t)||j.includes(e.description.toLowerCase(),t))&&Number(e.stock)>0:s.category?e.categoryID===s.category&&Number(e.stock)>0:t?(j.includes(e.itemName.toLowerCase(),t)||j.includes(e.sku.toLowerCase(),t)||j.includes(e.description.toLowerCase(),t))&&Number(e.stock)>0:Number(e.stock)>0})):[])),h=(0,o.computed)((()=>y.value.length>0?y.value.slice(s.meta.offset,s.meta.currentPage*s.meta.limit):y.value)),k=(0,o.computed)((()=>s.category?j.find(s.shop.categories,{id:s.category}):null));(0,o.watch)((()=>d.value),((e,t)=>{e&&(s.selectedShop=j.find(i.value,{ID:e.toString()}))})),(0,o.watch)((()=>s.keyword),((e,t)=>{s.meta={...s.meta,currentPage:1,totalPages:y.value?Math.ceil(y.value.length/s.meta.limit):0,offset:0},P({currentPage:1,keyword:e,category:s.category})})),(0,o.watch)((()=>s.category),((e,t)=>{s.meta={...s.meta,currentPage:1,totalPages:y.value?Math.ceil(y.value.length/s.meta.limit):0,offset:0},P({currentPage:1,keyword:s.keyword,category:e})}));const f=e=>j.startsWith(e,"https://cointopay.com/M_Images"),v=()=>{s.isProcessing=!0,t.dispatch(D.d7,{shopId:d.value}).then((t=>{if(s.isProcessing=!1,"nothing found"===t.categories)e.warning("Store for this merchant is not enabled"),c("Store for this merchant is not enabled"),r.push({name:"shop"});else{s.shop=t;const e=s.shop.products?Math.ceil(s.shop.products.length/s.meta.limit):0;if(Object.keys(a.query).length>0&&"undefined"!==typeof a.query.page){const t=a.query.page;t>0&&t<=e&&P({currentPage:t,keyword:s.keyword,category:s.category})}s.meta={currentPage:m.value?m.value.currentPage:1,totalPages:s.shop.products?e:0,limit:12,offset:m.value?(m.value.currentPage-1)*s.meta.limit:0}}})).catch((e=>{s.isProcessing=!1,console.log(e)}))},b=e=>{t.dispatch(D.aP,e).then((e=>{s.ratings=e}))},w=()=>{t.commit(D.lc,{categories:[],products:[]})},P=(e=null)=>{e||(e={currentPage:s.meta.currentPage,keyword:s.keyword,category:s.category}),t.commit(D.Zx,e)},N=e=>{let t=0,a=0;return s.ratings.map((o=>{o.SKU===e&&(a+=1,t=Number(t)+Number(o.ReviewStars))})),a>0?t/a:0},C=e=>{let t=s.meta.currentPage;t="next"===e?s.meta.currentPage<s.meta.totalPages?s.meta.currentPage+1:s.meta.totalPages:s.meta.currentPage>0?s.meta.currentPage-1:s.meta.totalPages,s.meta={...s.meta,currentPage:t,offset:(t-1)*s.meta.limit},r.push({name:"shop-detail",params:{id:d.value},query:{page:t}}),P(),n(window.location.href,!1)};return(0,o.onBeforeMount)((()=>{s.isProcessing=!0,d.value&&(s.selectedShop=j.find(i.value,{ID:d.value})),t.dispatch(D._t).then((()=>{Object.keys(a.params).length>0?("undefined"!==typeof a.params.id?(t.commit(D.c$,a.params.id),P()):t.commit(D.c$,null),a.params.categoryId&&(s.category=a.params.categoryId),setTimeout((()=>{d.value&&s.selectedShop?(v(),b(d.value)):(e.warning("Store for this merchant is not enabled"),t.commit(D.c$,null),r.push({name:"shop"}))}),50)):(P({currentPage:1,keyword:"",category:""}),t.commit(D.c$,null),w())})).catch((()=>{}))})),{...(0,o.toRefs)(s),currency:u,shopId:d,isAvatar:f,selectedCategory:k,productCategories:p,paginatedProducts:h,formatPrice:l,getProductRatings:N,paginate:C}}},$=a(3744);const U=(0,$.Z)(R,[["render",x]]);var _=U}}]);
//# sourceMappingURL=shop-detail.f7960200.js.map