var tl = new TimelineLite();
tl.to(".green", 1, {x:550})
.to(".blue",1,{x:550})
.to(".orange",1,{x:550});

tl.pause();

$("#play").click(function () {
   tl.play();
});

$("#pause").click(function () {
   tl.pause();
});

$("#resume").click(function () {
    tl.resume();
});

$("#reverse").click(function () {
    tl.reverse();
});

$("#timeScaleSpeed").click(function () {
    tl.timeScale(5);
});

$("#timeScaleSlow").click(function () {
    tl.timeScale(0.5);
});

$("#seek").click(function () {
    tl.seek(1);
});

$("#restart").click(function () {
    tl.restart();
});

$("#progress").click(function () {
    tl.progress(0.5);
});