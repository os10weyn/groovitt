import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/loginform.css';
import './css/signupform.css';
<<<<<<< HEAD
import './css/search.css'
=======

>>>>>>> 3c3db15993f864fe16120d39473003bff3c06355
import './css/homepage.css';
// import './css/carousel.css';

import LoginForm from './js/loginform';
import SignUpForm from './js/signupform';
import HomePage from './js/homepage';
import MPlayer from './js/playercomponents/index';
<<<<<<< HEAD
import Search from './js/search/search'

=======
>>>>>>> 3c3db15993f864fe16120d39473003bff3c06355
function App() {
  return (
    <Router>
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignUpForm/>
        </Route>
        <Route exact path='/home'>
          <HomePage/>
        </Route>
        <Route exact path='/player'>
          <MPlayer/>
        </Route>
<<<<<<< HEAD
        <Route exact path='/search'>
          <Search />
        </Route>
=======
>>>>>>> 3c3db15993f864fe16120d39473003bff3c06355
      </Switch>
    </div>
    </Router>
  );
}

export default App;
