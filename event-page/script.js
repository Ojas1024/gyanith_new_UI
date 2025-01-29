// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get event ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
  
    // Check if event exists
    const event = events[eventId];
    if (!event) {
      document.body.innerHTML = `
        <div class='text-center py-12'>
          <h2 class='text-2xl font-bold mb-4'>Event not found</h2>
          <a href='index.html' class='text-blue-400 hover:text-blue-300'>Return to Events</a>
        </div>
      `;
      return;
    }
  
    // Populate event details
    document.getElementById("eventName").innerText = event.name;
    document.getElementById("eventDescription").innerText = event.description;
    document.getElementById("eventImage").src = event.image;
    document.getElementById("eventDate").innerText = new Date(event.date).toLocaleDateString();
    document.getElementById("eventTime").innerText = event.time;
    document.getElementById("eventVenue").innerText = event.venue;
  
    // Populate coordinators
    const coordinatorsContainer = document.getElementById("eventCoordinators");
    event.coordinators.forEach(coordinator => {
      const coordinatorDiv = document.createElement("div");
      coordinatorDiv.classList.add("space-y-2");
      coordinatorDiv.innerHTML = `
        <p class='font-semibold'>${coordinator.name}</p>
        <div class='text-sm space-y-1'>
          <div class='flex items-center space-x-2 text-gray-300'>
            <i class='fas fa-phone text-blue-500'></i> <span>${coordinator.phone}</span>
          </div>
          <div class='flex items-center space-x-2 text-gray-300'>
            <i class='fas fa-envelope text-blue-500'></i> <span>${coordinator.email}</span>
          </div>
        </div>
      `;
      coordinatorsContainer.appendChild(coordinatorDiv);
    });
  });
  