!function(e){function r(r){for(var n,i,d=r[0],c=r[1],l=r[2],u=0,p=[];u<d.length;u++)i=d[u],o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(a&&a(r);p.length;)p.shift()();return t.push.apply(t,l||[]),s()}function s(){for(var e,r=0;r<t.length;r++){for(var s=t[r],n=!0,d=1;d<s.length;d++){var c=s[d];0!==o[c]&&(n=!1)}n&&(t.splice(r--,1),e=i(i.s=s[0]))}return e}var n={},o={main:0},t=[];function i(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,r,s){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(s,n,function(r){return e[r]}.bind(null,n));return s},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=r,d=d.slice();for(var l=0;l<d.length;l++)r(d[l]);var a=c;t.push([0,"vendor"]),s()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/admin.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/admin.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,r,s){},"./resources/js/admin.ts":
/*!*******************************!*\
  !*** ./resources/js/admin.ts ***!
  \*******************************/
/*! no exports provided */function(e,r,s){"use strict";s.r(r);var n=s(/*! ./components/ProviderSelect */"./resources/js/components/ProviderSelect.ts");new(function(){return function(){console.log("admin");var e=document.querySelector("[data-provider-select]");e&&(this.providerSelect=new n.default(e))}}())},"./resources/js/components/ProviderSelect.ts":
/*!***************************************************!*\
  !*** ./resources/js/components/ProviderSelect.ts ***!
  \***************************************************/
/*! exports provided: default */function(e,r,s){"use strict";s.r(r);var n=function(){function e(r){this.section=r,this.select=document.querySelector("#providerSelect");var s=this.section.dataset.providers;this.providers=e.parseProviders(s),this.handleProviderChange=this.handleProviderChange.bind(this),this.select&&this.select.addEventListener("change",this.handleProviderChange)}return e.prototype.handleProviderChange=function(e){},e.parseProviders=function(e){var r=JSON.parse(e);return console.log(r),[]},e}();r.default=n},"./resources/scss/admin.scss":
/*!***********************************!*\
  !*** ./resources/scss/admin.scss ***!
  \***********************************/
/*! no static exports found */function(e,r,s){var n=s(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./admin.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/admin.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/admin.ts ./resources/scss/admin.scss ***!
  \*****************************************************************/
/*! no static exports found */function(e,r,s){s(/*! /Users/abryrath/Union/Library/geolocation/resources/js/admin.ts */"./resources/js/admin.ts"),e.exports=s(/*! /Users/abryrath/Union/Library/geolocation/resources/scss/admin.scss */"./resources/scss/admin.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FkbWluLnRzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb3ZpZGVyU2VsZWN0LnRzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zY3NzL2FkbWluLnNjc3MiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJtYWluIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX2NvbXBvbmVudHNfUHJvdmlkZXJTZWxlY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlclNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoaXMiLCJQcm92aWRlclNlbGVjdCIsInNlY3Rpb24iLCJzZWxlY3QiLCJwcm92aWRlcnNKc29uIiwiZGF0YXNldCIsInByb3ZpZGVycyIsInBhcnNlUHJvdmlkZXJzIiwiaGFuZGxlUHJvdmlkZXJDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiY29udGVudCIsIm9wdGlvbnMiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwidW5kZWZpbmVkIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiYUFDQSxTQUFBQSxFQUFBQyxHQVFBLElBUEEsSUFNQUMsRUFBQUMsRUFOQUMsRUFBQUgsRUFBQSxHQUNBSSxFQUFBSixFQUFBLEdBQ0FLLEVBQUFMLEVBQUEsR0FJQU0sRUFBQSxFQUFBQyxFQUFBLEdBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAsR0FBQSxJQUVBTyxFQUFBUCxHQUFBLEVBRUEsSUFBQUQsS0FBQUcsRUFDQU8sT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVYsRUFBQUgsS0FDQWMsRUFBQWQsR0FBQUcsRUFBQUgsSUFLQSxJQUZBZSxLQUFBaEIsR0FFQU8sRUFBQUMsUUFDQUQsRUFBQVUsT0FBQVYsR0FPQSxPQUhBVyxFQUFBUixLQUFBUyxNQUFBRCxFQUFBYixHQUFBLElBR0FlLElBRUEsU0FBQUEsSUFFQSxJQURBLElBQUFDLEVBQ0FmLEVBQUEsRUFBaUJBLEVBQUFZLEVBQUFWLE9BQTRCRixJQUFBLENBRzdDLElBRkEsSUFBQWdCLEVBQUFKLEVBQUFaLEdBQ0FpQixHQUFBLEVBQ0FDLEVBQUEsRUFBa0JBLEVBQUFGLEVBQUFkLE9BQTJCZ0IsSUFBQSxDQUM3QyxJQUFBQyxFQUFBSCxFQUFBRSxH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QXFCeEIsS0FBS2dCLE1BRXREQSxLQUFLRyxRQUdWSCxLQUFLRyxPQUFPTSxpQkFBaUIsU0FBVVQsS0FBS1Esc0JBY3BELE9BWElQLEVBQUExRCxVQUFBaUUscUJBQUEsU0FBcUJFLEtBS2RULEVBQUFNLGVBQVAsU0FBc0JJLEdBQ2xCLElBQU1oRixFQUFPaUYsS0FBS0MsTUFBTUYsR0FHeEIsT0FGQWhCLFFBQVFDLElBQUlqRSxHQUVMLElBRWZzRSxFQS9CQTs7Ozs4Q0NEQSxJQUFBYSxFQUFjeEQsMk1BQVEsNk1BRXRCLGlCQUFBd0QsTUFBQSxFQUE0Q25ELEVBQUExQixFQUFTNkUsRUFBQSxNQU9yRCxJQUFBQyxFQUFBLENBQWVDLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWE3RCx5REFBUSwrQ0FBUkEsQ0FBMkR3RCxFQUFBQyxHQUV4RUQsRUFBQU0sU0FBQXpELEVBQUFELFFBQUFvRCxFQUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUHJvdmlkZXJTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyU2VsZWN0JztcblxuY2xhc3MgQWRtaW4ge1xuICAgIHB1YmxpYyBwcm92aWRlclNlbGVjdDogUHJvdmlkZXJTZWxlY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkbWluJyk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyU2VsZWN0OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb3ZpZGVyLXNlbGVjdF0nKTtcbiAgICAgICAgaWYgKHByb3ZpZGVyU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyU2VsZWN0ID0gbmV3IFByb3ZpZGVyU2VsZWN0KHByb3ZpZGVyU2VsZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IEFkbWluKCk7IiwiaW1wb3J0IElQcm92aWRlciBmcm9tICcuLi9pbnRlcmZhY2VzL0lQcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3ZpZGVyU2VsZWN0IHtcbiAgICBwdWJsaWMgc2VjdGlvbjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVibGljIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwcm92aWRlcnM6IElQcm92aWRlcltdO1xuXG4gICAgY29uc3RydWN0b3Ioc2VjdGlvbjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gc2VjdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmlkZXJTZWxlY3QnKTtcbiAgICAgICAgY29uc3QgcHJvdmlkZXJzSnNvbjogc3RyaW5nID0gdGhpcy5zZWN0aW9uLmRhdGFzZXQucHJvdmlkZXJzO1xuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IFByb3ZpZGVyU2VsZWN0LnBhcnNlUHJvdmlkZXJzKHByb3ZpZGVyc0pzb24pO1xuXG4gICAgICAgIC8vIE1ldGhvZCBiaW5kaW5nXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvdmlkZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb3ZpZGVyQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUHJvdmlkZXJDaGFuZ2UpO1xuICAgIH1cblxuICAgIGhhbmRsZVByb3ZpZGVyQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBTdGF0aWMgbWV0aG9kc1xuICAgIHN0YXRpYyBwYXJzZVByb3ZpZGVycyhqc29uOiBzdHJpbmcpOiBJUHJvdmlkZXJbXSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FkbWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FkbWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/ZW1iZWRkZWQhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9hZG1pbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==