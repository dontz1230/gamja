(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("6250d772",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";var n=r(240);r.n(n).a},259:function(t,e,r){(e=r(33)(!1)).push([t.i,".total_container[data-v-527546e7]{width:100%;text-align:right}.total_container span[data-v-527546e7]{font-size:32px;font-weight:700;color:#d34360}.cart_container[data-v-527546e7]{padding:16px 0;flex-direction:column;border-bottom:1px solid rgba(0,0,0,.25)}.cart_container[data-v-527546e7],.cart_wrapper[data-v-527546e7]{width:100%;display:flex;align-items:center}.cart_wrapper[data-v-527546e7]{justify-content:space-around;background:#fff;border-radius:20px;height:150px;flex-direction:row;padding:12px 16px;position:relative;margin:12px}.cart_wrapper .img_container[data-v-527546e7]{width:100px;height:100px;overflow:hidden;flex-basis:100px;margin:0 32px;border-radius:100%;background-size:cover}.cart_wrapper .cart_info[data-v-527546e7]{display:flex;flex-direction:column;align-items:flex-start;flex:1;height:100%;position:relative}.cart_wrapper .cart_info h1[data-v-527546e7]{font-weight:700;font-size:1.5rem;color:#444;position:absolute;top:50%;transform:translateY(-50%)}.cart_wrapper .cart_info span[data-v-527546e7]{background:rgba(70,54,136,.25098);border:1px solid #463688;color:#463688;border-radius:6px;padding:6px 8px;font-size:12px;position:absolute;top:12px}.cart_wrapper .cart_number[data-v-527546e7]{display:flex;flex-direction:row;justify-content:space-evenly;width:60px;flex-basis:100px;margin:0 24px}.cart_wrapper .cart_number span[data-v-527546e7]{font-weight:700}.cart_wrapper .cart_number span[data-v-527546e7]:first-child,.cart_wrapper .cart_number span[data-v-527546e7]:last-child{font-size:18px;color:#e7a134}.cart_wrapper .cart_price[data-v-527546e7],.cart_wrapper .cart_total[data-v-527546e7]{color:#52616b;flex-basis:100px;margin:0 24px}.cart_wrapper .cart_total[data-v-527546e7]{font-size:1.5rem;font-weight:700}.cart_wrapper .cart_close[data-v-527546e7]{top:8px;cursor:pointer;position:absolute;font-size:1.25rem;flex-basis:30px;right:20px;transition:all .4s cubic-bezier(.215,.61,.355,1)}.cart_wrapper .cart_close i[data-v-527546e7]{color:#d34360}.cart_wrapper .cart_close[data-v-527546e7]:hover{transform:rotate(1turn)}@media only screen and (max-width:600px){.cart_wrapper[data-v-527546e7]{padding:4px;border-radius:6px;height:100px}.cart_wrapper .img_container[data-v-527546e7]{width:100px;height:100px;overflow:hidden;flex-basis:100px;margin:0 32px;border-radius:100%;background-size:cover}.cart_wrapper .cart_info[data-v-527546e7]{flex:unset;position:relative;justify-content:center;width:140px;align-items:center}.cart_wrapper .cart_info h1[data-v-527546e7]{font-size:1rem;position:relative;top:0;transform:none}.cart_wrapper .cart_info span[data-v-527546e7]{width:-webkit-max-content;width:-moz-max-content;width:max-content;top:2px;left:-6px}.cart_wrapper .cart_number[data-v-527546e7]{width:60px;margin:0;flex-basis:auto}.cart_wrapper .cart_number span[data-v-527546e7]{font-weight:700}.cart_wrapper .cart_number span[data-v-527546e7]:first-child,.cart_wrapper .cart_number span[data-v-527546e7]:last-child{font-size:18px;color:#e7a134}.cart_wrapper .cart_price[data-v-527546e7]{flex-basis:unset;margin:0}.cart_wrapper .cart_total[data-v-527546e7]{font-size:1em;margin:0;flex-basis:auto}.cart_wrapper .cart_close[data-v-527546e7]{top:6px;right:6px;transition:none}}",""]),t.exports=e},293:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(3),r(1),r(4),r(42);var n=r(18),c=r(0),o=r(91);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"Address",components:{NextBtn:function(){return r.e(0).then(r.bind(null,304))}},inject:["reload"],data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getCart","getTotalPrice"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.app,t.params;case 1:case"end":return e.stop()}}),e)})))()},methods:{toPayment:function(){this.router.push("/payment")},changeQuantity:function(t,e){if("plus"==t){var r=e.quantity+1;this.$store.commit("changeQuantity",{product:e,qty:r})}else{var n=e.quantity-1;if(0==e.quantity)return;this.$store.commit("changeQuantity",{product:e,qty:n})}},deleteProduct:function(t){this.$store.commit("deleteProduct",t)}}},_=(r(258),r(32)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index_container"},[r("TitleBox",{attrs:{title:"Games"}}),t._v(" "),r("div",{staticClass:"total_container"},[t._v("\n    TOTAL PRICE : NTD\n    "),r("span",[t._v(t._s(t.getTotalPrice))])]),t._v(" "),r("div",{staticClass:"cart_container"},t._l(t.getCart,(function(e){return r("div",{key:e._id,staticClass:"cart_wrapper card"},[r("div",{staticClass:"img_container m_hide",style:{"background-image":"url("+e.photo+")"}}),t._v(" "),r("div",{staticClass:"cart_info"},[r("span",[t._v(t._s(e.category.type))]),t._v(" "),r("h1",[t._v(t._s(e.title))])]),t._v(" "),r("span",{staticClass:"cart_price"},[t._v("$"+t._s(e.price))]),t._v(" "),r("div",{staticClass:"cart_number"},[r("span",{on:{click:function(r){return t.changeQuantity("minus",e)}}},[t._v("-")]),t._v(" "),r("span",[t._v(t._s(e.quantity))]),t._v(" "),r("span",{on:{click:function(r){return t.changeQuantity("plus",e)}}},[t._v("+")])]),t._v(" "),r("span",{staticClass:"cart_total"},[t._v("$"+t._s(e.quantity*e.price))]),t._v(" "),r("span",{staticClass:"cart_close",on:{click:function(r){return t.deleteProduct(e)}}},[r("i",{staticClass:"fa fa-times"})])])})),0),t._v(" "),0!==t.getCart.length?r("NextBtn",{attrs:{text:"Next",link:"payment"}}):r("NextBtn",{attrs:{text:"SHOP",link:"/products"}})],1)}),[],!1,null,"527546e7",null);e.default=component.exports}}]);