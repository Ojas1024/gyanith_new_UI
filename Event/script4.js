// script.js

document.addEventListener("DOMContentLoaded", function () {
  const eventsContainer = document.getElementById("eventsContainer");

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("bg-gray-800", "rounded-xl", "overflow-hidden", "hover:shadow-lg", "transition-shadow");

    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.name}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-3">${event.name}</h3>
        <p class="text-gray-400 mb-4">${event.shortDescription}</p>
        <div class="space-y-2 mb-6">
          <div class="flex items-center text-gray-300">
            <i class="fas fa-calendar text-blue-500 w-5 h-5 mr-2"></i> ${event.date}
          </div>
          <div class="flex items-center text-gray-300">
            <i class="fas fa-clock text-blue-500 w-5 h-5 mr-2"></i> ${event.time}
          </div>
          <div class="flex items-center text-gray-300">
            <i class="fas fa-map-marker-alt text-blue-500 w-5 h-5 mr-2"></i> ${event.venue}
          </div>
        </div>
        <a href="event/${event.id}" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Learn More
        </a>
      </div>
    `;

    eventsContainer.appendChild(eventCard);
  });
});
