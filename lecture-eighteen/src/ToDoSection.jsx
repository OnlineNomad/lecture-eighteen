import ToDoElement from "./ToDoElement";
import DoneElement from "./DoneElement";

const ToDoSection = () => {
    return (
        <div className="section-container">
                <div className="to-do-container">
                    <h1 className="to-do-header">To Do: </h1>
                    <ToDoElement />
                </div>
                <div className="done-container">
                    <h1 className="done-header">Done: </h1>
                    <DoneElement />
                </div>
        </div>
    )
}

export default ToDoSection;