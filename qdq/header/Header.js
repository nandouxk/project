import React,{Component} from "react";

import {Link}from 'react-router-dom';

const logosper=["/img/persona1.png" ];
const logospern=["/img/persona2.png" ];
const logoscarro=["/img/carro1.png" ];
const logoscarron=["/img/carro2.png" ];
const logosdiamante=["/img/diamante1.png"];
const logosdiamanten=["/img/diamante2.png"];

class Header extends Component{
    render(){
        let persona = logosper.map((x,index) => (
            <img src={x} className="logo"
            onMouseOver={e=> e.currentTarget.src=logospern[index]}
            onMouseOut={e=> e.currentTarget.src=logosper[index]}
           />
        ));
        let carro = logoscarro.map((x,index) => (
            <img src={x} className="logo"
            onMouseOver={e=> e.currentTarget.src=logoscarron[index]}
            onMouseOut={e=> e.currentTarget.src=logoscarro[index]}
           />
        ));
        let diamante = logosdiamante.map((x,index) => (
            <img src={x} className="logo"
            onMouseOver={e=> e.currentTarget.src=logosdiamanten[index]}
            onMouseOut={e=> e.currentTarget.src=logosdiamante[index]}
           />
        ));
        return(
            <div className="base">  
             <Link className="lista" to="home" >inicio</Link>   
             <Link className="lista" to="productos" >Productos</Link>  
             <Link className="lista" to="materiales-creación" >Materiales</Link>  
             <Link className="lista" to="nosotros" >Nosotros</Link>  
        
           <Link to="Sesion ">
           {persona}
           </Link>
            <Link to="/Compras">
            {carro} 
            </Link>
            <Link to="/Nosotros1">
            {diamante}
            </Link>   
            </div>
        )
    };
    

}

export default Header;