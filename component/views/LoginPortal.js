import React, { useState } from "react";
import { Query, graphql } from "react-apollo";
import { Router } from "../../routes";

import gql from "graphql-tag";
const GET_USER = gql`
  {
    getUsers {
      _id
      username
      password
    }
  }
`;
let message = "wrong username or password";
const LoginPortal = ({ show, client, setShow }) => {
  const [count, setCount] = useState(0);

  let username, password;

  const handleLogin = async () => {
    localStorage.setItem("usuario", username.value.toLowerCase());
    localStorage.setItem("password", password.value);
    await client.resetStore();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await handleLogin();
    await client
      .query({
        query: GET_USER
      })
      .then(result => {
        if (result.data.getUsers) {
          setShow(false);
          setCount(0);
        } else {
          setCount(3);
        }

        return null;
      });
  };
  return (
    <div>
      <div className="portal">
        <div className="login-container">
          <div
            onClick={() => {
              setShow(false);
            }}
            className="exit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="18"
              height="18"
              fill="#000000"
            >
              <path d="M 3 0 L 3 5 C 3.003906 5.527344 3.21875 6.035156 3.59375 6.40625 L 10.1875 13 L 3.59375 19.59375 C 3.21875 19.964844 3.003906 20.472656 3 21 L 3 26 L 7 26 L 7 21.8125 L 13 15.8125 L 19 21.8125 L 19 26 L 23 26 L 23 21 C 22.996094 20.472656 22.78125 19.964844 22.40625 19.59375 L 15.8125 13 L 22.40625 6.40625 C 22.78125 6.035156 22.996094 5.527344 23 5 L 23 0 L 19 0 L 19 4.1875 L 13 10.1875 L 7 4.1875 L 7 0 Z" />
            </svg>
          </div>

          <h1>Login</h1>
          <form
            action="POST"
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <div className="login-form">
              <div className="username">
                <label htmlFor="username">username:</label>
                <input
                  type="text"
                  ref={input => {
                    username = input;
                  }}
                  placeholder="username"
                />
              </div>
              <div className="password">
                <label htmlFor="password">password:</label>
                <input
                  type="password"
                  ref={input => {
                    password = input;
                  }}
                  placeholder="password"
                />
              </div>
            </div>

            <input className="btn" type="submit" />
          </form>

          <p className="message">{message}</p>
        </div>
      </div>

      <style jsx>
        {`
          h1 {
            color: black;
            font-size: 1.5em;
            text-transform: uppercase;
          }
          .exit {
            position: absolute;
            right: 5px;
            top: 5px;
            font-size: 1.5rem;
          }
          input {
            padding: 0.5em;
            border: 0;
            margin: 0.8em 0.4em;
          }
          .btn {
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 3em;
            background: #db415d;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            flex-wrap: nowrap;
            width: 100%;
          }
          .message {
            color: red;
            font-size: 0.6rem;
            display: ${count < 1 ? "none" : "inline"};
          }
          .portal {
            height: 100vh;

            left: 0;
            top: 0;
            width: 100vw;
            position: fixed;
            z-index: 100000000;
            background: rgba(0, 0, 0, 0.4);
            display: ${show ? "block" : "none"};
          }
          .login-form {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .login-container {
            background: white;
            margin: 10% auto;
            padding: 30px;
            position: relative;
            max-width: 400px;
          }
          .exit svg:hover {
            cursor: pointer;
            fill: red;
          }
          @media (min-width: 660px) {
            .login-form {
              flex-direction: row;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoginPortal;
