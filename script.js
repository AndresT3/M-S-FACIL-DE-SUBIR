let botonRojo = document.getElementById("rojo");
let botonAzul = document.getElementById("azul");
let botonVerde = document.getElementById("verde");

botonRojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightorange";
});

botonAzul.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblack";
});

botonVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightsilver";
});
