(this["webpackJsonpfhir-react-app"]=this["webpackJsonpfhir-react-app"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(49),c=a.n(i),s=(a(56),a(50)),o=a(3),d=a(4),l=a(6),u=a(5),p=a(7),m=(a(57),a(11)),h=a.n(m),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container patient-info"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"row"},Object.keys(this.props.patient).map((function(e){return n.a.createElement("th",{className:"col"},e)})))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"row"},Object.values(this.props.patient).map((function(e){return n.a.createElement("td",{className:"col"},e.toString())}))))))}}]),t}(n.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).retreivePhone=function(e){return{Number:e.value,Type:e.use}},a.retreiveAddress=function(e){var t=e.use,a=e.line,r=e.city,n=e.state,i=e.postalCode,c=e.country;return{Street1:a?a[0]:"",Street2:a?a[1]:"",City:r,State:n,PostalCode:i,Country:c,Type:t}},a.retreiveContacts=function(e){var t=e.relationship,r=e.name,n=e.telecom,i=e.address;return{Email:"",Name:r.text,Phones:n.map(a.retreivePhone),RelationShip:t?t[0].text:"",Address:i?a.retreiveAddress(i):""}},a.getPatientDetails=function(e){return{Name:e.name.find((function(e){return"official"==e.use})).text,Gender:e.gender,Addresses:e.address.map(a.retreiveAddress),Active:e.active,BirthDate:e.birthDate,Phone:e.telecom.map(a.retreivePhone),EmergencyContacts:e.contact.map(a.retreiveContacts)}},a.smartKey=e.smartKey,null==e.smartKey?a.state={patient:{resourceType:"Patient",id:"4342010",meta:{versionId:"25",lastUpdated:"2019-07-22T08:19:55.000Z"},text:{status:"generated",div:'<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Status</b>: Active</p><p><b>Name</b>: SMART, JOE</p><p><b>DOB</b>: Apr 29, 1976</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>'},extension:[{url:"http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",extension:[{url:"ombCategory",valueCoding:{system:"urn:oid:2.16.840.1.113883.6.238",code:"2186-5",display:"Non Hispanic or Latino",userSelected:!1}},{url:"text",valueString:"Not Hispanic or Latino"}]}],identifier:[{id:"CI-6810251-0",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"10",display:"MRN",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"MR",display:"Medical record number",userSelected:!1}],text:"MRN"},system:"urn:oid:1.1.1.1.1.1",value:"10002702",period:{start:"2016-06-22T21:06:58.000Z"}},{id:"CI-8934220-2",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"670843",display:"Messaging",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"U",display:"Unspecified identifier",userSelected:!1}],text:"Messaging"},system:"urn:oid:2.16.840.1.113883.3.13.8",value:"FB4A2EB3BCB34B208FEEAFA27A7BD252",period:{start:"2018-09-13T16:44:32.000Z"}},{id:"CI-7476209-3",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:687F29DD-69DD-4DE5-ACB1-FD8A2241EF3A:PRINCIPAL:UY4572B79XK",period:{start:"2016-01-01T10:00:00.000Z"}},{id:"CI-7476210-4",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"urn:cerner:identity-federation:realm:687f29dd-69dd-4de5-acb1-fd8a2241ef3a:principal:UY4572B79XK",period:{start:"2016-01-01T10:00:00.000Z"}},{id:"CI-9064212-5",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYZ1234"},{id:"CI-9070210-6",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYIWIE1234"}],active:!0,name:[{id:"CI-4342010-0",use:"official",text:"SMART, JOE",family:"SMART",given:["JOE"],period:{start:"2016-06-22T21:06:59.000Z"}}],telecom:[{id:"CI-PH-2023942-0",system:"phone",value:"9139898765",use:"home",rank:"1",period:{start:"2017-06-27T21:47:16.000Z"}},{id:"CI-PH-2023944-1",system:"phone",value:"9137876555",use:"mobile",rank:"1",period:{start:"2017-06-27T21:47:16.000Z"}},{id:"CI-EM-2399940-0",system:"email",value:"kathy.pickering@cerner.com",use:"home",rank:"1",period:{start:"2018-09-13T16:43:28.000Z"}}],gender:"male",birthDate:"1976-04-29",address:[{id:"CI-1925899-0",use:"home",text:"1234 Blvd\nOverland Park, KS 66213\nUSA",line:["1234 Blvd"],city:"Overland Park",district:"Johnson",state:"KS",postalCode:"66213",country:"USA",period:{start:"2017-06-27T21:47:16.000Z"}}],maritalStatus:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/38",code:"309237",display:"Married",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married",userSelected:!1}],text:"Married"},contact:[{relationship:[{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/351",code:"36327661",display:"Authorized Representative",userSelected:!0}],text:"Authorized Representative"}],name:{id:"CI-4342009-0",use:"official",text:"SHANKAR, Ganesh Jayaraman",family:"SHANKAR",given:["Ganesh","Jayaraman"],period:{start:"2016-06-22T20:43:05.000Z"}},telecom:[{system:"phone",value:"9035768555",use:"home",rank:"1",period:{start:"2019-09-18T20:48:19.000Z"}},{system:"email",value:"kathy.pickering@cerner.com",use:"home",rank:"1",period:{start:"2018-09-13T16:37:32.000Z"}}],gender:"female",period:{start:"2017-06-09T13:47:35.000Z",end:"2018-05-17T20:51:36.000Z"}}],communication:[{language:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/36",code:"151",display:"English",userSelected:!0},{system:"urn:ietf:bcp:47",code:"en",display:"English",userSelected:!1}],text:"English"},preferred:!0}],generalPractitioner:[{id:"CI-6810257-15",reference:"Practitioner/1912007",display:"McCurdy, Michael"}]}}:m.oauth2.ready().then((function(e){return Promise.all([e.patient.read()])})).then((function(e){var t=Object(s.a)(e,2),r=t[0],n=t[1];console.log("patient",r),console.log("meds",n),a.state={patient:a.getPatientDetails(r)}}),(function(e){console.error(e)})).catch(console.error),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},"Redirected to here",window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'",n.a.createElement(y,{patient:this.patient}))}}]),t}(n.a.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(h.a),h.a.oauth2.authorize({client_id:"ba2b34f9-2f17-4858-b5f9-6a5b3312e26a",scope:"patient/Patient.read patient/MedicationRequest.read launch online_access openid profile"}),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'")}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=Object.fromEntries(window.location.href.replace(/.*\?/,"").split("&").map((function(e){return e.split("=")})));c.a.render(window.location.href.replace(/.*\?/,"").split("&").filter((function(e){return"iss"==e.split("=")[0]})).length>0?n.a.createElement(f,null):n.a.createElement(b,{smartKey:v.state?v.state:null}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t,a){e.exports=a(108)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.f746ff4e.chunk.js.map