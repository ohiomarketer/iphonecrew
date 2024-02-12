import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phones from '../assets/static/js/phones';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

export const Product = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addToCart, cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const phone = phones.find(phone => phone.id === id);
        if (phone) {
            setProduct(phone);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleAddToCart = () => {
        addToCart(product); // Agrega el producto al carrito
        // Puedes añadir aquí cualquier lógica adicional, como mostrar una notificación
    };

    const handleBuyNow = () => {
        // Check if the product is already in the cart
        const existingProduct = cartItems.find(item => item.id === id);
        if (existingProduct) {
            toast.error(`¡Ya tienes este producto en el carrito!`, {
                position: 'bottom-center',
            });
            navigate('/cart');
        } else {
            addToCart(product);
            navigate('/payment');
        }
    };

    return (
        <div className='product__section'>
            <Link style={{
                color: '#1d001271',
                textDecoration: 'underline',
                marginBottom: '10px',
            }} to='/'>
                &lt;&lt; Seguir Comprando
            </Link>
            <Slider {...settings} className='product__slider'>
                {product.thumbnails.map((thumbnail, index) => (
                    <div key={index}>
                        <img src={thumbnail} alt={product.title} />
                    </div>
                ))}
            </Slider>

            <div className="info__container">
                <h2 className='product__title'>{product.title}</h2>
                <p className='product__price'>${product.price} ARS</p>
                <button className='product__add' onClick={handleAddToCart}>Agregar al carrito</button>
                <button className='product__button' onClick={handleBuyNow}>Comprar Ahora</button>
            </div>

            <div className="description__container">
                <p className="description">
                    {product.description}
                </p>
            </div>
        </div>
    );
};
