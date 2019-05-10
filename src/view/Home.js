import React, {Component} from 'react';
import Axios from 'axios';
import DadosUsuario from '../componentes/DadosUsuario';

class Home extends Component{

    constructor(){
        super();
        var cursos = JSON.parse(localStorage.getItem('cursos'));
        this.state = {dados:[], erros:[], cursosMatriculados:cursos}

        this.infoLogado = this.infoLogado.bind(this);
        this.infoLogado()
    }

    infoLogado(){

        const tokenInfo = {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} 
        };

        Axios.get('https://dev-api.prodigioeducacao.com/v1/person/me', tokenInfo)
        .then(response => {        
            this.setState({dados:response.data})
        })
        .catch(error => {
            this.setState({erros:error})
        })

    }

    render(){
        return(
            <div>
                <div>
                    <h4>Dados do usuário</h4>
                </div>

                <div id="principal">
                    <DadosUsuario cursos={this.state.cursosMatriculados} usuario={this.state.dados}/>
                </div>
            </div>
        );
    }

}

export default Home;