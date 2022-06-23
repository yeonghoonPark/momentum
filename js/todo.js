'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
};

const paintToDo = (parameter) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    toDoList.appendChild(li);
    li.prepend(span);
    li.appendChild(button);

    span.innerText = parameter;
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
};

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;

    toDoInput.value = '';

    paintToDo(newToDo);

};

toDoForm.addEventListener('submit', handleToDoSubmit);