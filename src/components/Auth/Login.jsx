import { useState } from "react";
import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }

    if (!password) {
      toast.error("Invalid Password");
      return;
    }

    setIsLoading(true);

    // submit API
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(true);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e && e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        {" "}
        <span>Don't have an account yet?</span>{" "}
        <button onClick={() => navigate("/register")}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">Ask IT</div>
      <div className="welcome col-4 mx-auto">Hello, who's this ?</div>
      <div className="content-form col-4 mx-auto">
        <div className="from-group  ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="from-group  ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        <span className="forgot-password">Forgot password</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && <ImSpinner10 className="loader-icon" />}

            <span>Login</span>
          </button>
        </div>
        <div className="text-center">
          <span onClick={() => navigate("/")} className="back">
            {" "}
            &#60;&#60; Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
