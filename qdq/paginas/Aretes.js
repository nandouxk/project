
import React,{Component} from "react";
import Grupo from './GrupoAre';
class Aretes extends Component{
    constructor(props){
        super(props);
        this.state={
            lista:Grupo.map((x) =>
                <article className="art-joyeria">
                    <img className="img-joyeria" src={x.imagen}/>
                    <a href="CatoAre"><h3 className="titulo">{x.titulo}</h3></a>
                </article>
            )
        }
    };

    state={
        lista:null
    };
    render(){
      return(
        <html lang="en">
	<head>
		<title>Joyeria Illanmi</title>
	</head>
	<body>
		<div class="contenedor">
			
			<main>
				<div class="breadcrumbs">
					<a href="/Productos" class="breadcrumbs__link">Productos</a>
					<div class="breadcrumbs__separador">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="breadcrumbs__svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</div>
					<a href="#" class="breadcrumbs__link">Catalogo Aretes</a>
					<div class="breadcrumbs__separador">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="bi bi-star-fill"
						>
                           
						</svg>
					</div>
                    
                    </div>
                    
                    </main>
                    <div>
                <h1 className="titulo">Nuestros Productos</h1>
                {this.state.lista}
            </div>
		</div>
        </body>
        </html>
      )  
    }
}
export default Aretes;