import React, { Component } from 'react';
//import axios from 'axios';



export default class Token extends Component {
    componentDidMount() {
        

    }
    render() {
        return (
            <div>
                <input type='text' className='datepicker-here' data-language='en' />
            </div>
        );
    }
}

// axios.post('http://159.89.96.181/api/v1/tokens', {
        //     userName: 'Matthew'
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });