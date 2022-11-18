import { useState } from 'react';
import './App.css';
import NewSubcription from './NewSubcription/NewSubcription';
import Filter from './Subcription/Filter';
import Subcription from './Subcription/Subcription';

function App() {
  let Sub = [
    {
      id: "1",
      date: (new Date('2003', '1', '15')),
      title: "Monthly ",
      ammount: "125.6",
      name: "Henil"
    },
    {
      id: "2",
      date: (new Date('2000', '3', '2')),
      title: "Year ",
      ammount: "5250.6",
      name: "Sivame"
    },
    {
      id: "30",
      date: (new Date('1994', '0', '22')),
      title: "Weekly",
      ammount: "200",
      name: "raj"
    }
  ];

  let addSubHandlers = (data) => {
    Sub.push(data);
    console.log(Sub);
  }

  const [filter, setfiler] = useState('2003');
  let changevalue = (data) => {
    console.log("App ", data);
    setfiler(data);
  }
  return (
    <div className="App">
      <NewSubcription onAdd={addSubHandlers} />
      <Filter onChangeFil={changevalue} filterVal={filter} />
      <Subcription name={Sub[0].name} date={Sub[0].date} title={Sub[0].title} ammount={Sub[0].ammount} />
      <Subcription name={Sub[1].name} date={Sub[1].date} title={Sub[1].title} ammount={Sub[1].ammount} />
      <Subcription name={Sub[2].name} date={Sub[2].date} title={Sub[2].title} ammount={Sub[2].ammount} />
    </div>
  );
}

export default App;
