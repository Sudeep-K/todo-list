function savedatatolocal(new_todo) {
    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    todo_objs.push(new_todo);
    localStorage.setItem("todo_objs", JSON.stringify(todo_objs));
} 

export {savedatatolocal};