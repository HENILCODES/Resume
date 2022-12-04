import { useEffect, useState } from 'react';
import './App.css';
import NewSubcription from './NewSubcription/NewSubcription';
import Filter from './Subcription/Filter';
import SubcriptionList from './Subcription/SubcriptionList';
import SubcripContext from './Store/SubcriptionContext'

function App() {

  let Sub = [
    {
      id: "1",
      date: (new Date('2021', '1', '15')),
      title: "Monthly ",
      ammount: "125.6",
      name: "Henil"
    },

    {
      id: "2",
      date: (new Date('2022', '3', '2')),
      title: "Year ",
      ammount: "5250.6",
      name: "Sivame"
    },
    {
      id: "3",
      date: (new Date('2022', '0', '22')),
      title: "Weekly",
      ammount: "2001",
      name: "raj"
    }
  ];

  const [data, setData] = useState(Sub)
  let addSubHandlers = (dataS) => {
    setData([dataS, ...data])
  }

  const [filter, setfiler] = useState('2022');
  let changevalue = (data) => {
    localStorage.setItem('filter', data);
    if (localStorage.getItem('filter')) {
      setfiler(localStorage.getItem('filter'));
      return;
    }
    setfiler(filter);
  }
  const filterdata = data.filter((item) => {
    return item.date.getFullYear().toString() === filter
  })
  useEffect(() => {
    setfiler(localStorage.getItem('filter'));
  }, [])
  return (
    <div>
      <div className="App">
        <NewSubcription onAdd={addSubHandlers} />
      </div>
      <SubcripContext.Provider value={{ subContextData: filterdata, names: 'henil' }}>
        <Filter onChangeFil={changevalue} filterVal={filter} />
        <br />
        <SubcriptionList filterdata={filterdata} />
      </SubcripContext.Provider>
    </div>
  );
}

export default App;
