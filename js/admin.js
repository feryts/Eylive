console.log("EY LIVE ADMIN");

document.querySelectorAll(".sidebar li").forEach(item=>{

item.onclick=function(){

document.querySelectorAll(".sidebar li").forEach(x=>{

x.classList.remove("active");

});

this.classList.add("active");

}

});
