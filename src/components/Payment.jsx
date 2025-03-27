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
import { db } from '../main';
import { collection, addDoc } from 'firebase/firestore';

export const Payment = () => {
    const { cartItems, getTotalPrice } = useCart();
    const [showCardForm, setShowCardForm] = useState(false);
    const [cardType, setCardType] = useState('');
    const [installments, setInstallments] = useState(1);
    const interestRates = { 1: 0, 3: 0.05, 6: 0.1, 12: 0.2 };
    
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
        dni: '',
        price: getTotalPrice(),
        date: new Date(),
        installments: 1
    });

    const handleCardPayment = () => {
        setShowCardForm(!showCardForm);
    };

    const handleCardTypeSelection = (type) => {
        setCardType(type);
    };

    const handleInstallmentsChange = (e) => {
        const selectedInstallments = parseInt(e.target.value);
        const interest = interestRates[selectedInstallments];
        const updatedPrice = getTotalPrice() * (1 + interest);
        const updatedInstallmentValue = updatedPrice / selectedInstallments;
        
        setInstallments(selectedInstallments);
        setCardDetails({ ...cardDetails, installments: selectedInstallments, price: updatedPrice });
    };

    const handleConfirmPayment = () => {
        if (!cardDetails.cardNumber || !cardDetails.cardHolderName || !cardDetails.expiryDate || !cardDetails.cvv || !cardDetails.dni) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        addDoc(collection(db, 'payments'), cardDetails)
            .then(() => {
                Swal.fire('Pago exitoso', 'Tu pago ha sido procesado correctamente.', 'success');
            })
            .catch((error) => {
                Swal.fire('Error', 'Hubo un problema con tu pago.', 'error');
                console.error('Error al procesar el pago:', error);
            });
    };

    return (
        <div className="payment-container">
            <h2>Detalles del Pedido</h2>
            <Accordion sx={{ marginBottom: '20px' }}>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                    <Typography>Resumen del pedido</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <div className="payment-options">
                <h3>Total a pagar: ${cardDetails.price.toFixed(2)}</h3>
                <div>
                    <Accordion sx={{ marginTop: '20px' }}>
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} onClick={handleCardPayment}>
                            <Typography>Pago con Tarjeta</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="card-type-selection">
                                <h3>Selecciona el tipo de tarjeta</h3>
                                <button onClick={() => handleCardTypeSelection('credito')}>Crédito</button>
                                <button onClick={() => handleCardTypeSelection('debito')}>Débito</button>
                            </div>
                            {cardType && (
                                <div className="card-form">
                                    <h3>Detalles de la Tarjeta</h3>
                                    <input type="text" name="cardNumber" placeholder="Número de Tarjeta" onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
                                    <input type="text" name="cardHolderName" placeholder="Nombre del Titular" onChange={(e) => setCardDetails({ ...cardDetails, cardHolderName: e.target.value })} />
                                    <input type="text" name="dni" placeholder="DNI" onChange={(e) => setCardDetails({ ...cardDetails, dni: e.target.value })} />
                                    <input type="text" name="expiryDate" placeholder="Fecha de Expiración (MM/YY)" onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
                                    <input type="text" name="cvv" placeholder="CVV" onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
                                    {cardType === 'credito' && (
                                        <select value={installments} onChange={handleInstallmentsChange}>
                                            {[1, 3, 6, 12].map((num) => (
                                                <option key={num} value={num}>
                                                    {num} cuota{num > 1 ? 's' : ''} - Interés: {(interestRates[num] * 100).toFixed(2)}% - ${(getTotalPrice() * (1 + interestRates[num]) / num).toFixed(2)} c/u
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    <button onClick={handleConfirmPayment}>Confirmar Pago</button>
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
