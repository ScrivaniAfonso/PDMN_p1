import React from 'react';
import Busca from "./components/Busca"
import LocalidadeLista from './components/LocalidadeLista'
import viaCep from './utils/viaCep'
import GraficoUF from './components/GraficoUF'

class App extends React.Component {

  state = {
    enderecoCep: [],
    quantidadeEstados: {}, 
  };

  onBuscarCep = (cep) => {
    if (cep.trim() === "") {
      alert("O campo não pode estar vazio!")
      return
    } else {
      viaCep.get(`${cep}/json`)
        .then((response) => {
          const dados = response.data;
          if (dados.erro) {
            alert("O cep não foi encontrado!")
          } else {
            const uf = dados.uf
            this.setState((prevState) => {
             
              const quantidadeEstados = { ...prevState.quantidadeEstados }
              quantidadeEstados[uf] = (quantidadeEstados[uf] || 0) + 1

              return {
                enderecoCep: [dados, ...prevState.enderecoCep],
                quantidadeEstados: quantidadeEstados, 
              }
            })
          }
        })
        .catch((erro) => {
          alert("O cep tem que ter 8 números e não pode conter letras.")
          console.error('Erro ao buscar CEP:', erro)
        });
    }
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="mb-4">
          <Busca
            dica="Coloque o cep"
            onBuscarCep={this.onBuscarCep}
          />
        </div>

        <div className="d-flex flex-row justify-content-between align-items-start gap-4">
          <div style={{ width: '50%' }}>
            <LocalidadeLista enderecoCep={this.state.enderecoCep} />
          </div>

          <div className="d-flex justify-content-end" style={{ width: '50%' }}>
            <div>
              <h5 text align = "center">Gráfico por UF</h5>
              <GraficoUF quantidadeEstados={this.state.quantidadeEstados} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
