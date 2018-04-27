import React, { Component } from 'react';
import App from '../App';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      content: "Content from state...",
      data: "Initialising data.."
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.updateState();
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  updateState() {
    this.setState({data: 'Data updated...'})
 }

  render() {
    return (
      <div className="indexPage">
        <App />
        <h1>React Demo</h1>
        <p>{this.state.header}</p>
        <form method="post" onSubmit={this.handleSubmit}>
          <label>
            Name:
    <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
    
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <button onClick = {this.updateState}>CLICK</button>
        <h4>{this.state.data}</h4> */}
      </div>
    );
  }
}


export default Home;
