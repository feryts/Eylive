/* ===========================================
        EY LIVE V2
        ROOM ENGINE v1.0
=========================================== */

const room = JSON.parse(
localStorage.getItem("selectedRoom")
);

const roomTitle=document.getElementById("roomTitle");
const roomId=document.getElementById("roomId");
const onlineCount=document.getElementById("onlineCount");

if(room){

roomTitle.innerHTML=room.name;

roomId.innerHTML="ID "+room.id;

onlineCount.innerHTML=room.online+" Online";

}

const chatList=document.getElementById("chatList");

const messages=[

{
user:"Sistem",
text:"🎉 Odaya hoş geldiniz."
},

{
user:"EyLive",
text:"Herkese iyi eğlenceler ❤️"
}

];

function renderChat(){

chatList.innerHTML="";

messages.forEach(msg=>{

chatList.innerHTML+=`

<div class="chatItem">

<b>${msg.user}</b>

${msg.text}

</div>

`;

});

chatList.scrollTop=chatList.scrollHeight;

}

renderChat();

function sendSystem(text){

messages.push({

user:"Sistem",

text

});

renderChat();

}

document.getElementById("backBtn").onclick=()=>{

history.back();

};

document.getElementById("heartBtn").onclick=()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.bottom="90px";

heart.style.left=(Math.random()*70+15)+"%";

heart.style.fontSize="28px";

heart.style.zIndex="9999";

heart.style.transition="1.8s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-250px) scale(1.8)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1900);

};

document.getElementById("giftBtn").onclick=()=>{

alert("🎁 Hediye mağazası yakında eklenecek.");

};

document.getElementById("emojiBtn").onclick=()=>{

messages.push({

user:"Sen",

text:"😀😀😀"

});

renderChat();

};

document.getElementById("profileBtn").onclick=()=>{

alert("👤 Profil kartı yakında açılacak.");

};

document.getElementById("micBtn").onclick=()=>{

sendSystem("🎤 Mikrofon isteği gönderildi.");

};

const host=document.querySelector(".hostAvatar");

setInterval(()=>{

host.classList.toggle("speaking");

},1800);

console.log("ROOM ENGINE READY");
