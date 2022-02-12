//declaring variable to count number of clicks
var count = 0;

//declaring method to increase click score
let increase = document.querySelector("#Increase").onclick = function(){

    //accessing click counter element
    let counter = document.querySelector("#Count");
    counter.innerText = (count += 1);
    return count;
}

//declaring method to decrease click score
let decrease = document.querySelector("#Decrease").onclick = function(){

    //accessing click counter element
    let counter = document.querySelector("#Count");
    counter.innerText = (count -= 1);
    return count;
}

//declaring method to reset click score
let reset = document.querySelector("#Reset").onclick = function(){

    //accessing click counter element
    let counter = document.querySelector("#Count");
    counter.innerText = 0;
    count = 0;
    return count;

}

