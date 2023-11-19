import React,{Component} from "react";
import Grupo from './Grupo';
const banner = ["img/ban1.jpg", "img/ban2.jpg", "img/ban3.jpg", "img/ban4.jpg"];


class Nosotros extends Component{
  
  constructor(props){
    super(props);
    
    this.state={
      
        lista:Grupo.map((e) =>
        <article className="art-meta">
            <img className="img-meta" src={e.imagen}/>
            <h3 className="h3cab">{e.titulo}</h3>
            
        </article>
        )
        
    };
    
};
state={
    lista:null
};
state={
  c:0
}

render(){
  setTimeout(() => this.setState({
    c:Math.floor(Math.random() * banner.length)
}), 3000);

    return(
        <div>
          <h1 className="h1cab">Sobre Nosotros</h1>
                <img className="imgcab" src={banner[this.state.c]}/>
            <h1 className="h1cab">Nuestras metas</h1>
            {this.state.lista}
        </div>
    )
};
}
export default Nosotros;