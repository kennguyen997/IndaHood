"use strict";(self.webpackChunkterafly=self.webpackChunkterafly||[]).push([[913],{5170:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(74165),o=a(15861),r=a(29439),l=a(47313),i=a(24511),c=a(95143),s=a(16383),d=a(88363),u=a(59491),m=a(97890),p=a(79456),h=a(27392),g=a(70816),f=a.n(g),v=a(23194),x=a(4753),b=a(26170),y=a(68992),S=a(46417),C=function(){var e=(0,l.useState)(!0),t=(0,r.Z)(e,2),a=t[0],u=t[1],g=(0,l.useState)(),f=(0,r.Z)(g,2),y=f[0],C=f[1],k=(0,l.useState)(!1),w=(0,r.Z)(k,2),D=w[0],Z=w[1],$=(0,m.UO)().id,E=(0,d.Z)().width,N=(0,i.$)(),Y=(0,r.Z)(N,1)[0];return(0,l.useEffect)((function(){$&&(0,o.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.I.getEventDetal($);case 2:(t=e.sent)&&C(t),u(!1);case 5:case"end":return e.stop()}}),e)})))()}),[$]),(0,S.jsxs)(v.Z,{leftButton:"back",title:y?(0,h.DE)(y,"title"):"",customrightButton:(0,S.jsx)(s.Z,{sharing:D,setSharing:Z,width:E}),children:[(0,S.jsx)(b.Z,{title:Y(c.y0.events)}),(0,S.jsx)(x.Z,{loading:a,className:"view center",children:(0,S.jsx)("div",{className:"view event_detail_page",children:y?(0,S.jsx)(P,{dataEvent:y}):(0,S.jsx)(S.Fragment,{})})})]})},P=function(e){var t=e.dataEvent,a=(0,i.$)(),n=(0,r.Z)(a,1)[0],o=(0,d.Z)().width,p=(0,m.s0)(),g=(0,l.useState)(!1),v=(0,r.Z)(g,2),x=v[0],C=v[1];return console.log({dataEvent:t}),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.Z,{title:(0,h.DE)(t,"title"),description:(0,h.DE)(t,"content"),metaImage:(0,h.ue)(t,"image")}),(0,S.jsxs)("div",{className:"title_area",children:[(0,S.jsx)("div",{className:"title",children:(0,h.DE)(t,"title")}),(0,S.jsx)(s.Z,{sharing:x,setSharing:C,width:o})]}),(0,S.jsxs)("div",{className:"event_data",children:[(0,S.jsxs)("div",{className:"infor_area",children:[(0,S.jsx)("span",{className:"status_event",children:0===t.status?t.is_notice?n(c.y0.notice):n(c.y0.proceeding):n(c.y0.end)}),(0,S.jsxs)("span",{className:"timeline",children:[f()(t.startDate).format("YYYY.MM.DD"),"\xa0~\xa0",f()(t.endDate).format("YYYY.MM.DD")]})]}),(0,S.jsx)(y.Z,{alt:(0,h.DE)(t,"content"),src:(0,h.ue)(t,"image"),className:"event_img"}),(0,S.jsxs)("div",{className:"infor_area",children:[(0,S.jsx)("div",{className:"information",children:(0,h.DE)(t,"content")}),(0,S.jsx)(u.Z,{className:"button_ant_ct big_ant",onClick:function(){return p("/events")},children:n(c.y0.listView)})]}),(0,S.jsxs)("div",{className:"infor_area_mobile",children:[0===(null===t||void 0===t?void 0:t.status)?n(c.y0.proceeding):n(c.y0.end),(0,S.jsxs)("span",{className:"timeline",children:[f()(t.startDate).format("YYYY.MM.DD"),"\xa0~\xa0",f()(t.endDate).format("YYYY.MM.DD")]}),(0,S.jsx)("div",{className:"information",children:(0,h.DE)(t,"content")}),(0,S.jsxs)("div",{className:"lookup",children:[n(c.y0.lookup),"\xa0",t.view]})]})]})]})}},4753:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(47313),o=a(70026),r=a(46417),l=function(e){var t=e.children,a=e.loading,l=e.className;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(l||""," ").concat(a?"loading-exit":"loading-exit-active"),children:(0,r.jsx)(o.Z,{})}),n.Children.map(t,(function(e){return e&&n.cloneElement(e,{className:"".concat(e.props.className," ").concat(a?"loading-enter":"loading-enter-done")})}))]})}},53553:function(e,t,a){a.d(t,{mL:function(){return o},q0:function(){return n}});(0,a(56927).b)("bottomLeft","bottomRight","topLeft","topRight");var n=function(e){return void 0===e||"topLeft"!==e&&"topRight"!==e?"slide-up":"slide-down"},o=function(e,t,a){return void 0!==a?a:"".concat(e,"-").concat(t)}},28130:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(87462),o={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},r=a(51513),l={lang:(0,n.Z)({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},o),timePickerLocale:(0,n.Z)({},r.Z)}},3267:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),o=a(15671),r=a(43144),l=a(60136),i=a(29388),c=a(47313),s=a(51769),d=a(35620).Z,u=function(e){(0,l.Z)(a,e);var t=(0,i.Z)(a);function a(){return(0,o.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"getLocale",value:function(){var e=this.props,t=e.componentName,a=e.defaultLocale||d[null!==t&&void 0!==t?t:"global"],o=this.context,r=t&&o?o[t]:{};return(0,n.Z)((0,n.Z)({},a instanceof Function?a():a),r||{})}},{key:"getLocaleCode",value:function(){var e=this.context,t=e&&e.locale;return e&&e.exist&&!t?d.locale:t}},{key:"render",value:function(){return this.props.children(this.getLocale(),this.getLocaleCode(),this.context)}}]),a}(c.Component);u.defaultProps={componentName:"global"},u.contextType=s.Z},51769:function(e,t,a){var n=(0,a(47313).createContext)(void 0);t.Z=n},35620:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(44043),o=a(28130),r=o.Z,l=a(51513),i="${label} is not a valid ${type}",c={locale:"en",Pagination:n.Z,DatePicker:o.Z,TimePicker:l.Z,Calendar:r,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}}},51513:function(e,t){t.Z={placeholder:"Select time",rangePlaceholder:["Start time","End time"]}},44043:function(e,t){t.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},47882:function(e,t,a){function n(e,t){return!!e&&e.contains(t)}a.d(t,{Z:function(){return n}})},19990:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(1413),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),r="aria-",l="data-";function i(e,t){return 0===e.indexOf(t)}function c(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===a?{aria:!0,data:!0,attr:!0}:!0===a?{aria:!0}:(0,n.Z)({},a);var c={};return Object.keys(e).forEach((function(a){(t.aria&&("role"===a||i(a,r))||t.data&&i(a,l)||t.attr&&o.includes(a))&&(c[a]=e[a])})),c}}}]);