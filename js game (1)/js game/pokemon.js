class Selectors {
  constructor(name) {
    this.elhp = document.getElementById(`health-${name}`)
    this.elProgressbar = document.querySelector(`#progressbar-${name}`)
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors }) {
    super(selectors)

    this.name = name
    this.hp = {
      current: hp,
      total: hp,
    }
    this.type = type

    this.renderHP()
  }

  renderHP = () => {
    this.renderHPLife()
    this.renderProgressbarHP()
  }

  renderHPLife = () => {
    this.elhp.innerText = this.hp.current + '/' + this.hp.total
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.hp.current + '%'
  }

  changeHP = (count, cb) => {
    this.hp.current -= count

    if (this.hp.current <= 0) {
      this.hp.current = 0
    }

    if (this.hp.current < count) {
      this.hp.current = 0
      alert('Бедный ' + this.name + ' проиграл бой!')
    }
    this.renderHP()
    cb && cb()
  }
}

export default Pokemon