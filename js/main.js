//#region Bloqueando click derecho

function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");

//#endregion

// Get the modal
var modal = document.getElementById("myModal");

const content = document.getElementsByClassName("imageWrapper")[0];

const body = document.querySelector("body");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

const download_link = document.getElementById('redirect-link');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const download_btn = document.getElementById("download_btn");

var seconds = 9; // seconds for HTML
var foo; // variable for clearInterval() function

var redirect_address

// When the user clicks the button, open the modal
btn.onclick = function () {
    
    modal.classList.toggle("visible");
    content.classList.toggle("blur");

    redirect_address = btn.getAttribute('link');

    download_link.innerHTML = 'Tu archivo será descargado automáticamente en <span id="seconds">10</span> segundo(s)...';
    download_link.classList.add('blink');
    
    countdownTimer();
    // modal.style.display = "block";
    // body.style.overflow = "hidden";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    modal.classList.toggle("visible");
    content.classList.toggle("blur");
    
    download_link.classList.remove('blink');
    
    seconds = 9
    
    clearInterval(foo);

};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        
        modal.classList.toggle("visible");
        content.classList.toggle("blur");

        download_link.classList.remove('blink');
        
        seconds = 9
        
        clearInterval(foo);
    }
};

// Countdown timer for redirecting to another URL after several seconds


function redirect() {
    
    download_link.innerHTML = 'Su archivo está descargándose...';
    download_link.classList.toggle('blink');

    window.open(redirect_address, "_parent")
    // document.location.href = redirect_address;
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {

        clearInterval(foo);
        
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        if (!document[hidden]) {
            updateSecs()
        }
        // else {
        //     console.log("la ventana está oculta")
        // }
    }, 1000);
}

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

// // If the page is hidden, pause the video;
// // if the page is shown, play the video
// function handleVisibilityChange() {
//     if (document[hidden]) {
//         videoElement.pause();
//     } else {
//         videoElement.play();
//     }
// }
