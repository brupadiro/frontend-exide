(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{803:function(e,t,n){var content=n(845);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("67dddee4",content,!0,{sourceMap:!1})},844:function(e,t,n){"use strict";n(803)},845:function(e,t,n){var l=n(17)((function(i){return i[1]}));l.push([e.i,".dotted-border[data-v-0ef593be]{border:1px dotted}",""]),l.locals={},e.exports=l},897:function(e,t,n){"use strict";n.r(t);var l=n(289),o=n(279),r=n(6),c=n(753),d=n(282),f=n(216),h=n(300),v=n(752),m=n(79),_=n(756),w=(n(30),n(32)),y=(n(4),n(44),n(53),n(784),n(523),n(31),n(7),n(36),n(57),n(9),{props:{value:Array,readonly:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean}},data:function(){return{files:[],showPreview:!1}},mounted:function(){},methods:{getUrl:function(e){return e.url?"http://164.92.69.180".concat(e.url):URL.createObjectURL(e)},selectPhoto:function(e){this.$refs.uploadFile.click()},onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.multiple?this.$emit("input",[].concat(Object(w.a)(this.value||[]),Object(w.a)(t))):this.$emit("input",Object(w.a)(t).concat()))},deleteImg:function(e){var t=this.value;window.confirm("Estas seguro que deseas eliminar este archivo?")&&(e.id&&this.$axios.delete("/upload/files/"+e.id),this.$emit("input",t.filter((function(t){return t!==e}))))},checkIfImage:function(e){console.log(e);var t=function(e){return!!e.includes("image")};return e.mime?t(e.mime):t(e.type)}},computed:{filesList:function(){return this.value?this.value.filter((function(e){return e instanceof File||Object.keys(e).length?e:void 0})):[]}}}),k=(n(844),n(19)),component=Object(k.a)(y,(function(){var e=this,t=e._self._c;return t(o.a,[t(r.c,[e.readonly?e._e():t("div",{staticClass:"d-flex justify-center"},[t(m.a,{staticClass:"rounded d-flex justify-center align-center dotted-border p-relative",attrs:{color:"indigo lighten-4",width:"100%",height:"150"},on:{click:e.selectPhoto}},[t(f.a,{directives:[{name:"show",rawName:"v-show",value:!e.showPreview,expression:"!showPreview"}],attrs:{size:"80"}},[e._v("mdi-file-plus-outline")])],1),e._v(" "),t("input",{ref:"uploadFile",staticStyle:{display:"none"},attrs:{type:"file",multiple:e.multiple},on:{change:e.onFileChange}})],1)]),e._v(" "),t(d.a),e._v(" "),t(r.c,[t(v.a,e._l(e.filesList,(function(n,v){return t(c.a,{key:"f".concat(v),staticClass:"col-md-3 col-12 mt-3"},[t(o.a,{staticClass:"rounded-lg"},[t(r.d,[n.name?t("span",[e._v(e._s(n.name.substr(0,7)))]):e._e(),e._v(" "),t(_.a),e._v(" "),t(l.a,{attrs:{fab:"","x-small":"",color:"red"},on:{click:function(t){return e.deleteImg(n)}}},[t(f.a,{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),t(d.a),e._v(" "),t(r.c,{staticClass:"d-flex justify-center"},[e.checkIfImage(n)?[t(h.a,{attrs:{src:e.getUrl(n),width:"100%",height:"80",contain:""}})]:[t(f.a,{attrs:{size:"80"}},[e._v("mdi-file-outline")])]],2),e._v(" "),t(d.a),e._v(" "),t(r.a,{directives:[{name:"show",rawName:"v-show",value:n.url,expression:"file.url"}],staticStyle:{height:"55"}},[t(l.a,{staticClass:"rounded-lg",attrs:{block:"",depressed:"",href:e.getUrl(n),target:"_blank",color:"success darken-1"}},[e._v("\n              VER ARCHIVO \n              "),t(f.a,[e._v("mdi-magnify")])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"0ef593be",null);t.default=component.exports}}]);