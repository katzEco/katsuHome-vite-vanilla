import './src/css/tailwind.css'
import './style.css'
import data from './src/data.json'
import {eduProfile, skillEach, eventEach, commissionEach, contactEach} from './src/js/eachingFunction'

let home = `<div class="relative w-screen h-screen flex flex-col justify-center text-center items-center" id="home">
  <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
    <img src="${data.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
    <h1 class="shortName text-3xl my-[1rem]">
      <b>${data.sName}</b>
    </h1>
    <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
      ${data.quote}
    </p>
    <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center text-center mx-auto">
      <a href="#about" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-bl-[1rem] hover:opacity-80">About</a>
      <a href="#commission" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] hover:opacity-80">Commission</a>
      <a href="#contact" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] hover:opacity-80">Contact</a>
    </div>
  </div>
  <footer class="w-full p-[1rem] absolute bottom-0 bg-black/[.6] text-[whitesmoke]">
    Made w/ ${data.copyright['?']} by ${data.copyright.holder}<br />
    &copy; ${data.copyright.year} <a href="${data.copyright.holderLink}" class="hover:underline">${data.copyright.holder}</a> All Right Reserved.
  </footer>
</div>`

let about = `<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="about">
  <div class="aboutContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        About me
      </u>
    </h1>

    <nav class="w-full text-[whitesmoke] text-xl flex flex-row mb-[2rem]">
      <a href="#home" class="block w-full duration-300 hover:opacity-80">&lt; Home</a>
      <a href="#commission" class="block w-full duration-300 hover:opacity-80">Commission &gt;</a>
    </nav>

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      <div class="basic text-[18px]">
        <h2 class="text-2xl">
          <b>
            Basic Information
          </b>
        </h2>

        <hr class="border-solid border-gray-400 w-[10%]">
        
        <p class="pt-[1rem]">
          Name: ${data.name}
        </p>

        <p class="pt-[1rem]">
          Age: ${new Date().getFullYear() - parseInt(data.about.bYear)}
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
            ${eduProfile(data.about.eduProfile)}
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
              ${skillEach(data.about.skills.programming)}
            </p>
          </div>
          <div class="musicComposing ml-[1rem] mt-[.5rem]">
            <h4 class="text-l pt-[.5rem]">
              <b>
                Music Composing: 
              </b>
            </h4>
            <p class="ml-[1rem]">
              ${skillEach(data.about.skills.musicComposing)}
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
            ${eventEach(data.about.events)}
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
            ${eventEach(data.about.certificates)}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

let commission = `<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="commission">
  <div class="commissionContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        Commission
      </u>
    </h1>

    <nav class="w-full text-[whitesmoke] text-xl flex flex-row mb-[2rem]">
      <a href="#about" class="block w-full duration-300 hover:opacity-80">&lt; About</a>
      <a href="#home" class="block w-full duration-300 hover:opacity-80">^ Home ^</a>
      <a href="#contact" class="block w-full duration-300 hover:opacity-80">Contact &gt;</a>
    </nav>

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      <h2 class="text-2xl">
        <b>
          Music Production
        </b>
      </h2>
      <hr class="w-[15%] border-solid border-gray-400 mb-[.5rem]">
      <br>
      <div class="flex flex-col w-full h-auto">
        ${commissionEach(data.commission.musicComposing)}
      </div>
    </div>
  </div>
</div>`

let contact = `<div class="w-screen h-screen flex flex-col justify-center text-center items-center" id="contact">
  <div class="commissionContainer w-[95%] h-screen align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[5rem] text-[#f5f5f5]">
      <u>
        Contact
      </u>
    </h1>

    <nav class="w-full text-[whitesmoke] text-xl flex flex-row mb-[2rem]">
      <a href="#commission" class="block w-full duration-300 hover:opacity-80">&lt; Commission</a>
      <a href="#home" class="block w-full duration-300 hover:opacity-80">Home &gt;</a>
    </nav>

    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem] mb-[2rem]">
      If you want to ask me somethings or just wanna make a friend, using these link below this :D
    
      <div class="w-full grid grid-cols-2 mt-[1rem] justify-center gap-[.5rem]">
        ${contactEach(data.contact)}
      </div>
    </div>
  </div>
</div>`

document.querySelector('#app').innerHTML = `
  <main class="w-[400vw] flex flex-row">
    ${home}
    ${about}
    ${commission}
    ${contact}
  </main>
`