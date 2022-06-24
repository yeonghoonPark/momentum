'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];

const TODOS_KEY = 'item';

const saveToDos = ()=>{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(itme => itme.id !== parseInt(li.id));
    saveToDos();
};

const paintToDo = (parameter) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    toDoList.appendChild(li);
    li.prepend(span);
    li.appendChild(button);

    li.id = parameter.id;
    span.innerText = parameter.text;
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    
};

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;

    toDoInput.value = '';

    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    toDos.push(newToDoObj);
    
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}

 