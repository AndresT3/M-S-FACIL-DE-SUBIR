let botonRojo = document.getElementById("orange");
let botonAzul = document.getElementById("black");
let botonVerde = document.getElementById("silver");

botonRojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightorange";
});

botonAzul.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblack";
});

botonVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightsilver";
});
