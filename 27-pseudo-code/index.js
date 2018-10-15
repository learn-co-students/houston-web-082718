slides = [
    {
        imgUrl: "https://media.giphy.com/media/3orif5g4xV8SCANTYA/giphy.gif",
        title: "When you don't separate What & How",
        desc: "Not deciding WHAT you're gonna do from HOW you will write it is like driving while you decide where to go!",
    },
    {
        imgUrl: "https://media.giphy.com/media/l2JeekPKVhTUb35xm/giphy.gif",
        title: "I totally know where I'm going",
        desc: "You can lie to yourself all you want. What then How is better",
    },
    {
        imgUrl: "https://media.giphy.com/media/3o6MbqWzqKLgPMYdLG/giphy.gif",
        title: "Lost in the code",
        desc: "Without a map, you will end up lost in your own code. Especially when you're working with anything that is the least bit confusing.",
    },
    {
        imgUrl: "https://media.giphy.com/media/l2JdULEvXwu3cwQdG/giphy.gif",
        title: "The blind leading the blind",
        desc: "You're partner will try, but without a plan, you're lost together.",
    },
    {
        imgUrl: "https://media.giphy.com/media/3orieKjyAFY6FurAVW/giphy.gif",
        title: "while ('I figure this while loop out') do....",
        desc: "You will spend ALL DAY in a loop, trying to figure out why you can't get where you're going.",
    },
    {
        imgUrl: "https://media.giphy.com/media/l2JejQSYaSwqg9KV2/giphy.gif",
        title: "Bugs in the code be like...",
        desc: "You will encounter unexpected bugs if you don't have a plan for all your variables and methods."
    },
    {
        imgUrl: "https://media.giphy.com/media/xT5LMu3cyOyJ8FeSEo/giphy.gif",
        title: "All my hard work",
        desc: "When you eventually ask someone for help, your code's structure will embarass you, which leads to lies and a state of denial.",
    },
    {
        imgUrl: "https://media.giphy.com/media/l2Je2xyD3uZOeIwkE/giphy.gif",
        title: "Sick of this",
        desc: "One day, you will need to wise up. That day is yesterday.",
    },
    {
        imgUrl: "https://media.giphy.com/media/xT5LMOhPGwPSf1J94s/giphy.gif",
        title: "Step 1: Decide on the main objective",
        desc: "Simply decide what you have, and determine what you want to do in the end.",
    },
    {
        imgUrl: "https://media.giphy.com/media/3orieQihlYE7eAmDQY/giphy.gif",
        title: "Step 2: Define your steps",
        desc: "Come up with a list of steps to get there. These can be in plain English, not even code!",
    },
    {
        imgUrl: "https://media.giphy.com/media/3o6MbbjLcA6y7YhojK/giphy.gif",
        title: "Step 3: Walk through them, anticipating everything you can.",
        desc: "The more you walk through, the closer your pseudo code can get to real code.",
    },
    {
        imgUrl: "https://media.giphy.com/media/klZBxHoFLN44M/giphy.gif",
        title: "Step 4: Code and Be Happy",
        desc: "Knock your steps out one at a time, (hopefully) stress free :)",
    },
]
var imgContainer = document.getElementById("imgContainer");
// var img = document.getElementById("img");
var title = document.getElementById("title");
var desc = document.getElementById("desc")
var body = document.querySelector('body')
var next = document.getElementById('next');
var last = document.getElementById('last');
var counter = 0;
function showSlide(slide) {
    title.innerHTML = slide.title;
    desc.innerHTML = slide.desc;
    img ? imgContainer.removeChild(img) : null;
    img = document.createElement('img');
    img.src = slide.imgUrl;
    imgContainer.appendChild(img)
    
}
function nextSlide() {
    counter++;
    showSlide(slides[counter])
}
function lastSlide() {
    counter--;
    showSlide(slides[counter]);
}
next.addEventListener('click', nextSlide);
last.addEventListener('click', lastSlide);
showSlide(slides[counter]);
