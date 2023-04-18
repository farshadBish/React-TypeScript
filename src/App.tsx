import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName= {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:"Clark",
      last:"Kent"
    },
    {
      first:"Bruce",
      last:"Wayne"
    },
  ]

  const random = [
    2,3,4,5
  ]


  return (
    <div className="App">
      <Greet name="Jack" messageCount={12} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} random={random}/>
      <Status status='success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button handleClick={(event,id)=> {
        console.log("Button clicked",event,id);
        
      }}/>
      <Input value='dsad' handleChange={(event)=>console.log(event)
      }/>
    </div>
  );
}

export default App;
