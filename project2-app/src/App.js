import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

//COMPONENTS:
import AllEvents from './AllEvents';
import SingleEvent from './SingleEvent';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <a href='/'> TicketKing</a>
        </h1>
        <Route path='/' exact component={AllEvents}/>
        <Route path='/details:id' component={SingleEvent} />
      </header>
    </div>
  );
}

export default App;
