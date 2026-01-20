function showError(el, message) {
    let errorSpan = el.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains('error')) {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        el.insertAdjacentElement('afterend', errorSpan);
    }
    errorSpan.textContent = message;
}

let videoForm = document.querySelector('#form');
let uploadVideo = document.querySelector('#uploadVideoFile');

videoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let title = document.querySelector('#title');
    let category = document.querySelector('#category');
    let file = uploadVideo.files[0];

    let isValid = true;

    // Title validation
    if (title.value.trim() === '') {
        showError(title, 'Please enter title');
        isValid = false;
    } else {
        showError(title, '');
    }

    // Category validation
    if (category.value === '') {
        showError(category, 'Please select category');
        isValid = false;
    } else {
        showError(category, '');
    }

    // File validation
    if (!file) {
        showError(uploadVideo, 'Please choose file');
        isValid = false;
    } else if (!validateFile(file)) {
        isValid = false;
    }

    if (isValid) {
    let data = {
        fileName: title.value,
        genre: category.value,
        fileNameOnly: file.name,
        fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    };

    // If you want to store multiple submissions as an array
    let storedData = JSON.parse(localStorage.getItem('Data')) || [];
    storedData.push(data);

    // Save to localStorage as a string
    localStorage.setItem('Data', JSON.stringify(storedData));

    console.log('Saved to localStorage:', storedData);
}

});

uploadVideo.addEventListener("change", function () {
    if (this.files[0]) {
        validateFile(this.files[0]);
    }
});

function validateFile(file) {
    const acceptedFileTypes = ['mp4', 'mkv'];
    const ext = file.name.split('.').pop().toLowerCase();
    const maxSize = 100 * 1024 * 1024;

    if (!acceptedFileTypes.includes(ext)) {
        showError(uploadVideo, `Only ${acceptedFileTypes.join(', ')} files are supported`);
        return false;
    }

    if (file.size > maxSize) {
        showError(uploadVideo, 'File size must be less than 100MB');
        return false;
    }

    showError(uploadVideo, '');
    return true;
}