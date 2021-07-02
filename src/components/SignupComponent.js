import React,{useState} from 'react'

import '../SignUp.css'

const SignupComponent =() => {
    const[userSignUp,setUserSignUp]= useState({
        name:"",
        password:""
    })
    const ChangeEvent = (e)=>{
        // console.log(e.target)
        // console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        console.log(value);
        // ChangeEvent(e.target.value)
        setUserSignUp({...userSignUp, [name]:value})
    }
    return(
        <div className="SignUp">
            <form>
                <img src="/images/login-logo.svg" width="10%"></img>
                <div>
                    
                    <p style={{fontSize:26}}>Make the most of your professional life</p>
                </div>
                <div>
                    <label style={{fontSize:14}}>Email or phone number</label>
                    <br></br>
                    <input style={{width:600}} className="emailPassInput" 
                    type="text"
                    name="email" 
                    id="email"
                    placeholder="Email or Phone"
                    autoComplete="off" 
                    value={userSignUp.email} 
                    onChange={ChangeEvent}
                    //  onChange={(e)=>setEmail(e.target.value)}
                     ></input>
                </div>
                <br></br>
                <div>
                    <label style={{fontSize:14}}>Password (6 or more characters)</label>
                    <br></br>
                    <input style={{width:600}} type="text"name="password" id="password" placeholder="Password" autoComplete="off"
                    value={userSignUp.password}
                    onChange={ChangeEvent}
                    // onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                    <p style={{fontSize:13}}>By clicking Agree & Join, you agree to the LinkedIn <a style={{color:"#0a66c2"}}> User Agreement</a>,
                    <a style={{color:"#0a66c2"}}> Privacy Policy</a>, and <a  style={{color:"#0a66c2"}}> Cookie Policy.</a> </p>
                </div>
                
                <button style={{width:600,borderRadius:20}} className="btn_SignUp btn btn-primary btn-lg">Agree & Join</button>
                <br></br>
                <br></br>
                <button style={{width:600,borderRadius:20}} className="btn_SignUpGoogle  btn btn-outline-primary btn-lg">Join with Google</button>
                <br></br>
                <span>Already on LinkedIn? <a style={{color:"#0a66c2",fontWeight:"600"}}>Sign in</a></span>
            </form>    
        </div>
    )

}

export default SignupComponent