(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),s=n.n(c),a=n(20),i=n.n(a),o=(n(107),n(9)),l=(n(108),n.p+"static/media/logo.6ce24c58.svg"),u=(n(109),n(14));var d=n(94),j=n.n(d);function h(){var e=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.width,n=e.height;return Object(r.jsx)(j.a,{width:t,height:n,numberOfPieces:550,recycle:!1})}var b=n(10),x=n(49),O=n(67),f=n(57),p=n(39),m=n(38);function g(e){var t,n=Object(c.useState)(!1),s=Object(o.a)(n,2),a=s[0],i=s[1];function l(){var t=100*e.results.totalCorrectAnswered/e.results.totalCount;return Math.round(100*t)/100}function u(){var t=100*e.results.incorrectAnswers/e.results.totalCount;return Math.round(100*t)/100}return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Out of ",Object(r.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(r.jsx)("div",{style:{width:300,margin:"auto"},children:Object(r.jsxs)(O.a,{variant:"flush",children:[function(){if(e.results.totalCorrectAnswered>0)return Object(r.jsxs)(O.a.Item,{variant:"success",children:["Correct answers: ",Object(r.jsx)("b",{children:e.results.totalCorrectAnswered})]})}(),function(){if(e.results.incorrectAnswers>0)return Object(r.jsxs)(O.a.Item,{variant:"danger",children:["Wrong answers: ",Object(r.jsx)("b",{children:e.results.incorrectAnswers})]})}()]})}),Object(r.jsxs)("div",{style:{width:600,marginTop:"1.2rem",marginLeft:"auto",marginRight:"auto"},children:[Object(r.jsxs)(f.a,{style:{borderRadius:"2rem",height:"1.3rem",fontSize:"1.1rem"},children:[Object(r.jsx)(f.a,{variant:"success",now:l(),label:l()+"%"},1),Object(r.jsx)(f.a,{variant:"danger",now:u(),label:u()+"%"},2)]}),function(){var t=100*e.results.totalCorrectAnswered/e.results.totalCount;return Math.round(100*t)/100>99}()&&Object(r.jsx)(h,{})]}),Object(r.jsxs)(m.a,{className:"justify-content-between",children:[Object(r.jsx)(b.a,{variant:"warning",className:"mt-5",onClick:e.runAgain,children:"Run again"}),Object(r.jsxs)(b.a,{variant:"info",className:"mt-5",onClick:function(){i(!a),e.onClick()},"aria-controls":"fade-tbl","aria-expanded":a,children:[a?"Close":"Open"," detailed results"]})]}),e.displayTable&&(t=e.detailedResults,Object(r.jsx)(p.a,{in:a,appear:!0,timeout:600,mountOnEnter:!0,children:Object(r.jsxs)(x.a,{disabled:!0,bordered:!0,id:"fade-tbl",striped:!0,hover:!0,size:"sm",variant:"light",className:"mt-3",children:[Object(r.jsx)("thead",{className:"bg-warning",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Question"}),Object(r.jsx)("th",{children:"Expected answer"}),Object(r.jsx)("th",{children:"Your answer"}),Object(r.jsx)("th",{children:"Correctness"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){var n=e.isCorrect?"success":"danger",c=e.isCorrect?Object(r.jsx)("span",{children:"\u2713"}):"";return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+1}),Object(r.jsx)("td",{children:e.question}),Object(r.jsx)("td",{children:e.expectedAnswer}),Object(r.jsx)("td",{children:e.givenAnswer}),Object(r.jsx)("td",{children:Object(r.jsx)(O.a.Item,{variant:n,children:c})})]},t)}))})]})}))]})}var v=n(56);function w(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],a=n[1],i=function(){e.onClick(s),a("")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{className:"text-center py-3",children:e.listTitle}),Object(r.jsxs)(v.a,{bg:"light",text:"dark",style:{justifyContent:"space-between",height:"14rem",alignItems:"center",padding:"2rem"},children:[Object(r.jsx)(v.a.Title,{style:{width:"30rem"},children:e.currentQuestion.question}),Object(r.jsx)("input",{type:"text",value:s,style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onChange:function(e){return a(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&i()}(e)}}),Object(r.jsx)(b.a,{variant:"info",style:{width:"8rem"},className:"mt-2 mb-2",onClick:i,children:"Next >>"})]}),Object(r.jsx)(f.a,{variant:"warning",animated:!0,now:e.currentProgress,className:"mt-1"}),Object(r.jsxs)("h5",{className:"text-center py-3",children:[e.currentLabel,"/",e.totalLength]})]})}var y=function(e){return function(e){if(null==e)return[{question:"",expectedAnswer:"",givenAnswer:"",isCorrect:!1}];return e.forEach((function(e){e.givenAnswer="",e.isCorrect=!1})),e}(e).sort((function(){return.5-Math.random()}))};function S(){var e=Object(u.m)().id,t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(0),l=Object(o.a)(i,2),d=l[0],j=l[1],h=Object(c.useState)(!1),b=Object(o.a)(h,2),x=b[0],O=b[1],f=Object(c.useState)(1),p=Object(o.a)(f,2),m=p[0],v=p[1];Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));a(y(t.questions))}),[e]);var S=!(d<=s.length-1);return Object(r.jsx)("div",{children:S?Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Test completed!"}),Object(r.jsx)(g,{results:function(){var e=s.length,t=Object.values(s),n=t.filter((function(e){return!1===e.isCorrect})).length,r=t.filter((function(e){return!0===e.isCorrect})).length;return n+r!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:n,totalCorrectAnswered:r}}(),onClick:function(){O(!0)},detailedResults:s,displayTable:x,runAgain:function(){O(!1),j(0);var t=JSON.parse(localStorage.getItem(e));a(y(t.questions)),v(1)}})]}):Object(r.jsx)(w,{onClick:function(e){s[d].givenAnswer=e,s[d].expectedAnswer===e&&(s[d].isCorrect=!0);var t=s[d];s.splice(d,1,t),a(s),j(d+1),v(Math.round((d+1)/s.length*100*100)/100)},currentQuestion:s[d],listTitle:e,currentProgress:m,currentLabel:d+1,totalLength:s.length})})}var C=n(33),k=n(24),q=n(53),N=n(58);function A(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(N.a,{show:e.show,onHide:e.onCancel,size:"md",children:[Object(r.jsx)(N.a.Header,{closeButton:!0,children:Object(r.jsx)(N.a.Title,{children:e.title})}),Object(r.jsx)(N.a.Body,{children:e.prompt}),Object(r.jsxs)(N.a.Footer,{children:[Object(r.jsx)(b.a,{variant:"secondary",onClick:e.onCancel,children:"Cancel"}),!e.hideOkBtn&&Object(r.jsx)(b.a,{variant:"primary",onClick:e.onOk,children:e.okBtnText})]})]})})}function I(e){var t=[{question:"",expectedAnswer:""}],n=Object(c.useState)(t),s=Object(o.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)("List Name - ".concat(localStorage.length)),d=Object(o.a)(l,2),j=d[0],h=d[1],x=Object(c.useState)(!1),O=Object(o.a)(x,2),f=O[0],p=O[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),w=v[0],y=v[1],S=Object(u.k)(),N=function(n,r){var c=r.filter(I);if(0===c.length)return i(t),void p(!1);var s={questions:c};localStorage.setItem(n,JSON.stringify(s)),e.setSize(localStorage.length-1)},I=function(e){return""!==e.question&&""!==e.expectedAnswer},E=function(e){e.preventDefault();var t=a.filter(I);if(i(t),localStorage.getItem(j))return y("Name '".concat(j,"' already exists. Do you want to replace existing ?")),f&&(N(j,a),S.push("/lists")),void p(!0);N(j,a),S.push("/lists")},T=function(e,t){var n=Object(C.a)(a);"question"===t.target.name?n[e].question=t.target.value:n[e].expectedAnswer=t.target.value,i(n)};return Object(r.jsxs)(k.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsx)("h4",{className:"text-center py-3",children:"Create new questionnaire here"}),Object(r.jsx)(q.a,{className:"text-center",children:Object(r.jsx)("input",{style:{backgroundColor:"lightGrey",borderRadius:".3rem",width:"50%",margin:"30px",textAlign:"center",fontWeight:"bold"},id:"listName",value:j,onChange:function(e){return function(e){h(e.target.value)}(e)}})}),Object(r.jsxs)("form",{onSubmit:E,children:[a.map((function(e,n){return Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsx)("div",{className:"fc",children:n+1}),Object(r.jsx)("div",{className:"form-group col-sm-7",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Question",id:"question",name:"question",value:e.question,onChange:function(e){return T(n,e)}})}),Object(r.jsx)("div",{className:"form-group col-sm-2",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Answer",id:"answer",name:"answer",value:e.expectedAnswer,onChange:function(e){return T(n,e)}})}),Object(r.jsxs)("div",{className:"form-group col-sm-2",children:[Object(r.jsx)(b.a,{variant:"link",disabled:1===a.length,onClick:function(){return function(e){var t=Object(C.a)(a);t.splice(e,1),i(t)}(n)},children:"Remove"}),Object(r.jsx)(b.a,{variant:"link",onClick:function(){return function(e){var n=Object(C.a)(a);n.splice.apply(n,[e+1,0].concat(t)),i(n)}(n)},children:"Add"})]})]},n)})),Object(r.jsxs)(m.a,{className:"justify-content-around mt-3",children:[Object(r.jsx)(b.a,{variant:"warning",onClick:function(){return S.push("/lists")},children:"Cancel"}),Object(r.jsx)(b.a,{variant:"info",type:"submit",onSubmit:E,disabled:!j||1===a.length&&!I(a[0]),children:"Save list"})]})]}),Object(r.jsx)(A,{show:f,prompt:w,title:"\u270e Rename",hideOkBtn:!1,okBtnText:"Yes, override",onOk:function(){N(j,a),S.push("/lists")},onCancel:function(){p(!1)}})]})}function E(e){return Object(r.jsx)(k.a,{style:{minHeight:"100vh",color:"white"},children:Object(r.jsx)(I,{setSize:e.setSize})})}function T(e){var t=Object(u.m)().id,n=Object(c.useState)(t),s=Object(o.a)(n,2),a=s[0],i=s[1],l=[{question:"",expectedAnswer:""}],d=localStorage.getItem(t),j=Object(c.useState)(null!==d?JSON.parse(d).questions:l),h=Object(o.a)(j,2),x=h[0],O=h[1],f=Object(c.useState)(!1),p=Object(o.a)(f,2),g=p[0],v=p[1],w=Object(c.useState)(""),y=Object(o.a)(w,2),S=y[0],N=y[1],I=Object(u.k)(),E=function(t,n){var r=n.filter(T);if(0===r.length)return O(l),void v(!1);var c={questions:r};localStorage.setItem(t,JSON.stringify(c)),e.setSize(localStorage.length-1)},T=function(e){return""!==e.question&&""!==e.expectedAnswer},L=function(e){e.preventDefault();var t=x.filter(T);if(O(t),localStorage.getItem(a))return N("Name '".concat(a,"' already exists. Do you want to replace existing ?")),g&&(E(a,x),I.push("/lists")),void v(!0);E(a,x),I.push("/lists")},z=function(e,t){var n=Object(C.a)(x);"question"===t.target.name?n[e].question=t.target.value:n[e].expectedAnswer=t.target.value,O(n)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(k.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsxs)("h4",{className:"text-center py-3",children:["Edit this list (",x.length," questions)"]}),Object(r.jsx)(q.a,{className:"text-center",children:Object(r.jsx)("input",{style:{backgroundColor:"lightGrey",borderRadius:".3rem",width:"50%",margin:"30px",textAlign:"center",fontWeight:"bold"},id:"listName",value:a,onChange:function(e){return function(e){t=e.target.value,i(e.target.value)}(e)}})}),Object(r.jsxs)("form",{onSubmit:L,children:[x.map((function(e,t){return Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsx)("div",{className:"fc",children:t+1}),Object(r.jsx)("div",{className:"form-group col-sm-7",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Question",id:"question",name:"question",value:e.question,onChange:function(e){return z(t,e)}})}),Object(r.jsx)("div",{className:"form-group col-sm-2",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Answer",id:"answer",name:"answer",value:e.expectedAnswer,onChange:function(e){return z(t,e)}})}),Object(r.jsxs)("div",{className:"form-group col-sm-2",children:[Object(r.jsx)(b.a,{variant:"link",disabled:1===x.length,onClick:function(){return function(e){var t=Object(C.a)(x);t.splice(e,1),O(t)}(t)},children:"Remove"}),Object(r.jsx)(b.a,{variant:"link",onClick:function(){return function(e){var t=Object(C.a)(x);t.splice.apply(t,[e+1,0].concat(l)),O(t)}(t)},children:"Add"})]})]},t)})),Object(r.jsxs)(m.a,{className:"justify-content-around mt-3",children:[Object(r.jsx)(b.a,{variant:"warning",onClick:function(){return I.push("/lists")},children:"Cancel"}),Object(r.jsx)(b.a,{variant:"info",type:"submit",onSubmit:L,disabled:!a||1===x.length&&!T(x[0]),children:"Save list"})]})]}),Object(r.jsx)(A,{show:g,prompt:S,hideOkBtn:!1,okBtnText:"Yes, override",onOk:function(){E(a,x),I.push("/lists")},onCancel:function(){v(!1)}})]})})}var L=n(29),z=n(46),J=n(88),R=(n(114),n(19)),B=n.n(R),H=n(41),Q=n(65),F=n(87);n(120);F.a.initializeApp({apiKey:"AIzaSyC0IUmgaJCZ6-Akiemn4Tvt6-i8wQJGSdM",authDomain:"questionnaire-4f52b.firebaseapp.com",databaseURL:"https://questionnaire-4f52b-default-rtdb.europe-west1.firebasedatabase.app",projectId:"questionnaire-4f52b",storageBucket:"questionnaire-4f52b.appspot.com",messagingSenderId:"656899838638",appId:"1:656899838638:web:dd4df9dfc9131d16f4d33f"});var P=F.a,W="",D="",M=0,U="default",V="",K="shared",G="counter",Y=function(){if(null==localStorage.getItem("userId")){var e="user:"+Object(Q.a)(7);return localStorage.setItem("userId",e),e}return localStorage.getItem("userId")}(),Z=P.firestore().collection(Y),X=P.firestore().collection(K),$=P.firestore().collection(G),_=function(){var e=Object(H.a)(B.a.mark((function e(t,n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se(t,n)){e.next=2;break}return e.abrupt("return");case 2:return console.log("-Start sharing--"),e.next=5,ne(t,n);case 5:return e.next=7,new Promise((function(e,t){Object(H.a)(B.a.mark((function n(){var r,c,s;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/counter");case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,s=Number(c.documents[0].fields.index.integerValue),M=s,console.log("2 Exprt: Current conter:",s),e(s),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),console.error("Exprt.Error in getSharedCounter(): ",n.t0),t(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))()}));case 7:return e.next=9,new Promise((function(e,t){var n=M+1;console.log("3 Exprt: Updated counter: ",n),$.doc("counterId").set({index:n}).catch((function(e){console.error("Exprt. Error in increaseSharedCounter(): ",e),t(e)})).then(e),console.log("4 Exprt: Updated counter saved OK")}));case 9:return e.next=11,new Promise((function(e,t){X.doc(M.toString()).set({userId:Y,listId:U}).catch((function(e){t(e)})).then(e),console.log("5 Exprt: Shared code saved OK")}));case 11:return console.log("-Finish sharing--"),e.abrupt("return",M);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ee=function(){var e=Object(H.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(),console.log("-Start downloading by code "+t),e.next=4,re(t);case 4:return e.next=6,ce();case 6:return console.log("-Finish a pool downloading--"),e.abrupt("return",V);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(H.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(),e.next=3,re(t);case 3:return e.next=5,new Promise((function(e){var t="https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/"+W+"/"+D;Object(H.a)(B.a.mark((function n(){var r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,{method:"DELETE"});case 3:r=n.sent,console.log(r),e(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error removing questionnaire.",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ne(e,t){return new Promise((function(n,r){U="listId:"+Object(Q.a)(10);var c=function(e,t){var n=JSON.parse(t).questions;return{doc:JSON.stringify({listTitle:e,questions:n})}}(e,t);Z.doc(U).set(c).catch((function(e){r(e)})).then(n),console.log("1 Exprt: Questionnairy saved: ",U)}))}function re(e){return new Promise((function(t){Object(H.a)(B.a.mark((function n(){var r,c;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/shared/"+e);case 3:if(404!==(r=n.sent).status){n.next=6;break}throw new Error("Shared code is not found in db.");case 6:return n.next=8,r.json();case 8:c=n.sent,W=c.fields.userId.stringValue,D=c.fields.listId.stringValue,console.log("1 Imprt. UserId: ".concat(W,". Questionneir id: ").concat(D)),t(),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),console.log("Error getting userId and listId by code "+e),t();case 19:case"end":return n.stop()}}),n,null,[[0,15]])})))()}))}function ce(){if(""!==W&&""!==D)return new Promise((function(e){Object(H.a)(B.a.mark((function t(){var n,r,c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/"+W+"/"+D,t.prev=1,t.next=4,fetch(n);case 4:if(404!==(r=t.sent).status){t.next=7;break}throw Error("The questionnaire is not found.");case 7:return t.next=9,r.json();case 9:c=t.sent,V=c.fields.doc.stringValue,console.log("2 Imprt. Questionnaire downloaded OK"),e(),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),console.error("Error downloading questionnaire.",t.t0),e();case 19:case"end":return t.stop()}}),t,null,[[1,15]])})))()}));console.log("Empty user or poolTitle")}function se(e,t){return null==Y?(console.error("Validation error: userId is null"),!1):""!==e&&""!==t||(console.error("Validation error: title or pool is empty"),!1)}function ae(){W="",D="",V=""}var ie=n(96);function oe(e){return Object(r.jsxs)(b.a,{variant:"primary",disabled:!0,className:e.myStyle,children:[Object(r.jsx)(ie.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),e.text]})}var le=n.p+"static/media/copy.09213c7f.svg",ue=n.p+"static/media/stop.2a88f0f6.svg";function de(e){var t=Object(c.useState)(j()),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1];function j(){for(var e=new Map,t=0,n=localStorage.length;t<n;++t){var r=localStorage.key(t);if("userId"!==r){var c=JSON.parse(localStorage.getItem(r));e.set(r,c)}}return new Map(Object(C.a)(e.entries()).sort())}var h=function(e){d(e)},O=function(){d("")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(k.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsx)("h4",{className:"text-center py-3",children:"The list of saved questionaries "}),Object(r.jsxs)(x.a,{bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(r.jsx)("thead",{className:"bg-warning",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Questionnaire title"}),Object(r.jsx)("th",{children:"Number of questions"}),Object(r.jsx)("th",{children:"Run"}),Object(r.jsx)("th",{children:"Edit"}),Object(r.jsx)("th",{children:"Remove"}),Object(r.jsx)("th",{children:"Actions"})]})}),Object(r.jsx)("tbody",{children:Array.from(s,(function(e){var t=Object(o.a)(e,2);return{title:t[0],poolAndCode:t[1]}})).sort().map((function(t,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n+1}),Object(r.jsx)("td",{children:t.title}),Object(r.jsx)("td",{children:t.poolAndCode.questions.length}),Object(r.jsx)("td",{children:Object(r.jsx)(b.a,{variant:"link",children:Object(r.jsx)(L.Link,{to:"/".concat(t.title,"/exam"),children:"\u25b7"})})}),Object(r.jsx)("td",{children:Object(r.jsx)(b.a,{variant:"link",children:Object(r.jsx)(L.Link,{to:"/".concat(t.title,"/edit"),children:"\u270e"})})}),Object(r.jsx)("td",{children:Object(r.jsx)(b.a,{variant:"link",onClick:function(){return n=t.title,localStorage.removeItem(n),a(j()),void e.setSize(localStorage.length-1);var n},children:"\u2716"})}),Object(r.jsx)("td",{children:t.poolAndCode.sharedCode?Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[t.poolAndCode.sharedCode,Object(r.jsxs)(z.a,{children:[Object(r.jsx)(z.a.Toggle,{variant:"outline-info",children:"\u2699"}),Object(r.jsxs)(z.a.Menu,{children:[Object(r.jsx)(J.a,{content:"Copy to buffer",children:Object(r.jsxs)(z.a.Item,{onClick:function(){return e=t.poolAndCode.sharedCode,void navigator.clipboard.writeText(e);var e},children:["Copy code ",Object(r.jsx)("img",{src:le,alt:"Copy"})]})}),Object(r.jsx)(z.a.Divider,{}),Object(r.jsx)(J.a,{content:"The pool won't be avaliable for download for other",placement:"top-start",delay:[2e3,null],children:Object(r.jsxs)(z.a.Item,{onClick:function(){return e=t.poolAndCode.sharedCode,te(e).then((function(){})),void console.log("ok");var e},children:["Stop sharing ",Object(r.jsx)("img",{src:ue,alt:"Stop"})]})})]})]})]}):Object(r.jsx)(r.Fragment,{children:u===t.title?Object(r.jsx)(oe,{text:" Getting code..."}):Object(r.jsx)(b.a,{variant:"dark",onClick:function(){return function(e){h(e);var t=localStorage.getItem(e);_(e,t).then((function(n){var r={questions:JSON.parse(t).questions,sharedCode:n};localStorage.setItem(e,JSON.stringify(r)),a(j()),O()}))}(t.title)},children:"Get shared code \u260d"})})})]},n)}))})]})]})})}function je(e){return Object(r.jsxs)(x.a,{bordered:!0,hover:!0,size:"sm",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Question"}),Object(r.jsx)("th",{children:"Expected answer"})]})}),Object(r.jsx)("tbody",{children:e.pool.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+1}),Object(r.jsx)("td",{children:e.question}),Object(r.jsx)("td",{children:e.expectedAnswer})]},t)}))})]})}function he(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),l=i[0],d=i[1],j=Object(c.useState)(!1),h=Object(o.a)(j,2),x=h[0],O=h[1],f=Object(c.useState)(""),p=Object(o.a)(f,2),g=p[0],w=p[1],y=Object(c.useState)(!1),S=Object(o.a)(y,2),C=S[0],q=S[1],N=Object(c.useState)(""),I=Object(o.a)(N,2),E=I[0],T=I[1],L=Object(c.useState)(!1),z=Object(o.a)(L,2),J=z[0],R=z[1],B=Object(c.useState)(""),H=Object(o.a)(B,2),Q=H[0],F=H[1],P=Object(u.k)(),W=function(){d(""),s([]),O(!1),w("")},D=function(){var e=g;(function(e){if(!e||0===e.trim().length||void 0===parseInt(e)||isNaN(parseInt(e)))return T("Empty or invalid code."),q(!0),!1;return!0})(g)&&(M(),ee(e).then((function(e){if(console.log("--"+e),""!==e){var t=JSON.parse(e),n=t.listTitle,r=t.questions;console.log(n),d(n),s(r)}else T("A questionnaire is not found or has been removed by the owner"),q(!0),W();U()})))};var M=function(){O(!0)},U=function(){O(!1)};return Object(r.jsxs)(k.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsx)("h4",{className:"text-center py-3",children:"Import shared questionnaires "}),Object(r.jsxs)(v.a,{bg:"light",text:"dark",style:{justifyContent:"space-between",alignItems:"center",padding:"2rem"},children:[Object(r.jsx)(v.a.Title,{style:{width:"30rem"},children:"Enter a code here:"}),Object(r.jsx)("input",{id:"theCode",type:"number",placeholder:"351",value:g,onChange:function(e){return w(e.target.value)},onFocus:function(e){e.target.placeholder=""},style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onKeyDown:function(e){return function(e){"Enter"===e.key&&D()}(e)}}),x?Object(r.jsx)(oe,{myStyle:"mt-2 mb-2",text:" Uploading..."}):Object(r.jsx)(b.a,{variant:"warning",style:{width:"8rem"},className:"mt-2 mb-2",onClick:D,children:"Import \u21b6"}),n.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"text-center mt-2",children:Object(r.jsx)("b",{children:l})}),Object(r.jsxs)(m.a,{className:"justify-content-between",style:{width:"100%"},children:[Object(r.jsx)(b.a,{variant:"danger",className:"mt-3 mb-1",onClick:function(){W()},children:"Cancel"}),Object(r.jsx)(b.a,{variant:"info",className:"mt-3 mb-1",onClick:function(){for(var e="(".concat(g,")"),t=l;;)if(t+=e,null==localStorage.getItem(t)){localStorage.setItem(t,JSON.stringify({questions:n})),F(t),R(!0),W();break}},children:"Save locally"})]}),Object(r.jsx)(je,{pool:n})]})]}),Object(r.jsx)(A,{show:C,title:"\u26d4 Validation error",prompt:E,hideOkBtn:!0,onCancel:function(){return q(!1)}}),Object(r.jsx)(A,{show:J,title:"\u26f3 Success",prompt:"A questioneire saved with name  "+Q,hideOkBtn:!1,okBtnText:"Ok",onOk:function(){return P.push("/lists")},onCancel:function(){return P.push("/lists")}})]})}var be={en:{Home:{"Welcome to the questionnaire!!":"Welcome to the questionnaire!!"}},ua:{Home:{"Welcome to the questionnaire!!":"\u0412\u0456\u0442\u0430\u0454\u043c\u043e \u0443 questionnaire!!"}}},xe=s.a.createContext(be.en);function Oe(){var e=Object(c.useContext)(xe);return Object(r.jsx)("h1",{children:e.Home["Welcome to the questionnaire!!"]})}var fe=n(90),pe=n(98),me=n(42),ge=n(59),ve=n(99),we=n(97),ye=n(89),Se=n(66);function Ce(e){return Object(r.jsxs)(ge.a,{bg:"info",expand:"lg",className:"py-0 full-width",sticky:"top",children:[Object(r.jsx)(Se.LinkContainer,{to:"/",children:Object(r.jsxs)(ge.a.Brand,{className:"text-white",children:[Object(r.jsx)("img",{src:l,width:"60",height:"60",className:"d-inline-block",alt:"questionnaire logo"}),"The Questionnaire"]})}),Object(r.jsx)(ge.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(ge.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(r.jsx)(ge.a.Text,{children:Object(r.jsxs)(me.a,{className:"mr-auto",children:[Object(r.jsx)(Se.LinkContainer,{to:"/lists",children:Object(r.jsxs)(me.a.Link,{children:[Object(r.jsx)("span",{children:"Lists"}),Object(r.jsx)(ve.a,{placement:"bottom",delay:{show:250,hide:400},overlay:function(e){return Object(r.jsxs)(we.a,Object(fe.a)(Object(fe.a)({id:"badge-tooltip"},e),{},{children:["You have ",localStorage.length-1," lists with questions"]}))},children:Object(r.jsx)(pe.a,{className:"counter-badge",variant:"warning",children:e.size})})]})}),Object(r.jsx)(me.a.Link,{children:Object(r.jsx)("li",{children:"|"})}),Object(r.jsx)(Se.LinkContainer,{to:"/new",children:Object(r.jsx)(me.a.Link,{children:"Create New"})}),Object(r.jsx)(me.a.Link,{children:Object(r.jsx)("li",{children:"|"})}),Object(r.jsx)(Se.LinkContainer,{to:"/import",children:Object(r.jsx)(me.a.Link,{children:"Import"})}),Object(r.jsx)(me.a.Link,{children:Object(r.jsx)("li",{children:"|"})}),Object(r.jsx)(ye.a,{children:Object(r.jsxs)(k.a,{style:{padding:"0.5rem 1rem"},children:[Object(r.jsx)("label",{style:{marginRight:"0.5rem"},children:"UA"}),Object(r.jsx)(ye.a.Check,{id:"lang-toggler",type:"switch",label:"",onChange:e.languageHandler}),Object(r.jsx)("label",{children:"EN"})]})})]})})})]})}function ke(){var e=Object(c.useState)(localStorage.length-1),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("en"),i=Object(o.a)(a,2),d=i[0],j=i[1];return Object(r.jsxs)("div",{className:"main-wrapper",children:[void(null==localStorage.getItem("userId")&&(localStorage.setItem("userId","user:"+Object(Q.a)(7)),console.log("New UserId generated"))),void(localStorage.length<2&&(localStorage.setItem("\u041a\u0432\u0430\u0434\u0430\u0440\u0430\u0442\u044b \u0447\u0438\u0441\u0435\u043b \u043e\u0442 1 \u0434\u043e 10",JSON.stringify({questions:[{question:"1^2",expectedAnswer:"1"},{question:"2^2",expectedAnswer:"4"},{question:"3^2",expectedAnswer:"9"},{question:"4^2",expectedAnswer:"16"},{question:"5^2",expectedAnswer:"25"},{question:"6^2",expectedAnswer:"36"},{question:"7^2",expectedAnswer:"49"},{question:"8^2",expectedAnswer:"64"},{question:"9^2",expectedAnswer:"81"},{question:"10^2",expectedAnswer:"100"}]})),localStorage.setItem("\u041a\u0443\u0431\u044b \u0447\u0438\u0441\u0435\u043b \u043e\u0442 1 \u0434\u043e 10",JSON.stringify({questions:[{question:"1^3",expectedAnswer:"1"},{question:"2^3",expectedAnswer:"8"},{question:"3^3",expectedAnswer:"27"},{question:"4^3",expectedAnswer:"64"},{question:"5^3",expectedAnswer:"125"},{question:"6^3",expectedAnswer:"216"},{question:"7^3",expectedAnswer:"343"},{question:"8^3",expectedAnswer:"512"},{question:"9^3",expectedAnswer:"729"},{question:"10^3",expectedAnswer:"1000"}]})))),Object(r.jsx)(L.HashRouter,{children:Object(r.jsxs)(xe.Provider,{value:be[d],children:[Object(r.jsx)(Ce,{size:n,languageHandler:function(e){return e.target.checked?j("ua"):j("en")},language:d}),Object(r.jsxs)(u.g,{children:[Object(r.jsx)(u.d,{exact:!0,path:"/",component:Oe}),Object(r.jsx)(u.d,{path:"/new",component:function(){return Object(r.jsx)(E,{setSize:s})}}),Object(r.jsx)(u.d,{path:"/lists",component:function(){return Object(r.jsx)(de,{setSize:s})}}),Object(r.jsx)(u.d,{path:"/import",component:he}),Object(r.jsx)(u.d,{path:"/:id/edit",component:function(){return Object(r.jsx)(T,{setSize:s})}}),Object(r.jsx)(u.d,{path:"/:id/exam",component:S})]})]})}),Object(r.jsx)("img",{src:l,className:"App-logo",alt:"logo"})]})}i.a.render(Object(r.jsx)(ke,{}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.b33178df.chunk.js.map