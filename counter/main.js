let score = 0;


function Add(){
    score++;
    UpdateData()
    console.log(score);
}
function Remove(){
    if(score <= 0)
    console.log("Score is 0, u cannot remove")
else
    score = score - 1;
    UpdateData()
    console.log(score);
}
function Reset(){
    score = 0;
    console.log(score);
    UpdateData()
}
function UpdateData(){
    let h = document.querySelector("#Score")
    h.innerHTML=score;
}
