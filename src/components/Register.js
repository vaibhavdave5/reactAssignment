import React from 'react'


const Register = ({doRegister}) =>
    <div>
        <form>
            <div className="form-group">
                <label htmlFor="email">Username address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="emailHelp"
                       placeholder="Password" />
            </div>

            <button type="button" onClick={() => doRegister(document.getElementById("email"),
                                                            document.getElementById("password"))}
                                                            className="btn btn-primary">Submit</button>
        </form>
    </div>
export default Register;