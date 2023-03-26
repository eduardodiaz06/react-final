import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css'

const Cart = () =>{
    const { cart, removeItem, clearCart, total } = useContext(CartContext)

    return(
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nombre Producto</th>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Producto</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cart) => 
                <tr key={cart.id}>
                    <th><h4> { cart?.id } </h4></th>
                    <th><h4> {cart?.nombre} </h4></th>
                    <th><img src={cart?.image} alt="..." className="img-cart"/></th>
                    <th><h4>{cart?.cantidad}</h4></th>
                    <th><h4>{cart?.precio}</h4></th>
                    <th><h4>{(cart?.cantidad*cart?.precio)}</h4></th>
                    <th><button className="btn btn-danger" onClick={() => removeItem(cart)}>Borrar</button></th>

                </tr>
                )}
                </tbody>
            </table>
            <div className="btn-actions">
                <span/>
                <h3>Total a pagar $ {total}</h3>
                <button className="btn btn-danger" onClick={() => clearCart()}>Eliminar carrito</button>
           </div>
        </div>
    )

}
export default Cart
