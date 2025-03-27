let menuList = document.querySelector('.menu-list');
let menuArray = [
  { name: 'Heróis', link: '../html/Herois DC.html' },
  { name: 'Vilões', link: '../html/Viloes DC.html' },
  { name: 'Menu', link: '../index.html' },
  { name: 'Galeria', link: '../html/Galeria DC.html' }
]

const loadMenu = () => {
  return menuList.innerHTML = menuArray.map(item => {
    return (
      `<li><a href="${item.link}">${item.name}</a></li>`
    )
  }).join('')
}

loadMenu();