import React, { Component } from 'react'
import './LoginForm.css'

 class LoginForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: 'bye',
             text: ''
             
        }
        this.submitForm = this.submitForm.bind(this)
    }
    
    // submitForm = () => {
    //     this.state.username === 'bye'
    //     ? this.setState({
    //         username: 'hii'
    //     }) :
    //        this.setState({
    //            username: 'bye'
    //        })
            
    //     }
        
  submitForm = (event) =>{
        this.setState({
            text: event.target.value
        })
        event.preventDefault()
  }
  
    


    
   render() {

       return (
           <>
           <form >
           <h3>{this.state.text}</h3>
           <div className='header1'>
          
           <h2>Username</h2>
             <input type='text' placeholder='Email Id' value={this.state.text} onChange={this.submitForm} />
             <h2>Password</h2>
             <input type='password' placeholder='Password'/><br />
             <br />
             <button type='reset' onClick={this.submitForm} >Submit</button>

           </div>  
           </form>
           </>
       )
   }       


}


export default LoginForm
