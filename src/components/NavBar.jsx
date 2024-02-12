import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/static/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const NavBar = () => {
    const [navbar, setNavBar] = useState(false);
    const [hamburguer, setHamburguer] = useState(false);
    const [closeButton, setCloseButton] = useState(false);
    const headerRef = useRef(null);
    const [items, setItems] = useState(0);
    const { getTotalItems } = useCart();

    const navigate = useNavigate();

    const handleOpen = () => {
        setNavBar(!navbar);
        setHamburguer(!hamburguer);
        setCloseButton(!closeButton);
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
        headerRef.current.classList.add('active');
        } else {
        headerRef.current.classList.remove('active');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        setItems(getTotalItems());
    }, [getTotalItems]);


  return (
    <header className="navbar" ref={headerRef}>

    <div className="logo__container" onClick={() => navigate('/')}>
        <img src={ logo } alt="logo" className="logo" />
    </div>
    
    <div className="right">
        <div className="nav__icons">
            <div className="icon__container">
                <i className='bx bx-search'></i>
            </div>
            <div className="icon__container" onClick={() => navigate('/cart')}>
                <i className='bx bx-shopping-bag'></i>
                {
                    items > 0 ? <span className='cart__total'>{items}</span> : ''
                }
            </div>
        </div>
        <div className={hamburguer ? "hamburger active" : "hamburger"} 
        onClick={() => handleOpen()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>

    <nav className={!navbar ? "nav" : "nav active"}>
        <div className={!closeButton ? "close__button active" : "close__button"} 
        onClick={() => handleOpen()}
        >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link" onClick={() => handleOpen()}>- Inicio</Link>
            </li>
            <li className="nav__item">
                <Link to="/" className="nav__link" onClick={() => handleOpen()}>- Catalogo</Link>
            </li>
            <li className="nav__item">
                <Link to="/contact" className="nav__link" onClick={() => handleOpen()}>- Contacto</Link>
            </li>
        </ul>
    </nav>
</header>
  )
}
