import { useState } from "react";
import axios from "axios";
import { BASE_URL_AUTH } from "../../utils/api";


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                username,
                password,
                firstname,
                lastname,
                location,
                phone,
                email,
            };
            const res = await axios.post(`${BASE_URL_AUTH}/register`, newUser);
            window.location.href = "login";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="input-box" >
                        <label>Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input type="submit" name="" value="Sign up" />
                    </div>
                    <div className="login-text">
                        <span>Already registered? </span>
                        <a href="/login">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
