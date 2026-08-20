let balloonsClicked = 0;
function startSurprise() {

    document.getElementById("surpriseBtn").style.display = "none";

    const balloonArea = document.getElementById("balloonArea");

    balloonArea.innerHTML = `
        <h3 class="special-title">🎈 Touch Each Balloon 🎈</h3>

        <div class="balloons">

            <div class="balloon-item">
                <div class="surprise-balloon balloon-pink"
                     onclick="popBalloon(this, 'YOU')">
                    🎈
                </div>
            </div>

            <div class="balloon-item">
                <div class="surprise-balloon balloon-blue"
                     onclick="popBalloon(this, 'ARE')">
                    🎈
                </div>
            </div>

            <div class="balloon-item">
                <div class="surprise-balloon balloon-yellow"
                     onclick="popBalloon(this, 'SO')">
                    🎈
                </div>
            </div>

            <div class="balloon-item">
                <div class="surprise-balloon balloon-purple"
                     onclick="popBalloon(this, 'SPECIAL ❤️')">
                    🎈
                </div>
            </div>

        </div>
    `;
}


function popBalloon(balloon, word) {

    if (balloon.classList.contains("popped")) {
        return;
    }

    balloon.classList.add("popped");

    balloon.innerHTML = `
        <span class="special-text">${word}</span>
    `;

    balloonsClicked++;

    if (balloonsClicked === 4) {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

function showGift() {
    document.getElementById("balloonArea").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("giftArea").style.display = "block";
}
function openGift() {

    const giftBox = document.getElementById("giftBox");
    const finalMessage = document.getElementById("finalMessage");

    giftBox.classList.add("gift-break");

    setTimeout(() => {

        giftBox.innerHTML = `
            <div class="broken-gift">
                <span>🎁</span>
                <span>✨</span>
                <span>💖</span>
                <span>🎉</span>
            </div>
        `;

        finalMessage.innerHTML = `
            ✨ Surprise! ✨<br><br>
            You are one of the most special people in my life! ❤️<br><br>
            May your birthday be filled with happiness, love<br>
            and beautiful memories! 🎂🥰
        `;

        finalMessage.style.display = "block";

    }, 700);
}

function createHearts() {
    const area = document.getElementById("hearts");

    area.innerHTML = "";

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "floating-heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 3 + "s";

        area.appendChild(heart);
    }
}