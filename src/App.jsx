import { useEffect } from 'react';
import { RoutesComponent } from "./components/RoutesComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <CartProvider>
        <RoutesComponent />
      </CartProvider>
    </>
  );
}

export default App;
