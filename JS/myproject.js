// function logoTop(){
// document.querySelector("#footer_logoid").addEventListener("click",function(){
//     Window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// })
// }
// logoTop();
//這是測試用的
(function () {

    let btn=document.querySelector("#float");

    btn.addEventListener("click",function(){
        topFunction();
        // alert("hi");
    })

    window.onscroll = function(){
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    function topFunction() {
        document.documentElement.scrollTop = 0; 
    }
})();
