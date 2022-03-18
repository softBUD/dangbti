
window.onload = function () {
    let introBg = document.querySelector(".intro-container");
    let title = document.querySelector(".titles");
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
        document.querySelector('.intro-button-text').scrollIntoView({behavior:'smooth',block:"start"})
    },2000);

    //텍스트 모션

    let titlecon = document.querySelector(".title-container");
    titlecon.innerHTML = titlecon.textContent.replace(/\S/g, "<div class='title-text'>$&</div>");

    anime.timeline({loop: true})
  .add({
    targets: '.titles .title-text',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.titles',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

}