import React, { useState } from 'react';
import Routers from './routers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routers />
    </div>
  )

}
export default App;