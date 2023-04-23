const DoneElement = (props) => {
    return (
        <div className="done-element-wrapper">
            <p className="done-task">{props.value}</p>
            <button className="done-add-button" onClick={props.doAgain}>Do again</button>
            <button onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default DoneElement;