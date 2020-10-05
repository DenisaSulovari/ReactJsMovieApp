import React from 'react';
import MoviesList from './components/MoviesList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MovieDetailInfo from './components/MovieDetailInfo'


function App() {
  return (
    <Router>
      <Switch>
     
      <Route path="/" exact component={MoviesList}/>
      <Route path="/movies/:key" exact component={MovieDetailInfo}/>
      
      </Switch>
      </Router>
  );
}

export default App;
