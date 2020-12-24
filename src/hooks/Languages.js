import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputCustomHook from "./InputCustomHook";

const Languages = () => {
    const [computerLanguages, setComputerLanguges] = useState([
        {id:1, name:"PHP",email:"example@gmail.com"},
        {id:2, name:"Python",email:"example@yahoo.com"},
        {id:3, name:"Laravel",email:"example@oil.com"},
        {id:4, name:"Java",email:"example@rediff.com"},
        {id:5, name:"C++",email:"example@protonmail.com"},
        {id:6, name:"reactjs",email:"example@github.com"}
    ]);
    // const [name, setName] = useState("");
    const [name, setName, clearName] = InputCustomHook("");
    const [email, setEmail, clearEmail] = InputCustomHook("");

    // const inputHandle = e =>{
    //     setName(e.target.value);
    // }

    // const addLanguages =(e) =>{
    //     e.preventDefault();
    //     setComputerLanguges([...computerLanguages, {id:uuidv4(), name:Math.floor(Math.random() * 100)}])
    // }

     const addLanguages =(e) =>{
        e.preventDefault();
        setComputerLanguges([...computerLanguages, {id:uuidv4(), name:name, email:email}]);
        clearName();
        clearEmail();
    }


    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Programming Name</th>
                    </tr>
                </thead>
                <tbody> 
                    {computerLanguages.map(language=>(
                        <tr key={language.id}>
                            <td>{language.id}</td>
                            <td>{language.name}</td>
                            <td>{language.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={addLanguages}>
            <input type="text" className="" onChange={setName} value={name} placeholder="Add Languages" />
            <input type="email" className="" value={email} onChange={setEmail} placeholder="Email " />
            <input type="submit" className="btnclass"  value="submit"  />
            </form>
        </React.Fragment>
    );
};

export default Languages;