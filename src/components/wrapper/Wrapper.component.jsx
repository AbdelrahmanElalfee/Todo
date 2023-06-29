
import { useState } from "react";
import TodoForm from "../form/Form.component.jsx";
import Task from "../task/Task.component.jsx";
export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos([...todos, { task: todo }]);
    }

    const onDeleteTaskHandler = (id) => {
        setTodos(todos.filter((todo, index) => index !== id));
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addToDo={addToDo}/>
            {
                todos.map((todo, index) => (
                    <Task task={todo} key={index} onDelete={() => onDeleteTaskHandler(index)}/>
                ))
            }
        </div>
    )
}
