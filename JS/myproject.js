(function(){
    let footerLogo=document.querySelector("#footer_logoid");
    footerLogo.addEventListener("click",function(){
        // alert("test");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })
})();



// let i = 1;
// let slide=document.querySelector("#slideimg");

// setInterval(function(){

//     if(i<5){
        
//         i++;
//     }else{
//         i=1;
//     }

//     slide.src=`./image/index/slide${i}.jpg`;

// },1000);

function changeImg(){
    let i=0;
    let slide=document.querySelector("#slideimg");
    setInterval(function(){
        if(i<5){
            i++;
        }else{
            i=1;
           
        }
        slide.src=`./image/index/slide${i}.jpg`;
    },2000)
}



// changeImg();


// changeImg();

// function changeImg(){
 
//     let slide=document.querySelector("#slideimg");
//     //console.log(slide.src);
//     //for (let i=1;i<6;i++){
//         let i = 1;
//         setInterval(function(){
//             slide.src=`./image/index/slide${i}.jpg`;
//             i++;
//             console.log(i);
//         },3000);
//     //}

   
// }   
        