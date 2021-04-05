import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity: this.props.minimum || 1,
        name: 'Nick'
     } // -->                                            "this" refers to the state, the state should hold the data that makes it work. it can hold all the data
      
    render() { 
        return ( 
            
            <div className="quantity-picker">
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">-</button>
                
            </div>
            
         );
    }
        increaseQuantity = () => {
           
           // this.state.quantity= 999; ----> don't modify state directly
            let current = this.state.quantity + 1; //read from the state

            this.setState({ quantity: current });

            this.props.onValueChange(current);


        }


        decreaseQuantity = () => {
            console.log("button clicked");
            let current = this.state.quantity - 1;
            if(current >= this.props.minimum) {
                this.setState({ quantity: current });
                this.props.onValueChange(current);
            } //update the state only when current is greater than 0
            
            
        }
}
 
export default QuantityPicker;