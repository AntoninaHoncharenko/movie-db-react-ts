"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{6343:function(n,t,e){e.d(t,{Hx:function(){return d},Pv:function(){return s},Y5:function(){return p},uV:function(){return f},wr:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="2b7f816e736d5b5ccbfcea974c6e28fa",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},643:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,u,i,o,s=e(5861),p=e(9439),f=e(7757),d=e.n(f),h=e(7689),l=e(2791),x=e(6343),v=e(2092),m=e(168),w=e(6444),Z=w.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 16px;\n"]))),b=w.ZP.li(a||(a=(0,m.Z)(["\n  width: calc((1248px - 96px) / 7);\n"]))),g=w.ZP.img(c||(c=(0,m.Z)(["\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 4px;\n"]))),k=w.ZP.p(u||(u=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 6px;\n"]))),y=w.ZP.p(i||(i=(0,m.Z)(["\n  font-size: 18px;\n"]))),j=w.ZP.p(o||(o=(0,m.Z)(["\n  font-size: 24px;\n  color: brown;\n"]))),_=e(184),P=function(){var n=(0,h.UO)().movieId,t=(0,l.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1],c=(0,l.useState)(!1),u=(0,p.Z)(c,2),i=u[0],o=u[1];return(0,l.useEffect)((function(){function t(){return(t=(0,s.Z)(d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o(!0),!n){t.next=7;break}return t.next=5,(0,x.uV)(n);case 5:e=t.sent,a(e);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,o(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,_.jsxs)(_.Fragment,{children:[i&&(0,_.jsx)(v.a,{}),r.length>1&&(0,_.jsx)(Z,{children:r.map((function(n){var t=n.name,e=n.character,r=n.profile_path,a=n.id;return(0,_.jsxs)(b,{children:[(0,_.jsx)(g,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png",alt:t}),(0,_.jsx)(k,{children:t}),(0,_.jsx)(y,{children:e})]},a)}))}),0===r.length&&!i&&(0,_.jsx)(j,{children:"Cast is not found"})]})}},2092:function(n,t,e){e.d(t,{a:function(){return o}});var r,a=e(5243),c=e(168),u=e(6444).ZP.div(r||(r=(0,c.Z)(["\n  width: 60px;\n  margin: 0 auto 20px;\n"]))),i=e(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.iT,{height:60,width:60,color:"#008080",wrapperStyle:{},visible:!0,ariaLabel:"oval-loading",secondaryColor:"#a6d3d3",strokeWidth:5,strokeWidthSecondary:5})})}}}]);
//# sourceMappingURL=643.8eabb8c0.chunk.js.map