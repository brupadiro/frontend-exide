(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{863:function(t,n,e){"use strict";e.r(n);var o=e(286),r=e(289),l=e(279),c=e(6),d=e(753),m=e(745),h=e(216),f=e(300),P=e(280),v=e(752),y=(e(27),e(111),e(4),e(7),e(84),e(68)),C={data:function(){return{modalPendingPayments:!1,apartmentsWithPendingPayments:{data:[],meta:{pagination:{total:0}}},search:{pagination:{page:1}}}},created:function(){this.getPendingPayments()},methods:{getPendingPayments:function(){var t=this;this.$axios.get("apartaments/",{params:{populate:"*"},paramsSerializer:function(t){return y.stringify(t,{arrayFormat:"brackets"})}}).then((function(data){t.apartmentsWithPendingPayments=data.data}))}},computed:{pendingAmount:function(){return this.apartmentsWithPendingPayments.data.reduce((function(t,n){return t+n.invoices.filter((function(t){return"pending"==t.status})).reduce((function(t,n){return t+n.amount}),0)}),0)},totalAmount:function(){return this.apartmentsWithPendingPayments.data.reduce((function(t,n){return t+n.invoices.reduce((function(t,n){return t+n.amount}),0)}),0)},countApartmentsWithPendingPayments:function(){return this.apartmentsWithPendingPayments.data.filter((function(t){return null!=t.invoices.find((function(t){return"pending"==t.status}))})).length}}},_=e(19),component=Object(_.a)(C,(function(){var t=this,n=t._self._c;return n("div",[n("generalCardComponent",{attrs:{fillHeight:"",elevation:"6"}},[n("GeneralCardTitleComponent",{staticClass:"primary white--text"},[t._v("\n      Expensas\n    ")]),t._v(" "),n(c.c,[n(v.a,[n(d.a,{staticClass:"col-12"},[n("h3",{staticClass:"black--text font-weight-regular"},[t._v("Monto total")]),t._v(" "),n("h3",{staticClass:"black--text font-weight-black"},[t._v("$ "+t._s(t.totalAmount))])]),t._v(" "),n(d.a,{staticClass:"col-12"},[n(P.a,{staticClass:"rounded-xl elevation-2",attrs:{color:"secondary",value:Math.ceil(100*(t.totalAmount-t.pendingAmount)/t.totalAmount),rounded:"",height:"30"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value;return[n("strong",[t._v(t._s(Math.ceil(o))+"%")])]}}])})],1),t._v(" "),n(d.a,{staticClass:"col-12"},[n(l.a,{staticClass:"rounded-xl",attrs:{color:"primary"}},[n(c.c,[n(v.a,[n(d.a,{staticClass:"col-12"},[n("h4",{staticClass:"font-weight-light white--text"},[t._v("Apartamentos con deudas pendientes")])]),t._v(" "),n(d.a,{staticClass:"col-12 col-md-6"},[n(v.a,{attrs:{"no-gutters":""}},[n(o.a,{staticClass:"rounded-lg",attrs:{size:"60",tile:"",color:"secondary"}},[n(h.a,{attrs:{color:"white"}},[t._v("\n                        ion-ios-home\n                      ")])],1),t._v(" "),n(o.a,{staticClass:"rounded-lg ml-n3",attrs:{size:"60",tile:"",color:"secondary"}},[n(h.a,{attrs:{color:"white"}},[t._v("\n                        ion-ios-home\n                      ")])],1),t._v(" "),n(o.a,{staticClass:"rounded-lg ml-n3",attrs:{size:"60",tile:""}},[n(f.a,{attrs:{width:"60",height:"60",contain:"",src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}},[n("div",{staticClass:"d-flex fill-width fill-height justify-center align-center",staticStyle:{background:"#f44336b0"}},[n("h2",{staticClass:"white--text"},[t._v("+"+t._s(t.countApartmentsWithPendingPayments))])])])],1)],1)],1),t._v(" "),n(d.a,{staticClass:"col-12 col-md-6"},[n(r.a,{staticClass:"font-weight-regular rounded-lg",attrs:{height:"60",color:"secondary",large:"",block:""},on:{click:function(n){t.modalPendingPayments=!t.modalPendingPayments}}},[t._v("VER")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n(m.a,{attrs:{persistent:""},model:{value:t.modalPendingPayments,callback:function(n){t.modalPendingPayments=n},expression:"modalPendingPayments"}},[n("propertiesListComponent",{attrs:{title:"",hiddenheader:"",data:t.apartmentsWithPendingPayments},on:{changePage:function(n){t.search.pagination.page=n}},scopedSlots:t._u([{key:"actions",fn:function(){return[n(r.a,{attrs:{icon:"",color:"white"},on:{click:function(n){t.modalPendingPayments=!t.modalPendingPayments}}},[n(h.a,[t._v("mdi-close")])],1)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{GeneralCardTitleComponent:e(130).default})}}]);