(this.webpackJsonpherokustore=this.webpackJsonpherokustore||[]).push([[0],{121:function(e,t,r){e.exports={imgCard:"card_imgCard__3qJWg",imgWrapper:"card_imgWrapper__3UmUB",spinner:"card_spinner__3zKaA",card:"card_card__2_QZT",focussedCard:"card_focussedCard__20mJJ",hidden:"card_hidden__2YuwZ",dispNone:"card_dispNone__14y2i"}},122:function(e,t,r){e.exports={card_margin:"products_card_margin__32i2p",prodWrapper:"products_prodWrapper__2eaEg",spinner:"products_spinner__L8kFv"}},131:function(e,t,r){e.exports={card:"categories_card__2Zvef",imgWrapper:"categories_imgWrapper__3YWf5"}},155:function(e,t,r){e.exports={app:"App_app__3Uco8"}},159:function(e,t,r){e.exports={badge:"storeIcon_badge__22zsT"}},171:function(e,t,r){e.exports={row:"store_row__3Cek0"}},284:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(28),s=r.n(n),i=r(12),o=(r(183),r(155)),u=r.n(o),d=r(7),l=r(4),p=r(286),j=r(293),b=r(294),m=r(32),O=r(292),h=r(159),f=r.n(h),x=r(6),_=function(){var e=Object(i.f)(),t=Object(m.c)((function(e){return e.cart.items})).reduce((function(e,t){return e+=t.amount}),0);return Object(x.jsx)(O.a,{className:f.a.badge,count:t,overflowCount:10,onClick:function(){return e("/store")},children:Object(x.jsx)("i",{style:{fontSize:"30px",color:"white"},className:"fas fa-shopping-basket"})})},g=r(51),v=r.n(g),y=p.a.Header,N=p.a.Content,C=p.a.Footer,k=(p.a.Sider,j.a.SubMenu);function A(e){var t,r=e.children,c=Object(a.useState)(1),n=Object(l.a)(c,2),s=n[0],o=n[1],u=Object(i.f)(),m=function(e,t){u("".concat(e)),o(t)};return Object(x.jsxs)(p.a,{className:v.a.mainLayout,children:[Object(x.jsx)(y,{className:v.a.header,style:{padding:0},children:Object(x.jsxs)("div",{className:v.a.headerRightPart,children:[Object(x.jsxs)(j.a,(t={className:v.a.desktop,theme:"dark",mode:"horizontal"},Object(d.a)(t,"className",v.a.menu),Object(d.a)(t,"defaultSelectedKeys",["".concat(s)]),Object(d.a)(t,"children",[Object(x.jsx)(j.a.Item,{className:v.a.desktop,onClick:function(){return m("/",1)},children:"Actions"},"1"),Object(x.jsx)(j.a.Item,{className:v.a.desktop,onClick:function(){return m("/products",2)},children:"Products"},"2"),Object(x.jsx)(j.a.Item,{className:v.a.desktop,onClick:function(){return m("/categories",3)},children:"Categories"},"3"),Object(x.jsxs)(k,{className:v.a.mobile,icon:Object(x.jsx)(b.a,{}),children:[Object(x.jsx)(j.a.Item,{onClick:function(){return m("/",1)},children:"Actions"},"1"),Object(x.jsx)(j.a.Item,{onClick:function(){return m("/products",2)},children:"Products"},"2"),Object(x.jsx)(j.a.Item,{onClick:function(){return m("/categories",3)},children:"Categories"},"3")]},"sub1")]),t)),Object(x.jsx)(_,{})]})}),Object(x.jsx)(p.a,{children:Object(x.jsxs)(p.a,{className:"site-layout",children:[Object(x.jsx)(N,{style:{margin:"0 16px"},children:Object(x.jsx)("div",{className:v.a.contentLayout,children:r})}),Object(x.jsx)(C,{style:{textAlign:"center",marginTop:"300px"},children:"Ant Design \xa92018 Created by Ant UED"})]})})]})}var I=r(1),T=r(15),w=r.n(T),E=r(33),L=r(64),S=r.n(L),D="PRODUCT_LOAD_IN_PROGRESS",P="PRODUCT_LOAD_FAIL",R="GET_PRODUCTS_BY_LIMIT",W="GET_BY_CATEGORY",$="LOADING",U="INIT_APP",F="ADD_TO_CART",G="DECREASE_ITEM_AMOUNT",M="DELETE_CART_ITEM",B="REFRESH_CART",J=function(){var e=Object(E.a)(w.a.mark((function e(){var t,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/api/products");case 2:if(200===(t=e.sent).status){e.next=5;break}return e.abrupt("return",{type:P});case 5:return r={type:R,payload:{products:t.data.payload}},e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(E.a)(w.a.mark((function e(){var t,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/api/categories");case 2:if(t=e.sent,r=t.data,console.log("Categories:++++",r),"ok"===r.status){e.next=7;break}return e.abrupt("return",{type:P});case 7:return e.abrupt("return",{type:U,payload:{categories:r.payload.categories}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(E.a)(w.a.mark((function e(t){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://fakestoreapi.com/products/category/".concat(t));case 2:return r=e.sent,a=r.data,console.log("Categories: =======",a),e.abrupt("return",{type:W,payload:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(E.a)(w.a.mark((function e(t){var r,a,c,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:return r=e.sent,a=r.payload,c=a.products,e.next=7,z();case 7:(n=e.sent).payload=Object(I.a)(Object(I.a)({},n.payload),{},{products:c}),t(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(E.a)(w.a.mark((function e(t,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,Y(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",a());case 6:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),H=r(80),K=r(52),V=r(289),X=r(288),Q=r(131),ee=r.n(Q);function te(){var e=Object(i.f)(),t=Object(m.c)((function(e){return e.shop})).categories,r=Object(m.b)();return Object(x.jsx)("div",{className:"site-card-wrapper",children:Object(x.jsx)(H.a,{justify:"center",gutter:16,children:t.map((function(t,a){return Object(x.jsx)(K.a,{xs:22,sm:12,lg:10,children:Object(x.jsx)(V.a,{className:ee.a.card,onClick:function(){return function(t){console.log(t),q(t,r,(function(){e("/products")}))}(t.category)},title:t.title,bordered:!1,children:Object(x.jsx)("div",{className:ee.a.imgWrapper,children:Object(x.jsx)(X.a,{preview:!1,src:t.img})})})},a)}))})})}var re=function(){var e=Object(E.a)(w.a.mark((function e(t){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("/api/refreshCart",t);case 2:return r=e.sent,a=r.data,console.log("refreshArr",a),e.abrupt("return",{type:B,payload:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e,t){t(function(e){var t=e.id,r=e.price,a=void 0===r?0:r,c=e.title,n=void 0===c?"":c,s=e.image;return{type:F,payload:{id:t,price:a,title:n,image:void 0===s?"":s}}}(e))},ce=function(e,t){t(function(e,t){return{type:G,payload:{id:e,amount:t}}}(e.id,e.amount))},ne=function(e,t){t(function(e){return{type:M,payload:{id:e}}}(e))},se=function(){var e=Object(E.a)(w.a.mark((function e(t,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,re(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ie=r(291),oe=r(121),ue=r.n(oe),de=V.a.Meta;function le(e){var t=e.product,r=Object(m.b)(),c=t.id,n=void 0===c?0:c,s=t.title,i=void 0===s?"some title":s,o=t.price,u=void 0===o?1:o,d=t.image,p=(t.description,{id:n,title:i,price:u,image:d}),j=Object(a.useState)(!1),b=Object(l.a)(j,2),O=(b[0],b[1]);return Object(x.jsx)("div",{className:ue.a.card,children:Object(x.jsxs)(V.a,{onMouseOver:function(e){O(!0)},hoverable:!0,style:{width:240},cover:Object(x.jsx)("div",{className:ue.a.imgWrapper,children:Object(x.jsx)("img",{alt:"example",className:ue.a.imgCard,src:d})}),children:[Object(x.jsx)(de,{title:i}),"$",u,Object(x.jsx)("div",{children:Object(x.jsx)(ie.a,{type:"primary",onClick:function(){return function(e,t){!function(e,t){t(function(e){var t=e.id,r=e.price,a=void 0===r?0:r,c=e.title,n=void 0===c?"":c,s=e.image;return{type:"ADD_TO_STORE",payload:{id:t,price:a,title:n,image:void 0===s?"":s}}}(e))}(e,t),ae(e,t)}(p,r)},children:"Add to store"})})]})})}var pe=r(287);function je(){return Object(x.jsx)("div",{className:"example",children:Object(x.jsx)(pe.a,{size:"large"})})}var be=r(122),me=r.n(be);var Oe=function(){var e=Object(m.c)((function(e){return e.shop})),t=Object(m.b)();console.log("Productd_out"),Object(a.useEffect)((function(){e.products||Z(t),console.log("Productd")}),[]),Object(a.useEffect)((function(){console.log(e)}),[e]);var r="SUCCESS"!==e.arrProductStatus;return Object(x.jsx)("div",{children:r?Object(x.jsx)("div",{className:me.a.prodWrapper,children:Object(x.jsx)(je,{className:me.a.spinner,style:{position:"absolute",bottom:"50px"}})}):Object(x.jsx)(H.a,{justify:"center",gutter:16,children:e.products.map((function(e){return Object(x.jsx)(K.a,{xs:22,md:11,lg:8,xl:6,xxl:4,className:me.a.card_margin,children:Object(x.jsx)(le,{product:e})},e.id)}))})})},he=r(290),fe=he.a.Title;function xe(){return Object(x.jsxs)(V.a,{title:"Actions",children:[Object(x.jsx)(V.a,{type:"inner",title:"Action 1",children:Object(x.jsx)(fe,{level:2,children:"Buy a hot dog for the price of two hot dogs and get the second one absolutely free!!!!"})}),Object(x.jsx)(V.a,{style:{marginTop:16},type:"inner",title:"Action 2",children:Object(x.jsx)(fe,{level:2,children:"You don't know how to get money? Just buy something from us and sell it on OLX!!!"})})]})}var _e=r(34),ge=r.n(_e),ve=function(e){var t=e.props,r=t.id,a=t.ind,c=Object(m.b)(),n=Object(m.c)((function(e){return e.cart.items[a]}));console.log("SELECTED PROD: ",t);var s=n.title,i=n.price,o=n.amount,u=n.image;return Object(x.jsxs)("div",{className:ge.a.space,children:[Object(x.jsx)("div",{className:ge.a.imageWrapper,children:Object(x.jsx)(X.a,{src:u,placeholder:Object(x.jsx)(X.a,{preview:!1,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"})})}),Object(x.jsxs)("div",{className:ge.a.bodyCardWrapper,children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:ge.a.cardLine,children:[Object(x.jsx)("h3",{className:ge.a.propName,children:"Title: "}),Object(x.jsx)("p",{className:ge.a.title,style:{textAlign:"center"},children:s})]}),Object(x.jsxs)("div",{className:ge.a.cardLine,children:[Object(x.jsx)("h3",{className:ge.a.propName,children:"Price"}),Object(x.jsxs)("p",{className:ge.a.title,children:["$",i]})]}),Object(x.jsxs)("div",{className:ge.a.cardLine,children:[Object(x.jsx)("h3",{className:ge.a.propName,children:"Amount:"}),Object(x.jsx)("p",{className:ge.a.title,children:o})]}),Object(x.jsxs)("div",{className:ge.a.cardLine,children:[Object(x.jsx)("h2",{className:ge.a.propName,children:"Sum:"}),Object(x.jsxs)("p",{className:ge.a.title,children:["$",o*i]})]})]}),Object(x.jsxs)("div",{className:ge.a.buttonsWrapper,children:[Object(x.jsx)(ie.a,{onClick:function(){ae({id:r,ind:a},c)},className:ge.a.btnAction,type:"primary",children:"Add"}),Object(x.jsx)(ie.a,{onClick:function(){ce({id:r,amount:o},c)},className:ge.a.btnAction,type:"primary",children:"Decrease"}),Object(x.jsx)(ie.a,{onClick:function(){return console.log("DELETE!!! id: ",r),void ne(r,c)},className:ge.a.btnAction,type:"danger",children:"Delete"})]})]})]})},ye=r(171),Ne=r.n(ye),Ce=he.a.Title,ke=function(){var e=Object(i.f)(),t=Object(m.c)((function(e){return e.cart.items})),r=Object(m.b)();return Object(a.useEffect)((function(){console.log("STORE:",t)}),[t]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(Ce,{children:"Cart"}),Object(x.jsx)("div",{children:t.map((function(e,t){return Object(x.jsx)(H.a,{className:Ne.a.row,children:Object(x.jsx)(K.a,{children:Object(x.jsx)(ve,{props:{id:e.id,ind:t}},"storeItem".concat(t))})},"storeRow".concat(t))}))}),Object(x.jsx)("hr",{}),Object(x.jsx)("h2",{style:{margin:0},children:"Total:"}),Object(x.jsxs)("h3",{children:["$",t.reduce((function(e,t){return e+=t.amount*t.price}),0).toFixed(2)]}),Object(x.jsx)("button",{type:"primary",onClick:function(){return e("/products")},children:"\u0421ontinue shopping"}),t.length>0?Object(x.jsx)("button",{type:"dashed",onClick:function(){return e=t,console.log("refresh"),void se(e,r);var e},children:"Refresh cart"}):Object(x.jsx)("button",{children:"Cart is empty"})]})})};var Ae=function(){var e=Object(m.b)();return console.log("App init"),Object(a.useEffect)((function(){Z(e)})),Object(x.jsx)("div",{className:u.a.app,children:Object(x.jsx)(A,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",element:Object(x.jsx)(xe,{})}),Object(x.jsx)(i.a,{exact:!0,path:"/categories",element:Object(x.jsx)(te,{})}),Object(x.jsx)(i.a,{exact:!0,path:"/products",element:Object(x.jsx)(Oe,{})}),Object(x.jsx)(i.a,{exact:!0,path:"/store",element:Object(x.jsx)(ke,{})})]})})})},Ie=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,295)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))},Te=r(49),we=r.n(Te),Ee={store:{items:[],generalAmount:0,total:0},categories:[],products:[]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return we()(e,{arrProductStatus:{$set:{LOADING:$}}});case D:var r={id:Number(t.payload.id),status:"in_progress"};return we()(e,{products:{$push:[r]}});case R:return console.log("GET_PRODUCTS_BY_LIMIT: ",e),we()(e,{products:{$set:t.payload.products},arrProductStatus:{$set:"SUCCESS"}});case U:return console.log("reducer init app: ",t.payload),we()(e,{categories:{$set:t.payload.categories},products:{$set:t.payload.products},arrProductStatus:{$set:"SUCCESS"}});case W:return console.log(W),we()(e,{products:{$set:t.payload}});default:return e}},Se=r(83),De=r(172),Pe=r(84),Re=r(133),We=r(173),$e={items:[]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0,r=function(t){return e.items.findIndex((function(e){return e.id===t}))};switch(t.type){case F:var a=r(t.payload.id);if(-1===a){var c=we()(e,{items:{$push:[Object(I.a)(Object(I.a)({},t.payload),{},{amount:1})]}});return c}var n=e.items[a].amount+1,s=we()(e,{items:Object(d.a)({},a,{amount:{$set:n}})});return s;case G:var i=t.payload,o=i.id,u=i.amount,l=r(o);if(1===u){var p=we()(e,{items:{$splice:[[l,1]]}});return p}if(-1!==l){var j=we()(e,{items:Object(d.a)({},l,{amount:{$set:u-1}})});return j}console.log("\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");case M:var b=t.payload.id;console.log("delllll: ",e.items);var m=r(b);if(-1!==m){var O=we()(e,{items:{$splice:[[m,1]]}});return O}return e;case B:if("ok"!==t.payload.status)return e;we()(e,{items:{$set:[t.payload.payload.refreshCart]}});default:return e}},Fe={key:"root",storage:r.n(We).a,whitelist:["cart"],blacklist:["shop"]},Ge=Object(Pe.a)({shop:Le,cart:Ue}),Me=Object(Re.a)(Fe,Ge),Be=Object(Pe.b)(Me),Je=Object(Re.b)(Be),ze=Be;s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m.a,{store:ze,children:Object(x.jsx)(De.a,{loading:null,persistor:Je,children:Object(x.jsx)(Se.a,{children:Object(x.jsx)(Ae,{})})})})}),document.getElementById("root")),Ie()},34:function(e,t,r){e.exports={space:"storeItem_space__30Ilc",bodyCardWrapper:"storeItem_bodyCardWrapper__oXa-o",imageWrapper:"storeItem_imageWrapper__ejjiG",btnAction:"storeItem_btnAction__1DLuL",propName:"storeItem_propName__2c12c",title:"storeItem_title__anNdK",cardLine:"storeItem_cardLine__1eIqG",cardLineTitle:"storeItem_cardLineTitle__B-Ilx",buttonsWrapper:"storeItem_buttonsWrapper__htSNa"}},51:function(e,t,r){e.exports={header:"appLayout_header__3DVHt",menu:"appLayout_menu__3sw1c",headerRightPart:"appLayout_headerRightPart__19N9J",mainLayout:"appLayout_mainLayout__7Hg4u",mobile:"appLayout_mobile__24-3l",desktop:"appLayout_desktop__1r7ti"}}},[[284,1,2]]]);
//# sourceMappingURL=main.ac474065.chunk.js.map