import React, {Component} from 'react';
import {browserHistory} from 'react-router'; 

class DadosUsuario extends Component{

    constructor(){
        super();
        this.logout = this.logout.bind(this);
    }

    render(){
        
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><img alt="user" width="70" height="60" src={this.props.usuario.imageProfile}/></td>
                        </tr>
                        <tr>
                            <td>
                                <label>Nome do usuário: </label>{this.props.usuario.name}<br/>
                                <label>E-mail do usuário: </label>{this.props.usuario.email}
                            </td>
                        </tr>                            
                        
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><h4>Cursos Matriculados</h4></td>
                        </tr>
                            {
                                this.props.cursos.map(function(curso){
                                    return(
                                        <tr key={curso.id}>
                                            <td>{curso.id} - </td>
                                            <td>{curso.value}</td>
                                        </tr>
                                    );
                                })
                            }
                    </tbody>
                </table>
                <div>
                <button type="button" onClick={this.logout}>SAIR</button>
                </div>
            </div>
            
        );
    }

    logout(){
        localStorage.clear();
        browserHistory.push("/");
    }
}

export default DadosUsuario;