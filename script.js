const todo = document.getElementById('todo');
const content = document.getElementById('todos');
const btn = document.getElementById('btn');
const err = document.getElementById('err');

const todos = JSON.parse(localStorage.getItem("todos")) ?? [];

function addTodo() {
    content.innerHTML = "";
    for (let ele of todos) {
        if (ele === "") {
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
            p.innerText = ele;
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
            btnedit.addEventListener('click', () => {
                let oldValue = p.innerText;
                let input = document.createElement('input');
                input.value = p.innerText;
                input.classList.add("todo-edit");
                div.replaceChild(input, p);
                input.addEventListener('blur', () => {
                    if (input.value.trim() === "") {
                        p.innerText = oldValue;
                    } else {
                        p.innerText = input.value;
                    }
                    div.replaceChild(p, input);
                });
            });
            ele = "";
            err.innerText = "";
        }
    }
}

function addArray() {
    todos.push(todo.value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

btn.addEventListener('click', () => {
    addArray();
    addTodo();
});

todo.addEventListener('keypress', (e) => {
    if (e.code === "Enter") {
        addArray();
        addTodo();
    }
});