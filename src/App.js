import { Fragment, useContext, useState } from 'react';
import './App.css';
import deleteElContext from './components/deleteElContext';
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
  const ctx = useContext(deleteElContext);
  let deletes = () => {
    ctx.getDelete = (ArrIndec) => {
      let AfterDelete = Datas.filter((element, Arrindex) => {
        return Arrindex !== ArrIndec;
      })
      setDatas(AfterDelete);
    }
  }

  return (
    <Fragment>
      <AddSubscribe onSave={saveHandler} />
      <div className="f-w">
        {Datas.length === 0 ? <h1>No Data Found</h1> : Datas.map((element, index) => {
          return <ShowSubcription name={element.name} pincode={element.pincode} key={index} arrayId={index} featchDelete={deletes} />
        })}
      </div>
    </Fragment>
  );
}

export default App;