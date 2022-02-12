//making random color generator function
function colorGenerator(){

    return '#' + Math.random().toString(16).substr(-6); 
}

//changes color of webpage
const changeColor = document.querySelector(".changeBtn").onclick = function(){
    //get clrname element from webpage
    const clrname = document.querySelector(".clr--name");
    document.body.style.backgroundColor = colorGenerator();
    //changes heading of webpage
    clrname.innerText = colorGenerator();
}

