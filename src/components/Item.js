import React from "react";
import { Link } from "react-router-dom";


const Item=({item})=>{

    return(
     <div className="card" style={{width: '18rem'}}>
        <img src={item.image} className="card-img-top" alt="imagen de producto"/>
        <div className="card-body">
            <h5 className="card-title">{item.descripcion}</h5>
            <p className="card-text">Precio $ {item.precio}</p>
            <Link className="btn btn-warning" to={`/item/${item.id}`}>Ir al Producto</Link>
        </div>
    </div>

   )
}

export default Item