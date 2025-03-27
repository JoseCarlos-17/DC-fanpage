let villainList = document.querySelector('.viloes-img');
let villainArray = [
  {
    name: 'Arlequina',
    profile_photo: '../imagens/viloes-perfil/arlequinapeq.jpg',
    link: '../viloes/Arlequina.html'
  },
  {
    name: 'Coringa',
    profile_photo: '../imagens/viloes-perfil/coringapeq.jpg',
    link: '../viloes/Coringa.html'
  },
  {
    name: 'Hera Venenosa',
    profile_photo: '../imagens/viloes-perfil/hera-venenosapeq.jpg',
    link: '../viloes/Hera Venenosa.html'
  },
  {
    name: 'Charada',
    profile_photo: '../imagens/viloes-perfil/charadapeq.jpg',
    link: '../viloes/Charada.html'
  },
  {
    name: 'Pinguim',
    profile_photo: '../imagens/viloes-perfil/pinguimpeq.jpg',
    link: '../viloes/Pinguim.html'
  },
  {
    name: 'Mulher-Gato',
    profile_photo: '../imagens/viloes-perfil/mulher-gatopeq.jpg',
    link: '../viloes/Mulher-Gato.html'
  },
  {
    name: 'Lex Luthor',
    profile_photo: '../imagens/viloes-perfil/lex-luthorpeq.jpg',
    link: '../viloes/Lex Luthor.html'
  },
]

const loadVillainList = () => {
  return villainList.innerHTML = villainArray.map(villain => {
    return (
      `
        <li>
          <figure>
            <a href="${villain.link}">
              <img
                src="${villain.profile_photo}"
                class="vilao">
            </a>
            <figcaption class="legenda">${villain.name}</figcaption>
          </figure>
        </li>
      `
    )
  }).join('')
}
loadVillainList()

