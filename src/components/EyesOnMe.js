import React, { Component } from 'react'

class EyesOnMe extends Component {
    
    onFocusHandler = () => {
        console.log('Good!')
    }
    
    onBlurHandler = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render () {
        return (
        <div>
            <button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}>EyesOnMe</button>
        </div>
        )
    }
}

export default EyesOnMe