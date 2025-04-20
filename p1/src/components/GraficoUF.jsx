import React from 'react'
import { Chart } from 'primereact/chart'


class GraficoUF extends React.Component {
  
  
  gerarGrafico = () => {
    const { quantidadeEstados } = this.props
    const estados = Object.keys(quantidadeEstados)
    const dados = estados.map(uf => quantidadeEstados[uf]); 

    return {
      labels: estados.length > 0 ? estados : ["Nenhum estado"],
      datasets: [{
        data: dados.length > 0 ? dados : [0],
        backgroundColor: [
            "#42A5F5", "#66BB6A", "#FFA726", "#FF7043", "#8D6E63", 
            "#78909C", "#5C6BC0", "#7E57C2", "#00BCD4", "#FFEB3B",
            "#9C27B0", "#E91E63", "#2196F3", "#3F51B5", "#009688", 
            "#CDDC39", "#FF9800", "#8BC34A", "#FF5722", "#607D8B", 
            "#8D6E63", "#B2FF59", "#00E676", "#FF5252", "#FF4081",
            "#03A9F4", "#00BCD4", "#9C27B0", "#FF5722"
        ]
      }]
    };
  };

  render() {
    const chartData = this.gerarGrafico(); 

    return (
      <Chart type="pie" data={chartData} style={{ width: '400px', height: '400px' }} />
    );
  }
}

export default GraficoUF;
