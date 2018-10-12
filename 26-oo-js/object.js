const character = {
  element: document.createElement('img'),
  speed: 15,
  movement: null,
  characterAssets: 'assets/character',

  walkEast: function(){
    character.stop()
    character.movement = setInterval(function(){
        let currentPosition = parseInt(character.element.style.left)
        character.element.style.left = currentPosition + 1 + 'px'
    }, character.speed)
    character.element.src = `${characterAssets}/walkright.gif`
  },

  walkWest: function(){
        character.stop()
        character.movement = setInterval(function(){
            let currentPosition = parseInt(character.element.style.left)
            character.element.style.left = currentPosition - 1 + 'px'
        }, character.speed)
        character.src = `${characterAssets}/walkleft.gif`
    },

  walkNorth: function (){
              character.stop()
              character.movement = setInterval(function(){
                  let currentPosition = parseInt(character.element.style.top)
                  character.element.style.top = currentPosition - 1 + 'px'
              }, character.speed)
              character.element.src = `${characterAssets}/walkup.gif`
            },

  walkSouth: function (){
              character.stop()
              character.movement = setInterval(function(){
                  let currentPosition = parseInt(character.element.style.top)
                  character.element.style.top = currentPosition + 1 + 'px'
              }, character.speed)
              character.element.src = `${characterAssets}/walkdown.gif`
            },
  stop: function(){
      clearInterval(character.movement)
      character.element.src = `${characterAssets}/static.gif`
    }
  }

let characterAssets = 'assets/character'
character.element.src = `${characterAssets}/static.gif`
character.element.style.position = 'absolute'
character.element.style.left = '0px'
character.element.style.top = '0px'
character.element.style.width = "50px"
document.body.appendChild(character.element)
