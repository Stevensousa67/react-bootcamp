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

// The code below is the Header component. It contains the title of the restaurant.
function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

// The code below is the Menu component. It contains the title and the Pizza component which displays the list of pizzas.
function Menu() {
    const numPizzas = pizzaData.length;

    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cousine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                    
                    <ul className='pizzas'>
                        {pizzaData.map((pizza, index) => (
                            <Pizza pizzaObj={pizza} key={index} />
                        ))}
                    </ul>
                    <p>All our pizzas are made with fresh ingredients and love!</p>
                </>
            ) : (<p>We are currently working on our menu. Please come back later!</p>)}
        </main>
    );
}

// The code below is the Pizza component. It maps over the pizzaData array and renders a list of pizzas with their details.
function Pizza({pizzaObj}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

// The code below is the Footer component. It displays the current status of the restaurant (open or closed) based on the current hour.
function Footer() {
    const hour = new Date().getHours();
    const open = hour >= 12 && hour < 22;
    const openText = open ? "We're open until 22:00. Come visit us or order online." : `We are currently closed! Please come back in ${Math.abs((12 - hour))} hours and ${60 - new Date().getMinutes()} minutes.`;
    return (
        <footer className='footer'>
            <div className="order">
                <p>{openText}</p>
                {open ? <button className='btn'>Order Now</button> : null}
            </div>
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