const todo = document.getElementById('todo');
const content = document.getElementById('todos');
const btn = document.getElementById('btn');
const err = document.getElementById('err');

function addTodo() {
    if (todo.value === "") {
        err.innerText = "Please enter a todo!";
        err.style.color = "red";
    } else {
        const p = document.createElement('p');
        const btndelete = document.createElement('button');
        const deleteIcon = document.createElement('i');
        deleteIcon.className = "fa-solid fa-trash";
        btndelete.appendChild(deleteIcon);
        const btnedit = document.createElement('button');
        const editIcon = document.createElement('i');
        editIcon.className = "fa-solid fa-pen-to-square";
        btnedit.appendChild(editIcon);
        const div = document.createElement('div');
        p.innerText = todo.value;
        div.appendChild(p);
        div.appendChild(btndelete);
        div.appendChild(btnedit);
        div.classList.add("do");
        content.appendChild(div);
        p.addEventListener('click', () => {
            p.classList.toggle("finish");
        });
        btndelete.addEventListener('click', (e) => {
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
    if (e.code === "Enter") {
        addTodo();
    }
});