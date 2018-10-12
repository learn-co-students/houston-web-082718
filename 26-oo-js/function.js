let characterElement = document.createElement('img')
let speed = 15
let movement;
let characterAssets = 'assets/character'
characterElement.src = `${characterAssets}/static.gif`
characterElement.style.position = 'absolute'
characterElement.style.left = '0px'
characterElement.style.top = '0px'
characterElement.style.width = "50px"
document.body.appendChild(characterElement)

function walkEast(){
    stop()
    movement = setInterval(function(){
        let currentPosition = parseInt(characterElement.style.left)
        characterElement.style.left = currentPosition + 1 + 'px'
    }, speed)
    characterElement.src = `${characterAssets}/walkright.gif`
}

function walkWest(){
    stop()
    movement = setInterval(function(){
        let currentPosition = parseInt(characterElement.style.left)
        characterElement.style.left = currentPosition - 1 + 'px'
    }, speed)
    characterElement.src = `${characterAssets}/walkleft.gif`
}

function walkNorth(){
    stop()
    movement = setInterval(function(){
        let currentPosition = parseInt(characterElement.style.top)
        characterElement.style.top = currentPosition - 1 + 'px'
    }, speed)
    characterElement.src = `${characterAssets}/walkup.gif`
}

function walkSouth(){
    stop()
    movement = setInterval(function(){
        let currentPosition = parseInt(characterElement.style.top)
        characterElement.style.top = currentPosition + 1 + 'px'
    }, speed)
    characterElement.src = `${characterAssets}/walkdown.gif`
}

function stop(){
    clearInterval(movement)
    characterElement.src = `${characterAssets}/static.gif`
}
