function calcular(base, altura){

    //let para variable de ámbito local (recomendado)
    //var para ámbito global

    //Constante: Valor que una vez asignado nunca cambia
     const area=base*altura;
     const perimetro=2*(base+altura);

     //Valores que retorna la función a quien la llama
     return [area, perimetro];    
}

function calcular_hipotenusa(a, b){
    //Math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+b**2);    
    return hipotenusa;
}

function calculadora(a,b){

    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);
}

function media(){

    //alert(), prompt(): Usarla con precaución    
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');

    //Casting: Transformar de manera explícita el tipo
    //de dato de una variable en js 
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= (x+y+z)/3;
    console.log(promedio);
    return promedio;
    
}
