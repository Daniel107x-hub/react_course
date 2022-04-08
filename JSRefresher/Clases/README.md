# Clases en JS

- Las clases son una manera de encapsular el comportamiento de objetos.
- Siguen una nomenclatura similar a Java
- En una clase es necesario definir el metodo **constructor**, el cual sera llamado al crear una nueva instancia de la clase.
- De manera similar, las clases pueden heredar de otras clases haciendo uso de la palabra ***extends***.
    -Lo primero que se debe hacer en el constuctor de las sublases, es llamar al metodo **super()**, lo cual llamara al constructor de la clase padre

## Next Gen Classes

A partir de ES7, podemos omitir el metodo contructor y asignar una propiedad directamente en la clase

Los metodos se pueden asignar tambien haciendo uso de arrow functions