import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './module/Home/Home';
import InvalidRoute from './components/error/invalid.route';
import Projects from './module/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route path="*" render={() => <InvalidRoute message="Path doesn't exist" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
