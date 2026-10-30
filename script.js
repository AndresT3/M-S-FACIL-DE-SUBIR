let botonNaranja = document.getElementById("orange");
let botonNegro = document.getElementById("black");
let botonAmarillo = document.getElementById("yellow");

botonNaranja.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange";
});

botonNegro.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

botonAmarillo.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});
