"use strict";(self["webpackChunknest_admin"]=self["webpackChunknest_admin"]||[]).push([[484],{70852:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(73396),a=e(87139),o={class:"product-card"},u=(0,r.Uk)("全屏"),i=["src"];function l(t,n,e,l,c,d){var s=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(s,{class:"all-screen",onClick:n[0]||(n[0]=function(n){return t.allFull()})},{default:(0,r.w5)((function(){return[u]})),_:1}),(0,r._)("iframe",{src:"http://localhost:8081/"+t.title,class:(0,a.C_)(t.full?"full-iframe":"iframe-card"),style:{border:"none"}},null,10,i)])}var c=(0,r.aZ)({props:{title:{type:String,default:""}},data:function(){return{full:!1}},created:function(){},methods:{allFull:function(){this.full=!this.full}}}),d=e(40089);const s=(0,d.Z)(c,[["render",l],["__scopeId","data-v-3d0985f5"]]);var f=s},49484:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r=e(73396),a=function(t){return(0,r.dD)("data-v-7fa1a142"),t=t(),(0,r.Cn)(),t},o={class:"dashboard-container"},u=a((function(){return(0,r._)("div",{class:"card-header"},[(0,r._)("span",null,"网站列表")],-1)})),i={class:"product-demo"},l=a((function(){return(0,r._)("h3",{class:"product_tip"},"模板",-1)}));function c(t,n,e,a,c,d){var s=(0,r.up)("el-table-column"),f=(0,r.up)("el-switch"),p=(0,r.up)("el-table"),m=(0,r.up)("el-card"),h=(0,r.up)("el-col"),v=(0,r.up)("product-card"),w=(0,r.up)("el-row");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",null,[(0,r.Wm)(w,{gutter:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{span:16,xs:24,sm:24,lg:16},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,{class:"box-card"},{header:(0,r.w5)((function(){return[u]})),default:(0,r.w5)((function(){return[(0,r.Wm)(p,{data:t.tableData,style:{width:"100%"},stripe:"",border:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{prop:"url",label:"Url",width:"180"}),(0,r.Wm)(s,{prop:"ip",label:"ip",width:"180"}),(0,r.Wm)(s,{prop:"navigator",label:"设备"}),(0,r.Wm)(s,{prop:"city",label:"城市"}),(0,r.Wm)(s,{prop:"open",label:"开启"},{default:(0,r.w5)((function(n){return[(0,r.Wm)(f,{modelValue:n.row.open,"onUpdate:modelValue":function(t){return n.row.open=t},"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:function(e){return t.switchChange(n.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),(0,r.Wm)(s,{prop:"time",label:"时间",formatter:t.formatterTime},null,8,["formatter"])]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(h,{span:8,xs:24,sm:24,lg:8},{default:(0,r.w5)((function(){return[(0,r._)("div",i,[l,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.fileList,(function(t){return(0,r.wg)(),(0,r.j4)(v,(0,r.dG)({title:t},{key:t}),null,16)})),128))])]})),_:1})]})),_:1})])])}e(54747),e(9653);var d=e(44870),s=e(70852),f=e(87139),p=["id"];function m(t,n,e,a,o,u){return(0,r.wg)(),(0,r.iD)("div",{class:"echart-container",id:t.id,style:(0,f.j5)(t.styles)},null,12,p)}e(92222);var h=e(44229),v=e(77823),w=e.n(v),b=(0,r.aZ)({props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"400px"},options:{type:Object,required:!0}},setup:function(t){var n,e="echarts_"+ +Date.now()+Math.floor(1e4*Math.random()),a=(0,d.Fl)((function(){var n="number"===typeof t.width?"".concat(t.width,"px"):t.width,e="number"===typeof t.height?"".concat(t.height,"px"):t.height;return"width: ".concat(n,";height: ").concat(e)})),o=function(){t.options&&(n||(n=h.S1(document.getElementById(e))),n.clear(),n.setOption(t.options))};(0,r.YP)((function(){return t.options}),(function(){o()}),{deep:!0});var u=w()((function(){var t;null===(t=n)||void 0===t||t.resize()}),100);return(0,r.bv)((function(){o(),window.addEventListener("resize",u)})),(0,r.Jd)((function(){var t;window.removeEventListener("resize",u),null===(t=n)||void 0===t||t.dispose()})),{id:e,styles:a}}}),_=e(40089);const g=(0,_.Z)(b,[["render",m],["__scopeId","data-v-48d97816"]]);var y=g,W=e(86495),C=e(55743),D=e.n(C),x=(0,r.aZ)({components:{ProductCard:s.Z,Charts:y},setup:function(){var t=(0,d.iH)([]),n=(0,d.iH)([]),e=function(){(0,W.Hr)().then((function(t){t.data.forEach((function(t){"1"===t.open?t.open=!0:t.open=!1})),n.value=t.data.reverse()}))};e();var r=function(t,n,e){return D()(Number(e)).format("YYYY-MM-DD HH:mm:ss")},a=function(){(0,W.fD)().then((function(n){t.value=n.data}))};a();var o=function(t){var n=(0,d.IU)(t);n.open?n.open="1":n.open="0",(0,W.dT)(n).then((function(){e()}))};return{fileList:t,tableData:n,formatterTime:r,switchChange:o}}});const Z=(0,_.Z)(x,[["render",c],["__scopeId","data-v-7fa1a142"]]);var k=Z}}]);