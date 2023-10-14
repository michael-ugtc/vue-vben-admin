import{B as T}from"./BasicTable-ce782879.js";import"./componentMap-e0a87cc7.js";import"./TableImg.vue_vue_type_style_index_0_lang-c7e0bf21.js";import{u as h}from"./useTable-3dd5dd57.js";import{P as g}from"./index-3327f585.js";import{refundTimeTableSchema as y,refundTimeTableData as v}from"./data-07c5e127.js";import{$ as c,J as f,av as k,a6 as _,b4 as i,V as r}from"./antd-51a19206.js";import{d as x,a7 as l,Z as P,a8 as X,a9 as e,l as u,E as t,$ as n}from"./vue-ea98dac5.js";import{_ as $}from"./index.js";import"./useFormItem-d01c3888.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";import"./BasicForm-2f9826ef.js";import"./FormItem.vue_vue_type_script_lang-6b89145f.js";import"./useForm-76f4a81e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-b8e9ee08.js";const S=x({components:{BasicTable:T,PageWrapper:g,[c.name]:c,[f.name]:f,Empty:k,[_.name]:_,[_.Item.name]:_.Item,[i.name]:i,[i.Step.name]:i.Step,[r.name]:r,[r.TabPane.name]:r.TabPane},setup(){const[d]=h({title:"退货进度",columns:y,pagination:!1,dataSource:v,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:d}}}),V={class:"pt-4 m-4 desc-wrap"},N=n("a",null,"12421",-1),w=n("div",null,"Vben",-1),I=n("p",null,"2016-12-12 12:32",-1),W=n("p",null,"Chad",-1),z=n("h4",null,"信息组",-1);function R(d,Y,J,M,Z,j){const m=l("a-button"),p=l("a-tab-pane"),D=l("a-tabs"),a=l("a-descriptions-item"),o=l("a-descriptions"),s=l("a-step"),C=l("a-steps"),F=l("a-card"),E=l("a-divider"),b=l("Empty"),B=l("BasicTable"),A=l("PageWrapper");return P(),X(A,{title:"单号：234231029431",contentBackground:""},{extra:e(()=>[u(m,null,{default:e(()=>[t(" 操作一 ")]),_:1}),u(m,null,{default:e(()=>[t(" 操作二 ")]),_:1}),u(m,{type:"primary"},{default:e(()=>[t(" 主操作 ")]),_:1})]),footer:e(()=>[u(D,{"default-active-key":"1"},{default:e(()=>[u(p,{key:"1",tab:"详情"}),u(p,{key:"2",tab:"规则"})]),_:1})]),default:e(()=>[n("div",V,[u(o,{size:"small",column:2},{default:e(()=>[u(a,{label:"创建人"},{default:e(()=>[t(" 曲丽丽 ")]),_:1}),u(a,{label:"订购产品"},{default:e(()=>[t(" XX 服务 ")]),_:1}),u(a,{label:"创建时间"},{default:e(()=>[t(" 2017-01-10 ")]),_:1}),u(a,{label:"关联单据"},{default:e(()=>[N]),_:1}),u(a,{label:"生效日期"},{default:e(()=>[t(" 2017-07-07 ~ 2017-08-08 ")]),_:1}),u(a,{label:"备注"},{default:e(()=>[t(" 请于两个工作日内确认 ")]),_:1})]),_:1}),u(F,{title:"流程进度",bordered:!1},{default:e(()=>[u(C,{current:1,"progress-dot":"",size:"small"},{default:e(()=>[u(s,{title:"创建项目"},{description:e(()=>[w,I]),_:1}),u(s,{title:"部门初审"},{description:e(()=>[W]),_:1}),u(s,{title:"财务复核"}),u(s,{title:"完成"})]),_:1})]),_:1}),u(F,{title:"用户信息",bordered:!1,class:"mt-5"},{default:e(()=>[u(o,{column:3},{default:e(()=>[u(a,{label:"用户姓名"},{default:e(()=>[t(" 付小小 ")]),_:1}),u(a,{label:"会员卡号"},{default:e(()=>[t(" XX 32943898021309809423 ")]),_:1}),u(a,{label:"身份证"},{default:e(()=>[t(" 3321944288191034921 ")]),_:1}),u(a,{label:"联系方式"},{default:e(()=>[t(" 18112345678 ")]),_:1}),u(a,{label:"联系地址",span:2},{default:e(()=>[t(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 ")]),_:1})]),_:1}),u(o,{title:"信息组",column:3},{default:e(()=>[u(a,{label:"某某数据"},{default:e(()=>[t(" 111 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1}),u(a,{label:"某某数据"},{default:e(()=>[t(" 725 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1})]),_:1}),z,u(F,{title:"多层级信息组"},{default:e(()=>[u(o,{title:"组名称",column:3},{default:e(()=>[u(a,{label:"负责人"},{default:e(()=>[t(" 林东东 ")]),_:1}),u(a,{label:"角色码"},{default:e(()=>[t(" 1234567 ")]),_:1}),u(a,{label:"所属部门"},{default:e(()=>[t(" XX公司 - YY部 ")]),_:1}),u(a,{label:"过期时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1}),u(a,{label:"描述",span:2},{default:e(()=>[t(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... ")]),_:1})]),_:1}),u(E),u(o,{title:"组名称",column:1},{default:e(()=>[u(a,{label:"学名"},{default:e(()=>[t(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. ")]),_:1})]),_:1}),u(E),u(o,{title:"组名称",column:1},{default:e(()=>[u(a,{label:"负责人"},{default:e(()=>[t(" 付小小 ")]),_:1}),u(a,{label:"角色码"},{default:e(()=>[t(" 1234568 ")]),_:1})]),_:1})]),_:1})]),_:1}),u(F,{title:"用户近半年来电记录",class:"my-5"},{default:e(()=>[u(b)]),_:1}),u(B,{onRegister:d.registerTimeTable},null,8,["onRegister"])])]),_:1})}const Du=$(S,[["render",R]]);export{Du as default};
