var H=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&L(e,t,a[t]);if(I)for(var t of I(a))T.call(a,t)&&L(e,t,a[t]);return e},M=(e,a)=>J(e,Q(a));var q=(e,a)=>{var t={};for(var s in e)O.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&I)for(var s of I(e))a.indexOf(s)<0&&T.call(e,s)&&(t[s]=e[s]);return t};var z=(e,a,t)=>new Promise((s,C)=>{var v=m=>{try{p(t.next(m))}catch(d){C(d)}},y=m=>{try{p(t.throw(m))}catch(d){C(d)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(v,y);p((t=t.apply(e,a)).next())});import{a as R}from"./formItemConfig-1c4e81e4.js";import{I as X,b6 as Y,_ as x}from"./index.js";import{h as A}from"./index-61c0c2c9.js";import{a as ee}from"./useFormDesignState-2b7717e9.js";import{T as oe,U as ae,$ as te,K as ne,o as se}from"./antd-51a19206.js";import{d as le,r as me,c as P,u as N,G as re,a7 as b,Z as g,a8 as D,a9 as f,l as E,ai as _,aj as G,ad as K,N as ce,ac as U,E as ie,a0 as $,ab as B,$ as S,ah as pe,_ as de}from"./vue-ea98dac5.js";import"./componentMap-e0a87cc7.js";import"./useFormItem-d01c3888.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";const he=le({name:"VFormItem",components:{Tooltip:oe,Icon:X,FormItem:ae,Divider:te,Col:ne},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:a}){const t=me({componentMap:R}),{formModel:s,setFormModel:C}=ee(),v=P(()=>{const{colProps:o={}}=e.schema;return o}),y=P(()=>{var V,j;const{formConfig:o}=N(e);let{field:l,required:n,rules:h,labelCol:c,wrapperCol:i}=N(e.schema);const{colon:W}=e.formConfig,{itemProps:r}=N(e.schema);c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const Z=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:l,style:u({},Z),colon:W,required:n,rules:h,labelCol:c,wrapperCol:i},r);return(V=r==null?void 0:r.labelCol)!=null&&V.span||(w.labelCol=c),(j=r==null?void 0:r.wrapperCol)!=null&&j.span||(w.wrapperCol=i),r!=null&&r.rules||(w.rules=h),w}),p=P(()=>R.get(e.schema.component)),m=o=>{var l,n;o.component==="Button"&&((l=o.componentProps)!=null&&l.handle)&&a((n=o.componentProps)==null?void 0:n.handle)},d=Y(()=>z(this,null,function*(){var n;let{options:o,treeData:l}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield A(o)),l&&(l=yield A(l)),{options:o,treeData:l}})),F=P(()=>{var c;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:l}=e.schema,i=(c=se(e.schema.componentProps,["options","treeData"]))!=null?c:{},{disabled:n}=i,h=q(i,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[l]})}),k=function(o){const l=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?l?n.checked:n.value:o;C(e.schema.field,h),a("change",h)};return M(u({},re(t)),{componentItem:p,formItemProps:y,handleClick:m,asyncProps:d,cmpProps:F,handleChange:k,colPropsComputed:v})}});const ue={key:2};function fe(e,a,t,s,C,v){const y=b("Icon"),p=b("Tooltip"),m=b("Divider"),d=b("FormItem"),F=b("Col");return g(),D(F,_(G(e.colPropsComputed)),{default:f(()=>[E(d,_(G(u({},e.formItemProps))),K({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)!=null&&k.slotName)?ce(e.$slots,e.schema.componentProps.slotName,_(U({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(g(),D(m,{key:1},{default:f(()=>[ie($(e.schema.label),1)]),_:1})):B("",!0),S("div",null,[(g(),D(pe(e.componentItem),U({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:a[0]||(a[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(g(),de("span",ue,$(e.schema.label),1)):B("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[E(p,null,K({default:f(()=>[S("span",null,$(e.schema.label),1),e.schema.helpMessage?(g(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):B("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[S("span",null,$(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}const Le=x(he,[["render",fe],["__scopeId","data-v-43612c3e"]]);export{Le as default};
