import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import Direitos from '../pages/Direitos/Direitos'
import Contato from '../pages/Contato/Contato'

function Rotas() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/direitos" component={Direitos}/>
        <Route path="/contato" component={Contato}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas