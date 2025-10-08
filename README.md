# Proyecto-C3-2025
## Subtítulo
### Subtítulo de segundo nivel
Repositorio para los ejercicios del curso de **proyecto integrador** del tercer cuatrimestre del 2025.

*Cursiva*
**Negrita**

- item 1
- item 2
- item 3

1. Paso 1
2. Paso 2
3. Paso 3

> Cita textual
> "..........................."

La función `Math.pow()` permite elevar un valor a una potencia

### Bloque de código

```javascript
function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura, 2);

    document.getElementById("txtImc").value = imc.toFixed(2);
    
    let clasificacion = clasificacionImc();
    document.getElementById("txtClasificacion").value = clasificacion;

}
```

#### Tablas ✈️

|Variable|Descripción|Valor inicial|
|--------|-----------|-------------|
| peso | Peso de la persona | 0 |
|estatura | estatura de la persona | 0 |


[Texto](https://www.google.com)

![Imagen](https://media.istockphoto.com/id/1414160809/es/vector/icono-de-avi%C3%B3n-pictograma-de-vuelo-de-avi%C3%B3n-transporte-s%C3%ADmbolo-de-viaje.jpg?s=612x612&w=0&k=20&c=aaX-F7oeZ6_S-7e_JTOaojhhmY4yLLko_JdwGLUZJMQ=)