import React from "react";

const Login = ({ username }) => {
  return (
    <div className="login">
      <img src="/static/icons/user-icon.png" width="20px" alt="" />
      <h3 className="login">Hello! {username}</h3>
      <style jsx>
        {`
          .login {
            text-align: center;
          }
          .login h3 {
            margin: 0;
            font-size: 0.6rem;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
