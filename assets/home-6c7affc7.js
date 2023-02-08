import{f as e,p as r}from"./compo-c28c51e5.js";function a(t){return`
    ${e().nav}

    ${r(t)}
    
    ${e().footer}
  `}let o=window.location.href.split("/");o.pop();o=o.join("/");let n="home";console.log(n);document.querySelector("#app").innerHTML=`
  ${a(n)}
`;
