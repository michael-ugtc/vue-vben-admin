var u=Object.defineProperty;var m=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&a(e,o,r[o]);if(m)for(var o of m(r))h.call(r,o)&&a(e,o,r[o]);return e};import{_}from"./FormItem.vue_vue_type_script_lang-6b89145f.js";import{d as l,c as p,u as n,a7 as $,Z as P,a8 as g,ad as j,aa as C,a9 as F,N as I,ai as b,aj as y}from"./vue-ea98dac5.js";import{_ as O}from"./index.js";import"./componentMap-e0a87cc7.js";import"./useFormItem-d01c3888.js";import"./antd-51a19206.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";const k=l({name:"VFormItem",components:{FormItem:_},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(e){const r=p(()=>t({},n(e.schema))),o=p(()=>t({},n(e.formConfig)));return{schemaNew:r,getProps:o}}});function v(e,r,o,c,w,N){const i=$("FormItem");return P(),g(i,{schema:e.schemaNew,formProps:e.getProps},j({_:2},[C(Object.keys(e.$slots),s=>({name:s,fn:F(f=>[I(e.$slots,s,b(y(f||{})))])}))]),1032,["schema","formProps"])}const Q=O(k,[["render",v]]);export{Q as default};
