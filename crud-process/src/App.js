import FormComponent from "./components/FormComponent";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1>
        <Counter/>
        <FormComponent/>
      </h1>
    </div>
  );
}

export default App;
