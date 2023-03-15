import React, {useState} from 'react'
import axios from 'axios';

const User = () => {

    let [profiles, setProfiles] = useState([]);

    const loadProfiles = () => {

        const api_url = 'https://reqres.in/api/users?page=2'
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
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
    </div>
  )
}

export default User;