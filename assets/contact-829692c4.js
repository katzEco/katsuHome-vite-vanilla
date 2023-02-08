import{f as e,p as a}from"./compo-c28c51e5.js";function r(n){return`
    ${e().nav}

    ${a(n)}
    
    ${e().footer}
  `}let o=window.location.href.split("/");o.pop();o=o.join("/");let t="contact";console.log(t);document.querySelector("#app").innerHTML=`
  ${r(t)}
`;
