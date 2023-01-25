import './style.css'
import data from './src/data.json'

document.querySelector('#app').innerHTML = `
  <main>
    <div class="w-[100%] h-screen flex flex-col justify-center text-center items-center">
      <div class="card w-[22rem] bg-[#f5f5f5] rounded-[1rem] justify-center text-center items-center">
        <img src="" alt="Profile image" class="w-[250px] h-[250px] mt-[-8rem] mb-[2rem] ml-auto mr-auto p-[.5rem] rounded-[50%] border-[5px] border-solid border-[#ff6f61]" />
        <h1 class="shortName text-3xl"></h1>
      </div>
    </div>
  </main>
`

console.log(data);

document.querySelector("img[alt='Profile image']").src = data.image
document.querySelector('.shortName').innerHTML = data.sName