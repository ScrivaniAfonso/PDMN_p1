import React from 'react'
import Busca from "./components/Busca"
import LocalidadeLista from './components/LocalidadeLista'
import viaCep from './utils/viaCep';



class App extends React.Component {

  state = {
    enderecoCep: []
  }

    onBuscarCep = (cep) => {
    if(cep.trim()===""){
      alert("O campo não pode estar vazio!")
      return
    }
    else{
    viaCep.get(`${cep}/json`)
    .then((response) => {
        const dados = response.data; 
        if(dados.erro){
            alert("O cep não foi encontrado!")
        }
        else{
          this.setState((prevState) => ({ // pega o estado mais atualizado até o momento
            enderecoCep: [dados, ...prevState.enderecoCep] // vai acumulando cada pesquisa
          }));
        }
    })
    .catch((erro) => {
        alert("O cep tem que ter 8 numeros e não pode conter letras.")
        console.error('Erro ao buscar CEP:', erro); 
    }); 
  }
};


  render() {
    return (
   <div>
    <Busca
      dica='Coloque o cep'
      onBuscarCep = {this.onBuscarCep}
    />
    <LocalidadeLista
      enderecoCep={this.state.enderecoCep}
    /> 
    </div>
    )
  }
}

export default App