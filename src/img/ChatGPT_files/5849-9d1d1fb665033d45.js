(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5849],{66293:function(e,t,n){var r=n(73401).Symbol;e.exports=r},70331:function(e){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},57398:function(e,t,n){var r=n(66293),o=n(46945),u=n(51584),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):u(e)}},33897:function(e,t,n){var r=n(15012),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},40151:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},46945:function(e,t,n){var r=n(66293),o=Object.prototype,u=o.hasOwnProperty,c=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[i]=n:delete e[i]),o}},51584:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},73401:function(e,t,n){var r=n(40151),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},15012:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},6627:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},89109:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},42848:function(e,t,n){var r=n(57398),o=n(89109);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},67948:function(e,t,n){var r=n(33897),o=n(6627),u=n(42848),c=0/0,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(u(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||f.test(e)?s(e.slice(2),n?2:8):i.test(e)?c:+e}},20326:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var n,o,u=0;u<e.length;u++)if(!((n=e[u])===(o=t[u])||r(n)&&r(o)))return!1;return!0}function u(e,t){void 0===t&&(t=o);var n=null;function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var u=e.apply(this,r);return n={lastResult:u,lastArgs:r,lastThis:this},u}return r.clear=function(){n=null},r}},10132:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},89340:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(70079),o=n(53559),u=n(68469),c=n(26739);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[l,f]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:u,collectionRef:o},n)},a=e+"CollectionSlot",p=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=f(a,n),l=(0,u.e)(t,i.collectionRef);return r.createElement(c.g7,{ref:l},o)}),v=e+"CollectionItemSlot",d="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,l=r.useRef(null),s=(0,u.e)(t,l),a=f(v,n);return r.useEffect(()=>(a.itemMap.set(l,{ref:l,...i}),()=>void a.itemMap.delete(l))),r.createElement(c.g7,{[d]:"",ref:s},o)});return[{Provider:s,Slot:p,ItemSlot:m},function(t){let n=f(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},i]}},53559:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(70079);function o(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),c=n.length;function i(t){let{scope:n,children:o,...i}=t,l=(null==n?void 0:n[e][c])||u,f=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(l.Provider,{value:f},o)}return n=[...n,o],i.displayName=t+"Provider",[i,function(n,i){let l=(null==i?void 0:i[e][c])||u,f=(0,r.useContext)(l);if(f)return f;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},74400:function(e,t,n){"use strict";n.d(t,{gm:function(){return u}});var r=n(70079);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},70494:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r,o=n(70079),u=n(90671);let c=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function l(e){let[t,n]=o.useState(c());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(i++))},[e]),e||(t?`radix-${t}`:"")}},51629:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(70079);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},21381:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(70079),o=n(51629);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,c]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,c=(0,r.useRef)(u),i=(0,o.W)(t);return(0,r.useEffect)(()=>{c.current!==u&&(i(u),c.current=u)},[u,c,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,l=(0,o.W)(n),f=(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else c(t)},[i,e,c,l]);return[i?e:u,f]}},90671:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(70079);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);