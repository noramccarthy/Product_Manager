import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Detail = (props) => {

    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then (res => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1> {oneProduct.title} </h1>
            <p> Price: {oneProduct.price} </p>
            <p> Description: {oneProduct.description} </p>
        </div>
    )

}

export default Detail;