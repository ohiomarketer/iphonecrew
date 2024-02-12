import React, { useEffect, useState } from 'react';
import phones from '../assets/static/js/phones';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
    const [products, setProducts] = useState(phones);

    const navigate = useNavigate();

    useEffect(() => {
        setProducts(phones);
    }, []);

    return (
        <section className="products">
            <h1 className="title">usados seleccionados</h1>
            <div className="products__container">
                {products.map((product, index) => (
                    !product.new ? (
                        <div className="product__card" key={index} onClick={() => {
                            navigate(`/product/${product.id}`);
                        }}>
                            <div className="product__image">
                                <img src={product.thumbnails[0]} alt={product.name} className="product__image" />
                            </div>
                            <div className="product__info">
                                <h3 className="product__name">{product.title}</h3>
                                <p className="product__price">${product.price} ARS</p>
                                <button className="product__button">Comprar</button>
                            </div>
                        </div>
                    ) : null
                ))
                }
                <h1 className='title'>- Sellados en caja -</h1>
                {
                    products.map((product, index) => (
                        product.new ? (
                            <div className="product__card" key={index} data-aos="fade"  onClick={() => {
                                navigate(`/product/${product.id}`);
                            }}>
                                <div className="product__image">
                                    <img src={product.thumbnails[0]} alt={product.name} className="product__image" />
                                </div>
                                <div className="product__info">
                                    <h3 className="product__name">{product.title}</h3>
                                    <p className="product__price">${product.price} ARS</p>
                                    <button className="product__button">Comprar</button>
                                </div>
                            </div>
                        ) : null
                    ))
                }
            </div>
        </section>
    );
};
