import './src/css/tailwind.css'
import './style.css'
import { frame, page } from './src/js/compo'

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
let pLocation = window.location.href.replace(bURL + '/', '')
console.log(pLocation);

let pageLocation = ''

if (pLocation == 'home' || pLocation == '') {
  pageLocation = 'home'
} else if (pLocation == 'commission') {
  pageLocation = 'commission'
} else if (pLocation == 'contact') {
  pageLocation = 'contact'
} else if (pLocation == 'donation') {
  pageLocation = 'donation'
} else {
  pageLocation = ''
}

document.querySelector('#app').innerHTML = `
  ${pageFrame(pageLocation)}
`