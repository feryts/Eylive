/* ==========================================
        EY LIVE GAMES.JS v1.0
========================================== */

let coin = Number(localStorage.getItem("coin")) || 125000;

const coinText = document.getElementById("coin");
coinText.innerHTML = coin;

const dailyBtn = document.getElementById("dailyBtn");
const slotBtn = document.querySelector("#slotGame button");
const wheelBtn = document.querySelector("#wheelGame button");

/* Günlük Ödül */

dailyBtn.onclick = () => {

    coin += 500;

    saveCoin();

    toast("+500 Coin Kazandın 🎉");

    dailyBtn.disabled = true;
    dailyBtn.innerHTML = "Alındı ✓";

}

/* SLOT */

slotBtn.onclick = () => {

    if (coin < 100) {

        toast("Yetersiz Coin");

        return;

    }

    coin -= 100;

    const symbols = ["🍒", "🍋", "💎", "7️⃣", "⭐", "🍀"];

    let a = symbols[Math.floor(Math.random() * symbols.length)];
    let b = symbols[Math.floor(Math.random() * symbols.length)];
    let c = symbols[Math.floor(Math.random() * symbols.length)];

    let result = a + " " + b + " " + c;

    if (a == b && b == c) {

        coin += 5000;

        alert(result + "\n\n🎉 JACKPOT\n+5000 Coin");

    } else if (a == b || b == c || a == c) {

        coin += 500;

        alert(result + "\n\n👏 Tebrikler\n+500 Coin");

    } else {

        alert(result + "\n\nTekrar Dene");

    }

    saveCoin();

}

/* Lucky Wheel */

wheelBtn.onclick = () => {

    if (coin < 50) {

        toast("Yetersiz Coin");

        return;

    }

    coin -= 50;

    const rewards = [

        0,

        20,

        50,

        100,

        300,

        500,

        1000,

        5000

    ];

    const reward = rewards[Math.floor(Math.random() * rewards.length)];

    coin += reward;

    saveCoin();

    alert("🎡\n\nKazandığın Ödül\n\n+" + reward + " Coin");

}

/* Coin */

function saveCoin() {

    localStorage.setItem("coin", coin);

    coinText.innerHTML = coin;

}

/* Toast */

function toast(text) {

    const div = document.createElement("div");

    div.innerHTML = text;

    div.style.position = "fixed";

    div.style.left = "50%";

    div.style.bottom = "100px";

    div.style.transform = "translateX(-50%)";

    div.style.background = "#8a2eff";

    div.style.padding = "15px 25px";

    div.style.borderRadius = "30px";

    div.style.color = "#fff";

    div.style.boxShadow = "0 0 25px #8a2eff";

    div.style.zIndex = "9999";

    document.body.appendChild(div);

    setTimeout(() => {

        div.remove();

    }, 1800);

}

console.log("EY LIVE GAMES READY");
