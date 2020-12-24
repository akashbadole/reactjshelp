import React,{useState} from 'react';

const InputCustomHook = (val) => {
    const [state, setState]    = useState(val);
    const inputHandle = e =>{
        setState(e.target.value);
    };
    const clear = () =>{
        setState("");
    };

    return [state, inputHandle, clear]
};

export default InputCustomHook;