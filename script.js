/* =====================================
   GET ELEMENTS
===================================== */

const opening = document.getElementById("opening");

const letterScreen =
    document.getElementById("letterScreen");

const giftScreen =
    document.getElementById("giftScreen");

const bouquetScreen =
    document.getElementById("bouquetScreen");


const envelope =
    document.getElementById("envelope");

const openButton =
    document.getElementById("openButton");


const pages =
    document.querySelectorAll(".page");


const backButton =
    document.getElementById("backButton");

const nextButton =
    document.getElementById("nextButton");

const pageCounter =
    document.getElementById("pageCounter");


const gift =
    document.getElementById("gift");

const giftButton =
    document.getElementById("giftButton");


/* =====================================
   VARIABLES
===================================== */

let currentPage = 0;


/* =====================================
   CHANGE SCREEN
===================================== */

function showScreen(screen) {

    opening.classList.remove("active");

    letterScreen.classList.remove("active");

    giftScreen.classList.remove("active");

    bouquetScreen.classList.remove("active");

    screen.classList.add("active");

    window.scrollTo(0, 0);
}


/* =====================================
   OPEN ENVELOPE
===================================== */

function openEnvelope() {

    envelope.classList.add("open");

    openButton.style.opacity = "0";

    setTimeout(function() {

        showScreen(letterScreen);

    }, 1800);
}


openButton.addEventListener(
    "click",
    openEnvelope
);

envelope.addEventListener(
    "click",
    openEnvelope
);


/* =====================================
   SHOW LETTER PAGE
===================================== */

function showPage(number) {

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    pages[number].classList.add("active");


    pageCounter.textContent =
        (number + 1) + " / " + pages.length;


    if(number === 0) {

        backButton.disabled = true;

    } else {

        backButton.disabled = false;

    }


    if(number === pages.length - 1) {

        nextButton.textContent =
            "Finish →";

    } else {

        nextButton.textContent =
            "Next →";

    }
}


/* =====================================
   NEXT
===================================== */

nextButton.addEventListener(
    "click",
    function() {

        if(currentPage < pages.length - 1) {

            currentPage++;

            showPage(currentPage);

        }

        else {

            showScreen(giftScreen);

        }

    }
);


/* =====================================
   BACK
===================================== */

backButton.addEventListener(
    "click",
    function() {

        if(currentPage > 0) {

            currentPage--;

            showPage(currentPage);

        }

    }
);


/* =====================================
   OPEN GIFT
===================================== */

function openGift() {

    gift.classList.add("open");

    giftButton.disabled = true;

    setTimeout(function() {

        showScreen(bouquetScreen);

    }, 1500);
}


gift.addEventListener(
    "click",
    openGift
);

giftButton.addEventListener(
    "click",
    openGift
);


/* =====================================
   START
===================================== */

showPage(0);
