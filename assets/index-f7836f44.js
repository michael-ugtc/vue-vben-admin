import{_ as o}from"./index-0ad66e9d.js";import{t as i}from"./data-1ad4e56f.js";import{P as g}from"./index-3327f585.js";import{N as C}from"./index.js";import{R,K as s,J as m,y as E,e as y,aK as $}from"./antd-51a19206.js";import{d as b,f as u,a7 as A,Z as B,a8 as w,a9 as t,l as a,u as e,E as f,x as L}from"./vue-ea98dac5.js";import"./useContextMenu-30306118.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const H=b({__name:"index",setup(P){const p=u(null),_=u(null),v=u(null),d=u([]),l=u(!1);function k(n,c){}function x(){l.value=!0,setTimeout(()=>{d.value=y(i),l.value=!1,L(()=>{var n;(n=e(_))==null||n.expandAll(!0)})},2e3)}function D(){l.value=!0,setTimeout(()=>{d.value=y(i),l.value=!1},2e3)}const h=u([{title:"parent ",key:"0-0"}]);function T(n){return new Promise(c=>{if(C(n.children)&&n.children.length>0){c();return}setTimeout(()=>{const r=e(p);if(r){const K=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];r.updateNodeByKey(n.eventKey,{children:K}),r.setExpandedKeys($([n.eventKey,...r.getExpandedKeys()]))}c()},300)})}return(n,c)=>{const r=A("a-button");return B(),w(e(g),{title:"Tree基础示例"},{default:t(()=>[a(e(R),{gutter:[16,16]},{default:t(()=>[a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"基础示例，默认展开第一层",treeData:e(i),defaultExpandLevel:"1"},{title:t(()=>[f(" 123123 ")]),_:1},8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"可勾选，默认全部展开",treeData:e(i),checkable:!0,defaultExpandAll:"",onCheck:k},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"指定默认展开/勾选示例",treeData:e(i),checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"懒加载异步树",ref_key:"asyncTreeRef",ref:p,treeData:h.value,"load-data":T},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"异步数据，默认展开"},{extra:t(()=>[a(r,{onClick:x,loading:l.value},{default:t(()=>[f("加载数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(E),{spinning:l.value},{default:t(()=>[a(e(o),{ref_key:"asyncExpandTreeRef",ref:_,treeData:d.value},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"BasicTree内置加载"},{extra:t(()=>[a(r,{onClick:D,loading:l.value},{default:t(()=>[f("请求数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(o),{ref_key:"loadTreeRef",ref:v,treeData:d.value,loading:l.value},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{H as default};
