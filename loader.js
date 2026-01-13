let percent = document.getElementById('circle');
let circleBx = document.querySelector('.profile-bx');

function progressBar(value){
    circleBx.style.setProperty(
        'background',
        `conic-gradient(rgb(123, 74, 238) ${percent.textContent}, #ddd 0%)`
    );
}

function counter() {
    let i = 0;

    const interval = setInterval(() => {
        percent.textContent = `${i}%`;
        progressBar(i);
        if (i >= 100) {
            clearInterval(interval);
        }
        i++;
    }, 30);
}

document.addEventListener('DOMContentLoaded', counter);