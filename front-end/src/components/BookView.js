// component to view 1 single dog
import React from 'react';
import axios from 'axios';

class BookView extends React.Component{
    constructor(props){
        super(props);
        let _id = window.location.href.split('=')[1]
        this.state = {
            id: _id,
            isLoaded: false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(event){
        axios.delete(`/book/${this.state.id}`)
            .then(response=>{
                    // 
                    if(response){
                        window.location.href ='/'
                    }
            }).catch(err=>{

            })
       
    }
    componentDidMount() {
        axios.get(`/book/${this.state._id}`)
            .then(response => { 
                this.setState({
                    title: response.data._title,
                    author: response.data._author,
                    ISBN: response.data._ISBN,
                    yearPublication: response.data._yearPublication,
                    publishingHouse: response.data._publishingHouse,
                    isLoaded: true
                })

            }).catch(err => {


        })
    }

    render() {

            return(
                <div>
                    <p>Title: {this.state._title}</p>
                    <p>Author: {this.state._author}</p>
                    <p>ISBN: {this.state._ISBN}</p>
                    <p>Year Publication: {this.state._yearPublication}</p>
                    <p>Publishing House: {this.state._publishingHouse}</p>
                  
                    <br />
                    <button onClick={this.handleDelete}>Delete</button>

                </div>
            )
        }

    }


export default BookView;