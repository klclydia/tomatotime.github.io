(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dac16d8","chunk-e704d8c8"],{"89ca":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{display:"inline-block"}},[o("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18",color:"#2d8cf0"}})],1)},i=[],a={name:"circleLoading"},n=a,r=(o("c70c"),o("2877")),l=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=l.exports},b726:function(t,e,o){},c70c:function(t,e,o){"use strict";var s=o("b726"),i=o.n(s);i.a},d254:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search"},[o("Row",[o("Col",[o("Card",[o("Row",{staticClass:"operation"},[o("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.addRole}},[t._v("安排新任务")]),t._v(" "),o("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),o("Button",{attrs:{icon:"md-refresh"},on:{click:t.init}},[t._v("刷新")]),t._v(" "),t.operationLoading?o("circleLoading"):t._e()],1),t._v(" "),o("Row",[o("Alert",{attrs:{"show-icon":""}},[t._v("\n            已选择\n            "),o("span",{staticClass:"select-count"},[t._v(t._s(t.selectCount))]),t._v(" 项\n            "),o("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])])],1),t._v(" "),o("Row",[o("Table",{ref:"table",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data,sortable:"custom"},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect}})],1),t._v(" "),o("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[o("Page",{attrs:{current:t.pageNumber,total:t.total,"page-size":t.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)],1),t._v(" "),o("Modal",{attrs:{draggable:"",title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[o("Form",{ref:"form",attrs:{model:t.form,"label-width":80,rules:t.formValidate}},[o("FormItem",{attrs:{label:"任务类名",prop:"jobClassName"}},[o("Input",{attrs:{placeholder:"例如 com.coral.mini.program.admin.quartz.jobs.Job",clearable:""},model:{value:t.form.jobClassName,callback:function(e){t.$set(t.form,"jobClassName",e)},expression:"form.jobClassName"}})],1),t._v(" "),o("FormItem",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"cron表达式",prop:"cronExpression"}},[o("Input",{attrs:{clearable:""},model:{value:t.form.cronExpression,callback:function(e){t.$set(t.form,"cronExpression",e)},expression:"form.cronExpression"}}),t._v(" "),o("a",{attrs:{target:"_blank",href:"http://cron.qqe2.com/"}},[o("Icon",{staticStyle:{margin:"0 3px 3px 0"},attrs:{type:"md-arrow-dropright-circle",size:"16"}}),t._v("在线cron表达式生成\n        ")],1)],1),t._v(" "),o("FormItem",{attrs:{label:"参数",prop:"parameter"}},[o("Input",{model:{value:t.form.parameter,callback:function(e){t.$set(t.form,"parameter",e)},expression:"form.parameter"}})],1),t._v(" "),o("FormItem",{attrs:{label:"备注",prop:"description"}},[o("Input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"text"},on:{click:t.cancelSubmit}},[t._v("取消")]),t._v(" "),o("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handleSubmit}},[t._v("保存并安排")])],1)],1)],1)},i=[],a=(o("ac6a"),o("365c")),n=o("89ca"),r={name:"quartz-manage",components:{circleLoading:n["default"]},data:function(){var t=this;return{loading:!0,operationLoading:!1,sortColumn:"createTime",sortType:"desc",modalType:0,modalVisible:!1,modalTitle:"",form:{id:"",jobClassName:"",cronExpression:"",paramter:"",description:""},formValidate:{jobClassName:[{required:!0,message:"任务类名不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron表达式不能为空",trigger:"blur"}]},submitLoading:!1,selectList:[],selectCount:0,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"任务类名",key:"jobClassName",sortable:!0,width:200},{title:"cron表达式",key:"cronExpression",sortable:!0,width:200},{title:"参数",key:"parameter",sortable:!0,width:180},{title:"备注",key:"description",sortable:!0,minWidth:180},{title:"状态",key:"status",align:"center",width:140,render:function(t,e){return 0===e.row.status?t("div",[t("Tag",{props:{type:"dot",color:"success"}},"执行中")]):-1===e.row.status?t("div",[t("Tag",{props:{type:"dot",color:"error"}},"已停止")]):void 0},filters:[{label:"执行中",value:0},{label:"已停止",value:-1}],filterMultiple:!1,filterMethod:function(t,e){return 0===t?0===e.status:-1===t?-1===e.status:void 0}},{title:"操作",key:"action",align:"center",width:280,render:function(e,o){var s="";return s=0==o.row.status?e("Button",{props:{type:"warning",size:"small",icon:"md-pause"},style:{marginRight:"5px"},on:{click:function(){t.pause(o.row)}}},"暂停"):e("Button",{props:{type:"success",size:"small",icon:"md-play"},style:{marginRight:"5px"},on:{click:function(){t.resume(o.row)}}},"恢复执行"),e("div",[s,e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(o.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(o.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0}},methods:{init:function(){this.getQuartzList()},changePage:function(t){this.pageNumber=t,this.getQuartzList(),this.clearSelectAll()},changePageSize:function(t){this.pageSize=t,this.getQuartzList()},changeSort:function(t){this.sortColumn=t.key,this.sortType=t.order,"normal"===t.order&&(this.sortType=""),this.getQuartzList()},getQuartzList:function(){var t=this;this.loading=!0;var e={pageNumber:this.pageNumber,pageSize:this.pageSize,sort:this.sortColumn,order:this.sortType};Object(a["L"])(e).then((function(e){t.loading=!1,!0===e.success&&(t.data=e.result.content,t.total=e.result.totalElements)}))},cancelSubmit:function(){this.modalVisible=!1},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(0===t.modalType?(t.submitLoading=!0,Object(a["e"])(t.form).then((function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("操作成功"),t.getQuartzList(),t.modalVisible=!1)}))):(t.submitLoading=!0,Object(a["x"])(t.form).then((function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("操作成功"),t.getQuartzList(),t.modalVisible=!1)}))))}))},addRole:function(){this.modalType=0,this.modalTitle="添加任务",this.$refs.form.resetFields(),this.form={paramter:"",description:""},this.modalVisible=!0},edit:function(t){for(var e in this.modalType=1,this.modalTitle="编辑任务",t)null===t[e]&&(t[e]="");var o=JSON.stringify(t),s=JSON.parse(o);this.form=s,this.modalVisible=!0},pause:function(t){var e=this;this.$Modal.confirm({title:"确认停止",content:"您确认要停止任务 "+t.jobClassName+" ?",onOk:function(){e.operationLoading=!0,Object(a["T"])(t).then((function(t){e.operationLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getQuartzList())}))}})},resume:function(t){var e=this;this.$Modal.confirm({title:"确认恢复",content:"您确认要恢复任务 "+t.jobClassName+" ?",onOk:function(){e.operationLoading=!0,Object(a["V"])(t).then((function(t){e.operationLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getQuartzList())}))}})},remove:function(t){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除任务 "+t.jobClassName+" ?",onOk:function(){e.operationLoading=!0,Object(a["o"])(t.id).then((function(t){e.operationLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getQuartzList())}))}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(t){this.selectList=t,this.selectCount=t.length},delAll:function(){var t=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var e="";t.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),t.operationLoading=!0,Object(a["o"])(e).then((function(e){t.operationLoading=!1,!0===e.success&&(t.$Message.success("删除成功"),t.clearSelectAll(),t.getQuartzList())}))}})}},mounted:function(){this.init()}},l=r,c=(o("edda"),o("2877")),u=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports},edda:function(t,e,o){"use strict";var s=o("f7a7"),i=o.n(s);i.a},f7a7:function(t,e,o){}}]);