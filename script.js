function currenttime(){
    const time = new Date();
    const hours = time.getHours().toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timestring;
}

setInterval(currenttime, 1000)