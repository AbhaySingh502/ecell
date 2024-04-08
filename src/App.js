
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Team from './Team/Team';
import Initiatives from './components/Initiatives';
// import Up from './components/Up';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Team' component={Team} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route exact path='/Vision' component={About} />
          <Route exact path='/Initiatives' component={Initiatives} />
          <Route exact path='/Form' component={Form} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
