import './App.css';
import Button from './components/Button';
import { Container } from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { UseReducer } from './components/state/UseReducer';
import Status from './components/Status';

function App() {
  const personName= {
    first: 'Bruce',
    last: 'Wayne',
    age: 12,
  }

  const nameList = [
    {
      first:"Bruce",
      last:"Wayne",
      age:12
    },
    {
      first:"Clark",
      last:"Kent",
      age:12
    },
    {
      first:"Bruce",
      last:"Wayne",
      age:12
    },
  ]

  const random = [
    "2","3","4","5"
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
      <Container styles={{border:"1px solid black",padding:"1rem"}}/>
      <UseReducer/>
    </div>
  );
}

export default App;
