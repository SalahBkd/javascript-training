const clock = document.querySelector('.clock');

setInterval(() => {
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const seconds = now.getSeconds();
    const dateFormat = dateFns.format(now, "dddd Do YYYY");

    clock.innerHTML = `<h1> ${hours}:${minutes}:${seconds}</h1><br>`;
    clock.innerHTML += `<h6> ${dateFormat}</h6>`
}, 1000);


