import data from '../data.json'

function eduProfile(inp) {
  let temp = ''
  let log
  inp.forEach(iinp => {
    if (inp.class == '') {
      log = `[${iinp.grade}] - ${iinp.school} [${iinp.duration}]`
    } else {
      log = `[${iinp.grade}] - ${iinp.class} ${iinp.school} [${iinp.duration}]`
    }

    if (temp != '') {
      temp = temp + `<li class="mt-[.5rem]">${log}</li>`
    } else {
      temp = `<li class="mt-[.5rem]">${log}</li>`
    }
  });

  return temp;
} 

function skillEach(inp) {
  let temp = ''
  
  inp.forEach(iinp => {
    if (temp != '') {
      temp = temp + ', ' + iinp
    } else {
      temp = iinp
    }
  });

  return temp;
}

function eventEach(inp) {
  
}

module.exports = {
  data,
  eduProfile,
  skillEach,
  eventEach
}