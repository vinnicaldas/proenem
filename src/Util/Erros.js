import PubSub from 'pubsub-js';
class Erros{
    publicaErros(erros){
        PubSub.publish("erro-validacao",erros[0].detail.message);
    }

    publicaErroManual(error){
        PubSub.publish("erro-validacao",error);
    }
}

export default Erros;