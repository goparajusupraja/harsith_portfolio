// =========================
// Portfolio JavaScript
// =========================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("active");
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

        if(navLinks){
            navLinks.classList.remove("active");
        }
    });
});

// Typing Animation
const words=[
    "Computer Science Student",
    "Future Software Engineer",
    "C Programmer",
    "Java Learner",
    "Python Enthusiast",
    "Web Developer"
];

let wordIndex=0;
let letterIndex=0;
let currentWord="";
let currentLetter="";

const typing=document.getElementById("typing");

function type(){

    if(!typing) return;

    if(wordIndex===words.length){
        wordIndex=0;
    }

    currentWord=words[wordIndex];
    currentLetter=currentWord.slice(0,++letterIndex);

    typing.textContent=currentLetter;

    if(currentLetter.length===currentWord.length){

        setTimeout(()=>{
            erase();
        },1800);

    }else{

        setTimeout(type,100);

    }

}

function erase(){

    currentLetter=currentWord.slice(0,--letterIndex);

    typing.textContent=currentLetter;

    if(letterIndex===0){

        wordIndex++;

        setTimeout(type,300);

    }else{

        setTimeout(erase,60);

    }

}

type();

// Reveal Sections on Scroll
const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// Active Navigation
const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// Animate Skill Bars
const bars=document.querySelectorAll(".progress span");

window.addEventListener("scroll",()=>{

    const trigger=window.innerHeight;

    bars.forEach(bar=>{

        const top=bar.getBoundingClientRect().top;

        if(top<trigger-100){

            bar.style.width=bar.dataset.width;

        }

    });

});

// Counter Animation
const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let count=0;

            const speed=40;

            const update=()=>{

                if(count<target){

                    count++;

                    counter.innerText=count;

                    setTimeout(update,speed);

                }else{

                    counter.innerText=target;

                }

            }

            update();

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// Back To Top Button
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("showTop");

    }else{

        topBtn.classList.remove("showTop");

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// Dark / Light Mode
const themeBtn=document.getElementById("theme");

if(themeBtn){

    themeBtn.onclick=()=>{

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            themeBtn.innerHTML="🌙";

        }else{

            themeBtn.innerHTML="☀";

        }

    }

}

// Contact Form Validation
const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""||email===""||message===""){

alert("Please fill all fields.");

return;

}

alert("Thank you! Your message has been sent.");

form.reset();

});

}

// Footer Year
const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
