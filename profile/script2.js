// script.js

document.addEventListener("DOMContentLoaded", function () {
    /** POPULATE USER DATA **/
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userCollege").textContent = user.college;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userCollegeDetail").textContent = user.college;
    document.getElementById("userDepartment").textContent = user.department;
    document.getElementById("userYear").textContent = `${user.year}rd Year`;
  
    /** POPULATE REGISTERED EVENTS **/
    const eventsContainer = document.getElementById("registeredEventsList");
    
    user.registeredEvents.forEach((eventId) => {
      const event = registeredEvents.find((e) => e.id === eventId);
      if (event) {
        const eventCard = document.createElement("div");
        eventCard.classList.add("flex", "items-center", "space-x-4", "bg-gray-700", "rounded-lg", "overflow-hidden");
  
        eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.name}" class="w-24 h-24 object-cover">
          <div class="p-4">
            <h3 class="font-semibold">${event.name}</h3>
            <p class="text-gray-400 text-sm">${new Date(event.date).toLocaleDateString()}</p>
          </div>
        `;
  
        eventsContainer.appendChild(eventCard);
      }
    });
  
    /** EDIT PROFILE BUTTON FUNCTIONALITY **/
    document.getElementById("editProfileBtn").addEventListener("click", function () {
      const newName = prompt("Enter new name:", user.name);
      if (newName) {
        user.name = newName;
        document.getElementById("userName").textContent = newName;
      }
    });
  });
  