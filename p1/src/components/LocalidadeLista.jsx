import React, { Component } from 'react'


export default class LocalidadeLista extends Component {
   
    render() {
        
    const { enderecoCep } = this.props; // Desestruturando o objeto

    if (!enderecoCep  || enderecoCep.length === 0) {
        return null;
      }
    return (
        <div className='d-flex flex-column gap-2'> 
             {enderecoCep.map((endereco, index) => ( // iteraando com o map utilizando o index para identificar cada coisa digitada
               <div key={index} className='border border-2  p-3 text-center' style={{ width: '300px' }}> 
                <p>{endereco.cep}</p>
                <p>{endereco.logradouro}</p>
                <p>{endereco.bairro}</p>
                <p>{endereco.localidade} - {endereco.uf}</p>
            </div>
             ))}
        </div>
            
    )
    }
}