gsap.from(".logo", {
  y: -100,
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
})
gsap.from("#sun,#manu-bar", {
  y: -100,
  duration: 0.5,
  delay: 0.6,
  opacity: 0,
  stagger: 0.3
})
gsap.from(".hero .experience", {
  y: 20,
  duration: 1,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero .experience",
    scroller: "body",
    //markers: true,
    start: "top 90%",
    
  },
})
gsap.from(".hero #huggies,#tata,#sony,#star,#bmw,#p_g", {
  duration: 0.5,
  stagger: 0.1,
  opacity: 0.5,
  scale: 0,
  scrollTrigger: {
    trigger: ".hero .experience",
    scroller: "body",
   // markers: true,
    start: "top 90%",
    scrub: true,
  },
})
gsap.from(".hero .about", {
    y: 20,
  duration: 1,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero .about",
    scroller: "body",
   // markers: true,
    start: "top 85%",
    
  },
})
var sun = document.querySelector("#sun");
var count = 0;
sun.addEventListener("click", function() {
  document.querySelector(".navbar").style.backgroundColor = "#fff";
  if (count == 0) {
    document.querySelector(".main").style.backgroundColor = "#000";
    document.querySelector(".hero").style.backgroundColor = "#454545";
    document.querySelector(".hero").style.color = "#dadada";
    count = 1;

  } else {
    document.querySelector(".navbar").style.backgroundColor = "rgba(255,255,255,0.299)";
    document.querySelector(".navbar").style.dackdropFilter = "blur(15px)";
    document.querySelector(".hero").style.backgroundColor = "rgba(255,255,255,0.299)";
    document.querySelector(".hero").style.dackdropFilter = "blur(5px)";
    document.querySelector(".hero").style.color = "#000";
    count = 0;
  }
})