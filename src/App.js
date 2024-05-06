import "./App.css";
import Social from "./Social";

function App() {
  const socialComponents = Array.from({ length: 4 }, (_, index) => (
    <Social key={index} />
  ));

  return <div className="App">{socialComponents}</div>;
}

export default App;
