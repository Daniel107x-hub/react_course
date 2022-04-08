# Sintaxis de exports

Se puede exportar de dos maneras, usando la palabra "default" o no usandola.

- Al usar la palabra default, decimos a JS que donde quiera que se importe ese archivo, importara una unica cosa y sera aquella marcada con "export default ..."
- Si no la usamos, es necesario declarar que se esta importando a la hora de realizar la importacion de modulos y haciendo uso de las llaves {...}
    1. Tambien es posible asignar alias -> import {person as Daniel} from './person.js'
    2. O importar todo usando wildcards -> import * as bundled from './utils.js'