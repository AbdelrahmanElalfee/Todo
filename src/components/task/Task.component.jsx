
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

const Task = ({task: {task}, onDelete}) => {

    return (
        <div className='Todo'>
            <p> {task} </p>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={onDelete}/>
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default Task;