import React from 'react'
import Header from './components/Header/Header';
import './App.css'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CardsBouquet from './components/Cards/CardsBouquet';
import CardsFlower from './components/Cards/CardsFlower';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Logo from './components/logo/Logo';
import { AppProvider } from './components/Context/AppContext';




export const App = () => {
  return (
      
      <AppProvider> {/*Call my component who have the context */}
      <Router>

        <Switch>
          
          <Route path="/flower">
          <Header/>
          <Logo/>
          <CardsFlower/>
          <Footer/>
          </Route>
          <Route path="/bouquet">
            <Header/>
            <Logo/>
            <CardsBouquet/>
            <Footer/>
          </Route>
          <Route path="/shopping">
            <Header/>
            <Logo/>
            <ShoppingCart/>
            <Footer/>
          </Route>
          <Route path="/">
            <Header/>
            <Logo/>
            <Main/>
            <Footer/>
          </Route>
          
        </Switch> 
    
        
      </Router>
      
      </AppProvider>
    
    
  )
}

export default App;
