(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{69:function(e){e.exports=JSON.parse('[{"id":1,"qText":"text 1 bla-bla_1","expectedAnswer":"1","givenAnswer":"","isCorrect":false},{"id":2,"qText":"text 2 bla-bla_2","expectedAnswer":"2","givenAnswer":"","isCorrect":false},{"id":3,"qText":"text 3 bla-bla_3","expectedAnswer":"3","givenAnswer":"","isCorrect":false},{"id":4,"qText":"text 4 bla-bla_4","expectedAnswer":"4","givenAnswer":"","isCorrect":false},{"id":5,"qText":"text 5 bla-bla_5","expectedAnswer":"5","givenAnswer":"","isCorrect":false}]')},81:function(e,t,n){},83:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(15),i=n.n(s),a=(n(81),n(82),n.p+"static/media/logo.6ce24c58.svg"),l=(n(83),n(12)),o=n(69),j=n(11),d=n(45),u=n(40),b=n(58),h=n(20),x=n(70);function O(e){var t,n=Object(r.useState)(!1),s=Object(l.a)(n,2),i=s[0],a=s[1];function o(){return 100*e.results.totalCorrectAnswered/e.results.totalCount}function O(){return 100*e.results.incorrectAnswers/e.results.totalCount}return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Out of ",Object(c.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(c.jsx)("div",{style:{width:300,margin:"auto"},children:Object(c.jsxs)(u.a,{variant:"flush",children:[function(){if(e.results.totalCorrectAnswered>0)return Object(c.jsxs)(u.a.Item,{variant:"success",children:["Correct answers: ",Object(c.jsx)("b",{children:e.results.totalCorrectAnswered})]})}(),function(){if(e.results.incorrectAnswers>0)return Object(c.jsxs)(u.a.Item,{variant:"danger",children:["Wrong answers: ",Object(c.jsx)("b",{children:e.results.incorrectAnswers})]})}()]})}),Object(c.jsx)("div",{style:{width:600,marginTop:"1.2rem",marginLeft:"auto",marginRight:"auto"},children:Object(c.jsxs)(b.a,{style:{borderRadius:"2rem",height:"1.3rem",fontSize:"1.1rem"},children:[Object(c.jsx)(b.a,{variant:"success",now:o(),label:o()+"%"},1),Object(c.jsx)(b.a,{variant:"danger",now:O(),label:O()+"%"},2)]})}),Object(c.jsxs)(x.a,{className:"justify-content-between",children:[Object(c.jsx)(j.a,{variant:"secondary",disabled:!0,className:"mt-5",children:"Run test again"}),Object(c.jsxs)(j.a,{variant:"info",className:"mt-5",onClick:function(){a(!i),e.onClick()},"aria-controls":"fade-tbl","aria-expanded":i,children:[i?"Close":"Open"," detailed results"]})]}),e.displayTable&&(t=e.detailedResults,Object(c.jsx)(h.a,{in:i,appear:!0,timeout:600,mountOnEnter:!0,children:Object(c.jsxs)(d.a,{disabled:!0,id:"fade-tbl",striped:!0,hover:!0,size:"sm",variant:"light",className:"mt-3",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Question"}),Object(c.jsx)("th",{children:"Expected answer"}),Object(c.jsx)("th",{children:"Your answer"}),Object(c.jsx)("th",{children:"Correctness"})]})}),Object(c.jsx)("tbody",{children:t.map((function(e,t){var n=e.isCorrect?"success":"danger",r=e.isCorrect?Object(c.jsx)("span",{children:"\u2713"}):"";return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e.qText}),Object(c.jsx)("td",{children:e.expectedAnswer}),Object(c.jsx)("td",{children:e.givenAnswer}),Object(c.jsx)("td",{children:Object(c.jsx)(u.a.Item,{variant:n,children:r})})]},e.id)}))})]})}))]})}var g=n(66);function m(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],a=function(){e.onClick(s),i("")};return Object(c.jsxs)(g.a,{bg:"light",text:"dark",style:{justifyContent:"space-between",height:"14rem",alignItems:"center",padding:"2rem"},children:[Object(c.jsx)(g.a.Title,{style:{width:"30rem"},children:e.currentQuestion.qText}),Object(c.jsx)("input",{type:"text",value:s,style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onChange:function(e){return i(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&a()}(e)}}),Object(c.jsx)(j.a,{variant:"info",style:{width:"8rem"},className:"mt-2 mb-2",onClick:a,children:"Next >>"})]})}function f(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(0),a=Object(l.a)(i,2),j=a[0],d=a[1],u=Object(r.useState)(!1),b=Object(l.a)(u,2),h=b[0],x=b[1];Object(r.useEffect)((function(){s(o.sort((function(){return.5-Math.random()})))}),[]);var g=!(j<=n.length-1);return Object(c.jsx)("div",{children:g?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Test completed!"}),Object(c.jsx)(O,{results:function(){var e=n.length,t=Object.values(n),c=t.filter((function(e){return!1===e.isCorrect})).length,r=t.filter((function(e){return!0===e.isCorrect})).length;return c+r!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:c,totalCorrectAnswered:r}}(),onClick:function(){console.log(88),x(!0)},detailedResults:n,displayTable:h})]}):Object(c.jsx)(m,{onClick:function(e){n[j].givenAnswer=e,n[j].expectedAnswer===e&&(n[j].isCorrect=!0);var t=n[j];n.splice(j,1,t),s(n),d(j+1)},currentQuestion:n[j]})})}var v=n(56),p=n(53),w=n(71),C=n(33);var y=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(C.a,{show:e.show,onHide:e.onCancel,children:[Object(c.jsx)(C.a.Header,{closeButton:!0,children:Object(c.jsx)(C.a.Title,{children:"Modal heading"})}),Object(c.jsx)(C.a.Body,{children:e.prompt}),Object(c.jsxs)(C.a.Footer,{children:[Object(c.jsx)(j.a,{variant:"secondary",onClick:e.onCancel,children:"Cancel"}),Object(c.jsx)(j.a,{variant:"primary",onClick:e.onOk,children:"Override"})]})]})})},k=n(64);var A=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(k.a,{show:e.show,autohide:e.autohide,delay:e.delay,onClose:e.onClose,children:Object(c.jsxs)(k.a.Body,{children:[Object(c.jsx)("span",{children:"\u2713"}),Object(c.jsx)("br",{}),"Successfully saved to the questionnaire list"]})})})};function N(){var e=[{question:"",expectedAnswer:""}],t=Object(r.useState)(e),n=Object(l.a)(t,2),s=n[0],i=n[1],a=Object(r.useState)("List Name #".concat(localStorage.length)),o=Object(l.a)(a,2),d=o[0],u=o[1],b=Object(r.useState)(!1),h=Object(l.a)(b,2),x=h[0],O=h[1],g=Object(r.useState)(""),m=Object(l.a)(g,2),f=m[0],C=m[1],k=Object(r.useState)(!1),N=Object(l.a)(k,2),S=N[0],q=N[1],T=function(e,t){localStorage.setItem(e,JSON.stringify(t))},R=function(e){return""!==e.question&&""!==e.expectedAnswer},L=function(t){t.preventDefault();var n=s.filter(R);if(i(n),localStorage.getItem(d))return C("Name '".concat(d,"' already exists. Do you want to replace existing ?")),void O(!0);T(d,s),u("List Name #".concat(localStorage.length)),i(e),q(!0)},I=function(e,t){var n=Object(v.a)(s);"question"===t.target.name?n[e].question=t.target.value:n[e].expectedAnswer=t.target.value,i(n)};return Object(c.jsxs)(p.a,{style:{minHeight:"100vh",color:"white"},children:[Object(c.jsx)("h4",{className:"text-center py-3",children:"Create a qestionnaire here"}),Object(c.jsx)(w.a,{className:"text-center",children:Object(c.jsx)("input",{style:{backgroundColor:"lightGrey",borderRadius:".3rem",width:"50%",margin:"30px",textAlign:"center",fontWeight:"bold"},id:"listName",value:d,onChange:function(e){return function(e){u(e.target.value)}(e)}})}),Object(c.jsxs)("form",{onSubmit:L,children:[s.map((function(t,n){return Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("div",{className:"fc",children:n+1}),Object(c.jsx)("div",{className:"form-group col-sm-7",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Question",id:"question",name:"question",value:t.question,onChange:function(e){return I(n,e)}})}),Object(c.jsx)("div",{className:"form-group col-sm-2",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Answer",id:"answer",name:"answer",value:t.expectedAnswer,onChange:function(e){return I(n,e)}})}),Object(c.jsxs)("div",{className:"form-group col-sm-2",children:[Object(c.jsx)(j.a,{variant:"link",disabled:1===s.length,onClick:function(){return function(e){var t=Object(v.a)(s);t.splice(e,1),i(t)}(n)},children:"Remove"}),Object(c.jsx)(j.a,{variant:"link",onClick:function(){return function(t){s.splice(t+1,0,e),i(Object(v.a)(s))}(n)},children:"Add"})]})]},n)})),Object(c.jsx)("div",{children:Object(c.jsx)(j.a,{variant:"info",type:"submit",onSubmit:L,disabled:!d||1===s.length&&!R(s[0]),children:"Save list"})})]}),Object(c.jsx)(y,{show:x,prompt:f,onOk:function(){T(d,s),u("List Name #".concat(localStorage.length)),i(e),O(!1)},onCancel:function(){O(!1)}}),Object(c.jsx)(A,{show:S,delay:2e3,autohide:!0,onClose:function(){return q(!1)}})]})}function S(){var e=Object(r.useState)(function(){for(var e=new Map,t=0,n=localStorage.length;t<n;++t){var c=localStorage.key(t),r=JSON.parse(localStorage.getItem(c)).length;e.set(c,r)}return e}()),t=Object(l.a)(e,2),n=t[0];t[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a,{style:{minHeight:"100vh",color:"white"},children:[Object(c.jsx)("h4",{children:"The list of saved questionaries "}),Object(c.jsxs)(d.a,{bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"List title"}),Object(c.jsx)("th",{children:"Question number"}),Object(c.jsx)("th",{children:"Run"}),Object(c.jsx)("th",{children:"Edit"}),Object(c.jsx)("th",{children:"Remove"})]})}),Object(c.jsx)("tbody",{children:Array.from(n).sort().map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e[0]}),Object(c.jsx)("td",{children:e[1]}),Object(c.jsx)("td",{children:Object(c.jsx)(j.a,{variant:"link",onClick:function(){console.log("Run btn clicked")},children:"\u25b7"})}),Object(c.jsx)("td",{children:Object(c.jsx)(j.a,{variant:"link",onClick:function(){console.log("Edit btn clicked")},children:"\u270e"})}),Object(c.jsx)("td",{children:Object(c.jsx)(j.a,{variant:"link",onClick:function(e){return function(e){console.log(e),console.log("Delete btn clicked")}(e)},children:"\u2716"})})]})}))})]})]})})}var q=n(41),T=n(7),R=n(65),L=n(74),I=n(57),E=n(34),B=n(75),Q=n(73),F=n(55),J=function(e){return Object(c.jsxs)(Q.a,Object(R.a)(Object(R.a)({id:"badge-tooltip"},e),{},{children:["You have ",localStorage.length," lists with questions"]}))},_=function(){return Object(c.jsxs)(E.a,{bg:"info",expand:"lg",className:"py-0 full-width",sticky:"top",children:[Object(c.jsx)(F.LinkContainer,{to:"/questionnaire",children:Object(c.jsxs)(E.a.Brand,{className:"text-white",children:[Object(c.jsx)("img",{src:a,width:"60",height:"60",className:"d-inline-block",alt:"questionnaire logo"}),"The Qestionnaire"]})}),Object(c.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(E.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(c.jsx)(E.a.Text,{children:Object(c.jsxs)(I.a,{className:"mr-auto",children:[Object(c.jsx)(F.LinkContainer,{to:"/new",children:Object(c.jsx)(I.a.Link,{children:"Create New"})}),Object(c.jsx)(F.LinkContainer,{to:"/lists",children:Object(c.jsxs)(I.a.Link,{children:[Object(c.jsx)("span",{children:"Lists"}),Object(c.jsx)(B.a,{placement:"bottom",delay:{show:250,hide:400},overlay:J,children:Object(c.jsx)(L.a,{className:"counter-badge",variant:"warning",children:localStorage.length})})]})})]})})})]})};var D=function(){return Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsxs)(q.BrowserRouter,{children:[Object(c.jsx)(_,{}),Object(c.jsxs)(T.g,{children:[Object(c.jsx)(T.d,{exact:!0,path:"/questionnaire",component:f}),Object(c.jsx)(T.d,{path:"/new",component:N}),Object(c.jsx)(T.d,{path:"/lists",component:S})]})]}),Object(c.jsx)("img",{src:a,className:"App-logo",alt:"logo"})]})};i.a.render(Object(c.jsx)(D,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.907d4951.chunk.js.map