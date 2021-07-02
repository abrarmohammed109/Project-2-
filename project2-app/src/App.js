import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";


//COMPONENTS:
import AllEvents from './AllEvents';
import SingleEvent from './SingleEvent';
import Search from './Search';
import Buy from './Buy';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix';
import PageSeven from './PageSeven';
import PageEight from './PageEight';
import PageNine from './PageNine';

function App() {
  return (
    <div className="App">
      <section className='top'>
          <h1 className='home'>
            <a href='/'> EventHype</a>
          </h1>

          <h1 className='search' className='nav'>
            <a href='/search'> MAKE YOUR OWN EVENT</a>
          </h1>

          <h1 className='buy'className='nav'>
            <a href='/buy'> Cart</a>
          </h1>

        </section>
        <Route path='/buy' component={Buy} />
        <Route path='/search' component={Search} />
        <Route path='/' exact component={AllEvents}/>
        <Route path='/details:id' component={SingleEvent} />

        <Route path='/page2' component={PageTwo} />
        <Route path='/page3' component={PageThree} />
        <Route path='/page4' component={PageFour} />
        <Route path='/page5' component={PageFive} />
        <Route path='/page6' component={PageSix} />
        <Route path='/page7' component={PageSeven} />
        <Route path='/page8' component={PageEight} />
        <Route path='/page9' component={PageNine} />
    </div>
  );
}

export default App;
