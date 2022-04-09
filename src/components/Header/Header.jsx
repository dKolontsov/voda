import React from "react";
import './Header.scss';
import logo from "../../Assets/img/logo.png"
import user from "../../Assets/img/user.png"

export default function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img width={50} height={50} src={logo} alt="logo"/>
                <div>
                    <h3>Садовый центр "Семена"</h3>
                    <p>Товары для сада и огорода</p>
                </div>
            </div>
            <div className="headerRight">
                <div className="user">
                    <p className="name">Иванов Иван Иванович</p>
                    <b className="post">Администратор</b>
                </div>
                <img width={32} height={32} src={user} alt= "user"/>
                <a href="#">Выйти</a>
            </div>
        </header>
    )
}