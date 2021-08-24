import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Photo from './pages/Photo';
import Header from './components/header';
import Base from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/Errors/404';

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/photos" component={Photo} />
          <Route exact path="/" component={Base} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
