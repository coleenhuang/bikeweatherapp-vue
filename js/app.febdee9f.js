(function(e){function a(a){for(var t,i,r=a[0],s=a[1],d=a[2],l=0,u=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);m&&m(a);while(u.length)u.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,a=0;a<c.length;a++){for(var n=c[a],t=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(t=!1)}t&&(c.splice(a--,1),e=i(i.s=n[0]))}return e}var t={},o={app:0},c=[];function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,a,n){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)i.d(n,t,function(a){return e[a]}.bind(null,t));return n},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/bikeweatherapp-vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=a,r=r.slice();for(var d=0;d<r.length;d++)a(r[d]);var m=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("85ec"),o=n.n(t);o.a},"0876":function(e,a,n){"use strict";var t=n("aead"),o=n.n(t);o.a},"1e22":function(e,a,n){},"29e8":function(e,a,n){},"2cc6":function(e,a,n){e.exports=n.p+"img/calendar.cc925c4c.png"},"2e96":function(e,a,n){"use strict";var t=n("8869"),o=n.n(t);o.a},"507e":function(e,a,n){"use strict";var t=n("1e22"),o=n.n(t);o.a},"52a3":function(e,a,n){e.exports=n.p+"img/biker.87cafb67.png"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("body",[n("HeaderTitle"),n("router-view")],1)])},c=[],i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("header",[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("Bike Weather App")])])],1)},r=[],s={name:"HeaderTitle"},d=s,m=(n("507e"),n("2877")),l=Object(m["a"])(d,i,r,!1,null,"7cd46cb2",null),u=l.exports,h={name:"App",components:{HeaderTitle:u}},p=h,f=(n("034f"),Object(m["a"])(p,o,c,!1,null,null,null)),g=f.exports,v=n("8c4f"),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("h2",[e._v("Where are you located?")]),t("form",{staticClass:"user-location",on:{submit:e.submit}},[t("label",{attrs:{for:"city"}},[t("span",{staticClass:"place"},[e._v("City")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Enter a city"},domProps:{value:e.message},on:{input:function(a){a.target.composing||(e.message=a.target.value)}}})]),t("label",{attrs:{for:"country"}},[t("span",{staticClass:"place"},[e._v("Country")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selected=a.target.multiple?n:n[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Country")]),e._l(e.options,(function(a,n){return t("option",{key:n,domProps:{value:a.code}},[e._v(" "+e._s(a.name)+" ")])}))],2)]),t("button",{staticClass:"location-button",attrs:{type:"submit"}},[e._v("Submit")])]),e.error?t("p",{staticClass:"error"},[e._v("Sorry, data for that location is not available")]):e._e(),t("img",{attrs:{id:"biker",src:n("52a3"),alt:"Bicyclist"}})])},y=[],w=(n("99af"),n("d3b7"),[{name:"Afghanistan",code:"af"},{name:"Åland Islands",code:"ax"},{name:"Albania",code:"al"},{name:"Algeria",code:"dz"},{name:"American Samoa",code:"as"},{name:"Andorra",code:"ad"},{name:"Angola",code:"ao"},{name:"Anguilla",code:"ai"},{name:"Antartica",code:"aq"},{name:"Antigua and Barbuda",code:"ag"},{name:"Argentina",code:"ar"},{name:"Armenia",code:"am"},{name:"Aruba",code:"aw"},{name:"Australia",code:"au"},{name:"Austria",code:"at"},{name:"Azerbaijan",code:"az"},{name:"Bahrain",code:"bh"},{name:"Bahamas",code:"bs"},{name:"Bangladesh",code:"bd"},{name:"Barbados",code:"bb"},{name:"Belarus",code:"by"},{name:"Belgium",code:"be"},{name:"Belize",code:"bz"},{name:"Benin",code:"bj"},{name:"Bermuda",code:"bm"},{name:"Bhutan",code:"bt"},{name:"Bolivia",code:"bo"},{name:"Bonaire, Sint Eustatius and Saba",code:"bq"},{name:"Bosnia and Herzegovinia",code:"ba"},{name:"Botswana",code:"bw"},{name:"Bouvet Island",code:"bv"},{name:"Brazil",code:"br"},{name:"British Indian Ocean Territory",code:"io"},{name:"Brunei Darussalam",code:"bn"},{name:"Bulgaria",code:"bg"},{name:"Burkina Faso",code:"bf"},{name:"Burundi",code:"bi"},{name:"Cambodia",code:"kh"},{name:"Cameroon",code:"cm"},{name:"Canada",code:"ca"},{name:"Cape Verde",code:"cv"},{name:"Cayman Islands",code:"ky"},{name:"Central African Republic",code:"cf"},{name:"Chad",code:"td"},{name:"Chile",code:"cl"},{name:"China",code:"cn"},{name:"Christmas Island",code:"cx"},{name:"Cocos (Keeling) Islands",code:"cc"},{name:"Colombia",code:"co"},{name:"Comoros",code:"km"},{name:"Congo",code:"cg"},{name:"Congo, the Democratic Republic of the",code:"cd"},{name:"Cook Islands",code:"ck"},{name:"Costa Rica",code:"cr"},{name:"Côte d'Ivoire",code:"ci"},{name:"Croatia",code:"hr"},{name:"Cuba",code:"cu"},{name:"Curaçao",code:"cw"},{name:"Cyprus",code:"cy"},{name:"Czech Republic",code:"cz"},{name:"Denmark",code:"dk"},{name:"Djibouti",code:"dj"},{name:"Dominica",code:"dm"},{name:"Dominician Republic",code:"dr"},{name:"Ecuador",code:"ec"},{name:"Egypt",code:"eg"},{name:"El Salvador",code:"sv"},{name:"Equatorial Guinea",code:"gq"},{name:"Eritrea",code:"er"},{name:"Estonia",code:"ee"},{name:"Ethiopia",code:"et"},{name:"Falkland Islands (Malvinas)",code:"fk"},{name:"Faroe Islands",code:"fo"},{name:"Fiji",code:"fj"},{name:"Finland",code:"fi"},{name:"France",code:"fr"},{name:"French Guiana",code:"gf"},{name:"French Polynesia",code:"pf"},{name:"French Southern Territories",code:"tf"},{name:"Gabon",code:"ga"},{name:"Gamibia",code:"gm"},{name:"Georgia",code:"ge"},{name:"Germany",code:"de"},{name:"Ghana",code:"gh"},{name:"Gibraltar",code:"gi"},{name:"Greece",code:"gr"},{name:"Greenland",code:"gl"},{name:"Grenada",code:"gd"},{name:"Guadeloupe",code:"gp"},{name:"Guam",code:"gu"},{name:"Guatemala",code:"gt"},{name:"Guernsey",code:"gg"},{name:"Guinea",code:"gn"},{name:"Guinea-Bissau",code:"gw"},{name:"Guyana",code:"gy"},{name:"Haiti",code:"ht"},{name:"Heard Island and McDonald Islands",code:"hm"},{name:"Holy See",code:"va"},{name:"Honduras",code:"hn"},{name:"Hong Kong",code:"hk"},{name:"Hungary",code:"hu"},{name:"Iceland",code:"is"},{name:"India",code:"in"},{name:"Indonesia",code:"id"},{name:"Iran",code:"ir"},{name:"Iraq",code:"iq"},{name:"Ireland",code:"ie"},{name:"Isle of Man",code:"im"},{name:"Israel",code:"il"},{name:"Italy",code:"it"},{name:"Jamaica",code:"jm"},{name:"Japan",code:"jp"},{name:"Jersey",code:"je"},{name:"Jordan",code:"jo"},{name:"Kazakhstan",code:"kz"},{name:"Kenya",code:"ke"},{name:"Kiribati",code:"ki"},{name:"Korea, Democratic People's Republic of",code:"kp"},{name:"Korea, Republic of",code:"kr"},{name:"Kuwait",code:"kw"},{name:"Kyrgyzstan",code:"kg"},{name:"Lao People's Democratic Repuclic",code:"la"},{name:"Latvia",code:"lv"},{name:"Lebanon",code:"lb"},{name:"Lesotho",code:"ls"},{name:"Liberia",code:"lr"},{name:"Libya",code:"ly"},{name:"Liechtenstein",code:"li"},{name:"Lithuania",code:"lt"},{name:"Luxembourg",code:"lu"},{name:"Macao",code:"mo"},{name:"Macedonia",code:"mk"},{name:"Madagascar",code:"mg"},{name:"Malawi",code:"mw"},{name:"Malaysia",code:"my"},{name:"Maldives",code:"mv"},{name:"Mali",code:"ml"},{name:"Malta",code:"mt"},{name:"Marshall Islands",code:"mh"},{name:"Martinique",code:"mq"},{name:"Mauritania",code:"mr"},{name:"Mauritius",code:"mu"},{name:"Mayotte",code:"yt"},{name:"Mexico",code:"mx"},{name:"Micronesia",code:"fm"},{name:"Moldova, Republic of",code:"md"},{name:"Monaco",code:"mc"},{name:"Mongolia",code:"mn"},{name:"Montenegro",code:"me"},{name:"Montserrat",code:"ms"},{name:"Morocco",code:"ma"},{name:"Mozambique",code:"mz"},{name:"Myanmar",code:"mm"},{name:"Namibia",code:"na"},{name:"Nauru",code:"nr"},{name:"Nepal",code:"np"},{name:"Netherlands",code:"nl"},{name:"New Caledonia",code:"nc"},{name:"New Zealand",code:"nz"},{name:"Nicaragua",code:"ni"},{name:"Niger",code:"ne"},{name:"Nigeria",code:"ng"},{name:"Niue",code:"nu"},{name:"Norfolk Island",code:"nf"},{name:"Northern Mariana Islands",code:"mp"},{name:"Norway",code:"no"},{name:"Oman",code:"om"},{name:"Pakistan",code:"pk"},{name:"Palau",code:"pw"},{name:"Palestine",code:"ps"},{name:"Panama",code:"pa"},{name:"Papua New Guinea",code:"pg"},{name:"Paraguay",code:"py"},{name:"Peru",code:"pe"},{name:"Philippines",code:"ph"},{name:"Pitcairn",code:"pn"},{name:"Poland",code:"pl"},{name:"Portugal",code:"pt"},{name:"Puerto Rico",code:"pr"},{name:"Qatar",code:"qa"},{name:"Réunion",code:"re"},{name:"Romania",code:"ro"},{name:"Russian Federation",code:"ru"},{name:"Rwanda",code:"rw"},{name:"Saint Barthélemy",code:"bl"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"sh"},{name:"Saint Kitts and Nevis",code:"kn"},{name:"Saint Lucia",code:"lc"},{name:"Saint Martin (French)",code:"mf"},{name:"Saint Pierre and Miquelon",code:"pm"},{name:"Saint Vincent and the Grenadines",code:"vc"},{name:"Samoa",code:"ws"},{name:"San Marino",code:"sm"},{name:"Sao Tome and Principe",code:"st"},{name:"Saudi Arabia",code:"sa"},{name:"Senegal",code:"sn"},{name:"Serbia",code:"rs"},{name:"Seychelles",code:"sc"},{name:"Sierra Leone",code:"sl"},{name:"Singapore",code:"sg"},{name:"Sint Maarten (Dutch)",code:"sx"},{name:"Slovakia",code:"sk"},{name:"Slovenia",code:"si"},{name:"Solomon Islands",code:"sb"},{name:"Somalia",code:"so"},{name:"South Africa",code:"za"},{name:"South Georgia and the South Sandwich Islands",code:"gs"},{name:"South Sudan",code:"ss"},{name:"Spain",code:"es"},{name:"Sri Lanka",code:"lk"},{name:"Sudan",code:"sd"},{name:"Suriname",code:"sr"},{name:"Svalbard and Jan Mayen",code:"sj"},{name:"Swaziland",code:"sz"},{name:"Sweden",code:"se"},{name:"Switzerland",code:"ch"},{name:"Syria",code:"sy"},{name:"Taiwan",code:"tw"},{name:"Tajikstan",code:"tj"},{name:"Tanzania",code:"tz"},{name:"Thailand",code:"th"},{name:"Timor-Leste",code:"tl"},{name:"Togo",code:"tg"},{name:"Tokelau",code:"tk"},{name:"Tonga",code:"to"},{name:"Trinidad and Tobago",code:"tt"},{name:"Tunisia",code:"tn"},{name:"Turkey",code:"tr"},{name:"Turkmenistan",code:"tm"},{name:"Turks and Caicos Islands",code:"tc"},{name:"Tuvalu",code:"tv"},{name:"Uganda",code:"ug"},{name:"Ukraine",code:"ua"},{name:"United Arab Emirates",code:"ae"},{name:"United Kingdom",code:"gb"},{name:"United States",code:"us"},{name:"United States Minor Outlying Islands",code:"um"},{name:"Urugway",code:"uz"},{name:"Vanautu",code:"vu"},{name:"Venezuela",code:"ve"},{name:"Vietnam",code:"vn"},{name:"Virgin Islands, British",code:"vg"},{name:"Virgin Islands, U.S.",code:"vi"},{name:"Wallis and Futuna",code:"wf"},{name:"Western Sahara",code:"eh"},{name:"Yemen",code:"ye"},{name:"Zambia",code:"zm"},{name:"Zimbabwe",code:"zw"}]),k={location:{city:"",country:""},current:{temp:""},time:{now:!1,chosentime:{}},forecasted:{high:"",low:"",description:"",sunrise:"",sunset:""},night:{bikelight:!1}},_={name:"StartPage",data:function(){return{selected:"",message:"",options:w,key:"abd493870ee021c2a6d76da504695451",error:!1,store:k}},methods:{submit:function(e){var a=this;e.preventDefault();var n=a.message,t=a.selected;this.setLocation(n,t),this.getLocation(n,t)},getLocation:function(e,a){var n=this,t="https://api.openweathermap.org/data/2.5/weather?q=",o="appid="+this.key,c="units=metric";fetch("".concat(t).concat(e,",").concat(a,"&").concat(c,"&").concat(o)).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(e){console.log(e),n.getCurrentTemp(e),J.push({path:"time"})})).catch(this.error=!0)},setLocation:function(e,a){this.store.location.city=e,this.store.location.country=a,console.log(this.store.location.city)},getCurrentTemp:function(e){this.store.current.temp=e.main.temp,console.log(this.store.current.temp)}}},S=_,C=(n("a64a"),Object(m["a"])(S,b,y,!1,null,"793fd8f8",null)),M=C.exports,T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("h2",[e._v("When are you planning on using your bike?")]),t("TimeForm",{on:{submittime:function(a){return e.settime(a)}}}),e.error?t("p",{staticClass:"error"},[e._v("Sorry, data for that time is not available")]):e._e(),t("img",{attrs:{id:"calendar",src:n("2cc6"),alt:"Bike wheel"}})],1)},I=[],P=(n("a4d3"),n("e01a"),n("7db0"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("form",{staticClass:"time-form",attrs:{id:"datetime"},on:{submit:function(a){return a.preventDefault(),e.submittime(a)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selecteday,expression:"selecteday"}],attrs:{id:"day",required:""},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selecteday=a.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("pick a time")]),n("option",{attrs:{value:"now"}},[e._v("Right now")]),n("option",{attrs:{value:"0"}},[e._v("Later today")]),n("option",{attrs:{value:"1"}},[e._v("Tomorrow")]),n("option",{attrs:{value:"2"}},[e._v("The day after tomorrow")])]),n("select",{directives:[{name:"show",rawName:"v-show",value:e.later,expression:"later"},{name:"model",rawName:"v-model",value:e.selecthour,expression:"selecthour"}],attrs:{id:"time"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selecthour=a.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("pick a time")]),e._l(e.options,(function(a,t){return n("option",{key:t,domProps:{value:a.value}},[e._v(" "+e._s(a.time)+" ")])}))],2),n("button",{attrs:{type:"submit"}},[e._v("Submit")])])}),B=[],j={name:"DaySelect",data:function(){return{selecteday:"",later:!1,selecthour:"",options:[]}},watch:{selecteday:function(){"now"===this.selecteday?this.later=!1:(this.later=!0,this.getTimeOptions())}},methods:{getTimeOptions:function(){if(console.log(this.selecteday),this.selecteday>0)for(var e=0;e<24;e++)this.options.push({time:"".concat(e,":00"),value:e});else for(var a=new Date,n=a.getHours(),t=n+1;t<24;t++)this.options.push({time:"".concat(t,":00"),value:t})},submittime:function(){console.log("time form"),this.$emit("submittime",{day:this.selecteday,hour:this.selecthour})}}},x=j,A=(n("2e96"),Object(m["a"])(x,P,B,!1,null,"8125a18e",null)),z=A.exports,O=n("5a0c"),G=n.n(O),D={name:"TimePage",components:{TimeForm:z},data:function(){return{later:!1,chosentime:G()(),key:"3d56838f28a549368a4f65e675ad0be9",store:k,error:!1}},methods:{settime:function(e){if(console.log("time sent"),"now"===e.day)this.chosentime=G()();else{var a=G()().add(e.day,"day"),n=e.hour;this.chosentime=G()(a).hour(n).minute(0)}"now"===e.day?this.store.time.now=!0:this.store.time.now=!1,this.store.time.chosentime=this.chosentime,this.getForecast()},getForecast:function(){var e=this,a="https://api.weatherbit.io/v2.0/forecast/daily?",n=this.store.location,t=n.city,o=n.country,c="key="+this.key;fetch("".concat(a,"city=").concat(t,"&country=").concat(o,"&").concat(c)).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(a){console.log(a),e.getInfo(e.filterData(a)),J.push({path:"result"})})).catch(this.error=!0)},filterData:function(e){var a=this;return e.data.find((function(e){return e.valid_date===a.chosentime.format("YYYY-MM-DD")}))},getInfo:function(e){this.store.forecasted.high=e.high_temp,this.store.forecasted.low=e.low_temp,this.store.forecasted.description=e.weather.description,this.store.forecasted.sunrise=G.a.unix(e.sunrise_ts),this.store.forecasted.sunset=G.a.unix(e.sunset_ts),this.bringBikelight()},bringBikelight:function(){console.log(this.chosentime.format("YYYY-MM-DD"));var e=this.store.forecasted,a=e.sunrise,n=e.sunset;!0===this.chosentime.isBefore(a)?(this.store.night.bikelight=!0,console.log("before")):!0===this.chosentime.isAfter(n)&&(this.store.night.bikelight=!0,console.log("after"))}}},N=D,E=(n("0876"),Object(m["a"])(N,T,I,!1,null,"6912e20d",null)),L=E.exports,R=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("main",[e.now?n("p",{staticClass:"current-temp"},[e._v(e._s(e.store.current.temp)+"°C")]):e._e(),n("p",[e._v(e._s(e.store.forecasted.description))]),n("div",{staticClass:"lowhigh"},[n("p",[e._v(e._s(e.store.forecasted.low)+"°C")]),n("p",[e._v(e._s(e.store.forecasted.high)+"°C")])]),e.bikelight?n("p",[e._v(e._s(e.message))]):e._e(),n("button",{staticClass:"restart",attrs:{type:"button"},on:{click:e.restart}},[e._v("Restart")])])},F=[],q={name:"ResultPage",data:function(){return{now:k.time.now,store:k,bikelight:k.night.bikelight,message:"It's dark outside, remember to bring a bike light!"}},methods:{restart:function(){this.reset(),J.push({path:"/"})},reset:function(){this.store.time.now=!1,this.store.night.bikelight=!1}}},H=q,K=(n("a35a"),Object(m["a"])(H,R,F,!1,null,"456688a0",null)),Y=K.exports;t["a"].use(v["a"]);var U=[{path:"/",name:"StartPage",component:M},{path:"/time",name:"TimePage",component:L},{path:"/result",name:"ResultPage",component:Y}],$=new v["a"]({routes:U}),J=$;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(g)},router:J}).$mount("#app")},"85ec":function(e,a,n){},8869:function(e,a,n){},a35a:function(e,a,n){"use strict";var t=n("29e8"),o=n.n(t);o.a},a64a:function(e,a,n){"use strict";var t=n("aa15"),o=n.n(t);o.a},aa15:function(e,a,n){},aead:function(e,a,n){}});
//# sourceMappingURL=app.febdee9f.js.map