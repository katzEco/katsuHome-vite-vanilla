import './src/css/tailwind.css'
import './style.css'
import { frame, page } from './src/js/compo'

function pageFrame(inp) {
  let xConst = `
    ${frame().nav}

    <main class="w-[100vw] flex flex-col md:flex-row md:w-[400vw]">
      ${page(inp)}
    </main>
    
    ${frame().footer}
  `

  return xConst
}

document.querySelector('#app').innerHTML = `
  ${pageFrame('home')}
`