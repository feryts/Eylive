/* ===========================================
   EY LIVE
   CORE APP
=========================================== */

const APP = {

    name: "EY LIVE",

    version: "3.0.0",

    build: "100",

    theme: "dark"

};

const DEFAULT_USER = {

    id: "EY100001",

    username: "Misafir",

    avatar: "assets/avatar/default.png",

    coin: 500,

    diamond: 50,

    level: 1,

    vip: 0,

    verified: false,

    role: "guest",

    language: "tr",

    theme: "dark"

};

class EyLive {

    constructor(){

        this.user=this.loadUser();

        this.init();

    }

    init(){

        console.log(

            APP.name,

            APP.version,

            APP.build

        );

        this.theme();

        this.network();

        this.install();

        this.loader();

    }

    loader(){

        const loader=document.getElementById("loader");

        if(!loader) return;

        setTimeout(()=>{

            location.href="home.html";

        },2200);

    }

    loadUser(){

        const data=localStorage.getItem("eylive_user");

        if(data){

            return JSON.parse(data);

        }

        localStorage.setItem(

            "eylive_user",

            JSON.stringify(DEFAULT_USER)

        );

        return DEFAULT_USER;

    }

    saveUser(){

        localStorage.setItem(

            "eylive_user",

            JSON.stringify(this.user)

        );

    }

    theme(){

        document.body.setAttribute(

            "data-theme",

            this.user.theme

        );

    }

    network(){

        window.addEventListener("offline",()=>{

            alert("İnternet bağlantısı kesildi.");

        });

        window.addEventListener("online",()=>{

            console.log("Bağlantı geri geldi.");

        });

    }

    install(){

        window.addEventListener(

            "beforeinstallprompt",

            e=>{

                e.preventDefault();

                window.installPrompt=e;

            }

        );

    }

}

window.ey=new EyLive();
