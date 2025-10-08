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


![Imagen](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Filustraciones%2Favi%25C3%25B3n&psig=AOvVaw3XyyfoVe1mp2k7dS1rmOWg&ust=1759974333707000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiPsbq9k5ADFQAAAAAdAAAAABAE)