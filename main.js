// const log = setTimeout(() => {
//     console.log('Hello, World!'); 
// }, 5000)

// const time = setInterval(() => {
//     console.log('Hello, World!');
//     console.log('Goodbye, World!');
// }, 1000)

// const timeOff =  setTimeout(() => {
//     clearInterval(time)
// }, 5000)


setInterval(() => {
    let data = new Date();
    let hours = document.querySelector('.hours');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');

    hours.innerHTML = data.getHours();
    minute.innerHTML = data.getMinutes(); 
    second.innerHTML = data.getSeconds();

    console.log(second);
}, 1000);
