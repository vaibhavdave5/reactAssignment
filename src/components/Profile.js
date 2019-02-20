import React from 'react'


const Profile = ({user, update}) =>
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
            <h1>PROFILE</h1>
            <small><p>Place holders indicate the current value of User's profile <br/>
                      Keeping the placeholder as it is will be deemed as empty field <br/>
                      Please refill all the values again.
            </p></small>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input type="text"   className="form-control" id="email" aria-describedby="emailHelp"
                           placeholder={user.username} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="password"  className="form-control" id="password" aria-describedby="emailHelp"
                           placeholder={user.password} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp"
                           placeholder={user.firstName} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" id="lname" aria-describedby="emailHelp"
                           placeholder={user.lastName} />
                </div>

                <button type="button" onClick={() => update(document.getElementById("email"),
                    document.getElementById("password"),
                    document.getElementById("fname"),
                    document.getElementById("lname")
                )}
                        className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
export default Profile;