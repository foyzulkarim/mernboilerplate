(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9271],{16894:function($,Z,e){"use strict";var h=e(7381),M=e(29443);Z.ZP=M.Z},55590:function($,Z,e){"use strict";e.d(Z,{yC:function(){return C},QX:function(){return k},FO:function(){return z},Vx:function(){return g},a1:function(){return n},Od:function(){return _},F3:function(){return U},h3:function(){return I}});var h=e(3182),M=e(94043),d=e.n(M),m=e(39031);function C(t){return T.apply(this,arguments)}function T(){return T=(0,h.Z)(d().mark(function t(o){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.v_)("/api/users/search",o);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t)})),T.apply(this,arguments)}function k(t,o){return R.apply(this,arguments)}function R(){return R=(0,h.Z)(d().mark(function t(o,l){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,m.v_)("/api/users/count",o,l);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},t)})),R.apply(this,arguments)}function z(t,o){return A.apply(this,arguments)}function A(){return A=(0,h.Z)(d().mark(function t(o,l){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("getById",o,l),s.next=3,(0,m.U2)("/api/users/".concat(o),{},l);case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}},t)})),A.apply(this,arguments)}function g(t){return a.apply(this,arguments)}function a(){return a=(0,h.Z)(d().mark(function t(o){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.gz)("/api/users",o);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t)})),a.apply(this,arguments)}function n(t){return f.apply(this,arguments)}function f(){return f=(0,h.Z)(d().mark(function t(o){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.v_)("/api/users",o);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t)})),f.apply(this,arguments)}function u(t){return P.apply(this,arguments)}function P(){return P=(0,h.Z)(d().mark(function t(o){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.v_)("/api/users/check",o);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t)})),P.apply(this,arguments)}function _(t,o){return v.apply(this,arguments)}function v(){return v=(0,h.Z)(d().mark(function t(o,l){return d().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,m.IV)("/api/users/".concat(o),{},l);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},t)})),v.apply(this,arguments)}function U(t){return W.apply(this,arguments)}function W(){return W=(0,h.Z)(d().mark(function t(o){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.v_)("/api/roles/search",{pageSize:-1});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t)})),W.apply(this,arguments)}var I=function(){var t=(0,h.Z)(d().mark(function o(l,r,s){var S,B,i,K,j;return d().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(S=l.field,B=l.fullField,i=Promise,r){b.next=4;break}return b.abrupt("return",i.reject("".concat(B," is required")));case 4:if(!(r.length<5)){b.next=6;break}return b.abrupt("return",i.reject("".concat(B," must be at least 5 characters")));case 6:return console.log("".concat(B," is valid")),K={},K[S]=r,s._id&&(K._id={$ne:s._id}),b.next=12,u(K);case 12:if(j=b.sent,console.log("res",j),j.status!=="success"){b.next=18;break}return b.abrupt("return",i.reject(j.message));case 18:return b.abrupt("return",i.resolve());case 19:case"end":return b.stop()}},o)}));return function(l,r,s){return t.apply(this,arguments)}}()},72588:function($,Z,e){"use strict";e.r(Z);var h=e(14781),M=e(40308),d=e(13062),m=e(71230),C=e(57663),T=e(71577),k=e(89032),R=e(15746),z=e(47673),A=e(4107),g=e(9715),a=e(93766),n=e(11849),f=e(34792),u=e(48086),P=e(3182),_=e(71194),v=e(50146),U=e(2824),W=e(94043),I=e.n(W),t=e(57119),o=e(49101),l=e(67294),r=e(75362),s=e(16894),S=e(43581),B=e(55590),i=e(85893),K=function(){var N=(0,l.useRef)(),b=(0,l.useState)({data:[]}),J=(0,U.Z)(b,2),ae=J[0],te=J[1],se=(0,l.useState)(1),x=(0,U.Z)(se,2),G=x[0],H=x[1],ue=(0,l.useState)({}),Q=(0,U.Z)(ue,2),F=Q[0],V=Q[1],_e=(0,l.useState)({}),X=(0,U.Z)(_e,2),le=X[0],Y=X[1],ie=(0,l.useState)(0),q=(0,U.Z)(ie,2),oe=q[0],ce=q[1],de=(0,l.useState)(!1),ee=(0,U.Z)(de,2),re=ee[0],w=ee[1],me=v.Z.confirm,fe=function(){var D=(0,P.Z)(I().mark(function c(){var E,y,O,L;return I().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return E=u.default.loading("Loading..."),p.prev=1,p.next=4,(0,B.yC)((0,n.Z)((0,n.Z)({current:G,pageSize:10},F),le));case 4:return y=p.sent,E(),te(y),w(!1),p.abrupt("return",y);case 11:return p.prev=11,p.t0=p.catch(1),E(),O=JSON.stringify(p.t0),L=JSON.parse(O),console.log(L),u.default.error(L.data.errorMessage),p.abrupt("return",!1);case 19:case"end":return p.stop()}},c,null,[[1,11]])}));return function(){return D.apply(this,arguments)}}(),pe=function(c){me({title:"Do you Want to delete ".concat(c.name,"?"),icon:(0,i.jsx)(t.Z,{}),content:"".concat(c.name," will be deleted permanently."),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){var E=(0,P.Z)(I().mark(function O(){var L;return I().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return console.log("OK"),p.next=3,(0,B.Od)(c._id);case 3:L=p.sent,L.success&&(u.default.success(L.message),w(!0));case 5:case"end":return p.stop()}},O)}));function y(){return E.apply(this,arguments)}return y}(),onCancel:function(){console.log("Cancel")}})},he=function(){var D=(0,P.Z)(I().mark(function c(){var E;return I().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,B.QX)((0,n.Z)({},F));case 2:E=O.sent,ce(E.total);case 4:case"end":return O.stop()}},c)}));return function(){return D.apply(this,arguments)}}();(0,l.useEffect)(function(){re&&fe()},[re]),(0,l.useEffect)(function(){H(1),Y(null),w(!0),he()},[F]);var Ee=a.Z.useForm(),ve=(0,U.Z)(Ee,1),ne=ve[0],ge=function(c){V(c)},Pe=[{title:"Name",sorter:!0,tip:"Name",render:function(c,E){return(0,i.jsx)("a",{onClick:function(){S.m8.push("/users/edit/".concat(E._id))},children:"".concat(E.firstName," ").concat(E.lastName)})}},{title:"Role",dataIndex:"roleAlias"},{title:"Username",dataIndex:"username"},{title:"Email",dataIndex:"email"},{title:"Phone Number",dataIndex:"phoneNumber"},{title:"Actions",dataIndex:"option",valueType:"option",render:function(c,E){return[(0,i.jsx)("a",{onClick:function(){pe(E)},children:"Delete"},"config")]}}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.ZP,{children:[(0,i.jsx)(a.Z,{form:ne,name:"advanced_search",className:"ant-advanced-search-form",onFinish:ge,style:{display:"flex","align-items":"left",background:"white",padding:"10px"},children:(0,i.jsxs)(m.Z,{gutter:16,children:[(0,i.jsx)(R.Z,{flex:6,children:(0,i.jsx)(a.Z.Item,{name:"name",label:"Name",children:(0,i.jsx)(A.Z,{placeholder:"Search keyword for name or alias"})})},"name"),(0,i.jsxs)(R.Z,{flex:6,children:[(0,i.jsx)(T.Z,{type:"primary",htmlType:"submit",children:"Search"}),(0,i.jsx)(T.Z,{style:{margin:"0 8px"},onClick:function(){ne.resetFields()},children:"Clear"})]})]})}),(0,i.jsx)(s.ZP,{headerTitle:"Users",actionRef:N,rowKey:"_id",search:!1,options:{reload:!1},toolBarRender:function(){return[(0,i.jsxs)(T.Z,{type:"primary",onClick:function(){S.m8.push("/users/new")},children:[(0,i.jsx)(o.Z,{})," New"]},"primary")]},onChange:function(c,E,y){console.log("_sorter",y);var O={};O.sort=y.field,O.order=y.order==="ascend"?1:-1,Y(O),w(!0)},onSubmit:function(c){console.log(c),V(c)},dataSource:ae.data,columns:Pe,rowSelection:!1,pagination:!1})]}),(0,i.jsx)(M.Z,{total:oe,showSizeChanger:!1,showQuickJumper:!1,showTotal:function(c){return"Total ".concat(c," items")},defaultCurrent:G,onChange:function(c,E){H(c),w(!0)},style:{display:"flex","justify-content":"center","align-items":"center",background:"white",padding:"10px"}})]})};Z.default=K},39031:function($,Z,e){"use strict";e.d(Z,{U2:function(){return k},v_:function(){return R},gz:function(){return z},IV:function(){return A}});var h=e(3182),M=e(11849),d=e(94043),m=e.n(d),C=e(11238),T=e(43581);C.ZP.interceptors.request.use(function(g,a){var n=localStorage.getItem("auth");if(n&&JSON.parse(n)){var f=JSON.parse(n),u=f.token;u?a.headers.Authorization="Bearer ".concat(u):a.headers.Authorization=null}return console.log("url","http://localhost:8002",g),a.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(g),options:(0,M.Z)((0,M.Z)({},a),{},{interceptors:!0})}}),C.ZP.interceptors.response.use(function(){var g=(0,h.Z)(m().mark(function a(n,f){var u,P;return m().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(n.status!==401){v.next=4;break}return localStorage.removeItem("auth"),T.m8.replace({pathname:"/user/login"}),v.abrupt("return",{name:n.name});case 4:if(n.status!==400){v.next=12;break}return v.next=7,n.clone().json();case 7:return u=v.sent,console.log("data",u),P=new Error(u.message),P.error=u.error,v.abrupt("return",P);case 12:return v.abrupt("return",n);case 13:case"end":return v.stop()}},a)}));return function(a,n){return g.apply(this,arguments)}}());var k=function(){var g=(0,h.Z)(m().mark(function a(n,f,u){return m().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,C.ZP)(n,(0,M.Z)({method:"GET",params:f,skipErrorHandler:!0},u||{})));case 1:case"end":return _.stop()}},a)}));return function(n,f,u){return g.apply(this,arguments)}}(),R=function(){var g=(0,h.Z)(m().mark(function a(n,f,u){return m().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,C.ZP)(n,(0,M.Z)({method:"POST",data:f,skipErrorHandler:!0},u||{}));case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},a)}));return function(n,f,u){return g.apply(this,arguments)}}(),z=function(){var g=(0,h.Z)(m().mark(function a(n,f,u){return m().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,C.ZP)(n,(0,M.Z)({method:"PUT",data:f,skipErrorHandler:!0},u||{})));case 1:case"end":return _.stop()}},a)}));return function(n,f,u){return g.apply(this,arguments)}}(),A=function(){var g=(0,h.Z)(m().mark(function a(n,f,u){return m().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,C.ZP)(n,(0,M.Z)({method:"DELETE",data:f,skipErrorHandler:!0},u||{})));case 1:case"end":return _.stop()}},a)}));return function(n,f,u){return g.apply(this,arguments)}}()}}]);