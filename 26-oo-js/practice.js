class Character {
  constructor(){
  this.element = document.createElement('img')
  this.speed = 15
  this.movement;
  this.characterAssets = 'assets/character'
  this.element.src = `${this.characterAssets}/static.gif`
  this.element.style.position = 'absolute'
  this.element.style.left = '0px'
  this.element.style.top = '0px'
  this.element.style.width = "50px"
  document.body.appendChild(this.element)
}

  stop(){
        clearInterval(this.movement)
        this.element.src = `${this.characterAssets}/static.gif`
      }
  walkEast(){
          this.stop()
          this.movement = setInterval(() => {
              let currentPosition = parseInt(this.element.style.left)
              this.element.style.left = currentPosition + 1 + 'px'
          }, this.speed)
          this.element.src = `${this.characterAssets}/walkright.gif`
        }
}
