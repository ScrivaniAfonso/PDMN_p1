App
import React from 'react'
import Busca from "./components/Busca"

class App extends React.Component {

  render() {
    return (
   <div>
    <Busca
      dica='Coloque o termo de busca'
    />
   {}
    </div>
    )
  }
}

export default App