// menu -------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menuBar");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function(e){
            e.stopPropagation();
            menu.classList.toggle("open");

            menuBtn.textContent = menu.classList.contains("open") ? "✖" : "☰";

            if (!menu.classList.contains("open")) {
                document.querySelectorAll(".super_ser, .super_pag")
                    .forEach(el => el.classList.remove("active"));
            }
        });
    }
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menuBar");
document.addEventListener("click", function(e){
    if(menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)){
        menu.classList.remove("open");
        menuBtn.textContent = "☰";

        document.querySelectorAll(".super_ser, .super_pag")
            .forEach(el => el.classList.remove("active"));
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// Youtube video -----------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(){
    const watchBtn = document.getElementById("watchVideo");
    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("closeVideo");
    const frame = document.getElementById("videoFrame");

    if (watchBtn && modal && closeBtn && frame) {

        watchBtn.addEventListener("click", function(e){
            e.preventDefault();
            modal.classList.add("show");
            frame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
        });

        closeBtn.addEventListener("click", function(){
            modal.classList.remove("show");
            frame.src = "";
        });

        modal.addEventListener("click", function(e){
            if(e.target === modal){
                modal.classList.remove("show");
                frame.src = "";
            }
        });

    }
});
// ------------------------------------------------------------------------------------------------------------------------------------

// FORM --------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let MyForm = document.getElementById("MyData");
    if (MyForm) {

        const nameInput = document.getElementById("uname");
        const mobInput = document.getElementById("umob");
        const msgInput = document.getElementById("umes");

        const err_name = document.getElementById("name_err");
        const err_mob = document.getElementById("mob_err");
        const err_mes = document.getElementById("mes_err");

        MyForm.addEventListener("submit",(e)=>{
            let isFormValid = true;

            let User_Name = nameInput.value.trim();
            let User_Mobile = mobInput.value.trim();
            let User_Message = msgInput.value.trim();

            err_name.textContent = "";
            err_mob.textContent = "";
            err_mes.textContent = "";

            // NAME
            const namePattern = /^[A-Za-z ]+$/;
            if (!User_Name) {
                err_name.textContent = "Please fill your name";
                nameInput.classList.add("error");
                nameInput.classList.remove("success");
                isFormValid = false;
            }
            else if (!namePattern.test(User_Name)) {
                err_name.textContent = "Name must contain only letters";
                nameInput.classList.add("error");
                nameInput.classList.remove("success");
                isFormValid = false;
            }
            else {
                nameInput.classList.remove("error");
                nameInput.classList.add("success");
            }

            // MOBILE
            const mobPattern = /^\d{10}$/;
            if (!User_Mobile) {
                err_mob.textContent = "Please fill your mobile number";
                mobInput.classList.add("error");
                mobInput.classList.remove("success");
                isFormValid = false;
            }
            else if (!mobPattern.test(User_Mobile)) {
                err_mob.textContent = "Enter a valid 10-digit mobile number";
                mobInput.classList.add("error");
                mobInput.classList.remove("success");
                isFormValid = false;
            }
            else {
                mobInput.classList.remove("error");
                mobInput.classList.add("success");
            }

            // MESSAGE
            if (!User_Message) {
                err_mes.textContent = "Please fill your message";
                msgInput.classList.add("error");
                msgInput.classList.remove("success");
                isFormValid = false;
            }
            else if (User_Message.split(/\s+/).length < 5) {
                err_mes.textContent = "Minimum 5 words allowed";
                msgInput.classList.add("error");
                msgInput.classList.remove("success");
                isFormValid = false;
            }
            else {
                msgInput.classList.remove("error");
                msgInput.classList.add("success");
            }

            if (!isFormValid) {
                e.preventDefault();
            }

            // SUCCESS
            if (isFormValid) {
                const User_Info = {
                    "Full Name": User_Name,
                    "Mobile Number": User_Mobile,
                    "Message": User_Message
                };
                console.log(User_Info);
                document.querySelectorAll("#MyData input, #MyData textarea").forEach(field => {
                    field.classList.remove("error","success");
                });
            }
        });
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("MyData");

    if (form && document.querySelector(".errorlist")) {
        form.scrollIntoView({ behavior: "smooth" });
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// subscribe ---------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("AgreeForm");

    if (form) {
        form.addEventListener("submit", function () {

            let emailInput = document.getElementById("uemail");
            let value = emailInput.value.trim();

            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!value || !pattern.test(value)) {
                emailInput.classList.add("error");
                emailInput.classList.remove("success");
            } else {
                emailInput.classList.remove("error");
                emailInput.classList.add("success");
            }

        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("AgreeForm");

    if (subscribeForm && document.querySelector("#AgreeForm .errorlist")) {
        subscribeForm.scrollIntoView({ behavior: "smooth" });
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// recent project ----------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("recentTrack");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (track && nextBtn && prevBtn) {
        const slideWidth = 400;

        nextBtn.addEventListener("click", () => {
            track.style.transition = "transform 0.5s ease";
            track.style.transform = `translateX(-${slideWidth}px)`;

            setTimeout(() => {
                track.appendChild(track.firstElementChild);
                track.style.transition = "none";
                track.style.transform = "translateX(0)";
            }, 500);
        });

        prevBtn.addEventListener("click", () => {
            track.insertBefore(track.lastElementChild, track.firstElementChild);
            track.style.transition = "none";
            track.style.transform = `translateX(-${slideWidth}px)`;

            setTimeout(() => {
                track.style.transition = "transform 0.5s ease";
                track.style.transform = "translateX(0)";
            }, 20);
        });
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// DROPDOWN OPEN / CLOSE (ACCORDION) ---------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const drops = document.querySelectorAll(".drop");
    drops.forEach(function(drop){
        drop.addEventListener("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            const parent = this.closest(".super_ser, .super_pag");

            const isActive = parent.classList.contains("active");

            if (isActive) {
                parent.classList.remove("active");
            } else {
                document.querySelectorAll(".super_ser, .super_pag")
                    .forEach(menu => menu.classList.remove("active"));

                parent.classList.add("active");
            }

        });
    });

});
// -------------------------------------------------------------------------------------------------------------------------------------

// Construction time -------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date(2026, 4, 6, 0, 0, 0).getTime();

    const circles = {
        days: document.getElementById("daysCircle"),
        hours: document.getElementById("hoursCircle"),
        minutes: document.getElementById("minutesCircle"),
        seconds: document.getElementById("secondsCircle")
    };

    const fullDash = 408;

    function updateTimer() {
        const now = new Date().getTime();
        const gap = now - startDate;

        if (gap < 0) return;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if(daysEl && hoursEl && minutesEl && secondsEl){
            daysEl.innerText = d;
            hoursEl.innerText = h;
            minutesEl.innerText = m;
            secondsEl.innerText = s;
        }

        if (circles.days) {
            const dayProgress = (d % 365) / 365;
            const hrProgress  = h / 24;
            const minProgress = m / 60;
            const secProgress = s / 60;

            circles.days.style.strokeDashoffset    = fullDash * (1 - dayProgress);
            circles.hours.style.strokeDashoffset   = fullDash * (1 - hrProgress);
            circles.minutes.style.strokeDashoffset = fullDash * (1 - minProgress);
            circles.seconds.style.strokeDashoffset = fullDash * (1 - secProgress);
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});
// -------------------------------------------------------------------------------------------------------------------------------------


// Popup notification ------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("popup");
    const popupMsg = document.getElementById("popupMessage");
    const popupClose = document.getElementById("popupClose");

    if (popup && popupMsg && popupClose) {

        window.showPopup = function(message) {
            popupMsg.innerText = message;
            popup.classList.add("show");
        };

        popupClose.addEventListener("click", () => {
            popup.classList.remove("show");
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.remove("show");
            }
        });
    }

    const successData = document.getElementById("success-data");
    if (successData) {
        const message = successData.getAttribute("data-message");
        showPopup(message);
    }

    const subData = document.getElementById("success-subscribe");
    if (subData) {
        const message = subData.getAttribute("data-message");
        showPopup(message);
    }


});
// -------------------------------------------------------------------------------------------------------------------------------------

// footer year  ------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) {
        const now = new Date();
        year.innerText = now.getFullYear();
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// SCROLL ------------------------------------------------------------------------------------------------------------------------------
const topBtn = document.querySelector(".top");

if (topBtn) {
    window.addEventListener("scroll", function(){
        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });
}
// -------------------------------------------------------------------------------------------------------------------------------------