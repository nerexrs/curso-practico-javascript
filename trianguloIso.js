function TrianguloIsoceles(lado1, lado2, base) {
    if (lado1===lado2 && lado1 != base || lado1===base && lado1 != lado2) {
        console.log("El triángulo es isósceles");
        const altura = Math.sqrt(lado1**2 - (base**2/4));
        const baseFuncion = base/2; 
        const altura2 = Math.sqrt(lado1**2 - baseFuncion**2);
        // const lado1Cuadrado = Math.pow(lado1, 2)
        // const baseCuadrado = Math.pow(base, 2)
        const altura3 = Math.sqrt(lado1Cuadrado - baseCuadrado);
        console.log("La altura de tu triángulo es: " + altura);
        console.log("La altura de tu triángulo es: " + altura2);
        // console.log("La altura de tu triángulo es: " + altura3);
    } else {
        console.log("El triángulo no es isósceles");
    }
 }
 TrianguloIsoceles(2, 2, 3)