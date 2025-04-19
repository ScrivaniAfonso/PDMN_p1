import React from 'react'
import Busca from "./components/Busca"
import LocalidadeLista from './components/LocalidadeLista'



class App extends React.Component {
  render() {
    return (
   <div>
    <Busca
      dica='Coloque o termo de busca'
    />
    <LocalidadeLista/> 
    </div>
    )
  }
}

export default App