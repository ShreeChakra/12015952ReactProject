import React from 'react'
import Cards from './Cards'
import content from './Content'
import '../Styles/Home.css'
import { useState } from 'react'
function Home() {
    const [items, setItems] = useState([]);
    // The below function adds the selected item to cart while keeping the previously selected items
    const addToCart = (item) => {
        setItems([...items, item]);
    };
    // This function is used to remove or cancel the selected item from cart
    const removeFromCart = (itemIndex) => {
        setItems(items.filter((_, index) => index !== itemIndex));
    };
    //This keeps a track of the prices of the items and adds them to the cart and makes a TotalPrice
    const cartTotal = items.reduce((total, item) => total + item.price, 0);
    return (
        <div className='home'>
            <div className='cart'>
                <h2>Shopping Cart</h2><hr />
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.name} - Rs.{item.price}
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                        <li className='total'>Total: Rs.{cartTotal}</li>
                    </ul>
                )}
            </div>
            <div className='tiles'>
                {
                    //Card component is used once
                    //The data or Props from content.js file is passed to the card component
                    //map function maps all the properties with the card component
                    //map function creates multiple cards
                }
                {content.map(content => (
                    <Cards
                        url={content.url}
                        title={content.title}
                        rating={content.rating}
                        price={content.price}
                        contents={content.contents}
                        func={() => addToCart({ name: content.title, price: content.price })}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home