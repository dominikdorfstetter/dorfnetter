import * as React from 'react'
// @ts-ignore
import Logo from '@app/assets/images/dorfnetter_logo.svg';
import './header.scss';

const Header = () => (
    <>
        <header>
            <img className="logo displayed" alt={"logo"} src={Logo} height="60" width="auto"/>
        </header>
    </>
);

export default Header;
