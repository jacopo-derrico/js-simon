/* 
sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/
let countdownHTML = document.getElementById('countdown');

// current time and day
const currentDate = new Date();
const currentDay = currentDate.getDate();
// tomorrows time and date
const tomorrow = new Date();
const tomorrowDay = tomorrow.setDate(currentDay +1);
const tomorrowHours = tomorrow.setHours(9);
const tomorrowMinutes = tomorrow.setMinutes(30);
const tomorrowSeconds = tomorrow.setSeconds(0);
// time difference
let difference = Math.floor((tomorrow - currentDate) / 1000)

const counter = setInterval(countdown, 1000)

console.log(currentDate)
console.log(tomorrow)
console.log(difference)

function countdown() {
    if (difference === 0) {
        clearInterval(counter)
        difference = 0
        countdownHTML.innerHTML = "È l'ora della lezione!"
    } else {
        difference--
    }

    const hours = Math.floor(difference / (60 * 60))
    const minutes = Math.floor(difference % (60 * 60) / 60 )
    const seconds = Math.floor(difference % 60)

    countdownHTML.innerHTML = `Mancano ${hours}:${minutes}:${seconds} alla lezione`
};