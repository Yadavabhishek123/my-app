import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef();{/*here with the help of React.createref() function we create ref */}
    }

    componentDidMount(){
        this.inputref.current.focus(); {/*here we focus our input element */}
    }

    clickHandler = () => {
        alert(this.inputref.current.value)
    }
  render() {
    return (
      <div>
        <input ref={this.inputref}></input>    {/* here we attach ref to our input element with the help of ref attribute*/ }
        <button onClick={this.clickHandler}>Click</button> 
      </div>
    )
  }
}

export default RefDemo