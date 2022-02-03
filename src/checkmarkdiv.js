function checkmarkdiv(event) {
    if (event.target.parentElement.className == "checkbox") {
        event.target.parentElement.parentElement.classList.toggle("checked");
    }
}

export {checkmarkdiv};