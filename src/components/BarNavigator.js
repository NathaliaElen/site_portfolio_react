import React, { useEffect, useState } from 'react';
import '../css/BarNavigator.css';

const BarNavigator = () => {
    // Adicionar um botão de alternância
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // fim menu hamburguer

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 20) {
                    navbar.classList.add('sticky');
                } else {
                    navbar.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar sticky" aria-label="Barra de navegação">
            <header>
                <div className="largura-maxima">
                    <div className="logo">
                        <a href="#sobre">Nath<span>ália</span></a>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Alternar menu">
                        ☰
                    </button>
                    <ul className={`menu ${menuOpen ? 'menu-open' : ''}`} role="menu">
                        <li role="menuitem"><a href="#inicio">Home</a></li>
                        <li role="menuitem"><a href="#sobre">Sobre</a></li>
                        <li role="menuitem"><a href="#certificacoes">Certificações</a></li>
                        <li role="menuitem"><a href="#habilidades">Habilidades</a></li>
                        <li role="menuitem"><a href="#projetos">Projetos</a></li>
                        <li role="menuitem"><a href="#contatos">Contato</a></li>
                    </ul>
                </div>
            </header>
        </nav>
    );
};

export default BarNavigator;

