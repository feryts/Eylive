/* ===========================================
   EY LIVE HOME.JS v1.0
=========================================== */

const rooms = [
{
icon:"🎤",
name:"Türkiye Sohbet",
desc:"Genel Eğlence",
users:18
},
{
icon:"🎵",
name:"Music Party",
desc:"DJ Canlı Yayın",
users:25
},
{
icon:"🎮",
name:"Game Club",
desc:"Slot Oyuncuları",
users:14
},
{
icon:"💎",
name:"VIP Lounge",
desc:"Özel Oda",
users:7
},
{
icon:"😂",
name:"Komedi",
desc:"Eğlence",
users:20
},
{
icon:"☕",
name:"Cafe",
desc:"Muhabbet",
users:11
},
{
icon:"🎧",
name:"Gece FM",
desc:"Müzik",
users:36
},
{
icon:"❤️",
name:"Aşk Odası",
desc:"Tanışma",
users:22
}
];

const streamers=[
{
name:"Elif",
id:"EY100245",
img:"https://i.pravatar.cc/150?img=12"
},
{
name:"Ahmet",
id:"EY100533",
img:"https://i.pravatar.cc/150?img=32"
},
{
name:"Ayşe",
id:"EY100811",
img:"https://i.pravatar.cc/150?img=42"
},
{
name:"Mehmet",
id:"EY100925",
img:"https://i.pravatar.cc/150?img=52"
},
{
name:"Zeynep",
id:"EY101024",
img:"https://i.pravatar.cc/150?img=18"
}
];

const roomArea=document.getElementById("rooms");

rooms.forEach(room=>{

roomArea.innerHTML+=`

<div class="roomCard">

<div class="roomLeft">

<div class="roomIcon">

${room.icon}

</div>

<div>

<div class="roomName">

${room.name}

</div>

<div class="roomDesc">

${room.desc}

</div>

</div>

</div>

<div class="roomUsers">

👥 ${room.users}

</div>

</div>

`;

});

const streamerArea=document.getElementById("streamers");

streamers.forEach(user=>{

streamerArea.innerHTML+=`

<div class="streamCard">

<div class="live"></div>

<img src="${user.img}">

<h3>${user.name}</h3>

<p>${user.id}</p>

</div>

`;

});

document.querySelectorAll(".roomCard").forEach(card=>{

card.onclick=function(){

this.animate([

{

transform:"scale(.95)"

},

{

transform:"scale(1.03)"

},

{

transform:"scale(1)"

}

],{

duration:300

});

alert("Sesli oda ekranı sonraki pakette eklenecek.");

}

});

document.querySelectorAll(".streamCard").forEach(card=>{

card.onclick=function(){

this.animate([

{

transform:"rotate(-3deg)"

},

{

transform:"rotate(3deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:350

});

}

});

const search=document.querySelector(".searchBox input");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".roomCard").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"flex":"none";

});

});

document.querySelectorAll(".bottomNav div").forEach(item=>{

item.onclick=function(){

document.querySelectorAll(".bottomNav div").forEach(x=>{

x.style.color="#fff";

});

this.style.color="#ff2ebd";

}

});

setInterval(()=>{

document.querySelectorAll(".roomUsers").forEach(user=>{

let number=parseInt(user.innerText.replace(/\D/g,""));

number+=Math.floor(Math.random()*3)-1;

if(number<1)number=1;

user.innerHTML="👥 "+number;

});

},5000);

console.log("EY LIVE HOME LOADED");
