let abilitiesList = document.querySelector('.habilidades');
let abilitiesArray = [
  { name: 'Super força' },
  { name: 'Invulnerabilidade/Durabilidade' },
  { name: 'Super Resistência' },
  { name: 'Resistência à Fogo' },
  { name: 'Resistência Mágica' },
  { name: 'Super Velocidade' },
  { name: 'Super-Agilidade' },
  { name: 'Super Velocidade' },
  { name: 'Reflexos sobre humano' },
  { name: 'Sentidos Aprimorados' },
  { name: 'Sabedoria Divina' },
  { name: 'Empatia' },
  { name: 'Linguística Animal' },
  { name: 'Omni-linguista' },
  { name: 'Olho de Atena' },
  { name: 'Capacidade de voo' },
  { name: 'Cura Acelerada' },
  { name: 'Imortalidade' },
  { name: 'Imunidade Psíquica' },
  { name: 'Projeção Vocal' },
  { name: 'Super sopro' },
  { name: 'Projeção Astral' },
  { name: 'Teletransporte' },
  { name: 'Telepatia' },
  { name: 'Controle mental da eletricidade em seu corpo' },
  { name: 'Sedução' },
  { name: 'Analise Tática e Perícia em Combate Armado e Desarmado' }
]

const loadAbilitiesList = () => {
  return abilitiesList.innerHTML = abilitiesArray.map(ability => {
    return (
      `<li>${ability.name}</li>`
    )
  }).join('')
}
loadAbilitiesList();