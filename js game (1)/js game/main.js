import Pokemon from './pokemon.js'
import { countBtnClicks, random, generateLog } from './utils.js'

const $btn = document.getElementById('btn-kick')
const btn_super = document.getElementById('btn-super-kick')

const player1 = new Pokemon({
  name: 'Pikachu',
  type: 'electric',
  hp: 100,
  selectors: 'character',
})

const player2 = new Pokemon({
  name: 'Charmander',
  type: 'fire',
  hp: 100,
  selectors: 'enemy',
})

const btnCount = countBtnClicks(15, $btn)
const btnSuperCount = countBtnClicks(10, btn_super)

$btn.addEventListener('click', () => {
  btnCount()
  player1.changeHP(random(20), (count) => {
    console.log(generateLog(player1, player2, count))
  })
  player2.changeHP(random(20))
})

btn_super.addEventListener('click', () => {
  btnSuperCount()
  player2.changeHP(47)
})

const init = () => {
  console.log('Start Game!')
}

init()