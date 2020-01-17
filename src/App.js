import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Navbar,
  ExercisesList,
  EditExercise,
  CreateExercise,
  CreateUser
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route exact path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
