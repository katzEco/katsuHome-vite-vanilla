import './style.css'
import data from './src/data.json'
import {eduProfile, skillEach, eventEach} from './src/js/eachingFunction'

let home = `<div class="w-[100%] h-screen flex flex-col justify-center text-center items-center" id="home">
  <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
    <img src="${data.image}" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[1rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
    <h1 class="shortName text-3xl my-[1rem]">
      <b>${data.sName}</b>
    </h1>
    <p class="quote text-gray-500 px-[1rem] my-[1.5rem]">
      ${data.quote}
    </p>
    <div class="buttonContainer w-full mt-[1rem] flex flex-row justify-center">
      <a href="#about" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-bl-[1rem] hover:opacity-80">About</a>
      <a href="#commission" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] hover:opacity-80">Commission</a>
      <a href="#contact" class="w-full bg-[#ff6f61] text-[#f5f5f5] py-[1rem] rounded-br-[1rem] hover:opacity-80">Contact</a>
    </div>
  </div>
</div>`

let about = `<div class="w-[100%] h-screen flex flex-col justify-center text-center items-center" id="about">
  <div class="aboutContainer w-[95%] h-[95vh] align-bottom md:w-[95%] lg:w-[90%]">
    <h1 class="text-3xl my-[1rem] text-[#f5f5f5]">
      <u>
        About me
      </u>
    </h1>
    <div class="content w-full md:w-[90%] lg:w-[80%] h-auto bg-[whitesmoke] text-[#2e2f2f] text-left rounded-[1rem] mx-auto p-[2rem]">
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
      </div>
    </div>
  </div>      
</div>`

document.querySelector('#app').innerHTML = `
  <main>
    ${home}
    ${about}
  </main>
`