import React from 'react'
import { Router } from '../routes'
import { Link } from '../routes'
import Login from './views/Login'

export default function SideBar({ setShow, show, client }) {
  const handleLogout = async () => {
    await localStorage.removeItem('usuario')
    await localStorage.removeItem('password')
    await Router.pushRoute('/')
    client.resetStore()
  }
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        {localStorage.getItem('usuario') ? <Login /> : null}
        <Link route='producto' params={{ tag: '' }}>
          <a className='sidebar-list__item'>
            <p>Accesorios</p>
          </a>
        </Link>
        <Link route='producto' params={{ tag: '' }}>
          <a className='sidebar-list__item'>
            <p>Atencion</p>
          </a>
        </Link>
        {!localStorage.getItem('usuario') ? (
          <Link route='producto' params={{ tag: '' }}>
            <a className='sidebar-list__item'>
              <p>Login</p>
            </a>
          </Link>
        ) : (
          <Link route='/'>
            <a
              onClick={() => {
                setShow(!show)
                handleLogout()
              }}
              className='sidebar-list__item logout'
            >
              <p>Logout</p>
            </a>
          </Link>
        )}
      </ul>
      <style jsx>
        {`
          .logout p {
            color: red;
          }
          .sidebar {
            position: fixed;
            top: 58.73px;
            right: ${show ? '0%' : '-100%'};
            transition: 0.4s;
            height: calc(100vh - 58.73px);
            width: 100%;
            z-index: 4;
            max-width: 600px;
            background: white;
          }
          .sidebar-list {
            list-style: none;
            padding: 0;
          }
          .sidebar-list__item {
            padding: 1em 0.4em;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
