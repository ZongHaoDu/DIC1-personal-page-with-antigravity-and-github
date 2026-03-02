function updateTime() {
    const now = new Date();
    
    // Update Clock (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update Date (e.g., Tuesday, February 24, 2026)
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    document.getElementById('date').textContent = formattedDate;
}

// Initialize and set interval
updateTime();
setInterval(updateTime, 1000);
