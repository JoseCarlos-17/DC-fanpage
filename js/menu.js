let menuList = document.querySelector('.menu-list');

let menuArray = [
  { name: 'Heróis', link: '../html/herois.html' },
  { name: 'Vilões', link: '../html/viloes.html' },
  { name: 'Menu', link: '../index.html' },
  { name: 'Galeria', link: '../html/galeria.html' }
]

const loadMenu = () => {
  return menuList.innerHTML = menuArray.map(item => {
    return (
      `<li><a href="${item.link}">${item.name}</a></li>`
    )
  }).join('')
}

loadMenu();