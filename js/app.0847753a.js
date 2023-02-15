(function(){"use strict";var e={5517:function(e,t,l){var i=l(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("tableGenerator")],1)},o=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("el-row",[t("el-col",{attrs:{span:5}},[t("div",{staticClass:"sideBar"},[t("el-collapse",{attrs:{accordion:""},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[t("draggable",{attrs:{forceFallback:"true",animation:"1000"},on:{start:e.onStart,end:e.onEnd},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}},[t("transition-group",e._l(e.options,(function(l,i){return t("div",{key:l.id},[t("el-collapse-item",{attrs:{name:i}},[t("template",{slot:"title"},[e._v(" "+e._s(l.label)),t("i",{staticClass:"el-icon-error",on:{click:function(t){return t.stopPropagation(),e.del(i)}}})]),t("div",{staticClass:"option"},[t("el-form",{attrs:{"label-position":"left",model:l}},[t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{attrs:{placeholder:"请输入名称"},model:{value:l.label,callback:function(t){e.$set(l,"label",t)},expression:"item.label"}})],1),t("el-form-item",{attrs:{label:"字段名"}},[t("el-input",{attrs:{placeholder:"请输入字段名"},model:{value:l.field,callback:function(t){e.$set(l,"field",t)},expression:"item.field"}})],1),t("el-form-item",{attrs:{label:"宽度"}},[t("el-input",{attrs:{placeholder:"请输入宽度(单位px)"},model:{value:l.width,callback:function(t){e.$set(l,"width",t)},expression:"item.width"}})],1),t("el-form-item",{attrs:{label:"预览值"}},[t("el-input",{attrs:{placeholder:"请输入预览值"},on:{input:function(t){return e.keywordChange(i)}},model:{value:l.keyword,callback:function(t){e.$set(l,"keyword",t)},expression:"item.keyword"}})],1),t("el-form-item",{attrs:{label:"是否固定"}},[t("el-switch",{staticStyle:{"margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:l.isFixed,callback:function(t){e.$set(l,"isFixed",t)},expression:"item.isFixed"}})],1),t("el-form-item",{attrs:{label:"固定方向"}},[t("el-select",{attrs:{disabled:!l.isFixed,placeholder:"请选择固定方向"},model:{value:l.fixDireaction,callback:function(t){e.$set(l,"fixDireaction",t)},expression:"item.fixDireaction"}},[t("el-option",{attrs:{label:"左",value:"left"}}),t("el-option",{attrs:{label:"右",value:"right"}})],1)],1)],1)],1)],2)],1)})),0)],1)],1),t("div",{staticClass:"add",on:{click:e.toAdd}},[t("i",{staticClass:"el-icon-circle-plus"}),t("div",[e._v("新增字段")])]),t("div",{staticClass:"selection"},[e._v(" 是否多选: "),t("el-switch",{staticStyle:{"margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isSelection,callback:function(t){e.isSelection=t},expression:"isSelection"}})],1),t("div",{staticClass:"selection"},[e._v(" 开启边框: "),t("el-switch",{staticStyle:{"margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isBorder,callback:function(t){e.isBorder=t},expression:"isBorder"}})],1),t("div",{staticClass:"selection"},[e._v(" 固定表头: "),t("el-switch",{staticStyle:{"margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isFixedHeader,callback:function(t){e.isFixedHeader=t},expression:"isFixedHeader"}})],1),t("div",{staticClass:"selection"},[e._v(" 表格宽度: "),t("el-input",{staticStyle:{width:"120px","margin-left":"5px"},attrs:{placeholder:"请输入宽度"},model:{value:e.tableWidth,callback:function(t){e.tableWidth=t},expression:"tableWidth"}})],1),t("div",{staticClass:"selection"},[e._v(" data: "),t("el-input",{staticStyle:{width:"120px","margin-left":"5px"},attrs:{placeholder:"data双向绑定值"},model:{value:e.dataOp,callback:function(t){e.dataOp=t},expression:"dataOp"}})],1),t("div",{staticClass:"selection"},[e._v(" ref: "),t("el-input",{staticStyle:{width:"120px","margin-left":"5px"},attrs:{placeholder:"tableRef"},model:{value:e.tableRef,callback:function(t){e.tableRef=t},expression:"tableRef"}})],1),t("div",{staticClass:"selection"},[e._v(" tableKey: "),t("el-input",{staticStyle:{width:"120px","margin-left":"5px"},attrs:{placeholder:"tableKey"},model:{value:e.tableKey,callback:function(t){e.tableKey=t},expression:"tableKey"}})],1),t("div",{staticClass:"selection"},[e._v(" v-loading: "),t("el-input",{staticStyle:{width:"120px","margin-left":"5px"},attrs:{placeholder:"tableLoading"},model:{value:e.tableLoading,callback:function(t){e.tableLoading=t},expression:"tableLoading"}})],1),t("el-button",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{type:"success",round:""},on:{click:e.generateCode}},[e._v("生成代码")])],1)]),t("el-col",{attrs:{span:19}},[t("div",{staticClass:"main"},[t("el-table",{style:{width:e.tableWidth},attrs:{data:e.data,border:!!e.isBorder},on:{"header-dragend":e.widthChange}},[e.isSelection?t("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):e._e(),e._l(e.options,(function(l,i){return t("el-table-column",{key:i,attrs:{align:"center",prop:String(l.id),label:l.label,width:l.width},scopedSlots:e._u([{key:"default",fn:function({row:i}){return[t("span",[e._v(e._s(l.keyword))])]}}],null,!0)})}))],2)],1)])],1),t("Code",{ref:"Code",attrs:{show:e.showCode},on:{"update:show":function(t){e.showCode=t}}})],1)},s=[],r=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"代码预览",fullscreen:!0,visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-input",{attrs:{type:"textarea",rows:20,placeholder:""},model:{value:e.curCode,callback:function(t){e.curCode=t},expression:"curCode"}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(" 关闭 ")]),t("el-button",{attrs:{type:"primary"},on:{click:e.copy}},[e._v(" 复制代码 ")])],1)],1)},c=[],d={props:{show:{type:Boolean,default:!1}},computed:{dialogVisible:{get(){return this.show},set(e){this.$emit("update:show",e)}}},data(){return{curCode:""}},created(){},mounted(){},methods:{copy(){this.$copyText(this.curCode),this.$message({message:"复制成功",type:"success"})},showCode(e){this.curCode=e}}},u=d,f=l(1001),p=(0,f.Z)(u,r,c,!1,null,"2647e786",null),h=p.exports,b=l(6983),m=l.n(b),v={components:{draggable:m(),Code:h},name:"tableGenerator",data(){return{colomunId:1,tableLoading:"tableLoading",isFixedHeader:!1,isBorder:!0,tableKey:"tableKey",tableRef:"elTable",dataOp:"data",showCode:!1,drag:!1,options:[{id:1,label:"字段1",field:"",width:100,keyword:"预览值1",isFixed:!1,fixDireaction:"right"}],data:[{name:""}],activeNames:0,isSelection:!1,tableWidth:"100%"}},methods:{keywordChange(e){console.log(e);this.list[0]},widthChange(e,t,l,i){let a=parseInt(l.property),o=this.options.findIndex((e=>e.id==a));this.options[o].width=e},generateCode(){let e=`<el-table ref="${this.tableRef}" ${this.isFixedHeader?"height:250":""} :key="${this.tableKey}" v-loading="${this.tableLoading}" :data="${this.dataOp}" border fit highlight-current-row style="width: ${this.tableWidth}">\n      ${this.isSelection?'<el-table-column align="center" type="selection" width="55"></el-table-column>':""}`,t="\n\n</el-table>",l="";this.options.forEach(((e,t)=>{l+=`\n  <el-table-column align="center" ${e.isFixed?`fixed="${e.fixDireaction}"`:""} prop="${e.field}" label="${e.label}" width="${e.width}">\n      <template slot-scope="{row}">\n          <span>{{ row.${e.field} }}</span>\n      </template>\n   </el-table-column>`}));let i=e+l+t;this.$refs.Code.showCode(i),this.showCode=!0},onStart(){this.drag=!0},onEnd(){this.drag=!1},del(e){0!=e||1!=this.options.length?this.options.splice(e,1):this.$message.error("不能删除第一个字段")},toAdd(){this.options.push({id:this.colomunId+1,label:"字段"+(this.colomunId+1),field:"",width:100,keyword:"预览值"+(this.colomunId+1),isFixed:!1,fixDireaction:"right"}),this.colomunId++,this.activeNames=this.options.length-1}}},g=v,x=(0,f.Z)(g,n,s,!1,null,"08652fca",null),w=x.exports,y={name:"app",components:{tableGenerator:w}},k=y,C=(0,f.Z)(k,a,o,!1,null,null,null),_=C.exports,$=l(7934),S=l.n($),O=l(9713),F=l.n(O),j=l(7342),K=l.n(j),B=l(2572),I=l.n(B),L=l(2244),T=l.n(L),D=l(8037),R=l.n(D),W=l(3480),H=l.n(W),N=l(2086),P=l.n(N),E=l(5981),V=l.n(E),G=l(1168),M=l.n(G),Z=l(8319),A=l.n(Z),q=l(2225),z=l.n(q),J=l(1365),Q=l.n(J),U=l(5583),X=l.n(U),Y=l(9371),ee=l.n(Y),te=l(1540),le=l.n(te),ie=l(5428),ae=l.n(ie);i["default"].use(ae()),i["default"].use(le()),i["default"].use(ee()),i["default"].use(X()),i["default"].use(Q()),i["default"].use(z()),i["default"].use(A()),i["default"].use(M()),i["default"].use(V()),i["default"].use(P()),i["default"].use(H()),i["default"].use(R()),i["default"].use(T()),i["default"].use(I()),i["default"].use(K()),i["default"].use(F()),i["default"].prototype.$message=S(),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(_)}).$mount("#app")}},t={};function l(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,i,a,o){if(!i){var n=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,r=0;r<i.length;r++)(!1&o||n>=o)&&Object.keys(l.O).every((function(e){return l.O[e](i[r])}))?i.splice(r--,1):(s=!1,o<n&&(n=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,n=i[0],s=i[1],r=i[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(r)var d=r(l)}for(t&&t(i);c<n.length;c++)o=n[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(d)},i=self["webpackChunktable_generator"]=self["webpackChunktable_generator"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=l.O(void 0,[998],(function(){return l(5517)}));i=l.O(i)})();
//# sourceMappingURL=app.0847753a.js.map