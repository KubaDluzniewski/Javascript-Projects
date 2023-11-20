const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("randColorbtn")
function randomNumberGenerator(){
    return Math.floor(Math.random() * hex.length);
}

function changeColor(){
    let hexColor = "#";
    for (let i = 0; i<6; i++)
    hexColor += hex[randomNumberGenerator()]
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
}
