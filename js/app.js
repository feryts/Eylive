/* ===========================================
   EY LIVE CORE
=========================================== */

const APP = {
    name: "EY LIVE",
    version: "2.0.0",
    build: "003"
};

const DEFAULT_USER = {
    id: "",
    username: "Misafir",
    avatar: "assets/avatar/default.png",
    coin: 0,
    diamond: 0,
    level: 1,
    vip: 0,
    verified: false,
    role: "guest",
    language: "tr",
    theme: "dark"
};

class EyLive {

    constructor() {
        this.user = this.loadUser();
        this.init();
    }

    init() {
        console.log(APP.name, APP.version, APP.build);

        this.network();
        this.theme();
        this.install();
        this.loader();
    }

    loader() {

        setTimeout(() => {

            const splash = document.getElementById("splash");
            const login = document.getElementById("loginPage");

            if (splash && login) {

                splash.style.display = "none";
                login.style.display = "block";

            }

        }, 2200);

    }

    loadUser() {

        const data = localStorage.getItem("eylive_user");

        if (data) return JSON.parse(data);

        localStorage.setItem(
            "eylive_user",
            JSON.stringify(DEFAULT_USER)
        );

        return DEFAULT_USER;

    }

    network() {

        window.addEventListener("offline", () => {

            alert("İnternet bağlantısı kesildi.");

        });

    }

    theme() {

        document.body.dataset.theme = this.user.theme;

    }

    install() {

        window.addEventListener("beforeinstallprompt", e => {

            e.preventDefault();
            window.installPrompt = e;

        });

    }

}

window.ey = new EyLive();

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.querySelector(".loginBtn");
    const guestBtn = document.querySelector(".guestBtn");

    function enterApp() {
        window.location.href = "pages/index.html";
    }

    if (loginBtn) loginBtn.onclick = enterApp;

    if (guestBtn) guestBtn.onclick = enterApp;

});
