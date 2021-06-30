import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

//COMPONENTS:
import AllEvents from './AllEvents';
import SingleEvent from './SingleEvent';
import Search from './Search';
import Buy from './Buy';
import About from './About';

function App() {
  return (
    <div className="App">
      <section className='top'>
          <h1 className='home'>
            <a href='/'> TicketKing</a>
          </h1>

          <h1 className='search' className='nav'>
            <a href='/search'> Search</a>
          </h1>

          <h1 className='about'className='nav'>
            <a href='/about'> About</a>
          </h1>

          <h1 className='buy'className='nav'>
            <a href='/buy'> Buy</a>
          </h1>

        </section>
        <Route path='/about' component={About} />
        <Route path='/buy' component={Buy} />
        <Route path='/search' component={Search} />
        <Route path='/' exact component={AllEvents}/>
        <Route path='/details:id' component={SingleEvent} />
    </div>
  );
}

export default App;
