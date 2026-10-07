let currentPage = 1;

const music =
    document.getElementById("music");



/* ========================= */
/* SHOW PAGE */
/* ========================= */

function showPage(number){

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(
            "page" + number
        );


    if(page){

        page.classList.add("active");

    }

}



/* ========================= */
/* START */
/* ========================= */

function startStory(){

    music.volume = 0.45;


    music.play().catch(() => {

        console.log(
            "Music could not start."
        );

    });


    nextPage();


    createHearts(12);

}



/* ========================= */
/* NEXT PAGE */
/* ========================= */

function nextPage(){

    if(currentPage < 8){

        currentPage++;

        showPage(currentPage);

        createHearts(5);

    }

}



/* ========================= */
/* OPEN GIFT */
/* ========================= */

function openGift(){

    const gift =
        document.querySelector(
            ".gift-box"
        );


    const text =
        document.getElementById(
            "giftText"
        );


    gift.style.animation =
        "none";


    gift.style.transform =
        "translateX(-50%) scale(1.3)";


    gift.innerHTML =
        "✨🎁✨";


    text.innerHTML =
        "For the sweetest Mim ❤️";


    createHearts(25);


    setTimeout(() => {

        nextPage();

    },1800);

}



/* ========================= */
/* BLOW CANDLE */
/* ========================= */

function blowCandle(){

    const flame =
        document.getElementById(
            "flame"
        );


    flame.innerHTML =
        "💨";


    flame.style.animation =
        "none";


    createHearts(30);


    setTimeout(() => {

        nextPage();

    },1400);

}



/* ========================= */
/* HEARTS / FLOWERS */
/* ========================= */

function createHearts(amount){

    for(
        let i = 0;
        i < amount;
        i++
    ){

        const item =
            document.createElement("div");


        const emojis = [

            "❤️",
            "💕",
            "💖",
            "💗",
            "🌸",
            "✨",
            "🎉"

        ];


        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random()
            * 100 + "%";


        item.style.bottom =
            "-30px";


        item.style.fontSize =
            18 +
            Math.random()
            * 22 +
            "px";


        item.style.zIndex =
            "999";


        item.style.pointerEvents =
            "none";


        document.body
            .appendChild(item);



        const animation =
            item.animate(

                [

                    {

                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity:1

                    },

                    {

                        transform:
                            "translateY(-110vh) rotate(360deg)",

                        opacity:0

                    }

                ],

                {

                    duration:
                        2500 +
                        Math.random()
                        * 2000,

                    easing:
                        "ease-out"

                }

            );


        animation.onfinish = () => {

            item.remove();

        };

    }

}



/* ========================= */
/* FINAL CELEBRATION */
/* ========================= */

setInterval(() => {

    if(currentPage === 8){

        createHearts(10);

    }

},3000);
