const coloresRandom =[];
while( coloresRandom.length<10){
    const color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if(!coloresRandom.includes(color)){
        coloresRandom.push(color);
    }
}
//ciclo
for(var i = 0; i< 10; i++){
    const contenedor = document.createElement('div');
    contenedor.style.width = '50x'
    contenedor.style.height = '100px'
    contenedor.style.backgroundColor = coloresRandom[i];
    document.body.appendChild(contenedor)
 
}
