let text =
  " Up to 30% Off on a wide range of skincare essentials. Special Offers on our bestselling moisturizers, serums, and cleansers. Limited-Time Deals on luxurious skincare sets.";
const nasText = text.split("");

for (i = 0; i < nasText.length; i++) {
  nasText[i];
}

function splice() {
  let zadnji = nasText.pop();
  nasText.unshift(zadnji);
  let miao = nasText.join("");

  document.getElementById("rotating-message").innerHTML = miao;
}
setInterval(splice, 250);
