
window.onload = function () {
    const introBg = document.querySelector(".intro-container");
    const title = document.querySelector(".titles");
    const introbtn = document.querySelector(".intro-button");
    const btnimage = document.querySelector(".button-image")
    const scrollbtn = document.getElementById("scroll-top");

    scrollbtn.classList.add("show"); //scrolltop 요소 미표시

    window.addEventListener("scroll", function(event) {
        let scroll = window.pageYOffset
        introBg.style.transform = "translateY(" + scroll/3 + "px)";
        title.style.transform = "translateY(" + scroll/1.7 + "px)";
        if(550 <= scroll) {
          scrollbtn.classList.remove("show"); //scrolltop 요소 표시
          } else {
            scrollbtn.classList.add("show");
          }
        
    })

    introbtn.addEventListener("mouseover", function(event){
      btnimage.src="../images/smiledog.png";
    })

    introbtn.addEventListener("mouseout",function(event) {
      btnimage.src="../images/heartdog.png";
    })

    scrollbtn.addEventListener("click", function(event){
      window.scrollTo({top:0, behavior:"smooth"})
    })
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