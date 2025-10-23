import "./App.css";
import Sidebar from "./components/Sidebar";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
      </div>
      <div>
        <h1>Item Management</h1>
        <ItemForm />
        <ItemList />
      </div>
    </>
  );
}

export default App;
