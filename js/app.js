const APP = {
    name: "EY LIVE",
    version: "2.0.0",
    build: "004"
};

console.log("APP BAŞLADI");

window.onload = function () {

    const splash = document.getElementById("splash");
    const login = document.getElementById("loginPage");

    setTimeout(() => {

        splash.style.display = "none";
        login.style.display = "flex";

    }, 2200);

};
