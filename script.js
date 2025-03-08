const todo = document.getElementById('todo');
const list = document.getElementById('list');
const btn = document.getElementById('btn');
const err = document.getElementById('err');

function addTodo() {
    if (todo.value === "") {
        err.innerText = "Please enter a todo!";
        err.style.color = "red";
    } else {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = "Delete";
        const div = document.createElement('div');
        li.innerText = todo.value;
        div.appendChild(li);
        div.appendChild(button);
        list.appendChild(div);
        li.addEventListener('click', () => {
            li.classList.toggle("finish");
        });
        button.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
        todo.value = "";
        err.innerText = "";
    }
}

btn.addEventListener('click', () => {
    addTodo();
});

todo.addEventListener('keypress', (e) => {
    if (e.code == "Enter") {
        addTodo();
    }
});