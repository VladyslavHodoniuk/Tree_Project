import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-wrapper_item">
                <span className='span-article'>Big tree shop</span>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>FAQ</li>
                        <li>Поддержка</li>
                        <li>Правила магазина</li>
                        <li>Отзывы клиентов</li>
                        <li>Магазин</li>
                        <li>Блог</li>
                        <li>Menus</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;