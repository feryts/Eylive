const APP = {
    name: "EY LIVE",
    version: "2.0.0",
    build: "004"
};

class EyLive {

    constructor() {
        this.init();
    }

    init() {
        console.log(APP);

        setTimeout(() => {

            document.getElementById("splash").style.display = "none";
            document.getElementById("loginPage").style.display = "flex";

        }, 2200);

    }

}

new EyLive();
