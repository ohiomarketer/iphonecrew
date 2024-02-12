import { useEffect } from 'react';
import { RoutesComponent } from "./components/RoutesComponent";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []); // Run this effect only once after the initial render

  return (
    <>
      <CartProvider>
        <RoutesComponent />
      </CartProvider>
    </>
  );
}

export default App;
