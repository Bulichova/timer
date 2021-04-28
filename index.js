import './timer.js'
import Clock from './timer.js'
const body = document.querySelector('body')
console.log(body)
const header = document.createElement('header')
console.log(header)
const h2 = document.createElement('h2')
header.append(h2)
h2.textContent = 'timer'
console.log(h2)
const main = document.createElement('main')
const footer = document.createElement('footer')
body.prepend(header, main, footer)
console.log(body)
const p = document.createElement('p')
p.textContent = `Все права защищены`
footer.appendChild(p)
// console.log(new Clock(new Date()))
const myClock = new Clock(new Date())
console.log(myClock)

// Создание часов

myClock.startClock()

let clockFace = ` <div class="clock">
<div>
<p id="hours">0</p>
<p>hours</p>
</div>
<div>
<p id="minutes">0</p>
<p>minutes</p>
</div>
<div>
<p id="seconds">0</p>
<p>seconds</p>
</div>
</div>`
main.insertAdjacentHTML('afterbegin', clockFace)
const hourP = document.getElementById('hours')
const minutesP = document.getElementById('minutes')
const secondsP = document.getElementById('seconds')
setInterval(() => {
  const timer = new Date()
  hourP.textContent = timer.getHours()
  minutesP.textContent = timer.getMinutes()
  secondsP.textContent = timer.getSeconds()
}, 1000)
