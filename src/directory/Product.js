import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Filters} from './Filters';
import {ProductTable} from './ProductTable';
import {ProductForm} from './ProductForm';
import PropTypes from 'prop-types';
import {ProductRow}  from './ProductRow';

class Product extends Component {
    render(){
        const { books } = this.props
        return (
            <div>
                {books.map(
                (book, i) => 
                    <ProductRow
                        key={i}
                        id={book.id} 
                        name={book.name} 
                        category={book.category}
                        price={book.price} />
            )}</div>
        )
    }
}
     
export default Product