// Middle part
// const arrows = document.querySelectorAll('.arrow');
const first = document.querySelector('#first');// first down-arrow for phones
const first2 = document.querySelector('.first2'); // for first part extension
const second = document.querySelector('#second');// second down-arrow for Tv
const second2 = document.querySelector('.second2');// for second part extension
const Third = document.querySelector('#Third');// for third down-arrow
const Third2 = document.querySelector('.Third2');// for third part extension
const fourth = document.querySelector('#fourth');//for fourth down-arrows
const fourth2 = document.querySelector('.fourth2');// for fourth part extensions
const fifth = document.querySelector("#fifth");//for fifth down-arrows
const fifth2 = document.querySelector('.fifth2');// for fifth part extensions
const sixth = document.querySelector('#sixth');//for sixth down-arrows
const sixth2 = document.querySelector('.sixth2');// for sixth part extensions

// for first down-arrow
first.addEventListener('mouseover', () => {
    first.style.transform = 'rotate(180deg)';
    first2.style.display = "block";
    second2.style.display = "none";
    Third2.style.display = "none";
    fourth2.style.display = "none";
    fifth2.style.display = "none";
    sixth2.style.display = "none";
    second.style.transform = 'rotate(0deg)';
    Third.style.transform = 'rotate(0deg)';
    fourth.style.transform = 'rotate(0deg)';
    fifth.style.transform = 'rotate(0deg)';
    sixth.style.transform = 'rotate(0deg)';


});
first.addEventListener('click', () => {
    first.style.transform = 'rotate(0deg)';
    first2.style.display = "none";
});
// for second down-arrow
second.addEventListener('mouseover', () => {
    second.style.transform = 'rotate(180deg)';
    second2.style.display = "block";
    first2.style.display = "none";
    Third2.style.display = "none";
    fourth2.style.display = "none";
    fifth2.style.display = "none";
    sixth2.style.display = "none";
    first.style.transform = 'rotate(0deg)';
    Third.style.transform = 'rotate(0deg)';
    fourth.style.transform = 'rotate(0deg)';
    fifth.style.transform = 'rotate(0deg)';
    sixth.style.transform = 'rotate(0deg)';
});
second.addEventListener('click', () => {
    second.style.transform = 'rotate(360deg)';
    second2.style.display = "none";
});
//  for Third down-arrow
Third.addEventListener('mouseover', () => {
    Third.style.transform = 'rotate(180deg)';
    Third2.style.display = "block";
    first2.style.display = "none";
    second2.style.display = "none";
    fourth2.style.display = "none";
    fifth2.style.display = "none";
    sixth2.style.display = "none";
    first.style.transform = 'rotate(0deg)';
    second.style.transform = 'rotate(0deg)';
    fourth.style.transform = 'rotate(0deg)';
    fifth.style.transform = 'rotate(0deg)';
    sixth.style.transform = 'rotate(0deg)';
});
Third.addEventListener('click', () => {
    Third.style.transform = 'rotate(360deg)';
    Third2.style.display = "none";
});
// for fourth down-arrow
fourth.addEventListener('mouseover', () => {
    fourth.style.transform = 'rotate(180deg)';
    fourth2.style.display = "block";
    first2.style.display = "none";
    second2.style.display = "none";
    Third2.style.display = "none";
    fifth2.style.display = "none";
    sixth2.style.display = "none";
    first.style.transform = 'rotate(0deg)';
    Third.style.transform = 'rotate(0deg)';
    second.style.transform = 'rotate(0deg)';
    fifth.style.transform = 'rotate(0deg)';
    sixth.style.transform = 'rotate(0deg)';
});
fourth.addEventListener('click', () => {
    fourth.style.transform = 'rotate(360deg)';
    fourth2.style.display = "none";
});
// for fifth down-arrow
fifth.addEventListener('mouseover', () => {
    fifth.style.transform = 'rotate(180deg)';
    fifth2.style.display = "block";
    first2.style.display = "none";
    second2.style.display = "none";
    Third2.style.display = "none";
    fourth2.style.display = "none";
    sixth2.style.display = "none";
    first.style.transform = 'rotate(0deg)';
    Third.style.transform = 'rotate(0deg)';
    fourth.style.transform = 'rotate(0deg)';
    second.style.transform = 'rotate(0deg)';
    sixth.style.transform = 'rotate(0deg)';
});
fifth.addEventListener('click', () => {
    fifth.style.transform = 'rotate(360deg)';
    fifth2.style.display = "none";
});
//for sixth part
sixth.addEventListener('mouseover', () => {
    sixth.style.transform = 'rotate(180deg)';
    sixth2.style.display = "block";
    first2.style.display = "none";
    second2.style.display = "none";
    Third2.style.display = "none";
    fourth2.style.display = "none";
    fifth2.style.display = "none";
    first.style.transform = 'rotate(0deg)';
    Third.style.transform = 'rotate(0deg)';
    fourth.style.transform = 'rotate(0deg)';
    fifth.style.transform = 'rotate(0deg)';
    second.style.transform = 'rotate(0deg)';

});
sixth.addEventListener('click', () => {
    sixth.style.transform = 'rotate(360deg)';
    sixth2.style.display = "none";
});
// slideable image part
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.images');
let slidenumber = 1;
const size = images.length;

//right button
function nextslide() {
    if (slidenumber < size) {
        slider.style.transform = `translateX(-${650 * slidenumber}px)`;
        slidenumber++;
    }
    else {
        slider.style.transform = `translateX(-${0}px)`;
        slidenumber = 1;
    }
};
//left button
function previousslide() {
    if (slidenumber > 1) {
        slider.style.transform = `translateX(-${650 * (slidenumber - 2)}px)`;
        slidenumber--;
    }
    else {
        slider.style.transform = `translateX(-${650 * (size - 1)}px)`;
        slidenumber = size;
    }
};
right.addEventListener('click', nextslide);
left.addEventListener('click', previousslide);
setInterval(nextslide, 3500);

//end of slidable image part


// Start of wrapper part
// const wrapper_item = document.querySelectorAll('.wrapper_item');
// const up = document.querySelectorAll('.up');

// up.addEventListener('click', () => {
//     wrapper_item.style.backgroundColor = 'red';
// });
document.addEventListener('DOMContentLoaded', () => {
    const wrapper_item = document.querySelectorAll('.wrapper_item');
    wrapper_item.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            window.location.href = ("oneplus.Html");
        });
    });
})
















