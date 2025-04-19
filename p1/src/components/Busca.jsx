    import React, { Component } from 'react'
    import axios from 'axios'
    import { Button } from 'primereact/button'
    import { IconField } from 'primereact/iconfield'
    import { InputIcon } from 'primereact/inputicon'
    import { InputText } from 'primereact/inputtext'
    import viaCep from '../utils/viaCep'


    export default class Busca extends Component {
        state = {
            termoDeBusca: ''
        }

        
        onTermoAlterado = (event) => {
            this.setState({termoDeBusca: event.target.value})

        }

        onFormSubmit = (event) => {
            event.preventDefault()
            this.props.onBuscarCep(this.state.termoDeBusca)
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
        dica: 'Buscar cep...'
    }