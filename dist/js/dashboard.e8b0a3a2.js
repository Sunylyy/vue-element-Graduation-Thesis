(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"096e":function(e,t,a){"use strict";var i=a("c93e"),n=a.n(i);n.a},"0a0d":function(e,t,a){e.exports=a("e829")},"2d5f":function(e,t,a){},"2f37":function(e,t,a){var i=a("63b6");i(i.S,"Date",{now:function(){return(new Date).getTime()}})},"311a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slider"},[a("div",{staticClass:"products"},[a("h4",[e._v("各产品访客")]),a("div",{staticClass:"slider"},[a("swiper",{attrs:{options:e.productSwiperOption}},e._l(e.sliderProducts,function(t,i){return a("swiper-slide",{key:i,class:{active:e.productIsActive===i},nativeOn:{click:function(t){e.selectProducts(i)}}},[a("div",{staticClass:"text"},[a("h5",[e._v(e._s(t.code))]),a("p",[e._v("访客占比")]),a("span",[e._v(e._s(t.radio)+"%")])]),a("div",{staticClass:"circle"},[a("el-progress",{attrs:{type:"circle","stroke-width":8,width:70,percentage:t.radio}})],1)])}),1)],1),a("div",{staticClass:"charts"},[a("h5",[e._v(e._s(e.productInvokeCode)+"各公司访客")]),a("ve-line",{ref:"products",attrs:{data:e.productChartData,settings:e.productChartSettings}})],1)]),a("TableAndRing",{attrs:{tableTitle:e.hotProducts.tableTitle,ringTitle:e.hotProducts.ringTitle,tableData:e.hotProducts.tableData,chartData:e.hotProducts.chartData,chartSettings:e.hotProducts.chartSettings}}),a("TableAndRing",{attrs:{tableTitle:e.bigCustomer.tableTitle,ringTitle:e.bigCustomer.ringTitle,tableData:e.bigCustomer.tableData,chartData:e.bigCustomer.chartData,chartSettings:e.bigCustomer.chartSettings}})],1)},n=[],r=(a("7f7f"),a("0a0d")),s=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-and-ring"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"grid-content bg-white"},[a("h4",[e._v(e._s(e.tableTitle))]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"排名",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"产品名",width:""}}),a("el-table-column",{attrs:{align:"center",prop:"amount",label:"调用量",width:""}}),a("el-table-column",{attrs:{align:"center",prop:"increase",label:"周涨幅"}})],1),a("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1)]),a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"grid-content bg-white"},[a("h4",[e._v(e._s(e.ringTitle))]),a("ve-ring",{attrs:{data:e.chartData,height:"320px",settings:e.chartSettings}})],1)])],1)],1)},c=[],l={name:"",props:{tableTitle:{type:String,default:function(){return""}},ringTitle:{type:String,default:function(){return""}},tableData:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}},chartSettings:{type:Object,default:function(){}}},data:function(){return{}},methods:{}},d=l,u=(a("b219"),a("2877")),h=Object(u["a"])(d,o,c,!1,null,null,null);h.options.__file="TableAndRing.vue";var m=h.exports,p={name:"Slider",components:{TableAndRing:m},data:function(){return this.productChartSettings={dimension:["时间"],scale:[!0,!0],area:!0},this.formChartSettings={dimension:["时间"],scale:[!0,!0],area:!0},{activeName:"invoke",dateValue:"",datePickerOptions:{disabledDate:function(e){return e.getTime()>s()()}},productChartData:{columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":75700,"上海":4311,"青岛":1e3},{"时间":"2019-03-02","北京":72936,"上海":6650,"青岛":1307},{"时间":"2019-03-03","北京":76636,"上海":7085,"青岛":1707},{"时间":"2019-03-04","北京":66536,"上海":6085,"青岛":2105},{"时间":"2019-03-05","北京":77516,"上海":5105,"青岛":1505},{"时间":"2019-03-06","北京":80536,"上海":8015,"青岛":1750}]},formChartData:{columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":56e3,"床单":22e3,"枕头":8888,Y0906:666},{"时间":"2019-03-02","毛衣":44e3,"床单":24e3,"枕头":5888,Y0906:766},{"时间":"2019-03-03","毛衣":51e3,"床单":21e3,"枕头":6888,Y0906:1166},{"时间":"2019-03-04","毛衣":59e3,"床单":27e3,"枕头":8888,Y0906:966},{"时间":"2019-03-05","毛衣":66e3,"床单":12e3,"枕头":6888,Y0906:1266},{"时间":"2019-03-06","毛衣":52e3,"床单":29e3,"枕头":7888,Y0906:1066}]},productSwiperOption:{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},formSwiperOption:{slidesPerView:4,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},productIsActive:0,productInvokeCode:"毛衣",formIsActive:0,formInvokeName:"北京",sliderProducts:[{code:"毛衣",radio:63},{code:"床单",radio:15},{code:"枕头",radio:2},{code:"窗帘",radio:1}],sliderForms:[{code:"北京",radio:72},{code:"上海",radio:12},{code:"上海淇毓",radio:9},{code:"北京济南",radio:6}],hotProducts:{tableTitle:"热门产品",ringTitle:"各产品关注占比",tableData:[{id:1,name:"毛衣",amount:"82093",increase:"128%"},{id:2,name:"羽绒服",amount:"77093",increase:"33%"},{id:3,name:"枕头",amount:"66752",increase:"25%"},{id:4,name:"短袖",amount:"57890",increase:"55%"},{id:5,name:"手套",amount:"5567",increase:"67%"}],chartData:{columns:["产品","关注"],rows:[{"产品":"毛衣","关注":1393},{"产品":"羽绒服","关注":3530},{"产品":"枕头","关注":2923},{"产品":"短袖","关注":1723},{"产品":"手套","关注":3792}]},chartSettings:{dimension:"产品",metrics:"关注",offsetY:180}},bigCustomer:{tableTitle:"大客户",ringTitle:"各客户关注占比",tableData:[{id:1,name:"北京",amount:"82093",increase:"183%"},{id:2,name:"济南",amount:"77093",increase:"33%"},{id:3,name:"苏州",amount:"66752",increase:"25%"},{id:4,name:"大连",amount:"57890",increase:"55%"},{id:5,name:"西安",amount:"5567",increase:"67%"}],chartData:{columns:["公司","关注"],rows:[{"产品":"北京","关注":10093},{"产品":"济南","关注":5530},{"产品":"苏州","关注":2923},{"产品":"大连","关注":1723},{"产品":"西安","关注":992}]},chartSettings:{dimension:"产品",metrics:"关注",offsetY:180}}}},watch:{activeName:function(e){var t=this;this.$nextTick(function(){t.$refs["".concat(e)].echarts.resize()})}},methods:{handleTab:function(e){console.log(e.name)},selectProducts:function(e){console.log(e),this.productIsActive=e,0===e?(this.productInvokeCode="毛衣",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":75700,"上海":4311,"青岛":1e3},{"时间":"2019-03-02","北京":72936,"上海":6650,"青岛":1307},{"时间":"2019-03-03","北京":76636,"上海":7085,"青岛":1707},{"时间":"2019-03-04","北京":66536,"上海":6085,"青岛":2105},{"时间":"2019-03-05","北京":77516,"上海":5105,"青岛":1505},{"时间":"2019-03-06","北京":80536,"上海":8015,"青岛":1750}]}):1===e?(this.productInvokeCode="床单",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":15700,"上海":800,"青岛":200},{"时间":"2019-03-02","北京":11936,"上海":650,"青岛":307},{"时间":"2019-03-03","北京":12636,"上海":785,"青岛":197},{"时间":"2019-03-04","北京":14536,"上海":885,"青岛":215},{"时间":"2019-03-05","北京":15516,"上海":705,"青岛":155},{"时间":"2019-03-06","北京":16536,"上海":805,"青岛":250}]}):2===e?(this.productInvokeCode="枕头",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":650,"上海":300,"青岛":300},{"时间":"2019-03-02","北京":736,"上海":250,"青岛":307},{"时间":"2019-03-03","北京":636,"上海":285,"青岛":297},{"时间":"2019-03-04","北京":536,"上海":285,"青岛":215},{"时间":"2019-03-05","北京":516,"上海":205,"青岛":255},{"时间":"2019-03-06","北京":636,"上海":305,"青岛":350}]}):3===e&&(this.productInvokeCode="窗帘",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":157,"上海":100,"青岛":300},{"时间":"2019-03-02","北京":136,"上海":150,"青岛":307},{"时间":"2019-03-03","北京":166,"上海":115,"青岛":297},{"时间":"2019-03-04","北京":156,"上海":125,"青岛":215},{"时间":"2019-03-05","北京":156,"上海":105,"青岛":555},{"时间":"2019-03-06","北京":136,"上海":135,"青岛":250}]})},selectForms:function(e){console.log(e),this.formIsActive=e,0===e?(this.formInvokeName="北京",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":56e3,"床单":22e3,"枕头":8888,Y0906:666},{"时间":"2019-03-02","毛衣":44e3,"床单":24e3,"枕头":5888,Y0906:766},{"时间":"2019-03-03","毛衣":51e3,"床单":21e3,"枕头":6888,Y0906:1166},{"时间":"2019-03-04","毛衣":59e3,"床单":27e3,"枕头":8888,Y0906:966},{"时间":"2019-03-05","毛衣":66e3,"床单":12e3,"枕头":6888,Y0906:1266},{"时间":"2019-03-06","毛衣":52e3,"床单":29e3,"枕头":7888,Y0906:1066}]}):1===e?(this.formInvokeName="上海",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":12e3,"床单":7e3,"枕头":300,Y0906:500},{"时间":"2019-03-02","毛衣":14e3,"床单":6e3,"枕头":388,Y0906:666},{"时间":"2019-03-03","毛衣":11e3,"床单":6600,"枕头":338,Y0906:466},{"时间":"2019-03-04","毛衣":19e3,"床单":5500,"枕头":298,Y0906:566},{"时间":"2019-03-05","毛衣":16e3,"床单":6900,"枕头":388,Y0906:466},{"时间":"2019-03-06","毛衣":12e3,"床单":7900,"枕头":488,Y0906:666}]}):2===e?(this.formInvokeName="上海淇毓",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":1e4,"床单":3e3,"枕头":2008,Y0906:500},{"时间":"2019-03-02","毛衣":14e3,"床单":4e3,"枕头":1588,Y0906:466},{"时间":"2019-03-03","毛衣":11e3,"床单":2700,"枕头":1888,Y0906:566},{"时间":"2019-03-04","毛衣":12e3,"床单":2800,"枕头":2288,Y0906:565},{"时间":"2019-03-05","毛衣":13e3,"床单":3300,"枕头":2388,Y0906:555},{"时间":"2019-03-06","毛衣":14e3,"床单":3400,"枕头":2288,Y0906:666}]}):3===e&&(this.formInvokeName="北京济南",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":9e3,"床单":2e3,"枕头":1e3,Y0906:333},{"时间":"2019-03-02","毛衣":8e3,"床单":1800,"枕头":1188,Y0906:466},{"时间":"2019-03-03","毛衣":9e3,"床单":2100,"枕头":1118,Y0906:466},{"时间":"2019-03-04","毛衣":9900,"床单":1800,"枕头":888,Y0906:555},{"时间":"2019-03-05","毛衣":8800,"床单":1900,"枕头":999,Y0906:444},{"时间":"2019-03-06","毛衣":9900,"床单":2e3,"枕头":990,Y0906:666}]})},bindSelectDate:function(e){console.log(e),"今日"===e?this.invokeChartData={columns:["时间","毛衣访客","床单访客","枕头访客"],rows:[{"时间":"10:00","毛衣访客":2800,"床单访客":1e3,"枕头访客":900},{"时间":"11:00","毛衣访客":2600,"床单访客":1200,"枕头访客":1400},{"时间":"12:00","毛衣访客":2700,"床单访客":1600,"枕头访客":1200},{"时间":"13:00","毛衣访客":3e3,"床单访客":1100,"枕头访客":1600},{"时间":"14:00","毛衣访客":3100,"床单访客":1700,"枕头访客":1900},{"时间":"15:00","毛衣访客":2900,"床单访客":2e3,"枕头访客":1800},{"时间":"16:00","毛衣访客":3300,"床单访客":1500,"枕头访客":2200}]}:"今日"===e&&(this.invokeChartData={columns:["时间","毛衣访客","床单访客","枕头访客"],rows:[{"时间":"10:00","毛衣访客":2800,"床单访客":1e3,"枕头访客":900},{"时间":"11:00","毛衣访客":2600,"床单访客":1200,"枕头访客":1400},{"时间":"12:00","毛衣访客":2700,"床单访客":1600,"枕头访客":1200},{"时间":"13:00","毛衣访客":3e3,"床单访客":1100,"枕头访客":1600},{"时间":"14:00","毛衣访客":3100,"床单访客":1700,"枕头访客":1900},{"时间":"15:00","毛衣访客":2900,"床单访客":2e3,"枕头访客":1800},{"时间":"16:00","毛衣访客":3300,"床单访客":1500,"枕头访客":2200}]})}}},f=p,v=(a("096e"),Object(u["a"])(f,i,n,!1,null,null,null));v.options.__file="Slider.vue";t["default"]=v.exports},"4ad0":function(e,t,a){"use strict";var i=a("2d5f"),n=a.n(i);n.a},"5c3a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("p",[e._v("未完成")]),a("p",[e._v("three项目很大")]),a("p",[e._v("不建议在企业后台中使用")]),a("p",[e._v("做大屏数据展示效果很好")]),a("p",[e._v("可以和echarts、v-charts一起使用")]),a("p",[e._v("但是和vue一起使用会降低用能 CPU怎搞内存增大")])])}],r={name:"Dashboard",data:function(){}},s=r,o=(a("4ad0"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,null,null);c.options.__file="Dashboard.vue";t["default"]=c.exports},8748:function(e,t,a){},b219:function(e,t,a){"use strict";var i=a("8748"),n=a.n(i);n.a},c93e:function(e,t,a){},e829:function(e,t,a){a("2f37"),e.exports=a("584a").Date.now}}]);
//# sourceMappingURL=dashboard.e8b0a3a2.js.map