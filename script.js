let currentPage = 1;

const music = document.getElementById("music");

function startStory(){

    music.volume = 0.45;

    music.play().catch(()=>{
        console.log("Music needs user interaction.");
    });

    nextPage();

    // Robot automatically moves to next page
    setTimeout(()=>{
        if(currentPage === 2){
            nextPage();
        }
    },4500);
}


function nextPage(){

    if(currentPage < 10){
        currentPage++;
        showPage(currentPage);
    }

}


function showPage(number){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    const page = document.getElementById("page" + number);

    if(page){
        page.classList.add("active");
    }

}


/* MAIN GIFT */

function openMainGift(){

    const gift = document.querySelector(".big-gift");
    const text = document.getElementById("giftOpenText");

    gift.innerHTML = "❤️";

    gift.style.animation = "none";

    gift.style.transform = "scale(1.2)";

    text.innerHTML = "A little message for you... ❤️";

    createHearts(15);

    setTimeout(()=>{
        nextPage();
    },1200);

}


/* LETTERS */

function nextLetter(){
    nextPage();
}


/* ONE LAST SURPRISE */

function showTapGift(){
    nextPage();
}


/* LAST GIFT */

function openFinalGift(){

    const gift = document.querySelector(".tap-gift-box");

    gift.innerHTML = "❤️";

    gift.style.animation = "none";

    createHearts(18);

    setTimeout(()=>{
        nextPage();
    },1200);

}


/* FLYING HEARTS */

function createHearts(amount){

    for(let i = 0; i < amount; i++){

        const item = document.createElement("div");

        const emojis = [
            "❤️",
            "💕",
            "💗"
        ];

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "%";

        item.style.bottom = "-25px";

        item.style.fontSize =
            12 + Math.random() * 10 + "px";

        item.style.zIndex = "999";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);


        const animation = item.animate(

            [
                {
                    transform:"translateY(0)",
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
                    2200 + Math.random() * 1800,

                easing:"ease-out"
            }

        );


        animation.onfinish = ()=>{
            item.remove();
        };

    }

}


/* PAGE 10 HEARTS */

setInterval(()=>{

    if(currentPage === 10){

        createHearts(5);

    }

},1800);
