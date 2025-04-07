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
            <p><strong>Description:</strong> ${member.description}</p>
          </div>
        `;
  
        membersContainer.appendChild(memberElement);
      });
    }
  });
  