!function(t){function e(e){for(var n,i,u=e[0],a=e[1],d=e[2],l=0,f=[];l<u.length;l++)i=u[l],o[i]&&f.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);f.length;)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,u=1;u<s.length;u++){var a=s[u];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={main:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var c=a;r.push([0,"vendor"]),s()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,s){},"./resources/js/index.ts":
/*!*******************************!*\
  !*** ./resources/js/index.ts ***!
  \*******************************/
/*! no static exports found */function(t,e){var s=function(){function t(t){this.longPollTimeoutInMs=1e3,this.node=t,this.submitButton=t.querySelector('button[type="submit"]'),this.startSync=this.startSync.bind(this),this.node.addEventListener("submit",this.startSync)}return t.prototype.startSync=function(t){t.preventDefault(),this.submitButton.classList.add("disabled"),this.submitButton.disabled=!0,this.poll=new n(this.node),console.log("poll started")},t}(),n=function(){function t(t){this.continue=!0,this.formData=new FormData(t),this.timeoutInMs=parseInt(this.formData.get("timeoutInMs")),this.outputContainer=document.querySelector("div[data-output]"),this.makeRequest=this.makeRequest.bind(this),this.makeRequest()}return t.prototype.makeRequest=function(t){var e=this;void 0===t&&(t=!0),t&&fetch("/admin/sync-db/status",{method:"POST",credentials:"same-origin",body:this.formData}),fetch("/admin/sync-db/status",{method:"POST",credentials:"same-origin",body:this.formData}).then(function(t){return t.json()}).then(function(t){t.success&&!t.complete&&setTimeout(function(){return e.makeRequest(!1)},e.timeoutInMs),t.logOutput&&(e.outputContainer.innerHTML=t.logOutput)})},t}(),o=document.querySelector("form[data-sync-db]");o&&new s(o)},"./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/*! no static exports found */function(t,e,s){var n=s(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./main.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/main.scss");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(t.exports=n.locals)},0:
/*!****************************************************************!*\
  !*** multi ./resources/js/index.ts ./resources/scss/main.scss ***!
  \****************************************************************/
/*! no static exports found */function(t,e,s){s(/*! /Users/abryrath/Union/Library/craftsyncdb/resources/js/index.ts */"./resources/js/index.ts"),t.exports=s(/*! /Users/abryrath/Union/Library/craftsyncdb/resources/scss/main.scss */"./resources/scss/main.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIkZvcm0iLCJub2RlIiwidGhpcyIsImxvbmdQb2xsVGltZW91dEluTXMiLCJzdWJtaXRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRTeW5jIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVkIiwicG9sbCIsIlBvbGwiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNvbnRpbnVlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRpbWVvdXRJbk1zIiwicGFyc2VJbnQiLCJvdXRwdXRDb250YWluZXIiLCJkb2N1bWVudCIsIm1ha2VSZXF1ZXN0IiwiaW5pdGlhbCIsIl90aGlzIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwibG9nT3V0cHV0IiwiaW5uZXJIVE1MIiwiY29udGVudCIsIm9wdGlvbnMiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwidW5kZWZpbmVkIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiYUFDQSxTQUFBQSxFQUFBQyxHQVFBLElBUEEsSUFNQUMsRUFBQUMsRUFOQUMsRUFBQUgsRUFBQSxHQUNBSSxFQUFBSixFQUFBLEdBQ0FLLEVBQUFMLEVBQUEsR0FJQU0sRUFBQSxFQUFBQyxFQUFBLEdBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAsR0FBQSxJQUVBTyxFQUFBUCxHQUFBLEVBRUEsSUFBQUQsS0FBQUcsRUFDQU8sT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVYsRUFBQUgsS0FDQWMsRUFBQWQsR0FBQUcsRUFBQUgsSUFLQSxJQUZBZSxLQUFBaEIsR0FFQU8sRUFBQUMsUUFDQUQsRUFBQVUsT0FBQVYsR0FPQSxPQUhBVyxFQUFBUixLQUFBUyxNQUFBRCxFQUFBYixHQUFBLElBR0FlLElBRUEsU0FBQUEsSUFFQSxJQURBLElBQUFDLEVBQ0FmLEVBQUEsRUFBaUJBLEVBQUFZLEVBQUFWLE9BQTRCRixJQUFBLENBRzdDLElBRkEsSUFBQWdCLEVBQUFKLEVBQUFaLEdBQ0FpQixHQUFBLEVBQ0FDLEVB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QUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNsYXNzIEZvcm0ge1xuICAgIHB1YmxpYyBsb25nUG9sbFRpbWVvdXRJbk1zOiBudW1iZXIgPSAxMDAwO1xuICAgIHB1YmxpYyBub2RlOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHVibGljIHN1Ym1pdEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHVibGljIHBvbGw6IFBvbGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgIHRoaXMuc3RhcnRTeW5jID0gdGhpcy5zdGFydFN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3RhcnRTeW5jKTtcbiAgICB9XG5cbiAgICBzdGFydFN5bmMoZTogRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvbGwgPSBuZXcgUG9sbCh0aGlzLm5vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZygncG9sbCBzdGFydGVkJyk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgSVBvbGxSZXNwb25zZSB7XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIGNvbXBsZXRlOiBib29sZWFuO1xuICAgIGxvZ091dHB1dDogc3RyaW5nO1xufVxuXG5jbGFzcyBQb2xsIHtcbiAgICBwdWJsaWMgdGltZW91dEluTXM6IG51bWJlcjtcbiAgICBwdWJsaWMgY29udGludWU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBmb3JtRGF0YTogRm9ybURhdGE7XG4gICAgcHVibGljIG91dHB1dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtOiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SW5NcyA9IHBhcnNlSW50KDxzdHJpbmc+IHRoaXMuZm9ybURhdGEuZ2V0KCd0aW1lb3V0SW5NcycpKTtcbiAgICAgICAgdGhpcy5vdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1vdXRwdXRdJyk7XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCA9IHRoaXMubWFrZVJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIG1ha2VSZXF1ZXN0KGluaXRpYWw6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgICBmZXRjaCgnL2FkbWluL3N5bmMtZGIvc3RhdHVzJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoKCcvYWRtaW4vc3luYy1kYi9zdGF0dXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgYm9keTogdGhpcy5mb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3A6IFJlc3BvbnNlKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChqc29uOiBJUG9sbFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGpzb24uc3VjY2VzcyAmJiAhanNvbi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWFrZVJlcXVlc3QoZmFsc2UpLCB0aGlzLnRpbWVvdXRJbk1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGpzb24ubG9nT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGpzb24ubG9nT3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtkYXRhLXN5bmMtZGJdJyk7XG5pZiAoZm9ybSkge1xuICAgIG5ldyBGb3JtKGZvcm0pO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==