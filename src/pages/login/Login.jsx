import { useState } from "react"

export const Login = ()=>{
   const[email,setEmail] =  useState("")
   const[password,setPassword] = useState("")
   const loginHandler = ()=>{
    console.log(email,password)
   }
    return (
        <div>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value
            )} placeholder="Enter Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value
            )} placeholder="Enter Password"/>
            <button onClick={()=>loginHandler()}>Login</button>

        </div>
    )
}