(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{250:function(t,e,n){var content=n(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("1cab329a",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";var r=n(250);n.n(r).a},280:function(t,e,n){(e=n(33)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),e.push([t.i,"a[data-v-4c310726]{text-decoration:none}.header_container[data-v-4c310726]{display:flex;padding:0 10%;width:100%;height:60px;justify-content:space-between;flex-direction:row;opacity:.85;transition:all .3s ease-in-out;position:absolute;top:0;z-index:999;background-image:linear-gradient(-135deg,#667eea,#764ba2)}.header_container[data-v-4c310726]:hover{opacity:1;box-shadow:0 2px 8px rgba(111,66,245,.3)}.header_container .menu[data-v-4c310726]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;padding:0;margin:0;height:100%}.header_container .menu li[data-v-4c310726]{width:150px;text-align:center}.header_container .menu li:first-of-type a[data-v-4c310726]{font-family:Pacifico,cursive;color:#fff;font-size:1.5rem;text-shadow:2px 2px #34254d}.header_container .user[data-v-4c310726]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;padding:0;height:100%;margin:0;list-style:none;width:180px}.header_container .user li[data-v-4c310726]:nth-of-type(2){position:relative;text-align:center}.header_container .user li:nth-of-type(2) a .cart_length[data-v-4c310726]{background:#d34360;width:24px;height:24px;display:flex;border-radius:100%;justify-content:center;align-items:center;position:absolute;bottom:10px;right:-16px;font-weight:700;color:#fff}.header_container .user li span[data-v-4c310726]{cursor:pointer;color:#fff}.header_container .user li span[data-v-4c310726]:hover{color:#d34360}i[data-v-4c310726]{color:#fff;font-size:1rem;text-shadow:0 0 2px rgba(52,37,77,.8)}@media only screen and (max-width:600px){.header_container[data-v-4c310726]{padding:0 5%;position:absolute}.header_container[data-v-4c310726]:hover{opacity:1;box-shadow:0 2px 8px rgba(111,66,245,.3)}.header_container .menu[data-v-4c310726]{width:50%;justify-content:space-between}.header_container .menu li[data-v-4c310726]{margin-right:12px;text-align:center}.header_container .menu li:first-of-type a[data-v-4c310726]{font-family:Pacifico,cursive;color:#fff;font-size:1em;text-shadow:2px 2px #34254d}.header_container .user[data-v-4c310726]{display:flex;flex-direction:row;justify-content:space-around;width:auto}.header_container .user li[data-v-4c310726]{margin-right:24px}.header_container .user li:nth-of-type(2) a .cart_length[data-v-4c310726]{background:#d34360;width:24px;height:24px;display:flex;border-radius:100%;justify-content:center;align-items:center;position:absolute;bottom:10px;right:-16px;font-weight:700;color:#fff}.header_container .user li[data-v-4c310726]:last-of-type{margin:0}.header_container .user li span[data-v-4c310726]{cursor:pointer;color:#fff}.header_container .user li span[data-v-4c310726]:hover{color:#d34360}}",""]),t.exports=e},302:function(t,e,n){"use strict";n.r(e);n(5),n(2),n(3),n(1),n(4);var r=n(0),o=n(91);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{mode:{type:String,default:"light"}},inject:["reload"],computed:l({},Object(o.c)(["getCartLength","getStatus"])),methods:l(l({},Object(o.d)(["clearLoginStatus"])),{},{signOut:function(){this.clearLoginStatus(),this.$swal({icon:"success",title:"Successfully sign out"}),this.$router.push("/login")}})},f=(n(279),n(32)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_container"},[n("ul",{staticClass:"menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("GAMJA")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/products"}},[n("i",{staticClass:"fas fa-store"})])],1)]),t._v(" "),n("ul",{staticClass:"user"},[t.getStatus?n("li",[n("nuxt-link",{attrs:{to:"/profile"}},[n("i",{staticClass:"fas fa-user-ninja"})])],1):n("li",[n("nuxt-link",{attrs:{to:"/login"}},[n("i",{staticClass:"fas fa-user-ninja"})])],1),t._v(" "),t.getStatus?n("li",[n("nuxt-link",{attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),n("div",{staticClass:"cart_length"},[t._v(t._s(t.getCartLength))])])],1):n("li",[n("nuxt-link",{attrs:{to:"/login"}},[n("i",{staticClass:"fas fa-shopping-cart"})])],1),t._v(" "),t.getStatus?n("li",[n("span",{on:{click:t.signOut}},[t._v("Sign Out")])]):t._e()])])}),[],!1,null,"4c310726",null);e.default=component.exports}}]);