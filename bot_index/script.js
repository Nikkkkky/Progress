function Move(obj, max_l, min_l, max_t, min_t){
    var object = document.getElementById(obj);
    var position_l = Math.random() * (max_l - min_l) + min_l;
    var position_t = Math.random() * (max_t - min_t) + min_t;
    object.style.left = position_l + "px";
    object.style.top = position_t + "px";
}

function aShow(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
}

function bShow(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    a.style.visibility = "hidden";
    b.style.visibility = "visible";
    c.style.visibility = "hidden";
}

function cShow(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    c.style.visibility = "visible";
}

function main(){
    setTimeout(function(){
        document.body.classList.add('body_visible');
    }, 1);
}

main();