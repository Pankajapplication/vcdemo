function showError(El, Error) {
    if (El.nextElementSibling) {
        El.nextElementSibling.textContent = Error;
    } else {
        let errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        El.insertAdjacentElement('afterend', errorSpan);
        El.nextElementSibling.textContent = Error;
    }
}
let videoForm = document.querySelector('#form');
let uploadVideo = document.querySelector('#uploadVideoFile');
let isValid;
videoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let title = document.querySelector('#title');
    let Category = document.querySelector('#category');
    let uploadVideo = document.querySelector('#uploadVideoFile');
    let Data = {};

    if (title.value == '') {
        showError(title, 'Please Enter Title');
        isValid = false;
    } else {
        showError(title, '');
    } if (Category.value == '') {
        showError(Category, 'Please Select Category');
    } else {
        showError(Category, '');
    } if (uploadVideo.value == '') {
        showError(uploadVideo, 'Please Choose File');
    } else if (uploadVideo.value) {

    } else {
        validateFile(uploadVideo);
    }
    console.log(isValid);
    
    if(isValid){
        alert('valid');
    }
})

uploadVideo.addEventListener("change", function (e) {
    validateFile(e.target.files[0]);
});

function validateFile(File) {
    if (!File) {
        showError(uploadVideo, 'Please Choose File');
        return;
    }

    const acceptedFileTypes = ['mp4', 'mkv'];
    const ext = File.name.split('.').pop().toLowerCase();
    const maxSize = 1 * 1024 * 1024;
    if (!acceptedFileTypes.includes(ext)) {
        showError(uploadVideo, `Only ${acceptedFileTypes.join(', ')} are supported`);
        isValid = false;
    } else if (File.size > maxSize) {
        showError(uploadVideo, 'File size must be less than 100MB');
        isValid = false;
    } else {
        showError(uploadVideo, '');
    }
}