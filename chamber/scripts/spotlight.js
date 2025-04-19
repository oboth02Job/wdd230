const spotlightContainer = document.getElementById('spotlight-container');

async function getSpotlights() {
    try {
        const response = await fetch('data/members.json'); // adjust path if needed
        const data = await response.json();
        const members = data.members;

        // Filter members with Gold or Silver membership
        const qualified = members.filter(member =>
            member.membership_level === 'Gold' || member.membership_level === 'Silver'
        );

        // Shuffle and pick 2 or 3
        const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, 3);

        selected.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('company');

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading spotlight data:', error);
    }
}

getSpotlights();
