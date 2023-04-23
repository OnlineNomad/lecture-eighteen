import './App.css';
import ToDoSection from './ToDoSection';
import React, { Component } from'react'; 

class App extends Component {

  state = {
    taskName: 'TASK'
  }

  onChange=(e)=>{
    this.setState({
      taskName: e.target.value
    })
  }


  render() {
    return (
      <ToDoSection taskName={this.state.taskName} initValue={this.state.taskName} onChange={this.onChange}/>
    )
  }
}

export default App;
