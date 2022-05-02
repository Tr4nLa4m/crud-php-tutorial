import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style/ListUser.css';

function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers(){
        axios.get('http://localhost:80/api/users/').then(function(response){
            setUsers(response.data);
            console.log(users);
        })
    }

    const DeleteUser =(id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response) {
            getUsers(response.data);
        })
    }
    

    return (
        <div>
            <h1>List User</h1>

            <div style={{width: '60%', margin: "0 auto"}}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) => 
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link to={`user/${user.id}/edit`}>Edit</Link>
                                    <button onClick={() => DeleteUser(user.id)} style={{marginLeft: '10px'}}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListUser;