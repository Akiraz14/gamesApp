import{e as $}from"./chunk-S3S6VGSP.js";import{Bb as h,Hb as N,Ia as u,Ib as C,Jb as S,Ka as p,Na as n,Oa as i,Pa as r,Qa as P,Sa as k,Ta as v,U as A,Va as l,Wa as f,X as d,Xa as x,aa as F,ba as z,bb as g,ca as b,cb as D,da as O,db as B,eb as w,fb as E,ra as T,vb as G,wa as I,wb as _,xa as y,xb as U,za as s,zb as V}from"./chunk-OBIQKGAT.js";function K(t,e){if(t&1&&(n(0,"div",2)(1,"p",17),l(2,"GamesApp"),i(),n(3,"p",18),l(4),n(5,"a",19),l(6,"Akiraz14"),i()(),n(7,"a",20)(8,"figcaption",15),r(9,"img",21),n(10,"figcaption"),l(11,"Github"),i()()()()),t&2){let c=e.$implicit;s(4),x("",c("createdBy")," ")}}var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-footer"]],standalone:!0,features:[g],decls:29,vars:0,consts:[[1,"mt-5"],[1,"d-flex","align-items-center","text-center","mt-5","mb-3"],[1,"col-4"],[1,"container"],[1,"row"],[1,"col"],["target","_blank","href","https://the-trivia-api.com/",1,"link-info","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],["src","./assets/images/logos/the-trivia-api.png","alt","The trivia api",1,"img-fluid","rounded","logo-api"],["target","_blank","href","https://pokeapi.co/",1,"link-info","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],["src","./assets/images/logos/pokeapi.png","alt","PokeApi",1,"img-fluid","logo-api"],["class","col-4",4,"transloco"],[1,"col-4","d-flex","justify-content-center"],["target","_blank","href","https://angular.dev/",1,"link-info","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],["src","./assets/images/logos/icons8-angular.svg","alt","Angular",1,"logo"],["target","_blank","href","https://getbootstrap.com/docs/5.3/getting-started/introduction/",1,"link-info","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],[1,"ms-3"],["src","./assets/images/logos/icons8-bootstrap.svg","alt","Bootstrap",1,"logo"],[1,"fs-4","fs-honk"],[1,"fs-6"],["target","_blank","href","https://akiraz14.github.io/",1,"link-warning","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],["target","_blank","href","https://github.com/Akiraz14/gamesApp/",1,"link-info","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover"],["src","./assets/images/logos/icons8-github.svg","alt","Github",1,"logo"]],template:function(o,m){o&1&&(r(0,"hr",0),n(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6)(7,"figure"),r(8,"img",7),n(9,"figcaption"),l(10,"The Trivia Api v.1.0"),i()()()(),n(11,"div",5)(12,"a",8)(13,"figure"),r(14,"img",9),n(15,"figcaption"),l(16,"PokeApi v.2.0"),i()()()()()()(),u(17,K,12,1,"div",10),n(18,"div",11)(19,"a",12)(20,"figure"),r(21,"img",13),n(22,"figcaption"),l(23,"Angular v.17.1.1"),i()()(),n(24,"a",14)(25,"figcaption",15),r(26,"img",16),n(27,"figcaption"),l(28,"Bootstrap v.5.3"),i()()()()())},dependencies:[S,C],styles:[".logo[_ngcontent-%COMP%]{max-width:50px}.logo-api[_ngcontent-%COMP%]{max-width:120px}figcaption[_ngcontent-%COMP%]{font-size:.6rem}"]});let t=e;return t})();function Q(t,e){if(t&1){let c=P();n(0,"li")(1,"button",6),k("click",function(){let m=F(c).$implicit,L=v();return z(L.changeLanguage(m.code))}),n(2,"div",7)(3,"span",2),l(4),w(5,"lowercase"),i(),r(6,"img",3),i()()()}if(t&2){let c=e.$implicit;s(4),f(E(5,3,c.shorthand)),s(2),p("src",c.imgUrl,T)("alt",c.name)}}var H=(()=>{let e=class e{constructor(){this.translocoService=A(N),this.languages=[{code:"en",name:"English",shorthand:"ENG",imgUrl:"./assets/images/languages/en.png"},{code:"es",name:"Spanish",shorthand:"SPA",imgUrl:"./assets/images/languages/es.png"}],this._currentLanguage=y(this.languages[0]),this.currentLanguage=I(()=>this._currentLanguage())}ngOnInit(){let a=document.documentElement.getAttribute("lang")||"en";this.changeLanguage(a)}changeLanguage(a){a==="en"&&this._currentLanguage.set(this.languages[0]),a==="es"&&this._currentLanguage.set(this.languages[1]),this.translocoService.setActiveLang(a),document.documentElement.setAttribute("lang",a)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-language-menu"]],standalone:!0,features:[g],decls:8,vars:6,consts:[[1,"btn-group"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"flag","btn","dropdown-toggle"],[1,"me-1"],[3,"src","alt"],[1,"dropdown-menu"],[4,"ngFor","ngForOf"],[1,"btn",3,"click"],[1,"flag","d-flex","align-items-center"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"button",1)(2,"span",2),l(3),w(4,"lowercase"),i(),r(5,"img",3),i(),n(6,"ul",4),u(7,Q,7,5,"li",5),i()()),o&2&&(s(3),f(E(4,4,m.currentLanguage().shorthand)),s(2),p("src",m.currentLanguage().imgUrl,T)("alt",m.currentLanguage().name),s(2),p("ngForOf",m.languages))},dependencies:[h,_,V],styles:[".flag[_ngcontent-%COMP%]{display:flex;align-items:center}.flag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1rem;width:1.5rem;border-radius:4px}.dropdown-menu[_ngcontent-%COMP%]{min-width:auto}"]});let t=e;return t})();var W=t=>[t];function X(t,e){if(t&1&&(n(0,"li",10),l(1),i()),t&2){let c=e.$implicit,a=v().$implicit;p("routerLink",D(2,W,c.route)),s(),x(" ",a("sidemenu.items."+c.title)," ")}}function Y(t,e){if(t&1&&(n(0,"div")(1,"button",1),l(2," \u2261 "),n(3,"span",2),l(4),i()(),n(5,"div",3)(6,"div",4)(7,"h5",5),l(8),i(),r(9,"button",6),i(),n(10,"div",7)(11,"ul",8),u(12,X,2,4,"li",9),i()()()()),t&2){let c=e.$implicit,a=v();s(4),f(c("sidemenu.title")),s(4),f(c("sidemenu.title")),s(4),p("ngForOf",a.menuItems)}}var R=(()=>{let e=class e{constructor(){this.menuItems=[{title:"home",route:"/home"},{title:"games",route:"/games"},{title:"about",route:"/about"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-side-menu"]],standalone:!0,features:[g],decls:1,vars:0,consts:[[4,"transloco"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#menu","aria-controls","menu",1,"btn","btn-primary"],[1,"sidemenu-text"],["data-bs-scroll","true","tabindex","-1","id","menu","aria-labelledby","menuLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header","bg-primary","bg-gradient"],["id","menuLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body"],[1,"list-group"],["data-bs-dismiss","offcanvas","routerLinkActive","active","class","list-group-item",3,"routerLink",4,"ngFor","ngForOf"],["data-bs-dismiss","offcanvas","routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(o,m){o&1&&u(0,Y,13,3,"div",0)},dependencies:[h,_,$,S,C],styles:["@media screen and (max-width: 700px){.sidemenu-text[_ngcontent-%COMP%]{display:none}}"]});let t=e;return t})();function Z(t,e){t&1&&(b(),n(0,"svg",11),r(1,"use",12),i())}function ee(t,e){t&1&&(n(0,"div"),b(),n(1,"svg",11),r(2,"use",13),i()())}var te=(t,e)=>({"btn-outline-dark":t,"btn-outline-light":e}),q=(()=>{let e=class e{constructor(){this.currentTheme=y("dark")}ngOnInit(){let a=this.getCurrentTheme();this.currentTheme.set(a)}getCurrentTheme(){return document.documentElement.getAttribute("data-bs-theme")==="light"?"light":"dark"}changeTheme(){let a=this.getCurrentTheme()==="light"?"dark":"light";document.documentElement.setAttribute("data-bs-theme",a),this.currentTheme.set(a)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-theme-menu"]],standalone:!0,features:[g],decls:11,vars:6,consts:[["xmlns","http://www.w3.org/2000/svg",1,"d-none"],["id","check2","viewBox","0 0 16 16"],["d","M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"],["id","moon-stars-fill","viewBox","0 0 16 16"],["d","M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"],["d","M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"],["id","sun-fill","viewBox","0 0 16 16"],["d","M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"],[1,"btn",3,"ngClass","click"],["class","bi opacity-50 theme-icon ","width","1em","height","1em",4,"ngIf"],[4,"ngIf"],["width","1em","height","1em",1,"bi","opacity-50","theme-icon"],["href","#sun-fill"],["href","#moon-stars-fill"]],template:function(o,m){o&1&&(b(),n(0,"svg",0)(1,"symbol",1),r(2,"path",2),i(),n(3,"symbol",3),r(4,"path",4)(5,"path",5),i(),n(6,"symbol",6),r(7,"path",7),i()(),O(),n(8,"button",8),k("click",function(){return m.changeTheme()}),u(9,Z,2,0,"svg",9)(10,ee,3,0,"div",10),i()),o&2&&(s(8),p("ngClass",B(3,te,m.currentTheme()==="light",m.currentTheme()==="dark")),s(),p("ngIf",m.currentTheme()==="light"),s(),p("ngIf",m.currentTheme()==="dark"))},dependencies:[h,G,U],styles:[".bi[_ngcontent-%COMP%]{vertical-align:-.125em;fill:currentColor}"]});let t=e;return t})();var xe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[g],decls:10,vars:0,consts:[[1,"container-fluid","bg-primary","bg-gradient","sticky-top"],[1,"row","align-items-center","justify-content-between"],[1,"col","ms-3"],[1,"col","text-center","fs-honk"],[1,"col","d-flex","justify-content-end"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),r(3,"app-side-menu"),i(),n(4,"div",3)(5,"h1"),l(6,"GamesApp"),i()(),n(7,"div",4),r(8,"app-language-menu")(9,"app-theme-menu"),i()()())},dependencies:[H,R,q],styles:[".title[_ngcontent-%COMP%]{font-family:Cute Font,sans-serif;font-weight:400;font-style:normal}h1[_ngcontent-%COMP%]{font-size:calc(1.375rem + 2.5vw)}"]});let t=e;return t})();export{ie as a,xe as b};
