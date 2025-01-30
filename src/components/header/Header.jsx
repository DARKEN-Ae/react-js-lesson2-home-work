import React, { Component } from 'react';
import "./Header.scss";
import HeaderLogo from "../assets/icon/logo.svg";

export class Header extends Component {
  render() {
    return (
     <div className="header-section">
       <div className="container">
        <header>
          <img className='header-logo' src={HeaderLogo} alt="haederLogo" />
          <nav>
            <ul>
              <li><a href="/">Продукция</a></li>
              <hr />
              <li><a href="/">Сертификаты</a></li>
              <hr />
              <li><a href="/">Наша команда</a></li>
              <hr />
              <li><a href="/">О нас</a></li>
              <hr />
              <li><a href="/">Новости</a></li>
              <hr />
              <li><a href="/">Вакансии</a></li>
              <hr />
              <li><a href="/">Контакты</a></li>
            </ul>
          </nav>
          <div className="translate">
            <button>RU</button>
            <hr />
            <button>EN</button>
          </div>
        </header>
      </div>
     </div>
    )
  }
}

export default Header