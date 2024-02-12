import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from 'react-router-dom';

export const Payment = () => {
    const { cartItems, getTotalPrice } = useCart();
    const [showCardForm, setShowCardForm] = useState(false);
    const [showTransferForm, setShowTransferForm] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
    });

    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    };

    const handleCardPayment = () => {
        setShowCardForm(!showCardForm);
        setShowTransferForm(false);
    };

    const handleTransferPayment = () => {
        setShowTransferForm(!showTransferForm);
        setShowCardForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleConfirmPayment = () => {
        // Validaciones básicas para los campos del formulario de la tarjeta
        if (!cardDetails.cardNumber || !cardDetails.cardHolderName || !cardDetails.expiryDate || !cardDetails.cvv) {
            toast.error('Por favor, completa todos los campos del formulario de tarjeta.', {
                position: 'bottom-center',
            });
        } else if (cardDetails.cardNumber.length !== 16 || isNaN(cardDetails.cardNumber)) {
            toast.error('El número de tarjeta debe contener 16 dígitos numéricos.', {
                position: 'bottom-center',
            });
        } else if (!/^[a-zA-Z ]+$/.test(cardDetails.cardHolderName)) {
            toast.error('El nombre del titular debe contener solo letras y espacios.', {
                position: 'bottom-center',
            });
        } else if (!/^((0[1-9])|(1[0-2]))\/([0-9]{2})$/.test(cardDetails.expiryDate)) {
            toast.error('La fecha de expiración debe estar en formato MM/YY.', {
                position: 'bottom-center',
            });
        } else if (cardDetails.cvv.length !== 3 || isNaN(cardDetails.cvv)) {
            toast.error('El CVV debe contener 3 dígitos numéricos.', {
                position: 'bottom-center',
            });
        } else {
            // Implementar lógica para procesar el pago con tarjeta
            Swal.fire('¡Pago exitoso!', 'Tu pago esta siendo procesado, en breve enviaremos un mail de confirmacion!', 'success');
            setShowCardForm(false);
            // Restablecer los detalles de la tarjeta después del pago
            setCardDetails({
                cardNumber: '',
                cardHolderName: '',
                expiryDate: '',
                cvv: '',
            });
        }
    };

    return (
        <div className="payment-container">
            <h2>Detalles del Pedido</h2>
            <Accordion sx={{
                marginBottom: '20px',
            }}>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography>Resumen del pedido</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <div className="payment-options">
                <h3>Total a pagar: ${getTotalPrice()}</h3>
            <div>
            <Accordion sx={{
                marginTop: '20px',
            }}>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography>Pago con Tarjeta</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <div className="card-form">
                                <h3>Detalles de la Tarjeta</h3>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Número de Tarjeta"
                                    value={cardDetails.cardNumber}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Nombre del Titular"
                                    value={cardDetails.cardHolderName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="Fecha de Expiración (MM/YY)"
                                    value={cardDetails.expiryDate}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={cardDetails.cvv}
                                    onChange={handleInputChange}
                                />
                                <input type="email"
                                    name="email"    
                                    placeholder="Email"
                                    value={cardDetails.email}
                                    onChange={handleInputChange}
                                />
                                <button onClick={handleConfirmPayment}>Confirmar Pago</button>
                            </div>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography>Pago por Transferencia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <div className="transfer-container">
                                <div className="transfer-form">
                                    <h3>Información para la Transferencia</h3>
                                    <p>Beneficiario: Dario Jonathan Guevara</p>
                                    <p>CBU: 0000076500000022615033</p>
                                    <p>Alias: dguevara59.ppay </p>
                                    <p>CUIT: 20-38867289-8</p>
                                </div>
                                <p className='tex'>Luego de hacer la transferencia envianos tu comprobante por Instagram o por WhatsApp para que confirmemos tu orden!</p>
                            </div>
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>

        {/* breadcrumbs */}

        <div role="presentation" onClick={handleClick} style={{
            marginTop: '20px'
        }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                to="/"
                style={{ color: '#1d0012', textDecoration: 'none'}}
                >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Inicio
                </Link>
                <Link
                to="/cart"
                style={{ color: '#1d0012', textDecoration: 'none'}}
                >
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Carrito
                </Link>
                <Typography
                color="text.primary"
                >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Pago
                </Typography>
            </Breadcrumbs>
        </div>
    </div>
    );
};
