import{f as e,p as a}from"./compo-c28c51e5.js";function r(t){return`
    ${e().nav}

    ${a(t)}
    
    ${e().footer}
  `}let o=window.location.href.split("/");o.pop();o=o.join("/");let n="donation";console.log(n);document.querySelector("#app").innerHTML=`
  ${r(n)}
`;
