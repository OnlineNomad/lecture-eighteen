const DoneElement = (props) => {
    return (
        <div className="done-element-wrapper">
            <p className="done-task">{props.value}</p>
            <button className="done-add-button">Do again</button>
        </div>
    )
}

export default DoneElement;