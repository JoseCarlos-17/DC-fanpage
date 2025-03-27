let photosList = document.querySelector('.fotos-galeria');
let photosArray = [
  { link: '../galeria/herois1.jpg' },
  { link: '../galeria/herois2.jpg' },
  { link: '../galeria/herois3.jpg' },
  { link: '../galeria/herois4.jpg' },
  { link: '../galeria/herois5.jpg' },
  { link: '../galeria/viloes1.jpg' },
  { link: '../galeria/viloes2.jpg' },
  { link: '../galeria/universodc.jpg' },
]

const loadPhotosArray = () => {
  photosList.innerHTML = photosArray.map(photo => {
    return(
      `
        <li>
          <figure class="foto-galeria">
            <img src="${photo.link}">
          </figure>
        </li>
      `
    )
  }).join('')
}

loadPhotosArray()