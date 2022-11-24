import './App.css';
import AddSubscribe from './components/subscribe/AddSubscribe';
import ShowSubcription from './components/subscribe/ShowSubcription';

function App() {

  return (
    <div className="App">
      <AddSubscribe />
      <ShowSubcription name="Henil" pincode="396195" />
    </div>
  );
}

export default App;
