(this["webpackJsonpfhir-react-app"]=this["webpackJsonpfhir-react-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(50),o=a.n(l),r=(a(56),a(2)),c=a(3),s=a(5),d=a(4),m=a(1),u=a(6),h=(a(57),a(12)),p=a.n(h),b=[{id:4342012,name:"SMART, Timmy",desc:"Young male child with inpatient encounter",birthDate:"2012-02-19",gender:"Male"},{id:1316024,name:"Peters, Tim",desc:"",birthDate:"1961-04-30",gender:"Male"},{id:4342008,name:"SMART, Wilma",desc:"Communication language set to Hindi",birthDate:"1947-03-16",gender:"Female"},{id:4342009,name:"SMART, Nancy",desc:"Patient with pregnancy condition",birthDate:"1980-08-11",gender:"Female"},{id:4342010,name:"SMART, Joe",desc:"",birthDate:"1976-04-29",gender:"Male"},{id:4342011,name:"SMART, Hailey",desc:"",birthDate:"2003-12-02",gender:"Female"},{id:4478007,name:"SMART, Fred Rick",desc:"",birthDate:"1946-08-22",gender:"Male"},{id:4596007,name:"SMART, Valerie S",desc:"",birthDate:"1984-04-15",gender:"Female"},{id:4696007,name:"Rotunda, Rhonda",desc:"Patient with pregnancy condition",birthDate:"1980-05-01",gender:"Female"},{id:4614008,name:"Read, Amber",desc:"",birthDate:"2005-11-21",gender:"Female"},{id:4754012,name:"SMART, Dave",desc:"",birthDate:"1980-07-15",gender:"Male"},{id:4790007,name:"MARTIN-GREEN, Sonequa",desc:"",birthDate:"1985-04-12",gender:"Female"},{id:4642007,name:"SMART, Connie",desc:"Patient with common technical issues",birthDate:"1972-12-19",gender:"Female"},{id:4342012,name:"SMART, Timmy",desc:"Young male child with outpatient encounter",birthDate:"2012-02-19",gender:"Male"},{id:4890008,name:"Svensson, Linda",desc:"",birthDate:"1981-03-30",gender:"Female"},{id:4890007,name:"Johansson, Anders",desc:"",birthDate:"1936-10-15",gender:"Male"},{id:4924007,name:"Goldberg, Whoopi",desc:"Critical care patient",birthDate:"1955-01-01",gender:"Female"},{id:5226007,name:"Parrish, Lizzie",desc:"ICU patient with hourly vital signs",birthDate:"1990-08-30",gender:"Female"},{id:5338007,name:"Davis, Athol J",desc:"Patient with height and weight in imperial units",birthDate:"1989-02-19",gender:"Male"},{id:4744007,name:"Oncology, Cancerstaging",desc:"Cancer patient with cancer staging observations",birthDate:"1960-01-17",gender:"Female"},{id:5862008,name:"Emory, Hal",desc:"inpatient with Vancomycin and Augmentin medication orders",birthDate:"1991-04-05",gender:"male"},{id:5862007,name:"Emory, Carrie",desc:"inpatient with Levofloxacin and Vancomycin medication orders",birthDate:"1990-04-01",gender:"Female"},{id:5926007,name:"Walter, Claudio",desc:"69 year old male patient that has had a Pulmonary \u2026ive conditions and laboratory orders with results",birthDate:"1949-09-09",gender:"Male"},{id:5938007,name:"McNabb, Sheona",desc:"4 month old female inpatient with cow milk and nut allergies",birthDate:"2019-01-10",gender:"Female"},{id:5938008,name:"Ruskin, Ishbel",desc:"1 yr old female inpatient with acetaminophen and egg allergies",birthDate:"2018-05-10",gender:"Female"},{id:5938009,name:"McGee, Ian",desc:"7 yr old male inpatient with sulfa and tree pollen allergies",birthDate:"2012-05-09",gender:"male"},{id:5998007,name:"Promis, Portal",desc:"30 yr old female inpatient with multiple health questioner documentations",birthDate:"1988-08-08",gender:"female"},{id:6946007,name:"Snow, Christine",desc:"Patient with labor and delivery observations, conditions and procedures.",birthDate:"1994-12-24",gender:"Female"},{id:6954007,name:"Snow, Jennifer",desc:"Newborn with observations, conditions and procedures.",birthDate:"2019-02-12",gender:"Female"}],g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){return a.props.onHandlePatientChange(e)},a.formatAddress=function(e){var t=e.Street1,a=e.Street2,n=e.City,l=e.State,o=e.PostalCode,r=e.Country,c=e.Type;return i.a.createElement(i.a.Fragment,null,"".concat(t,", ").concat(a?a+", ":"").concat(n,", ").concat(l,", ").concat(o,", ").concat(r," [").concat(c,"]"),"} ",i.a.createElement("br",null))},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-lg-4 patient-info"},i.a.createElement("div",{className:"row col-lg-12 col-md-12 no-gutters p-0 border-right"},i.a.createElement("h4",{className:"col-lg-12 pl-2 bg-secondary text-light mb-0 border-0 mt-2 row p-1"},i.a.createElement("span",{className:"col-lg-6"},"Patient Information"),i.a.createElement("select",{className:"form-control col-lg-6 bg-dark text-light",onChange:this.handleChange},i.a.createElement("option",{disabled:!0,selected:!0},"-- Select Patient --"),b.map((function(e){return i.a.createElement("option",{value:e.id},e.name)})))),!this.props.patient&&i.a.createElement("div",{className:"text-secondary p-3"},"Nothing to show"),this.props.patient&&i.a.createElement("ul",{className:"col p-0 m-0"},i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Name"),this.props.patient.Name),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Gender"),this.props.patient.Gender),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Addresses"),Array.isArray(this.props.patient.Addresses)?this.props.patient.Addresses.map(this.formatAddress):"N/A"),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Active"),this.props.patient.Active?"Yes":"No"),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Birth Date"),this.props.patient.BirthDate),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Phone"),Array.isArray(this.props.patient.Phone)?this.props.patient.Phone.map((function(e){return i.a.createElement(i.a.Fragment,null,"".concat(e.Number," (").concat(e.Type,")"),i.a.createElement("br",null))})):"N/A"),i.a.createElement("li",{className:"row p-3 border-bottom text-left no-gutters"},i.a.createElement("span",{className:"col-lg-3 text-left font-weight-bold"},"Emergency Contacts"),Array.isArray(this.props.patient.EmergencyContacts)?this.props.patient.EmergencyContacts.map((function(e){return i.a.createElement(i.a.Fragment,null,"".concat(e.Name," (").concat(e.RelationShip,")"),i.a.createElement("br",null))})):"N/A"))))}}]),t}(i.a.Component),f={baseURL:"https://nuancefhircernerapi.azurewebsites.net/api"},E=[{Coding:{Code:120826863,Text:""},Dose:"N/A",DoseQuantity:1e3,DoseUnits:"ml",EffectiveDate:"2017-09-07T08:33:00.000-07:00",Medication:"Dextrose 2.5% with 0.45% NaCl 1000 mL",ReasonGiven:"N/A",ReasonNotGiven:"N/A",Route:"IV",Status:"active",WasGiven:!0}],N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).updateData=function(){0!=a.props.patientId&&(console.log("Loading medication data!"),fetch(f.baseURL+"/MedicationRequest/Patient/"+a.props.patientId).then((function(e){return e.json().then(a.udpateState)}),(function(e){console.log("fetch medication failed",e),a.updateState(E)})))},a.state={medication:null},a.updateData=a.updateData.bind(Object(m.a)(a)),a.updateState=a.updateState.bind(Object(m.a)(a)),a.updateData(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.UpdateMedication=function(e){this.updateState(e)}.bind(this)}},{key:"componentDidUpdate",value:function(e,t){e.patientId!=this.props.patientId&&this.updateData()}},{key:"render",value:function(){return console.log("medication render"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow"},i.a.createElement("span",null,"Medication")),this.state.medication&&this.renderTable())}},{key:"updateState",value:function(e){console.log("update state medication"),this.setState({medication:e})}},{key:"renderTable",value:function(){return i.a.createElement("div",{className:"table-responsive col-lg-12 p-0"},i.a.createElement("table",{className:"table table-striped table-sm table-hover m-0"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"row m-0"},i.a.createElement("th",{className:"col"},"Medication"),i.a.createElement("th",{className:"col"},"Status"),i.a.createElement("th",{className:"col"},"DoseQuantity"),i.a.createElement("th",{className:"col"},"DoseUnits"),i.a.createElement("th",{className:"col"},"EffectiveDate"),i.a.createElement("th",{className:"col"},"ReasonGiven"),i.a.createElement("th",{className:"col"},"ReasonNotGiven"),i.a.createElement("th",{className:"col"},"Route"),i.a.createElement("th",{className:"col"},"WasGiven"))),i.a.createElement("tbody",null,this.state.medication.map((function(e){return i.a.createElement("tr",{className:"row m-0"},i.a.createElement("td",{className:"col"},e.Medication),i.a.createElement("td",{className:"col"},e.Status),i.a.createElement("td",{className:"col"},e.DoseQuantity),i.a.createElement("td",{className:"col"},e.DoseUnits),i.a.createElement("td",{className:"col"},new Date(e.EffectiveDate).toDateString()),i.a.createElement("td",{className:"col"},e.ReasonGiven),i.a.createElement("td",{className:"col"},e.ReasonNotGiven),i.a.createElement("td",{className:"col"},e.Route),i.a.createElement("td",{className:"col"},e.WasGiven?"Yes":"No"))})))))}}]),t}(i.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={collapsed:!1},a.toggleCollapse=a.toggleCollapse.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.data&&i.a.createElement("div",{className:"col-lg-12 p-1 bg-secondary text-light d-flex justify-content-between"},i.a.createElement("span",null,this.props.model),i.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:this.toggleCollapse},this.state.collapsed?"expand":"collapse")),this.props.data&&this.renderTable())}},{key:"toggleCollapse",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"renderTable",value:function(){return i.a.createElement("div",{className:"table-responsive col-lg-12 p-0 "+(this.state.collapsed?"d-none":"")},i.a.createElement("table",{className:"table table-striped table-sm table-hover m-0"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"row m-0"},i.a.createElement("th",{className:"col"},"Text"),i.a.createElement("th",{className:"col"},"Onset"),i.a.createElement("th",{className:"col"},"Abatement Date"),i.a.createElement("th",{className:"col"},"Severity"),i.a.createElement("th",{className:"col"},"Coding"))),i.a.createElement("tbody",null,[].concat(this.props.data).map((function(e){return i.a.createElement("tr",{className:"row m-0"},i.a.createElement("td",{className:"col"},e.Text),i.a.createElement("td",{className:"col"},e.Onset),i.a.createElement("td",{className:"col"},e.AbatementDate),i.a.createElement("td",{className:"col"},e.Severity),i.a.createElement("td",{className:"col"},function(e){var t=e.Code,a=e.Text;return"".concat(a||"N/A"," [").concat(t||"N/A","]")}(e.Coding)))})))))}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).updateData=function(){0!=a.props.patientId&&(console.log("Loading condition data!"),fetch(f.baseURL+"/Condition/Id/"+a.props.patientId).then((function(e){200==e.status&&e.json().then(a.udpateState)}),(function(e){console.log("fetch condition failed",e),a.updateState({Diagnoses:null,Problems:null})})))},a.updateState=a.updateState.bind(Object(m.a)(a)),a.state={condition:{Diagnoses:null,Problems:null}},a.updateData=a.updateData.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.patientId!==this.props.patientId&&this.updateData()}},{key:"render",value:function(){return console.log("condition render"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow"},i.a.createElement("span",null,"Condition")),i.a.createElement("div",{className:"condition d-flex flex-column"},i.a.createElement(v,{model:"Diagnosis",data:this.state.condition.Diagnoses}),i.a.createElement(v,{model:"Problems",data:this.state.condition.Problems})))}},{key:"updateState",value:function(e){console.log("update state condition"),this.setState({condition:e})}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handlePatientChange=function(e){fetch(f.baseURL+"/Patient/Id/"+e.target.value).then((function(e){return e.json().then(a.updatePatient)})).catch((function(e){a.updatePatient(null),console.log("error fetching patient",e)}))},a.retreivePhone=function(e){return{Number:e.value,Type:e.use}},a.retreiveAddress=function(e){var t=e.use,a=e.line,n=e.city,i=e.state,l=e.postalCode,o=e.country;return{Street1:a?a[0]:"",Street2:a?a[1]:"N/A",City:n,State:i,PostalCode:l,Country:o,Type:t}},a.retreiveContacts=function(e){var t=e.relationship,n=e.name,i=e.telecom,l=e.address;return{Email:"N/A",Name:n.text,Phones:i?i.map(a.retreivePhone):"N/A",RelationShip:t?t[0].text:"N/A",Address:l?a.retreiveAddress(l):"N/A"}},a.getPatientDetails=function(e){return{Name:e.name?e.name.find((function(e){return"official"==e.use})).text:"N/A",Gender:e.gender,Addresses:e.address?e.address.map(a.retreiveAddress):"N/A",Active:e.active,BirthDate:e.birthDate,Phone:e.telecom?e.telecom.map(a.retreivePhone):"N/A",EmergencyContacts:e.contact?e.contact.map(a.retreiveContacts):"N/A"}},a.updatePatient=a.updatePatient.bind(Object(m.a)(a)),a.state={patient:null},null!==e.smartKey&&h.oauth2.ready().then((function(e){return e.patient.read()})).then((function(e){console.log("patient",e),a.updatePatient(a.getPatientDetails(e))}),(function(e){console.error(e)})).catch(console.error),a.handlePatientChange=a.handlePatientChange.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.UpdatePatient=function(e){this.updatePatient(e)}.bind(this)}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid p-0 justify-content-start row no-gutters"},i.a.createElement("div",{className:"navbar bg-dark text-light col-lg-12 pl-2",style:{backgroundColor:"#005693"}},i.a.createElement("h4",null,"React FHIR Test App")),i.a.createElement(g,{patient:this.state.patient,onHandlePatientChange:this.handlePatientChange}),i.a.createElement("div",{className:"col-lg-8 p-2"},i.a.createElement(N,{patientId:this.state.patient?this.state.patient.Id:0}),i.a.createElement("hr",null),i.a.createElement(y,{patientId:this.state.patient?this.state.patient.Id:0})))}},{key:"updatePatient",value:function(e){this.setState({patient:e})}}]),t}(i.a.Component),D=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(s.a)(this,Object(d.a)(t).call(this,e)),console.log(p.a),p.a.oauth2.authorize({client_id:"ba2b34f9-2f17-4858-b5f9-6a5b3312e26a",scope:"patient/Patient.read patient/Encounter.read patient/Condition.read patient/MedicationRequest.read launch online_access openid profile"}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},window.location.href,"'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'")}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var A=Object.fromEntries(window.location.href.replace(/.*\?/,"").split("&").map((function(e){return e.split("=")})));o.a.render(window.location.href.replace(/.*\?/,"").split("&").filter((function(e){return"iss"==e.split("=")[0]})).length>0?i.a.createElement(D,null):i.a.createElement(w,{smartKey:A.state?A.state:null}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t,a){e.exports=a(109)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.5424b983.chunk.js.map