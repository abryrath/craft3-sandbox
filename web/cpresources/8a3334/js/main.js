!function(t){function e(e){for(var n,i,u=e[0],a=e[1],d=e[2],l=0,f=[];l<u.length;l++)i=u[l],o[i]&&f.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);f.length;)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,u=1;u<s.length;u++){var a=s[u];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={main:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var c=a;r.push([0,"vendor"]),s()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,s){},"./resources/js/index.ts":
/*!*******************************!*\
  !*** ./resources/js/index.ts ***!
  \*******************************/
/*! no static exports found */function(t,e){!function(){function t(t){this.longPollTimeoutInMs=1e3,this.node=t,this.submitButton=t.querySelector('button[type="submit"]'),this.startSync=this.startSync.bind(this),this.node.addEventListener("submit",this.startSync)}t.prototype.startSync=function(t){t.preventDefault(),this.submitButton.classList.add("disabled"),this.submitButton.disabled=!0,this.poll=new s(this.node),console.log("poll started")}}();var s=function(){function t(t){this.continue=!0,this.formData=new FormData(t),this.timeoutInMs=parseInt(this.formData.get("timeoutInMs")),this.outputContainer=document.querySelector("div[data-output]"),this.makeRequest=this.makeRequest.bind(this),this.makeRequest()}return t.prototype.makeRequest=function(t){var e=this;void 0===t&&(t=!0),t&&fetch("/admin/sync-db/init",{method:"POST",credentials:"same-origin",body:this.formData}),fetch("/admin/sync-db/status",{method:"POST",credentials:"same-origin",body:this.formData}).then(function(t){return t.json()}).then(function(t){t.success&&!t.complete&&setTimeout(function(){return e.makeRequest(!1)},e.timeoutInMs),t.logOutput&&(e.outputContainer.innerHTML=t.logOutput)})},t}();document.querySelector("form[data-sync-db]")},"./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/*! no static exports found */function(t,e,s){var n=s(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./main.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(t.exports=n.locals)},0:
/*!****************************************************************!*\
  !*** multi ./resources/js/index.ts ./resources/scss/main.scss ***!
  \****************************************************************/
/*! no static exports found */function(t,e,s){s(/*! /Users/abryrath/Union/Library/craft-sync-db/resources/js/index.ts */"./resources/js/index.ts"),t.exports=s(/*! /Users/abryrath/Union/Library/craft-sync-db/resources/scss/main.scss */"./resources/scss/main.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIkZvcm0iLCJub2RlIiwidGhpcyIsImxvbmdQb2xsVGltZW91dEluTXMiLCJzdWJtaXRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRTeW5jIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVkIiwicG9sbCIsIlBvbGwiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNvbnRpbnVlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRpbWVvdXRJbk1zIiwicGFyc2VJbnQiLCJvdXRwdXRDb250YWluZXIiLCJkb2N1bWVudCIsIm1ha2VSZXF1ZXN0IiwiaW5pdGlhbCIsIl90aGlzIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwibG9nT3V0cHV0IiwiaW5uZXJIVE1MIiwiY29udGVudCIsIm9wdGlvbnMiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwidW5kZWZpbmVkIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiYUFDQSxTQUFBQSxFQUFBQyxHQVFBLElBUEEsSUFNQUMsRUFBQUMsRUFOQUMsRUFBQUgsRUFBQSxHQUNBSSxFQUFBSixFQUFBLEdBQ0FLLEVBQUFMLEVBQUEsR0FJQU0sRUFBQSxFQUFBQyxFQUFBLEdBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAsR0FBQSxJQUVBTyxFQUFBUCxHQUFBLEVBRUEsSUFBQUQsS0FBQUcsRUFDQU8sT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVYsRUFBQUgsS0FDQWMsRUFBQWQsR0FBQUcsRUFBQUgsSUFLQSxJQUZBZSxLQUFBaEIsR0FFQU8sRUFBQUMsUUFDQUQsRUFBQVUsT0FBQVYsR0FPQSxPQUhBVyxFQUFBUixLQUFBUyxNQUFBRCxFQUFBYixHQUFBLElBR0FlLElBRUEsU0FBQUEsSUFFQSxJQURBLElBQUFDLEVBQ0FmLEVBQUEsRUFBaUJBLEVBQUFZLEVBQUFWLE9BQTRCRixJQUFBLENBRzdDLElBRkEsSUFBQWdCLEVBQUFKLEVBQUFaLEdBQ0FpQixHQUFBLEVBQ0FDLEVB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YSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY2xhc3MgRm9ybSB7XG4gICAgcHVibGljIGxvbmdQb2xsVGltZW91dEluTXM6IG51bWJlciA9IDEwMDA7XG4gICAgcHVibGljIG5vZGU6IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwdWJsaWMgc3VibWl0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwdWJsaWMgcG9sbDogUG9sbDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgdGhpcy5zdGFydFN5bmMgPSB0aGlzLnN0YXJ0U3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdGFydFN5bmMpO1xuICAgIH1cblxuICAgIHN0YXJ0U3luYyhlOiBFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9sbCA9IG5ldyBQb2xsKHRoaXMubm9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2xsIHN0YXJ0ZWQnKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBJUG9sbFJlc3BvbnNlIHtcbiAgICBlcnJvcnM6IHN0cmluZ1tdO1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgY29tcGxldGU6IGJvb2xlYW47XG4gICAgbG9nT3V0cHV0OiBzdHJpbmc7XG59XG5cbmNsYXNzIFBvbGwge1xuICAgIHB1YmxpYyB0aW1lb3V0SW5NczogbnVtYmVyO1xuICAgIHB1YmxpYyBjb250aW51ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGZvcm1EYXRhOiBGb3JtRGF0YTtcbiAgICBwdWJsaWMgb3V0cHV0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm06IEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICB0aGlzLnRpbWVvdXRJbk1zID0gcGFyc2VJbnQoPHN0cmluZz4gdGhpcy5mb3JtRGF0YS5nZXQoJ3RpbWVvdXRJbk1zJykpO1xuICAgICAgICB0aGlzLm91dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLW91dHB1dF0nKTtcblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0ID0gdGhpcy5tYWtlUmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAgbWFrZVJlcXVlc3QoaW5pdGlhbDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgICAgIGZldGNoKCcvYWRtaW4vc3luYy1kYi9pbml0Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmZXRjaCgnL2FkbWluL3N5bmMtZGIvc3RhdHVzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoanNvbjogSVBvbGxSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChqc29uLnN1Y2Nlc3MgJiYgIWpzb24uY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VSZXF1ZXN0KGZhbHNlKSwgdGhpcy50aW1lb3V0SW5Ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqc29uLmxvZ091dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBqc29uLmxvZ091dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IGZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bZGF0YS1zeW5jLWRiXScpO1xuaWYgKGZvcm0pIHtcbiAgICAvLyBuZXcgRm9ybShmb3JtKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/ZW1iZWRkZWQhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=