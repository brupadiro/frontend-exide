(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{890:function(e,t,n){"use strict";n.r(t);var r,o=n(6),c=n(1),l=n(22),m=(n(66),n(30),n(27),n(111),n(4),n(9),n(83),n(8),n(7),n(12),n(10),n(13),n(122)),h=n(2),d=n.n(h),f=n(68),y=n.n(f),v=n(768),O=n.n(v);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P=(r={props:{paymentsModal:{type:Boolean,required:!0}},mixins:[m.a]},Object(c.a)(r,"props",{search:{type:Object,required:!0}}),Object(c.a)(r,"data",(function(){return{paymentsModal:!1,labels:[],labelsPayments:[],headers:[{text:"Fecha",value:"createdAt"},{text:"Tipo",value:"type"},{text:"Tienda",value:"webservice.name"},{text:"Valor",value:"amount"},{text:"Estado",value:"status"},{text:"Comentarios",value:"comments"}],periods:["día","semana","mes"],selectedPeriod:"mes",incomeData:[],payments:{data:[]},paymentsGraph:[]}})),Object(c.a)(r,"mounted",(function(){var e=this;this.getIncome(),this.getPayments(),this.$root.$on("refresh",(function(data){e.getIncome(),e.getPayments()}))})),Object(c.a)(r,"methods",{getPayments:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios.get("/payments/",{params:{filters:{webservice:{name:e.search.store.name},createdAt:{$lte:e.search.end_date,$gte:e.search.start_date}},populate:"*"},paramsSerializer:function(e){return y.a.stringify(e,{arrayFormat:"brackets"})}}).then((function(data){e.payments=data.data;var t=O.a.groupBy(e.payments.data,(function(e){return d()(e.publishedAt).format("DD/MM/YYYY")}));e.paymentsGraph=O.a.mapValues(t,(function(e){return O.a.reduce(e,(function(e,t){return e+t.amount}),0)})),e.labelsPayments=Object.keys(e.paymentsGraph),e.paymentsGraph=Object.values(e.paymentsGraph)}));case 1:case"end":return t.stop()}}),t)})))()},getIncome:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/webservices/payments/".concat(e.search.store),{params:w(w({},e.search),{},{method:"day"})}).then((function(data){for(var i in e.incomeData=Object.values(data.data),data.data)e.labels.push(i);e.labels=e.labels.reverse()}));case 2:case"end":return t.stop()}}),t)})))()}}),Object(c.a)(r,"watch",{search:{handler:function(){this.getIncome(),this.getPayments()},deep:!0},"search.start_date":function(){this.getIncome()},"search.end_date":function(){this.getIncome()}}),r),x=n(19),component=Object(x.a)(P,(function(){var e=this,t=e._self._c;return t("div",[t("GeneralCardTitleComponent",{staticClass:"primary white--text"},[e._v("\n    Ingresos\n  ")]),e._v(" "),t(o.c,[t("generalGraphComponent",{attrs:{type:"bar",labels:e.labels,data:[{values:e.incomeData,chartType:"line",name:"Ingresos"}],colors:["#ff6240"]}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GeneralCardTitleComponent:n(130).default})}}]);