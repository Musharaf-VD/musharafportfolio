// import React, { useState } from 'react'
// import './Signup.css'


// const Signup = () => {
//     const [isavailable, setIsavailable] = useState(false);
//     const [mesg, setMesg] = useState("");
  

//     const handlesignup = (e) => {
//         e.preventDefault();
        
        
//     }

//     const handlelogin = (e) => {
//         e.preventDefault();
        
        
       
//     }
//     return (
//         <section>
//             <section className={`signup ${isavailable ? "visiblesignup" : "hiddensignup"}`}>
//                 <div className='signup-container'>
//                     <div className='signupheading-container'>
//                         <h2>Sign Up</h2>
//                     </div>

//                     <form className='inpudetail-container' onClick={handlesignup}>
//                         <div className='signup-input'>
//                             <label>Name</label>
//                             <input type='text' />
//                         </div>

//                         <div className='signup-input'>
//                             <label>Email</label>
//                             <input type='email' />
//                         </div>

//                         <div className='signup-input'>
//                             <label>Password</label>
//                             <input type='text' />
//                         </div>

//                         <div className='signup-input'>
//                             <label>Confirm Password</label>
//                             <input type='text' />
//                         </div>

//                          <div className='signup-btn'>
//                             <button className='btn btn-success col-12 mt-5 my-3'>Sign Up</button>
                            
//                         </div>
//                     </form>
//                     <h3>{mesg}</h3>
//                 </div>
//             </section>

//             {/* <div className='modechange'>
//                 <button onClick={handlesubmit} className={`btn ${isavailable ? "Login" : "Signup"}`}>{isavailable ? "Login" : "Signup"}</button>
//             </div> */}

//             <section className={`login ${isavailable ? "visiblelogin" : "hiddenlogin"}`} >
//                 <div className='login-container'>
//                     <div className='loginheading-container'>
//                         <h2>Login</h2>
//                     </div>

//                     <form className='inpudetail-container' onClick={handlelogin}>
//                         <div className='login-input'>
//                             <label>Name</label>
//                             <input />
//                         </div>

//                         <div className='login-input'>
//                             <label>Email</label>
//                             <input />
//                         </div>

//                         <div className='login-input'>
//                             <label>Password</label>
//                             <input />
//                         </div>

//                         <div className='login-btn'>
//                             <button className='btn btn-success col-12 mt-5 my-3' >Login</button>
//                         </div>
//                     </form>
//                     <h3>{mesg}</h3>
//                 </div>
//             </section>
//         </section>
//     )
// }

// export default Signup