(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{806:function(t,e,r){var content=r(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5cf0f782",content,!0,{sourceMap:!1})},807:function(t,e,r){var l=r(18)((function(i){return i[1]}));l.push([t.i,'.theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{align-items:center;cursor:default;display:flex;flex:1;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-slider input{cursor:default;display:none;padding:0;width:100%}.v-slider__track-container{border-radius:0;position:absolute}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:12px}.v-slider__thumb,.v-slider__thumb:before{border-radius:50%;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{background:currentColor;color:inherit;content:"";height:36px;left:-12px;opacity:.3;pointer-events:none;top:-12px;transform:scale(.1);width:36px}.v-slider__thumb:after{content:"";height:42px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:42px}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{background-color:rgba(0,0,0,.5);border-radius:0;opacity:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{align-items:center;border-radius:50% 50% 0;bottom:100%;color:#fff;display:flex;font-size:.75rem;height:32px;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:32px}.v-slider--horizontal{margin-left:8px;margin-right:8px;min-height:32px}.v-slider--horizontal .v-slider__track-container{height:2px;left:0;top:50%;transform:translateY(-50%);width:100%}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{height:2px;left:0;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{margin-bottom:12px;margin-top:12px;min-height:150px}.v-slider--vertical .v-slider__track-container{height:100%;left:50%;top:0;transform:translateX(-50%);width:2px}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{height:100%;left:50%;top:0;transform:translateX(-50%);width:2px}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{left:12px;transform:translateY(-50%)}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{right:12px;transform:translateY(-50%)}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{height:8px;left:-4px;width:8px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-left:12px;margin-right:0}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}',""]),l.locals={},t.exports=l},865:function(t,e,r){"use strict";r(12),r(8),r(9),r(13),r(11),r(14);var l=r(1),n=(r(28),r(36),r(31),r(39),r(37),r(63),r(93),r(5),r(75),r(537),r(806),r(61)),o=r(101),c=r(6),h=r(137),d=r(140),v=r(0),m=r(17);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(n.a,h.a).extend({name:"v-slider",directives:{ClickOutside:d.a},mixins:[h.a],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:function(t){return"boolean"==typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||"always"===t}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}},computed:{classes:function(){return f(f({},n.a.options.computed.classes.call(this)),{},{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(t){t=isNaN(t)?this.minValue:t;var e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition:function(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},inputWidth:function(){var t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles:function(){var t,e=this.vertical?"bottom":"left",r=this.vertical?"top":"right",n=this.vertical?"height":"width",o=this.$vuetify.rtl?"auto":"0",c=this.$vuetify.rtl?"0":"auto",h=this.isDisabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return t={transition:this.trackTransition},Object(l.a)(t,e,o),Object(l.a)(t,r,c),Object(l.a)(t,n,h),t},trackStyles:function(){var t,e=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",r=this.vertical?"height":"width",n=this.isDisabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return t={transition:this.trackTransition},Object(l.a)(t,e,"0px"),Object(l.a)(t,r,n),t},showTicks:function(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!(this.isDisabled||!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(t){var e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max:function(t){var e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler:function(t){this.internalValue=t},immediate:!0}},mounted:function(){this.app=document.querySelector("[data-app]")||Object(m.c)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider:function(){return this.$createElement("div",{class:f({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:f({value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=parseFloat(this.tickSize),r=Object(v.i)(this.numTicks+1),n=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",o=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&r.reverse();var c=r.map((function(r){var c,h=[];t.tickLabels[r]&&h.push(t.$createElement("div",{staticClass:"v-slider__tick-label"},t.tickLabels[r]));var d=r*(100/t.numTicks),v=t.$vuetify.rtl?100-t.inputWidth<d:d<t.inputWidth;return t.$createElement("span",{key:r,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":v},style:(c={width:"".concat(e,"px"),height:"".concat(e,"px")},Object(l.a)(c,n,"calc(".concat(d,"% - ").concat(e/2,"px)")),Object(l.a)(c,o,"calc(50% - ".concat(e/2,"px)")),c)},h)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},c)},genThumbContainer:function(t,e,r,l,n,o){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"thumb",h=[this.genThumb()],d=this.genThumbLabelContent(t);return this.showThumbLabel&&h.push(this.genThumbLabel(d)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:c,key:c,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":r,"v-slider__thumb-container--focused":l,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:n,blur:o,keydown:this.onKeyDown}}),h)},genThumbLabelContent:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel:function(content){var t=Object(v.h)(this.thumbSize),e=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(o.e,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:t,width:t,transform:e}}),[this.$createElement("div",content)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(t){var e=this.vertical?"top":"left",r=this.$vuetify.rtl?100-t:t;return r=this.vertical?100-r:r,Object(l.a)({transition:this.trackTransition},e,"".concat(r,"%"))},onSliderMouseDown:function(t){var e,r=this;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;var l=t.target.getBoundingClientRect(),n="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?n.clientY-(l.top+l.height/2):n.clientX-(l.left+l.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout((function(){r.thumbPressed=!0}),300);var o=!v.B||{passive:!0,capture:!0},c=!!v.B&&{passive:!0},h="touches"in t;this.onMouseMove(t),this.app.addEventListener(h?"touchmove":"mousemove",this.onMouseMove,c),Object(v.a)(this.app,h?"touchend":"mouseup",this.onSliderMouseUp,o),this.$emit("start",this.internalValue)},onSliderMouseUp:function(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;var e=!!v.B&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(v.k)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown:function(t){if(this.isInteractive){var e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))}},onSliderClick:function(t){this.noClick?this.noClick=!1:(this.$refs.thumb.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue))},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove:function(t){var e=this.vertical?"top":"left",r=this.vertical?"height":"width",l=this.vertical?"clientY":"clientX",n=this.$refs.track.getBoundingClientRect(),o=n[e],c=n[r],h="touches"in t?t.touches[0][l]:t[l],d=Math.min(Math.max((h-o-this.startOffset)/c,0),1)||0;return this.vertical&&(d=1-d),this.$vuetify.rtl&&(d=1-d),parseFloat(this.min)+d*(this.maxValue-this.minValue)},parseKeyDown:function(t,e){if(this.isInteractive){var r=v.x.pageup,l=v.x.pagedown,n=v.x.end,o=v.x.home,c=v.x.left,h=v.x.right,d=v.x.down,m=v.x.up;if([r,l,n,o,c,h,d,m].includes(t.keyCode)){t.preventDefault();var _=this.stepNumeric||1,f=(this.maxValue-this.minValue)/_;if([c,h,d,m].includes(t.keyCode))e+=((this.$vuetify.rtl?[c,m]:[h,m]).includes(t.keyCode)?1:-1)*_*(t.shiftKey?3:t.ctrlKey?2:1);else if(t.keyCode===o)e=this.minValue;else if(t.keyCode===n)e=this.maxValue;else{e-=(t.keyCode===l?1:-1)*_*(f>100?f/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),r=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,l=this.minValue%this.stepNumeric,n=Math.round((t-l)/this.stepNumeric)*this.stepNumeric+l;return parseFloat(Math.min(n,this.maxValue).toFixed(r))}}})},929:function(t,e,r){"use strict";r.r(e);var l=r(294),n=r(772),o=r(284),c=r(2),h=r(770),d=r(763),v=r(775),m=r(225),_=r(769),f=r(865),k=r(771),y=r(89),x=r(42),C=(r(24),r(8),r(59),r(4)),w=r.n(C),$={props:{value:{type:Boolean,default:!1}},data:function(){return{promotion:{name:"",description:"",start_date:"",end_date:"",type:"Alquiler",features:[]}}},created:function(){this.promotion.start_date=w()().format("YYYY-MM-DD"),this.promotion.end_date=w()().add(7,"days").format("YYYY-MM-DD")},methods:{addFeature:function(){this.promotion.features.push({name:""})},removeFeature:function(){this.promotion.features.pop()},createPromotion:function(){this.$refs.form.validate()&&(this.$axios.post("/promotions",{data:this.promotion}),this.$emit("promotionCreated"),this.$emit("input",!1))}}},S=r(10),component=Object(S.a)($,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"max-width":"800",persistent:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(o.a,{staticClass:"rounded-lg",attrs:{"max-width":"800"}},[e(y.a,{attrs:{color:"primary",dense:"",elevation:"0"}},[e(x.b,{staticClass:"white--text font-weight-bold"},[t._v("Nueva promocion")]),t._v(" "),e(k.a),t._v(" "),e(l.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("input",!1)}}},[e(m.a,{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1),t._v(" "),e(v.a,{ref:"form"},[e(c.c,[e(_.a,[e(h.a,{staticClass:"col-12"},[e("FormsFieldsTextComponent",{attrs:{label:"Nombre"},model:{value:t.promotion.name,callback:function(e){t.$set(t.promotion,"name",e)},expression:"promotion.name"}})],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e("FormsFieldsTextareaComponent",{attrs:{label:"Descripcion"},model:{value:t.promotion.description,callback:function(e){t.$set(t.promotion,"description",e)},expression:"promotion.description"}})],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e("FormsFieldsTextComponent",{attrs:{label:"Fecha de inicio",type:"date"},model:{value:t.promotion.start_date,callback:function(e){t.$set(t.promotion,"start_date",e)},expression:"promotion.start_date"}})],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e("FormsFieldsTextComponent",{attrs:{label:"Fecha de fin",type:"date"},model:{value:t.promotion.end_date,callback:function(e){t.$set(t.promotion,"end_date",e)},expression:"promotion.end_date"}})],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e("FormsFieldsSelectComponent",{attrs:{label:"Tipo",items:["Alquiler","Inversion"]},model:{value:t.promotion.type,callback:function(e){t.$set(t.promotion,"type",e)},expression:"promotion.type"}})],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e(o.a,[e(c.c,{staticClass:"pa-2"},[e("label",{staticClass:"font-weight-bold black--text"},[t._v("Nivel de progreso")]),t._v(" "),e(f.a,{attrs:{"thumb-label":"always",color:"black",height:"15","track-size":"20"},model:{value:t.promotion.progress,callback:function(e){t.$set(t.promotion,"progress",e)},expression:"promotion.progress"}})],1)],1)],1),t._v(" "),e(h.a,{staticClass:"col-12"},[e(o.a,[e(c.d,[t._v("Caracteristicas")]),t._v(" "),e(c.b,[e(n.a,[e(l.a,{attrs:{color:"primary",small:""},on:{click:function(e){return t.removeFeature()}}},[e(m.a,[t._v("mdi-minus")])],1),t._v(" "),e(l.a,{attrs:{color:"primary",small:""},on:{click:function(e){return t.addFeature()}}},[e(m.a,[t._v("mdi-plus")])],1)],1)],1),t._v(" "),e(c.c,t._l(t.promotion.features,(function(r,l){return e(_.a,{key:l},[e(h.a,{staticClass:"col-12"},[e("FormsFieldsTextComponent",{attrs:{label:"Caracteristicas"},model:{value:r.name,callback:function(e){t.$set(r,"name",e)},expression:"feature.name"}})],1)],1)})),1)],1)],1)],1)],1)],1),t._v(" "),e(c.a,[e(k.a),t._v(" "),e(l.a,{staticClass:"rounded-lg",attrs:{color:"primary"},on:{click:function(e){return t.createPromotion()}}},[t._v("Guardar")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormsFieldsTextComponent:r(67).default,FormsFieldsTextareaComponent:r(306).default,FormsFieldsSelectComponent:r(91).default})}}]);