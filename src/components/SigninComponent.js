import React,{useState} from 'react'
import '../SignIn.css'

const SigninComponent =() => {
    const[userSignIn,setUserSignIn]= useState({
        email:"",
        password:""
    })
    // const[password,setPassword]= useState('')
    const ChangeEvent = (e)=>{
        // console.log(e.target)
        // console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        console.log(value);
        // ChangeEvent(e.target.value)
        setUserSignIn({...userSignIn, [name]:value})
    }

    return(
        <div className="SignIn" >
            <form>
                <img src="/images/login-logo.svg" width="10%" ></img>
                <div>
                    <h3>Sign In</h3>
                    <p style={{fontWeight:350}}>Stay updated on your professional world</p>
                </div>
                <div>
                    <input style={{width:300,borderRadius:4}} type="text"
                    name="email"
                     id="email"
                     placeholder="Email or Phone"
                     autoComplete="off" 
                     value={userSignIn.email} 
                    //  onChange={(e)=>setEmail(e.target.value)}
                    onChange={ChangeEvent}
                     ></input>
                </div>
                <br></br>
                <div>
                    <input  style={{width:300,borderRadius:5}} type="text"
                    name="password"
                    id="password" 
                    placeholder="Password"
                    autoComplete="off"
                    value={userSignIn.password}
                    // onChange={(e)=>setPassword(e.target.value)}
                    onChange={ChangeEvent}

                    ></input>
                    <p style={{color:"#0a66c2"}}>Forget Password?</p>
                </div>
                
                <button className="btn_SignIn btn btn-primary btn-lg "type="submit">Sign In</button>
            </form>
        </div>
    )

}


export default SigninComponent