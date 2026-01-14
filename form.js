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
        let videoForm = document.querySelector('#uploadVideo');
        videoForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid;
            let title = document.querySelector('#title');
            let Category = document.querySelector('#category');
            let uploadVideo = document.querySelector('#uploadVideoFile');
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
                showError(uploadVideo, 'Please Select File');
            } else {
                showError(uploadVideo, '');
            }
        })
        uploadVideo.addEventListener('change', ()=>{
            console.log(uploadVideo.name);
        })