// script.js

document.addEventListener("DOMContentLoaded", function () {
    /** COUNTDOWN TIMER **/
    const eventDate = new Date("2025-03-15T09:00:00").getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
  
      if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<p class='text-xl text-center text-red-500'>Event has started!</p>";
        clearInterval(countdownInterval);
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = `
        <div><div class="text-5xl font-extrabold text-blue-400">${days}</div><div class="text-sm uppercase text-gray-500">Days</div></div>
        <div><div class="text-5xl font-extrabold text-blue-400">${hours}</div><div class="text-sm uppercase text-gray-500">Hours</div></div>
        <div><div class="text-5xl font-extrabold text-blue-400">${minutes}</div><div class="text-sm uppercase text-gray-500">Minutes</div></div>
        <div><div class="text-5xl font-extrabold text-blue-400">${seconds}</div><div class="text-sm uppercase text-gray-500">Seconds</div></div>
      `;
    }
  
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  
    /** RENDER SCHEDULE **/
    function renderSchedule(day, elementId) {
      const container = document.getElementById(elementId);
      schedule[day].forEach(item => {
        container.innerHTML += `
          <div class="flex items-start space-x-4 p-3 bg-gray-700 rounded">
            <i class="fas fa-clock text-blue-500 mt-1"></i>
            <div>
              <p class="font-semibold">${item.event}</p>
              <p class="text-sm text-gray-300">${item.time}</p>
              <p class="text-sm text-gray-300 flex items-center mt-1">
                <i class="fas fa-map-marker-alt text-blue-500 mr-1"></i> ${item.venue}
              </p>
            </div>
          </div>
        `;
      });
    }
  
    renderSchedule("day1", "day1Schedule");
    renderSchedule("day2", "day2Schedule");
  });
  