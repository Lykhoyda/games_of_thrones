import {random} from 'lodash'
import arrynLogo from 'assets/logos/arryn.png'
import baratheonLogo from 'assets/logos/baratheon.png'
import cleganeLogo from 'assets/logos/clegane.png'
import greyjoyLogo from 'assets/logos/greyjoy.png'
import lannisterLogo from 'assets/logos/lannister.png'
import mormontLogo from 'assets/logos/mormont.png'
import starkLogo from 'assets/logos/stark.png'
import targaryenLogo from 'assets/logos/targaryen.png'
import tyrell from 'assets/logos/tyrell.png'

const imagesCollection = [
  {name: 'Arryn', src: arrynLogo},
  {name: 'Baratheon', src: baratheonLogo},
  {name: 'Clegane', src: cleganeLogo},
  {name: 'Greyjoy', src: greyjoyLogo},
  {name: 'Lannister', src: lannisterLogo},
  {name: 'Mormont', src: mormontLogo},
  {name: 'Stark', src: starkLogo},
  {name: 'Targaryen', src: targaryenLogo},
  {name: 'Tyrell', src: tyrell},
]

function getHouseImage(houseName) {
  let imgSrc

  imagesCollection.forEach(imgData => {
    if (houseName.toLowerCase().includes(imgData.name.toLowerCase())) {
      imgSrc = imgData.src
    }
  })

  if (imgSrc) {
    return imgSrc
  } else {
    const randomNumber = random(0, imagesCollection.length - 1)
    return imagesCollection[randomNumber].src
  }
}

export {getHouseImage}
