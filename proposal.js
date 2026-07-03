const text = `From the first day I met you,

I admired you and your kindness, your smile, and the way you brighten the people around you

and understand and handle the situation and adjust accordingly and handle that made my life as you know everything

( I already opened up and also adjust with the english cant express everything in english so you know everything that i opened and told you).

Spending time with you has become something I truly wanted.

I wanted to put into this moment.

I don't find the right words to express my feelings but i was opened and what I have shared with you has come from my heart.

Just wanted to express this its from my heart not able to express but the thing is here.

❤️❤️❤️ I LOVE YOU ❤️❤️❤️

Its not the odinary I had something so trying to say this in this way. so please adjust and

I hope you'll share your true feelings with me.

also One important thing Please open up your feelings and feel free

literally waiting for the moment. So please open and share ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        typing.scrollTop = typing.scrollHeight;

        index++;

        setTimeout(typeWriter, 75);

    }

}

window.onload = () => {

    setTimeout(typeWriter, 800);

};

document.getElementById("yes").onclick = function () {

    window.location.href = "success.html";

};

document.getElementById("no").onclick = function () {

    alert("I really hope you'll share your feelings with me whenever you're comfortable. ❤️");

}