(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{53:function(e){e.exports=JSON.parse('[{"id":1,"qText":"text 1 bla-bla_1","expectedAnswer":"1","givenAnswer":"","isCorrect":false},{"id":2,"qText":"text 2 bla-bla_2","expectedAnswer":"2","givenAnswer":"","isCorrect":false},{"id":3,"qText":"text 3 bla-bla_3","expectedAnswer":"3","givenAnswer":"","isCorrect":false},{"id":4,"qText":"text 4 bla-bla_4","expectedAnswer":"4","givenAnswer":"","isCorrect":false},{"id":5,"qText":"text 5 bla-bla_5","expectedAnswer":"5","givenAnswer":"","isCorrect":false}]')},66:function(e,t,n){},67:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(0),c=n.n(s),i=n(14),a=n.n(i),l=(n(66),n.p+"static/media/logo.6ce24c58.svg"),o=(n(67),n(68),n(9)),j=n(53),d=n(16),u=n(49);function b(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],a=function(){e.onClick(c),i("")};return Object(r.jsxs)(u.a,{bg:"light",text:"dark",style:{justifyContent:"space-between",height:"14rem",alignItems:"center",padding:"2rem"},children:[Object(r.jsx)(u.a.Title,{style:{width:"30rem"},children:e.currentQuestion.qText}),Object(r.jsx)("input",{type:"text",value:c,style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onChange:function(e){return i(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&a()}(e)}}),Object(r.jsx)(d.a,{variant:"info",style:{width:"8rem"},className:"mt-2 mb-2",onClick:a,children:"Next >>"})]})}var h=n(54),x=n(28),O=n(43),m=n(26),f=n(55);function p(e){var t,n=Object(s.useState)(!1),c=Object(o.a)(n,2),i=c[0],a=c[1];function l(){return 100*e.results.totalCorrectAnswered/e.results.totalCount}function j(){return 100*e.results.incorrectAnswers/e.results.totalCount}return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Out of ",Object(r.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(r.jsx)("div",{style:{width:300,margin:"auto"},children:Object(r.jsxs)(x.a,{variant:"flush",children:[function(){if(e.results.totalCorrectAnswered>0)return Object(r.jsxs)(x.a.Item,{variant:"success",children:["Correct answers: ",Object(r.jsx)("b",{children:e.results.totalCorrectAnswered})]})}(),function(){if(e.results.incorrectAnswers>0)return Object(r.jsxs)(x.a.Item,{variant:"danger",children:["Wrong answers: ",Object(r.jsx)("b",{children:e.results.incorrectAnswers})]})}()]})}),Object(r.jsx)("div",{style:{width:600,marginTop:"1.2rem",marginLeft:"auto",marginRight:"auto"},children:Object(r.jsxs)(O.a,{style:{borderRadius:"2rem",height:"1.3rem",fontSize:"1.1rem"},children:[Object(r.jsx)(O.a,{variant:"success",now:l(),label:l()+"%"},1),Object(r.jsx)(O.a,{variant:"danger",now:j(),label:j()+"%"},2)]})}),Object(r.jsxs)(f.a,{className:"justify-content-between",children:[Object(r.jsx)(d.a,{variant:"secondary",disabled:!0,className:"mt-5",children:"Run test again"}),Object(r.jsxs)(d.a,{variant:"info",className:"mt-5",onClick:function(){a(!i),e.onClick()},"aria-controls":"fade-tbl","aria-expanded":i,children:[i?"Close":"Open"," detailed results"]})]}),e.displayTable&&(t=e.detailedResults,Object(r.jsx)(m.a,{in:i,appear:!0,timeout:600,mountOnEnter:!0,children:Object(r.jsxs)(h.a,{disabled:!0,id:"fade-tbl",striped:!0,hover:!0,size:"sm",variant:"light",className:"mt-3",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Question"}),Object(r.jsx)("th",{children:"Expected answer"}),Object(r.jsx)("th",{children:"Your answer"}),Object(r.jsx)("th",{children:"Correctness"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){var n=e.isCorrect?"success":"danger",s=e.isCorrect?Object(r.jsx)("span",{children:"\u2713"}):"";return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+1}),Object(r.jsx)("td",{children:e.qText}),Object(r.jsx)("td",{children:e.expectedAnswer}),Object(r.jsx)("td",{children:e.givenAnswer}),Object(r.jsx)("td",{children:Object(r.jsx)(x.a.Item,{variant:n,children:s})})]},e.id)}))})]})}))]})}function g(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(s.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1];r||(e(),c(!0))}((function(){c(j.sort((function(){return.5-Math.random()})))}));var i=Object(s.useState)(0),a=Object(o.a)(i,2),l=a[0],d=a[1],u=!(l<=n.length-1),h=Object(s.useState)(!1),x=Object(o.a)(h,2),O=x[0],m=x[1];return Object(r.jsx)("div",{children:u?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Test completed!"}),Object(r.jsx)(p,{results:function(){var e=n.length,t=Object.values(n),r=t.filter((function(e){return!1===e.isCorrect})).length,s=t.filter((function(e){return!0===e.isCorrect})).length;return r+s!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:r,totalCorrectAnswered:s}}(),onClick:function(){console.log(88),m(!0)},detailedResults:n,displayTable:O})]}):Object(r.jsx)(b,{onClick:function(e){n[l].givenAnswer=e,n[l].expectedAnswer==e&&(n[l].isCorrect=!0);var t=n[l];n.splice(l,1,t),c(n),d(l+1)},currentQuestion:n[l]})})}var v=function(){return Object(r.jsxs)("body",{className:"App-body",children:[Object(r.jsx)(g,{}),Object(r.jsx)("img",{src:l,className:"App-logo",alt:"logo"})]})},w=n(41),C=n(38),y=n(56);var A=function(){return Object(r.jsxs)(C.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsx)("h3",{children:"About page will be here."}),"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit enim quasi quo earum, modi necessitatibus repellendus neque possimus. Placeat voluptate, alias itaque dicta adipisci laboriosam enim ipsum perferendis eos molestias."]})},N=n(29),q=n(7),k=n(50),S=n(59),T=n(42),R=n(23),L=n(60),I=n(58),J=n(40),Q=function(e){return Object(r.jsx)(I.a,Object(k.a)(Object(k.a)({id:"badge-tooltip"},e),{},{children:"7 quiestions is in this list"}))},_=function(){return Object(r.jsxs)(R.a,{bg:"info",expand:"lg",className:"py-0",sticky:"top",children:[Object(r.jsx)(J.LinkContainer,{to:"/questionnaire",children:Object(r.jsxs)(R.a.Brand,{className:"text-white",children:[Object(r.jsx)("img",{src:l,width:"60",height:"60",className:"d-inline-block",alt:"questionnaire logo"}),"The Qestionnaire"]})}),Object(r.jsx)(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(R.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(r.jsx)(R.a.Text,{children:Object(r.jsxs)(T.a,{className:"mr-auto",children:[Object(r.jsx)(J.LinkContainer,{to:"/new",children:Object(r.jsx)(T.a.Link,{children:"Create New"})}),Object(r.jsx)(J.LinkContainer,{to:"/about",children:Object(r.jsxs)(T.a.Link,{children:[Object(r.jsx)("span",{children:"About"}),Object(r.jsx)(L.a,{placement:"bottom",delay:{show:250,hide:400},overlay:Q,children:Object(r.jsx)(S.a,{className:"counter-badge",variant:"warning",children:"7"})})]})})]})})})]})};a.a.render(Object(r.jsxs)(N.BrowserRouter,{children:[Object(r.jsx)(_,{}),Object(r.jsxs)(q.g,{children:[Object(r.jsx)(q.d,{exact:!0,path:"/questionnaire",component:v}),Object(r.jsx)(q.d,{path:"/new",component:function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)([{question:"",expectedAnswer:""}]),l=Object(o.a)(a,2),j=l[0],u=l[1],b=Object(s.useState)("default"),h=Object(o.a)(b,2),x=h[0],O=h[1],m=function(e){e.preventDefault();var t=j.filter((function(e){return!(""===e.question&&""===e.expectedAnswer)}));u(t);var n=new Map;n.set(x,j);var r=JSON.stringify(Array.from(n.entries()));localStorage.setItem("qestionnaire",r)},f=function(e,t){var n=Object(w.a)(j);"firstName"===t.target.name?n[e].question=t.target.value:n[e].expectedAnswer=t.target.value,u(n)};return Object(r.jsxs)(C.a,{style:{minHeight:"100vh",color:"white"},children:[Object(r.jsx)("h4",{class:"text-center py-3",children:"Create a qestionnaire here"}),Object(r.jsx)(y.a,{className:"text-center",children:Object(r.jsx)("input",{style:{backgroundColor:"lightGrey",borderRadius:".3rem",width:"50%",margin:"30px",textAlign:"center",fontWeight:"bold"},id:"listName",defaultValue:"List name",onChange:function(e){return function(e){O(e.target.value)}(e)}})}),Object(r.jsxs)("form",{onSubmit:m,children:[j.map((function(e,t){return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsx)("div",{className:"fc",children:t+1}),Object(r.jsx)("div",{className:"form-group col-sm-7",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Question",id:"firstName",name:"firstName",value:e.question,onChange:function(e){return f(t,e)}})}),Object(r.jsx)("div",{className:"form-group col-sm-2",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Answer",id:"lastName",name:"lastName",value:e.expectedAnswer,onChange:function(e){return f(t,e)}})}),Object(r.jsxs)("div",{className:"form-group col-sm-2",children:[Object(r.jsx)(d.a,{variant:"link",disabled:n,onClick:function(){return function(e){var t=Object(w.a)(j);t.splice(e,1),u(t),2===j.length&&i(!0)}(t)},children:"Remove"}),Object(r.jsx)(d.a,{variant:"link",onClick:function(){return function(e){j.splice(e+1,0,{question:"",expectedAnswer:""});var t=Object(w.a)(j);u(t),j.length>1&&i(!1)}(t)},children:"Add"})]})]})},t)})),Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{variant:"info",type:"submit",onSubmit:m,children:"Save list"})}),Object(r.jsx)("pre",{children:JSON.stringify(j,null,2)})]})]})}}),Object(r.jsx)(q.d,{path:"/about",component:A})]})]}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.32237a6d.chunk.js.map