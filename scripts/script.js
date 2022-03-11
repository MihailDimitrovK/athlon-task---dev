const arrows = document.getElementsByClassName("arrows");
const item = document.getElementsByClassName("item");

let l = 0;


arrows[0].onclick = () => {
    
    l--;
    for (var i of item) {
        if (l == 0) { i.style.left = '0px'; }
        if (l == 1) { i.style.left = '-217px'; }
        if (l == 2) { i.style.left = '-434px'; }
        if (l == 3) { i.style.left = '-651px'; }
        if (l < 0) { l = 0; }
    }
}

arrows[1].onclick = () => {
    l++;
    for (var i of item) {
        if (l == 0) { i.style.left = '0px'; }
        if (l == 1) { i.style.left = '-217px'; }
        if (l == 2) { i.style.left = '-434px'; }
        if (l == 3) { i.style.left = '-651px'; }
        if (l == 4) { i.style.left = '-868px'; }
        if (l > 4) { l = 4; }
    }
}

