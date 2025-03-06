const todo = document.getElementById('todo');
const list = document.getElementById('list');
const btn = document.getElementById('btn');
const err = document.getElementById('err');

btn.addEventListener('click', () => {
    if (todo.value === "") {
        err.innerText = "Please enter a todo!";
        err.style.color = "red";
    } else {
        const li = document.createElement('li');
        li.innerText = todo.value;
        list.appendChild(li);
        todo.value = "";
        err.innerText = "";
    }
})