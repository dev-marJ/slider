const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
let img = document.querySelector(".prof-img");
let testimonialText = document.querySelector(".testimonial-text");
let name = document.querySelector(".name");
let role = document.querySelector(".role");

const testimonials = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        image: "./images/image-tanya.jpg",
        testimonial: " I've been interested in coding for a while <br> but never taken the jump, until now. I <br> couldn't recommend this course enough. <br> I'm now in the job of my dreams and so <br> exicted about the future. ", 
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        image: "./images/image-john.jpg",
        testimonial: " If you want to lay the best foundation <br> possible I'd recommend taking this <br> course. The depth the instructors go into <br> is incredible. I now feel so confident about <br> starting up as a professional developer. ", 
    }
]


let counter = 0;

function displayTestimonial(index) {
    img.src = testimonials[index].image;
    testimonialText.innerHTML = testimonials[index].testimonial;
    name.innerHTML = testimonials[index].name;
    role.innerHTML = testimonials[index].job;
}

rightBtn.addEventListener("click", () => {
    countUpToTwo();
    displayTestimonial(counter);
});

leftBtn.addEventListener("click", () => {
    counter = (counter - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(counter);
});

function countUpToTwo() {
    counter = (counter + 1) % testimonials.length;
    console.log(counter);
}


displayTestimonial(counter);