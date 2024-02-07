const $btn = document.getElementById('btn-kick')
const btn_super = document.getElementById('btn-super-kick')

function renderHP() {
  this.renderHPLife()
  this.renderProgressbarHP()
}

function changeHP(count) {
  if (this.damageHP < count) {
    this.damageHP = 0
    alert('Бедный ' + this.name + ' проиграл бой!')
    $btn.disabled = true
    btn_super.disabled = true
  } else {
    this.damageHP -= count
  }
  this.renderHP()
}

function renderHPLife() {
  this.elhp.innerText = this.damageHP + '/' + this.defaultHP
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + '&'
}

function random(num) {
  return Math.ceil(Math.random() * num)
}

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elProgressbar: document.querySelector('#progressbar-character'),
  elhp: document.querySelector('#health-character'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elProgressbar: document.querySelector('#progressbar-enemy'),
  elhp: document.querySelector('#health-enemy'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressbarHP,
}

$btn.addEventListener('click', function () {
  console.log('Kick')
  character.changeHP(random(20))
  enemy.changeHP(random(20))
})

btn_super.addEventListener('click', function () {
  console.log('Super Kick')
  enemy.changeHP(47)
})

function init() {
  console.log('Start Game!')
}