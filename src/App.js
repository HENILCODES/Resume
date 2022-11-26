import { Fragment, useState } from 'react';
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
      <div className="f-w">
        {Datas.map((e, i) => {
          return <ShowSubcription name={e.name} pincode={e.pincode} key={i} arrayId={i} featchDelete={getDelet} />
        })}
      </div>
    </Fragment>
  );
}

export default App;