function viewalltodos() {
    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    /* query selector */
    const greetings_span = document.querySelector("#greetings span");
    const todo_list = document.querySelector("#todo-list");

    /* clear the todo-list div for appending new elements */
    todo_list.textContent = "";

    greetings_span.textContent = "All Tasks";
    
    todo_objs.forEach(element => {
        let todo_div = document.createElement('div');
        todo_div.classList.add("todo");
        
        let checkbox_input = document.createElement('li');
        checkbox_input.classList.add("checkbox");
        checkbox_input.innerHTML = '<i class="fas fa-check-square" style="color:green"></i>';
        todo_div.appendChild(checkbox_input);

        let title_li = document.createElement('li');
        title_li.classList.add("todo-item");
        title_li.textContent = element.title;
        todo_div.appendChild(title_li);

        let delete_btn = document.createElement('button');
        delete_btn.classList.add("delete-btn");
        delete_btn.innerHTML = '<i class="far fa-trash-alt"></i>';
        todo_div.appendChild(delete_btn);

        todo_list.appendChild(todo_div);
    });
}

export {viewalltodos};