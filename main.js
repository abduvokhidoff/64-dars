let body =document.querySelector('body')
let div = document.querySelector('.container')
let timehours = document.querySelector('.timehours')
let timeminute = document.querySelector('.timeminute')
let timesecond = document.querySelector('.timeseconds')

setInterval(() => {
    let data = new Date
    timehours.innerHTML = data.getHours();
    timeminute.innerHTML = data.getMinutes();
    timesecond.innerHTML = data.getSeconds()
}, 1000) 