import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, removeFromCart, getTotalItems } = useCart();

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        return total;
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!cartItems) {
            return;
        } else {
            console.log(cartItems);
            console.log(calculateTotal());
            console.log(getTotalItems());
        }
    }, []);

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
                <div className='empty-container'>
                    <h2 className="empty-cart-text">No hay productos en el carrito</h2>
                    <button className="empty-cart-button" onClick={() => navigate('/')}>
                        Volver a la tienda
                    </button>
                </div>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className='product'>
                                        <img src={item.thumbnails[0]} alt="product image" />
                                        <p>{item.title}</p>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total__container">
                        <h2>Total: ${calculateTotal()}</h2>
                        <button className="checkout-button" onClick={() => navigate('/payment')}>Finalizar compra</button>
                    </div>
                </>
            )}

        </div>
    );
};
