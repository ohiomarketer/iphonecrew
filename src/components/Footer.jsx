import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <p className="title">Contactanos</p>
                    <p className="info">San Pedro, Mariano Moreno 249</p>
                    <p className="info">Tel: 1128553491</p>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
