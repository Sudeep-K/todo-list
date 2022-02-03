function viewform() {
    /* query selectors */
    const settodo_form = document.querySelector('#set-todo');
    const overlay_div = document.querySelector('#overlay');

    settodo_form.classList.add('active');
    overlay_div.classList.add('active');
}

function hideform() {
    /*query selectors */
    const settodo_form = document.querySelector('#set-todo');
    const overlay_div = document.querySelector('#overlay');

    settodo_form.classList.remove('active');
    overlay_div.classList.remove('active');
}

export {viewform, hideform};