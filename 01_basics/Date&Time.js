// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 12, 23)
// let myCreatedDate = new Date(2023, 0, 3, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // print the time in ms from 1 jan 1970 00:00:00
// console.log(myCreatedDate.getTime()); // give the time in ms from 1 jan 1970 00:00:00 to a specified date (eg."01-14-2023")
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time `)

let x = newDate.toLocaleString('hi-IN', {
    weekday: 'long',     // Sunday
    year: 'numeric',     // 2025
    month: 'long',       // May
    day: 'numeric',      // 25
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})

console.log(x)
