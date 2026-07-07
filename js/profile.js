/* ==========================================
        EY LIVE PROFILE.JS
========================================== */

const menu=document.querySelectorAll(".item");

menu.forEach(item=>{

item.onclick=function(){

const text=this.innerText;

switch(true){

case text.includes("Rozet"):
alert("Rozetler sayfası yakında.");
break;

case text.includes("Envanter"):
alert("Envanter yakında.");
break;

case text.includes("Yayıncı"):
alert("Başvuru formu eklenecek.");
break;

case text.includes("Takip"):
alert("Takipçi listesi açılacak.");
break;

case text.includes("Ayar"):
alert("Ayarlar sayfası hazırlanıyor.");
break;

case text.includes("Çıkış"):
location.href="index.html";
break;

}

}

});

console.log("PROFILE READY");
