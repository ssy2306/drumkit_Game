var noOfElements=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfElements;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonINNERHTML=this.innerHTML;
        makesound(buttonINNERHTML);
        AddAnimatioms(buttonINNERHTML);
});
}
 
document.addEventListener("keypress",function(event){
    makesound(event.key);
    AddAnimatioms(event.key);
});

function makesound(key){
switch(key){
    case "w": var audio= new Audio('sounds/crash.mp3'); audio.play(); break;
    case "a": var audio= new Audio('sounds/kick-bass.mp3'); audio.play(); break;
    case "s":var audio= new Audio('sounds/snare.mp3'); audio.play(); break;
    case "d":var audio= new Audio('sounds/tom-1.mp3'); audio.play(); break;
    case "j":var audio= new Audio('sounds/tom-2.mp3'); audio.play(); break;
    case "k":var audio= new Audio('sounds/tom-2.mp3'); audio.play(); break;
    case "l":var audio= new Audio('sounds/tom-4.mp3'); audio.play(); break;
 }
}

function AddAnimatioms(key){
    var animate=document.querySelector("."+key);
    animate.classList.add("pressed");
    setTimeout(function(){ 
        animate.classList.remove("pressed");
     },30);
}
// if(i==0){var audio= new Audio('sounds/crash.mp3');}
// else if(i==1){var audio= new Audio('sounds/kick-bass.mp3');}
    
// else if(i==2){var audio= new Audio('sounds/snare.mp3');}
    
// else if(i==3){var audio= new Audio('sounds/tom-1.mp3');}
    
// else if(i==4){var audio= new Audio('sounds/tom-2.mp3');}
// else{
//     var audio= new Audio('sounds/tom-4.mp3');
// }audio.play(); break;