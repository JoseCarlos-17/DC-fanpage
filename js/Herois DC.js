let heroesList = document.querySelector('.herois-img');
let heroesArray = [
  {
    name: 'Superman',
    profile_photo: '../imagens/herois-perfil/supermanpeq.jpg',
    link: '../herois/Superman.html'
  },
  {
    name: 'Mulher-Maravilha',
    profile_photo: '../imagens/herois-perfil/mulher maravilhapeq.jpg',
    link: '../herois/Mulher-Maravilha.html'
  },
  {
    name: 'Batman',
    profile_photo: '../imagens/herois-perfil/batmanpeq.jpg',
    link: '../herois/Batman.html'
  },
  {
    name: 'Flash',
    profile_photo: '../imagens/herois-perfil/flashpeq.jpg',
    link: '../herois/Flash.html'
  },
  {
    name: 'Aquaman',
    profile_photo: '../imagens/herois-perfil/aquamanpeq.jpg',
    link: '../herois/Aquaman.html'
  }
]

const loadHeroesList = () => {
  return heroesList.innerHTML = heroesArray.map(hero => {
    return(
      `<li>
        <figure>
          <a href="${hero.link}">
            <img src="${hero.profile_photo}" class="heroi">
          </a> 
          <figcaption class="legenda">${hero.name}</figcaption>
        </figure>
      </li>`
    )
  }).join('');
}
loadHeroesList();