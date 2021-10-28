const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const itemsCont = document.querySelector(".items")
const thumbCont = document.querySelector(".thumbs")
const textCont = document.querySelector(".text")

for (let i = 0; i <= items.length; i++) {
    itemsCont.innerHTML += 
        `<div class="item">
            <img src="${items[i]}" alt="${items[i]}">
        </div>`
    textCont.innerHTML +=
        `<div class="textinside">
            <h1 class="title">${title[i]}</h1>
            <p class="bio">${text[i]}</p>
        </div>`
    thumbCont.innerHTML +=
        `<div class="thumb">
            <img src="${items[i]}" alt="${items[i]}">
        </div>` 
}

console.log(itemsCont);
console.log(thumbCont);
console.log(textCont);