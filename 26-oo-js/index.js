
class Character{

  constructor(){
    this.element = document.createElement('img')
    this.speed = 15
    this.movement = null
    this.assets = 'assets/character'
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'absolute'
    this.element.style.left = '0px'
    this.element.style.top = '0px'
    this.element.style.width = "50px"
    document.body.appendChild(this.element)
  }

  stop(){
      clearInterval(this.movement)
      this.element.src = `${this.assets}/static.gif`
  }

  walkEast(){
    console.log(this, "second")
      this.stop()
      this.movement = setInterval(() => {
        console.log(this, "third")
          let currentPosition = parseInt(this.element.style.left)
          this.element.style.left = currentPosition + 1 + 'px'
      }, this.speed)
      this.element.src = `${this.assets}/walkright.gif`
  }
}


//
// function Character (){
//   this.element = document.createElement('img')
//   this.speed = 15
//   this.movement = null
//   this.assets = 'assets/character'
//   this.element.src = `${this.assets}/static.gif`
//   this.element.style.position = 'absolute'
//   this.element.style.left = '0px'
//   this.element.style.top = '0px'
//   this.element.style.width = "50px"
//   document.body.appendChild(this.element)
//   console.log(this, "first")
// }
//
// Character.prototype = {
//   stop: function(){
//       clearInterval(this.movement)
//       this.element.src = `${this.assets}/static.gif`
//   },
//   walkEast: function(){
//     console.log(this, "second")
//       this.stop()
//       this.movement = setInterval(() => {
//         console.log(this, "third")
//           let currentPosition = parseInt(this.element.style.left)
//           this.element.style.left = currentPosition + 1 + 'px'
//       }, this.speed)
//       this.element.src = `${this.assets}/walkright.gif`
//   }
// }
//
//
