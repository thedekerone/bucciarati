import React from "react";
import { Link } from "../routes";

export default function SideBar({ show }) {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link route="producto" params={{ tag: "" }}>
          <a className="sidebar-list__item">
            <p>Accesorios</p>
          </a>
        </Link>{" "}
        <Link route="producto" params={{ tag: "" }}>
          <a className="sidebar-list__item">
            <p>Atencion</p>
          </a>
        </Link>{" "}
        <Link route="producto" params={{ tag: "" }}>
          <a className="sidebar-list__item">
            <p>Login</p>
          </a>
        </Link>{" "}
        <Link route="producto" params={{ tag: "" }}>
          <a className="sidebar-list__item">
            <p>Contactanos</p>
          </a>
        </Link>
      </ul>
      <style jsx>
        {`
          .sidebar {
            position: fixed;
            right: ${show ? "0%" : "-100%"};
            transition: 0.4s;
            height: calc(100vh - 55px);
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
  );
}
