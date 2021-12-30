import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Footer from './components/layout/Footer';
import Application from './components/layout/Application';
import Checkout from './components/layout/Checkout';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" component={Welcome} />
        <Route path="/application" component={Application} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
