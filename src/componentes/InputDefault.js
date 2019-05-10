import React, {Component} from 'react';

class InputDefault extends Component{
    render(){
        return(
            <div>
                <label htmlFor={this.props.id}>{this.props.label} </label>
                <input type={this.props.type} name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>                
            </div>
        );
    }
}

export default InputDefault;

