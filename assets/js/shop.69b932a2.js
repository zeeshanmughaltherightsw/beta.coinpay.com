"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[523],{853:function(e,t,a){a.d(t,{Z:function(){return m}});var o=a(821);const r={class:"grid grid-cols-4 gap-2 xl:gap-3"},l=(0,o.createStaticVNode)('<div class="bg-gray-200 dark:bg-gray-500 rounded w-32 h-32 mx-auto"></div><div class="mt-3 h-2 bg-gray-200 dark:bg-gray-500 rounded"></div><div class="mt-3 h-2 bg-gray-200 dark:bg-gray-500 rounded w-2/5 mx-auto"></div><div class="flex items-center justify-center mt-3"><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div><div class="w-8 h-8 bg-gray-200 dark:bg-gray-500 rounded mr-3"></div></div>',4),n=[l];function c(e,t,a,l,c,s){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.counter,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e,class:"animate-pulse h-72 shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 rounded col-span-4 md:col-span-2 lg:col-span-1 p-4"},n)))),128))])}var s={name:"Product",props:["counter"]},i=a(3744);const d=(0,i.Z)(s,[["render",c]]);var m=d},3908:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var o=a(821);const r=e=>((0,o.pushScopeId)("data-v-84ad327c"),e=e(),(0,o.popScopeId)(),e),l={class:"mb-3 flex items-center justify-end flex-col lg:flex-row"},n=r((()=>(0,o.createElementVNode)("option",{value:""},"All Countries",-1))),c=["value"],s=r((()=>(0,o.createElementVNode)("option",{value:""},"Filter Shops",-1))),i=["value"],d={class:"relative w-full lg:w-auto"},m={class:"grid grid-cols-4 gap-2 xl:gap-3"},g=["src"],u={class:"text-center py-1 font-semibold"},p=["onClick"],k={class:"flex justify-center"},h={key:1,class:"text-center social pt-2"},y={key:0},v=["href"],f={key:1},b=["href"],w=["src"],S={key:2},E=["href"],N=["src"],V={key:3},B=["href"],C=["src"],P={key:4},x=["href"],L=["src"],O={key:0},I=r((()=>(0,o.createElementVNode)("hr",{class:"border-gray-300 dark:border-gray-600"},null,-1))),R=r((()=>(0,o.createElementVNode)("div",{class:"w-full rounded shadow px-4 py-3 bg-yellow-500 mb-4 text-yellow-900 font-semibold mt-3"}," No shop available ",-1))),T=[I,R],A={key:1,class:"flex items-center justify-center mt-3"},D=["disabled"],F={class:"mr-2"},_=["disabled"];function U(e,t,r,I,R,U){const M=(0,o.resolveComponent)("product-skeleton"),Z=(0,o.resolveComponent)("icon"),j=(0,o.resolveComponent)("router-link"),G=(0,o.resolveComponent)("star-rating"),Y=(0,o.resolveComponent)("centered-layout");return(0,o.openBlock)(),(0,o.createBlock)(Y,null,{default:(0,o.withCtx)((()=>[e.isProcessing?((0,o.openBlock)(),(0,o.createBlock)(M,{key:0,counter:8})):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createElementVNode)("div",l,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"aria-label":"Filter",class:"form-select w-full lg:w-auto mr-0 lg:mr-3 mb-3 lg:mb-0","onUpdate:modelValue":t[0]||(t[0]=t=>e.country=t)},[n,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(I.countriesList,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{key:t,value:e.id},(0,o.toDisplayString)(e.name),9,c)))),128))],512),[[o.vModelSelect,e.country]]),(0,o.withDirectives)((0,o.createElementVNode)("select",{"aria-label":"Filter",class:"form-select w-full lg:w-auto mr-0 lg:mr-3 mb-3 lg:mb-0","onUpdate:modelValue":t[1]||(t[1]=t=>e.category=t)},[s,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(I.shopCategories,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{key:t,value:e},(0,o.toDisplayString)(e),9,i)))),128))],512),[[o.vModelSelect,e.category]]),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(Z,{classes:"absolute w-5 h-5 top-3 left-3 dark:text-gray-300",name:"search"}),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.keyword=t),"aria-label":"Search...",placeholder:"Search...",class:"form-input px-10 w-full lg:w-auto",type:"text"},null,512),[[o.vModelText,e.keyword]]),""!==e.keyword?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,class:"absolute top-3 right-3 dark:text-gray-400 cursor-pointer",onClick:t[3]||(t[3]=t=>e.keyword="")},[(0,o.createVNode)(Z,{classes:"w-5 h-5",name:"close"})])):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",m,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(I.paginatedShopsList,((t,r)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:r,class:"h-72 shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 rounded col-span-4 md:col-span-2 lg:col-span-1 p-4"},[(0,o.createVNode)(j,{to:{name:"shop-detail",params:{id:t.ID}},tag:"a"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",null,[(0,o.withDirectives)((0,o.createElementVNode)("img",{src:t.Avatar,alt:"",class:"w-32 h-32 mx-auto object-contain"},null,8,g),[[o.vShow,I.isAvatar(t.Avatar)]]),(0,o.withDirectives)((0,o.createElementVNode)("p",{class:"font-bold text-9xl uppercase text-blue-500 text-center"},(0,o.toDisplayString)(I.generateAvatar(t.ShopTitle)),513),[[o.vShow,!I.isAvatar(t.Avatar)]])]),(0,o.createElementVNode)("h5",u,(0,o.toDisplayString)(t.ShopTitle),1)])),_:2},1032,["to"]),"n/a"!==t.POSCATEGORY.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("p",{key:0,onClick:a=>e.category=t.POSCATEGORY,class:"text-center cursor-pointer font-semibold"},(0,o.toDisplayString)(t.POSCATEGORY),9,p)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(G,{increment:1,"max-rating":5,rating:Number(t.POSTrust),"read-only":!0,"show-rating":!1,"star-size":20,"active-color":"#ffd200","inactive-color":"#d0d0d0"},null,8,["rating"])]),"1"===t.SocialOn?((0,o.openBlock)(),(0,o.createElementBlock)("ul",h,["null"!==t.SocialURL&&""!==t.SocialURL?((0,o.openBlock)(),(0,o.createElementBlock)("li",y,[(0,o.createElementVNode)("a",{href:t.SocialURL,class:"socialUrl",target:"_blank"},[(0,o.createVNode)(Z,{name:"link"})],8,v)])):(0,o.createCommentVNode)("",!0),"null"!==t.SocialFacebook&&""!==t.SocialFacebook?((0,o.openBlock)(),(0,o.createElementBlock)("li",f,[(0,o.createElementVNode)("a",{href:t.SocialFacebook,class:"facebook",target:"_blank"},[(0,o.createElementVNode)("img",{src:a(7795),alt:"Facebook"},null,8,w)],8,b)])):(0,o.createCommentVNode)("",!0),"null"!==t.SocialTwitter&&""!==t.SocialTwitter?((0,o.openBlock)(),(0,o.createElementBlock)("li",S,[(0,o.createElementVNode)("a",{href:t.SocialTwitter,class:"twitter",target:"_blank"},[(0,o.createElementVNode)("img",{src:a(2332),alt:"Twitter"},null,8,N)],8,E)])):(0,o.createCommentVNode)("",!0),"null"!==t.SocialReddit&&""!==t.SocialReddit?((0,o.openBlock)(),(0,o.createElementBlock)("li",V,[(0,o.createElementVNode)("a",{href:t.SocialReddit,class:"reddit",target:"_blank"},[(0,o.createElementVNode)("img",{src:a(873),alt:"Reddit"},null,8,C)],8,B)])):(0,o.createCommentVNode)("",!0),"null"!==t.SocialLinkedIn&&""!==t.SocialLinkedIn?((0,o.openBlock)(),(0,o.createElementBlock)("li",P,[(0,o.createElementVNode)("a",{href:t.SocialLinkedIn,class:"linkedin",target:"_blank"},[(0,o.createElementVNode)("img",{src:a(8008),alt:"LinkedIn"},null,8,L)],8,x)])):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0)])))),128))]),0===I.paginatedShopsList.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",O,T)):(0,o.createCommentVNode)("",!0),e.meta.totalPages>1?((0,o.openBlock)(),(0,o.createElementBlock)("div",A,[(0,o.createElementVNode)("button",{disabled:1===e.meta.currentPage,onClick:t[4]||(t[4]=e=>I.paginate("prev")),class:"btn btn-default mr-2"},[(0,o.createVNode)(Z,{name:"chevron-left"})],8,D),(0,o.createElementVNode)("span",F,(0,o.toDisplayString)(`${e.meta.currentPage} of ${e.meta.totalPages}`),1),(0,o.createElementVNode)("button",{disabled:e.meta.currentPage===e.meta.totalPages,onClick:t[5]||(t[5]=e=>I.paginate("next")),class:"btn btn-default"},[(0,o.createVNode)(Z,{name:"chevron-right"})],8,_)])):(0,o.createCommentVNode)("",!0)],64))])),_:1})}var M=a(784),Z=a(7983),j=a(853),G=a(8637),Y=a(6486),$=a(9783),z=a(7848),W=a.n(z),q={name:"Shops",components:{CenteredLayout:M.Z,Icon:Z.Z,StarRating:W(),ProductSkeleton:j.Z},setup(){const e=(0,G.oR)(),t=(0,o.reactive)({country:"",category:"",keyword:"",meta:{currentPage:1,totalPages:0,limit:12,offset:0},isProcessing:!1}),a=(0,o.computed)((()=>e.state.countries)),r=(0,o.computed)((()=>e.state.shopsList)),l=(0,o.computed)((()=>{let e=[];return r.value.length>0&&r.value.map((t=>{t.ShippingOptions.length>0?t.ShippingOptions.map((t=>{const o=Y.findIndex(a.value,{id:t.countryId});-1===o&&e.push({id:t.countryId,name:t.countryName})})):e=a.value})),e})),n=(0,o.computed)((()=>e.state.shopCategories)),c=(0,o.computed)((()=>{let e=Y.cloneDeep(r.value);return t.country&&(e=e.filter((e=>!(e.ShippingOptions.length>0)||-1!==Y.findIndex(e.ShippingOptions,{countryId:t.country})))),e.filter((a=>{const o=t.keyword.trim().toLowerCase();return o&&t.category?Y.includes(a.ShopTitle.toLowerCase(),o)&&a.POSCATEGORY.toLowerCase()===t.category.toLowerCase():t.category?a.POSCATEGORY.toLowerCase()===t.category.toLowerCase():o?Y.includes(a.ShopTitle.toLowerCase(),o):e}))})),s=(0,o.computed)((()=>c.value.length>0?c.value.slice(t.meta.offset*t.meta.limit,t.meta.currentPage*t.meta.limit):[])),i=e=>Y.startsWith(e,"https://cointopay.com/M_Images"),d=e=>{e=e.split(/[\s+]/g),e=e.filter(Boolean);let t="";return e.map((e=>{t+=e[0]})),t},m=e=>{let a=t.meta.currentPage;a="next"===e?t.meta.currentPage<t.meta.totalPages?t.meta.currentPage+1:t.meta.totalPages:t.meta.currentPage>0?t.meta.currentPage-1:t.meta.totalPages,t.meta={...t.meta,currentPage:a,offset:(a-1)*t.meta.limit}};return(0,o.onBeforeMount)((()=>{t.isProcessing=!0,e.dispatch($._t).then((()=>{t.isProcessing=!1,t.meta={currentPage:1,totalPages:r.value?Math.ceil(r.value.length/t.meta.limit):0,limit:12,offset:0}})).catch((()=>{t.isProcessing=!1}))})),{...(0,o.toRefs)(t),countriesList:l,shopsList:r,shopCategories:n,filteredShopsList:c,paginatedShopsList:s,isAvatar:i,generateAvatar:d,paginate:m}}},H=a(3744);const J=(0,H.Z)(q,[["render",U],["__scopeId","data-v-84ad327c"]]);var K=J}}]);
//# sourceMappingURL=shop.69b932a2.js.map