
//alert("Disclaimer !\n1.Click fastly (Plant Bomb) and (Plant Rocket) for good effect\n2.But dont click so continually\n3.The game has no meaning so i tried to add meaning little bit\n4.Try to plant Rocket than blow it up with Bomb\n5.If you dont blow it up than it will be on screen so you can see how many rockets you missed\n6.If matrix end to soon refresh the page !\n\n ENJOY!")
var socket = io();
var side = 20;
let body = {}
let weath = "autumn"
function setup() {
    background('grey')
    createCanvas(27 * side, 27 * side)
} 


socket.on('weather', (data) => {
    weath = data
})

function drawMatrix(matrix) {
body = document.body
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 0) {
                fill("grey")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill("purple")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill("black")
                ellipse(x * side, y * side, side + 5, side + 5)
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                    fill("cyan")
                    rect(x * side, y * side, side, side)
                }

        }

    }
    
}

setInterval(() => {
    socket.on('sm', drawMatrix)
}, 500)
function bomb_plant(){
    socket.emit("bomb")
}
function rocket_plant(){
    socket.emit("rocket")
}
function light_plant(){
    body.style.animation = "spark"
    body.style.animationDuration = "0.5s"
    body.style.animationIterationCount = "infinite"
    setTimeout(function () {
        body.style.animation = "none"
    }, 500)
    socket.emit("light")
}


setInterval(function () {
    if (weath == "winter") {
        console.log(weath)
        body.style.background = "white"
        w.innerText = "Weather: " + weath
        info.innerText = "It's " + weath+", grass won't grow and grassEater won't eat"
        setTimeout(function () { weath = "spring"},7000)
        
    }
    else if (weath == "spring") {
        console.log(weath)
        body.style.background = "#36d12e"
        w.innerText = "Weather: " + weath
        info.innerText = "It's " + weath + ", everything is fine on spring"
        setTimeout(function () { weath = "summer" }, 7000)
        
    }
    else if (weath == "summer") {
        console.log(weath)
        body.style.background = "yellow"
        w.innerText = "Weather: " + weath
        info.innerText = "It's " + weath + ", you can't plant light on summer"
        setTimeout(function () { weath = "autumn" }, 7000)
        
    }
    else if (weath == "autumn") {
        console.log(weath)
        body.style.background = "orange"
        w.innerText = "Weather: " + weath
        info.innerText = "It's " + weath + ", i just hate autumn, (do whatever you want!)"
        setTimeout(function () { weath = "winter" }, 7000)
        
    }
}, 100)