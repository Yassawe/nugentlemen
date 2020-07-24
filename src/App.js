import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EntryForm from "./components/EntryForm";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EntryForm} />
        <Route exact path="/adminpanel" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
