import React from 'react'

function WrapperComponent(props) {
  return (
    <div style={{border:" 20px solid black"}}>WrapperComponent {props.innercompo}</div>
  )
}

export default WrapperComponent;
