# Ejercicio 4 – Preguntas teóricas sobre formularios reactivos Angular (1.5 puntos)

## a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

- **FormControl:** Representa directamente un elemento de formulario individual en el template de Angular. Puede usarse para rastrear, validar y manipular los valores de los campos de entrada. Permite asignar valores iniciales y aplicar validadores tanto de sincronización como de asincronía. Cada formulario reactivo se compone de un conjunto de **FormControl**, los cuales pueden ser agrupados para formar un **FormGroup**.

- **FormGroup:** Se utiliza para agrupar campos relacionados que pertenecen al mismo conjunto semántica o lógicamente. Permite comprobar el valor del formulario en su conjunto, facilita la validación y el seguimiento del estado de un grupo de controles relacionados. Ayuda a estructurar los datos de manera organizada y coherente en el formulario.

- **FormBuilder:** Es un servicio proporcionado por Angular que simplifica la creación de elementos **FormGroup** y **FormControl**. Permite crear **FormGroup** y **FormControl** de forma más eficiente y legible, evitando la repetición de código. No elimina los elementos **FormGroup** y **FormControl**, sino que los utiliza internamente para construir el formulario. Se utiliza para construir y configurar formularios reactivos, creando instancias de **FormGroup** (grupos de controles) y **FormControl** (controles individuales) con valores iniciales y validadores.

## b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

| **Validador** | **Descripción**                                            |
|---------------|------------------------------------------------------------|
| **required**  | Indica que un campo es obligatorio                         |
| **minLength** | Comprueba si el valor tiene el número mínimo de caracteres requeridos |
| **maxLength** | Comprueba si el valor no supera un máximo de caracteres    |
| **pattern**   | Verifica si el valor coincide con un patrón específico      |
| **min**       | Establece el valor mínimo de un dato numérico              |
| **max**       | Establece el valor máximo de un dato numérico              |
| **email**     | Comprueba si el valor sigue el patrón de correo electrónico |

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

Los estados en los formularios reactivos se refieren al estado actual de un control o grupo de controles en un formulario. Estos estados incluyen:

- **Pristine:** Indica que el control no ha sido tocado o modificado por el usuario.
- **Dirty:** Indica que el valor del control ha sido modificado por el usuario.
- **Touched:** Indica que el control ha sido enfocado y luego perdido el foco, es decir, el usuario ha interactuado con él.
- **Untouched:** Indica que el control no ha sido enfocado ni perdido el foco.
- **Valid:** Indica que el valor del control cumple con todas las validaciones definidas.
- **Invalid:** Indica que el valor del control no cumple con alguna de las validaciones definidas.
