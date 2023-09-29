import "./assets/style.css";

const content = document.querySelector('div#content');

let trigger = document.createElement('div');
trigger.classList.add('trigger');
trigger.addEventListener('click', function (e) {
    trigger.classList.toggle('clicked');
});

let box = document.createElement('div');
box.classList.add('box');

trigger.appendChild(box);
content.appendChild(trigger);

let dropBtn = document.querySelector('.dropBtn');
let items = document.querySelectorAll('.item');
dropBtn.addEventListener('click', function(e) {
    items.forEach(element => {
        element.classList.toggle('show');
    });
});

const carousel = document.querySelector('.carousel');
let images = [];
for(let i=0;i<4;i++) {
    images.push(`../src/assets/images/landscape${i+1}.jpeg`);
}
console.log('hello');
console.log(images.toString());
let i = 0;
let current = document.createElement('img');
current.setAttribute('src', images[i]);
carousel.addEventListener('click', function(e) {
    if(i==3) {
        i = -1;
    }
    i+=1;
    current.setAttribute('src', images[i]);
});
carousel.appendChild(current);
content.appendChild(carousel);

