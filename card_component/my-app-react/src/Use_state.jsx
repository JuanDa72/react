import { useState } from 'react';

function Use_state(){

    const [name, setName] = useState('Juan');
    const [age, setAge] = useState(21);
    const [isStudent, setIsStudent] = useState(true);

    const updateName = () => {
        name==='Juan' ? setName('David') : setName('Juan');
    }

    const updateAge = () => {
        setAge(age+1);
    }

    const changeStudentStatus = () => {
        setIsStudent(!isStudent);
    }

    return(
        <div>
            <h1>Use State</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent? 'Yes' : 'No'}</p>
            <button onClick={updateName}>Update Name</button>
            <button onClick={updateAge}>Update Age</button>
            <button onClick={changeStudentStatus}>Change Student Status</button>
        </div>
    );
}

export default Use_state;