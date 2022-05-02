import { useState } from 'react';
import '../style/CreateUser.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser(){
        axios.get(`http://localhost:80/api/user/${id}`).then(function(response){
            setInputs(response.data);
            
        })
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values => ({...values, [name] : value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }

    return (
        <div >
            <h1>Edit User</h1>
            
            <div className='container' style={{width: '50%', margin: " 0 auto"}}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">Name</label>
                    <input value={inputs.name} type="text" id="fname" name="name" onChange={handleChange} placeholder="Name" />

                    <label htmlFor="email">Email</label>
                    <input value={inputs.email} type="email" id="email" name="email" onChange={handleChange} placeholder="Email" />

                    <label htmlFor="mobile">Mobile</label>
                    <input value={inputs.mobile} type="tel" id="mobile" name="mobile" onChange={handleChange} placeholder="Mobile" />


                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}


export default EditUser;