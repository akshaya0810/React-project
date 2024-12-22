import React, { Component } from 'react'
import "./Login.css"

export class Login extends Component {
    constructor(){
        super()
        this.state={
            Name:"",
            Email:"",
            Password:"",
            UserData:[]
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { Name, Email, Password } = this.state
        
        if (Name.trim() === "" || Email.trim() === "" || Password.trim()==="") {
            alert("Please fill all the fields")
            return
        }

        const data = { Name, Email, Password }
        this.setState((prev) => ({
            UserData: [...prev.UserData, data],
            Name: "",
            Email: "",
            Password:""

        }))
    }

    render() {
        const { Name, Email, Password, UserData } = this.state
        return (
            <div className='bcc'>
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={Name}
                            onChange={this.handleChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="Email"
                            value={Email}
                            onChange={this.handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="Password"
                            name="Password"
                            value={Password}
                            onChange={this.handleChange}
                            placeholder="Enter your Password"
                        />
                    </div>
                    <button type="submit" className="submittt-button">Add user</button>
                </form>

                {UserData.length > 0 && (
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            </div>
        )
    }
}

export default Login
