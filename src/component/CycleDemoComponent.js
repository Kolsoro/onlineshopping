import React from "react";

class SuccessComponent extends React.Component
{
    componentWillMount(){
        alert('Success component requested..');
    }
    componentDidMount(){
        alert('Success Component mounted');
    }
    componentWillUnmount(){
        alert('Success component Destroyed and Unmounted');
    }
    render(){
        return(
            <h2>Login Success..</h2>
        )
    }
}

class ErrorComponent extends React.Component{
    componentWillMount(){
        alert('Error component requested..');
    }
    componentDidMount(){
        alert('Error Component mounted');
    }
    componentWillUnmount(){
        alert('Error component unmounted');
    }
    render(){
        return(
            <h2>Invalid Password..</h2>
        )
    }
}
export default class  CycleDemoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'',
            UserName:'',
            Password:''
        }
        this.SuccessClick=this.SuccessClick.bind(this)
        this.ErrorClick=this.ErrorClick.bind(this)
        this.ChangePassword=this.ChangePassword.bind(this);
        this.ChangeUserName=this.ChangeUserName.bind(this);
        this.LoginClick=this.LoginClick.bind(this);
    }

    SuccessClick(){
        this.setState({
            msg:<SuccessComponent />
        })
    }
    ErrorClick(){
        this.setState({
            msg:<ErrorComponent />
        })
    }

    ChangeUserName(e){
        this.setState({
            UserName:e.target.value,
            Password:this.state.Password
        })
    }

    ChangePassword(e){
        this.setState({
            UserName:this.state.UserName,
            Password:e.target.value
        })
    }
    LoginClick(){
       if(this.state.UserName=='john' && this.state.Password=='john@123'){
          this.setState({
            msg: <SuccessComponent />
          })
       }
       else{
        this.setState({
            msg: <ErrorComponent />
        })
       }
    }

    render(){
        return(
            <div className="container mt-4">
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" onChange={this.ChangeUserName} name="UserName" />
                     </dd>                     
                     <dt>Password</dt>
                     <dd>
                        <input type="password" onChange={this.ChangePassword} name="Password" />
                     </dd>
                     <button onClick={this.LoginClick}>Login</button>
                </dl>
                  {/* <button onClick={this.SuccessClick}>Success</button>
                  <button onClick={this.ErrorClick}>Error</button> */}
                  <div>
                    <p>{this.state.msg}</p>
                  </div>
            </div>
        )
    }
}


