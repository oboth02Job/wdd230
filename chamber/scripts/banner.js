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
