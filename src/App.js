import './App.css';
import Subcription from './Subcription/Subcription';

function App() {
  let Sub = [
    {
      id:"1",
      date : (new Date('2003','1','15')),
      title : "Monthly ",
      ammount : "125.6",
      name : "Henil"
    },
    {
      id:"2",
      date : (new Date('2000','3','2')),
      title : "Year ",
      ammount : "5250.6",
      name : "Sivame"
    },
    {
      id:"3",
      date : (new Date( '1994','0','22')),
      title : "Weekly",
      ammount : "200",
      name : "raj"
    }
  ];
  let spS = [
    {
      id : "4",
      date : (new Date( '1994','0','22')),
      title :"day",
      ammount : "200.5",
      name :'jay'
    }
  ]
  let s = ()=>{
    Sub.push(...spS);
  }
  return (
 <div className="App">
   {s()}
      {Sub.map((element)=>{
        
        return <Subcription key={element.id} name={element.name} date={element.date} id={element.id} title={element.title} ammount={element.ammount} />
      })}
    </div>
  );
}

export default App;
