Para empezar cree un arreglo con todas las palabras que tendran mis parrafos, en este caso seran frutas por lo que los parrafos tendran frutas random.
```java Script
const palabras = [
    "manzana", "naranja", "pera", "uva", "sandía", "banana",
    "kiwi", "melón", "fresa", "arándano", "piña", "cereza",
    "papaya", "mango", "ciruela", "limón", "melocotón", "frambuesa",
    "mandarina", "pomelo", "granada", "guayaba", "higo", "maracuyá",
    "moras", "zarzamora", "aguacate", "plátano", "coco", "guanábana"
];
```
a continuacion tube que crear una funcion la cual es contarPalaras, la cual como su nombre indica esta hecha para contar las palabras del parrafo e inprimirlas en la consola.
```java
function contarPalabras(texto) {
    // Eliminar espacios en blanco al principio y al final
    const textoLimpio = texto.trim();

    // Dividir el texto en palabras usando el espacio como separador
    const palabras = textoLimpio.split(' ');

    // Filtrar las palabras vacías (por ejemplo, si hay espacios dobles)
    const palabrasFiltradas = palabras.filter(palabra => palabra !== '');
    return palabrasFiltradas.length;
}
```
este es el ciclo for, el cual tiene la tarea de generar los 5 parrafos, este consta del body, div y parrafo los cuales seran los encargados de darle forma, despues de estotenemos dos constantes, la que se encarga de generar las palabras random y los parrafos que incluiran esta informacion.
```java
for(let i=0; i<5; i++){
    const body =document.querySelector('body')
    const div= document.createElement('div')
    const parrafo = document.createElement('p')

    // Generar texto aleatorio de longitud entre 50 y 100
    const randomLength = Math.floor(Math.random() *51 ) +50;
    const palabrasAleatorias = generarTextoAleatorio(randomLength);
    //agregar o asignar hijos y texto al parrafo
    parrafo.textContent = palabrasAleatorias
    div.appendChild(parrafo);
    body.append(div);
    //cuenta e imprime el numero de palabras del parrafo
    const numeroPalabras = contarPalabras(palabrasAleatorias);
    console.log(`Párrafo ${i + 1} - Palabras: ${numeroPalabras}`);
}
```
al final tenemos la funcion generarTextoAleatorio, esta funcion se encarga de elegir una palabra random por medio de un ciclo for y despues la agrega al arreglo.
```java
// Función para generar texto aleatorio
function generarTextoAleatorio(length) {
    let resultado = []
    for (let i = 0; i < length; i++) {
        // Elegir una palabra aleatoria del arreglo
        const randomIndex = Math.floor(Math.random() * palabras.length);
        resultado.push (palabras[randomIndex])
    }
    return resultado.join(' ');
}
```
