import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'


export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

      mostrarTermoDeBusca = (termoDeBusca) =>{
        alert("O termo de busca que você escreveu: "+termoDeBusca)
      }
      
    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})

    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.mostrarTermoDeBusca(this.state.termoDeBusca)
    }

    render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <div
                className='flex flex-column'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText  
                            className='w-full'
                            placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca}/>
                    </IconField>
                    <Button 
                        label="OK"
                        outlined/>
            </div>
        </form>
    )
    }
}

Busca.defaultProps = {
    dica: 'Buscar algo...'
}