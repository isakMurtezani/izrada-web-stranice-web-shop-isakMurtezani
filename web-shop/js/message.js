let text = "piaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiaopiao"
const nasText = text.split("")

for (i = 0; i < nasText.length; i++) {
    nasText[i];
}

function splice() {

    let zadnji = nasText.pop();
    nasText.unshift(zadnji);
    let miao = nasText.join("");


    document.getElementById("rotating-message").innerHTML = miao;
    console.log(miao);
}
setInterval(splice, 250);
