import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home/index"


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App