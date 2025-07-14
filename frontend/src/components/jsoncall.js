import React,{useState} from 'react';
function HelloApiButton(){

    const[response,setResponse] =useState('');

    const handleClick =() =>{
        fetch("http://localhost:5000/api/hello")
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            setResponse(data.message);
        })
        .catch(err => console.error("Error:", err));
    };



    return(
<div>
    <button onClick={handleClick}>Call Backend API</button>
    <p> Response : {response}</p>
</div>
    )
}

export default HelloApiButton;