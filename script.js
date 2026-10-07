let currentPage = 1;

const music = document.getElementById("music");


/* =========================
   START STORY
========================= */

function startStory() {

    if (music) {
        music.volume = 0.45;

        music.play().catch(() => {
            console.log("Music needs user interaction.");
        });
    }

    nextPage();

    // Robot page থাকবে প্রায় 4.5 seconds
    setTimeout(() => {

        if (currentPage === 2) {
            nextPage();
        }

    }, 4500);
}


/* =========================
   NEXT PAGE
========================= */

function nextPage() {

    if (currentPage < 16) {

        currentPage++;

        showPage(currentPage);

    }

}


/* =========================
   SHOW PAGE
========================= */

function showPage(number) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById("page" + number);

    if (page) {
        page.classList.add("active");
    }

}


/* =========================
   MAIN GIFT
========================= */

function openMainGift() {

    const gift = document.querySelector(".big-gift");
    const text = document.getElementById("giftOpenText");

    if (gift) {
        gift.innerHTML = "❤️";
        gift.style.animation = "none";
        gift.style.transform = "scale(1.2)";
    }

    if (text) {
        text.innerHTML = "A little message for you... ❤️";
    }

    createHearts(15);

    setTimeout(() => {
        nextPage();
    }, 1200);

}


/* =========================
   LETTER BUTTONS
========================= */

function nextLetter() {
    nextPage();
}


/* =========================
   FINAL LETTER → LAST GIFT
========================= */

function showTapGift() {
    nextPage();
}


/* =========================
   LAST GIFT
========================= */

function openFinalGift() {

    const gift = document.querySelector(".tap-gift-box");

    if (gift) {
        gift.innerHTML = "❤️";
        gift.style.animation = "none";
        gift.style.transform = "scale(1.2)";
    }

    createHearts(20);

    /*
       Gift open হওয়ার পর
       আগে Happy Birthday Pookie page আসবে
    */

    setTimeout(() => {

        nextPage();

        /*
           Happy Birthday Pookie page
           কিছুক্ষণ দেখানোর পর
           One More Thing page আসবে
        */

        setTimeout(() => {

            if (currentPage === 9) {
                nextPage();
            }

        }, 5000);

    }, 1200);

}


/* =========================
   FLYING HEARTS
========================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        const emojis = [
            "❤️",
            "💕",
            "💗"
        ];

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (12 + Math.random() * 12) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const animation = heart.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-110vh) rotate(360deg)",
                    opacity: 0
                }
            ],

            {
                duration:
                    2200 + Math.random() * 1800,

                easing: "ease-out"
            }

        );


        animation.onfinish = () => {
            heart.remove();
        };

    }

}


/* =========================
   FINAL PAGE HEARTS
========================= */

setInterval(() => {

    if (currentPage === 16) {

        createHearts(5);

    }

}, 1800);
