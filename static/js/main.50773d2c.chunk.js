(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{168:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(13),c=t.n(l),r=(t(96),t(97),t(98),t(99),t(18)),m=t(19),i=t(20),o=t(21),u=[{id:0,question:"4 , 8 , 16 , ?",image:"/assets/images/question_bg.jpg",answer:'{"answers":"32"}'},{id:1,question:"2 + 2 X 2 = ?",image:"/assets/images/question_bg.jpg",answer:'{"answers":"6"}'},{id:2,question:"40,80,120,?",image:"/assets/images/question_bg.jpg",answer:'{"answers":"160"}'},{id:3,question:"1,5,10,?",image:"/assets/images/question_bg.jpg",answer:'{"answers":"15"}'},{id:4,question:"4,8,16,?",image:"/assets/images/question_bg.jpg",answer:32},{id:5,question:"4,8,16,?",image:"/assets/images/question_bg.jpg",answer:32},{id:6,question:"4,8,16,?",image:"/assets/images/question_bg.jpg",answer:32},{id:7,question:"4,8,16,?",image:"/assets/images/question_bg.jpg",answer:32}],E=t(10),d=t(8),f=t(28),p=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){function e(e){var a=e.question;return s.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},s.a.createElement(E.b,{className:"question-card rounded",onClick:""},s.a.createElement(d.b,{to:"/home/level/".concat(a.id)},s.a.createElement(E.c,{width:"100%",src:a.image}),s.a.createElement(E.d,null,s.a.createElement(E.e,{className:"question-number"},a.id+1)))))}var a=this.props.questions.map((function(a){return s.a.createElement("div",{className:"col-lg-3 col-md-5 col-sm-5 m-2 ml-5",key:a.id},s.a.createElement(e,{question:a}))}));return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:"mt-4"},"Levels:")),s.a.createElement("div",{className:"row mt-4 level"},a))}}]),t}(n.Component),N=t(22),b=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).closeOpenedWindow=n.closeOpenedWindow.bind(Object(N.a)(n)),n}return Object(m.a)(t,[{key:"closeOpenedWindow",value:function(){window.close()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"mainMenu list-unstyled"},s.a.createElement("li",null,s.a.createElement(d.b,{to:"/home/play"},s.a.createElement(E.a,{outline:!0,className:"menuButton"},s.a.createElement("span",{className:"fa fa-play"}),s.a.createElement("span",{className:"fa ml-2"},"PLAY")))),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/home/level"},s.a.createElement(E.a,{outline:!0,className:"menuButton"},s.a.createElement("span",{className:"fa fa-list "}),s.a.createElement("span",{className:"fa ml-2"},"LEVELS")))),s.a.createElement("li",null,s.a.createElement(E.a,{outline:!0,className:"menuButton"},s.a.createElement("span",{className:"fa fa-undo"}),s.a.createElement("span",{className:"fa ml-2"},"RESTART"))),s.a.createElement("li",null,s.a.createElement(E.a,{outline:!0,className:"menuButton",onClick:this.closeOpenedWindow},s.a.createElement("span",{className:"fa fa-times"}),s.a.createElement("span",{className:"fa ml-2"},"EXIT")))))}}]),t}(n.Component);var g=function(){return s.a.createElement("div",{className:"footer mt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},s.a.createElement("div",{className:"text-center"},s.a.createElement("a",{className:"btn btn-social-icon btn-google mr-2",href:"#"},s.a.createElement("i",{className:"fa fa-google-plus"})),s.a.createElement("a",{className:"btn btn-social-icon btn-facebook mr-2",href:"#"},s.a.createElement("i",{className:"fa fa-facebook"})),s.a.createElement("a",{className:"btn btn-social-icon btn-linkedin mr-2",href:"#"},s.a.createElement("i",{className:"fa fa-linkedin"})),s.a.createElement("a",{className:"btn btn-social-icon btn-twitter mr-2",href:"#"},s.a.createElement("i",{className:"fa fa-twitter"})),s.a.createElement("a",{className:"btn btn-social-icon btn-google mr-2",href:"#"},s.a.createElement("i",{className:"fa fa-youtube"})),s.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},s.a.createElement("i",{className:"fa fa-envelope-o"}))))),s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-auto mt-5"},s.a.createElement("p",null,"\xa9 Copyright 2020 Nisar Ahmad")))))},h=t(64),v=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={answers:"",isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(N.a)(n)),n.handleClick=n.handleClick.bind(Object(N.a)(n)),n}return Object(m.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleClick",value:function(e){var a=this.props.question.answer;JSON.stringify(e)===a?this.toggleModal():alert("WRONG ANSWER!!!!! "+a+" "+JSON.stringify(e))}},{key:"render",value:function(){var e=this,a=function(a){var t=a.question;return s.a.createElement("div",{className:"container mt-5",key:t.id},s.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"question"}," QUESTION"," ",t.id+1," ")),s.a.createElement("div",{className:"container"},s.a.createElement("h3",{className:"question"}," ",t.question)),s.a.createElement(h.LocalForm,{onSubmit:function(a){return e.handleClick(a)},autocomplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4 offset-md-5"},s.a.createElement(h.Control.text,{model:".answers",id:"answers",name:"answers",placeholder:"ENTER THE ANSWER",className:"answers mt-5"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-5"},s.a.createElement(E.a,{outline:!0,type:"submit",className:"answerButton mt-5 ml-4"},s.a.createElement("span",{className:"fa fa-tick"}),s.a.createElement("span",{className:"fa ml-2"},"CHECK ANSWER")))))))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(a,{question:this.props.question}),s.a.createElement(E.f,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,className:"answerModal"},s.a.createElement(E.g,null,s.a.createElement("p",{className:"answer"},"CORRECT ANSWER!!"),s.a.createElement(d.b,{to:"/home/level/".concat(this.props.question.id+1)},s.a.createElement(E.a,{className:"answer",type:"submit",value:"submit",color:"dark"},"Next Question")))))}}]),t}(n.Component),w=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={questions:u},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid backgrounding"},s.a.createElement("div",{className:"col-12"},s.a.createElement(d.b,{className:"home-link",to:"/home"},s.a.createElement("h1",{className:"main-header"},"MATH"))),s.a.createElement("hr",null),s.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},s.a.createElement("div",{className:"row mb-5"},s.a.createElement(d.e,null,s.a.createElement(d.d,{exact:!0,path:"/home",component:b}),s.a.createElement(d.d,{exact:!0,path:"/home/play",component:function(){return s.a.createElement(v,{question:e.state.questions[0]})}}),s.a.createElement(d.d,{exact:!0,path:"/home/level",component:function(){return s.a.createElement(p,{questions:e.state.questions})}}),s.a.createElement(d.d,{path:"/home/level/:questionId",component:function(a){var t=a.match;return s.a.createElement(v,{question:e.state.questions.filter((function(e){return e.id===parseInt(t.params.questionId,10)}))[0]})}}),s.a.createElement(d.c,{to:"/home"})))),s.a.createElement("hr",null),s.a.createElement(g,null))}}]),t}(n.Component);t(168);var q=function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App container-fluid backgrounding"},s.a.createElement(w,null)))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(q,null)),document.getElementById("root"))},91:function(e,a,t){e.exports=t(169)},99:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.50773d2c.chunk.js.map