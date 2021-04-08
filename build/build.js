(()=>{"use strict";var e=wp.blockEditor.RichText,t=wp.apiFetch;const a=function(a){var n=[{name:"category",triggerPrefix:"",options:function(e){var a="";return e&&(a="?search="+encodeURIComponent(e)),t({path:"/wp/v2/categories"+a})},isDebounced:!0,getOptionLabel:function(e){return wp.element.createElement("span",null,e.id," | ",e.slug," | ",e.name)},getOptionKeywords:function(e){return[e.name]},getOptionCompletion:function(e){return"".concat(e.id)}}];return wp.element.createElement("div",null,wp.element.createElement(e,{tagName:"p",value:a.state_value,onChange:a.changeCategory,"aria-autocomplete":"list",autocompleters:n}),wp.element.createElement("p",null,"Начни вводить имя города"))};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=wp.i18n.__,d=wp.components,h=d.Button,f=d.PanelBody,w=d.PanelRow,I=d.TextControl,g=d.TextareaControl,b=wp.element,y=b.render,E=b.Component,v=b.Fragment,M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(b,e);var t,n,i,r,d=(i=b,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(i);if(r){var a=c(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return _(this,e)});function b(){var e;return l(this,b),(e=d.apply(this,arguments)).changeOptions=e.changeOptions.bind(m(e)),e.updateCategory=e.updateCategory.bind(m(e)),e.updateTitle=e.updateTitle.bind(m(e)),e.updateContent=e.updateContent.bind(m(e)),e.updateStatus=e.updateStatus.bind(m(e)),e.updateTags=e.updateTags.bind(m(e)),e.updateMetaAIOTitle=e.updateMetaAIOTitle.bind(m(e)),e.updateMetaAIODesc=e.updateMetaAIODesc.bind(m(e)),e.updateMetaUrAddress=e.updateMetaUrAddress.bind(m(e)),e.updateMetaUrFIO=e.updateMetaUrFIO.bind(m(e)),e.updateMetaUrRegNum=e.updateMetaUrRegNum.bind(m(e)),e.updateMetaUrStatus=e.updateMetaUrStatus.bind(m(e)),e.updateMetaUrUslugi=e.updateMetaUrUslugi.bind(m(e)),e.updateMetaIIAbout=e.updateMetaIIAbout.bind(m(e)),e.updateMetaIICoord=e.updateMetaIICoord.bind(m(e)),e.updateMetaIICity=e.updateMetaIICity.bind(m(e)),e.updateMetaIIArea=e.updateMetaIIArea.bind(m(e)),e.updateMetaIIAddress=e.updateMetaIIAddress.bind(m(e)),e.updateMetaIIDistrict=e.updateMetaIIDistrict.bind(m(e)),e.updateMetaIIMetro=e.updateMetaIIMetro.bind(m(e)),e.updateMetaIIOffice=e.updateMetaIIOffice.bind(m(e)),e.updateMetaIIPhones=e.updateMetaIIPhones.bind(m(e)),e.updateMetaIIWebsite=e.updateMetaIIWebsite.bind(m(e)),e.updateMetaIIWebcontacts=e.updateMetaIIWebcontacts.bind(m(e)),e.updateMetaIIPrices=e.updateMetaIIPrices.bind(m(e)),e.updateMetaIIReestr=e.updateMetaIIReestr.bind(m(e)),e.updateMetaIIWorkhours=e.updateMetaIIWorkhours.bind(m(e)),e.state={isAPISaving:!1,category:"",postItem:{},createNew:!1,_categories:[],_content:"",_title:"",_status:"",_tags:[],_meta_aio_title:"",_meta_aio_desc:"",_meta_ur_address:"",_meta_ur_fio:"",_meta_ur_regnum:"",_meta_ur_status:"",_meta_ur_uslugi:[],_meta_ii_about:"",_meta_ii_coord:"",_meta_ii_city:"",_meta_ii_area:"",_meta_ii_address:"",_meta_ii_district:"",_meta_ii_metro:"",_meta_ii_office:"",_meta_ii_phones:"",_meta_ii_website:"",_meta_ii_webcontacts:"",_meta_ii_prices:[],_meta_ii_reestrminust:"",_meta_ii_workhours:[]},e}return t=b,(n=[{key:"componentDidMount",value:function(){var e=this;wp.api.loadPromise.then((function(){var t=new URLSearchParams(location.search).get("advid");t?(e.post=new wp.api.models.Post({id:t}),e.post.fetch().then((function(t){console.log(t),e.setState({postItem:t,createNew:!1,_categories:t.categories||[],_content:t.content.rendered||"",_title:t.title.rendered||"",_status:t.status||"",_tags:t.tags||[],_meta_aio_title:t.meta._aioseop_title||"",_meta_aio_desc:t.meta._aioseop_description||"",_meta_ur_address:t.meta.ur_address||"",_meta_ur_fio:t.meta.ur_fio||"",_meta_ur_regnum:t.meta.ur_regNum||"",_meta_ur_status:t.meta.ur_status||"",_meta_ur_uslugi:t.meta.ur_uslugi.length>0?t.meta.ur_uslugi.join("\n"):[],_meta_ii_about:t.meta._item_info.aboutCompany||"",_meta_ii_coord:t.meta._item_info.geo.coords||"",_meta_ii_city:t.meta._item_info.geo.city||"",_meta_ii_area:t.meta._item_info.geo.area||"",_meta_ii_address:t.meta._item_info.geo.address||"",_meta_ii_district:t.meta._item_info.geo.district||"",_meta_ii_metro:t.meta._item_info.geo.metro||"",_meta_ii_office:t.meta._item_info.geo.office||"",_meta_ii_phones:t.meta._item_info.phones||"",_meta_ii_website:t.meta._item_info.website||"",_meta_ii_webcontacts:t.meta._item_info.webContacts||"",_meta_ii_prices:t.meta._item_info.prices.length>0?t.meta._item_info.prices.join("\n"):[],_meta_ii_reestrminust:t.meta._item_info.reestrMinust||"",_meta_ii_workhours:t.meta._item_info.workHours.length>0?t.meta._item_info.workHours.join("\n"):[]})}))):e.setState({createNew:!0})}))}},{key:"changeOptions",value:function(){var e=this;this.setState({isAPISaving:!0});var t=new wp.api.models.Post,a=s(s({},!this.state.createNew&&this.state.postItem),{},{categories:this.state._categories,content:this.state._content,title:this.state._title,status:this.state._status,tags:this.state._tags,meta:s(s({},!this.state.createNew&&this.state.postItem.meta),{},{_aioseop_title:this.state._meta_aio_title,_aioseop_description:this.state._meta_aio_desc,ur_address:this.state._meta_ur_address,ur_fio:this.state._meta_ur_fio,ur_regNum:this.state._meta_ur_regnum,ur_status:this.state._meta_ur_status,ur_uslugi:this.state._meta_ur_uslugi.length>0?this.state._meta_ur_uslugi.split("\n"):[],_item_info:s(s({},!this.state.createNew&&this.state.postItem.meta._item_info),{},{geo:s(s({},!this.state.createNew&&this.state.postItem.meta._item_info.geo),{},{city:this.state._meta_ii_city,area:this.state._meta_ii_area,district:this.state._meta_ii_district,metro:this.state._meta_ii_metro,office:this.state._meta_ii_office,address:this.state._meta_ii_address,coords:this.state._meta_ii_coord}),phones:this.state._meta_ii_phones,website:this.state._meta_ii_website,webContacts:this.state._meta_ii_webcontacts,prices:this.state._meta_ii_prices.length>0?this.state._meta_ii_prices.split("\n"):[],reestrMinust:this.state._meta_ii_reestrminust,workHours:this.state._meta_ii_workhours.length>0?this.state._meta_ii_workhours.split("\n"):[]})})});t.save(a).then((function(t){console.log("Updated post"),console.log(t),e.setState({isAPISaving:!1})}))}},{key:"updateCategory",value:function(e){this.setState({_categories:e})}},{key:"updateTitle",value:function(e){this.setState({_title:e})}},{key:"updateContent",value:function(e){this.setState({_content:e})}},{key:"updateStatus",value:function(e){this.setState({_status:e})}},{key:"updateTags",value:function(e){this.setState({_tags:e})}},{key:"updateMetaAIOTitle",value:function(e){this.setState({_meta_aio_title:e})}},{key:"updateMetaAIODesc",value:function(e){this.setState({_meta_aio_desc:e})}},{key:"updateMetaUrAddress",value:function(e){this.setState({_meta_ur_address:e})}},{key:"updateMetaUrFIO",value:function(e){this.setState({_meta_ur_fio:e})}},{key:"updateMetaUrRegNum",value:function(e){this.setState({_meta_ur_regnum:e})}},{key:"updateMetaUrStatus",value:function(e){this.setState({_meta_ur_status:e})}},{key:"updateMetaUrUslugi",value:function(e){this.setState({_meta_ur_uslugi:e})}},{key:"updateMetaIIAbout",value:function(e){this.setState({_meta_ii_about:e})}},{key:"updateMetaIICoord",value:function(e){this.setState({_meta_ii_coord:e})}},{key:"updateMetaIICity",value:function(e){this.setState({_meta_ii_coord:e})}},{key:"updateMetaIIArea",value:function(e){this.setState({_meta_ii_area:e})}},{key:"updateMetaIIAddress",value:function(e){this.setState({_meta_ii_address:e})}},{key:"updateMetaIIDistrict",value:function(e){this.setState({_meta_ii_district:e})}},{key:"updateMetaIIMetro",value:function(e){this.setState({_meta_ii_metro:e})}},{key:"updateMetaIIOffice",value:function(e){this.setState({_meta_ii_office:e})}},{key:"updateMetaIIPhones",value:function(e){this.setState({_meta_ii_phones:e})}},{key:"updateMetaIIWebsite",value:function(e){this.setState({_meta_ii_website:e})}},{key:"updateMetaIIWebcontacts",value:function(e){this.setState({_meta_ii_webcontacts:e})}},{key:"updateMetaIIPrices",value:function(e){this.setState({_meta_ii_prices:e})}},{key:"updateMetaIIReestr",value:function(e){this.setState({_meta_ii_reestrminust:e})}},{key:"updateMetaIIWorkhours",value:function(e){this.setState({_meta_ii_workhours:e})}},{key:"render",value:function(){var e=this;return wp.element.createElement(v,null,wp.element.createElement("h1",null,p("Редактор адвокатов")),wp.element.createElement(f,null,wp.element.createElement("h2",null,"Основная инфа"),wp.element.createElement(w,null,wp.element.createElement("p",null,"Категория (город - айди)"),wp.element.createElement(a,{state_value:this.state._categories,changeCategory:this.updateCategory})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Title H1: "),wp.element.createElement(I,{value:this.state._title,onChange:this.updateTitle})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Content: "),wp.element.createElement(I,{value:this.state._content,onChange:this.updateContent})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Status: "),wp.element.createElement(I,{value:this.state._status,onChange:this.updateStatus})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Tags: "),wp.element.createElement(I,{value:this.state._tags,onChange:this.updateTags})),wp.element.createElement(w,null,wp.element.createElement("p",null,"AIO Title: "),wp.element.createElement(I,{value:this.state._meta_aio_title,onChange:this.updateMetaAIOTitle})),wp.element.createElement(w,null,wp.element.createElement("p",null,"AIO Description: "),wp.element.createElement(I,{value:this.state._meta_aio_desc,onChange:this.updateMetaAIODesc})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Address: "),wp.element.createElement(I,{value:this.state._meta_ur_address,onChange:this.updateMetaUrAddress})),wp.element.createElement(w,null,wp.element.createElement("p",null,"FIO: "),wp.element.createElement(I,{value:this.state._meta_ur_fio,onChange:this.updateMetaUrFIO})),wp.element.createElement(w,null,wp.element.createElement("p",null,"RegNum: "),wp.element.createElement(I,{value:this.state._meta_ur_regnum,onChange:this.updateMetaUrRegNum})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Adv. Status: "),wp.element.createElement(I,{value:this.state._meta_ur_status,onChange:this.updateMetaUrStatus})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Uslugi: "),wp.element.createElement(g,{value:this.state._meta_ur_uslugi,onChange:this.updateMetaUrUslugi}))),wp.element.createElement(f,null,wp.element.createElement("h2",null,"Из item_info"),wp.element.createElement("h3",null,"GEO"),wp.element.createElement(w,null,wp.element.createElement("p",null,"Coords: "),wp.element.createElement(I,{value:this.state._meta_ii_coord,onChange:this.updateMetaIICoord})),wp.element.createElement(w,null,wp.element.createElement("p",null,"City: "),wp.element.createElement(I,{value:this.state._meta_ii_city,onChange:this.updateMetaIICity})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Area: "),wp.element.createElement(I,{value:this.state._meta_ii_area,onChange:this.updateMetaIIArea})),wp.element.createElement(w,null,wp.element.createElement("p",null,"District: "),wp.element.createElement(I,{value:this.state._meta_ii_district,onChange:this.updateMetaIIDistrict})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Metro: "),wp.element.createElement(I,{value:this.state._meta_ii_metro,onChange:this.updateMetaIIMetro})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Office: "),wp.element.createElement(I,{value:this.state._meta_ii_office,onChange:this.updateMetaIIOffice})),wp.element.createElement("h3",null,"Contacts"),wp.element.createElement(w,null,wp.element.createElement("p",null,"Phones: "),wp.element.createElement(I,{value:this.state._meta_ii_phones,onChange:this.updateMetaIIPhones})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Website: "),wp.element.createElement(I,{value:this.state._meta_ii_website,onChange:this.updateMetaIIWebsite})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Webcontacts: "),wp.element.createElement(I,{value:this.state._meta_ii_webcontacts,onChange:this.updateMetaIIWebcontacts})),wp.element.createElement("h3",null,"Other"),wp.element.createElement(w,null,wp.element.createElement("p",null,"ReestrMinust: "),wp.element.createElement(I,{value:this.state._meta_ii_reestrminust,onChange:this.updateMetaIIReestr})),wp.element.createElement(w,null,wp.element.createElement("p",null,"Prices: "),wp.element.createElement(g,{value:this.state._meta_ii_prices,onChange:this.updateMetaIIPrices})),wp.element.createElement(w,null,wp.element.createElement("p",null,"WorkHours: "),wp.element.createElement(g,{value:this.state._meta_ii_workhours,onChange:this.updateMetaIIWorkhours}))),wp.element.createElement(f,null,wp.element.createElement(w,null,wp.element.createElement("div",{className:"codeinwp-text-field-button-group"},wp.element.createElement(h,{isPrimary:!0,isLarge:!0,disabled:this.state.isAPISaving,onClick:function(){return e.changeOptions()}},p("Save"))))))}}])&&u(t.prototype,n),b}(E);y(wp.element.createElement(M,null),document.getElementById("edit-advokat-container"))})();