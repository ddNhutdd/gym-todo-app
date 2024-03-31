import React from "react";
import ListJob from "./component/list-job";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [

      ],
      input: ''
    };
  }

  inputChangeHandle = (ev) => {
    this.setState({
      input: ev.target.value
    })
  }

  buttonClickHandle = () => {
    const newList = [this.state.input, ...this.state.list]
    this.setState({
      list: newList,
      input: ''
    })
  }

  render() {
    return <div className="container mt-3">
      <h1>To do list</h1>
      <div>
        <input value={this.state.input} onChange={this.inputChangeHandle} type="text" />
        <button onClick={this.buttonClickHandle}>Add</button>
      </div>
      <div>
        <ListJob list={this.state.list} />
      </div>
    </div>
  }
}

export default App
