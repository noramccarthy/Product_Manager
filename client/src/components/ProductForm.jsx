import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {

    // useState to keep track of what is being typed
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        // prevent refresh
        e.preventDefault();

        // make a post request to create a new product
        axios.post("http://localhost:8000/api/product", {
            title: title,
            price: price,
            description: description
        })

            .then ( res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch ((err) => console.log(err));
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="title" className='form-label'>Title</label>

                            <input 
                                type='text'
                                name='title'
                                className='form-controler'
                                id='title'
                                placeholder='Title'
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}/>
                        </div>

                        <div>
                            <label htmlFor="title" className='form-label'>Price</label>

                            <input 
                                type='text'
                                name='price'
                                className='form-controler'
                                id='price'
                                placeholder='$'
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                }}/>
                        </div>

                        <div>
                            <label htmlFor="title" className='form-label'>Description</label>

                            <input 
                                type='text'
                                name='description'
                                className='form-controler'
                                id='description'
                                placeholder='Description'
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}/>
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductForm;
