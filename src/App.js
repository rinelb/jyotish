import React from 'react';
import { useEffect,useState } from 'react';

import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //run-> npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import Navigation from './components/Navigation';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Books from "./pages/dummy"
import NavigationMobile from './components/NavigationMobile'

 
function App() {

  const [width, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(0)
  const mobileWidth = 10

   useEffect(() => { 

     updateDimensions();

     window.addEventListener('resize', updateDimensions);
     return () => 
       window.removeEventListener('resize',updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      if (width>mobileWidth)
      {
        setMobile(0)
      }else{
        setMobile(1)
      }
      console.log("size = " + width)
    }

    const showNav= {
      display: width>mobileWidth ? 'flex' : 'none'
      
    }
    const showMenuIcon = {
      display: width>mobileWidth ? 'none' : 'flex',
    }

    return (
      <>{ (width>mobileWidth) ?
      <> 
        <div>
          <Navigation/>
            <Routes>                
              <Route path='/books'  element={<Books/>} /> 
            
              <Route path='/'element={<Books mobile={mobile}/>} />            
          </Routes>
        </div> 
      </>
      :
      <> 
        <div>
          <NavigationMobile/>
            <Routes>                
              <Route path='/books'  element={<Books/>} /> 
              
              <Route path='/'element={<Books/>} />            
          </Routes>
        </div> 
      </>


      }
      </>
)
  // if (width>800){  
  // return (
 
  //  <div className="APP-PC">
       
  //     <Books/>
      
  //   </div>
  // );
  // }else{

  // return (
    
  //     <div className="APP-Mobile">
         
  //       <Books/>
  //     </div>
    
  //  );
  // }

}

export default App;
