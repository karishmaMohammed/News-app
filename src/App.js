import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import NavbarComponent from "./Components/NavbarComponent"
import News from "./Components/News"
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
				<Route exact path="/">
					<News />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;

/* Dynamic Routing
		- Params in the path (Params are variables in the URL)
		- Should start with :
*/
