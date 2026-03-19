// menu-------------------------------------------------------------------------------------------------------------------------------
const menu = document.getElementById("menuBar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.toggle("open");
    if(menu.classList.contains("open")){
        menuBtn.textContent = "✖";
    }else{
        menuBtn.textContent = "☰";
    }
});
/* click anywhere outside */
document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !menuBtn.contains(e.target)){
        menu.classList.remove("open");
        menuBtn.textContent = "☰"; 
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// form--------------------------------------------------------------------------------------------------------------------------------
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
            e.preventDefault();

            let User_Name = nameInput.value.trim();
            let User_Mobile = mobInput.value.trim();
            let User_Message = msgInput.value.trim();

            let isFormValid = true;
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

            // SUCCESS
            if (isFormValid) {
                const User_Info = {
                    "Full Name": User_Name,
                    "Mobile Number": User_Mobile,
                    "Message": User_Message
                };

                alert(`Thank you ${User_Name}... Your form Submitted Successfully ✅`);
                console.log(User_Info);
                MyForm.reset();
                document.querySelectorAll("#MyData input, #MyData textarea").forEach(field => {
                    field.classList.remove("error","success");
                });
            }
        });
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// subscribe-------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let SubBtn = document.getElementById("AgreeForm");
    if (SubBtn) {
        SubBtn.addEventListener("submit", function (e) {
            e.preventDefault();
            let emailInput = document.getElementById("uemail");
            let User_Mail = emailInput.value.trim();
            let err_mail = document.getElementById("mail_err");

            let isMailValid = true;
            err_mail.textContent = "";

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!User_Mail) {
                err_mail.textContent = "Please fill your Mail ID";
                emailInput.classList.add("error");
                emailInput.classList.remove("success");
                isMailValid = false;
            }
            else if (!emailPattern.test(User_Mail)) {
                err_mail.textContent = "Enter a valid Mail ID";
                emailInput.classList.add("error");
                emailInput.classList.remove("success");
                isMailValid = false;
            }
            else {
                emailInput.classList.remove("error");
                emailInput.classList.add("success");
            }

            if (isMailValid) {
                console.log({ "Email ID": User_Mail });
                alert("Thank you! Your Mail Submitted Successfully ✅");
                SubBtn.reset();
                emailInput.classList.remove("error","success");
            }
        });
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------

// recent project-------------------------------------------------------------------------------------------------------------------------------
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

// DROPDOWN OPEN / CLOSE (ACCORDION)-------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".drop").forEach(drop => {
        drop.addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            const parent = this.closest(".super_ser, .super_pag");
            // if already open → close it
            if(parent.classList.contains("active")){
                parent.classList.remove("active");
            } 
            else{
                // close all other dropdowns
                document.querySelectorAll(".super_ser, .super_pag")
                .forEach(menu => menu.classList.remove("active"));
                // open current one
                parent.classList.add("active");
            }
        });
    });
});
// -------------------------------------------------------------------------------------------------------------------------------------

// SCROLL -------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener("scroll", function(){
    const topBtn = document.querySelector(".top");
    if(window.scrollY > 300){
        topBtn.style.display = "flex";
    } 
    else{
        topBtn.style.display = "none";
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------