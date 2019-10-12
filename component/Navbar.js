import React, { useState } from "react";
import SideBar from './SideBar';
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import { Link, Router } from "../routes";
import Spinner from "./views/Spinner";
import Error from "./views/Error";
import Login from "./views/Login";
import LoginPortal from "./views/LoginPortal";
import RegisterPortal from "./views/RegisterPortal";
const Navbar = () => {
  const [
		sidebar,
		setSidebar
	] = useState(false);
	const handleClick = () => {
		setSidebar(!sidebar);
	};
  let textInput;
  const GET_USER = gql`
    {
      getUsers {
        _id
        username
        password
        bag{
          _id
								title
								image
								price
								tags
								discount
        }
      }
    }
  `;
  
  const [display, setDisplay] = useState(true);
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    Router.pushRoute("producto", { tag: textInput.value });
  };
  const handleLogout = async client => {
    await localStorage.removeItem("usuario");
    await localStorage.removeItem("password");
    await Router.pushRoute("/");
  };


 

  return (
    <React.Fragment>
      <div className="navbar-container">
        
        <div className="navbar">
          <div className="main-navbar">
            <div className="left-items">
              <div className="menu">
                <img
                  onClick={e => {
                    handleClick()
                  }}
                  className="icon-menu"
                  width="30px"
                  src="/static/icons/menu.svg"
                  alt="menu"
                />
              </div>
              <div className="logo">
                <Link route="/">
                  <a>
                    <img
                      className="main-navbar__title"
                      src="/static/logo2.webp"
                      width="100%"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <nav className="main-navbar__items">
              <ul>
                <li>
                  <Link route="producto" params={{ tag: "hombre" }}>
                    <a>Hombres</a>
                  </Link>
                </li>
                <li>
                  <Link route="producto" params={{ tag: "mujer" }}>
                    <a>Mujeres</a>
                  </Link>
                </li>
                <li>
                  <Link route="producto" params={{ tag: "niño" }}>
                    <a>Niños</a>
                  </Link>
                </li>
                <li>
                  <Link route="producto" params={{ tag: "" }}>
                    <a>Accesorios</a>
                  </Link>
                </li>
                <li>
                  <Link route="producto" params={{ tag: "" }}>
                    <a>Regalos</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="right-items">
              <div className="search">
                <span className="main-navbar__icon">
                  <form
                    onSubmit={e => {
                      handleSubmit(e);
                    }}
                  >
                    <input
                      type="search"
                      onFocus={() => {
                        setDisplay(false);
                      }}
                      ref={input => (textInput = input)}
                      onBlur={() => {
                        setDisplay(true);
                      }}
                      name="search"
                      id="search"
                      placeholder="Search"
                    />
                    <img
                      className="search-icon"
                      src="/static/icons/icons8-search.svg"
                      width="30px"
                      alt="search"
                    />
                  </form>
                </span>
              </div>
              <div className="login">
                <Query query={GET_USER}>
                  {({ client, loading, error, data }) => {
                    if (loading) return <h3>login</h3>;
                    if (error) return <h3>login</h3>;
                    return (
                      <div className="login">
			                <SideBar client={client} setShow={setSidebar} show={sidebar} />
                        <LoginPortal
                          client={client}
                          setShow={setShow}
                          show={show}
                          users={() => data.getUsers}
                        ></LoginPortal>
                        <RegisterPortal client={client}
                          setShow={setRegister}
                          show={register}
                          users={() => data.getUsers}></RegisterPortal>
                        {!data.getUsers ? (
                          <div className="login-container">

                          <h3
                            onClick={() => {
                              setShow(true);
                            }}
                            className='login-title'
                          >
                            login
                          </h3>
                          <h3
                            onClick={() => {
                              setRegister(true);
                            }}
                            className='login-register'
                          >
                            register
                          </h3>
                          </div>
                          
                        ) : (
                          <div
                            className="logged"
                            onClick={() => {
                              Router.pushRoute('/cart')
                              // handleLogout(client).then(() => {
                              //   client.resetStore();
                              // });
                            }}
                          >
                            <Login username={data.getUsers.username}></Login>
                            <div className="shopping-bag">
                              <img
                                width="50px"
                                src="/static/icons/icons8-shopping-bag.svg"
                                alt=""
                              />
                              <div className="shopping-bag__number">
                                <p>{data.getUsers.bag.length}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          p {
            font-size: 0.7rem;
          }
          .navbar-container {
            position: relative;
            width: 100%;
            height: 60px;
            box-sizing: border-box;
            overflow: hidden;
          }
          .navbar {
            width: 100%;
            background: white;
            position: fixed;
            z-index: 1000;
            box-sizing: border-box;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            z-index: 100;
          }
          .navbar h1 {
            margin: 0.5rem 0;
          }
          .main-navbar {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
          }
          .left-items {
            max-width: 270px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .right-items {
            display: flex;
            align-items: center;
            flex-shrink: 1;
            width: 100%;
          }
          .logo {
            display: ${display ? "flex" : "none"};
            align-items: flex-end;
            height: auto;
          }
          //   search
          .search {
            flex-shrink: 1;
            width: 100%;
          }
          form {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: flex-end;
            margin: 0 0.8em;
          }
          #search {
            padding: 0.6rem;
            border: 0;
            width: 100%;
            border-radius: 15px;
            background: #dee8ef;
            transition: 0.5s;
          }
          #search::placeholder {
            color: grey;
          }
          .search-icon {
            display: ${display ? "inline-block" : "none"};
          }
          .main-navbar__items {
            display: none;
          }
          .main-navbar__items li:hover a {
            color: #fd486b;
          }
          .main-navbar__icon {
            display: flex;
            align-item: center;
            justify-content: center;
            flex-grow: 1;
          }
          .main-navbar__title {
            color: #e84855;
            font-size: 1.2rem;
            width: 50px;
          }
          .categorias {
            display: flex;
            align-item: center;
            padding-right: 1rem;
          }
          .icon-menu {
            color: red;
            transition-property: width, opacity;
            transition-duration: 1s, 0s;
            display: ${display ? "block" : "none"};
          }
          //login
          .login {
            display: ${display ? "block" : "none"};
          }
          .login-container{
            box-sizing: border-box;
            display:flex;
          }
          .login-title,.login-register{
            font-weight: lighter;
            margin: 0 .4em;
            box-sizing: border-box;
            font-size: 1em;
          }
          .logged {
            display: flex;
            align-items: center;
            flex-shrink: 1;
            width: 100%;
          }
          .shopping-bag {
            position: relative;
          }
          .shopping-bag__number {
            width: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 14px;
            background: red;
            position: absolute;
            border-radius: 100%;
            right: 1px;
            bottom: 1px;
          }
          .shopping-bag__number p {
            margin: 0;
            font-size: 11px;
            font-weight: bold;
            color: white;
          }
          @media (min-width: 860px) {
            .logo {
              display: flex;
              width: 100%;
            }
            .left-items{
            width:100%;

            }
            .right-items {
              flex-shrink: initial;
              width: 100%;
              max-width: 270px;
            }
            .main-navbar__icon {
              flex-grow: 0;
            }
            .main-navbar__items {
              display: block;
            }
            #search {
              width: 120px;
            }
            .search-icon {
              display: none;
            }
            .main-navbar__items ul {
              display: flex;
              width: 380px;
              padding: 0;
              margin: 0;
              justify-content: space-between;
              align-items: center;
              height: 2rem;
            }
            .main-navbar__items a {
              font-size: 1.5em;
              color: black;
              letter-spacing: -1px;
            }
            .main-navbar__items ul li {
              list-style: none;
              font-size: 0.7rem;
            }
            .main-navbar__title {
              font-size: 1.7rem;
              width: 65px;
            }
            .login {
              display: block;
            }
            .icon-menu{
              display:block
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default Navbar;
