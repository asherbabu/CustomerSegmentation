// File selection by clicking the upload button
const fileInput = document.getElementById('file');
const footer = document.querySelector('.footer p');

fileInput.addEventListener('change', function() {
    const fileName = fileInput.files[0] ? fileInput.files[0].name : "No file selected";
    footer.textContent = fileName;
});

// Drag and drop functionality
const container = document.querySelector('.container');

// Highlight the container on drag over
container.addEventListener('dragover', function(event) {
    event.preventDefault();
    container.classList.add('drag-over');
});

// Remove highlight when drag leaves
container.addEventListener('dragleave', function() {
    container.classList.remove('drag-over');
});

// Handle file drop
container.addEventListener('drop', function(event) {
    event.preventDefault();
    container.classList.remove('drag-over');
    
    if (event.dataTransfer.files.length) {
        fileInput.files = event.dataTransfer.files;
        const droppedFileName = fileInput.files[0].name;
        footer.textContent = droppedFileName;
    }
});
