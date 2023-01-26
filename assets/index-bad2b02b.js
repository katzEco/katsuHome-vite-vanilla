(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();const d="https://avatars.githubusercontent.com/u/25049577?v=4",f="Suphakit Pinyoworapot",u="Suphakit P.",h="Just a Computer Engineering Student w/ some music composing skill. :3",p={bYear:2002,eduProfile:[{grade:"Kintergarden - Grade 6",class:"",school:"Darasamutr Sriracha School",duration:"2005 - 2014"},{grade:"Grade 7-9",class:"MEP",school:"Sriracha School",duration:"2014 - 2018"},{grade:"Grade 10",class:"Sci-Math",school:"Piboonbumpen Demonstration School",duration:"2018 - 2019"},{grade:"Grade 11-12",class:"Sci-Math",school:"Darasamutr Sriracha School",duration:"2019 - April 2021"},{grade:"Bachelor's degree",class:"Computer Engineering",school:"University of Phayao",duration:"May 2021 - Present"}],skills:{programming:["HTML5","CSS3","Bootstrap","Tailwind.css","PHP","Javascript","TypeScript","React.js","Vue.js","Nuxt.js","Express.js"],musicComposing:["Producing","Vocaling","Mastering","Composing","Arranging"]},events:[{name:"TESA Top Gun Rally #16",desp:"5-10 Sept. 2022 @ Chitralada Technology Institute",image:"https://ksrc.suphakit.net/1662866532553/000001.jpg"}],certificates:[{name:"TESA Top Gun Rally #16",desp:"Participate in TESA Top Gun Rally #16",image:""}]},b={musicComposing:[{name:"Let me make a song for you.",desp:"This is a commission for composing a song like 'a theme song' or other type of song",price:"Start @ 1000 THB",example:[{name:"katsu.json - a luv.ly day",link:"https://youtu.be/QjwCHzxqfmE"}]}]},g=[{name:"E-Mail",link:"mailto:me@suphakit.net",bgColor:"#ff6f61",tColor:"whitesmoke"},{name:"Github",link:"https://github.com/dethMastery",bgColor:"#2e2f2f",tColor:"whitesmoke"},{name:"Discord",link:"https://did.000198.xyz/@298415109359796234",bgColor:"#7289da",tColor:"whitesmoke"},{name:"Facebook",link:"https://fb.com/detzz.in.th",bgColor:"#2f89fe",tColor:"whitesmoke"},{name:"Twitter",link:"https://twitter.com/georgeKdeterk",bgColor:"#1c9aee",tColor:"whitesmoke"}],x={"?":"🤍",year:2023,holder:"Suphakit P.",holderLink:"https://suphakit.net/"},s={image:d,name:f,sName:u,quote:h,about:p,commission:b,contact:g,copyright:x};function w(a){let e="",t;return a.forEach(o=>{a.class==""?t=`[${o.grade}] - ${o.school} [${o.duration}]`:t=`[${o.grade}] - ${o.class} ${o.school} [${o.duration}]`,e!=""?e=e+`<li class="mt-[.5rem]">${t}</li>`:e=`<li class="mt-[.5rem]">${t}</li>`}),e}function n(a){let e="";return a.forEach(t=>{e!=""?e=e+", "+t:e=t}),e}function m(a){let e="";return a.forEach(t=>{let o=`<div class="cardEvent">
  <img src="${t.image}" />
  <div class="cardBody">
    <h3>
      ${t.name}
    </h3>
    <p>
      ${t.desp}
    </p>
  </div>
</div>`;e!=""?e=e+o:e=o}),e}function v(a){let e="",t="";return a.forEach(o=>{o.example.forEach(l=>{let i=`<a href='${l.link}' class="underline duration-300 hover:opacity-80 hover:no-underline">${l.name}</a>`;t!=""?t=t+i:t=i});let r=`<div class="commissionCard">
  <h2 class="cardHeader mb-[.5rem]">
    <b>
      ${o.name}
    </b>
  </h2>
  <hr class="w-[20%] border-solid border-gray-400 mb-[.5rem]" />
  <div class="cardBody w-full flex flex-row">
    <p class="w-full">
      ${o.desp}
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
      ${o.price}
    </p>
    <p class="w-full text-right">
      <a href="mailto:me@suphakit.net" target="_blank" class="bg-[#ff6f61] text-[whitesmoke] p-[.5rem] contactLink">
        Contact Me >
      </a>
    </p>
  </div>
</div>`;e!=""?e=e+r:e=r}),e}function y(a){let e="";return a.forEach(t=>{let o=`<a href="${t.link}" target="_blank" class="block w-full text-center rounded-[1rem] p-[1rem] text-[${t.tColor}]" style="background-color: ${t.bgColor};">${t.name}</a>`;e!=""?e=e+o:e=o}),console.log(e),e}let c=`<nav class="w-full text-[whitesmoke] text-xl flex flex-row mb-[2rem]">
  <a href="#home" class="block w-full py-[1rem] bg-[#0f4c81] duration-300 hover:opacity-80">Home</a>
  <a href="#about" class="block w-full py-[1rem] bg-[#0f4c81] duration-300 hover:opacity-80">About</a>
  <a href="#commission" class="block w-full py-[1rem] bg-[#0f4c81] duration-300 hover:opacity-80">Commission</a>
  <a href="#contact" class="block w-full py-[1rem] bg-[#0f4c81] duration-300 hover:opacity-80">Contact</a>
</nav>`,k=`<div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
  <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
    <img src="${s.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
    <h1 class="shortName text-3xl my-[1rem]">
      <b>${s.sName}</b>
    </h1>
    <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
      ${s.quote}
    </p>
    <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
      <a href="#about" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-bl-[1rem] hover:opacity-80">About</a>
      <a href="#commission" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] hover:opacity-80">Commission</a>
      <a href="#contact" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] hover:opacity-80">Contact</a>
    </div>
  </div>
  <footer class="w-full p-[1rem] absolute bottom-0 bg-black/[.6] text-[whitesmoke]">
    Made w/ ${s.copyright["?"]} by ${s.copyright.holder}<br />
    &copy; ${s.copyright.year} <a href="${s.copyright.holderLink}" class="hover:underline">${s.copyright.holder}</a> All Right Reserved.
  </footer>
</div>`,$=`<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="about">
  <div class="aboutContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        About me
      </u>
    </h1>

    ${c}

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      <div class="basic text-[18px]">
        <h2 class="text-2xl">
          <b>
            Basic Information
          </b>
        </h2>

        <hr class="border-solid border-gray-400 w-[10%]">
        
        <p class="pt-[1rem]">
          Name: ${s.name}
        </p>

        <p class="pt-[1rem]">
          Age: ${new Date().getFullYear()-parseInt(s.about.bYear)}
        </p>

        <br>

        <div class="educationalProfile">
          <h3 class="pt-[1rem] text-xl">
            <b>
              Educational Profile
            </b>
          </h3>
          <hr class="border-solid border-gray-400 w-[8%]">
          <ul class="list-disc ml-[2rem] mt-[1rem]">
            ${w(s.about.eduProfile)}
          </ul>
        </div>

        <br>

        <div class="skills">
          <h3 class="pt-[1rem] text-xl">
            <b>
              Skills
            </b>
          </h3>
          <hr class="border-solid border-gray-400 w-[3%]">
          <div class="programming ml-[1rem] mt-[.5rem]">
            <h4 class="text-l pt-[.5rem]">
              <b>
                Programming: 
              </b>
            </h4>
            <p class="ml-[1rem]">
              ${n(s.about.skills.programming)}
            </p>
          </div>
          <div class="musicComposing ml-[1rem] mt-[.5rem]">
            <h4 class="text-l pt-[.5rem]">
              <b>
                Music Composing: 
              </b>
            </h4>
            <p class="ml-[1rem]">
              ${n(s.about.skills.musicComposing)}
            </p>
          </div>
        </div>

        <br>

        <div class="events">
          <h3 class="pt-[1rem] text-xl">
            <b>
              Joined events
            </b>
          </h3>
          <hr class="border-solid border-gray-400 w-[5%]">
          <div class="w-full h-auto flex flex-col flex-wrap mt-[1rem] justify-center md:flex-row">
            ${m(s.about.events)}
          </div>
        </div>

        <br>

        <div class="certificates">
          <h3 class="pt-[1rem] text-xl">
            <b>
              Certificates
            </b>
          </h3>
          <hr class="border-solid border-gray-400 w-[5%]">
          <div class="w-full h-auto flex flex-col flex-wrap mt-[1rem] justify-center md:flex-row">
            ${m(s.about.certificates)}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,C=`<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="commission">
  <div class="commissionContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        Commission
      </u>
    </h1>

    ${c}

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      <h2 class="text-2xl">
        <b>
          Music Production
        </b>
      </h2>
      <hr class="w-[15%] border-solid border-gray-400 mb-[.5rem]">
      <br>
      <div class="flex flex-col w-full h-auto">
        ${v(s.commission.musicComposing)}
      </div>
    </div>
  </div>
</div>`,S=`<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="contact">
  <div class="commissionContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        Contact
      </u>
    </h1>

    ${c}

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      If you want to ask me somethings or just wanna make a friend, using these link below this :D
    
      <div class="w-full grid grid-cols-2 mt-[1rem] justify-center gap-[.5rem]">
        ${y(s.contact)}
      </div>
    </div>
  </div>
</div>`;document.querySelector("#app").innerHTML=`
  <main class="w-[400vw] flex flex-row">
    ${k}
    ${$}
    ${C}
    ${S}
  </main>
`;
