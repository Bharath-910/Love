setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-20px";

    heart.style.fontSize = (20 + Math.random() * 40) + "px";

    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);

}, 300);

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{

to{

transform:translateY(110vh);

}

}
`;

document.head.appendChild(style);