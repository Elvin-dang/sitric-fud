const path = {
    curviness: 1.5,
    autoposition: true,
    values: [
     { x: 0, y: -1080 },
        // { x: 0, y: -180 },
        // {x: window.innerWidth, y: 540},
      


    ]
};
const tween = new TimelineLite();
tween.add(
    TweenLite.to(".trang-1", 1, {
        bezier: path,
        ease: Power1.easeInOut
    })
);








const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration:6000,
    triggerHook:0
})

.setTween(tween)

.setPin('.animation')
.addTo(controller);



