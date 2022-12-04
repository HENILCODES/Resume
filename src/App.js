import { Fragment, useState } from 'react';
import './App.css';
import AddSubscribe from './components/subscribe/AddSubscribe';
import ShowSubcription from './components/subscribe/ShowSubcription';
import deleteElContext from './components/deleteElContext';
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
    setDatas([...Datas, data])
  }

  let getDelet = (id) => {
    let AfterDelete = Datas.filter((element, Arrindex) => {
      return Arrindex !== id;
    })
    setDatas(AfterDelete);
  }
  return (
    <Fragment>
      <AddSubscribe onSave={saveHandler} />
      <deleteElContext.Provider value={{deleteElContext:getDelet}}>
        <div className="f-w">
          {Datas.length === 0 ? <h1>No Data Found</h1> : Datas.map((element, index) => {
            return <ShowSubcription name={element.name} pincode={element.pincode} key={index} arrayId={index} />
          })}
        </div>
      </deleteElContext.Provider>
    </Fragment>
  );
}

export default App;