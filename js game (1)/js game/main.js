const $btn = document.getElementById('btn-kick')
const btn_super = document.getElementById('btn-super-kick')
const logsDiv = document.querySelector('#logs')

var counter = 0

function renderHP() {
  this.renderHPLife()
  this.renderProgressbarHP()
}

function changeHP(count) {
    const log =
    this === enemy ? generateLog(this, character) : generateLog(this, enemy)
  console.log(log)


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

const random = (num) => Math.ceil(Math.random() * num)

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

const countBtnClicks = (count, element) => {
    const btnText = element.innerText
    console.log('Нажата кнопка: ', btnText)
    let clicks = 0
    return function () {
      clicks++
      count--
      if (count === 0) {
        alert('У этой кнопки закончились нажатия!')
        element.disabled = true
      }
      console.log(`Осталось нажатий: ${count} (кнопка "${btnText}")`)
      console.log(`Сделано нажатий: ${clicks} (кнопка "${btnText}")`)
    }
  }
  
  const btnCount = countBtnClicks(5, $btn)
  const btnSuperCount = countBtnClicks(3, btn_super)
  
  $btn.addEventListener('click', () => {
    btnCount()
    character.changeHP(random(20))
    enemy.changeHP(random(20))
  })
  
  btn_super.addEventListener('click', () => {
    btnSuperCount()
    enemy.changeHP(47)
  })
  
  const init = () => {
    console.log('Start Game!')
  }
  
  const generateLog = (firstPerson, secondPerson) => {
    const hpLeft = firstPerson.damageHP + '/' + firstPerson.defaultHP
    const damage = firstPerson.defaultHP - firstPerson.damageHP
    
    const logs = [
      `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${hpLeft}]`,
      `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${hpLeft}]`,
    ]
    const log = logs[random(logs.length) - 1]
    const p = document.createElement('p')
    p.innerText = log
    logsDiv.insertBefore(p, logsDiv.children[0])
    return log
  }
  init()