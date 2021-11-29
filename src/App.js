import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Trailer from './Trailer';

function App() {
  return(
<Router>

   <Route exact path="/" >
   <Home/>
   </Route>
   <Route path="/trailer/:id" >
     <Trailer />
   </Route>

</Router>
  )
}

export default App;