(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{246:function(t,e,r){var content=r(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("c271da46",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";var n=r(246);r.n(n).a},269:function(t,e,r){(e=r(33)(!1)).push([t.i,'.index_container[data-v-144fb073]{margin:34px auto;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;text-align:center;width:80%}.index_container h1[data-v-144fb073]{letter-spacing:1px;color:#fff;margin:10px;font-size:3rem;font-weight:800;color:#463688}.address_block[data-v-144fb073]{width:80%;margin:auto;background:#fff;border-radius:6px;padding:16px 24px;align-items:center}.address_block[data-v-144fb073],.address_input[data-v-144fb073]{display:flex;flex-direction:column}.address_input[data-v-144fb073]{width:400px;align-items:flex-start;margin-bottom:32px}.address_input label[data-v-144fb073]{font-weight:700;margin-bottom:12px}.address_input input[type=text][data-v-144fb073]{width:100%;border:none;border-bottom:1px solid #c9d6df}.address_input textarea[data-v-144fb073]{width:100%;border:1px solid #c9d6df;border-radius:4px}.address_input button[data-v-144fb073]{border-radius:8px;border:1px solid #3b7097;background:transparent;color:#3b7097;padding:10px 14px}.address_input select[data-v-144fb073]{border-radius:8px;position:relative;border:1px solid #c9d6df;color:#3b7097;padding:10px 14px;background:rgba(201,214,223,.12549);width:100%}.address_input select[data-v-144fb073]:before{content:"\\f007";font-family:Font Awesome\\ 5 Free;font-weight:900}',""]),t.exports=e},298:function(t,e,r){"use strict";r.r(e);r(42);var n=r(18),o={name:"Address",components:{},inject:["reload"],data:function(){return{user:"",country:"臺灣",fullName:"",street:"",county:"",dist:"",phone:"",deliverInstruction:"",securityCode:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,e.prev=1,e.next=4,r.$api.getCountries().then((function(t){return t.data.countries}));case 4:return n=e.sent,e.abrupt("return",{countries:n});case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))()},methods:{addAddress:function(){var data={user:JSON.parse(localStorage.getItem("UserInfo"))._id,country:this.country,fullName:this.fullName,street:this.street,county:this.county,dist:this.dist,phone:this.phone,deliverInstruction:this.deliverInstruction,securityCode:this.securityCode};this.$api.postAddress(data).then((function(t){console.log(t.data)}))}}},d=(r(268),r(32)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index_container"},[r("h1",[t._v("Add Address")]),t._v(" "),r("div",{staticClass:"address_block card"},[r("div",{staticClass:"address_input",attrs:{"data-label":"Country"}},[r("label",[t._v("Country")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.country=e.target.multiple?r:r[0]}}},t._l(t.countries,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Full Name"}},[r("label",[t._v("Full Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],attrs:{type:"text",placeholder:"Enter your fullName"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Street"}},[r("label",[t._v("Street")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],attrs:{type:"text",placeholder:"Enter steet"},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"County"}},[r("label",[t._v("County")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.county,expression:"county"}],attrs:{type:"text",placeholder:"Enter county"},domProps:{value:t.county},on:{input:function(e){e.target.composing||(t.county=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Dist"}},[r("label",[t._v("District")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dist,expression:"dist"}],attrs:{type:"text",placeholder:"Enter District"},domProps:{value:t.dist},on:{input:function(e){e.target.composing||(t.dist=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Phone"}},[r("label",[t._v("Phone")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Enter your phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Deliver Instruction"}},[r("label",[t._v("Deliver Instruction")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.deliverInstruction,expression:"deliverInstruction"}],attrs:{placeholder:"Enter your Deliver Instruction"},domProps:{value:t.deliverInstruction},on:{input:function(e){e.target.composing||(t.deliverInstruction=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Security Code"}},[r("label",[t._v("Security Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.securityCode,expression:"securityCode"}],attrs:{type:"text",placeholder:"Enter your Security Code"},domProps:{value:t.securityCode},on:{input:function(e){e.target.composing||(t.securityCode=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"address_input",attrs:{"data-label":"Security Code"}},[r("button",{on:{click:t.addAddress}},[t._v("Submit")])])])])}),[],!1,null,"144fb073",null);e.default=component.exports}}]);