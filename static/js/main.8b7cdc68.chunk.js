(this["webpackJsonpfhir-react-app"]=this["webpackJsonpfhir-react-app"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(49),i=a.n(r),c=(a(56),a(50)),s=a(14),l=a(16),u=a(15),f=a(7),p=a(17),h=(a(57),a(2)),g=a.n(h),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._storageData=null,a.smartKey=e.smartKey,console.log("props",e),console.log("smart",h.oauth2),console.log("storage",sessionStorage),console.log("storage",a.StorageData),console.log("smartKey",a.smartKey),h.oauth2.init({iss:a.StorageData.serverUrl,redirectUri:a.StorageData.redirectUri,clientId:a.StorageData.clientId,scope:a.StorageData.scope}).then((function(e){return Promise.all([e.patient.read(),e.request("/MedicationRequest?patient=".concat(e.patient.id),{resolveReferences:"medicationReference",pageLimit:0,flat:!0})])})).then((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];console.log(JSON.stringify(a)+"<br><br>"+JSON.stringify(n))}),(function(e){console.error(e)})),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"StorageData",get:function(){return this._storageData=null==this._storageData?JSON.parse(sessionStorage[this.smartKey]):this._storageData,this._storageData}}]),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},"Redirected to here",window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'")}}]),t}(o.a.Component),d=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(g.a),g.a.oauth2.authorize({client_id:"ba2b34f9-2f17-4858-b5f9-6a5b3312e26a",scope:"patient/Patient.read patient"}),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=Object.fromEntries(window.location.href.replace(/.*\?/,"").split("&").map((function(e){return e.split("=")})));i.a.render(window.location.href.replace(/.*\?/,"").split("&").filter((function(e){return"iss"==e.split("=")[0]})).length>0?o.a.createElement(d,null):o.a.createElement(b,{smartKey:m.state}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t,a){e.exports=a(108)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.8b7cdc68.chunk.js.map