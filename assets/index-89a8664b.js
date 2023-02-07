(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const c="https://avatars.githubusercontent.com/u/25049577?v=4",m="Suphakit Pinyoworapot",f="Suphakit P.",u="Just a Computer Engineering Student w/ some music composing skill. :3",d={bYear:2002,eduProfile:[{grade:"Kintergarden - Grade 6",class:"",school:"Darasamutr Sriracha School",duration:"2005 - 2014"},{grade:"Grade 7-9",class:"MEP",school:"Sriracha School",duration:"2014 - 2018"},{grade:"Grade 10",class:"Sci-Math",school:"Piboonbumpen Demonstration School",duration:"2018 - 2019"},{grade:"Grade 11-12",class:"Sci-Math",school:"Darasamutr Sriracha School",duration:"2019 - April 2021"},{grade:"Bachelor's degree",class:"Computer Engineering",school:"University of Phayao",duration:"May 2021 - Present"}],skills:{programming:["HTML5","CSS3","Bootstrap","Tailwind.css","PHP","Javascript","TypeScript","React.js","Vue.js","Nuxt.js","Express.js"],musicComposing:["Producing","Vocaling","Mastering","Composing","Arranging"]},events:[{name:"TESA Top Gun Rally #16",desp:"5-10 Sept. 2022 @ Chitralada Technology Institute",image:"https://ksrc.suphakit.net/1662866532553/000001.jpg"}],certificates:[{name:"TESA Top Gun Rally #16",desp:"Participate in TESA Top Gun Rally #16",image:""}]},h={musicComposing:[{name:"Let me make a song for you.",desp:"This is a commission for composing a song like 'a theme song' or other type of song",price:"Start @ 1000 THB",example:[{name:"katsu.json - a luv.ly day",link:"https://youtu.be/QjwCHzxqfmE"}]}]},p=[{name:"E-Mail",link:"mailto:me@suphakit.net",bgColor:"#ff6f61",tColor:"whitesmoke"},{name:"Github",link:"https://github.com/dethMastery",bgColor:"#2e2f2f",tColor:"whitesmoke"},{name:"Discord",link:"https://did.000198.xyz/@298415109359796234",bgColor:"#7289da",tColor:"whitesmoke"},{name:"Facebook",link:"https://fb.com/detzz.in.th",bgColor:"#2f89fe",tColor:"whitesmoke"},{name:"Twitter",link:"https://twitter.com/georgeKdeterk",bgColor:"#1c9aee",tColor:"whitesmoke"}],g={"?":"🤍",year:2023,holder:"Suphakit P.",holderLink:"https://suphakit.net/"},a={image:c,name:m,sName:f,quote:u,about:d,commission:h,contact:p,copyright:g};function n(){let t="block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80";return{nav:`<nav class="flex w-full text-[whitesmoke] text-[12px] flex-row mb-[2rem] md:flex-wrap">
      <a href="#home" class="${t}">Home</a>
      <a href="#about" class="${t}">About</a>
      <a href="#commission" class="${t}">Commission</a>
      <a href="#contact" class="${t}">Contact</a>
    </nav>`,footer:`<footer class="w-full p-[1rem] absolute bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${a.copyright["?"]} by ${a.copyright.holder}<br />
      &copy; ${a.copyright.year} <a href="${a.copyright.holderLink}" class="hover:underline">${a.copyright.holder}</a> All Right Reserved.
    </footer>`}}function y(t){let o="";return t=="home"?o=`<div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
      <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
        <img src="${a.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
        <h1 class="shortName text-3xl my-[1rem]">
          <b>${a.sName}</b>
        </h1>
        <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
          ${a.quote}
        </p>
        <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
          <a href="#about" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-bl-[1rem] hover:opacity-80">About</a>
          <a href="#commission" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] hover:opacity-80">Commission</a>
          <a href="#contact" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] hover:opacity-80">Contact</a>
        </div>
      </div>
    </div>`:(t=="about"||t=="commission"||t=="contact"||t=="donation",o=""),o}function b(t){return`
    ${n().nav}

    <main class="w-[100vw] flex flex-col md:flex-row md:w-[400vw]">
      ${y(t)}
    </main>
    
    ${n().footer}
  `}document.querySelector("#app").innerHTML=`
  ${b("home")}
`;
