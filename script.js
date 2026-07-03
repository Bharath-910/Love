const button = document.getElementById("startBtn");

button.addEventListener("click", function () {

    document.body.style.transition = "1s";
    document.body.style.background = "linear-gradient(135deg,#ff4e50,#fc913a)";

    document.querySelector("h1").innerHTML = "One More Click ❤️";

    document.querySelector(".message").innerHTML =
        "Thank you for accepting and coming to my life and also opening this surprise.<br><br>I have something important to tell you.<br><br>I built this little website because I wanted to tell you something in a way that's special to us.";

    button.innerHTML = "Continue ❤️";


    button.onclick = function () {

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "proposal.html";

        }, 600);

    };

});