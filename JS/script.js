
var inputTarget = document.getElementById("input-box");
var buttonTraget = document.querySelector(".btn");
var paraTarget = document.querySelector(".start");

var store = parseInt(inputTarget.innerHTML);

var count = 0;
buttonTraget.addEventListener("click", function(){
     const inputValue = inputTarget.value;
     var counter = setInterval(function(){
        count++;
        paraTarget.textContent = count;
        if(count === Number(inputValue))
        clearInterval(counter);
    }, 1000);
});









