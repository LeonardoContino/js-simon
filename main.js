// console.log("ok");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//prendo l'anno corrente e la data del natale

const xmasTime = new Date("December 25, 2022").getTime();

console.log(xmasTime);

const coundown = setInterval(() => {
  const now = new Date().getTime();
  const distance = xmasTime - now;
  const number = 0;

  days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));

  hours.innerText = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
