import React from 'react'


const Register = ({doRegister}) =>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">

            <form>
                <h1>Register</h1>
                <div className="form-group">
                <label htmlFor="email">Username</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter UserName" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="emailHelp"
                       placeholder="Password" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">First name</label>
                <input type="text" className="form-control" id="fname" aria-describedby="emailHelp"
                       placeholder="First Name" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input type="text" className="form-control" id="lname" aria-describedby="emailHelp"
                       placeholder="Last Name" />
            </div>

            <button type="button" onClick={() => doRegister(document.getElementById("email"),
                                                            document.getElementById("password"),
                                                            document.getElementById("fname"),
                                                            document.getElementById("lname"))}
                                                            className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
export default Register;