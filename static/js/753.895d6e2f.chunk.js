"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{1687:function(n,e,r){r.d(e,{Hx:function(){return l},Pv:function(){return u},Y5:function(){return p},uV:function(){return d},wr:function(){return s}});var t=r(5861),a=r(7757),o=r.n(a),i=r(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="2b7f816e736d5b5ccbfcea974c6e28fa",s=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,r){r.d(e,{a:function(){return s}});var t,a=r(5243),o=r(168),i=r(6444).ZP.div(t||(t=(0,o.Z)(["\n  width: 60px;\n  margin: 0 auto 20px;\n"]))),c=r(184),s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.iT,{height:60,width:60,color:"#008080",wrapperStyle:{},visible:!0,ariaLabel:"oval-loading",secondaryColor:"#a6d3d3",strokeWidth:5,strokeWidthSecondary:5})})}},8933:function(n,e,r){r.d(e,{e:function(){return v}});var t,a,o,i,c=r(1087),s=r(7689),u=r(168),p=r(6444),d=p.ZP.li(t||(t=(0,u.Z)(["\n  width: calc((1248px - 32px) / 3);\n  border-radius: 4px;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 12px 4px #198d8d;\n  }\n"]))),l=p.ZP.img(a||(a=(0,u.Z)(["\n  width: 100%;\n  height: 574px;\n  border-radius: 4px;\n  margin-bottom: 6px;\n  object-fit: cover;\n"]))),f=p.ZP.p(o||(o=(0,u.Z)(["\n  font-size: 22px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 3px;\n"]))),x=r(184),h=function(n){var e=n.movie,r=(0,s.TH)(),t=e.title,a=e.name,o=e.id,i=e.poster_path;return(0,x.jsx)(d,{children:(0,x.jsxs)(c.OL,{to:"/movies/".concat(o),state:{from:r},children:[(0,x.jsx)(l,{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://www.ena.org/UCommerce/Css/Sitefinity/images/image-not-found.png",alt:t||a}),(0,x.jsx)(f,{children:t||a})]})})},m=p.ZP.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px 16px;\n  margin: 0px auto;\n"]))),v=function(n){var e=n.movies;return(0,x.jsx)(m,{children:e.map((function(n){return(0,x.jsx)(h,{movie:n},n.id)}))})}},6753:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,a,o,i=r(5861),c=r(9439),s=r(7757),u=r.n(s),p=r(2791),d=r(1087),l=r(7596),f=r(8185),x=r(168),h=r(6444),m=h.ZP.form(t||(t=(0,x.Z)(["\n  width: 300px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  border-radius: 3px;\n  border: 3 solid black;\n  margin-bottom: 20px;\n"]))),v=h.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  outline: none;\n  background-color: #198d8d;\n  color: black;\n  opacity: 0.7;\n  transition: opacity 250ms linear;\n  border: none;\n  border-radius: 0px 4px 4px 0px;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=h.ZP.input(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 260px;\n  height: 40px;\n  font-size: 20px;\n  border-top: 2px solid #198d8d;\n  border-bottom: 2px solid #198d8d;\n  border-left: 2px solid #198d8d;\n  border-right: none;\n  border-radius: 4px 0px 0px 4px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),b=r(184),w=function(n){var e=n.onSubmit,r=function(n){n.preventDefault(),""===n.currentTarget.elements.query.value&&l.Am.warn("Enter a film name!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e(n.currentTarget.elements.query.value),n.currentTarget.reset()};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(m,{onSubmit:function(n){return r(n)},children:[(0,b.jsx)(g,{type:"text",name:"query"}),(0,b.jsx)(v,{type:"submit",children:(0,b.jsx)(f.dVI,{size:"24"})})]})})},y=r(1687),Z=r(8933),k=r(9245),j=r(2240),P=function(){var n,e=(0,p.useState)([]),r=(0,c.Z)(e,2),t=r[0],a=r[1],o=(0,d.lr)(),s=(0,c.Z)(o,2),f=s[0],x=s[1],h=(0,p.useState)(!1),m=(0,c.Z)(h,2),v=m[0],g=m[1],P=null!==(n=f.get("query"))&&void 0!==n?n:"";return(0,p.useEffect)((function(){function n(){return(n=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,y.Pv)(P);case 4:(e=n.sent).length<1&&l.Am.error("".concat(P," is not defined!"),{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),a(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==P&&function(){n.apply(this,arguments)}()}),[P]),(0,b.jsxs)(j.x,{width:"1280px",m:"0 auto",p:"20px 16px",children:[(0,b.jsx)(w,{onSubmit:function(n){x({query:n})}}),v&&(0,b.jsx)(k.a,{}),t&&(0,b.jsx)(Z.e,{movies:t})]})}}}]);
//# sourceMappingURL=753.895d6e2f.chunk.js.map