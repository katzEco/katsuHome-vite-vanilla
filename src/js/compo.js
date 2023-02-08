import '../css/tailwind.css'
import '../../style.css'
import data from '../data.json'
import { eduProfile, skillEach, eventEach, commissionEach, contactEach } from '../js/eachingFunction'
import { flexMain, blockMain, subHeading, anotherHeading } from './class.config'

export function frame() {
  let navClass = `block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80`

  let essential = {
    nav: `<nav class="flex w-full text-[whitesmoke] text-[10px] text-center flex-row md:flex-wrap md:text-[18px]">
      <a href="/home" class="${navClass}">Home</a>
      <a href="/about" class="${navClass}">About</a>
      <a href="/commission" class="${navClass}">Commission</a>
      <a href="/contact" class="${navClass}">Contact</a>
    </nav>`,
    footer: `<footer class="w-full p-[1rem] fixed bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${data.copyright['?']} by ${data.copyright.holder}<br />
      &copy; ${data.copyright.year} <a href="${data.copyright.holderLink}" class="hover:underline">${data.copyright.holder}</a> All Right Reserved.
    </footer>`
  }

  return essential
}

export function page(inp) {
  let rtn = ''

  if (inp == 'home') {
    rtn = `<main class="${flexMain}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
        <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
          <img src="${data.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
          <h1 class="shortName text-3xl my-[1rem]">
            <b>${data.sName}</b>
          </h1>
          <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
            ${data.quote}
          </p>
          <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
            <a href="/donation" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] rounded-bl-[1rem] hover:opacity-80">Donate Me?</a>
          </div>
        </div>
      </div>
    </main>`
  } else if (inp == 'about') {
    rtn = `<main class="${blockMain}">
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
            <h2 class="${subHeading}">
              Basic Information
            </h2>
            <p class="pb-[.5rem] ml-[1rem] text-[15px]">
              Name : ${data.name}
            </p>
            <p class="pb-[.5rem] ml-[1rem] text-[15px]">
              Age : ${new Date().getFullYear() - parseInt(data.about.bYear)}
            </p>
          </div>
          <div class="eduProfile mb-[2rem]">
            <h2 class="${subHeading}">
              Educational Profile
            </h2>
            ${eduProfile(data.about.eduProfile.reverse())}
          </div>
          <div class="skill mb-[2rem]">
            <h2 class="${subHeading}">
              Skills
            </h2>
            <h3 class="${anotherHeading}">
              Programming
            </h3>
            ${skillEach(data.about.skills.programming)}
            <br><br>
            <h3 class="${anotherHeading}">
              Music Composing
            </h3>
            ${skillEach(data.about.skills.musicComposing)}
          </div>
          <div class="joinedEvent">
            
          </div>
        </div>
      </div>
    </main>`
  } else if (inp == 'commission') {
    rtn = ``
  } else if (inp == 'contact') {
    rtn = ``
  } else if (inp == 'donation') {
    rtn = ``
  } else {
    rtn = `<main class="${flexMain}">
      <div class="relative w-screen h-screen flex flex-col justify-center text-center items-center text-[whitesmoke]">
        <h1 class="w-full text-5xl mb-[2rem]">
          404: Page not Found
        </h1>
        <a href="/" class="text-[18px] underline hover:no-underline hover:opacity-60">&lt; Back to Homepage</a>
      </div>
    </main>`
  }

  return rtn
}