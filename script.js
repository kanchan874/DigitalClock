function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const ampmIcon = document.getElementById('ampm-icon');
    const clock = document.getElementById('clock');
  
    const isAM = hours < 12;
    const ampm = isAM ? 'AM' : 'PM';
    ampmIcon.innerText = isAM ? '☀️' : '🌙';
  
    hours = hours % 12 || 12; // 12-hour format
    hours = String(hours).padStart(2, '0');
  
    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  