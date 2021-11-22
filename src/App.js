import './App.css';
import ApplicationOverview from "./ApplicationOverview";
import ApplicationsList from "./ApplicationsList";
import ApplicationPage from "./ApplicationPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import baseURL from "./BaseURL";
import ReactDOM from 'react-dom';
import {useEffect, useState} from "react";

function App() {
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [])
    return (
      <Router>
        <div className="App">
          <header className="App-header">
              <Routes>
                  <Route path="/" exact element={<ApplicationsList/>}/>
                  <Route path={"/1080p-Lock"} exact element={<ApplicationPage name={"1080p-Lock"}/>}/>
                  {json.map(item => <Route path={"/" + item} element={<ApplicationPage name={item}/>}/>)}
              </Routes>
          </header>
        </div>
      </Router>
    );
}

export default App;
