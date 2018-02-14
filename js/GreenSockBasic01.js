$(function () {
    var $box = $('#box');
    //TweenLite.to($box, 0.7, {left:0, x:0});
    // TweenLite.from($box, 2, {
    //     x: '-=200px', // -200是x为-200， -=原来基础上再-200
    //     autoAlpha: 0
    // })

    // TweenLite.set($box, {
    //     x : '-=200px',
    //     scale : 0.3
    // });
    // TweenLite.set($box, {
    //     x : '+=100px',
    //     scale : 0.6,
    //     delay : 1
    // });
    // TweenLite.set($box, {
    //     x : '-50%',
    //     scale : 1,
    //     delay : 2
    // });

    // TweenLite.fromTo($box,2, {
    //     x : '-=200px'
    // }, {
    //     x : 150
    // })

    TweenLite.fromTo($box, 2, {
        y : '-=200px'
    }, {
        y : 100,
        ease : Bounce.easeOut,
        onStart : start,
        onUpdate: update,
        onComplete : complete
    })

    function start() {
        console.log('start');
    }

    function update() {
        console.log('update')
    }

    function complete() {
        console.log('complete')
    }



});