(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();const y="https://avatars.githubusercontent.com/u/25049577?v=4",w="Suphakit Pinyoworapot",k="Suphakit P.",C="Just a Computer Engineering Student w/ some music composing skill. :3",E={bYear:2002,eduProfile:[{grade:"Kintergarden - Grade 6",class:"",school:"Darasamutr Sriracha School",duration:"2005 - 2014"},{grade:"Grade 7-9",class:"MEP",school:"Sriracha School",duration:"2014 - 2018"},{grade:"Grade 10",class:"Sci-Math",school:"Piboonbumpen Demonstration School",duration:"2018 - 2019"},{grade:"Grade 11-12",class:"Sci-Math",school:"Darasamutr Sriracha School",duration:"2019 - April 2021"},{grade:"Bachelor's degree",class:"Computer Engineering",school:"University of Phayao",duration:"May 2021 - Present"}],skills:{programming:["HTML5","CSS3","Bootstrap","Tailwind.css","PHP","Javascript","TypeScript","React.js","Vue.js","Nuxt.js","Express.js"],musicComposing:["Producing","Vocaling","Mastering","Composing","Arranging"]},events:[{name:"TESA Top Gun Rally #16",desp:"5-10 Sept. 2022 @ Chitralada Technology Institute",image:"https://ksrc.suphakit.net/1662866532553/000001.jpg"}],certificates:[{name:"TESA Top Gun Rally #16",desp:"Participate in TESA Top Gun Rally #16",image:""}]},S={musicComposing:[{name:"Let me make a song for you.",desp:"This is a commission for composing a song like 'a theme song' or other type of song",price:"Start @ 1000 THB",example:[{name:"katsu.json - a luv.ly day",link:"https://youtu.be/QjwCHzxqfmE"}]}]},P=[{name:"E-Mail",link:"mailto:me@suphakit.net",bgColor:"#ff6f61",tColor:"whitesmoke"},{name:"Github",link:"https://github.com/dethMastery",bgColor:"#2e2f2f",tColor:"whitesmoke"},{name:"Discord",link:"https://did.000198.xyz/@298415109359796234",bgColor:"#7289da",tColor:"whitesmoke"},{name:"Facebook",link:"https://fb.com/detzz.in.th",bgColor:"#2f89fe",tColor:"whitesmoke"},{name:"Twitter",link:"https://twitter.com/georgeKdeterk",bgColor:"#1c9aee",tColor:"whitesmoke"}],j=[{name:"Promptpay",address:"1209401046979",revName:"Suphakit Pinyoworapot"},{name:"Kasikorn Bank",address:"066-8-69930-8",revName:"Suphakit Pinyoworapot"},{name:"True Wallet",address:"0944264826",revName:"Suphakit Pinyoworapot"}],M={"?":"🤍",year:2023,holder:"Suphakit P.",holderLink:"https://suphakit.net/"},r={image:y,name:w,sName:k,quote:C,about:E,commission:S,contact:P,donation:j,copyright:M};function T(o){let e="",t;return o.forEach(s=>{o.class==""?t=`[${s.grade}] - ${s.school} [${s.duration}]`:t=`[${s.grade}] - ${s.class} ${s.school} [${s.duration}]`,e!=""?e=e+`<li class="mb-[.5rem]">${t}</li>`:e=`<li class="mb-[.5rem]">${t}</li>`}),e}function f(o){let e="";return o.forEach(t=>{e!=""?e=e+", "+t:e=t}),e}function u(o){let e="";return o.forEach(t=>{let s=`<div class="cardEvent">
  <img src="${t.image}" />
  <div class="cardBody">
    <h3>
      ${t.name}
    </h3>
    <p>
      ${t.desp}
    </p>
  </div>
</div>`;e!=""?e=e+s:e=s}),e}function L(o){let e="",t="";return o.forEach(s=>{s.example.forEach(l=>{let i=`<a href='${l.link}' class="underline duration-300 hover:opacity-80 hover:no-underline">${l.name}</a>`;t!=""?t=t+i:t=i});let a=`<div class="commissionCard">
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
      ${t}
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
</div>`;e!=""?e=e+a:e=a}),e}function N(o){let e="";return o.forEach(t=>{let s=`<a href="${t.link}" target="_blank" class="block w-full text-center rounded-[1rem] mb-[1rem] p-[1rem] text-[${t.tColor}] hover:opacity-80" style="background-color: ${t.bgColor};">${t.name}</a>`;e!=""?e=e+s:e=s}),e}function B(o){let e="";return o.forEach(t=>{let s=`<p class="mb-[1rem]">
      <span class="text-[18px]">${t.name} : ${t.address}</span><br />
      <span class="opacity-60 text-[15px]">${t.revName}</span>
    </p>`;e!=""?e=e+s:e=s}),e}let c="w-[100%] flex flex-col md:flex-row",h="w-[100%] mb-[5rem]",m="text-3xl mb-[1rem]",n="text-2xl mb-[1rem] underline",p="text-xl mb-[1rem] underline",g="container w-[80%] mx-auto",b="header my-[5rem] w-full justify-center text-center text-[whitesmoke]",x="content p-[2rem] bg-[whitesmoke] w-full rounded-[1rem]";function v(){let o="block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80";return{nav:`<nav class="flex w-full text-[whitesmoke] text-[10px] text-center flex-row md:flex-wrap md:text-[18px]">
      <a href="/home" class="${o}">Home</a>
      <a href="/about" class="${o}">About</a>
      <a href="/commission" class="${o}">Commission</a>
      <a href="/contact" class="${o}">Contact</a>
    </nav>`,footer:`<footer class="w-full p-[1rem] fixed bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${r.copyright["?"]} by ${r.copyright.holder}<br />
      &copy; ${r.copyright.year} <a href="${r.copyright.holderLink}" class="hover:underline">${r.copyright.holder}</a> All Right Reserved.
    </footer>`}}function H(o){let e="";return o=="home"||o==""?e=`<main class="${c}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
        <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
          <img src="${r.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
          <h1 class="shortName text-3xl my-[1rem]">
            <b>${r.sName}</b>
          </h1>
          <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
            ${r.quote}
          </p>
          <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
            <a href="/donation" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] rounded-bl-[1rem] hover:opacity-80">Donate Me?</a>
          </div>
        </div>
      </div>
    </main>`:o=="about"?e=`<main class="${h}">
      <div class="${g}">
        <div class="${b}">
          <h1 class="${m}">
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
              Name : ${r.name}
            </p>
            <p class="pb-[.5rem] ml-[1rem] text-[15px]">
              Age : ${new Date().getFullYear()-parseInt(r.about.bYear)}
            </p>
          </div>
          <div class="eduProfile mb-[2rem]">
            <h2 class="${n}">
              Educational Profile
            </h2>
            ${T(r.about.eduProfile.reverse())}
          </div>
          <div class="skill mb-[2rem]">
            <h2 class="${n}">
              Skills
            </h2>
            <h3 class="${p}">
              Programming
            </h3>
            ${f(r.about.skills.programming)}
            <br><br>
            <h3 class="${p}">
              Music Composing
            </h3>
            ${f(r.about.skills.musicComposing)}
          </div>
          <div class="joinedEvent mb-[2rem]">
            <h2 class="${n}">
              Joined Events
            </h2>
            <div class="flex f-row flex-wrap justify-center">
              ${u(r.about.events)}
            </div>
          </div>
          <div class="certs mb-[2rem]">
            <h2 class="${n}">
              Certificates
            </h2>
            <div class="flex f-row flex-wrap justify-center">
              ${u(r.about.certificates)}
            </div>
          </div>
        </div>
      </div>
    </main>`:o=="commission"?e=`<main class="${h}">
      <div class="${g}">
        <div class="${b}">
          <h1 class="${m}">
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
            ${L(r.commission.musicComposing)}
          </div>
        </div>
      </div>
    </main>`:o=="contact"?e=`<main class="${c}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center">
        <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] p-[2rem] justify-center text-center items-center">
          <h1 class="${m}">
            contact()
          </h1>
          ${N(r.contact)}
        </div>
      </div>
    </main>`:o=="donation"?e=`<main class="${c}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center">
        <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] p-[2rem] justify-center text-center items-center">
          <h1 class="${m}">
            donation()
          </h1>
          <hr class="border-[#2e2f2f] w-[60%] mx-auto mb-[1rem]">
          ${B(r.donation)}
        </div>
      </div>
    </main>`:e=`<main class="${c}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center text-[whitesmoke]">
        <h1 class="w-full text-5xl mb-[2rem]">
          404: Page not Found
        </h1>
        <a href="/" class="text-[18px] underline hover:no-underline hover:opacity-60">&lt; Back to Homepage</a>
      </div>
    </main>`,e}function A(o){return`
    ${v().nav}

    ${H(o)}
    
    ${v().footer}
  `}let d=window.location.href.split("/");d.pop();d=d.join("/");let $=window.location.href.replace(d+"/","");console.log($);document.querySelector("#app").innerHTML=`
  ${A($)}
`;
