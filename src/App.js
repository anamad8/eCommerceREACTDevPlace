import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Componets/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import Productos from './Pages/Productos/Productos';
import Faq from './Pages/Faq/Faq';
import Comprar from './Pages/Comprar/Comprar';




function App() {

  return (
    <>

      <Header/> 

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Productos" element={<Productos/>} />
        <Route exact path="/Faq" element= {<Faq/>} />
        <Route exact path="/Comprar" element= {<Comprar/>} />
      </Routes>

    </>

  );
}

export default App;
