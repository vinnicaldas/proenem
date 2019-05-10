import React, {Component} from 'react';
import axios from 'axios';
import InputDefault from './InputDefault';
import {browserHistory} from 'react-router'; 
import Erros from '../Util/Erros';
import EmailValidator from 'email-validator';

export default class FormularioLogin extends Component{

    constructor(){
        super();
        this.state = {email:'', senha:'', msg:''};
        this.enviar = this.enviar.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    setEmail = (event) => {
        this.setState({email:event.target.value});
    }
    
    setSenha = (event) => {
        this.setState({senha:event.target.value});
    }
    
    enviar(event){

        this.props.dadosALogar.dispatch({type:'UPDATE', email:this.state.email})

        if(this.state.email.length === 0 || this.state.senha.length === 0){ //verifica se os inputs estao vazios
            new Erros().publicaErroManual('Nao são permitido campos em branco');
            event.preventDefault();            
        }else if(this.state.email.length !== 0 && !EmailValidator.validate(this.state.email)){ //valida e-mail
            new Erros().publicaErroManual('E-mail inválido');
            event.preventDefault();            

        }
        else{

            const requestInfo = {
                email:this.props.dadosALogar.getState(),
                password:this.state.senha
            };

            event.preventDefault();
            axios.post('https://dev-api.prodigioeducacao.com/v1/token', requestInfo)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('token', response.data['token'])
                    localStorage.setItem('cursos', JSON.stringify(response.data['lessonPlans']))
                    browserHistory.push('/home');     
                }
            })          
            .catch(function(error){                
                new Erros().publicaErros(error.response.data.errors);
            });
        }
    }

    render(){
        return(
            <form onSubmit={this.enviar} method="POST">
                <InputDefault label="E-mail:" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>
                <InputDefault label="Senha:" type="password" name="senha" value={this.state.senha} onChange={this.setSenha}/>              
                <div>
                    <input type="submit" name="Enviar"/>
                </div>
            </form>
        );
    }

}