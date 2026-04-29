for (let i = 0; i < 5; i++) {
    alert("Cuenta: " + i);
    //alert("mira... mi dedo xd");
}

let temperatura=prompt("coloca una temperatura");
if (temperatura > 30) {
        console.log("Hace mucho calor.");
    } else if (temperatura > 20) {
        console.log("La temperatura es agradable.");
    } else {
        console.log("Hace frío.");
    }
 

 
    let fruta = prompt("elije una fruta Pera o Manzana");
 
switch (fruta) {
    case "Pera":
        console.log("Opción uno");
        break;
    case "Manzana":
        console.log("Opción dos"); // This will execute
        break;
    default:
    console.log("Error");
}