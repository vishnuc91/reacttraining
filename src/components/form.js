import React, { Component } from 'react';

export default class Form extends Component{

    // constructor() {
    //     super();
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

      // const inputParsers = {
      //   date(input) {
      //     const [month, day, year] = input.split('/');
      //     return `${year}-${month}-${day}`;
      //   },
      //   uppercase(input) {
      //     return input.toUpperCase();
      //   },
      //   number(input) {
      //     return parseFloat(input);
      //   },
      // };

      // handleSubmit(event) {
      //   event.preventDefault();
      //   const form = event.target;
      //   const data = new FormData(form);

      //   for (let name of data.keys()) {
      //       const input = form.elements[name];
      //       const parserName = input.dataset.parse;
      
      //       if (parserName) {
      //         const parser = inputParsers[parserName];
      //         const parsedValue = parser(data.get(name));
      //         data.set(name, parsedValue);
      //       }
      //     }
      //     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OWU0NzZjZTQ2YWM5ZjFlNjI5ZDJiNjgiLCJlbWFpbCI6InZpc2hudWNoZXJ1bWFkYXRoaWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcDVPL1BpZDREWUxtZ0Zkd2lEYS42LmZ2N3NSanAzbDU2U3J0TVpXT00wSG9zdzgxYWFwZGEiLCJsYXN0bmFtZSI6IkNoZXJ1bWFkYXRoaWwiLCJmaXJzdG5hbWUiOiJWaXNobnUiLCJfX3YiOjB9.f7V35cm4mfaEHlYuCx5t4QUnTYD2XMSQgjSBf9KM-YI'
      //     let fetchData = { 
      //       method: 'GET', 
      //       headers: new Headers({
      //         'Authorization': token, 
      //         'Content-Type': 'application/json'
      //       }), 
      //   }
          
      //     fetch('http://localhost:5000/create-session',fetchData)
      //     .then(res => res.json())
      //     .then(
      //     (result) => {
      //       console.log('result', result)
      //       this.setState({
      //         isLoaded: true,
      //         results: result
      //       });
      //     },
      //     // Note: it's important to handle errors here
      //     // instead of a catch() block so that we don't swallow
      //     // exceptions from actual bugs in components.
      //     (error) => {
      //       this.setState({
      //         isLoaded: true,
      //         error
      //       });
      //     }
      //     )
      // }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label htmlFor="">Category: </label>
                <input type="text" placeholder="Category" className="form-control" 
                ref="category" value="" />
                <br />
                <label htmlFor="">Duration: </label>.
                <input type="text" placeholder="Duration" className="form-control" 
                ref="duration" value="" />
                <br />
                <label htmlFor="">Serial Number: </label>
                <input type="text" placeholder="Serial Number" className="form-control" 
                ref="sno" value="" />
                <br />
                <label htmlFor="">Title: </label>
                <input type="text" placeholder="Title" className="form-control" 
                ref="title" value="" />
                <br />
                <label htmlFor="">Presenter: </label>
                <input type="text" placeholder="Presenter" className="form-control" 
                ref="presenter" value="" />
                <br />
                <label htmlFor="">Description: </label>
                <input type="text" placeholder="Description" className="form-control" 
                ref="description" value="" />
                <br />
                <input type="submit" value="Save"/>
                </form>
        )
    }
}