import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <form onSubmit={updateProduct}>
                            <div>
                                <label htmlFor="title" className='form-label'>Title</label>

                                <input 
                                    type='text'
                                    name='title'
                                    className='form-controller'
                                    id='title'
                                    placeholder='Title'
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                            </div>

                            <div>
                                <label htmlFor="title" className='form-label'>Price</label>

                                <input 
                                    type='text'
                                    name='price'
                                    className='form-controller'
                                    id='price'
                                    placeholder='$'
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}/>
                            </div>

                            <div>
                                <label htmlFor="title" className='form-label'>Description</label>

                                <input 
                                    type='text'
                                    name='description'
                                    className='form-controller'
                                    id='description'
                                    placeholder='Description'
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>
                            </div>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Update;