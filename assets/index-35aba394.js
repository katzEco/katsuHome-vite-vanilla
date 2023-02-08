(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const p="https://avatars.githubusercontent.com/u/25049577?v=4",g="Suphakit Pinyoworapot",b="Suphakit P.",x="Just a Computer Engineering Student w/ some music composing skill. :3",y={bYear:2002,eduProfile:[{grade:"Kintergarden - Grade 6",class:"",school:"Darasamutr Sriracha School",duration:"2005 - 2014"},{grade:"Grade 7-9",class:"MEP",school:"Sriracha School",duration:"2014 - 2018"},{grade:"Grade 10",class:"Sci-Math",school:"Piboonbumpen Demonstration School",duration:"2018 - 2019"},{grade:"Grade 11-12",class:"Sci-Math",school:"Darasamutr Sriracha School",duration:"2019 - April 2021"},{grade:"Bachelor's degree",class:"Computer Engineering",school:"University of Phayao",duration:"May 2021 - Present"}],skills:{programming:["HTML5","CSS3","Bootstrap","Tailwind.css","PHP","Javascript","TypeScript","React.js","Vue.js","Nuxt.js","Express.js"],musicComposing:["Producing","Vocaling","Mastering","Composing","Arranging"]},events:[{name:"TESA Top Gun Rally #16",desp:"5-10 Sept. 2022 @ Chitralada Technology Institute",image:"https://ksrc.suphakit.net/1662866532553/000001.jpg"}],certificates:[{name:"TESA Top Gun Rally #16",desp:"Participate in TESA Top Gun Rally #16",image:""}]},v={musicComposing:[{name:"Let me make a song for you.",desp:"This is a commission for composing a song like 'a theme song' or other type of song",price:"Start @ 1000 THB",example:[{name:"katsu.json - a luv.ly day",link:"https://youtu.be/QjwCHzxqfmE"}]}]},w=[{name:"E-Mail",link:"mailto:me@suphakit.net",bgColor:"#ff6f61",tColor:"whitesmoke"},{name:"Github",link:"https://github.com/dethMastery",bgColor:"#2e2f2f",tColor:"whitesmoke"},{name:"Discord",link:"https://did.000198.xyz/@298415109359796234",bgColor:"#7289da",tColor:"whitesmoke"},{name:"Facebook",link:"https://fb.com/detzz.in.th",bgColor:"#2f89fe",tColor:"whitesmoke"},{name:"Twitter",link:"https://twitter.com/georgeKdeterk",bgColor:"#1c9aee",tColor:"whitesmoke"}],k={"?":"🤍",year:2023,holder:"Suphakit P.",holderLink:"https://suphakit.net/"},r={image:p,name:g,sName:b,quote:x,about:y,commission:v,contact:w,copyright:k};function $(t){let e="",i;return t.forEach(a=>{t.class==""?i=`[${a.grade}] - ${a.school} [${a.duration}]`:i=`[${a.grade}] - ${a.class} ${a.school} [${a.duration}]`,e!=""?e=e+`<li class="mb-[.5rem]">${i}</li>`:e=`<li class="mb-[.5rem]">${i}</li>`}),e}function m(t){let e="";return t.forEach(i=>{e!=""?e=e+", "+i:e=i}),e}let u="w-[100%] flex flex-col md:flex-row",C="w-[100%] mb-[5rem]",c="text-2xl mb-[1rem] underline",d="text-xl mb-[1rem] underline";function f(){let t="block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80";return{nav:`<nav class="flex w-full text-[whitesmoke] text-[10px] text-center flex-row md:flex-wrap md:text-[18px]">
      <a href="/home" class="${t}">Home</a>
      <a href="/about" class="${t}">About</a>
      <a href="/commission" class="${t}">Commission</a>
      <a href="/contact" class="${t}">Contact</a>
    </nav>`,footer:`<footer class="w-full p-[1rem] fixed bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${r.copyright["?"]} by ${r.copyright.holder}<br />
      &copy; ${r.copyright.year} <a href="${r.copyright.holderLink}" class="hover:underline">${r.copyright.holder}</a> All Right Reserved.
    </footer>`}}function S(t){let e="";return t=="home"?e=`<main class="${u}">
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
    </main>`:t=="about"?e=`<main class="${C}">
      <div class="container w-[80%] mx-auto">
        <div class="header my-[5rem] w-full justify-center text-center text-[whitesmoke]">
          <h1 class="text-3xl mb-[1rem]">
            about()
          </h1>
          <h3 class="text-[20px]">
            just a information about me :D
          </h3>
        </div>
        <div class="content p-[2rem] bg-[whitesmoke] w-full rounded-[1rem]">
          <div class="bInfo mb-[2rem]">
            <h2 class="${c}">
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
            <h2 class="${c}">
              Educational Profile
            </h2>
            ${$(r.about.eduProfile.reverse())}
          </div>
          <div class="skill mb-[2rem]">
            <h2 class="${c}">
              Skills
            </h2>
            <h3 class="${d}">
              Programming
            </h3>
            ${m(r.about.skills.programming)}
            <br><br>
            <h3 class="${d}">
              Music Composing
            </h3>
            ${m(r.about.skills.musicComposing)}
          </div>
          <div class="joinedEvent">
            
          </div>
        </div>
      </div>
    </main>`:t=="commission"||t=="contact"||t=="donation"?e="":e=`<main class="${u}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center text-[whitesmoke]">
        <h1 class="w-full text-5xl mb-[2rem]">
          404: Page not Found
        </h1>
        <a href="/" class="text-[18px] underline hover:no-underline hover:opacity-60">&lt; Back to Homepage</a>
      </div>
    </main>`,e}function P(t){return`
    ${f().nav}

    ${S(t)}
    
    ${f().footer}
  `}let l=window.location.href.split("/");l.pop();l=l.join("/");let h=window.location.href.replace(l+"/","");console.log(h);document.querySelector("#app").innerHTML=`
  ${P(h)}
`;
