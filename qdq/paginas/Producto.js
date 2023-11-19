import React,{Component} from "react";
import Grupo from './GrupoPro';

const imagenes = ["/img/banner1.jpg", "/img/banner2.jpg", "/img/banner3.jpg", "/img/banner4.jpg"];



class Productos extends Component{
  constructor(props){
    super(props);
    this.state={
        c:0
        
    }
};

state={
    c:0
};

render(){
  setTimeout(() => this.setState({
    c: Math.floor(Math.random() * imagenes.length)
}), 2000);
    return(
        <div>
          <img className='imgcab' src={process.env.PUBLIC_URL + imagenes[this.state.c]} alt={`Banner ${this.state.c}`} />
          <h1 className="titulo1">--Categorias--</h1>
          <br/>
          <section id="Pantalla-dividida">
         <div class="cate1"></div>
            <div class="derecha2">
            <h1 class="titulo2">Anillos</h1>
              <p class="texto2">
              ¡Descubre la excelencia con nuestros impresionantes anillos! En la búsqueda de la joya perfecta, no busques más, ya que nuestros anillos destacan como los mejores en el mercado. Cada pieza ha sido cuidadosamente diseñada y confeccionada para reflejar la más alta calidad y artesanía.
              </p>
              <a className="a" href="./Anillos">Ver más...</a>
              </div>
          </section>
          <section id="Pantalla-dividida">
          <div class="izquierda3">
          <h1 class="titulo3">Aretes</h1>
            <p class="texto3">
            En nuestro espacio artístico, la calidad es el sello distintivo. Cada obra exhibida refleja la maestría de nuestros artistas, fusionando innovación y tradición para ofrecer una experiencia estética única.
            </p>
               <div class="link">              
        <a className="a" href="./Aretes">Ver más...</a>
      </div> 
          </div>

          <div class="cate2"></div>
          
          </section>
          <section id="Pantalla-dividida">
         <div class="cate3"></div>
            <div class="derecha4">
            <h1 class="titulo2">Colgantes</h1>
              <p class="texto2">
              Nuestros collares son exquisitas manifestaciones de elegancia y estilo, fusionando la artesanía con la belleza. Cada pieza refleja la creatividad y el amor por los detalles, convirtiéndolos en verdaderos tesoros de sofisticación y distinción.
                       </p>
              <a className="a" href="./Colgantes">Ver más...</a>
              </div>
          </section>
            
        </div>
    )
}
}
export default Productos;