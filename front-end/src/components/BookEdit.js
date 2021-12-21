//component to edit a dog entry

import React from 'react';

class BookEdit extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {
            //the variables retrieved from the server
        }
    }
    render(){
        return(
            <div>This is the Dog Edit component</div>
            // A HTML form 
        )
    }
}

export default BookEdit;