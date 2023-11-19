import React,{Component} from "react";

const img=new Array("/img/1.avif", "/img/2.jpeg", "/img/3.webp","/img/4.webp");

const cate =img.map((origen) => React.createElement('img', {className:"img-Cate2", src:origen})); 


class Home extends Component{
    render(){
        return(
          /*parte1*/
            <section  >
              <section id="Pantalla-dividida">
          <div class="izquierda1">
            <h1 class="titulo1">JOYERIA ILLANMI</h1>
            <p class="texto1">
                Donde el Brillo se Convierte en Arte.
                Joyería Fina para Brillar en Cada Momento. 
                Descubre la Elegancia, la Belleza y la Distinción en Cada Pieza. 
                Tu Historia, Tu Estilo, Tu Joya.</p>
             <div class="link">              
            <a className="a"  href="/Productos">Tienda</a>
          </div> 
          </div>
          <div className="derecha1"  > 
            <video   autoPlay loop muted >
            <source className="Video" src="/videos/anillos.mp4" type="video/mp4"></source>
            </video>
          </div>
          </section>
          <section id="Pantalla-dividida">
         <div class="izquierda2"></div>
            <div class="derecha2">
            <h1 class="titulo2">¿Que vendemos?</h1>
              <p class="texto2">
              En Illanmi, ofrecemos joyería de alta calidad y modelos únicos. Cada pieza es una obra maestra que combina artesanía excepcional con diseños que destacan. Descubre la distinción en cada detalle, la elegancia en cada joya y la calidad que perdurará en el tiempo.
              </p>
              </div>
          </section>
          <section id="Pantalla-dividida">
          <div class="izquierda3">
          <h1 class="titulo3">Nosotros</h1>
            <p class="texto3">
            Nosotros somos un grupo de emprendedores que queremos revolusionar la 
            industria de la bisutería  con nuestros modelos de videojuegos,urbano,finesa,minimalista.

            </p>
               <div class="link">              
        <a className="a" href="/Nosotros">Leer más...</a>
      </div> 
          </div>

          <div class="derecha3"></div>
          
          </section>
          <section id="Pantalla-dividida">
          <div class="izquierda4"></div>
        
          <div class="derecha4">
          <h1 class="titulo4">Nuestra Inspiración</h1>
            <p class="texto4">
            En cada joya que creamos, hay una historia que brilla. Cada gema, cada diseño, 
            es un reflejo de la belleza y la elegancia atemporales.
             Nuestra pasión es convertir lo precioso en lo extraordinario,
              y cada pieza es una manifestación de amor, creatividad y dedicación.
               Bienvenidos a un mundo de joyas que inspiran y perduran para siempre.</p>
        
               
          </div>
          </section>
          <div>
                <div >
                    <h1 className="tituloCate">------Categorias------</h1>
                    <a href="/productos">{cate} </a>    
                </div>
            </div>
          </section>

        )
     
    
    };
    }
    export default Home;