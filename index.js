let count = 0;
let x = document.getElementById("counter");
let y = document.getElementById("greeting");
// let variables are block scoped

let greeting = "Welcome back, ";
let userName = prompt("What's your name?");
let greetingText = greeting + userName;
y.innerText = greetingText;

let savedarray = [];

function save() {
    console.log("save");
    savedarray.push(10);
    savedarray.push(20);
    console.log(savedarray[0], savedarray[1]);
}

function increment() {
    console.log("increment");
    count++;
    x.innerText = count;
    console.log(count);
}

function reset() {
    console.log("reset");
    count = 0;
    x.innerText = count;
    console.log(count);
}

function decrement() {
    console.log("decrement");
    if (count > 0) {
        count--;
        x.innerText = count;
        console.log(count);
    }
}