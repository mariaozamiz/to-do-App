# To-do List

**To-do List** es una aplicación web sencilla creada con **React** para hacer un seguimiento de tareas diarias: añadir tareas, tachar aquellas ya completadas y filtrar la lista por estado (completadas, pendientes o todas). Las tareas introducidas se guardan en el localStorage, por lo que la información se mantendrá en la página aunque cerremos el explorador.

![Captura de pantalla](https://github.com/mariaozamiz/to-do-App/blob/master/src/images/captura_pantalla_todo_list.png)

He creado este proyecto siguiendo los pasos de @developedbyed en este [tutorial](https://www.youtube.com/watch?v=pCA4qpQDZD8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=10).

## Adaptaciones

En mi versión, he incluido un condicional a la función encargada de añadir tareas al listado para evitar que puedan agregarse tareas sin texto. También he optado por otra forma de generar identificadores: en lugar de usar ```Math.Random()```, instalé la librería [uuid](https://github.com/uuidjs/uuid), que genera id únicos.

```
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ setInputText, inputText, todos, setTodos, setStatus }) {
    const inputTextHandler = (ev) => {
        setInputText(ev.target.value);
    };
    const submitTodoHandler = (ev) => {
        ev.preventDefault();
        if (inputText.length > 0) {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: uuidv4(),
                },
            ]);
            setInputText('');
        }
    };
```
