import React, { useState } from "react";
import { Query, graphql } from "react-apollo";

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
const LoginPortal = ({
  show,
  client,
  setShow,
  users,
  loading,
  handleLogin
}) => {
  const [count, setCount] = useState(0);

  let username, password;
  const handleSubmit = e => {
    e.preventDefault();
    setCount(count + 1);
    console.log(count);
    handleLogin(client, username, password, users);
  };
  return (
    <div>
      <Query query={GET_USER}>
        {({ client, loading, error, data }) => {
          if (loading) return <h3>login</h3>;
          if (error) return <Error code="502" />;
          return (
            <div className="">
              {data.getUsers ? setShow(false) : null}
              <h1>Logueate</h1>
              <form
                action="post"
                onSubmit={e => {
                  handleSubmit(e);
                }}
              >
                <label htmlFor="username">username:</label>
                <input
                  type="text"
                  ref={input => {
                    username = input;
                  }}
                  placeholder="username"
                />
                <label htmlFor="password">password:</label>
                <input
                  type="password"
                  ref={input => {
                    password = input;
                  }}
                  placeholder="password"
                />
                <input type="submit" />
              </form>

              <p className="message">{message}</p>
            </div>
          );
        }}
      </Query>

      <style jsx>
        {`
          .message {
            color: red;
            font-size: 0.6rem;
            display: ${count < 1 ? "none" : "inline"};
          }
          div {
            height: 100vh;
            left: 0;
            top: 0;
            width: 100vw;
            position: fixed;
            z-index: 100000000;
            background: white;
            display: ${show ? "block" : "none"};
          }
        `}
      </style>
    </div>
  );
};

export default LoginPortal;
