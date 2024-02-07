const $btn = document.getElementById('btn-kick')
const btn_super = document.getElementById('btn-super-kick')

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elProgressbar: document.querySelector('#progressbar-character'),
  elhp: document.querySelector('#health-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elProgressbar: document.querySelector('#progressbar-enemy'),
  elhp: document.querySelector('#health-enemy'),
}

$btn.addEventListener('click', function () {
  console.log('Kick')
  changeHP(random(20), character)
  changeHP(random(20), enemy)
})

btn_super.addEventListener('click', function () {
  console.log('Super Kick')
  changeHP(47, enemy)
})

function init() {
  console.log('Start Game!')
}

const renderHP = (person) => {
  renderHPLife(person)
  renderProgressbarHP(person)
}

function renderHPLife(person) {
  person.elhp.innerText = person.damageHP + '/' + person.defaultHP
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '&'
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0
    alert('Бедный ' + person.name + ' проиграл бой!')
    $btn.dusabled = true
  } else {
    person.damageHP -= count
  }
  renderHP(person)
}

function random(num) {
  return Math.ceil(Math.random() * num)
}

init()