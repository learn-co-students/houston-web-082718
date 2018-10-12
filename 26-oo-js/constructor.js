//constructor allows js to know were creating an object
// will use x = new Character
// new tells js that the function is meant to create an object
// all objects refer to prototype for functionality so it saves memory

function Character (){

this.element = document.createElement('img')
this.speed = 15,
this.movement = null,
this.characterAssets = 'assets/character',
this.element.src = `${this.characterAssets}/static.gif`
this.element.style.position = 'absolute'
this.element.style.left = '0px'
this.element.style.top = '0px'
this.element.style.width = "50px"
document.body.appendChild(this.element)
  }

  Character.prototype = {
    walkEast: function(){
      this.stop()
      this.movement = setInterval(() => {
          let currentPosition = parseInt(this.element.style.left)
          this.element.style.left = currentPosition + 1 + 'px'
      }, this.speed)
      this.element.src = `${this.characterAssets}/walkright.gif`
    },
    walkWest: function(){
          this.stop()
          this.movement = setInterval(() => {
              let currentPosition = parseInt(this.element.style.left)
              this.element.style.left = currentPosition - 1 + 'px'
          }, this.speed)
          this.src = `${this.characterAssets}/walkleft.gif`
      },
    walkNorth: function (){
                this.stop()
                this.movement = setInterval(() => {
                    let currentPosition = parseInt(this.element.style.top)
                    this.element.style.top = currentPosition - 1 + 'px'
                }, this.speed)
                this.element.src = `${this.characterAssets}/walkup.gif`
              },

    walkSouth: function (){
                this.stop()
                this.movement = setInterval(() => {
                    let currentPosition = parseInt(this.element.style.top)
                    this.element.style.top = currentPosition + 1 + 'px'
                }, this.speed)
                this.element.src = `${this.characterAssets}/walkdown.gif`
              },
    stop: function(){
        clearInterval(this.movement)
        this.element.src = `${this.characterAssets}/static.gif`
      }
  }
