var f=(e,m,s)=>new Promise((p,t)=>{var d=o=>{try{a(s.next(o))}catch(i){t(i)}},n=o=>{try{a(s.throw(o))}catch(i){t(i)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(d,n);a((s=s.apply(e,m)).next())});import{f as v,l as $,k as y,_ as w}from"./index.js";import{B as L,a as M}from"./index-aef5cc20.js";import{B as S}from"./BasicForm-2f9826ef.js";import"./componentMap-e0a87cc7.js";import{u as F}from"./useForm-76f4a81e.js";import"./RadioButtonGroup-c7d88104.js";import{u as I}from"./lock-e1183472.js";import{h as N}from"./header-55b09394.js";import{d as R,c as _,a7 as u,Z as b,a8 as P,a9 as g,$ as l,a1 as c,a0 as k,l as h,E as U,ac as V}from"./vue-ea98dac5.js";import"./antd-51a19206.js";import"./useWindowSizeFn-997fa1d0.js";import"./FormItem.vue_vue_type_script_lang-6b89145f.js";import"./useFormItem-d01c3888.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";const D=R({name:"LockModal",components:{BasicModal:L,BasicForm:S},setup(){const{t:e}=y(),{prefixCls:m}=v("header-lock-modal"),s=$(),p=I(),t=_(()=>{var r;return(r=s.getUserInfo)==null?void 0:r.realName}),[d,{closeModal:n}]=M(),[a,{validate:o,resetFields:i}]=F({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]}),B=()=>f(this,null,function*(){const{password:r=""}=yield o();n(),p.setLockInfo({isLock:!0,pwd:r}),yield i()}),C=_(()=>{const{avatar:r}=s.getUserInfo;return r||N});return{t:e,prefixCls:m,getRealName:t,register:d,registerForm:a,handleLock:B,avatar:C}}});const q=["src"];function z(e,m,s,p,t,d){const n=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return b(),P(o,V({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[l("div",{class:c(`${e.prefixCls}__entry`)},[l("div",{class:c(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,q),l("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(n,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:c(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[U(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}const ne=w(D,[["render",z]]);export{ne as default};
