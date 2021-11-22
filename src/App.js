import './App.css';
import ApplicationOverview from "./ApplicationOverview";
import ApplicationsList from "./ApplicationsList";
import ApplicationPage from "./ApplicationPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApplicationPage name={"1080p-Lock"}/>
      </header>
    </div>
  );
}

export default App;
