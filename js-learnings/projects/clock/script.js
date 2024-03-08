const date = document.querySelector(".date");
const time = document.querySelector(".time");

setInterval(function () {
  const date_time = new Date();
  date.innerHTML = date_time.toDateString();
  time.innerHTML = date_time.toLocaleTimeString();
}, 1000);
