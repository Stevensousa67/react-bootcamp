import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data.js';
import './index.css';

// The code below is the main component of the application. It renders the App component which contains the Pizza component.
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

// The code below is the Menu component. It contains the title and the Pizza component which displays the list of pizzas.
function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <Pizza />
            <p>All our pizzas are made with fresh ingredients and love!</p>
        </main>
    )

}

// The code below is the Pizza component. It maps over the pizzaData array and renders a list of pizzas with their details.
function Pizza() {
    return (
        <div className='pizzas'>
            {pizzaData.map((pizza, index) => (
                <div key={index} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
                    <img src={pizza.photoName} alt={pizza.name} />
                    <div>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.ingredients}</p>
                        <span>{pizza.soldOut ? "Sold Out" : `$${pizza.price}`}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

// The code below is the Footer component. It displays the current status of the restaurant (open or closed) based on the current hour.
function Footer() {
    const hour = new Date().getHours();
    const open = hour >= 12 && hour <= 22;
    const openText = open ? "We are open!" : `We are currently closed! Please come back in ${12 - hour} hours and ${60 - new Date().getMinutes()} minutes.`;
    return (
        <footer className='footer'>
            {openText}
        </footer>
    )
}

// The code below is the entry point of the application. It renders the App component into the root element of the HTML document.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)