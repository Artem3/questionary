(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"qText":"text 1 bla-bla_1","expectedAnswer":"1","givenAnswer":""},{"id":2,"qText":"text 2 bla-bla_2","expectedAnswer":"2","givenAnswer":""},{"id":3,"qText":"text 3 bla-bla_3","expectedAnswer":"3","givenAnswer":""},{"id":4,"qText":"text 4 bla-bla_4","expectedAnswer":"4","givenAnswer":""},{"id":5,"qText":"text 5 bla-bla_5","expectedAnswer":"5","givenAnswer":""}]')},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n(13),i=n.n(s),l=(n(22),n.p+"static/media/logo.6ce24c58.svg"),a=(n(23),n(24),n(16)),j=n(6),d=n(14),o=n(7),b=n(11);function u(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],i=n[1],l=function(){e.onClick(s),i("")};return Object(r.jsxs)(b.a,{bg:"light",text:"dark",style:{alignItems:"center"},children:[Object(r.jsx)(b.a.Title,{style:{width:"30rem"},children:e.currentQuestion.qText}),Object(r.jsx)("input",{type:"text",value:s,style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onChange:function(e){return i(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&l()}(e)}}),Object(r.jsx)(o.a,{variant:"info",style:{width:"8rem"},className:"mt-2 mb-2",onClick:l,children:"Next >>"})]})}var x=n(15),h=n(8);function O(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Out of ",Object(r.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(r.jsxs)(h.a,{variant:"flush",children:[Object(r.jsxs)(h.a.Item,{variant:"success",children:["Correct answers: ",Object(r.jsx)("b",{children:e.results.totalCorrectAnswered})]}),Object(r.jsxs)(h.a.Item,{variant:"danger",children:["Wrong answers: ",Object(r.jsx)("b",{children:e.results.incorrectAnswers})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)(o.a,{variant:"info",className:"mb-3",onClick:e.onClick,children:"See detailed results"}),e.displayTable&&(e.detailedResults,Object(r.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"First Name"}),Object(r.jsx)("th",{children:"Last Name"}),Object(r.jsx)("th",{children:"Username"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"1"}),Object(r.jsx)("td",{children:"Mark"}),Object(r.jsx)("td",{children:"Otto"}),Object(r.jsx)("td",{children:"@mdo"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"2"}),Object(r.jsx)("td",{children:"Jacob"}),Object(r.jsx)("td",{children:"Thornton"}),Object(r.jsx)("td",{children:"@fat"})]})]})]}))]})}function g(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],s=n[1];r||(e(),s(!0))}((function(){s(d.sort((function(){return.5-Math.random()})))}));var i=Object(c.useState)(0),l=Object(j.a)(i,2),a=l[0],o=l[1],b=!(a<=n.length-1),x=Object(c.useState)(!1),h=Object(j.a)(x,2),g=h[0],v=h[1];return Object(r.jsx)("div",{children:b?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Test completed!"}),Object(r.jsx)(O,{results:function(){var e=n.length,t=Object.values(n),r=t.filter((function(e){return e.givenAnswer!==e.expectedAnswer})).length,c=t.filter((function(e){return e.expectedAnswer==e.givenAnswer})).length;return r+c!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:r,totalCorrectAnswered:c}}(),onClick:function(){console.log(88),v(!0)},detailedResults:n,displayTable:g})]}):Object(r.jsx)(u,{onClick:function(e){n[a].givenAnswer=e;var t=n[a];n.splice(a,1,t),s(n),o(a+1)},currentQuestion:n[a]})})}var v=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)(g,{}),Object(r.jsx)("img",{src:l,className:"App-logo",alt:"logo"})]})})})};i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.862cafbc.chunk.js.map