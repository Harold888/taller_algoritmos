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

function calcular_tiempo(){
    
    let v1= parseInt(document.getElementById("x").value);
    let v2= parseInt(document.getElementById("y").value);
    let d= parseInt(document.getElementById("z").value);

    let t=d/(v1-v2);
    let tf=t*60

    let resultado= document.getElementById("resultado");
    resultado.value= tf;
    return tf;
}
 
function notas(){

    let notaParcialUno = parseFloat(document.getElementById("notaParcialUno").value);
    let notaParcialDos = parseFloat(document.getElementById("notaParcialDos").value);
    let notaParcialTres = parseFloat(document.getElementById("notaParcialTres").value);
    let notaExamen = parseFloat(document.getElementById("notaExamen").value);
    let notaTrabajo = parseFloat(document.getElementById("notaParcialTres").value);
    let notaParcial=(notaParcialUno+notaParcialDos+notaParcialTres)/3;
    let notaFinal =(notaParcial*0.55)+(notaExamen*0.3)+(notaTrabajo*0.15);

    console.log(notaFinal);
    return notaFinal;
}