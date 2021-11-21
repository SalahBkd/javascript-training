const form = document.querySelector('.add');
const ul = document.querySelector('.list');
const deleteIcon = document.querySelector('.delete');
const search = document.querySelector('.search');
const list = document.querySelector('.todos');

const generateTodoTemplate = todo => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
    ul.innerHTML += html;
}

const filtreTodos = (todos, input) => {
    todos.filter((todo) => { return !todo.textContent.toLowerCase().includes(input); })
    .forEach(todo => { todo.classList.add('filtred'); });

    todos.filter((todo) => {  return todo.textContent.toLowerCase().includes(input); })
    .forEach(todo => { todo.classList.remove('filtred'); });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = form.add.value.trim();

    if(todo.length) {
        generateTodoTemplate(todo);
    }

    form.add.value = '';
});

ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } 
});

search.addEventListener('keyup', (e) => {
    const input = e.target.value.trim().toLowerCase();
    const todos = Array.from(list.children);
    filtreTodos(todos, input);


});






