(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop-invoice"],{de56:function(e,t,n){"use strict";n.r(t);n("99af"),n("b64b"),n("b0c0");var o=n("f2bf"),c={key:1,class:"row"},r={class:"offset-md-3 col-md-6 text-center"},a={class:"alert alert-success"},i=["innerHTML"];function s(e,t,n,s,l,u){Object(o["resolveComponent"])("icon"),Object(o["resolveComponent"])("QRCodeVue3"),Object(o["resolveComponent"])("Tab"),Object(o["resolveComponent"])("TabSet");var d=Object(o["resolveComponent"])("router-link"),p=Object(o["resolveComponent"])("centered-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])((function(){return[e.invoice?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("span",{innerHTML:s.translate("pos.invoice.success")},null,8,i),Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.invoice.TransactionID),1)]),Object(o["createVNode"])(d,{class:"btn btn-success b200",tag:"a",to:"/shop"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(s.translate("pos.cart.continue_shopping")),1)]})),_:1})])]))],64)):Object(o["createCommentVNode"])("",!0)]})),_:1})}var l=n("5530"),u=(n("d81d"),n("a9e3"),n("498a"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("9e55")),d=n("cdae"),p=n("6c02"),m=n("5502"),v=n("8923"),b=n("bad0"),f=n("f51a"),O=n("61c6"),j=n.n(O),C=n("3fbe"),h=n("2e13"),I=n("2ef0"),g=n("1d5e"),k={name:"ShopInvoice",components:{CenteredLayout:u["a"],TabSet:b["a"],Tab:f["a"],Icon:d["a"],QRCodeVue3:j.a},setup:function(){var e=Object(o["inject"])("translate"),t=Object(o["inject"])("http"),n=Object(p["d"])(),c=Object(p["e"])(),r=Object(m["b"])(),a=Object(C["a"])(),i=a.qrOptions,s=Object(h["a"])(),u=s.copyToClipboard,d=s.formatPrice,b=s.fancyBox,f=Object(o["reactive"])({confirmCode:null,invoice:null,order:{items:[],shipping:null,coupon:null},interval:null,transactionInterval:null,timer:null,loader:"",socket:null,isClosedSocket:!1,status:"null"}),O=Object(o["computed"])((function(){return!f.status||-1!==["paid","underpaid","complete"].indexOf(f.status.toLowerCase())})),j=Object(o["computed"])((function(){return f.invoice&&("paid"===f.invoice.Status.toLowerCase()||"underpaid"===f.invoice.Status.toLowerCase())})),k=Object(o["computed"])((function(){return f.invoice&&"expired"===f.invoice.Status.toLowerCase()})),w=Object(o["computed"])((function(){return f.invoice.CoinName.toLowerCase()+":"+f.invoice.coinAddress+"?amount="+f.invoice.Amount})),y=Object(o["computed"])((function(){return f.invoice?f.invoice.inputCurrency:"EUR"})),N=Object(o["computed"])((function(){var e=0;return f.order.items.length>0&&f.order.items.map((function(t){e+=Number(t.qty)*Number(t.price)})),f.order.shipping&&(e+=Number(f.order.shipping.cost)),f.order.coupon&&(e-=Number(f.order.coupon.discount)),d(e,y.value)})),T="https://app.cointopay.com",L=function(e){var t=decodeURIComponent(e.CustomerReferenceNr),n=document.createElement("div");n.innerHTML=t;var o=n.innerHTML.trim();f.order={items:[],shipping:null,coupon:null},o&&(o=o.split(":::").filter(Boolean),o.map((function(e){e=e.split("|").filter(Boolean),6===e.length?f.order.items.push({id:e[0],sku:e[1],name:e[2],url:e[3],price:Number(e[4]),qty:Number(e[5])}):5===e.length?f.order.items.push({id:e[0],name:e[1],url:e[2],price:Number(e[3]),qty:Number(e[4])}):2===e.length?f.order.shipping={method:e[0],cost:e[1]}:3===e.length&&(f.order.coupon={code:e[0],value:e[1],discount:e[2]})})))},x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main";f.loader=n;var o={Call:"Transactiondetail",MerchantID:0,APIKey:"_",ConfirmCode:e,output:"json"};t.get("".concat(T,"/v2REAPI"),{params:o}).then((function(e){if(f.loader="",200===e.status&&"failed"!==e.data.result){f.invoice=e.data.data,L(f.invoice),r.commit(v["L"],f.invoice);var t=f.invoice.Status.toLowerCase();-1!==["paid","underpaid","expired"].indexOf(t)&&(f.timer=f.invoice.Status,f.transactionInterval&&clearInterval(f.transactionInterval),f.interval&&(clearInterval(f.interval),f.timer=t)),-1!==["waiting","awaiting-fiat"].indexOf(t)&&E()}})).catch((function(e){f.loader="",console.log(e)}))},S=function(){if(Object.keys(n.params).length>0){var e=n.params.confirmCode;x(e),f.transactionInterval&&clearInterval(f.transactionInterval),f.transactionInterval=setInterval((function(){x(e,!1)}),6e4)}else c.push({name:"shop"})},E=function(){if(!f.timer){var e=g.tz(f.invoice.CreatedOn,"Europe/Amsterdam").add(Number(f.invoice.ExpiryTime),"minutes");f.interval=setInterval((function(){var t=g().tz("Europe/Amsterdam").valueOf(),n=e.valueOf()-t,o=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),a=Math.floor(n%6e4/1e3);f.timer="".concat(o,"d ").concat(c,"h ").concat(r,"m ").concat(a,"s"),n<0&&(clearInterval(f.interval),f.timer="Expired",x(f.invoice.ConfirmCode,""))}),1e3)}},B=function e(){f.socket=new WebSocket("wss://wss.cointopay.com/transactions"),f.socket.onmessage=function(e){if(e&&e.data){var t=e.data.split(":");if(f.invoice){var n=I["cloneDeep"](f.invoice);console.log(O),console.log(t),"TZERO"===t[0]&&n&&Number(n.TransactionID)===Number(t[1])&&(f.interval&&clearInterval(f.interval),n.Status=t[2].toLowerCase(),f.status=t[2].toLowerCase(),r.commit(v["L"],n)),console.log(O)}}},f.socket.onclose=function(t){f.isClosedSocket||e()}};return Object(o["onBeforeMount"])((function(){S(),B()})),Object(o["onBeforeUnmount"])((function(){f.transactionInterval&&clearInterval(f.transactionInterval),f.interval&&clearInterval(f.interval),null!==f.socket&&(f.isClosedSocket=!0,f.socket.close())})),Object(l["a"])(Object(l["a"])({translate:e},Object(o["toRefs"])(f)),{},{currency:y,isInvoiceComplete:O,copyToClipboard:u,qrOptions:i,isPaid:j,isExpired:k,qrLink:w,formatPrice:d,cartTotal:N,fancyBox:b})}},w=n("6b0d"),y=n.n(w);const N=y()(k,[["render",s]]);t["default"]=N}}]);
//# sourceMappingURL=shop-invoice.50099452.js.map