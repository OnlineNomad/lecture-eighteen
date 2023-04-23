import { PureComponent } from "react";

class ToDoElement extends PureComponent {

    render() {
        const {value, onChange, doneTask, index} = this.props;
        console.log({value});
        return (
            <div className="todo-element-wrapper">
                <p className="todo-task">{value}</p>
                <input type="text" value={value} onChange={(e) => onChange(e,index)}/>
                <button className="todo-done-button" onClick={() => doneTask(index)}>Done</button>
            </div>
        )
    }
}

export default ToDoElement;