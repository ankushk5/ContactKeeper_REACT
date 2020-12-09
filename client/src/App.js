import React,{Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter , Route , Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About  from "./components/pages/About";


const App= ()=>{
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>

  );  
}

export default App;
 