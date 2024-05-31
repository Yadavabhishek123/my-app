import React, { Component } from 'react'

class FormHandler extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      topic: ''
    }
  }
  changeUsername = Event => {
    this.setState({
      username: Event.target.value
    })
  }
  changeTopic = Event => {
    this.setState({
      topic: Event.target.value
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input value={this.setState.username} onChange={this.changeUsername}></input>
        </div>
        <div>
          <label>Topic</label>
          <textarea value={this.state.topic} onChange={this.changeTopic}></textarea>
        </div>
        <div>
          <label>Submit</label>

        </div>
      </form>
    )
  }
}

export default FormHandler

// event.preventDefault used for prevent previous values