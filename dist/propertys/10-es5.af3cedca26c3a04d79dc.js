!function(){function t(t,r){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,r)}(t))||r&&t&&"number"==typeof t.length){i&&(t=i);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==i.return||i.return()}finally{if(a)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{nuUO:function(e,i,n){"use strict";n.r(i),n.d(i,"RentModule",function(){return w});var o=n("tyNb"),c=n("ofXK"),a=n("6NWb"),u=n("mrSG"),d=n("AytR"),h=n("fXoL"),l=n("cIOH"),y=n("q9MP"),f=n("0IaG"),P=n("bzJk"),p=n("mpho");function g(t,e){if(1&t&&(h.Sb(0,"tr"),h.Sb(1,"td"),h.xc(2),h.Rb(),h.Sb(3,"td",3),h.xc(4),h.Rb(),h.Rb()),2&t){var r=e.$implicit;h.Cb(2),h.zc(" ",r.address," "),h.Cb(2),h.zc(" ",r.amount," ")}}var m,C,b=((m=function(){function e(t,i,s){r(this,e),this.smartContractCoreService=t,this.eventMessengerService=i,this._dialog=s,this.streetViewToggled=!0,this.districtViewToggled=!0,this.cityViewToggled=!0,this.brixClaimLoading=!1,this.loadingPropertys=!0,this.isOnMainnet=!0,this.brixEarnedBreakdown=[],this.propertysHolders=["0x75dd8773c3dbc4e3346838fffd526043e07f59bd","0x302f23818ecc618f728beb5383195fc146123fc1","0x574a782a00dd152d98ff85104f723575d870698e","0x8983ad6d63d7ab3701d74e1e72fd9dadf113f3f9","0x6cc6f59f7016a83e1d7c5fad30cdd8c4cdb4aad1"],this.brixPropertyBonuses={"X AE X-II":{house:80,street:650,district:1600,city:4300},"Blue Bayside":{house:60,street:550,district:1e3,city:2e3},"Purple Palms":{house:50,street:500,district:900,city:1800},"Green Grove":{house:40,street:450,district:800,city:1600},"Yellow Yards":{house:30,street:400,district:700,city:1400},"Orange Oasis":{house:20,street:350,district:600,city:1200},"Beige Bay":{house:10,street:300,district:500,city:1e3},"Question Cat":{house:1200,street:0,district:0,city:0},"The Sunken City":{house:1200,street:0,district:0,city:0},"Le Tower":{house:1200,street:0,district:0,city:0},"Ancient Labyrinth":{house:1200,street:0,district:0,city:0},"Mount Proper":{house:1200,street:0,district:0,city:0},"Great Temple of Peter":{house:1200,street:0,district:0,city:0},"The Emperors Arena":{house:1200,street:0,district:0,city:0},"Secret Glass Pyramid":{house:1200,street:0,district:0,city:0},"The Money Pool":{house:1200,street:0,district:0,city:0},"Fort in the Leaves":{house:1200,street:0,district:0,city:0},"The Impossible Bridge":{house:600,street:0,district:0,city:0},"Peter's Great Wall":{house:600,street:0,district:0,city:0},"Candy Castle":{house:600,street:0,district:0,city:0},"Property's Stadium":{house:600,street:0,district:0,city:0},"Cathedral of Wisdom":{house:600,street:0,district:0,city:0},"Palace of Eternity":{house:600,street:0,district:0,city:0},"Spiky Singers":{house:250,street:0,district:0,city:0},"The Guardian":{house:250,street:0,district:0,city:0},"Casa Blanca":{house:250,street:0,district:0,city:0},"Mystic Rocks":{house:250,street:0,district:0,city:0}},this.neededPropertysForCompletion={"X AE X-II":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:3},"Blue Bayside":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:3},"Purple Palms":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:4},"Green Grove":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:4},"Yellow Yards":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:4},"Orange Oasis":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:5},"Beige Bay":{housesPerStreet:7,streetsPerDistrict:3,districtsPerCity:5},"Question Cat":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"The Sunken City":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Le Tower":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Ancient Labyrinth":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Mount Proper":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Great Temple of Peter":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"The Emperors Arena":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Secret Glass Pyramid":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"The Money Pool":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"Fort in the Leaves":{housesPerStreet:1,streetsPerDistrict:0,districtsPerCity:0},"The Impossible Bridge":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Peter's Great Wall":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Candy Castle":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Property's Stadium":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Cathedral of Wisdom":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Palace of Eternity":{housesPerStreet:5,streetsPerDistrict:0,districtsPerCity:0},"Spiky Singers":{housesPerStreet:20,streetsPerDistrict:0,districtsPerCity:0},"The Guardian":{housesPerStreet:20,streetsPerDistrict:0,districtsPerCity:0},"Casa Blanca":{housesPerStreet:20,streetsPerDistrict:0,districtsPerCity:0},"Mystic Rocks":{housesPerStreet:20,streetsPerDistrict:0,districtsPerCity:0}},this.accounts=[]}return s(e,[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.checkMetaMaskInstalled();case 2:return t.next=4,this.checkChain();case 4:this.eventMessengerService.subscribe("accountsChanged",function(t){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data.accounts,this.accounts=r,e.next=4,this.checkChain();case 4:case"end":return e.stop()}},e,this)}))}),this.eventMessengerService.subscribe("disconnect",function(t){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data.accounts,this.accounts=r,e.next=4,this.checkChain();case 4:case"end":return e.stop()}},e,this)}))}),this.propertysHolders.forEach(function(t){e.loadPropertys(t)});case 7:case"end":return t.stop()}},t,this)}))}},{key:"checkChain",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.smartContractCoreService.isMetaMaskInstalled()){t.next=8;break}return t.next=3,this.smartContractCoreService.provider.getNetwork();case 3:e=t.sent,r=e.chainId,d.a.chainId===r?this.isOnMainnet=!0:(this.isOnMainnet=!1,this.loading=!1),t.next=9;break;case 8:this.isOnMainnet=!1,this.loading=!1;case 9:case"end":return t.stop()}},t,this)}))}},{key:"checkMetaMaskInstalled",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.smartContractCoreService.isMetaMaskInstalled()){t.next=7;break}return this.isMetaMaskInstalled=!0,t.next=4,this.smartContractCoreService.getWalletAccounts();case 4:this.accounts=t.sent,t.next=8;break;case 7:this.isMetaMaskInstalled=!1;case 8:case"end":return t.stop()}},t,this)}))}},{key:"isStreetComplete",value:function(t){return t.length===this.neededPropertysForCompletion[t[0].city].housesPerStreet}},{key:"isDistrictComplete",value:function(t){return t.streets.length===this.neededPropertysForCompletion[t.city].streetsPerDistrict}},{key:"isCityComplete",value:function(t){return t.districts.length===this.neededPropertysForCompletion[t.name].districtsPerCity}},{key:"getRemainingDistrictStreetCount",value:function(t){return this.neededPropertysForCompletion[t.city].streetsPerDistrict-t.streets.length}},{key:"getRemainingCityDistrictCount",value:function(t){return this.neededPropertysForCompletion[t.name].districtsPerCity-t.districts.length}},{key:"hasDistricts",value:function(t){return t.districts.length>0}},{key:"hasCities",value:function(){var t=0;return this.cities.forEach(function(e){e.districts.length>0&&t++}),t>0}},{key:"getEarnedBrixAmount",value:function(t,e,r){if("street"===t){var i=0;return i+=e.length*this.brixPropertyBonuses[e[0].city].house,this.isStreetComplete(e)&&(i+=this.brixPropertyBonuses[e[0].city].street),i}return"district"===t?r||this.isDistrictComplete(e)?this.brixPropertyBonuses[e.city].district:0:"city"===t?r||e.districts.length-this.neededPropertysForCompletion[e.name].districtsPerCity==0?this.brixPropertyBonuses[e.name].city:0:void 0}},{key:"getTotalEarnedBrix",value:function(t,e,r){var i=this,s=0;return t.length>0&&t.forEach(function(t){s+=i.getEarnedBrixAmount("street",t.streets[0])}),e.forEach(function(t){s+=i.getEarnedBrixAmount("district",t)}),r.forEach(function(t){s+=i.getEarnedBrixAmount("city",t)}),s}},{key:"loadPropertys",value:function(e){var r=this,i=[],s=[],n=[];this.smartContractCoreService.getNFTsFromAddress(e).subscribe(function(o){return Object(u.a)(r,void 0,void 0,regeneratorRuntime.mark(function r(){var c,a=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:this.loading=!1,(c=o.map(function(e){var r,i={image:e.image_preview_url},s=t(e.traits);try{for(s.s();!(r=s.n()).done;){var n=r.value;"Special"!==n.trait_type?("Street Name"===n.trait_type&&(i.street=n.value),"District Name"===n.trait_type&&(i.district=n.value),"City Name"===n.trait_type&&(i.city=n.value.trim()),"Unit"===n.trait_type&&(i.unit=n.value)):(console.log("property",n.value),i.street=n.value.trim(),i.district=n.value.trim(),i.city=n.value.trim(),i.unit=n.value.trim())}}catch(o){s.e(o)}finally{s.f()}return i})).forEach(function(t){var e=!1,r=!1,o=!1;i.forEach(function(r){t.street===r.street&&(e=!0)}),s.forEach(function(e){e.name===t.district&&(r=!0)}),n.forEach(function(e){e.name===t.city&&(o=!0)}),e||i.push({street:t.street,district:t.district,city:t.city,units:[],streets:[]}),r||s.push({name:t.district,city:t.city,streets:[]}),o||n.push({name:t.city,districts:[]})}),c.forEach(function(t){i.forEach(function(e){e.street===t.street&&e.units.push(t)})}),i.forEach(function(t){for(;t.units.length;)t.streets.push(t.units.splice(0,a.neededPropertysForCompletion[t.city].housesPerStreet));t.streets.forEach(function(e){e.length===a.neededPropertysForCompletion[e[0].city].housesPerStreet&&s.forEach(function(r){r.name===t.district&&(r.streets.push(e),r.city=t.city)})})}),s.forEach(function(t){t.streets.length===a.neededPropertysForCompletion[t.city].streetsPerDistrict&&n.forEach(function(e){e.name===t.city&&e.districts.push(t)})}),this.brixEarnedBreakdown.push({address:e,amount:this.getTotalEarnedBrix(i,s,n)});case 3:case"end":return r.stop()}},r,this)}))})}}]),e}()).\u0275fac=function(t){return new(t||m)(h.Nb(l.a),h.Nb(y.a),h.Nb(f.b))},m.\u0275cmp=h.Hb({type:m,selectors:[["app-brix-calculator"]],decls:12,vars:1,consts:[[1,"wrapper"],[1,"bonus-breakdown-table"],[4,"ngFor","ngForOf"],["valign","right"]],template:function(t,e){1&t&&(h.Ob(0,"propertys-header"),h.Sb(1,"div",0),h.Sb(2,"h1"),h.xc(3,"$BRIX Calculator"),h.Rb(),h.Sb(4,"table",1),h.Sb(5,"tr"),h.Sb(6,"th"),h.xc(7,"Wallet Address"),h.Rb(),h.Sb(8,"th"),h.xc(9,"Brix Earned"),h.Rb(),h.Rb(),h.wc(10,g,5,2,"tr",2),h.Rb(),h.Rb(),h.Ob(11,"propertys-footer")),2&t&&(h.Cb(10),h.ic("ngForOf",e.brixEarnedBreakdown))},directives:[P.a,c.i,p.a],styles:["[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding:100px 0;width:1220px;margin:0 auto;text-align:center;border-radius:10px}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid #eaeaea;width:800px;margin:100px auto}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px;border-bottom:1px solid #eaeaea}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:right}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px;text-align:left;border-bottom:1px solid #eaeaea}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:right}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:0}"]}),m),v=n("wSNE"),S=n("vvQE"),x=n("x+EH"),k=n("aNPn"),M=n("VkIy"),w=((C=s(function t(){r(this,t)})).\u0275fac=function(t){return new(t||C)},C.\u0275mod=h.Lb({type:C,bootstrap:[b]}),C.\u0275inj=h.Kb({providers:[{provide:f.d,useValue:{}}],imports:[[c.b,a.a,v.a,S.a,k.a,f.c,M.a,x.a,o.e.forChild([{path:"",component:b}])]]}),C)}}])}();