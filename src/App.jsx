import "./App.css";
import { CounterApp } from "./CounterApp";

function App() {
  const value = 10;

  return (
    <div className="App">
      <CounterApp value={value}></CounterApp>
    </div>
  );
}

export default App;
