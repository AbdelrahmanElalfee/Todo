
import {useState} from "react";
import PropTypes from "prop-types";
const TodoForm = ({addToDo}) => {

    const [value, setValue] = useState("");

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (value){
            addToDo(value);
            setValue("");
        }
    }

    return (
        <form className='TodoForm' onSubmit={onSubmitHandler}>
            <input type="text" className='todo-input' placeholder="Type your tasks..." onChange={onChangeHandler} value={value} name='textbox'/>
            <button type='submit' className='todo-btn' name='submit'>Add Task</button>
        </form>
    )

}

TodoForm.propTypes  = {
    addToDo: PropTypes.func.isRequired
}

export default TodoForm;
