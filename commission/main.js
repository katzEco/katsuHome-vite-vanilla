import '../src/css/tailwind.css'
import '../style.css'
import { frame, page } from '../src/js/compo'

function pageFrame(inp) {
  let xConst = `
    ${frame().nav}

    ${page(inp)}
    
    ${frame().footer}
  `

  return xConst
}

let bURL = window.location.href.split('/')
bURL.pop()
bURL = bURL.join('/')
let pLocation = 'commission'
console.log(pLocation);

document.querySelector('#app').innerHTML = `
  ${pageFrame(pLocation)}
`