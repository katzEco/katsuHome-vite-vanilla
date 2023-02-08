(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();const $="https://avatars.githubusercontent.com/u/25049577?v=4",w="Suphakit Pinyoworapot",k="Suphakit P.",C="Just a Computer Engineering Student w/ some music composing skill. :3",S={bYear:2002,eduProfile:[{grade:"Kintergarden - Grade 6",class:"",school:"Darasamutr Sriracha School",duration:"2005 - 2014"},{grade:"Grade 7-9",class:"MEP",school:"Sriracha School",duration:"2014 - 2018"},{grade:"Grade 10",class:"Sci-Math",school:"Piboonbumpen Demonstration School",duration:"2018 - 2019"},{grade:"Grade 11-12",class:"Sci-Math",school:"Darasamutr Sriracha School",duration:"2019 - April 2021"},{grade:"Bachelor's degree",class:"Computer Engineering",school:"University of Phayao",duration:"May 2021 - Present"}],skills:{programming:["HTML5","CSS3","Bootstrap","Tailwind.css","PHP","Javascript","TypeScript","React.js","Vue.js","Nuxt.js","Express.js"],musicComposing:["Producing","Vocaling","Mastering","Composing","Arranging"]},events:[{name:"TESA Top Gun Rally #16",desp:"5-10 Sept. 2022 @ Chitralada Technology Institute",image:"https://ksrc.suphakit.net/1662866532553/000001.jpg"}],certificates:[{name:"TESA Top Gun Rally #16",desp:"Participate in TESA Top Gun Rally #16",image:""}]},E={musicComposing:[{name:"Let me make a song for you.",desp:"This is a commission for composing a song like 'a theme song' or other type of song",price:"Start @ 1000 THB",example:[{name:"katsu.json - a luv.ly day",link:"https://youtu.be/QjwCHzxqfmE"}]}]},P=[{name:"E-Mail",link:"mailto:me@suphakit.net",bgColor:"#ff6f61",tColor:"whitesmoke"},{name:"Github",link:"https://github.com/dethMastery",bgColor:"#2e2f2f",tColor:"whitesmoke"},{name:"Discord",link:"https://did.000198.xyz/@298415109359796234",bgColor:"#7289da",tColor:"whitesmoke"},{name:"Facebook",link:"https://fb.com/detzz.in.th",bgColor:"#2f89fe",tColor:"whitesmoke"},{name:"Twitter",link:"https://twitter.com/georgeKdeterk",bgColor:"#1c9aee",tColor:"whitesmoke"}],j={"?":"🤍",year:2023,holder:"Suphakit P.",holderLink:"https://suphakit.net/"},a={image:$,name:w,sName:k,quote:C,about:S,commission:E,contact:P,copyright:j};function M(t){let e="",o;return t.forEach(s=>{t.class==""?o=`[${s.grade}] - ${s.school} [${s.duration}]`:o=`[${s.grade}] - ${s.class} ${s.school} [${s.duration}]`,e!=""?e=e+`<li class="mb-[.5rem]">${o}</li>`:e=`<li class="mb-[.5rem]">${o}</li>`}),e}function m(t){let e="";return t.forEach(o=>{e!=""?e=e+", "+o:e=o}),e}function d(t){let e="";return t.forEach(o=>{let s=`<div class="cardEvent">
  <img src="${o.image}" />
  <div class="cardBody">
    <h3>
      ${o.name}
    </h3>
    <p>
      ${o.desp}
    </p>
  </div>
</div>`;e!=""?e=e+s:e=s}),e}function T(t){let e="",o="";return t.forEach(s=>{s.example.forEach(l=>{let i=`<a href='${l.link}' class="underline duration-300 hover:opacity-80 hover:no-underline">${l.name}</a>`;o!=""?o=o+i:o=i});let r=`<div class="commissionCard">
  <h2 class="cardHeader mb-[.5rem]">
    <b>
      ${s.name}
    </b>
  </h2>
  <hr class="w-[20%] border-solid border-gray-400 mb-[.5rem]" />
  <div class="cardBody w-full flex flex-row">
    <p class="w-full">
      ${s.desp}
    </p>

    <p class="w-full text-right">
      <span>
        <b>
          Example :
        </b>
      </span>
      <br />
      ${o}
    </p>

  </div>
  <div class="cardBody w-full flex flex-row mt-[2rem]">
    <p class="w-full">
      ${s.price}
    </p>
    <p class="w-full text-right">
      <a href="mailto:me@suphakit.net" target="_blank" class="bg-[#ff6f61] text-[whitesmoke] p-[.5rem] contactLink">
        Contact Me >
      </a>
    </p>
  </div>
</div>`;e!=""?e=e+r:e=r}),e}let u="w-[100%] flex flex-col md:flex-row",f="w-[100%] mb-[5rem]",h="text-3xl mb-[1rem]",n="text-2xl mb-[1rem] underline",p="text-xl mb-[1rem] underline",g="container w-[80%] mx-auto",b="header my-[5rem] w-full justify-center text-center text-[whitesmoke]",x="content p-[2rem] bg-[whitesmoke] w-full rounded-[1rem]";function v(){let t="block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80";return{nav:`<nav class="flex w-full text-[whitesmoke] text-[10px] text-center flex-row md:flex-wrap md:text-[18px]">
      <a href="/home" class="${t}">Home</a>
      <a href="/about" class="${t}">About</a>
      <a href="/commission" class="${t}">Commission</a>
      <a href="/contact" class="${t}">Contact</a>
    </nav>`,footer:`<footer class="w-full p-[1rem] fixed bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${a.copyright["?"]} by ${a.copyright.holder}<br />
      &copy; ${a.copyright.year} <a href="${a.copyright.holderLink}" class="hover:underline">${a.copyright.holder}</a> All Right Reserved.
    </footer>`}}function L(t){let e="";return t=="home"||t==""?e=`<main class="${u}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
        <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
          <img src="${a.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
          <h1 class="shortName text-3xl my-[1rem]">
            <b>${a.sName}</b>
          </h1>
          <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
            ${a.quote}
          </p>
          <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
            <a href="/donation" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] rounded-bl-[1rem] hover:opacity-80">Donate Me?</a>
          </div>
        </div>
      </div>
    </main>`:t=="about"?e=`<main class="${f}">
      <div class="${g}">
        <div class="${b}">
          <h1 class="${h}">
            about()
          </h1>
          <h3 class="text-[20px]">
            just a information about me :D
          </h3>
        </div>
        <div class="${x}">
          <div class="bInfo mb-[2rem]">
            <h2 class="${n}">
              Basic Information
            </h2>
            <p class="pb-[.5rem] ml-[1rem] text-[15px]">
              Name : ${a.name}
            </p>
            <p class="pb-[.5rem] ml-[1rem] text-[15px]">
              Age : ${new Date().getFullYear()-parseInt(a.about.bYear)}
            </p>
          </div>
          <div class="eduProfile mb-[2rem]">
            <h2 class="${n}">
              Educational Profile
            </h2>
            ${M(a.about.eduProfile.reverse())}
          </div>
          <div class="skill mb-[2rem]">
            <h2 class="${n}">
              Skills
            </h2>
            <h3 class="${p}">
              Programming
            </h3>
            ${m(a.about.skills.programming)}
            <br><br>
            <h3 class="${p}">
              Music Composing
            </h3>
            ${m(a.about.skills.musicComposing)}
          </div>
          <div class="joinedEvent mb-[2rem]">
            <h2 class="${n}">
              Joined Events
            </h2>
            <div class="flex f-row flex-wrap justify-center">
              ${d(a.about.events)}
            </div>
          </div>
          <div class="certs mb-[2rem]">
            <h2 class="${n}">
              Certificates
            </h2>
            <div class="flex f-row flex-wrap justify-center">
              ${d(a.about.certificates)}
            </div>
          </div>
        </div>
      </div>
    </main>`:t=="commission"?e=`<main class="${f}">
      <div class="${g}">
        <div class="${b}">
          <h1 class="${h}">
            commission()
          </h1>
          <h3 class="text-[20px]">
            love my work? why don't hire me for some of your work :D
          </h3>
        </div>
        <div class="${x}">
          <div class="musicBox">
            <h2 class="${n}">
              Music Commission
            </h2>
            ${T(a.commission.musicComposing)}
          </div>
        </div>
      </div>
    </main>`:t=="contact"||t=="donation"?e="":e=`<main class="${u}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center text-[whitesmoke]">
        <h1 class="w-full text-5xl mb-[2rem]">
          404: Page not Found
        </h1>
        <a href="/" class="text-[18px] underline hover:no-underline hover:opacity-60">&lt; Back to Homepage</a>
      </div>
    </main>`,e}function B(t){return`
    ${v().nav}

    ${L(t)}
    
    ${v().footer}
  `}let c=window.location.href.split("/");c.pop();c=c.join("/");let y=window.location.href.replace(c+"/","");console.log(y);document.querySelector("#app").innerHTML=`
  ${B(y)}
`;
