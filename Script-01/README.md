para empezar cree la constante coloresRandom la cual esta encargada de crear los contenedores de forma a leatoria con 
Math.random.
despues de esto use una sentencia if que lo que hace es que si un color se repite lo va a sacar.
```java
const coloresRandom =[];
while( coloresRandom.length<10){
    const color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if(!coloresRandom.includes(color)){
        coloresRandom.push(color);
    }
}
```
ya con el while hecho para generar los colores random solo fue cuestion de crear un ciclo for para que este los 
estubiera generando hasta que fueran 10 contenedores, los contenedores cuentan con un tamanio de 100 px y cada uno contara con un color distinto.

```java
for(var i = 0; i< 10; i++){
    const contenedor = document.createElement('div');
    contenedor.style.width = '50x'
    contenedor.style.height = '100px'
    contenedor.style.backgroundColor = coloresRandom[i];
    document.body.appendChild(contenedor)
 
}
```