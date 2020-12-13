import React,{Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter , Route , Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About  from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./util/setAuthToken"
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App= ()=>{ 
  return (
    <AuthState>
      <ContactState> 
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
              <div className="container">
              <Alerts/>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/login" component={Login}/>
                </Switch>
              </div>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>

  );  
}

export default App;
 