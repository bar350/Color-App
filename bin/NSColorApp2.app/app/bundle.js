module.exports=function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)s=i[p],a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);d.length;)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={0:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=global.webpackJsonp=global.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;return o.push([119,1]),r()}({118:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Page",{staticClass:"page",attrs:{xmlns:"http://schemas.nativescript.org/tns.xsd"}},[r("ActionBar",{staticClass:"action-bar",attrs:{title:"Home"}},[r("ActionItem",{attrs:{text:"Dawing Pad","ios.position":"right"},on:{tap:function(e){t.$navigateTo(t.drawing)}}})],1),r("ScrollView",[r("StackLayout",{staticClass:"home-panel",attrs:{paddingTop:"30"}},[r("TextField",{style:{color:t.textColor},attrs:{hint:"Tap to Change the Color",text:t.textFieldValue},on:{textChange:function(e){t.textFieldValue=e.value}}}),r("Button",{attrs:{text:"Change Color"},on:{tap:t.onColorButton}}),r("Label",{staticClass:"h2 description-label",attrs:{textWrap:"true",text:"Red: "+t.red}}),r("Label",{staticClass:"h2 description-label",attrs:{textWrap:"true",text:"Green: "+t.green}}),r("Label",{staticClass:"h2 description-label",attrs:{textWrap:"true",text:"Blue: "+t.blue}}),r("Label",{staticClass:"h2 description-label",attrs:{textWrap:"true",text:"Hex: "+t.textColor}})],1)],1)],1)};n._withStripped=!0;var a=function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{staticClass:"page"},[e("ActionBar",{staticClass:"action-bar",attrs:{title:"Drawing Pad"}},[e("ActionItem",{attrs:{"ios.systemIcon":"16","ios.position":"right"},on:{tap:this.clearMyDrawing}}),e("ActionItem",{attrs:{"ios.systemIcon":"3","ios.position":"right"},on:{tap:this.saveDrawing}})],1),e("StackLayout",{staticClass:"home-panel"},[e("label",{attrs:{text:"Draw Here"}}),e("DrawingPad",{ref:"drawingPad",staticClass:"bordered",attrs:{height:"60%",penColor:this.selectedColor,penWidth:"1"}}),e("Button",{attrs:{text:"Show Color Picker"},on:{tap:this.showPicker}}),e("StackLayout",{attrs:{orientation:"horizontal"}},[e("Label",{staticClass:"message",attrs:{text:"Selected Color: ",textWrap:"true"}}),e("Label",{staticClass:"message",attrs:{text:this.selectedColor,textWrap:"true"}})],1)],1)],1)};a._withStripped=!0;const o=r(117).ColorPicker,s=r(16),i=r(5),l=r(159);var c={name:"DrawingScreen",data:()=>({selectedColor:"#000000",cpicker:new o}),methods:{colorTranslate:t=>"#"+parseInt(t[0]).toString(16).padStart(2,"0")+parseInt(t[1]).toString(16).padStart(2,"0")+parseInt(t[2]).toString(16).padStart(2,"0"),showPicker(){let t=this;t.cpicker.show(t.selectedColor,"RGB").then(function(e){t.selectedColor=t.colorTranslate(e.split(", "))}).catch(function(t){console.log(t)})},saveDrawing(){this.$refs.drawingPad.nativeView.getDrawing().then(t=>{var e=s.fromNativeSource(t);const r=i.knownFolders.documents(),n=i.path.join(r.path,"save.png");e.saveToFile(n,"png")&&console.log("Image saved successfully!"),l.shareImage(e)}).catch(function(t){console.log(t)})},clearMyDrawing(t){this.$refs.drawingPad.nativeView.clearDrawing()}}},u=(r(160),r(30)),p=Object(u.a)(c,a,[],!1,null,"788aebdf",null);p.options.__file="components/DrawingScreen.vue";var d=p.exports,g={computed:{textColor:function(){return"#"+this.red.toString(16).padStart(2,"0")+this.green.toString(16).padStart(2,"0")+this.blue.toString(16).padStart(2,"0")}},methods:{onButtonTap(){console.log("Button was pressed")},getRandomInt:t=>Math.floor(Math.random()*Math.floor(t)),onColorButton(){this.red=this.getRandomInt(255),this.blue=this.getRandomInt(255),this.green=this.getRandomInt(255)}},data:()=>({textFieldValue:"",red:0,blue:0,green:0,drawing:d})},h=(r(162),Object(u.a)(g,n,[],!1,null,"69a6ba43",null));h.options.__file="components/RandomColorPicker.vue";e.a=h.exports},119:function(t,e,r){"use strict";r.r(e),function(t){var e=r(31),n=r.n(e),a=r(118);r(164);r(120)();const o=r(153);t.registerWebpackModules(o),r(154),n.a.config.silent=!0;r(117);n.a.registerElement("DrawingPad",()=>r(166).DrawingPad),new n.a({render:t=>t("frame",[t(a.a)])}).$start()}.call(this,r(3))},152:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=152},153:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=153},160:function(t,e,r){"use strict";var n=r(28);r.n(n).a},162:function(t,e,r){"use strict";var n=r(29);r.n(n).a},164:function(t,e,r){},28:function(t,e,r){},29:function(t,e,r){},55:function(t){t.exports={android:{v8Flags:"--expose_gc"},main:"main",name:"nscolorapp",version:"1.0.0"}}});