var button = document.getElementById("button");

button.addEventListener("click", function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
document.body.style.backgroundColor = color;
});