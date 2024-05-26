# Ejercicio 1 – Preguntas teóricas sobre formularios Angular (1.5 puntos)

## a) Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Los **formularios dirigidos por template** en Angular son declarativos, usan `FormsModule`, son asíncronos y la mayor parte de la interacción se produce en la plantilla, siendo adecuados para formularios simples. Los **formularios reactivos** son imperativos, usan `ReactiveFormsModule`, son sincrónicos, requieren más configuración en TypeScript, y la mayor parte de la interacción se produce en el componente, siendo ideales para formularios complejos y dinámicos. Los formularios reactivos ofrecen mayor control, flexibilidad y escalabilidad en aplicaciones grandes.

## b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

**ngModel:** Es una directiva de Angular que establece un enlace bidireccional entre una propiedad del componente y un campo de formulario en el template. Permite sincronizar datos entre el modelo y la vista, facilitando la interacción del usuario con el formulario. Sirve para facilitar la sincronización de datos entre el modelo y la vista en formularios, permitiendo que los cambios realizados por el usuario se reflejen automáticamente en el modelo y viceversa. Para usarlo, lo incluimos en el template HTML con la sintaxis `[(ngModel)]="propiedad"`, donde `propiedad` es una variable del componente que se desea enlazar con el campo de formulario.

**ngModelChange:** Es un evento Angular que se dispara cuando el valor de `ngModel` cambia, permitiendo ejecutar acciones en respuesta a dicho cambio. Puede ser útil para realizar validaciones adicionales o para ejecutar cierta lógica cuando el usuario interactúa con el formulario. Permite responder dinámicamente a los cambios en el valor de los campos de formulario controlados por `ngModel`, realizando acciones adicionales en el componente en respuesta a esos cambios. Para usarlo, se escucha en el template HTML con `(ngModelChange)="funcion($event)"`, donde `funcion` es una función del componente que maneja el cambio. Esto permite ejecutar acciones específicas cada vez que el valor del campo de formulario cambia.

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

Los estados en los formularios dirigidos por templates en Angular son indicadores del estado actual y la validez de los campos de formulario. Sirven para controlar la interacción del usuario, aplicar validaciones dinámicas y proporcionar retroalimentación visual sobre el estado de los campos de formulario. Así podemos saber si es válido o no y por qué no lo es. 

| Estado     | Clases en Angular      |
|------------|------------------------|
| Visitado   | `ng-touched` / `ng-untouched` |
| Cambiado   | `ng-dirty` / `ng-pristine`   |
| Válido     | `ng-valid` / `ng-invalid`    |

## d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?

Los **FormGroup** en la composición de formularios en Angular son conjuntos estructurados de **FormControls**. El estado del **FormGroup** depende del estado de todos sus **FormControls**, de modo que si uno de ellos es inválido, el grupo entero es inválido. Esto facilita la agrupación de partes del formulario y permite una validación por bloques, lo que garantiza una validación más consistente.
