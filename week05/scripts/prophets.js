  // Declare a const variable named "url" that contains the URL string of the JSON resource provided.
  const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

  // Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
  const cards = document.querySelector('#cards');

  // Create an async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
  async function getProphetData() {
      try {
          // Fetch data from the provided URL
          const response = await fetch(url);
          
          // Convert the response to a JSON object
          const data = await response.json();
          
          // Log the data to the console in a table format to check the data structure
          console.table(data);

          // Call the function to display the prophets' data
          displayProphets(data.prophets);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  // Call the function getProphetData() in the main line of your .js code to test the fetch and response.
  getProphetData();

  // Define the "displayProphets" function to process and display the data.
  const displayProphets = (prophets) => {
      prophets.forEach((prophet) => {
          // Create a new section element for each prophet
          const card = document.createElement('section');
          
          // Create an h2 element for the prophet's full name
          const fullName = document.createElement('h2');
          fullName.textContent = `${prophet.name} ${prophet.lastname}`;

          // Create an img element for the prophet's portrait
          const portrait = document.createElement('img');
          portrait.setAttribute('src', prophet.imageurl);
          portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
          portrait.setAttribute('loading', 'lazy');
          portrait.setAttribute('width', '300');
          portrait.setAttribute('height', '400');

          const birthDate = document.createElement('p');
          birthDate.textContent = `Born: ${prophet.birthdate}`;
          
          const birthPlace = document.createElement('p');
          birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

          const order = document.createElement('p');
          order.textContent = `Order: ${prophet.order}`;

          // Append the h2, img, and additional information to the card
          card.appendChild(fullName);
          card.appendChild(portrait);
          card.appendChild(birthDate);
          card.appendChild(birthPlace);
          card.appendChild(order);

          // Append the card to the "cards" div
          cards.appendChild(card);
      });
  };
