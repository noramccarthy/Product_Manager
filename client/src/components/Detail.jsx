import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then (res => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    // delete from db
    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/product/' + productID)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    // const removeFromDom = (productID) => {
    //     setOneProduct(oneProduct.filter(product => product._id !== productID))
    // }

    return (
        <div>
            <h1> {oneProduct.title} </h1>
            <p> Price: {oneProduct.price} </p>
            <p> Description: {oneProduct.description} </p>

            <Link to = {'/product/edit/' + oneProduct._id}> Update </Link>

            <button onClick={(e) => {deleteProduct(oneProduct._id)}}> Delete </button>
        </div>
    )

}

export default Detail;