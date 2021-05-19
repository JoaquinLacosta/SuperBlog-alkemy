import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Home from "../containers/Home/index"
import PostDetails from "../containers/PostDetails/index"
import CreatePost from "../containers/CreatePost/index"
import store from "../redux/store"
import EditPost from "../containers/EditPost/index"


const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts/create" component={CreatePost}/>
          <Route exact path="/post/:id" component={PostDetails}/>
          <Route exact path="/edit/post/:id" component={EditPost}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App