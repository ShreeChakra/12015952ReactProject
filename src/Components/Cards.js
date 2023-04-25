import React from 'react'
import '../Styles/Cards.css';
function Cards(props) {
    return (
        <div className='cardsContainer'>
            {
                //Here properties like name,title,price,url and price for function for on click function ar passed using props
            }
            <div className='card'>
                <img src={props.url} alt='Card' className='cardImg' />
                <h2 className='cardTitle'>{props.title}</h2>
                <div className='line1'>
                    <span className='rating'>Rating:{props.rating}</span>
                    <span className='price'>Price:{props.price}</span>
                </div>
                <p className='contents'>Ingredients: {props.contents}</p>
                <button className='addBtn' onClick={props.func}>Add to cart</button>
            </div>
        </div>
    )
}

export default Cards