document.addEventListener("DOMContentLoaded", function () {
  const second = document.querySelector(".second");
  const minute = document.querySelector(".minute");
  const hour = document.querySelector(".hour");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();

    if (seconds < 10){ 
      second.textContent = '0' + seconds;
    } else {
      second.textContent = seconds;
    }

    const mins = now.getMinutes();
    if (mins < 10 ){
      minute.textContent = '0' + mins;
    } else {
      minute.textContent = mins;
    }
    
    const hours = now.getHours();
    hour.textContent = hours;
    
  }

  setInterval(setDate, 1000);

  setDate();

});
