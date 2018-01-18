import React from 'react';


class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:this.props.username||'',
            password:this.props.password||''
        }
    }

    render(){
        return(
            <div className = "signinDiv">
                
                <form className = "signin">
                    <label>Registered users sign in:
                        <input type="text" 
                            name="username" 
                            value={this.state.username}
                            placeholder="type your name">
                        </input>
                    </label>
                    <label>
                        <input type="text" 
                            name="password" 
                            value={this.state.password}
                            placeholder="type your password">
                        </input>
                    </label>
                    <button>Sign in</button>
                </form>
               
                <form className = "signin">
                    <label>New users sign up here:
                        <input type="text" 
                            name="username" 
                            value={this.state.username}
                            placeholder="type your name">
                        </input>
                    </label>
                    <label>
                        <input type="text" 
                            name="password" 
                            value={this.state.password}
                            placeholder="type your password">
                        </input>
                    </label>
                    <button>Sign up</button>
                </form>
            </div>    
        )
    }
}
export default Signin;