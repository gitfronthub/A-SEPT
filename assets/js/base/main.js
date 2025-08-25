const list = document.getElementById("list");
const btnAct = () => {
    console.log("ok");
    list.classList.toggle("active");
    opacity.classList.toggle("active");
}

const text = "смотреть видео производства –"; // aylana bo‘ylab yoziladigan matn
const circle = document.getElementById("circle");

for (let i = 0; i < text.length; i++) {
  const char = document.createElement("span");
  char.innerText = text[i];
  char.style.transform = `rotate(${i * (360 / text.length)}deg)`;
  circle.appendChild(char);
}