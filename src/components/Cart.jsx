import React, { useContext} from 'react';
import { CartContext } from "../Global/CartContext";

const Cart = () => {

    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
    
    const Alert = () => {
        alert("Server not found!!!")
    }

    return (
        <div className="cart-container">
            <div className="cart-details">
               {
                   shoppingCart.length > 0 ? 
                        shoppingCart.map((cart) => (
                            <div className="cart" key={cart.id}>
                                <span className="cart-image">
                                    <img src={cart.img} alt="Cart Images"/>
                                </span>
                                <span className="cart-product-name">{cart.name}</span>
                                <span className="cart-product-price">${cart.price}.00</span>
                                <span className="inc" onClick={() => dispatch({ type: "INC", id: cart.id, cart })} >
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span className="cart-product-hajmi">{cart.qty}</span>
                                <span className="dec" onClick={() => dispatch({ type: "DEC", id: cart.id, cart })} >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <span className="cart-product-umumiy">{cart.price * cart.qty}</span>
                                <span className="remove-product" onClick={() => dispatch({ type: "REMOVE", id: cart.id, cart })} >
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </div>
                        ))
                   : "Siz hali mahsulot tanlamadingiz!!!"
               }
            </div>
            { shoppingCart.length > 0 ? <div className="cart-summasi">
                <div className="summa">
                    <h3>Umumiy Summa</h3>
                    <div className="umumiy-tanlanganlar">
                        <div className="tanlanganlar">Olinganlar soni</div>
                        <div className="tanlanganlar-soni">{qty}</div>
                    </div>
                    <div className="summa-maydoni">
                        <div className="summa-hisobi">Umumiy hisobda</div>
                        <div className="umumiy-narx">${totalPrice}.00</div>
                    </div>
                </div>
                <button className="btn" onClick={Alert}>Olish</button>
            </div> : "" }
        </div>
    )
}

export default Cart;
