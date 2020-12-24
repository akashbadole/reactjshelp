import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputCustomHook from "./InputCustomHook";

const Languages = () => {
    const [computerLanguages, setComputerLanguges] = useState([
        {id:1, name:"PHP"},
        {id:2, name:"Python"},
        {id:3, name:"Laravel"},
        {id:4, name:"Java"},
        {id:5, name:"C++"},
        {id:6, name:"reactjs"}
    ]);
    // const [name, setName] = useState("");
    const [name, setName, clear] = InputCustomHook("");

    // const inputHandle = e =>{
    //     setName(e.target.value);
    // }

    // const addLanguages =(e) =>{
    //     e.preventDefault();
    //     setComputerLanguges([...computerLanguages, {id:uuidv4(), name:Math.floor(Math.random() * 100)}])
    // }

     const addLanguages =(e) =>{
        e.preventDefault();
        setComputerLanguges([...computerLanguages, {id:uuidv4(), name:name}]);
        clear();
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
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={addLanguages}>
            <input type="text" className="" onChange={setName} value={name} placeholder="Add Languages" />

            <input type="submit" className="btnclass"  value="submit"  />
            </form>
        </React.Fragment>
    );
};

export default Languages;