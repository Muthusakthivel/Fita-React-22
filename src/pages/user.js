import React, {useState, useEffect} from 'react'
import axios from 'axios';

const User = () => {

    let [profiles, setProfiles] = useState([]);

        useEffect(() => {
            loadProfiles(2);
        }, [])

    const loadProfiles = (pageNumber) => {

        const api_url = 'https://reqres.in/api/users?page=' + pageNumber;
        axios.get(api_url)
        .then((response) => {
            let serverData = response.data
            // console.log(response)
           console.log(serverData);
            setProfiles(serverData.data)
        })  
        .catch((error) => {
            alert(error.message)
        })
    }
    const deleteUser = (user) => {
        console.log(user.id)

        const url = "https://reqres.in/api/users/" + user.id

        axios.delete(url)
        .then((response) => {
            console.log(response)
            alert("Successfully Profile Has been deleted")
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
  return (
    <div>
        <h1>List of Users</h1>
        <button onClick={() => loadProfiles()}>Load User Profiles</button>
        <div>
        <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Profile Pic</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        profiles?.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.first_name} {value.last_name}</td>
                                    <td>{value.email}</td>
                                    {/* <td>{value.avatar}</td> */}
                                    <td>
                                        <img src={value.avatar} alt="profile"/>
                                    </td>
                                    <td>
                                        <img src={require('../images/delete.png')} alt="profile" style={{"width" : "25px", "cursor" : "pointer"}} onClick={() => deleteUser(value)}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                     { profiles?.length === 0 &&
                     <tr>
                        <td colSpan={4}>No Record Available</td>
                    </tr>}
                    </tbody>
                </table>
                <div>
                <button onClick={() => loadProfiles(1)}>Page1</button>
                <button onClick={() => loadProfiles(2)}>Page2</button>
                <button onClick={() => loadProfiles(3)}>Page3</button>
            </div>
                </div>
    </div>
  )
}

export default User;