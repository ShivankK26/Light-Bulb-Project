//1. User clicks on 'turn on' image changes to lighton.

//2. User clicks on 'turn off' image changes to lightoff.

function light(num){

    var picture;

    if(num == 0){
        picture = "images/lightoff.png"
    }
    else{
        picture = "images/lighton.png"
    }
    document.getElementById("myImage").src = picture;

}