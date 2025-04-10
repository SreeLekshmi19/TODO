const todo = document.getElementById('todo');
const content = document.getElementById('todos');
const btn = document.getElementById('btn');
const err = document.getElementById('err');

const all = document.getElementById("all");
const completed = document.getElementById("completed");
const notCompleted = document.getElementById("not-completed");

const todos = JSON.parse(localStorage.getItem("todos")) ?? [];

function addTodo() {
    content.innerHTML = "";
    todos.forEach((ele, idx) => {
        if (ele !== "") {
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
                todos.splice(idx, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                addTodo();
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
                        todos[idx] = input.value;
                        localStorage.setItem("todos", JSON.stringify(todos));
                    }
                    div.replaceChild(p, input);
                });
            });
        }
    });
}

function addArray() {
    const todoValue = todo.value.trim();
    if (todoValue === "") {
        err.innerText = "Please enter a todo!";
        err.style.color = "red";
        return;
    }
    err.innerText = "";
    todos.push(todoValue);
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.value = "";
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

addTodo();