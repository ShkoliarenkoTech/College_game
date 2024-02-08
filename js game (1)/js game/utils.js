const logsDiv = document.querySelector('#logs')
export const random = (num) => Math.ceil(Math.random() * num)
export const countBtnClicks = (count, element) => {
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

export const generateLog = (firstPerson, secondPerson) => {
  const hpLeft = firstPerson.hp.current + '/' + firstPerson.hp.total
  const damage = firstPerson.hp.total - firstPerson.hp.current

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