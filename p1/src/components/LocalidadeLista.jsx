import React, { Component } from 'react'


export default class LocalidadeLista extends Component {
   
    render() {
    return (
        <div className='d-flex flex-column gap-2'>
            <div className='border border-2  p-3 text-center' style={{ width: '300px' }}>
                <p>04094-050</p>
                <p>Avenida Pedro Álvares Cabral</p>
                <p>Parque Ibirapuera</p>
                <p>São Paulo - SP</p>
            </div>
            <div className='border border-2  p-3 text-center' style={{ width: '300px' }}>
            <p>55592-970</p>
            <p>Rua dos Navegantes</p>
            <p>Vila de Porto de Galinhas</p>
            <p>Ipojuca - PE</p>
            </div>
        </div>
    )
    }
}