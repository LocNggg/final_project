import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL_AUTH } from "../../utils/api";
import { login, loginSuccess } from "../../redux/actions/auth";
import "./Login.css"

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
        };
        dispatch(login());
        try {
            const { data: res } = await axios.post(`${BASE_URL_AUTH}/login`, user);
            // send token to redux store
            dispatch(loginSuccess({ accessToken: res.accessToken, userId: res._id }));
            window.location.href = "/home";
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="auth-wrapper">
            <div className='auth-inner'>
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div className='input-box'>
                        <label>Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="submit" name="" value="Log in" />
                    </div>
                    <div className="register-text">
                        <span>Don't have an account? </span>
                        <a href="/register">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
