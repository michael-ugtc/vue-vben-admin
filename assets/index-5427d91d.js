import{B as b}from"./BasicTable-ce782879.js";import{T as C}from"./componentMap-e0a87cc7.js";import"./TableImg.vue_vue_type_style_index_0_lang-c7e0bf21.js";import{u as T}from"./useTable-3dd5dd57.js";import{d as g}from"./system-82075152.js";import{u as _}from"./index-bf89e29e.js";import{M as w,c as S,s as D}from"./MenuDrawer-a4ac094c.js";import{d as k,x as B,a7 as o,Z as h,_ as F,l as c,a9 as l,E as M,a8 as y,ab as E}from"./vue-ea98dac5.js";import{_ as x}from"./index.js";import"./useFormItem-d01c3888.js";import"./antd-51a19206.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";import"./BasicForm-2f9826ef.js";import"./FormItem.vue_vue_type_script_lang-6b89145f.js";import"./useForm-76f4a81e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const A=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:C},setup(){const[e,{openDrawer:n}]=_(),[m,{reload:u,expandAll:p}]=T({title:"菜单列表",api:g,columns:S,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function r(t){n(!0,{record:t,isUpdate:!0})}function a(t){}function i(){u()}function s(){B(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:a,handleSuccess:i,onFetchSuccess:s}}});function R(e,n,m,u,p,d){const r=o("a-button"),a=o("TableAction"),i=o("BasicTable"),s=o("MenuDrawer");return h(),F("div",null,[c(i,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:l(()=>[M(" 新增菜单 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:t,record:f})=>[t.key==="action"?(h(),y(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const ae=x(A,[["render",R]]);export{ae as default};
