const thisTime = new Date()
console.log(thisTime)
const day = thisTime.getDay()
console.log(day) // показывает 3 (среда)
const month = thisTime.getMonth()
console.log(month)
const date = thisTime.getDate()
console.log(date)
const year = thisTime.getFullYear()
console.log(year)
const hour = thisTime.getHours()
console.log(hour)
const minute = thisTime.getMinutes()
console.log(minute)
const second = thisTime.getSeconds()
console.log(second)
const x = thisTime.toDateString()
console.log(x)
const y = thisTime.toLocaleDateString()
console.log(y)

//  CLOCK ( часы )

export default class Clock {
  constructor(date) {
    this.weekDays = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ]
    this.months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]
    this.currentTime = date
    this.weekDay = this.weekDays[date.getDay()]
    this.month = this.months[date.getMonth()]
    this.date = date.getDate()
    this.year = date.getFullYear()
    this.hour = date.getHours()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()
  }
  startClock(){
      setInterval(()=>{
          this.second = new Date().getSeconds()
          return this.second
      },1000)
  }
}
