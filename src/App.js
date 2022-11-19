import { useState } from 'react';
import './App.css';
import BookList from './BookDetail/BookList';
import NewSubcription from './NewSubcription/NewSubcription';
import Filter from './Subcription/Filter';
import SubcriptionList from './Subcription/SubcriptionList';

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
    setData([dataS, ...Sub])
  }

  const [filter, setfiler] = useState('2022');
  let changevalue = (data) => {
    setfiler(data);
  }
  
  const filterdata = data.filter((item) => {
    return item.date.getFullYear().toString() === filter
  })

  
  return (
    <div>
      <div className="App">
        <BookList />
        <NewSubcription onAdd={addSubHandlers} />
        <Filter onChangeFil={changevalue} filterVal={filter} />
      </div>
      <SubcriptionList filterdata={filterdata} />
      {/* {filterdata.length===0 && <h2>No data</h2>}
      {filterdata.length !== 0 && filterdata.map((value) => <Subcription key={value.id} name={value.name} date={value.date} title={value.title} ammount={value.ammount} />)} */}

      {/* {filterdata.length === 0 ? <h1>Not Found</h1> : filterdata.map((value) => <Subcription key={value.id} name={value.name} date={value.date} title={value.title} ammount={value.ammount} />)} */}
    </div>
  );
}

export default App;
