fetch('data/links.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('weeks-container');

    data.weeks.forEach(weekObj => {
      // Create a section for each week
      const weekSection = document.createElement('section');
      const weekTitle = document.createElement('h3');
      weekTitle.textContent = weekObj.week;
      weekSection.appendChild(weekTitle);

      // Create a list of links for that week
      const ul = document.createElement('ul');
      weekObj.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        li.appendChild(a);
        ul.appendChild(li);
      });

      weekSection.appendChild(ul);
      container.appendChild(weekSection);
    });
  })
  .catch(error => {
    console.error('Error loading links:', error);
  });

  const baseURL = "https://github.com/oboth02Job/wdd230"
