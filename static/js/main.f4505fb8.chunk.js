(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{11:function(e,t,a){e.exports={wrap:"PokemonProfile_wrap__YuTd7",profileBar:"PokemonProfile_profileBar__31kDO",profileContent:"PokemonProfile_profileContent__MzQzf",profileContent__image:"PokemonProfile_profileContent__image__EalKA",description__name:"PokemonProfile_description__name__2rJXe",description__char:"PokemonProfile_description__char__24VxC",bold:"PokemonProfile_bold__2iywg",profileContent__description:"PokemonProfile_profileContent__description__213af"}},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(89),a(90),a(4)),l=a(66),u=a.n(l),s=a(67),p=a.n(s),m=r.a.memo((function(e){return r.a.createElement("label",{className:p.a.input_area},e.title,r.a.createElement("input",Object.assign({type:e.type,name:e.name},e.formikProps)))})),f=a(68),d=a.n(f),E=a(69),_=a.n(E),g=r.a.memo((function(){return r.a.createElement("button",{type:"submit",className:d.a.button},r.a.createElement("img",{src:_.a,alt:""}))})),b=a(77),v=a(138),S=a(137),O=a(135);function y(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}var P=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function I(){P();var e=r.a.useState(!0),t=Object(b.a)(e,2),a=t[0],n=t[1],c=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement(v.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:12e3,onClose:c},r.a.createElement(y,{onClose:c,severity:"info"},"Your SMS code: 123456"))}var N=a(46),h=a(72),j=a.n(h).a.create({baseURL:"https://api.pokemontcg.io/v1"}),T=function(e,t,a){return j.get("/cards",{params:{page:e,pageSize:4,types:t,subtype:a}})},k=function(e){return j.get("/cards/".concat(e))},w=function(){return j.get("/types")},C=function(){return j.get("/subtypes")},M=function(e){return new Promise((function(t,a){"KODE"===e.login&&"123456"===e.password?t(!0):a("Incorrect login or password")}))},A=function(e){return new Promise((function(t,a){"123456"===e.code?t(!0):a("Incorrect code")}))},x=function(){return new Promise((function(e,t){e(!0)}))},R={error:null,isInitialized:!1},L=function(e){return{type:"APP/SET-ERROR",error:e}},V=function(e){return{type:"APP/SET-IS-INITIALIZED",value:e}},F={isLoggedIn:!1,isConfirm:!1},D=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},U=function(e){return{type:"APP/SET-IS-CONFIRMED",value:e}},B=function(){return function(e){x().then((function(t){e(D(!1)),e(U(!1)),localStorage.setItem("isLoggedIn",JSON.stringify(!1)),localStorage.setItem("currentPage",JSON.stringify(1)),localStorage.setItem("TypeValue",""),localStorage.setItem("SubtypeValue","")}))}},z=a(2),Y=a(8);function J(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}function G(){var e=Object(z.c)((function(e){return e.app.error})),t=Object(z.b)(),a=function(e,a){"clickaway"!==a&&t(L(null))},n=null!==e;return r.a.createElement(v.a,{open:n,autoHideDuration:3e3,onClose:a},r.a.createElement(J,{onClose:a,severity:"error"},e))}var W=function(){var e=Object(z.c)((function(e){return e.auth.isConfirm})),t=Object(z.c)((function(e){return e.app.isInitialized})),a=Object(z.b)(),n=Object(N.a)({initialValues:{code:""},validate:function(e){e.code},onSubmit:function(e){var t;a((t=e,function(e){A(t).then((function(t){e(U(!0))})).catch((function(t){e(V(!0)),e(L(t))}))}))}});return e?r.a.createElement(Y.a,{to:"/main"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.wrap},t&&r.a.createElement(G,null),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement(m,{title:"Code from SMS",type:"text",name:"code",formikProps:Object(i.a)({},n.getFieldProps("code"))}),r.a.createElement(g,null))),r.a.createElement(I,null))},H=a(22),q=a.n(H),K=a(48),Q=a.n(K),X=a(26),Z=a.n(X),$=a(35),ee={cards:[],types:[],subtypes:[],filterTypeValue:"",filterSubtypeValue:"",popupMode:!1,popupSrc:"",totalCount:0,page:1},te=function(e){return{type:"MAIN/SET-TYPE-FILTER",filterTypeValue:e}},ae=function(e){return{type:"MAIN/SET-SUBTYPE-FILTER",filterSubtypeValue:e}},ne=function(e){return{type:"MAIN/SET-PAGE",page:e}},re=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t,a){var n,r,c,o,i;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().main,r=n.page,c=n.filterTypeValue,o=n.filterSubtypeValue,e.prev=4,e.next=7,T(r,c,o);case 7:i=e.sent,t({type:"MAIN/SET-CARDS",cards:i.data.cards}),t({type:"MAIN/SET-TOTAL-COUNT",count:i.headers["total-count"]}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t(V(!0)),t(L(e.t0));case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a){return e.apply(this,arguments)}}()},ce={profileMode:!1,card:null},oe=function(e){return{type:"PROFILE/SET-PROFILE-MODE",value:e}},ie=function(e){return{type:"PROFILE/GET-CARD",card:e}},le=function(e){return function(){var t=Object($.a)(Z.a.mark((function t(a){var n;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n=t.sent,a(ie(n.data.card)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a(V(!0)),a(L(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},ue=r.a.memo((function(e){var t=Object(z.b)(),a=Object(n.useCallback)((function(){t({type:"MAIN/SET-POPUP-MODE"}),t({type:"MAIN/SET-POPUP-SRC",popupSrcValue:e.imageUrl})}),[e.imageUrl,t]),c=Object(n.useCallback)((function(){t(oe(!0)),localStorage.setItem("profileMode",JSON.stringify(!0)),t(le(e.id)),localStorage.setItem("profileId",e.id)}),[e.id,t]);return r.a.createElement("div",{className:Q.a.wrap},r.a.createElement("div",{className:Q.a.image},r.a.createElement("img",{src:e.imageUrl,alt:"#"})),r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.artist),r.a.createElement("div",{className:Q.a.buttons},r.a.createElement("button",{onClick:a},"Quick view"),r.a.createElement("button",{onClick:c},"Pokemon profile")))})),se=a(55),pe=a.n(se),me=r.a.memo((function(){var e=Object(z.c)((function(e){return e.main.popupSrc})),t=Object(z.b)(),a=Object(n.useCallback)((function(){t({type:"MAIN/SET-POPUP-MODE"})}),[t]);return r.a.createElement("div",{className:pe.a.wrap,onClick:a},r.a.createElement("button",{className:pe.a.close},"close"),r.a.createElement("img",{src:e,alt:""}))})),fe=a(19),de=a.n(fe),Ee=r.a.memo((function(e){var t=e.currentPage,a=e.itemsOnPage,n=e.totalItems,c=e.changePageNumber,o=Math.ceil(n/a),i=t-2,l=t+2,u=[];i<=0&&(i=1),l>=o&&(l=o);for(var s=i;s<=l;s++)u.push(s);return r.a.createElement("div",{className:de.a.pagination},r.a.createElement("button",{className:de.a.pagination__btn,disabled:1===t,onClick:function(){t>1&&c(t-1)}},"\xab"),r.a.createElement("div",{className:de.a.pagination__pages},t>3&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"".concat(de.a.pagination__btn," ").concat(1===t?de.a.pagination__btn_active:""),onClick:function(){return c(1)}},1),r.a.createElement("div",{className:de.a.pagination__space},"...")),u.map((function(e){return r.a.createElement("button",{key:e,className:"".concat(de.a.pagination__btn," ").concat(e===t?de.a.pagination__btn_active:""),onClick:function(){return c(e)}},e)})),t<o-4&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:de.a.pagination__space},"..."),r.a.createElement("button",{className:"".concat(de.a.pagination__btn," ").concat(o===t?de.a.pagination__btn_active:""),onClick:function(){return c(o)}},o))),r.a.createElement("button",{className:de.a.pagination__btn,disabled:t===o,onClick:function(){t<o&&c(t+1)}},"\xbb"))})),_e=function(){var e=Object(z.c)((function(e){return e.main.cards})),t=Object(z.c)((function(e){return e.main.types})),a=Object(z.c)((function(e){return e.main.subtypes})),c=Object(z.c)((function(e){return e.auth.isLoggedIn})),o=Object(z.c)((function(e){return e.profile.profileMode})),i=Object(z.c)((function(e){return e.main.filterTypeValue})),l=Object(z.c)((function(e){return e.main.filterSubtypeValue})),u=Object(z.c)((function(e){return e.main.popupMode})),s=Object(z.c)((function(e){return e.main.totalCount})),p=Object(z.c)((function(e){return e.main.page})),m=Object(z.b)();Object(n.useEffect)((function(){m(re()),m(function(){var e=Object($.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:a=e.sent,t({type:"MAIN/SET-TYPES",types:a.data.types}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(V(!0)),t(L(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),m(function(){var e=Object($.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:a=e.sent,t({type:"MAIN/SET-SUBTYPES",subtypes:a.data.subtypes}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(V(!0)),t(L(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[m]),Object(n.useEffect)((function(){var e=localStorage.getItem("TypeValue");m(te(e||""));var t=localStorage.getItem("SubtypeValue");m(ae(t||""));var a=Number(localStorage.getItem("currentPage"));m(ne(a))}),[m,localStorage.getItem("currentPage"),localStorage.getItem("TypeValue"),localStorage.getItem("SubtypeValue")]),Object(n.useEffect)((function(){m(re())}),[p,i,l,m]);var f=Object(n.useCallback)((function(e){m(ne(e)),localStorage.setItem("currentPage",e.toString())}),[m]);if(o)return r.a.createElement(Y.a,{to:"/profile"});if(!c)return r.a.createElement(Y.a,{to:"/"});var d=e.map((function(e){return r.a.createElement(ue,{id:e.id,imageUrl:e.imageUrl,name:e.name,artist:e.artist,key:e.id})}));return r.a.createElement("div",{className:q.a.wrap},u&&r.a.createElement(me,null),r.a.createElement("div",{className:q.a.mainBar},r.a.createElement("button",{onClick:function(){m(B())}},"Logout")),r.a.createElement("div",{className:q.a.mainContent},r.a.createElement("div",{className:q.a.selectsBar},r.a.createElement("div",{className:q.a.type__text},"Choose type"),r.a.createElement("select",{className:q.a.types,onChange:function(e){var t=e.currentTarget.value;m(te(t)),localStorage.setItem("TypeValue",t),localStorage.setItem("currentPage","1")},value:i},r.a.createElement("option",null," "),t.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{className:q.a.type__text},"Choose subtype"),r.a.createElement("select",{className:q.a.subtypes,onChange:function(e){var t=e.currentTarget.value;m(ae(t)),localStorage.setItem("SubtypeValue",t),localStorage.setItem("currentPage","1")},value:l},r.a.createElement("option",null," "),a.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("div",{className:q.a.cards},r.a.createElement("div",{className:q.a.cardsItems},d.length?d:r.a.createElement("div",{className:q.a.noResults},"Sorry, the search for the specified parameters did not return any results :(")),d.length?r.a.createElement(Ee,{changePageNumber:f,currentPage:p,itemsOnPage:4,totalItems:s}):"")))},ge=a(11),be=a.n(ge),ve=a(139),Se=a(136),Oe=Object(O.a)((function(e){return Object(ve.a)({root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}})}));function ye(){var e=Oe();return r.a.createElement("div",{className:e.root},r.a.createElement(Se.a,null))}var Pe=function(){var e=Object(z.c)((function(e){return e.auth.isLoggedIn})),t=Object(z.c)((function(e){return e.profile.card})),a=Object(z.c)((function(e){return e.profile.profileMode})),c=(Object(z.c)((function(e){return e.app.isInitialized})),Object(z.b)());Object(n.useEffect)((function(){var e=localStorage.getItem("profileId");c(le(e||""))}),[c]);var o=Object(n.useCallback)((function(){c(B())}),[c]);return a?e?t?r.a.createElement("div",{key:t.id,className:be.a.wrap},r.a.createElement("div",{className:be.a.profileBar},r.a.createElement("button",{onClick:function(){c(ie(null)),c(oe(!1)),localStorage.setItem("profileMode",JSON.stringify(!1))}},"Back"),r.a.createElement("button",{onClick:o},"Logout")),r.a.createElement("div",{className:be.a.profileContent},r.a.createElement("div",{className:be.a.profileContent__image},r.a.createElement("img",{src:t.imageUrlHiRes,alt:""}),r.a.createElement("span",null,t.attacks?t.attacks[0].text:"No description")),r.a.createElement("div",{className:be.a.profileContent__description},r.a.createElement("div",{className:be.a.description__name},r.a.createElement("div",null,"Pokemon name: ",r.a.createElement("span",{className:be.a.bold},t.name)),r.a.createElement("div",null,"Type: ",r.a.createElement("span",{className:be.a.bold},t.types?t.types[0]:"No data")),r.a.createElement("div",null,"SubType: ",r.a.createElement("span",{className:be.a.bold},t.subtype))),r.a.createElement("div",{className:be.a.description__char},r.a.createElement("div",null,"attackDamage: ",r.a.createElement("span",{className:be.a.bold},t.attacks?t.attacks[0].damage:"No data")),r.a.createElement("div",null,"attackCost: ",r.a.createElement("span",{className:be.a.bold},t.attacks?t.attacks[0].cost:"No data")),r.a.createElement("div",null,"resistances: type: ",t.resistances?r.a.createElement("span",{className:be.a.bold},t.resistances[0].type):r.a.createElement("span",{className:be.a.bold},"No data"),"value: ",t.resistances?r.a.createElement("span",{className:be.a.bold},t.resistances[0].value):r.a.createElement("span",{className:be.a.bold},"No data")),r.a.createElement("div",null,"evolvesFrom: ",t.evolvesFrom?r.a.createElement("span",{className:be.a.bold},t.evolvesFrom):r.a.createElement("span",{className:be.a.bold},"No data")))))):r.a.createElement(ye,null):(c(oe(!a)),r.a.createElement(Y.a,{to:"/"})):r.a.createElement(Y.a,{to:"/main"})},Ie=a(74),Ne=a.n(Ie),he=function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.auth.isLoggedIn})),a=Object(z.c)((function(e){return e.app.isInitialized})),n=Object(N.a)({initialValues:{login:"",password:""},validate:function(e){var t={};return e.login||(t.login="Required field"),e.password||(t.password="Required field"),t},onSubmit:function(t){var a;e((a=t,function(e){M(a).then((function(t){e(D(!0)),localStorage.setItem("isLoggedIn",JSON.stringify(!0))})).catch((function(t){e(V(!0)),e(L(t))}))}))}});return t?r.a.createElement(Y.a,{to:"/confirmation"}):r.a.createElement("div",{className:Ne.a.login_wrap},a&&r.a.createElement(G,null),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement(m,{title:"Login",type:"text",name:"login",formikProps:Object(i.a)({},n.getFieldProps("login"))}),n.errors.login?r.a.createElement("div",null,n.errors.login):null,r.a.createElement(m,{title:"Password",type:"password",name:"password",formikProps:Object(i.a)({},n.getFieldProps("password"))}),n.errors.password?r.a.createElement("div",null,n.errors.password):null,r.a.createElement(g,null)))},je=a(75),Te=a.n(je),ke=function(){return r.a.createElement("div",{className:Te.a.wrap},"Sorry, the page was not found :(")};var we=function(){var e=Object(z.b)();return Object(n.useEffect)((function(){"true"===localStorage.getItem("isLoggedIn")&&(e(D(!0)),e(U(!0)))}),[e]),Object(n.useEffect)((function(){"true"===localStorage.getItem("profileMode")&&e(oe(!0))}),[e]),r.a.createElement("div",{className:"App"},r.a.createElement(Y.d,null,r.a.createElement(Y.b,{exact:!0,path:"/",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(Y.b,{path:"/confirmation",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(Y.b,{path:"/main",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(Y.b,{path:"/profile",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(Y.b,{path:"*",render:function(){return r.a.createElement(ke,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(30),Me=a(34),Ae=a(76),xe=Object(Me.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(i.a)({},e,{isLoggedIn:t.value});case"APP/SET-IS-CONFIRMED":return Object(i.a)({},e,{isConfirm:t.value});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-ERROR":return Object(i.a)({},e,{error:t.error});case"APP/SET-IS-INITIALIZED":return Object(i.a)({},e,{isInitialized:t.value});default:return Object(i.a)({},e)}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN/SET-CARDS":return Object(i.a)({},e,{cards:t.cards});case"MAIN/SET-TYPES":return Object(i.a)({},e,{types:t.types});case"MAIN/SET-SUBTYPES":return Object(i.a)({},e,{subtypes:t.subtypes});case"MAIN/SET-TYPE-FILTER":return Object(i.a)({},e,{filterTypeValue:t.filterTypeValue});case"MAIN/SET-SUBTYPE-FILTER":return Object(i.a)({},e,{filterSubtypeValue:t.filterSubtypeValue});case"MAIN/SET-SUPERTYPE-FILTER":return Object(i.a)({},e,{filterSubtypeValue:t.filterSupertypeValue});case"MAIN/SET-POPUP-MODE":return Object(i.a)({},e,{popupMode:!e.popupMode});case"MAIN/SET-POPUP-SRC":return Object(i.a)({},e,{popupSrc:t.popupSrcValue});case"MAIN/SET-TOTAL-COUNT":return Object(i.a)({},e,{totalCount:t.count});case"MAIN/SET-PAGE":return Object(i.a)({},e,{page:t.page});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/SET-PROFILE-MODE":return Object(i.a)({},e,{profileMode:t.value});case"PROFILE/GET-CARD":return Object(i.a)({},e,{card:t.card});default:return e}}}),Re=Object(Me.d)(xe,Object(Me.a)(Ae.a));window.store=Re,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce.a,null,r.a.createElement(z.a,{store:Re},r.a.createElement(we,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,a){e.exports={pagination:"Pagination_pagination__1eiOl",pagination__pages:"Pagination_pagination__pages__LUIXG",pagination__btn:"Pagination_pagination__btn__COllI",pagination__btn_active:"Pagination_pagination__btn_active__26-zc",pagination__space:"Pagination_pagination__space__29h3i"}},22:function(e,t,a){e.exports={wrap:"MainScreen_wrap__1H_za",mainBar:"MainScreen_mainBar__3qFFQ",mainContent:"MainScreen_mainContent__x2Uug",selectsBar:"MainScreen_selectsBar__1bafh",types:"MainScreen_types__wagow",subtypes:"MainScreen_subtypes__R3W4V",cards:"MainScreen_cards__VkSKV",cardsItems:"MainScreen_cardsItems__FARji",first:"MainScreen_first__3StwW",noResults:"MainScreen_noResults__1b3Sa",type__text:"MainScreen_type__text__3W-Qz"}},48:function(e,t,a){e.exports={wrap:"PokemonCard_wrap__2J18n",image:"PokemonCard_image__3ZV_t",buttons:"PokemonCard_buttons__ov8_5"}},55:function(e,t,a){e.exports={wrap:"Popup_wrap__3XPNh",close:"Popup_close__13XKD",hide:"Popup_hide__2OshW"}},66:function(e,t,a){e.exports={wrap:"PasswordConfirmation_wrap__2LmI8"}},67:function(e,t,a){e.exports={input_area:"Input_input_area__Sxqvv"}},68:function(e,t,a){e.exports={button:"Button_button__6WJdf"}},69:function(e,t,a){e.exports=a.p+"static/media/go.6b4ffa55.svg"},74:function(e,t,a){e.exports={login_wrap:"Login_login_wrap__1fydi"}},75:function(e,t,a){e.exports={wrap:"PageNotFound_wrap__y_3YH"}},84:function(e,t,a){e.exports=a(114)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.f4505fb8.chunk.js.map