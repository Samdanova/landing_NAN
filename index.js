function formatTime(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}  ${minutes.toString().padStart(2, '0')} ${seconds.toString().padStart(2, '0')} `;
  }

  // Функция для обратного отсчета
  function countdown() {
    const targetDate = new Date('2024-12-20T23:59:59'); 
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(interval); 
      document.getElementById('counttime').textContent = 'Время истекло!';
    } else {
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('counttime').textContent = formatTime(hours, minutes, seconds);
    }
  }

const interval = setInterval(countdown, 1000);

//меню
let menuBtn = document.querySelector('.header__button_adapt');
let menu = document.querySelector('.header__links');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('header__links_active');
})