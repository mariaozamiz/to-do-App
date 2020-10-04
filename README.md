# To-do App

**To-do App** es una aplicación web sencilla creada con **React** para hacer un seguimiento de tus tareas diarias: añade tareas, complétalas y filtra tu lista por estado.

![Captura de pantalla](https://github.com/mariaozamiz/to-do-App/blob/master/src/images/captura_pantalla_todo_list.png)

## Atribución

He creado este proyecto siguiendo los pasos de @developedbyed en este [tutorial](https://www.youtube.com/watch?v=pCA4qpQDZD8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=10).

En mi versión, he incluido un condicional a la función encargada de añadir tareas al listado para evitar que pudiesen agregarse tareas sin texto:

```javascript
const submitTodoHandler = (ev) => {
    ev.preventDefault();
    if (inputText.length > 0) {
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 100000),
            },
        ]);
        setInputText('');
    }
};
```
