import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductTable from './directory/ProductTable';
import PropTypes from 'prop-types';

let ProductList = [
        {'id': 1, 'category': 'Clarinet', price: '$459.99', name: 'Clarinet'},
        {'id': 2, 'category': 'Music', price: '$5,000', name: 'Cello'},
        {'id': 3, 'category': 'Music', price: '$4,500', name: 'Tuba'},
        {'id': 4, 'category': 'Furniture', price: '$799', name: 'Chaise Lounge'},
        {'id': 5, 'category': 'Furniture', price: '$1,300', name: 'Dining Table'},
        {'id': 6, 'category': 'Furniture', price: '$100', name: 'Bean Bag'}
    ];

const Prod = ({id, category, price, name}) => {
    return (
        <section>
            {id}
            {name}
            {category}
            {price}
        </section>
    )
}
 const ProductRow = () => {
     return (
         <div>
             <ProductTable
         </div>
     )
 }

ReactDOM.render(
    <ProductTable prod = {PRODUCTS}/>,
    document.getElementById('root')
    );
