const target = "scroll down";
const text = document.querySelector(".typing");
let i = 0;
// 타이핑 액션
function typing(){
    let txt = target[i++];
    text.innerHTML += txt;
    if (i > target.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)