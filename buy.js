// buy.html page start
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button_sym');
    let active_btn = null;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (active_btn && active_btn !== button) {
                active_btn.style.backgroundColor = "white";
            }
            button.style.backgroundColor = "blue";
            active_btn = button;
        })
    })
})
const proceed = document.querySelector('.proceed');
const hello_body = document.querySelector('.hello_body');
const success = document.querySelector('.success');
proceed.addEventListener('click', () => {
    hello_body.style.display = "none";
    success.style.display = "block";

})

