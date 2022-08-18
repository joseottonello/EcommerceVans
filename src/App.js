import { lazy, Suspense } from 'react';
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeatLoader from 'react-spinners/BeatLoader';

const NavBar = lazy(() => import('./components/navBar/NavBar'));
const ItemListContainer = lazy(() => import('./components/itemListContainer/ItemListContainer'));
const ItemDetailContainer = lazy(() => import('./components/itemDetailContainer/ItemDetailContainer'));
const Cart = lazy(() => import('./components/cart/Cart'));

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Suspense fallback={
                <BeatLoader
                    size={20}
                    color="#c21010"
                    cssOverride={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '15rem'
                }}
                />}>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}/>
                        <Route path="/category/:category" element={<ItemListContainer/>}/>
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </Suspense>
             </BrowserRouter>
        </CartProvider>
    );
}

export default App;