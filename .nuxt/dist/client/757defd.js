(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{855:function(e,t){},912:function(e,t,r){"use strict";r.r(t);var n=r(294),o=r(2),l=r(781),c=r(225),d=r(771),m=(r(24),r(8),r(59),r(9),r(13),r(11),r(14),r(21)),f=r(1),v=(r(65),r(36),r(23),r(60),r(5),r(56),r(12),r(31),r(900));function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={props:{readonly:{type:Boolean,default:!1},type:{type:String,required:!0,default:""},sample:{type:Object,required:!0,default:{function:function(){return{}}}},items:{type:Object,required:!0,default:{function:function(){return{}}},validator:function(e){return e.headerTable=e.headerTable.map((function(e){return h(h({},e),{},{value:e.text.replace(" ","_")})})),!0}},values:{type:Object,required:!0},comboInfo:{type:Object,required:!0,default:{function:function(){return{}}}}},data:function(){return{propItems:this.items,value:{},note:"",laboratory:""}},created:function(){this.propItems.headerTable=this.items.headerTable.map((function(e){return h(h({},e),{},{value:e.text.replace(" ","_")})}))},methods:{itemsTable:function(e,t,r){return this.values[e]&&console.log(this.values[e][t]),this.values&&this.values[e]&&this.values[e][t]&&void 0!==this.values[e][t][r]?this.values[e][t][r].data.map((function(e){return h({value_id:e.id},e.row)})):[]},ecuationValue:function(e,t){delete e.value_id;var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n=Object.keys(e).reduce((function(t,n,i){return t[r[i]+"1"]=e[n],t}),{});return Object.keys(n).length>0?v.a(this.items.ecuation,n):0},deleteItem:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.itemsTable(t.sample.name,t.type,t.items.description)[e].value_id,console.log(n),!window.confirm("¿Estás seguro que deseas eliminar este elemento?")){r.next=13;break}return r.prev=4,r.next=7,t.$axios.delete("/analysis-values/".concat(n));case 7:t.$root.$emit("getValues"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(4),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[4,10]])})))()},saveItem:function(e,t,r){var n=this;return Object(m.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(window.confirm("¿Estás seguro que deseas agregar este elemento?")){o.next=3;break}return o.abrupt("return");case 3:return o.next=5,n.$axios.post("/analysis-values",{data:{sample:e,type:r,normative_step:t,analysis:n.$route.params.id,notes:n.note,laboratory:n.laboratory,row:h({},n.value)}});case 5:n.value={},n.note="",n.laboratory="",n.$root.$emit("getValues");case 9:case"end":return o.stop()}}),o)})))()}},computed:{headers:function(){return this.readonly?this.propItems.headerTable:this.propItems.headerTable.concat({text:"Actions",value:"actions"})}}},O=r(10),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;return t("GeneralCardComponent",{attrs:{flat:""}},[t(l.a,{attrs:{dense:"",items:e.itemsTable(e.sample.name,e.type,e.items.description),"calculate-widths":"",headers:e.headers,"hide-default-footer":""},scopedSlots:e._u([{key:"body",fn:function(r){var o=r.items,l=r.headers;return e._l(o,(function(r,o){return t("tr",{key:"it"+o},e._l(l,(function(l){return t("td",{key:"cc"+l.id,staticClass:"text-center"},[l.ecuation_field?t("span",[e._v(e._s(e.ecuationValue(r,l)))]):t("span",[e._v("\n                        "+e._s(r[l.value])+"\n                    ")]),e._v(" "),"actions"==l.value?t("div",[t(n.a,{staticClass:"mt-3",attrs:{small:"",color:"red"},on:{click:function(t){return e.deleteItem(o)}}},[t(c.a,[e._v("mdi-delete")])],1)],1):e._e()])})),0)}))}},{key:"foot",fn:function(){return[t("tr",{directives:[{name:"show",rawName:"v-show",value:!e.readonly,expression:"!readonly"}]},e._l(e.items.headerTable,(function(r){return t("td",{key:"c".concat(r.id),staticClass:"pa-2"},[r.ecuation_field?e._e():t("FormsFieldsTextComponent",{attrs:{placeholder:"N/A"},model:{value:e.value[r.value],callback:function(t){e.$set(e.value,r.value,t)},expression:"value[column.value]"}})],1)})),0)]},proxy:!0}])}),e._v(" "),t(o.a,{directives:[{name:"show",rawName:"v-show",value:!e.readonly,expression:"!readonly"}]},[t(d.a),e._v(" "),t("FormsFieldsTextComponent",{attrs:{placeholder:"Notes",dense:""},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}}),e._v(" "),t("FormsFieldsSelectComponent",{staticClass:"mb-2 mr-3 ml-2",attrs:{dense:"","label-color":"white--text",items:e.comboInfo.listaLaboratory,placeholder:"Laboratory"},model:{value:e.laboratory,callback:function(t){e.laboratory=t},expression:"laboratory"}}),e._v(" "),t(n.a,{staticClass:"rounded-lg",attrs:{color:"yellow font-weight-bold black--text"},on:{click:function(t){return e.saveItem(e.sample.id,e.items.id,e.type)}}},[e._v("\n            Add item")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormsFieldsTextComponent:r(67).default,FormsFieldsSelectComponent:r(91).default,GeneralCardComponent:r(51).default})}}]);