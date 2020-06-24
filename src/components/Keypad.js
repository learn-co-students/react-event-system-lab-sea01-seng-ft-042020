// Code Keypad Component Here

import React, { Component } from 'react';



class Keypad extends Component {

    handlePasswordEntry = () => {
        console.log('Entering password...')
      }



    render()  {
        return (
            <div>
                <input 
                type="password" 
                onKeyUp={this.handlePasswordEntry}
                />
            </div>
        )
    }
}

export default Keypad