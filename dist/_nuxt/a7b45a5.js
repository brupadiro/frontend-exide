(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{873:function(e,t,n){"use strict";n.r(t);var r=n(6),l=n(764),o=n(282),d={props:{items:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{text:"Nombre",value:"name"},{text:"Apellido",value:"lastname"},{text:"Direccion",value:"address"},{text:"phone",value:"phone"},{text:"Email",value:"email"}]}}},c=n(19),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("generalCardComponent",{attrs:{elevation:"6"}},[e._t("default"),e._v(" "),t(r.c,[t(l.a,{attrs:{"loading-text":"Buscando clientes...",headers:e.headers,items:e.items,"hide-default-footer":""},scopedSlots:e._u([{key:"item.firstname",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.firstname)+" "+e._s(n.lastname)+"\n      ")]}},{key:"item.createdAt",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e._f("formatDate")(n.createdAt))+"\n      ")]}}])})],1),e._v(" "),t(o.a)],2)}),[],!1,null,null,null);t.default=component.exports}}]);