(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9441],{5966:function(N,O,e){"use strict";var s=e(22122),g=e(81253),t=e(67294),l=e(98757),M=["fieldProps","proFieldProps"],y=["fieldProps","proFieldProps"],Z="text",L=function(o){var _=o.fieldProps,c=o.proFieldProps,i=(0,g.Z)(o,M);return t.createElement(l.Z,(0,s.Z)({mode:"edit",valueType:Z,fieldProps:_,filedConfig:{valueType:Z},proFieldProps:c},i))},I=function(o){var _=o.fieldProps,c=o.proFieldProps,i=(0,g.Z)(o,y);return t.createElement(l.Z,(0,s.Z)({mode:"edit",valueType:"password",fieldProps:_,proFieldProps:c,filedConfig:{valueType:Z}},i))},T=L;T.Password=I,T.displayName="ProFormComponent",O.Z=T},15196:function(N,O,e){"use strict";e.d(O,{UW:function(){return p},ZP:function(){return K}});var s=e(9715),g=e(93766),t=e(22122),l=e(67294),M=e(49111),y=e(19650),Z=e(96156),L=e(84305),I=e(39559),T=e(28481),P=e(28991),o=e(8812),_=e(66758),c=e(96138),i=e(56725),u=e(53621),n=e(94184),d=e.n(n),R=l.forwardRef(function(b,U){var x=l.useContext(_.Z),D=x.groupProps,h=(0,P.Z)((0,P.Z)({},D),b),$=h.children,A=h.collapsible,j=h.defaultCollapsed,G=h.style,V=h.labelLayout,w=h.title,F=w===void 0?b.label:w,Y=h.tooltip,k=h.align,de=k===void 0?"start":k,me=h.direction,q=h.size,se=q===void 0?32:q,ee=h.titleStyle,S=h.titleRender,H=h.spaceProps,J=h.extra,oe=h.autoFocus,ve=(0,i.Z)(function(){return j||!1},{value:b.collapsed,onChange:b.onCollapse}),ie=(0,T.Z)(ve,2),Q=ie[0],fe=ie[1],pe=(0,l.useContext)(I.ZP.ConfigContext),C=pe.getPrefixCls,X=C("pro-form-group"),W=A&&l.createElement(o.Z,{style:{marginRight:8},rotate:Q?void 0:90}),ue=l.createElement(u.Z,{label:W?l.createElement("div",null,W,F):F,tooltip:Y}),te=S?S(ue,b):ue,re=[],_e=l.Children.toArray($).map(function(B,ae){var ne;return l.isValidElement(B)&&(B==null||(ne=B.props)===null||ne===void 0?void 0:ne.hidden)?(re.push(B),null):ae===0&&l.isValidElement(B)&&oe?l.cloneElement(B,(0,P.Z)((0,P.Z)({},B.props),{},{autoFocus:oe})):B});return l.createElement("div",{className:d()(X,(0,Z.Z)({},"".concat(X,"-twoLine"),V==="twoLine")),style:G,ref:U},re.length>0&&l.createElement("div",{style:{display:"none"}},re),(F||Y||J)&&l.createElement("div",{className:"".concat(X,"-title"),style:ee,onClick:function(){fe(!Q)}},J?l.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},te,l.createElement("span",{onClick:function(ae){return ae.stopPropagation()}},J)):te),A&&Q?null:l.createElement(y.Z,(0,t.Z)({},H,{className:"".concat(X,"-container"),size:se,align:de,direction:me,style:(0,P.Z)({rowGap:0},H==null?void 0:H.style)}),_e))});R.displayName="ProForm-Group";var m=R,v=e(52241),r=e(7525);function f(b){return l.createElement(v.Z,(0,t.Z)({layout:"vertical",submitter:{render:function(x,D){return D.reverse()}},contentRender:function(x,D){return l.createElement(l.Fragment,null,x,D)}},b))}f.Group=m,f.useForm=g.Z.useForm,f.Item=r.Z;var E=f,a=e(56640),p=E.Group,K=E},53621:function(N,O,e){"use strict";var s=e(22385),g=e(69713),t=e(96156),l=e(84305),M=e(39559),y=e(67294),Z=e(68628),L=e(47369),I=e.n(L),T=e(94184),P=e.n(T),o=function(c){var i=c.label,u=c.tooltip,n=c.ellipsis,d=c.subTitle,R=(0,y.useContext)(M.ZP.ConfigContext),m=R.getPrefixCls;if(!u&&!d)return y.createElement(y.Fragment,null,i);var v=m("pro-core-label-tip"),r=typeof u=="string"||y.isValidElement(u)?{title:u}:u,f=(r==null?void 0:r.icon)||y.createElement(Z.Z,null);return y.createElement("div",{className:v,onMouseDown:function(a){return a.stopPropagation()},onMouseLeave:function(a){return a.stopPropagation()},onMouseMove:function(a){return a.stopPropagation()}},y.createElement("div",{className:P()("".concat(v,"-title"),(0,t.Z)({},"".concat(v,"-title-ellipsis"),n))},i),d&&y.createElement("div",{className:"".concat(v,"-subtitle")},d),u&&y.createElement(g.Z,r,y.createElement("span",{className:"".concat(v,"-icon")},f)))};O.Z=y.memo(o)},96138:function(){},56640:function(){},47369:function(){},70347:function(){},57659:function(N,O,e){"use strict";e.r(O);var s=e(58024),g=e(39144),t=e(11849),l=e(34792),M=e(48086),y=e(3182),Z=e(2824),L=e(94043),I=e.n(L),T=e(15196),P=e(5966),o=e(43581),_=e(75362),c=e(592),i=e(67294),u=e(85893),n=function(R){var m=(0,i.useState)(null),v=(0,Z.Z)(m,2),r=v[0],f=v[1];(0,i.useEffect)(function(){var K=R.match.params.id,b=function(){var U=(0,y.Z)(I().mark(function x(D){var h;return I().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,c.FO)(D);case 2:h=A.sent,f(h);case 4:case"end":return A.stop()}},x)}));return function(D){return U.apply(this,arguments)}}();b(K)},[]);var E=(0,o.QT)(c.Vx,{manual:!0,onSuccess:function(b){M.default.success("Role is saved",b),o.m8.push("/roles")},onError:function(b){console.log(b),M.default.error("Error happened ",b)}}),a=E.run,p=function(){var K=(0,y.Z)(I().mark(function b(U){return I().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:console.log(U),a((0,t.Z)({_id:r._id},U));case 2:case"end":return D.stop()}},b)}));return function(U){return K.apply(this,arguments)}}();return r&&(0,u.jsx)(_.ZP,{content:"My amazing role update form",children:(0,u.jsx)(g.Z,{bordered:!1,children:(0,u.jsxs)(T.ZP,{hideRequiredMark:!1,style:{margin:"auto",marginTop:8,maxWidth:600},name:"basic",layout:"vertical",initialValues:r,onFinish:p,children:[(0,u.jsx)(P.Z,{width:"md",label:"Name",name:"name",value:r.name,rules:[{required:!0,message:"Please enter role name"}],placeholder:"Please enter role name"}),(0,u.jsx)(P.Z,{width:"md",label:"Alias",name:"alias",value:r.alias,rules:[{required:!0,message:"Please enter the Alias"}],placeholder:"Please enter role alias"})]})})})};O.default=n},592:function(N,O,e){"use strict";e.d(O,{yC:function(){return M},QX:function(){return Z},FO:function(){return I},Vx:function(){return P},a1:function(){return _},Od:function(){return i}});var s=e(3182),g=e(94043),t=e.n(g),l=e(39031);function M(n){return y.apply(this,arguments)}function y(){return y=(0,s.Z)(t().mark(function n(d){return t().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,l.v_)("/api/roles/search",d);case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},n)})),y.apply(this,arguments)}function Z(n,d){return L.apply(this,arguments)}function L(){return L=(0,s.Z)(t().mark(function n(d,R){return t().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,l.v_)("/api/roles/count",d,R);case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},n)})),L.apply(this,arguments)}function I(n,d){return T.apply(this,arguments)}function T(){return T=(0,s.Z)(t().mark(function n(d,R){return t().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,l.U2)("/api/roles/".concat(d),{},R);case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},n)})),T.apply(this,arguments)}function P(n){return o.apply(this,arguments)}function o(){return o=(0,s.Z)(t().mark(function n(d){return t().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,l.gz)("/api/roles",d);case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},n)})),o.apply(this,arguments)}function _(n){return c.apply(this,arguments)}function c(){return c=(0,s.Z)(t().mark(function n(d){return t().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,l.v_)("/api/roles",d);case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},n)})),c.apply(this,arguments)}function i(n,d){return u.apply(this,arguments)}function u(){return u=(0,s.Z)(t().mark(function n(d,R){return t().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,l.IV)("/api/roles/".concat(d),{},R);case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},n)})),u.apply(this,arguments)}},39031:function(N,O,e){"use strict";e.d(O,{U2:function(){return Z},v_:function(){return L},gz:function(){return I},IV:function(){return T}});var s=e(3182),g=e(11849),t=e(94043),l=e.n(t),M=e(11238),y=e(43581);M.ZP.interceptors.request.use(function(P,o){var _=localStorage.getItem("auth");if(_&&JSON.parse(_)){var c=JSON.parse(_),i=c.token;i?o.headers.Authorization="Bearer ".concat(i):o.headers.Authorization=null}return console.log("url","http://localhost:8002",P),o.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(P),options:(0,g.Z)((0,g.Z)({},o),{},{interceptors:!0})}}),M.ZP.interceptors.response.use(function(){var P=(0,s.Z)(l().mark(function o(_,c){var i,u;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(_.status!==401){d.next=4;break}return localStorage.removeItem("auth"),y.m8.replace({pathname:"/user/login"}),d.abrupt("return",{name:_.name});case 4:if(_.status!==400){d.next=12;break}return d.next=7,_.clone().json();case 7:return i=d.sent,console.log("data",i),u=new Error(i.message),u.error=i.error,d.abrupt("return",u);case 12:return d.abrupt("return",_);case 13:case"end":return d.stop()}},o)}));return function(o,_){return P.apply(this,arguments)}}());var Z=function(){var P=(0,s.Z)(l().mark(function o(_,c,i){return l().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.ZP)(_,(0,g.Z)({method:"GET",params:c,skipErrorHandler:!0},i||{})));case 1:case"end":return n.stop()}},o)}));return function(_,c,i){return P.apply(this,arguments)}}(),L=function(){var P=(0,s.Z)(l().mark(function o(_,c,i){return l().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,M.ZP)(_,(0,g.Z)({method:"POST",data:c,skipErrorHandler:!0},i||{}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},o)}));return function(_,c,i){return P.apply(this,arguments)}}(),I=function(){var P=(0,s.Z)(l().mark(function o(_,c,i){return l().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.ZP)(_,(0,g.Z)({method:"PUT",data:c,skipErrorHandler:!0},i||{})));case 1:case"end":return n.stop()}},o)}));return function(_,c,i){return P.apply(this,arguments)}}(),T=function(){var P=(0,s.Z)(l().mark(function o(_,c,i){return l().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.ZP)(_,(0,g.Z)({method:"DELETE",data:c,skipErrorHandler:!0},i||{})));case 1:case"end":return n.stop()}},o)}));return function(_,c,i){return P.apply(this,arguments)}}()},39144:function(N,O,e){"use strict";e.d(O,{Z:function(){return v}});var s=e(96156),g=e(22122),t=e(67294),l=e(94184),M=e.n(l),y=e(98423),Z=e(65632),L=function(r,f){var E={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&f.indexOf(a)<0&&(E[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,a=Object.getOwnPropertySymbols(r);p<a.length;p++)f.indexOf(a[p])<0&&Object.prototype.propertyIsEnumerable.call(r,a[p])&&(E[a[p]]=r[a[p]]);return E},I=function(f){var E=f.prefixCls,a=f.className,p=f.hoverable,K=p===void 0?!0:p,b=L(f,["prefixCls","className","hoverable"]);return t.createElement(Z.C,null,function(U){var x=U.getPrefixCls,D=x("card",E),h=M()("".concat(D,"-grid"),a,(0,s.Z)({},"".concat(D,"-grid-hoverable"),K));return t.createElement("div",(0,g.Z)({},b,{className:h}))})},T=I,P=function(r,f){var E={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&f.indexOf(a)<0&&(E[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,a=Object.getOwnPropertySymbols(r);p<a.length;p++)f.indexOf(a[p])<0&&Object.prototype.propertyIsEnumerable.call(r,a[p])&&(E[a[p]]=r[a[p]]);return E},o=function(f){return t.createElement(Z.C,null,function(E){var a=E.getPrefixCls,p=f.prefixCls,K=f.className,b=f.avatar,U=f.title,x=f.description,D=P(f,["prefixCls","className","avatar","title","description"]),h=a("card",p),$=M()("".concat(h,"-meta"),K),A=b?t.createElement("div",{className:"".concat(h,"-meta-avatar")},b):null,j=U?t.createElement("div",{className:"".concat(h,"-meta-title")},U):null,G=x?t.createElement("div",{className:"".concat(h,"-meta-description")},x):null,V=j||G?t.createElement("div",{className:"".concat(h,"-meta-detail")},j,G):null;return t.createElement("div",(0,g.Z)({},D,{className:$}),A,V)})},_=o,c=e(90642),i=e(71230),u=e(15746),n=e(97647),d=function(r,f){var E={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&f.indexOf(a)<0&&(E[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,a=Object.getOwnPropertySymbols(r);p<a.length;p++)f.indexOf(a[p])<0&&Object.prototype.propertyIsEnumerable.call(r,a[p])&&(E[a[p]]=r[a[p]]);return E};function R(r){var f=r.map(function(E,a){return t.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(a)},t.createElement("span",null,E))});return f}var m=t.forwardRef(function(r,f){var E,a,p=t.useContext(Z.E_),K=p.getPrefixCls,b=p.direction,U=t.useContext(n.Z),x=function(ce){var z;(z=r.onTabChange)===null||z===void 0||z.call(r,ce)},D=function(){var ce;return t.Children.forEach(r.children,function(z){z&&z.type&&z.type===T&&(ce=!0)}),ce},h=r.prefixCls,$=r.className,A=r.extra,j=r.headStyle,G=j===void 0?{}:j,V=r.bodyStyle,w=V===void 0?{}:V,F=r.title,Y=r.loading,k=r.bordered,de=k===void 0?!0:k,me=r.size,q=r.type,se=r.cover,ee=r.actions,S=r.tabList,H=r.children,J=r.activeTabKey,oe=r.defaultActiveTabKey,ve=r.tabBarExtraContent,ie=r.hoverable,Q=r.tabProps,fe=Q===void 0?{}:Q,pe=d(r,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),C=K("card",h),X=w.padding===0||w.padding==="0px"?{padding:24}:void 0,W=t.createElement("div",{className:"".concat(C,"-loading-block")}),ue=t.createElement("div",{className:"".concat(C,"-loading-content"),style:X},t.createElement(i.Z,{gutter:8},t.createElement(u.Z,{span:22},W)),t.createElement(i.Z,{gutter:8},t.createElement(u.Z,{span:8},W),t.createElement(u.Z,{span:15},W)),t.createElement(i.Z,{gutter:8},t.createElement(u.Z,{span:6},W),t.createElement(u.Z,{span:18},W)),t.createElement(i.Z,{gutter:8},t.createElement(u.Z,{span:13},W),t.createElement(u.Z,{span:9},W)),t.createElement(i.Z,{gutter:8},t.createElement(u.Z,{span:4},W),t.createElement(u.Z,{span:3},W),t.createElement(u.Z,{span:16},W))),te=J!==void 0,re=(0,g.Z)((0,g.Z)({},fe),(E={},(0,s.Z)(E,te?"activeKey":"defaultActiveKey",te?J:oe),(0,s.Z)(E,"tabBarExtraContent",ve),E)),_e,B=S&&S.length?t.createElement(c.Z,(0,g.Z)({size:"large"},re,{className:"".concat(C,"-head-tabs"),onChange:x}),S.map(function(le){return t.createElement(c.Z.TabPane,{tab:le.tab,disabled:le.disabled,key:le.key})})):null;(F||A||B)&&(_e=t.createElement("div",{className:"".concat(C,"-head"),style:G},t.createElement("div",{className:"".concat(C,"-head-wrapper")},F&&t.createElement("div",{className:"".concat(C,"-head-title")},F),A&&t.createElement("div",{className:"".concat(C,"-extra")},A)),B));var ae=se?t.createElement("div",{className:"".concat(C,"-cover")},se):null,ne=t.createElement("div",{className:"".concat(C,"-body"),style:w},Y?ue:H),Pe=ee&&ee.length?t.createElement("ul",{className:"".concat(C,"-actions")},R(ee)):null,he=(0,y.Z)(pe,["onTabChange"]),Ee=me||U,ge=M()(C,(a={},(0,s.Z)(a,"".concat(C,"-loading"),Y),(0,s.Z)(a,"".concat(C,"-bordered"),de),(0,s.Z)(a,"".concat(C,"-hoverable"),ie),(0,s.Z)(a,"".concat(C,"-contain-grid"),D()),(0,s.Z)(a,"".concat(C,"-contain-tabs"),S&&S.length),(0,s.Z)(a,"".concat(C,"-").concat(Ee),Ee),(0,s.Z)(a,"".concat(C,"-type-").concat(q),!!q),(0,s.Z)(a,"".concat(C,"-rtl"),b==="rtl"),a),$);return t.createElement("div",(0,g.Z)({ref:f},he,{className:ge}),_e,ae,ne,Pe)});m.Grid=T,m.Meta=_;var v=m},58024:function(N,O,e){"use strict";var s=e(38663),g=e.n(s),t=e(70347),l=e.n(t),M=e(18106),y=e(13062),Z=e(89032)},15746:function(N,O,e){"use strict";var s=e(21584);O.Z=s.Z},89032:function(N,O,e){"use strict";var s=e(38663),g=e.n(s),t=e(6999)},71230:function(N,O,e){"use strict";var s=e(92820);O.Z=s.Z},13062:function(N,O,e){"use strict";var s=e(38663),g=e.n(s),t=e(6999)}}]);