var i = 0;

function changeBackground(i) {
    var colors = ["red", "green", "blue", "purple", "orange"];
    if (i == colors.length) {
        i = 0;
    }
    color = colors[i];
    document.body.style.backgroundColor = color;
    console.log(i);
    return i;
}

function Increment() {
    i = changeBackground(i);
    i++;
}