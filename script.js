// ------------------------------------------------
// ELEMENTS
// ------------------------------------------------

const mainText = document.getElementById("mainText");
const nextHeart = document.getElementById("nextHeart");
const buttonContainer = document.getElementById("buttonContainer");
const particles = document.getElementById("backgroundParticles");

// ------------------------------------------------
// STATE
// ------------------------------------------------

let scene = 0;

// ------------------------------------------------
// TYPEWRITER
// ------------------------------------------------

function typeText(text, speed = 70) {

    mainText.innerHTML = "";
    mainText.classList.add("fadeIn");

    let i = 0;

    const interval = setInterval(() => {

        mainText.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(interval);

        }

    }, speed);

}

// ------------------------------------------------
// CLICK HINT
// ------------------------------------------------

function showHint() {

    clickHint.innerHTML = "👇 Click me";
    clickHint.classList.add("fadeIn");

}

// ------------------------------------------------
// FADE
// ------------------------------------------------

function fadeOut(callback){

    mainText.style.opacity=0;
    nextHeart.style.opacity=0;

    setTimeout(()=>{

        callback();

        mainText.style.opacity=1;

    },1200);

}

// ------------------------------------------------
// SCENE 1
// ------------------------------------------------

function firstScene(){

    nextHeart.classList.remove("showHeart");

    typeText("How you doing my bebo?");

    setTimeout(()=>{

        showHint();

    },3000);

}

// ------------------------------------------------
// SCENE 2
// ------------------------------------------------

function secondScene(){

    nextHeart.classList.remove("showHeart");

    typeText("I Love You Lots Meri Jaan ❤️\n\nYou are the best thing that's ever happened to me.");

    setTimeout(()=>{

        showHint();

    },4500);

}

// ------------------------------------------------
// CLICK EVENTS
// ------------------------------------------------

nextHeart.addEventListener("click",()=>{

    if(scene===0){

        scene++;
        fadeOut(secondScene);

    }

    else if(scene===1){

        scene++;
        alert("Great! Part 4 will replace this ❤️");

    }

});
// ------------------------------------------------
// FLOATING PARTICLES
// ------------------------------------------------

function createParticle(){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"vw";

    const size=(Math.random()*4)+2;

    particle.style.width=size+"px";
    particle.style.height=size+"px";

    particle.style.animationDuration=(Math.random()*8+6)+"s";

    particles.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },15000);

}

setInterval(createParticle,250);

// ------------------------------------------------
// START
// ------------------------------------------------

firstScene();
