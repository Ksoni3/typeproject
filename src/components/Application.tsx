import React, {useState} from "react";
import { IUsers } from "../models/Users";


interface IState{
    userInfo: IUsers
}



const Application:React.FC= ()=>{
    const [state, setState]= useState<IState>(
        {userInfo:
        {
            email: "iamkamalsoni7@gmail.com",
            password: 0,
            age: 0 ,

        } })


        const  handleChange = (event:React.ChangeEvent<HTMLInputElement>):void=>{
            setState({
                userInfo:{
                    ...state.userInfo,
                    [event.target.name]: event.target.value,
                }
            })
        }

        const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>)=>{
            event.preventDefault()
            alert(state.userInfo.email)
        }




    return (
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="text" value={state.userInfo.email} name="email" onChange={handleChange}/>
            <br/>
            <label>Password: </label>
            <input type="password" value={state.userInfo.password} name="password" onChange={handleChange}/>
            <br/>
            <label>Age: </label>
            <input type="select" value={state.userInfo.age} name="age" onChange={handleChange}/>

            <button type="submit"> Submit </button>


        </form>

    )
}

export default Application