const ToDoElement = (props) => {
    return (
        <div className="todo-element-wrapper">
            <p className="todo-task">{props.value}</p>
            <input type="text" value={props.value} onChange={props.onChange}/>
            <button className="todo-done-button" onClick={props.removeTask}>Done</button>
        </div>
    )
}

export default ToDoElement;