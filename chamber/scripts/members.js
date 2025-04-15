// app.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleViewBtn = document.getElementById('toggleViewBtn');
    const membersContainer = document.getElementById('members-container');
  
    let isGridView = true; // Default view is grid
    let membersData = [];
  
    // Fetch member data from the JSON file
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        membersData = data.members;
        renderMembers(); // Render members when data is loaded
      });
  
    // Toggle between grid and list views
    toggleViewBtn.addEventListener('click', () => {
      isGridView = !isGridView;
      renderMembers();
    });
  
    // Render the members based on the current view
    function renderMembers() {
      membersContainer.innerHTML = ''; // Clear the container
  
      membersData.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add(isGridView ? 'member-card' : 'member-list-item');
  
        memberElement.innerHTML = `
          <img src="images/${member.image}" alt="${member.name} logo">
          <div class="info">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level}</p>
          </div>
        `;
  
        membersContainer.appendChild(memberElement);
      });
    }
  });

  const membersContainer = document.getElementById("members-container");
  const toggleViewBtn = document.getElementById("toggleViewBtn");
  const dataUrl = "data/members.json";
  
  async function fetchMembers() {
    try {
      const response = await fetch(dataUrl);
      const data = await response.json();
      displayMembers(data.members);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  }
  
  function displayMembers(members) {
    membersContainer.innerHTML = ""; // clear any existing content
  
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
  
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
      `;
  
      membersContainer.appendChild(card);
    });
  }
  
  toggleViewBtn.addEventListener("click", () => {
    membersContainer.classList.toggle("list-view");
    membersContainer.classList.toggle("grid-view");
  });
  
  // Run it on load
  fetchMembers();
  
