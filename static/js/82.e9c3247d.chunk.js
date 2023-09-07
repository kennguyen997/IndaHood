"use strict";(self.webpackChunkterafly=self.webpackChunkterafly||[]).push([[82],{40090:function(t,n,r){r.d(n,{C:function(){return s},H:function(){return c}});var e=r(2144),o=r(64929),i=r(86144),a=r(43777),s=function(){function t(n,r){var o;if(void 0===n&&(n=""),void 0===r&&(r={}),n instanceof t)return n;"number"===typeof n&&(n=(0,e.Yt)(n)),this.originalInput=n;var a=(0,i.uA)(n);this.originalInput=n,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),n=t.r/255,r=t.g/255,e=t.b/255;return.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=(0,a.Yq)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=(0,e.py)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=(0,e.py)(this.r,this.g,this.b),n=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=(0,e.lC)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=(0,e.lC)(this.r,this.g,this.b),n=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),(0,e.vq)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),(0,e.s)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*(0,a.sh)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*(0,a.sh)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+(0,e.vq)(this.r,this.g,this.b,!1),n=0,r=Object.entries(o.R);n<r.length;n++){var i=r[n],a=i[0];if(t===i[1])return a}return!1},t.prototype.toString=function(t){var n=Boolean(t);t=null!==t&&void 0!==t?t:this.format;var r=!1,e=this.a<1&&this.a>=0;return n||!e||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.l+=n/100,r.l=(0,a.V2)(r.l),new t(r)},t.prototype.brighten=function(n){void 0===n&&(n=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-n/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-n/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-n/100*255))),new t(r)},t.prototype.darken=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.l-=n/100,r.l=(0,a.V2)(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.s-=n/100,r.s=(0,a.V2)(r.s),new t(r)},t.prototype.saturate=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.s+=n/100,r.s=(0,a.V2)(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(n){var r=this.toHsl(),e=(r.h+n)%360;return r.h=e<0?360+e:e,new t(r)},t.prototype.mix=function(n,r){void 0===r&&(r=50);var e=this.toRgb(),o=new t(n).toRgb(),i=r/100;return new t({r:(o.r-e.r)*i+e.r,g:(o.g-e.g)*i+e.g,b:(o.b-e.b)*i+e.b,a:(o.a-e.a)*i+e.a})},t.prototype.analogous=function(n,r){void 0===n&&(n=6),void 0===r&&(r=30);var e=this.toHsl(),o=360/r,i=[this];for(e.h=(e.h-(o*n>>1)+720)%360;--n;)e.h=(e.h+o)%360,i.push(new t(e));return i},t.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new t(n)},t.prototype.monochromatic=function(n){void 0===n&&(n=6);for(var r=this.toHsv(),e=r.h,o=r.s,i=r.v,a=[],s=1/n;n--;)a.push(new t({h:e,s:o,v:i})),i=(i+s)%1;return a},t.prototype.splitcomplement=function(){var n=this.toHsl(),r=n.h;return[this,new t({h:(r+72)%360,s:n.s,l:n.l}),new t({h:(r+216)%360,s:n.s,l:n.l})]},t.prototype.onBackground=function(n){var r=this.toRgb(),e=new t(n).toRgb();return new t({r:e.r+(r.r-e.r)*r.a,g:e.g+(r.g-e.g)*r.a,b:e.b+(r.b-e.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(n){for(var r=this.toHsl(),e=r.h,o=[this],i=360/n,a=1;a<n;a++)o.push(new t({h:(e+a*i)%360,s:r.s,l:r.l}));return o},t.prototype.equals=function(n){return this.toRgbString()===new t(n).toRgbString()},t}();function c(t,n){return void 0===t&&(t=""),void 0===n&&(n={}),new s(t,n)}},16912:function(t,n,r){r.r(n),r.d(n,{default:function(){return i}});var e=Number.isNaN||function(t){return"number"===typeof t&&t!==t};function o(t,n){if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(o=t[r],i=n[r],!(o===i||e(o)&&e(i)))return!1;var o,i;return!0}function i(t,n){void 0===n&&(n=o);var r=null;function e(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];if(r&&r.lastThis===this&&n(e,r.lastArgs))return r.lastResult;var i=t.apply(this,e);return r={lastResult:i,lastArgs:e,lastThis:this},i}return e.clear=function(){r=null},e}},47636:function(t,n,r){r.d(n,{Z:function(){return f}});var e=r(87462),o=r(4942),i=r(15671),a=r(43144),s=r(60136),c=r(29388),u=r(47313),h=r(1168),l=r(46123),p=r.n(l),f=function(t){(0,s.Z)(r,t);var n=(0,c.Z)(r);function r(){var t;(0,i.Z)(this,r);for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).closeTimer=null,t.close=function(n){n&&n.stopPropagation(),t.clearCloseTimer();var r=t.props,e=r.onClose,o=r.noticeKey;e&&e(o)},t.startCloseTimer=function(){t.props.duration&&(t.closeTimer=window.setTimeout((function(){t.close()}),1e3*t.props.duration))},t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},t}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(t){(this.props.duration!==t.duration||this.props.updateMark!==t.updateMark||this.props.visible!==t.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var t=this,n=this.props,r=n.prefixCls,i=n.className,a=n.closable,s=n.closeIcon,c=n.style,l=n.onClick,f=n.children,d=n.holder,v="".concat(r,"-notice"),g=Object.keys(this.props).reduce((function(n,r){return"data-"!==r.substr(0,5)&&"aria-"!==r.substr(0,5)&&"role"!==r||(n[r]=t.props[r]),n}),{}),y=u.createElement("div",(0,e.Z)({className:p()(v,i,(0,o.Z)({},"".concat(v,"-closable"),a)),style:c,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:l},g),u.createElement("div",{className:"".concat(v,"-content")},f),a?u.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(v,"-close")},s||u.createElement("span",{className:"".concat(v,"-close-x")})):null);return d?h.createPortal(y,d):y}}]),r}(u.Component);f.defaultProps={onClose:function(){},duration:1.5}},33133:function(t,n,r){r.r(n),r.d(n,{default:function(){return M}});var e=r(45987),o=r(87462),i=r(1413),a=r(15671),s=r(43144),c=r(60136),u=r(29388),h=r(47313),l=r(20182),p=r(46123),f=r.n(p),d=r(1293),v=r(47636),g=r(63028),y=["getContainer"],m=0,b=Date.now();function k(){var t=m;return m+=1,"rcNotification_".concat(b,"_").concat(t)}var C=function(t){(0,c.Z)(r,t);var n=(0,u.Z)(r);function r(){var t;(0,a.Z)(this,r);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))).state={notices:[]},t.hookRefs=new Map,t.add=function(n,r){var e=n.key||k(),o=(0,i.Z)((0,i.Z)({},n),{},{key:e}),a=t.props.maxCount;t.setState((function(t){var n=t.notices,i=n.map((function(t){return t.notice.key})).indexOf(e),s=n.concat();return-1!==i?s.splice(i,1,{notice:o,holderCallback:r}):(a&&n.length>=a&&(o.key=s[0].notice.key,o.updateMark=k(),o.userPassKey=e,s.shift()),s.push({notice:o,holderCallback:r})),{notices:s}}))},t.remove=function(n){t.setState((function(t){return{notices:t.notices.filter((function(t){var r=t.notice,e=r.key;return(r.userPassKey||e)!==n}))}}))},t.noticePropsMap={},t}return(0,s.Z)(r,[{key:"getTransitionName",value:function(){var t=this.props,n=t.prefixCls,r=t.animation,e=this.props.transitionName;return!e&&r&&(e="".concat(n,"-").concat(r)),e}},{key:"render",value:function(){var t=this,n=this.state.notices,r=this.props,e=r.prefixCls,a=r.className,s=r.closeIcon,c=r.style,u=[];return n.forEach((function(r,o){var a=r.notice,c=r.holderCallback,h=o===n.length-1?a.updateMark:void 0,l=a.key,p=a.userPassKey,f=(0,i.Z)((0,i.Z)((0,i.Z)({prefixCls:e,closeIcon:s},a),a.props),{},{key:l,noticeKey:p||l,updateMark:h,onClose:function(n){var r;t.remove(n),null===(r=a.onClose)||void 0===r||r.call(a)},onClick:a.onClick,children:a.content});u.push(l),t.noticePropsMap[l]={props:f,holderCallback:c}})),h.createElement("div",{className:f()(e,a),style:c},h.createElement(d.V,{keys:u,motionName:this.getTransitionName(),onVisibleChanged:function(n,r){var e=r.key;n||delete t.noticePropsMap[e]}},(function(n){var r=n.key,a=n.className,s=n.style,c=n.visible,u=t.noticePropsMap[r],l=u.props,p=u.holderCallback;return p?h.createElement("div",{key:r,className:f()(a,"".concat(e,"-hook-holder")),style:(0,i.Z)({},s),ref:function(n){"undefined"!==typeof r&&(n?(t.hookRefs.set(r,n),p(n,l)):t.hookRefs.delete(r))}}):h.createElement(v.Z,(0,o.Z)({},l,{className:f()(a,null===l||void 0===l?void 0:l.className),style:(0,i.Z)((0,i.Z)({},s),null===l||void 0===l?void 0:l.style),visible:c}))})))}}]),r}(h.Component);C.newInstance=void 0,C.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},C.newInstance=function(t,n){var r=t||{},i=r.getContainer,a=(0,e.Z)(r,y),s=document.createElement("div");i?i().appendChild(s):document.body.appendChild(s);var c=!1;(0,l.s)(h.createElement(C,(0,o.Z)({},a,{ref:function(t){c||(c=!0,n({notice:function(n){t.add(n)},removeNotice:function(n){t.remove(n)},component:t,destroy:function(){(0,l.v)(s),s.parentNode&&s.parentNode.removeChild(s)},useNotification:function(){return(0,g.Z)(t)}}))}})),s)};var M=C},63028:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(93433),o=r(87462),i=r(29439),a=r(47313),s=r(47636);function c(t){var n=a.useRef({}),r=a.useState([]),c=(0,i.Z)(r,2),u=c[0],h=c[1];return[function(r){var i=!0;t.add(r,(function(t,r){var c=r.key;if(t&&(!n.current[c]||i)){var u=a.createElement(s.Z,(0,o.Z)({},r,{holder:t}));n.current[c]=u,h((function(t){var n=t.findIndex((function(t){return t.key===r.key}));if(-1===n)return[].concat((0,e.Z)(t),[u]);var o=(0,e.Z)(t);return o[n]=u,o}))}i=!1}))},a.createElement(a.Fragment,null,u)]}},20182:function(t,n,r){var e;r.d(n,{s:function(){return g},v:function(){return k}});var o,i=r(74165),a=r(15861),s=r(71002),c=r(1413),u=r(1168),h=(0,c.Z)({},e||(e=r.t(u,2))),l=h.version,p=h.render,f=h.unmountComponentAtNode;try{Number((l||"").split(".")[0])>=18&&(o=h.createRoot)}catch(M){}function d(t){var n=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&"object"===(0,s.Z)(n)&&(n.usingClientEntryPoint=t)}var v="__rc_react_root__";function g(t,n){o?function(t,n){d(!0);var r=n[v]||o(n);d(!1),r.render(t),n[v]=r}(t,n):function(t,n){p(t,n)}(t,n)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then((function(){var t;null===(t=n[v])||void 0===t||t.unmount(),delete n[v]})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){f(t)}function k(t){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===o){t.next=2;break}return t.abrupt("return",y(n));case 2:b(n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);