

let multi = document.querySelector(".multi");
let click = document.querySelector("#click");
let input = document.querySelector("#input");

click.addEventListener("click", function(){
    for (i = 1; i <= 10; i++) {
        console.log(input.value + " x " + i +" = " +i*input.value);
    }
});




console.log("hello");