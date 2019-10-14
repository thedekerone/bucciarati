import React from "react";

const Login = ({ username }) => {
  return (
    <div className="login">
      <img src="/static/icons/user-icon.png" width="40px" alt="" />
      <h3 className="login">Hello! {localStorage.getItem("usuario")}</h3>
      <style jsx>
        {`
          .login {
            text-align: center;
          }
          .login h3 {
            margin: 0;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
