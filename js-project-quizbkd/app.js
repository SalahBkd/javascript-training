const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    let score = 0;
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });


    scrollTo(0,0);
    let temp = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${temp}%`; 
        if(temp === score) {
            clearInterval(timer);
        } else {
            temp++;
        }

    }, 10);

    result.classList.remove('d-none');
})
