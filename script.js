let scrollRevealOption = {
    distance: "15px",
    duration: 300,
};
ScrollReveal().reveal(".fullContainer", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".fullContainer", {
     ...scrollRevealOption,
     delay: 400,
});
let inp = document.querySelector(".inp");
let eyeImage = document.querySelector(".eyeImage");
let result = document.querySelector(".result")
inp.addEventListener("input",()=>{
let input = inp.value;
if(input.length <= 6){
result.innerHTML = `weak password`;
result.classList.add("text-red-600");
}else if(input.length >= 7 && input.length <= 14){
result.innerHTML = `medium password`;
result.classList.add("text-green-600");
}else{
result.innerHTML = `strong password`;
result.style.color = "black";
}
});
eyeImage.addEventListener("click",()=>{
let input = inp;
if(input.type === "password"){
input.type = "text";
eyeImage.src = "https://cdn-icons-png.flaticon.com/128/709/709612.png";
}else{
inp.type = "password";
eyeImage.src = "https://cdn-icons-png.flaticon.com/128/2767/2767146.png";
}
});




