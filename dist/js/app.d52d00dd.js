(function(t){function e(e){for(var n,r,l=e[0],c=e[1],s=e[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0986":function(t,e,a){},"110b":function(t,e,a){"use strict";a("d5c5")},5300:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("LF")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logic-flow-view"},[t.lf?a("Control",{attrs:{lf:t.lf},on:{catData:t.$_catData}}):t._e(),a("NodePanel",{attrs:{lf:t.lf}}),a("div",{attrs:{id:"LF-view"}}),t.showAddPanel?a("AddPanel",{staticClass:"add-panel",style:t.addPanelStyle,attrs:{lf:t.lf,nodeData:t.addClickNode},on:{addNodeFinish:t.hideAddPanel}}):t._e(),a("a-drawer",{attrs:{title:"设置节点属性",visible:t.dialogVisible},on:{close:t.closeDialog}},[t.dialogVisible?a("PropertyDialog",{attrs:{nodeData:t.clickNode,lf:t.lf},on:{setPropertiesFinish:t.closeDialog}}):t._e()],1),a("a-modal",{attrs:{title:"查看数据",width:"50%",okText:"复制"},on:{ok:t.copyValue},model:{value:t.dataVisible,callback:function(e){t.dataVisible=e},expression:"dataVisible"}},[a("DataDialog",{attrs:{graphData:t.graphData}})],1)],1)},l=[],c=a("5530"),s=a("5e90"),d=a.n(s),u=a("eb21"),f=(a("7692"),a("417c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"node-panel"},t._l(t.nodeList,(function(e){return a("div",{key:e.text,staticClass:"node-item",on:{mousedown:function(a){return t.onDragNode(e)}}},[a("div",{staticClass:"node-item-icon",class:e.class}),a("span",{staticClass:"node-label"},[t._v(t._s(e.text))])])})),0)}),p=[],h={name:"NodePanel",props:{lf:Object},data:function(){return{nodeList:[{text:"开始",type:"start",class:"node-start"},{text:"处理",type:"task",class:"node-task"},{type:"decision",text:"判断",class:"node-decision"},{type:"replication",text:"重复",class:"node-replication"},{type:"concurrency",text:"并行",class:"node-concurrency"},{type:"end",text:"结束",class:"node-end"}]}},methods:{onDragNode:function(t){this.lf.dnd.startDrag({type:t.type,text:t.label})}}},b=h,y=(a("5b8b"),a("2877")),m=Object(y["a"])(b,f,p,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-tabs",{attrs:{"tab-position":"left"}},[a("a-tab-pane",{attrs:{label:"添加动作"}},t._l(t.nodeList,(function(e){return a("div",{key:e.type},[a("a-button",{staticClass:"add-node-btn",attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.$_addNode(e)}}},[t._v(t._s(e.label))])],1)})),0),a("a-tab-pane",{attrs:{label:"添加组"}},[a("a-button",{staticClass:"add-node-btn",attrs:{type:"primary",size:"mini"},on:{click:t.$_addTempalte}},[t._v("模板")])],1)],1)},x=[],k={name:"AddPanel",props:{nodeData:Object,lf:Object||String},data:function(){return{nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}},methods:{$_addNode:function(t){var e=this.$props,a=e.lf,n=e.nodeData,o=n.id,i=n.x,r=n.y,l=a.addNode({type:t.type,x:i+150,y:r+150}),c=l.id;a.createEdge({sourceNodeId:o,targetNodeId:c}),this.$emit("addNodeFinish")},$_addTempalte:function(){var t=this.$props,e=t.lf,a=t.nodeData,n=a.id,o=a.x,i=a.y,r=e.addNode({type:"download",x:o,y:i+150}),l=e.addNode({type:"user",x:o+150,y:i+150}),c=e.addNode({type:"push",x:o+150,y:i+300,properties:{}}),s=e.addNode({type:"end",x:o+300,y:i+150}),d=e.addNode({type:"end",x:o+300,y:i+300});e.createEdge({sourceNodeId:n,targetNodeId:r.id}),e.createEdge({sourceNodeId:r.id,targetNodeId:l.id}),e.createEdge({sourceNodeId:l.id,targetNodeId:s.id,endPoint:{x:o+280,y:i+150},text:{value:"Y",x:o+230,y:i+140}}),e.createEdge({sourceNodeId:l.id,targetNodeId:c.id,text:{value:"N",x:o+160,y:i+230}}),e.createEdge({sourceNodeId:c.id,targetNodeId:d.id,endPoint:{x:o+280,y:i+300}}),this.$emit("addNodeFinish")}}},O=k,j=(a("110b"),Object(y["a"])(O,g,x,!1,null,"39caff6a",null)),N=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-bar"},[a("div",{staticClass:"control-item",on:{click:t.openSelection}},[a("a-icon",{attrs:{type:"select"}}),a("span",{staticClass:"control-text"},[t._v("选区")])],1),a("div",{staticClass:"control-item",on:{click:t.onZoomIn}},[a("a-icon",{attrs:{type:"zoom-in"}}),a("span",{staticClass:"control-text"},[t._v("放大")])],1),a("div",{staticClass:"control-item",on:{click:t.onZoomOut}},[a("a-icon",{attrs:{type:"zoom-out"}}),a("span",{staticClass:"control-text"},[t._v("缩小")])],1),a("div",{staticClass:"control-item",on:{click:t.onReset}},[a("a-icon",{attrs:{type:"pic-center"}}),a("span",{staticClass:"control-text"},[t._v("自适应")])],1),a("div",{staticClass:"control-item",style:t.undoDisable?"cursor: not-allowed;color: #7d7d7d;background:hsla(0, 0%, 100%, 0.7)":"",on:{click:t.onUndo}},[a("a-icon",{attrs:{type:"left"}}),a("span",{staticClass:"control-text"},[t._v("上一步")])],1),a("div",{staticClass:"control-item",style:t.redoDisable?"cursor: not-allowed;color: #7d7d7d;background:hsla(0, 0%, 100%, 0.7)":"",on:{click:t.onRedo}},[a("a-icon",{attrs:{type:"right"}}),a("span",{staticClass:"control-text"},[t._v("下一步")])],1),a("div",{staticClass:"control-item",on:{click:t.onDownload}},[a("a-icon",{attrs:{type:"file-image"}}),a("span",{staticClass:"control-text"},[t._v("导出图片")])],1),a("div",{staticClass:"control-item",on:{click:t.onCatData}},[a("a-icon",{attrs:{type:"eye"}}),a("span",{staticClass:"control-text"},[t._v("查看")])],1)])},w=[],D={name:"Control",props:{lf:Object||String},data:function(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted:function(){var t=this;this.lf.on("history:change",(function(e){var a=e.data,n=a.undoAble,o=a.redoAble;t.undoDisable=!n,t.redoDisable=!o}))},methods:{openSelection:function(){this.lf.updateEditConfig({stopMoveGraph:!0,extraConf:{openSelectionMode:!0}})},onZoomIn:function(){this.lf.zoom(!0)},onZoomOut:function(){this.lf.zoom(!1)},onReset:function(){this.lf.resetZoom(),this.lf.resetTranslate()},onUndo:function(){this.undoDisable||this.lf.undo()},onRedo:function(){this.redoDisable||this.lf.redo()},onDownload:function(){this.lf.getSnapshot()},onCatData:function(){this.$emit("catData")}}},P=D,C=(a("bebc"),Object(y["a"])(P,S,w,!1,null,"c7f75230",null)),_=C.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"property-dialog"},["user"===t.nodeData.type?a("User",{attrs:{nodeData:t.nodeData,lf:t.lf},on:{onClose:t.handleClose}}):a("CommonProperty",{attrs:{nodeData:t.nodeData,lf:t.lf},on:{onClose:t.handleClose}})],1)},$=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{attrs:{"laba-width":"80px",model:t.formData}},[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("a-form-item",{attrs:{label:"活动区域"}},[a("a-input",{model:{value:t.formData.region,callback:function(e){t.$set(t.formData,"region",e)},expression:"formData.region"}})],1),a("a-form-item",{attrs:{label:"活动形式"}},[a("a-input",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},M=[],L={name:"",props:{nodeData:Object,lf:Object||String},mounted:function(){var t=this.nodeData.properties;t&&(this.formData=Object.assign({},this.formData,t))},data:function(){return{formData:{name:"",region:"",type:""}}},methods:{onSubmit:function(){console.log("submit!");var t=this.nodeData.id;this.lf.setProperties(t,this.formData),this.$emit("onClose")}}},I=L,E=Object(y["a"])(I,z,M,!1,null,"8153433a",null),R=E.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{ref:"form",attrs:{model:t.form,"laba-width":"80px"}},[a("a-form-item",{attrs:{label:"活动名称"}},[a("a-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("a-form-item",{attrs:{label:"活动区域"}},[a("a-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[a("a-option",{attrs:{label:"区域一",value:"shanghai"}}),a("a-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("a-form-item",{attrs:{label:"活动时间"}},[a("a-col",{attrs:{span:11}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),a("a-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),a("a-col",{attrs:{span:11}},[a("a-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),a("a-form-item",{attrs:{label:"即时配送"}},[a("a-switch",{model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1),a("a-form-item",{attrs:{label:"活动性质"}},[a("a-checkbox-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("a-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),a("a-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("a-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),a("a-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),a("a-form-item",{attrs:{label:"特殊资源"}},[a("a-radio-group",{model:{value:t.form.resource,callback:function(e){t.$set(t.form,"resource",e)},expression:"form.resource"}},[a("a-radio",{attrs:{label:"线上品牌商赞助"}}),a("a-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("a-form-item",{attrs:{label:"活动形式"}},[a("a-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},W=[],q={name:"",props:{nodeData:Object,lf:Object||String},mounted:function(){var t=this.nodeData.properties;t&&(this.form=Object.assign({},this.form,t))},data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!");var t=this.nodeData.id;this.lf.setProperties(t,this.form),this.$emit("onClose")}}},T=q,B=Object(y["a"])(T,V,W,!1,null,"52b6e3d3",null),F=B.exports,H={name:"PropertyDialog",components:{CommonProperty:R,User:F},props:{nodeData:Object,lf:Object},data:function(){return{}},methods:{handleClose:function(){this.$emit("setPropertiesFinish")}}},U=H,J=(a("edbe"),Object(y["a"])(U,A,$,!1,null,null,null)),Z=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"500px","overflow-y":"scroll"}},[a("vue-json-pretty",{attrs:{path:"res",data:t.graphData}})],1)},Y=[],X=a("838b"),K=a.n(X),Q=(a("b83f"),{props:{graphData:Object},components:{VueJsonPretty:K.a}}),tt=Q,et=Object(y["a"])(tt,G,Y,!1,null,"43f28d22",null),at=et.exports,nt=a("45eb"),ot=a("7e84"),it=a("d4ec"),rt=a("bee2"),lt=a("262e"),ct=a("2caf");a("cb29");function st(t){t.register("start",(function(t){var e=t.CircleNode,a=t.CircleNodeModel,n=t.h,o=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("text",{fill:"#000000",fontSize:12,x:e-12,y:a+4,width:50,height:25},"开始")}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y,o=t.r,i=t.fill,r=t.strokeWidth;return n("g",{},[n("circle",{cx:e,cy:a,r:o,fill:i,fillOpacity:.3,stroke:i,strokeWidth:r}),this.getLabelShape()])}}]),a}(e),i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+35,dragable:!1,editable:!1},e.call(this,t,n)}return Object(rt["a"])(a,[{key:"getConnectedTargetRules",value:function(){var t=Object(nt["a"])(Object(ot["a"])(a.prototype),"getConnectedTargetRules",this).call(this),e={message:"起始节点不能作为连线的终点",validate:function(){return!1}};return t.push(e),t}}]),a}(a);return{view:o,model:i}}))}a("99af"),a("a15b"),a("d81d");function dt(t){t.register("user",(function(e){var a=e.PolygonNode,n=e.PolygonNodeModel,o=e.h,i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getIconShape",value:function(){var t=this.getAttributes(),e=t.stroke;return o("svg",{x:20,y:18,width:30,height:30,viewBox:"0 0 1126 1024"},o("path",{fill:e,d:"M792.576 379.392a25.6 25.6 0 0 0 25.2928 25.8048h283.2384A25.6 25.6 0 0 0 1126.4 379.392a25.6 25.6 0 0 0-25.2928-25.8048h-283.2384a25.6 25.6 0 0 0-25.344 25.8048z m303.9232 80.7424H761.856c-16.5376 0-29.9008 11.6224-29.9008 25.7536 0 14.1824 13.312 25.7536 29.9008 25.7536h334.6432c16.4864 0 29.9008-11.5712 29.9008-25.7536 0-14.1312-13.4144-25.7536-29.9008-25.7536z m4.608 106.496h-283.2384a25.6 25.6 0 0 0-25.344 25.7536 25.6 25.6 0 0 0 25.344 25.7536h283.2384A25.6 25.6 0 0 0 1126.4 592.384a25.6 25.6 0 0 0-25.2928-25.8048zM543.0272 1024H341.6576C150.8352 1024 0 1024 0 923.648v-20.1216c0-188.16 153.2928-341.1968 341.7088-341.1968h201.2672c188.416 0 341.76 153.0368 341.76 341.1968v20.0704C884.6848 1024 726.3232 1024 542.976 1024z m-203.1616-405.1456c-158.464 0-287.4368 128.4096-287.4368 286.208v20.48c0 40.9088 166.0928 40.9088 287.4368 40.9088h204.9536c100.4544 0 287.4368 0 287.4368-40.96v-20.3776c0-157.8496-128.9728-286.208-287.4368-286.208H339.8656z m92.416-76.7488a271.4112 271.4112 0 0 1-271.2064-271.0528A271.36 271.36 0 0 1 432.2816 0a271.36 271.36 0 0 1 271.2064 271.0528 271.4624 271.4624 0 0 1-271.2064 271.0528z m-215.3472-271.872c0 118.1696 96.6144 214.3232 215.3472 214.3232 118.784 0 215.3984-96.1536 215.3984-214.3232 0-118.2208-96.6144-214.3232-215.3984-214.3232S216.9344 152.0128 216.9344 270.2336z"}))}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.width,a=t.height,n=t.x,i=t.y,r=t.fill,l=t.fillOpacity,c=t.strokeWidth,s=t.stroke,d=t.strokeOpacity,u=t.points,f="matrix(1 0 0 1 ".concat(n-e/2," ").concat(i-a/2,")"),p=u.map((function(t){return t.join(",")})).join(" ");return o("g",{transform:f},[o("polygon",{points:p,fill:r,stroke:s,strokeWidth:c,strokeOpacity:d,fillOpacity:l}),this.getIconShape()])}}]),a}(a),r=function(e){Object(lt["a"])(n,e);var a=Object(ct["a"])(n);function n(e,o){var i;Object(it["a"])(this,n),e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+50},i=a.call(this,e,o);var r=35;return i.points=[[r,0],[2*r,r],[r,2*r],[0,r]],i.menu=[{className:"anticon anticon-delete",icon:!0,callback:function(e){var a=window.confirm("你确定要删除吗？");a&&t.deleteNode(e.id)}},{text:"edit",className:"lf-menu-item",callback:function(e){t.editNodeText(e.id)}},{text:"copy",className:"lf-menu-item",callback:function(e){t.cloneNode(e.id)}}],i}return n}(n);return{view:i,model:r}}))}function ut(t){t.register("end",(function(t){var e=t.CircleNode,a=t.CircleNodeModel,n=t.h,o=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("text",{fill:"#000000",fontSize:12,x:e-12,y:a+4,width:50,height:25},"结束")}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y,o=t.r,i=t.fill,r=(t.stroke,t.strokeWidth);return n("g",{},[n("circle",{cx:e,cy:a,r:o,fill:i,fillOpacity:.3,stroke:i,strokeWidth:r}),this.getLabelShape()])}}]),a}(e),i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+35,dragable:!1,editable:!1},e.call(this,t,n)}return Object(rt["a"])(a,[{key:"getConnectedSourceRules",value:function(){var t=Object(nt["a"])(Object(ot["a"])(a.prototype),"getConnectedSourceRules",this).call(this),e={message:"结束节点不能作为其他节点的开始",validate:function(){return!1}};return t.push(e),t}}]),a}(a);return{view:o,model:i}}))}function ft(t,e,a){t.register("push",(function(n){var o=n.PolygonNode,i=n.PolygonNodeModel,r=n.h,l=function(n){Object(lt["a"])(i,n);var o=Object(ct["a"])(i);function i(){return Object(it["a"])(this,i),o.apply(this,arguments)}return Object(rt["a"])(i,[{key:"getIconShape",value:function(){var t=this.getAttributes(),e=t.stroke;return r("svg",{x:18,y:18,width:30,height:30,viewBox:"0 0 1024 1024"},r("path",{fill:e,d:"M866.461538 39.384615H393.846154c-43.323077 0-78.769231 35.446154-78.769231 78.769231v1.969231c0 13.784615 7.876923 27.569231 19.692308 35.446154 5.907692 3.938462 80.738462 78.769231 80.738461 78.769231 5.907692 5.907692 15.753846 0 15.753846-7.876924 0-15.753846 13.784615-31.507692 29.538462-31.507692h334.769231c15.753846 0 31.507692 15.753846 31.507692 31.507692v531.692308c0 15.753846-15.753846 27.569231-31.507692 27.569231h-334.769231c-15.753846 0-27.569231-11.815385-27.569231-27.569231v-1.969231c0-7.876923-9.846154-11.815385-15.753846-5.907692 0 0-74.830769 74.830769-82.707692 78.769231-11.815385 7.876923-19.692308 19.692308-19.692308 35.446154v39.384615c0 43.323077 33.476923 78.769231 76.8 78.769231h472.615385c43.323077 0 80.738462-35.446154 80.738461-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231zM630.153846 945.230769c-33.476923 0-59.076923-25.6-59.076923-59.076923s25.6-59.076923 59.076923-59.076923 59.076923 25.6 59.076923 59.076923-25.6 59.076923-59.076923 59.076923z m-86.646154-474.584615L297.353846 224.492308c-11.815385-11.815385-29.538462-11.815385-41.353846 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l90.584615 90.584615c11.815385 11.815385 3.938462 33.476923-13.784615 33.476923H29.538462c-15.753846 1.969231-29.538462 15.753846-29.538462 31.507693v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h259.938461c17.723077 0 25.6 21.661538 13.784615 33.476923l-90.584615 90.584616c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L543.507692 512c9.846154-9.846154 9.846154-29.538462 0-41.353846z"}))}},{key:"getPulsShape",value:function(){var n=this.getAttributes(),o=t.getGraphData(),i=o.edges,l=!1;if(i.some((function(t){if(t.sourceNodeId===n.id)return l=!0,!0})),!l)return r("svg",{x:70,y:20,width:30,height:30,viewBox:"0 0 1024 1024",class:"time-plus",onClick:function(t){return e(t,n)},onMousedown:function(t){return a(t,n)},onMouseUp:function(t){return a(t,n)}},r("path",{fill:"#f17611",d:"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"}),r("path",{fill:"#ffffff",d:"M448 298.666667h128v426.666666h-128z"}),r("path",{fill:"#ffffff",d:"M298.666667 448h426.666666v128H298.666667z"}))}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.width,a=t.height,n=t.x,o=t.y,i=t.fill,l=t.fillOpacity,c=t.strokeWidth,s=t.stroke,d=t.strokeOpacity,u=t.points,f="matrix(1 0 0 1 ".concat(n-e/2," ").concat(o-a/2,")"),p=u.map((function(t){return t.join(",")})).join(" ");return r("g",{transform:f},[r("polygon",{points:p,fill:i,stroke:s,strokeWidth:c,strokeOpacity:d,fillOpacity:l}),this.getIconShape(),this.getPulsShape()])}}]),i}(o),c=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){var o;Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+50},o=e.call(this,t,n);var i=35;return o.points=[[i,0],[2*i,i],[i,2*i],[0,i]],o}return a}(i);return{view:l,model:c}}))}var pt="#9932CC";function ht(t){t.register("download",(function(t){var e=t.PolygonNode,a=t.PolygonNodeModel,n=t.h,o=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getIconShape",value:function(){return n("svg",{x:14,y:13,width:23,height:23,viewBox:"0 0 1024 1024"},n("path",{fill:pt,d:"M831.513034 319.863005h-95.945189c-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 17.662265 14.3181 31.980365 31.980365 31.980366h64.218604c17.520025 0 31.722492 14.202467 31.722492 31.722492V863.786065c0 17.520025-14.202467 31.722492-31.722492 31.722492H159.66442c-17.520025 0-31.722492-14.202467-31.722493-31.722492V415.546228c0-17.520025 14.202467-31.722492 31.722493-31.722492h64.218603c17.662265 0 31.980365-14.3181 31.980366-31.980366 0-17.662265-14.3181-31.980365-31.980366-31.980365H127.937834c-35.322483 0-63.956637 28.634154-63.956637 63.956637v511.693008c0 35.322483 28.634154 63.956637 63.956637 63.956638h703.5752c35.322483 0 63.956637-28.634154 63.956638-63.956638V383.819642c0-35.32146-28.634154-63.956637-63.956638-63.956637z"}),n("path",{fill:pt,d:"M310.382073 521.036817c-12.388145-12.388145-32.473599-12.388145-44.862767 0l-0.364297 0.364297c-12.388145 12.388145-12.388145 32.473599 0 44.862767l190.186573 190.186574c5.818519 6.813173 14.465456 11.137665 24.126491 11.137664h0.515746c9.662057 0 18.307971-4.324492 24.12649-11.137664L694.296883 566.263881c12.388145-12.388145 12.388145-32.473599 0-44.862767l-0.364297-0.364297c-12.388145-12.388145-32.473599-12.388145-44.862767 0L511.706311 658.400325V95.743598c0-17.520025-14.202467-31.722492-31.722492-31.722492h-0.515746c-17.520025 0-31.722492 14.202467-31.722493 31.722492v562.656727L310.382073 521.036817z"}))}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.width,a=t.height,o=t.x,i=t.y,r=t.fill,l=t.fillOpacity,c=t.strokeWidth,s=t.stroke,d=t.strokeOpacity,u=t.points,f="matrix(1 0 0 1 ".concat(o-e/2," ").concat(i-a/2,")"),p=u.map((function(t){return t.join(",")})).join(" ");return n("g",{transform:f},[n("polygon",{points:p,fill:r,stroke:s,strokeWidth:c,strokeOpacity:d,fillOpacity:l}),this.getIconShape()])}}]),a}(e),i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){var o;Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+50},o=e.call(this,t,n);var i=25;return o.points=[[i,0],[2*i,i],[i,2*i],[0,i]],o.stroke=pt,o}return a}(a);return{view:o,model:i}}))}function bt(t){t.register("polyline",(function(t){var e=t.PolylineEdge,a=t.PolylineEdgeModel,n=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),e.call(this,t,n)}return a}(a);return{view:e,model:n}}))}function yt(t){t.register("task",(function(t){var e=t.RectNode,a=t.RectNodeModel,n=t.h,o=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getNameLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("text",{fontSize:12,x:e-12,y:a-12},"审批")}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("g",{},[n("rect",Object(c["a"])(Object(c["a"])({},t),{},{x:e-t.width/2,y:a-t.height/2,stroke:"#5eb36c",fill:"#5eb36c",fillOpacity:.3,rx:8,ry:8,strokeWidth:1})),this.getNameLabelShape()])}}]),a}(e),i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"未命名",x:t.x,y:t.y+8,dragable:!1,editable:!0},e.call(this,t,n)}return a}(a);return{view:o,model:i}}))}function mt(t){t.register("decision",(function(t){var e=t.PolygonNode,a=t.PolygonNodeModel,n=t.h,o=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(){return Object(it["a"])(this,a),e.apply(this,arguments)}return Object(rt["a"])(a,[{key:"getNameLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("text",{fill:"#000",fontSize:12,x:e-12,y:a-12},"判断")}},{key:"getShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return n("g",{},[n("polygon",{fill:"#7397f3",stroke:"#7397f3",fillOpacity:.3,points:[[e-50,a],[e,a+50],[e+50,a],[e,a-50]],strokeWidth:1}),this.getNameLabelShape()])}}]),a}(e),i=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"未命名",x:t.x,y:t.y+12,dragable:!0,editable:!0},e.call(this,t,n)}return a}(a);return{view:o,model:i}}))}function vt(t,e,a){t.register("replication",(function(t){var n=t.RectNode,o=t.RectNodeModel,i=t.h,r=function(t){Object(lt["a"])(o,t);var n=Object(ct["a"])(o);function o(){return Object(it["a"])(this,o),n.apply(this,arguments)}return Object(rt["a"])(o,[{key:"getNameLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return i("text",{fill:"#000",fontSize:12,x:e-12,y:a-12},"重复")}},{key:"getAddSubButtonRect",value:function(){var t=this.getAttributes(),n=t.x,o=t.y;return i("rect",Object(c["a"])(Object(c["a"])({},t),{},{x:n-6,y:o+19,strokeWidth:0,class:"replication-node-sub",width:12,height:12,opacity:0,onClick:function(a){return e(a,t)},onMousedown:function(e){return a(e,t)},onMouseUp:function(e){return a(e,t)}}))}},{key:"getAddSubShape",value:function(){var t=this.getAttributes(),n=t.x,o=t.y,r="#666";return i("svg",{x:n-6,y:o+20,width:12,height:12,viewBox:"0 0 1024 1024",class:"replication-node-sub-svg",onClick:function(a){return e(a,t)},onMousedown:function(e){return a(e,t)},onMouseUp:function(e){return a(e,t)}},i("path",{fill:r,d:"m56.32,81.92l71.68,0l0,896l-71.68,0l0,-896z"}),i("path",{fill:r,d:"m92.16,92.16m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m92.16,522.24m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m92.16,931.84m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m327.68,71.68l624.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-696.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68z"}),i("path",{fill:r,d:"m583.68,609.28m66.56,0l307.2,0q66.56,0 66.56,66.56l0,0q0,66.56 -66.56,66.56l-307.2,0q-66.56,0 -66.56,-66.56l0,0q0,-66.56 66.56,-66.56z"}),i("path",{fill:r,d:"m737.28,409.6m66.56,0l0,0q66.56,0 66.56,66.56l0,399.36q0,66.56 -66.56,66.56l0,0q-66.56,0 -66.56,-66.56l0,-399.36q0,-66.56 66.56,-66.56z"}))}},{key:"getRect",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return i("rect",Object(c["a"])(Object(c["a"])({},t),{},{x:e-t.width/2,y:a-t.height/2,stroke:"#a273c2",fill:"#a273c2",fillOpacity:.3,rx:8,ry:8,strokeWidth:1,class:"replication-node"}))}},{key:"getShape",value:function(){var t=this.getAttributes();t.isHovered;return i("g",{},[this.getRect(),this.getNameLabelShape(),this.getAddSubButtonRect(),this.getAddSubShape()])}}]),o}(n),l=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"未命名",x:t.x,y:t.y+8,dragable:!1,editable:!0},e.call(this,t,n)}return a}(o);return{view:r,model:l}}))}function gt(t,e,a){t.register("concurrency",(function(t){var n=t.RectNode,o=t.RectNodeModel,i=t.h,r=function(t){Object(lt["a"])(o,t);var n=Object(ct["a"])(o);function o(){return Object(it["a"])(this,o),n.apply(this,arguments)}return Object(rt["a"])(o,[{key:"getNameLabelShape",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return i("text",{fill:"#000",fontSize:12,x:e-12,y:a-12},"并行")}},{key:"getAddSubButtonRect",value:function(){var t=this.getAttributes(),n=t.x,o=t.y;return i("rect",Object(c["a"])(Object(c["a"])({},t),{},{x:n-6,y:o+19,strokeWidth:0,class:"replication-node-sub",width:12,height:12,opacity:0,onClick:function(a){return e(a,t)},onMousedown:function(e){return a(e,t)},onMouseUp:function(e){return a(e,t)}}))}},{key:"getAddSubShape",value:function(){var t=this.getAttributes(),n=t.x,o=t.y,r="#666";return i("svg",{x:n-6,y:o+20,width:12,height:12,viewBox:"0 0 1024 1024",class:"replication-node-sub-svg",onClick:function(a){return e(a,t)},onMousedown:function(e){return a(e,t)},onMouseUp:function(e){return a(e,t)}},i("path",{fill:r,d:"m56.32,81.92l71.68,0l0,896l-71.68,0l0,-896z"}),i("path",{fill:r,d:"m92.16,92.16m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m92.16,522.24m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m92.16,931.84m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z"}),i("path",{fill:r,d:"m327.68,71.68l624.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-696.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68z"}),i("path",{fill:r,d:"m583.68,609.28m66.56,0l307.2,0q66.56,0 66.56,66.56l0,0q0,66.56 -66.56,66.56l-307.2,0q-66.56,0 -66.56,-66.56l0,0q0,-66.56 66.56,-66.56z"}),i("path",{fill:r,d:"m737.28,409.6m66.56,0l0,0q66.56,0 66.56,66.56l0,399.36q0,66.56 -66.56,66.56l0,0q-66.56,0 -66.56,-66.56l0,-399.36q0,-66.56 66.56,-66.56z"}))}},{key:"getRect",value:function(){var t=this.getAttributes(),e=t.x,a=t.y;return i("rect",Object(c["a"])(Object(c["a"])({},t),{},{x:e-t.width/2,y:a-t.height/2,stroke:"#949c9d",fill:"#949c9d",fillOpacity:.3,rx:8,ry:8,strokeWidth:1,class:"concurrency-node"}))}},{key:"getShape",value:function(){var t=this.getAttributes();t.isHovered;return i("g",{},[this.getRect(),this.getNameLabelShape(),this.getAddSubButtonRect(),this.getAddSubShape()])}}]),o}(n),l=function(t){Object(lt["a"])(a,t);var e=Object(ct["a"])(a);function a(t,n){return Object(it["a"])(this,a),t.text={value:t.text&&t.text.value||"未命名",x:t.x,y:t.y+8,dragable:!1,editable:!0},e.call(this,t,n)}return a}(o);return{view:r,model:l}}))}var xt=a("cfcc"),kt={name:"LF",components:{NodePanel:v,AddPanel:N,Control:_,PropertyDialog:Z,DataDialog:at},data:function(){return{lf:null,showAddPanel:!1,addPanelStyle:{top:0,left:0},addClickNode:null,clickNode:null,dialogVisible:!1,graphData:null,dataVisible:!1}},mounted:function(){this.$_initLf()},methods:{$_initLf:function(){var t={container:document.querySelector("#LF-view"),background:{color:"#fff"},grid:{size:10},keyboard:{enabled:!0},guards:{beforeClone:function(t){return console.log("beforeClone",t),!0},beforeDelete:function(t){return console.log("beforeDelete",t),!0}}};d.a.use(u["a"]),d.a.use(u["c"]),d.a.use(u["b"]);var e=new d.a(Object(c["a"])({},t));this.lf=e,u["a"].changeMenuItem("reset",{nodeMenu:[{icon:!0,className:"lf-menu-delete",text:"删除",callback:function(t){e.deleteNode(t.id)}}]}),e.setTheme({circle:{r:25,fill:"#f56141",strokeWidth:1},polygon:{strokeWidth:1},polyline:{strokeWidth:1}}),this.$_registerNode()},$_registerNode:function(){st(this.lf),yt(this.lf),mt(this.lf),vt(this.lf,this.clickAddSub,this.mouseDownAddSub),gt(this.lf,this.clickAddSub,this.mouseDownAddSub),dt(this.lf),ut(this.lf),ft(this.lf,this.clickPlus,this.mouseDownPlus),ht(this.lf),bt(this.lf),this.$_render()},$_render:function(){this.lf.render(xt),this.$_LfEvent()},$_getData:function(){var t=this.lf.getGraphData();console.log(JSON.stringify(t))},$_LfEvent:function(){var t=this;this.lf.on("selection:selected",(function(){t.lf.updateEditConfig({stopMoveGraph:!1,extraConf:{openSelectionMode:!1}})})),this.lf.on("node:click",(function(e){console.log("node:click",e),t.clickNode=e,t.dialogVisible=!0})),this.lf.on("edge:click",(function(e){var a=e.data;console.log("edge:click",a),t.clickNode=a,t.dialogVisible=!0})),this.lf.on("element:click",(function(){t.hideAddPanel()})),this.lf.on("blank:click",(function(){t.hideAddPanel()})),this.lf.on("connection:not-allowed",(function(e){t.$message.error(e.msg)})),this.lf.on("node:mousemove",(function(){console.log("on mousemove")}))},clickPlus:function(t,e){t.stopPropagation(),console.log("clickPlus",t,e);var a=t.clientX,n=t.clientY;console.log(a,n),this.addPanelStyle.top=n-40+"px",this.addPanelStyle.left=a+"px",this.showAddPanel=!0,this.addClickNode=e},clickAddSub:function(t,e){t.stopPropagation(),console.log("添加子流程事件",t,e),this.$message.info("添加子流程事件")},mouseDownAddSub:function(t,e){t.stopPropagation(),console.log("mouseDownAddSub",t,e)},mouseDownPlus:function(t,e){t.stopPropagation(),console.log("mouseDownPlus",t,e)},hideAddPanel:function(){this.showAddPanel=!1,this.addPanelStyle.top=0,this.addPanelStyle.left=0,this.addClickNode=null},closeDialog:function(){this.dialogVisible=!1},$_catData:function(){this.graphData=this.lf.getGraphData(),this.dataVisible=!0},copyValue:function(){try{var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",JSON.stringify(this.graphData)),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),this.$message.success("复制成功")),document.body.removeChild(t)}catch(e){this.$message.error(e.message)}}}},Ot=kt,jt=(a("78cd"),Object(y["a"])(Ot,r,l,!1,null,null,null)),Nt=jt.exports,St={name:"App",components:{LF:Nt}},wt=St,Dt=(a("034f"),Object(y["a"])(wt,o,i,!1,null,null,null)),Pt=Dt.exports,Ct=(a("202f"),a("b558")),_t=a("3af3"),At=a("5efb"),$t=a("ed3b"),zt=a("0c63"),Mt=a("9571"),Lt=a("f64c");n["a"].config.productionTip=!1,n["a"].use(Ct["a"]),n["a"].use(_t["a"]),n["a"].use(At["a"]),n["a"].use($t["a"]),n["a"].use(zt["a"]),n["a"].use(Mt["a"]),n["a"].use(Lt["a"]),n["a"].prototype.$message=Lt["a"],new n["a"]({render:function(t){return t(Pt)}}).$mount("#app")},"5b8b":function(t,e,a){"use strict";a("5300")},"78cd":function(t,e,a){"use strict";a("9aae")},"85ec":function(t,e,a){},"9aae":function(t,e,a){},bebc:function(t,e,a){"use strict";a("f086")},cfcc:function(t){t.exports=JSON.parse('{"nodes":[{"id":"742356ea-762b-4899-b96a-bd567e3c4361","type":"start","x":220,"y":170,"properties":{}},{"id":"dacda6b6-48d3-4dff-911d-287704eb23d8","type":"task","x":350,"y":170,"properties":{},"text":{"x":350,"y":178,"value":"基础节点"}},{"id":"49106603-2b88-4b2c-b1e8-723c1f2210bd","type":"decision","x":530,"y":170,"properties":{},"text":{"x":530,"y":182,"value":"请假大于5天"}},{"id":"647fa2bc-98ee-40cf-99c5-4756c0bc130d","type":"replication","x":690,"y":170,"properties":{},"text":{"x":690,"y":178,"value":"部门领导会签"}},{"id":"60326ad9-cae2-4a85-ae98-d340fb7bd67f","type":"end","x":870,"y":170,"properties":{}},{"id":"a110a936-cebf-4c79-a516-1ad2600d9330","type":"task","x":530,"y":310,"properties":{},"text":{"x":530,"y":318,"value":"领导审批"}},{"id":"ca9da013-891e-4bc3-842d-484e4cfca4c4","type":"end","x":670,"y":310,"properties":{}}],"edges":[{"id":"00f55245-513e-43a2-9cb0-adb61b01adc8","type":"polyline","sourceNodeId":"742356ea-762b-4899-b96a-bd567e3c4361","targetNodeId":"dacda6b6-48d3-4dff-911d-287704eb23d8","startPoint":{"x":240,"y":170},"endPoint":{"x":300,"y":170},"properties":{},"pointsList":[{"x":240,"y":170},{"x":300,"y":170}]},{"id":"122ff086-d1a1-416f-b57d-285b78ef818a","type":"polyline","sourceNodeId":"dacda6b6-48d3-4dff-911d-287704eb23d8","targetNodeId":"49106603-2b88-4b2c-b1e8-723c1f2210bd","startPoint":{"x":400,"y":170},"endPoint":{"x":480,"y":170},"properties":{},"pointsList":[{"x":400,"y":170},{"x":480,"y":170}]},{"id":"b49ea30c-d09e-4747-8566-9b7ea1d3fbfe","type":"polyline","sourceNodeId":"49106603-2b88-4b2c-b1e8-723c1f2210bd","targetNodeId":"a110a936-cebf-4c79-a516-1ad2600d9330","startPoint":{"x":530,"y":220},"endPoint":{"x":530,"y":270},"properties":{},"text":{"x":530,"y":244,"value":"否"},"pointsList":[{"x":530,"y":220},{"x":530,"y":250},{"x":530,"y":250},{"x":530,"y":240},{"x":530,"y":240},{"x":530,"y":270}]},{"id":"df1cdcef-1044-42b1-92e0-19d08d776bef","type":"polyline","sourceNodeId":"647fa2bc-98ee-40cf-99c5-4756c0bc130d","targetNodeId":"60326ad9-cae2-4a85-ae98-d340fb7bd67f","startPoint":{"x":740,"y":170},"endPoint":{"x":845,"y":170},"properties":{},"pointsList":[{"x":740,"y":170},{"x":845,"y":170}]},{"id":"d71197e8-b1d6-446f-a262-2ef71c89c3ea","type":"polyline","sourceNodeId":"49106603-2b88-4b2c-b1e8-723c1f2210bd","targetNodeId":"647fa2bc-98ee-40cf-99c5-4756c0bc130d","startPoint":{"x":580,"y":170},"endPoint":{"x":640,"y":170},"properties":{},"text":{"x":607,"y":170,"value":"是"},"pointsList":[{"x":580,"y":170},{"x":640,"y":170}]},{"id":"ccdeb796-24db-4943-9ed9-9b85ef706f3f","type":"polyline","sourceNodeId":"a110a936-cebf-4c79-a516-1ad2600d9330","targetNodeId":"ca9da013-891e-4bc3-842d-484e4cfca4c4","startPoint":{"x":580,"y":310},"endPoint":{"x":645,"y":310},"properties":{},"pointsList":[{"x":580,"y":310},{"x":645,"y":310}]}]}')},d5c5:function(t,e,a){},edbe:function(t,e,a){"use strict";a("0986")},f086:function(t,e,a){}});
//# sourceMappingURL=app.d52d00dd.js.map