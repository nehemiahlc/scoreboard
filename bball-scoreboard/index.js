let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

let homeCount = 0;
let guestCount = 0;

console.log(scoreEl)
function add1Home(){
    homeCount += 1;
    console.log(homeCount)
    homeScoreEl.textContent = homeCount;
}

function add2Home() {
    homeCount += 2;
    homeScoreEl.textContent = homeCount;
}

function add3Home() {
    homeCount += 3;
    homeScoreEl.textContent = homeCount;
}

function add1Guest() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function add2Guest() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function add3Guest() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}