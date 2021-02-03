import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
// import Annonces from './components/Annonces/Annonces';
// import FicheDetail from './components/Annonces/FicheDetail';

function App() {
  return (
    <Router>
      <div className='App' style={{ height: '100%', width: '100%' }}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          {/* <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/signUp'>
            <SignUp />
          </Route>
          <Route exact path='/annonces'>
            <Annonces />
          </Route>
          <Route path='/annonces/:idAnimal'>
            <FicheDetail />
          </Route> */}
          <Route path='/animaux'></Route>
          <Route path='/urgences'></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
