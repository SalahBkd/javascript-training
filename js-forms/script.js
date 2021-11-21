const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value;
    const pattern = /^[a-zA-Z]{6,12}$/

    if(pattern.test(username)) {
        feedback.innerHTML = `<p>Valid username</p>`;
    } else {
        feedback.innerHTML = `<p>Unvalid username</p>`;
    }
})


// RegX test
//const word = '@salahh131'; // must be lowercase and 6+ in length
const pattern = /^[a-z]{6,}$/

// const result = pattern.test(word);

// if(result) {
//     console.log('passed');
// } else {
//     console.log('failed');
// }

form.username.addEventListener('keyup', (e) => {
    if(pattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})
