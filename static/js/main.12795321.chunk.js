(this["webpackJsonpfhir-react-app"]=this["webpackJsonpfhir-react-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(50),c=a.n(r),s=(a(56),a(1)),l=a(2),i=a(4),d=a(3),m=a(7),u=a(5),p=(a(57),a(12)),h=a.n(p),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).formatAddress=function(e){var t=e.Street1,a=e.Street2,n=e.City,o=e.State,r=e.PostalCode,c=e.Country,s=e.Type;return"".concat(t,", ").concat(a?a+", ":"").concat(n,", ").concat(o,", ").concat(r,", ").concat(c," [").concat(s,"]")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("patient Info ",this.props.patient),o.a.createElement("div",{className:"col-lg-4 patient-info"},o.a.createElement("div",{className:"row col-lg-12 col-md-12 no-gutters p-0 border-right"},o.a.createElement("h4",{className:"col-lg-12 p-2 bg-secondary text-light mb-0 border-0 mt-2"},"Patient Information"),o.a.createElement("ul",{className:"col p-0 m-0"},o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Name"),this.props.patient.Name),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Gender"),this.props.patient.Gender),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Addresses"),Array.isArray(this.props.patient.Addresses)?this.props.patient.Addresses.map(this.formatAddress):"N/A"),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Active"),this.props.patient.Active?"Yes":"No"),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Birth Date"),this.props.patient.BirthDate),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Phone"),Array.isArray(this.props.patient.Phone)?this.props.patient.Phone.map((function(e){return o.a.createElement(o.a.Fragment,null,"".concat(e.Number," (").concat(e.Type,")"),o.a.createElement("br",null))})):"N/A"),o.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},o.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Emergency Contacts"),Array.isArray(this.props.patient.EmergencyContacts)?this.props.patient.EmergencyContacts.map((function(e){return o.a.createElement(o.a.Fragment,null,"".concat(e.Name," (").concat(e.RelationShip,")"),o.a.createElement("br",null))})):"N/A"))))}}]),t}(o.a.Component),f={resourceType:"Patient",id:"4342010",meta:{versionId:"25",lastUpdated:"2019-07-22T08:19:55.000Z"},text:{status:"generated",div:'<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Status</b>: Active</p><p><b>Name</b>: SMART, JOE</p><p><b>DOB</b>: Apr 29, 1976</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>'},extension:[{url:"http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",extension:[{url:"ombCategory",valueCoding:{system:"urn:oid:2.16.840.1.113883.6.238",code:"2186-5",display:"Non Hispanic or Latino",userSelected:!1}},{url:"text",valueString:"Not Hispanic or Latino"}]}],identifier:[{id:"CI-6810251-0",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"10",display:"MRN",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"MR",display:"Medical record number",userSelected:!1}],text:"MRN"},system:"urn:oid:1.1.1.1.1.1",value:"10002702",period:{start:"2016-06-22T21:06:58.000Z"}},{id:"CI-8934220-2",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"670843",display:"Messaging",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"U",display:"Unspecified identifier",userSelected:!1}],text:"Messaging"},system:"urn:oid:2.16.840.1.113883.3.13.8",value:"FB4A2EB3BCB34B208FEEAFA27A7BD252",period:{start:"2018-09-13T16:44:32.000Z"}},{id:"CI-7476209-3",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:687F29DD-69DD-4DE5-ACB1-FD8A2241EF3A:PRINCIPAL:UY4572B79XK",period:{start:"2016-01-01T10:00:00.000Z"}},{id:"CI-7476210-4",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"urn:cerner:identity-federation:realm:687f29dd-69dd-4de5-acb1-fd8a2241ef3a:principal:UY4572B79XK",period:{start:"2016-01-01T10:00:00.000Z"}},{id:"CI-9064212-5",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYZ1234"},{id:"CI-9070210-6",use:"usual",type:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/4",code:"36322657",display:"Federated Person Principal",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"AN",display:"Account number",userSelected:!1}],text:"Federated Person Principal"},system:"urn:oid:2.16.840.1.113883.3.13.6",value:"URN:CERNER:IDENTITY-FEDERATION:REALM:2E882EFF-FA72-4882-ADC8-A685F7D2BFA6:PRINCIPAL:XYIWIE1234"}],active:!0,name:[{id:"CI-4342010-0",use:"official",text:"SMART, JOE",family:"SMART",given:["JOE"],period:{start:"2016-06-22T21:06:59.000Z"}}],telecom:[{id:"CI-PH-2023942-0",system:"phone",value:"9139898765",use:"home",rank:"1",period:{start:"2017-06-27T21:47:16.000Z"}},{id:"CI-PH-2023944-1",system:"phone",value:"9137876555",use:"mobile",rank:"1",period:{start:"2017-06-27T21:47:16.000Z"}},{id:"CI-EM-2399940-0",system:"email",value:"kathy.pickering@cerner.com",use:"home",rank:"1",period:{start:"2018-09-13T16:43:28.000Z"}}],gender:"male",birthDate:"1976-04-29",address:[{id:"CI-1925899-0",use:"home",text:"1234 Blvd\nOverland Park, KS 66213\nUSA",line:["1234 Blvd"],city:"Overland Park",district:"Johnson",state:"KS",postalCode:"66213",country:"USA",period:{start:"2017-06-27T21:47:16.000Z"}}],maritalStatus:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/38",code:"309237",display:"Married",userSelected:!0},{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married",userSelected:!1}],text:"Married"},contact:[{relationship:[{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/351",code:"36327661",display:"Authorized Representative",userSelected:!0}],text:"Authorized Representative"}],name:{id:"CI-4342009-0",use:"official",text:"SHANKAR, Ganesh Jayaraman",family:"SHANKAR",given:["Ganesh","Jayaraman"],period:{start:"2016-06-22T20:43:05.000Z"}},telecom:[{system:"phone",value:"9035768555",use:"home",rank:"1",period:{start:"2019-09-18T20:48:19.000Z"}},{system:"email",value:"kathy.pickering@cerner.com",use:"home",rank:"1",period:{start:"2018-09-13T16:37:32.000Z"}}],gender:"female",period:{start:"2017-06-09T13:47:35.000Z",end:"2018-05-17T20:51:36.000Z"}}],communication:[{language:{coding:[{system:"https://fhir.cerner.com/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/codeSet/36",code:"151",display:"English",userSelected:!0},{system:"urn:ietf:bcp:47",code:"en",display:"English",userSelected:!1}],text:"English"},preferred:!0}],generalPractitioner:[{id:"CI-6810257-15",reference:"Practitioner/1912007",display:"McCurdy, Michael"}]},y={baseURL:"https://<endpoint>"},g=[{Coding:{Code:120826863,Text:""},Dose:"N/A",DoseQuantity:1e3,DoseUnits:"ml",EffectiveDate:"2017-09-07T08:33:00.000-07:00",Medication:"Dextrose 2.5% with 0.45% NaCl 1000 mL",ReasonGiven:"N/A",ReasonNotGiven:"N/A",Route:"IV",Status:"active",WasGiven:!0}],E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleLoadData=function(){console.log("Loading medication data!"),fetch(y.baseURL+"/Medication").then((function(e){return a.udpateState(e)}),(function(e){console.log("fetch medication failed",e),a.updateState(g)}))},a.state={medication:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.UpdateMedication=function(e){this.updateState(e)}.bind(this)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow"},o.a.createElement("span",null,"Medication"),o.a.createElement("button",{onClick:this.handleLoadData,className:"btn btn-secondary btn-sm"},"Load Data")),this.state.medication&&this.renderTable())}},{key:"updateState",value:function(e){this.setState({medication:e})}},{key:"renderTable",value:function(){return o.a.createElement("div",{className:"table-responsive col-lg-12 p-0"},o.a.createElement("table",{className:"table table-striped table-sm table-hover m-0"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"row m-0"},o.a.createElement("th",{className:"col"},"Medication"),o.a.createElement("th",{className:"col"},"Status"),o.a.createElement("th",{className:"col"},"DoseQuantity"),o.a.createElement("th",{className:"col"},"DoseUnits"),o.a.createElement("th",{className:"col"},"EffectiveDate"),o.a.createElement("th",{className:"col"},"ReasonGiven"),o.a.createElement("th",{className:"col"},"ReasonNotGiven"),o.a.createElement("th",{className:"col"},"Route"),o.a.createElement("th",{className:"col"},"WasGiven"))),o.a.createElement("tbody",null,this.state.medication.map((function(e){return o.a.createElement("tr",{className:"row m-0"},o.a.createElement("td",{className:"col"},e.Medication),o.a.createElement("td",{className:"col"},e.Status),o.a.createElement("td",{className:"col"},e.DoseQuantity),o.a.createElement("td",{className:"col"},e.DoseUnits),o.a.createElement("td",{className:"col"},new Date(e.EffectiveDate).toDateString()),o.a.createElement("td",{className:"col"},e.ReasonGiven),o.a.createElement("td",{className:"col"},e.ReasonNotGiven),o.a.createElement("td",{className:"col"},e.Route),o.a.createElement("td",{className:"col"},e.WasGiven?"Yes":"No"))})))))}}]),t}(o.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={collapsed:!1},a.toggleCollapse.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.data&&o.a.createElement("div",{className:"col-lg-12 p-1 bg-secondary text-light d-flex justify-content-between"},o.a.createElement("span",null,this.props.model),o.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:this.toggleCollapse},this.state.collapsed?"expand":"collapse")),this.props.data&&this.renderTable())}},{key:"toggleCollapse",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"renderTable",value:function(){return o.a.createElement("div",{className:"table-responsive col-lg-12 p-0 "+(this.state.collapsed?"d-none":"")},o.a.createElement("table",{className:"table table-striped table-sm table-hover m-0"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"row m-0"},o.a.createElement("th",{className:"col"},"Text"),o.a.createElement("th",{className:"col"},"Onset"),o.a.createElement("th",{className:"col"},"Abatement Date"),o.a.createElement("th",{className:"col"},"Severity"),o.a.createElement("th",{className:"col"},"Coding"))),o.a.createElement("tbody",null,[].concat(this.props.data).map((function(e){return o.a.createElement("tr",{className:"row m-0"},o.a.createElement("td",{className:"col"},e.Text),o.a.createElement("td",{className:"col"},e.Onset),o.a.createElement("td",{className:"col"},e.AbatementDate),o.a.createElement("td",{className:"col"},e.Severity),o.a.createElement("td",{className:"col"},function(e){var t=e.Code,a=e.Text;return"".concat(a||"N/A"," [").concat(t||"N/A","]")}(e.Coding)))})))))}}]),t}(o.a.Component),v={Diagnoses:[{Coding:{Code:"SomeCode",Text:"Some Text"},AbatementDate:"N/A",Onset:"N/A",Severity:"critical",Text:"Some diagnosis"}],HealthConcerns:[{Coding:{Code:"SomeCode",Text:"Some Text"},AbatementDate:"N/A",Onset:"N/A",Severity:"medium",Text:"Some Health Concern"}],Problems:[{Coding:{Code:"SomeCode",Text:"Some Text"},AbatementDate:"N/A",Onset:"N/A",Severity:"severe",Text:"Some problem"}]},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleLoadData=function(){console.log("Loading condition data!"),fetch(y.baseURL+"/Condition").then((function(e){return a.udpateState(e)}),(function(e){console.log("fetch condition failed",e),a.updateState(v)}))},a.updateState.bind(Object(m.a)(a)),a.state={condition:{Diagnoses:null,Problems:null}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow"},o.a.createElement("span",null,"Condition"),o.a.createElement("button",{onClick:this.handleLoadData,className:"btn btn-secondary btn-sm"},"Load Data")),o.a.createElement("div",{className:"condition d-flex flex-column"},o.a.createElement(N,{model:"Diagnosis",data:this.state.condition.Diagnoses}),o.a.createElement(N,{model:"Problems",data:this.state.condition.Problems})))}},{key:"updateState",value:function(e){this.setState({condition:e})}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).retreivePhone=function(e){return{Number:e.value,Type:e.use}},a.retreiveAddress=function(e){var t=e.use,a=e.line,n=e.city,o=e.state,r=e.postalCode,c=e.country;return{Street1:a?a[0]:"",Street2:a?a[1]:"N/A",City:n,State:o,PostalCode:r,Country:c,Type:t}},a.retreiveContacts=function(e){var t=e.relationship,n=e.name,o=e.telecom,r=e.address;return{Email:"N/A",Name:n.text,Phones:o?o.map(a.retreivePhone):"N/A",RelationShip:t?t[0].text:"N/A",Address:r?a.retreiveAddress(r):"N/A"}},a.getPatientDetails=function(e){return{Name:e.name?e.name.find((function(e){return"official"==e.use})).text:"N/A",Gender:e.gender,Addresses:e.address?e.address.map(a.retreiveAddress):"N/A",Active:e.active,BirthDate:e.birthDate,Phone:e.telecom?e.telecom.map(a.retreivePhone):"N/A",EmergencyContacts:e.contact?e.contact.map(a.retreiveContacts):"N/A"}},a.updatePatient.bind(Object(m.a)(a)),null==e.smartKey?a.state={patient:a.getPatientDetails(f)}:(a.state={patient:null},p.oauth2.ready().then((function(e){return e.patient.read()})).then((function(e){console.log("patient",e),a.updatePatient(a.getPatientDetails(e))}),(function(e){console.error(e)})).catch(console.error)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.UpdatePatient=function(e){this.updatePatient(e)}.bind(this)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid p-0 justify-content-start row no-gutters"},o.a.createElement("div",{className:"navbar bg-dark text-light col-lg-12 pl-2",style:{backgroundColor:"#005693"}},o.a.createElement("h4",null,"React FHIR Test App")),this.state.patient&&o.a.createElement(b,{patient:this.state.patient}),!this.state.patient&&o.a.createElement("div",null,"Waiting for information to load ... !"),this.state.patient&&o.a.createElement("div",{className:"col-lg-8 p-2"},o.a.createElement(E,null),o.a.createElement("hr",null),o.a.createElement(A,null)))}},{key:"updatePatient",value:function(e){this.setState({patient:e})}}]),t}(o.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(i.a)(this,Object(d.a)(t).call(this,e)),console.log(h.a),h.a.oauth2.authorize({client_id:"ba2b34f9-2f17-4858-b5f9-6a5b3312e26a",scope:"patient/Patient.read patient/Encounter.read patient/Condition.read patient/MedicationRequest.read launch online_access openid profile"}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var x=Object.fromEntries(window.location.href.replace(/.*\?/,"").split("&").map((function(e){return e.split("=")})));c.a.render(window.location.href.replace(/.*\?/,"").split("&").filter((function(e){return"iss"==e.split("=")[0]})).length>0?o.a.createElement(C,null):o.a.createElement(S,{smartKey:x.state?x.state:null}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t,a){e.exports=a(109)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.12795321.chunk.js.map