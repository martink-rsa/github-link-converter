(this["webpackJsonpgithub-link-converter"]=this["webpackJsonpgithub-link-converter"]||[]).push([[0],{55:function(e,t,a){e.exports=a(68)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(60),a(114)),l=a(110),u=(a(61),a(62),a(105)),m=a(39),s=a.n(m),h=a(101);var p=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(h.a,{color:"inherit",href:"https://github.com/martink-rsa/github-link-converter",target:"_blank",rel:"noopener"},r.a.createElement(u.a,{color:"primary","aria-label":"add to shopping cart"},r.a.createElement(s.a,{fontSize:"large"}))))},d=a(29),v=a(18),b=a(40),g=a(41),f=a(45),E=a(69),k=a(106),L=a(113),w=a(107),C=a(108),R=a(111),y=a(109),U=/github\.io/,x=/github\.com/,j=/^(https?\:\/\/)?([a-zA-Z0-9\-]*)(\.github\.io\/)([a-zA-Z0-9\-\_\/]+)/,A=/^(https?\:\/\/)?(w{3}\.)?(github\.com\/)([a-zA-Z0-9\-]*)\/([a-zA-Z0-9\-\_\/]+)/,O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).inputValidation=function(e){return console.log(e),console.log(j.test(e)),j.test(e)||A.test(e)},a.handleChange=function(e){var t=e.target.value;a.setState((function(){return{inputURL:t.trim(),allowConvert:a.inputValidation(t.trim())}}))},a.convertURL=function(){var e=a.state.inputURL;if((e=e.slice(0)).match(U)){var t=e.match(j)[2],n=e.match(j)[4],r="https://www.github.com/".concat(t,"/").concat(n);a.setState({convertedURL:r})}else if(e.match(x)){var o=e.match(A)[4],i=e.match(A)[5],c="https://".concat(o,".github.io/").concat(i);a.setState({convertedURL:c})}},a.openLink=function(){a.convertURL()},a.state={inputURL:"",convertedURL:"",allowConvert:!1},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.appTitle,t=this.state,a=t.inputURL,n=t.convertedURL,o=t.allowConvert;return r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",variant:"h4",component:"h1",gutterBottom:!0},e),r.a.createElement(E.a,{color:"primary",component:"p"},"Convert between GitHub Pages and GitHub Repository links."),r.a.createElement(k.a,{maxWidth:"sm"},r.a.createElement(L.a,{my:4},r.a.createElement(w.a,null,r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(R.a,{id:"url-input",label:"Enter URL",variant:"outlined",autoFocus:!0,fullWidth:!0,value:a,onChange:this.handleChange})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(R.a,{id:"url-result",label:"Result",variant:"outlined",fullWidth:!0,disabled:!o,value:n})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"contained",color:"secondary",onClick:this.convertURL,disabled:!o},"Convert URL"),o?r.a.createElement(h.a,{href:n,target:"_blank",rel:"noopener"},r.a.createElement(y.a,{variant:"contained",color:"primary",disabled:!o,onClick:this.openLink},"Convert & Go")):r.a.createElement(y.a,{variant:"contained",color:"primary",disabled:!o,onClick:this.openLink},"Convert & Go")))))))}}]),t}(r.a.Component),z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(O,{appTitle:"GitHub Link Converter"}))},B=a(30),G=a(44),W=Object(G.a)({palette:{primary:{main:"#61dafb"},secondary:{main:"#b5ecfb"},error:{main:B.a.A400},background:{default:"#282c34"}},overrides:{MuiPaper:{root:{padding:"20px 10px",marginBottom:"10px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"5px"}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,{theme:W},r.a.createElement(c.a,null),r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.fbb88cf0.chunk.js.map