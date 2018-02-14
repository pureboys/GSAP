TweenLite.set('.wrapper', {visibility: 'visible'});

var tl = new TimelineMax();
tl.staggerFrom(".list li", 10,{
    opacity : 0,
    cycle : {
        x : [-100,100],
        ease :  function (i) {
            return Back.easeOut.config(i * 0.3)
        }
    }
}, 0.1);