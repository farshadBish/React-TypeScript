import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
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
    </div>
  );
}

export default App;
