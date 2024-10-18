// Basic interactive calendar
function createCalendar() {
    const calendar = document.getElementById("calendar");
    const date = new Date();
    calendar.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        const day = document.createElement("div");
        day.innerText = i;
        day.className = "calendar-day";
        day.onclick = function() {
            alert(`You selected date: ${i}`);
        };
        calendar.appendChild(day);
    }
}

createCalendar();

// Drag and Drop functionality
const dropZone = document.getElementById('drop-zone');
const fileList = document.getElementById('file-list');

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    for (const file of files) {
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
});
