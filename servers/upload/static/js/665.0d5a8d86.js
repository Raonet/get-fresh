(self["webpackChunknest_admin"]=self["webpackChunknest_admin"]||[]).push([[665],{93527:function(e,t,n){"use strict";n.d(t,{a3:function(){return i},aC:function(){return u},Ww:function(){return o},fT:function(){return d}});n(41539),n(78783),n(33948),n(60285),n(41637),n(73689),n(74916),n(15306);var r=n(55743),a=n.n(r);function i(e,t){return a()(e).format(t||"YYYY-MM-DD HH:mm:ss")}function u(e,t){var n=t.root,r=void 0===n?0:n,a=t.pidKey,i=void 0===a?"pid":a,u=t.idKey,o=void 0===u?"id":u,d=t.childKey,l=void 0===d?"children":d;function c(t){for(var n=[],r=0,a=e.length;r<a;r++)if(e[r][i]===t){var u=c(e[r][o]);u.length>0&&(e[r][l]=u),n.push(e[r])}return n}return c(r)}function o(e,t){var n=new Blob([e]),r=window.URL.createObjectURL(n),a=document.createElement("a");a.style.display="none",a.href=r,a.setAttribute("download",t),document.body.appendChild(a),a.click()}function d(e){var t="";return t=e>=1073741824?e%1073741824===0?e/1073741824+"G":Math.trunc(e/1073741824)+"G":e>=1048576?e%1048576===0?e/1048576+"MB":Math.trunc(e/1048576)+"MB":e>=1024?e%1024===0?e/1024+"KB":Math.trunc(e/1024)+"KB":e+"B",t}},32665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(73396),a={class:"depts-container"},i={class:"dept-content"};function u(e,t,n,u,o,d){var l=(0,r.up)("dept-tree"),c=(0,r.up)("dept-edit"),s=(0,r.up)("dept-user-list"),p=(0,r.Q2)("loading");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.wy)((0,r.Wm)(l,{onNodeClick:e.selectChangeEvent},null,8,["onNodeClick"]),[[p,e.loading]]),(0,r._)("div",i,[(0,r.Wm)(c,{curr:e.currDept,onChange:e.deptChange},null,8,["curr","onChange"]),(0,r.Wm)(s)])])}var o=n(48534),d=(n(36133),n(44870)),l=n(14003),c={class:"dept-tree-wrapper"};function s(e,t,n,a,i,u){var o=(0,r.up)("el-tree"),d=(0,r.up)("el-empty"),l=(0,r.up)("el-scrollbar");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(l,null,{default:(0,r.w5)((function(){return[(e.deptTree||[]).length>0?((0,r.wg)(),(0,r.j4)(o,{key:0,"highlight-current":"","default-expand-all":"","node-key":"id",data:e.deptTree,props:{label:"name",children:"children",disabled:"disabled"},onNodeClick:e.nodeClickEvent},null,8,["data","onNodeClick"])):((0,r.wg)(),(0,r.j4)(d,{key:1,description:"暂无数据"}))]})),_:1})])}n(92222);var p=n(91046),m=n(75252),f=n(51587),v="deptTree";function g(){return p.Z.request({url:"".concat(m.Z.api.baseUrl,"/dept/list"),method:f.b.GET})}function b(e){return p.Z.request({url:"".concat(m.Z.api.baseUrl,"/dept"),method:f.b.PUT,data:e})}function h(e){return p.Z.request({url:"".concat(m.Z.api.baseUrl,"/dept"),method:f.b.POST,data:e})}function k(e){return p.Z.request({url:"".concat(m.Z.api.baseUrl,"/dept/").concat(e),method:f.b.DELETE})}var w=(0,r.aZ)({emits:["node-click"],setup:function(e,t){var n=t.emit,a=(0,r.f3)(v),i=function(e){n("node-click",e)};return{deptTree:a,nodeClickEvent:i}}}),y=n(40089);const C=(0,y.Z)(w,[["render",s],["__scopeId","data-v-06dd1b03"]]);var Z=C,E={class:"dept-form-wrapper"},_={class:"dept-action"},x=(0,r.Uk)("编辑"),D=(0,r.Uk)("删除"),T=(0,r.Uk)("新增"),U={class:"dept-form-action"},I=(0,r.Uk)("取消"),H=(0,r.Uk)("确认");function W(e,t,n,a,i,u){var o=(0,r.up)("el-button"),d=(0,r.up)("k-select-tree"),l=(0,r.up)("k-form"),c=(0,r.Q2)("loading");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("div",_,[(0,r.Wm)(o,{disabled:e.isEdit||!e.deptForm.id,type:"primary",onClick:t[0]||(t[0]=function(t){return e.isEdit=!0})},{default:(0,r.w5)((function(){return[x]})),_:1},8,["disabled"]),(0,r.Wm)(o,{disabled:e.isEdit||!e.deptForm.id,type:"danger",onClick:e.delDept},{default:(0,r.w5)((function(){return[D]})),_:1},8,["disabled","onClick"]),(0,r.Wm)(o,{disabled:e.isEdit,onClick:e.addEvent},{default:(0,r.w5)((function(){return[T]})),_:1},8,["disabled","onClick"])]),(0,r.Wm)(l,(0,r.dG)({ref:"deptFormRef",class:"dept-form"},e.formOptions,{disabled:!e.isEdit,modelValue:e.deptForm,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.deptForm=t})}),(0,r.Nv)({parentId:(0,r.w5)((function(){return[(0,r.Wm)(d,{modelValue:e.deptForm.parentId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.deptForm.parentId=t}),"tree-data":e.deptTree,"tree-options":{nodeKey:"id",defaultExpandAll:!0,props:{label:"name"}}},null,8,["modelValue","tree-data"])]})),_:2},[e.isEdit?{name:"footer",fn:(0,r.w5)((function(){return[(0,r._)("div",U,[(0,r.Wm)(o,{onClick:e.cancelEidt},{default:(0,r.w5)((function(){return[I]})),_:1},8,["onClick"]),(0,r.Wm)(o,{type:"primary",onClick:e.confirmEvent},{default:(0,r.w5)((function(){return[H]})),_:1},8,["onClick"])])]}))}:void 0]),1040,["disabled","modelValue"])])),[[c,e.loading]])}var R=n(95082),q=(n(68309),n(13798)),F=(0,r.aZ)({name:"DeptEdit",props:{curr:{type:Object,required:!0}},emits:["change"],setup:function(e,t){var n=t.emit,a={name:"",parentId:"0",status:1,orderNum:0,leader:"",remark:""},i=(0,d.iH)((0,R.Z)({},a)),u=(0,d.iH)((0,R.Z)({},a));(0,r.YP)((function(){return e.curr}),(function(e){i.value=e,u.value=(0,R.Z)({},e)}));var c=(0,d.iH)(!1),s=function(){i.value=(0,R.Z)({},u.value),c.value=!1},p=function(){i.value=(0,R.Z)((0,R.Z)({},a),{},{parentId:u.value.id}),c.value=!0},m=(0,d.iH)({mode:"config",labelWidth:"120px",formItems:[{label:"部门名称：",prop:"name",component:"input",placeholder:"请输入部门名称"},{label:"上级部门：",prop:"parentId",slot:!0},{label:"部门负责人：",prop:"leader",component:"input",placeholder:"请输入部门负责人"},{label:"排序：",prop:"orderNum",component:"inputNumber",min:0},{label:"部门状态：",prop:"status",component:"radio",options:[{label:1,content:"正常"},{label:0,content:"停用"}]},{label:"备注：",prop:"remark",component:"input",type:"textarea",rows:2,placeholder:"请输入部门备注"}],rules:{name:[{required:!0,message:"请输入部门名称",trigger:"blur"},{type:"string",min:2,max:20,message:"部门名称仅支持2~20个字符",trigger:"blur"}],parentId:[{required:!0,message:"请选择上级部门",trigger:"blur"}],leader:[{required:!0,message:"请输入部门负责人",trigger:"blur"},{type:"string",min:2,max:10,message:"部门负责人仅支持2~10个字符",trigger:"blur"}],status:[{required:!0,message:"请选择部门状态",trigger:"blur"}],orderNum:[{required:!0,message:"请输入排序",trigger:"blur"}]}}),f=(0,d.iH)([]),g=(0,r.f3)(v,f);(0,r.YP)((function(){return g.value}),(function(e){f.value=[{name:"无上级部门",id:"0",parentId:"-1",orderNum:0,status:1,remark:"",leader:"",children:e}]}),{deep:!0,immediate:!0});var w=(0,d.iH)(!1),y=function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(){var t,r,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=(0,R.Z)({},i.value),w.value=!0,!a.id){e.next=8;break}return e.next=5,b(a);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,h(a);case 10:r=e.sent;case 11:w.value=!1,200===(null===(t=r)||void 0===t?void 0:t.code)?((0,l.z8)({message:"".concat(a.id?"更新":"创建","成功"),type:"success"}),n("change"),c.value=!1):(0,l.z8)({type:"error",message:(null===(u=r)||void 0===u?void 0:u.msg)||"网络异常，请稍后重试"});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.T.confirm("是否确认删除【".concat(i.value.name,"】部门？"),"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 2:return w.value=!0,e.next=5,k(i.value.id);case 5:t=e.sent,w.value=!1,200===(null===t||void 0===t?void 0:t.code)?((0,l.z8)({type:"success",message:"删除部门成功"}),n("change"),c.value=!1):(0,l.z8)({type:"error",message:(null===t||void 0===t?void 0:t.msg)||"网络异常，请稍后重试"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=(0,d.iH)(),E=function(){Z.value.elFormRef.validate((function(e){e&&y()}))};return{loading:w,isEdit:c,deptForm:i,deptFormRef:Z,formOptions:m,deptTree:f,addEvent:p,cancelEidt:s,delDept:C,confirmEvent:E}}});const M=(0,y.Z)(F,[["render",W],["__scopeId","data-v-56f9e6ae"]]);var N=M,B={class:"dept-user-list"};function K(e,t,n,a,i,u){return(0,r.wg)(),(0,r.iD)("div",B)}var V=(0,r.aZ)({setup:function(){var e=(0,d.iH)([]);return{userList:e}}});const Y=(0,y.Z)(V,[["render",K],["__scopeId","data-v-c2930ede"]]);var z=Y,L=n(93527),O=(0,r.aZ)({components:{DeptTree:Z,DeptEdit:N,DeptUserList:z},setup:function(){var e=(0,d.iH)(!1),t=(0,d.iH)([]),n=function(){var n=(0,o.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.next=3,g();case 3:r=n.sent,e.value=!1,200===(null===r||void 0===r?void 0:r.code)?(a=r.data,t.value=(0,L.aC)(a,{root:"0",pidKey:"parentId"})):(0,l.z8)({type:"error",message:(null===r||void 0===r?void 0:r.msg)||"网络异常，请稍后重试"});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),(0,r.JJ)(v,t);var a=(0,d.iH)({}),i=function(e){a.value=e},u=function(){n(),a.value={}};return{loading:e,currDept:a,selectChangeEvent:i,deptChange:u}}});const j=(0,y.Z)(O,[["render",u],["__scopeId","data-v-756f3a2c"]]);var G=j},73689:function(e,t,n){var r=n(82109),a=Math.ceil,i=Math.floor;r({target:"Math",stat:!0},{trunc:function(e){return(e>0?i:a)(e)}})}}]);