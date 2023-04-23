const ToDoElement = (props) => {
    return (
        <div className="todo-element-wrapper">
            <p className="todo-task">{props.value}</p>
            <button className="todo-done-button">Done</button>
        </div>
    )
}

export default ToDoElement;