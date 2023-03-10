import '../css/tailwind.css'
import '../../style.css'

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
      temp = temp + `<li class="mb-[.5rem]">${log}</li>`
    } else {
      temp = `<li class="mb-[.5rem]">${log}</li>`
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

export function commissionEach(inp) {
  let temp = ''
  let anotherTemp = ''

  inp.forEach(iinp => {
    iinp.example.forEach(exp => {
      let linking = `<a href='${exp.link}' class="underline duration-300 hover:opacity-80 hover:no-underline">${exp.name}</a>`

      if (anotherTemp != '') {
        anotherTemp = anotherTemp + linking
      } else {
        anotherTemp = linking
      }
    });

    let carding = `<div class="commissionCard">
  <h2 class="cardHeader mb-[.5rem]">
    <b>
      ${iinp.name}
    </b>
  </h2>
  <hr class="w-[20%] border-solid border-gray-400 mb-[.5rem]" />
  <div class="cardBody w-full flex flex-row">
    <p class="w-full">
      ${iinp.desp}
    </p>

    <p class="w-full text-right">
      <span>
        <b>
          Example :
        </b>
      </span>
      <br />
      ${anotherTemp}
    </p>

  </div>
  <div class="cardBody w-full flex flex-row mt-[2rem]">
    <p class="w-full">
      ${iinp.price}
    </p>
    <p class="w-full text-right">
      <a href="mailto:me@suphakit.net" target="_blank" class="bg-[#ff6f61] text-[whitesmoke] p-[.5rem] contactLink">
        Contact Me >
      </a>
    </p>
  </div>
</div>`

    if (temp != '') {
      temp = temp + carding
    } else {
      temp = carding
    }
  })

  return temp;
}

export function contactEach(inp) {
  let temp = ''
  
  inp.forEach (iinp => {
    let button = `<a href="${iinp.link}" target="_blank" class="block w-full text-center rounded-[1rem] mb-[1rem] p-[1rem] text-[${iinp.tColor}] hover:opacity-80" style="background-color: ${iinp.bgColor};">${iinp.name}</a>`

    if (temp != '') {
      temp = temp + button
    } else {
      temp = button
    }
  });

  return temp;
}

export function donationEach(inp) {
  let temp = ''

  inp.forEach(iinp => {
    let donation = `<p class="mb-[1rem]">
      <span class="text-[18px]">${iinp.name} : ${iinp.address}</span><br />
      <span class="opacity-60 text-[15px]">${iinp.revName}</span>
    </p>`

    if (temp != '') {
      temp = temp + donation
    } else {
      temp = donation
    }
  });

  return temp
}