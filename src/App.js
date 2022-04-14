import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      
      <Header></Header>
        <div className="">
          <Routes>
            <Route path="/home" element={<Home></Home>}>

            </Route>
            <Route path='/reviews' element={<Reviews></Reviews>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>


          </Routes>

        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
