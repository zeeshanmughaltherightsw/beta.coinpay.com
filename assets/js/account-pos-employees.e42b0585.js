"use strict";(self["webpackChunkcointopay"]=self["webpackChunkcointopay"]||[]).push([[952],{646:function(e,t,o){o.r(t),o.d(t,{default:function(){return ee}});var s=o(821);const r={class:"card"},l={class:"body"},a={class:"text-right mb-3"},n={class:"table-sm"},d=["onClick"],c={class:"cursor-pointer ml-3 text-base"},i={class:"text-right"},m={key:0,class:"pr-3"},p=["onClick"],u=["onClick"];function g(e,t,o,g,y,E){const v=(0,s.resolveComponent)("j-button"),w=(0,s.resolveComponent)("icon"),x=(0,s.resolveComponent)("pos-layout"),h=(0,s.resolveComponent)("save-employee-modal"),f=(0,s.resolveComponent)("pos-login-modal");return(0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,[(0,s.createVNode)(x,null,{content:(0,s.withCtx)((()=>[(0,s.createElementVNode)("div",r,[(0,s.createElementVNode)("div",l,[(0,s.createElementVNode)("div",a,[(0,s.createVNode)(v,{onClick:t[0]||(t[0]=e=>g.launchSaveEmployeeModal()),type:"button"},{default:(0,s.withCtx)((()=>[(0,s.createTextVNode)((0,s.toDisplayString)(g.translate("pos.employees.btn_add")),1)])),_:1})]),(0,s.createElementVNode)("table",n,[(0,s.createElementVNode)("tbody",null,[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(g.employees,((e,t)=>((0,s.openBlock)(),(0,s.createElementBlock)("tr",{key:t},[(0,s.createElementVNode)("td",null,[(0,s.createElementVNode)("div",{class:"flex items-center cursor-pointer",onClick:e=>g.login(t)},[(0,s.createVNode)(w,{name:"user-circle",classes:"w-8 h-8 "+(g.isLoggedIn(e)?"text-blue-500":"")},null,8,["classes"]),(0,s.createElementVNode)("span",c,(0,s.toDisplayString)(e.USERNAME),1)],8,d)]),(0,s.createElementVNode)("td",i,["false"===e.isParentUser?((0,s.openBlock)(),(0,s.createElementBlock)("div",m,[g.loggedInEmployee&&"true"===g.loggedInEmployee.isParentUser?((0,s.openBlock)(),(0,s.createElementBlock)("button",{key:0,onClick:o=>g.launchSaveEmployeeModal(e,t),class:"mr-2 hover:text-blue-500"},[(0,s.createVNode)(w,{name:"edit"})],8,p)):(0,s.createCommentVNode)("",!0),g.loggedInEmployee&&"true"===g.loggedInEmployee.isParentUser?((0,s.openBlock)(),(0,s.createElementBlock)("button",{key:1,onClick:e=>g.deleteEmployee(t),class:"hover:text-red-500"},[(0,s.createVNode)(w,{name:"trash"})],8,u)):(0,s.createCommentVNode)("",!0)])):(0,s.createCommentVNode)("",!0)])])))),128))])])])])])),_:1}),(0,s.createVNode)(h),(0,s.createVNode)(f)],64)}var y=o(2630),E=o(3164),v=o(7983);const w={class:"flex items-center justify-between"},x={class:"mb-2"},h={class:"flex items-center justify-between mb-1"},f={class:"text-red-700 dark:text-red-400 text-sm"},N={class:"mb-2"},V={class:"flex items-center justify-between mb-1"},b={class:"text-red-700 dark:text-red-400 text-sm"},k={class:"mt-4 text-right"},B={key:0,class:"mr-3"};function C(e,t,o,r,l,a){const n=(0,s.resolveComponent)("icon"),d=(0,s.resolveComponent)("j-button"),c=(0,s.resolveComponent)("modal");return(0,s.openBlock)(),(0,s.createBlock)(c,{maxWidth:e.maxWidth,show:e.show,onClose:t[4]||(t[4]=e=>r.closeModal())},{title:(0,s.withCtx)((()=>[(0,s.createElementVNode)("div",w,[(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(r.translate("pos.employees.title")),1),(0,s.createElementVNode)("span",{class:"text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer",onClick:t[0]||(t[0]=e=>r.closeModal())},[(0,s.createVNode)(n,{name:"close"})])])])),content:(0,s.withCtx)((()=>[(0,s.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,s.withModifiers)((e=>r.submit()),["prevent"]))},[(0,s.createElementVNode)("div",x,[(0,s.createElementVNode)("div",h,[(0,s.createElementVNode)("label",null,(0,s.toDisplayString)(r.translate("pos.employees.username")),1),(0,s.createElementVNode)("div",f,(0,s.toDisplayString)(r.showError(e.errorBag,"username")),1)]),(0,s.withDirectives)((0,s.createElementVNode)("input",{class:"form-input w-full",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.username=t)},null,512),[[s.vModelText,e.form.username]])]),(0,s.createElementVNode)("div",N,[(0,s.createElementVNode)("div",V,[(0,s.createElementVNode)("label",null,(0,s.toDisplayString)(r.translate("pos.employees.password")),1),(0,s.createElementVNode)("div",b,(0,s.toDisplayString)(r.showError(e.errorBag,"password")),1)]),(0,s.withDirectives)((0,s.createElementVNode)("input",{class:"form-input w-full",placeholder:"000000",type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.password=t)},null,512),[[s.vModelText,e.form.password]])]),(0,s.createElementVNode)("div",k,[(0,s.createVNode)(d,{disabled:e.isProcessing},{default:(0,s.withCtx)((()=>[e.isProcessing?((0,s.openBlock)(),(0,s.createElementBlock)("div",B,[(0,s.createVNode)(n,{name:"spinner",classes:"w-4 h-4 text-white"})])):(0,s.createCommentVNode)("",!0),(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(r.translate("pos.employees.btn_save")),1)])),_:1},8,["disabled"])])],32)])),_:1},8,["maxWidth","show"])}var I=o(9099),M=o(6232),S=o(6486),D=o(8637),P=o(9783),U=o(4729),j={name:"SaveEmployeeModal",components:{Modal:I.Z,Icon:v.Z,JButton:E.Z},setup(){const e=(0,s.inject)("translate"),t=(0,s.inject)("emitter"),o=(0,s.inject)("toast"),r=(0,D.oR)(),{showError:l,validate:a}=(0,M.Z)(),{generateId:n}=(0,U.Z)(),d=(0,s.reactive)({show:!1,maxWidth:"2xl",closeable:!0,employee:null,type:"pin",index:-1,form:{username:"",password:""},errorBag:{},rules:{},messages:null,isProcessing:!1}),c=(0,s.computed)((()=>r.state.pos)),i=(0,s.computed)((()=>r.state.posCalls));(0,s.watch)((()=>({...d.form})),((e,t)=>{Object.keys(d.errorBag).length>0&&(d.errorBag=a(e,d.rules,d.messages))}));const m=()=>{d.show=!1},p=()=>{if(d.errorBag=a(d.form,d.rules,d.messages),0===Object.keys(d.errorBag).length){d.isProcessing=!0;const e=d.form,t=S.cloneDeep(c.value.users);let s=!0;d.employee?-1===S.findIndex(t,(t=>t.USERNAME===e.username&&t.ID!==d.employee.ID))?(t[d.index].USERNAME=e.username,t[d.index].PIN=e.password):(s=!1,d.isProcessing=!1,o.error("Username already exists!")):-1===S.findIndex(t,{USERNAME:e.username})?t.push({ID:n(c.value.users),PIN:e.password,USERNAME:e.username,isLoggedIn:"false",isParentUser:"false"}):(s=!1,d.isProcessing=!1,o.error("Username already exists!")),s&&r.dispatch(P.AS,{call:i.value.users,data:t}).then((e=>{d.isProcessing=!1;const t=d.employee?"Employee updated successfully":"Employee added successfully";o.success(t),m()})).catch((e=>{console.log(e),d.isProcessing=!1,o.error("Internal Server Error")}))}};return(0,s.onBeforeMount)((()=>{t.on("saveEmployeeModal",(e=>{d.employee=e.employee||null,d.index=e.index||-1,d.type=d.employee&&"true"===d.employee.isParentUser?"password":"pin",d.form={username:d.employee?d.employee.USERNAME:"",password:""},d.rules={username:["required"],password:"password"===d.type?["required"]:["required","regex:/^[0-9]{6}$/"]},d.messages={username:{required:"Username is required"},password:{required:"password"===d.type?"Password is required":"PIN is required",regex:"Please enter a 6 digit pin"}},d.show=!0}))})),{translate:e,...(0,s.toRefs)(d),closeModal:m,showError:l,submit:p}}},q=o(3744);const R=(0,q.Z)(j,[["render",C]]);var Z=R;const A={class:"flex items-center justify-between"},L={class:"mb-2"},_={class:"flex items-center justify-between mb-1"},W={class:"text-red-700 dark:text-red-400 text-sm"},T={class:"mb-2"},O={class:"flex items-center justify-between mb-1"},J={class:"text-red-700 dark:text-red-400 text-sm"},F={class:"text-red-700 dark:text-red-400 text-sm"},$={class:"mt-4 text-right"},Y={key:0,class:"mr-3"};function z(e,t,o,r,l,a){const n=(0,s.resolveComponent)("icon"),d=(0,s.resolveComponent)("j-button"),c=(0,s.resolveComponent)("modal");return(0,s.openBlock)(),(0,s.createBlock)(c,{maxWidth:e.maxWidth,show:e.show,onClose:t[4]||(t[4]=e=>r.closeModal())},{title:(0,s.withCtx)((()=>[(0,s.createElementVNode)("div",A,[(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(r.translate("pos.employees.title")),1),(0,s.createElementVNode)("span",{class:"text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer",onClick:t[0]||(t[0]=e=>r.closeModal())},[(0,s.createVNode)(n,{name:"close"})])])])),content:(0,s.withCtx)((()=>[(0,s.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,s.withModifiers)((e=>r.submit()),["prevent"]))},[(0,s.createElementVNode)("div",L,[(0,s.createElementVNode)("div",_,[(0,s.createElementVNode)("label",null,(0,s.toDisplayString)(r.translate("pos.employees.username")),1),(0,s.createElementVNode)("div",W,(0,s.toDisplayString)(r.showError(e.errorBag,"username")),1)]),(0,s.withDirectives)((0,s.createElementVNode)("input",{class:"form-input w-full",readonly:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.username=t)},null,512),[[s.vModelText,e.form.username]])]),(0,s.createElementVNode)("div",T,[(0,s.createElementVNode)("div",O,[(0,s.createElementVNode)("label",null,(0,s.toDisplayString)(r.translate("pos.employees.password")),1),(0,s.createElementVNode)("div",J,(0,s.toDisplayString)(r.showError(e.errorBag,"password")),1)]),(0,s.withDirectives)((0,s.createElementVNode)("input",{class:"form-input w-full",type:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.password=t)},null,512),[[s.vModelText,e.form.password]]),(0,s.createElementVNode)("div",F,(0,s.toDisplayString)(r.showError(e.errorBag,"password")),1)]),(0,s.createElementVNode)("div",$,[(0,s.createVNode)(d,{disabled:e.isProcessing},{default:(0,s.withCtx)((()=>[e.isProcessing?((0,s.openBlock)(),(0,s.createElementBlock)("div",Y,[(0,s.createVNode)(n,{name:"spinner",classes:"w-4 h-4 text-white"})])):(0,s.createCommentVNode)("",!0),(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(r.translate("pos.employees.btn_login")),1)])),_:1},8,["disabled"])])],32)])),_:1},8,["maxWidth","show"])}var G={name:"PosLoginModal",components:{Modal:I.Z,Icon:v.Z,JButton:E.Z},setup(){const e=(0,s.inject)("translate"),t=(0,s.inject)("emitter"),o=(0,s.inject)("toast"),r=(0,D.oR)(),{showError:l,validate:a}=(0,M.Z)(),n=(0,s.reactive)({show:!1,maxWidth:"2xl",closeable:!0,index:-1,loggedInEmployee:null,form:{username:"",password:""},errorBag:{},rules:{},messages:{},isProcessing:!1}),d=(0,s.computed)((()=>r.state.pos)),c=(0,s.computed)((()=>r.state.posCalls));(0,s.watch)((()=>({...n.form})),((e,t)=>{Object.keys(n.errorBag).length>0&&(n.errorBag=a(e,n.rules,n.messages))}));const i=()=>{n.show=!1},m=()=>{if(n.errorBag=a(n.form,n.rules,n.messages),0===Object.keys(n.errorBag).length){const e=n.form,t=S.cloneDeep(d.value.users),s=t[n.index];s.USERNAME===e.username&&s.PIN===e.password?(n.loggedInEmployee&&t.filter((e=>{e.ID===n.loggedInEmployee.ID&&e.USERNAME===n.loggedInEmployee.USERNAME&&(e.isLoggedIn="false")})),t[n.index].isLoggedIn="true",r.dispatch(P.AS,{call:c.value.users,data:t}).catch((e=>{console.log(e)})),i()):o.error("Please provide a valid password/pin")}};return(0,s.onBeforeMount)((()=>{t.on("posLoginModal",(e=>{n.loggedInEmployee=e.loggedInEmployee,n.index=e.index,n.type=e.type,n.form={username:e.employee?e.employee.USERNAME:"",password:""},n.rules={username:["required"],password:"password"===n.type?["required"]:["required","regex:/^[0-9]{6}$/"]},n.messages={username:{required:"Username is required"},password:{required:"password"===n.type?"Password is required":"PIN is required",regex:"Please enter a 6 digit pin"}},n.show=!0}))})),{translate:e,...(0,s.toRefs)(n),showError:l,closeModal:i,submit:m}}};const H=(0,q.Z)(G,[["render",z]]);var K=H,Q={name:"Employees",components:{"pos-layout":y.Z,JButton:E.Z,Icon:v.Z,SaveEmployeeModal:Z,PosLoginModal:K},setup(){const e=(0,s.inject)("translate"),t=(0,s.inject)("emitter"),o=(0,s.inject)("swal"),r=(0,s.inject)("toast"),l=(0,D.oR)(),a=(0,s.computed)((()=>l.state.pos)),n=(0,s.computed)((()=>l.state.posCalls)),d=(0,s.computed)((()=>a.value.users)),c=(0,s.computed)((()=>S.find(a.value.users,{isLoggedIn:"true"}))),i=e=>c.value&&e.ID===c.value.ID,m=e=>{const o=S.cloneDeep(a.value.users),s=o[e],r="true"===s.isParentUser?"password":"pin";"false"!==s.isLoggedIn&&s.ID===c.value.ID||t.emit("posLoginModal",{employee:s,type:r,loggedInEmployee:c.value,index:e})},p=(e=null,o=null)=>{t.emit("saveEmployeeModal",{employee:e,index:o})},u=e=>{o.fire({title:"Employee",text:"Are you sure, want to delete this employee?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No",focusCancel:!0,customClass:{container:"swal2-tailwind"}}).then((({value:t})=>{if(t&&!0===t){const t=S.cloneDeep(a.value.users);t.splice(e,1),l.dispatch(P.AS,{call:n.value.users,data:t}).then((e=>{r.success("Employee deleted successfully")})).catch((e=>{console.log(e),r.error("Internal Server Error")}))}}))};return{translate:e,employees:d,loggedInEmployee:c,isLoggedIn:i,login:m,launchSaveEmployeeModal:p,deleteEmployee:u}}};const X=(0,q.Z)(Q,[["render",g],["__scopeId","data-v-733d1af0"]]);var ee=X}}]);
//# sourceMappingURL=account-pos-employees.e42b0585.js.map