import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td>{props.category}</td>
            </tr>
            {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
            </tr> */}
        </>
    );
};

export default Product;
