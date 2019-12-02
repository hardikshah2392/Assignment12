import React from 'react'

export const ProductRow = ({id="No Title Provided", category="No Author", price=0, name='NA'}) => {
    return (
        <section>
            {id}
            {name}
            {category}
            {price}
        </section>
    )
}

// export default ProductRow