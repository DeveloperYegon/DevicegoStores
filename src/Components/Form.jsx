import React from 'react'
import { useState } from "react";

function Form() {

    const [form,setForm] = useState({
        FirstName:"",
        LastName:"",
        Email:""
    });

    // function handleChange(e){
    //     setForm({...form, e.target.value});

    // }
  return (
    <div className='form'>
        <label htmlFor=""> First Name
                <input autoFocus placeholder="Enter First name" type="text" value={form.FirstName} 
                onChange={e => { 
                    setForm({ 
                      ...form, 
                      FirstName: e.target.value 
                    }); 
                  }} />
        </label>
        <label htmlFor="">Last Name
                <input placeholder="Enter last name" type="text" value={form.LastName} 
                onChange={e => { 
                    setForm({ 
                      ...form, 
                      LastName: e.target.value 
                    }); 
                  }} />
        </label>
        <label htmlFor="">Email
                <input placeholder='Enter Email' type="email" value={form.Email} 
               onChange={e => { 
                setForm({ 
                  ...form, 
                  Email: e.target.value 
                }); 
              }} />
        </label>

        <p>
        {form.FirstName}{' '} 
        {form.LastName}{' '} 
        ({form.Email})
        </p>


        {/* <button onClick={()=>clear()}>
            Reset
        </button> */}
     {/* <div>
        const [inputText,setText]=useState("hello");

        function handleChange(e){
          setText(e.target.value);

        }

        <input type="text" value={inputText} onChange={handleChange} />
        <p>You typed {inputText}</p>
         <button onClick={(e)=>setText("hello")}>Reset</button>


    </div> */}
    </div>
   
  )
}

export default Form;