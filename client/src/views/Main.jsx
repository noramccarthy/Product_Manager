import React, {useState} from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    // establish state
    // initalize state to an empty array to prevent an error when rendering our initlal empty list in PeopleList
    const [product, setProduct] = useState([]);

    return (
        <div>
            {/* PersonForm and PersonList can both use state that was established in this parent component */}
            <ProductForm product={product} setProduct={setProduct} />
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}

export default Main;