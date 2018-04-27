
import React, { Component } from 'react';
import App from '../App';

export default class Table extends Component {
    static defaultProps = {
        sessionDetails: [],
    }

    //   constructor(props) { }
    // UNSAFE_componentWillReceiveProps = (nextProps) => {
    //     console.log('componentWillReceiveProps')
    //     console.log('nextProps', nextProps);
    //     console.log('props', this.props)
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {

    //     console.log('getDerivedStateFromProps', prevState)
    //     console.log('nextProps', nextProps);
    //     // console.log('props', prevState)
    //     // console.log('getDerivedStateFromProps')

    //     return prevState;
    // }

    render() {
        console.log('render => table', this.props)
        return (
            <table>
                <tbody>
                    <tr>
                        {
                            this.props.childHeader.map((item, index) => (<th key={index}>{item}</th>))
                        }
                    </tr>
                    {
                            this.props.sessionDetails.map(({category, description, presenter}, index) => (
                                <tr key={index}>
                                    {/* <td>{Object.keys(item)}</td> */}
                                    <td>{category}</td>
                                    <td>{description}</td>
                                    <td>{presenter}</td>
                                </tr>))
                        }
                    {/* <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr> */}
                </tbody>
            </table>
        );
    }
}


// export default About;
