import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home/index"
import { Provider } from "react-redux"
import store from "../redux/store"


const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App