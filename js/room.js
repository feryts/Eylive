/* ==========================================
        EY LIVE ROOM.JS v1.0
========================================== */

const micBtn=document.getElementById("micBtn");
const giftBtn=document.getElementById("giftBtn");
const emojiBtn=document.getElementById("emojiBtn");
const chatBtn=document.getElementById("chatBtn");
const backBtn=document.getElementById("backBtn");

let micOpen=false;

/* Mikrofon */

micBtn.onclick=()=>{

micOpen=!micOpen;

if(micOpen){

micBtn.classList.add("mic-active");

micBtn.innerHTML="🔊";

showToast("Mikrofon Açıldı");

}else{

micBtn.classList.remove("mic-active");

micBtn.innerHTML="🎤";

showToast("Mikrofon Kapandı");

}

}

/* Geri */

backBtn.onclick=()=>{

window.location.href="home.html";

}

/* Hediye */

giftBtn.onclick=()=>{

openGiftPanel();

}

/* Emoji */

emojiBtn.onclick=()=>{

openEmojiPanel();

}

/* Mesaj */

chatBtn.onclick=()=>{

let mesaj=prompt("Mesajınızı Yaz");

if(mesaj){

sendMessage("Sen",mesaj);

}

}

/* Sohbet */

function sendMessage(name,text){

const chat=document.querySelector(".chatBox");

const div=document.createElement("div");

div.className="message";

div.innerHTML="<b>"+name+"</b><br>"+text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

}

/* Emoji Paneli */

function openEmojiPanel(){

const emojis=[

"😀","😂","😍","🥰","😎","🔥",

"❤️","👏","🎉","👍","🎁","💎"

];

let html="";

emojis.forEach(e=>{

html+=e+" ";

});

alert(html);

}

/* Hediye */

function openGiftPanel(){

const gifts=[

"🌹 Gül",

"💍 Yüzük",

"🚗 Araba",

"🛥 Yat",

"🏰 Kale",

"👑 Taç",

"💎 Elmas",

"✈️ Jet"

];

let text="Gönderilecek Hediyeler\n\n";

gifts.forEach((g,i)=>{

text+=(i+1)+". "+g+"\n";

});

alert(text);

}

/* Toast */

function showToast(text){

const div=document.createElement("div");

div.innerHTML=text;

div.style.position="fixed";

div.style.bottom="95px";

div.style.left="50%";

div.style.transform="translateX(-50%)";

div.style.background="#8a2eff";

div.style.padding="12px 20px";

div.style.borderRadius="30px";

div.style.color="#fff";

div.style.zIndex="999";

div.style.boxShadow="0 0 20px #8a2eff";

document.body.appendChild(div);

setTimeout(()=>{

div.remove();

},1800);

}

/* Konuşma Animasyonu */

setInterval(()=>{

const users=document.querySelectorAll(".seat img");

const random=Math.floor(Math.random()*users.length);

users.forEach(x=>{

x.style.boxShadow="none";

});

users[random].style.boxShadow="0 0 25px #00ff88";

},2000);

console.log("ROOM READY");
