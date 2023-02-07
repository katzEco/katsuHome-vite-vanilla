import '../css/tailwind.css'
import '../../style.css'
import data from '../data.json'
// import { eduProfile, skillEach, eventEach, commissionEach, contactEach } from '../js/eachingFunction'

export function frame() {
  let navClass = `block w-full basis-1/2 py-[1rem] bg-[#0f4c81] md:basis-1/4 duration-300 hover:opacity-80`

  let essential = {
    nav: `<nav class="flex w-full text-[whitesmoke] text-[10px] flex-row md:flex-wrap text-center">
      <a href="/home" class="${navClass}">Home</a>
      <a href="/about" class="${navClass}">About</a>
      <a href="/commission" class="${navClass}">Commission</a>
      <a href="/contact" class="${navClass}">Contact</a>
    </nav>`,
    footer: `<footer class="w-full p-[1rem] absolute bottom-0 bg-black/[.6] text-[whitesmoke] text-center">
      Made w/ ${data.copyright['?']} by ${data.copyright.holder}<br />
      &copy; ${data.copyright.year} <a href="${data.copyright.holderLink}" class="hover:underline">${data.copyright.holder}</a> All Right Reserved.
    </footer>`
  }

  return essential
}

let flexMain = `w-[100%] flex flex-col md:flex-row`
let blockMain = `w-[100%]`

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
    rtn = ``
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