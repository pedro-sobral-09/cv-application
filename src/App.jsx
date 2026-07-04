import { useState } from "react";
import Form from "./components/form.jsx";

export default function App (){
    const [controller, setController] = useState(true);
    const [cv, setCv] = useState({name: ``, email: ``, phone: ``});

    function saveChangeInput(input, id){
        const newCv = {...cv, [id]: input};
        setCv(newCv);
    }

    function handleResetClick(){
        setCv({name: ``, email: ``, phone: ``});
    }

    function handleClick(event){
        event.preventDefault();
        console.log(cv);
        setController(!controller);
    }

    if (controller){
        return (
            <>
                <h1>CV Application</h1>
                <Form cv={cv} saveChangeInput={saveChangeInput} handleClickSubmit={handleClick} handleResetClick={handleResetClick}/>
            </>
        )
    } else {
        return (
            <>
                <button onClick={handleClick}>Edit</button>
            </>
        )
    }
}