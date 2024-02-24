
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './AddBlog';
import Home from './Home';
import Blog from './Blog';
import Error from './Error';
import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/react-toastify.css"
import Header from './Header';
import About from './About';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Header/>
        <ToastContainer/>
          <Routes>

            <Route path="/ " element={<Home />}/>
            <Route path="/blog/:id" element={<Blog />}/>
            <Route path="/addblog" element={<AddBlog />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Error />}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
