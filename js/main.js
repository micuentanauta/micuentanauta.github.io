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

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

const download_link = document.getElementById('redirect-link');

// Get the <button> element that closes the modal
const span = document.getElementsByClassName("close")[0];

var seconds = 10; // seconds for HTML
var foo; // variable for clearInterval() function
var lastFocused = null; // elemento que abre el modal, para restaurar el foco al cerrarlo

var redirect_address

var DONATION_SEEN_KEY = "mcn_donation_seen"; // el modal de donación solo se muestra una vez

function startDownload() {
    redirect_address = btn.getAttribute('link');
    redirect();
}

function openModal() {
    var seen = false;
    try {
        seen = !!localStorage.getItem(DONATION_SEEN_KEY);
    } catch (e) { }

    if (seen) {
        startDownload();
        return;
    }

    try {
        localStorage.setItem(DONATION_SEEN_KEY, "1");
    } catch (e) { }

    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    content.classList.add("blur");

    lastFocused = document.activeElement;

    seconds = 10;
    download_link.innerHTML = 'Tu archivo será descargado automáticamente en <span id="seconds">' + seconds + '</span> segundo(s)...';
    download_link.classList.add('blink');

    countdownTimer();

    if (span && typeof span.focus === "function") {
        span.focus();
    }
}

function closeModal() {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    content.classList.remove("blur");

    download_link.classList.remove('blink');

    seconds = 10;

    clearInterval(foo);

    if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
    }
}

// When the user clicks the button, open the modal
if (btn) {
    btn.addEventListener("click", openModal);

    // Soporte de teclado para el botón de descarga (role="button", sin href)
    btn.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
        }
    });
}

// When the user clicks on <button> (x), close the modal
if (span) {
    span.addEventListener("click", closeModal);
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Close the modal with the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.classList.contains("visible")) {
        closeModal();
    }

    // Focus trap dentro del modal mientras está abierto
    if (event.key === "Tab" && modal && modal.classList.contains("visible")) {
        var focusables = modal.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])');
        if (focusables.length > 0) {
            var first = focusables[0];
            var last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    }
});

// Countdown timer for redirecting to another URL after several seconds


function redirect() {
    
    download_link.innerHTML = 'Su archivo está descargándose...';
    download_link.classList.toggle('blink');

    window.open(redirect_address, "_parent")
    // document.location.href = redirect_address;
}

function updateSecs() {
    seconds--;
    if (seconds <= 0) {
        document.getElementById("seconds").innerHTML = "0";
        clearInterval(foo);
        redirect();
        return;
    }
    document.getElementById("seconds").innerHTML = seconds;
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
