import { useState } from 'react';
import '../style/CreateUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values => ({...values, [name] : value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }

    return (
        <div >
            <h1>Create User</h1>
            
            <div className='container' style={{width: '50%', margin: " 0 auto"}}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="fname" name="name" onChange={handleChange} placeholder="Name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange} placeholder="Email" />

                    <label htmlFor="mobile">Mobile</label>
                    <input type="tel" id="mobile" name="mobile" onChange={handleChange} placeholder="Mobile" />


                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;