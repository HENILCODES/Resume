import { useState } from 'react';
import './App.css';
import AddSubscribe from './components/subscribe/AddSubscribe';
import ShowSubcription from './components/subscribe/ShowSubcription';

function App() {
  let arrA = [
    {
      name: "Henil",
      pincode: "396195"
    },
    {
      name: "Sivam",
      pincode: "396195"
    }
  ]

  const [Datas, setDatas] = useState(arrA);
  
  let saveHandler = (data) => {
    setDatas([data, ...Datas])
  }

  return (
    <div className="App">
      <AddSubscribe onSave={saveHandler} />
      <div className="f-w">
        {Datas.map((e, i) => {
          return <ShowSubcription name={e.name} pincode={e.pincode} key={i} />
        })}
      </div>
    </div>
  );
}

export default App;
