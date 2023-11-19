import {  Routes,Route} from "react-router-dom";
import Header from "./header/Header";
import './index.css'; 
import Home from "./paginas/Home";
import Nosotros1 from "./paginas/Nosotros1";
import Materiales from "./paginas/Materiales";
import Productos from "./paginas/Producto";
import Sesion from "./paginas/Sesion";
import Nosotros from "./paginas/Nosotros";
import Compras from "./paginas/Compras";
import Footer from "./footer/footer";
import Catalogo from "./paginas/Catalogo";
import Anillos from "./paginas/Anillos";
import Aretes from "./paginas/Aretes";
import CatoAre from "./paginas/CatoAre";
import Colgantes from "./paginas/Colgantes";
import CatoCol from "./paginas/CatoCol";
function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route className="lista" path="/home"  element={<Home/>}/>  
        <Route className="lista" path="/productos"  element={<Productos/>}/>  
        <Route className="lista" path="/materiales-creación"   element={<Materiales/>}/>  
        <Route className="lista" path="/nosotros"  element={<Nosotros/>}/>
        <Route path="/Sesion" element={<Sesion/>}/>
        <Route path="/compras" element={<Compras/>}/>
        <Route path="/nosotros1" element={<Nosotros1/>}/>
        <Route path="/Aretes" element={<Aretes/>}/>
        <Route path="/Anillos" element={<Anillos/>}/>
        <Route path="/Catalogo" element={<Catalogo/>}/>
        <Route path="/CatoAre" element={<CatoAre/>}/>
        <Route path="/Colgantes" element={<Colgantes/>}/>
        <Route path="/CatoCol" element={<CatoCol/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
