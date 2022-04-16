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