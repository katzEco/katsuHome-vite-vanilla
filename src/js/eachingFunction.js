export function eduProfile(inp) {
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

export function skillEach(inp) {
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

export function eventEach(inp) {
  let temp = ''

  inp.forEach(iinp => {
    let cord = `<div class="cardEvent">
  <img src="${iinp.image}" />
  <div class="cardBody">
    <h3>
      ${iinp.name}
    </h3>
    <p>
      ${iinp.desp}
    </p>
  </div>
</div>`

    if (temp != '') {
      temp = temp + cord
    } else {
      temp = cord
    }
  })

  return temp;
}