(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{3197:function(e,t,n){Promise.resolve().then(n.t.bind(n,6166,23)),Promise.resolve().then(n.t.bind(n,3968,23)),Promise.resolve().then(n.bind(n,4019)),Promise.resolve().then(n.t.bind(n,782,23)),Promise.resolve().then(n.t.bind(n,8485,23))},8314:function(e,t,n){"use strict";var o=n(1811);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,i){if(i!==o){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4019:function(e,t,n){"use strict";n.r(t);var o=n(3827),r=n(4090);n(3810);var s=n(4404),i=n.n(s);let c=e=>{let{darkClassName:t="dark-mode"}=e,[n,s]=(0,r.useState)(!1),[i,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{s(window.matchMedia("(prefers-color-scheme: dark)").matches),c(!0)},[]),(0,r.useEffect)(()=>{i&&a()},[n,i]);let a=()=>{n?document.body.classList.add(t):document.body.classList.remove(t)};return i?(0,o.jsx)("div",{className:"light-dark-button",children:(0,o.jsx)("button",{onClick:()=>{s(e=>!e)},className:"btn ".concat(n?"btn-dark":"btn-light"),"data-testid":"themeSwitcherButton",children:n?"Switch to Light Mode":"Switch to Dark Mode"})}):null};c.propTypes={darkClassName:i().string},t.default=c},3968:function(){},6166:function(){},3810:function(){},8485:function(){},782:function(){}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3197)}),_N_E=e.O()}]);