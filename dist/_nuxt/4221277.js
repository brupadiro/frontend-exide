(window.webpackJsonp=window.webpackJsonp||[]).push([[21,48],{793:function(t,e,n){var content=n(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("023b8468",content,!0,{sourceMap:!1})},807:function(t,e,n){"use strict";n.r(e);var o=n(289),r=n(6),l=n(764),c=n(216),d=n(2),m=n.n(d),f={filters:{formatDate:function(t){return m()(t).format("DD/MM/YYYY")}},props:{items:{type:Array,default:function(){return[]}}},data:function(){return{modalUpdatePromo:!1,promo:{},headers:[{text:"Nombre",value:"name"},{text:"Descripción",value:"description"},{text:"Tipo",value:"type"},{text:"Valor",value:"price"},{text:"Fecha de inicio",value:"start_date"},{text:"Fecha de fin",value:"end_date"},{text:"Nivel de progreso",value:"progress"},{text:"Acciones",value:"actions",sortable:!1}]}},methods:{updatePromo:function(t){this.promo=t,this.modalUpdatePromo=!0}}},v=n(19),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("generalCardComponent",[t._t("default"),t._v(" "),e(r.c,[e(l.a,{attrs:{"items-per-page":-1,headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"item.start_date",fn:function(e){var n=e.item;return[t._v("\n         "+t._s(t._f("formatDate")(n.start_date))+"\n       ")]}},{key:"item.end_date",fn:function(e){var n=e.item;return[t._v("\n         "+t._s(t._f("formatDate")(n.end_date))+"\n       ")]}},{key:"item.price",fn:function(e){var n=e.item;return[t._v("\n         US$ "+t._s(n.price)+"\n       ")]}},{key:"item.actions",fn:function(n){var r=n.item;return[e(o.a,{staticClass:"rounded-xl",attrs:{height:"30",color:"primary",small:"",to:"/promotions/update/".concat(r.id)}},[e(c.a,{attrs:{color:"white"}},[t._v("mdi-pencil")])],1)]}}])})],1),t._v(" "),t.modalUpdatePromo?e("promotionsEditComponent",{attrs:{promo:t.promo},on:{promotionUpdated:function(e){return t.$emit("retrievePromotions")}},model:{value:t.modalUpdatePromo,callback:function(e){t.modalUpdatePromo=e},expression:"modalUpdatePromo"}}):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},815:function(t,e,n){"use strict";n(793)},816:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".active-tab span{color:#fff!important}",""]),o.locals={},t.exports=o},874:function(t,e,n){"use strict";n.r(e);var o=n(289),r=n(6),l=n(753),c=n(745),d=n(282),m=n(758),f=n(216),v=n(752),_=n(518),h=n(756),x=n(761),C=n(767),k=n(765),y=n(522),w=n(80),P=n(39),D=(n(30),n(7),n(4),n(2),{props:{clientData:{type:Object,default:function(){return{}}},value:{type:Boolean,default:!1}},data:function(){return{tab:0,client:this.clientData,properties:{data:[]}}},created:function(){this.getProperties()},methods:{getProperties:function(){var t=this;this.$axios.get("/promotions/?filters[clients][id][$in]=".concat(this.client.id),this.client).then((function(e){t.properties=e.data}))}},computed:{propertiesForInvertion:function(){return{data:this.properties.data.filter((function(t){return"Inversion"==t.type}))}},propertiesForRent:function(){return{data:this.properties.data.filter((function(t){return"Alquiler"==t.type}))}}}}),U=(n(815),n(19)),component=Object(U.a)(D,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"max-width":"1200",persistent:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("GeneralCardComponent",{staticClass:"rounded-lg"},[e(w.a,{attrs:{color:"primary",dense:"",elevation:"0"}},[e(P.b,{staticClass:"white--text font-weight-bold"},[t._v("Nuevo cliente")]),t._v(" "),e(h.a),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("input",!1)}}},[e(f.a,{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1),t._v(" "),e(m.a,{ref:"form"},[e(r.c,[e(v.a,[e(l.a,{staticClass:"col-12"},[e("generalCardComponent",{attrs:{outlined:""}},[e("generalCardTitleComponent",[t._v(t._s(t.client.name)+" "+t._s(t.client.lastname))]),t._v(" "),e(d.a),t._v(" "),e(r.c,[e(_.a,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-center text-subtitle-1 font-weight-regular black--text"},[t._v("\n                          Direccion\n                        ")]),t._v(" "),e("th",{staticClass:"text-center text-subtitle-1 font-weight-regular black--text"},[t._v("\n                          Telefono\n                        ")]),t._v(" "),e("th",{staticClass:"text-center text-subtitle-1 font-weight-regular black--text"},[t._v("\n                          Email\n                        ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"text-center"},[t._v(t._s(t.client.address))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.client.phone))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.client.email))])])])]},proxy:!0}])})],1)],1)],1)],1)],1)],1),t._v(" "),e(r.b,{staticClass:"primary pa-3"},[e(k.a,{attrs:{vertical:t.$vuetify.breakpoint.smAndDown,"hide-slider":"","slider-color":"primary","background-color":"transparent","active-class":"active-tab",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(x.a,{attrs:{ripple:"",value:1}},[e("span",{staticClass:"font-weight-black black--text"},[t._v("INVERSIONES")])]),t._v(" "),e(x.a,{attrs:{ripple:"",value:2}},[e("span",{staticClass:"font-weight-black black--text"},[t._v("RENTAS")])])],1)],1),t._v(" "),e(r.c,[e(y.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(C.a,[e("PromotionsListComponent",{attrs:{items:t.propertiesForInvertion.data}})],1),t._v(" "),e(C.a,{staticClass:"pa-4"},[e("PromotionsListComponent",{attrs:{items:t.propertiesForRent.data}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PromotionsListComponent:n(807).default,GeneralCardComponent:n(82).default})}}]);