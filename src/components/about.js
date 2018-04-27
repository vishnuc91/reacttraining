
import React, { Component } from 'react';
import App from '../App';
import Table from './table';

class About extends Component {

  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      data: 'Loading Data...',
      header: ['test1', 'test2', 'test3'],
      sessionDetails: [],
    }
    // this.updateState = this.updateState.bind(this)
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps')
  //   return prevState;
  // }

  updateState() {
    this.setState ({
      data: 'Data Loaded...'
    })
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OWU0NzZjZTQ2YWM5ZjFlNjI5ZDJiNjgiLCJlbWFpbCI6InZpc2hudWNoZXJ1bWFkYXRoaWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcDVPL1BpZDREWUxtZ0Zkd2lEYS42LmZ2N3NSanAzbDU2U3J0TVpXT00wSG9zdzgxYWFwZGEiLCJsYXN0bmFtZSI6IkNoZXJ1bWFkYXRoaWwiLCJmaXJzdG5hbWUiOiJWaXNobnUiLCJfX3YiOjB9.f7V35cm4mfaEHlYuCx5t4QUnTYD2XMSQgjSBf9KM-YI'
    let fetchData = { 
      method: 'GET', 
      headers: new Headers({
        'Authorization': token, 
        'Content-Type': 'application/json'
      }), 
  }
    fetch("http://localhost:5000/sessions", fetchData)
      .then(res => res.json())
      .then(
      (result) => {
        console.log('result', result)
        this.setState({
          isLoaded: true,
          results: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
    // this.setState({
    //   data: 'Data updated...',
    //   header: ['category', 'serialno', 'title'],
    // })
  }

  // UNSAFE_componentWillMount = () => {
  //   console.log('componentWillMount')
  // }

  componentDidMount = () => {
    console.log('componentDidMount');
    // this.updateState();
  }

  // UNSAFE_componentWillReceiveProps = (nextProps) => {
  //   console.log('componentWillReceiveProps')
  // }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true;
  // }

  // // UNSAFE_componentWillUpdate = (nextProps, nextState) => {
  // //   console.log('componentWillUpdate')
  // // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log('componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate')

  //   return { data: 'Data updated 123...' };
  // }

  render() {
    console.log('render', this.state)
    return (
      <div className="indexPage">
        <App />
        <h1>React Demo</h1>
        <button onClick={() => this.updateState()}>CLICK</button>
        <h4>{this.state.data}</h4>
        <Table childHeader={this.state.header} sessionDetails={this.state.results} />
      </div>
    );
  }
}


export default About;
