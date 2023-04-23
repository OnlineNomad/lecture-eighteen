import './App.css';
// import ToDoSection from './ToDoSection';
import React, { Component } from'react'; 
import ToDoElement from "./ToDoElement";
import DoneElement from "./DoneElement";

class App extends Component {

  state = {
    taskNames: [{taskName: 'task1'}, {taskName: 'task2'}],
    doneTaskNames: []
    // taskNames: 'task1'
  }

  onChange=(e, index)=>{
    const taskNames = [...this.state.taskNames];
    taskNames[index] = {
      taskName: e.target.value
    }
    this.setState({taskNames});
  }

  addTask = () => {
    const taskNames = [...this.state.taskNames];
    taskNames.push({taskName: 'Type The task'})
    this.setState({taskNames});

  }

  doneTask = (task, index) => {
    const taskNames = [...this.state.taskNames];
    const doneTaskNames = [...this.state.doneTaskNames];
    taskNames.splice(index, 1);
    doneTaskNames.push({taskNameDone: task});
    this.setState({taskNames});
    this.setState({doneTaskNames});
  }

  doAgain = (task, index) => {
    const taskNames = [...this.state.taskNames];
    const doneTaskNames = [...this.state.doneTaskNames];
    doneTaskNames.splice(index, 1);
    this.setState({doneTaskNames});
    taskNames.push({taskName: task});
    this.setState({taskNames});

  }

  deleteTask = (index) => {
    const doneTaskNames = [...this.state.doneTaskNames];
    doneTaskNames.splice(index, 1);
    this.setState({doneTaskNames});
  }



  render() {
    return (
      <div>

        <div className="section-container">
          
                <div className="to-do-container">
                    <h1 className="to-do-header">To Do: </h1>

                    {this.state.taskNames.map((task, index) => {
                      return (
                        <ToDoElement key={index} value={task.taskName} onChange={(e) => this.onChange(e, index)} doneTask={()=> this.doneTask(task.taskName,index)}/>
                      )

                    })}
      
                    <button onClick={this.addTask}>Add Task</button>
                    <br />
                    
                </div>
                <div className="done-container">
                    <h1 className="done-header">Done: </h1>
                    {this.state.doneTaskNames.map((task, index)=>{
                      return (
                        <DoneElement key={index} value={task.taskNameDone} doAgain={() => this.doAgain(task.taskNameDone ,index)} deleteTask={() => this.deleteTask(index)}/>
                      )
                    })}
                </div>
        </div>
      </div>
      
    )
  }
}

export default App;
