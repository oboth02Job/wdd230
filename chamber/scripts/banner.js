function closeBanner() {
    document.getElementById('meet-banner').style.display = 'none';
    localStorage.setItem('bannerClosed', 'true');
}

function checkBannerDay() {
    const today = new Date().getDay(); // 0=Sun, 1=Mon, 2=Tue, 3=Wed...

    const closed = localStorage.getItem('bannerClosed');
    if (closed === 'true') {
        document.getElementById('meet-banner').style.display = 'none';
        return;
    }

    if (today >= 1 && today <= 3) {
        document.getElementById('meet-banner').style.display = 'block';
    } else {
        document.getElementById('meet-banner').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkBannerDay);

function closeBanner() {
    const banner = document.getElementById("meet-banner");
    if (banner) {
      banner.style.display = "none";
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    if (today >= 1 && today <= 3) { // Monday (1), Tuesday (2), Wednesday (3)
      const banner = document.createElement("div");
      banner.id = "meet-banner";
      banner.className = "banner";
      banner.innerHTML = `
        <p>📢 Join us for the Chamber Meet & Greet - Wednesday at 7:00 PM!</p>
        <span class="close-banner" onclick="closeBanner()">❌</span>
      `;
      document.body.prepend(banner); // Adds banner at the top of the page
    }
  });
  