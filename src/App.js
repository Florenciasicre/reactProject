import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskList from './components/container/task.list';
import ContactList from './components/container/contact.list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*componente propio*/}
      {/*<Greeting name='Flor'></Greeting>*/}
      {/*<GreetingF name= 'Flor'></GreetingF>*/}
      {/** Componente de listado de tareas */}
      {/*<TaskList></TaskList>*/}
      <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
