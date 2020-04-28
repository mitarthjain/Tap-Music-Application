window.addEventListener('load', ()=>{
const sounds =document.querySelectorAll(".sound");
const pads=document.querySelectorAll(".pads div");
const visual=document.querySelector('.visual');
const colors=["#60d394","#60d394","#60d390","#60d394","#60d394","#60d394"];

//console.log(sounds);
//lets get sound
pads.forEach((pad,index) =>{
    pad.addEventListener('click',function(){
     sounds[index].currentTime = 0;
        sounds[index].play();
        
    });
});
//create a function that makes bubbles

});
