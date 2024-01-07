import logo from './logo.svg';
import './App.css';
//Importamos el router
import { Routes,Route } from 'react-router-dom';

//Importamos los componentes:
import CompShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlog";
import CompEditBlog from './blog/EditBlog';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <button className="btn btn-primary btn-lg"><i className="fa-brands fa-react"></i>Crear</button> */}
      </header>
      
      <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={<CompEditBlog/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
