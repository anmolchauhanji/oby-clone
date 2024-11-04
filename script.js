var tl = gsap.timeline()
tl.from(".line1 h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.3
})
tl.from("#line1-part1 h3,#line1-part1 h4, .line1 h2",{
    opacity:0,
    onStart:function(){
        var  count = 0
        var html = document.querySelector("#line1-part1 h3")
   var interval=     setInterval(() => {
            if (count<100) {
              html.innerHTML =  count++
            } else {
              html.innerHTML=  count
              clearInterval(interval);
            }
        }, 25);
    }
})
tl.to("#loader",{
    opacity:0,
    delay:3,
    duration:
    0.3
})
tl.from("#page1",{
    y:1200,
    opacity:0,
    delay:1,
    duration:.3

})
tl.from("#loader",{
    display:none
})