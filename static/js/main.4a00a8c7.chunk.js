(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(90),a(19)),i=(a(91),a(148)),u=a(151),s=a(59),m=a.n(s),f=a(68),d=a(146),p=a(147),E=a(154),h=a(140),v=a(141),g=a(149),b=a(155),y=a(142),w=a(143),x=a(144);var O=function(e){var t=e.open,a=e.setOpen,n=e.note,l=e.setNote,o=e.category,c=e.setCategory,i=e.createNote;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{open:t,fullWidth:!0,maxWidth:"sm"},r.a.createElement(h.a,null,"Create Note"),r.a.createElement(v.a,null,r.a.createElement(g.a,{label:"Select Category",select:!0,error:o.hasError,helperText:o.hasError?"Select category":null,value:o.value,onChange:function(e){return c({value:e.target.value})},style:{minWidth:200}},r.a.createElement(b.a,{value:"personal"},"Personal"),r.a.createElement(b.a,{value:"office"},"Office")),r.a.createElement(u.a,{mt:5},r.a.createElement(g.a,{label:"Note",value:n.value,onChange:function(e){return l({value:e.target.value})},fullWidth:!0,error:n.hasError,helperText:n.hasError?"Please enter some text.":null,multiline:!0}),r.a.createElement(y.a,null,n.hasError?null:"Please press enter for the next line."))),r.a.createElement(w.a,null,r.a.createElement(x.a,{variant:"contained",onClick:function(){a(!1),l({value:""})},style:{background:"#ffa600",color:"white",fontWeight:"bold"}},"Cancel"),r.a.createElement(x.a,{variant:"contained",onClick:i,style:{background:"#ffa600",color:"white",fontWeight:"bold"}},"Create"))))},k=a(73),C=a.n(k),j=a(72),S=a.n(j);var M=function(e){var t=e.setQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{m:2,position:"relative"},r.a.createElement("input",{type:"text",autoFocus:!0,style:{width:"90%",borderRadius:24,outline:"none",border:"none",background:"rgba(92, 92, 92, 0.4)",height:50,color:"white",paddingLeft:50,paddingRight:30,fontSize:22},onChange:function(e){return t(e.target.value)}}),r.a.createElement(S.a,{style:{color:"white",position:"absolute",left:20,top:16}})))},Y=a(74),N=a(152),W=a(145),F=a(111),D=a(46),I=a.n(D),P=a(60);P.initializeApp({apiKey:"AIzaSyAg0HrBZ9nOp_mE8AHWEX-LpHsfMP5GcYM",authDomain:"notes-95e53.firebaseapp.com",databaseURL:"https://notes-95e53.firebaseio.com",projectId:"notes-95e53",storageBucket:"notes-95e53.appspot.com",messagingSenderId:"987394703507",appId:"1:987394703507:web:08123b65af59a625b9cd66",measurementId:"G-J3QE40N7XD"});var z=P.database().ref().child("notes");var A=function(e){var t=e.open,a=e.setOpen,n=e.item;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{open:t,fullWidth:!0,maxWidth:"sm"},r.a.createElement(v.a,null,r.a.createElement(F.a,{variant:"caption",style:{color:"#ffa600"}},I()(n.date).format("Do MMMM YYYY, h:mm a")),r.a.createElement(F.a,{variant:"body1",style:{paddingTop:5}},n.value)),r.a.createElement(w.a,null,r.a.createElement(x.a,{size:"small",variant:"outlined",onClick:function(){return a(!1)},style:{border:"1px solid #ffa600"}},"Cancel"),r.a.createElement(x.a,{size:"small",variant:"outlined",onClick:function(){z.child(n.key).remove(),a(!1)},style:{border:"1px solid #ffa600"}},"Delete"))))};var B=function(e){var t=e.item,a=r.a.useState(!1),n=Object(c.a)(a,2),l=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{bgcolor:"rgba(92, 92, 92, 0.4)",borderRadius:"6px",p:1,m:2,onClick:function(){o(!0)},style:{cursor:"pointer"}},r.a.createElement(F.a,{variant:"caption",style:{color:"#ffa600"}},I()(t.date).format("MMM YYYY")),r.a.createElement(F.a,{variant:"body1",style:{color:"white",paddingTop:5}},t.value.split(" ").slice(0,10).join(" ")),r.a.createElement(F.a,{variant:"caption",style:{color:"lightgrey"}},I()(t.date).format("Do MMMM YYYY, h:mm a"))),r.a.createElement(A,{open:l,setOpen:o,item:t}))};function L(e){var t=e.children,a=e.value,n=e.index,l=Object(Y.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),a===n&&r.a.createElement(u.a,{p:3},r.a.createElement(F.a,null,t)))}function R(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var T=function(e){var t=e.notes,a=r.a.useState(0),n=Object(c.a)(a,2),l=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(N.a,{value:l,onChange:function(e,t){o(t)},"aria-label":"simple tabs example"},r.a.createElement(W.a,Object.assign({style:{color:"white"},label:"All Notes"},R(0))),r.a.createElement(W.a,Object.assign({style:{color:"white"},label:"Personal"},R(1))),r.a.createElement(W.a,Object.assign({style:{color:"white"},label:"Office"},R(2)))),r.a.createElement(L,{value:l,index:0},t.map((function(e,t){return r.a.createElement(B,{item:e})}))),r.a.createElement(L,{value:l,index:1},t.filter((function(e){return"personal"===e.category})).map((function(e,t){return r.a.createElement(B,{item:e})}))),r.a.createElement(L,{value:l,index:2},t.filter((function(e){return"office"===e.category})).map((function(e,t){return r.a.createElement(B,{item:e})}))))};var H=function(){var e=r.a.useState([]),t=Object(c.a)(e,2),a=t[0],n=t[1],l=r.a.useState({value:"",hasError:!1}),o=Object(c.a)(l,2),i=o[0],s=o[1],E=r.a.useState({category:"",hasError:!1}),h=Object(c.a)(E,2),v=h[0],g=h[1],b=r.a.useState(!1),y=Object(c.a)(b,2),w=y[0],x=y[1],k=r.a.useState(""),j=Object(c.a)(k,2),S=j[0],Y=j[1];function N(){return(N=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.value||s({value:"",category:"",hasError:!0}),v.value?(z.push().set({value:i.value,category:v.value,date:(new Date).toString()}),x(!1),s({value:"",hasError:!1}),g({value:"",hasError:!1})):g({category:"",hasError:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){z.on("value",(function(e){!function(e){var t=[];e.forEach((function(e){var a=e.val();a.key=e.key,t.push(a)})),n(t)}(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{setQuery:Y}),a.length?r.a.createElement(T,{notes:a.filter((function(e){return-1!==e.value.indexOf(S.toLowerCase())}))}):r.a.createElement(d.a,null),r.a.createElement(O,{open:w,setOpen:function(e){return x(e)},note:i,setNote:s,category:v,setCategory:g,createNote:function(){return N.apply(this,arguments)}}),r.a.createElement(u.a,{position:"fixed",bottom:"20px",right:"20px"},r.a.createElement(p.a,{onClick:function(){return x(!0)},style:{background:"#ffa600",color:"white"},"aria-label":"add"},r.a.createElement(C.a,null))))},J=Object(n.createContext)("");var Q=function(){var e=r.a.useState(null),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Provider,{value:{selectedNote:a,setSelectedNote:function(e){return n(e)}}},r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(u.a,{bgcolor:"black",position:"relative",width:"100%",height:"100vh",overflow:"auto"},r.a.createElement("h1",{className:"heading"},"Notes"),r.a.createElement(H,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(109)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.4a00a8c7.chunk.js.map