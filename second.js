
document.addEventListener('DOMContentLoaded', () => {
    const phones_arrow = document.querySelectorAll('.phones_arrow');
    const Inside_products = document.querySelectorAll('.Inside_products');
    phones_arrow.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            const product = Inside_products[index];
            if (product.style.display === "none") {
                product.style.display = "block";
                arrow.style.transform = 'rotate(180deg)';
            }
            else {
                product.style.display = "none";
                arrow.style.transform = 'rotate(0deg)'
            }
        })
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.bar');
    const oneplus1 = document.querySelector('.oneplus1');
    bar.addEventListener('click', () => {
        if (oneplus1.style.display === 'block') {
            oneplus1.style.display = 'none';


        }
        else {
            oneplus1.style.display = 'block';

        }
    });
});

// click on the oneplus buttons
const oneplus = document.querySelector('#oneplus');
const samsung = document.querySelector('#samsung');
oneplus.addEventListener('click', () => {
    document.querySelector('#pic1').scrollIntoView({ behavior: "smooth" });
});

samsung.addEventListener('click', () => {
    document.querySelector('#pic2').scrollIntoView({ behavior: "smooth" });
});

const sam_tv = document.querySelector('#sam_tv');
sam_tv.addEventListener('click', () => {
    document.querySelector('#pic3').scrollIntoView({ behavior: "smooth" });
});

const apple = document.querySelector('#apple');
apple.addEventListener('click', () => {
    document.querySelector('#pic4').scrollIntoView({ behavior: "smooth" });
})

document.addEventListener('DOMContentLoaded', () => {
    const btn2 = document.querySelectorAll('.btn2');
    btn2.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open("buy.html");
        });
    });
});

