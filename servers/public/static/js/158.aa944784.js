(self["webpackChunknest_admin"]=self["webpackChunknest_admin"]||[]).push([[158],{41196:function(e,n,t){"use strict";t.d(n,{f:function(){return r}});var r="update:modelValue"},93527:function(e,n,t){"use strict";t.d(n,{a3:function(){return a},aC:function(){return o},Ww:function(){return i},fT:function(){return l}});t(41539),t(78783),t(33948),t(60285),t(41637),t(73689),t(74916),t(15306);var r=t(55743),u=t.n(r);function a(e,n){return u()(e).format(n||"YYYY-MM-DD HH:mm:ss")}function o(e,n){var t=n.root,r=void 0===t?0:t,u=n.pidKey,a=void 0===u?"pid":u,o=n.idKey,i=void 0===o?"id":o,l=n.childKey,c=void 0===l?"children":l;function d(n){for(var t=[],r=0,u=e.length;r<u;r++)if(e[r][a]===n){var o=d(e[r][i]);o.length>0&&(e[r][c]=o),t.push(e[r])}return t}return d(r)}function i(e,n){var t=new Blob([e]),r=window.URL.createObjectURL(t),u=document.createElement("a");u.style.display="none",u.href=r,u.setAttribute("download",n),document.body.appendChild(u),u.click()}function l(e){var n="";return n=e>=1073741824?e%1073741824===0?e/1073741824+"G":Math.trunc(e/1073741824)+"G":e>=1048576?e%1048576===0?e/1048576+"MB":Math.trunc(e/1048576)+"MB":e>=1024?e%1024===0?e/1024+"KB":Math.trunc(e/1024)+"KB":e+"B",n}},12628:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});t(34553);var r=t(73216);function u(e){var n=r.h.state.user,t=n.permButton,u=n.permTabs;if("string"===typeof e)return t.findIndex((function(n){return n.code===e}))>-1||u.findIndex((function(n){return n.code===e}))>-1;var a=e.type,o=e.code;if("button"===a)return t.findIndex((function(e){return e.code===o}))>-1;if("tab"===a)return u.findIndex((function(e){return e.code===o}))>-1;throw new Error('v-perm 指令接收 string 或 { type: "button" | "tab", code: string } 的格式')}},81158:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(73396),u={class:"menu-container"},a={class:"menu-tree-wrapper"},o={class:"menu-content"};function i(e,n,t,i,l,c){var d=(0,r.up)("el-tree"),s=(0,r.up)("el-scrollbar"),m=(0,r.up)("menu-edit"),p=(0,r.up)("btn-list"),f=(0,r.Q2)("loading");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(s,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{data:e.menuTree,props:{label:"name",children:"children",disabled:"disabled"},"node-key":"id","highlight-current":"","default-expand-all":"",onNodeClick:e.menuClickEvent},null,8,["data","onNodeClick"])]})),_:1})])),[[f,e.loading]]),(0,r._)("div",o,[(0,r.Wm)(m,{"curr-menu":e.currMenu,"all-menu":e.allMenu,onChange:e.createOrUpdateSuccess},null,8,["curr-menu","all-menu","onChange"]),(0,r.Wm)(p,{"curr-menu":e.currMenu},null,8,["curr-menu"])])])}var l=t(48534),c=(t(36133),t(44870)),d=t(93527),s=t(16139),m={class:"btn-list-wrapper"},p={class:"filter-container"},f={class:"filter-item"},v=(0,r.Uk)("添加"),h=(0,r.Uk)("编辑"),w=(0,r.Uk)("删除");function g(e,n,t,u,a,o){var i,l=(0,r.up)("el-button"),c=(0,r.up)("el-table-column"),d=(0,r.up)("k-table"),s=(0,r.up)("btn-edit"),g=(0,r.Q2)("perm");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",p,[(0,r._)("div",f,[(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{onClick:n[0]||(n[0]=function(n){return e.addOrEditEvent("add")}),disabled:!(null!==(i=e.currMenu)&&void 0!==i&&i.id)},{default:(0,r.w5)((function(){return[v]})),_:1},8,["disabled"])),[[g,"system_menus:create"]])])]),(0,r.Wm)(d,{data:{list:e.btnList},loading:e.loading,"is-pager":!1,mode:"render",border:"",stripe:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{label:"按钮名称",prop:"name",align:"center"}),(0,r.Wm)(c,{label:"唯一编码",prop:"code",align:"center"}),(0,r.Wm)(c,{label:"排序",prop:"orderNum",align:"center"}),e.isActionPerm?((0,r.wg)(),(0,r.j4)(c,{key:0,label:"操作",align:"center",width:"200"},{default:(0,r.w5)((function(n){var t=n.row;return[(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{type:"primary",size:"small",plain:"",onClick:function(n){return e.addOrEditEvent("edit",t)}},{default:(0,r.w5)((function(){return[h]})),_:2},1032,["onClick"])),[[g,"system_menus:edit"]]),(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{type:"danger",size:"small",plain:"",onClick:function(n){return e.delBtnFn(t)}},{default:(0,r.w5)((function(){return[w]})),_:2},1032,["onClick"])),[[g,"system_menus:del"]])]})),_:1})):(0,r.kq)("",!0)]})),_:1},8,["data","loading"]),(0,r.Wm)(s,{modelValue:e.showEdit,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.showEdit=n}),parent:e.currMenu,"curr-btn":e.currBtn,onChange:e.addOrEditSuccess},null,8,["modelValue","parent","curr-btn","onChange"])])}t(68309);var b=(0,r.Uk)("取消"),y=(0,r.Uk)("确认");function k(e,n,t,u,a,o){var i=(0,r.up)("el-input"),l=(0,r.up)("el-form-item"),c=(0,r.up)("api-perms-select"),d=(0,r.up)("el-form"),s=(0,r.up)("el-button"),m=(0,r.up)("el-dialog"),p=(0,r.Q2)("loading");return(0,r.wg)(),(0,r.j4)(m,{title:"按钮编辑",modelValue:e.visible,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.visible=n}),width:"500px",top:"10vh","before-close":e.handleClose,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:(0,r.w5)((function(){return[(0,r.Wm)(s,{onClick:e.handleClose},{default:(0,r.w5)((function(){return[b]})),_:1},8,["onClick"]),(0,r.Wm)(s,{type:"primary",onClick:e.confirmEvent},{default:(0,r.w5)((function(){return[y]})),_:1},8,["onClick"])]})),default:(0,r.w5)((function(){return[(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{ref:"btnFormRef",model:e.btnForm,rules:e.btnFormRules,"label-width":"80px"},{default:(0,r.w5)((function(){return[(0,r.Wm)(l,{label:"按钮名称",prop:"name"},{default:(0,r.w5)((function(){return[(0,r.Wm)(i,{modelValue:e.btnForm.name,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.btnForm.name=n}),modelModifiers:{trim:!0}},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(l,{label:"唯一编码",prop:"code"},{default:(0,r.w5)((function(){return[(0,r.Wm)(i,{modelValue:e.btnForm.code,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.btnForm.code=n}),modelModifiers:{trim:!0}},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(l,{label:"授权集合",prop:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{modelValue:e.currApiPerms,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.currApiPerms=n})},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(l,{label:"排序",prop:"orderNum"},{default:(0,r.w5)((function(){return[(0,r.Wm)(i,{modelValue:e.btnForm.orderNum,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.btnForm.orderNum=n})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])),[[p,e.loading]])]})),_:1},8,["modelValue","before-close"])}var _=t(95082),C=(t(21249),t(92222),t(74916),t(23123),t(41196)),V=t(14003),M=t(87139),x={class:"api-method-path"},U={class:"api-desc-content"};function W(e,n,t,u,a,o){var i=(0,r.up)("el-option"),l=(0,r.up)("el-select");return(0,r.wg)(),(0,r.j4)(l,{modelValue:e.currApiPerms,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.currApiPerms=n}),"popper-class":"menu-apiperms-select",multiple:"","collapse-tags":"",filterable:"","filter-method":e.filterApiPerms,onChange:e.handleChange,style:{width:"250px"}},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.apiPerms,(function(e){return(0,r.wg)(),(0,r.j4)(i,{label:"".concat(e.method," + ").concat(e.path),value:"".concat(e.method,",").concat(e.path),key:"".concat(e.path,"_").concat(e.method),class:"menu-apiperms-option"},{default:(0,r.w5)((function(){return[(0,r._)("div",x,(0,M.zw)(e.method.toUpperCase())+" + "+(0,M.zw)(e.path),1),(0,r._)("div",U,(0,M.zw)(e.desc),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","filter-method","onChange"])}var E=t(6976),F=(t(73210),t(57327),t(73216)),P=t(65044),Z=(0,r.aZ)({props:{modelValue:{type:Array,default:function(){return[]}}},emits:[C.f],setup:function(e,n){var t=n.emit,u=(0,F.oR)(),a=(0,c.iH)(),o=[],i=function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.dispatch(P.wE.GET_ALL_API_PERMS);case 2:a.value=e.sent,o.push.apply(o,(0,E.Z)(a.value));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i();var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.trim().toUpperCase();a.value=e?o.filter((function(e){return"".concat(e.method,"_").concat(e.path,"_").concat(e.desc).toUpperCase().indexOf(n)>-1})):JSON.parse(JSON.stringify(o))},s=(0,c.iH)([]);(0,r.YP)((function(){return e.modelValue}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];s.value=e}));var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t(C.f,e)};return{currApiPerms:s,apiPerms:a,handleChange:m,filterApiPerms:d}}}),H=t(40089);const R=(0,H.Z)(Z,[["render",W]]);var O=R,A=(0,r.aZ)({components:{ApiPermsSelect:O},props:{modelValue:{type:Boolean,defeault:!1},parent:{type:Object,default:function(){return{}}},currBtn:{type:Object,default:function(){return null}}},emits:[C.f,"change"],setup:function(e,n){var t=n.emit,u=(0,c.iH)(!1);(0,r.YP)((function(){return e.modelValue}),(function(e){u.value=e}));var a=function(){t(C.f,!1)},o=(0,c.iH)(!1),i=(0,c.iH)([]),d=function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.value=!0,e.next=3,(0,s.Lm)(n);case 3:t=e.sent,o.value=!1,200===(null===t||void 0===t?void 0:t.code)&&(r=t.data,i.value=r.map((function(e){return"".concat(e.apiMethod.toUpperCase(),",").concat(e.apiUrl)})));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=(0,c.iH)(),p=(0,c.iH)({name:"",code:"",orderNum:0});(0,r.YP)((function(){return e.modelValue}),(function(n){n&&(m.value&&(m.value.clearValidate(),m.value.resetFields()),p.value=e.currBtn||{name:"",code:"",orderNum:0},p.value.id?d(p.value.id):i.value=[])}));var f=function(){var n=(0,l.Z)(regeneratorRuntime.mark((function n(){var r,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=(0,_.Z)((0,_.Z)({},p.value),{},{type:3,parentId:e.parent.id||"0",orderNum:0,menuPermList:i.value.map((function(e){var n=e.split(",");return{apiMethod:n[0],apiUrl:n[1]}}))}),u.parentId=u.parentId||"0",o.value=!0,!u.id){n.next=9;break}return n.next=6,(0,s._8)(u);case 6:l=n.sent,n.next=12;break;case 9:return n.next=11,(0,s.ZT)(u);case 11:l=n.sent;case 12:o.value=!1,200===(null===(r=l)||void 0===r?void 0:r.code)?((0,V.z8)({message:"".concat(u.id?"更新":"创建","成功"),type:"success"}),t("change"),a()):(0,V.z8)({message:l.msg,type:"error"});case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){m.value.validate((function(e){e&&f()}))},h=(0,c.iH)({name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],code:[{required:!0,message:"请输入唯一编码",trigger:"blur"}]});return{visible:u,handleClose:a,btnFormRef:m,btnForm:p,currApiPerms:i,btnFormRules:h,confirmEvent:v,loading:o}}});const S=(0,H.Z)(A,[["render",k]]);var B=S,I=t(13798),T=t(12628),j=(0,r.aZ)({components:{BtnEdit:B},props:{currMenu:{type:Object,default:null}},setup:function(e,n){n.emit;var t=(0,c.iH)([]),u=(0,c.iH)(!1),a=function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.value=!0,e.next=3,(0,s.Kh)(n);case 3:r=e.sent,u.value=!1,200===(null===r||void 0===r?void 0:r.code)&&(t.value=r.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,r.YP)((function(){return e.currMenu}),(function(e){null!==e&&void 0!==e&&e.id&&a(e.id)}));var o=function(){var n=(0,l.Z)(regeneratorRuntime.mark((function n(t){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.T.confirm("此操作将会永久删除【".concat(t.name,"】按钮，是否继续"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:return u.value=!0,n.next=6,(0,s.yo)(t.id);case 6:r=n.sent,u.value=!1,200===(null===r||void 0===r?void 0:r.code)?((0,V.z8)({message:"按钮【".concat(t.name,"】删除成功"),type:"success"}),a(e.currMenu.id)):(0,V.z8)({message:r.msg,type:"error"}),n.next=13;break;case 11:n.prev=11,n.t0=n["catch"](0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),i=(0,c.iH)(),d=(0,c.iH)(!1),m=function(n,t){var r;"add"!==n||null!==(r=e.currMenu)&&void 0!==r&&r.id?(i.value=t,d.value=!0):(0,V.z8)({message:"请先选择左侧菜单,再添加该菜单下的按钮",type:"error"})},p=function(){a(e.currMenu.id)},f=(0,T.Z)("system_menus:del")||(0,T.Z)("system_menus:edit");return{loading:u,btnList:t,showEdit:d,addOrEditEvent:m,delBtnFn:o,currBtn:i,addOrEditSuccess:p,isActionPerm:f}}});const N=(0,H.Z)(j,[["render",g],["__scopeId","data-v-34435375"]]);var z=N,Y=t(49242),L={class:"menu-form-wrapper"},K={class:"menu-action"},D=(0,r.Uk)("编辑"),q=(0,r.Uk)("删除"),J=(0,r.Uk)("添加"),Q={class:"menu-form-action"},G=(0,r.Uk)("取消"),X=(0,r.Uk)("确认");function $(e,n,t,u,a,o){var i,l,c=(0,r.up)("el-button"),d=(0,r.up)("el-input"),s=(0,r.up)("el-form-item"),m=(0,r.up)("el-option"),p=(0,r.up)("el-select"),f=(0,r.up)("api-perms-select"),v=(0,r.up)("el-form"),h=(0,r.up)("check-menu-tree"),w=(0,r.Q2)("perm");return(0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("div",K,[(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{type:"primary",disabled:e.isEditStatus||!(null!==(i=e.currMenu)&&void 0!==i&&i.id),onClick:n[0]||(n[0]=function(n){return e.addOrUpdate("edit")})},{default:(0,r.w5)((function(){return[D]})),_:1},8,["disabled"])),[[w,"system_menus:edit"]]),(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{type:"danger",disabled:e.isEditStatus||!(null!==(l=e.currMenu)&&void 0!==l&&l.id),onClick:e.delMenuFn},{default:(0,r.w5)((function(){return[q]})),_:1},8,["disabled","onClick"])),[[w,"system_menus:del"]]),(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{disabled:e.isEditStatus,onClick:n[1]||(n[1]=function(n){return e.addOrUpdate("add")})},{default:(0,r.w5)((function(){return[J]})),_:1},8,["disabled"])),[[w,"system_menus:create"]])]),(0,r.Wm)(v,{ref:"menuFormRef",class:"menu-form",model:e.menuForm,rules:e.menuFormRules,"label-width":"100px",disabled:!e.isEditStatus},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{label:"菜单名称",prop:"name"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{modelValue:e.menuForm.name,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.menuForm.name=n}),modelModifiers:{trim:!0},placeholder:"请输入菜单名称"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(s,{label:"上级菜单",prop:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{type:"text",onClick:n[3]||(n[3]=function(n){return e.isShowChecked=!0})},{default:(0,r.w5)((function(){var n;return[(0,r.Uk)((0,M.zw)((null===(n=e.menuObj[e.menuForm.parentId])||void 0===n?void 0:n.name)||"无"),1)]})),_:1})]})),_:1}),(0,r.Wm)(s,{label:"唯一编码",prop:"code"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{modelValue:e.menuForm.code,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.menuForm.code=n}),modelModifiers:{trim:!0},placeholder:"唯一标识"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(s,{label:"类型",prop:"type"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{modelValue:e.menuForm.type,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.menuForm.type=n}),placeholder:"请选择类型",style:{width:"250px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,{label:"菜单",value:1}),(0,r.Wm)(m,{label:"标签页",value:2})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)(s,{label:"权限集合"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{modelValue:e.currApiPerms,"onUpdate:modelValue":n[6]||(n[6]=function(n){return e.currApiPerms=n})},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(s,{label:"排序",prop:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{modelValue:e.menuForm.orderNum,"onUpdate:modelValue":n[7]||(n[7]=function(n){return e.menuForm.orderNum=n}),modelModifiers:{number:!0},placeholder:"排序"},null,8,["modelValue"])]})),_:1}),(0,r.wy)((0,r._)("div",Q,[(0,r.Wm)(c,{onClick:e.cancelAddOrEdit},{default:(0,r.w5)((function(){return[G]})),_:1},8,["onClick"]),(0,r.Wm)(c,{type:"primary",onClick:e.createOrUpdateEvent},{default:(0,r.w5)((function(){return[X]})),_:1},8,["onClick"])],512),[[Y.F8,e.isEditStatus]])]})),_:1},8,["model","rules","disabled"]),(0,r.Wm)(h,{modelValue:e.isShowChecked,"onUpdate:modelValue":n[8]||(n[8]=function(n){return e.isShowChecked=n}),onChange:e.checkedParentId},null,8,["modelValue","onChange"])])}t(54747);var ee=(0,r.Uk)("取消"),ne=(0,r.Uk)("确定");function te(e,n,t,u,a,o){var i=(0,r.up)("el-tree"),l=(0,r.up)("el-button"),c=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.j4)(c,{title:"选择上级菜单",modelValue:e.visible,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.visible=n}),top:"5vh",width:"350px","before-close":e.handleClose,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:(0,r.w5)((function(){return[(0,r.Wm)(l,{onClick:e.handleClose},{default:(0,r.w5)((function(){return[ee]})),_:1},8,["onClick"]),(0,r.Wm)(l,{type:"primary",onClick:e.confirmEvent},{default:(0,r.w5)((function(){return[ne]})),_:1},8,["onClick"])]})),default:(0,r.w5)((function(){return[(0,r.Wm)(i,{data:e.menuTree,"highlight-current":"","default-expand-all":"","node-key":"id",props:{label:"name",children:"children",disabled:"disabled"},onNodeClick:e.checkedParent},null,8,["data","onNodeClick"])]})),_:1},8,["modelValue","before-close"])}var re=(0,r.aZ)({name:"CheckMenuTree",props:{modelValue:{type:Boolean,default:!1}},emits:[C.f,"change"],setup:function(e,n){var t=n.emit,u=(0,c.iH)(!1);(0,r.YP)((function(){return e.modelValue}),(function(e){u.value=e}));var a=function(){t(C.f,!1)},o=(0,r.f3)("menuTree"),i=(0,c.iH)([{id:"0",name:"顶级菜单（无上级）",children:o}]),l=(0,c.iH)(""),d=function(e){l.value=e.id},s=function(){t("change",l.value),a()};return{visible:u,handleClose:a,menuTree:i,checkedParent:d,confirmEvent:s}}});const ue=(0,H.Z)(re,[["render",te]]);var ae=ue,oe=(0,r.aZ)({components:{CheckMenuTree:ae,ApiPermsSelect:O},props:{currMenu:{type:Object,default:function(){return{}}},allMenu:{type:Array,default:function(){return[]}},menuTree:{type:Array,default:function(){return[]}}},emits:["change"],setup:function(e,n){var t=n.emit,u=(0,c.iH)([]),a=(0,c.iH)({parentId:"",name:"",code:"",type:"",orderNum:0}),o=(0,c.iH)({});(0,r.YP)((function(){return e.allMenu}),(function(e){e.forEach((function(e){o.value[String(e.id)]=e}))}));var i=(0,c.iH)({}),d=function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Lm)(n);case 2:t=e.sent,200===(null===t||void 0===t?void 0:t.code)&&(r=t.data,i.value[String(n)]=r.map((function(e){return"".concat(e.apiMethod.toUpperCase(),",").concat(e.apiUrl)})),u.value=i.value[String(n)]);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,r.YP)((function(){return e.currMenu}),(function(e){a.value=e,u.value=[],d(e.id)}));var m=(0,c.iH)(),p=(0,c.iH)(!1),f=function(n){var t;"add"===n&&(u.value=[],a.value={parentId:(null===(t=e.currMenu)||void 0===t?void 0:t.id)||"0",name:"",code:"",type:"",orderNum:0});p.value=!0},v=function(){a.value=e.currMenu,p.value=!1,u.value=i.value[String(a.value.id)],m.value.clearValidate()},h=(0,c.iH)(!1),w=function(e){a.value.parentId=e},g=function(){var e=(0,l.Z)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=(0,_.Z)((0,_.Z)({},a.value),{},{menuPermList:u.value.map((function(e){var n=e.split(",");return{apiMethod:n[0],apiUrl:n[1]}}))}),r.parentId=r.parentId||"0",!r.id){e.next=9;break}return delete r.children,e.next=6,(0,s._8)(r);case 6:o=e.sent,e.next=12;break;case 9:return e.next=11,(0,s.ZT)(r);case 11:o=e.sent;case 12:200===(null===(n=o)||void 0===n?void 0:n.code)?((0,V.z8)({message:"".concat(r.id?"更新":"创建","成功"),type:"success"}),p.value=!1,t("change")):(0,V.z8)({message:o.msg,type:"error"});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var n=(0,l.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.T.confirm("此操作将会永久删除【".concat(e.currMenu.name,"】菜单，是否继续"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:return n.next=5,(0,s.yo)(e.currMenu.id);case 5:r=n.sent,200===(null===r||void 0===r?void 0:r.code)?((0,V.z8)({message:"菜单【".concat(e.currMenu.name,"】删除成功"),type:"success"}),t("change")):(0,V.z8)({message:r.msg,type:"error"}),n.next=11;break;case 9:n.prev=9,n.t0=n["catch"](0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),y=function(){m.value.validate((function(e){e&&g()}))},k=(0,c.iH)({name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],code:[{required:!0,message:"请输入唯一编码",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}]});return{menuObj:o,menuFormRef:m,menuFormRules:k,menuForm:a,currApiPerms:u,isEditStatus:p,addOrUpdate:f,cancelAddOrEdit:v,isShowChecked:h,checkedParentId:w,createOrUpdateEvent:y,delMenuFn:b}}});const ie=(0,H.Z)(oe,[["render",$],["__scopeId","data-v-55889245"]]);var le=ie,ce=(0,r.aZ)({components:{BtnList:z,MenuEdit:le},setup:function(){var e=(0,c.iH)([]),n=(0,c.iH)(!1),t=(0,c.iH)(),u=function(){var r=(0,l.Z)(regeneratorRuntime.mark((function r(){var u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.value=!0,r.next=3,(0,s.UZ)();case 3:u=r.sent,200===(null===u||void 0===u?void 0:u.code)&&(t.value=u.data,e.value=(0,d.aC)(t.value,{root:"0",pidKey:"parentId"})),n.value=!1;case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();u(),(0,r.JJ)("menuTree",e);var a=(0,c.iH)({parentId:"",name:"",code:"",type:"",orderNum:""}),o=function(e){a.value=e},i=function(){u()};return{loading:n,menuTree:e,menuClickEvent:o,allMenu:t,currMenu:a,createOrUpdateSuccess:i}}});const de=(0,H.Z)(ce,[["render",i],["__scopeId","data-v-4ac294ab"]]);var se=de},73689:function(e,n,t){var r=t(82109),u=Math.ceil,a=Math.floor;r({target:"Math",stat:!0},{trunc:function(e){return(e>0?a:u)(e)}})}}]);