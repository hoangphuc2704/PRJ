import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderCom.css';

export default class HeaderCom extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Thay mx-auto bằng ms-auto để căn về bên trái */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active custom-active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
