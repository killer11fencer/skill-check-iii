import React from 'react';
import {HashRouter,} from 'react-router-dom'
import routes from './components/routes'
import Header from './components/Header'


function App() {
  return (
    <HashRouter>
    <div className="App">
    <Header/>

    {routes}
    </div>
    </HashRouter>
  );
}

export default App;
