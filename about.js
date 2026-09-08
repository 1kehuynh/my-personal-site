
const birthday = new Date("2009-04-20");

function updateAge() {
    const today = new Date();
    let timeElapsed = today.getTime() - birthday.getTime();
    //1000 millisecs in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
    //Each level strips the above level away through the mod operator, then divides by the number of millisecs in each unit to find the answer.
    let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
    let millisecs = Math.floor(timeElapsed % (1000));
    document.getElementById("age").innerText = `Age: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${millisecs} milliseconds`;
}

updateAge();
setInterval(updateAge, 1);