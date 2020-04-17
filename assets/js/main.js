// // get element
// var canvas = document.querySelector('canvas')
// // set width & height of canvas
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// var c = canvas.getContext('2d')

// var mouse = {
//   x: undefined,
//   y: undefined,
// }

// var maxRadius = 30
// // var minRadius = 2;

// var colorArray = ['#120D1E', '#721825', '#7E9DA4', '#D8D0C5', '#1B1414']

// window.addEventListener('mousemove', function (e) {
//   mouse.x = e.x
//   mouse.y = e.y
// })

// window.addEventListener('resize', function () {
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight

//   init()
// })

// // Constructor function for Circle objects
// function Circle(x, y, dx, dy, radius) {
//   this.x = x
//   this.y = y
//   this.dx = dx
//   this.dy = dy
//   this.radius = radius
//   this.minRadius = radius
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
//   this.shadow = colorArray[Math.floor(Math.random() * colorArray.length)]

//   this.draw = function () {
//     // create circle
//     c.beginPath()
//     c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
//     c.shadowBlur = 10
//     c.shadowColor = this.shadow
//     c.fillStyle = this.color
//     c.fill()
//   }

//   this.update = function () {
//     // condition for set width
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx
//     }
//     // condition for set height
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy
//     }

//     // change point for x & y
//     this.x += this.dx
//     this.y += this.dy

//     // interactivty
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1
//       }
//     } else if (this.radius > this.minRadius) {
//       this.radius -= 1
//     }

//     this.draw()
//   }
// }
// // empty array for add new circle
// var circleArray = []

// function init() {
//   circleArray = []
//   // for loop to create circle
//   for (var i = 0; i < 200; i++) {
//     var radius = Math.random() * 3 + 1
//     var x = Math.random() * (innerWidth - radius * 2) + radius
//     var dx = Math.random() * 0.5
//     var y = Math.random() * (innerHeight - radius * 2) + radius
//     var dy = Math.random() * 0.5
//     circleArray.push(new Circle(x, y, dx, dy, radius))
//   }
// }

// // Animate function
// function animate() {
//   // default function in js
//   requestAnimationFrame(animate)

//   // canvas clearRect Method
//   c.clearRect(0, 0, innerWidth, innerHeight)

//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update()
//   }
// }
// animate()
// init()
