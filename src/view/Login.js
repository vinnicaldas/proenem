import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import FormularioLogin from '../componentes/FormularioLogin'
import {createStore} from 'redux';

function dadosALogar(state=[], action) {
    if (action.type === 'UPDATE') {
        return action.email;
    }
    return state;
}

const dadosLogin = createStore(dadosALogar);

class Login extends Component { 
  constructor(){
    super();
    this.state = {msgErro:''}
  } 
  render(){
      return (        
        <div>
          <div>
            <h1>Tela de Login</h1>
          </div>

          <div id="principal">
            <div>
              <span>{this.state.msgErro}</span>
            </div>
            <FormularioLogin dadosALogar={dadosLogin}/>
          </div>
        </div>
      );
  }

  componentDidMount(){
    PubSub.subscribe("erro-validacao", function(evento, erro){
        this.setState({msgErro:erro})
    }.bind(this));
}
}

export default Login;
