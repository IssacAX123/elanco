import './App.css';
import ApplicationOverview from "./ApplicationOverview";
import ApplicationsList from "./ApplicationsList";
import ApplicationPage from "./ApplicationPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import baseURL from "./BaseURL";
import {useEffect, useState} from "react/cjs/react.production.min";

function App() {
    let json =[]
    fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{json=data})
    console.log("hello there", json)
    return (
      <Router>
        <div className="App">
          <header className="App-header">
              <Routes>
                  <Route path="/" exact element={<ApplicationsList/>}/>
                  {json.map(item => <Route path={"/" + item} exact element={<ApplicationPage name={item}/>}/>)}
              </Routes>
          </header>
        </div>
      </Router>
    );
}

export default App;
