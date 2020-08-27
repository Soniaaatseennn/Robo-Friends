import React from 'react';
import './Login.css';




class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            message: ""
        }


    }


    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefualt();

        if (this.state.name === 'Sonia' & this.state.password === '1234') {
            this.setState({ message: 'Successful!!' })
            return;
        }
        this.setState({ message: 'Unsucessful' })

    }


    render() {
        return (
            <div className='login-form'>
                {this.state.name}
                {this.state.password}
                <h1 className="red">{this.state.message}</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' placeholder='name' onChange={this.onNameChange} />
                    <input type='password' placeholder='password' onChange={this.onPasswordChange} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
export default Login