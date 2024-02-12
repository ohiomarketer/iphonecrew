import React from 'react';

export const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contactanos</h1>
            <p>Tenes alguna pregunta? Completa con tus datos y te respondemos a la brevedad!</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};