import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " Abhishek "
        }
        console.log("Lifecycle constructor method")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle getDerivedFromProps")
        return null // This method returns new state or null so for simple code we return null otherwise we alse return new state
    }

    componentDidMount(){
        console.log("Lifecycle componentDidMount")
    }
    render() {
        return (
            console.log("Lifecycle render method executes"),
            <div>Lifecycle</div>
        )
    }
}

// Order of execution during the mounting phase 
// 1 --> Constructor
// 2 --> getDerivedStateFromProps
// 3 --> render 
// 4 --> componentDidMount 

// if we have any children component in our render methode than child component executes first after execution of child component  componentDidMout method executes

export default Lifecycle