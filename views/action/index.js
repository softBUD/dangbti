window.onload = function () {
    let introBg = document.querySelector(".intro-container");
    let title = document.querySelector("h1");
    let introbtn = document.querySelector(".intro-button");
    let introbottom = document.querySelector(".intro-bottom");
    let btnimage = document.querySelector(".button-img");

    window.addEventListener("scroll", function(event) {
        let scroll = this.scrollY;

        introBg.style.transform = "translateY(" + scroll/3 + "px)";
        title.style.transform = "translateY(" + scroll/1.7 + "px)";
    })

    introbtn.addEventListener("mouseover", function(event){
        btnimage.src="../images/smiledog.png";
    })

    introbtn.addEventListener("mouseout",function(event) {
        btnimage.src="../images/heartdog.png";
    })

    setTimeout(function(){
        document.querySelector('.intro-button-text').scrollIntoView({behavior:'smooth',block:"center"})
    },2000);
}