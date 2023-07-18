import './Movies.css';

import Dashboard from './views/Dashboard';
import New from './views/New';
import Edit from './views/Edit';
import Movie from './views/Movie';

import {Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <div className="navBar">
        <h1 className="pageTitle">Movies</h1>
        <Link className="navLink" to="/">Dashboard</Link>
        <Link className="navLink" to="/new">Add a Movie</Link>
        
      </div>


    <Routes>


      <Route path = "/" element = {<Dashboard/>}></Route>
      <Route path = "/new" element = {<New/>}></Route>
      <Route path = "/edit/:id" element = {<Edit/>}></Route>
      //! ERROR HERE ADDING MOVIE BELOW:
      <Route path = "/movie/:id" element = {<Movie/>}></Route>







    </Routes>






    </div>
  );
}

export default App;
