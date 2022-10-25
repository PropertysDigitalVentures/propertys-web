!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(S){c=function(t,n,e){return t[n]=e}}function g(t,n,e,o){var i=n&&n.prototype instanceof m?n:m,r=Object.create(i.prototype),a=new w(o||[]);return r._invoke=function(t,n,e){var o="suspendedStart";return function(i,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw r;return y()}for(e.method=i,e.arg=r;;){var a=e.delegate;if(a){var s=M(a,e);if(s){if(s===b)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var c=l(t,n,e);if("normal"===c.type){if(o=e.done?"completed":"suspendedYield",c.arg===b)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(o="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),r}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(S){return{type:"throw",arg:S}}}n.wrap=g;var b={};function m(){}function h(){}function p(){}var d={};c(d,r,function(){return this});var O=Object.getPrototypeOf,u=O&&O(O(x([])));u&&u!==e&&o.call(u,r)&&(d=u);var _=p.prototype=m.prototype=Object.create(d);function P(t){["next","throw","return"].forEach(function(n){c(t,n,function(t){return this._invoke(n,t)})})}function C(t,n){function e(i,r,a,s){var c=l(t[i],t,r);if("throw"!==c.type){var g=c.arg,b=g.value;return b&&"object"==typeof b&&o.call(b,"__await")?n.resolve(b.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):n.resolve(b).then(function(t){g.value=t,a(g)},function(t){return e("throw",t,a,s)})}s(c.arg)}var i;this._invoke=function(t,o){function r(){return new n(function(n,i){e(t,o,n,i)})}return i=i?i.then(r,r):r()}}function M(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,M(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=l(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function f(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function v(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function x(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:y}}function y(){return{value:void 0,done:!0}}return h.prototype=p,c(_,"constructor",p),c(p,"constructor",h),h.displayName=c(p,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},P(C.prototype),c(C.prototype,a,function(){return this}),n.AsyncIterator=C,n.async=function(t,e,o,i,r){void 0===r&&(r=Promise);var a=new C(g(t,e,o,i),r);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},P(_),c(_,s,"Generator"),c(_,r,function(){return this}),c(_,"toString",function(){return"[object Generator]"}),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},n.values=x,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(v),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,o){return a.type="throw",a.arg=t,n.next=e,o&&(n.method="next",n.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var s=o.call(r,"catchLoc"),c=o.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=n,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),v(e),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var i=o.arg;v(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:x(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),b}},n}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{M4UK:function(e,i,r){"use strict";r.r(i),r.d(i,"CompanyModule",function(){return M});var a,s=r("tyNb"),c=r("ofXK"),g=r("6NWb"),l=r("mrSG"),b=r("fXoL"),m=r("AytR"),h=r("tk/3"),p=((a=function(){function e(t){n(this,e),this.http=t}return o(e,[{key:"getMediumPosts",value:function(){return Object(l.a)(this,void 0,void 0,t().mark(function n(){var e;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("".concat(m.a.netlifyFnServer,"get-medium-posts")).toPromise();case 2:return e=t.sent,t.abrupt("return",(console.log("result from medium",e),[{id:"b969ac62a46b",name:"About Medium",description:"What is this thing and how does it work?",url:"https://medium.com/about",imageUrl:"https://cdn-images-1.medium.com/fit/c/200/200/0*ae1jbP_od0W6EulE.jpeg"},{id:"b45573563f5a",name:"Developers",description:"Medium\u2019s Developer resources",url:"https://medium.com/developers",imageUrl:"https://cdn-images-1.medium.com/fit/c/200/200/1*ccokMT4VXmDDO1EoQQHkzg@2x.png"},{id:"b969ac62a46b",name:"About Medium",description:"What is this thing and how does it work?",url:"https://medium.com/about",imageUrl:"https://cdn-images-1.medium.com/fit/c/200/200/0*ae1jbP_od0W6EulE.jpeg"},{id:"b45573563f5a",name:"Developers",description:"Medium\u2019s Developer resources",url:"https://medium.com/developers",imageUrl:"https://cdn-images-1.medium.com/fit/c/200/200/1*ccokMT4VXmDDO1EoQQHkzg@2x.png"}]));case 4:case"end":return t.stop()}},n,this)}))}}]),e}()).\u0275fac=function(t){return new(t||a)(b.Wb(h.a))},a.\u0275prov=b.Jb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),d=r("pI66");function O(t,n){if(1&t&&(b.Sb(0,"li"),b.Sb(1,"a",70),b.Ob(2,"img",71),b.Sb(3,"div",72),b.Sb(4,"h4"),b.vc(5),b.Rb(),b.Sb(6,"p"),b.vc(7),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t){var e=n.$implicit;b.Cb(1),b.gc("href",e.url,b.oc),b.Cb(1),b.hc("src",e.imageUrl,b.oc),b.Cb(3),b.wc(e.name),b.Cb(2),b.wc(e.description)}}var u,_,P=((u=function(){function e(t,o){n(this,e),this._route=t,this.mediumApiService=o,this.mediumPosts=[]}return o(e,[{key:"onScroll",value:function(t){}},{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,t().mark(function n(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._route.fragment.subscribe(function(t){var n=document.querySelector("#".concat(t));setTimeout(function(){n&&window.scrollTo({top:n.offsetTop-60,behavior:"smooth"})},0)}),t.next=3,this.mediumApiService.getMediumPosts();case 3:this.mediumPosts=t.sent;case 4:case"end":return t.stop()}},n,this)}))}}]),e}()).\u0275fac=function(t){return new(t||u)(b.Nb(s.a),b.Nb(p))},u.\u0275cmp=b.Hb({type:u,selectors:[["app-company"]],hostBindings:function(t,n){1&t&&b.Zb("scroll",function(t){return n.onScroll(t)},!1,b.lc)},decls:232,vars:1,consts:[[1,"banner"],[1,"banner-inner"],[1,"main-area"],[1,"slogan-container"],["id","slogan-text",1,"slogan-text"],["target","_blank","href","https://propertys-nft.gitbook.io/propertys-whitepaper/",1,"cta-btn"],[1,"promo-image"],["src","/assets/images/banner-img.png","width","600"],["id","philosophy",1,"philosophy"],[1,"section-title-container"],[1,"section-title"],["id","team",1,"team"],[1,"team-list"],["src","/assets/images/shapes/blob-green-1.png","width","240",1,"blob-bg"],["href","https://twitter.com/KonradProbst","target","_blank"],[1,"profile-link"],[1,"fab","fa-twitter"],[1,"image-profile-block"],["src","/assets/images/team/konrad_probst.webp","width","150","alt","Konrad Probst"],[1,"title"],[1,"team-member-description"],[1,"description"],["src","/assets/images/shapes/blob-purple-2.png","width","240",1,"blob-bg"],["href","https://twitter.com/bluberry_cem","target","_blank"],["src","/assets/images/team/cem_gedik.webp","width","150","alt","CEM"],["src","/assets/images/shapes/blob-blue-3.png","width","240",1,"blob-bg","rotate-160"],["href","https://twitter.com/jofnd_eth","target","_blank"],["src","/assets/images/team/jo_effendy.webp","width","150","alt","Jo"],["src","/assets/images/shapes/blob-red-4.png","width","240",1,"blob-bg","rotate-80"],["href","https://twitter.com/daniel_datsenko","target","_blank"],["src","/assets/images/team/daniel_datsenko.webp","width","150","alt","Daniel"],["src","/assets/images/shapes/blob-orange-2.png","width","240",1,"blob-bg","rotate-120"],["href","https://twitter.com/mischmeisterp","target","_blank"],["src","/assets/images/team/felix_weigelt.webp","width","150","alt","Felix"],["src","/assets/images/shapes/blob-purple-2.png","width","240",1,"blob-bg","rotate-120"],[1,"team-member"],[1,"image-profile-block",2,"border-radius","100px","overflow","hidden"],["src","/assets/images/team/enlightened-llama.webp","width","150","alt","EnlightenedLlama"],["src","/assets/images/shapes/blob-yellow-3.png","width","240",1,"blob-bg"],[1,"image-profile-block","image-crispy"],["src","/assets/images/team/stevie.webp","width","150","alt","Stevie"],["src","/assets/images/shapes/blob-purple-2.png","width","240",1,"blob-bg","rotate"],["href","https://twitter.com/OwlTower","target","_blank"],["src","/assets/images/team/marc.webp","width","150"],["src","/assets/images/shapes/blob-green-4.png","width","240",1,"blob-bg","rotate-40"],["href","https://twitter.com/beijingdou","target","_blank"],["src","/assets/images/team/josh_ong.webp","width","150"],["src","/assets/images/shapes/blob-yellow-3.png","width","240",1,"blob-bg","rotate-120"],["href","https://twitter.com/saml314","target","_blank"],[1,"image-container","image-crispy"],["src","/assets/images/team/sam_li.webp","width","150"],["src","/assets/images/shapes/blob-blue-4.png","width","240",1,"blob-bg","rotate-160"],["href","https://twitter.com/KevinSusanto","target","_blank"],["src","/assets/images/team/kevin_susanto.webp","width","150"],["src","/assets/images/shapes/blob-red-1.png","width","240",1,"blob-bg"],["src","/assets/images/team/irene_lee.webp","width","150"],["id","stats",1,"stats"],[1,"stats-list"],["id","news",1,"news"],[1,"news-list"],[4,"ngFor","ngForOf"],["id","careers",1,"careers"],[1,"columns"],[1,"column"],["src","/assets/images/team-image.png","width","300"],[1,"primary-color-emphasis"],["target","_blank","href","https://jobs.wrk.xyz/propertysnft",1,"cta-btn"],[1,"text"],[1,"fas","fa-arrow-right"],["id","contact"],["target","_blank",3,"href"],["width","70",3,"src"],[1,"body"]],template:function(t,n){1&t&&(b.Sb(0,"section",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"div",3),b.Sb(4,"div",4),b.Sb(5,"div"),b.vc(6," Facilitating Peoples Journey Into the Metaverse for Early Explores & Disruptors "),b.Sb(7,"a",5),b.vc(8,"Schedule Strategy Call"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(9,"div",6),b.Ob(10,"img",7),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(11,"section",8),b.Sb(12,"div",9),b.Sb(13,"div",10),b.vc(14,"Our Philosophy"),b.Rb(),b.Sb(15,"h2"),b.vc(16,"Building on the next version of entertainment in the digital world"),b.Rb(),b.Rb(),b.Sb(17,"p"),b.vc(18,"Property\u2019s was formed to provide space in the metaverse for curious explorers of an upcoming digital paradigm shift."),b.Rb(),b.Sb(19,"p"),b.vc(20,"We believe that interaction with humans via web3 infrastructure will change how the world will express itself and form new relationships online."),b.Rb(),b.Sb(21,"p"),b.vc(22,"As a metaverse experience developer company & a 3.0 agency, we\u2019re creating digital property, adventures & stories on top of different blockchain-based metaverse platforms, helping to discover the usability of metaverse networks, and onboard new web 3.0 interactives."),b.Rb(),b.Rb(),b.Sb(23,"section",11),b.Sb(24,"div",9),b.Sb(25,"div",10),b.vc(26,"Team"),b.Rb(),b.Sb(27,"h2"),b.vc(28,"We're web 3.0 Natives and premise challengers, with passion for building"),b.Rb(),b.Rb(),b.Sb(29,"ul",12),b.Sb(30,"li"),b.Ob(31,"img",13),b.Sb(32,"a",14),b.Sb(33,"div",15),b.Ob(34,"i",16),b.Rb(),b.Sb(35,"div",17),b.Ob(36,"img",18),b.Rb(),b.Sb(37,"h3"),b.vc(38,"Konrad Probst"),b.Rb(),b.Sb(39,"div",19),b.vc(40,"Chief Executive Officer"),b.Rb(),b.Sb(41,"div",20),b.Sb(42,"p",21),b.vc(43," Strategic Direction, Business Development, Stakeholder Relations, Coordination. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(44,"li"),b.Ob(45,"img",22),b.Sb(46,"a",23),b.Sb(47,"div",15),b.Ob(48,"i",16),b.Rb(),b.Sb(49,"div",17),b.Ob(50,"img",24),b.Rb(),b.Sb(51,"h3"),b.vc(52,"Cem Gedik "),b.Rb(),b.Sb(53,"div",19),b.vc(54,"Creative Director"),b.Rb(),b.Sb(55,"div",20),b.Sb(56,"p",21),b.vc(57," Visual Branding, Lead Artist. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(58,"li"),b.Ob(59,"img",25),b.Sb(60,"a",26),b.Sb(61,"div",15),b.Ob(62,"i",16),b.Rb(),b.Sb(63,"div",17),b.Ob(64,"img",27),b.Rb(),b.Sb(65,"h3"),b.vc(66,"Jo Effendy"),b.Rb(),b.Sb(67,"div",19),b.vc(68,"Chief Growth Officer"),b.Rb(),b.Sb(69,"div",20),b.Sb(70,"p",21),b.vc(71," Strategic Direction, Community Growth & Management, Partnership Management. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(72,"li"),b.Ob(73,"img",28),b.Sb(74,"a",29),b.Sb(75,"div",15),b.Ob(76,"i",16),b.Rb(),b.Sb(77,"div",17),b.Ob(78,"img",30),b.Rb(),b.Sb(79,"h3"),b.vc(80,"Daniel Datsenko "),b.Rb(),b.Sb(81,"div",19),b.vc(82,"Chief Marketing Officer"),b.Rb(),b.Sb(83,"div",20),b.Sb(84,"p",21),b.vc(85," Marketing, Communications, Business Development. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(86,"li"),b.Ob(87,"img",31),b.Sb(88,"a",32),b.Sb(89,"div",15),b.Ob(90,"i",16),b.Rb(),b.Sb(91,"div",17),b.Ob(92,"img",33),b.Rb(),b.Sb(93,"h3"),b.vc(94,"Felix Weigelt (misch)"),b.Rb(),b.Sb(95,"div",19),b.vc(96,"Head of Community Management"),b.Rb(),b.Sb(97,"div",20),b.Sb(98,"p",21),b.vc(99," Administration, Community Moderation, Coordination. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(100,"li"),b.Ob(101,"img",34),b.Sb(102,"div",35),b.Sb(103,"div",36),b.Ob(104,"img",37),b.Rb(),b.Sb(105,"h3"),b.vc(106,"Enlightened Llama"),b.Rb(),b.Sb(107,"div",19),b.vc(108,"Product/Business developer"),b.Rb(),b.Sb(109,"div",20),b.Sb(110,"p",21),b.vc(111," Market analysis, Feature development, Partnership management. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(112,"li"),b.Ob(113,"img",38),b.Sb(114,"div",35),b.Sb(115,"div",39),b.Ob(116,"img",40),b.Rb(),b.Sb(117,"h3"),b.vc(118,"Stevie"),b.Rb(),b.Sb(119,"div",19),b.vc(120,"Hybrid FS Developer"),b.Rb(),b.Sb(121,"div",20),b.Sb(122,"p",21),b.vc(123," Web Design, Web 3.0 Integration. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Ob(124,"br"),b.Ob(125,"br"),b.Sb(126,"h2"),b.vc(127,"The Advisory Board"),b.Rb(),b.Sb(128,"ul",12),b.Sb(129,"li"),b.Ob(130,"img",41),b.Sb(131,"a",42),b.Sb(132,"div",15),b.Ob(133,"i",16),b.Rb(),b.Sb(134,"div",17),b.Ob(135,"img",43),b.Rb(),b.Sb(136,"h3"),b.vc(137,"HoodooOwl"),b.Rb(),b.Sb(138,"div",19),b.vc(139,"Private Wealth Manager"),b.Rb(),b.Sb(140,"div",20),b.Sb(141,"p",21),b.vc(142," Business Development, Financial Advisor, Investor Relations. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(143,"li"),b.Ob(144,"img",44),b.Sb(145,"a",45),b.Sb(146,"div",15),b.Ob(147,"i",16),b.Rb(),b.Sb(148,"div",17),b.Ob(149,"img",46),b.Rb(),b.Sb(150,"h3"),b.vc(151,"Josh Ong"),b.Rb(),b.Sb(152,"div",19),b.vc(153,"Partner at Causeway Strategies"),b.Rb(),b.Sb(154,"div",20),b.Sb(155,"p",21),b.vc(156," Sandbox Ambassador, Communication Advisor. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(157,"li"),b.Ob(158,"img",47),b.Sb(159,"a",48),b.Sb(160,"div",15),b.Ob(161,"i",16),b.Rb(),b.Sb(162,"div",17),b.Sb(163,"div",49),b.Ob(164,"img",50),b.Rb(),b.Rb(),b.Sb(165,"h3"),b.vc(166,"Sam Li"),b.Rb(),b.Sb(167,"div",19),b.vc(168,"Partner Calvert Drive Ventures"),b.Rb(),b.Sb(169,"div",20),b.Sb(170,"p",21),b.vc(171," Investor Relations, IP & Legal Advisor. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(172,"li"),b.Ob(173,"img",51),b.Sb(174,"a",52),b.Sb(175,"div",15),b.Ob(176,"i",16),b.Rb(),b.Sb(177,"div",17),b.Ob(178,"img",53),b.Rb(),b.Sb(179,"h3"),b.vc(180,"Kevin Susanto"),b.Rb(),b.Sb(181,"div",19),b.vc(182,"Founder Envigo"),b.Rb(),b.Sb(183,"div",20),b.Sb(184,"p",21),b.vc(185," Forbes 30 under 30 Entrepreneur, Business Advisor. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(186,"li"),b.Ob(187,"img",54),b.Sb(188,"div",35),b.Sb(189,"div",17),b.Ob(190,"img",55),b.Rb(),b.Sb(191,"h3"),b.vc(192,"Dr. Irene Lee"),b.Rb(),b.Sb(193,"div",19),b.vc(194,"(Social-) Entrepreneur"),b.Rb(),b.Sb(195,"div",20),b.Sb(196,"p",21),b.vc(197," Business Advisor, Strategic Network. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(198,"section",56),b.Sb(199,"div",9),b.Sb(200,"div",10),b.vc(201,"Our Stats"),b.Rb(),b.Sb(202,"h2"),b.vc(203,"A Track Record of success"),b.Rb(),b.Sb(204,"ul",57),b.Sb(205,"li"),b.Ob(206,"h4"),b.Ob(207,"p"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(208,"section",58),b.Sb(209,"div",9),b.Sb(210,"div",10),b.vc(211,"Our Blog"),b.Rb(),b.Sb(212,"h2"),b.vc(213,"Learn More About Property's"),b.Rb(),b.Rb(),b.Sb(214,"ul",59),b.uc(215,O,8,4,"li",60),b.Rb(),b.Rb(),b.Sb(216,"section",61),b.Sb(217,"div",62),b.Sb(218,"div",63),b.Ob(219,"img",64),b.Rb(),b.Sb(220,"div",63),b.Sb(221,"h2",19),b.vc(222,"Grow "),b.Sb(223,"span",65),b.vc(224,"With Us"),b.Rb(),b.Rb(),b.Sb(225,"p"),b.vc(226," Learn about our Web3 career opportunities and get to know the team behind Property's. "),b.Rb(),b.Sb(227,"a",66),b.Sb(228,"div",67),b.vc(229," Our Careers "),b.Rb(),b.Ob(230,"i",68),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Ob(231,"app-how-can-i-help",69)),2&t&&(b.Cb(215),b.gc("ngForOf",n.mediumPosts))},directives:[c.i,d.a],styles:['[_nghost-%COMP%]   section[_ngcontent-%COMP%]{padding:135px 0;width:1220px;margin:0 auto}[_nghost-%COMP%]   section.banner[_ngcontent-%COMP%]{padding-bottom:0}[_nghost-%COMP%]   .section-title-container[_ngcontent-%COMP%]{margin-bottom:80px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;height:620px;padding-top:170px;margin-top:0!important;position:relative;display:flex}[_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%]{width:1220px;margin:100px auto 50px;position:relative}[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%]{position:absolute;right:0;top:calc(50% - 80px);transform:translateY(-50%)}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 80px);width:530px;transform:translateY(-50%)}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]{font-family:Futura Round Bold,arial,sans-serif;font-size:40px;line-height:110%;margin-bottom:30px;display:flex}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:150%;font-family:Futura Round Regular,arial,sans-serif}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   .highlighted[_ngcontent-%COMP%]{color:#7500ed;position:relative}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:100px;display:block;margin-right:10px}[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]{margin-top:20px}[_nghost-%COMP%]   .full-width-container[_ngcontent-%COMP%]{background:#fafafa;width:100%}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]{width:1220px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:0;margin-top:100px;justify-content:center}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:60px;padding-right:9px;border-radius:3px;width:350px;box-sizing:border-box;display:flex;flex-direction:column;position:relative;justify-content:center;z-index:0}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:240px!important;left:50%;top:50%;transform:translateY(-50%) translateX(-50%)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-40[_ngcontent-%COMP%]{transform:translateY(-50%) translateX(-50%) rotate(40deg)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-80[_ngcontent-%COMP%]{transform:translateY(-50%) translateX(-50%) rotate(80deg)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-120[_ngcontent-%COMP%]{transform:translateY(-50%) translateX(-50%) rotate(120deg)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-160[_ngcontent-%COMP%]{transform:translateY(-50%) translateX(-50%) rotate(160deg)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{z-index:3}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:45px 15px 25px;justify-content:center;color:#222;position:relative;width:100%;z-index:2;margin:0 auto;box-sizing:border-box;border-radius:20px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]{width:calc(100% - 20px)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{width:100%;position:absolute;content:"";height:380px;opacity:0;top:0;left:50%;z-index:2;z-index:0;border-radius:20px;background:hsla(0,0%,100%,.5);box-shadow:0 0 25px rgba(0,0,0,.2);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);transform:translateX(-50%);transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .team-member[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{z-index:3}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:hover   .team-member-description[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .profile-link[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:after{opacity:1}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{font-size:20px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.05)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:19px;display:flex;align-items:center;font-family:Futura Round Medium,arial,sans-serif;text-align:center;justify-content:center;height:30px;transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]{font-size:16px;font-weight:900;padding:3px;position:absolute;top:20px;right:10px;width:20px;opacity:0;height:20px;border-radius:4px;display:flex;z-index:2;align-items:center;justify-content:center;color:#7500ed;transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.3s ease-in-out;font-size:26px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]{position:relative;height:100%;min-width:150px;width:150px;height:150px;margin:0 auto 20px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-crispy[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block.image-crispy[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:150px;width:150px;border-radius:4px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100px;height:100%;-o-object-fit:contain;object-fit:contain;transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;text-align:center;font-family:Futura Round Regular,arial,sans-serif;margin-bottom:10px;line-height:160%;height:30px;opacity:.7;transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]{position:absolute;top:270px;width:100%;opacity:0;text-align:center;transition:.3s ease-in-out}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Futura Round Regular,arial,sans-serif;line-height:140%;font-weight:100;font-size:16px}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Futura Round Bold,arial,sans-serif;font-size:28px;margin-bottom:20px}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{display:flex;margin-top:50px;align-items:center;justify-content:center}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child{margin-right:80px;margin-left:80px;min-width:510px}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]{width:500px;margin:0 auto}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:60px;padding-bottom:30px;position:relative}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{transition:.15s ease-in-out}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";height:1px;width:200px;background:#aaa;opacity:.5;position:absolute;bottom:0;left:50%;transform:translateX(-50%)}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;text-align:left;align-items:center;color:#222}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{color:#aa3ffc}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:80px;border-radius:4px;margin-right:40px}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .philosophy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;width:800px;margin:0 auto 30px}@media only screen and (min-width:0px) and (max-width:700px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:calc(100% - 40px);padding:50px 0}[_nghost-%COMP%]   .section-title-container[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{margin-top:0;padding-top:0;height:auto}[_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%]{width:calc(100% - 20px);margin-bottom:0}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%]{order:0;width:100%;margin-bottom:40px;right:0}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%;margin:0 auto 30px;display:block;text-align:center}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]{order:1;width:calc(100% - 30px);margin:0 auto;text-align:center}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]{font-size:34px;min-height:75px}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]{position:relative;top:auto;left:auto;transform:none}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]{width:calc(100% - 40px)}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:0}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-direction:column;padding:0;margin-right:0}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]{min-width:150px;width:150px;height:150px;margin:0 auto 15px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%!important}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;justify-content:center;margin-bottom:7px}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(100% - 50px)!important;display:block;margin:0 auto 20px}[_nghost-%COMP%]   .philosophy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-list[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{margin-left:0;text-align:center}[_nghost-%COMP%]   .careers[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child{margin:0;min-width:100%}}']}),u),C=r("xJIP"),M=((_=o(function t(){n(this,t)})).\u0275fac=function(t){return new(t||_)},_.\u0275mod=b.Lb({type:_,bootstrap:[P]}),_.\u0275inj=b.Kb({providers:[],imports:[[c.b,g.a,C.a,s.e.forChild([{path:"",component:P}])]]}),_)},pI66:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("fXoL"),a=function(){var t=o(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-how-can-i-help"]],decls:19,vars:0,consts:[[1,"full-width-container"],["id","help"],[1,"wrapper"],[1,"columns"],[1,"column"],[1,"title"],[1,"primary-color-emphasis"],["target","_blank","href","",1,"cta-btn"],["src","/assets/images/about-us-peter.png","width","300"]],template:function(t,n){1&t&&(r.Sb(0,"div",0),r.Sb(1,"section",1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.Sb(4,"div",4),r.Sb(5,"h2",5),r.vc(6,"How can I "),r.Sb(7,"span",6),r.vc(8,"help?"),r.Rb(),r.Rb(),r.Sb(9,"p"),r.vc(10," Hello there, I'm Peter Property! "),r.Ob(11,"br"),r.vc(12," Property's overseer & your personal guide. "),r.Ob(13,"br"),r.vc(14," Have any questions? Click the button! "),r.Rb(),r.Sb(15,"a",7),r.vc(16,"Get Help"),r.Rb(),r.Rb(),r.Sb(17,"div",4),r.Ob(18,"img",8),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb())},styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{padding:1px 0 0;width:1220px;margin:0 auto}[_nghost-%COMP%]   .full-width-container[_ngcontent-%COMP%]{background:#fafafa;width:100%}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Futura Round Bold,arial,sans-serif;font-size:28px;margin-bottom:20px}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]{display:flex;margin-top:50px;align-items:center;justify-content:center}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child{margin-left:80px}@media only screen and (min-width:0px) and (max-width:700px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:calc(100% - 20px)!important;margin:60px auto 40px;padding-bottom:40px}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]{flex-direction:column;position:relative}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child{position:absolute;opacity:.2;top:0;width:100%;margin-left:0}[_nghost-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]{width:190px;position:absolute;top:-36px;right:0;z-index:-1}}"]}),t}()},xJIP:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var r=i("tyNb"),a=i("fXoL"),s=function(){var t=o(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[r.e]]}),t}()}}])}();