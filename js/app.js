/* ===========================================
   EY LIVE APP.JS v1.0
=========================================== */

const splash = document.getElementById("splash");
const loginPage = document.getElementById("loginPage");

// Splash Screen
window.onload = () => {

    setTimeout(() => {

        splash.style.opacity = "0";
        splash.style.visibility = "hidden";

        loginPage.style.display = "flex";

        loginPage.animate([
            {
                opacity:0,
                transform:"translateY(40px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:700,
            fill:"forwards"

        });

    },2500);

}


/* ========= BUTTONS ========= */

const loginBtn=document.querySelector(".loginBtn");
const registerBtn=document.querySelector(".registerBtn");
const guestBtn=document.querySelector(".guestBtn");


loginBtn.onclick=()=>{

loginBtn.innerHTML="Giriş Yapılıyor...";

loginBtn.disabled=true;

setTimeout(()=>{

window.location.href="home.html";

},1200);

}


registerBtn.onclick=()=>{

window.location.href="register.html";

}


guestBtn.onclick=()=>{

window.location.href="home.html";

}


/* ========= INPUT EFFECT ========= */

document.querySelectorAll("input").forEach(input=>{

input.addEventListener("focus",()=>{

input.style.border="2px solid #8a2eff";
input.style.boxShadow="0 0 20px #8a2eff66";

});

input.addEventListener("blur",()=>{

input.style.border="none";
input.style.boxShadow="none";

});

});


/* ========= PARTICLES ========= */

const bg=document.getElementById("bg-animation");

for(let i=0;i<25;i++){

const p=document.createElement("span");

p.style.position="absolute";

p.style.width=Math.random()*10+5+"px";

p.style.height=p.style.width;

p.style.borderRadius="50%";

p.style.background="rgba(255,255,255,.15)";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.animation="floatParticle "+(Math.random()*10+8)+"s infinite";

bg.appendChild(p);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatParticle{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-250px);

opacity:0;

}

}

`;

document.head.appendChild(style);


/* ========= LOGO GLOW ========= */

setInterval(()=>{

document.querySelector(".logoCircle").animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1500

});

},1800);



/* ========= VERSION ========= */

console.log("EY LIVE v1.0 Loaded");


/* ========= FUTURE MODULES =========

HOME
ROOM
PROFILE
GAMES
MESSAGES
ADMIN

================================= */
