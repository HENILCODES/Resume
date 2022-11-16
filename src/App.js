import './App.css';
import Subcription from './components/Subcription';

function App() {
  let Sub = [
    {
      id:"1",
      date : (new Date('2003','1','15')),
      title : "Monthly Subcription",
      ammount : "125.6"
    },
    {
      id:"2",
      date : (new Date('2000','3','2')),
      title : "Monthly Subcription",
      ammount : "525.6"
    },
    {
      id:"3",
      date : (new Date( '1994','0','22')),
      title : "Monthly Subcription",
      ammount : "2000"
    }
  ]
  return (
    <div className="App">
      {Sub.map((element)=>{
        return <Subcription key={element.id} date={element.date} id={element.id} title={element.title} ammount={element.ammount} />
      })}
    </div>
  );
}

export default App;
